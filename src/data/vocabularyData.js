// Expanded Vocabulary Data (50 Words in 5 Sets of 10 Words Each)

export const VOCAB_SETS = [
  { id: 'all', label: 'ทั้งหมด' },
  { id: 'set_1', label: 'เซกชัน 1 (1-10)' },
  { id: 'set_2', label: 'เซกชัน 2 (11-20)' },
  { id: 'set_3', label: 'เซกชัน 3 (21-30)' },
  { id: 'set_4', label: 'เซกชัน 4 (31-40)' },
  { id: 'set_5', label: 'เซกชัน 5 (41-50)' }
];

export const vocabularyList = [
  // --- SET 1 (1-10) ---
  {
    id: 'v1',
    setId: 'set_1',
    hanzi: '起床',
    pinyin: 'qǐchuáng',
    thaiMeaning: 'ตื่นนอน',
    example: { hanzi: '八点起床。', pinyin: 'Bā diǎn qǐchuáng.', thaiMeaning: '8 โมงตื่นนอน' }
  },
  {
    id: 'v2',
    setId: 'set_1',
    hanzi: '刷牙',
    pinyin: 'shuāyá',
    thaiMeaning: 'แปรงฟัน',
    example: { hanzi: '去刷牙。', pinyin: 'Qù shuāyá.', thaiMeaning: 'ไปแปรงฟัน' }
  },
  {
    id: 'v3',
    setId: 'set_1',
    hanzi: '洗脸',
    pinyin: 'xǐliǎn',
    thaiMeaning: 'ล้างหน้า',
    example: { hanzi: '洗脸。', pinyin: 'Xǐliǎn.', thaiMeaning: 'ล้างหน้า' }
  },
  {
    id: 'v4',
    setId: 'set_1',
    hanzi: '洗澡',
    pinyin: 'xǐzǎo',
    thaiMeaning: 'อาบน้ำ',
    example: { hanzi: '洗澡。', pinyin: 'Xǐzǎo.', thaiMeaning: 'อาบน้ำ' }
  },
  {
    id: 'v5',
    setId: 'set_1',
    hanzi: '出门',
    pinyin: 'chūmén',
    thaiMeaning: 'ออกจากบ้าน',
    example: { hanzi: '出门。', pinyin: 'Chūmén.', thaiMeaning: 'ออกจากบ้าน' }
  },
  {
    id: 'v6',
    setId: 'set_1',
    hanzi: '回家',
    pinyin: 'huíjiā',
    thaiMeaning: 'กลับบ้าน',
    example: { hanzi: '回家。', pinyin: 'Huíjiā.', thaiMeaning: 'กลับบ้าน' }
  },
  {
    id: 'v7',
    setId: 'set_1',
    hanzi: '睡觉',
    pinyin: 'shuìjiào',
    thaiMeaning: 'เข้านอน',
    example: { hanzi: '准备睡觉。', pinyin: 'Zhǔnbèi shuìjiào.', thaiMeaning: 'เตรียมตัวนอน' }
  },
  {
    id: 'v8',
    setId: 'set_1',
    hanzi: '手机',
    pinyin: 'shǒujī',
    thaiMeaning: 'โทรศัพท์มือถือ',
    example: { hanzi: '看手机。', pinyin: 'Kàn shǒujī.', thaiMeaning: 'ดูโทรศัพท์' }
  },
  {
    id: 'v9',
    setId: 'set_1',
    hanzi: '钥匙',
    pinyin: 'yàoshi',
    thaiMeaning: 'กุญแจ',
    example: { hanzi: '拿钥匙。', pinyin: 'Ná yàoshi.', thaiMeaning: 'หยิบกุญแจ' }
  },
  {
    id: 'v10',
    setId: 'set_1',
    hanzi: '现在',
    pinyin: 'xiànzài',
    thaiMeaning: 'ตอนนี้ / ขณะนี้',
    example: { hanzi: '现在几点？', pinyin: 'Xiànzài jǐ diǎn?', thaiMeaning: 'ตอนนี้กี่โมง' }
  },

  // --- SET 2 (11-20) ---
  {
    id: 'v11',
    setId: 'set_2',
    hanzi: '工作',
    pinyin: 'gōngzuò',
    thaiMeaning: 'ทำงาน / งาน',
    example: { hanzi: '开始工作。', pinyin: 'Kāishǐ gōngzuò.', thaiMeaning: 'เริ่มทำงาน' }
  },
  {
    id: 'v12',
    setId: 'set_2',
    hanzi: '公司',
    pinyin: 'gōngsī',
    thaiMeaning: 'บริษัท / ที่ทำงาน',
    example: { hanzi: '到公司了。', pinyin: 'Dào gōngsī le.', thaiMeaning: 'ถึงบริษัทแล้ว' }
  },
  {
    id: 'v13',
    setId: 'set_2',
    hanzi: '水',
    pinyin: 'shuǐ',
    thaiMeaning: 'น้ำ',
    example: { hanzi: '喝水。', pinyin: 'Hē shuǐ.', thaiMeaning: 'ดื่มน้ำ' }
  },
  {
    id: 'v14',
    setId: 'set_2',
    hanzi: '咖啡',
    pinyin: 'kāfēi',
    thaiMeaning: 'กาแฟ',
    example: { hanzi: '泡咖啡。', pinyin: 'Pào kāfēi.', thaiMeaning: 'ชงกาแฟ' }
  },
  {
    id: 'v15',
    setId: 'set_2',
    hanzi: '吃饭',
    pinyin: 'chīfàn',
    thaiMeaning: 'กินข้าว',
    example: { hanzi: '去吃饭。', pinyin: 'Qù chīfàn.', thaiMeaning: 'ไปกินข้าว' }
  },
  {
    id: 'v16',
    setId: 'set_2',
    hanzi: '肚子',
    pinyin: 'dùzi',
    thaiMeaning: 'ท้อง',
    example: { hanzi: '肚子饿。', pinyin: 'Dùzi è.', thaiMeaning: 'ท้องหิว' }
  },
  {
    id: 'v17',
    setId: 'set_2',
    hanzi: '时间',
    pinyin: 'shíjiān',
    thaiMeaning: 'เวลา',
    example: { hanzi: '没时间。', pinyin: 'Méi shíjiān.', thaiMeaning: 'ไม่มีเวลา' }
  },
  {
    id: 'v18',
    setId: 'set_2',
    hanzi: '今天',
    pinyin: 'jīntiān',
    thaiMeaning: 'วันนี้',
    example: { hanzi: '今天去上班。', pinyin: 'Jīntiān qù shàngbān.', thaiMeaning: 'วันนี้ไปทำงาน' }
  },
  {
    id: 'v19',
    setId: 'set_2',
    hanzi: '明天',
    pinyin: 'míngtiān',
    thaiMeaning: 'พรุ่งนี้',
    example: { hanzi: '明天早起。', pinyin: 'Míngtiān zǎoqǐ.', thaiMeaning: 'พรุ่งนี้ตื่นเช้า' }
  },
  {
    id: 'v20',
    setId: 'set_2',
    hanzi: '准备',
    pinyin: 'zhǔnbèi',
    thaiMeaning: 'เตรียมตัว',
    example: { hanzi: '准备好了。', pinyin: 'Zhǔnbèi hǎo le.', thaiMeaning: 'เตรียมพร้อมแล้ว' }
  },

  // --- SET 3 (21-30) ---
  {
    id: 'v21',
    setId: 'set_3',
    hanzi: '累',
    pinyin: 'lèi',
    thaiMeaning: 'เหนื่อย',
    example: { hanzi: '有点累。', pinyin: 'Yǒudiǎnr lèi.', thaiMeaning: 'เหนื่อยนิดหน่อย' }
  },
  {
    id: 'v22',
    setId: 'set_3',
    hanzi: '困',
    pinyin: 'kùn',
    thaiMeaning: 'ง่วง',
    example: { hanzi: '太困了。', pinyin: 'Tài kùn le.', thaiMeaning: 'ง่วงมาก' }
  },
  {
    id: 'v23',
    setId: 'set_3',
    hanzi: '舒服',
    pinyin: 'shūfu',
    thaiMeaning: 'สบายตัว',
    example: { hanzi: '很舒服。', pinyin: 'Hěn shūfu.', thaiMeaning: 'สบายมาก' }
  },
  {
    id: 'v24',
    setId: 'set_3',
    hanzi: '堵车',
    pinyin: 'dǔchē',
    thaiMeaning: 'รถติด',
    example: { hanzi: '路上堵车。', pinyin: 'Lùshang dǔchē.', thaiMeaning: 'บนถนนรถติด' }
  },
  {
    id: 'v25',
    setId: 'set_3',
    hanzi: '迟到',
    pinyin: 'chídào',
    thaiMeaning: 'มาสาย',
    example: { hanzi: '上班迟到。', pinyin: 'Shàngbān chídào.', thaiMeaning: 'ทำงานสาย' }
  },
  {
    id: 'v26',
    setId: 'set_3',
    hanzi: '休息',
    pinyin: 'xiūxi',
    thaiMeaning: 'พักผ่อน',
    example: { hanzi: '休息一下。', pinyin: 'Xiūxi yíxià.', thaiMeaning: 'พักแป๊บนึง' }
  },
  {
    id: 'v27',
    setId: 'set_3',
    hanzi: '加油',
    pinyin: 'jiāyóu',
    thaiMeaning: 'สู้ๆ',
    example: { hanzi: '加油！', pinyin: 'Jiāyóu!', thaiMeaning: 'สู้ๆ!' }
  },
  {
    id: 'v28',
    setId: 'set_3',
    hanzi: '没关系',
    pinyin: 'méi guānxi',
    thaiMeaning: 'ไม่เป็นไร',
    example: { hanzi: '没关系。', pinyin: 'Méi guānxi.', thaiMeaning: 'ไม่เป็นไร' }
  },
  {
    id: 'v29',
    setId: 'set_3',
    hanzi: '晚安',
    pinyin: 'wǎn\'ān',
    thaiMeaning: 'ฝันดี / ราตรีสวัสดิ์',
    example: { hanzi: '晚安。', pinyin: 'Wǎn\'ān.', thaiMeaning: 'ฝันดี' }
  },
  {
    id: 'v30',
    setId: 'set_3',
    hanzi: '衣服',
    pinyin: 'yīfu',
    thaiMeaning: 'เสื้อผ้า',
    example: { hanzi: '换衣服。', pinyin: 'Huàn yīfu.', thaiMeaning: 'เปลี่ยนเสื้อผ้า' }
  },

  // --- SET 4 (31-40) ---
  {
    id: 'v31',
    setId: 'set_4',
    hanzi: '裤子',
    pinyin: 'kùzi',
    thaiMeaning: 'กางเกง',
    example: { hanzi: '穿裤子。', pinyin: 'Chuān kùzi.', thaiMeaning: 'ใส่กางเกง' }
  },
  {
    id: 'v32',
    setId: 'set_4',
    hanzi: '鞋子',
    pinyin: 'xiézi',
    thaiMeaning: 'รองเท้า',
    example: { hanzi: '穿鞋子。', pinyin: 'Chuān xiézi.', thaiMeaning: 'ใส่รองเท้า' }
  },
  {
    id: 'v33',
    setId: 'set_4',
    hanzi: '上班',
    pinyin: 'shàngbān',
    thaiMeaning: 'ทำงาน / เข้างาน',
    example: { hanzi: '去上班。', pinyin: 'Qù shàngbān.', thaiMeaning: 'ไปทำงาน' }
  },
  {
    id: 'v34',
    setId: 'set_4',
    hanzi: '下班',
    pinyin: 'xiàbān',
    thaiMeaning: 'เลิกงาน',
    example: { hanzi: '下班了。', pinyin: 'Xiàbān le.', thaiMeaning: 'เลิกงานแล้ว' }
  },
  {
    id: 'v35',
    setId: 'set_4',
    hanzi: '午休',
    pinyin: 'wǔxiū',
    thaiMeaning: 'พักเที่ยง',
    example: { hanzi: '午休时间。', pinyin: 'Wǔxiū shíjiān.', thaiMeaning: 'เวลาพักเที่ยง' }
  },
  {
    id: 'v36',
    setId: 'set_4',
    hanzi: '早餐',
    pinyin: 'zǎocān',
    thaiMeaning: 'อาหารเช้า',
    example: { hanzi: '吃早餐。', pinyin: 'Chī zǎocān.', thaiMeaning: 'กินข้าวเช้า' }
  },
  {
    id: 'v37',
    setId: 'set_4',
    hanzi: '午饭',
    pinyin: 'wǔfàn',
    thaiMeaning: 'อาหารเที่ยง',
    example: { hanzi: '吃午饭。', pinyin: 'Chī wǔfàn.', thaiMeaning: 'กินข้าวเที่ยง' }
  },
  {
    id: 'v38',
    setId: 'set_4',
    hanzi: '晚饭',
    pinyin: 'wǎnfàn',
    thaiMeaning: 'อาหารเย็น',
    example: { hanzi: '吃晚饭。', pinyin: 'Chī wǎnfàn.', thaiMeaning: 'กินข้าวเย็น' }
  },
  {
    id: 'v39',
    setId: 'set_4',
    hanzi: '电脑',
    pinyin: 'diànnǎo',
    thaiMeaning: 'คอมพิวเตอร์',
    example: { hanzi: '开电脑。', pinyin: 'Kāi diànnǎo.', thaiMeaning: 'เปิดคอม' }
  },
  {
    id: 'v40',
    setId: 'set_4',
    hanzi: '钱',
    pinyin: 'qián',
    thaiMeaning: 'เงิน / สตางค์',
    example: { hanzi: '带钱。', pinyin: 'Dài qián.', thaiMeaning: 'พกเงิน' }
  },

  // --- SET 5 (41-50) ---
  {
    id: 'v41',
    setId: 'set_5',
    hanzi: '买',
    pinyin: 'mǎi',
    thaiMeaning: 'ซื้อ',
    example: { hanzi: '买东西。', pinyin: 'Mǎi dōngxi.', thaiMeaning: 'ซื้อของ' }
  },
  {
    id: 'v42',
    setId: 'set_5',
    hanzi: '开门',
    pinyin: 'kāimén',
    thaiMeaning: 'เปิดประตู',
    example: { hanzi: '开门。', pinyin: 'Kāimén.', thaiMeaning: 'เปิดประตู' }
  },
  {
    id: 'v43',
    setId: 'set_5',
    hanzi: '关门',
    pinyin: 'guānmén',
    thaiMeaning: 'ปิดประตู',
    example: { hanzi: '关门。', pinyin: 'Guānmén.', thaiMeaning: 'ปิดประตู' }
  },
  {
    id: 'v44',
    setId: 'set_5',
    hanzi: '快',
    pinyin: 'kuài',
    thaiMeaning: 'เร็ว / เร่งด่วน',
    example: { hanzi: '快一点。', pinyin: 'Kuài yìdiǎn.', thaiMeaning: 'เร็วหน่อย' }
  },
  {
    id: 'v45',
    setId: 'set_5',
    hanzi: '慢',
    pinyin: 'màn',
    thaiMeaning: 'ช้า / ค่อยๆ',
    example: { hanzi: '慢一点。', pinyin: 'Màn yìdiǎn.', thaiMeaning: 'ช้าหน่อย' }
  },
  {
    id: 'v46',
    setId: 'set_5',
    hanzi: '好',
    pinyin: 'hǎo',
    thaiMeaning: 'ดี / โอเค',
    example: { hanzi: '很好。', pinyin: 'Hěn hǎo.', thaiMeaning: 'ดีมาก' }
  },
  {
    id: 'v47',
    setId: 'set_5',
    hanzi: '热',
    pinyin: 'rè',
    thaiMeaning: 'ร้อน',
    example: { hanzi: '天气热。', pinyin: 'Tiānqì rè.', thaiMeaning: 'อากาศร้อน' }
  },
  {
    id: 'v48',
    setId: 'set_5',
    hanzi: '冷',
    pinyin: 'lěng',
    thaiMeaning: 'หนาว / เย็น',
    example: { hanzi: '有点冷。', pinyin: 'Yǒudiǎnr lěng.', thaiMeaning: 'หนาวนิดหน่อย' }
  },
  {
    id: 'v49',
    setId: 'set_5',
    hanzi: '开心',
    pinyin: 'kāixīn',
    thaiMeaning: 'มีความสุข / ดีใจ',
    example: { hanzi: '很开心。', pinyin: 'Hěn kāixīn.', thaiMeaning: 'มีความสุขมาก' }
  },
  {
    id: 'v50',
    setId: 'set_5',
    hanzi: '再见',
    pinyin: 'zàijiàn',
    thaiMeaning: 'ลาก่อน / ไว้เจอกันใหม่',
    example: { hanzi: '明天再见。', pinyin: 'Míngtiān zàijiàn.', thaiMeaning: 'พรุ่งนี้เจอกันใหม่' }
  }
];
