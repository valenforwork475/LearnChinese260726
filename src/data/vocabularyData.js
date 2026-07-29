// Vocabulary Dataset - 458 unique words
// Situational examples are written and reviewed per word; substitution templates are not used.

export const VOCAB_SETS = [
  { id: 'all', label: 'ทั้งหมด (458 คำ)' }
];

export const vocabularyList = [
  {
    "id": "v1",
    "hanzi": "起床",
    "pinyin": "qǐchuáng",
    "thaiMeaning": "ตื่นนอน",
    "example": {
      "hanzi": "八点起床。",
      "pinyin": "Bā diǎn qǐchuáng.",
      "thaiMeaning": "8 โมงตื่นนอน"
    },
    "examples": [
      {
        "scenario": "กิจวัตรประจำวัน",
        "hanzi": "我每天早上七点起床。",
        "pinyin": "Wǒ měitiān zǎoshang qī diǎn qǐchuáng.",
        "thaiMeaning": "ฉันตื่นนอน 7 โมงเช้าทุกวัน"
      },
      {
        "scenario": "ประโยคถามเพื่อน",
        "hanzi": "你今天怎么这么早起床？",
        "pinyin": "Nǐ jīntiān zěnme zhème zǎo qǐchuáng?",
        "thaiMeaning": "ทำไมวันนี้คุณตื่นนอนเช้าขนาดนี้?"
      },
      {
        "scenario": "วันหยุดพักผ่อน",
        "hanzi": "周末我喜欢晚一点起床。",
        "pinyin": "Zhōumò wǒ xǐhuan wǎn yīdiǎn qǐchuáng.",
        "thaiMeaning": "วันเสาร์อาทิตย์ฉันชอบตื่นนอนสายหน่อย"
      }
    ]
  },
  {
    "id": "v2",
    "hanzi": "刷牙",
    "pinyin": "shuāyá",
    "thaiMeaning": "แปรงฟัน",
    "example": {
      "hanzi": "去刷牙。",
      "pinyin": "Qù shuāyá.",
      "thaiMeaning": "ไปแปรงฟัน"
    },
    "examples": [
      {
        "scenario": "กิจวัตรประจำวัน",
        "hanzi": "睡觉前一定要记得刷牙。",
        "pinyin": "Shuìjiào qián yīdìng yào jìde shuāyá.",
        "thaiMeaning": "ก่อนนอนต้องจำไว้ว่าต้องแปรงฟัน"
      },
      {
        "scenario": "ลำดับเวลา",
        "hanzi": "我早上洗脸刷牙后就吃早餐。",
        "pinyin": "Wǒ zǎoshang xǐliǎn shuāyá hòu jiù chī zǎocān.",
        "thaiMeaning": "ตอนเช้าหลังจากฉันล้างหน้าแปรงฟันแล้วก็กินอาหารเช้า"
      },
      {
        "scenario": "คำแนะนำ",
        "hanzi": "记得把牙齿刷干净一点。",
        "pinyin": "Jìde bǎ yáchǐ shuā gānjìng yīdiǎn.",
        "thaiMeaning": "อย่าลืมแปรงฟันให้สะอาดหน่อยนะ"
      }
    ]
  },
  {
    "id": "v3",
    "hanzi": "洗脸",
    "pinyin": "xǐliǎn",
    "thaiMeaning": "ล้างหน้า",
    "example": {
      "hanzi": "洗脸。",
      "pinyin": "Xǐliǎn.",
      "thaiMeaning": "ล้างหน้า"
    },
    "examples": [
      {
        "scenario": "ลำดับชีวิตประจำวัน",
        "hanzi": "早上起床后先去洗脸。",
        "pinyin": "Zǎoshang qǐchuáng hòu xiān qù xǐliǎn.",
        "thaiMeaning": "ตอนเช้าหลังตื่นนอนไปล้างหน้าก่อน"
      },
      {
        "scenario": "คำแนะนำสดชื่น",
        "hanzi": "累的时候洗个脸会清醒一点。",
        "pinyin": "Lèi de shíhou xǐ ge liǎn huì qīngxǐng yīdiǎn.",
        "thaiMeaning": "เวลาเหนื่อยๆ ล้างหน้าสักหน่อยจะสดชื่นขึ้น"
      },
      {
        "scenario": "ความชอบส่วนตัว",
        "hanzi": "我喜欢用温水洗脸。",
        "pinyin": "Wǒ xǐhuan yòng wēnshuǐ xǐliǎn.",
        "thaiMeaning": "ฉันชอบใช้น้ำอุ่นล้างหน้า"
      }
    ]
  },
  {
    "id": "v4",
    "hanzi": "洗澡",
    "pinyin": "xǐzǎo",
    "thaiMeaning": "อาบน้ำ",
    "example": {
      "hanzi": "洗澡。",
      "pinyin": "Xǐzǎo.",
      "thaiMeaning": "อาบน้ำ"
    },
    "examples": [
      {
        "scenario": "นิสัยส่วนตัว",
        "hanzi": "我习惯每天晚上洗澡。",
        "pinyin": "Wǒ xíguàn měitiān wǎnshang xǐzǎo.",
        "thaiMeaning": "ฉันชินกับการอาบน้ำทุกตอนเย็น"
      },
      {
        "scenario": "ชวนเพื่อน",
        "hanzi": "天气这么热，快去洗个澡吧。",
        "pinyin": "Tiānqì zhème rè, kuài qù xǐ ge zǎo ba.",
        "thaiMeaning": "อากาศร้อนขนาดนี้ รีบไปอาบน้ำสักหน่อยเถอะ"
      },
      {
        "scenario": "บอกความรู้สึก",
        "hanzi": "洗完澡后感觉很舒服。",
        "pinyin": "Xǐ wán zǎo hòu gǎnjué hěn shūfu.",
        "thaiMeaning": "อาบน้ำเสร็จแล้วรู้สึกสบายมาก"
      }
    ]
  },
  {
    "id": "v5",
    "hanzi": "出门",
    "pinyin": "chūmén",
    "thaiMeaning": "ออกจากบ้าน",
    "example": {
      "hanzi": "出门。",
      "pinyin": "Chūmén.",
      "thaiMeaning": "ออกจากบ้าน"
    },
    "examples": [
      {
        "scenario": "ไปทำงาน",
        "hanzi": "我准备出门去上班了。",
        "pinyin": "Wǒ zhǔnbèi chūmén qù shàngbān le.",
        "thaiMeaning": "ฉันเตรียมตัวออกจากบ้านไปทำงานแล้ว"
      },
      {
        "scenario": "เตือนความจำ",
        "hanzi": "出门前一定要检查钥匙和手机。",
        "pinyin": "Chūmén qián yīdìng yào jiǎnchá yàoshi hé shǒujī.",
        "thaiMeaning": "ก่อนออกจากบ้านต้องเช็กกุญแจและมือถือให้ดี"
      },
      {
        "scenario": "ห่วงใย",
        "hanzi": "外面下雨了，你出门带伞了吗？",
        "pinyin": "Wàimiàn xià yǔ le, nǐ chūmén dài sǎn le ma?",
        "thaiMeaning": "ข้างนอกฝนตกแล้ว คุณออกจากบ้านพกร่มมาไหม?"
      }
    ]
  },
  {
    "id": "v6",
    "hanzi": "回家",
    "pinyin": "huíjiā",
    "thaiMeaning": "กลับบ้าน",
    "example": {
      "hanzi": "回家。",
      "pinyin": "Huíjiā.",
      "thaiMeaning": "กลับบ้าน"
    },
    "examples": [
      {
        "scenario": "บอกเวลา",
        "hanzi": "我今天晚上七点回家。",
        "pinyin": "Wǒ jīntiān wǎnshang qī diǎn huíjiā.",
        "thaiMeaning": "คืนนี้ฉันกลับบ้าน 7 โมงเย็น"
      },
      {
        "scenario": "ถามไถ่",
        "hanzi": "你什么时候回家？",
        "pinyin": "Nǐ shénme shíhou huíjiā?",
        "thaiMeaning": "คุณจะกลับบ้านเมื่อไหร่?"
      },
      {
        "scenario": "บอกเพื่อน",
        "hanzi": "回到家后记得跟我说一声。",
        "pinyin": "Huí dào jiā hòu jìde gēn wǒ shuō yīshēng.",
        "thaiMeaning": "ถึงบ้านแล้วจำไว้ว่าบอกฉันสักคำนะ"
      }
    ]
  },
  {
    "id": "v7",
    "hanzi": "睡觉",
    "pinyin": "shuìjiào",
    "thaiMeaning": "เข้านอน",
    "example": {
      "hanzi": "准备睡觉。",
      "pinyin": "Zhǔnbèi shuìjiào.",
      "thaiMeaning": "เตรียมตัวนอน"
    },
    "examples": [
      {
        "scenario": "ชวนเข้านอน",
        "hanzi": "太晚了，快去睡觉吧。",
        "pinyin": "Tài wǎn le, kuài qù shuìjiào ba.",
        "thaiMeaning": "ดึกมากแล้ว รีบไปนอนเถอะ"
      },
      {
        "scenario": "เล่าประสบการณ์",
        "hanzi": "我昨天晚上十二点才睡觉。",
        "pinyin": "Wǒ zuótiān wǎnshang shí'èr diǎn cái shuìjiào.",
        "thaiMeaning": "เมื่อคืนนี้ฉันเที่ยงคืนถึงค่อยนอน"
      },
      {
        "scenario": "อวยพร",
        "hanzi": "祝你睡个好觉，晚安！",
        "pinyin": "Zhù nǐ shuì ge hǎo jiào, wǎn'ān!",
        "thaiMeaning": "ขอให้คุณนอนหลับฝันดี ราตรีสวัสดิ์!"
      }
    ]
  },
  {
    "id": "v8",
    "hanzi": "手机",
    "pinyin": "shǒujī",
    "thaiMeaning": "โทรศัพท์มือถือ",
    "example": {
      "hanzi": "看手机。",
      "pinyin": "Kàn shǒujī.",
      "thaiMeaning": "ดูโทรศัพท์"
    },
    "examples": [
      {
        "scenario": "แบตหมด",
        "hanzi": "我的手机没电了，需要充电。",
        "pinyin": "Wǒ de shǒujī méi diàn le, xūyào chōngdiàn.",
        "thaiMeaning": "โทรศัพท์ของฉันแบตหมดแล้ว ต้องชาร์จแบต"
      },
      {
        "scenario": "ตามหาของ",
        "hanzi": "请问你看到我的手机了吗？",
        "pinyin": "Qǐngwèn nǐ kàndào wǒ de shǒujī le ma?",
        "thaiMeaning": "ขอถามหน่อย คุณเห็นโทรศัพท์ของฉันไหม?"
      },
      {
        "scenario": "สถานที่ทำงาน",
        "hanzi": "开会的时候请把手机关静音。",
        "pinyin": "Kāihuì de shíhou qǐng bǎ shǒujī guān jìngyīn.",
        "thaiMeaning": "เวลาประชุมโปรดปิดเสียงโทรศัพท์"
      }
    ]
  },
  {
    "id": "v9",
    "hanzi": "钥匙",
    "pinyin": "yàoshi",
    "thaiMeaning": "กุญแจ",
    "example": {
      "hanzi": "拿钥匙。",
      "pinyin": "Ná yàoshi.",
      "thaiMeaning": "หยิบกุญแจ"
    },
    "examples": [
      {
        "scenario": "บอกตำแหน่ง",
        "hanzi": "我把钥匙放在桌子上了。",
        "pinyin": "Wǒ bǎ yàoshi fàng zài zhuōzi shàng le.",
        "thaiMeaning": "ฉันวางกุญแจไว้บนโต๊ะแล้ว"
      },
      {
        "scenario": "ลืมของ",
        "hanzi": "糟糕！我忘记带出门钥匙了。",
        "pinyin": "Zāogāo! Wǒ wàngjì dài chūmén yàoshi le.",
        "thaiMeaning": "แย่แล้ว! ฉันลืมพกกุญแจออกจากบ้าน"
      },
      {
        "scenario": "อธิบาย",
        "hanzi": "这把钥匙是用来开这扇门的。",
        "pinyin": "Zhè bǎ yàoshi shì yòng lái kāi zhè shàn mén de.",
        "thaiMeaning": "กุญแจดอกนี้เอาไว้ใช้เปิดประตูบานนี้"
      }
    ]
  },
  {
    "id": "v10",
    "hanzi": "现在",
    "pinyin": "xiànzài",
    "thaiMeaning": "ตอนนี้ / ขณะนี้",
    "example": {
      "hanzi": "现在几点？",
      "pinyin": "Xiànzài jǐ diǎn?",
      "thaiMeaning": "ตอนนี้กี่โมง"
    },
    "examples": [
      {
        "scenario": "ถามเวลา",
        "hanzi": "请问现在几点了？",
        "pinyin": "Qǐngwèn xiànzài jǐ diǎn le?",
        "thaiMeaning": "ขอถามหน่อย ตอนนี้ กี่โมงแล้ว?"
      },
      {
        "scenario": "ปฏิเสธสุภาพ",
        "hanzi": "我现在很忙，等一下再联系你。",
        "pinyin": "Wǒ xiànzài hěn máng, děng yīxià zài liánxì nǐ.",
        "thaiMeaning": "ตอนนี้ฉันยุ่งมาก เดี๋ยวค่อยติดต่อไปหาคุณนะ"
      },
      {
        "scenario": "รายงานสถานการณ์",
        "hanzi": "现在情况比之前好多了。",
        "pinyin": "Xiànzài qíngkuàng bǐ zhīqián hǎo duō le.",
        "thaiMeaning": "ตอนนี้สถานการณ์ดีกว่าเมื่อก่อนมากแล้ว"
      }
    ]
  },
  {
    "id": "v11",
    "hanzi": "工作",
    "pinyin": "gōngzuò",
    "thaiMeaning": "ทำงาน / งาน",
    "example": {
      "hanzi": "开始工作。",
      "pinyin": "Kāishǐ gōngzuò.",
      "thaiMeaning": "เริ่มทำงาน"
    },
    "examples": [
      {
        "scenario": "ชีวิตการทำงาน",
        "hanzi": "我今天工作很忙，没时间休息。",
        "pinyin": "Wǒ jīntiān gōngzuò hěn máng, méi shíjiān xiūxi.",
        "thaiMeaning": "วันนี้ฉันงานยุ่งมาก ไม่มีเวลาพักเลย"
      },
      {
        "scenario": "ถามอาชีพ",
        "hanzi": "你的工作是什么？",
        "pinyin": "Nǐ de gōngzuò shì shénme?",
        "thaiMeaning": "คุณทำงานอะไร?"
      },
      {
        "scenario": "อวยพร",
        "hanzi": "祝你工作顺心！",
        "pinyin": "Zhù nǐ gōngzuò shùnxīn!",
        "thaiMeaning": "ขอให้คุณทำงานอย่างราบรื่นนะ!"
      }
    ]
  },
  {
    "id": "v12",
    "hanzi": "公司",
    "pinyin": "gōngsī",
    "thaiMeaning": "บริษัท / ที่ทำงาน",
    "example": {
      "hanzi": "到公司了。",
      "pinyin": "Dào gōngsī le.",
      "thaiMeaning": "ถึงบริษัทแล้ว"
    },
    "examples": [
      {
        "scenario": "เวลาทำงาน",
        "hanzi": "我每天八点到达公司。",
        "pinyin": "Wǒ měitiān bā diǎn dàodá gōngsī.",
        "thaiMeaning": "ฉันถึงบริษัท 8 โมงเช้าทุกวัน"
      },
      {
        "scenario": "ถามสถานที่",
        "hanzi": "你的公司在哪里？",
        "pinyin": "Nǐ de gōngsī zài nǎlǐ?",
        "thaiMeaning": "บริษัทของคุณอยู่ที่ไหน?"
      },
      {
        "scenario": "การพูดถึงองค์กร",
        "hanzi": "这家公司发展得很快。",
        "pinyin": "Zhè jiā gōngsī fāzhǎn de hěn kuài.",
        "thaiMeaning": "บริษัทแห่งนี้เติบโตเร็วมาก"
      }
    ]
  },
  {
    "id": "v13",
    "hanzi": "水",
    "pinyin": "shuǐ",
    "thaiMeaning": "น้ำ",
    "example": {
      "hanzi": "喝水。",
      "pinyin": "Hē shuǐ.",
      "thaiMeaning": "ดื่มน้ำ"
    },
    "examples": [
      {
        "scenario": "ห่วงใย",
        "hanzi": "记得多喝水，对身体好。",
        "pinyin": "Jìde duō hē shuǐ, duì shēntǐ hǎo.",
        "thaiMeaning": "จำไว้ว่าต้องดื่มน้ำเยอะๆ ดีต่อสุขภาพ"
      },
      {
        "scenario": "สั่งน้ำ/ขอความช่วยเหลือ",
        "hanzi": "请给我一杯水。",
        "pinyin": "Qǐng gěi wǒ yī bēi shuǐ.",
        "thaiMeaning": "ขอส่งน้ำให้ฉันสักแก้วครับ/ค่ะ"
      },
      {
        "scenario": "ซื้อของ",
        "hanzi": "这里的瓶装水很便宜。",
        "pinyin": "Zhèlǐ de píngzhuāng shuǐ hěn piányi.",
        "thaiMeaning": "น้ำดื่มบรรจุขวดที่นี่ราคาถูกมาก"
      }
    ]
  },
  {
    "id": "v14",
    "hanzi": "咖啡",
    "pinyin": "kāfēi",
    "thaiMeaning": "กาแฟ",
    "example": {
      "hanzi": "泡咖啡。",
      "pinyin": "Pào kāfēi.",
      "thaiMeaning": "ชงกาแฟ"
    },
    "examples": [
      {
        "scenario": "ความชื่นชอบ",
        "hanzi": "我早上喜欢喝一杯热咖啡。",
        "pinyin": "Wǒ zǎoshang xǐhuan hē yī bēi rè kāfēi.",
        "thaiMeaning": "ตอนเช้าฉันชอบดื่มกาแฟร้อนสักแก้ว"
      },
      {
        "scenario": "ถามต้อนรับ",
        "hanzi": "你要喝咖啡还是喝茶？",
        "pinyin": "Nǐ yào hē kāfēi háishi hē chá?",
        "thaiMeaning": "คุณจะดื่มกาแฟหรือชา?"
      },
      {
        "scenario": "คำชม",
        "hanzi": "这家咖啡馆的氛围真好。",
        "pinyin": "Zhè jiā kāfēiguǎn de fēnwéi zhēn hǎo.",
        "thaiMeaning": "บรรยากาศร้านกาแฟร้านนี้ดีจริง"
      }
    ]
  },
  {
    "id": "v15",
    "hanzi": "吃饭",
    "pinyin": "chīfàn",
    "thaiMeaning": "กินข้าว",
    "example": {
      "hanzi": "去吃饭。",
      "pinyin": "Qù chīfàn.",
      "thaiMeaning": "ไปกินข้าว"
    },
    "examples": [
      {
        "scenario": "ชวนเพื่อน",
        "hanzi": "我们一起去吃饭吧。",
        "pinyin": "Wǒmen yīqǐ qù chīfàn ba.",
        "thaiMeaning": "พวกเราไปกินข้าวด้วยกันเถอะ"
      },
      {
        "scenario": "คำทักทายยอดฮิต",
        "hanzi": "你吃饭了吗？",
        "pinyin": "Nǐ chīfàn le ma?",
        "thaiMeaning": "คุณกินข้าวหรือยัง?"
      },
      {
        "scenario": "เตือนด้วยความห่วงใย",
        "hanzi": "吃饭时请慢一点吃。",
        "pinyin": "Chīfàn shí qǐng màn yīdiǎn chī.",
        "thaiMeaning": "เวลากินข้าวโปรดกินช้าๆ หน่อยนะ"
      }
    ]
  },
  {
    "id": "v16",
    "hanzi": "肚子",
    "pinyin": "dùzi",
    "thaiMeaning": "ท้อง",
    "example": {
      "hanzi": "肚子饿。",
      "pinyin": "Dùzi è.",
      "thaiMeaning": "ท้องหิว"
    },
    "examples": [
      {
        "scenario": "บอกอาการหิว",
        "hanzi": "我肚子饿了，想去吃东西。",
        "pinyin": "Wǒ dùzi è le, xiǎng qù chī dōngxi.",
        "thaiMeaning": "ฉันหิวข้าวแล้ว อยากไปหาอะไรกิน"
      },
      {
        "scenario": "บอกอาการเจ็บป่วย",
        "hanzi": "我今天肚子有点不舒服。",
        "pinyin": "Wǒ jīntiān dùzi yǒudiǎn bù shūfu.",
        "thaiMeaning": "วันนี้ฉันปวดท้อง/รู้สึกท้องไส้ไม่ค่อยสบาย"
      },
      {
        "scenario": "คุยตลกสนิทสนม",
        "hanzi": "吃完饭后，我的肚子变大了。",
        "pinyin": "Chī wán fàn hòu, wǒ de dùzi biàn dà le.",
        "thaiMeaning": "กินข้าวเสร็จ ท้องฉันพุงกางเลย"
      }
    ]
  },
  {
    "id": "v17",
    "hanzi": "时间",
    "pinyin": "shíjiān",
    "thaiMeaning": "เวลา",
    "example": {
      "hanzi": "没时间。",
      "pinyin": "Méi shíjiān.",
      "thaiMeaning": "ไม่มีเวลา"
    },
    "examples": [
      {
        "scenario": "ถามความว่าง",
        "hanzi": "你现在有时间吗？",
        "pinyin": "Nǐ xiànzài yǒu shíjiān ma?",
        "thaiMeaning": "ตอนนี้คุณพอมีเวลาไหม?"
      },
      {
        "scenario": "รำพึงรำพัน",
        "hanzi": "时间过得真快啊！",
        "pinyin": "Shíjiān guò de zhēn kuài a!",
        "thaiMeaning": "เวลาผ่านไปเร็วเหลือเกิน!"
      },
      {
        "scenario": "เตือนเรื่องเวลา",
        "hanzi": "请一定要抓紧时间。",
        "pinyin": "Qǐng yīdìng yào zhuājǐn shíjiān.",
        "thaiMeaning": "โปรดจำไว้ว่าต้องเร่งรีบทำเวลา"
      }
    ]
  },
  {
    "id": "v18",
    "hanzi": "今天",
    "pinyin": "jīntiān",
    "thaiMeaning": "วันนี้",
    "example": {
      "hanzi": "今天去上班。",
      "pinyin": "Jīntiān qù shàngbān.",
      "thaiMeaning": "วันนี้ไปทำงาน"
    },
    "examples": [
      {
        "scenario": "คุยเรื่องสภาพอากาศ",
        "hanzi": "今天天气非常好。",
        "pinyin": "Jīntiān tiānqì fēicháng hǎo.",
        "thaiMeaning": "วันนี้อากาศดีมากเลย"
      },
      {
        "scenario": "ถามแผนงาน",
        "hanzi": "今天你要做什么？",
        "pinyin": "Jīntiān nǐ yào zuò shénme?",
        "thaiMeaning": "วันนี้คุณจะทำอะไร?"
      },
      {
        "scenario": "วันสำคัญ",
        "hanzi": "今天是我朋友的生日。",
        "pinyin": "Jīntiān shì wǒ péngyou de shēngrì.",
        "thaiMeaning": "วันนี้เป็นวันเกิดของเพื่อนฉัน"
      }
    ]
  },
  {
    "id": "v19",
    "hanzi": "明天",
    "pinyin": "míngtiān",
    "thaiMeaning": "พรุ่งนี้",
    "example": {
      "hanzi": "明天早起。",
      "pinyin": "Míngtiān zǎoqǐ.",
      "thaiMeaning": "พรุ่งนี้ตื่นเช้า"
    },
    "examples": [
      {
        "scenario": "คำบอกลา",
        "hanzi": "明天见！祝你有美好的一天。",
        "pinyin": "Míngtiān jiàn! Zhù nǐ yǒu měihǎo de yī tiān.",
        "thaiMeaning": "พรุ่งนี้เจอกัน! ขอให้เป็นวันที่ดี"
      },
      {
        "scenario": "แผนงาน",
        "hanzi": "我明天需要早起去开会。",
        "pinyin": "Wǒ míngtiān xūyào zǎoqǐ qù kāihuì.",
        "thaiMeaning": "พรุ่งนี้ฉันต้องตื่นเช้าไปประชุม"
      },
      {
        "scenario": "ถามสภาพอากาศ",
        "hanzi": "明天天气怎么样？",
        "pinyin": "Míngtiān tiānqì zěnmeyàng?",
        "thaiMeaning": "สภาพอากาศพรุ่งนี้เป็นยังไงบ้าง?"
      }
    ]
  },
  {
    "id": "v20",
    "hanzi": "准备",
    "pinyin": "zhǔnbèi",
    "thaiMeaning": "เตรียมตัว",
    "example": {
      "hanzi": "准备好了。",
      "pinyin": "Zhǔnbèi hǎo le.",
      "thaiMeaning": "เตรียมพร้อมแล้ว"
    },
    "examples": [
      {
        "scenario": "พร้อมออกเดินทาง",
        "hanzi": "我已经准备好了，可以出发了。",
        "pinyin": "Wǒ yǐjīng zhǔnbèi hǎo le, kěyǐ chūfā le.",
        "thaiMeaning": "ฉันเตรียมพร้อมเรียบร้อยแล้ว ออกเดินทางได้เลย"
      },
      {
        "scenario": "ถามความเคลื่อนไหว",
        "hanzi": "你在准备什么呢？",
        "pinyin": "Nǐ zài zhǔnbèi shénme ne?",
        "thaiMeaning": "คุณกำลังเตรียมอะไรอยู่เหรอ?"
      },
      {
        "scenario": "ประกาศการทำงาน",
        "hanzi": "请大家做一下准备。",
        "pinyin": "Qǐng dàjiā zuò yīxià zhǔnbèi.",
        "thaiMeaning": "ขอให้ทุกคนเตรียมตัวสักครู่"
      }
    ]
  },
  {
    "id": "v21",
    "hanzi": "累",
    "pinyin": "lèi",
    "thaiMeaning": "เหนื่อย",
    "example": {
      "hanzi": "有点累。",
      "pinyin": "Yǒudiǎnr lèi.",
      "thaiMeaning": "เหนื่อยนิดหน่อย"
    },
    "examples": [
      {
        "scenario": "ระบายความเหนื่อย",
        "hanzi": "工作了一整天，感觉太累了。",
        "pinyin": "Gōngzuò le yī zhěng tiān, gǎnjué tài lèi le.",
        "thaiMeaning": "ทำงานมาทั้งวัน รู้สึกเหนื่อยเหลือเกิน"
      },
      {
        "scenario": "ให้กำลังใจ/ห่วงใย",
        "hanzi": "如果你累了，就休息一下吧。",
        "pinyin": "Rúguǒ nǐ lèi le, jiù xiūxi yīxià ba.",
        "thaiMeaning": "ถ้าคุณเหนื่อยแล้ว ก็พักผ่อนสักหน่อยเถอะ"
      },
      {
        "scenario": "สรุปความรู้สึก",
        "hanzi": "今天虽然很累，但是很高兴。",
        "pinyin": "Jīntiān suīrán hěn lèi, dànshì hěn gāoxìng.",
        "thaiMeaning": "วันนี้ถึงจะเหนื่อยมาก แต่ก็มีความสุขมาก"
      }
    ]
  },
  {
    "id": "v22",
    "hanzi": "困",
    "pinyin": "kùn",
    "thaiMeaning": "ง่วง",
    "example": {
      "hanzi": "太困了。",
      "pinyin": "Tài kùn le.",
      "thaiMeaning": "ง่วงมาก"
    },
    "examples": [
      {
        "scenario": "บอกอาการง่วง",
        "hanzi": "我很困，想先去睡觉了。",
        "pinyin": "Wǒ hěn kùn, xiǎng xiān qù shuìjiào le.",
        "thaiMeaning": "ฉันง่วงมาก อยากขอตัวไปนอนก่อนแล้ว"
      },
      {
        "scenario": "ประสบการณ์",
        "hanzi": "下午开会时我有点发困。",
        "pinyin": "Xiàwǔ kāihuì shí wǒ yǒudiǎn fākùn.",
        "thaiMeaning": "ตอนประชุมช่วงบ่ายฉันรู้สึกสัปงกง่วงนอนนิดหน่อย"
      },
      {
        "scenario": "คำแนะนำ",
        "hanzi": "喝杯浓咖啡就不会困了。",
        "pinyin": "Hē bēi nóng kāfēi jiù bù huì kùn le.",
        "thaiMeaning": "ดื่มกาแฟเข้มๆ สักแก้วก็จะไม่ง่วงแล้ว"
      }
    ]
  },
  {
    "id": "v23",
    "hanzi": "舒服",
    "pinyin": "shūfu",
    "thaiMeaning": "สบายตัว",
    "example": {
      "hanzi": "很舒服。",
      "pinyin": "Hěn shūfu.",
      "thaiMeaning": "สบายมาก"
    },
    "examples": [
      {
        "scenario": "ความสบายกาย",
        "hanzi": "躺在床上感觉非常舒服。",
        "pinyin": "Tǎng zài chuáng shàng gǎnjué fēicháng shūfu.",
        "thaiMeaning": "นอนบนเตียงรู้สึกสบายมากเลย"
      },
      {
        "scenario": "ถามอาการป่วย",
        "hanzi": "你今天身体舒服一点了吗？",
        "pinyin": "Nǐ jīntiān shēntǐ shūfu yīdiǎn le ma?",
        "thaiMeaning": "วันนี้คุณรู้สึกสบายตัวขึ้นบ้างหรือยัง?"
      },
      {
        "scenario": "คำชมสถานที่",
        "hanzi": "这里的环境让人很舒服。",
        "pinyin": "Zhèlǐ de huánjìng ràng rén hěn shūfu.",
        "thaiMeaning": "บรรยากาศที่นี่ทำให้คนรู้สึกผ่อนคลายสบายใจ"
      }
    ]
  },
  {
    "id": "v24",
    "hanzi": "堵车",
    "pinyin": "dǔchē",
    "thaiMeaning": "รถติด",
    "example": {
      "hanzi": "路上堵车。",
      "pinyin": "Lùshang dǔchē.",
      "thaiMeaning": "บนถนนรถติด"
    },
    "examples": [
      {
        "scenario": "สถานการณ์การเดินทาง",
        "hanzi": "路上堵车堵得很严重。",
        "pinyin": "Lùshàng dǔchē dǔ de hěn yánzhòng.",
        "thaiMeaning": "บนถนนรถติดหนักมาก"
      },
      {
        "scenario": "แจ้งเหตุผล",
        "hanzi": "因为堵车，我可能会迟到。",
        "pinyin": "Yīnwèi dǔchē, wǒ kěnéng huì chídào.",
        "thaiMeaning": "เพราะว่ารถติด ฉันอาจจะไปสายนะ"
      },
      {
        "scenario": "ข้อเท็จจริง",
        "hanzi": "早高峰时期经常堵车。",
        "pinyin": "Zǎogāofēng shíqī jīngcháng dǔchē.",
        "thaiMeaning": "ช่วงชั่วโมงเร่งด่วนตอนเช้ารถติดบ่อยมาก"
      }
    ]
  },
  {
    "id": "v25",
    "hanzi": "迟到",
    "pinyin": "chídào",
    "thaiMeaning": "มาสาย",
    "example": {
      "hanzi": "上班迟到。",
      "pinyin": "Shàngbān chídào.",
      "thaiMeaning": "ทำงานสาย"
    },
    "examples": [
      {
        "scenario": "คำขอโทษ",
        "hanzi": "不好意思，今天我迟到了。",
        "pinyin": "Bù hǎoyìsi, jīntiān wǒ chídào le.",
        "thaiMeaning": "ขอโทษครับ/ค่ะ วันนี้ฉันมาสาย"
      },
      {
        "scenario": "ข้อบังคับ/กฎระเบียบ",
        "hanzi": "开会请不要迟到。",
        "pinyin": "Kāihuì qǐng bùyào chídào.",
        "thaiMeaning": "เข้าประชุมโปรดอย่ามาสาย"
      },
      {
        "scenario": "พูดถึงพฤติกรรม",
        "hanzi": "他平时很少迟到。",
        "pinyin": "Tā píngshí hěn shǎo chídào.",
        "thaiMeaning": "ปกติเขาไม่ค่อยมาสายนะ"
      }
    ]
  },
  {
    "id": "v26",
    "hanzi": "休息",
    "pinyin": "xiūxi",
    "thaiMeaning": "พักผ่อน",
    "example": {
      "hanzi": "休息一下。",
      "pinyin": "Xiūxi yíxià.",
      "thaiMeaning": "พักแป๊บนึง"
    },
    "examples": [
      {
        "scenario": "ชวนพัก",
        "hanzi": "工作太久了，我们需要休息一下。",
        "pinyin": "Gōngzuò tài jiǔ le, wǒmen xūyào xiūxi yīxià.",
        "thaiMeaning": "ทำงานนานเกินไปแล้ว พวกเราต้องพักสักหน่อย"
      },
      {
        "scenario": "คำอวยพร",
        "hanzi": "祝你周末好好休息！",
        "pinyin": "Zhù nǐ zhōumò hǎohāo xiūxi!",
        "thaiMeaning": "ขอให้คุณได้พักผ่อนเต็มที่ในวันเสาร์อาทิตย์นะ!"
      },
      {
        "scenario": "คำห่วงใย",
        "hanzi": "请多注意休息。",
        "pinyin": "Qǐng duō zhùyì xiūxi.",
        "thaiMeaning": "โปรดใส่ใจพักผ่อนเยอะๆ นะ"
      }
    ]
  },
  {
    "id": "v27",
    "hanzi": "加油",
    "pinyin": "jiāyóu",
    "thaiMeaning": "สู้ๆ",
    "example": {
      "hanzi": "加油！",
      "pinyin": "Jiāyóu!",
      "thaiMeaning": "สู้ๆ!"
    },
    "examples": [
      {
        "scenario": "ให้กำลังใจเพื่อนก่อนสอบ",
        "hanzi": "别紧张，好好考，加油！",
        "pinyin": "Bié jǐn zhāng, hǎo hǎo kǎo, jiā yóu!",
        "thaiMeaning": "ไม่ต้องตื่นเต้น ตั้งใจสอบนะ สู้ๆ!"
      },
      {
        "scenario": "เชียร์เพื่อนระหว่างการแข่งขัน",
        "hanzi": "你快追上他了，加油！",
        "pinyin": "Nǐ kuài zhuī shàng tā le, jiā yóu!",
        "thaiMeaning": "คุณใกล้ตามเขาทันแล้ว สู้ๆ!"
      },
      {
        "scenario": "ให้กำลังใจตัวเองเมื่อเจองานยาก",
        "hanzi": "虽然很难，但我要继续加油。",
        "pinyin": "Suī rán hěn nán, dàn wǒ yào jì xù jiā yóu.",
        "thaiMeaning": "ถึงจะยาก แต่ฉันต้องพยายามต่อไป"
      }
    ]
  },
  {
    "id": "v28",
    "hanzi": "没关系",
    "pinyin": "méi guānxi",
    "thaiMeaning": "ไม่เป็นไร",
    "example": {
      "hanzi": "没关系。",
      "pinyin": "Méi guānxi.",
      "thaiMeaning": "ไม่เป็นไร"
    },
    "examples": [
      {
        "scenario": "ตอบเพื่อนที่กล่าวขอโทษ",
        "hanzi": "没关系，我没有生气。",
        "pinyin": "Méi guān xì, wǒ méi yǒu shēng qì.",
        "thaiMeaning": "ไม่เป็นไร ฉันไม่ได้โกรธ"
      },
      {
        "scenario": "ปลอบเพื่อนที่ทำผิดเล็กน้อย",
        "hanzi": "做错一次没关系，下次注意就好。",
        "pinyin": "Zuò cuò yí cì méi guān xì, xià cì zhù yì jiù hǎo.",
        "thaiMeaning": "ทำผิดครั้งเดียวไม่เป็นไร คราวหน้าระวังก็พอ"
      },
      {
        "scenario": "บอกว่าเปลี่ยนเวลานัดได้",
        "hanzi": "你今天没空也没关系，我们改天见。",
        "pinyin": "Nǐ jīn tiān méi kòng yě méi guān xì, wǒ men gǎi tiān jiàn.",
        "thaiMeaning": "วันนี้คุณไม่ว่างก็ไม่เป็นไร ไว้เจอกันวันอื่น"
      }
    ]
  },
  {
    "id": "v29",
    "hanzi": "晚安",
    "pinyin": "wǎn'ān",
    "thaiMeaning": "ฝันดี / ราตรีสวัสดิ์",
    "example": {
      "hanzi": "晚安。",
      "pinyin": "Wǎn'ān.",
      "thaiMeaning": "ฝันดี"
    },
    "examples": [
      {
        "scenario": "บอกคนในครอบครัวก่อนเข้านอน",
        "hanzi": "时间不早了，晚安！",
        "pinyin": "Shí jiān bù zǎo le, wǎn ān!",
        "thaiMeaning": "ดึกแล้ว ราตรีสวัสดิ์!"
      },
      {
        "scenario": "ส่งข้อความให้คนรักก่อนนอน",
        "hanzi": "晚安，祝你做个好梦。",
        "pinyin": "Wǎn ān, zhù nǐ zuò gè hǎo mèng.",
        "thaiMeaning": "ราตรีสวัสดิ์ ขอให้ฝันดีนะ"
      },
      {
        "scenario": "จบสายโทรศัพท์ตอนกลางคืน",
        "hanzi": "我先睡了，晚安，明天聊。",
        "pinyin": "Wǒ xiān shuì le, wǎn ān, míng tiān liáo.",
        "thaiMeaning": "ฉันไปนอนก่อนนะ ราตรีสวัสดิ์ พรุ่งนี้ค่อยคุยกัน"
      }
    ]
  },
  {
    "id": "v30",
    "hanzi": "衣服",
    "pinyin": "yīfu",
    "thaiMeaning": "เสื้อผ้า",
    "example": {
      "hanzi": "换衣服。",
      "pinyin": "Huàn yīfu.",
      "thaiMeaning": "เปลี่ยนเสื้อผ้า"
    },
    "examples": [
      {
        "scenario": "เลือกเสื้อผ้าก่อนออกจากบ้าน",
        "hanzi": "今天天气冷，多穿一件衣服吧。",
        "pinyin": "Jīn tiān tiān qì lěng, duō chuān yí jiàn yī fu ba.",
        "thaiMeaning": "วันนี้อากาศหนาว ใส่เสื้อเพิ่มอีกตัวนะ"
      },
      {
        "scenario": "ถามเพื่อนเกี่ยวกับเสื้อตัวใหม่",
        "hanzi": "你在哪里买的这件衣服？",
        "pinyin": "Nǐ zài nǎ lǐ mǎi de zhè jiàn yī fu?",
        "thaiMeaning": "คุณซื้อเสื้อตัวนี้จากที่ไหน?"
      },
      {
        "scenario": "ซักเสื้อผ้าในวันหยุด",
        "hanzi": "周末我要在家洗衣服。",
        "pinyin": "Zhōu mò wǒ yào zài jiā xǐ yī fu.",
        "thaiMeaning": "สุดสัปดาห์ฉันจะซักเสื้อผ้าอยู่บ้าน"
      }
    ]
  },
  {
    "id": "v31",
    "hanzi": "裤子",
    "pinyin": "kùzi",
    "thaiMeaning": "กางเกง",
    "example": {
      "hanzi": "穿裤子。",
      "pinyin": "Chuān kùzi.",
      "thaiMeaning": "ใส่กางเกง"
    },
    "examples": [
      {
        "scenario": "ลองกางเกงในร้านเสื้อผ้า",
        "hanzi": "这条裤子有点长。",
        "pinyin": "Zhè tiáo kù zǐ yǒu diǎn cháng.",
        "thaiMeaning": "กางเกงตัวนี้ยาวไปหน่อย"
      },
      {
        "scenario": "ถามหากางเกงสีอื่น",
        "hanzi": "这条裤子有黑色的吗？",
        "pinyin": "Zhè tiáo kù zǐ yǒu hēi sè de ma?",
        "thaiMeaning": "กางเกงตัวนี้มีสีดำไหม?"
      },
      {
        "scenario": "บอกเด็กให้เปลี่ยนกางเกง",
        "hanzi": "裤子脏了，去换一条吧。",
        "pinyin": "Kù zǐ zāng le, qù huàn yì tiáo ba.",
        "thaiMeaning": "กางเกงเปื้อนแล้ว ไปเปลี่ยนอีกตัวเถอะ"
      }
    ]
  },
  {
    "id": "v32",
    "hanzi": "鞋子",
    "pinyin": "xiézi",
    "thaiMeaning": "รองเท้า",
    "example": {
      "hanzi": "穿鞋子。",
      "pinyin": "Chuān xiézi.",
      "thaiMeaning": "ใส่รองเท้า"
    },
    "examples": [
      {
        "scenario": "ลองรองเท้าในร้าน",
        "hanzi": "这双鞋子穿起来很舒服。",
        "pinyin": "Zhè shuāng xié zǐ chuān qǐ lái hěn shū fú.",
        "thaiMeaning": "รองเท้าคู่นี้ใส่แล้วสบายมาก"
      },
      {
        "scenario": "เตือนให้ถอดรองเท้าก่อนเข้าบ้าน",
        "hanzi": "进门前请先脱鞋子。",
        "pinyin": "Jìn mén qián qǐng xiān tuō xié zǐ.",
        "thaiMeaning": "ก่อนเข้าบ้านกรุณาถอดรองเท้าก่อน"
      },
      {
        "scenario": "ตามหารองเท้าก่อนออกไป",
        "hanzi": "我的鞋子放在哪里了？",
        "pinyin": "Wǒ de xié zǐ fàng zài nǎ lǐ le?",
        "thaiMeaning": "รองเท้าของฉันวางไว้ที่ไหน?"
      }
    ]
  },
  {
    "id": "v33",
    "hanzi": "上班",
    "pinyin": "shàngbān",
    "thaiMeaning": "ทำงาน / เข้างาน",
    "example": {
      "hanzi": "去上班。",
      "pinyin": "Qù shàngbān.",
      "thaiMeaning": "ไปทำงาน"
    },
    "examples": [
      {
        "scenario": "บอกคนที่บ้านก่อนออกไปทำงาน",
        "hanzi": "我要去上班了，晚上见。",
        "pinyin": "Wǒ yào qù shàng bān le, wǎn shàng jiàn.",
        "thaiMeaning": "ฉันไปทำงานแล้วนะ เจอกันตอนเย็น"
      },
      {
        "scenario": "พูดถึงเวลาเข้างานประจำ",
        "hanzi": "我每天早上八点上班。",
        "pinyin": "Wǒ měi tiān zǎo shàng bā diǎn shàng bān.",
        "thaiMeaning": "ฉันเข้างานแปดโมงเช้าทุกวัน"
      },
      {
        "scenario": "ถามเพื่อนว่าวันนี้ทำงานไหม",
        "hanzi": "你今天要上班吗？",
        "pinyin": "Nǐ jīn tiān yào shàng bān ma?",
        "thaiMeaning": "วันนี้คุณต้องไปทำงานไหม?"
      }
    ]
  },
  {
    "id": "v34",
    "hanzi": "下班",
    "pinyin": "xiàbān",
    "thaiMeaning": "เลิกงาน",
    "example": {
      "hanzi": "下班了。",
      "pinyin": "Xiàbān le.",
      "thaiMeaning": "เลิกงานแล้ว"
    },
    "examples": [
      {
        "scenario": "ชวนเพื่อนกินข้าวหลังเลิกงาน",
        "hanzi": "下班后一起吃饭吧。",
        "pinyin": "Xià bān hòu yì qǐ chī fàn ba.",
        "thaiMeaning": "หลังเลิกงานไปกินข้าวด้วยกันนะ"
      },
      {
        "scenario": "แจ้งคนที่บ้านว่าเพิ่งเลิกงาน",
        "hanzi": "我刚下班，现在回家。",
        "pinyin": "Wǒ gāng xià bān, xiàn zài huí jiā.",
        "thaiMeaning": "ฉันเพิ่งเลิกงาน ตอนนี้กำลังกลับบ้าน"
      },
      {
        "scenario": "ถามเวลาเลิกงานของเพื่อน",
        "hanzi": "你今天几点下班？",
        "pinyin": "Nǐ jīn tiān jǐ diǎn xià bān?",
        "thaiMeaning": "วันนี้คุณเลิกงานกี่โมง?"
      }
    ]
  },
  {
    "id": "v35",
    "hanzi": "午休",
    "pinyin": "wǔxiū",
    "thaiMeaning": "พักเที่ยง",
    "example": {
      "hanzi": "午休时间。",
      "pinyin": "Wǔxiū shíjiān.",
      "thaiMeaning": "เวลาพักเที่ยง"
    },
    "examples": [
      {
        "scenario": "บอกเพื่อนร่วมงานว่าจะพักเที่ยง",
        "hanzi": "到午休时间了，我们先休息吧。",
        "pinyin": "Dào wǔ xiū shí jiān le, wǒ men xiān xiū xi ba.",
        "thaiMeaning": "ถึงเวลาพักเที่ยงแล้ว พวกเราพักก่อนเถอะ"
      },
      {
        "scenario": "งีบหลับระหว่างพักเที่ยง",
        "hanzi": "我午休的时候睡了半个小时。",
        "pinyin": "Wǒ wǔ xiū de shí hòu shuì le bàn gè xiǎo shí.",
        "thaiMeaning": "ตอนพักเที่ยงฉันนอนไปครึ่งชั่วโมง"
      },
      {
        "scenario": "ขอเลื่อนการคุยงาน",
        "hanzi": "我正在午休，下午再谈吧。",
        "pinyin": "Wǒ zhèng zài wǔ xiū, xià wǔ zài tán ba.",
        "thaiMeaning": "ฉันกำลังพักเที่ยง ไว้คุยกันตอนบ่ายนะ"
      }
    ]
  },
  {
    "id": "v36",
    "hanzi": "早餐",
    "pinyin": "zǎocān",
    "thaiMeaning": "อาหารเช้า",
    "example": {
      "hanzi": "吃早餐。",
      "pinyin": "Chī zǎocān.",
      "thaiMeaning": "กินข้าวเช้า"
    },
    "examples": [
      {
        "scenario": "ถามเพื่อนว่าได้กินอาหารเช้าหรือยัง",
        "hanzi": "你今天吃早餐了吗？",
        "pinyin": "Nǐ jīn tiān chī zǎo cān le ma?",
        "thaiMeaning": "วันนี้คุณกินอาหารเช้าหรือยัง?"
      },
      {
        "scenario": "เล่านิสัยการกินตอนเช้า",
        "hanzi": "我的早餐通常是面包和牛奶。",
        "pinyin": "Wǒ de zǎo cān tōng cháng shì miàn bāo hé niú nǎi.",
        "thaiMeaning": "อาหารเช้าของฉันมักเป็นขนมปังกับนม"
      },
      {
        "scenario": "ซื้ออาหารเช้าระหว่างไปทำงาน",
        "hanzi": "我在上班路上买了早餐。",
        "pinyin": "Wǒ zài shàng bān lù shang mǎi le zǎo cān.",
        "thaiMeaning": "ฉันซื้ออาหารเช้าระหว่างทางไปทำงาน"
      }
    ]
  },
  {
    "id": "v37",
    "hanzi": "午饭",
    "pinyin": "wǔfàn",
    "thaiMeaning": "อาหารเที่ยง",
    "example": {
      "hanzi": "吃午饭。",
      "pinyin": "Chī wǔfàn.",
      "thaiMeaning": "กินข้าวเที่ยง"
    },
    "examples": [
      {
        "scenario": "ชวนเพื่อนร่วมงานไปกินข้าวเที่ยง",
        "hanzi": "我们中午一起去吃午饭吧。",
        "pinyin": "Wǒ men zhōng wǔ yì qǐ qù chī wǔ fàn ba.",
        "thaiMeaning": "ตอนเที่ยงไปกินข้าวกลางวันด้วยกันนะ"
      },
      {
        "scenario": "ถามว่าจะกินอะไรเป็นมื้อเที่ยง",
        "hanzi": "你午饭想吃什么？",
        "pinyin": "Nǐ wǔ fàn xiǎng chī shén me?",
        "thaiMeaning": "มื้อเที่ยงคุณอยากกินอะไร?"
      },
      {
        "scenario": "เล่าว่าวันนี้กินมื้อเที่ยงช้า",
        "hanzi": "今天工作太忙，我两点才吃午饭。",
        "pinyin": "Jīn tiān gōng zuò tài máng, wǒ liǎng diǎn cái chī wǔ fàn.",
        "thaiMeaning": "วันนี้งานยุ่งมาก ฉันเพิ่งได้กินข้าวเที่ยงตอนบ่ายสอง"
      }
    ]
  },
  {
    "id": "v38",
    "hanzi": "晚饭",
    "pinyin": "wǎnfàn",
    "thaiMeaning": "อาหารเย็น",
    "example": {
      "hanzi": "吃晚饭。",
      "pinyin": "Chī wǎnfàn.",
      "thaiMeaning": "กินข้าวเย็น"
    },
    "examples": [
      {
        "scenario": "ถามคนในบ้านว่ามื้อเย็นพร้อมหรือยัง",
        "hanzi": "晚饭做好了吗？",
        "pinyin": "Wǎn fàn zuò hǎo le ma?",
        "thaiMeaning": "อาหารเย็นทำเสร็จหรือยัง?"
      },
      {
        "scenario": "ชวนเพื่อนไปกินมื้อเย็น",
        "hanzi": "晚上有空吗？一起吃晚饭吧。",
        "pinyin": "Wǎn shàng yǒu kōng ma? Yì qǐ chī wǎn fàn ba.",
        "thaiMeaning": "ตอนเย็นว่างไหม? ไปกินข้าวเย็นด้วยกันนะ"
      },
      {
        "scenario": "บอกว่าไม่กินมื้อเย็นมากเกินไป",
        "hanzi": "我晚饭不想吃太多。",
        "pinyin": "Wǒ wǎn fàn bù xiǎng chī tài duō.",
        "thaiMeaning": "มื้อเย็นฉันไม่อยากกินเยอะเกินไป"
      }
    ]
  },
  {
    "id": "v39",
    "hanzi": "电脑",
    "pinyin": "diànnǎo",
    "thaiMeaning": "คอมพิวเตอร์",
    "example": {
      "hanzi": "开电脑。",
      "pinyin": "Kāi diànnǎo.",
      "thaiMeaning": "เปิดคอม"
    },
    "examples": [
      {
        "scenario": "แจ้งปัญหาคอมพิวเตอร์ในที่ทำงาน",
        "hanzi": "我的电脑突然打不开了。",
        "pinyin": "Wǒ de diàn nǎo tū rán dǎ bù kāi le.",
        "thaiMeaning": "จู่ๆ คอมพิวเตอร์ของฉันก็เปิดไม่ติด"
      },
      {
        "scenario": "ขอยืมคอมพิวเตอร์เพื่อน",
        "hanzi": "我可以用一下你的电脑吗？",
        "pinyin": "Wǒ kě yǐ yòng yí xià nǐ de diàn nǎo ma?",
        "thaiMeaning": "ฉันขอใช้คอมพิวเตอร์ของคุณสักครู่ได้ไหม?"
      },
      {
        "scenario": "เตือนให้ปิดคอมพิวเตอร์ก่อนกลับ",
        "hanzi": "下班前别忘了关电脑。",
        "pinyin": "Xià bān qián bié wàng le guān diàn nǎo.",
        "thaiMeaning": "ก่อนเลิกงานอย่าลืมปิดคอมพิวเตอร์"
      }
    ]
  },
  {
    "id": "v40",
    "hanzi": "钱",
    "pinyin": "qián",
    "thaiMeaning": "เงิน / สตางค์",
    "example": {
      "hanzi": "带钱。",
      "pinyin": "Dài qián.",
      "thaiMeaning": "พกเงิน"
    },
    "examples": [
      {
        "scenario": "พบว่าเงินสดไม่พอจ่าย",
        "hanzi": "我带的钱不够，可以刷卡吗？",
        "pinyin": "Wǒ dài de qián bú gòu, kě yǐ shuā kǎ ma?",
        "thaiMeaning": "เงินที่ฉันพกมาไม่พอ จ่ายบัตรได้ไหม?"
      },
      {
        "scenario": "ถามเพื่อนว่ายืมเงินได้ไหม",
        "hanzi": "你能借我一点钱吗？",
        "pinyin": "Nǐ néng jiè wǒ yì diǎn qián ma?",
        "thaiMeaning": "คุณให้ฉันยืมเงินหน่อยได้ไหม?"
      },
      {
        "scenario": "เตือนตัวเองให้ประหยัด",
        "hanzi": "这个月我要少花一点钱。",
        "pinyin": "Zhè ge yuè wǒ yào shǎo huā yì diǎn qián.",
        "thaiMeaning": "เดือนนี้ฉันต้องใช้เงินให้น้อยลงหน่อย"
      }
    ]
  },
  {
    "id": "v41",
    "hanzi": "买",
    "pinyin": "mǎi",
    "thaiMeaning": "ซื้อ",
    "example": {
      "hanzi": "买东西。",
      "pinyin": "Mǎi dōngxi.",
      "thaiMeaning": "ซื้อของ"
    },
    "examples": [
      {
        "scenario": "ซื้อกาแฟระหว่างทาง",
        "hanzi": "我去买两杯咖啡。",
        "pinyin": "Wǒ qù mǎi liǎng bēi kā fēi.",
        "thaiMeaning": "ฉันจะไปซื้อกาแฟสองแก้ว"
      },
      {
        "scenario": "ถามเพื่อนว่าซื้อของจากที่ไหน",
        "hanzi": "你在哪里买的这个包？",
        "pinyin": "Nǐ zài nǎ lǐ mǎi de zhè ge bāo?",
        "thaiMeaning": "คุณซื้อกระเป๋าใบนี้จากที่ไหน?"
      },
      {
        "scenario": "ตัดสินใจยังไม่ซื้อเพราะแพง",
        "hanzi": "太贵了，我不买了。",
        "pinyin": "Tài guì le, wǒ bù mǎi le.",
        "thaiMeaning": "แพงเกินไป ฉันไม่ซื้อแล้ว"
      }
    ]
  },
  {
    "id": "v42",
    "hanzi": "开门",
    "pinyin": "kāimén",
    "thaiMeaning": "เปิดประตู",
    "example": {
      "hanzi": "开门。",
      "pinyin": "Kāimén.",
      "thaiMeaning": "เปิดประตู"
    },
    "examples": [
      {
        "scenario": "ขอให้คนใกล้ประตูช่วยเปิด",
        "hanzi": "请帮我开一下门。",
        "pinyin": "Qǐng bāng wǒ kāi yí xià mén.",
        "thaiMeaning": "ช่วยเปิดประตูให้ฉันหน่อย"
      },
      {
        "scenario": "ร้านเริ่มเปิดให้บริการ",
        "hanzi": "这家店早上九点开门。",
        "pinyin": "Zhè jiā diàn zǎo shàng jiǔ diǎn kāi mén.",
        "thaiMeaning": "ร้านนี้เปิดเก้าโมงเช้า"
      },
      {
        "scenario": "ได้ยินเสียงเคาะประตู",
        "hanzi": "有人敲门，你去开门吧。",
        "pinyin": "Yǒu rén qiāo mén, nǐ qù kāi mén ba.",
        "thaiMeaning": "มีคนเคาะประตู คุณไปเปิดประตูหน่อย"
      }
    ]
  },
  {
    "id": "v43",
    "hanzi": "关门",
    "pinyin": "guānmén",
    "thaiMeaning": "ปิดประตู",
    "example": {
      "hanzi": "关门。",
      "pinyin": "Guānmén.",
      "thaiMeaning": "ปิดประตู"
    },
    "examples": [
      {
        "scenario": "เตือนคนสุดท้ายให้งับประตู",
        "hanzi": "出去的时候记得关门。",
        "pinyin": "Chū qù de shí hòu jì de guān mén.",
        "thaiMeaning": "ตอนออกไปอย่าลืมปิดประตู"
      },
      {
        "scenario": "แจ้งเวลาร้านปิด",
        "hanzi": "这家店晚上十点关门。",
        "pinyin": "Zhè jiā diàn wǎn shàng shí diǎn guān mén.",
        "thaiMeaning": "ร้านนี้ปิดสี่ทุ่ม"
      },
      {
        "scenario": "ขอให้ปิดประตูเพราะเสียงดัง",
        "hanzi": "外面太吵了，请关门。",
        "pinyin": "Wài miàn tài chǎo le, qǐng guān mén.",
        "thaiMeaning": "ข้างนอกเสียงดังเกินไป กรุณาปิดประตู"
      }
    ]
  },
  {
    "id": "v44",
    "hanzi": "快",
    "pinyin": "kuài",
    "thaiMeaning": "เร็ว / เร่งด่วน",
    "example": {
      "hanzi": "快一点。",
      "pinyin": "Kuài yìdiǎn.",
      "thaiMeaning": "เร็วหน่อย"
    },
    "examples": [
      {
        "scenario": "เร่งเพื่อนเพราะรถกำลังมา",
        "hanzi": "车来了，快一点！",
        "pinyin": "Chē lái le, kuài yì diǎn!",
        "thaiMeaning": "รถมาแล้ว เร็วหน่อย!"
      },
      {
        "scenario": "ชมว่าเพื่อนวิ่งเร็ว",
        "hanzi": "你跑得真快。",
        "pinyin": "Nǐ pǎo dé zhēn kuài.",
        "thaiMeaning": "คุณวิ่งเร็วจริงๆ"
      },
      {
        "scenario": "บอกว่างานใกล้เสร็จ",
        "hanzi": "我快做完了，再等一下。",
        "pinyin": "Wǒ kuài zuò wán le, zài děng yí xià.",
        "thaiMeaning": "ฉันใกล้ทำเสร็จแล้ว รออีกหน่อยนะ"
      }
    ]
  },
  {
    "id": "v45",
    "hanzi": "慢",
    "pinyin": "màn",
    "thaiMeaning": "ช้า / ค่อยๆ",
    "example": {
      "hanzi": "慢一点。",
      "pinyin": "Màn yìdiǎn.",
      "thaiMeaning": "ช้าหน่อย"
    },
    "examples": [
      {
        "scenario": "เตือนคนขับให้ขับช้าลง",
        "hanzi": "前面人很多，开慢一点。",
        "pinyin": "Qián miàn rén hěn duō, kāi màn yì diǎn.",
        "thaiMeaning": "ข้างหน้าคนเยอะ ขับช้าลงหน่อย"
      },
      {
        "scenario": "บอกเด็กให้กินช้าๆ",
        "hanzi": "别着急，慢慢吃。",
        "pinyin": "Bié zháo jí, màn màn chī.",
        "thaiMeaning": "ไม่ต้องรีบ ค่อยๆ กิน"
      },
      {
        "scenario": "อธิบายว่าอินเทอร์เน็ตช้า",
        "hanzi": "今天的网络特别慢。",
        "pinyin": "Jīn tiān de wǎng luò tè bié màn.",
        "thaiMeaning": "วันนี้อินเทอร์เน็ตช้ามาก"
      }
    ]
  },
  {
    "id": "v46",
    "hanzi": "好",
    "pinyin": "hǎo",
    "thaiMeaning": "ดี / โอเค",
    "example": {
      "hanzi": "很好。",
      "pinyin": "Hěn hǎo.",
      "thaiMeaning": "ดีมาก"
    },
    "examples": [
      {
        "scenario": "ตอบรับแผนของเพื่อน",
        "hanzi": "好，我们下午三点见。",
        "pinyin": "Hǎo, wǒ men xià wǔ sān diǎn jiàn.",
        "thaiMeaning": "ได้ เจอกันบ่ายสามโมง"
      },
      {
        "scenario": "ชมอาหารที่เพื่อนทำ",
        "hanzi": "这个菜做得很好。",
        "pinyin": "Zhè ge cài zuò dé hěn hǎo.",
        "thaiMeaning": "อาหารจานนี้ทำได้ดีมาก"
      },
      {
        "scenario": "ถามอาการคนป่วย",
        "hanzi": "你身体好一点了吗？",
        "pinyin": "Nǐ shēn tǐ hǎo yì diǎn le ma?",
        "thaiMeaning": "คุณอาการดีขึ้นบ้างหรือยัง?"
      }
    ]
  },
  {
    "id": "v47",
    "hanzi": "热",
    "pinyin": "rè",
    "thaiMeaning": "ร้อน",
    "example": {
      "hanzi": "天气热。",
      "pinyin": "Tiānqì rè.",
      "thaiMeaning": "อากาศร้อน"
    },
    "examples": [
      {
        "scenario": "บ่นเรื่องอากาศกลางแจ้ง",
        "hanzi": "今天外面太热了。",
        "pinyin": "Jīn tiān wài miàn tài rè le.",
        "thaiMeaning": "วันนี้ข้างนอกร้อนเกินไป"
      },
      {
        "scenario": "เตือนว่าอาหารยังร้อน",
        "hanzi": "汤很热，小心一点。",
        "pinyin": "Tāng hěn rè, xiǎo xīn yì diǎn.",
        "thaiMeaning": "น้ำแกงร้อนมาก ระวังหน่อย"
      },
      {
        "scenario": "เปิดแอร์เพราะรู้สึกร้อน",
        "hanzi": "我有点热，可以开空调吗？",
        "pinyin": "Wǒ yǒu diǎn rè, kě yǐ kāi kōng tiáo ma?",
        "thaiMeaning": "ฉันรู้สึกร้อนนิดหน่อย เปิดแอร์ได้ไหม?"
      }
    ]
  },
  {
    "id": "v48",
    "hanzi": "冷",
    "pinyin": "lěng",
    "thaiMeaning": "หนาว / เย็น",
    "example": {
      "hanzi": "有点冷。",
      "pinyin": "Yǒudiǎnr lěng.",
      "thaiMeaning": "หนาวนิดหน่อย"
    },
    "examples": [
      {
        "scenario": "บอกเพื่อนให้นำเสื้อคลุมมา",
        "hanzi": "晚上会很冷，记得带外套。",
        "pinyin": "Wǎn shàng huì hěn lěng, jì de dài wài tào.",
        "thaiMeaning": "ตอนกลางคืนจะหนาวมาก อย่าลืมเอาเสื้อคลุมมา"
      },
      {
        "scenario": "บอกว่าเครื่องดื่มเย็นเกินไป",
        "hanzi": "这杯水太冷了。",
        "pinyin": "Zhè bēi shuǐ tài lěng le.",
        "thaiMeaning": "น้ำแก้วนี้เย็นเกินไป"
      },
      {
        "scenario": "ถามคนในห้องว่าหนาวไหม",
        "hanzi": "空调开得这么低，你冷不冷？",
        "pinyin": "Kōng tiáo kāi dé zhè me dī, nǐ lěng bu lěng?",
        "thaiMeaning": "เปิดแอร์ต่ำขนาดนี้ คุณหนาวไหม?"
      }
    ]
  },
  {
    "id": "v49",
    "hanzi": "开心",
    "pinyin": "kāixīn",
    "thaiMeaning": "มีความสุข / ดีใจ",
    "example": {
      "hanzi": "很开心。",
      "pinyin": "Hěn kāixīn.",
      "thaiMeaning": "มีความสุขมาก"
    },
    "examples": [
      {
        "scenario": "ดีใจที่ได้พบเพื่อนอีกครั้ง",
        "hanzi": "今天见到你，我很开心。",
        "pinyin": "Jīn tiān jiàn dào nǐ, wǒ hěn kāi xīn.",
        "thaiMeaning": "วันนี้ได้เจอคุณ ฉันดีใจมาก"
      },
      {
        "scenario": "เล่าเรื่องวันหยุดที่สนุก",
        "hanzi": "我们周末玩得很开心。",
        "pinyin": "Wǒ men zhōu mò wán dé hěn kāi xīn.",
        "thaiMeaning": "สุดสัปดาห์พวกเราเที่ยวกันอย่างมีความสุข"
      },
      {
        "scenario": "อวยพรวันเกิดเพื่อน",
        "hanzi": "祝你生日快乐，天天开心！",
        "pinyin": "Zhù nǐ shēng rì kuài lè, tiān tiān kāi xīn!",
        "thaiMeaning": "สุขสันต์วันเกิด ขอให้มีความสุขทุกวัน!"
      }
    ]
  },
  {
    "id": "v50",
    "hanzi": "再见",
    "pinyin": "zàijiàn",
    "thaiMeaning": "ลาก่อน / ไว้เจอกันใหม่",
    "example": {
      "hanzi": "明天再见。",
      "pinyin": "Míngtiān zàijiàn.",
      "thaiMeaning": "พรุ่งนี้เจอกันใหม่"
    },
    "examples": [
      {
        "scenario": "บอกลาเพื่อนหลังเลิกงาน",
        "hanzi": "我先回家了，明天再见。",
        "pinyin": "Wǒ xiān huí jiā le, míng tiān zài jiàn.",
        "thaiMeaning": "ฉันกลับบ้านก่อนนะ พรุ่งนี้เจอกัน"
      },
      {
        "scenario": "พนักงานกล่าวลาลูกค้า",
        "hanzi": "谢谢光临，再见！",
        "pinyin": "Xiè xiè guāng lín, zài jiàn!",
        "thaiMeaning": "ขอบคุณที่มาใช้บริการ ลาก่อน!"
      },
      {
        "scenario": "จบการสนทนาทางโทรศัพท์",
        "hanzi": "那我们下次再聊，再见。",
        "pinyin": "Nà wǒ men xià cì zài liáo, zài jiàn.",
        "thaiMeaning": "งั้นไว้คราวหน้าค่อยคุยกัน ลาก่อน"
      }
    ]
  },
  {
    "id": "v51",
    "hanzi": "左",
    "pinyin": "zuǒ",
    "thaiMeaning": "ซ้าย / ด้านซ้าย / มือซ้าย",
    "example": {
      "hanzi": "往左走。",
      "pinyin": "Wǎng zuǒ zǒu.",
      "thaiMeaning": "เดินไปทางซ้าย"
    },
    "examples": [
      {
        "scenario": "เดินกับเพื่อนแล้วบอกทางที่สี่แยก",
        "hanzi": "到前面的路口往左转。",
        "pinyin": "Dào qiánmiàn de lùkǒu wǎng zuǒ zhuǎn.",
        "thaiMeaning": "ถึงสี่แยกข้างหน้าแล้วเลี้ยวซ้าย"
      },
      {
        "scenario": "บอกตำแหน่งของร้านในห้าง",
        "hanzi": "洗手间在咖啡店的左边。",
        "pinyin": "Xǐshǒujiān zài kāfēidiàn de zuǒbian.",
        "thaiMeaning": "ห้องน้ำอยู่ทางซ้ายของร้านกาแฟ"
      },
      {
        "scenario": "ครูบอกให้นักเรียนยกมือ",
        "hanzi": "请举起你的左手。",
        "pinyin": "Qǐng jǔqǐ nǐ de zuǒshǒu.",
        "thaiMeaning": "กรุณายกมือซ้ายขึ้น"
      }
    ]
  },
  {
    "id": "v52",
    "hanzi": "右",
    "pinyin": "yòu",
    "thaiMeaning": "ขวา / ด้านขวา / มือขวา",
    "example": {
      "hanzi": "往右转。",
      "pinyin": "Wǎng yòu zhuǎn.",
      "thaiMeaning": "เลี้ยวขวา"
    },
    "examples": [
      {
        "scenario": "นั่งรถแล้วบอกคนขับให้เลี้ยว",
        "hanzi": "前面往右转就到了。",
        "pinyin": "Qiánmiàn wǎng yòu zhuǎn jiù dào le.",
        "thaiMeaning": "ข้างหน้าเลี้ยวขวาก็ถึงแล้ว"
      },
      {
        "scenario": "บอกตำแหน่งของธนาคาร",
        "hanzi": "银行就在超市的右边。",
        "pinyin": "Yínháng jiù zài chāoshì de yòubian.",
        "thaiMeaning": "ธนาคารอยู่ทางขวาของซูเปอร์มาร์เก็ต"
      },
      {
        "scenario": "พยาบาลบอกตำแหน่งที่จะฉีดยา",
        "hanzi": "今天在右手打针。",
        "pinyin": "Jīntiān zài yòushǒu dǎzhēn.",
        "thaiMeaning": "วันนี้ฉีดยาที่แขนขวา"
      }
    ]
  },
  {
    "id": "v53",
    "hanzi": "前",
    "pinyin": "qián",
    "thaiMeaning": "หน้า / ข้างหน้า / ก่อน",
    "example": {
      "hanzi": "往前走。",
      "pinyin": "Wǎng qián zǒu.",
      "thaiMeaning": "เดินไปข้างหน้า"
    },
    "examples": [
      {
        "scenario": "เดินหาอาคารแล้วเพื่อนบอกทาง",
        "hanzi": "再往前走五分钟就到了。",
        "pinyin": "Zài wǎng qián zǒu wǔ fēnzhōng jiù dào le.",
        "thaiMeaning": "เดินตรงไปข้างหน้าอีกห้านาทีก็ถึงแล้ว"
      },
      {
        "scenario": "นัดเจอกันบริเวณหน้าโรงเรียน",
        "hanzi": "我在学校前面等你。",
        "pinyin": "Wǒ zài xuéxiào qiánmiàn děng nǐ.",
        "thaiMeaning": "ฉันรอคุณอยู่หน้าโรงเรียน"
      },
      {
        "scenario": "บอกสิ่งที่ต้องทำก่อนรับประทานอาหาร",
        "hanzi": "吃饭前要先洗手。",
        "pinyin": "Chīfàn qián yào xiān xǐshǒu.",
        "thaiMeaning": "ก่อนกินข้าวต้องล้างมือก่อน"
      }
    ]
  },
  {
    "id": "v54",
    "hanzi": "后",
    "pinyin": "hòu",
    "thaiMeaning": "หลัง / ข้างหลัง / หลังจาก",
    "example": {
      "hanzi": "在后面。",
      "pinyin": "Zài hòumiàn.",
      "thaiMeaning": "อยู่ข้างหลัง"
    },
    "examples": [
      {
        "scenario": "บอกเพื่อนว่ามีคนยืนอยู่ด้านหลัง",
        "hanzi": "你后面有人，请让一下。",
        "pinyin": "Nǐ hòumiàn yǒu rén, qǐng ràng yīxià.",
        "thaiMeaning": "ข้างหลังคุณมีคนอยู่ กรุณาหลีกทางหน่อย"
      },
      {
        "scenario": "นัดทำกิจกรรมหลังเลิกงาน",
        "hanzi": "下班后我们一起吃饭吧。",
        "pinyin": "Xiàbān hòu wǒmen yīqǐ chīfàn ba.",
        "thaiMeaning": "หลังเลิกงานเราไปกินข้าวด้วยกันนะ"
      },
      {
        "scenario": "บอกลำดับคิวของตัวเอง",
        "hanzi": "我在他后面。",
        "pinyin": "Wǒ zài tā hòumiàn.",
        "thaiMeaning": "ฉันอยู่ข้างหลังเขา"
      }
    ]
  },
  {
    "id": "v55",
    "hanzi": "进",
    "pinyin": "jìn",
    "thaiMeaning": "เข้า / เข้ามา / เข้าไป / เข้าร่วม",
    "example": {
      "hanzi": "请进。",
      "pinyin": "Qǐng jìn.",
      "thaiMeaning": "เชิญเข้าด้านใน"
    },
    "examples": [
      {
        "scenario": "เปิดประตูต้อนรับแขก",
        "hanzi": "外面很热，快进来吧！",
        "pinyin": "Wàimiàn hěn rè, kuài jìnlái ba!",
        "thaiMeaning": "ข้างนอกร้อนมาก รีบเข้ามาข้างในเถอะ!"
      },
      {
        "scenario": "พนักงานบอกว่าสามารถเข้าไปในห้องได้",
        "hanzi": "门开着，你可以进去。",
        "pinyin": "Mén kāizhe, nǐ kěyǐ jìnqù.",
        "thaiMeaning": "ประตูเปิดอยู่ คุณเข้าไปได้"
      },
      {
        "scenario": "เล่าว่าเพิ่งเข้าทำงานที่บริษัท",
        "hanzi": "我去年进了这家公司。",
        "pinyin": "Wǒ qùnián jìn le zhè jiā gōngsī.",
        "thaiMeaning": "ปีที่แล้วฉันเข้าทำงานที่บริษัทนี้"
      }
    ]
  },
  {
    "id": "v56",
    "hanzi": "出",
    "pinyin": "chū",
    "thaiMeaning": "ออก / ออกมา / ออกไป / ทางออก",
    "example": {
      "hanzi": "出去。",
      "pinyin": "Chūqù.",
      "thaiMeaning": "ออกไป"
    },
    "examples": [
      {
        "scenario": "เรียกเพื่อนให้ออกมาจากห้อง",
        "hanzi": "我们到了，你快出来吧！",
        "pinyin": "Wǒmen dào le, nǐ kuài chūlái ba!",
        "thaiMeaning": "พวกเรามาถึงแล้ว รีบออกมานะ!"
      },
      {
        "scenario": "บอกว่าจะออกไปซื้อของ",
        "hanzi": "我出去买点东西，马上回来。",
        "pinyin": "Wǒ chūqù mǎi diǎn dōngxi, mǎshàng huílái.",
        "thaiMeaning": "ฉันออกไปซื้อของนิดหน่อย เดี๋ยวกลับมา"
      },
      {
        "scenario": "ถามทางออกจากสถานีรถไฟ",
        "hanzi": "请问，从哪个出口出去？",
        "pinyin": "Qǐngwèn, cóng nǎge chūkǒu chūqù?",
        "thaiMeaning": "ขอถามหน่อย ต้องออกทางออกไหน?"
      }
    ]
  },
  {
    "id": "v57",
    "hanzi": "上",
    "pinyin": "shàng",
    "thaiMeaning": "บน / ขึ้น / ขึ้นรถ",
    "example": {
      "hanzi": "上楼。",
      "pinyin": "Shàng lóu.",
      "thaiMeaning": "ขึ้นชั้นบน"
    },
    "examples": [
      {
        "scenario": "ชวนเพื่อนขึ้นไปชั้นสอง",
        "hanzi": "我们上楼看看吧。",
        "pinyin": "Wǒmen shàng lóu kànkan ba.",
        "thaiMeaning": "พวกเราขึ้นไปดูชั้นบนกันเถอะ"
      },
      {
        "scenario": "บอกตำแหน่งโทรศัพท์ที่กำลังหา",
        "hanzi": "你的手机在桌子上。",
        "pinyin": "Nǐ de shǒujī zài zhuōzi shàng.",
        "thaiMeaning": "โทรศัพท์ของคุณอยู่บนโต๊ะ"
      },
      {
        "scenario": "กำลังเดินทางและบอกให้เพื่อนขึ้นรถ",
        "hanzi": "车来了，快上车！",
        "pinyin": "Chē lái le, kuài shàng chē!",
        "thaiMeaning": "รถมาแล้ว รีบขึ้นรถ!"
      }
    ]
  },
  {
    "id": "v58",
    "hanzi": "下",
    "pinyin": "xià",
    "thaiMeaning": "ล่าง / ใต้ / ลง / ตก (ฝน) / ครั้งถัดไป",
    "example": {
      "hanzi": "下车。",
      "pinyin": "Xià chē.",
      "thaiMeaning": "ลงจากรถ"
    },
    "examples": [
      {
        "scenario": "ถึงป้ายแล้วบอกเพื่อนให้ลงจากรถ",
        "hanzi": "到站了，我们下车吧。",
        "pinyin": "Dào zhàn le, wǒmen xià chē ba.",
        "thaiMeaning": "ถึงป้ายแล้ว พวกเราลงจากรถกันเถอะ"
      },
      {
        "scenario": "บอกตำแหน่งรองเท้าที่กำลังหา",
        "hanzi": "你的鞋在桌子下面。",
        "pinyin": "Nǐ de xié zài zhuōzi xiàmiàn.",
        "thaiMeaning": "รองเท้าของคุณอยู่ใต้โต๊ะ"
      },
      {
        "scenario": "ฝนเริ่มตกขณะกำลังจะออกจากบ้าน",
        "hanzi": "外面下雨了，带把伞吧。",
        "pinyin": "Wàimiàn xiàyǔ le, dài bǎ sǎn ba.",
        "thaiMeaning": "ข้างนอกฝนตกแล้ว เอาร่มไปด้วยนะ"
      },
      {
        "scenario": "นัดหมายกันใหม่ในครั้งถัดไป",
        "hanzi": "这次没时间，我们下次再去。",
        "pinyin": "Zhè cì méi shíjiān, wǒmen xià cì zài qù.",
        "thaiMeaning": "ครั้งนี้ไม่มีเวลา ไว้คราวหน้าพวกเราค่อยไป"
      }
    ]
  },
  {
    "id": "v59",
    "hanzi": "走",
    "pinyin": "zǒu",
    "thaiMeaning": "เดิน / ไป / ออกไป",
    "example": {
      "hanzi": "慢慢走。",
      "pinyin": "Mànmàn zǒu.",
      "thaiMeaning": "ค่อยๆ เดิน"
    },
    "examples": [
      {
        "scenario": "เดินกับผู้สูงอายุจึงบอกให้ค่อยๆ เดิน",
        "hanzi": "路很滑，慢慢走。",
        "pinyin": "Lù hěn huá, mànmàn zǒu.",
        "thaiMeaning": "ถนนลื่น ค่อยๆ เดินนะ"
      },
      {
        "scenario": "กำลังจะกลับและบอกลาเพื่อน",
        "hanzi": "时间不早了，我先走了。",
        "pinyin": "Shíjiān bù zǎo le, wǒ xiān zǒu le.",
        "thaiMeaning": "ดึกแล้ว ฉันขอตัวไปก่อนนะ"
      },
      {
        "scenario": "ชวนเพื่อนออกเดินทางทันที",
        "hanzi": "大家都准备好了，我们走吧！",
        "pinyin": "Dàjiā dōu zhǔnbèi hǎo le, wǒmen zǒu ba!",
        "thaiMeaning": "ทุกคนเตรียมพร้อมแล้ว พวกเราไปกันเถอะ!"
      }
    ]
  },
  {
    "id": "v60",
    "hanzi": "跑",
    "pinyin": "pǎo",
    "thaiMeaning": "วิ่ง",
    "example": {
      "hanzi": "快跑。",
      "pinyin": "Kuài pǎo.",
      "thaiMeaning": "รีบวิ่ง"
    },
    "examples": [
      {
        "scenario": "เรียกเด็กไม่ให้วิ่งในอาคาร",
        "hanzi": "地上很滑，不要跑。",
        "pinyin": "Dì shàng hěn huá, bú yào pǎo.",
        "thaiMeaning": "พื้นลื่น อย่าวิ่ง"
      },
      {
        "scenario": "รีบวิ่งไปขึ้นรถ",
        "hanzi": "车快开了，我们跑过去吧。",
        "pinyin": "Chē kuài kāi le, wǒ men pǎo guò qù ba.",
        "thaiMeaning": "รถใกล้ออกแล้ว พวกเราวิ่งไปกันเถอะ"
      },
      {
        "scenario": "เล่าว่าสุนัขวิ่งออกจากบ้าน",
        "hanzi": "小狗从家里跑出去了。",
        "pinyin": "Xiǎo gǒu cóng jiā lǐ pǎo chū qù le.",
        "thaiMeaning": "ลูกสุนัขวิ่งออกจากบ้านไปแล้ว"
      }
    ]
  },
  {
    "id": "v61",
    "hanzi": "东西",
    "pinyin": "dōngxi",
    "thaiMeaning": "สิ่งของ / ของ",
    "example": {
      "hanzi": "买东西。",
      "pinyin": "Mǎi dōngxi.",
      "thaiMeaning": "ซื้อของ"
    },
    "examples": [
      {
        "scenario": "บอกว่าจะออกไปซื้อของ",
        "hanzi": "我出去买点东西。",
        "pinyin": "Wǒ chū qù mǎi diǎn dōng xī.",
        "thaiMeaning": "ฉันออกไปซื้อของนิดหน่อย"
      },
      {
        "scenario": "ถามว่าในกระเป๋ามีอะไร",
        "hanzi": "你的包里装了什么东西？",
        "pinyin": "Nǐ de bāo lǐ zhuāng le shén me dōng xī?",
        "thaiMeaning": "ในกระเป๋าของคุณใส่อะไรไว้?"
      },
      {
        "scenario": "เตือนเพื่อนไม่ให้ลืมของ",
        "hanzi": "下车前检查一下自己的东西。",
        "pinyin": "Xià chē qián jiǎn chá yí xià zì jǐ de dōng xī.",
        "thaiMeaning": "ก่อนลงรถตรวจดูของของตัวเองด้วย"
      }
    ]
  },
  {
    "id": "v62",
    "hanzi": "包",
    "pinyin": "bāo",
    "thaiMeaning": "กระเป๋า",
    "example": {
      "hanzi": "带包。",
      "pinyin": "Dài bāo.",
      "thaiMeaning": "สะพายกระเป๋า"
    },
    "examples": [
      {
        "scenario": "ถามว่าเป็นกระเป๋าของใคร",
        "hanzi": "这个黑色的包是谁的？",
        "pinyin": "Zhè ge hēi sè de bāo shì shuí de?",
        "thaiMeaning": "กระเป๋าสีดำใบนี้เป็นของใคร?"
      },
      {
        "scenario": "ขอให้เพื่อนช่วยถือกระเป๋า",
        "hanzi": "你能帮我拿一下包吗？",
        "pinyin": "Nǐ néng bāng wǒ ná yí xià bāo ma?",
        "thaiMeaning": "คุณช่วยถือกระเป๋าให้ฉันหน่อยได้ไหม?"
      },
      {
        "scenario": "พบว่าลืมกระเป๋าไว้บนรถ",
        "hanzi": "我把包忘在出租车上了。",
        "pinyin": "Wǒ bǎ bāo wàng zài chū zū chē shàng le.",
        "thaiMeaning": "ฉันลืมกระเป๋าไว้บนแท็กซี่"
      }
    ]
  },
  {
    "id": "v63",
    "hanzi": "纸",
    "pinyin": "zhǐ",
    "thaiMeaning": "กระดาษ / ทิชชู",
    "example": {
      "hanzi": "拿张纸。",
      "pinyin": "Ná zhāng zhǐ.",
      "thaiMeaning": "ขอหยิบกระดาษหน่อย"
    },
    "examples": [
      {
        "scenario": "ขอกระดาษสำหรับจดข้อมูล",
        "hanzi": "请给我一张纸，我要记一下。",
        "pinyin": "Qǐng gěi wǒ yì zhāng zhǐ, wǒ yào jì yí xià.",
        "thaiMeaning": "ขอกระดาษหนึ่งแผ่น ฉันจะจดไว้"
      },
      {
        "scenario": "พบว่าทิชชูหมด",
        "hanzi": "洗手间里没有纸了。",
        "pinyin": "Xǐ shǒu jiān lǐ méi yǒu zhǐ le.",
        "thaiMeaning": "ในห้องน้ำไม่มีกระดาษทิชชูแล้ว"
      },
      {
        "scenario": "เตือนให้อย่าทิ้งกระดาษบนพื้น",
        "hanzi": "不要把纸扔在地上。",
        "pinyin": "Bú yào bǎ zhǐ rēng zài dì shàng.",
        "thaiMeaning": "อย่าทิ้งกระดาษลงบนพื้น"
      }
    ]
  },
  {
    "id": "v64",
    "hanzi": "笔",
    "pinyin": "bǐ",
    "thaiMeaning": "ปากกา / ดินสอ",
    "example": {
      "hanzi": "借支笔。",
      "pinyin": "Jiè zhī bǐ.",
      "thaiMeaning": "ขอยืมปากกาหน่อย"
    },
    "examples": [
      {
        "scenario": "ขอยืมปากกาเพื่อเซ็นชื่อ",
        "hanzi": "可以借我一支笔吗？",
        "pinyin": "Kě yǐ jiè wǒ yì zhī bǐ ma?",
        "thaiMeaning": "ขอยืมปากกาหนึ่งด้ามได้ไหม?"
      },
      {
        "scenario": "ถามหาปากกาที่เพิ่งวางไว้",
        "hanzi": "我的笔怎么不见了？",
        "pinyin": "Wǒ de bǐ zěn me bú jiàn le?",
        "thaiMeaning": "ปากกาของฉันหายไปไหนแล้ว?"
      },
      {
        "scenario": "บอกให้ใช้ปากกาสีดำกรอกเอกสาร",
        "hanzi": "请用黑色的笔填写。",
        "pinyin": "Qǐng yòng hēi sè de bǐ tián xiě.",
        "thaiMeaning": "กรุณาใช้ปากกาสีดำกรอกข้อมูล"
      }
    ]
  },
  {
    "id": "v65",
    "hanzi": "桌子",
    "pinyin": "zhuōzi",
    "thaiMeaning": "โต๊ะ",
    "example": {
      "hanzi": "在桌子上。",
      "pinyin": "Zài zhuōzi shang.",
      "thaiMeaning": "วางบนโต๊ะ"
    },
    "examples": [
      {
        "scenario": "บอกตำแหน่งกุญแจ",
        "hanzi": "钥匙在桌子上。",
        "pinyin": "Yào shi zài zhuō zi shàng.",
        "thaiMeaning": "กุญแจอยู่บนโต๊ะ"
      },
      {
        "scenario": "ขอให้ช่วยเช็ดโต๊ะ",
        "hanzi": "吃完饭后请把桌子擦干净。",
        "pinyin": "Chī wán fàn hòu qǐng bǎ zhuō zi cā gān jìng.",
        "thaiMeaning": "หลังกินข้าวช่วยเช็ดโต๊ะให้สะอาด"
      },
      {
        "scenario": "จัดโต๊ะเพิ่มสำหรับแขก",
        "hanzi": "客人很多，我们再搬一张桌子来。",
        "pinyin": "Kè rén hěn duō, wǒ men zài bān yì zhāng zhuō zi lái.",
        "thaiMeaning": "แขกเยอะ พวกเรายกโต๊ะมาเพิ่มอีกตัวกัน"
      }
    ]
  },
  {
    "id": "v66",
    "hanzi": "椅子",
    "pinyin": "yǐzi",
    "thaiMeaning": "เก้าอี้",
    "example": {
      "hanzi": "坐椅子。",
      "pinyin": "Zuò yǐzi.",
      "thaiMeaning": "นั่งเก้าอี้"
    },
    "examples": [
      {
        "scenario": "เชิญแขกให้นั่ง",
        "hanzi": "这里有椅子，请坐。",
        "pinyin": "Zhè lǐ yǒu yǐ zi, qǐng zuò.",
        "thaiMeaning": "ตรงนี้มีเก้าอี้ เชิญนั่ง"
      },
      {
        "scenario": "ขอเก้าอี้เพิ่มในห้องประชุม",
        "hanzi": "会议室还需要两把椅子。",
        "pinyin": "Huì yì shì hái xū yào liǎng bǎ yǐ zi.",
        "thaiMeaning": "ห้องประชุมยังต้องการเก้าอี้อีกสองตัว"
      },
      {
        "scenario": "เตือนเด็กไม่ให้ยืนบนเก้าอี้",
        "hanzi": "不要站在椅子上，太危险了。",
        "pinyin": "Bú yào zhàn zài yǐ zi shàng, tài wēi xiǎn le.",
        "thaiMeaning": "อย่ายืนบนเก้าอี้ อันตรายเกินไป"
      }
    ]
  },
  {
    "id": "v67",
    "hanzi": "多少钱",
    "pinyin": "duōshǎo qián",
    "thaiMeaning": "ราคาเท่าไหร่",
    "example": {
      "hanzi": "这个多少钱？",
      "pinyin": "Zhège duōshǎo qián?",
      "thaiMeaning": "อันนี้ราคาเท่าไหร่"
    },
    "examples": [
      {
        "scenario": "ถามราคาสินค้าในร้าน",
        "hanzi": "请问，这件衣服多少钱？",
        "pinyin": "Qǐng wèn, zhè jiàn yī fu duō shǎo qián?",
        "thaiMeaning": "ขอถามหน่อย เสื้อผ้าชิ้นนี้ราคาเท่าไหร่?"
      },
      {
        "scenario": "ถามค่าโดยสารแท็กซี่",
        "hanzi": "坐出租车到机场多少钱？",
        "pinyin": "Zuò chū zū chē dào jī chǎng duō shǎo qián?",
        "thaiMeaning": "นั่งแท็กซี่ไปสนามบินราคาเท่าไหร่?"
      },
      {
        "scenario": "ถามราคารวมทั้งหมด",
        "hanzi": "这些东西一共多少钱？",
        "pinyin": "Zhè xiē dōng xī yí gòng duō shǎo qián?",
        "thaiMeaning": "ของทั้งหมดนี้รวมราคาเท่าไหร่?"
      }
    ]
  },
  {
    "id": "v68",
    "hanzi": "贵",
    "pinyin": "guì",
    "thaiMeaning": "แพง",
    "example": {
      "hanzi": "太贵了。",
      "pinyin": "Tài guì le.",
      "thaiMeaning": "แพงเกินไป"
    },
    "examples": [
      {
        "scenario": "เห็นราคาสินค้าสูงเกินงบ",
        "hanzi": "这个包太贵了，我买不起。",
        "pinyin": "Zhè ge bāo tài guì le, wǒ mǎi bù qǐ.",
        "thaiMeaning": "กระเป๋าใบนี้แพงเกินไป ฉันซื้อไม่ไหว"
      },
      {
        "scenario": "เปรียบเทียบราคาสองร้าน",
        "hanzi": "这家店比那家贵一点。",
        "pinyin": "Zhè jiā diàn bǐ nà jiā guì yì diǎn.",
        "thaiMeaning": "ร้านนี้แพงกว่าร้านนั้นนิดหน่อย"
      },
      {
        "scenario": "ถามหาตัวเลือกที่ไม่แพง",
        "hanzi": "有没有不太贵的？",
        "pinyin": "Yǒu méi yǒu bú tài guì de?",
        "thaiMeaning": "มีแบบที่ไม่แพงมากไหม?"
      }
    ]
  },
  {
    "id": "v69",
    "hanzi": "便宜",
    "pinyin": "piányi",
    "thaiMeaning": "ถูก / ไม่แพง",
    "example": {
      "hanzi": "便宜一点。",
      "pinyin": "Piányi yìdiǎn.",
      "thaiMeaning": "ถูกลงหน่อย"
    },
    "examples": [
      {
        "scenario": "พบสินค้าราคาถูกในซูเปอร์มาร์เก็ต",
        "hanzi": "这里的水果又新鲜又便宜。",
        "pinyin": "Zhè lǐ de shuǐ guǒ yòu xīn xiān yòu pián yi.",
        "thaiMeaning": "ผลไม้ที่นี่ทั้งสดและราคาถูก"
      },
      {
        "scenario": "ต่อรองราคากับผู้ขาย",
        "hanzi": "可以再便宜一点吗？",
        "pinyin": "Kě yǐ zài pián yi yì diǎn ma?",
        "thaiMeaning": "ลดให้ถูกลงอีกหน่อยได้ไหม?"
      },
      {
        "scenario": "อธิบายว่าซื้อช่วงลดราคา",
        "hanzi": "这件衣服打折后很便宜。",
        "pinyin": "Zhè jiàn yī fu dǎ zhé hòu hěn pián yi.",
        "thaiMeaning": "เสื้อตัวนี้หลังลดราคาแล้วถูกมาก"
      }
    ]
  },
  {
    "id": "v70",
    "hanzi": "发票",
    "pinyin": "fāpiào",
    "thaiMeaning": "ใบเสร็จ / ใบกำกับ",
    "example": {
      "hanzi": "要发票。",
      "pinyin": "Yào fāpiào.",
      "thaiMeaning": "ขอใบเสร็จด้วย"
    },
    "examples": [
      {
        "scenario": "ขอใบกำกับภาษีหลังชำระเงิน",
        "hanzi": "麻烦给我开发票。",
        "pinyin": "Má fán gěi wǒ kāi fā piào.",
        "thaiMeaning": "รบกวนออกใบกำกับภาษีให้ฉันด้วย"
      },
      {
        "scenario": "ถามว่าสามารถออกใบเสร็จได้ไหม",
        "hanzi": "请问，可以开发票吗？",
        "pinyin": "Qǐng wèn, kě yǐ kāi fā piào ma?",
        "thaiMeaning": "ขอถามหน่อย สามารถออกใบกำกับภาษีได้ไหม?"
      },
      {
        "scenario": "เก็บใบเสร็จไว้เบิกบริษัท",
        "hanzi": "这张发票要交给公司。",
        "pinyin": "Zhè zhāng fā piào yào jiāo gěi gōng sī.",
        "thaiMeaning": "ใบกำกับภาษีใบนี้ต้องส่งให้บริษัท"
      }
    ]
  },
  {
    "id": "v71",
    "hanzi": "早上",
    "pinyin": "zǎoshang",
    "thaiMeaning": "เช้า / ตอนเช้า",
    "example": {
      "hanzi": "早上好。",
      "pinyin": "Zǎoshang hǎo.",
      "thaiMeaning": "อรุณสวัสดิ์"
    },
    "examples": [
      {
        "scenario": "ทักทายเพื่อนร่วมงานตอนเช้า",
        "hanzi": "早上好，今天来得真早。",
        "pinyin": "Zǎo shàng hǎo, jīn tiān lái de zhēn zǎo.",
        "thaiMeaning": "สวัสดีตอนเช้า วันนี้มาเช้าจัง"
      },
      {
        "scenario": "เล่ากิจวัตรก่อนทำงาน",
        "hanzi": "我早上七点起床。",
        "pinyin": "Wǒ zǎo shàng qī diǎn qǐ chuáng.",
        "thaiMeaning": "ฉันตื่นเจ็ดโมงเช้า"
      },
      {
        "scenario": "นัดหมายในช่วงเช้า",
        "hanzi": "我们明天早上见吧。",
        "pinyin": "Wǒ men míng tiān zǎo shàng jiàn ba.",
        "thaiMeaning": "พรุ่งนี้เช้าพวกเราเจอกันนะ"
      }
    ]
  },
  {
    "id": "v72",
    "hanzi": "中午",
    "pinyin": "zhōngwǔ",
    "thaiMeaning": "เที่ยง / ตอนเที่ยง",
    "example": {
      "hanzi": "中午吃什么？",
      "pinyin": "Zhōngwǔ chī shénme?",
      "thaiMeaning": "เที่ยงนี้กินอะไร"
    },
    "examples": [
      {
        "scenario": "นัดกินข้าวตอนเที่ยง",
        "hanzi": "我们中午十二点见。",
        "pinyin": "Wǒ men zhōng wǔ shí èr diǎn jiàn.",
        "thaiMeaning": "พวกเราเจอกันตอนเที่ยง"
      },
      {
        "scenario": "บอกว่าแดดแรงช่วงเที่ยง",
        "hanzi": "中午的太阳太大了。",
        "pinyin": "Zhōng wǔ de tài yáng tài dà le.",
        "thaiMeaning": "แดดตอนเที่ยงแรงเกินไป"
      },
      {
        "scenario": "ถามแผนช่วงพักกลางวัน",
        "hanzi": "你中午有时间吗？",
        "pinyin": "Nǐ zhōng wǔ yǒu shí jiān ma?",
        "thaiMeaning": "ตอนเที่ยงคุณมีเวลาไหม?"
      }
    ]
  },
  {
    "id": "v73",
    "hanzi": "下午",
    "pinyin": "xiàwǔ",
    "thaiMeaning": "บ่าย / ตอนบ่าย",
    "example": {
      "hanzi": "下午开会。",
      "pinyin": "Xiàwǔ kāihuì.",
      "thaiMeaning": "ตอนบ่ายมีประชุม"
    },
    "examples": [
      {
        "scenario": "แจ้งเวลาประชุม",
        "hanzi": "我们下午两点开会。",
        "pinyin": "Wǒ men xià wǔ liǎng diǎn kāi huì.",
        "thaiMeaning": "พวกเราประชุมบ่ายสองโมง"
      },
      {
        "scenario": "ชวนเพื่อนไปดื่มกาแฟ",
        "hanzi": "下午一起去喝咖啡吧。",
        "pinyin": "Xià wǔ yì qǐ qù hē kā fēi ba.",
        "thaiMeaning": "ตอนบ่ายไปดื่มกาแฟด้วยกันนะ"
      },
      {
        "scenario": "บอกว่าจะส่งงานช่วงบ่าย",
        "hanzi": "我今天下午把报告发给你。",
        "pinyin": "Wǒ jīn tiān xià wǔ bǎ bào gào fā gěi nǐ.",
        "thaiMeaning": "บ่ายวันนี้ฉันจะส่งรายงานให้คุณ"
      }
    ]
  },
  {
    "id": "v74",
    "hanzi": "晚上",
    "pinyin": "wǎnshang",
    "thaiMeaning": "เย็น / ค่ำ",
    "example": {
      "hanzi": "晚上见。",
      "pinyin": "Wǎnshang jiàn.",
      "thaiMeaning": "เจอกันตอนค่ำ"
    },
    "examples": [
      {
        "scenario": "นัดกินข้าวตอนเย็น",
        "hanzi": "今天晚上一起吃饭吗？",
        "pinyin": "Jīn tiān wǎn shàng yì qǐ chī fàn ma?",
        "thaiMeaning": "เย็นนี้ไปกินข้าวด้วยกันไหม?"
      },
      {
        "scenario": "เล่านิสัยก่อนนอน",
        "hanzi": "我晚上十一点睡觉。",
        "pinyin": "Wǒ wǎn shàng shí yī diǎn shuì jiào.",
        "thaiMeaning": "ฉันเข้านอนห้าทุ่ม"
      },
      {
        "scenario": "เตือนว่าอากาศเย็นตอนกลางคืน",
        "hanzi": "晚上比较冷，多穿一点。",
        "pinyin": "Wǎn shàng bǐ jiào lěng, duō chuān yì diǎn.",
        "thaiMeaning": "ตอนกลางคืนค่อนข้างหนาว ใส่เสื้อเพิ่มหน่อย"
      }
    ]
  },
  {
    "id": "v75",
    "hanzi": "昨天",
    "pinyin": "zuótiān",
    "thaiMeaning": "เมื่อวาน",
    "example": {
      "hanzi": "昨天没空。",
      "pinyin": "Zuótiān méi kòng.",
      "thaiMeaning": "เมื่อวานไม่ว่าง"
    },
    "examples": [
      {
        "scenario": "เล่าว่าเมื่อวานไปไหนมา",
        "hanzi": "我昨天去医院了。",
        "pinyin": "Wǒ zuó tiān qù yī yuàn le.",
        "thaiMeaning": "เมื่อวานฉันไปโรงพยาบาลมา"
      },
      {
        "scenario": "ถามเรื่องการประชุมเมื่อวาน",
        "hanzi": "昨天的会议怎么样？",
        "pinyin": "Zuó tiān de huì yì zěn me yàng?",
        "thaiMeaning": "การประชุมเมื่อวานเป็นอย่างไรบ้าง?"
      },
      {
        "scenario": "ขอโทษที่ไม่ได้รับสาย",
        "hanzi": "对不起，我昨天没看到你的电话。",
        "pinyin": "Duì bù qǐ, wǒ zuó tiān méi kàn dào nǐ de diàn huà.",
        "thaiMeaning": "ขอโทษ เมื่อวานฉันไม่เห็นสายของคุณ"
      }
    ]
  },
  {
    "id": "v76",
    "hanzi": "星期一",
    "pinyin": "xīngqīyī",
    "thaiMeaning": "วันจันทร์",
    "example": {
      "hanzi": "星期一上班。",
      "pinyin": "Xīngqīyī shàngbān.",
      "thaiMeaning": "วันจันทร์ทำงาน"
    },
    "examples": [
      {
        "scenario": "บอกวันเริ่มงานในสัปดาห์",
        "hanzi": "我星期一开始上班。",
        "pinyin": "Wǒ xīng qī yī kāi shǐ shàng bān.",
        "thaiMeaning": "ฉันเริ่มงานวันจันทร์"
      },
      {
        "scenario": "นัดประชุมวันจันทร์หน้า",
        "hanzi": "我们下个星期一开会。",
        "pinyin": "Wǒ men xià gè xīng qī yī kāi huì.",
        "thaiMeaning": "พวกเราประชุมวันจันทร์หน้า"
      },
      {
        "scenario": "บอกว่าร้านปิดทุกวันจันทร์",
        "hanzi": "这家店星期一不营业。",
        "pinyin": "Zhè jiā diàn xīng qī yī bù yíng yè.",
        "thaiMeaning": "ร้านนี้ไม่เปิดให้บริการวันจันทร์"
      }
    ]
  },
  {
    "id": "v77",
    "hanzi": "周末",
    "pinyin": "zhōumò",
    "thaiMeaning": "สุดสัปดาห์",
    "example": {
      "hanzi": "周末休息。",
      "pinyin": "Zhōumò xiūxi.",
      "thaiMeaning": "เสาร์อาทิตย์พักผ่อน"
    },
    "examples": [
      {
        "scenario": "ถามแผนวันหยุดของเพื่อน",
        "hanzi": "你周末有什么计划？",
        "pinyin": "Nǐ zhōu mò yǒu shén me jì huà?",
        "thaiMeaning": "สุดสัปดาห์คุณมีแผนอะไร?"
      },
      {
        "scenario": "ชวนครอบครัวไปเที่ยว",
        "hanzi": "这个周末我们去公园吧。",
        "pinyin": "Zhè ge zhōu mò wǒ men qù gōng yuán ba.",
        "thaiMeaning": "สุดสัปดาห์นี้พวกเราไปสวนสาธารณะกันนะ"
      },
      {
        "scenario": "เล่าว่าชอบพักผ่อนอยู่บ้าน",
        "hanzi": "我周末喜欢在家休息。",
        "pinyin": "Wǒ zhōu mò xǐ huan zài jiā xiū xi.",
        "thaiMeaning": "สุดสัปดาห์ฉันชอบพักอยู่บ้าน"
      }
    ]
  },
  {
    "id": "v78",
    "hanzi": "点",
    "pinyin": "diǎn",
    "thaiMeaning": "โมง / นาฬิกา",
    "example": {
      "hanzi": "九点。",
      "pinyin": "Jiǔ diǎn.",
      "thaiMeaning": "9 โมง"
    },
    "examples": [
      {
        "scenario": "ถามเวลาปัจจุบัน",
        "hanzi": "现在几点了？",
        "pinyin": "Xiàn zài jǐ diǎn le?",
        "thaiMeaning": "ตอนนี้กี่โมงแล้ว?"
      },
      {
        "scenario": "บอกเวลาเริ่มเรียน",
        "hanzi": "我们九点开始上课。",
        "pinyin": "Wǒ men jiǔ diǎn kāi shǐ shàng kè.",
        "thaiMeaning": "พวกเราเริ่มเรียนเก้าโมง"
      },
      {
        "scenario": "นัดเจอกันครึ่งโมง",
        "hanzi": "下午三点半见。",
        "pinyin": "Xià wǔ sān diǎn bàn jiàn.",
        "thaiMeaning": "เจอกันบ่ายสามโมงครึ่ง"
      }
    ]
  },
  {
    "id": "v79",
    "hanzi": "分",
    "pinyin": "fēn",
    "thaiMeaning": "นาที",
    "example": {
      "hanzi": "三十分。",
      "pinyin": "Sānshí fēn.",
      "thaiMeaning": "30 นาที"
    },
    "examples": [
      {
        "scenario": "บอกเวลาแบบมีนาที",
        "hanzi": "现在是八点十分。",
        "pinyin": "Xiàn zài shì bā diǎn shí fēn.",
        "thaiMeaning": "ตอนนี้แปดโมงสิบนาที"
      },
      {
        "scenario": "ขอเวลาเพิ่มเล็กน้อย",
        "hanzi": "请等我五分钟。",
        "pinyin": "Qǐng děng wǒ wǔ fēn zhōng.",
        "thaiMeaning": "กรุณารอฉันห้านาที"
      },
      {
        "scenario": "บอกระยะเวลาเดินทาง",
        "hanzi": "从这里走过去要二十分钟。",
        "pinyin": "Cóng zhè lǐ zǒu guò qù yào èr shí fēn zhōng.",
        "thaiMeaning": "เดินจากที่นี่ไปใช้เวลายี่สิบนาที"
      }
    ]
  },
  {
    "id": "v80",
    "hanzi": "秒",
    "pinyin": "miǎo",
    "thaiMeaning": "วินาที",
    "example": {
      "hanzi": "等几秒。",
      "pinyin": "Děng jǐ miǎo.",
      "thaiMeaning": "รอไม่กี่วินาที"
    },
    "examples": [
      {
        "scenario": "ขอให้อีกฝ่ายรอสั้นๆ",
        "hanzi": "请等我十秒。",
        "pinyin": "Qǐng děng wǒ shí miǎo.",
        "thaiMeaning": "กรุณารอฉันสิบวินาที"
      },
      {
        "scenario": "นับเวลาการแข่งขัน",
        "hanzi": "他用了十二秒跑到终点。",
        "pinyin": "Tā yòng le shí èr miǎo pǎo dào zhōng diǎn.",
        "thaiMeaning": "เขาใช้เวลาสิบสองวินาทีวิ่งถึงเส้นชัย"
      },
      {
        "scenario": "บอกว่าเหตุการณ์เกิดเร็วมาก",
        "hanzi": "事情在几秒内就发生了。",
        "pinyin": "Shì qíng zài jǐ miǎo nèi jiù fā shēng le.",
        "thaiMeaning": "เหตุการณ์เกิดขึ้นภายในไม่กี่วินาที"
      }
    ]
  },
  {
    "id": "v81",
    "hanzi": "米饭",
    "pinyin": "mǐfàn",
    "thaiMeaning": "ข้าวสวย",
    "example": {
      "hanzi": "吃米饭。",
      "pinyin": "Chī mǐfàn.",
      "thaiMeaning": "กินข้าวสวย"
    },
    "examples": [
      {
        "scenario": "สั่งข้าวในร้านอาหาร",
        "hanzi": "请给我一碗米饭。",
        "pinyin": "Qǐng gěi wǒ yì wǎn mǐ fàn.",
        "thaiMeaning": "ขอข้าวสวยหนึ่งถ้วย"
      },
      {
        "scenario": "ถามว่าอยากเพิ่มข้าวไหม",
        "hanzi": "你还要米饭吗？",
        "pinyin": "Nǐ hái yào mǐ fàn ma?",
        "thaiMeaning": "คุณเอาข้าวเพิ่มอีกไหม?"
      },
      {
        "scenario": "เล่าว่าชอบกินข้าวกับกับข้าว",
        "hanzi": "我喜欢吃米饭配菜。",
        "pinyin": "Wǒ xǐ huan chī mǐ fàn pèi cài.",
        "thaiMeaning": "ฉันชอบกินข้าวสวยกับกับข้าว"
      }
    ]
  },
  {
    "id": "v82",
    "hanzi": "面条",
    "pinyin": "miàntiáo",
    "thaiMeaning": "ก๋วยเตี๋ยว / บะหมี่",
    "example": {
      "hanzi": "吃面条。",
      "pinyin": "Chī miàntiáo.",
      "thaiMeaning": "กินบะหมี่"
    },
    "examples": [
      {
        "scenario": "สั่งบะหมี่ในร้าน",
        "hanzi": "我要一碗牛肉面条。",
        "pinyin": "Wǒ yào yì wǎn niú ròu miàn tiáo.",
        "thaiMeaning": "ฉันขอบะหมี่เนื้อหนึ่งชาม"
      },
      {
        "scenario": "ถามว่าอยากกินข้าวหรือบะหมี่",
        "hanzi": "你想吃米饭还是面条？",
        "pinyin": "Nǐ xiǎng chī mǐ fàn hái shì miàn tiáo?",
        "thaiMeaning": "คุณอยากกินข้าวหรือบะหมี่?"
      },
      {
        "scenario": "ชมบะหมี่ที่คนในบ้านทำ",
        "hanzi": "你做的面条很好吃。",
        "pinyin": "Nǐ zuò de miàn tiáo hěn hǎo chī.",
        "thaiMeaning": "บะหมี่ที่คุณทำอร่อยมาก"
      }
    ]
  },
  {
    "id": "v83",
    "hanzi": "菜",
    "pinyin": "cài",
    "thaiMeaning": "ผัก / กับข้าว",
    "example": {
      "hanzi": "点菜。",
      "pinyin": "Diǎn cài.",
      "thaiMeaning": "สั่งกับข้าว"
    },
    "examples": [
      {
        "scenario": "ถามว่ามีเมนูแนะนำไหม",
        "hanzi": "今天有什么推荐的菜？",
        "pinyin": "Jīn tiān yǒu shén me tuī jiàn de cài?",
        "thaiMeaning": "วันนี้มีเมนูอะไรแนะนำบ้าง?"
      },
      {
        "scenario": "ชมกับข้าวที่เพื่อนทำ",
        "hanzi": "这道菜味道很好。",
        "pinyin": "Zhè dào cài wèi dào hěn hǎo.",
        "thaiMeaning": "อาหารจานนี้รสชาติดีมาก"
      },
      {
        "scenario": "ไปตลาดซื้อผัก",
        "hanzi": "我去市场买点菜。",
        "pinyin": "Wǒ qù shì chǎng mǎi diǎn cài.",
        "thaiMeaning": "ฉันจะไปตลาดซื้อผักหน่อย"
      }
    ]
  },
  {
    "id": "v84",
    "hanzi": "水果",
    "pinyin": "shuǐguǒ",
    "thaiMeaning": "ผลไม้",
    "example": {
      "hanzi": "买水果。",
      "pinyin": "Mǎi shuǐguǒ.",
      "thaiMeaning": "ซื้อผลไม้"
    },
    "examples": [
      {
        "scenario": "ซื้อผลไม้หลังเลิกงาน",
        "hanzi": "下班后我去买水果。",
        "pinyin": "Xià bān hòu wǒ qù mǎi shuǐ guǒ.",
        "thaiMeaning": "หลังเลิกงานฉันจะไปซื้อผลไม้"
      },
      {
        "scenario": "ชวนแขกกินผลไม้",
        "hanzi": "来，吃点水果吧。",
        "pinyin": "Lái, chī diǎn shuǐ guǒ ba.",
        "thaiMeaning": "มา กินผลไม้สักหน่อยนะ"
      },
      {
        "scenario": "พูดถึงนิสัยเพื่อสุขภาพ",
        "hanzi": "我每天都会吃一些水果。",
        "pinyin": "Wǒ měi tiān dōu huì chī yì xiē shuǐ guǒ.",
        "thaiMeaning": "ฉันกินผลไม้เล็กน้อยทุกวัน"
      }
    ]
  },
  {
    "id": "v85",
    "hanzi": "苹果",
    "pinyin": "píngguǒ",
    "thaiMeaning": "แอปเปิ้ล",
    "example": {
      "hanzi": "吃苹果。",
      "pinyin": "Chī píngguǒ.",
      "thaiMeaning": "กินแอปเปิ้ล"
    },
    "examples": [
      {
        "scenario": "ซื้อแอปเปิลที่ตลาด",
        "hanzi": "我要买三斤苹果。",
        "pinyin": "Wǒ yào mǎi sān jīn píng guǒ.",
        "thaiMeaning": "ฉันต้องการซื้อแอปเปิลสามจิน"
      },
      {
        "scenario": "แบ่งแอปเปิลให้เพื่อน",
        "hanzi": "这个苹果给你吃。",
        "pinyin": "Zhè ge píng guǒ gěi nǐ chī.",
        "thaiMeaning": "แอปเปิลลูกนี้ให้คุณกิน"
      },
      {
        "scenario": "บอกว่าแอปเปิลยังไม่สุกหวาน",
        "hanzi": "这个苹果有点酸。",
        "pinyin": "Zhè ge píng guǒ yǒu diǎn suān.",
        "thaiMeaning": "แอปเปิลลูกนี้เปรี้ยวนิดหน่อย"
      }
    ]
  },
  {
    "id": "v86",
    "hanzi": "牛肉",
    "pinyin": "niúròu",
    "thaiMeaning": "เนื้อวัว",
    "example": {
      "hanzi": "吃牛肉。",
      "pinyin": "Chī niúròu.",
      "thaiMeaning": "กินเนื้อวัว"
    },
    "examples": [
      {
        "scenario": "สั่งอาหารในร้าน",
        "hanzi": "我要一份牛肉炒饭。",
        "pinyin": "Wǒ yào yí fèn niú ròu chǎo fàn.",
        "thaiMeaning": "ฉันขอข้าวผัดเนื้อหนึ่งจาน"
      },
      {
        "scenario": "ถามว่าเพื่อนกินเนื้อวัวไหม",
        "hanzi": "你吃牛肉吗？",
        "pinyin": "Nǐ chī niú ròu ma?",
        "thaiMeaning": "คุณกินเนื้อวัวไหม?"
      },
      {
        "scenario": "ซื้อเนื้อวัวไปทำอาหาร",
        "hanzi": "我买了牛肉，晚上做汤。",
        "pinyin": "Wǒ mǎi le niú ròu, wǎn shàng zuò tāng.",
        "thaiMeaning": "ฉันซื้อเนื้อวัวมา ตอนเย็นจะทำแกงจืด"
      }
    ]
  },
  {
    "id": "v87",
    "hanzi": "鸡肉",
    "pinyin": "jīròu",
    "thaiMeaning": "เนื้อไก่",
    "example": {
      "hanzi": "吃鸡肉。",
      "pinyin": "Chī jīròu.",
      "thaiMeaning": "กินเนื้อไก่"
    },
    "examples": [
      {
        "scenario": "เลือกเมนูที่ร้านอาหาร",
        "hanzi": "我想吃鸡肉，不要牛肉。",
        "pinyin": "Wǒ xiǎng chī jī ròu, bú yào niú ròu.",
        "thaiMeaning": "ฉันอยากกินเนื้อไก่ ไม่เอาเนื้อวัว"
      },
      {
        "scenario": "ชมอาหารที่ปรุงสุกกำลังดี",
        "hanzi": "这个鸡肉很嫩。",
        "pinyin": "Zhè ge jī ròu hěn nèn.",
        "thaiMeaning": "เนื้อไก่นี้นุ่มมาก"
      },
      {
        "scenario": "เตรียมอาหารกลางวัน",
        "hanzi": "午饭我做了鸡肉和蔬菜。",
        "pinyin": "Wǔ fàn wǒ zuò le jī ròu hé shū cài.",
        "thaiMeaning": "มื้อเที่ยงฉันทำไก่กับผัก"
      }
    ]
  },
  {
    "id": "v88",
    "hanzi": "鱼",
    "pinyin": "yú",
    "thaiMeaning": "ปลา",
    "example": {
      "hanzi": "吃鱼。",
      "pinyin": "Chī yú.",
      "thaiMeaning": "กินปลา"
    },
    "examples": [
      {
        "scenario": "สั่งปลาในร้านอาหาร",
        "hanzi": "这条鱼怎么做最好吃？",
        "pinyin": "Zhè tiáo yú zěn me zuò zuì hǎo chī?",
        "thaiMeaning": "ปลาตัวนี้ทำแบบไหนอร่อยที่สุด?"
      },
      {
        "scenario": "ซื้อปลาสดที่ตลาด",
        "hanzi": "今天市场的鱼很新鲜。",
        "pinyin": "Jīn tiān shì chǎng de yú hěn xīn xiān.",
        "thaiMeaning": "ปลาที่ตลาดวันนี้สดมาก"
      },
      {
        "scenario": "บอกเด็กให้ระวังก้างปลา",
        "hanzi": "吃鱼的时候要小心鱼刺。",
        "pinyin": "Chī yú de shí hòu yào xiǎo xīn yú cì.",
        "thaiMeaning": "เวลากินปลาต้องระวังก้างปลา"
      }
    ]
  },
  {
    "id": "v89",
    "hanzi": "茶",
    "pinyin": "chá",
    "thaiMeaning": "ชา / น้ำชา",
    "example": {
      "hanzi": "喝绿茶。",
      "pinyin": "Hē lǜchá.",
      "thaiMeaning": "ดื่มชาเขียว"
    },
    "examples": [
      {
        "scenario": "ต้อนรับแขกที่บ้าน",
        "hanzi": "请坐，喝杯茶吧。",
        "pinyin": "Qǐng zuò, hē bēi chá ba.",
        "thaiMeaning": "เชิญนั่ง ดื่มชาสักแก้วนะ"
      },
      {
        "scenario": "ถามความต้องการในร้านเครื่องดื่ม",
        "hanzi": "你想喝热茶还是冰茶？",
        "pinyin": "Nǐ xiǎng hē rè chá hái shì bīng chá?",
        "thaiMeaning": "คุณอยากดื่มชาร้อนหรือชาเย็น?"
      },
      {
        "scenario": "เล่านิสัยหลังอาหาร",
        "hanzi": "我吃完饭喜欢喝茶。",
        "pinyin": "Wǒ chī wán fàn xǐ huan hē chá.",
        "thaiMeaning": "ฉันชอบดื่มชาหลังกินข้าว"
      }
    ]
  },
  {
    "id": "v90",
    "hanzi": "牛奶",
    "pinyin": "niúnǎi",
    "thaiMeaning": "นมสด",
    "example": {
      "hanzi": "喝牛奶。",
      "pinyin": "Hē niúnǎi.",
      "thaiMeaning": "ดื่มนมสด"
    },
    "examples": [
      {
        "scenario": "เตรียมอาหารเช้า",
        "hanzi": "早餐我喝了一杯牛奶。",
        "pinyin": "Zǎo cān wǒ hē le yì bēi niú nǎi.",
        "thaiMeaning": "มื้อเช้าฉันดื่มนมหนึ่งแก้ว"
      },
      {
        "scenario": "พบว่านมในตู้เย็นหมด",
        "hanzi": "冰箱里没有牛奶了。",
        "pinyin": "Bīng xiāng lǐ méi yǒu niú nǎi le.",
        "thaiMeaning": "ในตู้เย็นไม่มีนมแล้ว"
      },
      {
        "scenario": "ถามว่าจะอุ่นนมไหม",
        "hanzi": "要不要把牛奶热一下？",
        "pinyin": "Yào bu yào bǎ niú nǎi rè yí xià?",
        "thaiMeaning": "จะอุ่นนมสักหน่อยไหม?"
      }
    ]
  },
  {
    "id": "v91",
    "hanzi": "医院",
    "pinyin": "yīyuàn",
    "thaiMeaning": "โรงพยาบาล",
    "example": {
      "hanzi": "去医院。",
      "pinyin": "Qù yīyuàn.",
      "thaiMeaning": "ไปโรงพยาบาล"
    },
    "examples": [
      {
        "scenario": "พาคนป่วยไปพบแพทย์",
        "hanzi": "他发烧了，我带他去医院。",
        "pinyin": "Tā fā shāo le, wǒ dài tā qù yī yuàn.",
        "thaiMeaning": "เขามีไข้ ฉันจะพาเขาไปโรงพยาบาล"
      },
      {
        "scenario": "ถามทางไปโรงพยาบาล",
        "hanzi": "请问，医院怎么走？",
        "pinyin": "Qǐng wèn, yī yuàn zěn me zǒu?",
        "thaiMeaning": "ขอถามหน่อย โรงพยาบาลไปทางไหน?"
      },
      {
        "scenario": "บอกตำแหน่งโรงพยาบาล",
        "hanzi": "医院就在银行旁边。",
        "pinyin": "Yī yuàn jiù zài yín háng páng biān.",
        "thaiMeaning": "โรงพยาบาลอยู่ข้างธนาคาร"
      }
    ]
  },
  {
    "id": "v92",
    "hanzi": "车站",
    "pinyin": "chēzhàn",
    "thaiMeaning": "สถานีรถ",
    "example": {
      "hanzi": "在车站。",
      "pinyin": "Zài chēzhàn.",
      "thaiMeaning": "อยู่ที่สถานี"
    },
    "examples": [
      {
        "scenario": "นัดพบกันที่สถานี",
        "hanzi": "我们在车站门口见。",
        "pinyin": "Wǒ men zài chē zhàn mén kǒu jiàn.",
        "thaiMeaning": "พวกเราเจอกันหน้าสถานี"
      },
      {
        "scenario": "ถามระยะทางไปสถานี",
        "hanzi": "这里离车站远吗？",
        "pinyin": "Zhè lǐ lí chē zhàn yuǎn ma?",
        "thaiMeaning": "จากที่นี่ถึงสถานีไกลไหม?"
      },
      {
        "scenario": "รีบไปให้ทันรถ",
        "hanzi": "快一点，车站马上就到了。",
        "pinyin": "Kuài yì diǎn, chē zhàn mǎ shàng jiù dào le.",
        "thaiMeaning": "เร็วหน่อย ใกล้ถึงสถานีแล้ว"
      }
    ]
  },
  {
    "id": "v93",
    "hanzi": "机场",
    "pinyin": "jīchǎng",
    "thaiMeaning": "สนามบิน",
    "example": {
      "hanzi": "去机场。",
      "pinyin": "Qù jīchǎng.",
      "thaiMeaning": "ไปสนามบิน"
    },
    "examples": [
      {
        "scenario": "เดินทางไปสนามบินแต่เช้า",
        "hanzi": "我明天早上去机场。",
        "pinyin": "Wǒ míng tiān zǎo shàng qù jī chǎng.",
        "thaiMeaning": "พรุ่งนี้เช้าฉันจะไปสนามบิน"
      },
      {
        "scenario": "ไปรับเพื่อนที่สนามบิน",
        "hanzi": "我去机场接朋友。",
        "pinyin": "Wǒ qù jī chǎng jiē péng yǒu.",
        "thaiMeaning": "ฉันจะไปรับเพื่อนที่สนามบิน"
      },
      {
        "scenario": "ถามเวลาเดินทางถึงสนามบิน",
        "hanzi": "从酒店到机场要多久？",
        "pinyin": "Cóng jiǔ diàn dào jī chǎng yào duō jiǔ?",
        "thaiMeaning": "จากโรงแรมไปสนามบินใช้เวลานานเท่าไร?"
      }
    ]
  },
  {
    "id": "v94",
    "hanzi": "酒店",
    "pinyin": "jiǔdiàn",
    "thaiMeaning": "โรงแรม",
    "example": {
      "hanzi": "住酒店。",
      "pinyin": "Zhù jiǔdiàn.",
      "thaiMeaning": "พักโรงแรม"
    },
    "examples": [
      {
        "scenario": "เช็กอินที่โรงแรม",
        "hanzi": "你好，我在这家酒店订了房间。",
        "pinyin": "Nǐ hǎo, wǒ zài zhè jiā jiǔ diàn dìng le fáng jiān.",
        "thaiMeaning": "สวัสดี ฉันจองห้องไว้ที่โรงแรมนี้"
      },
      {
        "scenario": "ถามว่ารวมอาหารเช้าหรือไม่",
        "hanzi": "酒店的房间包括早餐吗？",
        "pinyin": "Jiǔ diàn de fáng jiān bāo kuò zǎo cān ma?",
        "thaiMeaning": "ห้องพักของโรงแรมรวมอาหารเช้าไหม?"
      },
      {
        "scenario": "ขอให้แท็กซี่ไปส่งโรงแรม",
        "hanzi": "麻烦送我到这家酒店。",
        "pinyin": "Má fán sòng wǒ dào zhè jiā jiǔ diàn.",
        "thaiMeaning": "รบกวนไปส่งฉันที่โรงแรมนี้"
      }
    ]
  },
  {
    "id": "v95",
    "hanzi": "饭店",
    "pinyin": "fàndiàn",
    "thaiMeaning": "ร้านอาหาร",
    "example": {
      "hanzi": "去饭店。",
      "pinyin": "Qù fàndiàn.",
      "thaiMeaning": "ไปร้านอาหาร"
    },
    "examples": [
      {
        "scenario": "ชวนเพื่อนไปร้านอาหารใหม่",
        "hanzi": "附近新开了一家饭店。",
        "pinyin": "Fù jìn xīn kāi le yì jiā fàn diàn.",
        "thaiMeaning": "แถวนี้มีร้านอาหารเปิดใหม่หนึ่งร้าน"
      },
      {
        "scenario": "จองโต๊ะล่วงหน้า",
        "hanzi": "我在饭店订了六点的位子。",
        "pinyin": "Wǒ zài fàn diàn dìng le liù diǎn de wèi zǐ.",
        "thaiMeaning": "ฉันจองโต๊ะที่ร้านอาหารไว้ตอนหกโมง"
      },
      {
        "scenario": "ถามว่าร้านอยู่ไกลไหม",
        "hanzi": "那家饭店离这里远不远？",
        "pinyin": "Nà jiā fàn diàn lí zhè lǐ yuǎn bu yuǎn?",
        "thaiMeaning": "ร้านอาหารนั้นอยู่ไกลจากที่นี่ไหม?"
      }
    ]
  },
  {
    "id": "v96",
    "hanzi": "商店",
    "pinyin": "shāngdiàn",
    "thaiMeaning": "ร้านค้า",
    "example": {
      "hanzi": "逛商店。",
      "pinyin": "Guàng shāngdiàn.",
      "thaiMeaning": "เดินดูร้านค้า"
    },
    "examples": [
      {
        "scenario": "ถามเวลาเปิดร้าน",
        "hanzi": "这家商店几点开门？",
        "pinyin": "Zhè jiā shāng diàn jǐ diǎn kāi mén?",
        "thaiMeaning": "ร้านนี้เปิดกี่โมง?"
      },
      {
        "scenario": "ไปซื้อของใช้ใกล้บ้าน",
        "hanzi": "我去楼下的商店买水。",
        "pinyin": "Wǒ qù lóu xià de shāng diàn mǎi shuǐ.",
        "thaiMeaning": "ฉันจะไปร้านค้าข้างล่างซื้อน้ำ"
      },
      {
        "scenario": "พบว่าร้านปิดแล้ว",
        "hanzi": "商店已经关门了。",
        "pinyin": "Shāng diàn yǐ jīng guān mén le.",
        "thaiMeaning": "ร้านค้าปิดแล้ว"
      }
    ]
  },
  {
    "id": "v97",
    "hanzi": "学校",
    "pinyin": "xuéxiào",
    "thaiMeaning": "โรงเรียน",
    "example": {
      "hanzi": "去学校。",
      "pinyin": "Qù xuéxiào.",
      "thaiMeaning": "ไปโรงเรียน"
    },
    "examples": [
      {
        "scenario": "บอกเส้นทางไปโรงเรียน",
        "hanzi": "学校在公园对面。",
        "pinyin": "Xué xiào zài gōng yuán duì miàn.",
        "thaiMeaning": "โรงเรียนอยู่ตรงข้ามสวนสาธารณะ"
      },
      {
        "scenario": "ไปรับลูกหลังเลิกเรียน",
        "hanzi": "我下午去学校接孩子。",
        "pinyin": "Wǒ xià wǔ qù xué xiào jiē hái zi.",
        "thaiMeaning": "ตอนบ่ายฉันจะไปรับลูกที่โรงเรียน"
      },
      {
        "scenario": "เล่าระยะทางจากบ้าน",
        "hanzi": "我家离学校很近。",
        "pinyin": "Wǒ jiā lí xué xiào hěn jìn.",
        "thaiMeaning": "บ้านฉันอยู่ใกล้โรงเรียนมาก"
      }
    ]
  },
  {
    "id": "v98",
    "hanzi": "车",
    "pinyin": "chē",
    "thaiMeaning": "รถยนต์",
    "example": {
      "hanzi": "开车。",
      "pinyin": "Kāi chē.",
      "thaiMeaning": "ขับรถ"
    },
    "examples": [
      {
        "scenario": "ถามว่าเป็นรถของใคร",
        "hanzi": "门口那辆车是谁的？",
        "pinyin": "Mén kǒu nà liàng chē shì shuí de?",
        "thaiMeaning": "รถคันที่อยู่หน้าประตูเป็นของใคร?"
      },
      {
        "scenario": "บอกว่ารถเสียระหว่างทาง",
        "hanzi": "我的车在路上坏了。",
        "pinyin": "Wǒ de chē zài lù shang huài le.",
        "thaiMeaning": "รถของฉันเสียอยู่ระหว่างทาง"
      },
      {
        "scenario": "เตือนให้ระวังรถตอนข้ามถนน",
        "hanzi": "过马路时要注意车。",
        "pinyin": "Guò mǎ lù shí yào zhù yì chē.",
        "thaiMeaning": "ตอนข้ามถนนต้องระวังรถ"
      }
    ]
  },
  {
    "id": "v99",
    "hanzi": "飞机",
    "pinyin": "fēijī",
    "thaiMeaning": "เครื่องบิน",
    "example": {
      "hanzi": "坐飞机。",
      "pinyin": "Zuò fēijī.",
      "thaiMeaning": "นั่งเครื่องบิน"
    },
    "examples": [
      {
        "scenario": "บอกเวลาเครื่องออก",
        "hanzi": "飞机下午三点起飞。",
        "pinyin": "Fēi jī xià wǔ sān diǎn qǐ fēi.",
        "thaiMeaning": "เครื่องบินออกตอนบ่ายสามโมง"
      },
      {
        "scenario": "เล่าประสบการณ์ขึ้นเครื่องครั้งแรก",
        "hanzi": "这是我第一次坐飞机。",
        "pinyin": "Zhè shì wǒ dì yī cì zuò fēi jī.",
        "thaiMeaning": "นี่เป็นครั้งแรกที่ฉันนั่งเครื่องบิน"
      },
      {
        "scenario": "แจ้งว่าเครื่องบินล่าช้า",
        "hanzi": "我们的飞机晚点了。",
        "pinyin": "Wǒ men de fēi jī wǎn diǎn le.",
        "thaiMeaning": "เที่ยวบินของพวกเราล่าช้า"
      }
    ]
  },
  {
    "id": "v100",
    "hanzi": "出租车",
    "pinyin": "chūzūchē",
    "thaiMeaning": "รถแท็กซี่",
    "example": {
      "hanzi": "打出租车。",
      "pinyin": "Dǎ chūzūchē.",
      "thaiMeaning": "เรียกแท็กซี่"
    },
    "examples": [
      {
        "scenario": "เรียกแท็กซี่ไปสนามบิน",
        "hanzi": "请帮我叫一辆出租车。",
        "pinyin": "Qǐng bāng wǒ jiào yí liàng chū zū chē.",
        "thaiMeaning": "ช่วยเรียกแท็กซี่ให้ฉันหนึ่งคัน"
      },
      {
        "scenario": "บอกคนขับให้จอดข้างหน้า",
        "hanzi": "师傅，请把出租车停在前面。",
        "pinyin": "Shī fu, qǐng bǎ chū zū chē tíng zài qián miàn.",
        "thaiMeaning": "คนขับครับ กรุณาจอดแท็กซี่ข้างหน้า"
      },
      {
        "scenario": "เล่าว่าลืมของบนรถ",
        "hanzi": "我把手机忘在出租车里了。",
        "pinyin": "Wǒ bǎ shǒu jī wàng zài chū zū chē lǐ le.",
        "thaiMeaning": "ฉันลืมโทรศัพท์ไว้ในแท็กซี่"
      }
    ]
  },
  {
    "id": "v101",
    "hanzi": "人",
    "pinyin": "rén",
    "thaiMeaning": "คน / มนุษย์",
    "example": {
      "hanzi": "很多人。",
      "pinyin": "Hěn duō rén.",
      "thaiMeaning": "คนเยอะมาก"
    },
    "examples": [
      {
        "scenario": "บอกว่าร้านมีคนเยอะ",
        "hanzi": "今天商店里人很多。",
        "pinyin": "Jīn tiān shāng diàn lǐ rén hěn duō.",
        "thaiMeaning": "วันนี้ในร้านมีคนเยอะมาก"
      },
      {
        "scenario": "ถามจำนวนคนที่จะมากินข้าว",
        "hanzi": "晚上有几个人来吃饭？",
        "pinyin": "Wǎn shàng yǒu jǐ gè rén lái chī fàn?",
        "thaiMeaning": "ตอนเย็นจะมีกี่คนมากินข้าว?"
      },
      {
        "scenario": "บรรยายคนที่กำลังตามหา",
        "hanzi": "我要找的人穿着白衣服。",
        "pinyin": "Wǒ yào zhǎo de rén chuān zhe bái yī fu.",
        "thaiMeaning": "คนที่ฉันกำลังหาสวมเสื้อสีขาว"
      }
    ]
  },
  {
    "id": "v102",
    "hanzi": "朋友",
    "pinyin": "péngyou",
    "thaiMeaning": "เพื่อน",
    "example": {
      "hanzi": "找朋友。",
      "pinyin": "Zhǎo péngyou.",
      "thaiMeaning": "หาเพื่อน"
    },
    "examples": [
      {
        "scenario": "แนะนำเพื่อนให้ครอบครัวรู้จัก",
        "hanzi": "这是我的好朋友。",
        "pinyin": "Zhè shì wǒ de hǎo péng yǒu.",
        "thaiMeaning": "นี่คือเพื่อนสนิทของฉัน"
      },
      {
        "scenario": "นัดพบเพื่อนในวันหยุด",
        "hanzi": "周末我要和朋友见面。",
        "pinyin": "Zhōu mò wǒ yào hé péng yǒu jiàn miàn.",
        "thaiMeaning": "สุดสัปดาห์ฉันจะไปพบเพื่อน"
      },
      {
        "scenario": "ขอบคุณเพื่อนที่ช่วยเหลือ",
        "hanzi": "有你这样的朋友真好。",
        "pinyin": "Yǒu nǐ zhè yàng de péng yǒu zhēn hǎo.",
        "thaiMeaning": "มีเพื่อนอย่างคุณนี่ดีจริงๆ"
      }
    ]
  },
  {
    "id": "v103",
    "hanzi": "老师",
    "pinyin": "lǎoshī",
    "thaiMeaning": "คุณครู / อาจารย์",
    "example": {
      "hanzi": "老师好。",
      "pinyin": "Lǎoshī hǎo.",
      "thaiMeaning": "สวัสดีครับครู"
    },
    "examples": [
      {
        "scenario": "ทักทายครูก่อนเข้าเรียน",
        "hanzi": "老师，早上好！",
        "pinyin": "Lǎo shī, zǎo shàng hǎo!",
        "thaiMeaning": "อาจารย์ สวัสดีตอนเช้า!"
      },
      {
        "scenario": "ถามครูเมื่อไม่เข้าใจ",
        "hanzi": "这个问题我不懂，想问老师。",
        "pinyin": "Zhè ge wèn tí wǒ bù dǒng, xiǎng wèn lǎo shī.",
        "thaiMeaning": "ฉันไม่เข้าใจคำถามนี้ อยากถามอาจารย์"
      },
      {
        "scenario": "บอกว่าครูสอนเข้าใจง่าย",
        "hanzi": "我们的老师讲得很清楚。",
        "pinyin": "Wǒ men de lǎo shī jiǎng dé hěn qīng chǔ.",
        "thaiMeaning": "ครูของพวกเราอธิบายได้ชัดเจนมาก"
      }
    ]
  },
  {
    "id": "v104",
    "hanzi": "学生",
    "pinyin": "xuésheng",
    "thaiMeaning": "นักเรียน / นักศึกษา",
    "example": {
      "hanzi": "我是学生。",
      "pinyin": "Wǒ shì xuésheng.",
      "thaiMeaning": "ฉันเป็นนักเรียน"
    },
    "examples": [
      {
        "scenario": "แนะนำสถานะของตัวเอง",
        "hanzi": "我是在这里学习的学生。",
        "pinyin": "Wǒ shì zài zhè lǐ xué xí de xué shēng.",
        "thaiMeaning": "ฉันเป็นนักเรียนที่เรียนอยู่ที่นี่"
      },
      {
        "scenario": "บอกให้นักเรียนเข้าห้อง",
        "hanzi": "学生们已经进教室了。",
        "pinyin": "Xué shēng men yǐ jīng jìn jiào shì le.",
        "thaiMeaning": "นักเรียนเข้าห้องเรียนแล้ว"
      },
      {
        "scenario": "ชมว่านักเรียนตั้งใจเรียน",
        "hanzi": "这个学生学习很认真。",
        "pinyin": "Zhè ge xué shēng xué xí hěn rèn zhēn.",
        "thaiMeaning": "นักเรียนคนนี้ตั้งใจเรียนมาก"
      }
    ]
  },
  {
    "id": "v105",
    "hanzi": "医生",
    "pinyin": "yīshēng",
    "thaiMeaning": "หมอ / แพทย์",
    "example": {
      "hanzi": "看医生。",
      "pinyin": "Kàn yīshēng.",
      "thaiMeaning": "ไปหาหมอ"
    },
    "examples": [
      {
        "scenario": "บอกแพทย์เกี่ยวกับอาการ",
        "hanzi": "医生，我头疼得很厉害。",
        "pinyin": "Yī shēng, wǒ tóu téng dé hěn lì hài.",
        "thaiMeaning": "หมอครับ ฉันปวดหัวมาก"
      },
      {
        "scenario": "ถามว่าแพทย์เข้าตรวจเมื่อไร",
        "hanzi": "医生什么时候过来？",
        "pinyin": "Yī shēng shén me shí hòu guò lái?",
        "thaiMeaning": "หมอจะมาเมื่อไร?"
      },
      {
        "scenario": "ทำตามคำแนะนำของแพทย์",
        "hanzi": "医生让我多休息。",
        "pinyin": "Yī shēng ràng wǒ duō xiū xi.",
        "thaiMeaning": "หมอให้ฉันพักผ่อนมากๆ"
      }
    ]
  },
  {
    "id": "v106",
    "hanzi": "爸爸",
    "pinyin": "bàba",
    "thaiMeaning": "คุณพ่อ",
    "example": {
      "hanzi": "我爸爸。",
      "pinyin": "Wǒ bàba.",
      "thaiMeaning": "พ่อของฉัน"
    },
    "examples": [
      {
        "scenario": "บอกว่าใครกำลังทำอาหาร",
        "hanzi": "我爸爸正在做晚饭。",
        "pinyin": "Wǒ bà ba zhèng zài zuò wǎn fàn.",
        "thaiMeaning": "พ่อของฉันกำลังทำอาหารเย็น"
      },
      {
        "scenario": "โทรถามว่าพ่ออยู่ที่ไหน",
        "hanzi": "爸爸，你在哪里？",
        "pinyin": "Bà ba, nǐ zài nǎ lǐ?",
        "thaiMeaning": "พ่อ อยู่ที่ไหน?"
      },
      {
        "scenario": "เล่าว่าพ่อขับรถไปทำงาน",
        "hanzi": "我爸爸每天开车上班。",
        "pinyin": "Wǒ bà ba měi tiān kāi chē shàng bān.",
        "thaiMeaning": "พ่อของฉันขับรถไปทำงานทุกวัน"
      }
    ]
  },
  {
    "id": "v107",
    "hanzi": "妈妈",
    "pinyin": "māma",
    "thaiMeaning": "คุณแม่",
    "example": {
      "hanzi": "我妈妈。",
      "pinyin": "Wǒ māma.",
      "thaiMeaning": "แม่ของฉัน"
    },
    "examples": [
      {
        "scenario": "บอกว่าแม่ซื้อผลไม้มา",
        "hanzi": "妈妈买了很多水果。",
        "pinyin": "Mā ma mǎi le hěn duō shuǐ guǒ.",
        "thaiMeaning": "แม่ซื้อผลไม้มาเยอะมาก"
      },
      {
        "scenario": "โทรบอกแม่ว่าจะกลับช้า",
        "hanzi": "妈妈，我今天晚点回家。",
        "pinyin": "Mā ma, wǒ jīn tiān wǎn diǎn huí jiā.",
        "thaiMeaning": "แม่ วันนี้ฉันจะกลับบ้านช้าหน่อย"
      },
      {
        "scenario": "ชมอาหารที่แม่ทำ",
        "hanzi": "妈妈做的菜最好吃。",
        "pinyin": "Mā ma zuò de cài zuì hǎo chī.",
        "thaiMeaning": "อาหารที่แม่ทำอร่อยที่สุด"
      }
    ]
  },
  {
    "id": "v108",
    "hanzi": "哥哥",
    "pinyin": "gēge",
    "thaiMeaning": "พี่ชาย",
    "example": {
      "hanzi": "我哥哥。",
      "pinyin": "Wǒ gēge.",
      "thaiMeaning": "พี่ชายฉัน"
    },
    "examples": [
      {
        "scenario": "บอกว่าพี่ชายกำลังเรียน",
        "hanzi": "我哥哥在大学学习。",
        "pinyin": "Wǒ gē ge zài dà xué xué xí.",
        "thaiMeaning": "พี่ชายของฉันเรียนอยู่มหาวิทยาลัย"
      },
      {
        "scenario": "ขอให้พี่ชายช่วยยกของ",
        "hanzi": "哥哥，帮我搬一下这个箱子。",
        "pinyin": "Gē ge, bāng wǒ bān yí xià zhè ge xiāng zǐ.",
        "thaiMeaning": "พี่ ช่วยฉันยกลังนี้หน่อย"
      },
      {
        "scenario": "เล่าว่าพี่ชายสูงกว่าตัวเอง",
        "hanzi": "我哥哥比我高。",
        "pinyin": "Wǒ gē ge bǐ wǒ gāo.",
        "thaiMeaning": "พี่ชายของฉันสูงกว่าฉัน"
      }
    ]
  },
  {
    "id": "v109",
    "hanzi": "姐姐",
    "pinyin": "jiějie",
    "thaiMeaning": "พี่สาว",
    "example": {
      "hanzi": "我姐姐。",
      "pinyin": "Wǒ jiějie.",
      "thaiMeaning": "พี่สาวฉัน"
    },
    "examples": [
      {
        "scenario": "บอกอาชีพของพี่สาว",
        "hanzi": "我姐姐是一名医生。",
        "pinyin": "Wǒ jiě jie shì yì míng yī shēng.",
        "thaiMeaning": "พี่สาวของฉันเป็นหมอ"
      },
      {
        "scenario": "ยืมเสื้อผ้าของพี่สาว",
        "hanzi": "姐姐，我可以穿你的衣服吗？",
        "pinyin": "Jiě jie, wǒ kě yǐ chuān nǐ de yī fu ma?",
        "thaiMeaning": "พี่สาว ฉันขอใส่เสื้อของพี่ได้ไหม?"
      },
      {
        "scenario": "เล่าว่าพี่สาวแต่งงานแล้ว",
        "hanzi": "我姐姐去年结婚了。",
        "pinyin": "Wǒ jiě jie qù nián jié hūn le.",
        "thaiMeaning": "พี่สาวของฉันแต่งงานเมื่อปีที่แล้ว"
      }
    ]
  },
  {
    "id": "v110",
    "hanzi": "弟弟",
    "pinyin": "dìdi",
    "thaiMeaning": "น้องชาย",
    "example": {
      "hanzi": "我弟弟。",
      "pinyin": "Wǒ dìdi.",
      "thaiMeaning": "น้องชายฉัน"
    },
    "examples": [
      {
        "scenario": "บอกว่าน้องชายกำลังนอน",
        "hanzi": "我弟弟还在睡觉。",
        "pinyin": "Wǒ dì di hái zài shuì jiào.",
        "thaiMeaning": "น้องชายของฉันยังนอนอยู่"
      },
      {
        "scenario": "ไปรับน้องชายที่โรงเรียน",
        "hanzi": "我要去学校接弟弟。",
        "pinyin": "Wǒ yào qù xué xiào jiē dì di.",
        "thaiMeaning": "ฉันต้องไปรับน้องชายที่โรงเรียน"
      },
      {
        "scenario": "เล่าว่าน้องชายชอบเล่นบอล",
        "hanzi": "我弟弟很喜欢打球。",
        "pinyin": "Wǒ dì di hěn xǐ huan dǎ qiú.",
        "thaiMeaning": "น้องชายของฉันชอบเล่นบอลมาก"
      }
    ]
  },
  {
    "id": "v111",
    "hanzi": "看",
    "pinyin": "kàn",
    "thaiMeaning": "มอง / ดู / อ่าน",
    "example": {
      "hanzi": "看书。",
      "pinyin": "Kàn shū.",
      "thaiMeaning": "อ่านหนังสือ"
    },
    "examples": [
      {
        "scenario": "ชวนเพื่อนดูภาพยนตร์",
        "hanzi": "晚上一起去看电影吧。",
        "pinyin": "Wǎn shàng yì qǐ qù kàn diàn yǐng ba.",
        "thaiMeaning": "ตอนเย็นไปดูหนังด้วยกันนะ"
      },
      {
        "scenario": "อ่านหนังสือก่อนนอน",
        "hanzi": "我每天睡前看书。",
        "pinyin": "Wǒ měi tiān shuì qián kàn shū.",
        "thaiMeaning": "ฉันอ่านหนังสือก่อนนอนทุกวัน"
      },
      {
        "scenario": "ขอให้แพทย์ช่วยตรวจอาการ",
        "hanzi": "医生，请帮我看一下。",
        "pinyin": "Yī shēng, qǐng bāng wǒ kàn yí xià.",
        "thaiMeaning": "หมอครับ กรุณาช่วยตรวจให้ฉันหน่อย"
      }
    ]
  },
  {
    "id": "v112",
    "hanzi": "听",
    "pinyin": "tīng",
    "thaiMeaning": "ฟัง",
    "example": {
      "hanzi": "听音乐。",
      "pinyin": "Tīng yīnyuè.",
      "thaiMeaning": "ฟังเพลง"
    },
    "examples": [
      {
        "scenario": "ขอให้อีกฝ่ายฟังให้จบ",
        "hanzi": "请先听我说完。",
        "pinyin": "Qǐng xiān tīng wǒ shuō wán.",
        "thaiMeaning": "กรุณาฟังฉันพูดให้จบก่อน"
      },
      {
        "scenario": "ฟังเพลงระหว่างทำงาน",
        "hanzi": "我工作的时候喜欢听音乐。",
        "pinyin": "Wǒ gōng zuò de shí hòu xǐ huan tīng yīn yuè.",
        "thaiMeaning": "ฉันชอบฟังเพลงตอนทำงาน"
      },
      {
        "scenario": "บอกว่าไม่ได้ยินชัด",
        "hanzi": "这里太吵了，我听不清。",
        "pinyin": "Zhè lǐ tài chǎo le, wǒ tīng bù qīng.",
        "thaiMeaning": "ที่นี่เสียงดังเกินไป ฉันได้ยินไม่ชัด"
      }
    ]
  },
  {
    "id": "v113",
    "hanzi": "说",
    "pinyin": "shuō",
    "thaiMeaning": "พูด / บอก",
    "example": {
      "hanzi": "说话。",
      "pinyin": "Shuōhuà.",
      "thaiMeaning": "พูดคุย"
    },
    "examples": [
      {
        "scenario": "ขอให้อีกฝ่ายพูดช้าลง",
        "hanzi": "请说慢一点。",
        "pinyin": "Qǐng shuō màn yì diǎn.",
        "thaiMeaning": "กรุณาพูดช้าลงหน่อย"
      },
      {
        "scenario": "บอกว่าตัวเองพูดภาษาจีนได้นิดหน่อย",
        "hanzi": "我会说一点中文。",
        "pinyin": "Wǒ huì shuō yì diǎn zhòng wén.",
        "thaiMeaning": "ฉันพูดภาษาจีนได้นิดหน่อย"
      },
      {
        "scenario": "ถามว่าเมื่อครู่นี้พูดอะไร",
        "hanzi": "你刚才说什么？",
        "pinyin": "Nǐ gāng cái shuō shén me?",
        "thaiMeaning": "เมื่อกี้คุณพูดอะไร?"
      }
    ]
  },
  {
    "id": "v114",
    "hanzi": "写",
    "pinyin": "xiě",
    "thaiMeaning": "เขียน",
    "example": {
      "hanzi": "写字。",
      "pinyin": "Xiě zì.",
      "thaiMeaning": "เขียนหนังสือ"
    },
    "examples": [
      {
        "scenario": "เขียนชื่อบนแบบฟอร์ม",
        "hanzi": "请在这里写你的名字。",
        "pinyin": "Qǐng zài zhè lǐ xiě nǐ de míng zì.",
        "thaiMeaning": "กรุณาเขียนชื่อของคุณตรงนี้"
      },
      {
        "scenario": "เขียนข้อความหาเพื่อน",
        "hanzi": "我给朋友写了一封信。",
        "pinyin": "Wǒ gěi péng yǒu xiě le yì fēng xìn.",
        "thaiMeaning": "ฉันเขียนจดหมายหนึ่งฉบับถึงเพื่อน"
      },
      {
        "scenario": "บอกว่าเขียนตัวอักษรจีนไม่เป็น",
        "hanzi": "这个汉字我不会写。",
        "pinyin": "Zhè ge hàn zì wǒ bú huì xiě.",
        "thaiMeaning": "ตัวอักษรจีนตัวนี้ฉันเขียนไม่เป็น"
      }
    ]
  },
  {
    "id": "v115",
    "hanzi": "想",
    "pinyin": "xiǎng",
    "thaiMeaning": "อยาก / คิด",
    "example": {
      "hanzi": "你想吃什么？",
      "pinyin": "Nǐ xiǎng chī shénme?",
      "thaiMeaning": "คุณอยากกินอะไร"
    },
    "examples": [
      {
        "scenario": "บอกความต้องการกินอาหาร",
        "hanzi": "我想吃点东西。",
        "pinyin": "Wǒ xiǎng chī diǎn dōng xī.",
        "thaiMeaning": "ฉันอยากกินอะไรสักหน่อย"
      },
      {
        "scenario": "ถามความคิดเห็นของเพื่อน",
        "hanzi": "你怎么想？",
        "pinyin": "Nǐ zěn me xiǎng?",
        "thaiMeaning": "คุณคิดอย่างไร?"
      },
      {
        "scenario": "บอกว่าคิดถึงครอบครัว",
        "hanzi": "我有点想家了。",
        "pinyin": "Wǒ yǒu diǎn xiǎng jiā le.",
        "thaiMeaning": "ฉันเริ่มคิดถึงบ้านแล้ว"
      }
    ]
  },
  {
    "id": "v116",
    "hanzi": "知道",
    "pinyin": "zhīdào",
    "thaiMeaning": "รู้ / ทราบ",
    "example": {
      "hanzi": "我知道了。",
      "pinyin": "Wǒ zhīdào le.",
      "thaiMeaning": "ฉันรู้แล้ว"
    },
    "examples": [
      {
        "scenario": "ตอบว่าทราบข้อมูลแล้ว",
        "hanzi": "好的，我知道了。",
        "pinyin": "Hǎo de, wǒ zhī dào le.",
        "thaiMeaning": "โอเค ฉันรู้แล้ว"
      },
      {
        "scenario": "ถามว่าอีกฝ่ายรู้จักสถานที่ไหม",
        "hanzi": "你知道银行在哪里吗？",
        "pinyin": "Nǐ zhī dào yín háng zài nǎ lǐ ma?",
        "thaiMeaning": "คุณรู้ไหมว่าธนาคารอยู่ที่ไหน?"
      },
      {
        "scenario": "บอกว่าไม่รู้คำตอบ",
        "hanzi": "我不知道这个问题的答案。",
        "pinyin": "Wǒ bù zhī dào zhè ge wèn tí de dá àn.",
        "thaiMeaning": "ฉันไม่รู้คำตอบของคำถามนี้"
      }
    ]
  },
  {
    "id": "v117",
    "hanzi": "认识",
    "pinyin": "rènshi",
    "thaiMeaning": "รู้จัก",
    "example": {
      "hanzi": "很高兴认识你。",
      "pinyin": "Hěn gāoxìng rènshi nǐ.",
      "thaiMeaning": "ดีใจที่ได้รู้จักคุณ"
    },
    "examples": [
      {
        "scenario": "แนะนำตัวเมื่อพบกันครั้งแรก",
        "hanzi": "很高兴认识你。",
        "pinyin": "Hěn gāo xìng rèn shi nǐ.",
        "thaiMeaning": "ยินดีที่ได้รู้จักคุณ"
      },
      {
        "scenario": "ถามว่ารู้จักคนคนนั้นไหม",
        "hanzi": "你认识那个人吗？",
        "pinyin": "Nǐ rèn shi nà ge rén ma?",
        "thaiMeaning": "คุณรู้จักคนนั้นไหม?"
      },
      {
        "scenario": "บอกว่ารู้จักเมืองนี้ดีขึ้น",
        "hanzi": "住了一年后，我更认识这个城市了。",
        "pinyin": "Zhù le yì nián hòu, wǒ gèng rèn shi zhè ge chéng shì le.",
        "thaiMeaning": "หลังอยู่มาหนึ่งปี ฉันรู้จักเมืองนี้มากขึ้น"
      }
    ]
  },
  {
    "id": "v118",
    "hanzi": "听懂",
    "pinyin": "tīngdǒng",
    "thaiMeaning": "ฟังเข้าใจ",
    "example": {
      "hanzi": "听懂了。",
      "pinyin": "Tīngdǒng le.",
      "thaiMeaning": "ฟังเข้าใจแล้ว"
    },
    "examples": [
      {
        "scenario": "บอกว่าเข้าใจสิ่งที่ได้ยิน",
        "hanzi": "这次我听懂了。",
        "pinyin": "Zhè cì wǒ tīng dǒng le.",
        "thaiMeaning": "ครั้งนี้ฉันฟังเข้าใจแล้ว"
      },
      {
        "scenario": "ขอให้พูดซ้ำเพราะฟังไม่เข้าใจ",
        "hanzi": "对不起，我没听懂，请再说一次。",
        "pinyin": "Duì bù qǐ, wǒ méi tīng dǒng, qǐng zài shuō yí cì.",
        "thaiMeaning": "ขอโทษ ฉันฟังไม่เข้าใจ กรุณาพูดอีกครั้ง"
      },
      {
        "scenario": "ถามนักเรียนว่าเข้าใจหรือไม่",
        "hanzi": "老师说的话你听懂了吗？",
        "pinyin": "Lǎo shī shuō de huà nǐ tīng dǒng le ma?",
        "thaiMeaning": "คุณฟังสิ่งที่ครูพูดเข้าใจไหม?"
      }
    ]
  },
  {
    "id": "v119",
    "hanzi": "帮助",
    "pinyin": "bāngzhù",
    "thaiMeaning": "ช่วยเหลือ / ช่วย",
    "example": {
      "hanzi": "需要帮助。",
      "pinyin": "Xūyào bāngzhù.",
      "thaiMeaning": "ต้องการความช่วยเหลือ"
    },
    "examples": [
      {
        "scenario": "ขอความช่วยเหลืออย่างสุภาพ",
        "hanzi": "我需要你的帮助。",
        "pinyin": "Wǒ xū yào nǐ de bāng zhù.",
        "thaiMeaning": "ฉันต้องการความช่วยเหลือจากคุณ"
      },
      {
        "scenario": "ขอบคุณคนที่เข้ามาช่วย",
        "hanzi": "谢谢你帮助我。",
        "pinyin": "Xiè xiè nǐ bāng zhù wǒ.",
        "thaiMeaning": "ขอบคุณที่ช่วยฉัน"
      },
      {
        "scenario": "เสนอตัวช่วยเพื่อน",
        "hanzi": "如果你有问题，我可以帮助你。",
        "pinyin": "Rú guǒ nǐ yǒu wèn tí, wǒ kě yǐ bāng zhù nǐ.",
        "thaiMeaning": "ถ้าคุณมีปัญหา ฉันช่วยคุณได้"
      }
    ]
  },
  {
    "id": "v120",
    "hanzi": "找",
    "pinyin": "zhǎo",
    "thaiMeaning": "หา / ตามหา",
    "example": {
      "hanzi": "找东西。",
      "pinyin": "Zhǎo dōngxi.",
      "thaiMeaning": "หาของ"
    },
    "examples": [
      {
        "scenario": "ตามหาโทรศัพท์ที่หาย",
        "hanzi": "我在找我的手机。",
        "pinyin": "Wǒ zài zhǎo wǒ de shǒu jī.",
        "thaiMeaning": "ฉันกำลังหาโทรศัพท์ของฉัน"
      },
      {
        "scenario": "มาที่สำนักงานเพื่อพบผู้จัดการ",
        "hanzi": "你好，我找王经理。",
        "pinyin": "Nǐ hǎo, wǒ zhǎo wáng jīng lǐ.",
        "thaiMeaning": "สวัสดี ฉันมาพบผู้จัดการหวัง"
      },
      {
        "scenario": "ชวนเพื่อนหาร้านอาหาร",
        "hanzi": "我们找一家饭店吃饭吧。",
        "pinyin": "Wǒ men zhǎo yì jiā fàn diàn chī fàn ba.",
        "thaiMeaning": "พวกเราหาร้านอาหารกินข้าวกันเถอะ"
      }
    ]
  },
  {
    "id": "v121",
    "hanzi": "大",
    "pinyin": "dà",
    "thaiMeaning": "ใหญ่",
    "example": {
      "hanzi": "很大。",
      "pinyin": "Hěn dà.",
      "thaiMeaning": "ใหญ่มาก"
    },
    "examples": [
      {
        "scenario": "เปรียบเทียบขนาดเสื้อ",
        "hanzi": "这件衣服太大了。",
        "pinyin": "Zhè jiàn yī fu tài dà le.",
        "thaiMeaning": "เสื้อตัวนี้ใหญ่เกินไป"
      },
      {
        "scenario": "พูดถึงบ้านหลังใหม่",
        "hanzi": "他们的新家很大。",
        "pinyin": "Tā men de xīn jiā hěn dà.",
        "thaiMeaning": "บ้านใหม่ของพวกเขาใหญ่มาก"
      },
      {
        "scenario": "บอกว่าเด็กโตขึ้นแล้ว",
        "hanzi": "孩子已经长大了。",
        "pinyin": "Hái zi yǐ jīng zhǎng dà le.",
        "thaiMeaning": "เด็กโตแล้ว"
      }
    ]
  },
  {
    "id": "v122",
    "hanzi": "小",
    "pinyin": "xiǎo",
    "thaiMeaning": "เล็ก",
    "example": {
      "hanzi": "太小了。",
      "pinyin": "Tài xiǎo le.",
      "thaiMeaning": "เล็กเกินไป"
    },
    "examples": [
      {
        "scenario": "ขอรองเท้าไซซ์ใหญ่ขึ้น",
        "hanzi": "这双鞋太小了。",
        "pinyin": "Zhè shuāng xié tài xiǎo le.",
        "thaiMeaning": "รองเท้าคู่นี้เล็กเกินไป"
      },
      {
        "scenario": "บอกว่าร้านเล็กแต่สะอาด",
        "hanzi": "这家店很小，但是很干净。",
        "pinyin": "Zhè jiā diàn hěn xiǎo, dàn shì hěn gān jìng.",
        "thaiMeaning": "ร้านนี้เล็ก แต่สะอาดมาก"
      },
      {
        "scenario": "ลดเสียงโทรทัศน์",
        "hanzi": "请把电视声音调小一点。",
        "pinyin": "Qǐng bǎ diàn shì shēng yīn diào xiǎo yì diǎn.",
        "thaiMeaning": "กรุณาลดเสียงโทรทัศน์ลงหน่อย"
      }
    ]
  },
  {
    "id": "v123",
    "hanzi": "多",
    "pinyin": "duō",
    "thaiMeaning": "มาก / เยอะ",
    "example": {
      "hanzi": "很多。",
      "pinyin": "Hěn duō.",
      "thaiMeaning": "เยอะมาก"
    },
    "examples": [
      {
        "scenario": "บอกว่ามีงานเยอะ",
        "hanzi": "我今天工作很多。",
        "pinyin": "Wǒ jīn tiān gōng zuò hěn duō.",
        "thaiMeaning": "วันนี้ฉันมีงานเยอะมาก"
      },
      {
        "scenario": "แนะนำให้ดื่มน้ำมากขึ้น",
        "hanzi": "天气热，要多喝水。",
        "pinyin": "Tiān qì rè, yào duō hē shuǐ.",
        "thaiMeaning": "อากาศร้อน ต้องดื่มน้ำเยอะๆ"
      },
      {
        "scenario": "ถามจำนวนคน",
        "hanzi": "你们公司有多少人？",
        "pinyin": "Nǐ men gōng sī yǒu duō shǎo rén?",
        "thaiMeaning": "บริษัทของคุณมีคนกี่คน?"
      }
    ]
  },
  {
    "id": "v124",
    "hanzi": "少",
    "pinyin": "shǎo",
    "thaiMeaning": "น้อย",
    "example": {
      "hanzi": "减少。",
      "pinyin": "Jiǎnshǎo.",
      "thaiMeaning": "ลดน้อยลง"
    },
    "examples": [
      {
        "scenario": "ขออาหารปริมาณน้อย",
        "hanzi": "米饭请给我少一点。",
        "pinyin": "Mǐ fàn qǐng gěi wǒ shǎo yì diǎn.",
        "thaiMeaning": "กรุณาให้ข้าวฉันน้อยหน่อย"
      },
      {
        "scenario": "บอกว่าวันนี้คนไม่เยอะ",
        "hanzi": "今天商店里的人很少。",
        "pinyin": "Jīn tiān shāng diàn lǐ de rén hěn shǎo.",
        "thaiMeaning": "วันนี้คนในร้านมีน้อยมาก"
      },
      {
        "scenario": "แนะนำให้กินหวานน้อยลง",
        "hanzi": "为了健康，要少吃甜的。",
        "pinyin": "Wèi le jiàn kāng, yào shǎo chī tián de.",
        "thaiMeaning": "เพื่อสุขภาพ ต้องกินของหวานให้น้อยลง"
      }
    ]
  },
  {
    "id": "v125",
    "hanzi": "高",
    "pinyin": "gāo",
    "thaiMeaning": "สูง",
    "example": {
      "hanzi": "很高。",
      "pinyin": "Hěn gāo.",
      "thaiMeaning": "สูงมาก"
    },
    "examples": [
      {
        "scenario": "บรรยายส่วนสูงของเพื่อน",
        "hanzi": "他个子很高。",
        "pinyin": "Tā gè zi hěn gāo.",
        "thaiMeaning": "เขาตัวสูงมาก"
      },
      {
        "scenario": "บอกว่าตึกสูงมาก",
        "hanzi": "这座楼有三十层，真高。",
        "pinyin": "Zhè zuò lóu yǒu sān shí céng, zhēn gāo.",
        "thaiMeaning": "ตึกนี้มีสามสิบชั้น สูงจริงๆ"
      },
      {
        "scenario": "บ่นว่าสินค้าราคาสูง",
        "hanzi": "这里的价格有点高。",
        "pinyin": "Zhè lǐ de jià gé yǒu diǎn gāo.",
        "thaiMeaning": "ราคาที่นี่สูงไปหน่อย"
      }
    ]
  },
  {
    "id": "v126",
    "hanzi": "矮",
    "pinyin": "ǎi",
    "thaiMeaning": "เตี้ย",
    "example": {
      "hanzi": "有点矮。",
      "pinyin": "Yǒudiǎnr ǎi.",
      "thaiMeaning": "ค่อนข้างเตี้ย"
    },
    "examples": [
      {
        "scenario": "เปรียบเทียบส่วนสูงของพี่น้อง",
        "hanzi": "弟弟比哥哥矮一点。",
        "pinyin": "Dì di bǐ gē ge ǎi yì diǎn.",
        "thaiMeaning": "น้องชายเตี้ยกว่าพี่ชายเล็กน้อย"
      },
      {
        "scenario": "ขอเก้าอี้ที่เตี้ยกว่า",
        "hanzi": "这把椅子太高了，有矮一点的吗？",
        "pinyin": "Zhè bǎ yǐ zi tài gāo le, yǒu ǎi yì diǎn de ma?",
        "thaiMeaning": "เก้าอี้ตัวนี้สูงเกินไป มีตัวที่เตี้ยกว่านี้ไหม?"
      },
      {
        "scenario": "บรรยายตึกหลังเล็ก",
        "hanzi": "那边那座矮楼是图书馆。",
        "pinyin": "Nà biān nà zuò ǎi lóu shì tú shū guǎn.",
        "thaiMeaning": "ตึกเตี้ยตรงนั้นคือห้องสมุด"
      }
    ]
  },
  {
    "id": "v127",
    "hanzi": "重",
    "pinyin": "zhòng",
    "thaiMeaning": "หนัก",
    "example": {
      "hanzi": "太重了。",
      "pinyin": "Tài zhòng le.",
      "thaiMeaning": "หนักเกินไป"
    },
    "examples": [
      {
        "scenario": "ขอให้ช่วยยกกระเป๋าหนัก",
        "hanzi": "这个包很重，帮我拿一下。",
        "pinyin": "Zhè ge bāo hěn zhòng, bāng wǒ ná yí xià.",
        "thaiMeaning": "กระเป๋าใบนี้หนักมาก ช่วยฉันถือหน่อย"
      },
      {
        "scenario": "ถามน้ำหนักสิ่งของ",
        "hanzi": "这个箱子有多重？",
        "pinyin": "Zhè ge xiāng zǐ yǒu duō chóng?",
        "thaiMeaning": "กล่องนี้หนักเท่าไร?"
      },
      {
        "scenario": "เตือนว่าอย่าวางของหนักบนโต๊ะ",
        "hanzi": "不要把重东西放在这张桌子上。",
        "pinyin": "Bú yào bǎ zhòng dōng xī fàng zài zhè zhāng zhuō zi shàng.",
        "thaiMeaning": "อย่าวางของหนักบนโต๊ะตัวนี้"
      }
    ]
  },
  {
    "id": "v128",
    "hanzi": "轻",
    "pinyin": "qīng",
    "thaiMeaning": "เบา",
    "example": {
      "hanzi": "很轻。",
      "pinyin": "Hěn qīng.",
      "thaiMeaning": "เบามาก"
    },
    "examples": [
      {
        "scenario": "ชมว่ากระเป๋าเดินทางเบา",
        "hanzi": "这个行李箱很轻。",
        "pinyin": "Zhè ge xíng li xiāng hěn qīng.",
        "thaiMeaning": "กระเป๋าเดินทางใบนี้เบามาก"
      },
      {
        "scenario": "ขอให้ปิดประตูเบาๆ",
        "hanzi": "请轻一点关门。",
        "pinyin": "Qǐng qīng yì diǎn guān mén.",
        "thaiMeaning": "กรุณาปิดประตูเบาๆ"
      },
      {
        "scenario": "เลือกของที่เบากว่า",
        "hanzi": "我要那个比较轻的。",
        "pinyin": "Wǒ yào nà ge bǐ jiào qīng de.",
        "thaiMeaning": "ฉันเอาอันที่เบากว่า"
      }
    ]
  },
  {
    "id": "v129",
    "hanzi": "新",
    "pinyin": "xīn",
    "thaiMeaning": "ใหม่",
    "example": {
      "hanzi": "买新书。",
      "pinyin": "Mǎi xīn shū.",
      "thaiMeaning": "ซื้อหนังสือใหม่"
    },
    "examples": [
      {
        "scenario": "อวดโทรศัพท์เครื่องใหม่",
        "hanzi": "我买了一部新手机。",
        "pinyin": "Wǒ mǎi le yí bù xīn shǒu jī.",
        "thaiMeaning": "ฉันซื้อโทรศัพท์เครื่องใหม่"
      },
      {
        "scenario": "แนะนำเพื่อนร่วมงานคนใหม่",
        "hanzi": "这是我们公司的新同事。",
        "pinyin": "Zhè shì wǒ men gōng sī de xīn tóng shì.",
        "thaiMeaning": "นี่คือเพื่อนร่วมงานคนใหม่ของบริษัทเรา"
      },
      {
        "scenario": "บอกว่าข่าวนี้ใหม่สำหรับตน",
        "hanzi": "这个消息对我来说很新。",
        "pinyin": "Zhè ge xiāo xī duì wǒ lái shuō hěn xīn.",
        "thaiMeaning": "ข่าวนี้เป็นเรื่องใหม่สำหรับฉัน"
      }
    ]
  },
  {
    "id": "v130",
    "hanzi": "旧",
    "pinyin": "jiù",
    "thaiMeaning": "เก่า",
    "example": {
      "hanzi": "旧鞋子。",
      "pinyin": "Jiù xiézi.",
      "thaiMeaning": "รองเท้าเก่า"
    },
    "examples": [
      {
        "scenario": "บอกว่าเสื้อตัวเก่ายังใส่ได้",
        "hanzi": "这件旧衣服还能穿。",
        "pinyin": "Zhè jiàn jiù yī fu hái néng chuān.",
        "thaiMeaning": "เสื้อเก่าตัวนี้ยังใส่ได้"
      },
      {
        "scenario": "เปลี่ยนคอมพิวเตอร์เครื่องเก่า",
        "hanzi": "我的电脑太旧了，想换新的。",
        "pinyin": "Wǒ de diàn nǎo tài jiù le, xiǎng huàn xīn de.",
        "thaiMeaning": "คอมพิวเตอร์ฉันเก่าเกินไป อยากเปลี่ยนเครื่องใหม่"
      },
      {
        "scenario": "กลับไปเยี่ยมบ้านหลังเดิม",
        "hanzi": "周末我回了一趟旧家。",
        "pinyin": "Zhōu mò wǒ huí le yí tàng jiù jiā.",
        "thaiMeaning": "สุดสัปดาห์ฉันกลับไปบ้านเก่ามา"
      }
    ]
  },
  {
    "id": "v131",
    "hanzi": "我",
    "pinyin": "wǒ",
    "thaiMeaning": "ฉัน / ผม",
    "example": {
      "hanzi": "我是。",
      "pinyin": "Wǒ shì.",
      "thaiMeaning": "ฉันคือ"
    },
    "examples": [
      {
        "scenario": "แนะนำตัวเอง",
        "hanzi": "你好，我叫安娜。",
        "pinyin": "Nǐ hǎo, wǒ jiào ān nà.",
        "thaiMeaning": "สวัสดี ฉันชื่อแอนนา"
      },
      {
        "scenario": "บอกความต้องการของตัวเอง",
        "hanzi": "我想喝一杯水。",
        "pinyin": "Wǒ xiǎng hē yì bēi shuǐ.",
        "thaiMeaning": "ฉันอยากดื่มน้ำหนึ่งแก้ว"
      },
      {
        "scenario": "ตอบว่าเป็นคนทำสิ่งนั้น",
        "hanzi": "这件事是我做的。",
        "pinyin": "Zhè jiàn shì shì wǒ zuò de.",
        "thaiMeaning": "เรื่องนี้ฉันเป็นคนทำ"
      }
    ]
  },
  {
    "id": "v132",
    "hanzi": "你",
    "pinyin": "nǐ",
    "thaiMeaning": "คุณ / เธอ",
    "example": {
      "hanzi": "你好。",
      "pinyin": "Nǐ hǎo.",
      "thaiMeaning": "สวัสดีคุณ"
    },
    "examples": [
      {
        "scenario": "ถามชื่อคนที่เพิ่งพบ",
        "hanzi": "你叫什么名字？",
        "pinyin": "Nǐ jiào shén me míng zì?",
        "thaiMeaning": "คุณชื่ออะไร?"
      },
      {
        "scenario": "ถามสารทุกข์สุกดิบ",
        "hanzi": "你今天怎么样？",
        "pinyin": "Nǐ jīn tiān zěn me yàng?",
        "thaiMeaning": "วันนี้คุณเป็นอย่างไรบ้าง?"
      },
      {
        "scenario": "มอบของให้อีกฝ่าย",
        "hanzi": "这个礼物送给你。",
        "pinyin": "Zhè ge lǐ wù sòng gěi nǐ.",
        "thaiMeaning": "ของขวัญชิ้นนี้มอบให้คุณ"
      }
    ]
  },
  {
    "id": "v133",
    "hanzi": "他",
    "pinyin": "tā",
    "thaiMeaning": "เขา (ผู้ชาย)",
    "example": {
      "hanzi": "他是。",
      "pinyin": "Tā shì.",
      "thaiMeaning": "เขาคือ"
    },
    "examples": [
      {
        "scenario": "แนะนำผู้ชายคนหนึ่ง",
        "hanzi": "他是我的同事。",
        "pinyin": "Tā shì wǒ de tóng shì.",
        "thaiMeaning": "เขาเป็นเพื่อนร่วมงานของฉัน"
      },
      {
        "scenario": "บอกว่าเขายังไม่มา",
        "hanzi": "他今天还没来。",
        "pinyin": "Tā jīn tiān hái méi lái.",
        "thaiMeaning": "วันนี้เขายังไม่มา"
      },
      {
        "scenario": "ถามว่าเขากำลังทำอะไร",
        "hanzi": "他在做什么？",
        "pinyin": "Tā zài zuò shén me?",
        "thaiMeaning": "เขากำลังทำอะไร?"
      }
    ]
  },
  {
    "id": "v134",
    "hanzi": "她",
    "pinyin": "tā",
    "thaiMeaning": "เธอ (ผู้หญิง)",
    "example": {
      "hanzi": "她是。",
      "pinyin": "Tā shì.",
      "thaiMeaning": "เธอคือ"
    },
    "examples": [
      {
        "scenario": "แนะนำผู้หญิงคนหนึ่ง",
        "hanzi": "她是我的姐姐。",
        "pinyin": "Tā shì wǒ de jiě jie.",
        "thaiMeaning": "เธอเป็นพี่สาวของฉัน"
      },
      {
        "scenario": "บอกว่าเธอพูดจีนได้ดี",
        "hanzi": "她中文说得很好。",
        "pinyin": "Tā zhōng wén shuō dé hěn hǎo.",
        "thaiMeaning": "เธอพูดภาษาจีนได้ดีมาก"
      },
      {
        "scenario": "ถามว่าเธอไปไหน",
        "hanzi": "她去哪儿了？",
        "pinyin": "Tā qù nǎ ér le?",
        "thaiMeaning": "เธอไปไหนแล้ว?"
      }
    ]
  },
  {
    "id": "v135",
    "hanzi": "我们",
    "pinyin": "wǒmen",
    "thaiMeaning": "พวกเรา",
    "example": {
      "hanzi": "我们走。",
      "pinyin": "Wǒmen zǒu.",
      "thaiMeaning": "พวกเราไปกัน"
    },
    "examples": [
      {
        "scenario": "ชวนกันออกเดินทาง",
        "hanzi": "我们走吧。",
        "pinyin": "Wǒ men zǒu ba.",
        "thaiMeaning": "พวกเราไปกันเถอะ"
      },
      {
        "scenario": "บอกตำแหน่งที่นัดพบ",
        "hanzi": "我们在门口见。",
        "pinyin": "Wǒ men zài mén kǒu jiàn.",
        "thaiMeaning": "พวกเราเจอกันที่หน้าประตู"
      },
      {
        "scenario": "เล่าแผนของกลุ่ม",
        "hanzi": "我们明天一起开会。",
        "pinyin": "Wǒ men míng tiān yì qǐ kāi huì.",
        "thaiMeaning": "พรุ่งนี้พวกเราประชุมด้วยกัน"
      }
    ]
  },
  {
    "id": "v136",
    "hanzi": "什么",
    "pinyin": "shénme",
    "thaiMeaning": "อะไร",
    "example": {
      "hanzi": "这是什么？",
      "pinyin": "Zhè shì shénme?",
      "thaiMeaning": "นี่คืออะไร"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "这是什么？",
        "pinyin": "Zhè shì shén me?",
        "thaiMeaning": "นี่คืออะไร"
      },
      {
        "scenario": "ถามว่าอีกฝ่ายกำลังทำอะไร",
        "hanzi": "你在做什么？",
        "pinyin": "Nǐ zài zuò shén me?",
        "thaiMeaning": "คุณกำลังทำอะไร?"
      },
      {
        "scenario": "ถามความต้องการของลูกค้า",
        "hanzi": "请问，您想喝什么？",
        "pinyin": "Qǐng wèn, nín xiǎng hē shén me?",
        "thaiMeaning": "ขอถามหน่อย คุณต้องการดื่มอะไร?"
      }
    ]
  },
  {
    "id": "v137",
    "hanzi": "谁",
    "pinyin": "shéi",
    "thaiMeaning": "ใคร",
    "example": {
      "hanzi": "他是谁？",
      "pinyin": "Tā shì shéi?",
      "thaiMeaning": "เขาคือใคร"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "他是谁？",
        "pinyin": "Tā shì shuí?",
        "thaiMeaning": "เขาคือใคร"
      },
      {
        "scenario": "ถามว่าใครโทรมา",
        "hanzi": "刚才是谁打来的电话？",
        "pinyin": "Gāng cái shì shuí dǎ lái de diàn huà?",
        "thaiMeaning": "เมื่อครู่นี้ใครโทรมา?"
      },
      {
        "scenario": "ถามเจ้าของสิ่งของ",
        "hanzi": "这把雨伞是谁的？",
        "pinyin": "Zhè bǎ yǔ sǎn shì shuí de?",
        "thaiMeaning": "ร่มคันนี้เป็นของใคร?"
      }
    ]
  },
  {
    "id": "v138",
    "hanzi": "怎么",
    "pinyin": "zěnme",
    "thaiMeaning": "อย่างไร / ยังไง",
    "example": {
      "hanzi": "怎么走？",
      "pinyin": "Zěnme zǒu?",
      "thaiMeaning": "ไปยังไง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "怎么走？",
        "pinyin": "Zěn me zǒu?",
        "thaiMeaning": "ไปยังไง"
      },
      {
        "scenario": "ถามวิธีใช้เครื่อง",
        "hanzi": "这个怎么用？",
        "pinyin": "Zhè ge zěn me yòng?",
        "thaiMeaning": "สิ่งนี้ใช้อย่างไร?"
      },
      {
        "scenario": "ถามเส้นทางไปสถานี",
        "hanzi": "去车站怎么走？",
        "pinyin": "Qù chē zhàn zěn me zǒu?",
        "thaiMeaning": "ไปสถานีรถเดินทางอย่างไร?"
      }
    ]
  },
  {
    "id": "v139",
    "hanzi": "为什么",
    "pinyin": "wèishénme",
    "thaiMeaning": "ทำไม",
    "example": {
      "hanzi": "为什么？",
      "pinyin": "Wèishénme?",
      "thaiMeaning": "ทำไมล่ะ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "为什么？",
        "pinyin": "Wèi shén me?",
        "thaiMeaning": "ทำไมล่ะ"
      },
      {
        "scenario": "ถามเหตุผลที่มาสาย",
        "hanzi": "你今天为什么迟到？",
        "pinyin": "Nǐ jīn tiān wèi shén me chí dào?",
        "thaiMeaning": "วันนี้ทำไมคุณถึงมาสาย?"
      },
      {
        "scenario": "สงสัยว่าร้านปิด",
        "hanzi": "这家店为什么没开门？",
        "pinyin": "Zhè jiā diàn wèi shén me méi kāi mén?",
        "thaiMeaning": "ทำไมร้านนี้ยังไม่เปิด?"
      }
    ]
  },
  {
    "id": "v140",
    "hanzi": "哪儿",
    "pinyin": "nǎr",
    "thaiMeaning": "ที่ไหน",
    "example": {
      "hanzi": "去哪儿？",
      "pinyin": "Qù nǎr?",
      "thaiMeaning": "ไปที่ไหน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "去哪儿？",
        "pinyin": "Qù nǎ ér?",
        "thaiMeaning": "ไปที่ไหน"
      },
      {
        "scenario": "ถามว่าจะไปที่ไหน",
        "hanzi": "你要去哪儿？",
        "pinyin": "Nǐ yào qù nǎ ér?",
        "thaiMeaning": "คุณจะไปไหน?"
      },
      {
        "scenario": "ถามตำแหน่งห้องน้ำ",
        "hanzi": "请问，洗手间在哪儿？",
        "pinyin": "Qǐng wèn, xǐ shǒu jiān zài nǎ ér?",
        "thaiMeaning": "ขอถามหน่อย ห้องน้ำอยู่ที่ไหน?"
      }
    ]
  },
  {
    "id": "v141",
    "hanzi": "谢谢",
    "pinyin": "xièxie",
    "thaiMeaning": "ขอบคุณ",
    "example": {
      "hanzi": "谢谢你。",
      "pinyin": "Xièxie nǐ.",
      "thaiMeaning": "ขอบคุณนะ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "谢谢你。",
        "pinyin": "Xiè xiè nǐ.",
        "thaiMeaning": "ขอบคุณนะ"
      },
      {
        "scenario": "ขอบคุณเพื่อนที่ช่วยงาน",
        "hanzi": "谢谢你来帮我。",
        "pinyin": "Xiè xiè nǐ lái bāng wǒ.",
        "thaiMeaning": "ขอบคุณที่มาช่วยฉัน"
      },
      {
        "scenario": "ขอบคุณพนักงานหลังรับของ",
        "hanzi": "我拿到了，谢谢！",
        "pinyin": "Wǒ ná dào le, xiè xiè!",
        "thaiMeaning": "ฉันได้รับแล้ว ขอบคุณ!"
      }
    ]
  },
  {
    "id": "v142",
    "hanzi": "不客气",
    "pinyin": "bú kèqi",
    "thaiMeaning": "ด้วยความยินดี / ไม่เป็นไร",
    "example": {
      "hanzi": "不用谢，不客气。",
      "pinyin": "Bú yòng xiè, bú kèqi.",
      "thaiMeaning": "ไม่ต้องขอบคุณ ด้วยความยินดี"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "不用谢，不客气。",
        "pinyin": "Bú yòng xiè, bú kè qì.",
        "thaiMeaning": "ไม่ต้องขอบคุณ ด้วยความยินดี"
      },
      {
        "scenario": "ตอบรับคำขอบคุณ",
        "hanzi": "不客气，这是我应该做的。",
        "pinyin": "Bú kè qì, zhè shì wǒ yīng gāi zuò de.",
        "thaiMeaning": "ไม่เป็นไร นี่เป็นสิ่งที่ฉันควรทำ"
      },
      {
        "scenario": "บอกเพื่อนว่าไม่ต้องเกรงใจ",
        "hanzi": "都是朋友，不客气。",
        "pinyin": "Dōu shì péng yǒu, bú kè qì.",
        "thaiMeaning": "เป็นเพื่อนกันทั้งนั้น ไม่ต้องเกรงใจ"
      }
    ]
  },
  {
    "id": "v143",
    "hanzi": "对不起",
    "pinyin": "duìbuqǐ",
    "thaiMeaning": "ขอโทษ",
    "example": {
      "hanzi": "对不起，我迟到了。",
      "pinyin": "Duìbuqǐ, wǒ chídào le.",
      "thaiMeaning": "ขอโทษด้วย ฉันมาสาย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "对不起，我迟到了。",
        "pinyin": "Duì bù qǐ, wǒ chí dào le.",
        "thaiMeaning": "ขอโทษด้วย ฉันมาสาย"
      },
      {
        "scenario": "ขอโทษที่มาสาย",
        "hanzi": "对不起，让你久等了。",
        "pinyin": "Duì bù qǐ, ràng nǐ jiǔ děng le.",
        "thaiMeaning": "ขอโทษที่ทำให้คุณรอนาน"
      },
      {
        "scenario": "ขอโทษที่โทรผิด",
        "hanzi": "对不起，我打错电话了。",
        "pinyin": "Duì bù qǐ, wǒ dǎ cuò diàn huà le.",
        "thaiMeaning": "ขอโทษ ฉันโทรผิดเบอร์"
      }
    ]
  },
  {
    "id": "v144",
    "hanzi": "请",
    "pinyin": "qǐng",
    "thaiMeaning": "เชิญ / กรุณา",
    "example": {
      "hanzi": "请坐。",
      "pinyin": "Qǐng zuò.",
      "thaiMeaning": "เชิญนั่ง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "请坐。",
        "pinyin": "Qǐng zuò.",
        "thaiMeaning": "เชิญนั่ง"
      },
      {
        "scenario": "เชิญแขกเข้ามาด้านใน",
        "hanzi": "外面很热，请进。",
        "pinyin": "Wài miàn hěn rè, qǐng jìn.",
        "thaiMeaning": "ข้างนอกร้อนมาก เชิญเข้ามา"
      },
      {
        "scenario": "ขอให้อีกฝ่ายกรอกชื่อ",
        "hanzi": "请在这里写名字。",
        "pinyin": "Qǐng zài zhè lǐ xiě míng zì.",
        "thaiMeaning": "กรุณาเขียนชื่อตรงนี้"
      }
    ]
  },
  {
    "id": "v145",
    "hanzi": "欢迎",
    "pinyin": "huānyíng",
    "thaiMeaning": "ยินดีต้อนรับ",
    "example": {
      "hanzi": "欢迎光临。",
      "pinyin": "Huānyíng guānglín.",
      "thaiMeaning": "ยินดีต้อนรับครับ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "欢迎光临。",
        "pinyin": "Huān yíng guāng lín.",
        "thaiMeaning": "ยินดีต้อนรับครับ"
      },
      {
        "scenario": "ต้อนรับแขกเข้าบ้าน",
        "hanzi": "欢迎来我家做客。",
        "pinyin": "Huān yíng lái wǒ jiā zuò kè.",
        "thaiMeaning": "ยินดีต้อนรับมาเป็นแขกที่บ้านฉัน"
      },
      {
        "scenario": "พนักงานต้อนรับลูกค้า",
        "hanzi": "欢迎光临，请问几位？",
        "pinyin": "Huān yíng guāng lín, qǐng wèn jǐ wèi?",
        "thaiMeaning": "ยินดีต้อนรับ มากี่ท่านครับ?"
      }
    ]
  },
  {
    "id": "v146",
    "hanzi": "当然",
    "pinyin": "dāngrán",
    "thaiMeaning": "แน่นอน",
    "example": {
      "hanzi": "当然可以。",
      "pinyin": "Dāngrán kěyǐ.",
      "thaiMeaning": "ย่อมได้แน่นอน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "当然可以。",
        "pinyin": "Dāng rán kě yǐ.",
        "thaiMeaning": "ย่อมได้แน่นอน"
      },
      {
        "scenario": "ตอบตกลงให้ยืมของ",
        "hanzi": "当然可以，你拿去用吧。",
        "pinyin": "Dāng rán kě yǐ, nǐ ná qù yòng ba.",
        "thaiMeaning": "ได้แน่นอน คุณเอาไปใช้ได้เลย"
      },
      {
        "scenario": "ยืนยันว่าจะไปตามนัด",
        "hanzi": "我当然会去，放心吧。",
        "pinyin": "Wǒ dāng rán huì qù, fàng xīn ba.",
        "thaiMeaning": "แน่นอนว่าฉันจะไป วางใจได้"
      }
    ]
  },
  {
    "id": "v147",
    "hanzi": "可以",
    "pinyin": "kěyǐ",
    "thaiMeaning": "ได้ / สามารถ",
    "example": {
      "hanzi": "没问题，可以。",
      "pinyin": "Méi wèntí, kěyǐ.",
      "thaiMeaning": "ไม่มีปัญหา ได้เลย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "没问题，可以。",
        "pinyin": "Méi wèn tí, kě yǐ.",
        "thaiMeaning": "ไม่มีปัญหา ได้เลย"
      },
      {
        "scenario": "ขออนุญาตนั่งตรงนี้",
        "hanzi": "我可以坐这里吗？",
        "pinyin": "Wǒ kě yǐ zuò zhè lǐ ma?",
        "thaiMeaning": "ฉันนั่งตรงนี้ได้ไหม?"
      },
      {
        "scenario": "บอกว่าสามารถจ่ายด้วยบัตร",
        "hanzi": "这里可以刷信用卡。",
        "pinyin": "Zhè lǐ kě yǐ shuā xìn yòng kǎ.",
        "thaiMeaning": "ที่นี่สามารถจ่ายด้วยบัตรเครดิตได้"
      }
    ]
  },
  {
    "id": "v148",
    "hanzi": "没问题",
    "pinyin": "méi wèntí",
    "thaiMeaning": "ไม่มีปัญหา",
    "example": {
      "hanzi": "好的，没问题。",
      "pinyin": "Hǎo de, méi wèntí.",
      "thaiMeaning": "โอเค ไม่มีปัญหา"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "好的，没问题。",
        "pinyin": "Hǎo de, méi wèn tí.",
        "thaiMeaning": "โอเค ไม่มีปัญหา"
      },
      {
        "scenario": "รับปากว่าจะช่วย",
        "hanzi": "没问题，我来帮你。",
        "pinyin": "Méi wèn tí, wǒ lái bāng nǐ.",
        "thaiMeaning": "ไม่มีปัญหา ฉันจะช่วยคุณ"
      },
      {
        "scenario": "ยืนยันว่าจะทำงานเสร็จทัน",
        "hanzi": "明天完成，没问题。",
        "pinyin": "Míng tiān wán chéng, méi wèn tí.",
        "thaiMeaning": "ทำเสร็จพรุ่งนี้ ไม่มีปัญหา"
      }
    ]
  },
  {
    "id": "v149",
    "hanzi": "干杯",
    "pinyin": "gānbēi",
    "thaiMeaning": "ชนแก้ว / ดื่มหมดแก้ว",
    "example": {
      "hanzi": "大家干杯！",
      "pinyin": "Dàjiā gānbēi!",
      "thaiMeaning": "ทุกคนชนแก้ว!"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "大家干杯！",
        "pinyin": "Dà jiā gān bēi!",
        "thaiMeaning": "ทุกคนชนแก้ว!"
      },
      {
        "scenario": "ฉลองวันเกิดกับเพื่อน",
        "hanzi": "祝你生日快乐，干杯！",
        "pinyin": "Zhù nǐ shēng rì kuài lè, gān bēi!",
        "thaiMeaning": "สุขสันต์วันเกิด ชนแก้ว!"
      },
      {
        "scenario": "ฉลองความสำเร็จของทีม",
        "hanzi": "为了我们的成功，干杯！",
        "pinyin": "Wèi le wǒ men de chéng gōng, gān bēi!",
        "thaiMeaning": "เพื่อความสำเร็จของพวกเรา ชนแก้ว!"
      }
    ]
  },
  {
    "id": "v150",
    "hanzi": "保重",
    "pinyin": "bǎozhòng",
    "thaiMeaning": "ดูแลตัวเองด้วย / รักษาสุขภาพ",
    "example": {
      "hanzi": "多保重。",
      "pinyin": "Duō bǎozhòng.",
      "thaiMeaning": "ดูแลตัวเองด้วยนะ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "多保重。",
        "pinyin": "Duō bǎo zhòng.",
        "thaiMeaning": "ดูแลตัวเองด้วยนะ"
      },
      {
        "scenario": "บอกลาเพื่อนที่กำลังเดินทาง",
        "hanzi": "一路平安，多保重。",
        "pinyin": "Yí lù píng ān, duō bǎo zhòng.",
        "thaiMeaning": "เดินทางปลอดภัย ดูแลตัวเองด้วย"
      },
      {
        "scenario": "เตือนคนป่วยให้พักผ่อน",
        "hanzi": "最近天气冷，你要保重身体。",
        "pinyin": "Zuì jìn tiān qì lěng, nǐ yào bǎo zhòng shēn tǐ.",
        "thaiMeaning": "ช่วงนี้อากาศหนาว คุณต้องดูแลสุขภาพ"
      }
    ]
  },
  {
    "id": "v151",
    "hanzi": "天",
    "pinyin": "tiān",
    "thaiMeaning": "ฟ้า / วัน",
    "example": {
      "hanzi": "晴天。",
      "pinyin": "Qíngtiān.",
      "thaiMeaning": "ท้องฟ้าแจ่มใส"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "晴天。",
        "pinyin": "Qíng tiān.",
        "thaiMeaning": "ท้องฟ้าแจ่มใส"
      },
      {
        "scenario": "บอกจำนวนวันที่จะพัก",
        "hanzi": "我在这里住三天。",
        "pinyin": "Wǒ zài zhè lǐ zhù sān tiān.",
        "thaiMeaning": "ฉันพักที่นี่สามวัน"
      },
      {
        "scenario": "ชมท้องฟ้าวันนี้",
        "hanzi": "今天的天很蓝。",
        "pinyin": "Jīn tiān de tiān hěn lán.",
        "thaiMeaning": "ท้องฟ้าวันนี้สีฟ้ามาก"
      }
    ]
  },
  {
    "id": "v152",
    "hanzi": "太阳",
    "pinyin": "tàiyáng",
    "thaiMeaning": "พระอาทิตย์ / ดวงอาทิตย์",
    "example": {
      "hanzi": "太阳升起。",
      "pinyin": "Tàiyáng shēngqǐ.",
      "thaiMeaning": "ดวงอาทิตย์ขึ้น"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "太阳升起。",
        "pinyin": "Tài yáng shēng qǐ.",
        "thaiMeaning": "ดวงอาทิตย์ขึ้น"
      },
      {
        "scenario": "บอกว่าแดดแรง",
        "hanzi": "太阳很大，戴上帽子吧。",
        "pinyin": "Tài yáng hěn dà, dài shàng mào zi ba.",
        "thaiMeaning": "แดดแรงมาก ใส่หมวกเถอะ"
      },
      {
        "scenario": "ดูพระอาทิตย์ตกริมทะเล",
        "hanzi": "我们一起看太阳下山。",
        "pinyin": "Wǒ men yì qǐ kàn tài yáng xià shān.",
        "thaiMeaning": "พวกเราดูพระอาทิตย์ตกด้วยกัน"
      }
    ]
  },
  {
    "id": "v153",
    "hanzi": "月亮",
    "pinyin": "yuèliang",
    "thaiMeaning": "พระจันทร์",
    "example": {
      "hanzi": "月亮很圆。",
      "pinyin": "Yuèliang hěn yuán.",
      "thaiMeaning": "พระจันทร์กลมโต"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "月亮很圆。",
        "pinyin": "Yuè liàng hěn yuán.",
        "thaiMeaning": "พระจันทร์กลมโต"
      },
      {
        "scenario": "ชมพระจันทร์ในคืนฟ้าใส",
        "hanzi": "今晚的月亮真漂亮。",
        "pinyin": "Jīn wǎn de yuè liàng zhēn piào liang.",
        "thaiMeaning": "พระจันทร์คืนนี้สวยจริงๆ"
      },
      {
        "scenario": "บอกเด็กให้มองพระจันทร์",
        "hanzi": "你看，月亮出来了。",
        "pinyin": "Nǐ kàn, yuè liàng chū lái le.",
        "thaiMeaning": "ดูสิ พระจันทร์ออกมาแล้ว"
      }
    ]
  },
  {
    "id": "v154",
    "hanzi": "风",
    "pinyin": "fēng",
    "thaiMeaning": "ลม",
    "example": {
      "hanzi": "刮风了。",
      "pinyin": "Guāfēng le.",
      "thaiMeaning": "ลมพัดแล้ว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "刮风了。",
        "pinyin": "Guā fēng le.",
        "thaiMeaning": "ลมพัดแล้ว"
      },
      {
        "scenario": "เตือนให้ปิดหน้าต่าง",
        "hanzi": "外面风很大，把窗户关上吧。",
        "pinyin": "Wài miàn fēng hěn dà, bǎ chuāng hù guān shàng ba.",
        "thaiMeaning": "ข้างนอกลมแรง ปิดหน้าต่างเถอะ"
      },
      {
        "scenario": "เดินเล่นรับลมเย็น",
        "hanzi": "今天的风很凉快。",
        "pinyin": "Jīn tiān de fēng hěn liáng kuai.",
        "thaiMeaning": "ลมวันนี้เย็นสบายมาก"
      }
    ]
  },
  {
    "id": "v155",
    "hanzi": "雨",
    "pinyin": "yǔ",
    "thaiMeaning": "ฝน",
    "example": {
      "hanzi": "下雨了。",
      "pinyin": "Xiàyǔ le.",
      "thaiMeaning": "ฝนตกแล้ว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "下雨了。",
        "pinyin": "Xià yǔ le.",
        "thaiMeaning": "ฝนตกแล้ว"
      },
      {
        "scenario": "บอกว่าฝนเริ่มตก",
        "hanzi": "雨越下越大了。",
        "pinyin": "Yǔ yuè xià yuè dà le.",
        "thaiMeaning": "ฝนตกหนักขึ้นเรื่อยๆ"
      },
      {
        "scenario": "ถามว่าได้นำร่มมาหรือไม่",
        "hanzi": "外面有雨，你带伞了吗？",
        "pinyin": "Wài miàn yǒu yǔ, nǐ dài sǎn le ma?",
        "thaiMeaning": "ข้างนอกมีฝน คุณเอาร่มมาไหม?"
      }
    ]
  },
  {
    "id": "v156",
    "hanzi": "雪",
    "pinyin": "xuě",
    "thaiMeaning": "หิมะ",
    "example": {
      "hanzi": "下雪了。",
      "pinyin": "Xiàxuě le.",
      "thaiMeaning": "หิมะตกแล้ว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "下雪了。",
        "pinyin": "Xià xuě le.",
        "thaiMeaning": "หิมะตกแล้ว"
      },
      {
        "scenario": "ตื่นเต้นที่เห็นหิมะ",
        "hanzi": "快看，外面下雪了！",
        "pinyin": "Kuài kàn, wài miàn xià xuě le!",
        "thaiMeaning": "ดูเร็ว ข้างนอกหิมะตกแล้ว!"
      },
      {
        "scenario": "เล่นหิมะกับเด็กๆ",
        "hanzi": "孩子们在雪里玩。",
        "pinyin": "Hái zi men zài xuě lǐ wán.",
        "thaiMeaning": "เด็กๆ กำลังเล่นอยู่ในหิมะ"
      }
    ]
  },
  {
    "id": "v157",
    "hanzi": "云",
    "pinyin": "yún",
    "thaiMeaning": "ก้อนเมฆ",
    "example": {
      "hanzi": "白云。",
      "pinyin": "Bái yún.",
      "thaiMeaning": "เมฆสีขาว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "白云。",
        "pinyin": "Bái yún.",
        "thaiMeaning": "เมฆสีขาว"
      },
      {
        "scenario": "บอกว่าท้องฟ้ามีเมฆมาก",
        "hanzi": "天上的云越来越多。",
        "pinyin": "Tiān shàng de yún yuè lái yuè duō.",
        "thaiMeaning": "เมฆบนท้องฟ้ามากขึ้นเรื่อยๆ"
      },
      {
        "scenario": "ชี้เมฆที่รูปร่างเหมือนสัตว์",
        "hanzi": "那朵云看起来像一只羊。",
        "pinyin": "Nà duǒ yún kàn qǐ lái xiàng yì zhī yáng.",
        "thaiMeaning": "เมฆก้อนนั้นดูเหมือนแกะตัวหนึ่ง"
      }
    ]
  },
  {
    "id": "v158",
    "hanzi": "花",
    "pinyin": "huā",
    "thaiMeaning": "ดอกไม้",
    "example": {
      "hanzi": "看花。",
      "pinyin": "Kàn huā.",
      "thaiMeaning": "ชมดอกไม้"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "看花。",
        "pinyin": "Kàn huā.",
        "thaiMeaning": "ชมดอกไม้"
      },
      {
        "scenario": "ซื้อดอกไม้ให้แม่",
        "hanzi": "我买了一束花送给妈妈。",
        "pinyin": "Wǒ mǎi le yí shù huā sòng gěi mā ma.",
        "thaiMeaning": "ฉันซื้อดอกไม้หนึ่งช่อให้แม่"
      },
      {
        "scenario": "เตือนว่าอย่าเด็ดดอกไม้",
        "hanzi": "公园里的花不能摘。",
        "pinyin": "Gōng yuán lǐ de huā bù néng zhāi.",
        "thaiMeaning": "ดอกไม้ในสวนห้ามเด็ด"
      }
    ]
  },
  {
    "id": "v159",
    "hanzi": "草",
    "pinyin": "cǎo",
    "thaiMeaning": "หญ้า / ต้นหญ้า",
    "example": {
      "hanzi": "绿草。",
      "pinyin": "Lǜ cǎo.",
      "thaiMeaning": "หญ้าสีเขียว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "绿草。",
        "pinyin": "Lǜ cǎo.",
        "thaiMeaning": "หญ้าสีเขียว"
      },
      {
        "scenario": "บอกเด็กไม่ให้เหยียบสนามหญ้า",
        "hanzi": "请不要踩草。",
        "pinyin": "Qǐng bú yào cǎi cǎo.",
        "thaiMeaning": "กรุณาอย่าเหยียบหญ้า"
      },
      {
        "scenario": "เล่าว่าหญ้าเขียวหลังฝนตก",
        "hanzi": "下雨后，草变绿了。",
        "pinyin": "Xià yǔ hòu, cǎo biàn lǜ le.",
        "thaiMeaning": "หลังฝนตก หญ้ากลายเป็นสีเขียว"
      }
    ]
  },
  {
    "id": "v160",
    "hanzi": "树",
    "pinyin": "shù",
    "thaiMeaning": "ต้นไม้",
    "example": {
      "hanzi": "大树。",
      "pinyin": "Dà shù.",
      "thaiMeaning": "ต้นไม้ใหญ่"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "大树。",
        "pinyin": "Dà shù.",
        "thaiMeaning": "ต้นไม้ใหญ่"
      },
      {
        "scenario": "พักใต้ต้นไม้",
        "hanzi": "我们在树下休息一下吧。",
        "pinyin": "Wǒ men zài shù xià xiū xi yí xià ba.",
        "thaiMeaning": "พวกเราพักใต้ต้นไม้สักหน่อย"
      },
      {
        "scenario": "ปลูกต้นไม้หลังบ้าน",
        "hanzi": "爸爸在房子后面种了一棵树。",
        "pinyin": "Bà ba zài fáng zi hòu miàn zhǒng le yì kē shù.",
        "thaiMeaning": "พ่อปลูกต้นไม้หนึ่งต้นหลังบ้าน"
      }
    ]
  },
  {
    "id": "v161",
    "hanzi": "狗",
    "pinyin": "gǒu",
    "thaiMeaning": "สุนัข / หมา",
    "example": {
      "hanzi": "小狗。",
      "pinyin": "Xiǎo gǒu.",
      "thaiMeaning": "ลูกหมา"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "小狗。",
        "pinyin": "Xiǎo gǒu.",
        "thaiMeaning": "ลูกหมา"
      },
      {
        "scenario": "แนะนำสุนัขที่บ้าน",
        "hanzi": "我家有一只小狗。",
        "pinyin": "Wǒ jiā yǒu yì zhī xiǎo gǒu.",
        "thaiMeaning": "บ้านฉันมีสุนัขตัวเล็กหนึ่งตัว"
      },
      {
        "scenario": "เตือนว่าอย่าเข้าใกล้สุนัขแปลกหน้า",
        "hanzi": "不要随便摸陌生的狗。",
        "pinyin": "Bú yào suí biàn mō mò shēng de gǒu.",
        "thaiMeaning": "อย่าลูบสุนัขแปลกหน้าตามใจ"
      }
    ]
  },
  {
    "id": "v162",
    "hanzi": "猫",
    "pinyin": "māo",
    "thaiMeaning": "แมว",
    "example": {
      "hanzi": "养猫。",
      "pinyin": "Yǎng māo.",
      "thaiMeaning": "เลี้ยงแมว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "养猫。",
        "pinyin": "Yǎng māo.",
        "thaiMeaning": "เลี้ยงแมว"
      },
      {
        "scenario": "ตามหาแมวที่ซ่อนอยู่",
        "hanzi": "我的猫躲在床下面。",
        "pinyin": "Wǒ de māo duǒ zài chuáng xià miàn.",
        "thaiMeaning": "แมวของฉันซ่อนอยู่ใต้เตียง"
      },
      {
        "scenario": "ให้อาหารแมว",
        "hanzi": "别忘了给猫吃东西。",
        "pinyin": "Bié wàng le gěi māo chī dōng xī.",
        "thaiMeaning": "อย่าลืมให้อาหารแมว"
      }
    ]
  },
  {
    "id": "v163",
    "hanzi": "鸟",
    "pinyin": "niǎo",
    "thaiMeaning": "นก",
    "example": {
      "hanzi": "飞鸟。",
      "pinyin": "Fēi niǎo.",
      "thaiMeaning": "นกบิน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "飞鸟。",
        "pinyin": "Fēi niǎo.",
        "thaiMeaning": "นกบิน"
      },
      {
        "scenario": "ดูนกเกาะบนต้นไม้",
        "hanzi": "树上停着一只鸟。",
        "pinyin": "Shù shàng tíng zhe yì zhī niǎo.",
        "thaiMeaning": "มีนกตัวหนึ่งเกาะอยู่บนต้นไม้"
      },
      {
        "scenario": "ได้ยินเสียงนกร้องตอนเช้า",
        "hanzi": "早上我听见鸟在叫。",
        "pinyin": "Zǎo shàng wǒ tīng jiàn niǎo zài jiào.",
        "thaiMeaning": "ตอนเช้าฉันได้ยินนกร้อง"
      }
    ]
  },
  {
    "id": "v164",
    "hanzi": "猪",
    "pinyin": "zhū",
    "thaiMeaning": "หมู",
    "example": {
      "hanzi": "猪肉。",
      "pinyin": "Zhūròu.",
      "thaiMeaning": "เนื้อหมู"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "猪肉。",
        "pinyin": "Zhū ròu.",
        "thaiMeaning": "เนื้อหมู"
      },
      {
        "scenario": "พาเด็กดูหมูในฟาร์ม",
        "hanzi": "农场里有很多猪。",
        "pinyin": "Nóng chǎng lǐ yǒu hěn duō zhū.",
        "thaiMeaning": "ในฟาร์มมีหมูหลายตัว"
      },
      {
        "scenario": "บอกว่าไม่กินเนื้อหมู",
        "hanzi": "我不吃猪肉。",
        "pinyin": "Wǒ bù chī zhū ròu.",
        "thaiMeaning": "ฉันไม่กินเนื้อหมู"
      }
    ]
  },
  {
    "id": "v165",
    "hanzi": "牛",
    "pinyin": "niú",
    "thaiMeaning": "วัว",
    "example": {
      "hanzi": "黄牛。",
      "pinyin": "Huángniú.",
      "thaiMeaning": "วัว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "黄牛。",
        "pinyin": "Huáng niú.",
        "thaiMeaning": "วัว"
      },
      {
        "scenario": "เห็นวัวกินหญ้า",
        "hanzi": "那头牛正在吃草。",
        "pinyin": "Nà tóu niú zhèng zài chī cǎo.",
        "thaiMeaning": "วัวตัวนั้นกำลังกินหญ้า"
      },
      {
        "scenario": "ซื้อนมวัวสด",
        "hanzi": "这是今天早上的牛奶。",
        "pinyin": "Zhè shì jīn tiān zǎo shàng de niú nǎi.",
        "thaiMeaning": "นี่คือนมวัวของเช้าวันนี้"
      }
    ]
  },
  {
    "id": "v166",
    "hanzi": "羊",
    "pinyin": "yáng",
    "thaiMeaning": "แกะ / แพะ",
    "example": {
      "hanzi": "羊肉。",
      "pinyin": "Yángròu.",
      "thaiMeaning": "เนื้อแกะ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "羊肉。",
        "pinyin": "Yáng ròu.",
        "thaiMeaning": "เนื้อแกะ"
      },
      {
        "scenario": "นับแกะในทุ่ง",
        "hanzi": "山上有一群羊。",
        "pinyin": "Shān shàng yǒu yì qún yáng.",
        "thaiMeaning": "บนภูเขามีแกะฝูงหนึ่ง"
      },
      {
        "scenario": "บอกว่าเสื้อตัวนี้ทำจากขนแกะ",
        "hanzi": "这件衣服是羊毛做的。",
        "pinyin": "Zhè jiàn yī fu shì yáng máo zuò de.",
        "thaiMeaning": "เสื้อตัวนี้ทำจากขนแกะ"
      }
    ]
  },
  {
    "id": "v167",
    "hanzi": "马",
    "pinyin": "mǎ",
    "thaiMeaning": "ม้า",
    "example": {
      "hanzi": "骑马。",
      "pinyin": "Qí mǎ.",
      "thaiMeaning": "ขี่ม้า"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "骑马。",
        "pinyin": "Qí mǎ.",
        "thaiMeaning": "ขี่ม้า"
      },
      {
        "scenario": "ลองขี่ม้าครั้งแรก",
        "hanzi": "我第一次骑马，有点紧张。",
        "pinyin": "Wǒ dì yī cì qí mǎ, yǒu diǎn jǐn zhāng.",
        "thaiMeaning": "ฉันขี่ม้าครั้งแรก รู้สึกตื่นเต้นนิดหน่อย"
      },
      {
        "scenario": "ดูม้าวิ่งในสนาม",
        "hanzi": "那匹马跑得很快。",
        "pinyin": "Nà pǐ mǎ pǎo dé hěn kuài.",
        "thaiMeaning": "ม้าตัวนั้นวิ่งเร็วมาก"
      }
    ]
  },
  {
    "id": "v168",
    "hanzi": "鸭",
    "pinyin": "yā",
    "thaiMeaning": "เป็ด",
    "example": {
      "hanzi": "烤鸭。",
      "pinyin": "Kǎoyā.",
      "thaiMeaning": "เป็ดย่าง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "烤鸭。",
        "pinyin": "Kǎo yā.",
        "thaiMeaning": "เป็ดย่าง"
      },
      {
        "scenario": "ดูเป็ดว่ายน้ำ",
        "hanzi": "几只鸭在水里游。",
        "pinyin": "Jǐ zhī yā zài shuǐ lǐ yóu.",
        "thaiMeaning": "เป็ดหลายตัวกำลังว่ายน้ำ"
      },
      {
        "scenario": "สั่งเป็ดย่างในร้านอาหาร",
        "hanzi": "我们点一份烤鸭吧。",
        "pinyin": "Wǒ men diǎn yí fèn kǎo yā ba.",
        "thaiMeaning": "พวกเราสั่งเป็ดย่างหนึ่งจานนะ"
      }
    ]
  },
  {
    "id": "v169",
    "hanzi": "头",
    "pinyin": "tóu",
    "thaiMeaning": "ศีรษะ / หัว",
    "example": {
      "hanzi": "低头。",
      "pinyin": "Dī tóu.",
      "thaiMeaning": "ก้มหัว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "低头。",
        "pinyin": "Dī tóu.",
        "thaiMeaning": "ก้มหัว"
      },
      {
        "scenario": "บอกอาการเจ็บศีรษะ",
        "hanzi": "我的头有点疼。",
        "pinyin": "Wǒ de tóu yǒu diǎn téng.",
        "thaiMeaning": "หัวของฉันปวดนิดหน่อย"
      },
      {
        "scenario": "เตือนให้ก้มศีรษะ",
        "hanzi": "小心上面，请低头。",
        "pinyin": "Xiǎo xīn shàng miàn, qǐng dī tóu.",
        "thaiMeaning": "ระวังด้านบน กรุณาก้มศีรษะ"
      }
    ]
  },
  {
    "id": "v170",
    "hanzi": "眼睛",
    "pinyin": "yǎnjīng",
    "thaiMeaning": "ดวงตา / ตา",
    "example": {
      "hanzi": "大眼睛。",
      "pinyin": "Dà yǎnjīng.",
      "thaiMeaning": "ตากลมโต"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "大眼睛。",
        "pinyin": "Dà yǎn jīng.",
        "thaiMeaning": "ตากลมโต"
      },
      {
        "scenario": "พักสายตาจากหน้าจอ",
        "hanzi": "看电脑久了，眼睛很累。",
        "pinyin": "Kàn diàn nǎo jiǔ le, yǎn jīng hěn lèi.",
        "thaiMeaning": "มองคอมพิวเตอร์นานแล้ว ตาล้ามาก"
      },
      {
        "scenario": "บอกว่าเข้าตา",
        "hanzi": "我的眼睛里好像进了东西。",
        "pinyin": "Wǒ de yǎn jīng lǐ hǎo xiàng jìn le dōng xī.",
        "thaiMeaning": "เหมือนมีอะไรเข้าตาฉัน"
      }
    ]
  },
  {
    "id": "v171",
    "hanzi": "耳朵",
    "pinyin": "ěrduo",
    "thaiMeaning": "หู / หูฟัง",
    "example": {
      "hanzi": "听耳朵。",
      "pinyin": "Tīng ěrduo.",
      "thaiMeaning": "ฟังด้วยหู"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "听耳朵。",
        "pinyin": "Tīng ěr duo.",
        "thaiMeaning": "ฟังด้วยหู"
      },
      {
        "scenario": "บอกแพทย์ว่าเจ็บหู",
        "hanzi": "医生，我的耳朵很疼。",
        "pinyin": "Yī shēng, wǒ de ěr duo hěn téng.",
        "thaiMeaning": "หมอครับ หูของฉันเจ็บมาก"
      },
      {
        "scenario": "เตือนว่าอย่าเปิดเพลงดัง",
        "hanzi": "音乐太大声，对耳朵不好。",
        "pinyin": "Yīn yuè tài dà shēng, duì ěr duo bù hǎo.",
        "thaiMeaning": "เพลงดังเกินไป ไม่ดีต่อหู"
      }
    ]
  },
  {
    "id": "v172",
    "hanzi": "鼻子",
    "pinyin": "bízi",
    "thaiMeaning": "จมูก",
    "example": {
      "hanzi": "高鼻子。",
      "pinyin": "Gāo bízi.",
      "thaiMeaning": "จมูกโด่ง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "高鼻子。",
        "pinyin": "Gāo bí zi.",
        "thaiMeaning": "จมูกโด่ง"
      },
      {
        "scenario": "เป็นหวัดและคัดจมูก",
        "hanzi": "我感冒了，鼻子不舒服。",
        "pinyin": "Wǒ gǎn mào le, bí zi bù shū fú.",
        "thaiMeaning": "ฉันเป็นหวัด จมูกไม่สบาย"
      },
      {
        "scenario": "ได้กลิ่นอาหารหอม",
        "hanzi": "我的鼻子闻到了香味。",
        "pinyin": "Wǒ de bí zi wén dào le xiāng wèi.",
        "thaiMeaning": "จมูกของฉันได้กลิ่นหอม"
      }
    ]
  },
  {
    "id": "v173",
    "hanzi": "嘴巴",
    "pinyin": "zuǐba",
    "thaiMeaning": "ปาก",
    "example": {
      "hanzi": "张嘴。",
      "pinyin": "Zhāng zuǐ.",
      "thaiMeaning": "อ้าปาก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "张嘴。",
        "pinyin": "Zhāng zuǐ.",
        "thaiMeaning": "อ้าปาก"
      },
      {
        "scenario": "ขอให้เด็กอ้าปาก",
        "hanzi": "张开嘴巴让我看看。",
        "pinyin": "Zhāng kāi zuǐ ba ràng wǒ kàn kàn.",
        "thaiMeaning": "อ้าปากให้ฉันดูหน่อย"
      },
      {
        "scenario": "เตือนว่าอย่าพูดตอนมีอาหารในปาก",
        "hanzi": "嘴巴里有东西时别说话。",
        "pinyin": "Zuǐ ba lǐ yǒu dōng xī shí bié shuō huà.",
        "thaiMeaning": "อย่าพูดตอนมีอาหารอยู่ในปาก"
      }
    ]
  },
  {
    "id": "v174",
    "hanzi": "手",
    "pinyin": "shǒu",
    "thaiMeaning": "มือ",
    "example": {
      "hanzi": "洗手。",
      "pinyin": "Xǐ shǒu.",
      "thaiMeaning": "ล้างมือ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "洗手。",
        "pinyin": "Xǐ shǒu.",
        "thaiMeaning": "ล้างมือ"
      },
      {
        "scenario": "เตือนให้ล้างมือก่อนกิน",
        "hanzi": "吃饭前先洗手。",
        "pinyin": "Chī fàn qián xiān xǐ shǒu.",
        "thaiMeaning": "ก่อนกินข้าวล้างมือก่อน"
      },
      {
        "scenario": "ขอให้ยกมือเมื่อต้องการตอบ",
        "hanzi": "知道答案的人请举手。",
        "pinyin": "Zhī dào dá àn de rén qǐng jǔ shǒu.",
        "thaiMeaning": "คนที่รู้คำตอบกรุณายกมือ"
      }
    ]
  },
  {
    "id": "v175",
    "hanzi": "脚",
    "pinyin": "jiǎo",
    "thaiMeaning": "เท้า / เท้าข้าง",
    "example": {
      "hanzi": "洗脚。",
      "pinyin": "Xǐ jiǎo.",
      "thaiMeaning": "ล้างเท้า"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "洗脚。",
        "pinyin": "Xǐ jiǎo.",
        "thaiMeaning": "ล้างเท้า"
      },
      {
        "scenario": "บอกว่าเดินจนเจ็บเท้า",
        "hanzi": "我走了很久，脚有点疼。",
        "pinyin": "Wǒ zǒu le hěn jiǔ, jiǎo yǒu diǎn téng.",
        "thaiMeaning": "ฉันเดินมานาน เท้าเจ็บนิดหน่อย"
      },
      {
        "scenario": "เตือนให้เช็ดเท้าก่อนเข้าบ้าน",
        "hanzi": "进屋前把脚擦干。",
        "pinyin": "Jìn wū qián bǎ jiǎo cā gān.",
        "thaiMeaning": "ก่อนเข้าบ้านเช็ดเท้าให้แห้ง"
      }
    ]
  },
  {
    "id": "v176",
    "hanzi": "头发",
    "pinyin": "tóufa",
    "thaiMeaning": "เส้นผม",
    "example": {
      "hanzi": "洗头发。",
      "pinyin": "Xǐ tóufa.",
      "thaiMeaning": "สระผม"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "洗头发。",
        "pinyin": "Xǐ tóu fa.",
        "thaiMeaning": "สระผม"
      },
      {
        "scenario": "บอกว่าจะไปตัดผม",
        "hanzi": "我的头发太长了，想去剪短。",
        "pinyin": "Wǒ de tóu fa tài cháng le, xiǎng qù jiǎn duǎn.",
        "thaiMeaning": "ผมของฉันยาวเกินไป อยากไปตัดให้สั้น"
      },
      {
        "scenario": "ชมสีผมใหม่",
        "hanzi": "你的新头发颜色很好看。",
        "pinyin": "Nǐ de xīn tóu fa yán sè hěn hǎo kàn.",
        "thaiMeaning": "สีผมใหม่ของคุณสวยมาก"
      }
    ]
  },
  {
    "id": "v177",
    "hanzi": "牙齿",
    "pinyin": "yáchǐ",
    "thaiMeaning": "ฟัน",
    "example": {
      "hanzi": "刷牙齿。",
      "pinyin": "Shuā yáchǐ.",
      "thaiMeaning": "แปรงฟัน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "刷牙齿。",
        "pinyin": "Shuā yá chǐ.",
        "thaiMeaning": "แปรงฟัน"
      },
      {
        "scenario": "เตือนให้แปรงฟันสะอาด",
        "hanzi": "每天要把牙齿刷干净。",
        "pinyin": "Měi tiān yào bǎ yá chǐ shuā gān jìng.",
        "thaiMeaning": "ทุกวันต้องแปรงฟันให้สะอาด"
      },
      {
        "scenario": "บอกหมอฟันว่าปวดฟัน",
        "hanzi": "医生，我这颗牙齿很疼。",
        "pinyin": "Yī shēng, wǒ zhè kē yá chǐ hěn téng.",
        "thaiMeaning": "หมอครับ ฟันซี่นี้ของฉันปวดมาก"
      }
    ]
  },
  {
    "id": "v178",
    "hanzi": "脸",
    "pinyin": "liǎn",
    "thaiMeaning": "ใบหน้า / หน้า",
    "example": {
      "hanzi": "洗脸。",
      "pinyin": "Xǐ liǎn.",
      "thaiMeaning": "ล้างหน้า"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "洗脸。",
        "pinyin": "Xǐ liǎn.",
        "thaiMeaning": "ล้างหน้า"
      },
      {
        "scenario": "บอกว่าใบหน้าแดงเพราะร้อน",
        "hanzi": "天气太热，他的脸都红了。",
        "pinyin": "Tiān qì tài rè, tā de liǎn dōu hóng le.",
        "thaiMeaning": "อากาศร้อนเกินไป หน้าเขาแดงหมดแล้ว"
      },
      {
        "scenario": "ล้างหน้าด้วยน้ำเย็น",
        "hanzi": "我用冷水洗了脸。",
        "pinyin": "Wǒ yòng lěng shuǐ xǐ le liǎn.",
        "thaiMeaning": "ฉันล้างหน้าด้วยน้ำเย็น"
      }
    ]
  },
  {
    "id": "v179",
    "hanzi": "门",
    "pinyin": "mén",
    "thaiMeaning": "ประตู",
    "example": {
      "hanzi": "推门。",
      "pinyin": "Tuī mén.",
      "thaiMeaning": "ผลักประตู"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "推门。",
        "pinyin": "Tuī mén.",
        "thaiMeaning": "ผลักประตู"
      },
      {
        "scenario": "บอกว่าประตูล็อกอยู่",
        "hanzi": "门锁上了，我进不去。",
        "pinyin": "Mén suǒ shàng le, wǒ jìn bú qù.",
        "thaiMeaning": "ประตูล็อกอยู่ ฉันเข้าไปไม่ได้"
      },
      {
        "scenario": "ได้ยินคนเคาะประตู",
        "hanzi": "有人在敲门。",
        "pinyin": "Yǒu rén zài qiāo mén.",
        "thaiMeaning": "มีคนกำลังเคาะประตู"
      }
    ]
  },
  {
    "id": "v180",
    "hanzi": "窗户",
    "pinyin": "chuānghu",
    "thaiMeaning": "หน้าต่าง",
    "example": {
      "hanzi": "开窗户。",
      "pinyin": "Kāi chuānghu.",
      "thaiMeaning": "เปิดหน้าต่าง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "开窗户。",
        "pinyin": "Kāi chuāng hù.",
        "thaiMeaning": "เปิดหน้าต่าง"
      },
      {
        "scenario": "เปิดหน้าต่างให้อากาศถ่ายเท",
        "hanzi": "房间太闷了，打开窗户吧。",
        "pinyin": "Fáng jiān tài mēn le, dǎ kāi chuāng hù ba.",
        "thaiMeaning": "ห้องอับเกินไป เปิดหน้าต่างเถอะ"
      },
      {
        "scenario": "ปิดหน้าต่างเพราะฝนตก",
        "hanzi": "下雨了，快关窗户。",
        "pinyin": "Xià yǔ le, kuài guān chuāng hù.",
        "thaiMeaning": "ฝนตกแล้ว รีบปิดหน้าต่าง"
      }
    ]
  },
  {
    "id": "v181",
    "hanzi": "床",
    "pinyin": "chuáng",
    "thaiMeaning": "เตียงนอน",
    "example": {
      "hanzi": "躺上床。",
      "pinyin": "Tǎng shàng chuáng.",
      "thaiMeaning": "นอนบนเตียง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "躺上床。",
        "pinyin": "Tǎng shàng chuáng.",
        "thaiMeaning": "นอนบนเตียง"
      },
      {
        "scenario": "บอกว่าอยากนอนพัก",
        "hanzi": "我太累了，想躺在床上。",
        "pinyin": "Wǒ tài lèi le, xiǎng tǎng zài chuáng shàng.",
        "thaiMeaning": "ฉันเหนื่อยมาก อยากนอนบนเตียง"
      },
      {
        "scenario": "จัดเตียงให้แขก",
        "hanzi": "客人来以前，我把床整理好了。",
        "pinyin": "Kè rén lái yǐ qián, wǒ bǎ chuáng zhěng lǐ hǎo le.",
        "thaiMeaning": "ก่อนแขกมา ฉันจัดเตียงเรียบร้อยแล้ว"
      }
    ]
  },
  {
    "id": "v182",
    "hanzi": "沙发",
    "pinyin": "shāfā",
    "thaiMeaning": "โซฟา",
    "example": {
      "hanzi": "坐沙发。",
      "pinyin": "Zuò shāfā.",
      "thaiMeaning": "นั่งโซฟา"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "坐沙发。",
        "pinyin": "Zuò shā fā.",
        "thaiMeaning": "นั่งโซฟา"
      },
      {
        "scenario": "เชิญแขกนั่งโซฟา",
        "hanzi": "请坐在沙发上休息。",
        "pinyin": "Qǐng zuò zài shā fā shàng xiū xi.",
        "thaiMeaning": "เชิญนั่งพักบนโซฟา"
      },
      {
        "scenario": "พบรีโมตใต้โซฟา",
        "hanzi": "遥控器在沙发下面。",
        "pinyin": "Yáo kòng qì zài shā fā xià miàn.",
        "thaiMeaning": "รีโมตอยู่ใต้โซฟา"
      }
    ]
  },
  {
    "id": "v183",
    "hanzi": "电视",
    "pinyin": "diànshì",
    "thaiMeaning": "โทรทัศน์ / ทีวี",
    "example": {
      "hanzi": "看电视。",
      "pinyin": "Kàn diànshì.",
      "thaiMeaning": "ดูทีวี"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "看电视。",
        "pinyin": "Kàn diàn shì.",
        "thaiMeaning": "ดูทีวี"
      },
      {
        "scenario": "ดูข่าวทางโทรทัศน์",
        "hanzi": "爸爸正在看电视新闻。",
        "pinyin": "Bà ba zhèng zài kàn diàn shì xīn wén.",
        "thaiMeaning": "พ่อกำลังดูข่าวทางโทรทัศน์"
      },
      {
        "scenario": "ขอให้ลดเสียงโทรทัศน์",
        "hanzi": "电视声音太大了，请调小一点。",
        "pinyin": "Diàn shì shēng yīn tài dà le, qǐng diào xiǎo yì diǎn.",
        "thaiMeaning": "เสียงโทรทัศน์ดังเกินไป กรุณาลดลงหน่อย"
      }
    ]
  },
  {
    "id": "v184",
    "hanzi": "冰箱",
    "pinyin": "bīngxiāng",
    "thaiMeaning": "ตู้เย็น",
    "example": {
      "hanzi": "开冰箱。",
      "pinyin": "Kāi bīngxiāng.",
      "thaiMeaning": "เปิดตู้เย็น"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "开冰箱。",
        "pinyin": "Kāi bīng xiāng.",
        "thaiMeaning": "เปิดตู้เย็น"
      },
      {
        "scenario": "เก็บนมในตู้เย็น",
        "hanzi": "把牛奶放进冰箱吧。",
        "pinyin": "Bǎ niú nǎi fàng jìn bīng xiāng ba.",
        "thaiMeaning": "เอานมใส่ตู้เย็นเถอะ"
      },
      {
        "scenario": "ตรวจของที่เหลือในตู้เย็น",
        "hanzi": "冰箱里还有什么菜？",
        "pinyin": "Bīng xiāng lǐ hái yǒu shén me cài?",
        "thaiMeaning": "ในตู้เย็นยังมีผักหรืออาหารอะไรบ้าง?"
      }
    ]
  },
  {
    "id": "v185",
    "hanzi": "空调",
    "pinyin": "kōngtiáo",
    "thaiMeaning": "เครื่องปรับอากาศ / แอร์",
    "example": {
      "hanzi": "开空调。",
      "pinyin": "Kāi kōngtiáo.",
      "thaiMeaning": "เปิดแอร์"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "开空调。",
        "pinyin": "Kāi kōng tiáo.",
        "thaiMeaning": "เปิดแอร์"
      },
      {
        "scenario": "ขอเปิดแอร์เพราะร้อน",
        "hanzi": "房间很热，可以开空调吗？",
        "pinyin": "Fáng jiān hěn rè, kě yǐ kāi kōng tiáo ma?",
        "thaiMeaning": "ห้องร้อนมาก เปิดแอร์ได้ไหม?"
      },
      {
        "scenario": "เตือนให้ปิดแอร์ก่อนออก",
        "hanzi": "出门前记得关空调。",
        "pinyin": "Chū mén qián jì de guān kōng tiáo.",
        "thaiMeaning": "ก่อนออกจากบ้านอย่าลืมปิดแอร์"
      }
    ]
  },
  {
    "id": "v186",
    "hanzi": "洗衣机",
    "pinyin": "xǐyījī",
    "thaiMeaning": "เครื่องซักผ้า",
    "example": {
      "hanzi": "用洗衣机。",
      "pinyin": "Yòng xǐyījī.",
      "thaiMeaning": "ใช้เครื่องซักผ้า"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "用洗衣机。",
        "pinyin": "Yòng xǐ yī jī.",
        "thaiMeaning": "ใช้เครื่องซักผ้า"
      },
      {
        "scenario": "ใส่เสื้อผ้าลงเครื่องซักผ้า",
        "hanzi": "我把衣服放进洗衣机了。",
        "pinyin": "Wǒ bǎ yī fu fàng jìn xǐ yī jī le.",
        "thaiMeaning": "ฉันใส่เสื้อผ้าลงเครื่องซักผ้าแล้ว"
      },
      {
        "scenario": "แจ้งว่าเครื่องซักผ้าเสีย",
        "hanzi": "洗衣机坏了，不能用了。",
        "pinyin": "Xǐ yī jī huài le, bù néng yòng le.",
        "thaiMeaning": "เครื่องซักผ้าเสีย ใช้ไม่ได้แล้ว"
      }
    ]
  },
  {
    "id": "v187",
    "hanzi": "筷子",
    "pinyin": "kuàizi",
    "thaiMeaning": "ตะเกียบ",
    "example": {
      "hanzi": "用筷子。",
      "pinyin": "Yòng kuàizi.",
      "thaiMeaning": "ใช้ตะเกียบ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "用筷子。",
        "pinyin": "Yòng kuài zi.",
        "thaiMeaning": "ใช้ตะเกียบ"
      },
      {
        "scenario": "ขอตะเกียบเพิ่มในร้านอาหาร",
        "hanzi": "麻烦再给我一双筷子。",
        "pinyin": "Má fán zài gěi wǒ yì shuāng kuài zi.",
        "thaiMeaning": "รบกวนขอตะเกียบเพิ่มอีกหนึ่งคู่"
      },
      {
        "scenario": "สอนเพื่อนใช้ตะเกียบ",
        "hanzi": "你会用筷子吗？",
        "pinyin": "Nǐ huì yòng kuài zi ma?",
        "thaiMeaning": "คุณใช้ตะเกียบเป็นไหม?"
      }
    ]
  },
  {
    "id": "v188",
    "hanzi": "碗",
    "pinyin": "wǎn",
    "thaiMeaning": "ชาม / ถ้วย",
    "example": {
      "hanzi": "拿个碗。",
      "pinyin": "Ná gè wǎn.",
      "thaiMeaning": "ขอชามใบหนึ่ง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "拿个碗。",
        "pinyin": "Ná gè wǎn.",
        "thaiMeaning": "ขอชามใบหนึ่ง"
      },
      {
        "scenario": "ตักข้าวใส่ชาม",
        "hanzi": "请给我盛一碗饭。",
        "pinyin": "Qǐng gěi wǒ shèng yì wǎn fàn.",
        "thaiMeaning": "กรุณาตักข้าวให้ฉันหนึ่งชาม"
      },
      {
        "scenario": "ล้างชามหลังกินข้าว",
        "hanzi": "吃完饭后我来洗碗。",
        "pinyin": "Chī wán fàn hòu wǒ lái xǐ wǎn.",
        "thaiMeaning": "หลังกินข้าวฉันจะล้างชามเอง"
      }
    ]
  },
  {
    "id": "v189",
    "hanzi": "盘子",
    "pinyin": "pánzi",
    "thaiMeaning": "จาน",
    "example": {
      "hanzi": "端盘子。",
      "pinyin": "Duān pánzi.",
      "thaiMeaning": "ถือจาน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "端盘子。",
        "pinyin": "Duān pán zi.",
        "thaiMeaning": "ถือจาน"
      },
      {
        "scenario": "วางอาหารลงจาน",
        "hanzi": "把水果放在盘子里。",
        "pinyin": "Bǎ shuǐ guǒ fàng zài pán zi lǐ.",
        "thaiMeaning": "วางผลไม้ไว้ในจาน"
      },
      {
        "scenario": "ขอจานสะอาดเพิ่ม",
        "hanzi": "这个盘子脏了，请换一个。",
        "pinyin": "Zhè ge pán zi zāng le, qǐng huàn yí gè.",
        "thaiMeaning": "จานใบนี้สกปรก กรุณาเปลี่ยนใบใหม่"
      }
    ]
  },
  {
    "id": "v190",
    "hanzi": "杯子",
    "pinyin": "bēizi",
    "thaiMeaning": "แก้วน้ำ / ถ้วย",
    "example": {
      "hanzi": "洗杯子。",
      "pinyin": "Xǐ bēizi.",
      "thaiMeaning": "ล้างแก้ว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "洗杯子。",
        "pinyin": "Xǐ bēi zi.",
        "thaiMeaning": "ล้างแก้ว"
      },
      {
        "scenario": "เติมน้ำลงแก้ว",
        "hanzi": "请把杯子倒满水。",
        "pinyin": "Qǐng bǎ bēi zi dǎo mǎn shuǐ.",
        "thaiMeaning": "กรุณาเติมน้ำให้เต็มแก้ว"
      },
      {
        "scenario": "เตือนว่าแก้วกำลังจะตก",
        "hanzi": "小心，杯子快掉了！",
        "pinyin": "Xiǎo xīn, bēi zi kuài diào le!",
        "thaiMeaning": "ระวัง แก้วกำลังจะตก!"
      }
    ]
  },
  {
    "id": "v191",
    "hanzi": "刀",
    "pinyin": "dāo",
    "thaiMeaning": "มีด",
    "example": {
      "hanzi": "拿刀。",
      "pinyin": "Ná dāo.",
      "thaiMeaning": "ถือมีด"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "拿刀。",
        "pinyin": "Ná dāo.",
        "thaiMeaning": "ถือมีด"
      },
      {
        "scenario": "ขอมีดหั่นผลไม้",
        "hanzi": "我需要一把刀切水果。",
        "pinyin": "Wǒ xū yào yì bǎ dāo qiè shuǐ guǒ.",
        "thaiMeaning": "ฉันต้องการมีดหนึ่งเล่มหั่นผลไม้"
      },
      {
        "scenario": "เตือนเด็กว่ามีดคม",
        "hanzi": "刀很锋利，小孩子不能碰。",
        "pinyin": "Dāo hěn fēng lì, xiǎo hái zi bù néng pèng.",
        "thaiMeaning": "มีดคมมาก เด็กห้ามจับ"
      }
    ]
  },
  {
    "id": "v192",
    "hanzi": "叉",
    "pinyin": "chā",
    "thaiMeaning": "ส้อม",
    "example": {
      "hanzi": "用叉子。",
      "pinyin": "Yòng chāzi.",
      "thaiMeaning": "ใช้ส้อม"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "用叉子。",
        "pinyin": "Yòng chā zi.",
        "thaiMeaning": "ใช้ส้อม"
      },
      {
        "scenario": "ขอส้อมแทนตะเกียบ",
        "hanzi": "我不会用筷子，请给我一把叉。",
        "pinyin": "Wǒ bú huì yòng kuài zi, qǐng gěi wǒ yì bǎ chā.",
        "thaiMeaning": "ฉันใช้ตะเกียบไม่เป็น ขอส้อมหนึ่งคัน"
      },
      {
        "scenario": "ใช้ส้อมกินผลไม้",
        "hanzi": "她用叉吃水果。",
        "pinyin": "Tā yòng chā chī shuǐ guǒ.",
        "thaiMeaning": "เธอใช้ส้อมกินผลไม้"
      }
    ]
  },
  {
    "id": "v193",
    "hanzi": "锅",
    "pinyin": "guō",
    "thaiMeaning": "หม้อ / กระทะ",
    "example": {
      "hanzi": "炒菜锅。",
      "pinyin": "Chǎocài guō.",
      "thaiMeaning": "กระทะผัด"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "炒菜锅。",
        "pinyin": "Chǎo cài guō.",
        "thaiMeaning": "กระทะผัด"
      },
      {
        "scenario": "ต้มน้ำในหม้อ",
        "hanzi": "锅里的水开了。",
        "pinyin": "Guō lǐ de shuǐ kāi le.",
        "thaiMeaning": "น้ำในหม้อเดือดแล้ว"
      },
      {
        "scenario": "ล้างหม้อหลังทำอาหาร",
        "hanzi": "做完饭别忘了洗锅。",
        "pinyin": "Zuò wán fàn bié wàng le xǐ guō.",
        "thaiMeaning": "ทำอาหารเสร็จอย่าลืมล้างหม้อ"
      }
    ]
  },
  {
    "id": "v194",
    "hanzi": "瓶子",
    "pinyin": "píngzi",
    "thaiMeaning": "ขวด",
    "example": {
      "hanzi": "水瓶。",
      "pinyin": "Shuǐpíng.",
      "thaiMeaning": "ขวดน้ำ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "水瓶。",
        "pinyin": "Shuǐ píng.",
        "thaiMeaning": "ขวดน้ำ"
      },
      {
        "scenario": "เปิดขวดไม่ออก",
        "hanzi": "这个瓶子我打不开。",
        "pinyin": "Zhè ge píng zi wǒ dǎ bù kāi.",
        "thaiMeaning": "ขวดนี้ฉันเปิดไม่ออก"
      },
      {
        "scenario": "นำขวดเปล่าไปทิ้ง",
        "hanzi": "这个瓶子空了，可以扔掉。",
        "pinyin": "Zhè ge píng zi kōng le, kě yǐ rēng diào.",
        "thaiMeaning": "ขวดนี้ว่างแล้ว ทิ้งได้"
      }
    ]
  },
  {
    "id": "v195",
    "hanzi": "书",
    "pinyin": "shū",
    "thaiMeaning": "หนังสือ",
    "example": {
      "hanzi": "看书。",
      "pinyin": "Kàn shū.",
      "thaiMeaning": "อ่านหนังสือ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "看书。",
        "pinyin": "Kàn shū.",
        "thaiMeaning": "อ่านหนังสือ"
      },
      {
        "scenario": "ยืมหนังสือจากห้องสมุด",
        "hanzi": "我从图书馆借了两本书。",
        "pinyin": "Wǒ cóng tú shū guǎn jiè le liǎng běn shū.",
        "thaiMeaning": "ฉันยืมหนังสือสองเล่มจากห้องสมุด"
      },
      {
        "scenario": "อ่านหนังสือบนรถไฟ",
        "hanzi": "他在车上看书。",
        "pinyin": "Tā zài chē shàng kàn shū.",
        "thaiMeaning": "เขาอ่านหนังสือบนรถ"
      }
    ]
  },
  {
    "id": "v196",
    "hanzi": "报纸",
    "pinyin": "bàozhǐ",
    "thaiMeaning": "หนังสือพิมพ์",
    "example": {
      "hanzi": "读报纸。",
      "pinyin": "Dú bàozhǐ.",
      "thaiMeaning": "อ่านหนังสือพิมพ์"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "读报纸。",
        "pinyin": "Dú bào zhǐ.",
        "thaiMeaning": "อ่านหนังสือพิมพ์"
      },
      {
        "scenario": "อ่านหนังสือพิมพ์ตอนเช้า",
        "hanzi": "爷爷每天早上看报纸。",
        "pinyin": "Yé ye měi tiān zǎo shàng kàn bào zhǐ.",
        "thaiMeaning": "คุณปู่อ่านหนังสือพิมพ์ทุกเช้า"
      },
      {
        "scenario": "ถามหาหนังสือพิมพ์วันนี้",
        "hanzi": "今天的报纸在哪里？",
        "pinyin": "Jīn tiān de bào zhǐ zài nǎ lǐ?",
        "thaiMeaning": "หนังสือพิมพ์วันนี้อยู่ที่ไหน?"
      }
    ]
  },
  {
    "id": "v197",
    "hanzi": "字典",
    "pinyin": "zìdiǎn",
    "thaiMeaning": "พจนานุกรม",
    "example": {
      "hanzi": "查字典。",
      "pinyin": "Chá zìdiǎn.",
      "thaiMeaning": "เปิดพจนานุกรม"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "查字典。",
        "pinyin": "Chá zì diǎn.",
        "thaiMeaning": "เปิดพจนานุกรม"
      },
      {
        "scenario": "เปิดพจนานุกรมหาคำ",
        "hanzi": "这个词我不懂，要查字典。",
        "pinyin": "Zhè ge cí wǒ bù dǒng, yào chá zì diǎn.",
        "thaiMeaning": "ฉันไม่เข้าใจคำนี้ ต้องเปิดพจนานุกรม"
      },
      {
        "scenario": "ยืมพจนานุกรมของเพื่อน",
        "hanzi": "你的字典可以借我吗？",
        "pinyin": "Nǐ de zì diǎn kě yǐ jiè wǒ ma?",
        "thaiMeaning": "ขอยืมพจนานุกรมของคุณได้ไหม?"
      }
    ]
  },
  {
    "id": "v198",
    "hanzi": "本子",
    "pinyin": "běnzi",
    "thaiMeaning": "สมุดบันทึก",
    "example": {
      "hanzi": "写本子。",
      "pinyin": "Xiě běnzi.",
      "thaiMeaning": "เขียนสมุด"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "写本子。",
        "pinyin": "Xiě běn zi.",
        "thaiMeaning": "เขียนสมุด"
      },
      {
        "scenario": "จดคำศัพท์ลงสมุด",
        "hanzi": "我把新词写在本子上。",
        "pinyin": "Wǒ bǎ xīn cí xiě zài běn zi shàng.",
        "thaiMeaning": "ฉันเขียนคำศัพท์ใหม่ลงในสมุด"
      },
      {
        "scenario": "ลืมสมุดไว้ที่บ้าน",
        "hanzi": "我的本子忘在家里了。",
        "pinyin": "Wǒ de běn zi wàng zài jiā lǐ le.",
        "thaiMeaning": "ฉันลืมสมุดไว้ที่บ้าน"
      }
    ]
  },
  {
    "id": "v199",
    "hanzi": "地图",
    "pinyin": "dìtú",
    "thaiMeaning": "แผนที่",
    "example": {
      "hanzi": "看地图。",
      "pinyin": "Kàn dìtú.",
      "thaiMeaning": "ดูแผนที่"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "看地图。",
        "pinyin": "Kàn dì tú.",
        "thaiMeaning": "ดูแผนที่"
      },
      {
        "scenario": "เปิดแผนที่หาเส้นทาง",
        "hanzi": "我看一下地图再走。",
        "pinyin": "Wǒ kàn yí xià dì tú zài zǒu.",
        "thaiMeaning": "ฉันขอดูแผนที่ก่อนแล้วค่อยไป"
      },
      {
        "scenario": "ชี้ตำแหน่งบนแผนที่",
        "hanzi": "你能在地图上指出机场吗？",
        "pinyin": "Nǐ néng zài dì tú shàng zhǐ chū jī chǎng ma?",
        "thaiMeaning": "คุณชี้สนามบินบนแผนที่ได้ไหม?"
      }
    ]
  },
  {
    "id": "v200",
    "hanzi": "照片",
    "pinyin": "zhàopiàn",
    "thaiMeaning": "รูปถ่าย / ภาพ",
    "example": {
      "hanzi": "拍照片。",
      "pinyin": "Pāi zhàopiàn.",
      "thaiMeaning": "ถ่ายรูป"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "拍照片。",
        "pinyin": "Pāi zhào piàn.",
        "thaiMeaning": "ถ่ายรูป"
      },
      {
        "scenario": "ให้เพื่อนดูรูปครอบครัว",
        "hanzi": "这是我们家的照片。",
        "pinyin": "Zhè shì wǒ men jiā de zhào piàn.",
        "thaiMeaning": "นี่คือรูปครอบครัวของเรา"
      },
      {
        "scenario": "ขอถ่ายรูปด้วยกัน",
        "hanzi": "我们一起拍张照片吧。",
        "pinyin": "Wǒ men yì qǐ pāi zhāng zhào piàn ba.",
        "thaiMeaning": "พวกเราถ่ายรูปด้วยกันหนึ่งรูปนะ"
      }
    ]
  },
  {
    "id": "v201",
    "hanzi": "红",
    "pinyin": "hóng",
    "thaiMeaning": "แดง / สีแดง",
    "example": {
      "hanzi": "红色。",
      "pinyin": "Hóngsè.",
      "thaiMeaning": "สีแดง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "红色。",
        "pinyin": "Hóng sè.",
        "thaiMeaning": "สีแดง"
      },
      {
        "scenario": "เลือกเสื้อสีแดง",
        "hanzi": "我想试试那件红衣服。",
        "pinyin": "Wǒ xiǎng shì shì nà jiàn hóng yī fu.",
        "thaiMeaning": "ฉันอยากลองเสื้อสีแดงตัวนั้น"
      },
      {
        "scenario": "บอกว่าสัญญาณไฟเป็นสีแดง",
        "hanzi": "现在是红灯，不能走。",
        "pinyin": "Xiàn zài shì hóng dēng, bù néng zǒu.",
        "thaiMeaning": "ตอนนี้ไฟแดง ยังไปไม่ได้"
      }
    ]
  },
  {
    "id": "v202",
    "hanzi": "黄",
    "pinyin": "huáng",
    "thaiMeaning": "เหลือง / สีเหลือง",
    "example": {
      "hanzi": "黄色。",
      "pinyin": "Huángsè.",
      "thaiMeaning": "สีเหลือง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "黄色。",
        "pinyin": "Huáng sè.",
        "thaiMeaning": "สีเหลือง"
      },
      {
        "scenario": "บรรยายสีของดอกไม้",
        "hanzi": "这些花都是黄色的。",
        "pinyin": "Zhè xiē huā dōu shì huáng sè de.",
        "thaiMeaning": "ดอกไม้เหล่านี้เป็นสีเหลืองทั้งหมด"
      },
      {
        "scenario": "เลือกกล้วยสีเหลือง",
        "hanzi": "黄色的香蕉已经熟了。",
        "pinyin": "Huáng sè de xiāng jiāo yǐ jīng shú le.",
        "thaiMeaning": "กล้วยสีเหลืองสุกแล้ว"
      }
    ]
  },
  {
    "id": "v203",
    "hanzi": "蓝",
    "pinyin": "lán",
    "thaiMeaning": "น้ำเงิน / ฟ้า",
    "example": {
      "hanzi": "蓝色。",
      "pinyin": "Lánsè.",
      "thaiMeaning": "สีน้ำเงิน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "蓝色。",
        "pinyin": "Lán sè.",
        "thaiMeaning": "สีน้ำเงิน"
      },
      {
        "scenario": "ชมท้องฟ้าสีฟ้า",
        "hanzi": "今天的天空特别蓝。",
        "pinyin": "Jīn tiān de tiān kōng tè bié lán.",
        "thaiMeaning": "ท้องฟ้าวันนี้สีฟ้ามาก"
      },
      {
        "scenario": "ขอเสื้อสีน้ำเงิน",
        "hanzi": "请给我看那件蓝衣服。",
        "pinyin": "Qǐng gěi wǒ kàn nà jiàn lán yī fu.",
        "thaiMeaning": "กรุณาให้ฉันดูเสื้อสีน้ำเงินตัวนั้น"
      }
    ]
  },
  {
    "id": "v204",
    "hanzi": "绿",
    "pinyin": "lǜ",
    "thaiMeaning": "เขียว / สีเขียว",
    "example": {
      "hanzi": "绿色。",
      "pinyin": "Lǜsè.",
      "thaiMeaning": "สีเขียว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "绿色。",
        "pinyin": "Lǜ sè.",
        "thaiMeaning": "สีเขียว"
      },
      {
        "scenario": "รอให้ไฟเขียว",
        "hanzi": "绿灯亮了，我们走吧。",
        "pinyin": "Lǜ dēng liàng le, wǒ men zǒu ba.",
        "thaiMeaning": "ไฟเขียวแล้ว พวกเราไปกันเถอะ"
      },
      {
        "scenario": "บรรยายใบไม้ในฤดูใบไม้ผลิ",
        "hanzi": "春天的树叶很绿。",
        "pinyin": "Chūn tiān de shù yè hěn lǜ.",
        "thaiMeaning": "ใบไม้ในฤดูใบไม้ผลิเขียวมาก"
      }
    ]
  },
  {
    "id": "v205",
    "hanzi": "白",
    "pinyin": "bái",
    "thaiMeaning": "ขาว / สีขาว",
    "example": {
      "hanzi": "白色。",
      "pinyin": "Báisè.",
      "thaiMeaning": "สีขาว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "白色。",
        "pinyin": "Bái sè.",
        "thaiMeaning": "สีขาว"
      },
      {
        "scenario": "เลือกเสื้อเชิ้ตสีขาว",
        "hanzi": "上班时我喜欢穿白衬衫。",
        "pinyin": "Shàng bān shí wǒ xǐ huan chuān bái chèn shān.",
        "thaiMeaning": "เวลาทำงานฉันชอบใส่เสื้อเชิ้ตสีขาว"
      },
      {
        "scenario": "บอกว่าสุนัขมีขนสีขาว",
        "hanzi": "那只狗全身都是白的。",
        "pinyin": "Nà zhī gǒu quán shēn dōu shì bái de.",
        "thaiMeaning": "สุนัขตัวนั้นมีสีขาวทั้งตัว"
      }
    ]
  },
  {
    "id": "v206",
    "hanzi": "黑",
    "pinyin": "hēi",
    "thaiMeaning": "ดำ / สีดำ",
    "example": {
      "hanzi": "黑色。",
      "pinyin": "Hēisè.",
      "thaiMeaning": "สีดำ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "黑色。",
        "pinyin": "Hēi sè.",
        "thaiMeaning": "สีดำ"
      },
      {
        "scenario": "ถามหากระเป๋าสีดำ",
        "hanzi": "你看到我的黑包了吗？",
        "pinyin": "Nǐ kàn dào wǒ de hēi bāo le ma?",
        "thaiMeaning": "คุณเห็นกระเป๋าสีดำของฉันไหม?"
      },
      {
        "scenario": "บอกว่าท้องฟ้ามืดแล้ว",
        "hanzi": "天已经黑了，早点回家吧。",
        "pinyin": "Tiān yǐ jīng hēi le, zǎo diǎn huí jiā ba.",
        "thaiMeaning": "ฟ้ามืดแล้ว กลับบ้านเร็วหน่อยนะ"
      }
    ]
  },
  {
    "id": "v207",
    "hanzi": "漂亮",
    "pinyin": "piàoliang",
    "thaiMeaning": "สวย / สวยงาม",
    "example": {
      "hanzi": "很漂亮。",
      "pinyin": "Hěn piàoliang.",
      "thaiMeaning": "สวยมาก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "很漂亮。",
        "pinyin": "Hěn piào liang.",
        "thaiMeaning": "สวยมาก"
      },
      {
        "scenario": "ชมชุดของเพื่อน",
        "hanzi": "你今天穿得很漂亮。",
        "pinyin": "Nǐ jīn tiān chuān dé hěn piào liang.",
        "thaiMeaning": "วันนี้คุณแต่งตัวสวยมาก"
      },
      {
        "scenario": "ชมวิวจากบนภูเขา",
        "hanzi": "从这里看风景真漂亮。",
        "pinyin": "Cóng zhè lǐ kàn fēng jǐng zhēn piào liang.",
        "thaiMeaning": "มองวิวจากตรงนี้สวยจริงๆ"
      }
    ]
  },
  {
    "id": "v208",
    "hanzi": "帅",
    "pinyin": "shuài",
    "thaiMeaning": "หล่อ",
    "example": {
      "hanzi": "很帅。",
      "pinyin": "Hěn shuài.",
      "thaiMeaning": "หล่อมาก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "很帅。",
        "pinyin": "Hěn shuài.",
        "thaiMeaning": "หล่อมาก"
      },
      {
        "scenario": "ชมเพื่อนหลังตัดผม",
        "hanzi": "你剪了头发以后更帅了。",
        "pinyin": "Nǐ jiǎn le tóu fa yǐ hòu gèng shuài le.",
        "thaiMeaning": "หลังตัดผมแล้วคุณหล่อขึ้น"
      },
      {
        "scenario": "บรรยายพระเอกในภาพยนตร์",
        "hanzi": "这个电影的男主角很帅。",
        "pinyin": "Zhè ge diàn yǐng de nán zhǔ jué hěn shuài.",
        "thaiMeaning": "พระเอกของหนังเรื่องนี้หล่อมาก"
      }
    ]
  },
  {
    "id": "v209",
    "hanzi": "高兴",
    "pinyin": "gāoxìng",
    "thaiMeaning": "ดีใจ / มีความสุข",
    "example": {
      "hanzi": "很高兴。",
      "pinyin": "Hěn gāoxìng.",
      "thaiMeaning": "ดีใจมาก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "很高兴。",
        "pinyin": "Hěn gāo xìng.",
        "thaiMeaning": "ดีใจมาก"
      },
      {
        "scenario": "ดีใจที่ได้พบกัน",
        "hanzi": "见到你我很高兴。",
        "pinyin": "Jiàn dào nǐ wǒ hěn gāo xìng.",
        "thaiMeaning": "ฉันดีใจมากที่ได้พบคุณ"
      },
      {
        "scenario": "ได้ยินข่าวดีจากเพื่อน",
        "hanzi": "听到这个好消息，大家都很高兴。",
        "pinyin": "Tīng dào zhè ge hǎo xiāo xī, dà jiā dōu hěn gāo xìng.",
        "thaiMeaning": "ได้ยินข่าวดีนี้ ทุกคนดีใจมาก"
      }
    ]
  },
  {
    "id": "v210",
    "hanzi": "快乐",
    "pinyin": "kuàilè",
    "thaiMeaning": "มีความสุข / สุขสันต์",
    "example": {
      "hanzi": "祝你快乐。",
      "pinyin": "Zhù nǐ kuàilè.",
      "thaiMeaning": "ขอให้มีความสุข"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "祝你快乐。",
        "pinyin": "Zhù nǐ kuài lè.",
        "thaiMeaning": "ขอให้มีความสุข"
      },
      {
        "scenario": "อวยพรวันเกิด",
        "hanzi": "祝你生日快乐！",
        "pinyin": "Zhù nǐ shēng rì kuài lè!",
        "thaiMeaning": "สุขสันต์วันเกิด!"
      },
      {
        "scenario": "เล่าว่าเด็กๆ เล่นอย่างมีความสุข",
        "hanzi": "孩子们在公园里玩得很快乐。",
        "pinyin": "Hái zi men zài gōng yuán lǐ wán dé hěn kuài lè.",
        "thaiMeaning": "เด็กๆ เล่นอย่างมีความสุขในสวน"
      }
    ]
  },
  {
    "id": "v211",
    "hanzi": "难过",
    "pinyin": "nánguò",
    "thaiMeaning": "เสียใจ / เศร้า",
    "example": {
      "hanzi": "别难过。",
      "pinyin": "Bié nánguò.",
      "thaiMeaning": "อย่าเสียใจไปเลย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "别难过。",
        "pinyin": "Bié nán guò.",
        "thaiMeaning": "อย่าเสียใจไปเลย"
      },
      {
        "scenario": "ปลอบเพื่อนที่สอบไม่ผ่าน",
        "hanzi": "别难过，下次再努力。",
        "pinyin": "Bié nán guò, xià cì zài nǔ lì.",
        "thaiMeaning": "อย่าเสียใจ คราวหน้าค่อยพยายามใหม่"
      },
      {
        "scenario": "เสียใจที่ต้องจากเพื่อน",
        "hanzi": "想到要离开大家，我很难过。",
        "pinyin": "Xiǎng dào yào lí kāi dà jiā, wǒ hěn nán guò.",
        "thaiMeaning": "คิดว่าจะต้องจากทุกคนไป ฉันเสียใจมาก"
      }
    ]
  },
  {
    "id": "v212",
    "hanzi": "生气",
    "pinyin": "shēngqì",
    "thaiMeaning": "โกรธ / โมโห",
    "example": {
      "hanzi": "别生气。",
      "pinyin": "Bié shēngqì.",
      "thaiMeaning": "อย่าโกรธเลย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "别生气。",
        "pinyin": "Bié shēng qì.",
        "thaiMeaning": "อย่าโกรธเลย"
      },
      {
        "scenario": "ขอให้อีกฝ่ายอย่าโกรธ",
        "hanzi": "对不起，你别生气。",
        "pinyin": "Duì bù qǐ, nǐ bié shēng qì.",
        "thaiMeaning": "ขอโทษ คุณอย่าโกรธนะ"
      },
      {
        "scenario": "ถามเหตุผลที่เพื่อนโกรธ",
        "hanzi": "你为什么这么生气？",
        "pinyin": "Nǐ wèi shén me zhè me shēng qì?",
        "thaiMeaning": "ทำไมคุณถึงโกรธขนาดนี้?"
      }
    ]
  },
  {
    "id": "v213",
    "hanzi": "害怕",
    "pinyin": "hàipà",
    "thaiMeaning": "กลัว / หวาดกลัว",
    "example": {
      "hanzi": "不用害怕。",
      "pinyin": "Búyòng hàipà.",
      "thaiMeaning": "ไม่ต้องกลัว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "不用害怕。",
        "pinyin": "Bú yòng hài pà.",
        "thaiMeaning": "ไม่ต้องกลัว"
      },
      {
        "scenario": "กลัวสุนัขตัวใหญ่",
        "hanzi": "我有点害怕那只大狗。",
        "pinyin": "Wǒ yǒu diǎn hài pà nà zhī dà gǒu.",
        "thaiMeaning": "ฉันกลัวสุนัขตัวใหญ่นั้นนิดหน่อย"
      },
      {
        "scenario": "ให้กำลังใจเด็กก่อนไปหาหมอ",
        "hanzi": "别害怕，医生会帮助你。",
        "pinyin": "Bié hài pà, yī shēng huì bāng zhù nǐ.",
        "thaiMeaning": "ไม่ต้องกลัว หมอจะช่วยคุณ"
      }
    ]
  },
  {
    "id": "v214",
    "hanzi": "紧张",
    "pinyin": "jǐnzhāng",
    "thaiMeaning": "ตื่นเต้น / เครียด",
    "example": {
      "hanzi": "别紧张。",
      "pinyin": "Bié jǐnzhāng.",
      "thaiMeaning": "อย่าตื่นเต้นไป"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "别紧张。",
        "pinyin": "Bié jǐn zhāng.",
        "thaiMeaning": "อย่าตื่นเต้นไป"
      },
      {
        "scenario": "ตื่นเต้นก่อนสัมภาษณ์งาน",
        "hanzi": "面试前我有点紧张。",
        "pinyin": "Miàn shì qián wǒ yǒu diǎn jǐn zhāng.",
        "thaiMeaning": "ก่อนสัมภาษณ์ฉันตื่นเต้นนิดหน่อย"
      },
      {
        "scenario": "ปลอบเพื่อนก่อนขึ้นเวที",
        "hanzi": "放轻松，不要太紧张。",
        "pinyin": "Fàng qīng sōng, bú yào tài jǐn zhāng.",
        "thaiMeaning": "ผ่อนคลาย อย่าตื่นเต้นเกินไป"
      }
    ]
  },
  {
    "id": "v215",
    "hanzi": "聪明",
    "pinyin": "cōngming",
    "thaiMeaning": "ฉลาด",
    "example": {
      "hanzi": "很聪明。",
      "pinyin": "Hěn cōngming.",
      "thaiMeaning": "ฉลาดมาก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "很聪明。",
        "pinyin": "Hěn cōng ming.",
        "thaiMeaning": "ฉลาดมาก"
      },
      {
        "scenario": "ชมเด็กที่แก้โจทย์ได้",
        "hanzi": "这个孩子很聪明。",
        "pinyin": "Zhè ge hái zi hěn cōng ming.",
        "thaiMeaning": "เด็กคนนี้ฉลาดมาก"
      },
      {
        "scenario": "ชมวิธีแก้ปัญหา",
        "hanzi": "你想到了一个聪明的办法。",
        "pinyin": "Nǐ xiǎng dào le yí gè cōng ming de bàn fǎ.",
        "thaiMeaning": "คุณคิดวิธีที่ฉลาดได้หนึ่งวิธี"
      }
    ]
  },
  {
    "id": "v216",
    "hanzi": "努力",
    "pinyin": "nǔlì",
    "thaiMeaning": "ขยัน / พยายาม",
    "example": {
      "hanzi": "努力学习。",
      "pinyin": "Nǔlì xuéxí.",
      "thaiMeaning": "ขยันเรียน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "努力学习。",
        "pinyin": "Nǔ lì xué xí.",
        "thaiMeaning": "ขยันเรียน"
      },
      {
        "scenario": "ให้กำลังใจนักเรียนก่อนสอบ",
        "hanzi": "只要努力，就会有进步。",
        "pinyin": "Zhǐ yào nǔ lì, jiù huì yǒu jìn bù.",
        "thaiMeaning": "ขอแค่พยายาม ก็จะพัฒนาขึ้น"
      },
      {
        "scenario": "เล่าว่ากำลังตั้งใจเรียนภาษา",
        "hanzi": "我正在努力学习中文。",
        "pinyin": "Wǒ zhèng zài nǔ lì xué xí zhōng wén.",
        "thaiMeaning": "ฉันกำลังพยายามเรียนภาษาจีน"
      }
    ]
  },
  {
    "id": "v217",
    "hanzi": "认真",
    "pinyin": "rènzhēn",
    "thaiMeaning": "ตั้งใจ / จริงจัง",
    "example": {
      "hanzi": "认真听。",
      "pinyin": "Rènzhēn tīng.",
      "thaiMeaning": "ตั้งใจฟัง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "认真听。",
        "pinyin": "Rèn zhēn tīng.",
        "thaiMeaning": "ตั้งใจฟัง"
      },
      {
        "scenario": "ชมพนักงานที่ทำงานตั้งใจ",
        "hanzi": "他工作一直很认真。",
        "pinyin": "Tā gōng zuò yì zhí hěn rèn zhēn.",
        "thaiMeaning": "เขาทำงานอย่างตั้งใจเสมอ"
      },
      {
        "scenario": "เตือนให้อ่านคำถามให้ดี",
        "hanzi": "请认真看清楚题目。",
        "pinyin": "Qǐng rèn zhēn kàn qīng chǔ tí mù.",
        "thaiMeaning": "กรุณาอ่านโจทย์ให้ละเอียด"
      }
    ]
  },
  {
    "id": "v218",
    "hanzi": "打开",
    "pinyin": "dǎkāi",
    "thaiMeaning": "เปิดออก",
    "example": {
      "hanzi": "打开书。",
      "pinyin": "Dǎkāi shū.",
      "thaiMeaning": "เปิดหนังสือ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "打开书。",
        "pinyin": "Dǎ kāi shū.",
        "thaiMeaning": "เปิดหนังสือ"
      },
      {
        "scenario": "ขอให้เปิดหน้าต่าง",
        "hanzi": "房间太热了，请打开窗户。",
        "pinyin": "Fáng jiān tài rè le, qǐng dǎ kāi chuāng hù.",
        "thaiMeaning": "ห้องร้อนเกินไป กรุณาเปิดหน้าต่าง"
      },
      {
        "scenario": "เปิดกล่องของขวัญ",
        "hanzi": "快打开礼物看看吧。",
        "pinyin": "Kuài dǎ kāi lǐ wù kàn kàn ba.",
        "thaiMeaning": "รีบเปิดของขวัญดูสิ"
      }
    ]
  },
  {
    "id": "v219",
    "hanzi": "关上",
    "pinyin": "guānshàng",
    "thaiMeaning": "ปิดลง",
    "example": {
      "hanzi": "关上灯。",
      "pinyin": "Guānshàng dēng.",
      "thaiMeaning": "ปิดไฟ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "关上灯。",
        "pinyin": "Guān shàng dēng.",
        "thaiMeaning": "ปิดไฟ"
      },
      {
        "scenario": "ปิดหน้าต่างก่อนฝนเข้า",
        "hanzi": "要下雨了，快关上窗户。",
        "pinyin": "Yào xià yǔ le, kuài guān shàng chuāng hù.",
        "thaiMeaning": "ฝนกำลังจะตก รีบปิดหน้าต่าง"
      },
      {
        "scenario": "ขอให้ปิดหนังสือ",
        "hanzi": "请关上书，听老师说。",
        "pinyin": "Qǐng guān shàng shū, tīng lǎo shī shuō.",
        "thaiMeaning": "กรุณาปิดหนังสือแล้วฟังครูพูด"
      }
    ]
  },
  {
    "id": "v220",
    "hanzi": "穿上",
    "pinyin": "chuānshàng",
    "thaiMeaning": "สวมใส่",
    "example": {
      "hanzi": "穿上外套。",
      "pinyin": "Chuānshàng wàitào.",
      "thaiMeaning": "สวมเสื้อนอก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "穿上外套。",
        "pinyin": "Chuān shàng wài tào.",
        "thaiMeaning": "สวมเสื้อนอก"
      },
      {
        "scenario": "เตือนให้สวมเสื้อคลุม",
        "hanzi": "外面冷，穿上外套再走。",
        "pinyin": "Wài miàn lěng, chuān shàng wài tào zài zǒu.",
        "thaiMeaning": "ข้างนอกหนาว ใส่เสื้อคลุมแล้วค่อยไป"
      },
      {
        "scenario": "ลองสวมรองเท้าคู่ใหม่",
        "hanzi": "穿上这双鞋走走看。",
        "pinyin": "Chuān shàng zhè shuāng xié zǒu zǒu kàn.",
        "thaiMeaning": "ลองใส่รองเท้าคู่นี้เดินดู"
      }
    ]
  },
  {
    "id": "v221",
    "hanzi": "脱下",
    "pinyin": "tuōxià",
    "thaiMeaning": "ถอดออก",
    "example": {
      "hanzi": "脱下鞋子。",
      "pinyin": "Tuōxià xiézi.",
      "thaiMeaning": "ถอดรองเท้า"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "脱下鞋子。",
        "pinyin": "Tuō xià xié zǐ.",
        "thaiMeaning": "ถอดรองเท้า"
      },
      {
        "scenario": "ถอดรองเท้าก่อนเข้าบ้าน",
        "hanzi": "进屋前请脱下鞋子。",
        "pinyin": "Jìn wū qián qǐng tuō xià xié zǐ.",
        "thaiMeaning": "ก่อนเข้าบ้านกรุณาถอดรองเท้า"
      },
      {
        "scenario": "ถอดเสื้อคลุมเพราะในห้องร้อน",
        "hanzi": "房间里很热，我脱下了外套。",
        "pinyin": "Fáng jiān lǐ hěn rè, wǒ tuō xià le wài tào.",
        "thaiMeaning": "ในห้องร้อนมาก ฉันจึงถอดเสื้อคลุม"
      }
    ]
  },
  {
    "id": "v222",
    "hanzi": "拿起",
    "pinyin": "náqǐ",
    "thaiMeaning": "หยิบขึ้นมา",
    "example": {
      "hanzi": "拿起手机。",
      "pinyin": "Náqǐ shǒujī.",
      "thaiMeaning": "หยิบมือถือขึ้นมา"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "拿起手机。",
        "pinyin": "Ná qǐ shǒu jī.",
        "thaiMeaning": "หยิบมือถือขึ้นมา"
      },
      {
        "scenario": "หยิบโทรศัพท์ขึ้นมารับสาย",
        "hanzi": "电话响了，他拿起手机。",
        "pinyin": "Diàn huà xiǎng le, tā ná qǐ shǒu jī.",
        "thaiMeaning": "โทรศัพท์ดัง เขาหยิบมือถือขึ้นมา"
      },
      {
        "scenario": "หยิบปากกาเพื่อเซ็นชื่อ",
        "hanzi": "请拿起笔在这里签名。",
        "pinyin": "Qǐng ná qǐ bǐ zài zhè lǐ qiān míng.",
        "thaiMeaning": "กรุณาหยิบปากกาขึ้นมาเซ็นตรงนี้"
      }
    ]
  },
  {
    "id": "v223",
    "hanzi": "放下",
    "pinyin": "fàngxià",
    "thaiMeaning": "วางลง",
    "example": {
      "hanzi": "放下包。",
      "pinyin": "Fàngxià bāo.",
      "thaiMeaning": "วางกระเป๋าลง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "放下包。",
        "pinyin": "Fàng xià bāo.",
        "thaiMeaning": "วางกระเป๋าลง"
      },
      {
        "scenario": "ขอให้วางกระเป๋าหนัก",
        "hanzi": "包太重了，先放下吧。",
        "pinyin": "Bāo tài zhòng le, xiān fàng xià ba.",
        "thaiMeaning": "กระเป๋าหนักเกินไป วางลงก่อนเถอะ"
      },
      {
        "scenario": "วางโทรศัพท์แล้วพักผ่อน",
        "hanzi": "放下手机，休息一会儿。",
        "pinyin": "Fàng xià shǒu jī, xiū xi yí huì er.",
        "thaiMeaning": "วางโทรศัพท์แล้วพักสักครู่"
      }
    ]
  },
  {
    "id": "v224",
    "hanzi": "卖",
    "pinyin": "mài",
    "thaiMeaning": "ขาย",
    "example": {
      "hanzi": "卖水果。",
      "pinyin": "Mǎi shuǐguǒ.",
      "thaiMeaning": "ขายผลไม้"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "卖水果。",
        "pinyin": "Mài shuǐ guǒ.",
        "thaiMeaning": "ขายผลไม้"
      },
      {
        "scenario": "ถามว่าร้านขายอะไร",
        "hanzi": "这家商店卖什么？",
        "pinyin": "Zhè jiā shāng diàn mài shén me?",
        "thaiMeaning": "ร้านนี้ขายอะไร?"
      },
      {
        "scenario": "ขายรถคันเก่า",
        "hanzi": "他想把旧车卖掉。",
        "pinyin": "Tā xiǎng bǎ jiù chē mài diào.",
        "thaiMeaning": "เขาอยากขายรถเก่า"
      }
    ]
  },
  {
    "id": "v225",
    "hanzi": "借",
    "pinyin": "jiè",
    "thaiMeaning": "ยืม / ให้ยืม",
    "example": {
      "hanzi": "借钱。",
      "pinyin": "Jiè qián.",
      "thaiMeaning": "ยืมเงิน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "借钱。",
        "pinyin": "Jiè qián.",
        "thaiMeaning": "ยืมเงิน"
      },
      {
        "scenario": "ขอยืมหนังสือเพื่อน",
        "hanzi": "这本书可以借我看看吗？",
        "pinyin": "Zhè běn shū kě yǐ jiè wǒ kàn kàn ma?",
        "thaiMeaning": "ขอยืมหนังสือเล่มนี้อ่านได้ไหม?"
      },
      {
        "scenario": "ยืมร่มในวันที่ฝนตก",
        "hanzi": "我没带伞，能借你的吗？",
        "pinyin": "Wǒ méi dài sǎn, néng jiè nǐ de ma?",
        "thaiMeaning": "ฉันไม่ได้เอาร่มมา ขอยืมของคุณได้ไหม?"
      }
    ]
  },
  {
    "id": "v226",
    "hanzi": "还",
    "pinyin": "huán",
    "thaiMeaning": "คืน / คืนของ",
    "example": {
      "hanzi": "还书。",
      "pinyin": "Huán shū.",
      "thaiMeaning": "คืนหนังสือ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "还书。",
        "pinyin": "Hái shū.",
        "thaiMeaning": "คืนหนังสือ"
      },
      {
        "scenario": "คืนหนังสือให้ห้องสมุด",
        "hanzi": "我明天去图书馆还书。",
        "pinyin": "Wǒ míng tiān qù tú shū guǎn hái shū.",
        "thaiMeaning": "พรุ่งนี้ฉันจะไปคืนหนังสือที่ห้องสมุด"
      },
      {
        "scenario": "เตือนเพื่อนให้คืนเงิน",
        "hanzi": "别忘了把钱还给他。",
        "pinyin": "Bié wàng le bǎ qián hái gěi tā.",
        "thaiMeaning": "อย่าลืมคืนเงินให้เขา"
      }
    ]
  },
  {
    "id": "v227",
    "hanzi": "给",
    "pinyin": "gěi",
    "thaiMeaning": "ให้",
    "example": {
      "hanzi": "给你。",
      "pinyin": "Gěi nǐ.",
      "thaiMeaning": "ให้คุณ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "给你。",
        "pinyin": "Gěi nǐ.",
        "thaiMeaning": "ให้คุณ"
      },
      {
        "scenario": "ยื่นเอกสารให้พนักงาน",
        "hanzi": "请把这份文件给经理。",
        "pinyin": "Qǐng bǎ zhè fèn wén jiàn gěi jīng lǐ.",
        "thaiMeaning": "กรุณาเอาเอกสารนี้ให้ผู้จัดการ"
      },
      {
        "scenario": "ซื้อของขวัญให้แม่",
        "hanzi": "我给妈妈买了礼物。",
        "pinyin": "Wǒ gěi mā ma mǎi le lǐ wù.",
        "thaiMeaning": "ฉันซื้อของขวัญให้แม่"
      }
    ]
  },
  {
    "id": "v228",
    "hanzi": "送",
    "pinyin": "sòng",
    "thaiMeaning": "ส่ง / มอบให้",
    "example": {
      "hanzi": "送礼物。",
      "pinyin": "Sòng lǐwù.",
      "thaiMeaning": "มอบของขวัญ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "送礼物。",
        "pinyin": "Sòng lǐ wù.",
        "thaiMeaning": "มอบของขวัญ"
      },
      {
        "scenario": "ไปส่งเพื่อนที่สนามบิน",
        "hanzi": "我开车送你去机场。",
        "pinyin": "Wǒ kāi chē sòng nǐ qù jī chǎng.",
        "thaiMeaning": "ฉันขับรถไปส่งคุณที่สนามบิน"
      },
      {
        "scenario": "มอบดอกไม้ให้ครู",
        "hanzi": "学生们送给老师一束花。",
        "pinyin": "Xué shēng men sòng gěi lǎo shī yí shù huā.",
        "thaiMeaning": "นักเรียนมอบดอกไม้หนึ่งช่อให้ครู"
      }
    ]
  },
  {
    "id": "v229",
    "hanzi": "带",
    "pinyin": "dài",
    "thaiMeaning": "พก / พกพา",
    "example": {
      "hanzi": "带伞。",
      "pinyin": "Dài sǎn.",
      "thaiMeaning": "พกร่ม"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "带伞。",
        "pinyin": "Dài sǎn.",
        "thaiMeaning": "พกร่ม"
      },
      {
        "scenario": "เตือนให้พกร่ม",
        "hanzi": "天气预报说有雨，记得带伞。",
        "pinyin": "Tiān qì yù bào shuō yǒu yǔ, jì de dài sǎn.",
        "thaiMeaning": "พยากรณ์ว่าฝนตก อย่าลืมพกร่ม"
      },
      {
        "scenario": "พาเพื่อนไปเที่ยวเมือง",
        "hanzi": "我带朋友去市中心看看。",
        "pinyin": "Wǒ dài péng yǒu qù shì zhōng xīn kàn kàn.",
        "thaiMeaning": "ฉันพาเพื่อนไปเที่ยวใจกลางเมือง"
      }
    ]
  },
  {
    "id": "v230",
    "hanzi": "搬",
    "pinyin": "bān",
    "thaiMeaning": "ย้าย / ยก",
    "example": {
      "hanzi": "搬家。",
      "pinyin": "Bānjiā.",
      "thaiMeaning": "ย้ายบ้าน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "搬家。",
        "pinyin": "Bān jiā.",
        "thaiMeaning": "ย้ายบ้าน"
      },
      {
        "scenario": "ช่วยย้ายโต๊ะ",
        "hanzi": "这张桌子太重，我们一起搬。",
        "pinyin": "Zhè zhāng zhuō zi tài zhòng, wǒ men yì qǐ bān.",
        "thaiMeaning": "โต๊ะตัวนี้หนักเกินไป พวกเราช่วยกันย้าย"
      },
      {
        "scenario": "ย้ายเข้าบ้านใหม่",
        "hanzi": "我们下个月搬新家。",
        "pinyin": "Wǒ men xià gè yuè bān xīn jiā.",
        "thaiMeaning": "เดือนหน้าพวกเราจะย้ายบ้านใหม่"
      }
    ]
  },
  {
    "id": "v231",
    "hanzi": "洗",
    "pinyin": "xǐ",
    "thaiMeaning": "ซัก / ล้าง",
    "example": {
      "hanzi": "洗衣服。",
      "pinyin": "Xǐ yīfu.",
      "thaiMeaning": "ซักเสื้อผ้า"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "洗衣服。",
        "pinyin": "Xǐ yī fu.",
        "thaiMeaning": "ซักเสื้อผ้า"
      },
      {
        "scenario": "ล้างผลไม้ก่อนกิน",
        "hanzi": "苹果要洗干净再吃。",
        "pinyin": "Píng guǒ yào xǐ gān jìng zài chī.",
        "thaiMeaning": "ต้องล้างแอปเปิลให้สะอาดก่อนกิน"
      },
      {
        "scenario": "ซักเสื้อผ้าหลังกลับบ้าน",
        "hanzi": "我晚上回家洗衣服。",
        "pinyin": "Wǒ wǎn shàng huí jiā xǐ yī fu.",
        "thaiMeaning": "ตอนเย็นฉันกลับบ้านไปซักเสื้อผ้า"
      }
    ]
  },
  {
    "id": "v232",
    "hanzi": "跳",
    "pinyin": "tiào",
    "thaiMeaning": "กระโดด / เต้น",
    "example": {
      "hanzi": "跳舞。",
      "pinyin": "Tiàowǔ.",
      "thaiMeaning": "เต้นรำ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "跳舞。",
        "pinyin": "Tiào wǔ.",
        "thaiMeaning": "เต้นรำ"
      },
      {
        "scenario": "เตือนเด็กไม่ให้กระโดดบนเตียง",
        "hanzi": "不要在床上跳。",
        "pinyin": "Bú yào zài chuáng shàng tiào.",
        "thaiMeaning": "อย่ากระโดดบนเตียง"
      },
      {
        "scenario": "กระโดดข้ามแอ่งน้ำ",
        "hanzi": "他轻轻一跳，跳过了水。",
        "pinyin": "Tā qīng qīng yí tiào, tiào guò le shuǐ.",
        "thaiMeaning": "เขากระโดดเบาๆ ข้ามแอ่งน้ำ"
      }
    ]
  },
  {
    "id": "v233",
    "hanzi": "飞",
    "pinyin": "fēi",
    "thaiMeaning": "บิน",
    "example": {
      "hanzi": "飞机飞。",
      "pinyin": "Fēijī fēi.",
      "thaiMeaning": "เครื่องบินบิน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "飞机飞。",
        "pinyin": "Fēi jī fēi.",
        "thaiMeaning": "เครื่องบินบิน"
      },
      {
        "scenario": "ดูนกบินบนท้องฟ้า",
        "hanzi": "一群鸟从天上飞过。",
        "pinyin": "Yì qún niǎo cóng tiān shàng fēi guò.",
        "thaiMeaning": "นกฝูงหนึ่งบินผ่านท้องฟ้า"
      },
      {
        "scenario": "เครื่องบินบินไปปักกิ่ง",
        "hanzi": "这架飞机飞往北京。",
        "pinyin": "Zhè jià fēi jī fēi wǎng běi jīng.",
        "thaiMeaning": "เครื่องบินลำนี้บินไปปักกิ่ง"
      }
    ]
  },
  {
    "id": "v234",
    "hanzi": "游",
    "pinyin": "yóu",
    "thaiMeaning": "ว่ายน้ำ",
    "example": {
      "hanzi": "游泳。",
      "pinyin": "Yóuyǒng.",
      "thaiMeaning": "ว่ายน้ำ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "游泳。",
        "pinyin": "Yóu yǒng.",
        "thaiMeaning": "ว่ายน้ำ"
      },
      {
        "scenario": "ปลาแหวกว่ายในน้ำ",
        "hanzi": "鱼在水里游来游去。",
        "pinyin": "Yú zài shuǐ lǐ yóu lái yóu qù.",
        "thaiMeaning": "ปลาว่ายไปมาในน้ำ"
      },
      {
        "scenario": "พายเรือเที่ยวทะเลสาบ",
        "hanzi": "我们坐船游了整个湖。",
        "pinyin": "Wǒ men zuò chuán yóu le zhěng gè hú.",
        "thaiMeaning": "พวกเรานั่งเรือเที่ยวทั่วทะเลสาบ"
      }
    ]
  },
  {
    "id": "v235",
    "hanzi": "站",
    "pinyin": "zhàn",
    "thaiMeaning": "ยืน / สถานี",
    "example": {
      "hanzi": "站起来。",
      "pinyin": "Zhàn qǐlái.",
      "thaiMeaning": "ยืนขึ้น"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "站起来。",
        "pinyin": "Zhàn qǐ lái.",
        "thaiMeaning": "ยืนขึ้น"
      },
      {
        "scenario": "ขอให้ยืนต่อแถว",
        "hanzi": "请站在黄线后面。",
        "pinyin": "Qǐng zhàn zài huáng xiàn hòu miàn.",
        "thaiMeaning": "กรุณายืนหลังเส้นสีเหลือง"
      },
      {
        "scenario": "ยืนรอรถที่ป้าย",
        "hanzi": "我在车站门口站着等你。",
        "pinyin": "Wǒ zài chē zhàn mén kǒu zhàn zhe děng nǐ.",
        "thaiMeaning": "ฉันยืนรอคุณอยู่หน้าสถานี"
      }
    ]
  },
  {
    "id": "v236",
    "hanzi": "坐",
    "pinyin": "zuò",
    "thaiMeaning": "นั่ง",
    "example": {
      "hanzi": "请坐。",
      "pinyin": "Qǐng zuò.",
      "thaiMeaning": "เชิญนั่ง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "请坐。",
        "pinyin": "Qǐng zuò.",
        "thaiMeaning": "เชิญนั่ง"
      },
      {
        "scenario": "เชิญแขกนั่งลง",
        "hanzi": "别站着，请坐。",
        "pinyin": "Bié zhàn zhe, qǐng zuò.",
        "thaiMeaning": "อย่ายืนเลย เชิญนั่ง"
      },
      {
        "scenario": "นั่งรถไฟไปทำงาน",
        "hanzi": "我每天坐地铁上班。",
        "pinyin": "Wǒ měi tiān zuò dì tiě shàng bān.",
        "thaiMeaning": "ฉันนั่งรถไฟใต้ดินไปทำงานทุกวัน"
      }
    ]
  },
  {
    "id": "v237",
    "hanzi": "一",
    "pinyin": "yī",
    "thaiMeaning": "หนึ่ง (1)",
    "example": {
      "hanzi": "一个月。",
      "pinyin": "Yí gè yuè.",
      "thaiMeaning": "หนึ่งเดือน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一个月。",
        "pinyin": "Yí gè yuè.",
        "thaiMeaning": "หนึ่งเดือน"
      },
      {
        "scenario": "สั่งกาแฟหนึ่งแก้ว",
        "hanzi": "请给我一杯咖啡。",
        "pinyin": "Qǐng gěi wǒ yì bēi kā fēi.",
        "thaiMeaning": "ขอกาแฟหนึ่งแก้ว"
      },
      {
        "scenario": "บอกว่าเป็นครั้งแรก",
        "hanzi": "这是我第一次来中国。",
        "pinyin": "Zhè shì wǒ dì yī cì lái zhōng guó.",
        "thaiMeaning": "นี่เป็นครั้งแรกที่ฉันมาจีน"
      }
    ]
  },
  {
    "id": "v238",
    "hanzi": "二",
    "pinyin": "èr",
    "thaiMeaning": "สอง (2)",
    "example": {
      "hanzi": "二楼。",
      "pinyin": "Èr lóu.",
      "thaiMeaning": "ชั้นสอง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "二楼。",
        "pinyin": "èr lóu.",
        "thaiMeaning": "ชั้นสอง"
      },
      {
        "scenario": "บอกวันที่สองของเดือน",
        "hanzi": "今天是五月二号。",
        "pinyin": "Jīn tiān shì wǔ yuè èr hào.",
        "thaiMeaning": "วันนี้คือวันที่สองเดือนพฤษภาคม"
      },
      {
        "scenario": "เลือกหมายเลขสอง",
        "hanzi": "我选第二个。",
        "pinyin": "Wǒ xuǎn dì èr gè.",
        "thaiMeaning": "ฉันเลือกอันที่สอง"
      }
    ]
  },
  {
    "id": "v239",
    "hanzi": "三",
    "pinyin": "sān",
    "thaiMeaning": "สาม (3)",
    "example": {
      "hanzi": "三天。",
      "pinyin": "Sān tiān.",
      "thaiMeaning": "สามวัน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "三天。",
        "pinyin": "Sān tiān.",
        "thaiMeaning": "สามวัน"
      },
      {
        "scenario": "นัดกันตอนสามโมง",
        "hanzi": "我们下午三点见。",
        "pinyin": "Wǒ men xià wǔ sān diǎn jiàn.",
        "thaiMeaning": "พวกเราเจอกันบ่ายสามโมง"
      },
      {
        "scenario": "ซื้อแอปเปิลสามลูก",
        "hanzi": "我要三个苹果。",
        "pinyin": "Wǒ yào sān gè píng guǒ.",
        "thaiMeaning": "ฉันเอาแอปเปิลสามลูก"
      }
    ]
  },
  {
    "id": "v240",
    "hanzi": "四",
    "pinyin": "sì",
    "thaiMeaning": "สี่ (4)",
    "example": {
      "hanzi": "四个人。",
      "pinyin": "Sì gè rén.",
      "thaiMeaning": "สี่คน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "四个人。",
        "pinyin": "Sì gè rén.",
        "thaiMeaning": "สี่คน"
      },
      {
        "scenario": "บอกว่าครอบครัวมีสี่คน",
        "hanzi": "我家有四个人。",
        "pinyin": "Wǒ jiā yǒu sì gè rén.",
        "thaiMeaning": "ครอบครัวฉันมีสี่คน"
      },
      {
        "scenario": "ขึ้นไปชั้นสี่",
        "hanzi": "会议室在四楼。",
        "pinyin": "Huì yì shì zài sì lóu.",
        "thaiMeaning": "ห้องประชุมอยู่ชั้นสี่"
      }
    ]
  },
  {
    "id": "v241",
    "hanzi": "五",
    "pinyin": "wǔ",
    "thaiMeaning": "ห้า (5)",
    "example": {
      "hanzi": "五点。",
      "pinyin": "Wǔ diǎn.",
      "thaiMeaning": "ห้าโมง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "五点。",
        "pinyin": "Wǔ diǎn.",
        "thaiMeaning": "ห้าโมง"
      },
      {
        "scenario": "ขอเวลาห้านาที",
        "hanzi": "再给我五分钟。",
        "pinyin": "Zài gěi wǒ wǔ fēn zhōng.",
        "thaiMeaning": "ให้เวลาฉันอีกห้านาที"
      },
      {
        "scenario": "ซื้อหนังสือห้าเล่ม",
        "hanzi": "学校买了五本新书。",
        "pinyin": "Xué xiào mǎi le wǔ běn xīn shū.",
        "thaiMeaning": "โรงเรียนซื้อหนังสือใหม่ห้าเล่ม"
      }
    ]
  },
  {
    "id": "v242",
    "hanzi": "六",
    "pinyin": "liù",
    "thaiMeaning": "หก (6)",
    "example": {
      "hanzi": "六个。",
      "pinyin": "Liù gè.",
      "thaiMeaning": "หกอัน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "六个。",
        "pinyin": "Liù gè.",
        "thaiMeaning": "หกอัน"
      },
      {
        "scenario": "บอกเวลาเลิกงาน",
        "hanzi": "我六点下班。",
        "pinyin": "Wǒ liù diǎn xià bān.",
        "thaiMeaning": "ฉันเลิกงานหกโมง"
      },
      {
        "scenario": "โต๊ะสำหรับหกคน",
        "hanzi": "我们需要一张六人桌。",
        "pinyin": "Wǒ men xū yào yì zhāng liù rén zhuō.",
        "thaiMeaning": "พวกเราต้องการโต๊ะสำหรับหกคน"
      }
    ]
  },
  {
    "id": "v243",
    "hanzi": "七",
    "pinyin": "qī",
    "thaiMeaning": "เจ็ด (7)",
    "example": {
      "hanzi": "七点。",
      "pinyin": "Qī diǎn.",
      "thaiMeaning": "เจ็ดโมง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "七点。",
        "pinyin": "Qī diǎn.",
        "thaiMeaning": "เจ็ดโมง"
      },
      {
        "scenario": "ตื่นเจ็ดโมงทุกวัน",
        "hanzi": "我每天七点起床。",
        "pinyin": "Wǒ měi tiān qī diǎn qǐ chuáng.",
        "thaiMeaning": "ฉันตื่นเจ็ดโมงทุกวัน"
      },
      {
        "scenario": "พักโรงแรมเจ็ดคืน",
        "hanzi": "我们在酒店住七个晚上。",
        "pinyin": "Wǒ men zài jiǔ diàn zhù qī gè wǎn shàng.",
        "thaiMeaning": "พวกเราพักโรงแรมเจ็ดคืน"
      }
    ]
  },
  {
    "id": "v244",
    "hanzi": "八",
    "pinyin": "bā",
    "thaiMeaning": "แปด (8)",
    "example": {
      "hanzi": "八块。",
      "pinyin": "Bā kuài.",
      "thaiMeaning": "แปดหยวน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "八块。",
        "pinyin": "Bā kuài.",
        "thaiMeaning": "แปดหยวน"
      },
      {
        "scenario": "เริ่มงานแปดโมง",
        "hanzi": "公司八点开始上班。",
        "pinyin": "Gōng sī bā diǎn kāi shǐ shàng bān.",
        "thaiMeaning": "บริษัทเริ่มงานแปดโมง"
      },
      {
        "scenario": "ซื้อส้มแปดลูก",
        "hanzi": "她买了八个橙子。",
        "pinyin": "Tā mǎi le bā gè chéng zǐ.",
        "thaiMeaning": "เธอซื้อส้มแปดลูก"
      }
    ]
  },
  {
    "id": "v245",
    "hanzi": "九",
    "pinyin": "jiǔ",
    "thaiMeaning": "เก้า (9)",
    "example": {
      "hanzi": "九岁。",
      "pinyin": "Jiǔ suì.",
      "thaiMeaning": "เก้าขวบ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "九岁。",
        "pinyin": "Jiǔ suì.",
        "thaiMeaning": "เก้าขวบ"
      },
      {
        "scenario": "ร้านเปิดเก้าโมง",
        "hanzi": "商店早上九点开门。",
        "pinyin": "Shāng diàn zǎo shàng jiǔ diǎn kāi mén.",
        "thaiMeaning": "ร้านเปิดเก้าโมงเช้า"
      },
      {
        "scenario": "อยู่ห้องหมายเลขเก้า",
        "hanzi": "我的房间是九号。",
        "pinyin": "Wǒ de fáng jiān shì jiǔ hào.",
        "thaiMeaning": "ห้องของฉันคือหมายเลขเก้า"
      }
    ]
  },
  {
    "id": "v246",
    "hanzi": "十",
    "pinyin": "shí",
    "thaiMeaning": "สิบ (10)",
    "example": {
      "hanzi": "十分钟。",
      "pinyin": "Shí fēnzhōng.",
      "thaiMeaning": "สิบนาที"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "十分钟。",
        "pinyin": "Shí fēn zhōng.",
        "thaiMeaning": "สิบนาที"
      },
      {
        "scenario": "รอสิบ分钟",
        "hanzi": "请等十分钟。",
        "pinyin": "Qǐng děng shí fēn zhōng.",
        "thaiMeaning": "กรุณารอสิบนาที"
      },
      {
        "scenario": "มีนักเรียนสิบคน",
        "hanzi": "教室里有十个学生。",
        "pinyin": "Jiào shì lǐ yǒu shí gè xué shēng.",
        "thaiMeaning": "ในห้องเรียนมีนักเรียนสิบคน"
      }
    ]
  },
  {
    "id": "v247",
    "hanzi": "百",
    "pinyin": "bǎi",
    "thaiMeaning": "ร้อย (100)",
    "example": {
      "hanzi": "一百块。",
      "pinyin": "Yì bǎi kuài.",
      "thaiMeaning": "หนึ่งร้อยหยวน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一百块。",
        "pinyin": "Yì bǎi kuài.",
        "thaiMeaning": "หนึ่งร้อยหยวน"
      },
      {
        "scenario": "บอกราคาหนึ่งร้อยหยวน",
        "hanzi": "这件衣服一百块钱。",
        "pinyin": "Zhè jiàn yī fu yì bǎi kuài qián.",
        "thaiMeaning": "เสื้อตัวนี้หนึ่งร้อยหยวน"
      },
      {
        "scenario": "ห้องพักมีมากกว่าร้อยห้อง",
        "hanzi": "这家酒店有一百多间房。",
        "pinyin": "Zhè jiā jiǔ diàn yǒu yì bǎi duō jiān fáng.",
        "thaiMeaning": "โรงแรมนี้มีห้องมากกว่าหนึ่งร้อยห้อง"
      }
    ]
  },
  {
    "id": "v248",
    "hanzi": "千",
    "pinyin": "qiān",
    "thaiMeaning": "พัน (1,000)",
    "example": {
      "hanzi": "一千元。",
      "pinyin": "Yì qiān yuán.",
      "thaiMeaning": "หนึ่งพันหยวน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一千元。",
        "pinyin": "Yì qiān yuán.",
        "thaiMeaning": "หนึ่งพันหยวน"
      },
      {
        "scenario": "บอกราคาคอมพิวเตอร์",
        "hanzi": "这台电脑三千块。",
        "pinyin": "Zhè tái diàn nǎo sān qiān kuài.",
        "thaiMeaning": "คอมพิวเตอร์เครื่องนี้สามพันหยวน"
      },
      {
        "scenario": "วิ่งหนึ่งพันเมตร",
        "hanzi": "我们今天跑一千米。",
        "pinyin": "Wǒ men jīn tiān pǎo yì qiān mǐ.",
        "thaiMeaning": "วันนี้พวกเราวิ่งหนึ่งพันเมตร"
      }
    ]
  },
  {
    "id": "v249",
    "hanzi": "万",
    "pinyin": "wàn",
    "thaiMeaning": "หมื่น (10,000)",
    "example": {
      "hanzi": "一万人。",
      "pinyin": "Yí wàn rén.",
      "thaiMeaning": "หนึ่งหมื่นคน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一万人。",
        "pinyin": "Yí wàn rén.",
        "thaiMeaning": "หนึ่งหมื่นคน"
      },
      {
        "scenario": "บอกราคารถ",
        "hanzi": "这辆车十万块。",
        "pinyin": "Zhè liàng chē shí wàn kuài.",
        "thaiMeaning": "รถคันนี้หนึ่งแสนหยวน"
      },
      {
        "scenario": "เมืองนี้มีคนนับหมื่น",
        "hanzi": "这个小城有几万人。",
        "pinyin": "Zhè ge xiǎo chéng yǒu jǐ wàn rén.",
        "thaiMeaning": "เมืองเล็กนี้มีคนหลายหมื่นคน"
      }
    ]
  },
  {
    "id": "v250",
    "hanzi": "第一",
    "pinyin": "dìyī",
    "thaiMeaning": "อันดับหนึ่ง / ที่หนึ่ง",
    "example": {
      "hanzi": "拿第一。",
      "pinyin": "Ná dìyī.",
      "thaiMeaning": "ได้ที่หนึ่ง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "拿第一。",
        "pinyin": "Ná dì yī.",
        "thaiMeaning": "ได้ที่หนึ่ง"
      },
      {
        "scenario": "ได้อันดับหนึ่งในการสอบ",
        "hanzi": "她这次考试得了第一。",
        "pinyin": "Tā zhè cì kǎo shì dé le dì yī.",
        "thaiMeaning": "ครั้งนี้เธอสอบได้อันดับหนึ่ง"
      },
      {
        "scenario": "เล่าประสบการณ์ครั้งแรก",
        "hanzi": "这是我第一天上班。",
        "pinyin": "Zhè shì wǒ dì yī tiān shàng bān.",
        "thaiMeaning": "นี่เป็นวันแรกที่ฉันทำงาน"
      }
    ]
  },
  {
    "id": "v251",
    "hanzi": "个",
    "pinyin": "gè",
    "thaiMeaning": "อัน / คน (ลักษณะนาม)",
    "example": {
      "hanzi": "一个人。",
      "pinyin": "Yí gè rén.",
      "thaiMeaning": "คนหนึ่งคน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一个人。",
        "pinyin": "Yí gè rén.",
        "thaiMeaning": "คนหนึ่งคน"
      },
      {
        "scenario": "ขอแอปเปิลหนึ่งลูก",
        "hanzi": "我要一个苹果。",
        "pinyin": "Wǒ yào yí gè píng guǒ.",
        "thaiMeaning": "ฉันเอาแอปเปิลหนึ่งลูก"
      },
      {
        "scenario": "บอกจำนวนคนในทีม",
        "hanzi": "我们组有五个人。",
        "pinyin": "Wǒ men zǔ yǒu wǔ gè rén.",
        "thaiMeaning": "กลุ่มเรามีห้าคน"
      }
    ]
  },
  {
    "id": "v252",
    "hanzi": "只",
    "pinyin": "zhī",
    "thaiMeaning": "ตัว (สัตว์ / ข้าง)",
    "example": {
      "hanzi": "一只猫。",
      "pinyin": "Yì zhī māo.",
      "thaiMeaning": "แมวหนึ่งตัว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一只猫。",
        "pinyin": "Yì zhī māo.",
        "thaiMeaning": "แมวหนึ่งตัว"
      },
      {
        "scenario": "บอกว่ามีแมวสองตัว",
        "hanzi": "我家有两只猫。",
        "pinyin": "Wǒ jiā yǒu liǎng zhī māo.",
        "thaiMeaning": "บ้านฉันมีแมวสองตัว"
      },
      {
        "scenario": "ซื้อรองเท้าข้างเดียวไม่ได้",
        "hanzi": "这里只找到一只鞋。",
        "pinyin": "Zhè lǐ zhī zhǎo dào yì zhī xié.",
        "thaiMeaning": "ตรงนี้หารองเท้าเจอแค่ข้างเดียว"
      }
    ]
  },
  {
    "id": "v253",
    "hanzi": "件",
    "pinyin": "jiàn",
    "thaiMeaning": "ตัว (เสื้อผ้า) / เรื่อง (งาน)",
    "example": {
      "hanzi": "一件衣服。",
      "pinyin": "Yí jiàn yīfu.",
      "thaiMeaning": "เสื้อผ้าหนึ่งตัว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一件衣服。",
        "pinyin": "Yí jiàn yī fu.",
        "thaiMeaning": "เสื้อผ้าหนึ่งตัว"
      },
      {
        "scenario": "ลองเสื้อผ้าหนึ่งตัว",
        "hanzi": "我想试这件衣服。",
        "pinyin": "Wǒ xiǎng shì zhè jiàn yī fu.",
        "thaiMeaning": "ฉันอยากลองเสื้อตัวนี้"
      },
      {
        "scenario": "มีเรื่องสำคัญจะบอก",
        "hanzi": "我有一件重要的事告诉你。",
        "pinyin": "Wǒ yǒu yí jiàn zhòng yào de shì gào sù nǐ.",
        "thaiMeaning": "ฉันมีเรื่องสำคัญหนึ่งเรื่องจะบอกคุณ"
      }
    ]
  },
  {
    "id": "v254",
    "hanzi": "本",
    "pinyin": "běn",
    "thaiMeaning": "เล่ม (หนังสือ)",
    "example": {
      "hanzi": "一本书。",
      "pinyin": "Yì běn shū.",
      "thaiMeaning": "หนังสือหนึ่งเล่ม"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一本书。",
        "pinyin": "Yì běn shū.",
        "thaiMeaning": "หนังสือหนึ่งเล่ม"
      },
      {
        "scenario": "ยืมหนังสือสามเล่ม",
        "hanzi": "我借了三本书。",
        "pinyin": "Wǒ jiè le sān běn shū.",
        "thaiMeaning": "ฉันยืมหนังสือสามเล่ม"
      },
      {
        "scenario": "ถามว่าเป็นหนังสือเล่มไหน",
        "hanzi": "你说的是哪本字典？",
        "pinyin": "Nǐ shuō de shì nǎ běn zì diǎn?",
        "thaiMeaning": "คุณหมายถึงพจนานุกรมเล่มไหน?"
      }
    ]
  },
  {
    "id": "v255",
    "hanzi": "张",
    "pinyin": "zhāng",
    "thaiMeaning": "แผ่น / ใบ (กระดาษ/โต๊ะ/รูป)",
    "example": {
      "hanzi": "一张纸。",
      "pinyin": "Yì zhāng zhǐ.",
      "thaiMeaning": "กระดาษหนึ่งแผ่น"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一张纸。",
        "pinyin": "Yì zhāng zhǐ.",
        "thaiMeaning": "กระดาษหนึ่งแผ่น"
      },
      {
        "scenario": "ขอกระดาษหนึ่งแผ่น",
        "hanzi": "请给我一张纸。",
        "pinyin": "Qǐng gěi wǒ yì zhāng zhǐ.",
        "thaiMeaning": "ขอกระดาษหนึ่งแผ่น"
      },
      {
        "scenario": "จองโต๊ะหนึ่งตัว",
        "hanzi": "我订了一张靠窗的桌子。",
        "pinyin": "Wǒ dìng le yì zhāng kào chuāng de zhuō zi.",
        "thaiMeaning": "ฉันจองโต๊ะริมหน้าต่างหนึ่งตัว"
      }
    ]
  },
  {
    "id": "v256",
    "hanzi": "块",
    "pinyin": "kuài",
    "thaiMeaning": "ชิ้น / หยวน (เงิน)",
    "example": {
      "hanzi": "十块钱。",
      "pinyin": "Shí kuài qián.",
      "thaiMeaning": "เงินสิบหยวน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "十块钱。",
        "pinyin": "Shí kuài qián.",
        "thaiMeaning": "เงินสิบหยวน"
      },
      {
        "scenario": "บอกราคาสิบหยวน",
        "hanzi": "这杯茶十块钱。",
        "pinyin": "Zhè bēi chá shí kuài qián.",
        "thaiMeaning": "ชาถ้วยนี้สิบหยวน"
      },
      {
        "scenario": "แบ่งเค้กหนึ่งชิ้น",
        "hanzi": "给我一块蛋糕吧。",
        "pinyin": "Gěi wǒ yí kuài dàn gāo ba.",
        "thaiMeaning": "ขอเค้กให้ฉันหนึ่งชิ้น"
      }
    ]
  },
  {
    "id": "v257",
    "hanzi": "瓶",
    "pinyin": "píng",
    "thaiMeaning": "ขวด (ลักษณะนาม)",
    "example": {
      "hanzi": "一瓶水。",
      "pinyin": "Yì píng shuǐ.",
      "thaiMeaning": "น้ำหนึ่งขวด"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一瓶水。",
        "pinyin": "Yì píng shuǐ.",
        "thaiMeaning": "น้ำหนึ่งขวด"
      },
      {
        "scenario": "ซื้อน้ำสองขวด",
        "hanzi": "我要两瓶水。",
        "pinyin": "Wǒ yào liǎng píng shuǐ.",
        "thaiMeaning": "ฉันเอาน้ำสองขวด"
      },
      {
        "scenario": "เปิดนมหนึ่งขวด",
        "hanzi": "他打开了一瓶牛奶。",
        "pinyin": "Tā dǎ kāi le yì píng niú nǎi.",
        "thaiMeaning": "เขาเปิดนมหนึ่งขวด"
      }
    ]
  },
  {
    "id": "v258",
    "hanzi": "杯",
    "pinyin": "bēi",
    "thaiMeaning": "แก้ว (ลักษณะนาม)",
    "example": {
      "hanzi": "一杯咖啡。",
      "pinyin": "Yì bēi kāfēi.",
      "thaiMeaning": "กาแฟหนึ่งแก้ว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一杯咖啡。",
        "pinyin": "Yì bēi kā fēi.",
        "thaiMeaning": "กาแฟหนึ่งแก้ว"
      },
      {
        "scenario": "ชงชาให้แขกหนึ่งถ้วย",
        "hanzi": "我给客人倒了一杯茶。",
        "pinyin": "Wǒ gěi kè rén dǎo le yì bēi chá.",
        "thaiMeaning": "ฉันรินชาให้แขกหนึ่งถ้วย"
      },
      {
        "scenario": "ดื่มกาแฟสองแก้ว",
        "hanzi": "今天我喝了两杯咖啡。",
        "pinyin": "Jīn tiān wǒ hē le liǎng bēi kā fēi.",
        "thaiMeaning": "วันนี้ฉันดื่มกาแฟสองแก้ว"
      }
    ]
  },
  {
    "id": "v259",
    "hanzi": "条",
    "pinyin": "tiáo",
    "thaiMeaning": "สาย / เส้น (ถนน/กางเกง/ปลา)",
    "example": {
      "hanzi": "一条鱼。",
      "pinyin": "Yì tiáo yú.",
      "thaiMeaning": "ปลาหนึ่งตัว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一条鱼。",
        "pinyin": "Yì tiáo yú.",
        "thaiMeaning": "ปลาหนึ่งตัว"
      },
      {
        "scenario": "ซื้อกางเกงหนึ่งตัว",
        "hanzi": "我买了一条新裤子。",
        "pinyin": "Wǒ mǎi le yì tiáo xīn kù zǐ.",
        "thaiMeaning": "ฉันซื้อกางเกงใหม่หนึ่งตัว"
      },
      {
        "scenario": "เห็นปลาสามตัว",
        "hanzi": "水里有三条鱼。",
        "pinyin": "Shuǐ lǐ yǒu sān tiáo yú.",
        "thaiMeaning": "ในน้ำมีปลาสามตัว"
      }
    ]
  },
  {
    "id": "v260",
    "hanzi": "双",
    "pinyin": "shuāng",
    "thaiMeaning": "คู่ (รองเท้า/ตะเกียบ)",
    "example": {
      "hanzi": "一双鞋。",
      "pinyin": "Yì shuāng xié.",
      "thaiMeaning": "รองเท้าหนึ่งคู่"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一双鞋。",
        "pinyin": "Yì shuāng xié.",
        "thaiMeaning": "รองเท้าหนึ่งคู่"
      },
      {
        "scenario": "ลองรองเท้าหนึ่งคู่",
        "hanzi": "我想试那双鞋。",
        "pinyin": "Wǒ xiǎng shì nà shuāng xié.",
        "thaiMeaning": "ฉันอยากลองรองเท้าคู่นั้น"
      },
      {
        "scenario": "ขอตะเกียบสองคู่",
        "hanzi": "请给我们两双筷子。",
        "pinyin": "Qǐng gěi wǒ men liǎng shuāng kuài zi.",
        "thaiMeaning": "ขอตะเกียบให้พวกเราสองคู่"
      }
    ]
  },
  {
    "id": "v261",
    "hanzi": "以前",
    "pinyin": "yǐqián",
    "thaiMeaning": "เมื่อก่อน / ก่อนหน้า",
    "example": {
      "hanzi": "三年以前。",
      "pinyin": "Sān nián yǐqián.",
      "thaiMeaning": "สามปีก่อน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "三年以前。",
        "pinyin": "Sān nián yǐ qián.",
        "thaiMeaning": "สามปีก่อน"
      },
      {
        "scenario": "เปรียบเทียบกับอดีต",
        "hanzi": "这里以前没有这么多楼。",
        "pinyin": "Zhè lǐ yǐ qián méi yǒu zhè me duō lóu.",
        "thaiMeaning": "เมื่อก่อนที่นี่ไม่มีตึกมากขนาดนี้"
      },
      {
        "scenario": "เตือนให้มาถึงก่อนเวลา",
        "hanzi": "请在八点以前到。",
        "pinyin": "Qǐng zài bā diǎn yǐ qián dào.",
        "thaiMeaning": "กรุณามาถึงก่อนแปดโมง"
      }
    ]
  },
  {
    "id": "v262",
    "hanzi": "以后",
    "pinyin": "yǐhòu",
    "thaiMeaning": "หลังจากนี้ / ต่อไป",
    "example": {
      "hanzi": "以后再说。",
      "pinyin": "Yǐhòu zài shuō.",
      "thaiMeaning": "วันหลังค่อยคุยกัน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "以后再说。",
        "pinyin": "Yǐ hòu zài shuō.",
        "thaiMeaning": "วันหลังค่อยคุยกัน"
      },
      {
        "scenario": "นัดคุยกันหลังเลิกงาน",
        "hanzi": "下班以后再联系我。",
        "pinyin": "Xià bān yǐ hòu zài lián xì wǒ.",
        "thaiMeaning": "หลังเลิกงานค่อยติดต่อฉัน"
      },
      {
        "scenario": "สัญญาว่าคราวหน้าจะระวัง",
        "hanzi": "我以后会更小心。",
        "pinyin": "Wǒ yǐ hòu huì gèng xiǎo xīn.",
        "thaiMeaning": "ต่อไปฉันจะระวังมากขึ้น"
      }
    ]
  },
  {
    "id": "v263",
    "hanzi": "刚",
    "pinyin": "gāng",
    "thaiMeaning": "เพิ่งจะ",
    "example": {
      "hanzi": "刚到。",
      "pinyin": "Gāng dào.",
      "thaiMeaning": "เพิ่งมาถึง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "刚到。",
        "pinyin": "Gāng dào.",
        "thaiMeaning": "เพิ่งมาถึง"
      },
      {
        "scenario": "บอกว่าเพิ่งถึงบ้าน",
        "hanzi": "我刚到家。",
        "pinyin": "Wǒ gāng dào jiā.",
        "thaiMeaning": "ฉันเพิ่งถึงบ้าน"
      },
      {
        "scenario": "บอกว่าอาหารเพิ่งทำเสร็จ",
        "hanzi": "晚饭刚做好，快来吃吧。",
        "pinyin": "Wǎn fàn gāng zuò hǎo, kuài lái chī ba.",
        "thaiMeaning": "อาหารเย็นเพิ่งทำเสร็จ มากินเร็ว"
      }
    ]
  },
  {
    "id": "v264",
    "hanzi": "正",
    "pinyin": "zhèng",
    "thaiMeaning": "กำลัง...อยู่",
    "example": {
      "hanzi": "正在看。",
      "pinyin": "Zhèngzài kàn.",
      "thaiMeaning": "กำลังดูอยู่"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "正在看。",
        "pinyin": "Zhèng zài kàn.",
        "thaiMeaning": "กำลังดูอยู่"
      },
      {
        "scenario": "บอกว่ากำลังประชุม",
        "hanzi": "我正开会，晚点回复你。",
        "pinyin": "Wǒ zhèng kāi huì, wǎn diǎn huí fù nǐ.",
        "thaiMeaning": "ฉันกำลังประชุม เดี๋ยวตอบคุณทีหลัง"
      },
      {
        "scenario": "เจอเพื่อนกำลังจะออกจากบ้าน",
        "hanzi": "我正要出门，你就来了。",
        "pinyin": "Wǒ zhèng yào chū mén, nǐ jiù lái le.",
        "thaiMeaning": "ฉันกำลังจะออกจากบ้าน คุณก็มาพอดี"
      }
    ]
  },
  {
    "id": "v265",
    "hanzi": "经常",
    "pinyin": "jīngcháng",
    "thaiMeaning": "บ่อยๆ / ประจำ",
    "example": {
      "hanzi": "经常去。",
      "pinyin": "Jīngcháng qù.",
      "thaiMeaning": "ไปประจำ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "经常去。",
        "pinyin": "Jīng cháng qù.",
        "thaiMeaning": "ไปประจำ"
      },
      {
        "scenario": "เล่านิสัยออกกำลังกาย",
        "hanzi": "我经常下班后跑步。",
        "pinyin": "Wǒ jīng cháng xià bān hòu pǎo bù.",
        "thaiMeaning": "ฉันมักวิ่งหลังเลิกงาน"
      },
      {
        "scenario": "บอกว่าถนนเส้นนี้รถติดบ่อย",
        "hanzi": "这条路早上经常堵车。",
        "pinyin": "Zhè tiáo lù zǎo shàng jīng cháng dǔ chē.",
        "thaiMeaning": "ถนนเส้นนี้ตอนเช้ารถติดบ่อย"
      }
    ]
  },
  {
    "id": "v266",
    "hanzi": "有时",
    "pinyin": "yǒushí",
    "thaiMeaning": "บางครั้ง",
    "example": {
      "hanzi": "有时忙。",
      "pinyin": "Yǒushí máng.",
      "thaiMeaning": "บางครั้งก็ยุ่ง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "有时忙。",
        "pinyin": "Yǒu shí máng.",
        "thaiMeaning": "บางครั้งก็ยุ่ง"
      },
      {
        "scenario": "เล่าว่าบางครั้งทำงานที่บ้าน",
        "hanzi": "我有时在家工作。",
        "pinyin": "Wǒ yǒu shí zài jiā gōng zuò.",
        "thaiMeaning": "บางครั้งฉันทำงานที่บ้าน"
      },
      {
        "scenario": "บอกว่าฝนตกเป็นบางครั้ง",
        "hanzi": "这里下午有时会下雨。",
        "pinyin": "Zhè lǐ xià wǔ yǒu shí huì xià yǔ.",
        "thaiMeaning": "ที่นี่ตอนบ่ายบางครั้งฝนตก"
      }
    ]
  },
  {
    "id": "v267",
    "hanzi": "总是",
    "pinyin": "zǒngshì",
    "thaiMeaning": "มักจะ...เสมอ",
    "example": {
      "hanzi": "总是迟到。",
      "pinyin": "Zǒngshì chídào.",
      "thaiMeaning": "มาสายเสมอ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "总是迟到。",
        "pinyin": "Zǒng shì chí dào.",
        "thaiMeaning": "มาสายเสมอ"
      },
      {
        "scenario": "บ่นว่าเพื่อนมาสายเสมอ",
        "hanzi": "他开会总是迟到。",
        "pinyin": "Tā kāi huì zǒng shì chí dào.",
        "thaiMeaning": "เขามาประชุมสายเสมอ"
      },
      {
        "scenario": "ชมว่าแม่คอยช่วยตลอด",
        "hanzi": "妈妈总是支持我。",
        "pinyin": "Mā ma zǒng shì zhī chí wǒ.",
        "thaiMeaning": "แม่สนับสนุนฉันเสมอ"
      }
    ]
  },
  {
    "id": "v268",
    "hanzi": "已经",
    "pinyin": "yǐjīng",
    "thaiMeaning": "เรียบร้อยแล้ว",
    "example": {
      "hanzi": "已经懂了。",
      "pinyin": "Yǐjīng dǒng le.",
      "thaiMeaning": "เข้าใจแล้ว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "已经懂了。",
        "pinyin": "Yǐ jīng dǒng le.",
        "thaiMeaning": "เข้าใจแล้ว"
      },
      {
        "scenario": "บอกว่าทำงานเสร็จแล้ว",
        "hanzi": "我已经完成工作了。",
        "pinyin": "Wǒ yǐ jīng wán chéng gōng zuò le.",
        "thaiMeaning": "ฉันทำงานเสร็จแล้ว"
      },
      {
        "scenario": "แจ้งว่ารถออกไปแล้ว",
        "hanzi": "车已经走了。",
        "pinyin": "Chē yǐ jīng zǒu le.",
        "thaiMeaning": "รถออกไปแล้ว"
      }
    ]
  },
  {
    "id": "v269",
    "hanzi": "马上",
    "pinyin": "mǎshàng",
    "thaiMeaning": "ทันที / เดี๋ยวนี้",
    "example": {
      "hanzi": "马上去。",
      "pinyin": "Mǎshàng qù.",
      "thaiMeaning": "ไปทันที"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "马上去。",
        "pinyin": "Mǎ shàng qù.",
        "thaiMeaning": "ไปทันที"
      },
      {
        "scenario": "บอกว่าจะถึงในไม่ช้า",
        "hanzi": "我马上就到。",
        "pinyin": "Wǒ mǎ shàng jiù dào.",
        "thaiMeaning": "ฉันกำลังจะถึงเดี๋ยวนี้"
      },
      {
        "scenario": "เร่งให้ไปโรงพยาบาลทันที",
        "hanzi": "他发烧了，马上去医院。",
        "pinyin": "Tā fā shāo le, mǎ shàng qù yī yuàn.",
        "thaiMeaning": "เขามีไข้ ไปโรงพยาบาลทันที"
      }
    ]
  },
  {
    "id": "v270",
    "hanzi": "一直",
    "pinyin": "yìzhí",
    "thaiMeaning": "ตลอด / มาโดยตลอด",
    "example": {
      "hanzi": "一直学。",
      "pinyin": "Yìzhí xué.",
      "thaiMeaning": "เรียนมาโดยตลอด"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一直学。",
        "pinyin": "Yì zhí xué.",
        "thaiMeaning": "เรียนมาโดยตลอด"
      },
      {
        "scenario": "รอเพื่อนมาตลอด",
        "hanzi": "我一直在门口等你。",
        "pinyin": "Wǒ yì zhí zài mén kǒu děng nǐ.",
        "thaiMeaning": "ฉันรอคุณอยู่หน้าประตูตลอด"
      },
      {
        "scenario": "ฝนตกต่อเนื่องทั้งวัน",
        "hanzi": "雨一直下到晚上。",
        "pinyin": "Yǔ yì zhí xià dào wǎn shàng.",
        "thaiMeaning": "ฝนตกต่อเนื่องจนถึงตอนเย็น"
      }
    ]
  },
  {
    "id": "v271",
    "hanzi": "和",
    "pinyin": "hé",
    "thaiMeaning": "และ / กับ",
    "example": {
      "hanzi": "我和你。",
      "pinyin": "Wǒ hé nǐ.",
      "thaiMeaning": "ฉันและคุณ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "我和你。",
        "pinyin": "Wǒ hé nǐ.",
        "thaiMeaning": "ฉันและคุณ"
      },
      {
        "scenario": "บอกว่ากินข้าวกับเพื่อน",
        "hanzi": "我和朋友一起吃饭。",
        "pinyin": "Wǒ hé péng yǒu yì qǐ chī fàn.",
        "thaiMeaning": "ฉันกินข้าวกับเพื่อน"
      },
      {
        "scenario": "สั่งชาและกาแฟ",
        "hanzi": "我要一杯茶和一杯咖啡。",
        "pinyin": "Wǒ yào yì bēi chá hé yì bēi kā fēi.",
        "thaiMeaning": "ฉันเอาชาหนึ่งถ้วยและกาแฟหนึ่งแก้ว"
      }
    ]
  },
  {
    "id": "v272",
    "hanzi": "跟",
    "pinyin": "gēn",
    "thaiMeaning": "กับ / ตาม",
    "example": {
      "hanzi": "跟我走。",
      "pinyin": "Gēn wǒ zǒu.",
      "thaiMeaning": "ตามฉันมา"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "跟我走。",
        "pinyin": "Gēn wǒ zǒu.",
        "thaiMeaning": "ตามฉันมา"
      },
      {
        "scenario": "ขอคุยกับผู้จัดการ",
        "hanzi": "我想跟经理谈一谈。",
        "pinyin": "Wǒ xiǎng gēn jīng lǐ tán yi tán.",
        "thaiMeaning": "ฉันอยากคุยกับผู้จัดการ"
      },
      {
        "scenario": "ชวนให้เดินตามมา",
        "hanzi": "请跟我来。",
        "pinyin": "Qǐng gēn wǒ lái.",
        "thaiMeaning": "กรุณาตามฉันมา"
      }
    ]
  },
  {
    "id": "v273",
    "hanzi": "还是",
    "pinyin": "háishi",
    "thaiMeaning": "หรือว่า / หรือ",
    "example": {
      "hanzi": "茶还是咖啡？",
      "pinyin": "Chá háishi kāfēi?",
      "thaiMeaning": "ชาหรือว่ากาแฟ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "茶还是咖啡？",
        "pinyin": "Chá hái shì kā fēi?",
        "thaiMeaning": "ชาหรือว่ากาแฟ"
      },
      {
        "scenario": "ให้เลือกชาหรือกาแฟ",
        "hanzi": "你喝茶还是咖啡？",
        "pinyin": "Nǐ hē chá hái shì kā fēi?",
        "thaiMeaning": "คุณดื่มชาหรือกาแฟ?"
      },
      {
        "scenario": "ถามว่าจะไปวันนี้หรือพรุ่งนี้",
        "hanzi": "你今天去还是明天去？",
        "pinyin": "Nǐ jīn tiān qù hái shì míng tiān qù?",
        "thaiMeaning": "คุณจะไปวันนี้หรือพรุ่งนี้?"
      }
    ]
  },
  {
    "id": "v274",
    "hanzi": "或者",
    "pinyin": "huòzhě",
    "thaiMeaning": "หรือ (ประโยคบอกเล่า)",
    "example": {
      "hanzi": "今天或者明天。",
      "pinyin": "Jīntiān huòzhě míngtiān.",
      "thaiMeaning": "วันนี้หรือพรุ่งนี้"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "今天或者明天。",
        "pinyin": "Jīn tiān huò zhě míng tiān.",
        "thaiMeaning": "วันนี้หรือพรุ่งนี้"
      },
      {
        "scenario": "เสนอทางเลือกการเดินทาง",
        "hanzi": "我们可以坐车或者走路。",
        "pinyin": "Wǒ men kě yǐ zuò chē huò zhě zǒu lù.",
        "thaiMeaning": "พวกเรานั่งรถหรือเดินก็ได้"
      },
      {
        "scenario": "ให้เลือกเวลานัด",
        "hanzi": "星期六或者星期天都可以。",
        "pinyin": "Xīng qī liù huò zhě xīng qī tiān dōu kě yǐ.",
        "thaiMeaning": "วันเสาร์หรือวันอาทิตย์ก็ได้"
      }
    ]
  },
  {
    "id": "v275",
    "hanzi": "因为",
    "pinyin": "yīnwèi",
    "thaiMeaning": "เพราะว่า",
    "example": {
      "hanzi": "因为下雨。",
      "pinyin": "Yīnwèi xiàyǔ.",
      "thaiMeaning": "เพราะว่าฝนตก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "因为下雨。",
        "pinyin": "Yīn wèi xià yǔ.",
        "thaiMeaning": "เพราะว่าฝนตก"
      },
      {
        "scenario": "อธิบายเหตุผลที่มาสาย",
        "hanzi": "因为堵车，我迟到了。",
        "pinyin": "Yīn wèi dǔ chē, wǒ chí dào le.",
        "thaiMeaning": "เพราะรถติด ฉันจึงมาสาย"
      },
      {
        "scenario": "อธิบายว่าทำไมไม่ออกไป",
        "hanzi": "因为下雨，我们没出去。",
        "pinyin": "Yīn wèi xià yǔ, wǒ men méi chū qù.",
        "thaiMeaning": "เพราะฝนตก พวกเราจึงไม่ได้ออกไป"
      }
    ]
  },
  {
    "id": "v276",
    "hanzi": "所以",
    "pinyin": "suǒyǐ",
    "thaiMeaning": "ดังนั้น / จึง",
    "example": {
      "hanzi": "所以没去。",
      "pinyin": "Suǒyǐ méi qù.",
      "thaiMeaning": "ดังนั้นจึงไม่ได้ไป"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "所以没去。",
        "pinyin": "Suǒ yǐ méi qù.",
        "thaiMeaning": "ดังนั้นจึงไม่ได้ไป"
      },
      {
        "scenario": "สรุปเหตุผลที่ต้องพัก",
        "hanzi": "我生病了，所以今天请假。",
        "pinyin": "Wǒ shēng bìng le, suǒ yǐ jīn tiān qǐng jià.",
        "thaiMeaning": "ฉันป่วย ดังนั้นวันนี้จึงลางาน"
      },
      {
        "scenario": "อธิบายว่าหิวเพราะไม่ได้กินเช้า",
        "hanzi": "我没吃早餐，所以很饿。",
        "pinyin": "Wǒ méi chī zǎo cān, suǒ yǐ hěn è.",
        "thaiMeaning": "ฉันไม่ได้กินอาหารเช้า ดังนั้นจึงหิวมาก"
      }
    ]
  },
  {
    "id": "v277",
    "hanzi": "但是",
    "pinyin": "dànshì",
    "thaiMeaning": "แต่ว่า / แต่",
    "example": {
      "hanzi": "但是很好。",
      "pinyin": "Dànshì hěn hǎo.",
      "thaiMeaning": "แต่ว่าดีมาก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "但是很好。",
        "pinyin": "Dàn shì hěn hǎo.",
        "thaiMeaning": "แต่ว่าดีมาก"
      },
      {
        "scenario": "บอกว่าแพงแต่คุณภาพดี",
        "hanzi": "这个包很贵，但是质量很好。",
        "pinyin": "Zhè ge bāo hěn guì, dàn shì zhì liàng hěn hǎo.",
        "thaiMeaning": "กระเป๋าใบนี้แพง แต่คุณภาพดีมาก"
      },
      {
        "scenario": "บอกว่าเหนื่อยแต่มีความสุข",
        "hanzi": "今天很累，但是很开心。",
        "pinyin": "Jīn tiān hěn lèi, dàn shì hěn kāi xīn.",
        "thaiMeaning": "วันนี้เหนื่อย แต่มีความสุขมาก"
      }
    ]
  },
  {
    "id": "v278",
    "hanzi": "如果",
    "pinyin": "rúguǒ",
    "thaiMeaning": "ถ้าหาก / ถ้า",
    "example": {
      "hanzi": "如果有空。",
      "pinyin": "Rúguǒ yǒu kòng.",
      "thaiMeaning": "ถ้าหากมีเวลาว่าง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "如果有空。",
        "pinyin": "Rú guǒ yǒu kōng.",
        "thaiMeaning": "ถ้าหากมีเวลาว่าง"
      },
      {
        "scenario": "เสนอความช่วยเหลือ",
        "hanzi": "如果你需要，我可以帮忙。",
        "pinyin": "Rú guǒ nǐ xū yào, wǒ kě yǐ bāng máng.",
        "thaiMeaning": "ถ้าคุณต้องการ ฉันช่วยได้"
      },
      {
        "scenario": "เตือนให้พกร่มหากฝนตก",
        "hanzi": "如果下雨，记得带伞。",
        "pinyin": "Rú guǒ xià yǔ, jì de dài sǎn.",
        "thaiMeaning": "ถ้าฝนตก อย่าลืมพกร่ม"
      }
    ]
  },
  {
    "id": "v279",
    "hanzi": "虽然",
    "pinyin": "suīrán",
    "thaiMeaning": "แม้ว่า",
    "example": {
      "hanzi": "虽然累。",
      "pinyin": "Suīrán lèi.",
      "thaiMeaning": "แม้ว่าจะเหนื่อย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "虽然累。",
        "pinyin": "Suī rán lèi.",
        "thaiMeaning": "แม้ว่าจะเหนื่อย"
      },
      {
        "scenario": "พูดถึงอากาศที่หนาวแต่แจ่มใส",
        "hanzi": "虽然很冷，但是天气很好。",
        "pinyin": "Suī rán hěn lěng, dàn shì tiān qì hěn hǎo.",
        "thaiMeaning": "แม้จะหนาว แต่อากาศดีมาก"
      },
      {
        "scenario": "บอกว่ายากแต่จะพยายาม",
        "hanzi": "虽然很难，我还是想试试。",
        "pinyin": "Suī rán hěn nán, wǒ hái shì xiǎng shì shì.",
        "thaiMeaning": "แม้จะยาก ฉันก็ยังอยากลอง"
      }
    ]
  },
  {
    "id": "v280",
    "hanzi": "很",
    "pinyin": "hěn",
    "thaiMeaning": "มาก",
    "example": {
      "hanzi": "很好。",
      "pinyin": "Hěn hǎo.",
      "thaiMeaning": "ดีมาก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "很好。",
        "pinyin": "Hěn hǎo.",
        "thaiMeaning": "ดีมาก"
      },
      {
        "scenario": "ชมอาหารว่าอร่อย",
        "hanzi": "这道菜很好吃。",
        "pinyin": "Zhè dào cài hěn hǎo chī.",
        "thaiMeaning": "อาหารจานนี้อร่อยมาก"
      },
      {
        "scenario": "บอกว่ารู้สึกเหนื่อย",
        "hanzi": "我今天很累。",
        "pinyin": "Wǒ jīn tiān hěn lèi.",
        "thaiMeaning": "วันนี้ฉันเหนื่อยมาก"
      }
    ]
  },
  {
    "id": "v281",
    "hanzi": "太",
    "pinyin": "tài",
    "thaiMeaning": "เกินไป / มาก",
    "example": {
      "hanzi": "太好了。",
      "pinyin": "Tài hǎo le.",
      "thaiMeaning": "ดีจังเลย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "太好了。",
        "pinyin": "Tài hǎo le.",
        "thaiMeaning": "ดีจังเลย"
      },
      {
        "scenario": "บ่นว่าอาหารเผ็ดเกินไป",
        "hanzi": "这个菜太辣了。",
        "pinyin": "Zhè ge cài tài là le.",
        "thaiMeaning": "อาหารจานนี้เผ็ดเกินไป"
      },
      {
        "scenario": "ชมข่าวดีอย่างตื่นเต้น",
        "hanzi": "太好了，我们成功了！",
        "pinyin": "Tài hǎo le, wǒ men chéng gōng le!",
        "thaiMeaning": "ดีมาก พวกเราสำเร็จแล้ว!"
      }
    ]
  },
  {
    "id": "v282",
    "hanzi": "非常",
    "pinyin": "fēicháng",
    "thaiMeaning": "เป็นพิเศษ / มากๆ",
    "example": {
      "hanzi": "非常多。",
      "pinyin": "Fēicháng duō.",
      "thaiMeaning": "เยอะเป็นพิเศษ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "非常多。",
        "pinyin": "Fēi cháng duō.",
        "thaiMeaning": "เยอะเป็นพิเศษ"
      },
      {
        "scenario": "ขอบคุณอย่างมาก",
        "hanzi": "非常感谢你的帮助。",
        "pinyin": "Fēi cháng gǎn xiè nǐ de bāng zhù.",
        "thaiMeaning": "ขอบคุณสำหรับความช่วยเหลือของคุณมาก"
      },
      {
        "scenario": "ชมสถานที่ว่าสวยมาก",
        "hanzi": "这里的风景非常漂亮。",
        "pinyin": "Zhè lǐ de fēng jǐng fēi cháng piào liang.",
        "thaiMeaning": "วิวที่นี่สวยมาก"
      }
    ]
  },
  {
    "id": "v283",
    "hanzi": "最",
    "pinyin": "zuì",
    "thaiMeaning": "ที่สุด",
    "example": {
      "hanzi": "最好。",
      "pinyin": "Zuì hǎo.",
      "thaiMeaning": "ดีที่สุด"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "最好。",
        "pinyin": "Zuì hǎo.",
        "thaiMeaning": "ดีที่สุด"
      },
      {
        "scenario": "บอกอาหารที่ชอบที่สุด",
        "hanzi": "我最喜欢吃面条。",
        "pinyin": "Wǒ zuì xǐ huan chī miàn tiáo.",
        "thaiMeaning": "ฉันชอบกินบะหมี่ที่สุด"
      },
      {
        "scenario": "เลือกเส้นทางที่เร็วที่สุด",
        "hanzi": "这是去机场最快的路。",
        "pinyin": "Zhè shì qù jī chǎng zuì kuài de lù.",
        "thaiMeaning": "นี่คือทางไปสนามบินที่เร็วที่สุด"
      }
    ]
  },
  {
    "id": "v284",
    "hanzi": "特别",
    "pinyin": "tèbié",
    "thaiMeaning": "พิเศษ / เป็นพิเศษ",
    "example": {
      "hanzi": "特别喜欢。",
      "pinyin": "Tèbié xǐhuan.",
      "thaiMeaning": "ชอบเป็นพิเศษ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "特别喜欢。",
        "pinyin": "Tè bié xǐ huan.",
        "thaiMeaning": "ชอบเป็นพิเศษ"
      },
      {
        "scenario": "บอกว่าอากาศวันนี้หนาวเป็นพิเศษ",
        "hanzi": "今天特别冷。",
        "pinyin": "Jīn tiān tè bié lěng.",
        "thaiMeaning": "วันนี้หนาวเป็นพิเศษ"
      },
      {
        "scenario": "เตรียมของขวัญพิเศษ",
        "hanzi": "我给你准备了一份特别的礼物。",
        "pinyin": "Wǒ gěi nǐ zhǔn bèi le yí fèn tè bié de lǐ wù.",
        "thaiMeaning": "ฉันเตรียมของขวัญพิเศษให้คุณ"
      }
    ]
  },
  {
    "id": "v285",
    "hanzi": "不",
    "pinyin": "bù",
    "thaiMeaning": "ไม่",
    "example": {
      "hanzi": "不去。",
      "pinyin": "Bú qù.",
      "thaiMeaning": "ไม่ไป"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "不去。",
        "pinyin": "Bú qù.",
        "thaiMeaning": "ไม่ไป"
      },
      {
        "scenario": "ปฏิเสธว่าไม่ดื่มกาแฟ",
        "hanzi": "我不喝咖啡。",
        "pinyin": "Wǒ bù hē kā fēi.",
        "thaiMeaning": "ฉันไม่ดื่มกาแฟ"
      },
      {
        "scenario": "บอกว่าไม่รู้จักคนหนึ่ง",
        "hanzi": "我不认识他。",
        "pinyin": "Wǒ bú rèn shi tā.",
        "thaiMeaning": "ฉันไม่รู้จักเขา"
      }
    ]
  },
  {
    "id": "v286",
    "hanzi": "没",
    "pinyin": "méi",
    "thaiMeaning": "ไม่ / ไม่มี",
    "example": {
      "hanzi": "没做。",
      "pinyin": "Méi zuò.",
      "thaiMeaning": "ไม่ได้ทำ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "没做。",
        "pinyin": "Méi zuò.",
        "thaiMeaning": "ไม่ได้ทำ"
      },
      {
        "scenario": "บอกว่าไม่มีเงินสด",
        "hanzi": "我没带现金。",
        "pinyin": "Wǒ méi dài xiàn jīn.",
        "thaiMeaning": "ฉันไม่ได้พกเงินสด"
      },
      {
        "scenario": "บอกว่ายังไม่ได้กินข้าว",
        "hanzi": "我还没吃饭。",
        "pinyin": "Wǒ hái méi chī fàn.",
        "thaiMeaning": "ฉันยังไม่ได้กินข้าว"
      }
    ]
  },
  {
    "id": "v287",
    "hanzi": "极了",
    "pinyin": "jí le",
    "thaiMeaning": "อย่างยิ่ง / สุดๆ",
    "example": {
      "hanzi": "好极了！",
      "pinyin": "Hǎo jí le!",
      "thaiMeaning": "เยี่ยมสุดๆ!"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "好极了！",
        "pinyin": "Hǎo jí le!",
        "thaiMeaning": "เยี่ยมสุดๆ!"
      },
      {
        "scenario": "ชมวิวว่าสวยอย่างยิ่ง",
        "hanzi": "山上的风景美极了。",
        "pinyin": "Shān shàng de fēng jǐng měi jí le.",
        "thaiMeaning": "วิวบนภูเขาสวยมากๆ"
      },
      {
        "scenario": "บอกว่าหลังออกกำลังเหนื่อยสุดๆ",
        "hanzi": "跑完步以后累极了。",
        "pinyin": "Pǎo wán bù yǐ hòu lèi jí le.",
        "thaiMeaning": "หลังวิ่งเสร็จเหนื่อยสุดๆ"
      }
    ]
  },
  {
    "id": "v288",
    "hanzi": "越",
    "pinyin": "yuè",
    "thaiMeaning": "ยิ่ง...ยิ่ง...",
    "example": {
      "hanzi": "越来越好。",
      "pinyin": "Yuè lái yuè hǎo.",
      "thaiMeaning": "ยิ่งนานยิ่งดีขึ้น"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "越来越好。",
        "pinyin": "Yuè lái yuè hǎo.",
        "thaiMeaning": "ยิ่งนานยิ่งดีขึ้น"
      },
      {
        "scenario": "บอกว่าเรียนยิ่งนานยิ่งเข้าใจ",
        "hanzi": "中文越学越有意思。",
        "pinyin": "Zhōng wén yuè xué yuè yǒu yì sī.",
        "thaiMeaning": "ภาษาจีนยิ่งเรียนยิ่งน่าสนใจ"
      },
      {
        "scenario": "บอกว่าฝนตกหนักขึ้น",
        "hanzi": "雨越下越大。",
        "pinyin": "Yǔ yuè xià yuè dà.",
        "thaiMeaning": "ฝนยิ่งตกยิ่งหนัก"
      }
    ]
  },
  {
    "id": "v289",
    "hanzi": "更加",
    "pinyin": "gèngjiā",
    "thaiMeaning": "ยิ่งขึ้นไปอีก",
    "example": {
      "hanzi": "更加努力。",
      "pinyin": "Gèngjiā nǔlì.",
      "thaiMeaning": "พยายามยิ่งขึ้นไปอีก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "更加努力。",
        "pinyin": "Gèng jiā nǔ lì.",
        "thaiMeaning": "พยายามยิ่งขึ้นไปอีก"
      },
      {
        "scenario": "บอกว่าหลังฝึกแล้วมั่นใจขึ้น",
        "hanzi": "练习以后，我更加有信心了。",
        "pinyin": "Liàn xí yǐ hòu, wǒ gèng jiā yǒu xìn xīn le.",
        "thaiMeaning": "หลังฝึกแล้วฉันมั่นใจยิ่งขึ้น"
      },
      {
        "scenario": "หวังว่าจะทำงานให้ดีขึ้น",
        "hanzi": "以后我要更加努力。",
        "pinyin": "Yǐ hòu wǒ yào gèng jiā nǔ lì.",
        "thaiMeaning": "ต่อไปฉันจะพยายามยิ่งขึ้น"
      }
    ]
  },
  {
    "id": "v290",
    "hanzi": "路",
    "pinyin": "lù",
    "thaiMeaning": "ถนน / ทาง",
    "example": {
      "hanzi": "过马路。",
      "pinyin": "Guò mǎlù.",
      "thaiMeaning": "ข้ามถนน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "过马路。",
        "pinyin": "Guò mǎ lù.",
        "thaiMeaning": "ข้ามถนน"
      },
      {
        "scenario": "ถามทางไปโรงพยาบาล",
        "hanzi": "去医院走哪条路？",
        "pinyin": "Qù yī yuàn zǒu nǎ tiáo lù?",
        "thaiMeaning": "ไปโรงพยาบาลใช้ถนนเส้นไหน?"
      },
      {
        "scenario": "เตือนว่าถนนลื่น",
        "hanzi": "下雨后路很滑。",
        "pinyin": "Xià yǔ hòu lù hěn huá.",
        "thaiMeaning": "หลังฝนตกถนนลื่นมาก"
      }
    ]
  },
  {
    "id": "v291",
    "hanzi": "街",
    "pinyin": "jiē",
    "thaiMeaning": "ถนนสายหลัก / ถนน",
    "example": {
      "hanzi": "逛街。",
      "pinyin": "Guàng jiē.",
      "thaiMeaning": "เดินเที่ยวถนน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "逛街。",
        "pinyin": "Guàng jiē.",
        "thaiMeaning": "เดินเที่ยวถนน"
      },
      {
        "scenario": "บอกว่าร้านอยู่ฝั่งตรงข้ามถนน",
        "hanzi": "商店在街对面。",
        "pinyin": "Shāng diàn zài jiē duì miàn.",
        "thaiMeaning": "ร้านค้าอยู่ฝั่งตรงข้ามถนน"
      },
      {
        "scenario": "เดินเล่นบนถนนเก่า",
        "hanzi": "我们在老街上走了一下午。",
        "pinyin": "Wǒ men zài lǎo jiē shàng zǒu le yí xià wǔ.",
        "thaiMeaning": "พวกเราเดินเล่นบนถนนเก่าตลอดบ่าย"
      }
    ]
  },
  {
    "id": "v292",
    "hanzi": "桥",
    "pinyin": "qiáo",
    "thaiMeaning": "สะพาน",
    "example": {
      "hanzi": "过桥。",
      "pinyin": "Guò qiáo.",
      "thaiMeaning": "ข้ามสะพาน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "过桥。",
        "pinyin": "Guò qiáo.",
        "thaiMeaning": "ข้ามสะพาน"
      },
      {
        "scenario": "ข้ามสะพานไปอีกฝั่ง",
        "hanzi": "过了这座桥就到了。",
        "pinyin": "Guò le zhè zuò qiáo jiù dào le.",
        "thaiMeaning": "ข้ามสะพานนี้ก็ถึงแล้ว"
      },
      {
        "scenario": "ชมวิวจากบนสะพาน",
        "hanzi": "站在桥上可以看到河。",
        "pinyin": "Zhàn zài qiáo shàng kě yǐ kàn dào hé.",
        "thaiMeaning": "ยืนบนสะพานสามารถมองเห็นแม่น้ำ"
      }
    ]
  },
  {
    "id": "v293",
    "hanzi": "楼",
    "pinyin": "lóu",
    "thaiMeaning": "ตึก / ชั้น",
    "example": {
      "hanzi": "高楼。",
      "pinyin": "Gāo lóu.",
      "thaiMeaning": "ตึกสูง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "高楼。",
        "pinyin": "Gāo lóu.",
        "thaiMeaning": "ตึกสูง"
      },
      {
        "scenario": "บอกว่าบริษัทอยู่ชั้นสิบ",
        "hanzi": "公司在十楼。",
        "pinyin": "Gōng sī zài shí lóu.",
        "thaiMeaning": "บริษัทอยู่ชั้นสิบ"
      },
      {
        "scenario": "รอเพื่อนอยู่ข้างล่างตึก",
        "hanzi": "我在楼下等你。",
        "pinyin": "Wǒ zài lóu xià děng nǐ.",
        "thaiMeaning": "ฉันรอคุณอยู่ข้างล่างตึก"
      }
    ]
  },
  {
    "id": "v294",
    "hanzi": "船",
    "pinyin": "chuán",
    "thaiMeaning": "เรือ",
    "example": {
      "hanzi": "坐船。",
      "pinyin": "Zuò chuán.",
      "thaiMeaning": "นั่งเรือ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "坐船。",
        "pinyin": "Zuò chuán.",
        "thaiMeaning": "นั่งเรือ"
      },
      {
        "scenario": "นั่งเรือข้ามแม่น้ำ",
        "hanzi": "我们坐船过河。",
        "pinyin": "Wǒ men zuò chuán guò hé.",
        "thaiMeaning": "พวกเรานั่งเรือข้ามแม่น้ำ"
      },
      {
        "scenario": "ถามเวลาเรือออก",
        "hanzi": "下一班船几点开？",
        "pinyin": "Xià yì bān chuán jǐ diǎn kāi?",
        "thaiMeaning": "เรือเที่ยวถัดไปออกกี่โมง?"
      }
    ]
  },
  {
    "id": "v295",
    "hanzi": "钞票",
    "pinyin": "chāopiào",
    "thaiMeaning": "ธนบัตร / แบงก์",
    "example": {
      "hanzi": "数钞票。",
      "pinyin": "Shǔ chāopiào.",
      "thaiMeaning": "นับธนบัตร"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "数钞票。",
        "pinyin": "Shù chāo piào.",
        "thaiMeaning": "นับธนบัตร"
      },
      {
        "scenario": "แลกธนบัตรใบใหญ่",
        "hanzi": "这张钞票可以换开吗？",
        "pinyin": "Zhè zhāng chāo piào kě yǐ huàn kāi ma?",
        "thaiMeaning": "ธนบัตรใบนี้แลกเป็นเงินย่อยได้ไหม?"
      },
      {
        "scenario": "ตรวจธนบัตรก่อนรับ",
        "hanzi": "请检查一下这张钞票。",
        "pinyin": "Qǐng jiǎn chá yí xià zhè zhāng chāo piào.",
        "thaiMeaning": "กรุณาตรวจธนบัตรใบนี้"
      }
    ]
  },
  {
    "id": "v296",
    "hanzi": "信用卡",
    "pinyin": "xìnyòngkǎ",
    "thaiMeaning": "บัตรเครดิต",
    "example": {
      "hanzi": "刷信用卡。",
      "pinyin": "Shuā xìnyòngkǎ.",
      "thaiMeaning": "รูดบัตรเครดิต"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "刷信用卡。",
        "pinyin": "Shuā xìn yòng kǎ.",
        "thaiMeaning": "รูดบัตรเครดิต"
      },
      {
        "scenario": "ถามว่ารับบัตรเครดิตไหม",
        "hanzi": "这里可以用信用卡吗？",
        "pinyin": "Zhè lǐ kě yǐ yòng xìn yòng kǎ ma?",
        "thaiMeaning": "ที่นี่ใช้บัตรเครดิตได้ไหม?"
      },
      {
        "scenario": "พบว่าลืมบัตรเครดิต",
        "hanzi": "我的信用卡忘在家了。",
        "pinyin": "Wǒ de xìn yòng kǎ wàng zài jiā le.",
        "thaiMeaning": "ฉันลืมบัตรเครดิตไว้ที่บ้าน"
      }
    ]
  },
  {
    "id": "v297",
    "hanzi": "现金",
    "pinyin": "xiànjīn",
    "thaiMeaning": "เงินสด",
    "example": {
      "hanzi": "付现金。",
      "pinyin": "Fù xiànjīn.",
      "thaiMeaning": "จ่ายเงินสด"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "付现金。",
        "pinyin": "Fù xiàn jīn.",
        "thaiMeaning": "จ่ายเงินสด"
      },
      {
        "scenario": "แจ้งว่ารับเฉพาะเงินสด",
        "hanzi": "这家小店只收现金。",
        "pinyin": "Zhè jiā xiǎo diàn zhī shōu xiàn jīn.",
        "thaiMeaning": "ร้านเล็กนี้รับเฉพาะเงินสด"
      },
      {
        "scenario": "ถามว่ามีเงินสดหรือไม่",
        "hanzi": "你身上有现金吗？",
        "pinyin": "Nǐ shēn shàng yǒu xiàn jīn ma?",
        "thaiMeaning": "คุณมีเงินสดติดตัวไหม?"
      }
    ]
  },
  {
    "id": "v298",
    "hanzi": "价格",
    "pinyin": "jiàgé",
    "thaiMeaning": "ราคา",
    "example": {
      "hanzi": "合理价格。",
      "pinyin": "Hélǐ jiàgé.",
      "thaiMeaning": "ราคาสมเหตุสมผล"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "合理价格。",
        "pinyin": "Hé lǐ jià gé.",
        "thaiMeaning": "ราคาสมเหตุสมผล"
      },
      {
        "scenario": "ถามราคาก่อนตัดสินใจซื้อ",
        "hanzi": "请问，这个价格包括运费吗？",
        "pinyin": "Qǐng wèn, zhè ge jià gé bāo kuò yùn fèi ma?",
        "thaiMeaning": "ขอถามหน่อย ราคานี้รวมค่าขนส่งไหม?"
      },
      {
        "scenario": "เปรียบเทียบราคาสองร้าน",
        "hanzi": "两家店的价格差不多。",
        "pinyin": "Liǎng jiā diàn de jià gé chà bù duō.",
        "thaiMeaning": "ราคาของสองร้านใกล้เคียงกัน"
      }
    ]
  },
  {
    "id": "v299",
    "hanzi": "折扣",
    "pinyin": "zhékòu",
    "thaiMeaning": "ส่วนลด / ลดราคา",
    "example": {
      "hanzi": "打折。",
      "pinyin": "Dǎzhé.",
      "thaiMeaning": "ลดราคา"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "打折。",
        "pinyin": "Dǎ zhé.",
        "thaiMeaning": "ลดราคา"
      },
      {
        "scenario": "ถามส่วนลดในร้านค้า",
        "hanzi": "这件衣服有折扣吗？",
        "pinyin": "Zhè jiàn yī fu yǒu zhé kòu ma?",
        "thaiMeaning": "เสื้อตัวนี้มีส่วนลดไหม?"
      },
      {
        "scenario": "แจ้งส่วนลดสำหรับสมาชิก",
        "hanzi": "会员可以享受九折折扣。",
        "pinyin": "Huì yuán kě yǐ xiǎng shòu jiǔ zhé zhé kòu.",
        "thaiMeaning": "สมาชิกได้รับส่วนลดสิบเปอร์เซ็นต์"
      }
    ]
  },
  {
    "id": "v300",
    "hanzi": "免费",
    "pinyin": "miǎnfèi",
    "thaiMeaning": "ฟรี / ไม่เสียเงิน",
    "example": {
      "hanzi": "免费体验。",
      "pinyin": "Miǎnfèi tǐyàn.",
      "thaiMeaning": "ทดลองฟรี"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "免费体验。",
        "pinyin": "Miǎn fèi tǐ yàn.",
        "thaiMeaning": "ทดลองฟรี"
      },
      {
        "scenario": "ถามว่าบริการเสียเงินหรือไม่",
        "hanzi": "酒店提供免费早餐。",
        "pinyin": "Jiǔ diàn tí gōng miǎn fèi zǎo cān.",
        "thaiMeaning": "โรงแรมมีอาหารเช้าฟรี"
      },
      {
        "scenario": "ดาวน์โหลดแอปโดยไม่เสียเงิน",
        "hanzi": "这个软件可以免费下载。",
        "pinyin": "Zhè ge ruǎn jiàn kě yǐ miǎn fèi xià zài.",
        "thaiMeaning": "ซอฟต์แวร์นี้ดาวน์โหลดฟรีได้"
      }
    ]
  },
  {
    "id": "v301",
    "hanzi": "甜",
    "pinyin": "tián",
    "thaiMeaning": "หวาน",
    "example": {
      "hanzi": "很甜。",
      "pinyin": "Hěn tián.",
      "thaiMeaning": "หวานมาก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "很甜。",
        "pinyin": "Hěn tián.",
        "thaiMeaning": "หวานมาก"
      },
      {
        "scenario": "ชิมขนมแล้วรู้สึกหวานเกินไป",
        "hanzi": "这个蛋糕太甜了。",
        "pinyin": "Zhè ge dàn gāo tài tián le.",
        "thaiMeaning": "เค้กนี้หวานเกินไป"
      },
      {
        "scenario": "สั่งกาแฟหวานน้อย",
        "hanzi": "咖啡请少放糖，不要太甜。",
        "pinyin": "Kā fēi qǐng shǎo fàng táng, bú yào tài tián.",
        "thaiMeaning": "กาแฟใส่น้ำตาลน้อยๆ อย่าหวานเกินไป"
      }
    ]
  },
  {
    "id": "v302",
    "hanzi": "咸",
    "pinyin": "xián",
    "thaiMeaning": "เค็ม",
    "example": {
      "hanzi": "有点咸。",
      "pinyin": "Yǒudiǎnr xián.",
      "thaiMeaning": "เค็มนิดหน่อย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "有点咸。",
        "pinyin": "Yǒu diǎn xián.",
        "thaiMeaning": "เค็มนิดหน่อย"
      },
      {
        "scenario": "ชิมซุปแล้วพบว่าเค็ม",
        "hanzi": "这个汤有点咸。",
        "pinyin": "Zhè ge tāng yǒu diǎn xián.",
        "thaiMeaning": "ซุปนี้เค็มนิดหน่อย"
      },
      {
        "scenario": "ขออาหารรสไม่เค็ม",
        "hanzi": "我吃得比较清淡，请别做太咸。",
        "pinyin": "Wǒ chī dé bǐ jiào qīng dàn, qǐng bié zuò tài xián.",
        "thaiMeaning": "ฉันกินรสอ่อน กรุณาอย่าทำเค็มเกินไป"
      }
    ]
  },
  {
    "id": "v303",
    "hanzi": "辣",
    "pinyin": "là",
    "thaiMeaning": "เผ็ด",
    "example": {
      "hanzi": "太辣了。",
      "pinyin": "Tài là le.",
      "thaiMeaning": "เผ็ดเกินไป"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "太辣了。",
        "pinyin": "Tài là le.",
        "thaiMeaning": "เผ็ดเกินไป"
      },
      {
        "scenario": "ถามระดับความเผ็ด",
        "hanzi": "这个菜辣不辣？",
        "pinyin": "Zhè ge cài là bu là?",
        "thaiMeaning": "อาหารจานนี้เผ็ดไหม?"
      },
      {
        "scenario": "สั่งอาหารไม่เผ็ด",
        "hanzi": "我不能吃辣，请不要放辣椒。",
        "pinyin": "Wǒ bù néng chī là, qǐng bú yào fàng là jiāo.",
        "thaiMeaning": "ฉันกินเผ็ดไม่ได้ กรุณาอย่าใส่พริก"
      }
    ]
  },
  {
    "id": "v304",
    "hanzi": "酸",
    "pinyin": "suān",
    "thaiMeaning": "เปรี้ยว / เมื่อย",
    "example": {
      "hanzi": "酸甜。",
      "pinyin": "Suāntián.",
      "thaiMeaning": "เปรี้ยวหวาน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "酸甜。",
        "pinyin": "Suān tián.",
        "thaiMeaning": "เปรี้ยวหวาน"
      },
      {
        "scenario": "ชิมผลไม้รสเปรี้ยว",
        "hanzi": "这个橙子有点酸。",
        "pinyin": "Zhè ge chéng zǐ yǒu diǎn suān.",
        "thaiMeaning": "ส้มลูกนี้เปรี้ยวนิดหน่อย"
      },
      {
        "scenario": "บอกอาการเมื่อยหลังออกกำลัง",
        "hanzi": "跑步以后我的腿很酸。",
        "pinyin": "Pǎo bù yǐ hòu wǒ de tuǐ hěn suān.",
        "thaiMeaning": "หลังวิ่ง ขาของฉันเมื่อยมาก"
      }
    ]
  },
  {
    "id": "v305",
    "hanzi": "苦",
    "pinyin": "kǔ",
    "thaiMeaning": "ขม",
    "example": {
      "hanzi": "中药苦。",
      "pinyin": "Zhōngyào kǔ.",
      "thaiMeaning": "ยาจีนขม"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "中药苦。",
        "pinyin": "Zhōng yào kǔ.",
        "thaiMeaning": "ยาจีนขม"
      },
      {
        "scenario": "บอกว่ายามีรสขม",
        "hanzi": "这个药太苦了。",
        "pinyin": "Zhè ge yào tài kǔ le.",
        "thaiMeaning": "ยานี้ขมเกินไป"
      },
      {
        "scenario": "ดื่มกาแฟดำที่ขม",
        "hanzi": "这杯黑咖啡有点苦。",
        "pinyin": "Zhè bēi hēi kā fēi yǒu diǎn kǔ.",
        "thaiMeaning": "กาแฟดำแก้วนี้ขมนิดหน่อย"
      }
    ]
  },
  {
    "id": "v306",
    "hanzi": "香",
    "pinyin": "xiāng",
    "thaiMeaning": "หอม / อร่อย",
    "example": {
      "hanzi": "真香！",
      "pinyin": "Zhēn xiāng!",
      "thaiMeaning": "หอมมาก!"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "真香！",
        "pinyin": "Zhēn xiāng!",
        "thaiMeaning": "หอมมาก!"
      },
      {
        "scenario": "ได้กลิ่นอาหารจากครัว",
        "hanzi": "厨房里的菜真香。",
        "pinyin": "Chú fáng lǐ de cài zhēn xiāng.",
        "thaiMeaning": "อาหารในครัวหอมจริงๆ"
      },
      {
        "scenario": "ชมชาที่มีกลิ่นหอม",
        "hanzi": "这种茶喝起来很香。",
        "pinyin": "Zhè zhǒng chá hē qǐ lái hěn xiāng.",
        "thaiMeaning": "ชาชนิดนี้ดื่มแล้วหอมมาก"
      }
    ]
  },
  {
    "id": "v307",
    "hanzi": "好吃",
    "pinyin": "hǎochī",
    "thaiMeaning": "อร่อย (อาหาร)",
    "example": {
      "hanzi": "很好吃。",
      "pinyin": "Hěn hǎochī.",
      "thaiMeaning": "อร่อยมาก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "很好吃。",
        "pinyin": "Hěn hǎo chī.",
        "thaiMeaning": "อร่อยมาก"
      },
      {
        "scenario": "ชมอาหารที่เพื่อนทำ",
        "hanzi": "你做的饭真好吃。",
        "pinyin": "Nǐ zuò de fàn zhēn hǎo chī.",
        "thaiMeaning": "อาหารที่คุณทำอร่อยจริงๆ"
      },
      {
        "scenario": "แนะนำร้านให้เพื่อน",
        "hanzi": "这家饭店便宜又好吃。",
        "pinyin": "Zhè jiā fàn diàn pián yi yòu hǎo chī.",
        "thaiMeaning": "ร้านนี้ทั้งถูกและอร่อย"
      }
    ]
  },
  {
    "id": "v308",
    "hanzi": "好喝",
    "pinyin": "hǎohē",
    "thaiMeaning": "อร่อย (เครื่องดื่ม)",
    "example": {
      "hanzi": "真好喝。",
      "pinyin": "Zhēn hǎohē.",
      "thaiMeaning": "อร่อยดื่มง่าย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "真好喝。",
        "pinyin": "Zhēn hǎo hē.",
        "thaiMeaning": "อร่อยดื่มง่าย"
      },
      {
        "scenario": "ชมเครื่องดื่มในร้าน",
        "hanzi": "这里的奶茶很好喝。",
        "pinyin": "Zhè lǐ de nǎi chá hěn hǎo hē.",
        "thaiMeaning": "ชานมที่นี่อร่อยมาก"
      },
      {
        "scenario": "ถามว่าเครื่องดื่มชนิดนี้อร่อยไหม",
        "hanzi": "你觉得这个果汁好喝吗？",
        "pinyin": "Nǐ jué de zhè ge guǒ zhī hǎo hē ma?",
        "thaiMeaning": "คุณคิดว่าน้ำผลไม้นี้อร่อยไหม?"
      }
    ]
  },
  {
    "id": "v309",
    "hanzi": "生病",
    "pinyin": "shēngbìng",
    "thaiMeaning": "ป่วย / ป่วยไข้",
    "example": {
      "hanzi": "生病了。",
      "pinyin": "Shēngbìng le.",
      "thaiMeaning": "ป่วยแล้ว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "生病了。",
        "pinyin": "Shēng bìng le.",
        "thaiMeaning": "ป่วยแล้ว"
      },
      {
        "scenario": "ลางานเพราะป่วย",
        "hanzi": "我生病了，今天不能上班。",
        "pinyin": "Wǒ shēng bìng le, jīn tiān bù néng shàng bān.",
        "thaiMeaning": "ฉันป่วย วันนี้ไปทำงานไม่ได้"
      },
      {
        "scenario": "ดูแลเพื่อนไม่ให้ป่วย",
        "hanzi": "天气冷，多穿点，别生病了。",
        "pinyin": "Tiān qì lěng, duō chuān diǎn, bié shēng bìng le.",
        "thaiMeaning": "อากาศหนาว ใส่เสื้อเพิ่ม อย่าป่วยนะ"
      }
    ]
  },
  {
    "id": "v310",
    "hanzi": "感冒",
    "pinyin": "gǎnmào",
    "thaiMeaning": "เป็นหวัด",
    "example": {
      "hanzi": "得了感冒。",
      "pinyin": "Dé le gǎnmào.",
      "thaiMeaning": "เป็นหวัด"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "得了感冒。",
        "pinyin": "Dé le gǎn mào.",
        "thaiMeaning": "เป็นหวัด"
      },
      {
        "scenario": "บอกอาการกับเพื่อน",
        "hanzi": "我好像感冒了，一直流鼻涕。",
        "pinyin": "Wǒ hǎo xiàng gǎn mào le, yì zhí liú bí tì.",
        "thaiMeaning": "เหมือนฉันเป็นหวัด น้ำมูกไหลตลอด"
      },
      {
        "scenario": "แนะนำให้พักเมื่อเป็นหวัด",
        "hanzi": "感冒了就多喝水，好好休息。",
        "pinyin": "Gǎn mào le jiù duō hē shuǐ, hǎo hǎo xiū xi.",
        "thaiMeaning": "เป็นหวัดก็ดื่มน้ำมากๆ และพักผ่อนให้ดี"
      }
    ]
  },
  {
    "id": "v311",
    "hanzi": "发烧",
    "pinyin": "fāshāo",
    "thaiMeaning": "ตัวร้อน / มีไข้",
    "example": {
      "hanzi": "发烧三十八度。",
      "pinyin": "Fāshāo sānshíbā dù.",
      "thaiMeaning": "ไข้ขึ้น 38 องศา"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "发烧三十八度。",
        "pinyin": "Fā shāo sān shí bā dù.",
        "thaiMeaning": "ไข้ขึ้น 38 องศา"
      },
      {
        "scenario": "วัดไข้แล้วพบว่ามีไข้",
        "hanzi": "孩子发烧到三十九度。",
        "pinyin": "Hái zi fā shāo dào sān shí jiǔ dù.",
        "thaiMeaning": "เด็กมีไข้ถึงสามสิบเก้าองศา"
      },
      {
        "scenario": "ถามผู้ป่วยว่ายังมีไข้ไหม",
        "hanzi": "你今天还发烧吗？",
        "pinyin": "Nǐ jīn tiān hái fā shāo ma?",
        "thaiMeaning": "วันนี้คุณยังมีไข้ไหม?"
      }
    ]
  },
  {
    "id": "v312",
    "hanzi": "咳嗽",
    "pinyin": "késou",
    "thaiMeaning": "ไอ",
    "example": {
      "hanzi": "一直咳嗽。",
      "pinyin": "Yìzhí késou.",
      "thaiMeaning": "ไอไม่หยุด"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一直咳嗽。",
        "pinyin": "Yì zhí ké sou.",
        "thaiMeaning": "ไอไม่หยุด"
      },
      {
        "scenario": "บอกแพทย์ว่าไอมาหลายวัน",
        "hanzi": "我咳嗽三天了。",
        "pinyin": "Wǒ ké sou sān tiān le.",
        "thaiMeaning": "ฉันไอมาสามวันแล้ว"
      },
      {
        "scenario": "ขอให้อีกฝ่ายสวมหน้ากาก",
        "hanzi": "你一直咳嗽，戴上口罩吧。",
        "pinyin": "Nǐ yì zhí ké sou, dài shàng kǒu zhào ba.",
        "thaiMeaning": "คุณไอตลอด ใส่หน้ากากเถอะ"
      }
    ]
  },
  {
    "id": "v313",
    "hanzi": "头疼",
    "pinyin": "tóuténg",
    "thaiMeaning": "ปวดหัว",
    "example": {
      "hanzi": "有点头疼。",
      "pinyin": "Yǒudiǎnr tóuténg.",
      "thaiMeaning": "ปวดหัวนิดหน่อย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "有点头疼。",
        "pinyin": "Yǒu diǎn tóu téng.",
        "thaiMeaning": "ปวดหัวนิดหน่อย"
      },
      {
        "scenario": "ปวดหัวเพราะนอนไม่พอ",
        "hanzi": "昨晚没睡好，今天有点头疼。",
        "pinyin": "Zuó wǎn méi shuì hǎo, jīn tiān yǒu diǎn tóu téng.",
        "thaiMeaning": "เมื่อคืนหลับไม่ดี วันนี้ปวดหัวนิดหน่อย"
      },
      {
        "scenario": "ขอพักจากงานเมื่อปวดหัว",
        "hanzi": "我头疼得厉害，想休息一下。",
        "pinyin": "Wǒ tóu téng dé lì hài, xiǎng xiū xi yí xià.",
        "thaiMeaning": "ฉันปวดหัวมาก อยากพักสักหน่อย"
      }
    ]
  },
  {
    "id": "v314",
    "hanzi": "吃药",
    "pinyin": "chīyào",
    "thaiMeaning": "ทานยา",
    "example": {
      "hanzi": "记得吃药。",
      "pinyin": "Jìde chīyào.",
      "thaiMeaning": "อย่าลืมทานยา"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "记得吃药。",
        "pinyin": "Jì de chī yào.",
        "thaiMeaning": "อย่าลืมทานยา"
      },
      {
        "scenario": "เตือนให้กินยาหลังอาหาร",
        "hanzi": "记得饭后吃药。",
        "pinyin": "Jì de fàn hòu chī yào.",
        "thaiMeaning": "อย่าลืมกินยาหลังอาหาร"
      },
      {
        "scenario": "ถามว่ากินยาแล้วหรือยัง",
        "hanzi": "你今天早上吃药了吗？",
        "pinyin": "Nǐ jīn tiān zǎo shàng chī yào le ma?",
        "thaiMeaning": "เช้านี้คุณกินยาแล้วหรือยัง?"
      }
    ]
  },
  {
    "id": "v315",
    "hanzi": "打针",
    "pinyin": "dǎzhēn",
    "thaiMeaning": "ฉีดยา",
    "example": {
      "hanzi": "害怕打针。",
      "pinyin": "Hàipà dǎzhēn.",
      "thaiMeaning": "กลัวฉีดยา"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "害怕打针。",
        "pinyin": "Hài pà dǎ zhēn.",
        "thaiMeaning": "กลัวฉีดยา"
      },
      {
        "scenario": "เด็กกลัวการฉีดยา",
        "hanzi": "孩子害怕打针。",
        "pinyin": "Hái zi hài pà dǎ zhēn.",
        "thaiMeaning": "เด็กกลัวการฉีดยา"
      },
      {
        "scenario": "พยาบาลบอกให้ผ่อนคลาย",
        "hanzi": "打针的时候请放松。",
        "pinyin": "Dǎ zhēn de shí hòu qǐng fàng sōng.",
        "thaiMeaning": "ตอนฉีดยากรุณาผ่อนคลาย"
      }
    ]
  },
  {
    "id": "v316",
    "hanzi": "健康",
    "pinyin": "jiànkāng",
    "thaiMeaning": "สุขภาพแข็งแรง",
    "example": {
      "hanzi": "身体健康。",
      "pinyin": "Shēntǐ jiànkāng.",
      "thaiMeaning": "สุขภาพแข็งแรง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "身体健康。",
        "pinyin": "Shēn tǐ jiàn kāng.",
        "thaiMeaning": "สุขภาพแข็งแรง"
      },
      {
        "scenario": "พูดถึงนิสัยที่ดีต่อสุขภาพ",
        "hanzi": "早睡早起对健康有好处。",
        "pinyin": "Zǎo shuì zǎo qǐ duì jiàn kāng yǒu hǎo chù.",
        "thaiMeaning": "นอนเร็วตื่นเช้าดีต่อสุขภาพ"
      },
      {
        "scenario": "อวยพรผู้ใหญ่ให้แข็งแรง",
        "hanzi": "祝您身体健康！",
        "pinyin": "Zhù nín shēn tǐ jiàn kāng!",
        "thaiMeaning": "ขอให้สุขภาพแข็งแรง!"
      }
    ]
  },
  {
    "id": "v317",
    "hanzi": "经理",
    "pinyin": "jīnglǐ",
    "thaiMeaning": "ผู้จัดการ",
    "example": {
      "hanzi": "总经理。",
      "pinyin": "Zǒngjīnglǐ.",
      "thaiMeaning": "ผู้จัดการใหญ่"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "总经理。",
        "pinyin": "Zǒng jīng lǐ.",
        "thaiMeaning": "ผู้จัดการใหญ่"
      },
      {
        "scenario": "ขอพบผู้จัดการ",
        "hanzi": "您好，我想见一下经理。",
        "pinyin": "Nín hǎo, wǒ xiǎng jiàn yí xià jīng lǐ.",
        "thaiMeaning": "สวัสดี ฉันต้องการพบผู้จัดการ"
      },
      {
        "scenario": "แจ้งว่าผู้จัดการกำลังประชุม",
        "hanzi": "经理正在开会，请稍等。",
        "pinyin": "Jīng lǐ zhèng zài kāi huì, qǐng shāo děng.",
        "thaiMeaning": "ผู้จัดการกำลังประชุม กรุณารอสักครู่"
      }
    ]
  },
  {
    "id": "v318",
    "hanzi": "老板",
    "pinyin": "lǎobǎn",
    "thaiMeaning": "เจ้านาย / เถ้าแก่",
    "example": {
      "hanzi": "老板好。",
      "pinyin": "Lǎobǎn hǎo.",
      "thaiMeaning": "สวัสดีครับเจ้านาย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "老板好。",
        "pinyin": "Lǎo bǎn hǎo.",
        "thaiMeaning": "สวัสดีครับเจ้านาย"
      },
      {
        "scenario": "ขออนุมัติจากเจ้านาย",
        "hanzi": "这件事要先问老板。",
        "pinyin": "Zhè jiàn shì yào xiān wèn lǎo bǎn.",
        "thaiMeaning": "เรื่องนี้ต้องถามเจ้านายก่อน"
      },
      {
        "scenario": "บอกว่าเจ้าของร้านใจดี",
        "hanzi": "这家店的老板很热情。",
        "pinyin": "Zhè jiā diàn de lǎo bǎn hěn rè qíng.",
        "thaiMeaning": "เจ้าของร้านนี้เป็นมิตรมาก"
      }
    ]
  },
  {
    "id": "v319",
    "hanzi": "同事",
    "pinyin": "tóngshì",
    "thaiMeaning": "เพื่อนร่วมงาน",
    "example": {
      "hanzi": "和同事。",
      "pinyin": "Hé tóngshì.",
      "thaiMeaning": "กับเพื่อนร่วมงาน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "和同事。",
        "pinyin": "Hé tóng shì.",
        "thaiMeaning": "กับเพื่อนร่วมงาน"
      },
      {
        "scenario": "แนะนำเพื่อนร่วมงานใหม่",
        "hanzi": "这是我的新同事小王。",
        "pinyin": "Zhè shì wǒ de xīn tóng shì xiǎo wáng.",
        "thaiMeaning": "นี่คือเสี่ยวหวัง เพื่อนร่วมงานใหม่ของฉัน"
      },
      {
        "scenario": "ชวนเพื่อนร่วมงานกินข้าว",
        "hanzi": "我和同事一起吃午饭。",
        "pinyin": "Wǒ hé tóng shì yì qǐ chī wǔ fàn.",
        "thaiMeaning": "ฉันกินข้าวเที่ยงกับเพื่อนร่วมงาน"
      }
    ]
  },
  {
    "id": "v320",
    "hanzi": "顾客",
    "pinyin": "gùkè",
    "thaiMeaning": "ลูกค้า",
    "example": {
      "hanzi": "接待顾客。",
      "pinyin": "Jiēdài gùkè.",
      "thaiMeaning": "ต้อนรับลูกค้า"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "接待顾客。",
        "pinyin": "Jiē dài gù kè.",
        "thaiMeaning": "ต้อนรับลูกค้า"
      },
      {
        "scenario": "ต้อนรับลูกค้าเข้าร้าน",
        "hanzi": "顾客进来了，请先招呼一下。",
        "pinyin": "Gù kè jìn lái le, qǐng xiān zhāo hū yí xià.",
        "thaiMeaning": "ลูกค้าเข้ามาแล้ว กรุณาไปต้อนรับก่อน"
      },
      {
        "scenario": "รับฟังความคิดเห็นของลูกค้า",
        "hanzi": "我们很重视顾客的意见。",
        "pinyin": "Wǒ men hěn zhòng shì gù kè de yì jiàn.",
        "thaiMeaning": "พวกเราให้ความสำคัญกับความคิดเห็นของลูกค้า"
      }
    ]
  },
  {
    "id": "v321",
    "hanzi": "开会",
    "pinyin": "kāihuì",
    "thaiMeaning": "ประชุม",
    "example": {
      "hanzi": "准备开会。",
      "pinyin": "Zhǔnbèi kāihuì.",
      "thaiMeaning": "เตรียมเข้าประชุม"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "准备开会。",
        "pinyin": "Zhǔn bèi kāi huì.",
        "thaiMeaning": "เตรียมเข้าประชุม"
      },
      {
        "scenario": "แจ้งเวลาเริ่มประชุม",
        "hanzi": "我们十点在会议室开会。",
        "pinyin": "Wǒ men shí diǎn zài huì yì shì kāi huì.",
        "thaiMeaning": "พวกเราประชุมสิบโมงในห้องประชุม"
      },
      {
        "scenario": "ปิดเสียงมือถือก่อนประชุม",
        "hanzi": "开会时请把手机调成静音。",
        "pinyin": "Kāi huì shí qǐng bǎ shǒu jī tiáo chéng jìng yīn.",
        "thaiMeaning": "ตอนประชุมกรุณาปิดเสียงโทรศัพท์"
      }
    ]
  },
  {
    "id": "v322",
    "hanzi": "报告",
    "pinyin": "bàogào",
    "thaiMeaning": "รายงาน",
    "example": {
      "hanzi": "写报告。",
      "pinyin": "Xiě bàogào.",
      "thaiMeaning": "เขียนรายงาน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "写报告。",
        "pinyin": "Xiě bào gào.",
        "thaiMeaning": "เขียนรายงาน"
      },
      {
        "scenario": "ส่งรายงานให้ผู้จัดการ",
        "hanzi": "我已经把报告发给经理了。",
        "pinyin": "Wǒ yǐ jīng bǎ bào gào fā gěi jīng lǐ le.",
        "thaiMeaning": "ฉันส่งรายงานให้ผู้จัดการแล้ว"
      },
      {
        "scenario": "นำเสนอรายงานในที่ประชุม",
        "hanzi": "明天由我来做工作报告。",
        "pinyin": "Míng tiān yóu wǒ lái zuò gōng zuò bào gào.",
        "thaiMeaning": "พรุ่งนี้ฉันจะเป็นคนนำเสนอรายงานการทำงาน"
      }
    ]
  },
  {
    "id": "v323",
    "hanzi": "加班",
    "pinyin": "jiābān",
    "thaiMeaning": "ทำโอที / ทำงานล่วงเวลา",
    "example": {
      "hanzi": "今晚加班。",
      "pinyin": "Jīnwǎn jiābān.",
      "thaiMeaning": "คืนนี้ทำโอที"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "今晚加班。",
        "pinyin": "Jīn wǎn jiā bān.",
        "thaiMeaning": "คืนนี้ทำโอที"
      },
      {
        "scenario": "แจ้งครอบครัวว่าต้องทำโอที",
        "hanzi": "今晚我要加班，会晚点回家。",
        "pinyin": "Jīn wǎn wǒ yào jiā bān, huì wǎn diǎn huí jiā.",
        "thaiMeaning": "คืนนี้ฉันต้องทำโอที จะกลับบ้านช้าหน่อย"
      },
      {
        "scenario": "ถามเพื่อนร่วมงานว่าต้องอยู่ต่อไหม",
        "hanzi": "你今天也要加班吗？",
        "pinyin": "Nǐ jīn tiān yě yào jiā bān ma?",
        "thaiMeaning": "วันนี้คุณต้องทำโอทีด้วยไหม?"
      }
    ]
  },
  {
    "id": "v324",
    "hanzi": "请假",
    "pinyin": "qǐngjià",
    "thaiMeaning": "ลางาน",
    "example": {
      "hanzi": "向公司请假。",
      "pinyin": "Xiàng gōngsī qǐngjià.",
      "thaiMeaning": "ยื่นลางานกับบริษัท"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "向公司请假。",
        "pinyin": "Xiàng gōng sī qǐng jià.",
        "thaiMeaning": "ยื่นลางานกับบริษัท"
      },
      {
        "scenario": "ลางานเพราะป่วย",
        "hanzi": "我发烧了，想请假一天。",
        "pinyin": "Wǒ fā shāo le, xiǎng qǐng jiǎ yī tiān.",
        "thaiMeaning": "ฉันมีไข้ อยากลางานหนึ่งวัน"
      },
      {
        "scenario": "ขอลาหยุดล่วงหน้า",
        "hanzi": "下周我要请假去看家人。",
        "pinyin": "Xià zhōu wǒ yào qǐng jià qù kān jiā rén.",
        "thaiMeaning": "สัปดาห์หน้าฉันจะลาไปเยี่ยมครอบครัว"
      }
    ]
  },
  {
    "id": "v325",
    "hanzi": "学习",
    "pinyin": "xuéxí",
    "thaiMeaning": "เรียนรู้ / ศึกษา",
    "example": {
      "hanzi": "学习中文。",
      "pinyin": "Xuéxí zhōngwén.",
      "thaiMeaning": "เรียนภาษาจีน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "学习中文。",
        "pinyin": "Xué xí zhōng wén.",
        "thaiMeaning": "เรียนภาษาจีน"
      },
      {
        "scenario": "เรียนภาษาจีนทุกวัน",
        "hanzi": "我每天学习一个小时中文。",
        "pinyin": "Wǒ měi tiān xué xí yí gè xiǎo shí zhōng wén.",
        "thaiMeaning": "ฉันเรียนภาษาจีนวันละหนึ่งชั่วโมง"
      },
      {
        "scenario": "ชวนเพื่อนอ่านหนังสือด้วยกัน",
        "hanzi": "我们一起学习吧。",
        "pinyin": "Wǒ men yì qǐ xué xí ba.",
        "thaiMeaning": "พวกเราเรียนด้วยกันนะ"
      }
    ]
  },
  {
    "id": "v326",
    "hanzi": "上课",
    "pinyin": "shàngkè",
    "thaiMeaning": "เข้าเรียน",
    "example": {
      "hanzi": "准备上课。",
      "pinyin": "Zhǔnbèi shàngkè.",
      "thaiMeaning": "เตรียมเข้าเรียน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "准备上课。",
        "pinyin": "Zhǔn bèi shàng kè.",
        "thaiMeaning": "เตรียมเข้าเรียน"
      },
      {
        "scenario": "เตือนว่าใกล้ถึงเวลาเรียน",
        "hanzi": "快上课了，进教室吧。",
        "pinyin": "Kuài shàng kè le, jìn jiào shì ba.",
        "thaiMeaning": "ใกล้เข้าเรียนแล้ว เข้าห้องเรียนเถอะ"
      },
      {
        "scenario": "บอกว่าเช้านี้มีเรียน",
        "hanzi": "我上午要上三节课。",
        "pinyin": "Wǒ shàng wǔ yào shàng sān jié kè.",
        "thaiMeaning": "ตอนเช้าฉันมีเรียนสามคาบ"
      }
    ]
  },
  {
    "id": "v327",
    "hanzi": "下课",
    "pinyin": "xiàkè",
    "thaiMeaning": "เลิกเรียน",
    "example": {
      "hanzi": "下课了。",
      "pinyin": "Xiàkè le.",
      "thaiMeaning": "เลิกเรียนแล้ว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "下课了。",
        "pinyin": "Xià kè le.",
        "thaiMeaning": "เลิกเรียนแล้ว"
      },
      {
        "scenario": "ชวนไปกินข้าวหลังเลิกเรียน",
        "hanzi": "下课后一起去吃饭吧。",
        "pinyin": "Xià kè hòu yì qǐ qù chī fàn ba.",
        "thaiMeaning": "หลังเลิกเรียนไปกินข้าวด้วยกันนะ"
      },
      {
        "scenario": "ถามเวลาเลิกเรียน",
        "hanzi": "你们几点下课？",
        "pinyin": "Nǐ men jǐ diǎn xià kè?",
        "thaiMeaning": "พวกคุณเลิกเรียนกี่โมง?"
      }
    ]
  },
  {
    "id": "v328",
    "hanzi": "考试",
    "pinyin": "kǎoshì",
    "thaiMeaning": "สอบ / การสอบ",
    "example": {
      "hanzi": "参加考试。",
      "pinyin": "Cānjiā kǎoshì.",
      "thaiMeaning": "เข้าสอบ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "参加考试。",
        "pinyin": "Cān jiā kǎo shì.",
        "thaiMeaning": "เข้าสอบ"
      },
      {
        "scenario": "เตรียมตัวสอบสัปดาห์หน้า",
        "hanzi": "下周有考试，我要复习。",
        "pinyin": "Xià zhōu yǒu kǎo shì, wǒ yào fù xí.",
        "thaiMeaning": "สัปดาห์หน้ามีสอบ ฉันต้องทบทวน"
      },
      {
        "scenario": "ถามว่าการสอบเป็นอย่างไร",
        "hanzi": "今天的考试难不难？",
        "pinyin": "Jīn tiān de kǎo shì nán bu nán?",
        "thaiMeaning": "การสอบวันนี้ยากไหม?"
      }
    ]
  },
  {
    "id": "v329",
    "hanzi": "成绩",
    "pinyin": "chéngjì",
    "thaiMeaning": "ผลการเรียน / คะแนน",
    "example": {
      "hanzi": "好成绩。",
      "pinyin": "Hǎo chéngjì.",
      "thaiMeaning": "คะแนนดี"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "好成绩。",
        "pinyin": "Hǎo chéng jì.",
        "thaiMeaning": "คะแนนดี"
      },
      {
        "scenario": "ถามผลคะแนนสอบ",
        "hanzi": "你的考试成绩出来了吗？",
        "pinyin": "Nǐ de kǎo shì chéng jì chū lái le ma?",
        "thaiMeaning": "คะแนนสอบของคุณออกหรือยัง?"
      },
      {
        "scenario": "ชมว่าคะแนนดีขึ้น",
        "hanzi": "这次成绩比上次好多了。",
        "pinyin": "Zhè cì chéng jì bǐ shàng cì hǎo duō le.",
        "thaiMeaning": "ครั้งนี้คะแนนดีกว่าครั้งก่อนมาก"
      }
    ]
  },
  {
    "id": "v330",
    "hanzi": "答案",
    "pinyin": "dá'àn",
    "thaiMeaning": "คำตอบ",
    "example": {
      "hanzi": "寻找答案。",
      "pinyin": "Xúnzhǎo dá'àn.",
      "thaiMeaning": "ค้นหาคำตอบ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "寻找答案。",
        "pinyin": "Xún zhǎo dá àn.",
        "thaiMeaning": "ค้นหาคำตอบ"
      },
      {
        "scenario": "ตรวจคำตอบท้ายหนังสือ",
        "hanzi": "答案在书的最后一页。",
        "pinyin": "Dá àn zài shū de zuì hòu yí yè.",
        "thaiMeaning": "คำตอบอยู่หน้าสุดท้ายของหนังสือ"
      },
      {
        "scenario": "บอกว่ายังคิดคำตอบไม่ออก",
        "hanzi": "我还没想出答案。",
        "pinyin": "Wǒ hái méi xiǎng chū dá àn.",
        "thaiMeaning": "ฉันยังคิดคำตอบไม่ออก"
      }
    ]
  },
  {
    "id": "v331",
    "hanzi": "运动",
    "pinyin": "yùndòng",
    "thaiMeaning": "ออกกำลังกาย / กีฬา",
    "example": {
      "hanzi": "做运动。",
      "pinyin": "Zuò yùndòng.",
      "thaiMeaning": "ออกกำลังกาย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "做运动。",
        "pinyin": "Zuò yùn dòng.",
        "thaiMeaning": "ออกกำลังกาย"
      },
      {
        "scenario": "ชวนไปออกกำลังกาย",
        "hanzi": "下班后一起去运动吧。",
        "pinyin": "Xià bān hòu yì qǐ qù yùn dòng ba.",
        "thaiMeaning": "หลังเลิกงานไปออกกำลังกายด้วยกันนะ"
      },
      {
        "scenario": "พูดถึงประโยชน์ต่อสุขภาพ",
        "hanzi": "每天运动对身体好。",
        "pinyin": "Měi tiān yùn dòng duì shēn tǐ hǎo.",
        "thaiMeaning": "ออกกำลังกายทุกวันดีต่อร่างกาย"
      }
    ]
  },
  {
    "id": "v332",
    "hanzi": "跑步",
    "pinyin": "pǎobù",
    "thaiMeaning": "วิ่งออกกำลังกาย",
    "example": {
      "hanzi": "晨跑。",
      "pinyin": "Chénpǎo.",
      "thaiMeaning": "วิ่งตอนเช้า"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "晨跑。",
        "pinyin": "Chén pǎo.",
        "thaiMeaning": "วิ่งตอนเช้า"
      },
      {
        "scenario": "วิ่งในสวนตอนเช้า",
        "hanzi": "我每天早上去公园跑步。",
        "pinyin": "Wǒ měi tiān zǎo shàng qù gōng yuán pǎo bù.",
        "thaiMeaning": "ฉันไปวิ่งที่สวนทุกเช้า"
      },
      {
        "scenario": "ชวนเพื่อนไปวิ่ง",
        "hanzi": "周末一起跑步怎么样？",
        "pinyin": "Zhōu mò yì qǐ pǎo bù zěn me yàng?",
        "thaiMeaning": "สุดสัปดาห์ไปวิ่งด้วยกันไหม?"
      }
    ]
  },
  {
    "id": "v333",
    "hanzi": "游泳",
    "pinyin": "yóuyǒng",
    "thaiMeaning": "ว่ายน้ำ",
    "example": {
      "hanzi": "去游泳。",
      "pinyin": "Qù yóuyǒng.",
      "thaiMeaning": "ไปว่ายน้ำ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "去游泳。",
        "pinyin": "Qù yóu yǒng.",
        "thaiMeaning": "ไปว่ายน้ำ"
      },
      {
        "scenario": "ถามว่าว่ายน้ำเป็นไหม",
        "hanzi": "你会游泳吗？",
        "pinyin": "Nǐ huì yóu yǒng ma?",
        "thaiMeaning": "คุณว่ายน้ำเป็นไหม?"
      },
      {
        "scenario": "ไปว่ายน้ำเพราะอากาศร้อน",
        "hanzi": "天气太热，我们去游泳吧。",
        "pinyin": "Tiān qì tài rè, wǒ men qù yóu yǒng ba.",
        "thaiMeaning": "อากาศร้อนเกินไป พวกเราไปว่ายน้ำกัน"
      }
    ]
  },
  {
    "id": "v334",
    "hanzi": "打球",
    "pinyin": "dǎqiú",
    "thaiMeaning": "เล่นบอล / เล่นกีฬา",
    "example": {
      "hanzi": "打羽毛球。",
      "pinyin": "Dǎ yǔmáoqiú.",
      "thaiMeaning": "เล่นแบดมินตัน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "打羽毛球。",
        "pinyin": "Dǎ yǔ máo qiú.",
        "thaiMeaning": "เล่นแบดมินตัน"
      },
      {
        "scenario": "นัดเล่นบอลหลังเรียน",
        "hanzi": "下课后我们去打球。",
        "pinyin": "Xià kè hòu wǒ men qù dǎ qiú.",
        "thaiMeaning": "หลังเลิกเรียนพวกเราไปเล่นบอล"
      },
      {
        "scenario": "ถามว่าใครอยากร่วมเล่น",
        "hanzi": "下午有人想一起打球吗？",
        "pinyin": "Xià wǔ yǒu rén xiǎng yì qǐ dǎ qiú ma?",
        "thaiMeaning": "ตอนบ่ายมีใครอยากเล่นบอลด้วยกันไหม?"
      }
    ]
  },
  {
    "id": "v335",
    "hanzi": "看电影",
    "pinyin": "kàn diànyǐng",
    "thaiMeaning": "ดูภาพยนตร์ / ดูหนัง",
    "example": {
      "hanzi": "去看电影。",
      "pinyin": "Qù kàn diànyǐng.",
      "thaiMeaning": "ไปดูหนัง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "去看电影。",
        "pinyin": "Qù kàn diàn yǐng.",
        "thaiMeaning": "ไปดูหนัง"
      },
      {
        "scenario": "ชวนเพื่อนไปดูหนัง",
        "hanzi": "这个周末一起看电影吧。",
        "pinyin": "Zhè ge zhōu mò yì qǐ kàn diàn yǐng ba.",
        "thaiMeaning": "สุดสัปดาห์นี้ไปดูหนังด้วยกันนะ"
      },
      {
        "scenario": "ถามว่าชอบดูหนังประเภทไหน",
        "hanzi": "你喜欢看什么电影？",
        "pinyin": "Nǐ xǐ huan kàn shén me diàn yǐng?",
        "thaiMeaning": "คุณชอบดูหนังประเภทไหน?"
      }
    ]
  },
  {
    "id": "v336",
    "hanzi": "听音乐",
    "pinyin": "tīng yīnyuè",
    "thaiMeaning": "ฟังเพลง",
    "example": {
      "hanzi": "戴耳机听音乐。",
      "pinyin": "Dài ěrjī tīng yīnyuè.",
      "thaiMeaning": "ใส่หูฟังฟังเพลง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "戴耳机听音乐。",
        "pinyin": "Dài ěr jī tīng yīn yuè.",
        "thaiMeaning": "ใส่หูฟังฟังเพลง"
      },
      {
        "scenario": "ฟังเพลงเพื่อผ่อนคลาย",
        "hanzi": "累的时候我喜欢听音乐。",
        "pinyin": "Lèi de shí hòu wǒ xǐ huan tīng yīn yuè.",
        "thaiMeaning": "เวลาเหนื่อยฉันชอบฟังเพลง"
      },
      {
        "scenario": "ขอให้เบาเสียงเพลง",
        "hanzi": "听音乐时请小声一点。",
        "pinyin": "Tīng yīn yuè shí qǐng xiǎo shēng yì diǎn.",
        "thaiMeaning": "เวลาฟังเพลงกรุณาเปิดเบาหน่อย"
      }
    ]
  },
  {
    "id": "v337",
    "hanzi": "旅游",
    "pinyin": "lǚyóu",
    "thaiMeaning": "ท่องเที่ยว / เที่ยว",
    "example": {
      "hanzi": "去中国旅游。",
      "pinyin": "Qù Zhōngguó lǚyóu.",
      "thaiMeaning": "ไปเที่ยวเมืองจีน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "去中国旅游。",
        "pinyin": "Qù zhōng guó lǚ yóu.",
        "thaiMeaning": "ไปเที่ยวเมืองจีน"
      },
      {
        "scenario": "วางแผนไปเที่ยวจีน",
        "hanzi": "明年我想去中国旅游。",
        "pinyin": "Míng nián wǒ xiǎng qù zhōng guó lǚ yóu.",
        "thaiMeaning": "ปีหน้าฉันอยากไปเที่ยวจีน"
      },
      {
        "scenario": "ถามว่าเคยไปเที่ยวที่ไหน",
        "hanzi": "你去过哪些地方旅游？",
        "pinyin": "Nǐ qù guò nǎ xiē dì fāng lǚ yóu?",
        "thaiMeaning": "คุณเคยไปเที่ยวที่ไหนมาบ้าง?"
      }
    ]
  },
  {
    "id": "v338",
    "hanzi": "拍照",
    "pinyin": "pāizhào",
    "thaiMeaning": "ถ่ายรูป",
    "example": {
      "hanzi": "拍张照。",
      "pinyin": "Pāi zhāng zhào.",
      "thaiMeaning": "ถ่ายรูปรูปหนึ่ง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "拍张照。",
        "pinyin": "Pāi zhāng zhào.",
        "thaiMeaning": "ถ่ายรูปรูปหนึ่ง"
      },
      {
        "scenario": "ขอให้คนอื่นช่วยถ่ายรูป",
        "hanzi": "可以帮我们拍照吗？",
        "pinyin": "Kě yǐ bāng wǒ men pāi zhào ma?",
        "thaiMeaning": "ช่วยถ่ายรูปให้พวกเราได้ไหม?"
      },
      {
        "scenario": "เตือนว่าที่นี่ห้ามถ่ายรูป",
        "hanzi": "这里不能拍照。",
        "pinyin": "Zhè lǐ bù néng pāi zhào.",
        "thaiMeaning": "ที่นี่ห้ามถ่ายรูป"
      }
    ]
  },
  {
    "id": "v339",
    "hanzi": "唱歌",
    "pinyin": "chànggē",
    "thaiMeaning": "ร้องเพลง",
    "example": {
      "hanzi": "去唱歌。",
      "pinyin": "Qù chànggē.",
      "thaiMeaning": "ไปร้องเพลง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "去唱歌。",
        "pinyin": "Qù chàng gē.",
        "thaiMeaning": "ไปร้องเพลง"
      },
      {
        "scenario": "ชวนเพื่อนไปร้องเพลง",
        "hanzi": "晚上一起去唱歌吧。",
        "pinyin": "Wǎn shàng yì qǐ qù chàng gē ba.",
        "thaiMeaning": "ตอนเย็นไปร้องเพลงด้วยกันนะ"
      },
      {
        "scenario": "ชมว่าเพื่อนร้องเพลงเพราะ",
        "hanzi": "你唱歌真好听。",
        "pinyin": "Nǐ chàng gē zhēn hǎo tīng.",
        "thaiMeaning": "คุณร้องเพลงเพราะจริงๆ"
      }
    ]
  },
  {
    "id": "v340",
    "hanzi": "跳舞",
    "pinyin": "tiàowǔ",
    "thaiMeaning": "เต้นรำ / เต้น",
    "example": {
      "hanzi": "学习跳舞。",
      "pinyin": "Xuéxí tiàowǔ.",
      "thaiMeaning": "ฝึกเรียนเต้น"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "学习跳舞。",
        "pinyin": "Xué xí tiào wǔ.",
        "thaiMeaning": "ฝึกเรียนเต้น"
      },
      {
        "scenario": "ถามว่าเต้นเป็นไหม",
        "hanzi": "你会跳舞吗？",
        "pinyin": "Nǐ huì tiào wǔ ma?",
        "thaiMeaning": "คุณเต้นเป็นไหม?"
      },
      {
        "scenario": "ดูคนเต้นในงานเลี้ยง",
        "hanzi": "大家在聚会上开心地跳舞。",
        "pinyin": "Dà jiā zài jù huì shàng kāi xīn dì tiào wǔ.",
        "thaiMeaning": "ทุกคนเต้นอย่างสนุกสนานในงานเลี้ยง"
      }
    ]
  },
  {
    "id": "v342",
    "hanzi": "算了吧",
    "pinyin": "suàn le ba",
    "thaiMeaning": "ช่างมันเถอะ / พอเหอะ",
    "example": {
      "hanzi": "算了吧，不去了。",
      "pinyin": "Suàn le ba, bú qù le.",
      "thaiMeaning": "ช่างมันเถอะ ไม่ไปแล้ว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "算了吧，不去了。",
        "pinyin": "Suàn le ba, bú qù le.",
        "thaiMeaning": "ช่างมันเถอะ ไม่ไปแล้ว"
      },
      {
        "scenario": "ยกเลิกแผนเพราะฝนตก",
        "hanzi": "雨太大了，算了吧，别去了。",
        "pinyin": "Yǔ tài dà le, suàn le ba, bié qù le.",
        "thaiMeaning": "ฝนตกหนักเกินไป ช่างเถอะ ไม่ต้องไปแล้ว"
      },
      {
        "scenario": "ไม่อยากเถียงต่อ",
        "hanzi": "他不想听，算了吧。",
        "pinyin": "Tā bù xiǎng tīng, suàn le ba.",
        "thaiMeaning": "เขาไม่อยากฟัง ช่างมันเถอะ"
      }
    ]
  },
  {
    "id": "v343",
    "hanzi": "怎么办",
    "pinyin": "zěnme bàn",
    "thaiMeaning": "ทำยังไงดี",
    "example": {
      "hanzi": "现在怎么办？",
      "pinyin": "Xiànzài zěnme bàn?",
      "thaiMeaning": "ตอนนี้ทำไงดี"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "现在怎么办？",
        "pinyin": "Xiàn zài zěn me bàn?",
        "thaiMeaning": "ตอนนี้ทำไงดี"
      },
      {
        "scenario": "ทำโทรศัพท์หายและขอคำแนะนำ",
        "hanzi": "我的手机不见了，怎么办？",
        "pinyin": "Wǒ de shǒu jī bú jiàn le, zěn me bàn?",
        "thaiMeaning": "โทรศัพท์ฉันหาย ทำอย่างไรดี?"
      },
      {
        "scenario": "กังวลว่าจะไปประชุมสาย",
        "hanzi": "快迟到了，怎么办？",
        "pinyin": "Kuài chí dào le, zěn me bàn?",
        "thaiMeaning": "ใกล้จะสายแล้ว ทำอย่างไรดี?"
      }
    ]
  },
  {
    "id": "v344",
    "hanzi": "真的吗",
    "pinyin": "zhēn de ma",
    "thaiMeaning": "จริงเหรอ / จริงปะ",
    "example": {
      "hanzi": "这是真的吗？",
      "pinyin": "Zhè shì zhēn de ma?",
      "thaiMeaning": "เรื่องนี้จริงเหรอ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "这是真的吗？",
        "pinyin": "Zhè shì zhēn de ma?",
        "thaiMeaning": "เรื่องนี้จริงเหรอ"
      },
      {
        "scenario": "แปลกใจเมื่อได้ยินข่าวดี",
        "hanzi": "你通过考试了？真的吗？",
        "pinyin": "Nǐ tōng guò kǎo shì le? Zhēn de ma?",
        "thaiMeaning": "คุณสอบผ่านแล้วเหรอ? จริงเหรอ?"
      },
      {
        "scenario": "ถามยืนยันเรื่องลดราคา",
        "hanzi": "今天全部半价，真的吗？",
        "pinyin": "Jīn tiān quán bù bàn jià, zhēn de ma?",
        "thaiMeaning": "วันนี้ลดครึ่งราคาทั้งหมด จริงเหรอ?"
      }
    ]
  },
  {
    "id": "v345",
    "hanzi": "太棒了",
    "pinyin": "tài bàng le",
    "thaiMeaning": "สุดยอดไปเลย",
    "example": {
      "hanzi": "太棒了！",
      "pinyin": "Tài bàng le!",
      "thaiMeaning": "สุดยอดมาก!"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "太棒了！",
        "pinyin": "Tài bàng le!",
        "thaiMeaning": "สุดยอดมาก!"
      },
      {
        "scenario": "ชมเพื่อนที่สอบผ่าน",
        "hanzi": "你考过了，太棒了！",
        "pinyin": "Nǐ kǎo guò le, tài bàng le!",
        "thaiMeaning": "คุณสอบผ่านแล้ว เยี่ยมมาก!"
      },
      {
        "scenario": "ดีใจที่แผนสำเร็จ",
        "hanzi": "我们的计划成功了，太棒了！",
        "pinyin": "Wǒ men de jì huà chéng gōng le, tài bàng le!",
        "thaiMeaning": "แผนของเราสำเร็จแล้ว สุดยอด!"
      }
    ]
  },
  {
    "id": "v346",
    "hanzi": "随便",
    "pinyin": "suíbiàn",
    "thaiMeaning": "ตามสบาย / อะไรก็ได้",
    "example": {
      "hanzi": "随便吃。",
      "pinyin": "Suíbiàn chī.",
      "thaiMeaning": "ทานตามสบายเลย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "随便吃。",
        "pinyin": "Suí biàn chī.",
        "thaiMeaning": "ทานตามสบายเลย"
      },
      {
        "scenario": "ตอบว่าเลือกอาหารอะไรก็ได้",
        "hanzi": "吃什么都行，我随便。",
        "pinyin": "Chī shén me dōu xíng, wǒ suí biàn.",
        "thaiMeaning": "กินอะไรก็ได้ ฉันตามสบาย"
      },
      {
        "scenario": "เตือนไม่ให้หยิบของคนอื่น",
        "hanzi": "不要随便拿别人的东西。",
        "pinyin": "Bú yào suí biàn ná bié rén de dōng xī.",
        "thaiMeaning": "อย่าหยิบของคนอื่นตามใจ"
      }
    ]
  },
  {
    "id": "v347",
    "hanzi": "先生",
    "pinyin": "xiānsheng",
    "thaiMeaning": "คุณผู้ชาย / นาย",
    "example": {
      "hanzi": "王先生。",
      "pinyin": "Wáng xiānsheng.",
      "thaiMeaning": "คุณหวัง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "王先生。",
        "pinyin": "Wáng xiān shēng.",
        "thaiMeaning": "คุณหวัง"
      },
      {
        "scenario": "เรียกลูกค้าผู้ชายอย่างสุภาพ",
        "hanzi": "先生，请问您需要帮助吗？",
        "pinyin": "Xiān shēng, qǐng wèn nín xū yào bāng zhù ma?",
        "thaiMeaning": "คุณผู้ชาย ต้องการความช่วยเหลือไหม?"
      },
      {
        "scenario": "ถามนามสกุลของผู้ชาย",
        "hanzi": "请问这位先生姓什么？",
        "pinyin": "Qǐng wèn zhè wèi xiān shēng xìng shén me?",
        "thaiMeaning": "ขอถามหน่อย คุณผู้ชายท่านนี้แซ่อะไร?"
      }
    ]
  },
  {
    "id": "v348",
    "hanzi": "女士",
    "pinyin": "nǚshì",
    "thaiMeaning": "คุณผู้หญิง / สุภาพสตรี",
    "example": {
      "hanzi": "李女士。",
      "pinyin": "Lǐ nǚshì.",
      "thaiMeaning": "คุณหลี"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "李女士。",
        "pinyin": "Lǐ nǚ shì.",
        "thaiMeaning": "คุณหลี"
      },
      {
        "scenario": "เรียกลูกค้าผู้หญิงอย่างสุภาพ",
        "hanzi": "女士，这是您的发票。",
        "pinyin": "Nǚ shì, zhè shì nín de fā piào.",
        "thaiMeaning": "คุณผู้หญิง นี่คือใบเสร็จของคุณ"
      },
      {
        "scenario": "ประกาศเชิญผู้หญิงก่อน",
        "hanzi": "女士优先，请您先走。",
        "pinyin": "Nǚ shì yōu xiān, qǐng nín xiān zǒu.",
        "thaiMeaning": "สุภาพสตรีก่อน เชิญคุณไปก่อน"
      }
    ]
  },
  {
    "id": "v349",
    "hanzi": "小姐",
    "pinyin": "xiǎojiě",
    "thaiMeaning": "คุณหนู / คุณ (หญิงสาว)",
    "example": {
      "hanzi": "张小姐。",
      "pinyin": "Zhāng xiǎojiě.",
      "thaiMeaning": "คุณจาง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "张小姐。",
        "pinyin": "Zhāng xiǎo jiě.",
        "thaiMeaning": "คุณจาง"
      },
      {
        "scenario": "เรียกพนักงานหญิงในบริบทบริการ",
        "hanzi": "小姐，请问洗手间在哪里？",
        "pinyin": "Xiǎo jiě, qǐng wèn xǐ shǒu jiān zài nǎ lǐ?",
        "thaiMeaning": "คุณครับ ขอถามว่าห้องน้ำอยู่ไหน?"
      },
      {
        "scenario": "ถามหาผู้หญิงตามนามสกุล",
        "hanzi": "请问李小姐在吗？",
        "pinyin": "Qǐng wèn lǐ xiǎo jiě zài ma?",
        "thaiMeaning": "ขอถามหน่อย คุณหลี่อยู่ไหม?"
      }
    ]
  },
  {
    "id": "v350",
    "hanzi": "大家",
    "pinyin": "dàjiā",
    "thaiMeaning": "ทุกคน / ทุกท่าน",
    "example": {
      "hanzi": "大家好！",
      "pinyin": "Dàjiā hǎo!",
      "thaiMeaning": "สวัสดีทุกคนครับ!"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "大家好！",
        "pinyin": "Dà jiā hǎo!",
        "thaiMeaning": "สวัสดีทุกคนครับ!"
      },
      {
        "scenario": "ทักทายคนในห้อง",
        "hanzi": "大家好，我是新同事。",
        "pinyin": "Dà jiā hǎo, wǒ shì xīn tóng shì.",
        "thaiMeaning": "สวัสดีทุกคน ฉันเป็นเพื่อนร่วมงานใหม่"
      },
      {
        "scenario": "ขอให้ทุกคนเงียบ",
        "hanzi": "请大家安静一下。",
        "pinyin": "Qǐng dà jiā ān jìng yí xià.",
        "thaiMeaning": "ขอให้ทุกคนเงียบสักครู่"
      }
    ]
  },
  {
    "id": "v351",
    "hanzi": "网络",
    "pinyin": "wǎngluò",
    "thaiMeaning": "อินเทอร์เน็ต / เครือข่าย",
    "example": {
      "hanzi": "连网络。",
      "pinyin": "Lián wǎngluò.",
      "thaiMeaning": "เชื่อมเน็ต"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "连网络。",
        "pinyin": "Lián wǎng luò.",
        "thaiMeaning": "เชื่อมเน็ต"
      },
      {
        "scenario": "แจ้งว่าอินเทอร์เน็ตมีปัญหา",
        "hanzi": "今天办公室的网络不稳定。",
        "pinyin": "Jīn tiān bàn gōng shì de wǎng luò bù wěn dìng.",
        "thaiMeaning": "วันนี้อินเทอร์เน็ตในสำนักงานไม่เสถียร"
      },
      {
        "scenario": "ถามรหัสเครือข่ายไร้สาย",
        "hanzi": "这里有无线网络吗？",
        "pinyin": "Zhè lǐ yǒu wú xiàn wǎng luò ma?",
        "thaiMeaning": "ที่นี่มีเครือข่ายไร้สายไหม?"
      }
    ]
  },
  {
    "id": "v352",
    "hanzi": "网站",
    "pinyin": "wǎngzhàn",
    "thaiMeaning": "เว็บไซต์",
    "example": {
      "hanzi": "浏览网站。",
      "pinyin": "Liúlǎn wǎngzhàn.",
      "thaiMeaning": "เข้าชมเว็บ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "浏览网站。",
        "pinyin": "Liú lǎn wǎng zhàn.",
        "thaiMeaning": "เข้าชมเว็บ"
      },
      {
        "scenario": "เข้าเว็บไซต์เพื่อจองตั๋ว",
        "hanzi": "你可以在网站上订票。",
        "pinyin": "Nǐ kě yǐ zài wǎng zhàn shàng dìng piào.",
        "thaiMeaning": "คุณจองตั๋วบนเว็บไซต์ได้"
      },
      {
        "scenario": "แจ้งว่าเว็บไซต์เปิดไม่ได้",
        "hanzi": "这个网站现在打不开。",
        "pinyin": "Zhè ge wǎng zhàn xiàn zài dǎ bù kāi.",
        "thaiMeaning": "ตอนนี้เว็บไซต์นี้เปิดไม่ได้"
      }
    ]
  },
  {
    "id": "v353",
    "hanzi": "软件",
    "pinyin": "ruǎnjiàn",
    "thaiMeaning": "แอปพลิเคชัน / ซอฟต์แวร์",
    "example": {
      "hanzi": "下载软件。",
      "pinyin": "Xiàzǎi ruǎnjiàn.",
      "thaiMeaning": "โหลดแอป"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "下载软件。",
        "pinyin": "Xià zài ruǎn jiàn.",
        "thaiMeaning": "โหลดแอป"
      },
      {
        "scenario": "ติดตั้งซอฟต์แวร์ใหม่",
        "hanzi": "我需要安装这个软件。",
        "pinyin": "Wǒ xū yào ān zhuāng zhè ge ruǎn jiàn.",
        "thaiMeaning": "ฉันต้องติดตั้งซอฟต์แวร์นี้"
      },
      {
        "scenario": "อัปเดตแอปให้เป็นเวอร์ชันล่าสุด",
        "hanzi": "请把软件更新到最新版本。",
        "pinyin": "Qǐng bǎ ruǎn jiàn gēng xīn dào zuì xīn bǎn běn.",
        "thaiMeaning": "กรุณาอัปเดตซอฟต์แวร์เป็นรุ่นล่าสุด"
      }
    ]
  },
  {
    "id": "v354",
    "hanzi": "账号",
    "pinyin": "zhànghào",
    "thaiMeaning": "บัญชีผู้ใช้ / แอคเคานต์",
    "example": {
      "hanzi": "登录账号。",
      "pinyin": "Dēnglù zhànghào.",
      "thaiMeaning": "ล็อกอินบัญชี"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "登录账号。",
        "pinyin": "Dēng lù zhàng hào.",
        "thaiMeaning": "ล็อกอินบัญชี"
      },
      {
        "scenario": "สมัครบัญชีใหม่",
        "hanzi": "我刚注册了一个新账号。",
        "pinyin": "Wǒ gāng zhù cè le yí gè xīn zhàng hào.",
        "thaiMeaning": "ฉันเพิ่งสมัครบัญชีใหม่"
      },
      {
        "scenario": "พบว่าบัญชีเข้าสู่ระบบไม่ได้",
        "hanzi": "我的账号登录不了。",
        "pinyin": "Wǒ de zhàng hào dēng lù bù liǎo.",
        "thaiMeaning": "บัญชีของฉันเข้าสู่ระบบไม่ได้"
      }
    ]
  },
  {
    "id": "v355",
    "hanzi": "密码",
    "pinyin": "mìmǎ",
    "thaiMeaning": "รหัสผ่าน",
    "example": {
      "hanzi": "输入密码。",
      "pinyin": "Shūrù mìmǎ.",
      "thaiMeaning": "ใส่รหัสผ่าน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "输入密码。",
        "pinyin": "Shū rù mì mǎ.",
        "thaiMeaning": "ใส่รหัสผ่าน"
      },
      {
        "scenario": "ลืมรหัสผ่าน",
        "hanzi": "我忘记密码了。",
        "pinyin": "Wǒ wàng jì mì mǎ le.",
        "thaiMeaning": "ฉันลืมรหัสผ่านแล้ว"
      },
      {
        "scenario": "เตือนไม่ให้บอกรหัสผ่าน",
        "hanzi": "不要把密码告诉别人。",
        "pinyin": "Bú yào bǎ mì mǎ gào sù bié rén.",
        "thaiMeaning": "อย่าบอกรหัสผ่านให้คนอื่น"
      }
    ]
  },
  {
    "id": "v356",
    "hanzi": "微信",
    "pinyin": "wēixìn",
    "thaiMeaning": "วีแชต (WeChat)",
    "example": {
      "hanzi": "加微信。",
      "pinyin": "Jiā wēixìn.",
      "thaiMeaning": "เพิ่มแอดวีแชต"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "加微信。",
        "pinyin": "Jiā wēi xìn.",
        "thaiMeaning": "เพิ่มแอดวีแชต"
      },
      {
        "scenario": "ขอเพิ่มเพื่อนในวีแชต",
        "hanzi": "我们加个微信吧。",
        "pinyin": "Wǒ men jiā gè wēi xìn ba.",
        "thaiMeaning": "พวกเราเพิ่มเพื่อนในวีแชตกัน"
      },
      {
        "scenario": "ส่งตำแหน่งทางวีแชต",
        "hanzi": "我用微信把位置发给你。",
        "pinyin": "Wǒ yòng wēi xìn bǎ wèi zhì fā gěi nǐ.",
        "thaiMeaning": "ฉันจะส่งตำแหน่งให้คุณทางวีแชต"
      }
    ]
  },
  {
    "id": "v357",
    "hanzi": "发消息",
    "pinyin": "fā xiāoxi",
    "thaiMeaning": "ส่งข้อความ",
    "example": {
      "hanzi": "给你发消息。",
      "pinyin": "Gěi nǐ fā xiāoxi.",
      "thaiMeaning": "ส่งข้อความหาคุณ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "给你发消息。",
        "pinyin": "Gěi nǐ fā xiāo xī.",
        "thaiMeaning": "ส่งข้อความหาคุณ"
      },
      {
        "scenario": "ส่งข้อความเมื่อถึงบ้าน",
        "hanzi": "到家后给我发消息。",
        "pinyin": "Dào jiā hòu gěi wǒ fā xiāo xī.",
        "thaiMeaning": "ถึงบ้านแล้วส่งข้อความหาฉัน"
      },
      {
        "scenario": "บอกว่าส่งข้อความไปแล้ว",
        "hanzi": "我刚给经理发消息了。",
        "pinyin": "Wǒ gāng gěi jīng lǐ fā xiāo xī le.",
        "thaiMeaning": "ฉันเพิ่งส่งข้อความหาผู้จัดการ"
      }
    ]
  },
  {
    "id": "v358",
    "hanzi": "视频",
    "pinyin": "shìpín",
    "thaiMeaning": "วิดีโอ / คลิป",
    "example": {
      "hanzi": "看短视频。",
      "pinyin": "Kàn duǎn shìpín.",
      "thaiMeaning": "ดูคลิปสั้น"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "看短视频。",
        "pinyin": "Kàn duǎn shì pín.",
        "thaiMeaning": "ดูคลิปสั้น"
      },
      {
        "scenario": "ดูวิดีโอเรียนภาษา",
        "hanzi": "我在看学习中文的视频。",
        "pinyin": "Wǒ zài kàn xué xí zhōng wén de shì pín.",
        "thaiMeaning": "ฉันกำลังดูวิดีโอเรียนภาษาจีน"
      },
      {
        "scenario": "ส่งคลิปให้เพื่อน",
        "hanzi": "这个视频很有意思，我发给你。",
        "pinyin": "Zhè ge shì pín hěn yǒu yì sī, wǒ fā gěi nǐ.",
        "thaiMeaning": "วิดีโอนี้น่าสนใจ ฉันจะส่งให้คุณ"
      }
    ]
  },
  {
    "id": "v359",
    "hanzi": "银行",
    "pinyin": "yínháng",
    "thaiMeaning": "ธนาคาร",
    "example": {
      "hanzi": "去银行。",
      "pinyin": "Qù yínháng.",
      "thaiMeaning": "ไปธนาคาร"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "去银行。",
        "pinyin": "Qù yín háng.",
        "thaiMeaning": "ไปธนาคาร"
      },
      {
        "scenario": "ไปธนาคารถอนเงิน",
        "hanzi": "我要去银行取现金。",
        "pinyin": "Wǒ yào qù yín háng qǔ xiàn jīn.",
        "thaiMeaning": "ฉันจะไปธนาคารถอนเงินสด"
      },
      {
        "scenario": "ถามเวลาธนาคารปิด",
        "hanzi": "银行下午几点关门？",
        "pinyin": "Yín háng xià wǔ jǐ diǎn guān mén?",
        "thaiMeaning": "ธนาคารปิดกี่โมงตอนบ่าย?"
      }
    ]
  },
  {
    "id": "v360",
    "hanzi": "邮局",
    "pinyin": "yóujú",
    "thaiMeaning": "ไปรษณีย์",
    "example": {
      "hanzi": "寄信到邮局。",
      "pinyin": "Jì xìn dào yóujú.",
      "thaiMeaning": "ส่งจดหมายที่ไปรษณีย์"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "寄信到邮局。",
        "pinyin": "Jì xìn dào yóu jú.",
        "thaiMeaning": "ส่งจดหมายที่ไปรษณีย์"
      },
      {
        "scenario": "ไปไปรษณีย์ส่งของ",
        "hanzi": "我去邮局寄一个包裹。",
        "pinyin": "Wǒ qù yóu jú jì yí gè bāo guǒ.",
        "thaiMeaning": "ฉันจะไปไปรษณีย์ส่งพัสดุ"
      },
      {
        "scenario": "ถามทางไปไปรษณีย์",
        "hanzi": "附近有邮局吗？",
        "pinyin": "Fù jìn yǒu yóu jú ma?",
        "thaiMeaning": "แถวนี้มีไปรษณีย์ไหม?"
      }
    ]
  },
  {
    "id": "v361",
    "hanzi": "图书馆",
    "pinyin": "túshūguǎn",
    "thaiMeaning": "ห้องสมุด",
    "example": {
      "hanzi": "在图书馆。",
      "pinyin": "Zài túshūguǎn.",
      "thaiMeaning": "อยู่ที่ห้องสมุด"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "在图书馆。",
        "pinyin": "Zài tú shū guǎn.",
        "thaiMeaning": "อยู่ที่ห้องสมุด"
      },
      {
        "scenario": "อ่านหนังสือในห้องสมุด",
        "hanzi": "下午我在图书馆看书。",
        "pinyin": "Xià wǔ wǒ zài tú shū guǎn kàn shū.",
        "thaiMeaning": "ตอนบ่ายฉันอ่านหนังสือในห้องสมุด"
      },
      {
        "scenario": "เตือนให้เงียบ",
        "hanzi": "图书馆里请保持安静。",
        "pinyin": "Tú shū guǎn lǐ qǐng bǎo chí ān jìng.",
        "thaiMeaning": "ในห้องสมุดกรุณารักษาความเงียบ"
      }
    ]
  },
  {
    "id": "v362",
    "hanzi": "公园",
    "pinyin": "gōngyuán",
    "thaiMeaning": "สวนสาธารณะ",
    "example": {
      "hanzi": "逛公园。",
      "pinyin": "Guàng gōngyuán.",
      "thaiMeaning": "เดินเล่นสวน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "逛公园。",
        "pinyin": "Guàng gōng yuán.",
        "thaiMeaning": "เดินเล่นสวน"
      },
      {
        "scenario": "เดินเล่นในสวนหลังอาหาร",
        "hanzi": "晚饭后我们去公园散步。",
        "pinyin": "Wǎn fàn hòu wǒ men qù gōng yuán sàn bù.",
        "thaiMeaning": "หลังอาหารเย็นพวกเราไปเดินเล่นในสวน"
      },
      {
        "scenario": "พาเด็กไปเล่นในสวน",
        "hanzi": "周末我带孩子去公园玩。",
        "pinyin": "Zhōu mò wǒ dài hái zi qù gōng yuán wán.",
        "thaiMeaning": "สุดสัปดาห์ฉันพาเด็กไปเล่นที่สวน"
      }
    ]
  },
  {
    "id": "v363",
    "hanzi": "电影院",
    "pinyin": "diànyǐngyuàn",
    "thaiMeaning": "โรงภาพยนตร์",
    "example": {
      "hanzi": "去电影院。",
      "pinyin": "Qù diànyǐngyuàn.",
      "thaiMeaning": "ไปโรงหนัง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "去电影院。",
        "pinyin": "Qù diàn yǐng yuàn.",
        "thaiMeaning": "ไปโรงหนัง"
      },
      {
        "scenario": "นัดเจอกันหน้าโรงหนัง",
        "hanzi": "我们在电影院门口见。",
        "pinyin": "Wǒ men zài diàn yǐng yuàn mén kǒu jiàn.",
        "thaiMeaning": "พวกเราเจอกันหน้าโรงภาพยนตร์"
      },
      {
        "scenario": "ถามว่าโรงหนังอยู่ชั้นไหน",
        "hanzi": "电影院在商场几楼？",
        "pinyin": "Diàn yǐng yuàn zài shāng chǎng jǐ lóu?",
        "thaiMeaning": "โรงภาพยนตร์อยู่ชั้นไหนของห้าง?"
      }
    ]
  },
  {
    "id": "v364",
    "hanzi": "超市",
    "pinyin": "chāoshì",
    "thaiMeaning": "ซูเปอร์มาร์เก็ต",
    "example": {
      "hanzi": "去超市买菜。",
      "pinyin": "Qù chāoshì mǎi cài.",
      "thaiMeaning": "ไปซูเปอร์ซื้อผัก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "去超市买菜。",
        "pinyin": "Qù chāo shì mǎi cài.",
        "thaiMeaning": "ไปซูเปอร์ซื้อผัก"
      },
      {
        "scenario": "ซื้อของใช้ในซูเปอร์มาร์เก็ต",
        "hanzi": "下班后我去超市买东西。",
        "pinyin": "Xià bān hòu wǒ qù chāo shì mǎi dōng xī.",
        "thaiMeaning": "หลังเลิกงานฉันไปซูเปอร์มาร์เก็ตซื้อของ"
      },
      {
        "scenario": "ถามตำแหน่งซูเปอร์มาร์เก็ต",
        "hanzi": "最近的超市在哪里？",
        "pinyin": "Zuì jìn de chāo shì zài nǎ lǐ?",
        "thaiMeaning": "ซูเปอร์มาร์เก็ตที่ใกล้ที่สุดอยู่ไหน?"
      }
    ]
  },
  {
    "id": "v365",
    "hanzi": "必须",
    "pinyin": "bìxū",
    "thaiMeaning": "ต้อง...ให้ได้ / จำเป็นต้อง",
    "example": {
      "hanzi": "必须去。",
      "pinyin": "Bìxū qù.",
      "thaiMeaning": "จำเป็นต้องไป"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "必须去。",
        "pinyin": "Bì xū qù.",
        "thaiMeaning": "จำเป็นต้องไป"
      },
      {
        "scenario": "แจ้งกฎว่าต้องแสดงบัตร",
        "hanzi": "进去以前必须出示证件。",
        "pinyin": "Jìn qù yǐ qián bì xū chū shì zhèng jiàn.",
        "thaiMeaning": "ก่อนเข้าไปต้องแสดงเอกสาร"
      },
      {
        "scenario": "เตือนว่าต้องทำงานให้เสร็จวันนี้",
        "hanzi": "这项工作今天必须完成。",
        "pinyin": "Zhè xiàng gōng zuò jīn tiān bì xū wán chéng.",
        "thaiMeaning": "งานนี้วันนี้ต้องทำให้เสร็จ"
      }
    ]
  },
  {
    "id": "v366",
    "hanzi": "应该",
    "pinyin": "yīnggāi",
    "thaiMeaning": "ควรจะ / สมควร",
    "example": {
      "hanzi": "应该早睡。",
      "pinyin": "Yīnggāi zǎoshuì.",
      "thaiMeaning": "ควรจะเข้านอนไว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "应该早睡。",
        "pinyin": "Yīng gāi zǎo shuì.",
        "thaiMeaning": "ควรจะเข้านอนไว"
      },
      {
        "scenario": "แนะนำให้พักผ่อน",
        "hanzi": "你太累了，应该早点休息。",
        "pinyin": "Nǐ tài lèi le, yīng gāi zǎo diǎn xiū xi.",
        "thaiMeaning": "คุณเหนื่อยมาก ควรพักเร็วหน่อย"
      },
      {
        "scenario": "คาดว่ารถน่าจะใกล้ถึง",
        "hanzi": "车应该快到了。",
        "pinyin": "Chē yīng gāi kuài dào le.",
        "thaiMeaning": "รถน่าจะใกล้ถึงแล้ว"
      }
    ]
  },
  {
    "id": "v367",
    "hanzi": "决定",
    "pinyin": "juédìng",
    "thaiMeaning": "ตัดสินใจ",
    "example": {
      "hanzi": "做决定。",
      "pinyin": "Zuò juédìng.",
      "thaiMeaning": "ทำการตัดสินใจ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "做决定。",
        "pinyin": "Zuò jué dìng.",
        "thaiMeaning": "ทำการตัดสินใจ"
      },
      {
        "scenario": "ตัดสินใจรับงานใหม่",
        "hanzi": "我决定接受这份工作。",
        "pinyin": "Wǒ jué dìng jiē shòu zhè fèn gōng zuò.",
        "thaiMeaning": "ฉันตัดสินใจรับงานนี้"
      },
      {
        "scenario": "ยังตัดสินใจไม่ได้ว่าจะเลือกอะไร",
        "hanzi": "我还没决定买哪一个。",
        "pinyin": "Wǒ hái méi jué dìng mǎi nǎ yí gè.",
        "thaiMeaning": "ฉันยังไม่ได้ตัดสินใจว่าจะซื้ออันไหน"
      }
    ]
  },
  {
    "id": "v368",
    "hanzi": "保证",
    "pinyin": "bǎozhèng",
    "thaiMeaning": "รับประกัน / สัญญา",
    "example": {
      "hanzi": "向你保证。",
      "pinyin": "Xiàng nǐ bǎozhèng.",
      "thaiMeaning": "สัญญากับคุณ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "向你保证。",
        "pinyin": "Xiàng nǐ bǎo zhèng.",
        "thaiMeaning": "สัญญากับคุณ"
      },
      {
        "scenario": "รับปากว่าจะไม่มาสาย",
        "hanzi": "我保证下次不会迟到。",
        "pinyin": "Wǒ bǎo zhèng xià cì bú huì chí dào.",
        "thaiMeaning": "ฉันรับรองว่าคราวหน้าจะไม่มาสาย"
      },
      {
        "scenario": "ร้านรับประกันคุณภาพ",
        "hanzi": "我们保证产品质量。",
        "pinyin": "Wǒ men bǎo zhèng chǎn pǐn zhì liàng.",
        "thaiMeaning": "พวกเรารับประกันคุณภาพสินค้า"
      }
    ]
  },
  {
    "id": "v369",
    "hanzi": "相信",
    "pinyin": "xiāngxìn",
    "thaiMeaning": "เชื่อ / เชื่อมั่น",
    "example": {
      "hanzi": "相信自己。",
      "pinyin": "Xiāngxìn zìjǐ.",
      "thaiMeaning": "เชื่อมั่นในตัวเอง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "相信自己。",
        "pinyin": "Xiāng xìn zì jǐ.",
        "thaiMeaning": "เชื่อมั่นในตัวเอง"
      },
      {
        "scenario": "ให้กำลังใจให้เชื่อตัวเอง",
        "hanzi": "相信自己，你一定可以。",
        "pinyin": "Xiāng xìn zì jǐ, nǐ yí dìng kě yǐ.",
        "thaiMeaning": "เชื่อมั่นในตัวเอง คุณทำได้แน่นอน"
      },
      {
        "scenario": "บอกว่าเชื่อคำพูดของเพื่อน",
        "hanzi": "我相信你说的话。",
        "pinyin": "Wǒ xiāng xìn nǐ shuō de huà.",
        "thaiMeaning": "ฉันเชื่อสิ่งที่คุณพูด"
      }
    ]
  },
  {
    "id": "v370",
    "hanzi": "发现",
    "pinyin": "fāxiàn",
    "thaiMeaning": "ค้นพบ / พบว่า",
    "example": {
      "hanzi": "发现秘密。",
      "pinyin": "Fāxiàn mìmì.",
      "thaiMeaning": "ค้นพบความลับ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "发现秘密。",
        "pinyin": "Fā xiàn mì mì.",
        "thaiMeaning": "ค้นพบความลับ"
      },
      {
        "scenario": "พบว่าลืมกุญแจ",
        "hanzi": "到门口才发现没带钥匙。",
        "pinyin": "Dào mén kǒu cái fā xiàn méi dài yào shi.",
        "thaiMeaning": "ถึงหน้าประตูจึงพบว่าไม่ได้เอากุญแจมา"
      },
      {
        "scenario": "ค้นพบร้านอาหารดีๆ",
        "hanzi": "我发现了一家很好吃的饭店。",
        "pinyin": "Wǒ fā xiàn le yì jiā hěn hǎo chī de fàn diàn.",
        "thaiMeaning": "ฉันพบร้านอาหารอร่อยร้านหนึ่ง"
      }
    ]
  },
  {
    "id": "v371",
    "hanzi": "改变",
    "pinyin": "gǎibiàn",
    "thaiMeaning": "เปลี่ยนแปลง / ปรับเปลี่ยน",
    "example": {
      "hanzi": "改变习惯。",
      "pinyin": "Gǎibiàn xíguàn.",
      "thaiMeaning": "เปลี่ยนนิสัย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "改变习惯。",
        "pinyin": "Gǎi biàn xí guàn.",
        "thaiMeaning": "เปลี่ยนนิสัย"
      },
      {
        "scenario": "เปลี่ยนแผนเพราะอากาศ",
        "hanzi": "因为下雨，我们改变了计划。",
        "pinyin": "Yīn wèi xià yǔ, wǒ men gǎi biàn le jì huà.",
        "thaiMeaning": "เพราะฝนตก พวกเราเปลี่ยนแผน"
      },
      {
        "scenario": "บอกว่านิสัยเปลี่ยนยาก",
        "hanzi": "改变习惯需要时间。",
        "pinyin": "Gǎi biàn xí guàn xū yào shí jiān.",
        "thaiMeaning": "การเปลี่ยนนิสัยต้องใช้เวลา"
      }
    ]
  },
  {
    "id": "v372",
    "hanzi": "清楚",
    "pinyin": "qīngchu",
    "thaiMeaning": "ชัดเจน / แจ่มแจ้ง",
    "example": {
      "hanzi": "看清楚。",
      "pinyin": "Kàn qīngchu.",
      "thaiMeaning": "มองเห็นชัดเจน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "看清楚。",
        "pinyin": "Kàn qīng chǔ.",
        "thaiMeaning": "มองเห็นชัดเจน"
      },
      {
        "scenario": "บอกว่าได้ยินไม่ชัด",
        "hanzi": "电话里我听不清楚。",
        "pinyin": "Diàn huà lǐ wǒ tīng bù qīng chǔ.",
        "thaiMeaning": "ทางโทรศัพท์ฉันได้ยินไม่ชัด"
      },
      {
        "scenario": "ขอให้อธิบายให้ชัด",
        "hanzi": "请把要求说清楚。",
        "pinyin": "Qǐng bǎ yāo qiú shuō qīng chǔ.",
        "thaiMeaning": "กรุณาอธิบายข้อกำหนดให้ชัดเจน"
      }
    ]
  },
  {
    "id": "v373",
    "hanzi": "了解",
    "pinyin": "liǎojiě",
    "thaiMeaning": "เข้าใจอย่างลึกซึ้ง / รู้จักดี",
    "example": {
      "hanzi": "互相了解。",
      "pinyin": "Hùxiāng liǎojiě.",
      "thaiMeaning": "เข้าใจกันและกัน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "互相了解。",
        "pinyin": "Hù xiāng liǎo jiě.",
        "thaiMeaning": "เข้าใจกันและกัน"
      },
      {
        "scenario": "ต้องการรู้ข้อมูลเพิ่มเติม",
        "hanzi": "我想了解一下公司的情况。",
        "pinyin": "Wǒ xiǎng liǎo jiě yí xià gōng sī de qíng kuàng.",
        "thaiMeaning": "ฉันอยากทราบสถานการณ์ของบริษัทเพิ่มเติม"
      },
      {
        "scenario": "บอกว่ารู้จักเพื่อนคนนี้ดี",
        "hanzi": "我很了解他的性格。",
        "pinyin": "Wǒ hěn liǎo jiě tā de xìng gé.",
        "thaiMeaning": "ฉันเข้าใจนิสัยของเขาดี"
      }
    ]
  },
  {
    "id": "v374",
    "hanzi": "熟悉",
    "pinyin": "shúxī",
    "thaiMeaning": "คุ้นเคย / ชิน",
    "example": {
      "hanzi": "熟悉环境。",
      "pinyin": "Shúxī huánjìng.",
      "thaiMeaning": "คุ้นเคยกับสภาพแวดล้อม"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "熟悉环境。",
        "pinyin": "Shú xī huán jìng.",
        "thaiMeaning": "คุ้นเคยกับสภาพแวดล้อม"
      },
      {
        "scenario": "คุ้นเคยกับเส้นทางไปบริษัท",
        "hanzi": "我对上班的路很熟悉。",
        "pinyin": "Wǒ duì shàng bān de lù hěn shú xī.",
        "thaiMeaning": "ฉันคุ้นเคยกับทางไปทำงานมาก"
      },
      {
        "scenario": "เริ่มคุ้นเคยกับงานใหม่",
        "hanzi": "我还不熟悉这个工作。",
        "pinyin": "Wǒ hái bù shú xī zhè ge gōng zuò.",
        "thaiMeaning": "ฉันยังไม่คุ้นเคยกับงานนี้"
      }
    ]
  },
  {
    "id": "v375",
    "hanzi": "精彩",
    "pinyin": "jīngcǎi",
    "thaiMeaning": "ยอดเยี่ยม / สนุกตื่นเต้น",
    "example": {
      "hanzi": "非常精彩。",
      "pinyin": "Fēicháng jīngcǎi.",
      "thaiMeaning": "ยอดเยี่ยมมาก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "非常精彩。",
        "pinyin": "Fēi cháng jīng cǎi.",
        "thaiMeaning": "ยอดเยี่ยมมาก"
      },
      {
        "scenario": "ชมการแข่งขันที่สนุก",
        "hanzi": "昨天的比赛非常精彩。",
        "pinyin": "Zuó tiān de bǐ sài fēi cháng jīng cǎi.",
        "thaiMeaning": "การแข่งขันเมื่อวานสนุกมาก"
      },
      {
        "scenario": "ชมการแสดงของนักเรียน",
        "hanzi": "学生们的表演很精彩。",
        "pinyin": "Xué shēng men de biǎo yǎn hěn jīng cǎi.",
        "thaiMeaning": "การแสดงของนักเรียนยอดเยี่ยมมาก"
      }
    ]
  },
  {
    "id": "v376",
    "hanzi": "合适",
    "pinyin": "héshì",
    "thaiMeaning": "เหมาะสม / พอดี",
    "example": {
      "hanzi": "尺码合适。",
      "pinyin": "Chǐmǎ héshì.",
      "thaiMeaning": "ขนาดพอดีเป๊ะ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "尺码合适。",
        "pinyin": "Chǐ mǎ hé shì.",
        "thaiMeaning": "ขนาดพอดีเป๊ะ"
      },
      {
        "scenario": "ลองเสื้อผ้าที่พอดี",
        "hanzi": "这件衣服大小很合适。",
        "pinyin": "Zhè jiàn yī fu dà xiǎo hěn hé shì.",
        "thaiMeaning": "ขนาดเสื้อตัวนี้พอดีมาก"
      },
      {
        "scenario": "นัดเวลาที่สะดวกทั้งสองฝ่าย",
        "hanzi": "下午三点见面合适吗？",
        "pinyin": "Xià wǔ sān diǎn jiàn miàn hé shì ma?",
        "thaiMeaning": "นัดเจอบ่ายสามโมงเหมาะไหม?"
      }
    ]
  },
  {
    "id": "v377",
    "hanzi": "客气",
    "pinyin": "kèqi",
    "thaiMeaning": "เกรงใจ",
    "example": {
      "hanzi": "别太客气。",
      "pinyin": "Bié tài kèqi.",
      "thaiMeaning": "ไม่ต้องเกรงใจเกินไป"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "别太客气。",
        "pinyin": "Bié tài kè qì.",
        "thaiMeaning": "ไม่ต้องเกรงใจเกินไป"
      },
      {
        "scenario": "บอกแขกว่าไม่ต้องเกรงใจ",
        "hanzi": "别客气，多吃一点。",
        "pinyin": "Bié kè qì, duō chī yì diǎn.",
        "thaiMeaning": "ไม่ต้องเกรงใจ กินเพิ่มอีกหน่อย"
      },
      {
        "scenario": "ชมพนักงานว่าพูดสุภาพ",
        "hanzi": "这里的服务员很客气。",
        "pinyin": "Zhè lǐ de fú wù yuán hěn kè qì.",
        "thaiMeaning": "พนักงานบริการที่นี่สุภาพมาก"
      }
    ]
  },
  {
    "id": "v378",
    "hanzi": "辛苦",
    "pinyin": "xīnkǔ",
    "thaiMeaning": "ตรากตรำเหน็ดเหนื่อย",
    "example": {
      "hanzi": "大家辛苦了！",
      "pinyin": "Dàjiā xīnkǔ le!",
      "thaiMeaning": "ทุกคนเหนื่อยกันมากเลย!"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "大家辛苦了！",
        "pinyin": "Dà jiā xīn kǔ le!",
        "thaiMeaning": "ทุกคนเหนื่อยกันมากเลย!"
      },
      {
        "scenario": "ขอบคุณทีมหลังเลิกงาน",
        "hanzi": "大家今天辛苦了，早点回家吧。",
        "pinyin": "Dà jiā jīn tiān xīn kǔ le, zǎo diǎn huí jiā ba.",
        "thaiMeaning": "วันนี้ทุกคนเหนื่อยกันแล้ว กลับบ้านเร็วหน่อย"
      },
      {
        "scenario": "เห็นใจเพื่อนที่ทำโอที",
        "hanzi": "你加班到这么晚，太辛苦了。",
        "pinyin": "Nǐ jiā bān dào zhè me wǎn, tài xīn kǔ le.",
        "thaiMeaning": "คุณทำโอทีถึงดึกขนาดนี้ ลำบากมาก"
      }
    ]
  },
  {
    "id": "v379",
    "hanzi": "礼物",
    "pinyin": "lǐwù",
    "thaiMeaning": "ของขวัญ",
    "example": {
      "hanzi": "送张礼物。",
      "pinyin": "Sòng zhāng lǐwù.",
      "thaiMeaning": "มอบของขวัญให้"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "送张礼物。",
        "pinyin": "Sòng zhāng lǐ wù.",
        "thaiMeaning": "มอบของขวัญให้"
      },
      {
        "scenario": "เตรียมของขวัญวันเกิด",
        "hanzi": "我给朋友准备了生日礼物。",
        "pinyin": "Wǒ gěi péng yǒu zhǔn bèi le shēng rì lǐ wù.",
        "thaiMeaning": "ฉันเตรียมของขวัญวันเกิดให้เพื่อน"
      },
      {
        "scenario": "ขอบคุณหลังได้รับของขวัญ",
        "hanzi": "谢谢你的礼物，我很喜欢。",
        "pinyin": "Xiè xiè nǐ de lǐ wù, wǒ hěn xǐ huan.",
        "thaiMeaning": "ขอบคุณสำหรับของขวัญ ฉันชอบมาก"
      }
    ]
  },
  {
    "id": "v380",
    "hanzi": "新闻",
    "pinyin": "xīnwén",
    "thaiMeaning": "ข่าวสาร / ข่าว",
    "example": {
      "hanzi": "看新闻。",
      "pinyin": "Kàn xīnwén.",
      "thaiMeaning": "ติดตามข่าวสาร"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "看新闻。",
        "pinyin": "Kàn xīn wén.",
        "thaiMeaning": "ติดตามข่าวสาร"
      },
      {
        "scenario": "ดูข่าวตอนเช้า",
        "hanzi": "我每天早上看新闻。",
        "pinyin": "Wǒ měi tiān zǎo shàng kàn xīn wén.",
        "thaiMeaning": "ฉันดูข่าวทุกเช้า"
      },
      {
        "scenario": "เล่าข่าวดีให้เพื่อนฟัง",
        "hanzi": "我有一个好新闻要告诉你。",
        "pinyin": "Wǒ yǒu yí gè hǎo xīn wén yào gào sù nǐ.",
        "thaiMeaning": "ฉันมีข่าวดีจะบอกคุณ"
      }
    ]
  },
  {
    "id": "v381",
    "hanzi": "习惯",
    "pinyin": "xíguàn",
    "thaiMeaning": "ความคุ้นเคย / นิสัย",
    "example": {
      "hanzi": "养成好习惯。",
      "pinyin": "Yǎngchéng hǎo xíguàn.",
      "thaiMeaning": "สร้างนิสัยที่ดี"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "养成好习惯。",
        "pinyin": "Yǎng chéng hǎo xí guàn.",
        "thaiMeaning": "สร้างนิสัยที่ดี"
      },
      {
        "scenario": "เล่านิสัยตื่นเช้า",
        "hanzi": "我已经习惯早起了。",
        "pinyin": "Wǒ yǐ jīng xí guàn zǎo qǐ le.",
        "thaiMeaning": "ฉันชินกับการตื่นเช้าแล้ว"
      },
      {
        "scenario": "แนะนำให้สร้างนิสัยที่ดี",
        "hanzi": "要养成每天运动的习惯。",
        "pinyin": "Yào yǎng chéng měi tiān yùn dòng de xí guàn.",
        "thaiMeaning": "ควรสร้างนิสัยออกกำลังกายทุกวัน"
      }
    ]
  },
  {
    "id": "v382",
    "hanzi": "文化",
    "pinyin": "wénhuà",
    "thaiMeaning": "วัฒนธรรม",
    "example": {
      "hanzi": "中国文化。",
      "pinyin": "Zhōngguó wénhuà.",
      "thaiMeaning": "วัฒนธรรมจีน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "中国文化。",
        "pinyin": "Zhōng guó wén huà.",
        "thaiMeaning": "วัฒนธรรมจีน"
      },
      {
        "scenario": "สนใจเรียนรู้วัฒนธรรมจีน",
        "hanzi": "我对中国文化很感兴趣。",
        "pinyin": "Wǒ duì zhōng guó wén huà hěn gǎn xìng qù.",
        "thaiMeaning": "ฉันสนใจวัฒนธรรมจีนมาก"
      },
      {
        "scenario": "แลกเปลี่ยนวัฒนธรรมระหว่างเพื่อน",
        "hanzi": "旅行能让我们了解不同的文化。",
        "pinyin": "Lǚ xíng néng ràng wǒ men liǎo jiě bù tóng de wén huà.",
        "thaiMeaning": "การเดินทางทำให้เราเข้าใจวัฒนธรรมที่แตกต่าง"
      }
    ]
  },
  {
    "id": "v383",
    "hanzi": "历史",
    "pinyin": "lìshǐ",
    "thaiMeaning": "ประวัติศาสตร์",
    "example": {
      "hanzi": "悠久历史。",
      "pinyin": "Yōujiǔ lìshǐ.",
      "thaiMeaning": "ประวัติศาสตร์ยาวนาน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "悠久历史。",
        "pinyin": "Yōu jiǔ lì shǐ.",
        "thaiMeaning": "ประวัติศาสตร์ยาวนาน"
      },
      {
        "scenario": "ไปพิพิธภัณฑ์เรียนประวัติศาสตร์",
        "hanzi": "我喜欢在博物馆了解历史。",
        "pinyin": "Wǒ xǐ huan zài bó wù guǎn liǎo jiě lì shǐ.",
        "thaiMeaning": "ฉันชอบเรียนรู้ประวัติศาสตร์ในพิพิธภัณฑ์"
      },
      {
        "scenario": "บอกว่าเมืองนี้มีประวัติยาวนาน",
        "hanzi": "这座城市有很长的历史。",
        "pinyin": "Zhè zuò chéng shì yǒu hěn cháng de lì shǐ.",
        "thaiMeaning": "เมืองนี้มีประวัติศาสตร์ยาวนาน"
      }
    ]
  },
  {
    "id": "v384",
    "hanzi": "环境",
    "pinyin": "huánjìng",
    "thaiMeaning": "สิ่งแวดล้อม",
    "example": {
      "hanzi": "优美环境。",
      "pinyin": "Yōuměi huánjìng.",
      "thaiMeaning": "สภาพแวดล้อมสวยงาม"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "优美环境。",
        "pinyin": "Yōu měi huán jìng.",
        "thaiMeaning": "สภาพแวดล้อมสวยงาม"
      },
      {
        "scenario": "ชมบรรยากาศที่ทำงาน",
        "hanzi": "这家公司的工作环境很好。",
        "pinyin": "Zhè jiā gōng sī de gōng zuò huán jìng hěn hǎo.",
        "thaiMeaning": "สภาพแวดล้อมการทำงานของบริษัทนี้ดีมาก"
      },
      {
        "scenario": "ขอให้ช่วยรักษาสิ่งแวดล้อม",
        "hanzi": "我们应该一起保护环境。",
        "pinyin": "Wǒ men yīng gāi yì qǐ bǎo hù huán jìng.",
        "thaiMeaning": "พวกเราควรร่วมกันรักษาสิ่งแวดล้อม"
      }
    ]
  },
  {
    "id": "v385",
    "hanzi": "条件",
    "pinyin": "tiáojiàn",
    "thaiMeaning": "เงื่อนไข / ปัจจัย",
    "example": {
      "hanzi": "创造条件。",
      "pinyin": "Chuàngzào tiáojiàn.",
      "thaiMeaning": "สร้างเงื่อนไข"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "创造条件。",
        "pinyin": "Chuàng zào tiáo jiàn.",
        "thaiMeaning": "สร้างเงื่อนไข"
      },
      {
        "scenario": "อ่านเงื่อนไขก่อนสมัครงาน",
        "hanzi": "这份工作的条件不错。",
        "pinyin": "Zhè fèn gōng zuò de tiáo jiàn bú cuò.",
        "thaiMeaning": "เงื่อนไขของงานนี้ไม่เลว"
      },
      {
        "scenario": "บอกว่ายังไม่พร้อมเพราะเงื่อนไขไม่พอ",
        "hanzi": "现在条件还不够成熟。",
        "pinyin": "Xiàn zài tiáo jiàn hái bú gòu chéng shú.",
        "thaiMeaning": "ตอนนี้เงื่อนไขยังไม่พร้อมเพียงพอ"
      }
    ]
  },
  {
    "id": "v386",
    "hanzi": "机会",
    "pinyin": "jīhuì",
    "thaiMeaning": "โอกาส",
    "example": {
      "hanzi": "抓住机会。",
      "pinyin": "Zhuāzhù jīhuì.",
      "thaiMeaning": "ไขว่คว้าโอกาส"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "抓住机会。",
        "pinyin": "Zhuā zhù jī huì.",
        "thaiMeaning": "ไขว่คว้าโอกาส"
      },
      {
        "scenario": "ขอบคุณที่ได้รับโอกาสทำงาน",
        "hanzi": "谢谢你给我这个机会。",
        "pinyin": "Xiè xiè nǐ gěi wǒ zhè ge jī huì.",
        "thaiMeaning": "ขอบคุณที่ให้โอกาสนี้แก่ฉัน"
      },
      {
        "scenario": "ให้กำลังใจให้คว้าโอกาส",
        "hanzi": "机会来了就要抓住。",
        "pinyin": "Jī huì lái le jiù yào zhuā zhù.",
        "thaiMeaning": "เมื่อโอกาสมาถึงก็ต้องคว้าไว้"
      }
    ]
  },
  {
    "id": "v387",
    "hanzi": "能力",
    "pinyin": "nénglì",
    "thaiMeaning": "ความสามารถ",
    "example": {
      "hanzi": "提升能力。",
      "pinyin": "Tíngshēng nénglì.",
      "thaiMeaning": "ยกระดับความสามารถ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "提升能力。",
        "pinyin": "Tí shēng néng lì.",
        "thaiMeaning": "ยกระดับความสามารถ"
      },
      {
        "scenario": "ชมความสามารถในการทำงาน",
        "hanzi": "我相信你的工作能力。",
        "pinyin": "Wǒ xiāng xìn nǐ de gōng zuò néng lì.",
        "thaiMeaning": "ฉันเชื่อในความสามารถการทำงานของคุณ"
      },
      {
        "scenario": "พัฒนาความสามารถทางภาษา",
        "hanzi": "练习可以提高口语能力。",
        "pinyin": "Liàn xí kě yǐ tí gāo kǒu yǔ néng lì.",
        "thaiMeaning": "การฝึกช่วยพัฒนาความสามารถการพูด"
      }
    ]
  },
  {
    "id": "v388",
    "hanzi": "经验",
    "pinyin": "jīngyàn",
    "thaiMeaning": "ประสบการณ์",
    "example": {
      "hanzi": "积累经验。",
      "pinyin": "Jīlěi jīngyàn.",
      "thaiMeaning": "สั่งสมประสบการณ์"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "积累经验。",
        "pinyin": "Jī lěi jīng yàn.",
        "thaiMeaning": "สั่งสมประสบการณ์"
      },
      {
        "scenario": "ถามประสบการณ์ทำงาน",
        "hanzi": "你有这方面的工作经验吗？",
        "pinyin": "Nǐ yǒu zhè fāng miàn de gōng zuò jīng yàn ma?",
        "thaiMeaning": "คุณมีประสบการณ์ทำงานด้านนี้ไหม?"
      },
      {
        "scenario": "เรียนรู้จากประสบการณ์ที่ผ่านมา",
        "hanzi": "我们要从失败中积累经验。",
        "pinyin": "Wǒ men yào cóng shī bài zhōng jī lěi jīng yàn.",
        "thaiMeaning": "พวกเราต้องสั่งสมประสบการณ์จากความล้มเหลว"
      }
    ]
  },
  {
    "id": "v389",
    "hanzi": "态度",
    "pinyin": "tàidu",
    "thaiMeaning": "ทัศนคติ / ท่าที",
    "example": {
      "hanzi": "良好态度。",
      "pinyin": "Liánghǎo tàidu.",
      "thaiMeaning": "ทัศนคติที่ดี"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "良好态度。",
        "pinyin": "Liáng hǎo tài dù.",
        "thaiMeaning": "ทัศนคติที่ดี"
      },
      {
        "scenario": "ชมทัศนคติในการทำงาน",
        "hanzi": "他的工作态度很认真。",
        "pinyin": "Tā de gōng zuò tài dù hěn rèn zhēn.",
        "thaiMeaning": "ทัศนคติในการทำงานของเขาจริงจังมาก"
      },
      {
        "scenario": "เตือนให้พูดด้วยท่าทีที่ดี",
        "hanzi": "请注意你说话的态度。",
        "pinyin": "Qǐng zhù yì nǐ shuō huà de tài dù.",
        "thaiMeaning": "กรุณาระวังท่าทีในการพูด"
      }
    ]
  },
  {
    "id": "v390",
    "hanzi": "信心",
    "pinyin": "xìnxīn",
    "thaiMeaning": "ความมั่นใจ",
    "example": {
      "hanzi": "充满信心。",
      "pinyin": "Chōngmǎn xìnxīn.",
      "thaiMeaning": "เปี่ยมด้วยความมั่นใจ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "充满信心。",
        "pinyin": "Chōng mǎn xìn xīn.",
        "thaiMeaning": "เปี่ยมด้วยความมั่นใจ"
      },
      {
        "scenario": "ให้กำลังใจก่อนนำเสนองาน",
        "hanzi": "你准备得很好，要有信心。",
        "pinyin": "Nǐ zhǔn bèi dé hěn hǎo, yào yǒu xìn xīn.",
        "thaiMeaning": "คุณเตรียมตัวดีมาก ต้องมั่นใจ"
      },
      {
        "scenario": "บอกว่าการฝึกทำให้มั่นใจขึ้น",
        "hanzi": "练习以后我更有信心了。",
        "pinyin": "Liàn xí yǐ hòu wǒ gèng yǒu xìn xīn le.",
        "thaiMeaning": "หลังฝึกแล้วฉันมั่นใจขึ้น"
      }
    ]
  },
  {
    "id": "v391",
    "hanzi": "合作",
    "pinyin": "hézuò",
    "thaiMeaning": "ความร่วมมือ / ร่วมมือ",
    "example": {
      "hanzi": "愉快合作。",
      "pinyin": "Yúkuài hézuò.",
      "thaiMeaning": "ร่วมมือกันอย่างราบรื่น"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "愉快合作。",
        "pinyin": "Yú kuài hé zuò.",
        "thaiMeaning": "ร่วมมือกันอย่างราบรื่น"
      },
      {
        "scenario": "เสนอร่วมงานระหว่างบริษัท",
        "hanzi": "希望以后有机会合作。",
        "pinyin": "Xī wàng yǐ hòu yǒu jī huì hé zuò.",
        "thaiMeaning": "หวังว่าในอนาคตจะมีโอกาสร่วมงานกัน"
      },
      {
        "scenario": "ชมทีมที่ทำงานร่วมกันดี",
        "hanzi": "大家合作得非常顺利。",
        "pinyin": "Dà jiā hé zuò dé fēi cháng shùn lì.",
        "thaiMeaning": "ทุกคนร่วมมือกันอย่างราบรื่นมาก"
      }
    ]
  },
  {
    "id": "v392",
    "hanzi": "友谊",
    "pinyin": "yǒuyì",
    "thaiMeaning": "มิตรภาพ",
    "example": {
      "hanzi": "深厚友谊。",
      "pinyin": "Shēnhòu yǒuyì.",
      "thaiMeaning": "มิตรภาพอันลึกซึ้ง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "深厚友谊。",
        "pinyin": "Shēn hòu yǒu yì.",
        "thaiMeaning": "มิตรภาพอันลึกซึ้ง"
      },
      {
        "scenario": "พูดถึงมิตรภาพที่ยาวนาน",
        "hanzi": "我们的友谊已经十年了。",
        "pinyin": "Wǒ men de yǒu yì yǐ jīng shí nián le.",
        "thaiMeaning": "มิตรภาพของเรามาสิบปีแล้ว"
      },
      {
        "scenario": "อวยพรให้มิตรภาพคงอยู่",
        "hanzi": "希望我们的友谊一直不变。",
        "pinyin": "Xī wàng wǒ men de yǒu yì yì zhí bú biàn.",
        "thaiMeaning": "หวังว่ามิตรภาพของเราจะไม่เปลี่ยนแปลง"
      }
    ]
  },
  {
    "id": "v393",
    "hanzi": "未来",
    "pinyin": "wèilái",
    "thaiMeaning": "อนาคต",
    "example": {
      "hanzi": "美好的未来。",
      "pinyin": "Měihǎo de wèilái.",
      "thaiMeaning": "อนาคตอันสดใส"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "美好的未来。",
        "pinyin": "Měi hǎo de wèi lái.",
        "thaiMeaning": "อนาคตอันสดใส"
      },
      {
        "scenario": "พูดถึงแผนในอนาคต",
        "hanzi": "你对未来有什么计划？",
        "pinyin": "Nǐ duì wèi lái yǒu shén me jì huà?",
        "thaiMeaning": "คุณมีแผนอะไรสำหรับอนาคต?"
      },
      {
        "scenario": "หวังว่าอนาคตจะดีขึ้น",
        "hanzi": "我相信未来会更好。",
        "pinyin": "Wǒ xiāng xìn wèi lái huì gèng hǎo.",
        "thaiMeaning": "ฉันเชื่อว่าอนาคตจะดีขึ้น"
      }
    ]
  },
  {
    "id": "v394",
    "hanzi": "梦想",
    "pinyin": "mèngxiǎng",
    "thaiMeaning": "ความฝัน",
    "example": {
      "hanzi": "实现梦想。",
      "pinyin": "Shíxiàn mèngxiǎng.",
      "thaiMeaning": "ทำความฝันให้เป็นจริง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "实现梦想。",
        "pinyin": "Shí xiàn mèng xiǎng.",
        "thaiMeaning": "ทำความฝันให้เป็นจริง"
      },
      {
        "scenario": "เล่าความฝันในวัยเด็ก",
        "hanzi": "我的梦想是当医生。",
        "pinyin": "Wǒ de mèng xiǎng shì dāng yī shēng.",
        "thaiMeaning": "ความฝันของฉันคือเป็นหมอ"
      },
      {
        "scenario": "ให้กำลังใจให้ตามความฝัน",
        "hanzi": "不要放弃自己的梦想。",
        "pinyin": "Bú yào fàng qì zì jǐ de mèng xiǎng.",
        "thaiMeaning": "อย่าละทิ้งความฝันของตัวเอง"
      }
    ]
  },
  {
    "id": "v395",
    "hanzi": "目标",
    "pinyin": "mùbiāo",
    "thaiMeaning": "เป้าหมาย",
    "example": {
      "hanzi": "达成目标。",
      "pinyin": "Dáchéng mùbiāo.",
      "thaiMeaning": "บรรลุเป้าหมาย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "达成目标。",
        "pinyin": "Dá chéng mù biāo.",
        "thaiMeaning": "บรรลุเป้าหมาย"
      },
      {
        "scenario": "ตั้งเป้าหมายการเรียน",
        "hanzi": "我今年的目标是学好中文。",
        "pinyin": "Wǒ jīn nián de mù biāo shì xué hǎo zhōng wén.",
        "thaiMeaning": "เป้าหมายปีนี้ของฉันคือเรียนภาษาจีนให้ดี"
      },
      {
        "scenario": "ทำงานเป็นขั้นตอนเพื่อถึงเป้าหมาย",
        "hanzi": "我们离目标越来越近了。",
        "pinyin": "Wǒ men lí mù biāo yuè lái yuè jìn le.",
        "thaiMeaning": "พวกเราเข้าใกล้เป้าหมายมากขึ้นเรื่อยๆ"
      }
    ]
  },
  {
    "id": "v396",
    "hanzi": "计划",
    "pinyin": "jìhuà",
    "thaiMeaning": "แผนการ",
    "example": {
      "hanzi": "制定计划。",
      "pinyin": "Zhìdìng jìhuà.",
      "thaiMeaning": "จัดทำแผนการ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "制定计划。",
        "pinyin": "Zhì dìng jì huà.",
        "thaiMeaning": "จัดทำแผนการ"
      },
      {
        "scenario": "ถามแผนวันหยุด",
        "hanzi": "周末你有什么计划？",
        "pinyin": "Zhōu mò nǐ yǒu shén me jì huà?",
        "thaiMeaning": "สุดสัปดาห์คุณมีแผนอะไร?"
      },
      {
        "scenario": "เปลี่ยนแผนการเดินทาง",
        "hanzi": "天气不好，我们改变了旅游计划。",
        "pinyin": "Tiān qì bù hǎo, wǒ men gǎi biàn le lǚ yóu jì huà.",
        "thaiMeaning": "อากาศไม่ดี พวกเราเปลี่ยนแผนท่องเที่ยว"
      }
    ]
  },
  {
    "id": "v397",
    "hanzi": "总结",
    "pinyin": "zǒngjié",
    "thaiMeaning": "ข้อสรุป / สรุปผล",
    "example": {
      "hanzi": "做出总结。",
      "pinyin": "Zuòchū zǒngjié.",
      "thaiMeaning": "สรุปผลงาน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "做出总结。",
        "pinyin": "Zuò chū zǒng jié.",
        "thaiMeaning": "สรุปผลงาน"
      },
      {
        "scenario": "สรุปงานหลังประชุม",
        "hanzi": "会议结束前，经理做了总结。",
        "pinyin": "Huì yì jié shù qián, jīng lǐ zuò le zǒng jié.",
        "thaiMeaning": "ก่อนจบประชุม ผู้จัดการได้สรุป"
      },
      {
        "scenario": "ทบทวนและสรุปสิ่งที่เรียน",
        "hanzi": "学完以后要及时总结。",
        "pinyin": "Xué wán yǐ hòu yào jí shí zǒng jié.",
        "thaiMeaning": "หลังเรียนเสร็จควรสรุปทันที"
      }
    ]
  },
  {
    "id": "v398",
    "hanzi": "进步",
    "pinyin": "jìnbù",
    "thaiMeaning": "ก้าวหน้า / พัฒนา",
    "example": {
      "hanzi": "不断进步。",
      "pinyin": "Búduàn jìnbù.",
      "thaiMeaning": "พัฒนาอย่างต่อเนื่อง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "不断进步。",
        "pinyin": "Bú duàn jìn bù.",
        "thaiMeaning": "พัฒนาอย่างต่อเนื่อง"
      },
      {
        "scenario": "ชมว่าภาษาจีนพัฒนาขึ้น",
        "hanzi": "你的中文进步很快。",
        "pinyin": "Nǐ de zhōng wén jìn bù hěn kuài.",
        "thaiMeaning": "ภาษาจีนของคุณพัฒนาเร็วมาก"
      },
      {
        "scenario": "บอกว่าฝึกทุกวันแล้วจะก้าวหน้า",
        "hanzi": "每天练习就会进步。",
        "pinyin": "Měi tiān liàn xí jiù huì jìn bù.",
        "thaiMeaning": "ฝึกทุกวันก็จะพัฒนาขึ้น"
      }
    ]
  },
  {
    "id": "v399",
    "hanzi": "坚持",
    "pinyin": "jiānchí",
    "thaiMeaning": "ยืนหยัด / ไม่ท้อถอย",
    "example": {
      "hanzi": "坚持到底。",
      "pinyin": "Jiānchí dàodǐ.",
      "thaiMeaning": "ยืนหยัดสู้จนถึงที่สุด"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "坚持到底。",
        "pinyin": "Jiān chí dào dǐ.",
        "thaiMeaning": "ยืนหยัดสู้จนถึงที่สุด"
      },
      {
        "scenario": "ให้กำลังใจให้ออกกำลังต่อเนื่อง",
        "hanzi": "再累也要坚持运动。",
        "pinyin": "Zài lèi yě yào jiān chí yùn dòng.",
        "thaiMeaning": "ถึงเหนื่อยก็ต้องออกกำลังกายต่อไป"
      },
      {
        "scenario": "บอกว่าทำต่อมาหนึ่งปีแล้ว",
        "hanzi": "这件事我坚持了一年。",
        "pinyin": "Zhè jiàn shì wǒ jiān chí le yì nián.",
        "thaiMeaning": "ฉันทำเรื่องนี้ต่อเนื่องมาหนึ่งปี"
      }
    ]
  },
  {
    "id": "v400",
    "hanzi": "生活",
    "pinyin": "shēnghuó",
    "thaiMeaning": "การดำเนินชีวิต / ชีวิต",
    "example": {
      "hanzi": "热爱生活。",
      "pinyin": "Rè'ài shēnghuó.",
      "thaiMeaning": "รักในการใช้ชีวิต"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "热爱生活。",
        "pinyin": "Rè ài shēng huó.",
        "thaiMeaning": "รักในการใช้ชีวิต"
      },
      {
        "scenario": "ถามชีวิตในเมืองใหม่",
        "hanzi": "你在这里生活得习惯吗？",
        "pinyin": "Nǐ zài zhè lǐ shēng huó dé xí guàn ma?",
        "thaiMeaning": "คุณคุ้นเคยกับการใช้ชีวิตที่นี่ไหม?"
      },
      {
        "scenario": "เล่าชีวิตประจำวันเรียบง่าย",
        "hanzi": "我的生活很简单，也很快乐。",
        "pinyin": "Wǒ de shēng huó hěn jiǎn dān, yě hěn kuài lè.",
        "thaiMeaning": "ชีวิตของฉันเรียบง่ายและมีความสุข"
      }
    ]
  },
  {
    "id": "v401",
    "hanzi": "幸福",
    "pinyin": "xìngfú",
    "thaiMeaning": "ความสุขสมบูรณ์",
    "example": {
      "hanzi": "生活幸福。",
      "pinyin": "Shēnghuó xìngfú.",
      "thaiMeaning": "ชีวิตเปี่ยมสุข"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "生活幸福。",
        "pinyin": "Shēng huó xìng fú.",
        "thaiMeaning": "ชีวิตเปี่ยมสุข"
      },
      {
        "scenario": "อวยพรคู่แต่งงาน",
        "hanzi": "祝你们永远幸福。",
        "pinyin": "Zhù nǐ men yǒng yuǎn xìng fú.",
        "thaiMeaning": "ขอให้พวกคุณมีความสุขตลอดไป"
      },
      {
        "scenario": "พูดถึงความสุขกับครอบครัว",
        "hanzi": "和家人在一起，我觉得很幸福。",
        "pinyin": "Hé jiā rén zài yì qǐ, wǒ jué de hěn xìng fú.",
        "thaiMeaning": "เมื่ออยู่กับครอบครัว ฉันรู้สึกมีความสุขมาก"
      }
    ]
  },
  {
    "id": "v402",
    "hanzi": "希望",
    "pinyin": "xīwàng",
    "thaiMeaning": "ความหวัง / หวังว่า",
    "example": {
      "hanzi": "充满希望。",
      "pinyin": "Chōngmǎn xīwàng.",
      "thaiMeaning": "เปี่ยมด้วยความหวัง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "充满希望。",
        "pinyin": "Chōng mǎn xī wàng.",
        "thaiMeaning": "เปี่ยมด้วยความหวัง"
      },
      {
        "scenario": "หวังว่าเพื่อนจะหายเร็วๆ",
        "hanzi": "希望你早日康复。",
        "pinyin": "Xī wàng nǐ zǎo rì kāng fù.",
        "thaiMeaning": "หวังว่าคุณจะหายดีเร็วๆ"
      },
      {
        "scenario": "พูดถึงสิ่งที่อยากทำในอนาคต",
        "hanzi": "我希望以后能去中国工作。",
        "pinyin": "Wǒ xī wàng yǐ hòu néng qù zhōng guó gōng zuò.",
        "thaiMeaning": "ฉันหวังว่าอนาคตจะได้ไปทำงานที่จีน"
      }
    ]
  },
  {
    "id": "v403",
    "hanzi": "突然",
    "pinyin": "tūrán",
    "thaiMeaning": "ทันทีทันใด / กะทันหัน",
    "example": {
      "hanzi": "突然下雨。",
      "pinyin": "Tūrán xiàyǔ.",
      "thaiMeaning": "ฝนตกกะทันหัน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "突然下雨。",
        "pinyin": "Tū rán xià yǔ.",
        "thaiMeaning": "ฝนตกกะทันหัน"
      },
      {
        "scenario": "ไฟดับกะทันหัน",
        "hanzi": "房间里的灯突然灭了。",
        "pinyin": "Fáng jiān lǐ de dēng tū rán miè le.",
        "thaiMeaning": "ไฟในห้องดับกะทันหัน"
      },
      {
        "scenario": "ฝนตกโดยไม่ทันตั้งตัว",
        "hanzi": "刚才突然下起雨来。",
        "pinyin": "Gāng cái tū rán xià qǐ yǔ lái.",
        "thaiMeaning": "เมื่อครู่นี้จู่ๆ ฝนก็ตก"
      }
    ]
  },
  {
    "id": "v404",
    "hanzi": "其实",
    "pinyin": "qíshí",
    "thaiMeaning": "ความจริงแล้ว / จริงๆ แล้ว",
    "example": {
      "hanzi": "其实不难。",
      "pinyin": "Qíshí bù nán.",
      "thaiMeaning": "จริงๆ แล้วไม่ยาก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "其实不难。",
        "pinyin": "Qí shí bù nán.",
        "thaiMeaning": "จริงๆ แล้วไม่ยาก"
      },
      {
        "scenario": "บอกความจริงว่าพูดเล่น",
        "hanzi": "其实我刚才是在开玩笑。",
        "pinyin": "Qí shí wǒ gāng cái shì zài kāi wán xiào.",
        "thaiMeaning": "จริงๆ แล้วเมื่อกี้ฉันพูดเล่น"
      },
      {
        "scenario": "บอกว่างานไม่ได้ยากอย่างที่คิด",
        "hanzi": "这个工作其实不难。",
        "pinyin": "Zhè ge gōng zuò qí shí bù nán.",
        "thaiMeaning": "จริงๆ แล้วงานนี้ไม่ยาก"
      }
    ]
  },
  {
    "id": "v405",
    "hanzi": "到底",
    "pinyin": "dàodǐ",
    "thaiMeaning": "สรุปแล้ว / ตกลงว่า",
    "example": {
      "hanzi": "到底去不去？",
      "pinyin": "Dàodǐ qù bú qù?",
      "thaiMeaning": "ตกลงว่าจะไปหรือไม่ไป"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "到底去不去？",
        "pinyin": "Dào dǐ qù bu qù?",
        "thaiMeaning": "ตกลงว่าจะไปหรือไม่ไป"
      },
      {
        "scenario": "เร่งให้ตัดสินใจว่าจะไปหรือไม่",
        "hanzi": "你到底去不去？",
        "pinyin": "Nǐ dào dǐ qù bu qù?",
        "thaiMeaning": "ตกลงคุณจะไปหรือไม่ไป?"
      },
      {
        "scenario": "ถามหาสาเหตุที่แท้จริง",
        "hanzi": "这到底是怎么回事？",
        "pinyin": "Zhè dào dǐ shì zěn me huí shì?",
        "thaiMeaning": "ตกลงเรื่องนี้เกิดอะไรขึ้นกันแน่?"
      }
    ]
  },
  {
    "id": "v406",
    "hanzi": "放心",
    "pinyin": "fàngxīn",
    "thaiMeaning": "วางใจ / สบายใจได้",
    "example": {
      "hanzi": "请放心。",
      "pinyin": "Qǐng fàngxīn.",
      "thaiMeaning": "โปรดวางใจได้"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "请放心。",
        "pinyin": "Qǐng fàng xīn.",
        "thaiMeaning": "โปรดวางใจได้"
      },
      {
        "scenario": "บอกครอบครัวว่าไม่ต้องเป็นห่วง",
        "hanzi": "你们放心，我会照顾好自己。",
        "pinyin": "Nǐ men fàng xīn, wǒ huì zhào gù hǎo zì jǐ.",
        "thaiMeaning": "ทุกคนวางใจได้ ฉันจะดูแลตัวเองให้ดี"
      },
      {
        "scenario": "ยืนยันว่าจะทำงานให้เสร็จ",
        "hanzi": "放心吧，我今天一定完成。",
        "pinyin": "Fàng xīn ba, wǒ jīn tiān yí dìng wán chéng.",
        "thaiMeaning": "วางใจเถอะ วันนี้ฉันจะทำให้เสร็จแน่นอน"
      }
    ]
  },
  {
    "id": "v407",
    "hanzi": "担心",
    "pinyin": "dānxīn",
    "thaiMeaning": "กังวล / เป็นห่วง",
    "example": {
      "hanzi": "别担心。",
      "pinyin": "Bié dānxīn.",
      "thaiMeaning": "ไม่ต้องกังวลไป"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "别担心。",
        "pinyin": "Bié dān xīn.",
        "thaiMeaning": "ไม่ต้องกังวลไป"
      },
      {
        "scenario": "เป็นห่วงเพื่อนที่กลับดึก",
        "hanzi": "你这么晚还没回家，我很担心。",
        "pinyin": "Nǐ zhè me wǎn hái méi huí jiā, wǒ hěn dān xīn.",
        "thaiMeaning": "ดึกขนาดนี้คุณยังไม่กลับบ้าน ฉันเป็นห่วงมาก"
      },
      {
        "scenario": "ปลอบว่าไม่ต้องกังวลเรื่องสอบ",
        "hanzi": "别担心，考试不会太难。",
        "pinyin": "Bié dān xīn, kǎo shì bú huì tài nán.",
        "thaiMeaning": "ไม่ต้องกังวล การสอบจะไม่ยากเกินไป"
      }
    ]
  },
  {
    "id": "v408",
    "hanzi": "期待",
    "pinyin": "qīdài",
    "thaiMeaning": "เฝ้ารอ / ตั้งตารอ",
    "example": {
      "hanzi": "期待见面。",
      "pinyin": "Qīdài jiànmiàn.",
      "thaiMeaning": "ตั้งตารอที่จะได้พบกัน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "期待见面。",
        "pinyin": "Qī dài jiàn miàn.",
        "thaiMeaning": "ตั้งตารอที่จะได้พบกัน"
      },
      {
        "scenario": "ตั้งตารอการเดินทาง",
        "hanzi": "我很期待下个月的旅行。",
        "pinyin": "Wǒ hěn qī dài xià gè yuè de lǚ xíng.",
        "thaiMeaning": "ฉันตั้งตารอการเดินทางเดือนหน้า"
      },
      {
        "scenario": "บอกว่าจะรอผลงานใหม่",
        "hanzi": "大家都期待你的新作品。",
        "pinyin": "Dà jiā dōu qī dài nǐ de xīn zuò pǐn.",
        "thaiMeaning": "ทุกคนตั้งตารอผลงานใหม่ของคุณ"
      }
    ]
  },
  {
    "id": "v409",
    "hanzi": "锻炼",
    "pinyin": "duànliàn",
    "thaiMeaning": "ออกกำลังกาย",
    "example": {
      "hanzi": "锻炼身体。",
      "pinyin": "Duànliàn shēntǐ.",
      "thaiMeaning": "ออกกำลังกายบริหารร่างกาย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "锻炼身体。",
        "pinyin": "Duàn liàn shēn tǐ.",
        "thaiMeaning": "ออกกำลังกายบริหารร่างกาย"
      },
      {
        "scenario": "ออกกำลังกายหลังเลิกงาน",
        "hanzi": "我每天下班后锻炼身体。",
        "pinyin": "Wǒ měi tiān xià bān hòu duàn liàn shēn tǐ.",
        "thaiMeaning": "ฉันออกกำลังกายหลังเลิกงานทุกวัน"
      },
      {
        "scenario": "แพทย์แนะนำให้ออกกำลังเพิ่ม",
        "hanzi": "医生建议我多锻炼。",
        "pinyin": "Yī shēng jiàn yì wǒ duō duàn liàn.",
        "thaiMeaning": "หมอแนะนำให้ฉันออกกำลังกายมากขึ้น"
      }
    ]
  },
  {
    "id": "v410",
    "hanzi": "检查",
    "pinyin": "jiǎnchá",
    "thaiMeaning": "ตรวจสอบ / เช็ก",
    "example": {
      "hanzi": "检查清楚。",
      "pinyin": "Jiǎnchá qīngchu.",
      "thaiMeaning": "ตรวจสอบให้ชัดเจน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "检查清楚。",
        "pinyin": "Jiǎn chá qīng chǔ.",
        "thaiMeaning": "ตรวจสอบให้ชัดเจน"
      },
      {
        "scenario": "ตรวจเอกสารก่อนส่ง",
        "hanzi": "发出去以前请再检查一遍。",
        "pinyin": "Fā chū qù yǐ qián qǐng zài jiǎn chá yí biàn.",
        "thaiMeaning": "ก่อนส่งออกไปกรุณาตรวจอีกครั้ง"
      },
      {
        "scenario": "ไปโรงพยาบาลตรวจร่างกาย",
        "hanzi": "我明天去医院检查身体。",
        "pinyin": "Wǒ míng tiān qù yī yuàn jiǎn chá shēn tǐ.",
        "thaiMeaning": "พรุ่งนี้ฉันจะไปโรงพยาบาลตรวจร่างกาย"
      }
    ]
  },
  {
    "id": "v411",
    "hanzi": "比较",
    "pinyin": "bǐjiào",
    "thaiMeaning": "ค่อนข้าง / เปรียบเทียบ",
    "example": {
      "hanzi": "比较好。",
      "pinyin": "Bǐjiào hǎo.",
      "thaiMeaning": "ค่อนข้างดี"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "比较好。",
        "pinyin": "Bǐ jiào hǎo.",
        "thaiMeaning": "ค่อนข้างดี"
      },
      {
        "scenario": "บอกว่าอากาศวันนี้ค่อนข้างเย็น",
        "hanzi": "今天比较冷，多穿一点。",
        "pinyin": "Jīn tiān bǐ jiào lěng, duō chuān yì diǎn.",
        "thaiMeaning": "วันนี้ค่อนข้างหนาว ใส่เสื้อเพิ่มหน่อย"
      },
      {
        "scenario": "เปรียบเทียบสินค้าสองชิ้น",
        "hanzi": "我们比较一下这两个价格。",
        "pinyin": "Wǒ men bǐ jiào yí xià zhè liǎng gè jià gé.",
        "thaiMeaning": "พวกเราเปรียบเทียบราคาสองอันนี้กัน"
      }
    ]
  },
  {
    "id": "v412",
    "hanzi": "方便",
    "pinyin": "fāngbiàn",
    "thaiMeaning": "สะดวก / สะดวกสบาย",
    "example": {
      "hanzi": "交通方便。",
      "pinyin": "Jiāotōng fāngbiàn.",
      "thaiMeaning": "เดินทางสะดวก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "交通方便。",
        "pinyin": "Jiāo tōng fāng biàn.",
        "thaiMeaning": "เดินทางสะดวก"
      },
      {
        "scenario": "ถามเวลาที่สะดวกโทรหา",
        "hanzi": "你什么时候方便接电话？",
        "pinyin": "Nǐ shén me shí hòu fāng biàn jiē diàn huà?",
        "thaiMeaning": "คุณสะดวกรับโทรศัพท์เมื่อไร?"
      },
      {
        "scenario": "ชมว่าที่พักเดินทางสะดวก",
        "hanzi": "这家酒店离车站近，很方便。",
        "pinyin": "Zhè jiā jiǔ diàn lí chē zhàn jìn, hěn fāng biàn.",
        "thaiMeaning": "โรงแรมนี้ใกล้สถานี สะดวกมาก"
      }
    ]
  },
  {
    "id": "v413",
    "hanzi": "简单",
    "pinyin": "jiǎndān",
    "thaiMeaning": "ง่าย / ไม่ซับซ้อน",
    "example": {
      "hanzi": "问题简单。",
      "pinyin": "Wèntí jiǎndān.",
      "thaiMeaning": "คำถามง่ายๆ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "问题简单。",
        "pinyin": "Wèn tí jiǎn dān.",
        "thaiMeaning": "คำถามง่ายๆ"
      },
      {
        "scenario": "บอกว่าอาหารทำง่าย",
        "hanzi": "这道菜做起来很简单。",
        "pinyin": "Zhè dào cài zuò qǐ lái hěn jiǎn dān.",
        "thaiMeaning": "อาหารจานนี้ทำง่ายมาก"
      },
      {
        "scenario": "ขอให้อธิบายสั้นและง่าย",
        "hanzi": "请简单介绍一下自己。",
        "pinyin": "Qǐng jiǎn dān jiè shào yí xià zì jǐ.",
        "thaiMeaning": "กรุณาแนะนำตัวเองแบบสั้นๆ"
      }
    ]
  },
  {
    "id": "v414",
    "hanzi": "复杂",
    "pinyin": "fùzá",
    "thaiMeaning": "ซับซ้อน",
    "example": {
      "hanzi": "关系复杂。",
      "pinyin": "Guānxi fùzá.",
      "thaiMeaning": "ความสัมพันธ์ซับซ้อน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "关系复杂。",
        "pinyin": "Guān xì fù zá.",
        "thaiMeaning": "ความสัมพันธ์ซับซ้อน"
      },
      {
        "scenario": "บอกว่าปัญหาซับซ้อน",
        "hanzi": "这个问题比想象中复杂。",
        "pinyin": "Zhè ge wèn tí bǐ xiǎng xiàng zhōng fù zá.",
        "thaiMeaning": "ปัญหานี้ซับซ้อนกว่าที่คิด"
      },
      {
        "scenario": "ขอให้อธิบายขั้นตอนที่ยุ่งยาก",
        "hanzi": "手续有点复杂，请慢慢说明。",
        "pinyin": "Shǒu xù yǒu diǎn fù zá, qǐng màn màn shuō míng.",
        "thaiMeaning": "ขั้นตอนค่อนข้างซับซ้อน กรุณาอธิบายช้าๆ"
      }
    ]
  },
  {
    "id": "v415",
    "hanzi": "重要",
    "pinyin": "zhòngyào",
    "thaiMeaning": "สำคัญ",
    "example": {
      "hanzi": "很重要。",
      "pinyin": "Hěn zhòngyào.",
      "thaiMeaning": "สำคัญมาก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "很重要。",
        "pinyin": "Hěn zhòng yào.",
        "thaiMeaning": "สำคัญมาก"
      },
      {
        "scenario": "เตือนว่าการนอนสำคัญ",
        "hanzi": "充足的睡眠很重要。",
        "pinyin": "Chōng zú de shuì mián hěn zhòng yào.",
        "thaiMeaning": "การนอนให้เพียงพอสำคัญมาก"
      },
      {
        "scenario": "แจ้งว่ามีเรื่องสำคัญจะคุย",
        "hanzi": "我有一件重要的事跟你说。",
        "pinyin": "Wǒ yǒu yí jiàn zhòng yào de shì gēn nǐ shuō.",
        "thaiMeaning": "ฉันมีเรื่องสำคัญจะคุยกับคุณ"
      }
    ]
  },
  {
    "id": "v416",
    "hanzi": "主要",
    "pinyin": "zhǔyào",
    "thaiMeaning": "หลัก / สำคัญหลัก",
    "example": {
      "hanzi": "主要原因。",
      "pinyin": "Zhǔyào yuányīn.",
      "thaiMeaning": "สาเหตุหลัก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "主要原因。",
        "pinyin": "Zhǔ yào yuán yīn.",
        "thaiMeaning": "สาเหตุหลัก"
      },
      {
        "scenario": "อธิบายสาเหตุหลัก",
        "hanzi": "迟到的主要原因是堵车。",
        "pinyin": "Chí dào de zhǔ yào yuán yīn shì dǔ chē.",
        "thaiMeaning": "สาเหตุหลักที่มาสายคือรถติด"
      },
      {
        "scenario": "บอกหน้าที่หลักในงาน",
        "hanzi": "我主要负责顾客服务。",
        "pinyin": "Wǒ zhǔ yào fù zé gù kè fú wù.",
        "thaiMeaning": "ฉันรับผิดชอบงานบริการลูกค้าเป็นหลัก"
      }
    ]
  },
  {
    "id": "v417",
    "hanzi": "安全",
    "pinyin": "ānquán",
    "thaiMeaning": "ปลอดภัย",
    "example": {
      "hanzi": "注意安全。",
      "pinyin": "Zhùyì ānquán.",
      "thaiMeaning": "ระมัดระวังความปลอดภัย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "注意安全。",
        "pinyin": "Zhù yì ān quán.",
        "thaiMeaning": "ระมัดระวังความปลอดภัย"
      },
      {
        "scenario": "เตือนให้คาดเข็มขัด",
        "hanzi": "坐车要系安全带。",
        "pinyin": "Zuò chē yào xì ān quán dài.",
        "thaiMeaning": "นั่งรถต้องคาดเข็มขัดนิรภัย"
      },
      {
        "scenario": "บอกครอบครัวว่าถึงอย่างปลอดภัย",
        "hanzi": "我已经安全到家了。",
        "pinyin": "Wǒ yǐ jīng ān quán dào jiā le.",
        "thaiMeaning": "ฉันถึงบ้านอย่างปลอดภัยแล้ว"
      }
    ]
  },
  {
    "id": "v418",
    "hanzi": "危险",
    "pinyin": "wēixiǎn",
    "thaiMeaning": "อันตราย",
    "example": {
      "hanzi": "十分危险。",
      "pinyin": "Shífēn wēixiǎn.",
      "thaiMeaning": "อันตรายอย่างยิ่ง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "十分危险。",
        "pinyin": "Shí fēn wēi xiǎn.",
        "thaiMeaning": "อันตรายอย่างยิ่ง"
      },
      {
        "scenario": "เตือนไม่ให้เล่นใกล้ถนน",
        "hanzi": "在马路边玩很危险。",
        "pinyin": "Zài mǎ lù biān wán hěn wēi xiǎn.",
        "thaiMeaning": "เล่นข้างถนนอันตรายมาก"
      },
      {
        "scenario": "ห้ามเข้าเขตก่อสร้าง",
        "hanzi": "前面危险，请不要进去。",
        "pinyin": "Qián miàn wēi xiǎn, qǐng bú yào jìn qù.",
        "thaiMeaning": "ข้างหน้าอันตราย กรุณาอย่าเข้าไป"
      }
    ]
  },
  {
    "id": "v419",
    "hanzi": "成功",
    "pinyin": "chénggōng",
    "thaiMeaning": "สำเร็จ / ความสำเร็จ",
    "example": {
      "hanzi": "祝你成功。",
      "pinyin": "Zhù nǐ chénggōng.",
      "thaiMeaning": "ขอให้คุณประสบความสำเร็จ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "祝你成功。",
        "pinyin": "Zhù nǐ chéng gōng.",
        "thaiMeaning": "ขอให้คุณประสบความสำเร็จ"
      },
      {
        "scenario": "ฉลองที่โครงการสำเร็จ",
        "hanzi": "我们的项目终于成功了。",
        "pinyin": "Wǒ men de xiàng mù zhōng yú chéng gōng le.",
        "thaiMeaning": "โครงการของเราสำเร็จในที่สุด"
      },
      {
        "scenario": "บอกว่าความสำเร็จต้องอาศัยความพยายาม",
        "hanzi": "成功需要努力和坚持。",
        "pinyin": "Chéng gōng xū yào nǔ lì hé jiān chí.",
        "thaiMeaning": "ความสำเร็จต้องอาศัยความพยายามและความอดทน"
      }
    ]
  },
  {
    "id": "v420",
    "hanzi": "失败",
    "pinyin": "shībài",
    "thaiMeaning": "ล้มเหลว / พ่ายแพ้",
    "example": {
      "hanzi": "不怕失败。",
      "pinyin": "Búpà shībài.",
      "thaiMeaning": "ไม่กลัวความล้มเหลว"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "不怕失败。",
        "pinyin": "Bú pà shī bài.",
        "thaiMeaning": "ไม่กลัวความล้มเหลว"
      },
      {
        "scenario": "ปลอบใจหลังทำไม่สำเร็จ",
        "hanzi": "一次失败不代表永远失败。",
        "pinyin": "Yí cì shī bài bú dài biǎo yǒng yuǎn shī bài.",
        "thaiMeaning": "ล้มเหลวครั้งเดียวไม่ได้หมายว่าจะล้มเหลวตลอดไป"
      },
      {
        "scenario": "วิเคราะห์สาเหตุของความล้มเหลว",
        "hanzi": "我们要找出失败的原因。",
        "pinyin": "Wǒ men yào zhǎo chū shī bài de yuán yīn.",
        "thaiMeaning": "พวกเราต้องหาสาเหตุของความล้มเหลว"
      }
    ]
  },
  {
    "id": "v421",
    "hanzi": "解决",
    "pinyin": "jiějué",
    "thaiMeaning": "แก้ไขปัญหา / จัดการ",
    "example": {
      "hanzi": "解决问题。",
      "pinyin": "Jiějué wèntí.",
      "thaiMeaning": "แก้ไขปัญหา"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "解决问题。",
        "pinyin": "Jiě jué wèn tí.",
        "thaiMeaning": "แก้ไขปัญหา"
      },
      {
        "scenario": "ร่วมกันแก้ปัญหา",
        "hanzi": "我们一起想办法解决问题。",
        "pinyin": "Wǒ men yì qǐ xiǎng bàn fǎ jiě jué wèn tí.",
        "thaiMeaning": "พวกเราช่วยกันคิดวิธีแก้ปัญหา"
      },
      {
        "scenario": "แจ้งว่าปัญหาได้รับการแก้แล้ว",
        "hanzi": "网络的问题已经解决了。",
        "pinyin": "Wǎng luò de wèn tí yǐ jīng jiě jué le.",
        "thaiMeaning": "ปัญหาอินเทอร์เน็ตแก้ไขแล้ว"
      }
    ]
  },
  {
    "id": "v422",
    "hanzi": "完成",
    "pinyin": "wánchéng",
    "thaiMeaning": "ทำเสร็จ / สำเร็จลุล่วง",
    "example": {
      "hanzi": "完成任务。",
      "pinyin": "Wánchéng rènwu.",
      "thaiMeaning": "ทำภารกิจสำเร็จ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "完成任务。",
        "pinyin": "Wán chéng rèn wu.",
        "thaiMeaning": "ทำภารกิจสำเร็จ"
      },
      {
        "scenario": "บอกว่าทำงานเสร็จก่อนเวลา",
        "hanzi": "我提前完成了工作。",
        "pinyin": "Wǒ tí qián wán chéng le gōng zuò.",
        "thaiMeaning": "ฉันทำงานเสร็จก่อนเวลา"
      },
      {
        "scenario": "กำหนดให้เสร็จภายในวันศุกร์",
        "hanzi": "请在星期五以前完成。",
        "pinyin": "Qǐng zài xīng qī wǔ yǐ qián wán chéng.",
        "thaiMeaning": "กรุณาทำให้เสร็จก่อนวันศุกร์"
      }
    ]
  },
  {
    "id": "v423",
    "hanzi": "同意",
    "pinyin": "tóngyì",
    "thaiMeaning": "เห็นด้วย / ยินยอม",
    "example": {
      "hanzi": "完全同意。",
      "pinyin": "Wánquán tóngyì.",
      "thaiMeaning": "เห็นด้วยอย่างยิ่ง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "完全同意。",
        "pinyin": "Wán quán tóng yì.",
        "thaiMeaning": "เห็นด้วยอย่างยิ่ง"
      },
      {
        "scenario": "เห็นด้วยกับข้อเสนอ",
        "hanzi": "我同意你的建议。",
        "pinyin": "Wǒ tóng yì nǐ de jiàn yì.",
        "thaiMeaning": "ฉันเห็นด้วยกับคำแนะนำของคุณ"
      },
      {
        "scenario": "ขอความยินยอมก่อนเปลี่ยนแผน",
        "hanzi": "大家同意改变计划吗？",
        "pinyin": "Dà jiā tóng yì gǎi biàn jì huà ma?",
        "thaiMeaning": "ทุกคนเห็นด้วยที่จะเปลี่ยนแผนไหม?"
      }
    ]
  },
  {
    "id": "v424",
    "hanzi": "反对",
    "pinyin": "fǎnduì",
    "thaiMeaning": "คัดค้าน / ไม่เห็นด้วย",
    "example": {
      "hanzi": "表示反对。",
      "pinyin": "Biǎoshì fǎnduì.",
      "thaiMeaning": "แสดงความคัดค้าน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "表示反对。",
        "pinyin": "Biǎo shì fǎn duì.",
        "thaiMeaning": "แสดงความคัดค้าน"
      },
      {
        "scenario": "คัดค้านเพราะแผนอันตราย",
        "hanzi": "这个办法太危险，我反对。",
        "pinyin": "Zhè ge bàn fǎ tài wēi xiǎn, wǒ fǎn duì.",
        "thaiMeaning": "วิธีนี้อันตรายเกินไป ฉันคัดค้าน"
      },
      {
        "scenario": "บอกว่าไม่มีใครไม่เห็นด้วย",
        "hanzi": "大家都同意，没有人反对。",
        "pinyin": "Dà jiā dōu tóng yì, méi yǒu rén fǎn duì.",
        "thaiMeaning": "ทุกคนเห็นด้วย ไม่มีใครคัดค้าน"
      }
    ]
  },
  {
    "id": "v425",
    "hanzi": "参加",
    "pinyin": "cānjiā",
    "thaiMeaning": "เข้าร่วม / ร่วมงาน",
    "example": {
      "hanzi": "参加活动。",
      "pinyin": "Cānjiā huódòng.",
      "thaiMeaning": "เข้าร่วมกิจกรรม"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "参加活动。",
        "pinyin": "Cān jiā huó dòng.",
        "thaiMeaning": "เข้าร่วมกิจกรรม"
      },
      {
        "scenario": "เข้าร่วมประชุมตอนบ่าย",
        "hanzi": "我下午要参加会议。",
        "pinyin": "Wǒ xià wǔ yào cān jiā huì yì.",
        "thaiMeaning": "ตอนบ่ายฉันต้องเข้าร่วมประชุม"
      },
      {
        "scenario": "ชวนเพื่อนมางานวันเกิด",
        "hanzi": "你愿意参加我的生日会吗？",
        "pinyin": "Nǐ yuàn yì cān jiā wǒ de shēng rì huì ma?",
        "thaiMeaning": "คุณอยากมาร่วมงานวันเกิดฉันไหม?"
      }
    ]
  },
  {
    "id": "v426",
    "hanzi": "选择",
    "pinyin": "xuǎnzé",
    "thaiMeaning": "เลือก / การเลือก",
    "example": {
      "hanzi": "做出选择。",
      "pinyin": "Zuòchū xuǎnzé.",
      "thaiMeaning": "ทำการตัดสินใจเลือก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "做出选择。",
        "pinyin": "Zuò chū xuǎn zé.",
        "thaiMeaning": "ทำการตัดสินใจเลือก"
      },
      {
        "scenario": "เลือกระหว่างสองสี",
        "hanzi": "红色和蓝色，你选择哪个？",
        "pinyin": "Hóng sè hé lán sè, nǐ xuǎn zé nǎ gè?",
        "thaiMeaning": "สีแดงกับสีน้ำเงิน คุณเลือกสีไหน?"
      },
      {
        "scenario": "เคารพการตัดสินใจของเพื่อน",
        "hanzi": "我尊重你的选择。",
        "pinyin": "Wǒ zūn zhòng nǐ de xuǎn zé.",
        "thaiMeaning": "ฉันเคารพการเลือกของคุณ"
      }
    ]
  },
  {
    "id": "v427",
    "hanzi": "安排",
    "pinyin": "ānpái",
    "thaiMeaning": "จัดแจง / วางแผน",
    "example": {
      "hanzi": "安排时间。",
      "pinyin": "Ānpái shíjiān.",
      "thaiMeaning": "จัดสรรเวลา"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "安排时间。",
        "pinyin": "ān pái shí jiān.",
        "thaiMeaning": "จัดสรรเวลา"
      },
      {
        "scenario": "จัดตารางประชุม",
        "hanzi": "经理安排我们下午开会。",
        "pinyin": "Jīng lǐ ān pái wǒ men xià wǔ kāi huì.",
        "thaiMeaning": "ผู้จัดการจัดให้พวกเราประชุมตอนบ่าย"
      },
      {
        "scenario": "ถามแผนวันพรุ่งนี้",
        "hanzi": "你明天有什么安排？",
        "pinyin": "Nǐ míng tiān yǒu shén me ān pái?",
        "thaiMeaning": "พรุ่งนี้คุณมีแผนอะไร?"
      }
    ]
  },
  {
    "id": "v428",
    "hanzi": "影响",
    "pinyin": "yǐngxiǎng",
    "thaiMeaning": "ส่งผลกระทบ / อิทธิพล",
    "example": {
      "hanzi": "产生影响。",
      "pinyin": "Chǎnshēng yǐngxiǎng.",
      "thaiMeaning": "เกิดผลกระทบ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "产生影响。",
        "pinyin": "Chǎn shēng yǐng xiǎng.",
        "thaiMeaning": "เกิดผลกระทบ"
      },
      {
        "scenario": "ฝนกระทบการเดินทาง",
        "hanzi": "大雨影响了交通。",
        "pinyin": "Dà yǔ yǐng xiǎng le jiāo tōng.",
        "thaiMeaning": "ฝนตกหนักส่งผลกระทบต่อการจราจร"
      },
      {
        "scenario": "บอกว่าเสียงดังรบกวนงาน",
        "hanzi": "外面的声音影响我工作。",
        "pinyin": "Wài miàn de shēng yīn yǐng xiǎng wǒ gōng zuò.",
        "thaiMeaning": "เสียงข้างนอกรบกวนการทำงานของฉัน"
      }
    ]
  },
  {
    "id": "v429",
    "hanzi": "提供",
    "pinyin": "tígōng",
    "thaiMeaning": "จัดหาให้ / บริการให้",
    "example": {
      "hanzi": "提供帮助。",
      "pinyin": "Tígōng bāngzhù.",
      "thaiMeaning": "ยื่นมือช่วยเหลือ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "提供帮助。",
        "pinyin": "Tí gōng bāng zhù.",
        "thaiMeaning": "ยื่นมือช่วยเหลือ"
      },
      {
        "scenario": "โรงแรมมีบริการรับส่ง",
        "hanzi": "酒店提供机场接送服务。",
        "pinyin": "Jiǔ diàn tí gōng jī chǎng jiē sòng fú wù.",
        "thaiMeaning": "โรงแรมมีบริการรับส่งสนามบิน"
      },
      {
        "scenario": "ขอให้ลูกค้าให้ข้อมูล",
        "hanzi": "请提供您的联系方式。",
        "pinyin": "Qǐng tí gōng nín de lián xì fāng shì.",
        "thaiMeaning": "กรุณาให้ข้อมูลการติดต่อของคุณ"
      }
    ]
  },
  {
    "id": "v430",
    "hanzi": "要求",
    "pinyin": "yāoqiú",
    "thaiMeaning": "ข้อเรียกร้อง / กำหนด",
    "example": {
      "hanzi": "达到要求。",
      "pinyin": "Dádào yāoqiú.",
      "thaiMeaning": "บรรลุเกณฑ์ที่กำหนด"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "达到要求。",
        "pinyin": "Dá dào yāo qiú.",
        "thaiMeaning": "บรรลุเกณฑ์ที่กำหนด"
      },
      {
        "scenario": "อ่านข้อกำหนดของงาน",
        "hanzi": "请先了解工作的要求。",
        "pinyin": "Qǐng xiān liǎo jiě gōng zuò de yāo qiú.",
        "thaiMeaning": "กรุณาทำความเข้าใจข้อกำหนดของงานก่อน"
      },
      {
        "scenario": "ลูกค้าขอเปลี่ยนห้อง",
        "hanzi": "顾客要求换一个房间。",
        "pinyin": "Gù kè yāo qiú huàn yí gè fáng jiān.",
        "thaiMeaning": "ลูกค้าขอเปลี่ยนห้อง"
      }
    ]
  },
  {
    "id": "v431",
    "hanzi": "考虑",
    "pinyin": "kǎolǜ",
    "thaiMeaning": "พิจารณา / ไตร่ตรอง",
    "example": {
      "hanzi": "仔细考虑。",
      "pinyin": "Zǐxì kǎolǜ.",
      "thaiMeaning": "พิจารณาอย่างรอบคอบ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "仔细考虑。",
        "pinyin": "Zǐ xì kǎo lǜ.",
        "thaiMeaning": "พิจารณาอย่างรอบคอบ"
      },
      {
        "scenario": "ขอเวลาพิจารณาข้อเสนอ",
        "hanzi": "让我考虑一下再回答你。",
        "pinyin": "Ràng wǒ kǎo lǜ yí xià zài huí dá nǐ.",
        "thaiMeaning": "ให้ฉันพิจารณาก่อนแล้วค่อยตอบคุณ"
      },
      {
        "scenario": "คำนึงถึงความปลอดภัยก่อนตัดสินใจ",
        "hanzi": "我们必须考虑安全问题。",
        "pinyin": "Wǒ men bì xū kǎo lǜ ān quán wèn tí.",
        "thaiMeaning": "พวกเราต้องพิจารณาเรื่องความปลอดภัย"
      }
    ]
  },
  {
    "id": "v432",
    "hanzi": "保护",
    "pinyin": "bǎohù",
    "thaiMeaning": "ปกป้อง / คุ้มครอง",
    "example": {
      "hanzi": "保护环境。",
      "pinyin": "Bǎohù huánjìng.",
      "thaiMeaning": "รักษาสภาพแวดล้อม"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "保护环境。",
        "pinyin": "Bǎo hù huán jìng.",
        "thaiMeaning": "รักษาสภาพแวดล้อม"
      },
      {
        "scenario": "ปกป้องดวงตาจากหน้าจอ",
        "hanzi": "看电脑久了要保护眼睛。",
        "pinyin": "Kàn diàn nǎo jiǔ le yào bǎo hù yǎn jīng.",
        "thaiMeaning": "มองคอมพิวเตอร์นานต้องดูแลดวงตา"
      },
      {
        "scenario": "ร่วมกันรักษาธรรมชาติ",
        "hanzi": "每个人都应该保护环境。",
        "pinyin": "Měi gè rén dōu yīng gāi bǎo hù huán jìng.",
        "thaiMeaning": "ทุกคนควรรักษาสิ่งแวดล้อม"
      }
    ]
  },
  {
    "id": "v433",
    "hanzi": "尊重",
    "pinyin": "zūnzhòng",
    "thaiMeaning": "ให้เกียรติ / เคารพ",
    "example": {
      "hanzi": "互相尊重。",
      "pinyin": "Hùxiāng zūnzhòng.",
      "thaiMeaning": "ให้เกียรติซึ่งกันและกัน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "互相尊重。",
        "pinyin": "Hù xiāng zūn zhòng.",
        "thaiMeaning": "ให้เกียรติซึ่งกันและกัน"
      },
      {
        "scenario": "เคารพความคิดเห็นที่ต่างกัน",
        "hanzi": "我们要尊重不同的意见。",
        "pinyin": "Wǒ men yào zūn zhòng bù tóng de yì jiàn.",
        "thaiMeaning": "พวกเราต้องเคารพความคิดเห็นที่แตกต่าง"
      },
      {
        "scenario": "สอนเด็กให้เคารพผู้อื่น",
        "hanzi": "孩子应该学会尊重别人。",
        "pinyin": "Hái zi yīng gāi xué huì zūn zhòng bié rén.",
        "thaiMeaning": "เด็กควรเรียนรู้ที่จะเคารพผู้อื่น"
      }
    ]
  },
  {
    "id": "v434",
    "hanzi": "支持",
    "pinyin": "zhīchí",
    "thaiMeaning": "สนับสนุน / ให้กำลังใจ",
    "example": {
      "hanzi": "大力支持。",
      "pinyin": "Dàlì zhīchí.",
      "thaiMeaning": "ให้การสนับสนุนเต็มที่"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "大力支持。",
        "pinyin": "Dà lì zhī chí.",
        "thaiMeaning": "ให้การสนับสนุนเต็มที่"
      },
      {
        "scenario": "ขอบคุณครอบครัวที่สนับสนุน",
        "hanzi": "谢谢家人一直支持我。",
        "pinyin": "Xiè xiè jiā rén yì zhí zhī chí wǒ.",
        "thaiMeaning": "ขอบคุณครอบครัวที่สนับสนุนฉันเสมอ"
      },
      {
        "scenario": "บอกว่าเห็นด้วยกับแผนของเพื่อน",
        "hanzi": "这个计划很好，我支持你。",
        "pinyin": "Zhè ge jì huà hěn hǎo, wǒ zhī chí nǐ.",
        "thaiMeaning": "แผนนี้ดีมาก ฉันสนับสนุนคุณ"
      }
    ]
  },
  {
    "id": "v435",
    "hanzi": "分享",
    "pinyin": "fēnxiǎng",
    "thaiMeaning": "แบ่งปัน / แชร์",
    "example": {
      "hanzi": "分享快乐。",
      "pinyin": "Fēnxiǎng kuàilè.",
      "thaiMeaning": "แบ่งปันความสุข"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "分享快乐。",
        "pinyin": "Fēn xiǎng kuài lè.",
        "thaiMeaning": "แบ่งปันความสุข"
      },
      {
        "scenario": "แบ่งขนมให้เพื่อน",
        "hanzi": "我们一起分享这个蛋糕吧。",
        "pinyin": "Wǒ men yì qǐ fēn xiǎng zhè ge dàn gāo ba.",
        "thaiMeaning": "พวกเราแบ่งเค้กนี้กินด้วยกัน"
      },
      {
        "scenario": "เล่าประสบการณ์ให้ทีมฟัง",
        "hanzi": "他跟大家分享了工作经验。",
        "pinyin": "Tā gēn dà jiā fēn xiǎng le gōng zuò jīng yàn.",
        "thaiMeaning": "เขาแบ่งปันประสบการณ์ทำงานกับทุกคน"
      }
    ]
  },
  {
    "id": "v436",
    "hanzi": "祝贺",
    "pinyin": "zhùhè",
    "thaiMeaning": "แสดงความยินดี",
    "example": {
      "hanzi": "热烈祝贺。",
      "pinyin": "Rèliè zhùhè.",
      "thaiMeaning": "ขอแสดงความยินดีอย่างยิ่ง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "热烈祝贺。",
        "pinyin": "Rè liè zhù hè.",
        "thaiMeaning": "ขอแสดงความยินดีอย่างยิ่ง"
      },
      {
        "scenario": "แสดงความยินดีที่ได้งานใหม่",
        "hanzi": "祝贺你找到新工作！",
        "pinyin": "Zhù hè nǐ zhǎo dào xīn gōng zuò!",
        "thaiMeaning": "ยินดีด้วยที่คุณได้งานใหม่!"
      },
      {
        "scenario": "แสดงความยินดีที่สอบผ่าน",
        "hanzi": "祝贺你通过考试。",
        "pinyin": "Zhù hè nǐ tōng guò kǎo shì.",
        "thaiMeaning": "ยินดีด้วยที่คุณสอบผ่าน"
      }
    ]
  },
  {
    "id": "v451",
    "hanzi": "规定",
    "pinyin": "guīdìng",
    "thaiMeaning": "ข้อบังคับ / กฎเกณฑ์",
    "example": {
      "hanzi": "遵守规定。",
      "pinyin": "Zūnshǒu guīdìng.",
      "thaiMeaning": "ปฏิบัติตามข้อบังคับ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "遵守规定。",
        "pinyin": "Zūn shǒu guī dìng.",
        "thaiMeaning": "ปฏิบัติตามข้อบังคับ"
      },
      {
        "scenario": "อธิบายกฎห้ามสูบบุหรี่",
        "hanzi": "这里规定不能吸烟。",
        "pinyin": "Zhè lǐ guī dìng bù néng xī yān.",
        "thaiMeaning": "ที่นี่มีกฎว่าห้ามสูบบุหรี่"
      },
      {
        "scenario": "เตือนให้ปฏิบัติตามข้อบังคับ",
        "hanzi": "所有员工都要遵守规定。",
        "pinyin": "Suǒ yǒu yuán gōng dōu yào zūn shǒu guī dìng.",
        "thaiMeaning": "พนักงานทุกคนต้องปฏิบัติตามข้อบังคับ"
      }
    ]
  },
  {
    "id": "v453",
    "hanzi": "整理",
    "pinyin": "zhěnglǐ",
    "thaiMeaning": "จัดระเบียบ / เก็บของ",
    "example": {
      "hanzi": "整理房间。",
      "pinyin": "Zhěnglǐ fángjiān.",
      "thaiMeaning": "จัดระเบียบห้องพัก"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "整理房间。",
        "pinyin": "Zhěng lǐ fáng jiān.",
        "thaiMeaning": "จัดระเบียบห้องพัก"
      },
      {
        "scenario": "จัดโต๊ะทำงานก่อนกลับ",
        "hanzi": "下班前我整理了桌子。",
        "pinyin": "Xià bān qián wǒ zhěng lǐ le zhuō zi.",
        "thaiMeaning": "ก่อนเลิกงานฉันจัดโต๊ะเรียบร้อย"
      },
      {
        "scenario": "เก็บกระเป๋าก่อนเดินทาง",
        "hanzi": "我正在整理旅行的行李。",
        "pinyin": "Wǒ zhèng zài zhěng lǐ lǚ xíng de xíng li.",
        "thaiMeaning": "ฉันกำลังจัดกระเป๋าสำหรับเดินทาง"
      }
    ]
  },
  {
    "id": "v454",
    "hanzi": "打扫",
    "pinyin": "dǎsǎo",
    "thaiMeaning": "ทำความสะอาด / กวาด",
    "example": {
      "hanzi": "打扫卫生。",
      "pinyin": "Dǎsǎo wèishēng.",
      "thaiMeaning": "ทำความสะอาด"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "打扫卫生。",
        "pinyin": "Dǎ sǎo wèi shēng.",
        "thaiMeaning": "ทำความสะอาด"
      },
      {
        "scenario": "ทำความสะอาดบ้านวันหยุด",
        "hanzi": "周末我们一起打扫房间。",
        "pinyin": "Zhōu mò wǒ men yì qǐ dǎ sǎo fáng jiān.",
        "thaiMeaning": "สุดสัปดาห์พวกเราทำความสะอาดห้องด้วยกัน"
      },
      {
        "scenario": "แบ่งหน้าที่กวาดพื้น",
        "hanzi": "我来打扫地板，你擦桌子。",
        "pinyin": "Wǒ lái dǎ sǎo dì bǎn, nǐ cā zhuō zi.",
        "thaiMeaning": "ฉันจะกวาดพื้น คุณเช็ดโต๊ะ"
      }
    ]
  },
  {
    "id": "v455",
    "hanzi": "修理",
    "pinyin": "xiūlǐ",
    "thaiMeaning": "ซ่อมแซม",
    "example": {
      "hanzi": "修理电脑。",
      "pinyin": "Xiūlǐ diànnǎo.",
      "thaiMeaning": "ซ่อมคอมพิวเตอร์"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "修理电脑。",
        "pinyin": "Xiū lǐ diàn nǎo.",
        "thaiMeaning": "ซ่อมคอมพิวเตอร์"
      },
      {
        "scenario": "นำคอมพิวเตอร์ไปซ่อม",
        "hanzi": "电脑坏了，我拿去修理。",
        "pinyin": "Diàn nǎo huài le, wǒ ná qù xiū lǐ.",
        "thaiMeaning": "คอมพิวเตอร์เสีย ฉันเอาไปซ่อม"
      },
      {
        "scenario": "ช่างกำลังซ่อมแอร์",
        "hanzi": "工人正在修理空调。",
        "pinyin": "Gōng rén zhèng zài xiū lǐ kōng tiáo.",
        "thaiMeaning": "ช่างกำลังซ่อมเครื่องปรับอากาศ"
      }
    ]
  },
  {
    "id": "v456",
    "hanzi": "适应",
    "pinyin": "shìyìng",
    "thaiMeaning": "ปรับตัว / คุ้นชิน",
    "example": {
      "hanzi": "适应生活。",
      "pinyin": "Shìyìng shēnghuó.",
      "thaiMeaning": "ปรับตัวกับการใช้ชีวิต"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "适应生活。",
        "pinyin": "Shì yìng shēng huó.",
        "thaiMeaning": "ปรับตัวกับการใช้ชีวิต"
      },
      {
        "scenario": "ปรับตัวกับงานใหม่",
        "hanzi": "我还在适应新的工作。",
        "pinyin": "Wǒ hái zài shì yìng xīn de gōng zuò.",
        "thaiMeaning": "ฉันยังปรับตัวกับงานใหม่อยู่"
      },
      {
        "scenario": "เริ่มชินกับอากาศหนาว",
        "hanzi": "住了一段时间，我适应了这里的天气。",
        "pinyin": "Zhù le yí duàn shí jiān, wǒ shì yìng le zhè lǐ de tiān qì.",
        "thaiMeaning": "อยู่มาระยะหนึ่ง ฉันชินกับอากาศที่นี่แล้ว"
      }
    ]
  },
  {
    "id": "v457",
    "hanzi": "流行",
    "pinyin": "liúxíng",
    "thaiMeaning": "เป็นที่นิยม / ฮิต",
    "example": {
      "hanzi": "非常流行。",
      "pinyin": "Fēicháng liúxíng.",
      "thaiMeaning": "เป็นที่นิยมอย่างยิ่ง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "非常流行。",
        "pinyin": "Fēi cháng liú xíng.",
        "thaiMeaning": "เป็นที่นิยมอย่างยิ่ง"
      },
      {
        "scenario": "พูดถึงเพลงที่กำลังดัง",
        "hanzi": "这首歌最近很流行。",
        "pinyin": "Zhè shǒu gē zuì jìn hěn liú xíng.",
        "thaiMeaning": "เพลงนี้ช่วงนี้กำลังเป็นที่นิยม"
      },
      {
        "scenario": "ถามแฟชั่นที่กำลังนิยม",
        "hanzi": "今年流行什么颜色？",
        "pinyin": "Jīn nián liú xíng shén me yán sè?",
        "thaiMeaning": "ปีนี้สีอะไรเป็นที่นิยม?"
      }
    ]
  },
  {
    "id": "v458",
    "hanzi": "聚会",
    "pinyin": "jùhuì",
    "thaiMeaning": "งานสังสรรค์ / รวมตัว",
    "example": {
      "hanzi": "参加聚会。",
      "pinyin": "Cānjiā jùhuì.",
      "thaiMeaning": "เข้าร่วมงานสังสรรค์"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "参加聚会。",
        "pinyin": "Cān jiā jù huì.",
        "thaiMeaning": "เข้าร่วมงานสังสรรค์"
      },
      {
        "scenario": "ชวนเพื่อนมางานรวมตัว",
        "hanzi": "周末我们家有个聚会。",
        "pinyin": "Zhōu mò wǒ men jiā yǒu gè jù huì.",
        "thaiMeaning": "สุดสัปดาห์ที่บ้านเรามีงานรวมตัว"
      },
      {
        "scenario": "บอกว่าได้พบเพื่อนเก่าในงาน",
        "hanzi": "我在聚会上见到了老朋友。",
        "pinyin": "Wǒ zài jù huì shàng jiàn dào le lǎo péng yǒu.",
        "thaiMeaning": "ฉันได้พบเพื่อนเก่าในงานสังสรรค์"
      }
    ]
  },
  {
    "id": "v459",
    "hanzi": "开玩笑",
    "pinyin": "kāi wánxiào",
    "thaiMeaning": "พูดเล่น / ล้อเล่น",
    "example": {
      "hanzi": "开个玩笑。",
      "pinyin": "Kāi gè wánxiào.",
      "thaiMeaning": "พูดเล่นเฉยๆ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "开个玩笑。",
        "pinyin": "Kāi gè wán xiào.",
        "thaiMeaning": "พูดเล่นเฉยๆ"
      },
      {
        "scenario": "บอกว่าเมื่อครู่พูดเล่น",
        "hanzi": "别当真，我只是开玩笑。",
        "pinyin": "Bié dàng zhēn, wǒ zhǐ shì kāi wán xiào.",
        "thaiMeaning": "อย่าคิดจริงจัง ฉันแค่พูดเล่น"
      },
      {
        "scenario": "เตือนว่าอย่าล้อเรื่องนี้",
        "hanzi": "这件事不能拿来开玩笑。",
        "pinyin": "Zhè jiàn shì bù néng ná lái kāi wán xiào.",
        "thaiMeaning": "เรื่องนี้เอามาล้อเล่นไม่ได้"
      }
    ]
  },
  {
    "id": "v460",
    "hanzi": "商量",
    "pinyin": "shāngliang",
    "thaiMeaning": "หารือ / ปรึกษา",
    "example": {
      "hanzi": "互相商量。",
      "pinyin": "Hùxiāng shāngliang.",
      "thaiMeaning": "ปรึกษาหารือกัน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "互相商量。",
        "pinyin": "Hù xiāng shāng liáng.",
        "thaiMeaning": "ปรึกษาหารือกัน"
      },
      {
        "scenario": "ปรึกษาครอบครัวก่อนตัดสินใจ",
        "hanzi": "我要先跟家人商量一下。",
        "pinyin": "Wǒ yào xiān gēn jiā rén shāng liáng yí xià.",
        "thaiMeaning": "ฉันต้องปรึกษาครอบครัวก่อน"
      },
      {
        "scenario": "ชวนทีมคุยเรื่องแผนใหม่",
        "hanzi": "我们商量一下明天的安排。",
        "pinyin": "Wǒ men shāng liáng yí xià míng tiān de ān pái.",
        "thaiMeaning": "พวกเราปรึกษาเรื่องแผนพรุ่งนี้กัน"
      }
    ]
  },
  {
    "id": "v461",
    "hanzi": "建议",
    "pinyin": "jiànyì",
    "thaiMeaning": "ข้อเสนอแนะ / แนะนำ",
    "example": {
      "hanzi": "提出建议。",
      "pinyin": "Tíchū jiànyì.",
      "thaiMeaning": "ยื่นข้อเสนอแนะ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "提出建议。",
        "pinyin": "Tí chū jiàn yì.",
        "thaiMeaning": "ยื่นข้อเสนอแนะ"
      },
      {
        "scenario": "ขอคำแนะนำจากเพื่อน",
        "hanzi": "你有什么好建议吗？",
        "pinyin": "Nǐ yǒu shén me hǎo jiàn yì ma?",
        "thaiMeaning": "คุณมีคำแนะนำดีๆ ไหม?"
      },
      {
        "scenario": "แพทย์แนะนำให้นอนเร็ว",
        "hanzi": "医生建议我早点睡觉。",
        "pinyin": "Yī shēng jiàn yì wǒ zǎo diǎn shuì jiào.",
        "thaiMeaning": "หมอแนะนำให้ฉันนอนเร็วขึ้น"
      }
    ]
  },
  {
    "id": "v462",
    "hanzi": "道歉",
    "pinyin": "dàoqiàn",
    "thaiMeaning": "กล่าวขอโทษ",
    "example": {
      "hanzi": "诚恳道歉。",
      "pinyin": "Chéngkěn dàoqiàn.",
      "thaiMeaning": "กล่าวขอโทษอย่างจริงใจ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "诚恳道歉。",
        "pinyin": "Chéng kěn dào qiàn.",
        "thaiMeaning": "กล่าวขอโทษอย่างจริงใจ"
      },
      {
        "scenario": "กล่าวขอโทษที่ทำผิด",
        "hanzi": "我为刚才的话向你道歉。",
        "pinyin": "Wǒ wèi gāng cái de huà xiàng nǐ dào qiàn.",
        "thaiMeaning": "ฉันขอโทษคุณสำหรับคำพูดเมื่อครู่"
      },
      {
        "scenario": "บอกว่าควรขอโทษเพื่อน",
        "hanzi": "你应该向他道歉。",
        "pinyin": "Nǐ yīng gāi xiàng tā dào qiàn.",
        "thaiMeaning": "คุณควรขอโทษเขา"
      }
    ]
  },
  {
    "id": "v463",
    "hanzi": "表扬",
    "pinyin": "biǎoyáng",
    "thaiMeaning": "ชมเชย / ชื่นชม",
    "example": {
      "hanzi": "受到表扬。",
      "pinyin": "Shòudào biǎoyáng.",
      "thaiMeaning": "ได้รับการชมเชย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "受到表扬。",
        "pinyin": "Shòu dào biǎo yáng.",
        "thaiMeaning": "ได้รับการชมเชย"
      },
      {
        "scenario": "ครูชมเชยนักเรียน",
        "hanzi": "老师表扬了认真学习的学生。",
        "pinyin": "Lǎo shī biǎo yáng le rèn zhēn xué xí de xué shēng.",
        "thaiMeaning": "ครูชมเชยนักเรียนที่ตั้งใจเรียน"
      },
      {
        "scenario": "หัวหน้าชมผลงานทีม",
        "hanzi": "经理在会上表扬了我们。",
        "pinyin": "Jīng lǐ zài huì shàng biǎo yáng le wǒ men.",
        "thaiMeaning": "ผู้จัดการชมเชยพวกเราในที่ประชุม"
      }
    ]
  },
  {
    "id": "v464",
    "hanzi": "批评",
    "pinyin": "pīpíng",
    "thaiMeaning": "วิพากษ์วิจารณ์ / ตักเตือน",
    "example": {
      "hanzi": "接受批评。",
      "pinyin": "Jiēshòu pīpíng.",
      "thaiMeaning": "น้อมรับคำตักเตือน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "接受批评。",
        "pinyin": "Jiē shòu pī píng.",
        "thaiMeaning": "น้อมรับคำตักเตือน"
      },
      {
        "scenario": "หัวหน้าตักเตือนเรื่องมาสาย",
        "hanzi": "老板批评他经常迟到。",
        "pinyin": "Lǎo bǎn pī píng tā jīng cháng chí dào.",
        "thaiMeaning": "เจ้านายตักเตือนเขาที่มาสายบ่อย"
      },
      {
        "scenario": "รับฟังคำวิจารณ์เพื่อพัฒนา",
        "hanzi": "我们应该认真听取批评。",
        "pinyin": "Wǒ men yīng gāi rèn zhēn tīng qǔ pī píng.",
        "thaiMeaning": "พวกเราควรรับฟังคำวิจารณ์อย่างจริงจัง"
      }
    ]
  },
  {
    "id": "v465",
    "hanzi": "积累",
    "pinyin": "jīlěi",
    "thaiMeaning": "สะสม / สั่งสม",
    "example": {
      "hanzi": "积累知识。",
      "pinyin": "Jīlěi zhīshi.",
      "thaiMeaning": "สั่งสมความรู้"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "积累知识。",
        "pinyin": "Jī lěi zhī shi.",
        "thaiMeaning": "สั่งสมความรู้"
      },
      {
        "scenario": "สะสมประสบการณ์จากงาน",
        "hanzi": "工作几年后，他积累了很多经验。",
        "pinyin": "Gōng zuò jǐ nián hòu, tā jī lěi le hěn duō jīng yàn.",
        "thaiMeaning": "หลังทำงานหลายปี เขาสั่งสมประสบการณ์มาก"
      },
      {
        "scenario": "สะสมคำศัพท์ทุกวัน",
        "hanzi": "每天学习可以积累词汇。",
        "pinyin": "Měi tiān xué xí kě yǐ jī lěi cí huì.",
        "thaiMeaning": "การเรียนทุกวันช่วยสะสมคำศัพท์"
      }
    ]
  },
  {
    "id": "v466",
    "hanzi": "提高",
    "pinyin": "tígāo",
    "thaiMeaning": "ยกระดับ / พัฒนาขึ้น",
    "example": {
      "hanzi": "提高水平。",
      "pinyin": "Tígāo shuǐpíng.",
      "thaiMeaning": "ยกระดับฝีมือ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "提高水平。",
        "pinyin": "Tí gāo shuǐ píng.",
        "thaiMeaning": "ยกระดับฝีมือ"
      },
      {
        "scenario": "ฝึกพูดเพื่อพัฒนาภาษาจีน",
        "hanzi": "多说可以提高中文水平。",
        "pinyin": "Duō shuō kě yǐ tí gāo zhōng wén shuǐ píng.",
        "thaiMeaning": "พูดให้มากช่วยพัฒนาระดับภาษาจีน"
      },
      {
        "scenario": "บริษัทปรับปรุงคุณภาพบริการ",
        "hanzi": "公司正在提高服务质量。",
        "pinyin": "Gōng sī zhèng zài tí gāo fú wù zhì liàng.",
        "thaiMeaning": "บริษัทกำลังยกระดับคุณภาพบริการ"
      }
    ]
  },
  {
    "id": "v467",
    "hanzi": "降低",
    "pinyin": "jiàngdī",
    "thaiMeaning": "ลดต่ำลง",
    "example": {
      "hanzi": "降低标准。",
      "pinyin": "Jiàngdī biāozhǔn.",
      "thaiMeaning": "ลดมาตรฐานลง"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "降低标准。",
        "pinyin": "Jiàng dī biāo zhǔn.",
        "thaiMeaning": "ลดมาตรฐานลง"
      },
      {
        "scenario": "ร้านลดราคาสินค้า",
        "hanzi": "商店降低了商品价格。",
        "pinyin": "Shāng diàn jiàng dī le shāng pǐn jià gé.",
        "thaiMeaning": "ร้านค้าลดราคาสินค้า"
      },
      {
        "scenario": "ออกกำลังเพื่อลดความเสี่ยง",
        "hanzi": "运动可以降低生病的风险。",
        "pinyin": "Yùn dòng kě yǐ jiàng dī shēng bìng de fēng xiǎn.",
        "thaiMeaning": "การออกกำลังช่วยลดความเสี่ยงในการป่วย"
      }
    ]
  },
  {
    "id": "v468",
    "hanzi": "增加",
    "pinyin": "zēngjiā",
    "thaiMeaning": "เพิ่มขึ้น",
    "example": {
      "hanzi": "增加收入。",
      "pinyin": "Zēngjiā shōurù.",
      "thaiMeaning": "เพิ่มรายได้"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "增加收入。",
        "pinyin": "Zēng jiā shōu rù.",
        "thaiMeaning": "เพิ่มรายได้"
      },
      {
        "scenario": "เพิ่มจำนวนพนักงาน",
        "hanzi": "公司明年要增加员工。",
        "pinyin": "Gōng sī míng nián yào zēng jiā yuán gōng.",
        "thaiMeaning": "ปีหน้าบริษัทจะเพิ่มพนักงาน"
      },
      {
        "scenario": "ฝนทำให้ระดับน้ำสูงขึ้น",
        "hanzi": "大雨让河水增加了很多。",
        "pinyin": "Dà yǔ ràng hé shuǐ zēng jiā le hěn duō.",
        "thaiMeaning": "ฝนหนักทำให้ระดับน้ำเพิ่มขึ้นมาก"
      }
    ]
  },
  {
    "id": "v469",
    "hanzi": "减少",
    "pinyin": "jiǎnshǎo",
    "thaiMeaning": "ลดลง",
    "example": {
      "hanzi": "减少开支。",
      "pinyin": "Jiǎnshǎo kāīzhī.",
      "thaiMeaning": "ลดค่าใช้จ่าย"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "减少开支。",
        "pinyin": "Jiǎn shǎo kāi zhī.",
        "thaiMeaning": "ลดค่าใช้จ่าย"
      },
      {
        "scenario": "ลดการใช้น้ำตาล",
        "hanzi": "为了健康，我要减少吃糖。",
        "pinyin": "Wèi le jiàn kāng, wǒ yào jiǎn shǎo chī táng.",
        "thaiMeaning": "เพื่อสุขภาพ ฉันต้องลดการกินน้ำตาล"
      },
      {
        "scenario": "การทำงานออนไลน์ลดเวลาเดินทาง",
        "hanzi": "在家工作可以减少路上的时间。",
        "pinyin": "Zài jiā gōng zuò kě yǐ jiǎn shǎo lù shang de shí jiān.",
        "thaiMeaning": "ทำงานที่บ้านช่วยลดเวลาเดินทาง"
      }
    ]
  },
  {
    "id": "v470",
    "hanzi": "丰富",
    "pinyin": "fēngfù",
    "thaiMeaning": "อุดมสมบูรณ์ / หลากหลาย",
    "example": {
      "hanzi": "经验丰富。",
      "pinyin": "Jīngyàn fēngfù.",
      "thaiMeaning": "ประสบการณ์โชกโชน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "经验丰富。",
        "pinyin": "Jīng yàn fēng fù.",
        "thaiMeaning": "ประสบการณ์โชกโชน"
      },
      {
        "scenario": "ชมอาหารที่มีให้เลือกหลากหลาย",
        "hanzi": "这家饭店的菜很丰富。",
        "pinyin": "Zhè jiā fàn diàn de cài hěn fēng fù.",
        "thaiMeaning": "อาหารของร้านนี้หลากหลายมาก"
      },
      {
        "scenario": "การเดินทางเพิ่มประสบการณ์",
        "hanzi": "旅游可以丰富我们的生活。",
        "pinyin": "Lǚ yóu kě yǐ fēng fù wǒ men de shēng huó.",
        "thaiMeaning": "การท่องเที่ยวช่วยเพิ่มความหลากหลายให้ชีวิต"
      }
    ]
  },
  {
    "id": "v471",
    "hanzi": "热闹",
    "pinyin": "rènao",
    "thaiMeaning": "คึกคัก / สนุกสนาน",
    "example": {
      "hanzi": "非常热闹。",
      "pinyin": "Fēicháng rènao.",
      "thaiMeaning": "คึกคักเป็นพิเศษ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "非常热闹。",
        "pinyin": "Fēi cháng rè nào.",
        "thaiMeaning": "คึกคักเป็นพิเศษ"
      },
      {
        "scenario": "บรรยายตลาดช่วงเย็น",
        "hanzi": "晚上的市场非常热闹。",
        "pinyin": "Wǎn shàng de shì chǎng fēi cháng rè nào.",
        "thaiMeaning": "ตลาดตอนเย็นคึกคักมาก"
      },
      {
        "scenario": "งานเลี้ยงมีคนมากและสนุก",
        "hanzi": "聚会上人很多，很热闹。",
        "pinyin": "Jù huì shàng rén hěn duō, hěn rè nào.",
        "thaiMeaning": "งานเลี้ยงมีคนมากและคึกคัก"
      }
    ]
  },
  {
    "id": "v472",
    "hanzi": "安静",
    "pinyin": "ānjìng",
    "thaiMeaning": "เงียบสงบ",
    "example": {
      "hanzi": "保持安静。",
      "pinyin": "Bǎochí ānjìng.",
      "thaiMeaning": "รักษาความเงียบ"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "保持安静。",
        "pinyin": "Bǎo chí ān jìng.",
        "thaiMeaning": "รักษาความเงียบ"
      },
      {
        "scenario": "ขอให้เงียบในห้องสมุด",
        "hanzi": "图书馆里请保持安静。",
        "pinyin": "Tú shū guǎn lǐ qǐng bǎo chí ān jìng.",
        "thaiMeaning": "ในห้องสมุดกรุณารักษาความเงียบ"
      },
      {
        "scenario": "เลือกห้องที่เงียบกว่า",
        "hanzi": "我想要一个安静的房间。",
        "pinyin": "Wǒ xiǎng yào yí gè ān jìng de fáng jiān.",
        "thaiMeaning": "ฉันต้องการห้องที่เงียบ"
      }
    ]
  },
  {
    "id": "v473",
    "hanzi": "干净",
    "pinyin": "gānjìng",
    "thaiMeaning": "สะอาด",
    "example": {
      "hanzi": "打扫干净。",
      "pinyin": "Dǎsǎo gānjìng.",
      "thaiMeaning": "ทำความสะอาดสะอ้าน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "打扫干净。",
        "pinyin": "Dǎ sǎo gān jìng.",
        "thaiMeaning": "ทำความสะอาดสะอ้าน"
      },
      {
        "scenario": "ชมว่าห้องพักสะอาด",
        "hanzi": "酒店的房间很干净。",
        "pinyin": "Jiǔ diàn de fáng jiān hěn gān jìng.",
        "thaiMeaning": "ห้องพักของโรงแรมสะอาดมาก"
      },
      {
        "scenario": "เตือนให้ล้างมือสะอาด",
        "hanzi": "吃饭前把手洗干净。",
        "pinyin": "Chī fàn qián bǎ shǒu xǐ gān jìng.",
        "thaiMeaning": "ก่อนกินข้าวล้างมือให้สะอาด"
      }
    ]
  },
  {
    "id": "v474",
    "hanzi": "脏",
    "pinyin": "zāng",
    "thaiMeaning": "สกปรก",
    "example": {
      "hanzi": "衣服脏了。",
      "pinyin": "Yīfu zāng le.",
      "thaiMeaning": "เสื้อผ้าเปรอะเปื้อน"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "衣服脏了。",
        "pinyin": "Yī fu zāng le.",
        "thaiMeaning": "เสื้อผ้าเปรอะเปื้อน"
      },
      {
        "scenario": "บอกว่าเสื้อเปื้อน",
        "hanzi": "你的衣服脏了，换一件吧。",
        "pinyin": "Nǐ de yī fu zāng le, huàn yí jiàn ba.",
        "thaiMeaning": "เสื้อของคุณเปื้อนแล้ว เปลี่ยนตัวใหม่เถอะ"
      },
      {
        "scenario": "เตือนไม่ให้นั่งพื้นสกปรก",
        "hanzi": "地上很脏，不要坐。",
        "pinyin": "Dì shàng hěn zāng, bú yào zuò.",
        "thaiMeaning": "พื้นสกปรกมาก อย่านั่ง"
      }
    ]
  }
];
