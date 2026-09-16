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

NEW_WORDS_BATCH2 = [
    {
        "hanzi": "竞争",
        "pinyin": "jìngzhēng",
        "thaiMeaning": "การแข่งขัน / แข่งขันชิงชัย",
        "example": {"hanzi": "市场竞争非常激烈。", "pinyin": "Shìchǎng jìngzhēng fēicháng jīliè.", "thaiMeaning": "การแข่งขันในตลาดดุเดือดมาก"},
        "examples": [{"scenario": "การเติบโตธุรกิจ", "hanzi": "良性竞争有助于提高产品质量。", "pinyin": "Liángxìng jìngzhēng yǒu zhù yú tígāo chǎnpǐn zhìliàng.", "thaiMeaning": "การแข่งขันเชิงสร้างสรรค์ช่วยยกระดับคุณภาพสินค้า"}]
    },
    {
        "hanzi": "合作",
        "pinyin": "hézuò",
        "thaiMeaning": "ร่วมมือ / ความร่วมมือ",
        "example": {"hanzi": "期待与您的合作。", "pinyin": "Qīdài yǔ nín de hézuò.", "thaiMeaning": "เฝ้ารอการร่วมมือกับคุณ"},
        "examples": [{"scenario": "โปรเจกต์นานาชาติ", "hanzi": "双方达成了长期合作协议。", "pinyin": "Shuāngfāng dácéng le chángqī hézuò xiéyì.", "thaiMeaning": "ทั้งสองฝ่ายบรรลุข้อตกลงความร่วมมือระยะยาว"}]
    },
    {
        "hanzi": "允许",
        "pinyin": "yǔnxǔ",
        "thaiMeaning": "อนุญาต / สิทธิให้ทำ",
        "example": {"hanzi": "这里不允许吸烟。", "pinyin": "Zhèlǐ bù yǔnxǔ xīyān.", "thaiMeaning": "ที่นี่ไม่อนุญาตให้สูบบุหรี่"},
        "examples": [{"scenario": "กฎสถานที่", "hanzi": "未经允许，不得擅自进入。", "pinyin": "Wèijīng yǔnxǔ, bù dé shànzì jìnrù.", "thaiMeaning": "หากไม่ได้รับอนุญาต ห้ามเข้าก่อนโดยพลการ"}]
    },
    {
        "hanzi": "限制",
        "pinyin": "xiànzhì",
        "thaiMeaning": "จำกัด / ข้อจำกัด",
        "example": {"hanzi": "突破自我限制。", "pinyin": "Tūpò zìwǒ xiànzhì.", "thaiMeaning": "ก้าวข้ามข้อจำกัดของตนเอง"},
        "examples": [{"scenario": "ความเร็วขับขี่", "hanzi": "这条道路限制最高车速为八十。", "pinyin": "Zhè tiáo dàolù xiànzhì zuì gāo chēsù wéi bāshí.", "thaiMeaning": "ถนนสายนี้จำกัดความเร็วสูงสุดไว้ที่ 80"}]
    },
    {
        "hanzi": "极其",
        "pinyin": "jíqí",
        "thaiMeaning": "เป็นอย่างยิ่ง / สุดๆ",
        "example": {"hanzi": "这个问题极其重要。", "pinyin": "Zhège wèntí jíqí zhòngyào.", "thaiMeaning": "ปัญหานี้มีความสำคัญเป็นอย่างยิ่ง"},
        "examples": [{"scenario": "ชื่นชมทัศนียภาพ", "hanzi": "这里的风景极其优美。", "pinyin": "Zhèlǐ de fēngjǐng jíqí yōuměi.", "thaiMeaning": "ทัศนียภาพงดงามเป็นอย่างยิ่ง"}]
    },
    {
        "hanzi": "稍微",
        "pinyin": "shāowēi",
        "thaiMeaning": "นิดหน่อย / เล็กน้อย",
        "example": {"hanzi": "请稍微等一下。", "pinyin": "Qǐng shāowēi děng yíxià.", "thaiMeaning": "กรุณารอแป๊บนึงนิดหน่อยนะ"},
        "examples": [{"scenario": "ปรับปรุงงาน", "hanzi": "只需稍微修改一下即可。", "pinyin": "Zhǐ xū shāowēi xiūgǎi yíxià jíkě.", "thaiMeaning": "เพียงแค่ปรับแก้ไขเล็กน้อยนิดหน่อยก็ใช้ได้แล้ว"}]
    },
    {
        "hanzi": "几乎",
        "pinyin": "jīhū",
        "thaiMeaning": "เกือบจะ / แทบจะ",
        "example": {"hanzi": "我几乎要忘了。", "pinyin": "Wǒ jīhū yào wàng le.", "thaiMeaning": "ฉันเกือบจะลืมไปแล้ว"},
        "examples": [{"scenario": "การทำงานหนัก", "hanzi": "他最近忙得几乎没时间睡觉。", "pinyin": "Tā zuìjìn máng de jīhū méi shíjiān shuìjiào.", "thaiMeaning": "หมู่นี้เขายุ่งมากจนแทบไม่มีเวลานอน"}]
    },
    {
        "hanzi": "偶尔",
        "pinyin": "ǒu'ěr",
        "thaiMeaning": "เป็นบางครั้ง / นานๆ ที",
        "example": {"hanzi": "我偶尔去吃快餐。", "pinyin": "Wǒ ǒu'ěr qù chī kuàicān.", "thaiMeaning": "นานๆ ทีฉันจะไปทานฟาสต์ฟู้ด"},
        "examples": [{"scenario": "กิจกรรมยามว่าง", "hanzi": "他偶尔会在周末去钓鱼。", "pinyin": "Tā ǒu'ěr huì zài zhōumò qù diàoyú.", "thaiMeaning": "นานๆ ทีเขาจะไปตกปลาในสุดสัปดาห์"}]
    },
    {
        "hanzi": "逐渐",
        "pinyin": "zhújiàn",
        "thaiMeaning": "ค่อยๆ / ค่อยๆ เป็นค่อยๆ ไปตามลำดับ",
        "example": {"hanzi": "天气逐渐变冷了。", "pinyin": "Tiānqì zhújiàn biàn lěng le.", "thaiMeaning": "สภาพอากาศค่อยๆ หนาวเย็นขึ้นแล้ว"},
        "examples": [{"scenario": "การฟื้นตัว", "hanzi": "经过治疗，他的身体逐渐恢复了。", "pinyin": "Jīngguò zhìliáo, tā de shēntǐ zhújiàn huīfù le.", "thaiMeaning": "ผ่านการรักษา สุขภาพร่างกายของเขาค่อยๆ ฟื้นตัวแล้ว"}]
    },
    {
        "hanzi": "必然",
        "pinyin": "bìrán",
        "thaiMeaning": "ย่อมหลีกเลี่ยงไม่ได้ / เป็นสิ่งที่ต้องเกิดขึ้นแน่นอน",
        "example": {"hanzi": "这是必然的结果。", "pinyin": "Zhè shì bìrán de jiéguǒ.", "thaiMeaning": "นี่คือผลลัพธ์ที่ย่อมเกิดขึ้นแน่นอน"},
        "examples": [{"scenario": "สัจธรรมชีวิต", "hanzi": "付出努力必然会有回报。", "pinyin": "Fùchū nǔlì bìrán huì yǒu huíbào.", "thaiMeaning": "การทุ่มเทพยายามย่อมได้รับผลตอบแทนแน่นอน"}]
    },
    {
        "hanzi": "充分",
        "pinyin": "chōngfèn",
        "thaiMeaning": "เพียงพอเต็มที่ / ครอบคลุม",
        "example": {"hanzi": "做好充分准备。", "pinyin": "Zuò hǎo chōngfèn zhǔnbèi.", "thaiMeaning": "เตรียมตัวให้พร้อมอย่างเต็มที่"},
        "examples": [{"scenario": "อธิบายเหตุผล", "hanzi": "我们需要理由充分的证据。", "pinyin": "Wǒmen xūyào lǐyóu chōngfèn de zhèngjù.", "thaiMeaning": "พวกเราต้องการหลักฐานที่มีเหตุผลเพียงพอเต็มที่"}]
    },
    {
        "hanzi": "适当",
        "pinyin": "shìdàng",
        "thaiMeaning": "พอเหมาะพอดี / เหมาะสมแก่กาลเทศะ",
        "example": {"hanzi": "适当放松一下。", "pinyin": "Shìdàng fàngsōng yíxià.", "thaiMeaning": "ผ่อนคลายสักหน่อยอย่างพอเหมาะพอดี"},
        "examples": [{"scenario": "การออกกำลังกาย", "hanzi": "适当的运动有助于保持健康。", "pinyin": "Shìdàng de yùndòng yǒu zhù yú bǎochí jiànkāng.", "thaiMeaning": "การออกกำลังกายอย่างพอเหมาะช่วยรักษาสุขภาพได้"}]
    },
    {
        "hanzi": "无论",
        "pinyin": "wúlùn",
        "thaiMeaning": "ไม่ว่า...ก็ตาม",
        "example": {"hanzi": "无论如何都要坚持。", "pinyin": "Wúlùn rúhé dōu yào jiānchí.", "thaiMeaning": "ไม่ว่าอย่างไรก็ตามต้องยืนหยัดต่อไป"},
        "examples": [{"scenario": "มิตรภาพ", "hanzi": "无论遇到什么困难，我都支持你。", "pinyin": "Wúlùn yùdào shénme kùnnan, wǒ dōu zhīchí nǐ.", "thaiMeaning": "ไม่ว่าจะเจออุปสรรคอะไร ฉันก็สนับสนุนคุณเสมอ"}]
    },
    {
        "hanzi": "既然",
        "pinyin": "jìrán",
        "thaiMeaning": "ในเมื่อ / ในเมื่อ...แล้วล่ะก็",
        "example": {"hanzi": "既然来了就多坐一会儿。", "pinyin": "Jìrán lái le jiù duō zuò yíhuìr.", "thaiMeaning": "ในเมื่อมาแล้ว ก็นั่งคุยต่อนานอีกหน่อยนะ"},
        "examples": [{"scenario": "ตัดสินใจร่วมกัน", "hanzi": "既然决定了，就全力以赴去做了。", "pinyin": "Jìrán juédìng le, jiù quán lì yǐ fù qù zuò le.", "thaiMeaning": "ในเมื่อตัดสินใจแล้ว ก็ทุ่มเทสุดกำลังไปทำกันเถอะ"}]
    },
    {
        "hanzi": "属于",
        "pinyin": "shǔyú",
        "thaiMeaning": "เป็นของ... / สังกัดอยู่ใน...",
        "example": {"hanzi": "胜利属于我们！", "pinyin": "Shènglì shǔyú wǒmen!", "thaiMeaning": "ชัยชนะย่อมเป็นของพวกเรา!"},
        "examples": [{"scenario": "กรรมสิทธิ์", "hanzi": "这本字典属于图书馆。", "pinyin": "Zhè běn zìdiǎn shǔyú túshūguǎn.", "thaiMeaning": "พจนานุกรมเล่มนี้เป็นของห้องสมุด"}]
    },
    {
        "hanzi": "包含",
        "pinyin": "bāohán",
        "thaiMeaning": "ครอบคลุมรวมถึง / บรรจุไว้",
        "example": {"hanzi": "费用包含早餐。", "pinyin": "Fèiyòng bāohán zǎocān.", "thaiMeaning": "ค่าใช้จ่ายรวมถึงอาหารเช้าด้วย"},
        "examples": [{"scenario": "รายละเอียดบริการ", "hanzi": "套餐包含住宿和机票。", "pinyin": "Tàocān bāohán zhùsù hé jīpiào.", "thaiMeaning": "แพ็กเกจนี้รวมถึงที่พักและตั๋วเครื่องบิน"}]
    },
    {
        "hanzi": "采取",
        "pinyin": "cǎiqǔ",
        "thaiMeaning": "ปรับใช้ / ดำเนินการมาตรการ",
        "example": {"hanzi": "采取有效措施。", "pinyin": "Cǎiqǔ yǒuxiào cuòshī.", "thaiMeaning": "ดำเนินการมาตรการที่มีประสิทธิภาพ"},
        "examples": [{"scenario": "แก้ไขปัญหาวิกฤต", "hanzi": "公司将采取积极行动解决问题。", "pinyin": "Gōngsī jiāng cǎiqǔ jījí xíngdòng jiějué wèntí.", "thaiMeaning": "บริษัทจะดำเนินการเชิงบวกเพื่อแก้ไขปัญหา"}]
    },
    {
        "hanzi": "调查",
        "pinyin": "diàochá",
        "thaiMeaning": "สำรวจ / สืบสวนสอบถาม",
        "example": {"hanzi": "进行市场调查。", "pinyin": "Jìnxíng shìchǎng diàochá.", "thaiMeaning": "ดำเนินความสำรวจวิจัยตลาด"},
        "examples": [{"scenario": "แบบสอบถามลูกค้า", "hanzi": "调查显示大家都很喜欢新产品。", "pinyin": "Diàochá xiǎnshì dàjiā dōu hěn xǐhuan xīn chǎnpǐn.", "thaiMeaning": "ผลสำรวจแสดงให้เห็นว่าทุกคนชอบสินค้าใหม่มาก"}]
    },
    {
        "hanzi": "恢复",
        "pinyin": "huīfù",
        "thaiMeaning": "ฟื้นฟู / กลับคืนสู่สภาพเดิม",
        "example": {"hanzi": "恢复健康。", "pinyin": "Huīfù jiànkāng.", "thaiMeaning": "ฟื้นฟูสุขภาพร่างกายให้แข็งแรง"},
        "examples": [{"scenario": "ระบบคอมพิวเตอร์", "hanzi": "网络已经恢复正常了。", "pinyin": "Wǎngluò yǐjīng huīfù zhèngcháng le.", "thaiMeaning": "ระบบอินเทอร์เน็ตกลับคืนสู่สภาพปกติเรียบร้อยแล้ว"}]
    },
    {
        "hanzi": "缺乏",
        "pinyin": "quēfá",
        "thaiMeaning": "ขาดแคลน / ขาดความ...",
        "example": {"hanzi": "缺乏经验。", "pinyin": "Quēfá jīngyàn.", "thaiMeaning": "ขาดประสบการณ์"},
        "examples": [{"scenario": "การทำงาน", "hanzi": "这个项目缺乏资金支持。", "pinyin": "Zhège xiàngmù quēfá zījīn zhīchí.", "thaiMeaning": "โปรเจกต์นี้ขาดแคลนการสนับสนุนเงินทุน"}]
    },
    {
        "hanzi": "满足",
        "pinyin": "mǎnzú",
        "thaiMeaning": "ตอบสนองให้พอใจ / เติมเต็ม",
        "example": {"hanzi": "满足客户需求。", "pinyin": "Mǎnzú kèhù xūqiú.", "thaiMeaning": "ตอบสนองความต้องการของลูกค้า"},
        "examples": [{"scenario": "ความพึงพอใจชีวิต", "hanzi": "知足常乐，要懂得满足。", "pinyin": "Zhī zú cháng lè, yào dǒngde mǎnzú.", "thaiMeaning": "พอใจในสิ่งที่มีจะมีความสุขเสมอ ต้องรู้จักเติมเต็มพอใจ"}]
    },
    {
        "hanzi": "吸引",
        "pinyin": "xīyǐn",
        "thaiMeaning": "ดึงดูดใจ / ความสนใจ",
        "example": {"hanzi": "深深吸引了大家。", "pinyin": "Shēnshēn xīyǐn le dàjiā.", "thaiMeaning": "ดึงดูดความสนใจทุกคนเป็นอย่างยิ่ง"},
        "examples": [{"scenario": "โฆษณาสินค้า", "hanzi": "这款设计吸引了很多年轻顾客。", "pinyin": "Zhè kuǎn shèjì xīyǐn le hěn duō niánqīng gùkè.", "thaiMeaning": "ดีไซน์รุ่นนี้ดึงดูดลูกค้าวัยรุ่นจำนวนมาก"}]
    },
    {
        "hanzi": "印象",
        "pinyin": "yìnxiàng",
        "thaiMeaning": "ความประทับใจ / ภาพจำ",
        "example": {"hanzi": "留下了深刻的印象。", "pinyin": "Liúxià le shēnkè de yìnxiàng.", "thaiMeaning": "ทิ้งความประทับใจอันตราตรึงใจไว้"},
        "examples": [{"scenario": "การพบกันครั้งแรก", "hanzi": "我对他第一印象非常好。", "pinyin": "Wǒ duì tā dì-yī yìnxiàng fēicháng hǎo.", "thaiMeaning": "ฉันมีความประทับใจแรกต่อเขาดีมากๆ"}]
    },
    {
        "hanzi": "深刻",
        "pinyin": "shēnkè",
        "thaiMeaning": "ลึกซึ้งตราตรึงใจ / คมคาย",
        "example": {"hanzi": "感受深刻。", "pinyin": "Gǎnshòu shēnkè.", "thaiMeaning": "รู้สึกซาบซึ้งตราตรึงใจมาก"},
        "examples": [{"scenario": "บทเรียนชีวิต", "hanzi": "这次经历给了我深刻的教训。", "pinyin": "Zhè cì jīnglì gěi le wǒ shēnkè de jiàoxun.", "thaiMeaning": "ประสบการณ์ครั้งนี้ได้มอบบทเรียนอันลึกซึ้งแก่ฉัน"}]
    },
    {
        "hanzi": "独特",
        "pinyin": "dútè",
        "thaiMeaning": "โดดเด่นเป็นเอกลักษณ์เฉพาะตัว",
        "example": {"hanzi": "独特的风格。", "pinyin": "Dútè de fēnggé.", "thaiMeaning": "สไตล์เอกลักษณ์เฉพาะตัว"},
        "examples": [{"scenario": "ชื่นชมการออกแบบ", "hanzi": "这座建筑的设计非常独特。", "pinyin": "Zhè zuò jiànzhù de shèjì fēicháng dútè.", "thaiMeaning": "การออกแบบอาคารหลังนี้มีเอกลักษณ์เฉพาะตัวมาก"}]
    },
    {
        "hanzi": "显然",
        "pinyin": "xiǎnrán",
        "thaiMeaning": "เห็นได้ชัดว่า / ประจักษ์แจ้ง",
        "example": {"hanzi": "答案显然是正确的。", "pinyin": "Dá'àn xiǎnrán shì zhèngquè de.", "thaiMeaning": "คำตอบเห็นได้ชัดว่าถูกต้อง"},
        "examples": [{"scenario": "สังเกตความรู้สึก", "hanzi": "她显然对这个结果很不满意。", "pinyin": "Tā xiǎnrán duì zhège jiéguǒ hěn bù mǎnyì.", "thaiMeaning": "เธอเห็นได้ชัดว่าไม่พึงพอใจกับผลลัพธ์นี้มาก"}]
    },
    {
        "hanzi": "正常",
        "pinyin": "zhèngcháng",
        "thaiMeaning": "ปกติธรรมดา / สภาพปกติ",
        "example": {"hanzi": "一切正常。", "pinyin": "Yíqiè zhèngcháng.", "thaiMeaning": "ทุกอย่างปกติดี"},
        "examples": [{"scenario": "การทำงานเครื่องจักร", "hanzi": "设备目前运转一切正常。", "pinyin": "Shèbèi mùqián yùnzhuǎn yíqiè zhèngcháng.", "thaiMeaning": "อุปกรณ์ในปัจจุบันเดินเครื่องปกติดีทุกประการ"}]
    },
    {
        "hanzi": "诚实",
        "pinyin": "chéngshí",
        "thaiMeaning": "ซื่อสัตย์สุจริต",
        "example": {"hanzi": "做人要诚实。", "pinyin": "Zuò rén yào chéngshí.", "thaiMeaning": "เป็นคนต้องมีความซื่อสัตย์"},
        "examples": [{"scenario": "ชมเพื่อน", "hanzi": "他是一个诚实守信的人。", "pinyin": "Tā shì yí gè chéngshí shǒuxìn de rén.", "thaiMeaning": "เขาเป็นคนซื่อสัตย์รักษาคำพูด"}]
    },
    {
        "hanzi": "勇敢",
        "pinyin": "yǒnggǎn",
        "thaiMeaning": "กล้าหาญ / กล้าเผชิญหน้า",
        "example": {"hanzi": "勇敢面对。", "pinyin": "Yǒnggǎn miànduì.", "thaiMeaning": "เผชิญหน้าอย่างกล้าหาญ"},
        "examples": [{"scenario": "ให้กำลังใจเด็ก", "hanzi": "孩子在台上表现得很勇敢。", "pinyin": "Háizi zài táishàng biǎoxiàn de hěn yǒnggǎn.", "thaiMeaning": "เด็กน้อยบนเวทีแสดงออกได้อย่างกล้าหาญมาก"}]
    },
    {
        "hanzi": "幽默",
        "pinyin": "yōumò",
        "thaiMeaning": "มีอารมณ์ขัน / ตลกเฮฮา",
        "example": {"hanzi": "很有幽默感。", "pinyin": "Hěn yǒu yōumògǎn.", "thaiMeaning": "มีอารมณ์ขันมาก"},
        "examples": [{"scenario": "บรรยากาศการคุย", "hanzi": "他说话风趣幽默，大家都很喜欢他。", "pinyin": "Tā shuōhuà fēngqù yōumò, dàjiā dōu hěn xǐhuan tā.", "thaiMeaning": "เขาคุยสนุกสนานมีอารมณ์ขัน ทุกคนเลยชอบเขามาก"}]
    },
    {
        "hanzi": "骄傲",
        "pinyin": "jiāo'ào",
        "thaiMeaning": "ภาคภูมิใจ / ทะนงตน",
        "example": {"hanzi": "为你感到骄傲！", "pinyin": "Wèi nǐ gǎndào jiāo'ào!", "thaiMeaning": "รู้สึกภาคภูมิใจในตัวคุณมาก!"},
        "examples": [{"scenario": "ความสำเร็จลูก", "hanzi": "取得成绩后不要骄傲自满。", "pinyin": "Qǔdé chéngjì hòu bú yào jiāo'ào zìmǎn.", "thaiMeaning": "หลังจากคว้าความสำเร็จมาได้อย่าเพิ่งถือดีทะนงตน"}]
    },
    {
        "hanzi": "怀疑",
        "pinyin": "huáiyí",
        "thaiMeaning": "สงสัย / กังขา",
        "example": {"hanzi": "毫无怀疑。", "pinyin": "Háo wú huáiyí.", "thaiMeaning": "ไม่มีความสงสัยแม้แต่น้อย"},
        "examples": [{"scenario": "ตรวจสอบเรื่องราว", "hanzi": "我们不能无根据地怀疑别人。", "pinyin": "Wǒmen bù néng wú gēnjù de huáiyí biérén.", "thaiMeaning": "พวกเราไม่ควรสงสัยคนอื่นโดยไร้หลักฐานอ้างอิง"}]
    },
    {
        "hanzi": "尊敬",
        "pinyin": "zūnjìng",
        "thaiMeaning": "เคารพยกย่อง / ให้ความเคารพ",
        "example": {"hanzi": "尊敬长辈。", "pinyin": "Zūnjìng zhǎngbèi.", "thaiMeaning": "เคารพผู้หลักผู้ใหญ่"},
        "examples": [{"scenario": "ความสัมพันธ์ครูนักเรียน", "hanzi": "他是受人尊敬的好老师。", "pinyin": "Tā shì shòu rén zūnjìng de hǎo lǎoshī.", "thaiMeaning": "เขาคือคุณครูที่ดีซึ่งได้รับการเคารพยกย่องจากทุกคน"}]
    },
    {
        "hanzi": "欣赏",
        "pinyin": "xīnshǎng",
        "thaiMeaning": "ชื่นชม / ดื่มด่ำ (งานศิลปะ/คนเก่ง)",
        "example": {"hanzi": "欣赏音乐。", "pinyin": "Xīnshǎng yīnyuè.", "thaiMeaning": "ดื่มด่ำรับฟังเสียงดนตรี"},
        "examples": [{"scenario": "ชมเพื่อนร่วมงาน", "hanzi": "我非常欣赏他的工作才能。", "pinyin": "Wǒ fēicháng xīnshǎng tā de gōngzuò cáinéng.", "thaiMeaning": "ฉันชื่นชมความสามารถในการทำงานของเขาเป็นอย่างยิ่ง"}]
    },
    {
        "hanzi": "同情",
        "pinyin": "tóngqíng",
        "thaiMeaning": "เห็นอกเห็นใจ",
        "example": {"hanzi": "值得同情。", "pinyin": "Zhíde tóngqíng.", "thaiMeaning": "สมควรแก่การเห็นอกเห็นใจ"},
        "examples": [{"scenario": "ช่วยเหลือคนอื่น", "hanzi": "我们应对遭遇不幸的人充满同情。", "pinyin": "Wǒmen yìng duì zāoyù búxìng de rén chōngmǎn tóngqíng.", "thaiMeaning": "พวกเราควรเปี่ยมไปด้วยความเห็นอกเห็นใจผู้ที่พบเจอความโชคร้าย"}]
    },
    {
        "hanzi": "并且",
        "pinyin": "bìngqiě",
        "thaiMeaning": "และยัง...อีกด้วย / แถมยัง",
        "example": {"hanzi": "好用并且便宜。", "pinyin": "Hǎoyòng bìngqiě piányi.", "thaiMeaning": "ใช้ง่ายแถมยังมีราคาถูกอีกด้วย"},
        "examples": [{"scenario": "ชมสินค้า", "hanzi": "这款手机外观漂亮，并且性能优越。", "pinyin": "Zhè kuǎn shǒujī wàiguān piàoliang, bìngqiě xìngnéng yōuyuè.", "thaiMeaning": "มือถือรุ่นนี้รูปลักษณ์สวยงาม แถมยังมีประสิทธิภาพยอดเยี่ยมอีกด้วย"}]
    }
]

cache = load_cache()

# Read current vocabularyData.js
vocab_file = os.path.join(os.path.dirname(__file__), '../src/data/vocabularyData.js')
with open(vocab_file, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'export const vocabularyList = (\[[\s\S]*\]);?\s*$', content)
if not match:
    print("Could not parse vocabularyList!")
    sys.exit(1)

vocab_list = json.loads(match.group(1))

# Set of existing hanzi words to prevent duplicates
existing_hanzi = set(w['hanzi'] for w in vocab_list if 'hanzi' in w)
print(f"Current vocabulary count before Batch 2: {len(vocab_list)} words.")

filtered_new_words = []
for item in NEW_WORDS_BATCH2:
    if item['hanzi'] not in existing_hanzi:
        existing_hanzi.add(item['hanzi'])
        filtered_new_words.append(item)
    else:
        print(f"Deduplication safeguard: skipping existing word '{item['hanzi']}'")

print(f"Adding {len(filtered_new_words)} completely unique HSK 4-5 words...")

# Fetch translations for uncached texts
all_texts = set()
for w in filtered_new_words:
    all_texts.add(w['hanzi'])
    if 'example' in w and 'hanzi' in w['example']:
        all_texts.add(w['example']['hanzi'])
    if 'examples' in w:
        for ex in w['examples']:
            all_texts.add(ex['hanzi'])

uncached = [t for t in all_texts if t not in cache]
print(f"Translating {len(uncached)} new sentence texts...")

if uncached:
    with ThreadPoolExecutor(max_workers=20) as executor:
        futures = [executor.submit(fetch_translation, t) for t in uncached]
        for f in as_completed(futures):
            orig, trans = f.result()
            if trans:
                cache[orig] = trans
    save_cache(cache)

start_id = len(vocab_list) + 1

for idx, item in enumerate(filtered_new_words):
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

print(f"🎉 Total vocabulary dataset expanded to: {len(vocab_list)} words!")

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

print("vocabularyData.js successfully expanded with unique HSK 4-5 words!")
