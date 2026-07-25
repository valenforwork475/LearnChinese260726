// Extremely Natural Spoken Chinese Self-Talk Sentences + Complete Time Pronunciation Converter

export const SELF_TALK_CATEGORIES = [
  { id: 'all', label: 'ทั้งหมด' },
  { id: 'morning', label: 'ตอนตื่นเช้า' },
  { id: 'commute', label: 'ออกจากบ้าน/เดินทาง' },
  { id: 'work_study', label: 'ทำงาน/เรียน' },
  { id: 'meal', label: 'หิวข้าว/กินข้าว' },
  { id: 'evening', label: 'กลับบ้าน/พักผ่อน' },
  { id: 'night', label: 'ตอนดึก/เข้านอน' },
  { id: 'mindset', label: 'พึมพำกับตัวเอง' }
];

export const selfTalkSentences = [
  // --- MORNING ---
  {
    id: 'm1',
    category: 'morning',
    context: 'เพิ่งลืมตาตื่น',
    hanzi: '起床了... 几点了？',
    pinyin: 'Qǐchuáng le... jǐ diǎn le?',
    thaiReading: 'ฉี่ฉวง เลอ... จี่ เตี่ยน เลอ?',
    thaiMeaning: 'ตื่นแล้ว... กี่โมงแล้วเนี่ย?',
    words: [
      { hanzi: '起床', pinyin: 'qǐchuáng', thaiReading: 'ฉี่ฉวง', thaiMeaning: 'ตื่นนอน' },
      { hanzi: '几点', pinyin: 'jǐ diǎn', thaiReading: 'จี่ เตี่ยน', thaiMeaning: 'กี่โมง' }
    ]
  },
  {
    id: 'm2',
    category: 'morning',
    context: 'ขอนอนต่ออีกนิด',
    hanzi: '太困了... 再睡五分钟吧。',
    pinyin: 'Tài kùn le... zài shuì wǔ fēnzhōng ba.',
    thaiReading: 'ไท่ คุ่น เลอ... จ้าย ชุ่ย อู่ เฟินจง ปา',
    thaiMeaning: 'ง่วงจัง... ขอสโนออซนอนต่ออีก 5 นาทีนะ',
    words: [
      { hanzi: '太困了', pinyin: 'tài kùn le', thaiReading: 'ไท่ คุ่น เลอ', thaiMeaning: 'ง่วงมาก' },
      { hanzi: '五分钟', pinyin: 'wǔ fēnzhōng', thaiReading: 'อู่ เฟินจง', thaiMeaning: '5 นาที' }
    ]
  },
  {
    id: 'm3',
    category: 'morning',
    context: 'ลุกไปห้องน้ำ',
    hanzi: '起来，先去刷牙洗脸。',
    pinyin: 'Qǐlái, xiān qù shuāyá xǐliǎn.',
    thaiReading: 'ฉี่ไล, เซียน ชวี่ ชวาหยา สีเหลี่ยน',
    thaiMeaning: 'ลุกก่อน ไปแปรงฟันล้างหน้าก่อนดีกว่า',
    words: [
      { hanzi: '刷牙', pinyin: 'shuāyá', thaiReading: 'ชวาหยา', thaiMeaning: 'แปรงฟัน' },
      { hanzi: '洗脸', pinyin: 'xǐliǎn', thaiReading: 'สีเหลี่ยน', thaiMeaning: 'ล้างหน้า' }
    ]
  },
  {
    id: 'm4',
    category: 'morning',
    context: 'คอแห้งหิวน้ำ',
    hanzi: '好渴啊，先喝口水。',
    pinyin: 'Hǎo kě a, xiān hē kǒu shuǐ.',
    thaiReading: 'ห่าว เข่อ อา, เซียน เฮอ โข่ว สุ่ย',
    thaiMeaning: 'หิวน้ำจัง ดื่มน้ำสักจิบก่อน',
    words: [
      { hanzi: '好渴', pinyin: 'hǎo kě', thaiReading: 'ห่าว เข่อ', thaiMeaning: 'หิวน้ำมาก' },
      { hanzi: '喝水', pinyin: 'hē shuǐ', thaiReading: 'เฮอ สุ่ย', thaiMeaning: 'ดื่มน้ำ' }
    ]
  },
  {
    id: 'm5',
    category: 'morning',
    context: 'ส่องตู้เสื้อผ้า',
    hanzi: '今天穿什么呢...',
    pinyin: 'Jīntiān chuān shénme ne...',
    thaiReading: 'จินเทียน ชวน เสินเมอ เนอะ...',
    thaiMeaning: 'วันนี้ใส่ชุดไหนดีหว่า...',
    words: [
      { hanzi: '今天', pinyin: 'jīntiān', thaiReading: 'จินเทียน', thaiMeaning: 'วันนี้' },
      { hanzi: '穿', pinyin: 'chuān', thaiReading: 'ชวน', thaiMeaning: 'ใส่/สวม' }
    ]
  },
  {
    id: 'm6',
    category: 'morning',
    context: 'ชงกาแฟปลุกตัวเอง',
    hanzi: '冲杯咖啡，清醒一下。',
    pinyin: 'Chōng bēi kāfēi, qīngxǐng yíxià.',
    thaiReading: 'ชง เปย คาเฟย, ชิงสิ่ง อี๋เซีย',
    thaiMeaning: 'ชงกาแฟสักแก้ว ให้ตาสว่างหน่อย',
    words: [
      { hanzi: '咖啡', pinyin: 'kāfēi', thaiReading: 'คาเฟย', thaiMeaning: 'กาแฟ' },
      { hanzi: '清醒', pinyin: 'qīngxǐng', thaiReading: 'ชิงสิ่ง', thaiMeaning: 'ตื่นตัว/สว่าง' }
    ]
  },

  // --- COMMUTE ---
  {
    id: 'c1',
    category: 'commute',
    context: 'หากุญแจ',
    hanzi: '钥匙在哪里... 哦，在这里。',
    pinyin: 'Yàoshi zài nǎlǐ... ó, zài zhèlǐ.',
    thaiReading: 'เย่าสือ จ้าย น่าหลี... โอ๊ะ, จ้าย เจ้อหลี',
    thaiMeaning: 'กุญแจอยู่ไหนเนี่ย... อ่อ อยู่นี่เอง',
    words: [
      { hanzi: '钥匙', pinyin: 'yàoshi', thaiReading: 'เย่าสือ', thaiMeaning: 'กุญแจ' },
      { hanzi: '在哪里', pinyin: 'zài nǎlǐ', thaiReading: 'จ้าย น่าหลี', thaiMeaning: 'อยู่ที่ไหน' }
    ]
  },
  {
    id: 'c2',
    category: 'commute',
    context: 'เช็กของก่อนออกบ้าน',
    hanzi: '拿包、拿手机... 好，齐了！',
    pinyin: 'Ná bāo, ná shǒujī... hǎo, qí le!',
    thaiReading: 'หนา เปา, หนา โหย่วจี... ห่าว, ฉี เลอ!',
    thaiMeaning: 'หยิบกระเป๋า หยิบมือถือ... โอเค ครบแล้ว!',
    words: [
      { hanzi: '手机', pinyin: 'shǒujī', thaiReading: 'โหย่วจี', thaiMeaning: 'โทรศัพท์' },
      { hanzi: '齐了', pinyin: 'qí le', thaiReading: 'ฉี เลอ', thaiMeaning: 'ครบถ้วนแล้ว' }
    ]
  },
  {
    id: 'c3',
    category: 'commute',
    context: 'เร่งรีบ',
    hanzi: '快一点，要迟到了！',
    pinyin: 'Kuài yìdiǎn, yào chídào le!',
    thaiReading: 'ไค่ว อี๋เตี่ยน, เย่า ฉือเต้า เลอ!',
    thaiMeaning: 'รีบหน่อย เดี๋ยวสายแล้ว!',
    words: [
      { hanzi: '迟到', pinyin: 'chídào', thaiReading: 'ฉือเต้า', thaiMeaning: 'มาสาย' }
    ]
  },
  {
    id: 'c4',
    category: 'commute',
    context: 'เจอรถติด',
    hanzi: '哎呀，又堵车了。',
    pinyin: 'Āiyā, yòu dǔchē le.',
    thaiReading: 'ไอ๋ยา, โย่ว ตู่เชอ เลอ',
    thaiMeaning: 'โอย รถติดอีกละ',
    words: [
      { hanzi: '堵车', pinyin: 'dǔchē', thaiReading: 'ตู่เชอ', thaiMeaning: 'รถติด' }
    ]
  },

  // --- WORK & STUDY ---
  {
    id: 'w1',
    category: 'work_study',
    context: 'ถึงที่ทำงาน',
    hanzi: '到公司了... 加油干吧！',
    pinyin: 'Dào gōngsī le... jiāyóu gàn ba!',
    thaiReading: 'เต้า กงซือ เลอ... เจียโหยว ก้าน ปา!',
    thaiMeaning: 'ถึงบริษัทละ... ลุยงานกัน!',
    words: [
      { hanzi: '公司', pinyin: 'gōngsī', thaiReading: 'กงซือ', thaiMeaning: 'บริษัท' }
    ]
  },
  {
    id: 'w2',
    category: 'work_study',
    context: 'เริ่มเปิดคอม',
    hanzi: '先开电脑，稍等一下。',
    pinyin: 'Xiān kāi diànnǎo, shāo děng yíxià.',
    thaiReading: 'เซียน ไค เตี้ยนเหน่า, ซาว เติ่ง อี๋เซีย',
    thaiMeaning: 'เปิดคอมก่อน แป๊บนึงนะ',
    words: [
      { hanzi: '电脑', pinyin: 'diànnǎo', thaiReading: 'เตี้ยนเหน่า', thaiMeaning: 'คอมพิวเตอร์' }
    ]
  },
  {
    id: 'w3',
    category: 'work_study',
    context: 'ขมวดคิ้วคิดงาน',
    hanzi: '这个怎么做呢...',
    pinyin: 'Zhège zěnme zuò ne...',
    thaiReading: 'เจ้อเก้อ เจิ่นเมอ จั้ว เนอะ...',
    thaiMeaning: 'งานนี้ต้องทำยังไงดีหว่า...',
    words: [
      { hanzi: '怎么做', pinyin: 'zěnme zuò', thaiReading: 'เจิ่นเมอ จั้ว', thaiMeaning: 'ทำอย่างไร' }
    ]
  },
  {
    id: 'w4',
    category: 'work_study',
    context: 'เมื่อยตาบ่ายๆ',
    hanzi: '眼睛有点酸，休息一下。',
    pinyin: 'Yǎnjīng yǒudiǎnr suān, xiūxi yíxià.',
    thaiReading: 'เหยี่ยนจิง โหย่วเตี่ยนร์ ซวน, ซิวสิ อี๋เซีย',
    thaiMeaning: 'ตาเริ่มพร่าๆ ละ พักสายตาแป๊บ',
    words: [
      { hanzi: '眼睛', pinyin: 'yǎnjīng', thaiReading: 'เหยี่ยนจิง', thaiMeaning: 'ดวงตา' }
    ]
  },

  // --- MEALS & DRINKS ---
  {
    id: 'f1',
    category: 'meal',
    context: 'ถึงเวลาเที่ยง',
    hanzi: '十二点了！吃什么呢？',
    pinyin: 'Shí\'èr diǎn le! Chī shénme ne?',
    thaiReading: 'สือเอ้อร์ เตี่ยน เลอ! ชือ เสินเมอ เนอะ?',
    thaiMeaning: 'เที่ยงแล้ว! กินอะไรดีนะ?',
    words: [
      { hanzi: '十二点', pinyin: 'shí\'èr diǎn', thaiReading: 'สือเอ้อร์ เตี่ยน', thaiMeaning: '12 โมง/เที่ยง' }
    ]
  },
  {
    id: 'f2',
    category: 'meal',
    context: 'ท้องร้อง',
    hanzi: '肚子都饿得咕咕叫了。',
    pinyin: 'Dùzi dōu è de gūgū jiào le.',
    thaiReading: 'ตู้จือ โตว เอ้อ เตอ กูกู เจี้ยว เลอ',
    thaiMeaning: 'หิวจนท้องร้องจ๊อกๆ แล้วเนี่ย',
    words: [
      { hanzi: '肚子', pinyin: 'dùzi', thaiReading: 'ตู้จือ', thaiMeaning: 'ท้อง' }
    ]
  },
  {
    id: 'f3',
    category: 'meal',
    context: 'กินเสร็จหนังตาหย่อน',
    hanzi: '吃饱了，有点想睡了。',
    pinyin: 'Chī bǎo le, yǒudiǎnr xiǎng shuì le.',
    thaiReading: 'ชือ เป่า เลอ, โหย่วเตี่ยนร์ เสียง ชุ่ย เลอ',
    thaiMeaning: 'อิ่มจัง หนังท้องตึงหนังตาเริ่มหย่อนละ',
    words: [
      { hanzi: '吃饱', pinyin: 'chī bǎo', thaiReading: 'ชือ เป่า', thaiMeaning: 'กินอิ่ม' }
    ]
  },

  // --- EVENING ---
  {
    id: 'e1',
    category: 'evening',
    context: 'เลิกงานเสร็จ',
    hanzi: '太好了！下班回家！',
    pinyin: 'Tài hǎo le! Xiàbān huíjiā!',
    thaiReading: 'ไท่ ห่าว เลอ! เซี่ยปาน หุยเจีย!',
    thaiMeaning: 'เย้ดีจัง! เลิกงานกลับบ้าน!',
    words: [
      { hanzi: '下班', pinyin: 'xiàbān', thaiReading: 'เซี่ยปาน', thaiMeaning: 'เลิกงาน' }
    ]
  },
  {
    id: 'e2',
    category: 'evening',
    context: 'ทิ้งตัวที่บ้าน',
    hanzi: '终于到家了... 累死了。',
    pinyin: 'Zhōngyú dào jiā le... lèi sǐ le.',
    thaiReading: 'จงยวี เต้า เจีย เลอ... เล่ย สื่อ เลอ',
    thaiMeaning: 'ในที่สุดก็ถึงบ้านสักที... เหนื่อยเป็นบ้าเลย',
    words: [
      { hanzi: '到家', pinyin: 'dào jiā', thaiReading: 'เต้า เจีย', thaiMeaning: 'ถึงบ้าน' }
    ]
  },

  // --- NIGHT ---
  {
    id: 'n1',
    category: 'night',
    context: 'เล่นโทรศัพท์เพลิน',
    hanzi: '看手机忘了时间... 都这么晚了。',
    pinyin: 'Kàn shǒujī wàng le shíjiān... dōu zhème wǎn le.',
    thaiReading: 'คั่น โหย่วจี หว่าง เลอ สือเจียน... โตว เจื้อเมอ หวั่น เลอ',
    thaiMeaning: 'ไถมือถือเพลินลืมดูเวลา... ดึกขนาดนี้แล้วเหรอเนี่ย',
    words: [
      { hanzi: '看手机', pinyin: 'kàn shǒujī', thaiReading: 'คั่น โหย่วจี', thaiMeaning: 'ดูโทรศัพท์' }
    ]
  },
  {
    id: 'n2',
    category: 'night',
    context: 'บอกตัวเองก่อนนอน',
    hanzi: '睡觉吧，明天要早起。晚安！',
    pinyin: 'Shuìjiào ba, míngtiān yào zǎoqǐ. Wǎn\'ān!',
    thaiReading: 'ชุ่ยเจี้ยว ปา, หมิงเทียน เย่า เจ้าฉี่. หวั่นอาน!',
    thaiMeaning: 'นอนเหอะ พรุ่งนี้ต้องตื่นเช้า ฝันดีนะ!',
    words: [
      { hanzi: '晚安', pinyin: 'wǎn\'ān', thaiReading: 'หวั่นอาน', thaiMeaning: 'ราตรีสวัสดิ์' }
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

  const hanzi = `现在是${periodZh}${hObj.zh}点${rawMinutes === 0 ? '整' : mObj.zh + '分'}。`;
  const pinyin = `Xiànzài shì ${periodPy} ${hObj.py} diǎn ${rawMinutes === 0 ? 'zhěng' : mObj.py + ' fēn'}.`;
  const thaiReading = `เซี่ยนจ้าย ซื่อ ${periodTh} ${hObj.th} เตี่ยน ${rawMinutes === 0 ? 'เจิ้ง' : mObj.th + ' เฟิน'}`;
  const thaiMeaning = `ตอนนี้เวลา ${rawHours}:${padMin} น. (${periodMeaning})`;

  return {
    id: 'dynamic_time',
    category: 'time_check',
    context: 'เวลาเครื่องปัจจุบัน',
    hanzi,
    pinyin,
    thaiReading,
    thaiMeaning,
    words: [
      { hanzi: '现在', pinyin: 'xiànzài', thaiReading: 'เซี่ยนจ้าย', thaiMeaning: 'ตอนนี้' },
      { hanzi: periodZh, pinyin: periodPy, thaiReading: periodTh, thaiMeaning: periodMeaning },
      { hanzi: hObj.zh + '点', pinyin: hObj.py + ' diǎn', thaiReading: hObj.th + ' เตี่ยน', thaiMeaning: `${rawHours} โมง/นาฬิกา` },
      { hanzi: mObj.zh + '分', pinyin: mObj.py + ' fēn', thaiReading: mObj.th + ' เฟิน', thaiMeaning: `${rawMinutes} นาที` }
    ]
  };
}
