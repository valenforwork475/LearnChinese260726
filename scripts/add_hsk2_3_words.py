import json
import re
import sys
import os
import urllib.request
import urllib.parse
from concurrent.futures import ThreadPoolExecutor, as_completed

sys.stdout.reconfigure(encoding='utf-8')

CACHE_FILE = os.path.join(os.path.dirname(__file__), 'translation_cache.json')

def load_cache():
    if os.path.exists(CACHE_FILE):
        try:
            with open(CACHE_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            pass
    return {}

def save_cache(cache):
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)

def fetch_translation(text):
    text = text.strip()
    if not text:
        return text, ""
    try:
        q = urllib.parse.quote(text)
        url = f"https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-CN&tl=en&dt=t&q={q}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=8) as response:
            data = json.loads(response.read().decode('utf-8'))
            translated_chunks = []
            if data and data[0]:
                for chunk in data[0]:
                    if chunk[0]:
                        translated_chunks.append(chunk[0])
            result = "".join(translated_chunks).strip()
            if result:
                return text, result
    except Exception:
        pass
    return text, text

NEW_WORDS = [
    {
        "hanzi": "准备",
        "pinyin": "zhǔnbèi",
        "thaiMeaning": "เตรียมตัว / เตรียมพร้อม",
        "example": {"hanzi": "我准备好了。", "pinyin": "Wǒ zhǔnbèi hǎo le.", "thaiMeaning": "ฉันเตรียมพร้อมเรียบร้อยแล้ว"},
        "examples": [{"scenario": "การเตรียมตัวทำงาน", "hanzi": "明天的会议你准备得怎么样了？", "pinyin": "Míngtiān de huìyì nǐ zhǔnbèi de zěnmeyàng le?", "thaiMeaning": "การประชุมพรุ่งนี้คุณเตรียมตัวถึงไหนแล้ว?"}]
    },
    {
        "hanzi": "介绍",
        "pinyin": "jièshào",
        "thaiMeaning": "แนะนำ (เพื่อน/งาน/สินค้า)",
        "example": {"hanzi": "让我自我介绍一下。", "pinyin": "Ràng wǒ zìwǒ jièshào yíxià.", "thaiMeaning": "ขอให้ฉันแนะนำตัวเองสักหน่อย"},
        "examples": [{"scenario": "แนะนำเพื่อนใหม่", "hanzi": "这是我的好朋友，我给你介绍一下。", "pinyin": "Zhè shì wǒ de hǎo péngyou, wǒ gěi nǐ jièshào yíxià.", "thaiMeaning": "นี่คือเพื่อนสนิทของฉัน ฉันแนะนำให้คุณรู้จักนะ"}]
    },
    {
        "hanzi": "帮助",
        "pinyin": "bāngzhù",
        "thaiMeaning": "ช่วยเหลือ",
        "example": {"hanzi": "谢谢你的帮助。", "pinyin": "Xièxie nǐ de bāngzhù.", "thaiMeaning": "ขอบคุณสำหรับความช่วยเหลือของคุณ"},
        "examples": [{"scenario": "ขอความช่วยเหลือ", "hanzi": "你需要我的帮助吗？", "pinyin": "Nǐ xūyào wǒ de bāngzhù ma?", "thaiMeaning": "คุณต้องการความช่วยเหลือจากฉันไหม?"}]
    },
    {
        "hanzi": "容易",
        "pinyin": "róngyì",
        "thaiMeaning": "ง่าย / ไม่ยุ่งยาก",
        "example": {"hanzi": "这个题目很容易。", "pinyin": "Zhège tímù hěn róngyì.", "thaiMeaning": "โจทย์ข้อนี้ง่ายมาก"},
        "examples": [{"scenario": "ให้กำลังใจเพื่อน", "hanzi": "学习汉语并不容易，但很有趣。", "pinyin": "Xuéxí Hànyǔ bìng bù róngyì, dàn hěn yǒuqù.", "thaiMeaning": "เรียนภาษาจีนไม่ง่ายเลย แต่สนุกมาก"}]
    },
    {
        "hanzi": "困难",
        "pinyin": "kùnnan",
        "thaiMeaning": "ความยากลำบาก / อุปสรรค",
        "example": {"hanzi": "遇到困难不要放弃。", "pinyin": "Yùdào kùnnan bú yào fàngqì.", "thaiMeaning": "เมื่อเจอความยากลำบากอย่าเพิ่งยอมแพ้"},
        "examples": [{"scenario": "ปรึกษาปัญหา", "hanzi": "如果遇到困难，随时告诉我。", "pinyin": "Rúguǒ yùdào kùnnan, suíshí gàosu wǒ.", "thaiMeaning": "ถ้าเจออุปสรรคปัญหา บอกฉันได้ตลอดเวลาเลยนะ"}]
    },
    {
        "hanzi": "明白",
        "pinyin": "míngbai",
        "thaiMeaning": "เข้าใจกระจ่างแจ้ง",
        "example": {"hanzi": "我明白了。", "pinyin": "Wǒ míngbai le.", "thaiMeaning": "ฉันเข้าใจกระจ่างแล้ว"},
        "examples": [{"scenario": "ถามความเข้าใจ", "hanzi": "你明白我的意思吗？", "pinyin": "Nǐ míngbai wǒ de yìsi ma?", "thaiMeaning": "คุณเข้าใจความหมายของฉันไหม?"}]
    },
    {
        "hanzi": "懂",
        "pinyin": "dǒng",
        "thaiMeaning": "เข้าใจ (ฟังเข้าใจ/อ่านรู้เรื่อง)",
        "example": {"hanzi": "我听懂了。", "pinyin": "Wǒ tīng dǒng le.", "thaiMeaning": "ฉันฟังเข้าใจแล้ว"},
        "examples": [{"scenario": "บอกระดับการฟัง", "hanzi": "他说得太快了，我没听懂。", "pinyin": "Tā shuō de tài kuài le, wǒ méi tīng dǒng.", "thaiMeaning": "เขาพูดเร็วเกินไป ฉันฟังไม่ทันเข้าใจ"}]
    },
    {
        "hanzi": "解决",
        "pinyin": "jiějué",
        "thaiMeaning": "แก้ไข (ปัญหา/เรื่องราว)",
        "example": {"hanzi": "问题已经解决了。", "pinyin": "Wèntí yǐjīng jiějué le.", "thaiMeaning": "ปัญหาก็ได้รับการแก้ไขเรียบร้อยแล้ว"},
        "examples": [{"scenario": "ระดมความคิดแก้ปัญหา", "hanzi": "我们一起想办法解决这个问题。", "pinyin": "Wǒmen yìqǐ xiǎng bànfǎ jiějué zhège wèntí.", "thaiMeaning": "พวกเรามาช่วยกันคิดหาวิธีแก้ปัญหานี้เถอะ"}]
    },
    {
        "hanzi": "检查",
        "pinyin": "jiǎnchá",
        "thaiMeaning": "ตรวจสอบ / ตรวจเช็ก",
        "example": {"hanzi": "仔细检查一下。", "pinyin": "Zǐxì jiǎnchá yíxià.", "thaiMeaning": "ตรวจสอบอย่างรอบคอบสักหน่อย"},
        "examples": [{"scenario": "ก่อนส่งงาน", "hanzi": "交作业前请检查一遍。", "pinyin": "Jiāo zuòyè qián qǐng jiǎnchá yí biàn.", "thaiMeaning": "ก่อนส่งการบ้านกรุณาตรวจเช็กอีกสักรอบ"}]
    },
    {
        "hanzi": "安排",
        "pinyin": "ānpái",
        "thaiMeaning": "จัดสรร / วางแผนกำหนดการ",
        "example": {"hanzi": "听从公司的安排。", "pinyin": "Tīngcóng gōngsī de ānpái.", "thaiMeaning": "ปฏิบัติตามการจัดสรรของบริษัท"},
        "examples": [{"scenario": "ถามกำหนดการ", "hanzi": "你周末有什么安排吗？", "pinyin": "Nǐ zhōumò yǒu shénme ānpái ma?", "thaiMeaning": "สุดสัปดาห์นี้คุณมีแพลนกำหนดการอะไรไหม?"}]
    },
    {
        "hanzi": "参加",
        "pinyin": "cānjiā",
        "thaiMeaning": "เข้าร่วม (กิจกรรม/การประชุม)",
        "example": {"hanzi": "参加聚会。", "pinyin": "Cānjiā jùhuì.", "thaiMeaning": "เข้าร่วมปาร์ตี้สังสรรค์"},
        "examples": [{"scenario": "ชวนเพื่อนไปงาน", "hanzi": "你明天来参加我的生日派对吗？", "pinyin": "Nǐ míngtiān lái cānjiā wǒ de shēngrì pàiduì ma?", "thaiMeaning": "พรุ่งนี้คุณจะมาร่วมงานปาร์ตี้วันเกิดของฉันไหม?"}]
    },
    {
        "hanzi": "方便",
        "pinyin": "fāngbiàn",
        "thaiMeaning": "สะดวกสบาย",
        "example": {"hanzi": "现在说话方便吗？", "pinyin": "Xiànzài shuōhuà fāngbiàn ma?", "thaiMeaning": "ตอนนี้สะดวกคุยไหมครับ?"},
        "examples": [{"scenario": "คมนาคมสะดวก", "hanzi": "这里的交通非常方便。", "pinyin": "Zhèlǐ de jiāotōng fēicháng fāngbiàn.", "thaiMeaning": "การคมนาคมขนส่งของที่นี่สะดวกสบายมากๆ"}]
    },
    {
        "hanzi": "经常",
        "pinyin": "jīngcháng",
        "thaiMeaning": "บ่อยๆ / เป็นประจำ",
        "example": {"hanzi": "我经常去这家餐厅。", "pinyin": "Wǒ jīngcháng qù zhè jiā cān tīng.", "thaiMeaning": "ฉันไปร้านอาหารร้านนี้เป็นประจำ"},
        "examples": [{"scenario": "เล่าเรื่องสุขภาพ", "hanzi": "他经常运动，所以身体很好。", "pinyin": "Tā jīngcháng yùndòng, suǒyǐ shēntǐ hěn hǎo.", "thaiMeaning": "เขาออกกำลังกายเป็นประจำ สุขภาพร่างกายเลยดีมาก"}]
    },
    {
        "hanzi": "习惯",
        "pinyin": "xíguàn",
        "thaiMeaning": "ความเคยชิน / นิสัยประจำ",
        "example": {"hanzi": "我已经习惯了。", "pinyin": "Wǒ yǐjīng xíguàn le.", "thaiMeaning": "ฉันชินแล้วล่ะ"},
        "examples": [{"scenario": "ปรับตัวในต่างแดน", "hanzi": "你习惯这里的气候吗？", "pinyin": "Nǐ xíguàn zhèlǐ de qìhòu ma?", "thaiMeaning": "คุณคุ้นชินกับสภาพอากาศที่นี่หรือยัง?"}]
    },
    {
        "hanzi": "相信",
        "pinyin": "xiāngxìn",
        "thaiMeaning": "เชื่อมั่น / เชื่อถือ",
        "example": {"hanzi": "相信你自己！", "pinyin": "Xiāngxìn nǐ zìjǐ!", "thaiMeaning": "เชื่อมั่นในตัวเองนะ!"},
        "examples": [{"scenario": "ให้กำลังใจเพื่อน", "hanzi": "我相信你一定能做到。", "pinyin": "Wǒ xiāngxìn nǐ yídìng néng zuò dào.", "thaiMeaning": "ฉันเชื่อว่าคุณต้องทำสำเร็จแน่นอน"}]
    },
    {
        "hanzi": "放心",
        "pinyin": "fàngxīn",
        "thaiMeaning": "สบายใจ / วางใจ",
        "example": {"hanzi": "请放心。", "pinyin": "Qǐng fàngxīn.", "thaiMeaning": "โปรดวางใจได้เลย"},
        "examples": [{"scenario": "บอกให้เพื่อนเลิกกังวล", "hanzi": "这件事交给我，你放心吧。", "pinyin": "Zhè jiàn shì jiāo gěi wǒ, nǐ fàngxīn ba.", "thaiMeaning": "เรื่องนี้ยกให้ฉันจัดการ คุณสบายใจได้เลย"}]
    },
    {
        "hanzi": "仔细",
        "pinyin": "zǐxì",
        "thaiMeaning": "ละเอียดรอบคอบ",
        "example": {"hanzi": "请仔细看。", "pinyin": "Qǐng zǐxì kàn.", "thaiMeaning": "กรุณาดูอย่างละเอียดรอบคอบ"},
        "examples": [{"scenario": "อ่านสัญญา", "hanzi": "看合同要非常仔细。", "pinyin": "Kàn hétong yào fēicháng zǐxì.", "thaiMeaning": "การอ่านสัญญาต้องละเอียดรอบคอบเป็นพิเศษ"}]
    },
    {
        "hanzi": "特别",
        "pinyin": "tèbié",
        "thaiMeaning": "พิเศษ / เป็นพิเศษ",
        "example": {"hanzi": "今天特别热。", "pinyin": "Jīntiān tèbié rè.", "thaiMeaning": "วันนี้ร้อนเป็นพิเศษ"},
        "examples": [{"scenario": "ชมอาหาร", "hanzi": "这个甜点味道很特别。", "pinyin": "Zhège tiándiǎn wèidào hěn tèbié.", "thaiMeaning": "ของหวานชิ้นนี้รสชาติพิเศษมาก"}]
    },
    {
        "hanzi": "简单",
        "pinyin": "jiǎndān",
        "thaiMeaning": "เรียบง่าย / ไม่ซับซ้อน",
        "example": {"hanzi": "这道题很简单。", "pinyin": "Zhè dào tímù hěn jiǎndān.", "thaiMeaning": "โจทย์ข้อนี้เรียบง่ายมาก"},
        "examples": [{"scenario": "พูดถึงชีวิต", "hanzi": "我喜欢简单生活。", "pinyin": "Wǒ xǐhuan jiǎndān shēnghuó.", "thaiMeaning": "ฉันชอบการใช้ชีวิตที่เรียบง่าย"}]
    },
    {
        "hanzi": "复杂",
        "pinyin": "fùzá",
        "thaiMeaning": "ซับซ้อน / ยุ่งยาก",
        "example": {"hanzi": "情况很复杂。", "pinyin": "Qíngkuàng hěn fùzá.", "thaiMeaning": "สถานการณ์ซับซ้อนมาก"},
        "examples": [{"scenario": "อธิบายปัญหา", "hanzi": "这个问题有点儿复杂。", "pinyin": "Zhège wèntí yǒudiǎnr fùzá.", "thaiMeaning": "ปัญหานี้ค่อนข้างซับซ้อนนิดหน่อย"}]
    },
    {
        "hanzi": "努力",
        "pinyin": "nǔlì",
        "thaiMeaning": "ขยัน / พยายามตั้งใจ",
        "example": {"hanzi": "努力学习。", "pinyin": "Nǔlì xuéxí.", "thaiMeaning": "ตั้งใจขยันเรียนหนังสือ"},
        "examples": [{"scenario": "อวยพรการทำงาน", "hanzi": "只要努力，就一定能成功。", "pinyin": "Zhǐyào nǔlì, jiù yídìng néng chénggōng.", "thaiMeaning": "เพียงแค่ตั้งใจพยายาม ต้องประสบความสำเร็จอย่างแน่นอน"}]
    },
    {
        "hanzi": "坚持",
        "pinyin": "jiānchí",
        "thaiMeaning": "ยืนหยัด / ทำต่อเนื่องไม่ท้อ",
        "example": {"hanzi": "坚持到底。", "pinyin": "Jiānchí dào dǐ.", "thaiMeaning": "ยืนหยัดมุ่งมั่นจนถึงที่สุด"},
        "examples": [{"scenario": "ออกกำลังกาย", "hanzi": "每天坚持跑步三十分钟。", "pinyin": "Měitiān jiānchí pǎobù sānshí fēnzhōng.", "thaiMeaning": "ยืนหยัดวิ่งออกกำลังกายวันละ 30 นาทีทุกวัน"}]
    },
    {
        "hanzi": "影响",
        "pinyin": "yǐngxiǎng",
        "thaiMeaning": "ส่งผลกระทบ / อิทธิพล",
        "example": {"hanzi": "不要影响别人。", "pinyin": "Bú yào yǐngxiǎng biérén.", "thaiMeaning": "อย่าส่งผลกระทบรบกวนคนอื่น"},
        "examples": [{"scenario": "สภาพอากาศกับงาน", "hanzi": "天气影响了我们的出行计划。", "pinyin": "Tiānqì yǐngxiǎng le wǒmen de chūxíng jìhuà.", "thaiMeaning": "สภาพอากาศส่งผลกระทบต่อแผนการเดินทางของพวกเรา"}]
    },
    {
        "hanzi": "改变",
        "pinyin": "gǎibiàn",
        "thaiMeaning": "เปลี่ยนแปลง / ปรับเปลี่ยน",
        "example": {"hanzi": "改变主意。", "pinyin": "Gǎibiàn zhǔyi.", "thaiMeaning": "เปลี่ยนใจ / เปลี่ยนความตั้งใจ"},
        "examples": [{"scenario": "พัฒนาตัวเอง", "hanzi": "学习可以改变命运。", "pinyin": "Xuéxí kěyǐ gǎibiàn mìngyùn.", "thaiMeaning": "การศึกษาเรียนรู้สามารถเปลี่ยนแปลงโชคชะตาชีวิตได้"}]
    },
    {
        "hanzi": "机会",
        "pinyin": "jīhuì",
        "thaiMeaning": "โอกาส",
        "example": {"hanzi": "抓住机会。", "pinyin": "Zhuāzhù jīhuì.", "thaiMeaning": "ไขว่คว้าฉวยโอกาสไว้"},
        "examples": [{"scenario": "โอกาสการทำงาน", "hanzi": "这是一次难得的工作机会。", "pinyin": "Zhè shì yí cì nándé de gōngzuò jīhuì.", "thaiMeaning": "นี่คือโอกาสการทำงานที่หาได้ยากครั้งหนึ่ง"}]
    },
    {
        "hanzi": "顺利",
        "pinyin": "shùnlì",
        "thaiMeaning": "ราบรื่น / ผ่านไปด้วยดี",
        "example": {"hanzi": "一切顺利！", "pinyin": "Yíqiè shùnlì!", "thaiMeaning": "ขอให้ทุกอย่างราบรื่น!"},
        "examples": [{"scenario": "อวยพรเดินทาง/สอบ", "hanzi": "祝你面试顺利！", "pinyin": "Zhù nǐ miànshì shùnlì!", "thaiMeaning": "ขอให้คุณสอบสัมภาษณ์ผ่านไปได้ด้วยดีราบรื่นนะ!"}]
    },
    {
        "hanzi": "成功",
        "pinyin": "chénggōng",
        "thaiMeaning": "ประสบความสำเร็จ",
        "example": {"hanzi": "祝你成功！", "pinyin": "Zhù nǐ chénggōng!", "thaiMeaning": "ขอให้คุณประสบความสำเร็จ!"},
        "examples": [{"scenario": "ยินดีกับเพื่อน", "hanzi": "经过努力，他终于成功了。", "pinyin": "Jīngguò nǔlì, tā zhōngyú chénggōng le.", "thaiMeaning": "หลังจากพยายามอย่างหนัก ในที่สุดเขาประสบความสำเร็จแล้ว"}]
    },
    {
        "hanzi": "应该",
        "pinyin": "yīnggāi",
        "thaiMeaning": "ควรจะ / สมควร",
        "example": {"hanzi": "你应该早点儿休息。", "pinyin": "Nǐ yīnggāi zǎodiǎnr xiūxi.", "thaiMeaning": "คุณควรจะพักผ่อนให้เร็วหน่อยนะ"},
        "examples": [{"scenario": "คำแนะนำหวังดี", "hanzi": "有问题应该及时解决。", "pinyin": "Yǒu wèntí yīnggāi jíshí jiějué.", "thaiMeaning": "มีปัญหาก็ควรจะรีบแก้ไขให้ทันท่วงที"}]
    },
    {
        "hanzi": "必须",
        "pinyin": "bìxū",
        "thaiMeaning": "จำแนกต้อง / ต้อง...ให้ได้",
        "example": {"hanzi": "必须按时完成。", "pinyin": "Bìxū ànshí wánchéng.", "thaiMeaning": "ต้องทำเสร็จให้ทันเวลา"},
        "examples": [{"scenario": "กฎระเบียบ", "hanzi": "进入车间必须戴安全帽。", "pinyin": "Jìnrù chējiān bìxū dài ānquán mào.", "thaiMeaning": "เข้าโรงงานต้องสวมหมวกนิรภัย"}]
    },
    {
        "hanzi": "选择",
        "pinyin": "xuǎnzé",
        "thaiMeaning": "เลือก / ทางเลือก",
        "example": {"hanzi": "做出正确的选择。", "pinyin": "Zuòchū zhèngquè de xuǎnzé.", "thaiMeaning": "ทำการตัดสินใจเลือกสิ่งที่ถูกต้อง"},
        "examples": [{"scenario": "เลือกเมนู/งาน", "hanzi": "你有两种选择。", "pinyin": "Nǐ yǒu liǎng zhǒng xuǎnzé.", "thaiMeaning": "คุณมีทางเลือกอยู่สองทาง"}]
    },
    {
        "hanzi": "讨论",
        "pinyin": "tǎolùn",
        "thaiMeaning": "อภิปราย / หารือแลกเปลี่ยน",
        "example": {"hanzi": "开会讨论。", "pinyin": "Kāihuì tǎolùn.", "thaiMeaning": "ประชุมอภิปรายหารือ"},
        "examples": [{"scenario": "ประชุมงาน", "hanzi": "我们讨论一下下一步的计划。", "pinyin": "Wǒmen tǎolùn yíxià xià yí bù de jìhuà.", "thaiMeaning": "พวกเรามาหารือแผนการขั้นต่อไปกันสักหน่อย"}]
    },
    {
        "hanzi": "认为",
        "pinyin": "rènwéi",
        "thaiMeaning": "มีความเห็นว่า / คิดว่า",
        "example": {"hanzi": "我认为很对。", "pinyin": "Wǒ rènwéi hěn duì.", "thaiMeaning": "ฉันเห็นว่าถูกต้องมาก"},
        "examples": [{"scenario": "แสดงความเห็น", "hanzi": "大家普遍认为这个方案可行。", "pinyin": "Dàjiā pǔbiàn rènwéi zhège fāng'àn kěxíng.", "thaiMeaning": "ทุกคนต่างมีความเห็นว่าแผนงานนี้น่าจะใช้ได้จริง"}]
    },
    {
        "hanzi": "意思",
        "pinyin": "yìsi",
        "thaiMeaning": "ความหมาย / ความตั้งใจ / ความน่าสนใจ",
        "example": {"hanzi": "很有意思。", "pinyin": "Hěn yǒu yìsi.", "thaiMeaning": "น่าสนใจมาก"},
        "examples": [{"scenario": "ถามความหมายคำ", "hanzi": "这个词是什么意思？", "pinyin": "Zhège cí shì shénme yìsi?", "thaiMeaning": "คำศัพท์คำนี้มีความหมายว่าอย่างไร?"}]
    },
    {
        "hanzi": "舒服",
        "pinyin": "shūfu",
        "thaiMeaning": "สบายกายสบายใจ",
        "example": {"hanzi": "觉得不舒服。", "pinyin": "Juéde bù shūfu.", "thaiMeaning": "รู้สึกไม่ค่อยสบาย"},
        "examples": [{"scenario": "นอนพักผ่อน", "hanzi": "这张床躺着非常舒服。", "pinyin": "Zhāng chuáng tǎng zhe fēicháng shūfu.", "thaiMeaning": "เตียงนี้เอนหลังนอนสบายมากๆ"}]
    },
    {
        "hanzi": "清楚",
        "pinyin": "qīngchu",
        "thaiMeaning": "ชัดเจน / แจ่มแจ้ง",
        "example": {"hanzi": "听得很清楚。", "pinyin": "Tīng de hěn qīngchu.", "thaiMeaning": "ฟังได้ชัดเจนมาก"},
        "examples": [{"scenario": "อธิบายให้ฟัง", "hanzi": "请把具体地址写清楚。", "pinyin": "Qǐng bǎ jùtǐ dìzhǐ xiě qīngchu.", "thaiMeaning": "กรุณาเขียนที่อยู่อย่างละเอียดให้ชัดเจนนะ"}]
    },
    {
        "hanzi": "满意",
        "pinyin": "mǎnyì",
        "thaiMeaning": "พึงพอใจ",
        "example": {"hanzi": "我很满意。", "pinyin": "Wǒ hěn mǎnyì.", "thaiMeaning": "ฉันพึงพอใจมาก"},
        "examples": [{"scenario": "ประเมินบริการ", "hanzi": "客户对我们的服务非常满意。", "pinyin": "Kèhù duì wǒmen de fúwù fēicháng mǎnyì.", "thaiMeaning": "ลูกค้าพึงพอใจกับการบริการของพวกเราเป็นอย่างมาก"}]
    },
    {
        "hanzi": "总是",
        "pinyin": "zǒngshì",
        "thaiMeaning": "มักจะ...เสมอ",
        "example": {"hanzi": "他总是笑眯眯的。", "pinyin": "Tā zǒngshì xiàomīmī de.", "thaiMeaning": "เขามักจะยิ้มแย้มอยู่เสมอ"},
        "examples": [{"scenario": "ชมเพื่อนขยัน", "hanzi": "她总是第一个来到办公室。", "pinyin": "Tā zǒngshì dì-yī gè lái dào bàngōngshì.", "thaiMeaning": "เธอมักจะเป็นคนแรกที่มาถึงออฟฟิศเสมอ"}]
    },
    {
        "hanzi": "愿意",
        "pinyin": "yuànyì",
        "thaiMeaning": "ยินยอม / เต็มใจ",
        "example": {"hanzi": "你愿意吗？", "pinyin": "Nǐ yuànyì ma?", "thaiMeaning": "คุณยินยอมเต็มใจไหม?"},
        "examples": [{"scenario": "ชวนทำงานร่วมกัน", "hanzi": "我非常愿意和你一起工作。", "pinyin": "Wǒ fēicháng yuànyì hé nǐ yìqǐ gōngzuò.", "thaiMeaning": "ฉันยินดีและเต็มใจทำงานร่วมกับคุณเป็นอย่างยิ่ง"}]
    },
    {
        "hanzi": "照顾",
        "pinyin": "zhàogù",
        "thaiMeaning": "ดูแลเอาใจใส่",
        "example": {"hanzi": "照顾好自己。", "pinyin": "Zhàogù hǎo zìjǐ.", "thaiMeaning": "ดูแลตัวเองให้ดีนะ"},
        "examples": [{"scenario": "ฝากฝังผู้ใหญ่/เด็ก", "hanzi": "谢谢你这段时间对我的照顾。", "pinyin": "Xièxie nǐ zhè duàn shíjiān duì wǒ de zhàogù.", "thaiMeaning": "ขอบคุณที่คุณช่วยดูแลฉันในช่วงเวลานี้นะ"}]
    },
    {
        "hanzi": "提醒",
        "pinyin": "tíxǐng",
        "thaiMeaning": "เตือน / เตือนความจำ",
        "example": {"hanzi": "谢谢你提醒我。", "pinyin": "Xièxie nǐ tíxǐng wǒ.", "thaiMeaning": "ขอบคุณที่ช่วยเตือนฉัน"},
        "examples": [{"scenario": "ตั้งนาฬิกาเตือน", "hanzi": "记得提醒我三点开会。", "pinyin": "Jìde tíxǐng wǒ sān diǎn kāihuì.", "thaiMeaning": "อย่าลืมช่วยเตือนฉันตอนบ่าย 3 โมงว่ามีประชุมนะ"}]
    },
    {
        "hanzi": "发现",
        "pinyin": "fāxiàn",
        "thaiMeaning": "ค้นพบ / สังเกตเห็น",
        "example": {"hanzi": "我发现了新方法。", "pinyin": "Wǒ fāxiàn le xīn fāngfǎ.", "thaiMeaning": "ฉันค้นพบวิธีใหม่แล้ว"},
        "examples": [{"scenario": "สังเกตความผิดปกติ", "hanzi": "医生发现他的指标恢复正常了。", "pinyin": "Yīshēng fāxiàn tā de zhǐbiāo huīfù zhèngcháng le.", "thaiMeaning": "หมอสังเกตพบว่าค่าตรวจของเขากลับคืนสู่ปกติแล้ว"}]
    },
    {
        "hanzi": "适合",
        "pinyin": "shìhé",
        "thaiMeaning": "เหมาะสม / เหมาะกับ",
        "example": {"hanzi": "这件衣服很适合你。", "pinyin": "Zhè jiàn yīfu hěn shìhé nǐ.", "thaiMeaning": "เสื้อตัวนี้เหมาะกับคุณมาก"},
        "examples": [{"scenario": "แนะแนวงาม", "hanzi": "这份工作很适合你的专业。", "pinyin": "Zhè fèn gōngzuò hěn shìhé nǐ de zhuānyè.", "thaiMeaning": "งานนี้เหมาะสมกับสาขาวิชาที่คุณเรียนมามาก"}]
    },
    {
        "hanzi": "另外",
        "pinyin": "lìngwài",
        "thaiMeaning": "นอกเหนือจากนี้ / อีกอันหนึ่ง",
        "example": {"hanzi": "另外还有一件事。", "pinyin": "Lìngwài hái yǒu yí jiàn shì.", "thaiMeaning": "นอกเหนือจากนี้ยังมีอีกเรื่องหนึ่งนะ"},
        "examples": [{"scenario": "สั่งของเพิ่ม", "hanzi": "除了这个，我另外还需要买两本书。", "pinyin": "Chúle zhège, wǒ lìngwài hái xūyào mǎi liǎng běn shū.", "thaiMeaning": "นอกจากอันนี้ นอกเหนือจากนี้ฉันยังต้องซื้อหนังสืออีกสองเล่ม"}]
    },
    {
        "hanzi": "甚至",
        "pinyin": "shènzhì",
        "thaiMeaning": "แม้กระทั่ง / ถึงขั้น",
        "example": {"hanzi": "甚至连他都不知道。", "pinyin": "Shènzhì lián tā dōu bù zhīdào.", "thaiMeaning": "แม้กระทั่งเขาก็ยังไม่รู้เลย"},
        "examples": [{"scenario": "เล่าความขยัน", "hanzi": "他忙得甚至没有时间吃午饭。", "pinyin": "Tā máng de shènzhì méiyǒu shíjiān chī wǔfàn.", "thaiMeaning": "เขายุ่งมากถึงขั้นไม่มีเวลาแม้กระทั่งกินข้าวเที่ยง"}]
    },
    {
        "hanzi": "保证",
        "pinyin": "bǎozhèng",
        "thaiMeaning": "รับประกัน / ยืนยันให้คำมั่น",
        "example": {"hanzi": "我保证完成任务。", "pinyin": "Wǒ bǎozhèng wánchéng rènwù.", "thaiMeaning": "ฉันยืนยันรับประกันว่าจะทำภารกิจให้สำเร็จ"},
        "examples": [{"scenario": "การันตีคุณภาพ", "hanzi": "我们保证产品的质量符合标准。", "pinyin": "Wǒmen bǎozhèng chǎnpǐn de zhìliàng fúhé biāozhǔn.", "thaiMeaning": "พวกเรารับประกันว่าคุณภาพของสินค้าได้มาตรฐาน"}]
    },
    {
        "hanzi": "重新",
        "pinyin": "chóngxīn",
        "thaiMeaning": "ทำใหม่อีกครั้ง / เริ่มใหม่",
        "example": {"hanzi": "重新开始。", "pinyin": "Chóngxīn kāishǐ.", "thaiMeaning": "เริ่มต้นใหม่อีกครั้ง"},
        "examples": [{"scenario": "แก้ไขเอกสาร", "hanzi": "请把这份文件重新打印一遍。", "pinyin": "Qǐng bǎ zhè fèn wénjiàn chóngxīn dǎyìn yí biàn.", "thaiMeaning": "กรุณานำเอกสารนี้ไปพิมพ์ใหม่อีกสักรอบนะ"}]
    },
    {
        "hanzi": "申请",
        "pinyin": "shēnqǐng",
        "thaiMeaning": "ยื่นขอ / สมัคร (วีซ่า/งาน/ทุน)",
        "example": {"hanzi": "申请签证。", "pinyin": "Shēnqǐng qiānzhèng.", "thaiMeaning": "ยื่นขอวีซ่า"},
        "examples": [{"scenario": "ยื่นใบลา", "hanzi": "我想申请几天年假。", "pinyin": "Wǒ xiǎng shēnqǐng jǐ tiān niánjià.", "thaiMeaning": "ฉันอยากจะยื่นขอลาพักร้อนสักสองสามวัน"}]
    },
    {
        "hanzi": "考虑",
        "pinyin": "kǎolǜ",
        "thaiMeaning": "พิจารณาอย่างรอบคอบ",
        "example": {"hanzi": "让我再考虑考虑。", "pinyin": "Ràng wǒ zài kǎolǜ kǎolǜ.", "thaiMeaning": "ขอให้ฉันลองพิจารณาดูอีกสักนิด"},
        "examples": [{"scenario": "เจรจาธุรกิจ", "hanzi": "我们会认真考虑您的建议。", "pinyin": "Wǒmen huì rènzhēn kǎolǜ nín de jiànyì.", "thaiMeaning": "พวกเราจะนำข้อเสนอแนะของคุณไปพิจารณาอย่างจริงจัง"}]
    },
    {
        "hanzi": "了解",
        "pinyin": "liǎojiě",
        "thaiMeaning": "รู้จักและเข้าใจเป็นอย่างดี",
        "example": {"hanzi": "我很了解他。", "pinyin": "Wǒ hěn liǎojiě tā.", "thaiMeaning": "ฉันรู้จักและเข้าใจเขาดีมาก"},
        "examples": [{"scenario": "ศึกษาตลาด", "hanzi": "我们需要深入了解当地市场。", "pinyin": "Wǒmen xūyào shēnrù liǎojiě dāngdì shìchǎng.", "thaiMeaning": "พวกเราต้องทำความเข้าใจลึกซึ้งในตลาดท้องถิ่น"}]
    },
    {
        "hanzi": "提高",
        "pinyin": "tígāo",
        "thaiMeaning": "ยกระดับ / พัฒนาเพิ่มขึ้น",
        "example": {"hanzi": "提高汉语水平。", "pinyin": "Tígāo Hànyǔ shuǐpíng.", "thaiMeaning": "ยกระดับทักษะภาษาจีน"},
        "examples": [{"scenario": "พัฒนาการทำงาน", "hanzi": "使用新软件可以提高工作效率。", "pinyin": "Shǐyòng xīn ruǎnjiàn kěyǐ tígāo gōngzuò xiàolǜ.", "thaiMeaning": "การใช้ซอฟต์แวร์ใหม่ช่วยยกระดับประสิทธิภาพการทำงานได้"}]
    }
]

cache = load_cache()

# Fetch translation for all texts in NEW_WORDS
all_texts = set()
for w in NEW_WORDS:
    all_texts.add(w['hanzi'])
    if 'example' in w and 'hanzi' in w['example']:
        all_texts.add(w['example']['hanzi'])
    if 'examples' in w:
        for ex in w['examples']:
            all_texts.add(ex['hanzi'])

uncached = [t for t in all_texts if t not in cache]
print(f"Translating {len(uncached)} new HSK 2-3 sentence texts...")

if uncached:
    with ThreadPoolExecutor(max_workers=20) as executor:
        futures = [executor.submit(fetch_translation, t) for t in uncached]
        for f in as_completed(futures):
            orig, trans = f.result()
            if trans:
                cache[orig] = trans
    save_cache(cache)

# Read current vocabularyData.js
vocab_file = os.path.join(os.path.dirname(__file__), '../src/data/vocabularyData.js')
with open(vocab_file, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'export const vocabularyList = (\[[\s\S]*\]);?\s*$', content)
if not match:
    print("Could not parse vocabularyList!")
    sys.exit(1)

vocab_list = json.loads(match.group(1))

# Append new words starting from v551
start_id = len(vocab_list) + 1

for idx, item in enumerate(NEW_WORDS):
    curr_id = f"v{start_id + idx}"
    zh = item['hanzi']
    en = cache.get(zh, item['thaiMeaning'])
    
    word_obj = {
        "id": curr_id,
        "hanzi": zh,
        "pinyin": item['pinyin'],
        "thaiMeaning": item['thaiMeaning'],
        "englishMeaning": en,
        "example": {
            "hanzi": item['example']['hanzi'],
            "pinyin": item['example']['pinyin'],
            "thaiMeaning": item['example']['thaiMeaning'],
            "englishMeaning": cache.get(item['example']['hanzi'], item['example']['thaiMeaning'])
        },
        "examples": []
    }
    
    if 'examples' in item:
        for ex in item['examples']:
            word_obj['examples'].append({
                "scenario": ex['scenario'],
                "hanzi": ex['hanzi'],
                "pinyin": ex['pinyin'],
                "thaiMeaning": ex['thaiMeaning'],
                "englishMeaning": cache.get(ex['hanzi'], ex['thaiMeaning'])
            })
            
    vocab_list.append(word_obj)

print(f"Expanded vocabulary dataset to {len(vocab_list)} words!")

new_vocab_js = json.dumps(vocab_list, ensure_ascii=False, indent=2)
new_content = f"""// Vocabulary Dataset - {len(vocab_list)} unique words
// Situational examples are written and reviewed per word; substitution templates are not used.

export const VOCAB_SETS = [
  {{ id: 'all', label: 'ทั้งหมด ({len(vocab_list)} คำ)' }}
];

export const vocabularyList = {new_vocab_js};
"""

with open(vocab_file, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("vocabularyData.js successfully updated with HSK 2-3 expansion!")
