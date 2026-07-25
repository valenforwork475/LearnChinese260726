// Essential Vocabulary organized into 10-word Sets for optimal memory retention

export const VOCAB_SETS = [
  { id: 'all', label: 'ทั้งหมด' },
  { id: 'set_1', label: 'เซกชัน 1 (10 คำแรก)' },
  { id: 'set_2', label: 'เซกชัน 2 (คำที่ 11-20)' },
  { id: 'set_3', label: 'เซกชัน 3 (คำที่ 21-30)' }
];

export const vocabularyList = [
  // --- SET 1 (10 Words) ---
  {
    id: 'v1',
    setId: 'set_1',
    hanzi: '起床',
    pinyin: 'qǐchuáng',
    thaiReading: 'ฉี่ฉวง',
    thaiMeaning: 'ตื่นนอน',
    example: {
      hanzi: '我每天七点起床。',
      pinyin: 'Wǒ měitiān qī diǎn qǐchuáng.',
      thaiReading: 'หว่อ เหม่ยเทียน ชี เตี่ยน ฉี่ฉวง',
      thaiMeaning: 'ฉันตื่นนอน 7 โมงเช้าทุกวัน'
    }
  },
  {
    id: 'v2',
    setId: 'set_1',
    hanzi: '刷牙',
    pinyin: 'shuāyá',
    thaiReading: 'ชวาหยา',
    thaiMeaning: 'แปรงฟัน',
    example: {
      hanzi: '先去刷牙吧。',
      pinyin: 'Xiān qù shuāyá ba.',
      thaiReading: 'เซียน ชวี่ ชวาหยา ปา',
      thaiMeaning: 'ไปแปรงฟันก่อนเถอะ'
    }
  },
  {
    id: 'v3',
    setId: 'set_1',
    hanzi: '洗脸',
    pinyin: 'xǐliǎn',
    thaiReading: 'สีเหลี่ยน',
    thaiMeaning: 'ล้างหน้า',
    example: {
      hanzi: '洗个脸清醒一下。',
      pinyin: 'Xǐ gè liǎn qīngxǐng yíxià.',
      thaiReading: 'สี เก้อ เหลี่ยน ชิงสิ่ง อี๋เซีย',
      thaiMeaning: 'ล้างหน้าให้สดชื่นหน่อย'
    }
  },
  {
    id: 'v4',
    setId: 'set_1',
    hanzi: '洗澡',
    pinyin: 'xǐzǎo',
    thaiReading: 'สีเจ้า',
    thaiMeaning: 'อาบน้ำ',
    example: {
      hanzi: '我去洗个热水澡。',
      pinyin: 'Wǒ qù xǐ gè rèshuǐzǎo.',
      thaiReading: 'หว่อ ชวี่ สี เก้อ เร่อสุ่ยเจ้า',
      thaiMeaning: 'ฉันไปอาบน้ำอุ่นแป๊บนึง'
    }
  },
  {
    id: 'v5',
    setId: 'set_1',
    hanzi: '出门',
    pinyin: 'chūmén',
    thaiReading: 'ชูเหมิน',
    thaiMeaning: 'ออกจากบ้าน',
    example: {
      hanzi: '准备出门了。',
      pinyin: 'Zhǔnbèi chūmén le.',
      thaiReading: 'จุ่นเป่ย ชูเหมิน เลอ',
      thaiMeaning: 'เตรียมตัวออกจากบ้านแล้ว'
    }
  },
  {
    id: 'v6',
    setId: 'set_1',
    hanzi: '回家',
    pinyin: 'huíjiā',
    thaiReading: 'หุยเจีย',
    thaiMeaning: 'กลับบ้าน',
    example: {
      hanzi: '我想早点回家。',
      pinyin: 'Wǒ xiǎng zǎodiǎn huíjiā.',
      thaiReading: 'หว่อ เสียง เจ้าเตี่ยน หุยเจีย',
      thaiMeaning: 'ฉันอยากกลับบ้านไวหน่อย'
    }
  },
  {
    id: 'v7',
    setId: 'set_1',
    hanzi: '睡觉',
    pinyin: 'shuìjiào',
    thaiReading: 'ชุ่ยเจี้ยว',
    thaiMeaning: 'เข้านอน',
    example: {
      hanzi: '该去睡觉了。',
      pinyin: 'Gāi qù shuìjiào le.',
      thaiReading: 'ไก ชวี่ ชุ่ยเจี้ยว เลอ',
      thaiMeaning: 'ได้เวลานอนแล้ว'
    }
  },
  {
    id: 'v8',
    setId: 'set_1',
    hanzi: '手机',
    pinyin: 'shǒujī',
    thaiReading: 'โหย่วจี',
    thaiMeaning: 'โทรศัพท์มือถือ',
    example: {
      hanzi: '我的手机在哪里？',
      pinyin: 'Wǒ de shǒujī zài nǎlǐ?',
      thaiReading: 'หว่อ เตอ โหย่วจี จ้าย น่าหลี?',
      thaiMeaning: 'โทรศัพท์ของฉันอยู่ไหนนะ?'
    }
  },
  {
    id: 'v9',
    setId: 'set_1',
    hanzi: '钥匙',
    pinyin: 'yàoshi',
    thaiReading: 'เย่าสือ',
    thaiMeaning: 'กุญแจ',
    example: {
      hanzi: '钥匙带了吗？',
      pinyin: 'Yàoshi dài le ma?',
      thaiReading: 'เย่าสือ ได๋ เลอ มา?',
      thaiMeaning: 'เอา กุญแจ มาหรือยัง?'
    }
  },
  {
    id: 'v10',
    setId: 'set_1',
    hanzi: '现在',
    pinyin: 'xiànzài',
    thaiReading: 'เซี่ยนจ้าย',
    thaiMeaning: 'ตอนนี้ / ขณะนี้',
    example: {
      hanzi: '现在几点了？',
      pinyin: 'Xiànzài jǐ diǎn le?',
      thaiReading: 'เซี่ยนจ้าย จี่ เตี่ยน เลอ?',
      thaiMeaning: 'ตอนนี้กี่โมงแล้ว?'
    }
  },

  // --- SET 2 (10 Words) ---
  {
    id: 'v11',
    setId: 'set_2',
    hanzi: '工作',
    pinyin: 'gōngzuò',
    thaiReading: 'กงจั้ว',
    thaiMeaning: 'ทำงาน / งาน',
    example: {
      hanzi: '今天工作很忙。',
      pinyin: 'Jīntiān gōngzuò hěn máng.',
      thaiReading: 'จินเทียน กงจั้ว เหิ่น หม่าง',
      thaiMeaning: 'วันนี้งานยุ่งมาก'
    }
  },
  {
    id: 'v12',
    setId: 'set_2',
    hanzi: '公司',
    pinyin: 'gōngsī',
    thaiReading: 'กงซือ',
    thaiMeaning: 'บริษัท / ที่ทำงาน',
    example: {
      hanzi: '我已经到公司了。',
      pinyin: 'Wǒ yǐjīng dào gōngsī le.',
      thaiReading: 'หว่อ อี่จิง เต้า กงซือ เลอ',
      thaiMeaning: 'ฉันถึงบริษัทแล้ว'
    }
  },
  {
    id: 'v13',
    setId: 'set_2',
    hanzi: '水',
    pinyin: 'shuǐ',
    thaiReading: 'สุ่ย',
    thaiMeaning: 'น้ำ',
    example: {
      hanzi: '多喝水，对身体好。',
      pinyin: 'Duō hē shuǐ, duì shēntǐ hǎo.',
      thaiReading: 'ตัว เฮอ สุ่ย, ตู้ย เซินถี่ ห่าว',
      thaiMeaning: 'ดื่มน้ำเยอะๆ ดีต่อร่างกาย'
    }
  },
  {
    id: 'v14',
    setId: 'set_2',
    hanzi: '咖啡',
    pinyin: 'kāfēi',
    thaiReading: 'คาเฟย',
    thaiMeaning: 'กาแฟ',
    example: {
      hanzi: '喝杯热咖啡。',
      pinyin: 'Hē bēi rè kāfēi.',
      thaiReading: 'เฮอ เปย เร่อ คาเฟย',
      thaiMeaning: 'ดื่มกาแฟร้อนสักแก้ว'
    }
  },
  {
    id: 'v15',
    setId: 'set_2',
    hanzi: '吃饭',
    pinyin: 'chīfàn',
    thaiReading: 'ชือฝ้าน',
    thaiMeaning: 'กินข้าว',
    example: {
      hanzi: '该去吃饭了。',
      pinyin: 'Gāi qù chīfàn le.',
      thaiReading: 'ไก ชวี่ ชือฝ้าน เลอ',
      thaiMeaning: 'ได้เวลาไปกินข้าวแล้ว'
    }
  },
  {
    id: 'v16',
    setId: 'set_2',
    hanzi: '肚子',
    pinyin: 'dùzi',
    thaiReading: 'ตู้จือ',
    thaiMeaning: 'ท้อง',
    example: {
      hanzi: '肚子有点饿了。',
      pinyin: 'Dùzi yǒudiǎnr è le.',
      thaiReading: 'ตู้จือ โหย่วเตี่ยนร์ เอ้อ เลอ',
      thaiMeaning: 'ท้องเริ่มหิวแล้ว'
    }
  },
  {
    id: 'v17',
    setId: 'set_2',
    hanzi: '时间',
    pinyin: 'shíjiān',
    thaiReading: 'สือเจียน',
    thaiMeaning: 'เวลา',
    example: {
      hanzi: '没时间了，快点！',
      pinyin: 'Méi shíjiān le, kuài diǎn!',
      thaiReading: 'เหมย์ สือเจียน เลอ, ไค่ว เตี่ยน!',
      thaiMeaning: 'ไม่มีเวลาแล้ว เร็วหน่อย!'
    }
  },
  {
    id: 'v18',
    setId: 'set_2',
    hanzi: '今天',
    pinyin: 'jīntiān',
    thaiReading: 'จินเทียน',
    thaiMeaning: 'วันนี้',
    example: {
      hanzi: '今天天气不错。',
      pinyin: 'Jīntiān tiānqì bùcuò.',
      thaiReading: 'จินเทียน เทียนชี่ ปู๋ชั่ว',
      thaiMeaning: 'วันนี้อากาศดีเลย'
    }
  },
  {
    id: 'v19',
    setId: 'set_2',
    hanzi: '明天',
    pinyin: 'míngtiān',
    thaiReading: 'หมิงเทียน',
    thaiMeaning: 'พรุ่งนี้',
    example: {
      hanzi: '明天要早起。',
      pinyin: 'Míngtiān yào zǎoqǐ.',
      thaiReading: 'หมิงเทียน เย่า เจ้าฉี่',
      thaiMeaning: 'พรุ่งนี้ต้องตื่นเช้า'
    }
  },
  {
    id: 'v20',
    setId: 'set_2',
    hanzi: '准备',
    pinyin: 'zhǔnbèi',
    thaiReading: 'จุ่นเป่ย',
    thaiMeaning: 'เตรียมตัว / เตรียมพร้อม',
    example: {
      hanzi: '我都准备好了。',
      pinyin: 'Wǒ dōu zhǔnbèi hǎo le.',
      thaiReading: 'หว่อ โตว จุ่นเป่ย ห่าว เลอ',
      thaiMeaning: 'ฉันเตรียมพร้อมหมดแล้ว'
    }
  },

  // --- SET 3 (10 Words) ---
  {
    id: 'v21',
    setId: 'set_3',
    hanzi: '累',
    pinyin: 'lèi',
    thaiReading: 'เล่ย',
    thaiMeaning: 'เหนื่อย',
    example: {
      hanzi: '今天真的有点累。',
      pinyin: 'Jīntiān zhēn de yǒudiǎnr lèi.',
      thaiReading: 'จินเทียน เจิน เตอ โหย่วเตี่ยนร์ เล่ย',
      thaiMeaning: 'วันนี้เหนื่อยจริงๆ'
    }
  },
  {
    id: 'v22',
    setId: 'set_3',
    hanzi: '困',
    pinyin: 'kùn',
    thaiReading: 'คุ่น',
    thaiMeaning: 'ง่วง',
    example: {
      hanzi: '太困了，眼皮发沉。',
      pinyin: 'Tài kùn le, yǎnpí fā chén.',
      thaiReading: 'ไท่ คุ่น เลอ, เหยี่ยนพี ฝา เฉิน',
      thaiMeaning: 'ง่วงมาก หนังตาหนักอึ้ง'
    }
  },
  {
    id: 'v23',
    setId: 'set_3',
    hanzi: '舒服',
    pinyin: 'shūfu',
    thaiReading: 'ซูฝู่',
    thaiMeaning: 'สบาย / สบายตัว',
    example: {
      hanzi: '洗完澡真舒服。',
      pinyin: 'Xǐ wán zǎo zhēn shūfu.',
      thaiReading: 'สี หวาน เจ้า เจิน ซูฝู่',
      thaiMeaning: 'อาบน้ำเสร็จสบายตัวมาก'
    }
  },
  {
    id: 'v24',
    setId: 'set_3',
    hanzi: '堵车',
    pinyin: 'dǔchē',
    thaiReading: 'ตู่เชอ',
    thaiMeaning: 'รถติด',
    example: {
      hanzi: '路上有点堵车。',
      pinyin: 'Lùshang yǒudiǎnr dǔchē.',
      thaiReading: 'ลู่ซ่าง โหย่วเตี่ยนร์ ตู่เชอ',
      thaiMeaning: 'บนถนนรถติดนิดหน่อย'
    }
  },
  {
    id: 'v25',
    setId: 'set_3',
    hanzi: '迟到',
    pinyin: 'chídào',
    thaiReading: 'ฉือเต้า',
    thaiMeaning: 'มาสาย',
    example: {
      hanzi: '快走，要迟到了！',
      pinyin: 'Kuài zǒu, yào chídào le!',
      thaiReading: 'ไค่ว เจั่ว, เย่า ฉือเต้า เลอ!',
      thaiMeaning: 'รีบไป เดี๋ยวสายนะ!'
    }
  },
  {
    id: 'v26',
    setId: 'set_3',
    hanzi: '休息',
    pinyin: 'xiūxi',
    thaiReading: 'ซิวสิ',
    thaiMeaning: 'พักผ่อน',
    example: {
      hanzi: '好好休息一下吧。',
      pinyin: 'Hǎohāo xiūxi yíxià ba.',
      thaiReading: 'ห่าวฮาว ซิวสิ อี๋เซีย ปา',
      thaiMeaning: 'พักผ่อนให้เต็มที่เถอะ'
    }
  },
  {
    id: 'v27',
    setId: 'set_3',
    hanzi: '加油',
    pinyin: 'jiāyóu',
    thaiReading: 'เจียโหยว',
    thaiMeaning: 'สู้ๆ',
    example: {
      hanzi: '自己给自己加油！',
      pinyin: 'Zìjǐ gěi zìjǐ jiāyóu!',
      thaiReading: 'จื้อจี๋ เก่ย จื้อจี๋ เจียโหยว!',
      thaiMeaning: 'ให้กำลังใจตัวเอง สู้ๆ!'
    }
  },
  {
    id: 'v28',
    setId: 'set_3',
    hanzi: '没关系',
    pinyin: 'méi guānxi',
    thaiReading: 'เหมย์ กวานสิ',
    thaiMeaning: 'ไม่เป็นไร',
    example: {
      hanzi: '没关系，慢慢来。',
      pinyin: 'Méi guānxi, mànman lái.',
      thaiReading: 'เหมย์ กวานสิ, ม่านม่าน ไล',
      thaiMeaning: 'ไม่เป็นไร ค่อยๆ ทำ'
    }
  },
  {
    id: 'v29',
    setId: 'set_3',
    hanzi: '晚安',
    pinyin: 'wǎn\'ān',
    thaiReading: 'หวั่นอาน',
    thaiMeaning: 'ฝันดี / ราตรีสวัสดิ์',
    example: {
      hanzi: '祝你晚安！',
      pinyin: 'Zhù nǐ wǎn\'ān!',
      thaiReading: 'จู้ หนี่ หวั่นอาน!',
      thaiMeaning: 'ขอให้คุณราตรีสวัสดิ์!'
    }
  },
  {
    id: 'v30',
    setId: 'set_3',
    hanzi: '慢慢来',
    pinyin: 'mànman lái',
    thaiReading: 'ม่านม่าน ไล',
    thaiMeaning: 'ค่อยๆ ทำ / ค่อยเป็นค่อยไป',
    example: {
      hanzi: '别急，慢慢来。',
      pinyin: 'Bié jí, mànman lái.',
      thaiReading: 'เปี๋ย จี๋, ม่านม่าน ไล',
      thaiMeaning: 'ไม่ต้องรีบ ค่อยๆ เป็นค่อยไป'
    }
  }
];
