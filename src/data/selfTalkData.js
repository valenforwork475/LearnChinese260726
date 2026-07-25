// Direct Practical Self-Talk Routine Sentences for Daily Speaking Practice

export const SELF_TALK_CATEGORIES = [
  { id: 'all', label: 'ทั้งหมด' },
  { id: 'morning', label: 'กิจวัตรเช้า' },
  { id: 'dressing', label: 'แต่งตัว' },
  { id: 'commute', label: 'เดินทาง/ทำงาน' },
  { id: 'meals', label: 'อาหาร/เครื่องดื่ม' },
  { id: 'evening_night', label: 'เย็น/ก่อนนอน' }
];

export const selfTalkSentences = [
  // --- MORNING ---
  {
    id: 'm1',
    category: 'morning',
    context: '8 โมงตื่นนอน',
    hanzi: '八点起床。',
    pinyin: 'Bā diǎn qǐchuáng.',
    thaiReading: 'ปา เตี่ยน ฉี่ฉวง',
    thaiMeaning: '8 โมงตื่นนอน',
    words: [
      { hanzi: '八点', pinyin: 'bā diǎn', thaiReading: 'ปา เตี่ยน', thaiMeaning: '8 โมง' },
      { hanzi: '起床', pinyin: 'qǐchuáng', thaiReading: 'ฉี่ฉวง', thaiMeaning: 'ตื่นนอน' }
    ]
  },
  {
    id: 'm2',
    category: 'morning',
    context: 'ไปแปรงฟัน',
    hanzi: '去刷牙。',
    pinyin: 'Qù shuāyá.',
    thaiReading: 'ชวี่ ชวาหยา',
    thaiMeaning: 'ไปแปรงฟัน',
    words: [
      { hanzi: '去', pinyin: 'qù', thaiReading: 'ชวี่', thaiMeaning: 'ไป' },
      { hanzi: '刷牙', pinyin: 'shuāyá', thaiReading: 'ชวาหยา', thaiMeaning: 'แปรงฟัน' }
    ]
  },
  {
    id: 'm3',
    category: 'morning',
    context: 'ล้างหน้า',
    hanzi: '洗脸。',
    pinyin: 'Xǐliǎn.',
    thaiReading: 'สีเหลี่ยน',
    thaiMeaning: 'ล้างหน้า',
    words: [
      { hanzi: '洗脸', pinyin: 'xǐliǎn', thaiReading: 'สีเหลี่ยน', thaiMeaning: 'ล้างหน้า' }
    ]
  },
  {
    id: 'm4',
    category: 'morning',
    context: 'อาบน้ำ',
    hanzi: '洗澡。',
    pinyin: 'Xǐzǎo.',
    thaiReading: 'สีเจ้า',
    thaiMeaning: 'อาบน้ำ',
    words: [
      { hanzi: '洗澡', pinyin: 'xǐzǎo', thaiReading: 'สีเจ้า', thaiMeaning: 'อาบน้ำ' }
    ]
  },

  // --- DRESSING ---
  {
    id: 'd1',
    category: 'dressing',
    context: 'แต่งตัว',
    hanzi: '换衣服。',
    pinyin: 'Huàn yīfu.',
    thaiReading: 'ฮว่าน อีฝู',
    thaiMeaning: 'แต่งตัว / เปลี่ยนเสื้อผ้า',
    words: [
      { hanzi: '换', pinyin: 'huàn', thaiReading: 'ฮว่าน', thaiMeaning: 'เปลี่ยน' },
      { hanzi: '衣服', pinyin: 'yīfu', thaiReading: 'อีฝู', thaiMeaning: 'เสื้อผ้า' }
    ]
  },
  {
    id: 'd2',
    category: 'dressing',
    context: 'ใส่เสื้อ',
    hanzi: '穿上衣。',
    pinyin: 'Chuān shàngyī.',
    thaiReading: 'ชวน ช่างอี',
    thaiMeaning: 'ใส่เสื้อ',
    words: [
      { hanzi: '穿', pinyin: 'chuān', thaiReading: 'ชวน', thaiMeaning: 'ใส่/สวม' },
      { hanzi: '上衣', pinyin: 'shàngyī', thaiReading: 'ช่างอี', thaiMeaning: 'เสื้อ' }
    ]
  },
  {
    id: 'd3',
    category: 'dressing',
    context: 'ใส่กางเกง',
    hanzi: '穿裤子。',
    pinyin: 'Chuān kùzi.',
    thaiReading: 'ชวน คู้จือ',
    thaiMeaning: 'ใส่กางเกง',
    words: [
      { hanzi: '穿', pinyin: 'chuān', thaiReading: 'ชวน', thaiMeaning: 'ใส่/สวม' },
      { hanzi: '裤子', pinyin: 'kùzi', thaiReading: 'คู้จือ', thaiMeaning: 'กางเกง' }
    ]
  },
  {
    id: 'd4',
    category: 'dressing',
    context: 'ใส่รองเท้า',
    hanzi: '穿鞋子。',
    pinyin: 'Chuān xiézi.',
    thaiReading: 'ชวน เสียจือ',
    thaiMeaning: 'ใส่รองเท้า',
    words: [
      { hanzi: '鞋子', pinyin: 'xiézi', thaiReading: 'เสียจือ', thaiMeaning: 'รองเท้า' }
    ]
  },

  // --- COMMUTE & WORK ---
  {
    id: 'c1',
    category: 'commute',
    context: 'ออกจากบ้าน',
    hanzi: '出门。',
    pinyin: 'Chūmén.',
    thaiReading: 'ชูเหมิน',
    thaiMeaning: 'ออกจากบ้าน',
    words: [
      { hanzi: '出门', pinyin: 'chūmén', thaiReading: 'ชูเหมิน', thaiMeaning: 'ออกจากบ้าน' }
    ]
  },
  {
    id: 'c2',
    category: 'commute',
    context: 'ขึ้นรถ',
    hanzi: '坐车。',
    pinyin: 'Zuò chē.',
    thaiReading: 'จั้ว เชอ',
    thaiMeaning: 'ขึ้นรถ / นั่งรถ',
    words: [
      { hanzi: '坐', pinyin: 'zuò', thaiReading: 'จั้ว', thaiMeaning: 'นั่ง/ขึ้น' },
      { hanzi: '车', pinyin: 'chē', thaiReading: 'เชอ', thaiMeaning: 'รถ' }
    ]
  },
  {
    id: 'c3',
    category: 'commute',
    context: 'ไปทำงาน',
    hanzi: '去上班。',
    pinyin: 'Qù shàngbān.',
    thaiReading: 'ชวี่ ช่างปาน',
    thaiMeaning: 'ไปทำงาน',
    words: [
      { hanzi: '去', pinyin: 'qù', thaiReading: 'ชวี่', thaiMeaning: 'ไป' },
      { hanzi: '上班', pinyin: 'shàngbān', thaiReading: 'ช่างปาน', thaiMeaning: 'ทำงาน' }
    ]
  },
  {
    id: 'c4',
    category: 'commute',
    context: 'วันนี้มาทำงานสาย',
    hanzi: '今天上班迟到了。',
    pinyin: 'Jīntiān shàngbān chídào le.',
    thaiReading: 'จินเทียน ช่างปาน ฉือเต้า เลอ',
    thaiMeaning: 'วันนี้มาทำงานสาย',
    words: [
      { hanzi: '今天', pinyin: 'jīntiān', thaiReading: 'จินเทียน', thaiMeaning: 'วันนี้' },
      { hanzi: '上班', pinyin: 'shàngbān', thaiReading: 'ช่างปาน', thaiMeaning: 'ทำงาน' },
      { hanzi: '迟到', pinyin: 'chídào', thaiReading: 'ฉือเต้า', thaiMeaning: 'มาสาย' }
    ]
  },
  {
    id: 'c5',
    category: 'commute',
    context: 'ถึงบริษัทแล้ว',
    hanzi: '到公司了。',
    pinyin: 'Dào gōngsī le.',
    thaiReading: 'เต้า กงซือ เลอ',
    thaiMeaning: 'ถึงบริษัทแล้ว',
    words: [
      { hanzi: '到', pinyin: 'dào', thaiReading: 'เต้า', thaiMeaning: 'ถึง' },
      { hanzi: '公司', pinyin: 'gōngsī', thaiReading: 'กงซือ', thaiMeaning: 'บริษัท' }
    ]
  },
  {
    id: 'c6',
    category: 'commute',
    context: 'เริ่มทำงาน',
    hanzi: '开始工作。',
    pinyin: 'Kāishǐ gōngzuò.',
    thaiReading: 'ไคสื่อ กงจั้ว',
    thaiMeaning: 'เริ่มทำงาน',
    words: [
      { hanzi: '开始', pinyin: 'kāishǐ', thaiReading: 'ไคสื่อ', thaiMeaning: 'เริ่ม' },
      { hanzi: '工作', pinyin: 'gōngzuò', thaiReading: 'กงจั้ว', thaiMeaning: 'ทำงาน' }
    ]
  },

  // --- MEALS & DRINKS ---
  {
    id: 'f1',
    category: 'meals',
    context: 'กินข้าวเช้า',
    hanzi: '吃早餐。',
    pinyin: 'Chī zǎocān.',
    thaiReading: 'ชือ เจ้าซาน',
    thaiMeaning: 'กินข้าวเช้า',
    words: [
      { hanzi: '吃', pinyin: 'chī', thaiReading: 'ชือ', thaiMeaning: 'กิน' },
      { hanzi: '早餐', pinyin: 'zǎocān', thaiReading: 'เจ้าซาน', thaiMeaning: 'อาหารเช้า' }
    ]
  },
  {
    id: 'f2',
    category: 'meals',
    context: 'ดื่มน้ำ',
    hanzi: '喝水。',
    pinyin: 'Hē shuǐ.',
    thaiReading: 'เฮอ สุ่ย',
    thaiMeaning: 'ดื่มน้ำ',
    words: [
      { hanzi: '喝水', pinyin: 'hē shuǐ', thaiReading: 'เฮอ สุ่ย', thaiMeaning: 'ดื่มน้ำ' }
    ]
  },
  {
    id: 'f3',
    category: 'meals',
    context: 'ชงกาแฟ',
    hanzi: '泡咖啡。',
    pinyin: 'Pào kāfēi.',
    thaiReading: 'พ่าว คาเฟย',
    thaiMeaning: 'ชงกาแฟ',
    words: [
      { hanzi: '泡', pinyin: 'pào', thaiReading: 'พ่าว', thaiMeaning: 'ชง/แช่' },
      { hanzi: '咖啡', pinyin: 'kāfēi', thaiReading: 'คาเฟย', thaiMeaning: 'กาแฟ' }
    ]
  },
  {
    id: 'f4',
    category: 'meals',
    context: 'พักเที่ยง',
    hanzi: '午休。',
    pinyin: 'Wǔxiū.',
    thaiReading: 'อู่ซิว',
    thaiMeaning: 'พักเที่ยง',
    words: [
      { hanzi: '午休', pinyin: 'wǔxiū', thaiReading: 'อู่ซิว', thaiMeaning: 'พักเที่ยง' }
    ]
  },
  {
    id: 'f5',
    category: 'meals',
    context: 'กินข้าวเที่ยง',
    hanzi: '吃午饭。',
    pinyin: 'Chī wǔfàn.',
    thaiReading: 'ชือ อู่ฝ้าน',
    thaiMeaning: 'กินข้าวเที่ยง',
    words: [
      { hanzi: '吃', pinyin: 'chī', thaiReading: 'ชือ', thaiMeaning: 'กิน' },
      { hanzi: '午饭', pinyin: 'wǔfàn', thaiReading: 'อู่ฝ้าน', thaiMeaning: 'อาหารเที่ยง' }
    ]
  },

  // --- EVENING & NIGHT ---
  {
    id: 'e1',
    category: 'evening_night',
    context: 'เลิกงานแล้ว',
    hanzi: '下班了。',
    pinyin: 'Xiàbān le.',
    thaiReading: 'เซี่ยปาน เลอ',
    thaiMeaning: 'เลิกงานแล้ว',
    words: [
      { hanzi: '下班', pinyin: 'xiàbān', thaiReading: 'เซี่ยปาน', thaiMeaning: 'เลิกงาน' }
    ]
  },
  {
    id: 'e2',
    category: 'evening_night',
    context: 'กลับบ้าน',
    hanzi: '回家。',
    pinyin: 'Huíjiā.',
    thaiReading: 'หุยเจีย',
    thaiMeaning: 'กลับบ้าน',
    words: [
      { hanzi: '回家', pinyin: 'huíjiā', thaiReading: 'หุยเจีย', thaiMeaning: 'กลับบ้าน' }
    ]
  },
  {
    id: 'e3',
    category: 'evening_night',
    context: 'กินข้าวเย็น',
    hanzi: '吃晚饭。',
    pinyin: 'Chī wǎnfàn.',
    thaiReading: 'ชือ หวั่นฝ้าน',
    thaiMeaning: 'กินข้าวเย็น',
    words: [
      { hanzi: '吃晚饭', pinyin: 'chī wǎnfàn', thaiReading: 'ชือ หวั่นฝ้าน', thaiMeaning: 'กินอาหารค่ำ' }
    ]
  },
  {
    id: 'e4',
    category: 'evening_night',
    context: 'เตรียมตัวนอน',
    hanzi: '准备睡觉。',
    pinyin: 'Zhǔnbèi shuìjiào.',
    thaiReading: 'จุ่นเป่ย ชุ่ยเจี้ยว',
    thaiMeaning: 'เตรียมตัวนอน',
    words: [
      { hanzi: '准备', pinyin: 'zhǔnbèi', thaiReading: 'จุ่นเป่ย', thaiMeaning: 'เตรียมตัว' },
      { hanzi: '睡觉', pinyin: 'shuìjiào', thaiReading: 'ชุ่ยเจี้ยว', thaiMeaning: 'เข้านอน' }
    ]
  }
];

// Helper to convert numeric hours and minutes into Chinese Hanzi, Pinyin, and Thai reading
function convertNumberToZh(num) {
  const zhDigits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  const pyDigits = ['líng', 'yī', 'èr', 'sān', 'sì', 'wǔ', 'liù', 'qī', 'bā', 'jiǔ', 'shí'];
  const thDigits = ['หลิง', 'อี', 'เอ้อร์', 'ซาน', 'ซื่อ', 'อู่', 'ลิ่ว', 'ชี', 'ปา', 'จิ่ว', 'สือ'];

  if (num <= 10) {
    return { zh: zhDigits[num], py: pyDigits[num], th: thDigits[num] };
  }
  if (num < 20) {
    const unit = num % 10;
    return {
      zh: `十${unit === 0 ? '' : zhDigits[unit]}`,
      py: `shí${unit === 0 ? '' : ' ' + pyDigits[unit]}`,
      th: `สือ${unit === 0 ? '' : '' + thDigits[unit]}`
    };
  }

  const tens = Math.floor(num / 10);
  const unit = num % 10;
  return {
    zh: `${zhDigits[tens]}十${unit === 0 ? '' : zhDigits[unit]}`,
    py: `${pyDigits[tens]} shí${unit === 0 ? '' : ' ' + pyDigits[unit]}`,
    th: `${thDigits[tens]}สือ${unit === 0 ? '' : '' + thDigits[unit]}`
  };
}

export function generateDynamicTimeSentence(date = new Date()) {
  const rawHours = date.getHours();
  const rawMinutes = date.getMinutes();

  const hObj = convertNumberToZh(rawHours === 0 ? 12 : (rawHours > 12 ? rawHours - 12 : rawHours));
  const mObj = rawMinutes === 0 ? { zh: '整', py: 'zhěng', th: 'เจิ้ง' } : convertNumberToZh(rawMinutes);

  let periodZh = '';
  let periodPy = '';
  let periodTh = '';
  let periodMeaning = '';

  if (rawHours >= 5 && rawHours < 8) {
    periodZh = '早上'; periodPy = 'zǎoshang'; periodTh = 'เจ้าซ่าง'; periodMeaning = 'ตอนเช้า';
  } else if (rawHours >= 8 && rawHours < 11) {
    periodZh = '上午'; periodPy = 'shàngwǔ'; periodTh = 'ช่างอู่'; periodMeaning = 'ช่วงเช้า';
  } else if (rawHours >= 11 && rawHours < 13) {
    periodZh = '中午'; periodPy = 'zhōngwǔ'; periodTh = 'จงอู่'; periodMeaning = 'ตอนเที่ยง';
  } else if (rawHours >= 13 && rawHours < 18) {
    periodZh = '下午'; periodPy = 'xiàwǔ'; periodTh = 'เซี่ยอู่'; periodMeaning = 'ช่วงบ่าย';
  } else if (rawHours >= 18 && rawHours < 23) {
    periodZh = '晚上'; periodPy = 'wǎnshang'; periodTh = 'หวั่นซ่าง'; periodMeaning = 'ช่วงค่ำ';
  } else {
    periodZh = '深夜'; periodPy = 'shēnyè'; periodTh = 'เซินเย่'; periodMeaning = 'ดึก';
  }

  const padMin = rawMinutes < 10 ? `0${rawMinutes}` : `${rawMinutes}`;

  const hanzi = `${hObj.zh}点${rawMinutes === 0 ? '整' : mObj.zh + '分'}起床。`;
  const pinyin = `${hObj.py} diǎn ${rawMinutes === 0 ? 'zhěng' : mObj.py + ' fēn'} qǐchuáng.`;
  const thaiReading = `${hObj.th} เตี่ยน ${rawMinutes === 0 ? 'เจิ้ง' : mObj.th + ' เฟิน'} ฉี่ฉวง`;
  const thaiMeaning = `${rawHours}:${padMin} น. ตื่นนอน`;

  return {
    id: 'dynamic_time',
    category: 'time_check',
    context: 'เวลาเครื่องปัจจุบัน',
    hanzi,
    pinyin,
    thaiReading,
    thaiMeaning,
    words: [
      { hanzi: hObj.zh + '点', pinyin: hObj.py + ' diǎn', thaiReading: hObj.th + ' เตี่ยน', thaiMeaning: `${rawHours} โมง/นาฬิกา` },
      { hanzi: mObj.zh + '分', pinyin: mObj.py + ' fēn', thaiReading: mObj.th + ' เฟิน', thaiMeaning: `${rawMinutes} นาที` },
      { hanzi: '起床', pinyin: 'qǐchuáng', thaiReading: 'ฉี่ฉวง', thaiMeaning: 'ตื่นนอน' }
    ]
  };
}
