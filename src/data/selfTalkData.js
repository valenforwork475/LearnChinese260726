// Direct Practical Self-Talk Routine Sentences for Daily Speaking Practice

export const SELF_TALK_CATEGORIES = [
  { id: 'all', label: 'ทั้งหมด' },
  { id: 'morning', label: 'กิจวัตรเช้า' },
  { id: 'dressing', label: 'แต่งตัว' },
  { id: 'commute', label: 'เดินทาง/ทำงาน' },
  { id: 'meals', label: 'อาหาร/เครื่องดื่ม' },
  { id: 'food_taste', label: 'รสชาติ/สัมผัสอาหาร' },
  { id: 'evening_night', label: 'เย็น/ก่อนนอน' },
  { id: 'shopping_digital', label: 'ช้อปปิ้ง/ดิจิทัล' },
  { id: 'travel_social', label: 'ท่องเที่ยว/สังสรรค์' }
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
  },

  // --- SHOPPING & DIGITAL ---
  {
    id: 's1',
    category: 'shopping_digital',
    context: 'สแกนจ่ายเงิน',
    hanzi: '我扫码付款。',
    pinyin: 'Wǒ sǎo mǎ fùkuǎn.',
    thaiReading: 'หว่อ ส่าว หม่า ฟู่ขวั่น',
    thaiMeaning: 'ฉันสแกนโค้ดจ่ายเงิน',
    words: [
      { hanzi: '我', pinyin: 'wǒ', thaiReading: 'หว่อ', thaiMeaning: 'ฉัน' },
      { hanzi: '扫码', pinyin: 'sǎo mǎ', thaiReading: 'ส่าวหม่า', thaiMeaning: 'สแกนโค้ด' },
      { hanzi: '付款', pinyin: 'fùkuǎn', thaiReading: 'ฟู่ขวั่น', thaiMeaning: 'จ่ายเงิน' }
    ]
  },
  {
    id: 's2',
    category: 'shopping_digital',
    context: 'สั่งเดลิเวอรี',
    hanzi: '我们在网上点外卖。',
    pinyin: 'Wǒmen zài wǎngshang diǎn wàimài.',
    thaiReading: 'หว่อเมิน ไจ้ หวังซ่าง เตี่ยน หวั่นม่าย',
    thaiMeaning: 'พวกเราสั่งเดลิเวอรีทางเน็ต',
    words: [
      { hanzi: '我们', pinyin: 'wǒmen', thaiReading: 'หว่อเมิน', thaiMeaning: 'พวกเรา' },
      { hanzi: '在网上', pinyin: 'zài wǎngshang', thaiReading: 'ไจ้หวังซ่าง', thaiMeaning: 'ทางอินเทอร์เน็ต' },
      { hanzi: '点外卖', pinyin: 'diǎn wàimài', thaiReading: 'เตี่ยนหวั่นม่าย', thaiMeaning: 'สั่งเดลิเวอรี' }
    ]
  },
  {
    id: 's3',
    category: 'shopping_digital',
    context: 'ขอสายชาร์จ',
    hanzi: '请问有充电线吗？',
    pinyin: 'Qǐngwèn yǒu chōngdiàn xiàn ma?',
    thaiReading: 'ฉิ่งเวิ่น โหย่ว ชงเตี่ยน เซี่ยน มา',
    thaiMeaning: 'ขอถามหน่อย มีสายชาร์จไหม?',
    words: [
      { hanzi: '请问', pinyin: 'qǐngwèn', thaiReading: 'ฉิ่งเวิ่น', thaiMeaning: 'ขอถามหน่อย' },
      { hanzi: '有', pinyin: 'yǒu', thaiReading: 'โหย่ว', thaiMeaning: 'มี' },
      { hanzi: '充电线', pinyin: 'chōngdiàn xiàn', thaiReading: 'ชงเตี่ยนเซี่ยน', thaiMeaning: 'สายชาร์จ' }
    ]
  },
  {
    id: 's4',
    category: 'shopping_digital',
    context: 'ขอรหัสไวไฟ',
    hanzi: '告诉我Wi-Fi密码。',
    pinyin: 'Gàosu wǒ Wi-Fi mìmǎ.',
    thaiReading: 'เก้าซู่ หว่อ ไวไฟ มี่หม่า',
    thaiMeaning: 'บอกรหัสไวไฟให้ฉันหน่อย',
    words: [
      { hanzi: '告诉我', pinyin: 'gàosu wǒ', thaiReading: 'เก้าซู่หว่อ', thaiMeaning: 'บอกฉัน' },
      { hanzi: 'Wi-Fi密码', pinyin: 'Wi-Fi mìmǎ', thaiReading: 'ไวไฟ มี่หม่า', thaiMeaning: 'รหัสผ่าน Wi-Fi' }
    ]
  },
  {
    id: 's5',
    category: 'shopping_digital',
    context: 'เรียกรถแท็กซี่',
    hanzi: '我们打车去目的地。',
    pinyin: 'Wǒmen dǎchē qù mùdìdì.',
    thaiReading: 'หว่อเมิน ตาเชอ ชวี่ มู่ตี้ตี้',
    thaiMeaning: 'พวกเราเรียกรถไปจุดหมาย',
    words: [
      { hanzi: '我们', pinyin: 'wǒmen', thaiReading: 'หว่อเมิน', thaiMeaning: 'พวกเรา' },
      { hanzi: '打车', pinyin: 'dǎchē', thaiReading: 'ตาเชอ', thaiMeaning: 'เรียกรถ' },
      { hanzi: '去目的地', pinyin: 'qù mùdìdì', thaiReading: 'ชวี่มู่ตี้ตี้', thaiMeaning: 'ไปจุดหมายปลายทาง' }
    ]
  },

  // --- TRAVEL & SOCIAL ---
  {
    id: 's6',
    category: 'travel_social',
    context: 'ช่วยถ่ายรูปให้หน่อย',
    hanzi: '请帮我拍一张照。',
    pinyin: 'Qǐng bāng wǒ pāi yì zhāng zhào.',
    thaiReading: 'ฉิ่ง ปาง หว่อ ไพ อี้ จาง เจ้า',
    thaiMeaning: 'ช่วยถ่ายรูปให้ฉันสักรูปหน่อย',
    words: [
      { hanzi: '请帮我', pinyin: 'qǐng bāng wǒ', thaiReading: 'ฉิ่งปางหว่อ', thaiMeaning: 'ช่วยฉันหน่อย' },
      { hanzi: '拍一张照', pinyin: 'pāi yì zhāng zhào', thaiReading: 'ไพ่อี้จางเจ้า', thaiMeaning: 'ถ่ายรูป 1 รูป' }
    ]
  },
  {
    id: 's7',
    category: 'travel_social',
    context: 'เช็กบิลคิดเงิน',
    hanzi: '服务员，我们要结账。',
    pinyin: 'Fúwùyuán, wǒmen yào jiézhàng.',
    thaiReading: 'ฟู่หวู้หยวน หว่อเมิน ย่าว เจี้ยจ้าง',
    thaiMeaning: 'บริกรครับ พวกเราจะเช็กบิล',
    words: [
      { hanzi: '服务员', pinyin: 'fúwùyuán', thaiReading: 'ฟู่หวู้หยวน', thaiMeaning: 'บริกร' },
      { hanzi: '我们要', pinyin: 'wǒmen yào', thaiReading: 'หว่อเมินย่าว', thaiMeaning: 'พวกเราต้องการ' },
      { hanzi: '结账', pinyin: 'jiézhàng', thaiReading: 'เจี้ยจ้าง', thaiMeaning: 'เช็กบิลคิดเงิน' }
    ]
  },
  {
    id: 's8',
    category: 'travel_social',
    context: 'ส่งข้อความหาเพื่อน',
    hanzi: '发消息告诉朋友。',
    pinyin: 'Fā xiāoxi gàosu péngyou.',
    thaiReading: 'ฟา เซี่ยวมี่ เก้าซู่ เพิงโหย่ว',
    thaiMeaning: 'ส่งข้อความบอกเพื่อน',
    words: [
      { hanzi: '发消息', pinyin: 'fā xiāoxi', thaiReading: 'ฟาเซี่ยวมี่', thaiMeaning: 'ส่งข้อความ' },
      { hanzi: '告诉朋友', pinyin: 'gàosu péngyou', thaiReading: 'เก้าซู่เพิงโหย่ว', thaiMeaning: 'บอกเพื่อน' }
    ]
  },
  {
    id: 's9',
    category: 'meals',
    context: 'สั่งเครื่องดื่มหวานน้อย',
    hanzi: '我要一杯少糖冷饮。',
    pinyin: 'Wǒ yào yì bēi shǎo táng lěngyǐn.',
    thaiReading: 'หว่อ ย่าว อี้ เปย เฉ่า ถัง เหลิงอิ๋น',
    thaiMeaning: 'ฉันขอเครื่องดื่มเย็นหวานน้อย 1 แก้ว',
    words: [
      { hanzi: '我要', pinyin: 'wǒ yào', thaiReading: 'หว่อย่าว', thaiMeaning: 'ฉันต้องการ' },
      { hanzi: '一杯', pinyin: 'yì bēi', thaiReading: 'อี้เปย', thaiMeaning: '1 แก้ว' },
      { hanzi: '少糖冷饮', pinyin: 'shǎo táng lěngyǐn', thaiReading: 'เฉ่าถังเหลิงอิ๋น', thaiMeaning: 'เครื่องดื่มเย็นหวานน้อย' }
    ]
  },
  {
    id: 's10',
    category: 'commute',
    context: 'สแกนเข้าทำงาน',
    hanzi: '去公司打卡上班。',
    pinyin: 'Qù gōngsī dǎkǎ shàngbān.',
    thaiReading: 'ชวี่ กงซือ ต้าข่า ช่างปาน',
    thaiMeaning: 'ไปบริษัทตอกบัตรเข้าทำงาน',
    words: [
      { hanzi: '去公司', pinyin: 'qù gōngsī', thaiReading: 'ชวี่กงซือ', thaiMeaning: 'ไปบริษัท' },
      { hanzi: '打卡上班', pinyin: 'dǎkǎ shàngbān', thaiReading: 'ต้าข่าช่างปาน', thaiMeaning: 'สแกนเข้าทำงาน' }
    ]
  },

  // --- FOOD TASTE & TEXTURE ---
  {
    id: 't1',
    category: 'food_taste',
    context: 'บอกว่าอาหารมันเลี่ยนเกินไป',
    hanzi: '这个菜太油腻了。',
    pinyin: 'Zhège cài tài yóunì le.',
    thaiReading: 'เจ้อเกอ ไฉ่ ไท่ โหย่วนี่ เลอ',
    thaiMeaning: 'อาหารจานนี้มันเลี่ยนเกินไป',
    words: [
      { hanzi: '这个菜', pinyin: 'zhège cài', thaiReading: 'เจ้อเกอไฉ่', thaiMeaning: 'อาหารจานนี้' },
      { hanzi: '太油腻了', pinyin: 'tài yóunì le', thaiReading: 'ไท่โหย่วนี่เลอ', thaiMeaning: 'มันเลี่ยนเกินไป' }
    ]
  },
  {
    id: 't2',
    category: 'food_taste',
    context: 'ชมว่าเนื้อสัตว์นุ่มมาก',
    hanzi: '牛肉很嫩，非常好吃。',
    pinyin: 'Niúròu hěn nèn, fēicháng hǎochī.',
    thaiReading: 'เหนียวโร่ว เหิ่น เนิ่น เฟยฉาง ห่าวชือ',
    thaiMeaning: 'เนื้อวัวนุ่มมาก อร่อยมากๆ',
    words: [
      { hanzi: '牛肉', pinyin: 'niúròu', thaiReading: 'เหนียวโร่ว', thaiMeaning: 'เนื้อวัว' },
      { hanzi: '很嫩', pinyin: 'hěn nèn', thaiReading: 'เหิ่นเนิ่น', thaiMeaning: 'นุ่มมาก' },
      { hanzi: '非常好吃', pinyin: 'fēicháng hǎochī', thaiReading: 'เฟยฉางห่าวชือ', thaiMeaning: 'อร่อยมากๆ' }
    ]
  },
  {
    id: 't3',
    category: 'food_taste',
    context: 'บอกว่าน้ำซุปเค็มไปหน่อย',
    hanzi: '汤有点儿咸。',
    pinyin: 'Tāng yǒudiǎnr xián.',
    thaiReading: 'ทาง โหย่วเตี่ยร์ เสียน',
    thaiMeaning: 'น้ำซุปเค็มไปหน่อย',
    words: [
      { hanzi: '汤', pinyin: 'tāng', thaiReading: 'ทาง', thaiMeaning: 'น้ำซุป' },
      { hanzi: '有点儿咸', pinyin: 'yǒudiǎnr xián', thaiReading: 'โหย่วเตี่ยร์เสียน', thaiMeaning: 'เค็มไปหน่อย' }
    ]
  },
  {
    id: 't4',
    category: 'food_taste',
    context: 'บอกว่ารสชาติจืดเกินไป',
    hanzi: '味道太淡了。',
    pinyin: 'Wèidào tài dàn le.',
    thaiReading: 'เว่ยเต้า ไท่ ด่าน เลอ',
    thaiMeaning: 'รสชาติจืดเกินไป',
    words: [
      { hanzi: '味道', pinyin: 'wèidào', thaiReading: 'เว่ยเต้า', thaiMeaning: 'รสชาติ' },
      { hanzi: '太淡了', pinyin: 'tài dàn le', thaiReading: 'ไท่ด่านเลอ', thaiMeaning: 'จืดเกินไป' }
    ]
  },
  {
    id: 't5',
    category: 'food_taste',
    context: 'บอกว่าไก่ทอดหอมกรอบ',
    hanzi: '炸鸡很香很脆。',
    pinyin: 'Zhájī hěn xiāng hěn cuì.',
    thaiReading: 'จ้าจี เหิ่น เซียง เหิ่น ชุ่ย',
    thaiMeaning: 'ไก่ทอดหอมและกรอบมาก',
    words: [
      { hanzi: '炸鸡', pinyin: 'zhájī', thaiReading: 'จ้าจี', thaiMeaning: 'ไก่ทอด' },
      { hanzi: '很香很脆', pinyin: 'hěn xiāng hěn cuì', thaiReading: 'เหิ่นเซียงเหิ่นชุ่ย', thaiMeaning: 'หอมและกรอบมาก' }
    ]
  },
  {
    id: 't6',
    category: 'food_taste',
    context: 'บอกว่าเหนียวนุ่มอร่อย',
    hanzi: '这个软糯好吃。',
    pinyin: 'Zhège ruǎn nuò hǎochī.',
    thaiReading: 'เจ้อเกอ ร่วน นั่ว ห่าวชือ',
    thaiMeaning: 'อันนี้เหนียวนุ่มอร่อย',
    words: [
      { hanzi: '这个', pinyin: 'zhège', thaiReading: 'เจ้อเกอ', thaiMeaning: 'อันนี้' },
      { hanzi: '软糯好吃', pinyin: 'ruǎn nuò hǎochī', thaiReading: 'ร่วนนั่วห่าวชือ', thaiMeaning: 'เหนียวนุ่มอร่อย' }
    ]
  },
  {
    id: 't7',
    category: 'food_taste',
    context: 'บอกว่าเนื้อแข็งเคี้ยวยาก',
    hanzi: '肉太硬了，咬不动。',
    pinyin: 'Ròu tài yìng le, yǎo bú dòng.',
    thaiReading: 'โร่ว ไท่ ยิ่ง เลอ หย่าว ปู๋ ต้ง',
    thaiMeaning: 'เนื้อแข็งเกินไป เคี้ยวไม่เข้า',
    words: [
      { hanzi: '肉', pinyin: 'ròu', thaiReading: 'โร่ว', thaiMeaning: 'เนื้อ' },
      { hanzi: '太硬了', pinyin: 'tài yìng le', thaiReading: 'ไท่ยิ่งเลอ', thaiMeaning: 'แข็งเกินไป' },
      { hanzi: '咬不动', pinyin: 'yǎo bú dòng', thaiReading: 'หย่าวปู๋ต้ง', thaiMeaning: 'เคี้ยวไม่เข้า/กัดไม่ขาด' }
    ]
  },
  {
    id: 't8',
    category: 'food_taste',
    context: 'เตือนว่าชาร้อนลวกปาก',
    hanzi: '茶很烫，慢点儿喝。',
    pinyin: 'Chá hěn tàng, màn diǎnr hē.',
    thaiReading: 'ชา เหิ่น ท้าง ม่าน เตี่ยร์ ชือ',
    thaiMeaning: 'ชาร้อนมาก ดื่มช้าๆ หน่อย',
    words: [
      { hanzi: '茶', pinyin: 'chá', thaiReading: 'ชา', thaiMeaning: 'ชา' },
      { hanzi: '很烫', pinyin: 'hěn tàng', thaiReading: 'เหิ่นท้าง', thaiMeaning: 'ร้อนลวกปากมาก' },
      { hanzi: '慢点儿喝', pinyin: 'màn diǎnr hē', thaiReading: 'ม่านเตี่ยร์ชือ', thaiMeaning: 'ดื่มช้าๆ หน่อย' }
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
