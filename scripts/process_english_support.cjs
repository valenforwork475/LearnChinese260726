const fs = require('fs');
const path = require('path');

// Helper to translate Thai/Hanzi vocabulary & sentences to English
function getVocabEnglish(hanzi, thaiMeaning) {
  const dict = {
    // Routine & Verbs
    "起床": "get up / wake up",
    "刷牙": "brush teeth",
    "洗脸": "wash face",
    "洗澡": "take a shower / bath",
    "梳头": "comb hair",
    "刮胡子": "shave",
    "化妆": "put on makeup",
    "喝水": "drink water",
    "吃早餐": "eat breakfast",
    "冲咖啡": "make coffee",
    "整理包包": "pack bag",
    "出门": "go out / leave home",
    "坐电梯": "take elevator",
    "锁门": "lock door",
    "坐公交车": "take bus",
    "坐地铁": "take subway",
    "开车": "drive car",
    "走路": "walk",
    "扫码": "scan QR code",
    "打卡": "clock in / swipe card",
    "开电脑": "turn on computer",
    "查邮件": "check email",
    "开会": "have a meeting",
    "写报告": "write report",
    "打印文件": "print document",
    "打电话": "make a phone call",
    "吃午餐": "eat lunch",
    "午睡": "take a nap",
    "喝下午茶": "drink afternoon tea",
    "下班": "clock out / leave work",

    // Dressing & Clothes
    "穿": "wear / put on",
    "衣服": "clothes / clothing",
    "衬衫": "shirt",
    "T恤": "T-shirt",
    "裤子": "pants / trousers",
    "裙子": "skirt / dress",
    "外套": "coat / jacket",
    "鞋子": "shoes",
    "袜子": "socks",
    "帽子": "hat / cap",
    "眼镜": "glasses / eyeglasses",
    "手表": "watch / wristwatch",
    "雨伞": "umbrella",
    "包包": "bag / handbag",
    "大衣": "overcoat / trench coat",
    "毛衣": "sweater",
    "短裤": "shorts",
    "围巾": "scarf",
    "皮带": "belt",
    "戒指": "ring",

    // Food & Dining
    "米饭": "steamed rice",
    "面条": "noodles",
    "包子": "steamed stuffed bun (baozi)",
    "面包": "bread",
    "饺子": "dumplings (jiaozi)",
    "炒饭": "fried rice",
    "火锅": "hot pot",
    "烧烤": "barbecue / skewers",
    "鸡肉": "chicken meat",
    "猪肉": "pork",
    "牛肉": "beef",
    "鱼肉": "fish meat",
    "虾": "shrimp / prawn",
    "蔬菜": "vegetables",
    "水果": "fruit",
    "苹果": "apple",
    "香蕉": "banana",
    "西瓜": "watermelon",
    "水": "water",
    "茶": "tea",
    "牛奶": "milk",
    "咖啡": "coffee",
    "果汁": "fruit juice",
    "啤酒": "beer",
    "珍珠奶茶": "boba milk tea",
    "好吃": "delicious / tasty",
    "好喝": "good to drink / tasty",
    "饿": "hungry",
    "饱": "full (satisfied)",
    "渴": "thirsty",
    "甜": "sweet",
    "酸": "sour",
    "苦": "bitter",
    "辣": "spicy",
    "咸": "salty",
    "淡": "bland / light taste",
    "油腻": "oily / greasy",
    "新鲜": "fresh",
    "烫": "scalding hot",
    "凉": "cold / chilled",
    "点餐": "order food",
    "买单": "pay the check / bill",
    "外卖": "takeout / delivery",
    "菜单": "menu",
    "服务员": "waiter / waitress",
    "餐厅": "restaurant",
    "口味": "taste / flavor preference",
    "小吃": "snack / street food",
    "汤": "soup",
    "早餐": "breakfast",

    // Food taste & texture additions
    "软": "soft",
    "嫩": "tender / soft",
    "硬": "hard / tough",
    "麻辣": "málà / numbing spicy",
    "脆": "crispy / crunchy",
    "软糯": "chewy / sticky soft",
    "香": "fragrant / aromatic",
    "鲜美": "fresh and delicious / umami",
    "腥": "fishy smell",
    "可口": "tasty / palatable",
    "斤": "half-kilo (500g)",
    "公斤": "kilogram (kg)",
    "称": "weigh",

    // Time & Numbers
    "今天": "today",
    "明天": "tomorrow",
    "昨天": "yesterday",
    "早上": "morning",
    "中午": "noon / midday",
    "晚上": "evening / night",
    "现在": "now",
    "点": "o'clock",
    "分": "minute",
    "小时": "hour",
    "星期一": "Monday",
    "星期二": "Tuesday",
    "星期三": "Wednesday",
    "星期四": "Thursday",
    "星期五": "Friday",
    "星期六": "Saturday",
    "星期天": "Sunday",
    "周末": "weekend",

    // Common Verbs & Adjectives
    "去": "go",
    "来": "come",
    "买": "buy",
    "卖": "sell",
    "看": "look / watch / read",
    "听": "listen / hear",
    "说": "speak / say",
    "读": "read",
    "写": "write",
    "学": "learn / study",
    "想": "want / would like to / think",
    "要": "want / need",
    "喜欢": "like",
    "爱": "love",
    "有": "have / exist",
    "没有": "do not have / not exist",
    "知道": "know",
    "认识": "know / be acquainted with",
    "觉得": "feel / think",
    "能够": "can / be able to",
    "可以": "can / may",
    "大": "big / large",
    "小": "small / little",
    "多": "many / much",
    "少": "few / little",
    "好": "good / fine",
    "坏": "bad / broken",
    "快": "fast / quick",
    "慢": "slow",
    "高": "tall / high",
    "矮": "short (height)",
    "贵": "expensive",
    "便宜": "cheap / inexpensive",
    "冷": "cold",
    "热": "hot",
    "远": "far",
    "近": "near / close",
    "忙": "busy",
    "累": "tired",
    "开心": "happy / joyful",
    "难过": "sad",
    "生气": "angry"
  };

  if (dict[hanzi]) return dict[hanzi];

  // Pattern checks
  if (thaiMeaning.includes("ตื่นนอน")) return "get up / wake up";
  if (thaiMeaning.includes("แปรงฟัน")) return "brush teeth";
  if (thaiMeaning.includes("ล้างหน้า")) return "wash face";
  if (thaiMeaning.includes("อาบน้ำ")) return "take a shower";
  if (thaiMeaning.includes("กิน") || thaiMeaning.includes("ทาน")) return "eat / have a meal";
  if (thaiMeaning.includes("ดื่ม")) return "drink";
  if (thaiMeaning.includes("ซื้อ")) return "buy";
  if (thaiMeaning.includes("ไป")) return "go to";
  if (thaiMeaning.includes("อร่อย")) return "delicious / tasty";
  if (thaiMeaning.includes("เผ็ด")) return "spicy";
  if (thaiMeaning.includes("หวาน")) return "sweet";
  if (thaiMeaning.includes("เค็ม")) return "salty";
  if (thaiMeaning.includes("จืด")) return "bland / light taste";
  if (thaiMeaning.includes("เปรี้ยว")) return "sour";
  if (thaiMeaning.includes("ขม")) return "bitter";
  if (thaiMeaning.includes("นุ่ม")) return "soft / tender";
  if (thaiMeaning.includes("แข็ง")) return "hard";
  if (thaiMeaning.includes("มันเลี่ยน") || thaiMeaning.includes("มัน")) return "oily / greasy";

  // Default fallback based on Thai meaning text
  return thaiMeaning;
}

module.exports = { getVocabEnglish };
console.log("English translation helper loaded.");
