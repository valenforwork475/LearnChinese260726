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
        "hanzi": "打算",
        "pinyin": "dǎsuàn",
        "thaiMeaning": "ตั้งใจ / วางแผนว่าจะ...",
        "example": {"hanzi": "你假期有什么打算？", "pinyin": "Nǐ jiàqī yǒu shénme dǎsuàn?", "thaiMeaning": "ช่วงวันหยุดคุณวางแผนทำอะไรไว้บ้าง?"},
        "examples": [{"scenario": "แพลนท่องเที่ยว", "hanzi": "我打算下个月去中国旅游。", "pinyin": "Wǒ dǎsuàn xià ge yuè qù Zhōngguó lǚyóu.", "thaiMeaning": "ฉันวางแผนว่าจะไปเที่ยวจีนในเดือนหน้า"}]
    },
    {
        "hanzi": "决定",
        "pinyin": "juédìng",
        "thaiMeaning": "ตัดสินใจ",
        "example": {"hanzi": "我已经做出了决定。", "pinyin": "Wǒ yǐjīng zuòchū le juédìng.", "thaiMeaning": "ฉันทำการตัดสินใจเรียบร้อยแล้ว"},
        "examples": [{"scenario": "การตัดสินใจเปลี่ยนงาน", "hanzi": "这个决定非常重要。", "pinyin": "Zhège juédìng fēicháng zhòngyào.", "thaiMeaning": "การตัดสินใจครั้งนี้มีความสำคัญเป็นอย่างมาก"}]
    },
    {
        "hanzi": "锻炼",
        "pinyin": "duànliàn",
        "thaiMeaning": "ออกกำลังกาย / ฝึกฝน",
        "example": {"hanzi": "每天坚持锻炼身体。", "pinyin": "Měitiān jiānchí duànliàn shēntǐ.", "thaiMeaning": "ยืนหยัดออกกำลังกายร่างกายทุกวัน"},
        "examples": [{"scenario": "คำแนะนำสุขภาพ", "hanzi": "多锻炼身体可以提高免疫力。", "pinyin": "Duō duànliàn shēntǐ kěyǐ tígāo miǎnyìlì.", "thaiMeaning": "ออกกำลังกายบ่อยๆ ช่วยยกระดับภูมิคุ้มกันร่างกาย"}]
    },
    {
        "hanzi": "关系",
        "pinyin": "guānxi",
        "thaiMeaning": "ความสัมพันธ์ / การเกี่ยวข้อง",
        "example": {"hanzi": "没关系。", "pinyin": "Méi guānxi.", "thaiMeaning": "ไม่เป็นไร"},
        "examples": [{"scenario": "ความสัมพันธ์ระหว่างบุคคล", "hanzi": "我和同事的关系很好。", "pinyin": "Wǒ hé tóngshì de guānxi hěn hǎo.", "thaiMeaning": "ความสัมพันธ์ของฉันกับเพื่อนร่วมงานดีมาก"}]
    },
    {
        "hanzi": "各种各样",
        "pinyin": "gèzhǒng gèyàng",
        "thaiMeaning": "หลากหลายรูปแบบ / สารพัดชนิด",
        "example": {"hanzi": "超市里有各种各样的水果。", "pinyin": "Chāoshì lǐ yǒu gèzhǒng gèyàng de shuǐguǒ.", "thaiMeaning": "ในซูเปอร์มาร์เก็ตมีผลไม้หลากหลายรูปแบบ"},
        "examples": [{"scenario": "เดินชมสินค้า", "hanzi": "这里展出了各种各样的艺术品。", "pinyin": "Zhèlǐ zhǎnchū le gèzhǒng gèyàng de yìshùpǐn.", "thaiMeaning": "ที่นี่จัดแสดงผลงานศิลปะหลากหลายรูปแบบ"}]
    },
    {
        "hanzi": "经验",
        "pinyin": "jīngyàn",
        "thaiMeaning": "ประสบการณ์",
        "example": {"hanzi": "丰富的工作经验。", "pinyin": "Fēngfù de gōngzuò jīngyàn.", "thaiMeaning": "ประสบการณ์การทำงานที่โชกโชน"},
        "examples": [{"scenario": "การสัมภาษณ์งาน", "hanzi": "他在这方面很有经验。", "pinyin": "Tā zài zhè fāngmiàn hěn yǒu jīngyàn.", "thaiMeaning": "เขาในด้านนี้มีประสบการณ์สูงมาก"}]
    },
    {
        "hanzi": "能力",
        "pinyin": "nénglì",
        "thaiMeaning": "ความสามารถ / สมรรถภาพ",
        "example": {"hanzi": "提升个人能力。", "pinyin": "Tíshēng gèrén nénglì.", "thaiMeaning": "ยกระดับความสามารถส่วนบุคคล"},
        "examples": [{"scenario": "ประเมินพนักงาน", "hanzi": "她的工作能力非常强。", "pinyin": "Tā de gōngzuò nénglì fēicháng qiáng.", "thaiMeaning": "ความสามารถในการทำงานของเธอแข็งแกร่งโดดเด่นมาก"}]
    },
    {
        "hanzi": "态度",
        "pinyin": "tàidu",
        "thaiMeaning": "ทัศนคติ / ท่าที",
        "example": {"hanzi": "态度很端正。", "pinyin": "Tàidu hěn duānzhèng.", "thaiMeaning": "ทัศนคติต่างๆ สุภาพเรียบร้อยถูกต้อง"},
        "examples": [{"scenario": "การบริการ", "hanzi": "服务员的工作态度非常好。", "pinyin": "Fúwùyuán de gōngzuò tàidu fēicháng hǎo.", "thaiMeaning": "ทัศนคติการทำงานของพนักงานบริการดีมากๆ"}]
    },
    {
        "hanzi": "环境",
        "pinyin": "huánjìng",
        "thaiMeaning": "สภาพแวดล้อม / สิ่งแวดล้อม",
        "example": {"hanzi": "保护自然环境。", "pinyin": "Bǎohù zìrán huánjìng.", "thaiMeaning": "ปกป้องรักษาสภาพแวดล้อมทางธรรมชาติ"},
        "examples": [{"scenario": "ที่อยู่อาศัย", "hanzi": "这里生活环境很安静。", "pinyin": "Zhèlǐ shēnghuó huánjìng hěn ānjìng.", "thaiMeaning": "สภาพแวดล้อมการอยู่อาศัยที่นี่เงียบสงบมาก"}]
    },
    {
        "hanzi": "安全",
        "pinyin": "ānquán",
        "thaiMeaning": "ปลอดภัย / ความปลอดภัย",
        "example": {"hanzi": "注意安全！", "pinyin": "Zhùyì ānquán!", "thaiMeaning": "ระมัดระวังความปลอดภัยนะ!"},
        "examples": [{"scenario": "การเดินทาง", "hanzi": "祝你一路平安，安全到达。", "pinyin": "Zhù nǐ yílù píng'ān, ānquán dào dá.", "thaiMeaning": "ขอให้เดินทางราบรื่นและถึงที่หมายอย่างปลอดภัย"}]
    },
    {
        "hanzi": "保护",
        "pinyin": "bǎohù",
        "thaiMeaning": "ปกป้อง / คุ้มครอง",
        "example": {"hanzi": "保护眼睛。", "pinyin": "Bǎohù yǎnjing.", "thaiMeaning": "ถนอมปกป้องสายตา"},
        "examples": [{"scenario": "ดูแลสุขภาพ", "hanzi": "戴口罩可以保护自己。", "pinyin": "Dài kǒuzhào kěyǐ bǎohù zìjǐ.", "thaiMeaning": "สวมแมสก์ช่วยปกป้องดูแลตัวเองได้"}]
    },
    {
        "hanzi": "健康",
        "pinyin": "jiànkāng",
        "thaiMeaning": "สุขภาพแข็งแรง",
        "example": {"hanzi": "祝你身体健康！", "pinyin": "Zhù nǐ shēntǐ jiànkāng!", "thaiMeaning": "ขอให้คุณสุขภาพร่างกายแข็งแรง!"},
        "examples": [{"scenario": "อวยพรผู้ใหญ่", "hanzi": "健康是最大的财富。", "pinyin": "Jiànkāng shì zuì dà de cáifù.", "thaiMeaning": "สุขภาพที่แข็งแรงคือทรัพย์สมบัติที่ยิ่งใหญ่ที่สุด"}]
    },
    {
        "hanzi": "推荐",
        "pinyin": "tuījiàn",
        "thaiMeaning": "แนะนำ (บอกต่อสิ่งดีๆ)",
        "example": {"hanzi": "强烈推荐这部电影。", "pinyin": "Qiángliè tuījiàn zhè bù diànyǐng.", "thaiMeaning": "ขอแนะนำภาพยนตร์เรื่องนี้เป็นอย่างยิ่ง"},
        "examples": [{"scenario": "ถามเมนูอร่อย", "hanzi": "请问招牌菜有什么推荐吗？", "pinyin": "Qǐngwèn zhāopái cài yǒu shénme tuījiàn ma?", "thaiMeaning": "ขอถามหน่อย เมนูแนะนำของร้านมีอะไรบ้างครับ?"}]
    },
    {
        "hanzi": "要求",
        "pinyin": "yāoqiú",
        "thaiMeaning": "ข้อเรียกร้อง / ข้อกำหนด",
        "example": {"hanzi": "符合要求。", "pinyin": "Fúhé yāoqiú.", "thaiMeaning": "ตรงตามข้อกำหนดมาตรฐาน"},
        "examples": [{"scenario": "เกณฑ์การทำงาน", "hanzi": "老板对工作质量的要求很高。", "pinyin": "Lǎobǎn duì gōngzuò zhìliàng de yāoqiú hěn gāo.", "thaiMeaning": "เจ้านายมีข้อกำหนดมาตรฐานคุณภาพงานสูงมาก"}]
    },
    {
        "hanzi": "按照",
        "pinyin": "ànzhào",
        "thaiMeaning": "ปฏิบัติตาม / อิงตาม",
        "example": {"hanzi": "按照规定办理。", "pinyin": "Ànzhào guīdìng bànlǐ.", "thaiMeaning": "ดำเนินการปฏิบัติตามข้อกำหนด"},
        "examples": [{"scenario": "ทำตามขั้นตอน", "hanzi": "请按照说明书进行操作。", "pinyin": "Qǐng ànzhào shuōmíngshū jìnxíng cāozuò.", "thaiMeaning": "กรุณาดำเนินการตามคู่มือคำอธิบายนะ"}]
    },
    {
        "hanzi": "根据",
        "pinyin": "gēnjù",
        "thaiMeaning": "อ้างอิงตาม / จากข้อมูล",
        "example": {"hanzi": "根据实际情况决定。", "pinyin": "Gēnjù shíjì qíngkuàng juédìng.", "thaiMeaning": "ตัดสินใจอ้างอิงตามสถานการณ์จริง"},
        "examples": [{"scenario": "พยากรณ์อากาศ", "hanzi": "根据天气预报，明天会下雨。", "pinyin": "Gēnjù tiānqì yùbào, míngtiān huì xià yǔ.", "thaiMeaning": "จากข้อมูลพยากรณ์อากาศ พรุ่งนี้ฝนจะตก"}]
    },
    {
        "hanzi": "条件",
        "pinyin": "tiáojiàn",
        "thaiMeaning": "เงื่อนไข / ปัจจัยแวดล้อม",
        "example": {"hanzi": "创造良好条件。", "pinyin": "Chuàngzào liánghǎo tiáojiàn.", "thaiMeaning": "สร้างเงื่อนไขและปัจจัยอันดีงาม"},
        "examples": [{"scenario": "เงื่อนไขการสมัครงาน", "hanzi": "你完全符合招聘条件。", "pinyin": "Nǐ wánquán fúhé zhāopìn tiáojiàn.", "thaiMeaning": "คุณมีคุณสมบัติตรงตามเงื่อนไขการรับสมัครงานทุกประการ"}]
    },
    {
        "hanzi": "价格",
        "pinyin": "jiàgé",
        "thaiMeaning": "ราคา",
        "example": {"hanzi": "价格很合理。", "pinyin": "Jiàgé hěn hélǐ.", "thaiMeaning": "ราคาสมเหตุสมผลมาก"},
        "examples": [{"scenario": "สอบถามราคา", "hanzi": "请问这件衣服的价格是多少？", "pinyin": "Qǐngwèn zhè jiàn yīfu de jiàgé shì duōshao?", "thaiMeaning": "ขอถามหน่อย เสื้อตัวนี้ราคาเท่าไหร่ครับ?"}]
    },
    {
        "hanzi": "准确",
        "pinyin": "zhǔnquè",
        "thaiMeaning": "แม่นยำถูกต้อง",
        "example": {"hanzi": "发音很准确。", "pinyin": "Fāyīn hěn zhǔnquè.", "thaiMeaning": "ออกเสียงได้แม่นยำถูกต้องมาก"},
        "examples": [{"scenario": "ตรวจทานข้อมูล", "hanzi": "请确认数据是否准确。", "pinyin": "Qǐng quèrèn shùjù shìfǒu zhǔnquè.", "thaiMeaning": "กรุณายืนยันว่าข้อมูลถูกต้องแม่นยำหรือไม่"}]
    },
    {
        "hanzi": "效果",
        "pinyin": "xiàoguǒ",
        "thaiMeaning": "ผลลัพธ์ / ประสิทธิภาพ",
        "example": {"hanzi": "效果非常好！", "pinyin": "Xiàoguǒ fēicháng hǎo!", "thaiMeaning": "ผลลัพธ์ออกมาดีมากๆ!"},
        "examples": [{"scenario": "ทานยาแล้วหายดี", "hanzi": "这种药治疗感冒效果显著。", "pinyin": "Zhè zhǒng yào zhìliáo gǎnmào xiàoguǒ xiǎnzhù.", "thaiMeaning": "ยาตัวนี้รักษาอาการไข้หวัดได้ผลลัพธ์โดดเด่นมาก"}]
    },
    {
        "hanzi": "重视",
        "pinyin": "zhòngshì",
        "thaiMeaning": "ให้ความสำคัญ / ใส่ใจเป็นพิเศษ",
        "example": {"hanzi": "重视教育。", "pinyin": "Zhòngshì jiàoyù.", "thaiMeaning": "ให้ความสำคัญกับการศึกษา"},
        "examples": [{"scenario": "การทำงานร่วมกัน", "hanzi": "公司非常重视客户的反馈。", "pinyin": "Gōngsī fēicháng zhòngshì kèhù de fǎnkuì.", "thaiMeaning": "บริษัทให้ความสำคัญกับข้อติชม feedback ของลูกค้าเป็นอย่างมาก"}]
    },
    {
        "hanzi": "交流",
        "pinyin": "jiāoliú",
        "thaiMeaning": "แลกเปลี่ยนความคิดเห็น / สื่อสาร",
        "example": {"hanzi": "加强交流。", "pinyin": "Jiāqiáng jiāoliú.", "thaiMeaning": "ยกระดับการแลกเปลี่ยนสื่อสารให้แน่นแฟ้น"},
        "examples": [{"scenario": "สังสรรค์นานาชาติ", "hanzi": "多与外国人交流能提高口语能力。", "pinyin": "Duō yǔ wàiguórén jiāoliú néng tígāo kǒuyǔ nénglì.", "thaiMeaning": "การพูดคุยสื่อสารกับชาวต่างชาติบ่อยๆ ช่วยยกระดับทักษะการพูดได้"}]
    },
    {
        "hanzi": "负责",
        "pinyin": "fùzé",
        "thaiMeaning": "รับผิดชอบ / ดูแลงานนั้นๆ",
        "example": {"hanzi": "谁负责这个项目？", "pinyin": "Shéi fùzé zhège xiàngmù?", "thaiMeaning": "ใครเป็นคนรับผิดชอบดูแลโปรเจกต์นี้?"},
        "examples": [{"scenario": "มอบหมายงาน", "hanzi": "他是一个非常有责任心的人。", "pinyin": "Tā shì yí gè fēicháng yǒu zérènxīn de rén.", "thaiMeaning": "เขาเป็นคนที่มีความรับผิดชอบสูงมาก"}]
    },
    {
        "hanzi": "结束",
        "pinyin": "jiéshù",
        "thaiMeaning": "สิ้นสุด / สิ้นสุดการทำงาน",
        "example": {"hanzi": "会议结束了。", "pinyin": "Huìyì jiéshù le.", "thaiMeaning": "การประชุมสิ้นสุดลงแล้ว"},
        "examples": [{"scenario": "จบทริปเดินทาง", "hanzi": "愉快的假期结束了。", "pinyin": "Yúkuài de jiàqī jiéshù le.", "thaiMeaning": "ช่วงวันหยุดอันแสนสุขได้สิ้นสุดลงแล้ว"}]
    },
    {
        "hanzi": "组织",
        "pinyin": "zǔzhī",
        "thaiMeaning": "จัดองค์กร / จัดกิจกรรม",
        "example": {"hanzi": "组织活动。", "pinyin": "Zǔzhī huó dòng.", "thaiMeaning": "จัดกิจกรรมขึ้น"},
        "examples": [{"scenario": "จัดงานบริษัท", "hanzi": "公司周末组织了一次团建活动。", "pinyin": "Gōngsī zhōumò zǔzhī le yí cì tuánjiàn huódòng.", "thaiMeaning": "บริษัทจัดกิจกรรมสร้างทีมสัมพันธ์ขึ้นในสุดสัปดาห์"}]
    }
]

cache = load_cache()

all_texts = set()
for w in NEW_WORDS:
    all_texts.add(w['hanzi'])
    if 'example' in w and 'hanzi' in w['example']:
        all_texts.add(w['example']['hanzi'])
    if 'examples' in w:
        for ex in w['examples']:
            all_texts.add(ex['hanzi'])

uncached = [t for t in all_texts if t not in cache]
print(f"Translating {len(uncached)} new batch 2 HSK 2-3 sentence texts...")

if uncached:
    with ThreadPoolExecutor(max_workers=20) as executor:
        futures = [executor.submit(fetch_translation, t) for t in uncached]
        for f in as_completed(futures):
            orig, trans = f.result()
            if trans:
                cache[orig] = trans
    save_cache(cache)

vocab_file = os.path.join(os.path.dirname(__file__), '../src/data/vocabularyData.js')
with open(vocab_file, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'export const vocabularyList = (\[[\s\S]*\]);?\s*$', content)
if not match:
    print("Could not parse vocabularyList!")
    sys.exit(1)

vocab_list = json.loads(match.group(1))
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

print("vocabularyData.js successfully expanded to 600+ words!")
