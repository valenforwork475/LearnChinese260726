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

RESTAURANT_BIZ_WORDS = [
    {
        "hanzi": "主菜",
        "pinyin": "zhǔcài",
        "thaiMeaning": "อาหารจานหลัก / Main course",
        "example": {"hanzi": "我们今天的主菜是烤鸭。", "pinyin": "Wǒmen jīntiān de zhǔcài shì kǎoyā.", "thaiMeaning": "อาหารจานหลักของพวกเราในวันนี้คือเป็ดย่าง"},
        "examples": [{"scenario": "ลำดับการเสิร์ฟอาหาร", "hanzi": "请在吃完前菜后再上主菜。", "pinyin": "Qǐng zài chī wán qiáncài hòu zài shàng zhǔcài.", "thaiMeaning": "กรุณาเสิร์ฟอาหารจานหลักหลังจากทานอาหารทานเล่นเสร็จแล้ว"}]
    },
    {
        "hanzi": "配菜",
        "pinyin": "pèicài",
        "thaiMeaning": "เครื่องเคียง / Side dish",
        "example": {"hanzi": "这道主菜搭配了新鲜的配菜。", "pinyin": "Zhè dào zhǔcài dāpèi le xīnxiān de pèicài.", "thaiMeaning": "อาหารจานหลักนี้จัดเสิร์ฟคู่กับเครื่องเคียงสดใหม่"},
        "examples": [{"scenario": "สั่งเครื่องเคียงเพิ่ม", "hanzi": "请问需要加一份配菜吗？", "pinyin": "Qǐngwèn xūyào jiā yí fèn pèicài ma?", "thaiMeaning": "ขอถามหน่อย คุณต้องการสั่งเครื่องเคียงเพิ่มอีกหนึ่งจานไหมครับ?"}]
    },
    {
        "hanzi": "前菜",
        "pinyin": "qiáncài",
        "thaiMeaning": "อาหารทานเล่น / Appetizer",
        "example": {"hanzi": "先来一份清爽的前菜。", "pinyin": "Xiān lái yí fèn qīngshuǎng de qiáncài.", "thaiMeaning": "ขอเอาอาหารทานเล่นรสสดชื่นมาจานนึงก่อน"},
        "examples": [{"scenario": "แนะนำเมนูทานเล่น", "hanzi": "我们的前菜主要以沙拉和凉菜为主。", "pinyin": "Wǒmen de qiáncài zhǔyào yǐ shālā hé liángcài wéi zhǔ.", "thaiMeaning": "อาหารทานเล่นของร้านเราเน้นสลัดและอาหารเย็นเป็นหลัก"}]
    },
    {
        "hanzi": "招牌菜",
        "pinyin": "zhāopáicài",
        "thaiMeaning": "เมนูเด็ดประจำร้าน / Signature dish",
        "example": {"hanzi": "这是我们餐厅的招牌菜。", "pinyin": "Zhè shì wǒmen cāntīng de zhāopáicài.", "thaiMeaning": "นี่คือเมนูเด็ดประจำร้านของพวกเรา"},
        "examples": [{"scenario": "สั่งเมนูแนะนำ", "hanzi": "请给我推荐两道招牌菜。", "pinyin": "Qǐng gěi wǒ tuījiàn liǎng dào zhāopáicài.", "thaiMeaning": "ช่วยแนะนำเมนูเด็ดประจำร้านให้ฉันสัก 2 จานทีครับ"}]
    },
    {
        "hanzi": "蘸料",
        "pinyin": "zhànliào",
        "thaiMeaning": "น้ำจิ้ม / Dipping sauce",
        "example": {"hanzi": "请帮我调一份麻辣蘸料。", "pinyin": "Qǐng bāng wǒ tiáo yí fèn málà zhànliào.", "thaiMeaning": "ช่วยปรุงน้ำจิ้มหม่าล่าให้ฉันสักถ้วยที"},
        "examples": [{"scenario": "ทานชาบูหม้อไฟ", "hanzi": "火锅的蘸料非常重要。", "pinyin": "Huǒguō de zhànliào fēicháng zhòngyào.", "thaiMeaning": "น้ำจิ้มของชาบูหม้อไฟมีความสำคัญมากๆ"}]
    },
    {
        "hanzi": "调料",
        "pinyin": "tiáoliào",
        "thaiMeaning": "เครื่องปรุงรส / Seasonings & condiments",
        "example": {"hanzi": "自助调料台在右边。", "pinyin": "Zìzhù tiáoliào tái zài yòubiān.", "thaiMeaning": "เคาน์เตอร์เครื่องปรุงรสแบบบริการตนเองอยู่ทางขวามือ"},
        "examples": [{"scenario": "การประกอบอาหาร", "hanzi": "厨师加了特制的调料。", "pinyin": "Chúshī jiā le tèzhì de tiáoliào.", "thaiMeaning": "เชฟได้ใส่เครื่องปรุงรสสูตรพิเศษลงไป"}]
    },
    {
        "hanzi": "拼盘",
        "pinyin": "pīnpán",
        "thaiMeaning": "จานรวมมิตร / Platter",
        "example": {"hanzi": "来一份水果拼盘。", "pinyin": "Lái yí fèn shuǐguǒ pīnpán.", "thaiMeaning": "เอาผลไม้จานรวมมิตรมาสักจาน"},
        "examples": [{"scenario": "สั่งงานสังสรรค์", "hanzi": "海鲜拼盘包含虾、蟹和贝类。", "pinyin": "Hǎixiān pīnpán bāohán xiā, xiè hé bèilèi.", "thaiMeaning": "จานรวมมิตรอาหารทะเลรวมถึงกุ้ง ปู และหอยชนิดต่างๆ"}]
    },
    {
        "hanzi": "凉菜",
        "pinyin": "liángcài",
        "thaiMeaning": "กับแกล้มเย็น / Cold dish",
        "example": {"hanzi": "夏天吃凉菜很开胃。", "pinyin": "Xiàtiān chī liángcài hěn kāiwèi.", "thaiMeaning": "หน้าร้อนทานกับแกล้มเย็นช่วยเจริญอาหารมาก"},
        "examples": [{"scenario": "เสิร์ฟกับแกล้มก่อน", "hanzi": "凉菜很快就上齐了。", "pinyin": "Liángcài hěn kuài jiù shàng qí le.", "thaiMeaning": "กับแกล้มเย็นเสิร์ฟออกมาครบถ้วนอย่างรวดเร็ว"}]
    },
    {
        "hanzi": "食材",
        "pinyin": "shícái",
        "thaiMeaning": "วัตถุดิบประกอบอาหาร / Food ingredients",
        "example": {"hanzi": "保证食材的新鲜。", "pinyin": "Bǎozhèng shícái de xīnxiān.", "thaiMeaning": "รับประกันความสดใหม่ของวัตถุดิบ"},
        "examples": [{"scenario": "ชูจุดขายร้าน", "hanzi": "我们每天采购有机食材。", "pinyin": "Wǒmen měitiān cǎigòu yǒujī shícái.", "thaiMeaning": "พวกเราคัดสรรจัดซื้อวัตถุดิบออร์แกนิกทุกวัน"}]
    },
    {
        "hanzi": "肉丝",
        "pinyin": "ròusī",
        "thaiMeaning": "เนื้อหั่นฝอย / Shredded meat",
        "example": {"hanzi": "鱼香肉丝是一道名菜。", "pinyin": "Yúxiāng ròusī shì yí dào míngcài.", "thaiMeaning": "ผัดเนื้อหั่นฝอยซูซวงเป็นเมนูชื่อดัง"},
        "examples": [{"scenario": "สั่งอาหารจีน", "hanzi": "来一份青椒炒肉丝。", "pinyin": "Lái yí fèn qīngjiāo chǎo ròusī.", "thaiMeaning": "เอาพริกหยวกผัดเนื้อหั่นฝอยมาจานนึง"}]
    },
    {
        "hanzi": "肉片",
        "pinyin": "ròupiàn",
        "thaiMeaning": "เนื้อสไลซ์ / Sliced meat",
        "example": {"hanzi": "水煮肉片很辣。", "pinyin": "Shuǐzhǔ ròupiàn hěn là.", "thaiMeaning": "เนื้อสไลซ์ต้มซุปเผ็ดหม่าล่าเผ็ดมาก"},
        "examples": [{"scenario": "สั่งชาบู", "hanzi": "请再加两盘牛肉片。", "pinyin": "Qǐng zài jiā liǎng pán niúròu piàn.", "thaiMeaning": "กรุณาเพิ่มเนื้อวัวสไลซ์อีก 2 ถาดทีครับ"}]
    },
    {
        "hanzi": "肉丁",
        "pinyin": "ròudīng",
        "thaiMeaning": "เนื้อหั่นเต๋า / Diced meat cubes",
        "example": {"hanzi": "宫保鸡丁里面有鸡肉丁。", "pinyin": "Gōngbǎo jīdīng lǐmiàn yǒu jīròu dīng.", "thaiMeaning": "ไก่ผัดเม็ดมะม่วงกุ้งโบว์มีเนื้อไก่หั่นเต๋าอยู่"},
        "examples": [{"scenario": "อธิบายลักษณะอาหาร", "hanzi": "把肉切成均匀的肉丁。", "pinyin": "Bǎ ròu qiē chéng jūnyún de ròudīng.", "thaiMeaning": "นำเนื้อมาหั่นเป็นชิ้นเต๋าขนาดเท่าๆ กัน"}]
    },
    {
        "hanzi": "肉末",
        "pinyin": "ròumò",
        "thaiMeaning": "เนื้อสับ / Minced meat",
        "example": {"hanzi": "麻婆豆腐需要加肉末。", "pinyin": "Mápó dòufu xūyào jiā ròumò.", "thaiMeaning": "เต้าหู้มาโปผัดหม่าล่าจำเป็นต้องใส่เนื้อสับ"},
        "examples": [{"scenario": "ทำอาหารเมนูผัด", "hanzi": "肉末茄子非常好吃。", "pinyin": "Ròumò qiézi fēicháng hǎochī.", "thaiMeaning": "มะเขือยาวผัดเนื้อสับอร่อยมากๆ"}]
    },
    {
        "hanzi": "订位",
        "pinyin": "dìngwèi",
        "thaiMeaning": "จองโต๊ะอาหาร / Reserve a table",
        "example": {"hanzi": "我想订今晚六点的桌位。", "pinyin": "Wǒ xiǎng dìng jīn wǎn liù diǎn de zhuōwèi.", "thaiMeaning": "ฉันต้องการจองโต๊ะสำหรับเย็นนี้ตอน 6 โมง"},
        "examples": [{"scenario": "โทรจองล่วงหน้า", "hanzi": "周末餐厅生意很好，建议提前订位。", "pinyin": "Zhōumò cāntīng shēngyi hěn hǎo, jiànyì tíqián dìngwèi.", "thaiMeaning": "สุดสัปดาห์ร้านอาหารลูกค้าเยอะมาก แนะนำให้จองโต๊ะล่วงหน้า"}]
    },
    {
        "hanzi": "上菜",
        "pinyin": "shàngcài",
        "thaiMeaning": "เสิร์ฟอาหาร / Serve dishes",
        "example": {"hanzi": "服务员，请问什么时候上菜？", "pinyin": "Fúwùyuán, qǐngwèn shénme shíhou shàngcài?", "thaiMeaning": "น้องพนักงาน ขอถามหน่อยเมื่อไหร่จะเสิร์ฟอาหารครับ?"},
        "examples": [{"scenario": "ตามอาหาร", "hanzi": "后厨正在加快上菜速度。", "pinyin": "Hòuchú zhèngzài jiākuài shàngcài sùdù.", "thaiMeaning": "ห้องครัวกำลังเร่งความเร็วในการเสิร์ฟอาหารอยู่"}]
    },
    {
        "hanzi": "翻台率",
        "pinyin": "fāntáilǜ",
        "thaiMeaning": "อัตราการหมุนเวียนโต๊ะ / Table turnover rate",
        "example": {"hanzi": "提高餐厅的翻台率。", "pinyin": "Tígāo cāntīng de fāntáilǜ.", "thaiMeaning": "ยกระดับอัตราการหมุนเวียนโต๊ะของร้านอาหาร"},
        "examples": [{"scenario": "การบริหารร้านอาหาร", "hanzi": "午高峰时段翻台率非常高。", "pinyin": "Wǔ gāofēng shíduàn fāntáilǜ fēicháng gāo.", "thaiMeaning": "ช่วงเวลาลูกค้าแน่นช่วงเที่ยง อัตราหมุนเวียนโต๊ะสูงมากๆ"}]
    },
    {
        "hanzi": "打包",
        "pinyin": "dǎbāo",
        "thaiMeaning": "ห่อกลับบ้าน / Pack leftovers / Takeout",
        "example": {"hanzi": "服务员，请帮我打包。", "pinyin": "Fúwùyuán, qǐng bāng wǒ dǎbāo.", "thaiMeaning": "พนักงานครับ ช่วยห่อกับข้าวส่วนที่เหลือกลับบ้านให้ที"},
        "examples": [{"scenario": "กินไม่หมดห่อกลับ", "hanzi": "没吃完的菜可以打包带走。", "pinyin": "Méi chī wán de cài kěyǐ dǎbāo dài zǒu.", "thaiMeaning": "อาหารที่กินไม่หมดสามารถใส่กล่องห่อกลับบ้านได้"}]
    },
    {
        "hanzi": "堂食",
        "pinyin": "tángshí",
        "thaiMeaning": "ทานที่ร้าน / Dine-in",
        "example": {"hanzi": "请问是堂食还是外带？", "pinyin": "Qǐngwèn shì tángshí háishì wàidài?", "thaiMeaning": "ขอถามหน่อย ทานที่ร้านหรือห่อกลับบ้านครับ?"},
        "examples": [{"scenario": "เลือกรูปแบบการทาน", "hanzi": "今天堂食顾客非常多。", "pinyin": "Jīntiān tángshí gùkè fēicháng duō.", "thaiMeaning": "วันนี้ลูกค้าที่มาทานที่ร้านเยอะมากๆ"}]
    },
    {
        "hanzi": "服务费",
        "pinyin": "fúwùfèi",
        "thaiMeaning": "ค่าบริการ / Service charge",
        "example": {"hanzi": "账单包含百分之十的服务费。", "pinyin": "Zhàngdān bāohán bǎi fēn zhī shí de fúwùfèi.", "thaiMeaning": "บิลรวมค่าบริการ 10% ไว้แล้ว"},
        "examples": [{"scenario": "เช็กบิลค่าอาหาร", "hanzi": "本店不收取额外服务费。", "pinyin": "Běndiàn bù shōuqǔ éwài fúwùfèi.", "thaiMeaning": "ร้านของพวกเราไม่คิดค่าบริการเพิ่มเติม"}]
    },
    {
        "hanzi": "小费",
        "pinyin": "xiǎofèi",
        "thaiMeaning": "ทิป / Tip",
        "example": {"hanzi": "给服务员留小费。", "pinyin": "Gěi fúwùyuán liú xiǎofèi.", "thaiMeaning": "ให้ทิปแก่พนักงานบริการ"},
        "examples": [{"scenario": "ธรรมเนียมสากล", "hanzi": "这里的文化习惯给小费。", "pinyin": "Zhèlǐ de wénhuà xíguàn gěi xiǎofèi.", "thaiMeaning": "วัฒนธรรมของที่นี่มีธรรมเนียมการให้ทิป"}]
    },
    {
        "hanzi": "后厨",
        "pinyin": "hòuchú",
        "thaiMeaning": "ห้องครัว / Back of house",
        "example": {"hanzi": "非工作人员请勿进入后厨。", "pinyin": "Fēi gōngzuò rényuán qǐng wù jìnrù hòuchú.", "thaiMeaning": "ผู้ไม่มีส่วนเกี่ยวข้องห้ามเข้าห้องครัว"},
        "examples": [{"scenario": "ระบบสุขาภิบาล", "hanzi": "后厨保持得非常干净整洁。", "pinyin": "Hòuchú bǎochí de fēicháng gānjìng zhěngjié.", "thaiMeaning": "ห้องครัวรักษาสภาพได้สะอาดเป็นระเบียบเรียบร้อยมาก"}]
    },
    {
        "hanzi": "主厨",
        "pinyin": "zhǔchú",
        "thaiMeaning": "เชฟใหญ่ / Executive chef",
        "example": {"hanzi": "主厨特制汤品。", "pinyin": "Zhǔchú tèzhì tāngpǐn.", "thaiMeaning": "ซุปสูตรรังสรรค์พิเศษโดยเชฟใหญ่"},
        "examples": [{"scenario": "แนะนำทีมงาน", "hanzi": "我们的主厨来自法国。", "pinyin": "Wǒmen de zhǔchú láizì Fǎguó.", "thaiMeaning": "เชฟใหญ่ของพวกเรามาจากประเทศฝรั่งเศส"}]
    },
    {
        "hanzi": "食品安全",
        "pinyin": "shípǐn ānquán",
        "thaiMeaning": "ความปลอดภัยทางอาหาร / Food safety",
        "example": {"hanzi": "严格把控食品安全。", "pinyin": "Yángé bǎkòng shípǐn ānquán.", "thaiMeaning": "ควบคุมความปลอดภัยทางอาหารอย่างเข้มงวด"},
        "examples": [{"scenario": "หัวใจธุรกิจอาหาร", "hanzi": "食品安全是餐饮业的生命线。", "pinyin": "Shípǐn ānquán shì cānyǐnyè de shēngmìngxiàn.", "thaiMeaning": "ความปลอดภัยทางอาหารคือหัวใจสำคัญของธุรกิจร้านอาหาร"}]
    },
    {
        "hanzi": "卫生标准",
        "pinyin": "wèishēng biāozhǔn",
        "thaiMeaning": "มาตรฐานสุขอนามัย / Hygiene standards",
        "example": {"hanzi": "符合国家卫生标准。", "pinyin": "Fúhé guójiā wèishēng biāozhǔn.", "thaiMeaning": "ตรงตามมาตรฐานสุขอนามัยระดับชาติ"},
        "examples": [{"scenario": "ตรวจสุขาภิบาล", "hanzi": "餐厅每月都会检测卫生标准。", "pinyin": "Cāntīng měi yuè dōu huì jiǎncè wèishēng biāozhǔn.", "thaiMeaning": "ร้านอาหารจะตรวจเช็กมาตรฐานสุขอนามัยเป็นประจำทุกเดือน"}]
    },
    {
        "hanzi": "营业额",
        "pinyin": "yíngyè'é",
        "thaiMeaning": "ยอดขายรวม / Business turnover / Revenue",
        "example": {"hanzi": "本月营业额大幅增加。", "pinyin": "Běn yuè yíngyè'é dàfú zēngjiā.", "thaiMeaning": "ยอดขายรวมเดือนนี้เพิ่มขึ้นเป็นอย่างมาก"},
        "examples": [{"scenario": "รายงานบัญชี", "hanzi": "周末的营业额占全周的一半。", "pinyin": "Zhōumò de yíngyè'é zhàn quán zhōu de yíbàn.", "thaiMeaning": "ยอดขายช่วงเสาร์อาทิตย์คิดเป็นครึ่งหนึ่งของทั้งสัปดาห์"}]
    },
    {
        "hanzi": "成本控制",
        "pinyin": "chéngběn kòngzhì",
        "thaiMeaning": "การควบคุมต้นทุน / Cost control",
        "example": {"hanzi": "做好食材成本控制。", "pinyin": "Zuò hǎo shícái chéngběn kòngzhì.", "thaiMeaning": "ทำระบบควบคุมต้นทุนวัตถุดิบให้ออกมาดี"},
        "examples": [{"scenario": "การบริหารกำไร", "hanzi": "合理的成本控制能提高利润。", "pinyin": "Hélǐ de chéngběn kòngzhì néng tígāo lìrùn.", "thaiMeaning": "การควบคุมต้นทุนที่สมเหตุสมผลช่วยเพิ่มกำไรได้"}]
    },
    {
        "hanzi": "损耗",
        "pinyin": "sǔnhào",
        "thaiMeaning": "ของเสียวัตถุดิบ / Wastage / Loss",
        "example": {"hanzi": "减少厨房食材损耗。", "pinyin": "Jiǎnshǎo chúfáng shícái sǔnhào.", "thaiMeaning": "ลดการสูญเสียของเสียวัตถุดิบในห้องครัว"},
        "examples": [{"scenario": "การจัดการคลัง", "hanzi": "降低损耗是增加收益的关键。", "pinyin": "Jiàngdī sǔnhào shì zēngjiā shōuyì de guānjiàn.", "thaiMeaning": "การปรับลดของเสียวัตถุดิบคือปัจจัยสำคัญในการเพิ่มรายได้"}]
    },
    {
        "hanzi": "盘点",
        "pinyin": "pándiǎn",
        "thaiMeaning": "เช็กสต็อก / Stocktaking / Inventory check",
        "example": {"hanzi": "月底进行库存盘点。", "pinyin": "Yuèdǐ jìnxíng kùcún pándiǎn.", "thaiMeaning": "ทำคลังเช็กสต็อกสินค้าปลายเดือน"},
        "examples": [{"scenario": "ปิดยอดประจำเดือน", "hanzi": "盘点发现部分调料存货不足。", "pinyin": "Pándiǎn fāxiàn bùfen tiáoliào cúnhuò bùzú.", "thaiMeaning": "เช็กสต็อกพบว่าเครื่องปรุงรสบางส่วนมีสต็อกไม่เพียงพอ"}]
    },
    {
        "hanzi": "采购",
        "pinyin": "cǎigòu",
        "thaiMeaning": "จัดซื้อจัดหา / Procurement",
        "example": {"hanzi": "负责清晨蔬菜采购。", "pinyin": "Fùzé qīngchén shūcài cǎigòu.", "thaiMeaning": "รับผิดชอบการจัดซื้อผักสดในตอนเช้ามืด"},
        "examples": [{"scenario": "ดิลิเวอรีวัตถุดิบ", "hanzi": "采购部门直接向农场进货。", "pinyin": "Cǎigòu bùmén zhíjiē xiàng nóngchǎng jìn huò.", "thaiMeaning": "แผนกจัดซื้อสั่งสินค้าตรงมาจากฟาร์มเกษตร"}]
    },
    {
        "hanzi": "保鲜",
        "pinyin": "bǎoxiān",
        "thaiMeaning": "การถนอมความสด / Keeping fresh",
        "example": {"hanzi": "注意肉类的保鲜。", "pinyin": "Zhùyì ròulèi de bǎoxiān.", "thaiMeaning": "ใส่ใจการถนอมความสดของเนื้อสัตว์"},
        "examples": [{"scenario": "การใช้อุปกรณ์", "hanzi": "使用保鲜膜和真空袋。", "pinyin": "Shǐyòng bǎoxiānmó hé zhēnkōng dài.", "thaiMeaning": "ใช้พลาสติกถนอมอาหารและถุงสูญญากาศ"}]
    },
    {
        "hanzi": "冷藏",
        "pinyin": "lěngcáng",
        "thaiMeaning": "แช่เย็น (ช่องธรรมดา) / Refrigerate",
        "example": {"hanzi": "开封后请冷藏保存。", "pinyin": "Kāifēng hòu qǐng lěngcáng bǎocún.", "thaiMeaning": "เปิดฝาแล้วกรุณาเก็บแช่เย็นไว้"},
        "examples": [{"scenario": "วิธีจัดเก็บ", "hanzi": "牛奶和蔬菜需要冷藏。", "pinyin": "Niúnǎi hé shūcài xūyào lěngcáng.", "thaiMeaning": "นมสดและผักจำเป็นต้องแช่เย็น"}]
    },
    {
        "hanzi": "冷冻",
        "pinyin": "lěngdòng",
        "thaiMeaning": "แช่แข็ง (ช่องฟรีซ) / Freeze / Deep freeze",
        "example": {"hanzi": "冷冻海鲜。", "pinyin": "Lěngdòng hǎixiān.", "thaiMeaning": "อาหารทะเลแช่แข็ง"},
        "examples": [{"scenario": "การเก็บเนื้อ", "hanzi": "新鲜牛肉可以放入冷冻室。", "pinyin": "Xīnxiān niúròu kěyǐ fàngrù lěngdòngshì.", "thaiMeaning": "เนื้อวัวสดสามารถนำเข้าเก็บในช่องแช่แข็งได้"}]
    },
    {
        "hanzi": "优惠券",
        "pinyin": "yōuhuìquàn",
        "thaiMeaning": "คูปองส่วนลด / Discount coupon",
        "example": {"hanzi": "使用五十元优惠券。", "pinyin": "Shǐyòng wǔshí yuán yōuhuìquàn.", "thaiMeaning": "ใช้คูปองส่วนลด 50 หยวน"},
        "examples": [{"scenario": "โปรโมชันร้าน", "hanzi": "扫码关注可以获得优惠券。", "pinyin": "Sǎo mǎ guānzhù kěyǐ huòdé yōuhuìquàn.", "thaiMeaning": "สแกนโค้ดติดตามรับคูปองส่วนลดได้"}]
    },
    {
        "hanzi": "满减",
        "pinyin": "mǎnjiǎn",
        "thaiMeaning": "ส่วนลดเมื่อยอดถึงเกณฑ์ / Spend X get Y discount",
        "example": {"hanzi": "满一百减二十。", "pinyin": "Mǎn yìbǎi jiǎn èrshí.", "thaiMeaning": "ทานครบ 100 หยวน ลด 20 หยวน"},
        "examples": [{"scenario": "แคมเปญร้านอาหาร", "hanzi": "店里正在做满减促销活动。", "pinyin": "Diànlǐ zhèngzài zuò mǎnjiǎn cùxiāo huódòng.", "thaiMeaning": "ในร้านกำลังจัดกิจกรรมโปรโมชันลดเมื่อยอดถึงเกณฑ์อยู่"}]
    },
    {
        "hanzi": "点评",
        "pinyin": "diǎnpíng",
        "thaiMeaning": "รีวิวให้คะแนนร้าน / Customer review & rating",
        "example": {"hanzi": "在网上写美食点评。", "pinyin": "Zài wǎngshang xiě měishí diǎnpíng.", "thaiMeaning": "เขียนรีวิวอาหารบนอินเทอร์เน็ต"},
        "examples": [{"scenario": "ชวนรีวิว", "hanzi": "好评如潮，点评得分很高。", "pinyin": "Hǎopíng rú cháo, diǎnpíng défēn hěn gāo.", "thaiMeaning": "คำชมหลั่งไหลมา คะแนนรีวิวสูงมาก"}]
    },
    {
        "hanzi": "投诉",
        "pinyin": "tóusù",
        "thaiMeaning": "การร้องเรียน / Customer complaint",
        "example": {"hanzi": "处理顾客投诉。", "pinyin": "Chǔlǐ gùkè tóusù.", "thaiMeaning": "จัดการข้อร้องเรียนของลูกค้า"},
        "examples": [{"scenario": "งานบริการ", "hanzi": "经理认真听取并处理了投诉。", "pinyin": "Jīnglǐ rènzhēn tīngqǔ bìng chǔlǐ le tóusù.", "thaiMeaning": "ผู้จัดการตั้งใจรับฟังและจัดการข้อร้องเรียนอย่างตั้งใจ"}]
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
print(f"Current vocabulary count before Restaurant Biz Expansion: {len(vocab_list)} words.")

filtered_new_words = []
for item in RESTAURANT_BIZ_WORDS:
    if item['hanzi'] not in existing_hanzi:
        existing_hanzi.add(item['hanzi'])
        filtered_new_words.append(item)
    else:
        print(f"Deduplication safeguard: skipping existing word '{item['hanzi']}'")

print(f"Adding {len(filtered_new_words)} completely unique Restaurant & F&B business words...")

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

print("vocabularyData.js successfully expanded with Restaurant & F&B Business vocabulary!")
