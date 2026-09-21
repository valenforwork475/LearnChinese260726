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
        "hanzi": "汤底",
        "pinyin": "tāngdǐ",
        "thaiMeaning": "น้ำซุปหัวเชื้อ / Broth base / Soup base",
        "example": {"hanzi": "请问需要什么口味的汤底？", "pinyin": "Qǐngwèn xūyào shénme kǒuwèi de tāngdǐ?", "thaiMeaning": "ขอถามหน่อย คุณต้องการน้ำซุปรสชาติแบบไหนครับ?"},
        "examples": [{"scenario": "เลือกซุปหม้อไฟ", "hanzi": "这款鸳鸯火锅有两种汤底。", "pinyin": "Zhè kuǎn yuānyang huǒguō yǒu liǎng zhǒng tāngdǐ.", "thaiMeaning": "หม้อไฟหยินหยางรุ่นนี้มีน้ำซุปหัวเชื้อ 2 แบบ"}]
    },
    {
        "hanzi": "高汤",
        "pinyin": "gāotāng",
        "thaiMeaning": "น้ำซุปกระดูกเคี่ยว / Stock broth",
        "example": {"hanzi": "使用慢火熬制的高汤。", "pinyin": "Shǐyòng mànhuǒ áozhì de gāotāng.", "thaiMeaning": "ใช้น้ำซุปกระดูกเคี่ยวด้วยไฟอ่อนๆ"},
        "examples": [{"scenario": "เชฟอธิบายน้ำซุป", "hanzi": "鲜美的高汤是这道菜的灵魂。", "pinyin": "Xiānměi de gāotāng shì zhè dào cài de línghún.", "thaiMeaning": "น้ำซุปกระดูกเคี่ยวที่สดกลมกล่อมคือหัวใจของอาหารจานนี้"}]
    },
    {
        "hanzi": "腌制",
        "pinyin": "yānzhì",
        "thaiMeaning": "หมัก (เนื้อสัตว์/ผัก) / Marinate",
        "example": {"hanzi": "牛肉需要提前腌制半小时。", "pinyin": "Niúròu xūyào tíqián yānzhì bàn xiǎoshí.", "thaiMeaning": "เนื้อวัวจำเป็นต้องหมักล่วงหน้าครึ่งชั่วโมง"},
        "examples": [{"scenario": "สูตรลับความอร่อย", "hanzi": "秘制酱料腌制的烧烤格外香。", "pinyin": "Mìzhì jiàngliào yānzhì de shāokǎo géwài xiāng.", "thaiMeaning": "ปิ้งย่างที่หมักด้วยซอสสูตรลับหอมเป็นพิเศษ"}]
    },
    {
        "hanzi": "预制菜",
        "pinyin": "yùzhìcài",
        "thaiMeaning": "อาหารสำเร็จรูปพร้อมปรุง / Pre-cooked / Ready-to-heat dish",
        "example": {"hanzi": "预制菜方便快捷。", "pinyin": "Yùzhìcài fāngbiàn kuàijié.", "thaiMeaning": "อาหารสำเร็จรูปพร้อมปรุงสะดวกและรวดเร็ว"},
        "examples": [{"scenario": "เทรนด์อุตสาหกรรม", "hanzi": "预制菜行业发展非常迅速。", "pinyin": "Yùzhìcài hángyè fāzhǎn fēicháng xùnsù.", "thaiMeaning": "อุตสาหกรรมอาหารสำเร็จรูปพร้อมปรุงเติบโตอย่างรวดเร็ว"}]
    },
    {
        "hanzi": "保质期",
        "pinyin": "bǎozhìqī",
        "thaiMeaning": "วันหมดอายุ / ระยะเวลาเก็บรักษา / Shelf life / Expiration date",
        "example": {"hanzi": "查看包装上的保质期。", "pinyin": "Chákàn bāozhuāng shàng de bǎozhìqī.", "thaiMeaning": "ตรวจเช็กวันหมดเกณฑ์รักษาบนบรรจุภัณฑ์"},
        "examples": [{"scenario": "ตรวจคลังสินค้า", "hanzi": "食品临近保质期需要及时处理。", "pinyin": "Shípǐn línjìn bǎozhìqī xūyào jíshí chǔlǐ.", "thaiMeaning": "อาหารที่ใกล้หมดอายุจำเป็นต้องจัดการโดยทันที"}]
    },
    {
        "hanzi": "过期",
        "pinyin": "guòqī",
        "thaiMeaning": "หมดอายุ / Past expiration date",
        "example": {"hanzi": "严禁使用过期食材。", "pinyin": "Yánjìn shǐyòng guòqī shícái.", "thaiMeaning": "ห้ามใช้วัตถุดิบหมดอายุโดยเด็ดขาด"},
        "examples": [{"scenario": "กฎความปลอดภัย", "hanzi": "过期的调料必须全部作废扔掉。", "pinyin": "Guòqī de tiáoliào bìxū quánbù zuòfèi rēngdiào.", "thaiMeaning": "เครื่องปรุงรสที่หมดอายุต้องนำไปทิ้งยกเลิกทั้งหมด"}]
    },
    {
        "hanzi": "出餐",
        "pinyin": "chūcān",
        "thaiMeaning": "การทำอาหารเสร็จพร้อมเสิร์ฟ / Kitchen dishing out",
        "example": {"hanzi": "后厨出餐速度很快。", "pinyin": "Hòuchú chūcān sùdù hěn kuài.", "thaiMeaning": "ความเร็วในการทำอาหารเสร็จพร้อมเสิร์ฟของห้องครัวเร็วมาก"},
        "examples": [{"scenario": "ช่วงพีคชั่วโมงด่วน", "hanzi": "高峰期要保证出餐质量。", "pinyin": "Gāofēngqī yào bǎozhèng chūcān zhìliàng.", "thaiMeaning": "ช่วงเวลาลูกค้าแน่นต้องรับประกันคุณภาพของอาหารที่เสิร์ฟออกไป"}]
    },
    {
        "hanzi": "摆盘",
        "pinyin": "bǎipán",
        "thaiMeaning": "การตกแต่งจัดจาน / Dish plating & presentation",
        "example": {"hanzi": "这道菜摆盘非常精致。", "pinyin": "Zhè dào cài bǎipán fēicháng jīngzhì.", "thaiMeaning": "อาหารจานนี้จัดตกแต่งจานประณีตมากๆ"},
        "examples": [{"scenario": "ศิลปะอาหาร", "hanzi": "美观的摆盘能增加顾客的食欲。", "pinyin": "Měiguān de bǎipán néng zēngjiā gùkè de shíyù.", "thaiMeaning": "การจัดจานที่สวยงามช่วยเพิ่มความอยากอาหารของลูกค้าได้"}]
    },
    {
        "hanzi": "估清",
        "pinyin": "gūqīng",
        "thaiMeaning": "สินค้าหมดประจำวัน / Out of stock for today / Sold out",
        "example": {"hanzi": "不好意思，招牌鸭肉已经估清了。", "pinyin": "Bù hǎoyìsi, zhāopái yāròu yǐjīng gūqīng le.", "thaiMeaning": "ขอโทษนะครับ เมนูเป็ดย่างเด็ดหมดประจำวันแล้วครับ"},
        "examples": [{"scenario": "แจ้งลูกค้า", "hanzi": "请在POS系统里把这道菜设为估清。", "pinyin": "Qǐng zài POS xìtǒng lǐ bǎ zhè dào cài shè wéi gūqīng.", "thaiMeaning": "กรุณาตั้งค่าอาหารจานนี้ว่าหมดประจำวันในระบบ POS ด้วยนะ"}]
    },
    {
        "hanzi": "加菜",
        "pinyin": "jiācài",
        "thaiMeaning": "สั่งอาหารเพิ่ม / Add more dishes",
        "example": {"hanzi": "服务员，我们想加菜。", "pinyin": "Fúwùyuán, wǒmen xiǎng jiācài.", "thaiMeaning": "น้องพนักงาน พวกเราอยากสั่งอาหารเพิ่มครับ"},
        "examples": [{"scenario": "เพิ่มรายการอาหาร", "hanzi": "请帮我再加一份牛肉和一份蔬菜。", "pinyin": "Qǐng bāng wǒ zài jiā yí fèn niúròu hé yí fèn shūcài.", "thaiMeaning": "ช่วยเพิ่มเนื้อวัวอีกหนึ่งจานและผักอีกหนึ่งจานให้ฉันที"}]
    },
    {
        "hanzi": "退菜",
        "pinyin": "tuìcài",
        "thaiMeaning": "ยกเลิก/คืนรายการอาหาร / Cancel dish order",
        "example": {"hanzi": "菜里有异物，顾客要求退菜。", "pinyin": "Cài lǐ yǒu yìwù, gùkè yāoqiú tuìcài.", "thaiMeaning": "ในอาหารมีสิ่งแปลกปลอม ลูกค้าขอคืนรายการอาหาร"},
        "examples": [{"scenario": "การแก้ปัญหาลูกค้า", "hanzi": "如果上错菜，可以给顾客退菜。", "pinyin": "Rúguǒ shàng cuò cài, kěyǐ gěi gùkè tuìcài.", "thaiMeaning": "หากเสิร์ฟอาหารผิด สามารถยกเลิกคืนรายการให้ลูกค้าได้"}]
    },
    {
        "hanzi": "换桌",
        "pinyin": "huànzhuō", "thaiMeaning": "ย้ายโต๊ะอาหาร / Change table",
        "example": {"hanzi": "请问可以帮我们换桌吗？", "pinyin": "Qǐngwèn kěyǐ bāng wǒmen huànzhuō ma?", "thaiMeaning": "ขอถามหน่อย ช่วยพวกเราย้ายโต๊ะได้ไหมครับ?"},
        "examples": [{"scenario": "ขอย้ายไปริมหน้าต่าง", "hanzi": "顾客想换到靠窗的桌位。", "pinyin": "Gùkè xiǎng huàn dào kào chuāng de zhuōwèi.", "thaiMeaning": "ลูกค้าอยากย้ายไปนั่งโต๊ะริมหน้าต่าง"}]
    },
    {
        "hanzi": "催菜",
        "pinyin": "cuīcài",
        "thaiMeaning": "เร่งอาหารกับครัว / Speed up dish / Urge kitchen",
        "example": {"hanzi": "顾客在催菜了，请快一点。", "pinyin": "Gùkè zài cuīcài le, qǐng kuài yìdiǎn.", "thaiMeaning": "ลูกค้าเริ่มเร่งอาหารแล้ว กรุณาเร็วหน่อยนะครับ"},
        "examples": [{"scenario": "บริการลูกค้าด่วน", "hanzi": "请去后厨帮三号桌催一下菜。", "pinyin": "Qǐng qù hòuchú bāng sān hào zhuō cuī yíxià cài.", "thaiMeaning": "กรุณาไปที่ครัวช่วยเร่งอาหารให้โต๊ะหมายเลข 3 สักหน่อย"}]
    },
    {
        "hanzi": "错单",
        "pinyin": "cuòdān",
        "thaiMeaning": "คีย์บิลผิดพลาด / Wrong order",
        "example": {"hanzi": "避免打错单。", "pinyin": "Bìmiǎn dǎ cuòdān.", "thaiMeaning": "หลีกเลี่ยงการคีย์รายการบิลผิดพลาด"},
        "examples": [{"scenario": "ตรวจสอบรายการ", "hanzi": "点完餐后请和顾客核对，防止错单。", "pinyin": "Diǎn wán cān hòu qǐng hé gùkè héduì, fángzhǐ cuòdān.", "thaiMeaning": "สั่งอาหารเสร็จแล้วกรุณาทวนกับลูกค้าเพื่อป้องกันคีย์รายการผิด"}]
    },
    {
        "hanzi": "漏单",
        "pinyin": "lòudān",
        "thaiMeaning": "ตกหล่นรายการอาหาร / Missed dish order",
        "example": {"hanzi": "检查是否有漏单的菜品。", "pinyin": "Jiǎnchá shìfǒu yǒu lòudān de càipǐn.", "thaiMeaning": "ตรวจเช็กว่ามีรายการอาหารตกหล่นบ้างไหม"},
        "examples": [{"scenario": "บริการลูกค้า", "hanzi": "不好意思，刚才漏单了，现在马上补上。", "pinyin": "Bù hǎoyìsi, gāngcái lòudān le, xiànzài mǎshàng bǔ shàng.", "thaiMeaning": "ขอโทษนะครับ เมื่อสักครู่ตกหล่นไป เดี๋ยวนี้จะรีบเสิร์ฟชดเชยให้ทันที"}]
    },
    {
        "hanzi": "客满",
        "pinyin": "kèmǎn",
        "thaiMeaning": "โต๊ะเต็มทุกที่นั่ง / House full / Fully booked",
        "example": {"hanzi": "抱歉，今晚餐厅已客满。", "pinyin": "Bàoqiàn, jīn wǎn cāntīng yǐ kèmǎn.", "thaiMeaning": "ขออภัยนะครับ คืนนี้ร้านอาหารโต๊ะเต็มหมดแล้วครับ"},
        "examples": [{"scenario": "แจ้งลูกค้าหน้าร้าน", "hanzi": "客满时请指引顾客到候餐区休息。", "pinyin": "Kèmǎn shí qǐng zhǐyǐn gùkè dào hòucānqū xiūxi.", "thaiMeaning": "เวลาโต๊ะเต็มกรุณาเชิญลูกค้าไปพักรอที่จุดรอคิว"}]
    },
    {
        "hanzi": "候餐区",
        "pinyin": "hòucānqū",
        "thaiMeaning": "โซนนั่งรอคิวอาหาร / Restaurant waiting area",
        "example": {"hanzi": "请在候餐区稍作休息。", "pinyin": "Qǐng zài hòucānqū shāo zuò xiūxi.", "thaiMeaning": "กรุณานั่งพักรอสักครู่ที่โซนนั่งรอคิวครับ"},
        "examples": [{"scenario": "บริการลูกค้าคิว", "hanzi": "候餐区免费提供茶水和小吃。", "pinyin": "Hòucānqū miǎnfèi tígōng cháshuǐ hé xiǎochī.", "thaiMeaning": "โซนนั่งรอคิวมีบริการน้ำชาและขนมฟรี"}]
    },
    {
        "hanzi": "消毒",
        "pinyin": "xiāodú",
        "thaiMeaning": "ฆ่าเชื้อโรค / Sterilize / Disinfect",
        "example": {"hanzi": "餐具均已严格消毒。", "pinyin": "Cānjù jūn yǐ yángé xiāodú.", "thaiMeaning": "จานชามช้อนส้อมผ่านการฆ่าเชื้อโรคอย่างเข้มงวดเรียบร้อย"},
        "examples": [{"scenario": "มาตรฐานสุขอนามัย", "hanzi": "每桌客离后都会进行桌面消毒。", "pinyin": "Měi zhuō kè lí hòu dōu huì jìnxíng zhuōmiàn xiāodú.", "thaiMeaning": "หลังจากลูกค้าทุกโต๊ะลุกออกไป จะมีการฆ่าเชื้อบนหน้าโต๊ะเสมอ"}]
    }
]

cache = load_cache()

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
print(f"Current vocabulary count before Restaurant Biz Expansion Batch 2: {len(vocab_list)} words.")

filtered_new_words = []
for item in NEW_WORDS_BATCH2:
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

print("vocabularyData.js successfully expanded with Restaurant & F&B business vocabulary batch 2!")
