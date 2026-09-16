const fs = require('fs');
const path = require('path');

// Dictionary for common Hanzi & Thai to English
const TRANSLATIONS = {
  // Common self-talk sentences & context
  "八点起床。": "Get up at 8 o'clock.",
  "去刷牙。": "Go brush teeth.",
  "洗脸。": "Wash face.",
  "洗澡。": "Take a shower.",
  "梳头。": "Comb hair.",
  "刮胡子。": "Shave beard.",
  "化妆。": "Put on makeup.",
  "喝杯温水。": "Drink a glass of warm water.",
  "吃早餐。": "Eat breakfast.",
  "冲一杯咖啡。": "Make a cup of coffee.",
  "整理包包。": "Pack backpack.",
  "准备出门。": "Get ready to go out.",
  "坐电梯下楼。": "Take elevator downstairs.",
  "锁门。": "Lock the door.",
  "坐公交车去公司。": "Take bus to company.",
  "坐地铁。": "Take the subway.",
  "开车去上班。": "Drive to work.",
  "走路去地铁站。": "Walk to subway station.",
  "扫码付款。": "Scan code to pay.",
  "打卡上班。": "Clock in for work.",
  "开电脑工作。": "Turn on computer to work.",
  "查工作邮件。": "Check work emails.",
  "开晨会。": "Have morning meeting.",
  "写日报。": "Write daily report.",
  "打印文件。": "Print document.",
  "给客户打电话。": "Call client.",
  "吃午餐。": "Eat lunch.",
  "午睡二十分钟。": "Take a 20-minute nap.",
  "喝杯奶茶。": "Drink a glass of milk tea.",
  "六点下班。": "Off work at 6 PM.",

  "穿衬衫。": "Wear shirt.",
  "穿牛仔裤。": "Wear jeans.",
  "穿连衣裙。": "Wear dress.",
  "穿外套。": "Wear coat.",
  "穿运动鞋。": "Wear sports shoes.",
  "戴帽子。": "Wear hat.",
  "戴眼镜。": "Wear glasses.",
  "戴手表。": "Wear watch.",
  "带雨伞。": "Bring umbrella.",
  "拿包包。": "Take bag.",

  // Taste sentences (t1-t8)
  "我不喜欢吃太油腻的东西。": "I don't like eating things that are too greasy.",
  "这个面包很软很新鲜。": "This bread is very soft and fresh.",
  "这块牛肉非常嫩。": "This piece of beef is very tender.",
  "肉太硬了，咬不动。": "The meat is too tough, I can't chew it.",
  "汤有点儿咸，加一点水吧。": "The soup is a bit salty, let's add some water.",
  "味道太淡了，没有盐。": "The taste is too bland, there's no salt at all.",
  "这个水果甜甜的，很好吃。": "This fruit is nice and sweet, very delicious.",
  "这个柠檬太酸了！": "This lemon is too sour!",

  // Survival & Emergency sentences
  "请再说一遍。": "Please say it again.",
  "请说慢一点。": "Please speak a little slower.",
  "我没听懂。": "I didn't understand.",
  "一斤是多少克？": "How many grams is one jin (500g)?",
  "一公斤是多少？": "How much is one kilogram?",
  "请帮我称一下。": "Please weigh this for me.",
  "这是什么意思？": "What does this mean?",
  "这个用中文怎么说？": "How do you say this in Chinese?",
  "可以写下来吗？": "Can you write it down?",
  "我会说一点儿中文。": "I can speak a little Chinese.",
  "我正在学中文。": "I am learning Chinese.",
  "我说得不太好。": "I don't speak very well.",
  "我对花生过敏。": "I am allergic to peanuts.",
  "我的钱包丢了。": "I lost my wallet.",
  "请帮我报警！": "Please help me call the police!",
  "可以帮我一下吗？": "Can you help me for a moment?",
  "洗手间在哪儿？": "Where is the restroom?",
  "我迷路了。": "I am lost."
};

// Word-level translations for word chips
const WORD_TRANSLATIONS = {
  "八点": "8 o'clock",
  "起床": "get up / wake up",
  "去": "go to",
  "刷牙": "brush teeth",
  "洗脸": "wash face",
  "洗澡": "take a shower",
  "梳头": "comb hair",
  "刮胡子": "shave",
  "化妆": "put on makeup",
  "喝": "drink",
  "杯": "cup / glass",
  "温水": "warm water",
  "吃": "eat",
  "早餐": "breakfast",
  "冲": "make / brew",
  "咖啡": "coffee",
  "整理": "pack / organize",
  "包包": "bag",
  "准备": "get ready",
  "出门": "go out",
  "坐": "take / ride",
  "电梯": "elevator",
  "下楼": "downstairs",
  "锁": "lock",
  "门": "door",
  "公交车": "bus",
  "公司": "company",
  "地铁": "subway",
  "开车": "drive car",
  "上班": "go to work",
  "走路": "walk",
  "地铁站": "subway station",
  "扫码": "scan code",
  "付款": "pay",
  "打卡": "clock in",
  "开": "turn on",
  "电脑": "computer",
  "工作": "work",
  "查": "check",
  "邮件": "email",
  "晨会": "morning meeting",
  "写": "write",
  "日报": "daily report",
  "打印": "print",
  "文件": "document",
  "给": "to / give",
  "客户": "client / customer",
  "打电话": "call phone",
  "午餐": "lunch",
  "午睡": "nap",
  "二十分钟": "20 minutes",
  "奶茶": "milk tea",
  "六点": "6 o'clock",
  "下班": "off work",
  "穿": "wear",
  "衬衫": "shirt",
  "牛仔裤": "jeans",
  "连衣裙": "dress",
  "外套": "coat",
  "运动鞋": "sneakers",
  "戴": "wear (accessary)",
  "帽子": "hat",
  "眼镜": "glasses",
  "手表": "watch",
  "带": "bring",
  "雨伞": "umbrella",
  "拿": "take / hold",
  "我不": "I don't",
  "喜欢": "like",
  "太": "too",
  "油腻": "greasy",
  "东西": "thing / food",
  "面包": "bread",
  "很软": "very soft",
  "新鲜": "fresh",
  "牛肉": "beef",
  "非常嫩": "very tender",
  "肉": "meat",
  "太硬了": "too hard",
  "咬不动": "can't chew",
  "汤": "soup",
  "有点儿咸": "a bit salty",
  "加水": "add water",
  "味道": "taste",
  "太淡了": "too bland",
  "没有盐": "no salt",
  "水果": "fruit",
  "甜甜的": "sweet",
  "很好吃": "very delicious",
  "柠檬": "lemon",
  "太酸了": "too sour",
  "辣": "spicy",
  "麻辣": "málà / numbing spicy",
  "苦": "bitter",
  "脆": "crispy",
  "软糯": "chewy / sticky"
};

function getSentenceEnglish(hanzi, thaiMeaning) {
  if (TRANSLATIONS[hanzi]) return TRANSLATIONS[hanzi];
  if (TRANSLATIONS[hanzi.trim()]) return TRANSLATIONS[hanzi.trim()];

  // Auto fallback generator from Thai meaning if exact Hanzi not in dictionary
  let t = thaiMeaning;
  if (t.includes('ตื่นนอน')) return t.replace('ตื่นนอน', 'get up');
  if (t.includes('แปรงฟัน')) return t.replace('แปรงฟัน', 'brush teeth');
  if (t.includes('ล้างหน้า')) return t.replace('ล้างหน้า', 'wash face');
  if (t.includes('อาบน้ำ')) return t.replace('อาบน้ำ', 'take a shower');
  if (t.includes('กิน') || t.includes('ทาน')) return t.replace(/กิน|ทาน/g, 'eat');
  if (t.includes('ดื่ม')) return t.replace('ดื่ม', 'drink');
  if (t.includes('ไป')) return t.replace('ไป', 'go to');
  if (t.includes('ซื้อ')) return t.replace('ซื้อ', 'buy');
  if (t.includes('ขอ')) return t.replace('ขอ', 'please give');
  if (t.includes('ชอบ')) return t.replace('ชอบ', 'like');
  if (t.includes('อร่อย')) return t.replace('อร่อย', 'delicious');
  if (t.includes('เผ็ด')) return t.replace('เผ็ด', 'spicy');
  if (t.includes('หวาน')) return t.replace('หวาน', 'sweet');
  if (t.includes('เค็ม')) return t.replace('เค็ม', 'salty');
  if (t.includes('จืด')) return t.replace('จืด', 'bland');
  if (t.includes('นุ่ม')) return t.replace('นุ่ม', 'soft / tender');
  if (t.includes('แข็ง')) return t.replace('แข็ง', 'hard');
  if (t.includes('เลี่ยน') || t.includes('มัน')) return t.replace(/มัน|เลี่ยน/g, 'greasy');

  return thaiMeaning;
}

function getWordEnglish(hanzi, thaiMeaning) {
  if (WORD_TRANSLATIONS[hanzi]) return WORD_TRANSLATIONS[hanzi];
  if (WORD_TRANSLATIONS[hanzi.trim()]) return WORD_TRANSLATIONS[hanzi.trim()];
  return getSentenceEnglish(hanzi, thaiMeaning);
}

module.exports = {
  getSentenceEnglish,
  getWordEnglish,
  TRANSLATIONS,
  WORD_TRANSLATIONS
};
