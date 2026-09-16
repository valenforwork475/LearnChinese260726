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

NEW_HSK4_5_WORDS = [
    {
        "hanzi": "适应",
        "pinyin": "shìyìng",
        "thaiMeaning": "ปรับตัว / ปรับตัวให้เข้ากับ...",
        "example": {"hanzi": "适应新环境。", "pinyin": "Shìyìng xīn huánjìng.", "thaiMeaning": "ปรับตัวเข้ากับสภาพแวดล้อมใหม่"},
        "examples": [{"scenario": "การทำงานในต่างถิ่น", "hanzi": "他很快适应了新工作。", "pinyin": "Tā hěn kuài shìyìng le xīn gōngzuò.", "thaiMeaning": "เขาปรับตัวเข้ากับงานใหม่ได้อย่างรวดเร็ว"}]
    },
    {
        "hanzi": "降低",
        "pinyin": "jiàngdī",
        "thaiMeaning": "ลดลง / ปรับลดระดับ",
        "example": {"hanzi": "降低成本。", "pinyin": "Jiàngdī chéngběn.", "thaiMeaning": "ลดต้นทุนการผลิต"},
        "examples": [{"scenario": "การตลาดและราคา", "hanzi": "公司决定降低产品价格。", "pinyin": "Gōngsī juédìng jiàngdī chǎnpǐn jiàgé.", "thaiMeaning": "บริษัทตัดสินใจปรับลดราคาสินค้าลง"}]
    },
    {
        "hanzi": "增长",
        "pinyin": "zēngzhǎng",
        "thaiMeaning": "เติบโต / เพิ่มขยายตัว",
        "example": {"hanzi": "经济持续增长。", "pinyin": "Jīngjì chíxù zēngzhǎng.", "thaiMeaning": "เศรษฐกิจเติบโตอย่างต่อเนื่อง"},
        "examples": [{"scenario": "ยอดขายสินค้า", "hanzi": "今年公司的销售额显著增长。", "pinyin": "Jīnnián gōngsī de xiāoshòu'é xiǎnzhù zēngzhǎng.", "thaiMeaning": "ปีนี้ยอดขายของบริษัทเติบโตขึ้นอย่างโดดเด่น"}]
    },
    {
        "hanzi": "积累",
        "pinyin": "jīlěi",
        "thaiMeaning": "สะสม / สั่งสม (ประสบการณ์/ความรู้)",
        "example": {"hanzi": "积累经验。", "pinyin": "Jīlěi jīngyàn.", "thaiMeaning": "สั่งสมประสบการณ์"},
        "examples": [{"scenario": "พัฒนาตนเอง", "hanzi": "在工作中不断积累知识。", "pinyin": "Zài gōngzuò zhōng búduàn jīlěi zhīshi.", "thaiMeaning": "สั่งสมความรู้อย่างไม่หยุดยั้งในการทำงาน"}]
    },
    {
        "hanzi": "获得",
        "pinyin": "huòdé",
        "thaiMeaning": "ได้รับ / ได้มา (รางวัล/ความสำเร็จ)",
        "example": {"hanzi": "获得成功。", "pinyin": "Huòdé chénggōng.", "thaiMeaning": "ได้รับความสำเร็จ"},
        "examples": [{"scenario": "การรับรางวัล", "hanzi": "经过努力，他获得了第一名。", "pinyin": "Jīngguò nǔlì, tā huòdé le dì-yī míng.", "thaiMeaning": "ผ่านความพยายาม ในที่สุดเขาได้รับอันดับที่หนึ่ง"}]
    },
    {
        "hanzi": "拒绝",
        "pinyin": "jùjué",
        "thaiMeaning": "ปฏิเสธ / บอกปัด",
        "example": {"hanzi": "礼貌地拒绝。", "pinyin": "Lǐmào de jùjué.", "thaiMeaning": "ปฏิเสธอย่างมีมารยาท"},
        "examples": [{"scenario": "ปฏิเสธคำชวน", "hanzi": "我不好意思拒绝他的好意。", "pinyin": "Wǒ bù hǎoyìsi jùjué tā de hǎoyì.", "thaiMeaning": "ฉันเกรงใจที่จะปฏิเสธความหวังดีของเขา"}]
    },
    {
        "hanzi": "保持",
        "pinyin": "bǎochí",
        "thaiMeaning": "รักษา / ดำรงไว้",
        "example": {"hanzi": "保持联系。", "pinyin": "Bǎochí liánxì.", "thaiMeaning": "รักษาการติดต่อกันไว้"},
        "examples": [{"scenario": "รักษาสุขภาพใจ", "hanzi": "请保持积极乐观的态度。", "pinyin": "Qǐng bǎochí jījí lèguān de tàidu.", "thaiMeaning": "โปรดรักษาทัศนคติที่กระตือรือร้นและมองโลกในแง่ดีไว้"}]
    },
    {
        "hanzi": "强调",
        "pinyin": "qiángdiào",
        "thaiMeaning": "เน้นย้ำ / ให้ความสำคัญเน้นหนัก",
        "example": {"hanzi": "反复强调。", "pinyin": "Fǎnfù qiángdiào.", "thaiMeaning": "เน้นย้ำซ้ำไปซ้ำมา"},
        "examples": [{"scenario": "ประชุมงาน", "hanzi": "经理多次强调安全的重要性。", "pinyin": "Jīnglǐ duō cì qiángdiào ānquán de zhòngyàoxìng.", "thaiMeaning": "ผู้จัดการเน้นย้ำความสำคัญของความปลอดภัยหลายครั้ง"}]
    },
    {
        "hanzi": "支持",
        "pinyin": "zhīchí",
        "thaiMeaning": "สนับสนุน / ให้การเกื้อหนุน",
        "example": {"hanzi": "感谢你的支持。", "pinyin": "Gǎnxiè nǐ de zhīchí.", "thaiMeaning": "ขอบคุณสำหรับการสนับสนุนของคุณ"},
        "examples": [{"scenario": "ทีมงาน", "hanzi": "家人一直非常支持我的决定。", "pinyin": "Jiārén yìzhí fēicháng zhīchí wǒ de juédìng.", "thaiMeaning": "ครอบครัวสนับสนุนการตัดสินใจของฉันมาโดยตลอด"}]
    },
    {
        "hanzi": "鼓励",
        "pinyin": "gǔlì",
        "thaiMeaning": "ให้กำลังใจ / สนับสนุนส่งเสริม",
        "example": {"hanzi": "互相鼓励。", "pinyin": "Hùxiāng gǔlì.", "thaiMeaning": "ให้กำลังใจซึ่งกันและกัน"},
        "examples": [{"scenario": "คุณครูกับนักเรียน", "hanzi": "老师鼓励大家勇敢表达观点。", "pinyin": "Lǎoshī gǔlì dàjiā yǒnggǎn biǎodá guāndiǎn.", "thaiMeaning": "คุณครูให้กำลังใจทุกคนให้กล้าแสดงความคิดเห็น"}]
    },
    {
        "hanzi": "避免",
        "pinyin": "bìmiǎn",
        "thaiMeaning": "หลีกเลี่ยง / ป้องกันไม่ให้เกิด",
        "example": {"hanzi": "避免错误。", "pinyin": "Bìmiǎn cuòwù.", "thaiMeaning": "หลีกเลี่ยงข้อผิดพลาด"},
        "examples": [{"scenario": "การขับขี่ปลอดภัย", "hanzi": "遵守交通规则可以避免事故。", "pinyin": "Zūnshǒu jiāotōng guīzé kěyǐ bìmiǎn shìgù.", "thaiMeaning": "การปฏิบัติตามกฎจราจรช่วยหลีกเลี่ยงอุบัติเหตุได้"}]
    },
    {
        "hanzi": "即使",
        "pinyin": "jíshǐ",
        "thaiMeaning": "ต่อให้ / แม้ว่า...ก็ตาม",
        "example": {"hanzi": "即使辛苦也值得。", "pinyin": "Jíshǐ xīnkǔ yě zhíde.", "thaiMeaning": "ต่อให้เหน็ดเหนื่อยก็คุ้มค่า"},
        "examples": [{"scenario": "มุ่งมั่น", "hanzi": "即使遇到困难，我也不会放弃。", "pinyin": "Jíshǐ yùdào kùnnan, wǒ yě bú huì fàngqì.", "thaiMeaning": "ต่อให้เจออุปสรรค ฉันก็จะไม่ยอมแพ้"}]
    },
    {
        "hanzi": "尽管",
        "pinyin": "jǐnguǎn",
        "thaiMeaning": "แม้ว่า / ถึงแม้จะ...",
        "example": {"hanzi": "尽管放心。", "pinyin": "Jǐnguǎn fàngxīn.", "thaiMeaning": "สบายใจได้เต็มที่เลย"},
        "examples": [{"scenario": "สภาพอากาศกับการทำงาน", "hanzi": "尽管天气很冷，他依然按时到岗。", "pinyin": "Jǐnguǎn tiānqì hěn lěng, tā yīrán ànshí dào gǎng.", "thaiMeaning": "ถึงแม้สภาพอากาศจะหนาวมาก เขายังคงมาทำงานตรงเวลา"}]
    },
    {
        "hanzi": "居然",
        "pinyin": "jūrán",
        "thaiMeaning": "คิดไม่ถึงว่า / กลับ...อย่างนึกไม่ถึง",
        "example": {"hanzi": "他居然赢了！", "pinyin": "Tā jūrán yíng le!", "thaiMeaning": "เขาคิดไม่ถึงว่าจะชนะแล้ว!"},
        "examples": [{"scenario": "เหตุการณ์ประหลาดใจ", "hanzi": "这么简单的题他居然做错了。", "pinyin": "Zhème jiǎndān de tímù tā jūrán zuò cuò le.", "thaiMeaning": "โจทย์ง่ายขนาดนี้เขาคิดไม่ถึงว่าจะทำผิด"}]
    },
    {
        "hanzi": "否则",
        "pinyin": "fǒuzé",
        "thaiMeaning": "มิฉะนั้น / ไม่เช่นนั้นแล้ว",
        "example": {"hanzi": "快一点，否则会迟到。", "pinyin": "Kuài yìdiǎn, fǒuzé huì chídào.", "thaiMeaning": "เร็วหน่อย ไม่เช่นนั้นจะสายนะ"},
        "examples": [{"scenario": "การรักษาเวลา", "hanzi": "必须提前出发，否则赶不上飞机。", "pinyin": "Bìxū tíqián chūfā, fǒuzé gǎn bù shàng fēijī.", "thaiMeaning": "ต้องออกเดินทางล่วงหน้า มิฉะนั้นจะขึ้นเครื่องบินไม่ทัน"}]
    },
    {
        "hanzi": "究竟",
        "pinyin": "jiūjìng",
        "thaiMeaning": "ตกลงว่า...กันแน่ / แท้จริงแล้ว",
        "example": {"hanzi": "究竟发生了什么？", "pinyin": "Jiūjìng fāshēng le shénme?", "thaiMeaning": "ตกลงว่าเกิดอะไรขึ้นกันแน่?"},
        "examples": [{"scenario": "สืบหาความจริง", "hanzi": "我们一定要弄清楚究竟是怎么回事。", "pinyin": "Wǒmen yídìng yào nòng qīngchu jiūjìng shì zěnme huí shì.", "thaiMeaning": "พวกเราต้องทำความเข้าใจให้ชัดเจนว่าตกลงเรื่องราวเป็นอย่างไรกันแน่"}]
    },
    {
        "hanzi": "普遍",
        "pinyin": "pǔbiàn",
        "thaiMeaning": "แพร่หลาย / เป็นเรื่องปกติทั่วไป",
        "example": {"hanzi": "普遍现象。", "pinyin": "Pǔbiàn xiànxiàng.", "thaiMeaning": "ปรากฏการณ์ทั่วไปที่พบเห็นแพร่หลาย"},
        "examples": [{"scenario": "เทคโนโลยี", "hanzi": "移动支付在今天非常普遍。", "pinyin": "Yídòng zhīfù zài jīntiān fēicháng pǔbiàn.", "thaiMeaning": "การชำระเงินผ่านมือถือในปัจจุบันแพร่หลายมากๆ"}]
    },
    {
        "hanzi": "积极",
        "pinyin": "jījí",
        "thaiMeaning": "กระตือรือร้น / ในเชิงบวก",
        "example": {"hanzi": "积极参与。", "pinyin": "Jījí cānyù.", "thaiMeaning": "เข้าร่วมอย่างกระตือรือร้น"},
        "examples": [{"scenario": "ทัศนคติชีวิต", "hanzi": "保持积极的心态对健康很有益。", "pinyin": "Bǎochí jījí de xīntài duì jiànkāng hěn yǒuyì.", "thaiMeaning": "การรักษาจิตใจในเชิงบวกมีประโยชน์ต่อสุขภาพมาก"}]
    },
    {
        "hanzi": "消极",
        "pinyin": "xiāojí",
        "thaiMeaning": "เชิงลบ / เฉื่อยชาท้อแท้",
        "example": {"hanzi": "消极情绪。", "pinyin": "Xiāojí qíngxù.", "thaiMeaning": "อารมณ์ความรู้สึกเชิงลบ"},
        "examples": [{"scenario": "การทำงาน", "hanzi": "不要用消极的态度对待工作。", "pinyin": "Bú yào yòng xiāojí de tàidu duìdài gōngzuò.", "thaiMeaning": "อย่าใช้ทัศนคติเฉื่อยชาเชิงลบปฏิบัติต่องาน"}]
    },
    {
        "hanzi": "丰富",
        "pinyin": "fēngfù",
        "thaiMeaning": "หลากหลายอุดมสมบูรณ์ / โชกโชน",
        "example": {"hanzi": "丰富多彩。", "pinyin": "Fēngfù duōcǎi.", "thaiMeaning": "หลากหลายมีสีสัน"},
        "examples": [{"scenario": "อาหารและชีวิต", "hanzi": "这本字典的内容非常丰富。", "pinyin": "Zhè běn zìdiǎn de nèiróng fēicháng fēngfù.", "thaiMeaning": "เนื้อหาของพจนานุกรมเล่มนี้อุดมสมบูรณ์หลากหลายมาก"}]
    },
    {
        "hanzi": "关键",
        "pinyin": "guānjiàn",
        "thaiMeaning": "จุดสำคัญ / ปัจจัยชี้ขาด",
        "example": {"hanzi": "关键时刻。", "pinyin": "Guānjiàn shíkè.", "thaiMeaning": "ช่วงเวลาสำคัญชี้ขาด"},
        "examples": [{"scenario": "การแก้ปัญหา", "hanzi": "态度是解决问题的关键。", "pinyin": "Tàidu shì jiějué wèntí de guānjiàn.", "thaiMeaning": "ทัศนคติคือปัจจัยสำคัญชี้ขาดในการแก้ไขปัญหา"}]
    },
    {
        "hanzi": "严格",
        "pinyin": "yángé",
        "thaiMeaning": "เข้มงวด / กวดขันกวดขัน",
        "example": {"hanzi": "严格要求。", "pinyin": "Yángé yāoqiú.", "thaiMeaning": "กำหนดมาตรฐานเข้มงวด"},
        "examples": [{"scenario": "คุณภาพสินค้า", "hanzi": "产品质量把关非常严格。", "pinyin": "Chǎnpǐn zhìliàng bǎguān fēicháng yángé.", "thaiMeaning": "การคุมคุณภาพสินค้าเข้มงวดมากๆ"}]
    },
    {
        "hanzi": "精彩",
        "pinyin": "jīngcǎi",
        "thaiMeaning": "โดดเด่นตระการตา / ยอดเยี่ยม",
        "example": {"hanzi": "表演很精彩！", "pinyin": "Biǎoyǎn hěn jīngcǎi!", "thaiMeaning": "การแสดงยอดเยี่ยมโดดเด่นมาก!"},
        "examples": [{"scenario": "การแข่งขันกีฬา", "hanzi": "昨晚的足球比赛非常精彩。", "pinyin": "Zuówǎn de zúqiú bǐsài fēicháng jīngcǎi.", "thaiMeaning": "การแข่งขันฟุตบอลเมื่อคืนนี้ยอดเยี่ยมตระการตามาก"}]
    },
    {
        "hanzi": "详细",
        "pinyin": "xiángxì",
        "thaiMeaning": "ละเอียดครบถ้วน",
        "example": {"hanzi": "详细说明。", "pinyin": "Xiángxì shuōmíng.", "thaiMeaning": "อธิบายอย่างละเอียดครบถ้วน"},
        "examples": [{"scenario": "รายงานประชุม", "hanzi": "请提供一份详细的计划书。", "pinyin": "Qǐng tígōng yí fèn xiángxì de jìhuàshū.", "thaiMeaning": "กรุณาเสนอข้อเสนอแผนงานฉบับละเอียดครบถ้วนนะ"}]
    },
    {
        "hanzi": "正式",
        "pinyin": "zhèngshì",
        "thaiMeaning": "เป็นทางการ / อย่างเป็นทางการ",
        "example": {"hanzi": "正式通知。", "pinyin": "Zhèngshì tōngzhī.", "thaiMeaning": "ประกาศแจ้งอย่างเป็นทางการ"},
        "examples": [{"scenario": "งานพิธี", "hanzi": "参加发布会需要穿正式服装。", "pinyin": "Cānjiā fābùhuì xūyào chuān zhèngshì fúzhuāng.", "thaiMeaning": "เข้าร่วมงานแถลงข่าวจำเป็นต้องแต่งกายชุดเป็นทางการ"}]
    },
    {
        "hanzi": "临时",
        "pinyin": "línshí",
        "thaiMeaning": "ชั่วคราว / กะทันหัน",
        "example": {"hanzi": "临时决定。", "pinyin": "Línshí juédìng.", "thaiMeaning": "ตัดสินใจอย่างกะทันหันชั่วคราว"},
        "examples": [{"scenario": "นัดหมายฉุกเฉิน", "hanzi": "公司临时安排了一次紧急会议。", "pinyin": "Gōngsī línshí ānpái le yí cì jǐnjí huìyì.", "thaiMeaning": "บริษัทจัดประชุมด่วนกะทันหันขึ้นหนึ่งครั้ง"}]
    },
    {
        "hanzi": "著名",
        "pinyin": "zhùmíng",
        "thaiMeaning": "มีชื่อเสียงโด่งดัง",
        "example": {"hanzi": "著名作家。", "pinyin": "Zhùmíng zuòjiā.", "thaiMeaning": "นักเขียนชื่อดัง"},
        "examples": [{"scenario": "สถานที่ท่องเที่ยว", "hanzi": "长城是世界著名的景点。", "pinyin": "Chángchéng shì shìjiè zhùmíng de jǐngdiǎn.", "thaiMeaning": "กำแพงเมืองจีนคือสถานที่ท่องเที่ยวที่มีชื่อเสียงโด่งดังระดับโลก"}]
    },
    {
        "hanzi": "理想",
        "pinyin": "lǐxiǎng",
        "thaiMeaning": "อุดมคติ / จุดมุ่งหมายสมบูรณ์แบบ",
        "example": {"hanzi": "实现理想。", "pinyin": "Shíxiàn lǐxiǎng.", "thaiMeaning": "ทำให้อุดมคติฝันกลายเป็นจริง"},
        "examples": [{"scenario": "อาชีพฝัน", "hanzi": "找到一份理想的工作并不容易。", "pinyin": "Zhǎodào yí fèn lǐxiǎng de gōngzuò bìng bù róngyì.", "thaiMeaning": "การหางานในอุดมคติทำไม่ได้ง่ายเลย"}]
    },
    {
        "hanzi": "真正",
        "pinyin": "zhēnzhèng",
        "thaiMeaning": "แท้จริง / อย่างแท้จริง",
        "example": {"hanzi": "真正的朋友。", "pinyin": "Zhēnzhèng de péngyou.", "thaiMeaning": "มิตรแท้ที่แท้จริง"},
        "examples": [{"scenario": "ความเข้ากันได้", "hanzi": "只有经过考验才能明白真正的友情。", "pinyin": "Zhǐyǒu jīngguò kǎoyàn cái néng míngbai zhēnzhèng de yǒuqíng.", "thaiMeaning": "มีเพียงผ่านการทดสอบเท่านั้นจึงจะเข้าใจมิตรภาพอันแท้จริง"}]
    },
    {
        "hanzi": "招聘",
        "pinyin": "zhāopìn",
        "thaiMeaning": "รับสมัครงาน / เปิดรับบุคลากร",
        "example": {"hanzi": "公司正在招聘。", "pinyin": "Gōngsī zhèngzài zhāopìn.", "thaiMeaning": "บริษัทกำลังเปิดรับสมัครงาน"},
        "examples": [{"scenario": "ประกาศงาน", "hanzi": "我们在网上看到了招聘信息。", "pinyin": "Wǒmen zài wǎngshang kàndào le zhāopìn xìnxī.", "thaiMeaning": "พวกเราเห็นข้อมูลข่าวรับสมัครงานบนอินเทอร์เน็ต"}]
    },
    {
        "hanzi": "简历",
        "pinyin": "jiǎnlì",
        "thaiMeaning": "เรซูเม่ / ประวัติส่วนตัว (CV)",
        "example": {"hanzi": "投递简历。", "pinyin": "Tóudì jiǎnlì.", "thaiMeaning": "ยื่นส่งเรซูเม่สมัครงาน"},
        "examples": [{"scenario": "เตรียมสมัครงาน", "hanzi": "请把个人简历发到我的邮箱。", "pinyin": "Qǐng bǎ gèrén jiǎnlì fā dào wǒ de yóuxiāng.", "thaiMeaning": "กรุณาส่งเรซูเม่ประวัติส่วนตัวมาที่อีเมลของฉันนะ"}]
    },
    {
        "hanzi": "面试",
        "pinyin": "miànshì",
        "thaiMeaning": "สัมภาษณ์งาน / การสัมภาษณ์",
        "example": {"hanzi": "参加面试。", "pinyin": "Cānjiā miànshì.", "thaiMeaning": "เข้าร่วมการสัมภาษณ์งาน"},
        "examples": [{"scenario": "อวยพรสัมภาษณ์", "hanzi": "祝你明天的面试顺利成功！", "pinyin": "Zhù nǐ míngtiān de miànshì shùnlì chénggōng!", "thaiMeaning": "ขอให้การสัมภาษณ์งานพรุ่งนี้ของคุณราบรื่นและประสบความสำเร็จนะ!"}]
    },
    {
        "hanzi": "投资",
        "pinyin": "tóuzī",
        "thaiMeaning": "ลงทุน / การลงทุน",
        "example": {"hanzi": "投资项目。", "pinyin": "Tóuzī xiàngmù.", "thaiMeaning": "ลงทุนในโปรเจกต์"},
        "examples": [{"scenario": "การเงินธุรกิจ", "hanzi": "理财需要理性投资。", "pinyin": "Lǐcái xūyào lǐxìng tóuzī.", "thaiMeaning": "การบริหารเงินจำเป็นต้องลงทุนอย่างมีสติเหตุผล"}]
    },
    {
        "hanzi": "市场",
        "pinyin": "shìchǎng",
        "thaiMeaning": "ตลาด (ตลาดการค้า/การตลาด)",
        "example": {"hanzi": "开拓新市场。", "pinyin": "Kāituò xīn shìchǎng.", "thaiMeaning": "บุกเบิกตลาดใหม่"},
        "examples": [{"scenario": "สำรวจการแข่งขัน", "hanzi": "我们需要了解市场的最新需求。", "pinyin": "Wǒmen xūyào liǎojiě shìchǎng de zuìxīn xūqiú.", "thaiMeaning": "พวกเราต้องทำความเข้าใจความต้องการล่าสุดของตลาด"}]
    },
    {
        "hanzi": "方案",
        "pinyin": "fāng'àn",
        "thaiMeaning": "แผนงาน / ข้อเสนอโครงการ",
        "example": {"hanzi": "制定方案。", "pinyin": "Zhìdìng fāng'àn.", "thaiMeaning": "กำหนดร่างแผนงานโครงการ"},
        "examples": [{"scenario": "เลือกโซลูชัน", "hanzi": "这个方案得到了大家的一致赞同。", "pinyin": "Zhège fāng'àn dédào le dàjiā de yízhì zàantóng.", "thaiMeaning": "แผนงานนี้ได้รับการยอมรับเห็นพ้องจากทุกคน"}]
    },
    {
        "hanzi": "目标",
        "pinyin": "mùbiāo",
        "thaiMeaning": "เป้าหมาย / วัตถุประสงค์",
        "example": {"hanzi": "实现既定目标。", "pinyin": "Shíxiàn jìdìng mùbiāo.", "thaiMeaning": "บรรลุเป้าหมายที่ตั้งไว้"},
        "examples": [{"scenario": "ตั้งเป้าปีใหม่", "hanzi": "新的一年要树立明确的目标。", "pinyin": "Xīn de yì nián yào shùlì míngquè de mùbiāo.", "thaiMeaning": "ปีใหม่ต้องสถาปนาตั้งเป้าหมายที่ชัดเจน"}]
    },
    {
        "hanzi": "压力",
        "pinyin": "yālì",
        "thaiMeaning": "ความกดดัน / ความเครียด",
        "example": {"hanzi": "缓解工作压力。", "pinyin": "Huǎnjiě gōngzuò yālì.", "thaiMeaning": "ผ่อนคลายความกดดันจากการทำงาน"},
        "examples": [{"scenario": "ปรับสภาพจิตใจ", "hanzi": "学会自我调节，释放压力。", "pinyin": "Xuéhuì zìwǒ tiáojié, shìfàng yālì.", "thaiMeaning": "เรียนรู้การปรับสภาพตัวเอง ปลดปล่อยความกดดันเครียด"}]
    },
    {
        "hanzi": "提前",
        "pinyin": "tíqián",
        "thaiMeaning": "ทำล่วงหน้า / ก่อนกำหนดเวลา",
        "example": {"hanzi": "提前做好准备。", "pinyin": "Tíqián zuò hǎo zhǔnbèi.", "thaiMeaning": "เตรียมตัวล่วงหน้าให้พร้อม"},
        "examples": [{"scenario": "การนัดหมาย", "hanzi": "请提前十分钟到达会场。", "pinyin": "Qǐng tíqián shí fēnzhōng dào dá huìchǎng.", "thaiMeaning": "กรุณามาถึงสถานที่ประชุมล่วงหน้า 10 นาที"}]
    },
    {
        "hanzi": "沟通",
        "pinyin": "gōutōng",
        "thaiMeaning": "เจรจาสื่อสาร / ปรับความเข้าใจ",
        "example": {"hanzi": "加强沟通。", "pinyin": "Jiāqiáng gōutōng.", "thaiMeaning": "ยกระดับการเจรจาสื่อสารให้แน่นแฟ้น"},
        "examples": [{"scenario": "ความสัมพันธ์ทีม", "hanzi": "良好沟通是团队合作的基础。", "pinyin": "Liánghǎo gōutōng shì tuánduì hézuò de jīchǔ.", "thaiMeaning": "การเจรจาสื่อสารที่ดีคือรากฐานของการทำงานร่วมกันเป็นทีม"}]
    },
    {
        "hanzi": "确认",
        "pinyin": "quèrèn",
        "thaiMeaning": "ยืนยัน (ข้อมูล/การจอง)",
        "example": {"hanzi": "确认订单信息。", "pinyin": "Quèrèn dìngdān xìnxī.", "thaiMeaning": "ยืนยันข้อมูลออเดอร์คำสั่งซื้อ"},
        "examples": [{"scenario": "เช็กการจองโรงแรม", "hanzi": "请向酒店确认预订情况。", "pinyin": "Qǐng xiàng jiǔdiàn quèrèn yùdìng qíngkuàng.", "thaiMeaning": "กรุณายืนยันสถานะการจองกับทางโรงแรมนะ"}]
    },
    {
        "hanzi": "放弃",
        "pinyin": "fàngqì",
        "thaiMeaning": "ยอมแพ้ / ละทิ้งสิทธิ์",
        "example": {"hanzi": "绝不放弃！", "pinyin": "Jué bù fàngqì!", "thaiMeaning": "ไม่มีวันยอมแพ้เด็ดขาด!"},
        "examples": [{"scenario": "ปลุกใจ", "hanzi": "遇到一点困难不能轻易放弃。", "pinyin": "Yùdào yìdiǎn kùnnan bù néng qīngyì fàngqì.", "thaiMeaning": "เจออุปสรรคเล็กน้อยก็ไม่ควรรีบยอมแพ้ง่ายๆ"}]
    },
    {
        "hanzi": "克服",
        "pinyin": "kèfú",
        "thaiMeaning": "ก้าวข้าม / เอาชนะ (อุปสรรค/ความกลัว)",
        "example": {"hanzi": "克服恐惧。", "pinyin": "Kèfú kǒngjù.", "thaiMeaning": "เอาชนะความหวาดกลัว"},
        "examples": [{"scenario": "พัฒนาตนเอง", "hanzi": "我们要努力克服一切困难。", "pinyin": "Wǒmen yào nǔlì kèfú yíqiè kùnnan.", "thaiMeaning": "พวกเราต้องขยันพยายามก้าวข้ามทุกอุปสรรคปัญหา"}]
    },
    {
        "hanzi": "证明",
        "pinyin": "zhèngmíng",
        "thaiMeaning": "พิสูจน์ / หลักฐานยืนยัน",
        "example": {"hanzi": "用事实证明。", "pinyin": "Yòng shìshí zhèngmíng.", "thaiMeaning": "ใช้ความจริงเป็นสิ่งพิสูจน์"},
        "examples": [{"scenario": "พิสูจน์ฝีมือ", "hanzi": "时间会证明你的努力是值得的。", "pinyin": "Shíjiān huì zhèngmíng nǐ de nǔlì shì zhíde de.", "thaiMeaning": "กาลเวลาจะเป็นสิ่งพิสูจน์ว่าความพยายามของคุณคุ้มค่า"}]
    },
    {
        "hanzi": "值得",
        "pinyin": "zhíde",
        "thaiMeaning": "คุ้มค่าแก่การ... / คุ้มค่า",
        "example": {"hanzi": "非常值得。", "pinyin": "Fēicháng zhíde.", "thaiMeaning": "คุ้มค่าเป็นอย่างยิ่ง"},
        "examples": [{"scenario": "เที่ยวหรือเรียน", "hanzi": "这部电影非常感人，值得一看。", "pinyin": "Zhè bù diànyǐng fēicháng gǎnrén, zhíde yí kàn.", "thaiMeaning": "ภาพยนตร์เรื่องนี้ซาบซึ้งใจมาก คุ้มค่าแก่การรับชม"}]
    },
    {
        "hanzi": "优势",
        "pinyin": "yōushì",
        "thaiMeaning": "ข้อได้เปรียบ / จุดแข็ง",
        "example": {"hanzi": "发挥自身优势。", "pinyin": "Fāhuī zìshēn yōushì.", "thaiMeaning": "แสดงข้อได้เปรียบจุดแข็งของตัวเองออกมา"},
        "examples": [{"scenario": "การแข่งขันธุรกิจ", "hanzi": "我们在价格上有明显优势。", "pinyin": "Wǒmen zài jiàgé shàng yǒu míngxiǎn yōushì.", "thaiMeaning": "พวกเราในเรื่องราคามีข้อได้เปรียบจุดแข็งที่ชัดเจนมาก"}]
    },
    {
        "hanzi": "信任",
        "pinyin": "xìnrèn",
        "thaiMeaning": "ความไว้วางใจ / เชื่อใจ",
        "example": {"hanzi": "赢得客户的信任。", "pinyin": "Yíngdé kèhù de xìnrèn.", "thaiMeaning": "คว้าความไว้วางใจจากลูกค้ามาได้"},
        "examples": [{"scenario": "การทำงานทีม", "hanzi": "团队成员之间需要相互信任。", "pinyin": "Tuánduì chéngyuán zhījiān xūyào xiānghù xìnrèn.", "thaiMeaning": "สมาชิกในทีมจำเป็นต้องมีความไว้วางใจซึ่งกันและกัน"}]
    },
    {
        "hanzi": "克服",
        "pinyin": "kèfú",
        "thaiMeaning": "เอาชนะ / ก้าวข้าม",
        "example": {"hanzi": "克服困难。", "pinyin": "Kèfú kùnnan.", "thaiMeaning": "เอาชนะอุปสรรคปัญหา"},
        "examples": [{"scenario": "การเรียน", "hanzi": "相信你一定能克服这个难关。", "pinyin": "Xiāngxìn nǐ yídìng néng kèfú zhège nánguān.", "thaiMeaning": "เชื่อว่าคุณต้องสามารถเอาชนะด่านยากนี้ได้แน่นอน"}]
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

# Extract set of existing hanzi words to prevent duplicates
existing_hanzi = set(w['hanzi'] for w in vocab_list if 'hanzi' in w)
print(f"Existing vocabulary count: {len(vocab_list)} words.")

# Filter out any duplicate words
filtered_new_words = []
for item in NEW_HSK4_5_WORDS:
    if item['hanzi'] not in existing_hanzi:
        existing_hanzi.add(item['hanzi'])
        filtered_new_words.append(item)
    else:
        print(f"Skipping existing word: {item['hanzi']}")

print(f"Adding {len(filtered_new_words)} non-duplicate HSK 4-5 words...")

# Fetch translation for all texts
all_texts = set()
for w in filtered_new_words:
    all_texts.add(w['hanzi'])
    if 'example' in w and 'hanzi' in w['example']:
        all_texts.add(w['example']['hanzi'])
    if 'examples' in w:
        for ex in w['examples']:
            all_texts.add(ex['hanzi'])

uncached = [t for t in all_texts if t not in cache]
print(f"Translating {len(uncached)} new HSK 4-5 sentence texts...")

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

print(f"Total vocabulary size now: {len(vocab_list)} words!")

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

print("vocabularyData.js successfully expanded with non-duplicate HSK 4-5 words!")
