// Vocabulary Dataset - 736 unique words
// Situational examples are written and reviewed per word; substitution templates are not used.

export const VOCAB_SETS = [
  { id: 'all', label: 'ทั้งหมด (736 คำ)' }
];

export const vocabularyList = [
  {
    "id": "v1",
    "hanzi": "起床",
    "pinyin": "qǐchuáng",
    "thaiMeaning": "ตื่นนอน",
    "englishMeaning": "get up",
    "example": {
      "hanzi": "八点起床。",
      "pinyin": "Bā diǎn qǐchuáng.",
      "thaiMeaning": "8 โมงตื่นนอน",
      "englishMeaning": "Get up at eight o'clock."
    },
    "examples": [
      {
        "scenario": "กิจวัตรประจำวัน",
        "hanzi": "我每天早上七点起床。",
        "pinyin": "Wǒ měitiān zǎoshang qī diǎn qǐchuáng.",
        "thaiMeaning": "ฉันตื่นนอน 7 โมงเช้าทุกวัน",
        "englishMeaning": "I get up at seven o'clock every morning."
      },
      {
        "scenario": "ประโยคถามเพื่อน",
        "hanzi": "你今天怎么这么早起床？",
        "pinyin": "Nǐ jīntiān zěnme zhème zǎo qǐchuáng?",
        "thaiMeaning": "ทำไมวันนี้คุณตื่นนอนเช้าขนาดนี้?",
        "englishMeaning": "Why did you get up so early today?"
      },
      {
        "scenario": "วันหยุดพักผ่อน",
        "hanzi": "周末我喜欢晚一点起床。",
        "pinyin": "Zhōumò wǒ xǐhuan wǎn yīdiǎn qǐchuáng.",
        "thaiMeaning": "วันเสาร์อาทิตย์ฉันชอบตื่นนอนสายหน่อย",
        "englishMeaning": "I like to get up later on weekends."
      }
    ]
  },
  {
    "id": "v2",
    "hanzi": "刷牙",
    "pinyin": "shuāyá",
    "thaiMeaning": "แปรงฟัน",
    "englishMeaning": "brush teeth",
    "example": {
      "hanzi": "去刷牙。",
      "pinyin": "Qù shuāyá.",
      "thaiMeaning": "ไปแปรงฟัน",
      "englishMeaning": "Go brush your teeth."
    },
    "examples": [
      {
        "scenario": "กิจวัตรประจำวัน",
        "hanzi": "睡觉前一定要记得刷牙。",
        "pinyin": "Shuìjiào qián yīdìng yào jìde shuāyá.",
        "thaiMeaning": "ก่อนนอนต้องจำไว้ว่าต้องแปรงฟัน",
        "englishMeaning": "Always remember to brush your teeth before going to bed."
      },
      {
        "scenario": "ลำดับเวลา",
        "hanzi": "我早上洗脸刷牙后就吃早餐。",
        "pinyin": "Wǒ zǎoshang xǐliǎn shuāyá hòu jiù chī zǎocān.",
        "thaiMeaning": "ตอนเช้าหลังจากฉันล้างหน้าแปรงฟันแล้วก็กินอาหารเช้า",
        "englishMeaning": "I have breakfast in the morning after washing my face and brushing my teeth."
      },
      {
        "scenario": "คำแนะนำ",
        "hanzi": "记得把牙齿刷干净一点。",
        "pinyin": "Jìde bǎ yáchǐ shuā gānjìng yīdiǎn.",
        "thaiMeaning": "อย่าลืมแปรงฟันให้สะอาดหน่อยนะ",
        "englishMeaning": "Remember to brush your teeth clean."
      }
    ]
  },
  {
    "id": "v3",
    "hanzi": "洗脸",
    "pinyin": "xǐliǎn",
    "thaiMeaning": "ล้างหน้า",
    "englishMeaning": "wash face",
    "example": {
      "hanzi": "洗脸。",
      "pinyin": "Xǐliǎn.",
      "thaiMeaning": "ล้างหน้า",
      "englishMeaning": "Wash your face."
    },
    "examples": [
      {
        "scenario": "ลำดับชีวิตประจำวัน",
        "hanzi": "早上起床后先去洗脸。",
        "pinyin": "Zǎoshang qǐchuáng hòu xiān qù xǐliǎn.",
        "thaiMeaning": "ตอนเช้าหลังตื่นนอนไปล้างหน้าก่อน",
        "englishMeaning": "Wash your face first after getting up in the morning."
      },
      {
        "scenario": "คำแนะนำสดชื่น",
        "hanzi": "累的时候洗个脸会清醒一点。",
        "pinyin": "Lèi de shíhou xǐ ge liǎn huì qīngxǐng yīdiǎn.",
        "thaiMeaning": "เวลาเหนื่อยๆ ล้างหน้าสักหน่อยจะสดชื่นขึ้น",
        "englishMeaning": "Washing your face when you are tired will help you wake up."
      },
      {
        "scenario": "ความชอบส่วนตัว",
        "hanzi": "我喜欢用温水洗脸。",
        "pinyin": "Wǒ xǐhuan yòng wēnshuǐ xǐliǎn.",
        "thaiMeaning": "ฉันชอบใช้น้ำอุ่นล้างหน้า",
        "englishMeaning": "I like to wash my face with warm water."
      }
    ]
  },
  {
    "id": "v4",
    "hanzi": "洗澡",
    "pinyin": "xǐzǎo",
    "thaiMeaning": "อาบน้ำ",
    "englishMeaning": "bath",
    "example": {
      "hanzi": "洗澡。",
      "pinyin": "Xǐzǎo.",
      "thaiMeaning": "อาบน้ำ",
      "englishMeaning": "bath."
    },
    "examples": [
      {
        "scenario": "นิสัยส่วนตัว",
        "hanzi": "我习惯每天晚上洗澡。",
        "pinyin": "Wǒ xíguàn měitiān wǎnshang xǐzǎo.",
        "thaiMeaning": "ฉันชินกับการอาบน้ำทุกตอนเย็น",
        "englishMeaning": "I'm used to taking a shower every night."
      },
      {
        "scenario": "ชวนเพื่อน",
        "hanzi": "天气这么热，快去洗个澡吧。",
        "pinyin": "Tiānqì zhème rè, kuài qù xǐ ge zǎo ba.",
        "thaiMeaning": "อากาศร้อนขนาดนี้ รีบไปอาบน้ำสักหน่อยเถอะ",
        "englishMeaning": "The weather is so hot, go take a bath."
      },
      {
        "scenario": "บอกความรู้สึก",
        "hanzi": "洗完澡后感觉很舒服。",
        "pinyin": "Xǐ wán zǎo hòu gǎnjué hěn shūfu.",
        "thaiMeaning": "อาบน้ำเสร็จแล้วรู้สึกสบายมาก",
        "englishMeaning": "I feel very comfortable after taking a shower."
      }
    ]
  },
  {
    "id": "v5",
    "hanzi": "出门",
    "pinyin": "chūmén",
    "thaiMeaning": "ออกจากบ้าน",
    "englishMeaning": "go out",
    "example": {
      "hanzi": "出门。",
      "pinyin": "Chūmén.",
      "thaiMeaning": "ออกจากบ้าน",
      "englishMeaning": "Go out."
    },
    "examples": [
      {
        "scenario": "ไปทำงาน",
        "hanzi": "我准备出门去上班了。",
        "pinyin": "Wǒ zhǔnbèi chūmén qù shàngbān le.",
        "thaiMeaning": "ฉันเตรียมตัวออกจากบ้านไปทำงานแล้ว",
        "englishMeaning": "I'm getting ready to go to work."
      },
      {
        "scenario": "เตือนความจำ",
        "hanzi": "出门前一定要检查钥匙和手机。",
        "pinyin": "Chūmén qián yīdìng yào jiǎnchá yàoshi hé shǒujī.",
        "thaiMeaning": "ก่อนออกจากบ้านต้องเช็กกุญแจและมือถือให้ดี",
        "englishMeaning": "Always check your keys and phone before leaving the house."
      },
      {
        "scenario": "ห่วงใย",
        "hanzi": "外面下雨了，你出门带伞了吗？",
        "pinyin": "Wàimiàn xià yǔ le, nǐ chūmén dài sǎn le ma?",
        "thaiMeaning": "ข้างนอกฝนตกแล้ว คุณออกจากบ้านพกร่มมาไหม?",
        "englishMeaning": "It's raining outside. Did you bring an umbrella when you went out?"
      }
    ]
  },
  {
    "id": "v6",
    "hanzi": "回家",
    "pinyin": "huíjiā",
    "thaiMeaning": "กลับบ้าน",
    "englishMeaning": "go home",
    "example": {
      "hanzi": "回家。",
      "pinyin": "Huíjiā.",
      "thaiMeaning": "กลับบ้าน",
      "englishMeaning": "go home."
    },
    "examples": [
      {
        "scenario": "บอกเวลา",
        "hanzi": "我今天晚上七点回家。",
        "pinyin": "Wǒ jīntiān wǎnshang qī diǎn huíjiā.",
        "thaiMeaning": "คืนนี้ฉันกลับบ้าน 7 โมงเย็น",
        "englishMeaning": "I'll go home at seven o'clock this evening."
      },
      {
        "scenario": "ถามไถ่",
        "hanzi": "你什么时候回家？",
        "pinyin": "Nǐ shénme shíhou huíjiā?",
        "thaiMeaning": "คุณจะกลับบ้านเมื่อไหร่?",
        "englishMeaning": "When will you go home?"
      },
      {
        "scenario": "บอกเพื่อน",
        "hanzi": "回到家后记得跟我说一声。",
        "pinyin": "Huí dào jiā hòu jìde gēn wǒ shuō yīshēng.",
        "thaiMeaning": "ถึงบ้านแล้วจำไว้ว่าบอกฉันสักคำนะ",
        "englishMeaning": "Remember to tell me when you get home."
      }
    ]
  },
  {
    "id": "v7",
    "hanzi": "睡觉",
    "pinyin": "shuìjiào",
    "thaiMeaning": "เข้านอน",
    "englishMeaning": "sleep",
    "example": {
      "hanzi": "准备睡觉。",
      "pinyin": "Zhǔnbèi shuìjiào.",
      "thaiMeaning": "เตรียมตัวนอน",
      "englishMeaning": "Get ready for bed."
    },
    "examples": [
      {
        "scenario": "ชวนเข้านอน",
        "hanzi": "太晚了，快去睡觉吧。",
        "pinyin": "Tài wǎn le, kuài qù shuìjiào ba.",
        "thaiMeaning": "ดึกมากแล้ว รีบไปนอนเถอะ",
        "englishMeaning": "It's too late, go to bed."
      },
      {
        "scenario": "เล่าประสบการณ์",
        "hanzi": "我昨天晚上十二点才睡觉。",
        "pinyin": "Wǒ zuótiān wǎnshang shí'èr diǎn cái shuìjiào.",
        "thaiMeaning": "เมื่อคืนนี้ฉันเที่ยงคืนถึงค่อยนอน",
        "englishMeaning": "I didn't go to bed until twelve o'clock last night."
      },
      {
        "scenario": "อวยพร",
        "hanzi": "祝你睡个好觉，晚安！",
        "pinyin": "Zhù nǐ shuì ge hǎo jiào, wǎn'ān!",
        "thaiMeaning": "ขอให้คุณนอนหลับฝันดี ราตรีสวัสดิ์!",
        "englishMeaning": "Have a good sleep and good night!"
      }
    ]
  },
  {
    "id": "v8",
    "hanzi": "手机",
    "pinyin": "shǒujī",
    "thaiMeaning": "โทรศัพท์มือถือ",
    "englishMeaning": "cell phone",
    "example": {
      "hanzi": "看手机。",
      "pinyin": "Kàn shǒujī.",
      "thaiMeaning": "ดูโทรศัพท์",
      "englishMeaning": "Look at your phone."
    },
    "examples": [
      {
        "scenario": "แบตหมด",
        "hanzi": "我的手机没电了，需要充电。",
        "pinyin": "Wǒ de shǒujī méi diàn le, xūyào chōngdiàn.",
        "thaiMeaning": "โทรศัพท์ของฉันแบตหมดแล้ว ต้องชาร์จแบต",
        "englishMeaning": "My phone is out of battery and needs to be recharged."
      },
      {
        "scenario": "ตามหาของ",
        "hanzi": "请问你看到我的手机了吗？",
        "pinyin": "Qǐngwèn nǐ kàndào wǒ de shǒujī le ma?",
        "thaiMeaning": "ขอถามหน่อย คุณเห็นโทรศัพท์ของฉันไหม?",
        "englishMeaning": "Have you seen my mobile phone?"
      },
      {
        "scenario": "สถานที่ทำงาน",
        "hanzi": "开会的时候请把手机关静音。",
        "pinyin": "Kāihuì de shíhou qǐng bǎ shǒujī guān jìngyīn.",
        "thaiMeaning": "เวลาประชุมโปรดปิดเสียงโทรศัพท์",
        "englishMeaning": "Please turn off and mute your cell phone during the meeting."
      }
    ]
  },
  {
    "id": "v9",
    "hanzi": "钥匙",
    "pinyin": "yàoshi",
    "thaiMeaning": "กุญแจ",
    "englishMeaning": "key",
    "example": {
      "hanzi": "拿钥匙。",
      "pinyin": "Ná yàoshi.",
      "thaiMeaning": "หยิบกุญแจ",
      "englishMeaning": "Get the key."
    },
    "examples": [
      {
        "scenario": "บอกตำแหน่ง",
        "hanzi": "我把钥匙放在桌子上了。",
        "pinyin": "Wǒ bǎ yàoshi fàng zài zhuōzi shàng le.",
        "thaiMeaning": "ฉันวางกุญแจไว้บนโต๊ะแล้ว",
        "englishMeaning": "I put the keys on the table."
      },
      {
        "scenario": "ลืมของ",
        "hanzi": "糟糕！我忘记带出门钥匙了。",
        "pinyin": "Zāogāo! Wǒ wàngjì dài chūmén yàoshi le.",
        "thaiMeaning": "แย่แล้ว! ฉันลืมพกกุญแจออกจากบ้าน",
        "englishMeaning": "Oops! I forgot my door key."
      },
      {
        "scenario": "อธิบาย",
        "hanzi": "这把钥匙是用来开这扇门的。",
        "pinyin": "Zhè bǎ yàoshi shì yòng lái kāi zhè shàn mén de.",
        "thaiMeaning": "กุญแจดอกนี้เอาไว้ใช้เปิดประตูบานนี้",
        "englishMeaning": "This key is used to open this door."
      }
    ]
  },
  {
    "id": "v10",
    "hanzi": "现在",
    "pinyin": "xiànzài",
    "thaiMeaning": "ตอนนี้ / ขณะนี้",
    "englishMeaning": "Now",
    "example": {
      "hanzi": "现在几点？",
      "pinyin": "Xiànzài jǐ diǎn?",
      "thaiMeaning": "ตอนนี้กี่โมง",
      "englishMeaning": "What time is it now?"
    },
    "examples": [
      {
        "scenario": "ถามเวลา",
        "hanzi": "请问现在几点了？",
        "pinyin": "Qǐngwèn xiànzài jǐ diǎn le?",
        "thaiMeaning": "ขอถามหน่อย ตอนนี้ กี่โมงแล้ว?",
        "englishMeaning": "What time is it now?"
      },
      {
        "scenario": "ปฏิเสธสุภาพ",
        "hanzi": "我现在很忙，等一下再联系你。",
        "pinyin": "Wǒ xiànzài hěn máng, děng yīxià zài liánxì nǐ.",
        "thaiMeaning": "ตอนนี้ฉันยุ่งมาก เดี๋ยวค่อยติดต่อไปหาคุณนะ",
        "englishMeaning": "I'm very busy now, I'll contact you later."
      },
      {
        "scenario": "รายงานสถานการณ์",
        "hanzi": "现在情况比之前好多了。",
        "pinyin": "Xiànzài qíngkuàng bǐ zhīqián hǎo duō le.",
        "thaiMeaning": "ตอนนี้สถานการณ์ดีกว่าเมื่อก่อนมากแล้ว",
        "englishMeaning": "Things are much better now than before."
      }
    ]
  },
  {
    "id": "v11",
    "hanzi": "工作",
    "pinyin": "gōngzuò",
    "thaiMeaning": "ทำงาน / งาน",
    "englishMeaning": "Work",
    "example": {
      "hanzi": "开始工作。",
      "pinyin": "Kāishǐ gōngzuò.",
      "thaiMeaning": "เริ่มทำงาน",
      "englishMeaning": "Get to work."
    },
    "examples": [
      {
        "scenario": "ชีวิตการทำงาน",
        "hanzi": "我今天工作很忙，没时间休息。",
        "pinyin": "Wǒ jīntiān gōngzuò hěn máng, méi shíjiān xiūxi.",
        "thaiMeaning": "วันนี้ฉันงานยุ่งมาก ไม่มีเวลาพักเลย",
        "englishMeaning": "I'm very busy at work today and don't have time to rest."
      },
      {
        "scenario": "ถามอาชีพ",
        "hanzi": "你的工作是什么？",
        "pinyin": "Nǐ de gōngzuò shì shénme?",
        "thaiMeaning": "คุณทำงานอะไร?",
        "englishMeaning": "What is your job?"
      },
      {
        "scenario": "อวยพร",
        "hanzi": "祝你工作顺心！",
        "pinyin": "Zhù nǐ gōngzuò shùnxīn!",
        "thaiMeaning": "ขอให้คุณทำงานอย่างราบรื่นนะ!",
        "englishMeaning": "I wish you success in your work!"
      }
    ]
  },
  {
    "id": "v12",
    "hanzi": "公司",
    "pinyin": "gōngsī",
    "thaiMeaning": "บริษัท / ที่ทำงาน",
    "englishMeaning": "company",
    "example": {
      "hanzi": "到公司了。",
      "pinyin": "Dào gōngsī le.",
      "thaiMeaning": "ถึงบริษัทแล้ว",
      "englishMeaning": "Arrive at the company."
    },
    "examples": [
      {
        "scenario": "เวลาทำงาน",
        "hanzi": "我每天八点到达公司。",
        "pinyin": "Wǒ měitiān bā diǎn dàodá gōngsī.",
        "thaiMeaning": "ฉันถึงบริษัท 8 โมงเช้าทุกวัน",
        "englishMeaning": "I arrive at the company at eight o'clock every day."
      },
      {
        "scenario": "ถามสถานที่",
        "hanzi": "你的公司在哪里？",
        "pinyin": "Nǐ de gōngsī zài nǎlǐ?",
        "thaiMeaning": "บริษัทของคุณอยู่ที่ไหน?",
        "englishMeaning": "Where is your company located?"
      },
      {
        "scenario": "การพูดถึงองค์กร",
        "hanzi": "这家公司发展得很快。",
        "pinyin": "Zhè jiā gōngsī fāzhǎn de hěn kuài.",
        "thaiMeaning": "บริษัทแห่งนี้เติบโตเร็วมาก",
        "englishMeaning": "The company is growing rapidly."
      }
    ]
  },
  {
    "id": "v13",
    "hanzi": "水",
    "pinyin": "shuǐ",
    "thaiMeaning": "น้ำ",
    "englishMeaning": "water",
    "example": {
      "hanzi": "喝水。",
      "pinyin": "Hē shuǐ.",
      "thaiMeaning": "ดื่มน้ำ",
      "englishMeaning": "Drink water."
    },
    "examples": [
      {
        "scenario": "ห่วงใย",
        "hanzi": "记得多喝水，对身体好。",
        "pinyin": "Jìde duō hē shuǐ, duì shēntǐ hǎo.",
        "thaiMeaning": "จำไว้ว่าต้องดื่มน้ำเยอะๆ ดีต่อสุขภาพ",
        "englishMeaning": "Remember to drink plenty of water, it’s good for your health."
      },
      {
        "scenario": "สั่งน้ำ/ขอความช่วยเหลือ",
        "hanzi": "请给我一杯水。",
        "pinyin": "Qǐng gěi wǒ yī bēi shuǐ.",
        "thaiMeaning": "ขอส่งน้ำให้ฉันสักแก้วครับ/ค่ะ",
        "englishMeaning": "Water, please."
      },
      {
        "scenario": "ซื้อของ",
        "hanzi": "这里的瓶装水很便宜。",
        "pinyin": "Zhèlǐ de píngzhuāng shuǐ hěn piányi.",
        "thaiMeaning": "น้ำดื่มบรรจุขวดที่นี่ราคาถูกมาก",
        "englishMeaning": "Bottled water is very cheap here."
      }
    ]
  },
  {
    "id": "v14",
    "hanzi": "咖啡",
    "pinyin": "kāfēi",
    "thaiMeaning": "กาแฟ",
    "englishMeaning": "coffee",
    "example": {
      "hanzi": "泡咖啡。",
      "pinyin": "Pào kāfēi.",
      "thaiMeaning": "ชงกาแฟ",
      "englishMeaning": "Make coffee."
    },
    "examples": [
      {
        "scenario": "ความชื่นชอบ",
        "hanzi": "我早上喜欢喝一杯热咖啡。",
        "pinyin": "Wǒ zǎoshang xǐhuan hē yī bēi rè kāfēi.",
        "thaiMeaning": "ตอนเช้าฉันชอบดื่มกาแฟร้อนสักแก้ว",
        "englishMeaning": "I like to drink a hot cup of coffee in the morning."
      },
      {
        "scenario": "ถามต้อนรับ",
        "hanzi": "你要喝咖啡还是喝茶？",
        "pinyin": "Nǐ yào hē kāfēi háishi hē chá?",
        "thaiMeaning": "คุณจะดื่มกาแฟหรือชา?",
        "englishMeaning": "Would you like coffee or tea?"
      },
      {
        "scenario": "คำชม",
        "hanzi": "这家咖啡馆的氛围真好。",
        "pinyin": "Zhè jiā kāfēiguǎn de fēnwéi zhēn hǎo.",
        "thaiMeaning": "บรรยากาศร้านกาแฟร้านนี้ดีจริง",
        "englishMeaning": "This cafe has such a nice atmosphere."
      }
    ]
  },
  {
    "id": "v15",
    "hanzi": "吃饭",
    "pinyin": "chīfàn",
    "thaiMeaning": "กินข้าว",
    "englishMeaning": "Have a meal",
    "example": {
      "hanzi": "去吃饭。",
      "pinyin": "Qù chīfàn.",
      "thaiMeaning": "ไปกินข้าว",
      "englishMeaning": "Go and have a meal."
    },
    "examples": [
      {
        "scenario": "ชวนเพื่อน",
        "hanzi": "我们一起去吃饭吧。",
        "pinyin": "Wǒmen yīqǐ qù chīfàn ba.",
        "thaiMeaning": "พวกเราไปกินข้าวด้วยกันเถอะ",
        "englishMeaning": "Let's go to dinner together."
      },
      {
        "scenario": "คำทักทายยอดฮิต",
        "hanzi": "你吃饭了吗？",
        "pinyin": "Nǐ chīfàn le ma?",
        "thaiMeaning": "คุณกินข้าวหรือยัง?",
        "englishMeaning": "Did you have meal?"
      },
      {
        "scenario": "เตือนด้วยความห่วงใย",
        "hanzi": "吃饭时请慢一点吃。",
        "pinyin": "Chīfàn shí qǐng màn yīdiǎn chī.",
        "thaiMeaning": "เวลากินข้าวโปรดกินช้าๆ หน่อยนะ",
        "englishMeaning": "Please eat slowly when you eat."
      }
    ]
  },
  {
    "id": "v16",
    "hanzi": "肚子",
    "pinyin": "dùzi",
    "thaiMeaning": "ท้อง",
    "englishMeaning": "abdomen",
    "example": {
      "hanzi": "肚子饿。",
      "pinyin": "Dùzi è.",
      "thaiMeaning": "ท้องหิว",
      "englishMeaning": "Hungry."
    },
    "examples": [
      {
        "scenario": "บอกอาการหิว",
        "hanzi": "我肚子饿了，想去吃东西。",
        "pinyin": "Wǒ dùzi è le, xiǎng qù chī dōngxi.",
        "thaiMeaning": "ฉันหิวข้าวแล้ว อยากไปหาอะไรกิน",
        "englishMeaning": "I'm hungry and want to eat."
      },
      {
        "scenario": "บอกอาการเจ็บป่วย",
        "hanzi": "我今天肚子有点不舒服。",
        "pinyin": "Wǒ jīntiān dùzi yǒudiǎn bù shūfu.",
        "thaiMeaning": "วันนี้ฉันปวดท้อง/รู้สึกท้องไส้ไม่ค่อยสบาย",
        "englishMeaning": "My stomach feels a little uncomfortable today."
      },
      {
        "scenario": "คุยตลกสนิทสนม",
        "hanzi": "吃完饭后，我的肚子变大了。",
        "pinyin": "Chī wán fàn hòu, wǒ de dùzi biàn dà le.",
        "thaiMeaning": "กินข้าวเสร็จ ท้องฉันพุงกางเลย",
        "englishMeaning": "After eating, my belly got bigger."
      }
    ]
  },
  {
    "id": "v17",
    "hanzi": "时间",
    "pinyin": "shíjiān",
    "thaiMeaning": "เวลา",
    "englishMeaning": "time",
    "example": {
      "hanzi": "没时间。",
      "pinyin": "Méi shíjiān.",
      "thaiMeaning": "ไม่มีเวลา",
      "englishMeaning": "No time."
    },
    "examples": [
      {
        "scenario": "ถามความว่าง",
        "hanzi": "你现在有时间吗？",
        "pinyin": "Nǐ xiànzài yǒu shíjiān ma?",
        "thaiMeaning": "ตอนนี้คุณพอมีเวลาไหม?",
        "englishMeaning": "Do you have time now?"
      },
      {
        "scenario": "รำพึงรำพัน",
        "hanzi": "时间过得真快啊！",
        "pinyin": "Shíjiān guò de zhēn kuài a!",
        "thaiMeaning": "เวลาผ่านไปเร็วเหลือเกิน!",
        "englishMeaning": "Time flies so fast!"
      },
      {
        "scenario": "เตือนเรื่องเวลา",
        "hanzi": "请一定要抓紧时间。",
        "pinyin": "Qǐng yīdìng yào zhuājǐn shíjiān.",
        "thaiMeaning": "โปรดจำไว้ว่าต้องเร่งรีบทำเวลา",
        "englishMeaning": "Please be sure to hurry up."
      }
    ]
  },
  {
    "id": "v18",
    "hanzi": "今天",
    "pinyin": "jīntiān",
    "thaiMeaning": "วันนี้",
    "englishMeaning": "today",
    "example": {
      "hanzi": "今天去上班。",
      "pinyin": "Jīntiān qù shàngbān.",
      "thaiMeaning": "วันนี้ไปทำงาน",
      "englishMeaning": "Go to work today."
    },
    "examples": [
      {
        "scenario": "คุยเรื่องสภาพอากาศ",
        "hanzi": "今天天气非常好。",
        "pinyin": "Jīntiān tiānqì fēicháng hǎo.",
        "thaiMeaning": "วันนี้อากาศดีมากเลย",
        "englishMeaning": "The weather is very nice today."
      },
      {
        "scenario": "ถามแผนงาน",
        "hanzi": "今天你要做什么？",
        "pinyin": "Jīntiān nǐ yào zuò shénme?",
        "thaiMeaning": "วันนี้คุณจะทำอะไร?",
        "englishMeaning": "What are you going to do today?"
      },
      {
        "scenario": "วันสำคัญ",
        "hanzi": "今天是我朋友的生日。",
        "pinyin": "Jīntiān shì wǒ péngyou de shēngrì.",
        "thaiMeaning": "วันนี้เป็นวันเกิดของเพื่อนฉัน",
        "englishMeaning": "Today is my friend's birthday."
      }
    ]
  },
  {
    "id": "v19",
    "hanzi": "明天",
    "pinyin": "míngtiān",
    "thaiMeaning": "พรุ่งนี้",
    "englishMeaning": "tomorrow",
    "example": {
      "hanzi": "明天早起。",
      "pinyin": "Míngtiān zǎoqǐ.",
      "thaiMeaning": "พรุ่งนี้ตื่นเช้า",
      "englishMeaning": "Get up early tomorrow."
    },
    "examples": [
      {
        "scenario": "คำบอกลา",
        "hanzi": "明天见！祝你有美好的一天。",
        "pinyin": "Míngtiān jiàn! Zhù nǐ yǒu měihǎo de yī tiān.",
        "thaiMeaning": "พรุ่งนี้เจอกัน! ขอให้เป็นวันที่ดี",
        "englishMeaning": "See you tomorrow! Have a nice day."
      },
      {
        "scenario": "แผนงาน",
        "hanzi": "我明天需要早起去开会。",
        "pinyin": "Wǒ míngtiān xūyào zǎoqǐ qù kāihuì.",
        "thaiMeaning": "พรุ่งนี้ฉันต้องตื่นเช้าไปประชุม",
        "englishMeaning": "I need to get up early for a meeting tomorrow."
      },
      {
        "scenario": "ถามสภาพอากาศ",
        "hanzi": "明天天气怎么样？",
        "pinyin": "Míngtiān tiānqì zěnmeyàng?",
        "thaiMeaning": "สภาพอากาศพรุ่งนี้เป็นยังไงบ้าง?",
        "englishMeaning": "What's the weather like tomorrow?"
      }
    ]
  },
  {
    "id": "v20",
    "hanzi": "准备",
    "pinyin": "zhǔnbèi",
    "thaiMeaning": "เตรียมตัว",
    "englishMeaning": "Prepare",
    "example": {
      "hanzi": "准备好了。",
      "pinyin": "Zhǔnbèi hǎo le.",
      "thaiMeaning": "เตรียมพร้อมแล้ว",
      "englishMeaning": "Ready."
    },
    "examples": [
      {
        "scenario": "พร้อมออกเดินทาง",
        "hanzi": "我已经准备好了，可以出发了。",
        "pinyin": "Wǒ yǐjīng zhǔnbèi hǎo le, kěyǐ chūfā le.",
        "thaiMeaning": "ฉันเตรียมพร้อมเรียบร้อยแล้ว ออกเดินทางได้เลย",
        "englishMeaning": "I'm ready to go."
      },
      {
        "scenario": "ถามความเคลื่อนไหว",
        "hanzi": "你在准备什么呢？",
        "pinyin": "Nǐ zài zhǔnbèi shénme ne?",
        "thaiMeaning": "คุณกำลังเตรียมอะไรอยู่เหรอ?",
        "englishMeaning": "What are you preparing for?"
      },
      {
        "scenario": "ประกาศการทำงาน",
        "hanzi": "请大家做一下准备。",
        "pinyin": "Qǐng dàjiā zuò yīxià zhǔnbèi.",
        "thaiMeaning": "ขอให้ทุกคนเตรียมตัวสักครู่",
        "englishMeaning": "Please make preparations."
      }
    ]
  },
  {
    "id": "v21",
    "hanzi": "累",
    "pinyin": "lèi",
    "thaiMeaning": "เหนื่อย",
    "englishMeaning": "tired",
    "example": {
      "hanzi": "有点累。",
      "pinyin": "Yǒudiǎnr lèi.",
      "thaiMeaning": "เหนื่อยนิดหน่อย",
      "englishMeaning": "A little tired."
    },
    "examples": [
      {
        "scenario": "ระบายความเหนื่อย",
        "hanzi": "工作了一整天，感觉太累了。",
        "pinyin": "Gōngzuò le yī zhěng tiān, gǎnjué tài lèi le.",
        "thaiMeaning": "ทำงานมาทั้งวัน รู้สึกเหนื่อยเหลือเกิน",
        "englishMeaning": "I feel so tired after working all day."
      },
      {
        "scenario": "ให้กำลังใจ/ห่วงใย",
        "hanzi": "如果你累了，就休息一下吧。",
        "pinyin": "Rúguǒ nǐ lèi le, jiù xiūxi yīxià ba.",
        "thaiMeaning": "ถ้าคุณเหนื่อยแล้ว ก็พักผ่อนสักหน่อยเถอะ",
        "englishMeaning": "If you are tired, take a break."
      },
      {
        "scenario": "สรุปความรู้สึก",
        "hanzi": "今天虽然很累，但是很高兴。",
        "pinyin": "Jīntiān suīrán hěn lèi, dànshì hěn gāoxìng.",
        "thaiMeaning": "วันนี้ถึงจะเหนื่อยมาก แต่ก็มีความสุขมาก",
        "englishMeaning": "Although I am very tired today, I am very happy."
      }
    ]
  },
  {
    "id": "v22",
    "hanzi": "困",
    "pinyin": "kùn",
    "thaiMeaning": "ง่วง",
    "englishMeaning": "Sleepy",
    "example": {
      "hanzi": "太困了。",
      "pinyin": "Tài kùn le.",
      "thaiMeaning": "ง่วงมาก",
      "englishMeaning": "Too sleepy."
    },
    "examples": [
      {
        "scenario": "บอกอาการง่วง",
        "hanzi": "我很困，想先去睡觉了。",
        "pinyin": "Wǒ hěn kùn, xiǎng xiān qù shuìjiào le.",
        "thaiMeaning": "ฉันง่วงมาก อยากขอตัวไปนอนก่อนแล้ว",
        "englishMeaning": "I'm very sleepy and want to go to bed first."
      },
      {
        "scenario": "ประสบการณ์",
        "hanzi": "下午开会时我有点发困。",
        "pinyin": "Xiàwǔ kāihuì shí wǒ yǒudiǎn fākùn.",
        "thaiMeaning": "ตอนประชุมช่วงบ่ายฉันรู้สึกสัปงกง่วงนอนนิดหน่อย",
        "englishMeaning": "I felt a little sleepy during the afternoon meeting."
      },
      {
        "scenario": "คำแนะนำ",
        "hanzi": "喝杯浓咖啡就不会困了。",
        "pinyin": "Hē bēi nóng kāfēi jiù bù huì kùn le.",
        "thaiMeaning": "ดื่มกาแฟเข้มๆ สักแก้วก็จะไม่ง่วงแล้ว",
        "englishMeaning": "Drink a cup of strong coffee and you won't feel sleepy."
      }
    ]
  },
  {
    "id": "v23",
    "hanzi": "舒服",
    "pinyin": "shūfu",
    "thaiMeaning": "สบายตัว",
    "englishMeaning": "Comfortable",
    "example": {
      "hanzi": "很舒服。",
      "pinyin": "Hěn shūfu.",
      "thaiMeaning": "สบายมาก",
      "englishMeaning": "Very comfortable."
    },
    "examples": [
      {
        "scenario": "ความสบายกาย",
        "hanzi": "躺在床上感觉非常舒服。",
        "pinyin": "Tǎng zài chuáng shàng gǎnjué fēicháng shūfu.",
        "thaiMeaning": "นอนบนเตียงรู้สึกสบายมากเลย",
        "englishMeaning": "It felt very comfortable lying on the bed."
      },
      {
        "scenario": "ถามอาการป่วย",
        "hanzi": "你今天身体舒服一点了吗？",
        "pinyin": "Nǐ jīntiān shēntǐ shūfu yīdiǎn le ma?",
        "thaiMeaning": "วันนี้คุณรู้สึกสบายตัวขึ้นบ้างหรือยัง?",
        "englishMeaning": "Are you feeling better today?"
      },
      {
        "scenario": "คำชมสถานที่",
        "hanzi": "这里的环境让人很舒服。",
        "pinyin": "Zhèlǐ de huánjìng ràng rén hěn shūfu.",
        "thaiMeaning": "บรรยากาศที่นี่ทำให้คนรู้สึกผ่อนคลายสบายใจ",
        "englishMeaning": "The environment here is very comfortable."
      }
    ]
  },
  {
    "id": "v24",
    "hanzi": "堵车",
    "pinyin": "dǔchē",
    "thaiMeaning": "รถติด",
    "englishMeaning": "traffic jam",
    "example": {
      "hanzi": "路上堵车。",
      "pinyin": "Lùshang dǔchē.",
      "thaiMeaning": "บนถนนรถติด",
      "englishMeaning": "Traffic jam on the road."
    },
    "examples": [
      {
        "scenario": "สถานการณ์การเดินทาง",
        "hanzi": "路上堵车堵得很严重。",
        "pinyin": "Lùshàng dǔchē dǔ de hěn yánzhòng.",
        "thaiMeaning": "บนถนนรถติดหนักมาก",
        "englishMeaning": "There is a serious traffic jam on the road."
      },
      {
        "scenario": "แจ้งเหตุผล",
        "hanzi": "因为堵车，我可能会迟到。",
        "pinyin": "Yīnwèi dǔchē, wǒ kěnéng huì chídào.",
        "thaiMeaning": "เพราะว่ารถติด ฉันอาจจะไปสายนะ",
        "englishMeaning": "I might be late because of the traffic jam."
      },
      {
        "scenario": "ข้อเท็จจริง",
        "hanzi": "早高峰时期经常堵车。",
        "pinyin": "Zǎogāofēng shíqī jīngcháng dǔchē.",
        "thaiMeaning": "ช่วงชั่วโมงเร่งด่วนตอนเช้ารถติดบ่อยมาก",
        "englishMeaning": "Traffic jams are common during morning rush hours."
      }
    ]
  },
  {
    "id": "v25",
    "hanzi": "迟到",
    "pinyin": "chídào",
    "thaiMeaning": "มาสาย",
    "englishMeaning": "be late",
    "example": {
      "hanzi": "上班迟到。",
      "pinyin": "Shàngbān chídào.",
      "thaiMeaning": "ทำงานสาย",
      "englishMeaning": "Late for work."
    },
    "examples": [
      {
        "scenario": "คำขอโทษ",
        "hanzi": "不好意思，今天我迟到了。",
        "pinyin": "Bù hǎoyìsi, jīntiān wǒ chídào le.",
        "thaiMeaning": "ขอโทษครับ/ค่ะ วันนี้ฉันมาสาย",
        "englishMeaning": "Sorry, I'm late today."
      },
      {
        "scenario": "ข้อบังคับ/กฎระเบียบ",
        "hanzi": "开会请不要迟到。",
        "pinyin": "Kāihuì qǐng bùyào chídào.",
        "thaiMeaning": "เข้าประชุมโปรดอย่ามาสาย",
        "englishMeaning": "Please don't be late for the meeting."
      },
      {
        "scenario": "พูดถึงพฤติกรรม",
        "hanzi": "他平时很少迟到。",
        "pinyin": "Tā píngshí hěn shǎo chídào.",
        "thaiMeaning": "ปกติเขาไม่ค่อยมาสายนะ",
        "englishMeaning": "He is rarely late."
      }
    ]
  },
  {
    "id": "v26",
    "hanzi": "休息",
    "pinyin": "xiūxi",
    "thaiMeaning": "พักผ่อน",
    "englishMeaning": "rest",
    "example": {
      "hanzi": "休息一下。",
      "pinyin": "Xiūxi yíxià.",
      "thaiMeaning": "พักแป๊บนึง",
      "englishMeaning": "take a break."
    },
    "examples": [
      {
        "scenario": "ชวนพัก",
        "hanzi": "工作太久了，我们需要休息一下。",
        "pinyin": "Gōngzuò tài jiǔ le, wǒmen xūyào xiūxi yīxià.",
        "thaiMeaning": "ทำงานนานเกินไปแล้ว พวกเราต้องพักสักหน่อย",
        "englishMeaning": "We've been working for too long and we need a break."
      },
      {
        "scenario": "คำอวยพร",
        "hanzi": "祝你周末好好休息！",
        "pinyin": "Zhù nǐ zhōumò hǎohāo xiūxi!",
        "thaiMeaning": "ขอให้คุณได้พักผ่อนเต็มที่ในวันเสาร์อาทิตย์นะ!",
        "englishMeaning": "I wish you a good rest over the weekend!"
      },
      {
        "scenario": "คำห่วงใย",
        "hanzi": "请多注意休息。",
        "pinyin": "Qǐng duō zhùyì xiūxi.",
        "thaiMeaning": "โปรดใส่ใจพักผ่อนเยอะๆ นะ",
        "englishMeaning": "Please pay more attention to rest."
      }
    ]
  },
  {
    "id": "v27",
    "hanzi": "加油",
    "pinyin": "jiāyóu",
    "thaiMeaning": "สู้ๆ",
    "englishMeaning": "come on",
    "example": {
      "hanzi": "加油！",
      "pinyin": "Jiāyóu!",
      "thaiMeaning": "สู้ๆ!",
      "englishMeaning": "come on!"
    },
    "examples": [
      {
        "scenario": "ให้กำลังใจเพื่อนก่อนสอบ",
        "hanzi": "别紧张，好好考，加油！",
        "pinyin": "Bié jǐn zhāng, hǎo hǎo kǎo, jiā yóu!",
        "thaiMeaning": "ไม่ต้องตื่นเต้น ตั้งใจสอบนะ สู้ๆ!",
        "englishMeaning": "Don't be nervous, take the test well, come on!"
      },
      {
        "scenario": "เชียร์เพื่อนระหว่างการแข่งขัน",
        "hanzi": "你快追上他了，加油！",
        "pinyin": "Nǐ kuài zhuī shàng tā le, jiā yóu!",
        "thaiMeaning": "คุณใกล้ตามเขาทันแล้ว สู้ๆ!",
        "englishMeaning": "You are almost catching up with him, come on!"
      },
      {
        "scenario": "ให้กำลังใจตัวเองเมื่อเจองานยาก",
        "hanzi": "虽然很难，但我要继续加油。",
        "pinyin": "Suī rán hěn nán, dàn wǒ yào jì xù jiā yóu.",
        "thaiMeaning": "ถึงจะยาก แต่ฉันต้องพยายามต่อไป",
        "englishMeaning": "Although it is difficult, I will continue to work hard."
      }
    ]
  },
  {
    "id": "v28",
    "hanzi": "没关系",
    "pinyin": "méi guānxi",
    "thaiMeaning": "ไม่เป็นไร",
    "englishMeaning": "It doesn't matter",
    "example": {
      "hanzi": "没关系。",
      "pinyin": "Méi guānxi.",
      "thaiMeaning": "ไม่เป็นไร",
      "englishMeaning": "It doesn't matter."
    },
    "examples": [
      {
        "scenario": "ตอบเพื่อนที่กล่าวขอโทษ",
        "hanzi": "没关系，我没有生气。",
        "pinyin": "Méi guān xì, wǒ méi yǒu shēng qì.",
        "thaiMeaning": "ไม่เป็นไร ฉันไม่ได้โกรธ",
        "englishMeaning": "It's okay, I'm not angry."
      },
      {
        "scenario": "ปลอบเพื่อนที่ทำผิดเล็กน้อย",
        "hanzi": "做错一次没关系，下次注意就好。",
        "pinyin": "Zuò cuò yí cì méi guān xì, xià cì zhù yì jiù hǎo.",
        "thaiMeaning": "ทำผิดครั้งเดียวไม่เป็นไร คราวหน้าระวังก็พอ",
        "englishMeaning": "It doesn't matter if you make a mistake once, just pay attention next time."
      },
      {
        "scenario": "บอกว่าเปลี่ยนเวลานัดได้",
        "hanzi": "你今天没空也没关系，我们改天见。",
        "pinyin": "Nǐ jīn tiān méi kòng yě méi guān xì, wǒ men gǎi tiān jiàn.",
        "thaiMeaning": "วันนี้คุณไม่ว่างก็ไม่เป็นไร ไว้เจอกันวันอื่น",
        "englishMeaning": "It’s okay if you’re not free today, we’ll see you another day."
      }
    ]
  },
  {
    "id": "v29",
    "hanzi": "晚安",
    "pinyin": "wǎn'ān",
    "thaiMeaning": "ฝันดี / ราตรีสวัสดิ์",
    "englishMeaning": "Good night",
    "example": {
      "hanzi": "晚安。",
      "pinyin": "Wǎn'ān.",
      "thaiMeaning": "ฝันดี",
      "englishMeaning": "Good night."
    },
    "examples": [
      {
        "scenario": "บอกคนในครอบครัวก่อนเข้านอน",
        "hanzi": "时间不早了，晚安！",
        "pinyin": "Shí jiān bù zǎo le, wǎn ān!",
        "thaiMeaning": "ดึกแล้ว ราตรีสวัสดิ์!",
        "englishMeaning": "It's getting late, good night!"
      },
      {
        "scenario": "ส่งข้อความให้คนรักก่อนนอน",
        "hanzi": "晚安，祝你做个好梦。",
        "pinyin": "Wǎn ān, zhù nǐ zuò gè hǎo mèng.",
        "thaiMeaning": "ราตรีสวัสดิ์ ขอให้ฝันดีนะ",
        "englishMeaning": "Good night and have a sweet dream."
      },
      {
        "scenario": "จบสายโทรศัพท์ตอนกลางคืน",
        "hanzi": "我先睡了，晚安，明天聊。",
        "pinyin": "Wǒ xiān shuì le, wǎn ān, míng tiān liáo.",
        "thaiMeaning": "ฉันไปนอนก่อนนะ ราตรีสวัสดิ์ พรุ่งนี้ค่อยคุยกัน",
        "englishMeaning": "I'll go to bed first. Good night. Let's talk tomorrow."
      }
    ]
  },
  {
    "id": "v30",
    "hanzi": "衣服",
    "pinyin": "yīfu",
    "thaiMeaning": "เสื้อผ้า",
    "englishMeaning": "clothing",
    "example": {
      "hanzi": "换衣服。",
      "pinyin": "Huàn yīfu.",
      "thaiMeaning": "เปลี่ยนเสื้อผ้า",
      "englishMeaning": "Change clothes."
    },
    "examples": [
      {
        "scenario": "เลือกเสื้อผ้าก่อนออกจากบ้าน",
        "hanzi": "今天天气冷，多穿一件衣服吧。",
        "pinyin": "Jīn tiān tiān qì lěng, duō chuān yí jiàn yī fu ba.",
        "thaiMeaning": "วันนี้อากาศหนาว ใส่เสื้อเพิ่มอีกตัวนะ",
        "englishMeaning": "It's cold today, please wear more clothes."
      },
      {
        "scenario": "ถามเพื่อนเกี่ยวกับเสื้อตัวใหม่",
        "hanzi": "你在哪里买的这件衣服？",
        "pinyin": "Nǐ zài nǎ lǐ mǎi de zhè jiàn yī fu?",
        "thaiMeaning": "คุณซื้อเสื้อตัวนี้จากที่ไหน?",
        "englishMeaning": "Where did you buy this dress?"
      },
      {
        "scenario": "ซักเสื้อผ้าในวันหยุด",
        "hanzi": "周末我要在家洗衣服。",
        "pinyin": "Zhōu mò wǒ yào zài jiā xǐ yī fu.",
        "thaiMeaning": "สุดสัปดาห์ฉันจะซักเสื้อผ้าอยู่บ้าน",
        "englishMeaning": "I have to do laundry at home on the weekend."
      }
    ]
  },
  {
    "id": "v31",
    "hanzi": "裤子",
    "pinyin": "kùzi",
    "thaiMeaning": "กางเกง",
    "englishMeaning": "Pants",
    "example": {
      "hanzi": "穿裤子。",
      "pinyin": "Chuān kùzi.",
      "thaiMeaning": "ใส่กางเกง",
      "englishMeaning": "Wear pants."
    },
    "examples": [
      {
        "scenario": "ลองกางเกงในร้านเสื้อผ้า",
        "hanzi": "这条裤子有点长。",
        "pinyin": "Zhè tiáo kù zǐ yǒu diǎn cháng.",
        "thaiMeaning": "กางเกงตัวนี้ยาวไปหน่อย",
        "englishMeaning": "These pants are a bit long."
      },
      {
        "scenario": "ถามหากางเกงสีอื่น",
        "hanzi": "这条裤子有黑色的吗？",
        "pinyin": "Zhè tiáo kù zǐ yǒu hēi sè de ma?",
        "thaiMeaning": "กางเกงตัวนี้มีสีดำไหม?",
        "englishMeaning": "Are these pants available in black?"
      },
      {
        "scenario": "บอกเด็กให้เปลี่ยนกางเกง",
        "hanzi": "裤子脏了，去换一条吧。",
        "pinyin": "Kù zǐ zāng le, qù huàn yì tiáo ba.",
        "thaiMeaning": "กางเกงเปื้อนแล้ว ไปเปลี่ยนอีกตัวเถอะ",
        "englishMeaning": "Your pants are dirty, go and change them."
      }
    ]
  },
  {
    "id": "v32",
    "hanzi": "鞋子",
    "pinyin": "xiézi",
    "thaiMeaning": "รองเท้า",
    "englishMeaning": "shoe",
    "example": {
      "hanzi": "穿鞋子。",
      "pinyin": "Chuān xiézi.",
      "thaiMeaning": "ใส่รองเท้า",
      "englishMeaning": "Wear shoes."
    },
    "examples": [
      {
        "scenario": "ลองรองเท้าในร้าน",
        "hanzi": "这双鞋子穿起来很舒服。",
        "pinyin": "Zhè shuāng xié zǐ chuān qǐ lái hěn shū fú.",
        "thaiMeaning": "รองเท้าคู่นี้ใส่แล้วสบายมาก",
        "englishMeaning": "These shoes are very comfortable to wear."
      },
      {
        "scenario": "เตือนให้ถอดรองเท้าก่อนเข้าบ้าน",
        "hanzi": "进门前请先脱鞋子。",
        "pinyin": "Jìn mén qián qǐng xiān tuō xié zǐ.",
        "thaiMeaning": "ก่อนเข้าบ้านกรุณาถอดรองเท้าก่อน",
        "englishMeaning": "Please take off your shoes before entering."
      },
      {
        "scenario": "ตามหารองเท้าก่อนออกไป",
        "hanzi": "我的鞋子放在哪里了？",
        "pinyin": "Wǒ de xié zǐ fàng zài nǎ lǐ le?",
        "thaiMeaning": "รองเท้าของฉันวางไว้ที่ไหน?",
        "englishMeaning": "Where are my shoes?"
      }
    ]
  },
  {
    "id": "v33",
    "hanzi": "上班",
    "pinyin": "shàngbān",
    "thaiMeaning": "ทำงาน / เข้างาน",
    "englishMeaning": "work",
    "example": {
      "hanzi": "去上班。",
      "pinyin": "Qù shàngbān.",
      "thaiMeaning": "ไปทำงาน",
      "englishMeaning": "Go to work."
    },
    "examples": [
      {
        "scenario": "บอกคนที่บ้านก่อนออกไปทำงาน",
        "hanzi": "我要去上班了，晚上见。",
        "pinyin": "Wǒ yào qù shàng bān le, wǎn shàng jiàn.",
        "thaiMeaning": "ฉันไปทำงานแล้วนะ เจอกันตอนเย็น",
        "englishMeaning": "I have to go to work, see you tonight."
      },
      {
        "scenario": "พูดถึงเวลาเข้างานประจำ",
        "hanzi": "我每天早上八点上班。",
        "pinyin": "Wǒ měi tiān zǎo shàng bā diǎn shàng bān.",
        "thaiMeaning": "ฉันเข้างานแปดโมงเช้าทุกวัน",
        "englishMeaning": "I go to work at eight o'clock every morning."
      },
      {
        "scenario": "ถามเพื่อนว่าวันนี้ทำงานไหม",
        "hanzi": "你今天要上班吗？",
        "pinyin": "Nǐ jīn tiān yào shàng bān ma?",
        "thaiMeaning": "วันนี้คุณต้องไปทำงานไหม?",
        "englishMeaning": "Are you going to work today?"
      }
    ]
  },
  {
    "id": "v34",
    "hanzi": "下班",
    "pinyin": "xiàbān",
    "thaiMeaning": "เลิกงาน",
    "englishMeaning": "get off work",
    "example": {
      "hanzi": "下班了。",
      "pinyin": "Xiàbān le.",
      "thaiMeaning": "เลิกงานแล้ว",
      "englishMeaning": "get off work."
    },
    "examples": [
      {
        "scenario": "ชวนเพื่อนกินข้าวหลังเลิกงาน",
        "hanzi": "下班后一起吃饭吧。",
        "pinyin": "Xià bān hòu yì qǐ chī fàn ba.",
        "thaiMeaning": "หลังเลิกงานไปกินข้าวด้วยกันนะ",
        "englishMeaning": "Let's have dinner together after get off work."
      },
      {
        "scenario": "แจ้งคนที่บ้านว่าเพิ่งเลิกงาน",
        "hanzi": "我刚下班，现在回家。",
        "pinyin": "Wǒ gāng xià bān, xiàn zài huí jiā.",
        "thaiMeaning": "ฉันเพิ่งเลิกงาน ตอนนี้กำลังกลับบ้าน",
        "englishMeaning": "I just got off work and am going home now."
      },
      {
        "scenario": "ถามเวลาเลิกงานของเพื่อน",
        "hanzi": "你今天几点下班？",
        "pinyin": "Nǐ jīn tiān jǐ diǎn xià bān?",
        "thaiMeaning": "วันนี้คุณเลิกงานกี่โมง?",
        "englishMeaning": "What time do you get off work today?"
      }
    ]
  },
  {
    "id": "v35",
    "hanzi": "午休",
    "pinyin": "wǔxiū",
    "thaiMeaning": "พักเที่ยง",
    "englishMeaning": "lunch break",
    "example": {
      "hanzi": "午休时间。",
      "pinyin": "Wǔxiū shíjiān.",
      "thaiMeaning": "เวลาพักเที่ยง",
      "englishMeaning": "Lunch break."
    },
    "examples": [
      {
        "scenario": "บอกเพื่อนร่วมงานว่าจะพักเที่ยง",
        "hanzi": "到午休时间了，我们先休息吧。",
        "pinyin": "Dào wǔ xiū shí jiān le, wǒ men xiān xiū xi ba.",
        "thaiMeaning": "ถึงเวลาพักเที่ยงแล้ว พวกเราพักก่อนเถอะ",
        "englishMeaning": "It's lunch break time, let's take a rest first."
      },
      {
        "scenario": "งีบหลับระหว่างพักเที่ยง",
        "hanzi": "我午休的时候睡了半个小时。",
        "pinyin": "Wǒ wǔ xiū de shí hòu shuì le bàn gè xiǎo shí.",
        "thaiMeaning": "ตอนพักเที่ยงฉันนอนไปครึ่งชั่วโมง",
        "englishMeaning": "I slept for half an hour during my lunch break."
      },
      {
        "scenario": "ขอเลื่อนการคุยงาน",
        "hanzi": "我正在午休，下午再谈吧。",
        "pinyin": "Wǒ zhèng zài wǔ xiū, xià wǔ zài tán ba.",
        "thaiMeaning": "ฉันกำลังพักเที่ยง ไว้คุยกันตอนบ่ายนะ",
        "englishMeaning": "I'm taking a lunch break, let's talk in the afternoon."
      }
    ]
  },
  {
    "id": "v36",
    "hanzi": "早餐",
    "pinyin": "zǎocān",
    "thaiMeaning": "อาหารเช้า",
    "englishMeaning": "breakfast",
    "example": {
      "hanzi": "吃早餐。",
      "pinyin": "Chī zǎocān.",
      "thaiMeaning": "กินข้าวเช้า",
      "englishMeaning": "Have breakfast."
    },
    "examples": [
      {
        "scenario": "ถามเพื่อนว่าได้กินอาหารเช้าหรือยัง",
        "hanzi": "你今天吃早餐了吗？",
        "pinyin": "Nǐ jīn tiān chī zǎo cān le ma?",
        "thaiMeaning": "วันนี้คุณกินอาหารเช้าหรือยัง?",
        "englishMeaning": "Have you had breakfast today?"
      },
      {
        "scenario": "เล่านิสัยการกินตอนเช้า",
        "hanzi": "我的早餐通常是面包和牛奶。",
        "pinyin": "Wǒ de zǎo cān tōng cháng shì miàn bāo hé niú nǎi.",
        "thaiMeaning": "อาหารเช้าของฉันมักเป็นขนมปังกับนม",
        "englishMeaning": "My breakfast is usually bread and milk."
      },
      {
        "scenario": "ซื้ออาหารเช้าระหว่างไปทำงาน",
        "hanzi": "我在上班路上买了早餐。",
        "pinyin": "Wǒ zài shàng bān lù shang mǎi le zǎo cān.",
        "thaiMeaning": "ฉันซื้ออาหารเช้าระหว่างทางไปทำงาน",
        "englishMeaning": "I bought breakfast on the way to work."
      }
    ]
  },
  {
    "id": "v37",
    "hanzi": "午饭",
    "pinyin": "wǔfàn",
    "thaiMeaning": "อาหารเที่ยง",
    "englishMeaning": "lunch",
    "example": {
      "hanzi": "吃午饭。",
      "pinyin": "Chī wǔfàn.",
      "thaiMeaning": "กินข้าวเที่ยง",
      "englishMeaning": "Have lunch."
    },
    "examples": [
      {
        "scenario": "ชวนเพื่อนร่วมงานไปกินข้าวเที่ยง",
        "hanzi": "我们中午一起去吃午饭吧。",
        "pinyin": "Wǒ men zhōng wǔ yì qǐ qù chī wǔ fàn ba.",
        "thaiMeaning": "ตอนเที่ยงไปกินข้าวกลางวันด้วยกันนะ",
        "englishMeaning": "Let's go have lunch together at noon."
      },
      {
        "scenario": "ถามว่าจะกินอะไรเป็นมื้อเที่ยง",
        "hanzi": "你午饭想吃什么？",
        "pinyin": "Nǐ wǔ fàn xiǎng chī shén me?",
        "thaiMeaning": "มื้อเที่ยงคุณอยากกินอะไร?",
        "englishMeaning": "What do you want for lunch?"
      },
      {
        "scenario": "เล่าว่าวันนี้กินมื้อเที่ยงช้า",
        "hanzi": "今天工作太忙，我两点才吃午饭。",
        "pinyin": "Jīn tiān gōng zuò tài máng, wǒ liǎng diǎn cái chī wǔ fàn.",
        "thaiMeaning": "วันนี้งานยุ่งมาก ฉันเพิ่งได้กินข้าวเที่ยงตอนบ่ายสอง",
        "englishMeaning": "I'm so busy at work today that I don't have lunch until two o'clock."
      }
    ]
  },
  {
    "id": "v38",
    "hanzi": "晚饭",
    "pinyin": "wǎnfàn",
    "thaiMeaning": "อาหารเย็น",
    "englishMeaning": "dinner",
    "example": {
      "hanzi": "吃晚饭。",
      "pinyin": "Chī wǎnfàn.",
      "thaiMeaning": "กินข้าวเย็น",
      "englishMeaning": "Have dinner."
    },
    "examples": [
      {
        "scenario": "ถามคนในบ้านว่ามื้อเย็นพร้อมหรือยัง",
        "hanzi": "晚饭做好了吗？",
        "pinyin": "Wǎn fàn zuò hǎo le ma?",
        "thaiMeaning": "อาหารเย็นทำเสร็จหรือยัง?",
        "englishMeaning": "Is dinner ready?"
      },
      {
        "scenario": "ชวนเพื่อนไปกินมื้อเย็น",
        "hanzi": "晚上有空吗？一起吃晚饭吧。",
        "pinyin": "Wǎn shàng yǒu kōng ma? Yì qǐ chī wǎn fàn ba.",
        "thaiMeaning": "ตอนเย็นว่างไหม? ไปกินข้าวเย็นด้วยกันนะ",
        "englishMeaning": "Are you free tonight? Let's have dinner together."
      },
      {
        "scenario": "บอกว่าไม่กินมื้อเย็นมากเกินไป",
        "hanzi": "我晚饭不想吃太多。",
        "pinyin": "Wǒ wǎn fàn bù xiǎng chī tài duō.",
        "thaiMeaning": "มื้อเย็นฉันไม่อยากกินเยอะเกินไป",
        "englishMeaning": "I don't want to eat too much for dinner."
      }
    ]
  },
  {
    "id": "v39",
    "hanzi": "电脑",
    "pinyin": "diànnǎo",
    "thaiMeaning": "คอมพิวเตอร์",
    "englishMeaning": "computer",
    "example": {
      "hanzi": "开电脑。",
      "pinyin": "Kāi diànnǎo.",
      "thaiMeaning": "เปิดคอม",
      "englishMeaning": "Turn on the computer."
    },
    "examples": [
      {
        "scenario": "แจ้งปัญหาคอมพิวเตอร์ในที่ทำงาน",
        "hanzi": "我的电脑突然打不开了。",
        "pinyin": "Wǒ de diàn nǎo tū rán dǎ bù kāi le.",
        "thaiMeaning": "จู่ๆ คอมพิวเตอร์ของฉันก็เปิดไม่ติด",
        "englishMeaning": "My computer suddenly won't open."
      },
      {
        "scenario": "ขอยืมคอมพิวเตอร์เพื่อน",
        "hanzi": "我可以用一下你的电脑吗？",
        "pinyin": "Wǒ kě yǐ yòng yí xià nǐ de diàn nǎo ma?",
        "thaiMeaning": "ฉันขอใช้คอมพิวเตอร์ของคุณสักครู่ได้ไหม?",
        "englishMeaning": "Can I use your computer?"
      },
      {
        "scenario": "เตือนให้ปิดคอมพิวเตอร์ก่อนกลับ",
        "hanzi": "下班前别忘了关电脑。",
        "pinyin": "Xià bān qián bié wàng le guān diàn nǎo.",
        "thaiMeaning": "ก่อนเลิกงานอย่าลืมปิดคอมพิวเตอร์",
        "englishMeaning": "Don't forget to turn off your computer before leaving get off work."
      }
    ]
  },
  {
    "id": "v40",
    "hanzi": "钱",
    "pinyin": "qián",
    "thaiMeaning": "เงิน / สตางค์",
    "englishMeaning": "money",
    "example": {
      "hanzi": "带钱。",
      "pinyin": "Dài qián.",
      "thaiMeaning": "พกเงิน",
      "englishMeaning": "Bring money."
    },
    "examples": [
      {
        "scenario": "พบว่าเงินสดไม่พอจ่าย",
        "hanzi": "我带的钱不够，可以刷卡吗？",
        "pinyin": "Wǒ dài de qián bú gòu, kě yǐ shuā kǎ ma?",
        "thaiMeaning": "เงินที่ฉันพกมาไม่พอ จ่ายบัตรได้ไหม?",
        "englishMeaning": "I don’t have enough money with me, can I pay by credit card?"
      },
      {
        "scenario": "ถามเพื่อนว่ายืมเงินได้ไหม",
        "hanzi": "你能借我一点钱吗？",
        "pinyin": "Nǐ néng jiè wǒ yì diǎn qián ma?",
        "thaiMeaning": "คุณให้ฉันยืมเงินหน่อยได้ไหม?",
        "englishMeaning": "Can you lend me some money?"
      },
      {
        "scenario": "เตือนตัวเองให้ประหยัด",
        "hanzi": "这个月我要少花一点钱。",
        "pinyin": "Zhè ge yuè wǒ yào shǎo huā yì diǎn qián.",
        "thaiMeaning": "เดือนนี้ฉันต้องใช้เงินให้น้อยลงหน่อย",
        "englishMeaning": "I'm going to spend a little less this month."
      }
    ]
  },
  {
    "id": "v41",
    "hanzi": "买",
    "pinyin": "mǎi",
    "thaiMeaning": "ซื้อ",
    "englishMeaning": "purchase",
    "example": {
      "hanzi": "买东西。",
      "pinyin": "Mǎi dōngxi.",
      "thaiMeaning": "ซื้อของ",
      "englishMeaning": "Buy something."
    },
    "examples": [
      {
        "scenario": "ซื้อกาแฟระหว่างทาง",
        "hanzi": "我去买两杯咖啡。",
        "pinyin": "Wǒ qù mǎi liǎng bēi kā fēi.",
        "thaiMeaning": "ฉันจะไปซื้อกาแฟสองแก้ว",
        "englishMeaning": "I'm going to buy two cups of coffee."
      },
      {
        "scenario": "ถามเพื่อนว่าซื้อของจากที่ไหน",
        "hanzi": "你在哪里买的这个包？",
        "pinyin": "Nǐ zài nǎ lǐ mǎi de zhè ge bāo?",
        "thaiMeaning": "คุณซื้อกระเป๋าใบนี้จากที่ไหน?",
        "englishMeaning": "Where did you buy this bag?"
      },
      {
        "scenario": "ตัดสินใจยังไม่ซื้อเพราะแพง",
        "hanzi": "太贵了，我不买了。",
        "pinyin": "Tài guì le, wǒ bù mǎi le.",
        "thaiMeaning": "แพงเกินไป ฉันไม่ซื้อแล้ว",
        "englishMeaning": "It's too expensive, I won't buy it."
      }
    ]
  },
  {
    "id": "v42",
    "hanzi": "开门",
    "pinyin": "kāimén",
    "thaiMeaning": "เปิดประตู",
    "englishMeaning": "open the door",
    "example": {
      "hanzi": "开门。",
      "pinyin": "Kāimén.",
      "thaiMeaning": "เปิดประตู",
      "englishMeaning": "Open the door."
    },
    "examples": [
      {
        "scenario": "ขอให้คนใกล้ประตูช่วยเปิด",
        "hanzi": "请帮我开一下门。",
        "pinyin": "Qǐng bāng wǒ kāi yí xià mén.",
        "thaiMeaning": "ช่วยเปิดประตูให้ฉันหน่อย",
        "englishMeaning": "Please open the door for me."
      },
      {
        "scenario": "ร้านเริ่มเปิดให้บริการ",
        "hanzi": "这家店早上九点开门。",
        "pinyin": "Zhè jiā diàn zǎo shàng jiǔ diǎn kāi mén.",
        "thaiMeaning": "ร้านนี้เปิดเก้าโมงเช้า",
        "englishMeaning": "The store opens at nine in the morning."
      },
      {
        "scenario": "ได้ยินเสียงเคาะประตู",
        "hanzi": "有人敲门，你去开门吧。",
        "pinyin": "Yǒu rén qiāo mén, nǐ qù kāi mén ba.",
        "thaiMeaning": "มีคนเคาะประตู คุณไปเปิดประตูหน่อย",
        "englishMeaning": "If someone knocks on the door, go and open the door."
      }
    ]
  },
  {
    "id": "v43",
    "hanzi": "关门",
    "pinyin": "guānmén",
    "thaiMeaning": "ปิดประตู",
    "englishMeaning": "close the door",
    "example": {
      "hanzi": "关门。",
      "pinyin": "Guānmén.",
      "thaiMeaning": "ปิดประตู",
      "englishMeaning": "close the door."
    },
    "examples": [
      {
        "scenario": "เตือนคนสุดท้ายให้งับประตู",
        "hanzi": "出去的时候记得关门。",
        "pinyin": "Chū qù de shí hòu jì de guān mén.",
        "thaiMeaning": "ตอนออกไปอย่าลืมปิดประตู",
        "englishMeaning": "Remember to close the door when you go out."
      },
      {
        "scenario": "แจ้งเวลาร้านปิด",
        "hanzi": "这家店晚上十点关门。",
        "pinyin": "Zhè jiā diàn wǎn shàng shí diǎn guān mén.",
        "thaiMeaning": "ร้านนี้ปิดสี่ทุ่ม",
        "englishMeaning": "The store closes at ten o'clock in the evening."
      },
      {
        "scenario": "ขอให้ปิดประตูเพราะเสียงดัง",
        "hanzi": "外面太吵了，请关门。",
        "pinyin": "Wài miàn tài chǎo le, qǐng guān mén.",
        "thaiMeaning": "ข้างนอกเสียงดังเกินไป กรุณาปิดประตู",
        "englishMeaning": "It's too noisy outside, please close the door."
      }
    ]
  },
  {
    "id": "v44",
    "hanzi": "快",
    "pinyin": "kuài",
    "thaiMeaning": "เร็ว / เร่งด่วน",
    "englishMeaning": "quick",
    "example": {
      "hanzi": "快一点。",
      "pinyin": "Kuài yìdiǎn.",
      "thaiMeaning": "เร็วหน่อย",
      "englishMeaning": "Hurry up."
    },
    "examples": [
      {
        "scenario": "เร่งเพื่อนเพราะรถกำลังมา",
        "hanzi": "车来了，快一点！",
        "pinyin": "Chē lái le, kuài yì diǎn!",
        "thaiMeaning": "รถมาแล้ว เร็วหน่อย!",
        "englishMeaning": "The car is coming, hurry up!"
      },
      {
        "scenario": "ชมว่าเพื่อนวิ่งเร็ว",
        "hanzi": "你跑得真快。",
        "pinyin": "Nǐ pǎo dé zhēn kuài.",
        "thaiMeaning": "คุณวิ่งเร็วจริงๆ",
        "englishMeaning": "You run so fast."
      },
      {
        "scenario": "บอกว่างานใกล้เสร็จ",
        "hanzi": "我快做完了，再等一下。",
        "pinyin": "Wǒ kuài zuò wán le, zài děng yí xià.",
        "thaiMeaning": "ฉันใกล้ทำเสร็จแล้ว รออีกหน่อยนะ",
        "englishMeaning": "I'm almost done, just a moment."
      }
    ]
  },
  {
    "id": "v45",
    "hanzi": "慢",
    "pinyin": "màn",
    "thaiMeaning": "ช้า / ค่อยๆ",
    "englishMeaning": "slow",
    "example": {
      "hanzi": "慢一点。",
      "pinyin": "Màn yìdiǎn.",
      "thaiMeaning": "ช้าหน่อย",
      "englishMeaning": "Slow down."
    },
    "examples": [
      {
        "scenario": "เตือนคนขับให้ขับช้าลง",
        "hanzi": "前面人很多，开慢一点。",
        "pinyin": "Qián miàn rén hěn duō, kāi màn yì diǎn.",
        "thaiMeaning": "ข้างหน้าคนเยอะ ขับช้าลงหน่อย",
        "englishMeaning": "There are a lot of people in front of you, so drive slowly."
      },
      {
        "scenario": "บอกเด็กให้กินช้าๆ",
        "hanzi": "别着急，慢慢吃。",
        "pinyin": "Bié zháo jí, màn màn chī.",
        "thaiMeaning": "ไม่ต้องรีบ ค่อยๆ กิน",
        "englishMeaning": "Don't be in a hurry and eat slowly."
      },
      {
        "scenario": "อธิบายว่าอินเทอร์เน็ตช้า",
        "hanzi": "今天的网络特别慢。",
        "pinyin": "Jīn tiān de wǎng luò tè bié màn.",
        "thaiMeaning": "วันนี้อินเทอร์เน็ตช้ามาก",
        "englishMeaning": "The internet is extremely slow today."
      }
    ]
  },
  {
    "id": "v46",
    "hanzi": "好",
    "pinyin": "hǎo",
    "thaiMeaning": "ดี / โอเค",
    "englishMeaning": "good",
    "example": {
      "hanzi": "很好。",
      "pinyin": "Hěn hǎo.",
      "thaiMeaning": "ดีมาก",
      "englishMeaning": "very good."
    },
    "examples": [
      {
        "scenario": "ตอบรับแผนของเพื่อน",
        "hanzi": "好，我们下午三点见。",
        "pinyin": "Hǎo, wǒ men xià wǔ sān diǎn jiàn.",
        "thaiMeaning": "ได้ เจอกันบ่ายสามโมง",
        "englishMeaning": "Okay, let's meet at three o'clock in the afternoon."
      },
      {
        "scenario": "ชมอาหารที่เพื่อนทำ",
        "hanzi": "这个菜做得很好。",
        "pinyin": "Zhè ge cài zuò dé hěn hǎo.",
        "thaiMeaning": "อาหารจานนี้ทำได้ดีมาก",
        "englishMeaning": "This dish was very well done."
      },
      {
        "scenario": "ถามอาการคนป่วย",
        "hanzi": "你身体好一点了吗？",
        "pinyin": "Nǐ shēn tǐ hǎo yì diǎn le ma?",
        "thaiMeaning": "คุณอาการดีขึ้นบ้างหรือยัง?",
        "englishMeaning": "Are you feeling better?"
      }
    ]
  },
  {
    "id": "v47",
    "hanzi": "热",
    "pinyin": "rè",
    "thaiMeaning": "ร้อน",
    "englishMeaning": "hot",
    "example": {
      "hanzi": "天气热。",
      "pinyin": "Tiānqì rè.",
      "thaiMeaning": "อากาศร้อน",
      "englishMeaning": "The weather is hot."
    },
    "examples": [
      {
        "scenario": "บ่นเรื่องอากาศกลางแจ้ง",
        "hanzi": "今天外面太热了。",
        "pinyin": "Jīn tiān wài miàn tài rè le.",
        "thaiMeaning": "วันนี้ข้างนอกร้อนเกินไป",
        "englishMeaning": "It's too hot outside today."
      },
      {
        "scenario": "เตือนว่าอาหารยังร้อน",
        "hanzi": "汤很热，小心一点。",
        "pinyin": "Tāng hěn rè, xiǎo xīn yì diǎn.",
        "thaiMeaning": "น้ำแกงร้อนมาก ระวังหน่อย",
        "englishMeaning": "The soup is very hot, be careful."
      },
      {
        "scenario": "เปิดแอร์เพราะรู้สึกร้อน",
        "hanzi": "我有点热，可以开空调吗？",
        "pinyin": "Wǒ yǒu diǎn rè, kě yǐ kāi kōng tiáo ma?",
        "thaiMeaning": "ฉันรู้สึกร้อนนิดหน่อย เปิดแอร์ได้ไหม?",
        "englishMeaning": "I'm a little hot, can I turn on the air conditioner?"
      }
    ]
  },
  {
    "id": "v48",
    "hanzi": "冷",
    "pinyin": "lěng",
    "thaiMeaning": "หนาว / เย็น",
    "englishMeaning": "cold",
    "example": {
      "hanzi": "有点冷。",
      "pinyin": "Yǒudiǎnr lěng.",
      "thaiMeaning": "หนาวนิดหน่อย",
      "englishMeaning": "A bit cold."
    },
    "examples": [
      {
        "scenario": "บอกเพื่อนให้นำเสื้อคลุมมา",
        "hanzi": "晚上会很冷，记得带外套。",
        "pinyin": "Wǎn shàng huì hěn lěng, jì de dài wài tào.",
        "thaiMeaning": "ตอนกลางคืนจะหนาวมาก อย่าลืมเอาเสื้อคลุมมา",
        "englishMeaning": "It can get cold at night, so remember to bring a jacket."
      },
      {
        "scenario": "บอกว่าเครื่องดื่มเย็นเกินไป",
        "hanzi": "这杯水太冷了。",
        "pinyin": "Zhè bēi shuǐ tài lěng le.",
        "thaiMeaning": "น้ำแก้วนี้เย็นเกินไป",
        "englishMeaning": "This glass of water is too cold."
      },
      {
        "scenario": "ถามคนในห้องว่าหนาวไหม",
        "hanzi": "空调开得这么低，你冷不冷？",
        "pinyin": "Kōng tiáo kāi dé zhè me dī, nǐ lěng bu lěng?",
        "thaiMeaning": "เปิดแอร์ต่ำขนาดนี้ คุณหนาวไหม?",
        "englishMeaning": "Are you cold with the air conditioner turned on so low?"
      }
    ]
  },
  {
    "id": "v49",
    "hanzi": "开心",
    "pinyin": "kāixīn",
    "thaiMeaning": "มีความสุข / ดีใจ",
    "englishMeaning": "happy",
    "example": {
      "hanzi": "很开心。",
      "pinyin": "Hěn kāixīn.",
      "thaiMeaning": "มีความสุขมาก",
      "englishMeaning": "Very happy."
    },
    "examples": [
      {
        "scenario": "ดีใจที่ได้พบเพื่อนอีกครั้ง",
        "hanzi": "今天见到你，我很开心。",
        "pinyin": "Jīn tiān jiàn dào nǐ, wǒ hěn kāi xīn.",
        "thaiMeaning": "วันนี้ได้เจอคุณ ฉันดีใจมาก",
        "englishMeaning": "I'm very happy to see you today."
      },
      {
        "scenario": "เล่าเรื่องวันหยุดที่สนุก",
        "hanzi": "我们周末玩得很开心。",
        "pinyin": "Wǒ men zhōu mò wán dé hěn kāi xīn.",
        "thaiMeaning": "สุดสัปดาห์พวกเราเที่ยวกันอย่างมีความสุข",
        "englishMeaning": "We had a great time over the weekend."
      },
      {
        "scenario": "อวยพรวันเกิดเพื่อน",
        "hanzi": "祝你生日快乐，天天开心！",
        "pinyin": "Zhù nǐ shēng rì kuài lè, tiān tiān kāi xīn!",
        "thaiMeaning": "สุขสันต์วันเกิด ขอให้มีความสุขทุกวัน!",
        "englishMeaning": "I wish you a happy birthday and happiness every day!"
      }
    ]
  },
  {
    "id": "v50",
    "hanzi": "再见",
    "pinyin": "zàijiàn",
    "thaiMeaning": "ลาก่อน / ไว้เจอกันใหม่",
    "englishMeaning": "goodbye",
    "example": {
      "hanzi": "明天再见。",
      "pinyin": "Míngtiān zàijiàn.",
      "thaiMeaning": "พรุ่งนี้เจอกันใหม่",
      "englishMeaning": "See you tomorrow."
    },
    "examples": [
      {
        "scenario": "บอกลาเพื่อนหลังเลิกงาน",
        "hanzi": "我先回家了，明天再见。",
        "pinyin": "Wǒ xiān huí jiā le, míng tiān zài jiàn.",
        "thaiMeaning": "ฉันกลับบ้านก่อนนะ พรุ่งนี้เจอกัน",
        "englishMeaning": "I'm going home first. See you tomorrow."
      },
      {
        "scenario": "พนักงานกล่าวลาลูกค้า",
        "hanzi": "谢谢光临，再见！",
        "pinyin": "Xiè xiè guāng lín, zài jiàn!",
        "thaiMeaning": "ขอบคุณที่มาใช้บริการ ลาก่อน!",
        "englishMeaning": "Thanks for visiting, bye!"
      },
      {
        "scenario": "จบการสนทนาทางโทรศัพท์",
        "hanzi": "那我们下次再聊，再见。",
        "pinyin": "Nà wǒ men xià cì zài liáo, zài jiàn.",
        "thaiMeaning": "งั้นไว้คราวหน้าค่อยคุยกัน ลาก่อน",
        "englishMeaning": "Then let’s talk next time, bye."
      }
    ]
  },
  {
    "id": "v51",
    "hanzi": "左",
    "pinyin": "zuǒ",
    "thaiMeaning": "ซ้าย / ด้านซ้าย / มือซ้าย",
    "englishMeaning": "Left",
    "example": {
      "hanzi": "往左走。",
      "pinyin": "Wǎng zuǒ zǒu.",
      "thaiMeaning": "เดินไปทางซ้าย",
      "englishMeaning": "Go left."
    },
    "examples": [
      {
        "scenario": "เดินกับเพื่อนแล้วบอกทางที่สี่แยก",
        "hanzi": "到前面的路口往左转。",
        "pinyin": "Dào qiánmiàn de lùkǒu wǎng zuǒ zhuǎn.",
        "thaiMeaning": "ถึงสี่แยกข้างหน้าแล้วเลี้ยวซ้าย",
        "englishMeaning": "Go to the intersection ahead and turn left."
      },
      {
        "scenario": "บอกตำแหน่งของร้านในห้าง",
        "hanzi": "洗手间在咖啡店的左边。",
        "pinyin": "Xǐshǒujiān zài kāfēidiàn de zuǒbian.",
        "thaiMeaning": "ห้องน้ำอยู่ทางซ้ายของร้านกาแฟ",
        "englishMeaning": "The restroom is to the left of the coffee shop."
      },
      {
        "scenario": "ครูบอกให้นักเรียนยกมือ",
        "hanzi": "请举起你的左手。",
        "pinyin": "Qǐng jǔqǐ nǐ de zuǒshǒu.",
        "thaiMeaning": "กรุณายกมือซ้ายขึ้น",
        "englishMeaning": "Please raise your left hand."
      }
    ]
  },
  {
    "id": "v52",
    "hanzi": "右",
    "pinyin": "yòu",
    "thaiMeaning": "ขวา / ด้านขวา / มือขวา",
    "englishMeaning": "right",
    "example": {
      "hanzi": "往右转。",
      "pinyin": "Wǎng yòu zhuǎn.",
      "thaiMeaning": "เลี้ยวขวา",
      "englishMeaning": "Turn right."
    },
    "examples": [
      {
        "scenario": "นั่งรถแล้วบอกคนขับให้เลี้ยว",
        "hanzi": "前面往右转就到了。",
        "pinyin": "Qiánmiàn wǎng yòu zhuǎn jiù dào le.",
        "thaiMeaning": "ข้างหน้าเลี้ยวขวาก็ถึงแล้ว",
        "englishMeaning": "Just turn right ahead."
      },
      {
        "scenario": "บอกตำแหน่งของธนาคาร",
        "hanzi": "银行就在超市的右边。",
        "pinyin": "Yínháng jiù zài chāoshì de yòubian.",
        "thaiMeaning": "ธนาคารอยู่ทางขวาของซูเปอร์มาร์เก็ต",
        "englishMeaning": "The bank is on the right side of the supermarket."
      },
      {
        "scenario": "พยาบาลบอกตำแหน่งที่จะฉีดยา",
        "hanzi": "今天在右手打针。",
        "pinyin": "Jīntiān zài yòushǒu dǎzhēn.",
        "thaiMeaning": "วันนี้ฉีดยาที่แขนขวา",
        "englishMeaning": "I got an injection in my right hand today."
      }
    ]
  },
  {
    "id": "v53",
    "hanzi": "前",
    "pinyin": "qián",
    "thaiMeaning": "หน้า / ข้างหน้า / ก่อน",
    "englishMeaning": "forward",
    "example": {
      "hanzi": "往前走。",
      "pinyin": "Wǎng qián zǒu.",
      "thaiMeaning": "เดินไปข้างหน้า",
      "englishMeaning": "Go forward."
    },
    "examples": [
      {
        "scenario": "เดินหาอาคารแล้วเพื่อนบอกทาง",
        "hanzi": "再往前走五分钟就到了。",
        "pinyin": "Zài wǎng qián zǒu wǔ fēnzhōng jiù dào le.",
        "thaiMeaning": "เดินตรงไปข้างหน้าอีกห้านาทีก็ถึงแล้ว",
        "englishMeaning": "It's only five minutes' walk further."
      },
      {
        "scenario": "นัดเจอกันบริเวณหน้าโรงเรียน",
        "hanzi": "我在学校前面等你。",
        "pinyin": "Wǒ zài xuéxiào qiánmiàn děng nǐ.",
        "thaiMeaning": "ฉันรอคุณอยู่หน้าโรงเรียน",
        "englishMeaning": "I'll wait for you in front of the school."
      },
      {
        "scenario": "บอกสิ่งที่ต้องทำก่อนรับประทานอาหาร",
        "hanzi": "吃饭前要先洗手。",
        "pinyin": "Chīfàn qián yào xiān xǐshǒu.",
        "thaiMeaning": "ก่อนกินข้าวต้องล้างมือก่อน",
        "englishMeaning": "Wash your hands before eating."
      }
    ]
  },
  {
    "id": "v54",
    "hanzi": "后",
    "pinyin": "hòu",
    "thaiMeaning": "หลัง / ข้างหลัง / หลังจาก",
    "englishMeaning": "back",
    "example": {
      "hanzi": "在后面。",
      "pinyin": "Zài hòumiàn.",
      "thaiMeaning": "อยู่ข้างหลัง",
      "englishMeaning": "in the back."
    },
    "examples": [
      {
        "scenario": "บอกเพื่อนว่ามีคนยืนอยู่ด้านหลัง",
        "hanzi": "你后面有人，请让一下。",
        "pinyin": "Nǐ hòumiàn yǒu rén, qǐng ràng yīxià.",
        "thaiMeaning": "ข้างหลังคุณมีคนอยู่ กรุณาหลีกทางหน่อย",
        "englishMeaning": "There is someone behind you, please give way."
      },
      {
        "scenario": "นัดทำกิจกรรมหลังเลิกงาน",
        "hanzi": "下班后我们一起吃饭吧。",
        "pinyin": "Xiàbān hòu wǒmen yīqǐ chīfàn ba.",
        "thaiMeaning": "หลังเลิกงานเราไปกินข้าวด้วยกันนะ",
        "englishMeaning": "Let's have dinner together after get off work."
      },
      {
        "scenario": "บอกลำดับคิวของตัวเอง",
        "hanzi": "我在他后面。",
        "pinyin": "Wǒ zài tā hòumiàn.",
        "thaiMeaning": "ฉันอยู่ข้างหลังเขา",
        "englishMeaning": "I'm behind him."
      }
    ]
  },
  {
    "id": "v55",
    "hanzi": "进",
    "pinyin": "jìn",
    "thaiMeaning": "เข้า / เข้ามา / เข้าไป / เข้าร่วม",
    "englishMeaning": "Enter",
    "example": {
      "hanzi": "请进。",
      "pinyin": "Qǐng jìn.",
      "thaiMeaning": "เชิญเข้าด้านใน",
      "englishMeaning": "Please come in."
    },
    "examples": [
      {
        "scenario": "เปิดประตูต้อนรับแขก",
        "hanzi": "外面很热，快进来吧！",
        "pinyin": "Wàimiàn hěn rè, kuài jìnlái ba!",
        "thaiMeaning": "ข้างนอกร้อนมาก รีบเข้ามาข้างในเถอะ!",
        "englishMeaning": "It's hot outside, come in!"
      },
      {
        "scenario": "พนักงานบอกว่าสามารถเข้าไปในห้องได้",
        "hanzi": "门开着，你可以进去。",
        "pinyin": "Mén kāizhe, nǐ kěyǐ jìnqù.",
        "thaiMeaning": "ประตูเปิดอยู่ คุณเข้าไปได้",
        "englishMeaning": "The door is open and you can go in."
      },
      {
        "scenario": "เล่าว่าเพิ่งเข้าทำงานที่บริษัท",
        "hanzi": "我去年进了这家公司。",
        "pinyin": "Wǒ qùnián jìn le zhè jiā gōngsī.",
        "thaiMeaning": "ปีที่แล้วฉันเข้าทำงานที่บริษัทนี้",
        "englishMeaning": "I joined this company last year."
      }
    ]
  },
  {
    "id": "v56",
    "hanzi": "出",
    "pinyin": "chū",
    "thaiMeaning": "ออก / ออกมา / ออกไป / ทางออก",
    "englishMeaning": "out",
    "example": {
      "hanzi": "出去。",
      "pinyin": "Chūqù.",
      "thaiMeaning": "ออกไป",
      "englishMeaning": "go out."
    },
    "examples": [
      {
        "scenario": "เรียกเพื่อนให้ออกมาจากห้อง",
        "hanzi": "我们到了，你快出来吧！",
        "pinyin": "Wǒmen dào le, nǐ kuài chūlái ba!",
        "thaiMeaning": "พวกเรามาถึงแล้ว รีบออกมานะ!",
        "englishMeaning": "We're here, come out quickly!"
      },
      {
        "scenario": "บอกว่าจะออกไปซื้อของ",
        "hanzi": "我出去买点东西，马上回来。",
        "pinyin": "Wǒ chūqù mǎi diǎn dōngxi, mǎshàng huílái.",
        "thaiMeaning": "ฉันออกไปซื้อของนิดหน่อย เดี๋ยวกลับมา",
        "englishMeaning": "I'll go out to buy something and I'll be back soon."
      },
      {
        "scenario": "ถามทางออกจากสถานีรถไฟ",
        "hanzi": "请问，从哪个出口出去？",
        "pinyin": "Qǐngwèn, cóng nǎge chūkǒu chūqù?",
        "thaiMeaning": "ขอถามหน่อย ต้องออกทางออกไหน?",
        "englishMeaning": "Excuse me, which exit should I take?"
      }
    ]
  },
  {
    "id": "v57",
    "hanzi": "上",
    "pinyin": "shàng",
    "thaiMeaning": "บน / ขึ้น / ขึ้นรถ",
    "englishMeaning": "superior",
    "example": {
      "hanzi": "上楼。",
      "pinyin": "Shàng lóu.",
      "thaiMeaning": "ขึ้นชั้นบน",
      "englishMeaning": "Go upstairs."
    },
    "examples": [
      {
        "scenario": "ชวนเพื่อนขึ้นไปชั้นสอง",
        "hanzi": "我们上楼看看吧。",
        "pinyin": "Wǒmen shàng lóu kànkan ba.",
        "thaiMeaning": "พวกเราขึ้นไปดูชั้นบนกันเถอะ",
        "englishMeaning": "Let's go upstairs and have a look."
      },
      {
        "scenario": "บอกตำแหน่งโทรศัพท์ที่กำลังหา",
        "hanzi": "你的手机在桌子上。",
        "pinyin": "Nǐ de shǒujī zài zhuōzi shàng.",
        "thaiMeaning": "โทรศัพท์ของคุณอยู่บนโต๊ะ",
        "englishMeaning": "Your phone is on the table."
      },
      {
        "scenario": "กำลังเดินทางและบอกให้เพื่อนขึ้นรถ",
        "hanzi": "车来了，快上车！",
        "pinyin": "Chē lái le, kuài shàng chē!",
        "thaiMeaning": "รถมาแล้ว รีบขึ้นรถ!",
        "englishMeaning": "The car is here, get in quickly!"
      }
    ]
  },
  {
    "id": "v58",
    "hanzi": "下",
    "pinyin": "xià",
    "thaiMeaning": "ล่าง / ใต้ / ลง / ตก (ฝน) / ครั้งถัดไป",
    "englishMeaning": "Down",
    "example": {
      "hanzi": "下车。",
      "pinyin": "Xià chē.",
      "thaiMeaning": "ลงจากรถ",
      "englishMeaning": "get off."
    },
    "examples": [
      {
        "scenario": "ถึงป้ายแล้วบอกเพื่อนให้ลงจากรถ",
        "hanzi": "到站了，我们下车吧。",
        "pinyin": "Dào zhàn le, wǒmen xià chē ba.",
        "thaiMeaning": "ถึงป้ายแล้ว พวกเราลงจากรถกันเถอะ",
        "englishMeaning": "We've arrived at the station, let's get off."
      },
      {
        "scenario": "บอกตำแหน่งรองเท้าที่กำลังหา",
        "hanzi": "你的鞋在桌子下面。",
        "pinyin": "Nǐ de xié zài zhuōzi xiàmiàn.",
        "thaiMeaning": "รองเท้าของคุณอยู่ใต้โต๊ะ",
        "englishMeaning": "Your shoes are under the table."
      },
      {
        "scenario": "ฝนเริ่มตกขณะกำลังจะออกจากบ้าน",
        "hanzi": "外面下雨了，带把伞吧。",
        "pinyin": "Wàimiàn xiàyǔ le, dài bǎ sǎn ba.",
        "thaiMeaning": "ข้างนอกฝนตกแล้ว เอาร่มไปด้วยนะ",
        "englishMeaning": "It's raining outside. Bring an umbrella."
      },
      {
        "scenario": "นัดหมายกันใหม่ในครั้งถัดไป",
        "hanzi": "这次没时间，我们下次再去。",
        "pinyin": "Zhè cì méi shíjiān, wǒmen xià cì zài qù.",
        "thaiMeaning": "ครั้งนี้ไม่มีเวลา ไว้คราวหน้าพวกเราค่อยไป",
        "englishMeaning": "No time this time, we will go there next time."
      }
    ]
  },
  {
    "id": "v59",
    "hanzi": "走",
    "pinyin": "zǒu",
    "thaiMeaning": "เดิน / ไป / ออกไป",
    "englishMeaning": "Walk",
    "example": {
      "hanzi": "慢慢走。",
      "pinyin": "Mànmàn zǒu.",
      "thaiMeaning": "ค่อยๆ เดิน",
      "englishMeaning": "Walk slowly."
    },
    "examples": [
      {
        "scenario": "เดินกับผู้สูงอายุจึงบอกให้ค่อยๆ เดิน",
        "hanzi": "路很滑，慢慢走。",
        "pinyin": "Lù hěn huá, mànmàn zǒu.",
        "thaiMeaning": "ถนนลื่น ค่อยๆ เดินนะ",
        "englishMeaning": "The road is slippery, so walk slowly."
      },
      {
        "scenario": "กำลังจะกลับและบอกลาเพื่อน",
        "hanzi": "时间不早了，我先走了。",
        "pinyin": "Shíjiān bù zǎo le, wǒ xiān zǒu le.",
        "thaiMeaning": "ดึกแล้ว ฉันขอตัวไปก่อนนะ",
        "englishMeaning": "It's getting late, I'll leave first."
      },
      {
        "scenario": "ชวนเพื่อนออกเดินทางทันที",
        "hanzi": "大家都准备好了，我们走吧！",
        "pinyin": "Dàjiā dōu zhǔnbèi hǎo le, wǒmen zǒu ba!",
        "thaiMeaning": "ทุกคนเตรียมพร้อมแล้ว พวกเราไปกันเถอะ!",
        "englishMeaning": "Everyone is ready, let's go!"
      }
    ]
  },
  {
    "id": "v60",
    "hanzi": "跑",
    "pinyin": "pǎo",
    "thaiMeaning": "วิ่ง",
    "englishMeaning": "run",
    "example": {
      "hanzi": "快跑。",
      "pinyin": "Kuài pǎo.",
      "thaiMeaning": "รีบวิ่ง",
      "englishMeaning": "Run quickly."
    },
    "examples": [
      {
        "scenario": "เรียกเด็กไม่ให้วิ่งในอาคาร",
        "hanzi": "地上很滑，不要跑。",
        "pinyin": "Dì shàng hěn huá, bú yào pǎo.",
        "thaiMeaning": "พื้นลื่น อย่าวิ่ง",
        "englishMeaning": "The ground is slippery, don't run."
      },
      {
        "scenario": "รีบวิ่งไปขึ้นรถ",
        "hanzi": "车快开了，我们跑过去吧。",
        "pinyin": "Chē kuài kāi le, wǒ men pǎo guò qù ba.",
        "thaiMeaning": "รถใกล้ออกแล้ว พวกเราวิ่งไปกันเถอะ",
        "englishMeaning": "The car is about to leave, let's run over."
      },
      {
        "scenario": "เล่าว่าสุนัขวิ่งออกจากบ้าน",
        "hanzi": "小狗从家里跑出去了。",
        "pinyin": "Xiǎo gǒu cóng jiā lǐ pǎo chū qù le.",
        "thaiMeaning": "ลูกสุนัขวิ่งออกจากบ้านไปแล้ว",
        "englishMeaning": "The puppy ran away from the house."
      }
    ]
  },
  {
    "id": "v61",
    "hanzi": "东西",
    "pinyin": "dōngxi",
    "thaiMeaning": "สิ่งของ / ของ",
    "englishMeaning": "thing",
    "example": {
      "hanzi": "买东西。",
      "pinyin": "Mǎi dōngxi.",
      "thaiMeaning": "ซื้อของ",
      "englishMeaning": "Buy something."
    },
    "examples": [
      {
        "scenario": "บอกว่าจะออกไปซื้อของ",
        "hanzi": "我出去买点东西。",
        "pinyin": "Wǒ chū qù mǎi diǎn dōng xī.",
        "thaiMeaning": "ฉันออกไปซื้อของนิดหน่อย",
        "englishMeaning": "I'm going out to buy something."
      },
      {
        "scenario": "ถามว่าในกระเป๋ามีอะไร",
        "hanzi": "你的包里装了什么东西？",
        "pinyin": "Nǐ de bāo lǐ zhuāng le shén me dōng xī?",
        "thaiMeaning": "ในกระเป๋าของคุณใส่อะไรไว้?",
        "englishMeaning": "What's in your bag?"
      },
      {
        "scenario": "เตือนเพื่อนไม่ให้ลืมของ",
        "hanzi": "下车前检查一下自己的东西。",
        "pinyin": "Xià chē qián jiǎn chá yí xià zì jǐ de dōng xī.",
        "thaiMeaning": "ก่อนลงรถตรวจดูของของตัวเองด้วย",
        "englishMeaning": "Check your belongings before getting out of the car."
      }
    ]
  },
  {
    "id": "v62",
    "hanzi": "包",
    "pinyin": "bāo",
    "thaiMeaning": "กระเป๋า",
    "englishMeaning": "Bag",
    "example": {
      "hanzi": "带包。",
      "pinyin": "Dài bāo.",
      "thaiMeaning": "สะพายกระเป๋า",
      "englishMeaning": "Bring a bag."
    },
    "examples": [
      {
        "scenario": "ถามว่าเป็นกระเป๋าของใคร",
        "hanzi": "这个黑色的包是谁的？",
        "pinyin": "Zhè ge hēi sè de bāo shì shuí de?",
        "thaiMeaning": "กระเป๋าสีดำใบนี้เป็นของใคร?",
        "englishMeaning": "Whose is this black bag?"
      },
      {
        "scenario": "ขอให้เพื่อนช่วยถือกระเป๋า",
        "hanzi": "你能帮我拿一下包吗？",
        "pinyin": "Nǐ néng bāng wǒ ná yí xià bāo ma?",
        "thaiMeaning": "คุณช่วยถือกระเป๋าให้ฉันหน่อยได้ไหม?",
        "englishMeaning": "Can you hold my bag for me?"
      },
      {
        "scenario": "พบว่าลืมกระเป๋าไว้บนรถ",
        "hanzi": "我把包忘在出租车上了。",
        "pinyin": "Wǒ bǎ bāo wàng zài chū zū chē shàng le.",
        "thaiMeaning": "ฉันลืมกระเป๋าไว้บนแท็กซี่",
        "englishMeaning": "I left my bag in the taxi."
      }
    ]
  },
  {
    "id": "v63",
    "hanzi": "纸",
    "pinyin": "zhǐ",
    "thaiMeaning": "กระดาษ / ทิชชู",
    "englishMeaning": "Paper",
    "example": {
      "hanzi": "拿张纸。",
      "pinyin": "Ná zhāng zhǐ.",
      "thaiMeaning": "ขอหยิบกระดาษหน่อย",
      "englishMeaning": "Get a piece of paper."
    },
    "examples": [
      {
        "scenario": "ขอกระดาษสำหรับจดข้อมูล",
        "hanzi": "请给我一张纸，我要记一下。",
        "pinyin": "Qǐng gěi wǒ yì zhāng zhǐ, wǒ yào jì yí xià.",
        "thaiMeaning": "ขอกระดาษหนึ่งแผ่น ฉันจะจดไว้",
        "englishMeaning": "Please give me a piece of paper. I want to write it down."
      },
      {
        "scenario": "พบว่าทิชชูหมด",
        "hanzi": "洗手间里没有纸了。",
        "pinyin": "Xǐ shǒu jiān lǐ méi yǒu zhǐ le.",
        "thaiMeaning": "ในห้องน้ำไม่มีกระดาษทิชชูแล้ว",
        "englishMeaning": "There is no paper in the bathroom."
      },
      {
        "scenario": "เตือนให้อย่าทิ้งกระดาษบนพื้น",
        "hanzi": "不要把纸扔在地上。",
        "pinyin": "Bú yào bǎ zhǐ rēng zài dì shàng.",
        "thaiMeaning": "อย่าทิ้งกระดาษลงบนพื้น",
        "englishMeaning": "Don't throw the paper on the floor."
      }
    ]
  },
  {
    "id": "v64",
    "hanzi": "笔",
    "pinyin": "bǐ",
    "thaiMeaning": "ปากกา / ดินสอ",
    "englishMeaning": "Pen",
    "example": {
      "hanzi": "借支笔。",
      "pinyin": "Jiè zhī bǐ.",
      "thaiMeaning": "ขอยืมปากกาหน่อย",
      "englishMeaning": "Borrow a pen."
    },
    "examples": [
      {
        "scenario": "ขอยืมปากกาเพื่อเซ็นชื่อ",
        "hanzi": "可以借我一支笔吗？",
        "pinyin": "Kě yǐ jiè wǒ yì zhī bǐ ma?",
        "thaiMeaning": "ขอยืมปากกาหนึ่งด้ามได้ไหม?",
        "englishMeaning": "Can you lend me a pen?"
      },
      {
        "scenario": "ถามหาปากกาที่เพิ่งวางไว้",
        "hanzi": "我的笔怎么不见了？",
        "pinyin": "Wǒ de bǐ zěn me bú jiàn le?",
        "thaiMeaning": "ปากกาของฉันหายไปไหนแล้ว?",
        "englishMeaning": "Why is my pen missing?"
      },
      {
        "scenario": "บอกให้ใช้ปากกาสีดำกรอกเอกสาร",
        "hanzi": "请用黑色的笔填写。",
        "pinyin": "Qǐng yòng hēi sè de bǐ tián xiě.",
        "thaiMeaning": "กรุณาใช้ปากกาสีดำกรอกข้อมูล",
        "englishMeaning": "Please fill in with black pen."
      }
    ]
  },
  {
    "id": "v65",
    "hanzi": "桌子",
    "pinyin": "zhuōzi",
    "thaiMeaning": "โต๊ะ",
    "englishMeaning": "table",
    "example": {
      "hanzi": "在桌子上。",
      "pinyin": "Zài zhuōzi shang.",
      "thaiMeaning": "วางบนโต๊ะ",
      "englishMeaning": "on the table."
    },
    "examples": [
      {
        "scenario": "บอกตำแหน่งกุญแจ",
        "hanzi": "钥匙在桌子上。",
        "pinyin": "Yào shi zài zhuō zi shàng.",
        "thaiMeaning": "กุญแจอยู่บนโต๊ะ",
        "englishMeaning": "The key is on the table."
      },
      {
        "scenario": "ขอให้ช่วยเช็ดโต๊ะ",
        "hanzi": "吃完饭后请把桌子擦干净。",
        "pinyin": "Chī wán fàn hòu qǐng bǎ zhuō zi cā gān jìng.",
        "thaiMeaning": "หลังกินข้าวช่วยเช็ดโต๊ะให้สะอาด",
        "englishMeaning": "Please wipe the table clean after eating."
      },
      {
        "scenario": "จัดโต๊ะเพิ่มสำหรับแขก",
        "hanzi": "客人很多，我们再搬一张桌子来。",
        "pinyin": "Kè rén hěn duō, wǒ men zài bān yì zhāng zhuō zi lái.",
        "thaiMeaning": "แขกเยอะ พวกเรายกโต๊ะมาเพิ่มอีกตัวกัน",
        "englishMeaning": "There are many guests, so we will bring another table."
      }
    ]
  },
  {
    "id": "v66",
    "hanzi": "椅子",
    "pinyin": "yǐzi",
    "thaiMeaning": "เก้าอี้",
    "englishMeaning": "Chair",
    "example": {
      "hanzi": "坐椅子。",
      "pinyin": "Zuò yǐzi.",
      "thaiMeaning": "นั่งเก้าอี้",
      "englishMeaning": "Sit on a chair."
    },
    "examples": [
      {
        "scenario": "เชิญแขกให้นั่ง",
        "hanzi": "这里有椅子，请坐。",
        "pinyin": "Zhè lǐ yǒu yǐ zi, qǐng zuò.",
        "thaiMeaning": "ตรงนี้มีเก้าอี้ เชิญนั่ง",
        "englishMeaning": "There are chairs here, please sit down."
      },
      {
        "scenario": "ขอเก้าอี้เพิ่มในห้องประชุม",
        "hanzi": "会议室还需要两把椅子。",
        "pinyin": "Huì yì shì hái xū yào liǎng bǎ yǐ zi.",
        "thaiMeaning": "ห้องประชุมยังต้องการเก้าอี้อีกสองตัว",
        "englishMeaning": "The conference room also needs two chairs."
      },
      {
        "scenario": "เตือนเด็กไม่ให้ยืนบนเก้าอี้",
        "hanzi": "不要站在椅子上，太危险了。",
        "pinyin": "Bú yào zhàn zài yǐ zi shàng, tài wēi xiǎn le.",
        "thaiMeaning": "อย่ายืนบนเก้าอี้ อันตรายเกินไป",
        "englishMeaning": "Don't stand on the chair, it's too dangerous."
      }
    ]
  },
  {
    "id": "v67",
    "hanzi": "多少钱",
    "pinyin": "duōshǎo qián",
    "thaiMeaning": "ราคาเท่าไหร่",
    "englishMeaning": "How much",
    "example": {
      "hanzi": "这个多少钱？",
      "pinyin": "Zhège duōshǎo qián?",
      "thaiMeaning": "อันนี้ราคาเท่าไหร่",
      "englishMeaning": "How much does this cost?"
    },
    "examples": [
      {
        "scenario": "ถามราคาสินค้าในร้าน",
        "hanzi": "请问，这件衣服多少钱？",
        "pinyin": "Qǐng wèn, zhè jiàn yī fu duō shǎo qián?",
        "thaiMeaning": "ขอถามหน่อย เสื้อผ้าชิ้นนี้ราคาเท่าไหร่?",
        "englishMeaning": "Excuse me, how much does this dress cost?"
      },
      {
        "scenario": "ถามค่าโดยสารแท็กซี่",
        "hanzi": "坐出租车到机场多少钱？",
        "pinyin": "Zuò chū zū chē dào jī chǎng duō shǎo qián?",
        "thaiMeaning": "นั่งแท็กซี่ไปสนามบินราคาเท่าไหร่?",
        "englishMeaning": "How much does it cost to take a taxi to the airport?"
      },
      {
        "scenario": "ถามราคารวมทั้งหมด",
        "hanzi": "这些东西一共多少钱？",
        "pinyin": "Zhè xiē dōng xī yí gòng duō shǎo qián?",
        "thaiMeaning": "ของทั้งหมดนี้รวมราคาเท่าไหร่?",
        "englishMeaning": "How much do these things cost in total?"
      }
    ]
  },
  {
    "id": "v68",
    "hanzi": "贵",
    "pinyin": "guì",
    "thaiMeaning": "แพง",
    "englishMeaning": "expensive",
    "example": {
      "hanzi": "太贵了。",
      "pinyin": "Tài guì le.",
      "thaiMeaning": "แพงเกินไป",
      "englishMeaning": "Too expensive."
    },
    "examples": [
      {
        "scenario": "เห็นราคาสินค้าสูงเกินงบ",
        "hanzi": "这个包太贵了，我买不起。",
        "pinyin": "Zhè ge bāo tài guì le, wǒ mǎi bù qǐ.",
        "thaiMeaning": "กระเป๋าใบนี้แพงเกินไป ฉันซื้อไม่ไหว",
        "englishMeaning": "This bag is too expensive and I can't afford it."
      },
      {
        "scenario": "เปรียบเทียบราคาสองร้าน",
        "hanzi": "这家店比那家贵一点。",
        "pinyin": "Zhè jiā diàn bǐ nà jiā guì yì diǎn.",
        "thaiMeaning": "ร้านนี้แพงกว่าร้านนั้นนิดหน่อย",
        "englishMeaning": "This store is a little more expensive than that one."
      },
      {
        "scenario": "ถามหาตัวเลือกที่ไม่แพง",
        "hanzi": "有没有不太贵的？",
        "pinyin": "Yǒu méi yǒu bú tài guì de?",
        "thaiMeaning": "มีแบบที่ไม่แพงมากไหม?",
        "englishMeaning": "Is there anything less expensive?"
      }
    ]
  },
  {
    "id": "v69",
    "hanzi": "便宜",
    "pinyin": "piányi",
    "thaiMeaning": "ถูก / ไม่แพง",
    "englishMeaning": "Cheap",
    "example": {
      "hanzi": "便宜一点。",
      "pinyin": "Piányi yìdiǎn.",
      "thaiMeaning": "ถูกลงหน่อย",
      "englishMeaning": "A little cheaper."
    },
    "examples": [
      {
        "scenario": "พบสินค้าราคาถูกในซูเปอร์มาร์เก็ต",
        "hanzi": "这里的水果又新鲜又便宜。",
        "pinyin": "Zhè lǐ de shuǐ guǒ yòu xīn xiān yòu pián yi.",
        "thaiMeaning": "ผลไม้ที่นี่ทั้งสดและราคาถูก",
        "englishMeaning": "The fruits here are fresh and cheap."
      },
      {
        "scenario": "ต่อรองราคากับผู้ขาย",
        "hanzi": "可以再便宜一点吗？",
        "pinyin": "Kě yǐ zài pián yi yì diǎn ma?",
        "thaiMeaning": "ลดให้ถูกลงอีกหน่อยได้ไหม?",
        "englishMeaning": "Can it be cheaper?"
      },
      {
        "scenario": "อธิบายว่าซื้อช่วงลดราคา",
        "hanzi": "这件衣服打折后很便宜。",
        "pinyin": "Zhè jiàn yī fu dǎ zhé hòu hěn pián yi.",
        "thaiMeaning": "เสื้อตัวนี้หลังลดราคาแล้วถูกมาก",
        "englishMeaning": "This dress is very cheap after discount."
      }
    ]
  },
  {
    "id": "v70",
    "hanzi": "发票",
    "pinyin": "fāpiào",
    "thaiMeaning": "ใบเสร็จ / ใบกำกับ",
    "englishMeaning": "bill",
    "example": {
      "hanzi": "要发票。",
      "pinyin": "Yào fāpiào.",
      "thaiMeaning": "ขอใบเสร็จด้วย",
      "englishMeaning": "Ask for an invoice."
    },
    "examples": [
      {
        "scenario": "ขอใบกำกับภาษีหลังชำระเงิน",
        "hanzi": "麻烦给我开发票。",
        "pinyin": "Má fán gěi wǒ kāi fā piào.",
        "thaiMeaning": "รบกวนออกใบกำกับภาษีให้ฉันด้วย",
        "englishMeaning": "Please give me an invoice."
      },
      {
        "scenario": "ถามว่าสามารถออกใบเสร็จได้ไหม",
        "hanzi": "请问，可以开发票吗？",
        "pinyin": "Qǐng wèn, kě yǐ kāi fā piào ma?",
        "thaiMeaning": "ขอถามหน่อย สามารถออกใบกำกับภาษีได้ไหม?",
        "englishMeaning": "Excuse me, can I issue an invoice?"
      },
      {
        "scenario": "เก็บใบเสร็จไว้เบิกบริษัท",
        "hanzi": "这张发票要交给公司。",
        "pinyin": "Zhè zhāng fā piào yào jiāo gěi gōng sī.",
        "thaiMeaning": "ใบกำกับภาษีใบนี้ต้องส่งให้บริษัท",
        "englishMeaning": "This invoice is to be handed over to the company."
      }
    ]
  },
  {
    "id": "v71",
    "hanzi": "早上",
    "pinyin": "zǎoshang",
    "thaiMeaning": "เช้า / ตอนเช้า",
    "englishMeaning": "Morning",
    "example": {
      "hanzi": "早上好。",
      "pinyin": "Zǎoshang hǎo.",
      "thaiMeaning": "อรุณสวัสดิ์",
      "englishMeaning": "Good morning."
    },
    "examples": [
      {
        "scenario": "ทักทายเพื่อนร่วมงานตอนเช้า",
        "hanzi": "早上好，今天来得真早。",
        "pinyin": "Zǎo shàng hǎo, jīn tiān lái de zhēn zǎo.",
        "thaiMeaning": "สวัสดีตอนเช้า วันนี้มาเช้าจัง",
        "englishMeaning": "Good morning, it's so early today."
      },
      {
        "scenario": "เล่ากิจวัตรก่อนทำงาน",
        "hanzi": "我早上七点起床。",
        "pinyin": "Wǒ zǎo shàng qī diǎn qǐ chuáng.",
        "thaiMeaning": "ฉันตื่นเจ็ดโมงเช้า",
        "englishMeaning": "I get up at seven in the morning."
      },
      {
        "scenario": "นัดหมายในช่วงเช้า",
        "hanzi": "我们明天早上见吧。",
        "pinyin": "Wǒ men míng tiān zǎo shàng jiàn ba.",
        "thaiMeaning": "พรุ่งนี้เช้าพวกเราเจอกันนะ",
        "englishMeaning": "Let's meet tomorrow morning."
      }
    ]
  },
  {
    "id": "v72",
    "hanzi": "中午",
    "pinyin": "zhōngwǔ",
    "thaiMeaning": "เที่ยง / ตอนเที่ยง",
    "englishMeaning": "noon",
    "example": {
      "hanzi": "中午吃什么？",
      "pinyin": "Zhōngwǔ chī shénme?",
      "thaiMeaning": "เที่ยงนี้กินอะไร",
      "englishMeaning": "What to eat for lunch?"
    },
    "examples": [
      {
        "scenario": "นัดกินข้าวตอนเที่ยง",
        "hanzi": "我们中午十二点见。",
        "pinyin": "Wǒ men zhōng wǔ shí èr diǎn jiàn.",
        "thaiMeaning": "พวกเราเจอกันตอนเที่ยง",
        "englishMeaning": "We'll meet at twelve noon."
      },
      {
        "scenario": "บอกว่าแดดแรงช่วงเที่ยง",
        "hanzi": "中午的太阳太大了。",
        "pinyin": "Zhōng wǔ de tài yáng tài dà le.",
        "thaiMeaning": "แดดตอนเที่ยงแรงเกินไป",
        "englishMeaning": "The sun is too strong at noon."
      },
      {
        "scenario": "ถามแผนช่วงพักกลางวัน",
        "hanzi": "你中午有时间吗？",
        "pinyin": "Nǐ zhōng wǔ yǒu shí jiān ma?",
        "thaiMeaning": "ตอนเที่ยงคุณมีเวลาไหม?",
        "englishMeaning": "Do you have time at noon?"
      }
    ]
  },
  {
    "id": "v73",
    "hanzi": "下午",
    "pinyin": "xiàwǔ",
    "thaiMeaning": "บ่าย / ตอนบ่าย",
    "englishMeaning": "afternoon",
    "example": {
      "hanzi": "下午开会。",
      "pinyin": "Xiàwǔ kāihuì.",
      "thaiMeaning": "ตอนบ่ายมีประชุม",
      "englishMeaning": "Meeting in the afternoon."
    },
    "examples": [
      {
        "scenario": "แจ้งเวลาประชุม",
        "hanzi": "我们下午两点开会。",
        "pinyin": "Wǒ men xià wǔ liǎng diǎn kāi huì.",
        "thaiMeaning": "พวกเราประชุมบ่ายสองโมง",
        "englishMeaning": "We have a meeting at two o'clock in the afternoon."
      },
      {
        "scenario": "ชวนเพื่อนไปดื่มกาแฟ",
        "hanzi": "下午一起去喝咖啡吧。",
        "pinyin": "Xià wǔ yì qǐ qù hē kā fēi ba.",
        "thaiMeaning": "ตอนบ่ายไปดื่มกาแฟด้วยกันนะ",
        "englishMeaning": "Let's go have coffee together in the afternoon."
      },
      {
        "scenario": "บอกว่าจะส่งงานช่วงบ่าย",
        "hanzi": "我今天下午把报告发给你。",
        "pinyin": "Wǒ jīn tiān xià wǔ bǎ bào gào fā gěi nǐ.",
        "thaiMeaning": "บ่ายวันนี้ฉันจะส่งรายงานให้คุณ",
        "englishMeaning": "I'll send you the report this afternoon."
      }
    ]
  },
  {
    "id": "v74",
    "hanzi": "晚上",
    "pinyin": "wǎnshang",
    "thaiMeaning": "เย็น / ค่ำ",
    "englishMeaning": "night",
    "example": {
      "hanzi": "晚上见。",
      "pinyin": "Wǎnshang jiàn.",
      "thaiMeaning": "เจอกันตอนค่ำ",
      "englishMeaning": "See you tonight."
    },
    "examples": [
      {
        "scenario": "นัดกินข้าวตอนเย็น",
        "hanzi": "今天晚上一起吃饭吗？",
        "pinyin": "Jīn tiān wǎn shàng yì qǐ chī fàn ma?",
        "thaiMeaning": "เย็นนี้ไปกินข้าวด้วยกันไหม?",
        "englishMeaning": "Do you want to have dinner together tonight?"
      },
      {
        "scenario": "เล่านิสัยก่อนนอน",
        "hanzi": "我晚上十一点睡觉。",
        "pinyin": "Wǒ wǎn shàng shí yī diǎn shuì jiào.",
        "thaiMeaning": "ฉันเข้านอนห้าทุ่ม",
        "englishMeaning": "I go to bed at eleven o'clock at night."
      },
      {
        "scenario": "เตือนว่าอากาศเย็นตอนกลางคืน",
        "hanzi": "晚上比较冷，多穿一点。",
        "pinyin": "Wǎn shàng bǐ jiào lěng, duō chuān yì diǎn.",
        "thaiMeaning": "ตอนกลางคืนค่อนข้างหนาว ใส่เสื้อเพิ่มหน่อย",
        "englishMeaning": "It's cold at night, so wear more clothes."
      }
    ]
  },
  {
    "id": "v75",
    "hanzi": "昨天",
    "pinyin": "zuótiān",
    "thaiMeaning": "เมื่อวาน",
    "englishMeaning": "yesterday",
    "example": {
      "hanzi": "昨天没空。",
      "pinyin": "Zuótiān méi kòng.",
      "thaiMeaning": "เมื่อวานไม่ว่าง",
      "englishMeaning": "Not available yesterday."
    },
    "examples": [
      {
        "scenario": "เล่าว่าเมื่อวานไปไหนมา",
        "hanzi": "我昨天去医院了。",
        "pinyin": "Wǒ zuó tiān qù yī yuàn le.",
        "thaiMeaning": "เมื่อวานฉันไปโรงพยาบาลมา",
        "englishMeaning": "I went to the hospital yesterday."
      },
      {
        "scenario": "ถามเรื่องการประชุมเมื่อวาน",
        "hanzi": "昨天的会议怎么样？",
        "pinyin": "Zuó tiān de huì yì zěn me yàng?",
        "thaiMeaning": "การประชุมเมื่อวานเป็นอย่างไรบ้าง?",
        "englishMeaning": "How was yesterday's meeting?"
      },
      {
        "scenario": "ขอโทษที่ไม่ได้รับสาย",
        "hanzi": "对不起，我昨天没看到你的电话。",
        "pinyin": "Duì bù qǐ, wǒ zuó tiān méi kàn dào nǐ de diàn huà.",
        "thaiMeaning": "ขอโทษ เมื่อวานฉันไม่เห็นสายของคุณ",
        "englishMeaning": "Sorry, I didn't see your phone number yesterday."
      }
    ]
  },
  {
    "id": "v76",
    "hanzi": "星期一",
    "pinyin": "xīngqīyī",
    "thaiMeaning": "วันจันทร์",
    "englishMeaning": "Monday",
    "example": {
      "hanzi": "星期一上班。",
      "pinyin": "Xīngqīyī shàngbān.",
      "thaiMeaning": "วันจันทร์ทำงาน",
      "englishMeaning": "Go to work on Monday."
    },
    "examples": [
      {
        "scenario": "บอกวันเริ่มงานในสัปดาห์",
        "hanzi": "我星期一开始上班。",
        "pinyin": "Wǒ xīng qī yī kāi shǐ shàng bān.",
        "thaiMeaning": "ฉันเริ่มงานวันจันทร์",
        "englishMeaning": "I start work on Monday."
      },
      {
        "scenario": "นัดประชุมวันจันทร์หน้า",
        "hanzi": "我们下个星期一开会。",
        "pinyin": "Wǒ men xià gè xīng qī yī kāi huì.",
        "thaiMeaning": "พวกเราประชุมวันจันทร์หน้า",
        "englishMeaning": "We have a meeting next Monday."
      },
      {
        "scenario": "บอกว่าร้านปิดทุกวันจันทร์",
        "hanzi": "这家店星期一不营业。",
        "pinyin": "Zhè jiā diàn xīng qī yī bù yíng yè.",
        "thaiMeaning": "ร้านนี้ไม่เปิดให้บริการวันจันทร์",
        "englishMeaning": "The store is closed on Mondays."
      }
    ]
  },
  {
    "id": "v77",
    "hanzi": "周末",
    "pinyin": "zhōumò",
    "thaiMeaning": "สุดสัปดาห์",
    "englishMeaning": "weekend",
    "example": {
      "hanzi": "周末休息。",
      "pinyin": "Zhōumò xiūxi.",
      "thaiMeaning": "เสาร์อาทิตย์พักผ่อน",
      "englishMeaning": "Weekends off."
    },
    "examples": [
      {
        "scenario": "ถามแผนวันหยุดของเพื่อน",
        "hanzi": "你周末有什么计划？",
        "pinyin": "Nǐ zhōu mò yǒu shén me jì huà?",
        "thaiMeaning": "สุดสัปดาห์คุณมีแผนอะไร?",
        "englishMeaning": "What are your plans for the weekend?"
      },
      {
        "scenario": "ชวนครอบครัวไปเที่ยว",
        "hanzi": "这个周末我们去公园吧。",
        "pinyin": "Zhè ge zhōu mò wǒ men qù gōng yuán ba.",
        "thaiMeaning": "สุดสัปดาห์นี้พวกเราไปสวนสาธารณะกันนะ",
        "englishMeaning": "Let's go to the park this weekend."
      },
      {
        "scenario": "เล่าว่าชอบพักผ่อนอยู่บ้าน",
        "hanzi": "我周末喜欢在家休息。",
        "pinyin": "Wǒ zhōu mò xǐ huan zài jiā xiū xi.",
        "thaiMeaning": "สุดสัปดาห์ฉันชอบพักอยู่บ้าน",
        "englishMeaning": "I like to relax at home on weekends."
      }
    ]
  },
  {
    "id": "v78",
    "hanzi": "点",
    "pinyin": "diǎn",
    "thaiMeaning": "โมง / นาฬิกา",
    "englishMeaning": "point",
    "example": {
      "hanzi": "九点。",
      "pinyin": "Jiǔ diǎn.",
      "thaiMeaning": "9 โมง",
      "englishMeaning": "Nine o'clock."
    },
    "examples": [
      {
        "scenario": "ถามเวลาปัจจุบัน",
        "hanzi": "现在几点了？",
        "pinyin": "Xiàn zài jǐ diǎn le?",
        "thaiMeaning": "ตอนนี้กี่โมงแล้ว?",
        "englishMeaning": "What time is it now?"
      },
      {
        "scenario": "บอกเวลาเริ่มเรียน",
        "hanzi": "我们九点开始上课。",
        "pinyin": "Wǒ men jiǔ diǎn kāi shǐ shàng kè.",
        "thaiMeaning": "พวกเราเริ่มเรียนเก้าโมง",
        "englishMeaning": "We start class at nine o'clock."
      },
      {
        "scenario": "นัดเจอกันครึ่งโมง",
        "hanzi": "下午三点半见。",
        "pinyin": "Xià wǔ sān diǎn bàn jiàn.",
        "thaiMeaning": "เจอกันบ่ายสามโมงครึ่ง",
        "englishMeaning": "See you at 3:30 pm."
      }
    ]
  },
  {
    "id": "v79",
    "hanzi": "分",
    "pinyin": "fēn",
    "thaiMeaning": "นาที",
    "englishMeaning": "point",
    "example": {
      "hanzi": "三十分。",
      "pinyin": "Sānshí fēn.",
      "thaiMeaning": "30 นาที",
      "englishMeaning": "Thirty points."
    },
    "examples": [
      {
        "scenario": "บอกเวลาแบบมีนาที",
        "hanzi": "现在是八点十分。",
        "pinyin": "Xiàn zài shì bā diǎn shí fēn.",
        "thaiMeaning": "ตอนนี้แปดโมงสิบนาที",
        "englishMeaning": "It's ten past eight."
      },
      {
        "scenario": "ขอเวลาเพิ่มเล็กน้อย",
        "hanzi": "请等我五分钟。",
        "pinyin": "Qǐng děng wǒ wǔ fēn zhōng.",
        "thaiMeaning": "กรุณารอฉันห้านาที",
        "englishMeaning": "Please wait for me for five minutes."
      },
      {
        "scenario": "บอกระยะเวลาเดินทาง",
        "hanzi": "从这里走过去要二十分钟。",
        "pinyin": "Cóng zhè lǐ zǒu guò qù yào èr shí fēn zhōng.",
        "thaiMeaning": "เดินจากที่นี่ไปใช้เวลายี่สิบนาที",
        "englishMeaning": "It takes twenty minutes to walk from here."
      }
    ]
  },
  {
    "id": "v80",
    "hanzi": "秒",
    "pinyin": "miǎo",
    "thaiMeaning": "วินาที",
    "englishMeaning": "Second",
    "example": {
      "hanzi": "等几秒。",
      "pinyin": "Děng jǐ miǎo.",
      "thaiMeaning": "รอไม่กี่วินาที",
      "englishMeaning": "Wait a few seconds."
    },
    "examples": [
      {
        "scenario": "ขอให้อีกฝ่ายรอสั้นๆ",
        "hanzi": "请等我十秒。",
        "pinyin": "Qǐng děng wǒ shí miǎo.",
        "thaiMeaning": "กรุณารอฉันสิบวินาที",
        "englishMeaning": "Please wait for me ten seconds."
      },
      {
        "scenario": "นับเวลาการแข่งขัน",
        "hanzi": "他用了十二秒跑到终点。",
        "pinyin": "Tā yòng le shí èr miǎo pǎo dào zhōng diǎn.",
        "thaiMeaning": "เขาใช้เวลาสิบสองวินาทีวิ่งถึงเส้นชัย",
        "englishMeaning": "He ran to the finish line in twelve seconds."
      },
      {
        "scenario": "บอกว่าเหตุการณ์เกิดเร็วมาก",
        "hanzi": "事情在几秒内就发生了。",
        "pinyin": "Shì qíng zài jǐ miǎo nèi jiù fā shēng le.",
        "thaiMeaning": "เหตุการณ์เกิดขึ้นภายในไม่กี่วินาที",
        "englishMeaning": "It happened within seconds."
      }
    ]
  },
  {
    "id": "v81",
    "hanzi": "米饭",
    "pinyin": "mǐfàn",
    "thaiMeaning": "ข้าวสวย",
    "englishMeaning": "rice",
    "example": {
      "hanzi": "吃米饭。",
      "pinyin": "Chī mǐfàn.",
      "thaiMeaning": "กินข้าวสวย",
      "englishMeaning": "Eat rice."
    },
    "examples": [
      {
        "scenario": "สั่งข้าวในร้านอาหาร",
        "hanzi": "请给我一碗米饭。",
        "pinyin": "Qǐng gěi wǒ yì wǎn mǐ fàn.",
        "thaiMeaning": "ขอข้าวสวยหนึ่งถ้วย",
        "englishMeaning": "Please give me a bowl of rice."
      },
      {
        "scenario": "ถามว่าอยากเพิ่มข้าวไหม",
        "hanzi": "你还要米饭吗？",
        "pinyin": "Nǐ hái yào mǐ fàn ma?",
        "thaiMeaning": "คุณเอาข้าวเพิ่มอีกไหม?",
        "englishMeaning": "Do you want more rice?"
      },
      {
        "scenario": "เล่าว่าชอบกินข้าวกับกับข้าว",
        "hanzi": "我喜欢吃米饭配菜。",
        "pinyin": "Wǒ xǐ huan chī mǐ fàn pèi cài.",
        "thaiMeaning": "ฉันชอบกินข้าวสวยกับกับข้าว",
        "englishMeaning": "I like to eat it with rice."
      }
    ]
  },
  {
    "id": "v82",
    "hanzi": "面条",
    "pinyin": "miàntiáo",
    "thaiMeaning": "ก๋วยเตี๋ยว / บะหมี่",
    "englishMeaning": "Noodle",
    "example": {
      "hanzi": "吃面条。",
      "pinyin": "Chī miàntiáo.",
      "thaiMeaning": "กินบะหมี่",
      "englishMeaning": "Eat noodles."
    },
    "examples": [
      {
        "scenario": "สั่งบะหมี่ในร้าน",
        "hanzi": "我要一碗牛肉面条。",
        "pinyin": "Wǒ yào yì wǎn niú ròu miàn tiáo.",
        "thaiMeaning": "ฉันขอบะหมี่เนื้อหนึ่งชาม",
        "englishMeaning": "I'd like a bowl of beef noodles."
      },
      {
        "scenario": "ถามว่าอยากกินข้าวหรือบะหมี่",
        "hanzi": "你想吃米饭还是面条？",
        "pinyin": "Nǐ xiǎng chī mǐ fàn hái shì miàn tiáo?",
        "thaiMeaning": "คุณอยากกินข้าวหรือบะหมี่?",
        "englishMeaning": "Would you like rice or noodles?"
      },
      {
        "scenario": "ชมบะหมี่ที่คนในบ้านทำ",
        "hanzi": "你做的面条很好吃。",
        "pinyin": "Nǐ zuò de miàn tiáo hěn hǎo chī.",
        "thaiMeaning": "บะหมี่ที่คุณทำอร่อยมาก",
        "englishMeaning": "The noodles you make are delicious."
      }
    ]
  },
  {
    "id": "v83",
    "hanzi": "菜",
    "pinyin": "cài",
    "thaiMeaning": "ผัก / กับข้าว",
    "englishMeaning": "vegetable",
    "example": {
      "hanzi": "点菜。",
      "pinyin": "Diǎn cài.",
      "thaiMeaning": "สั่งกับข้าว",
      "englishMeaning": "Order food."
    },
    "examples": [
      {
        "scenario": "ถามว่ามีเมนูแนะนำไหม",
        "hanzi": "今天有什么推荐的菜？",
        "pinyin": "Jīn tiān yǒu shén me tuī jiàn de cài?",
        "thaiMeaning": "วันนี้มีเมนูอะไรแนะนำบ้าง?",
        "englishMeaning": "What dishes do you recommend today?"
      },
      {
        "scenario": "ชมกับข้าวที่เพื่อนทำ",
        "hanzi": "这道菜味道很好。",
        "pinyin": "Zhè dào cài wèi dào hěn hǎo.",
        "thaiMeaning": "อาหารจานนี้รสชาติดีมาก",
        "englishMeaning": "This dish tastes great."
      },
      {
        "scenario": "ไปตลาดซื้อผัก",
        "hanzi": "我去市场买点菜。",
        "pinyin": "Wǒ qù shì chǎng mǎi diǎn cài.",
        "thaiMeaning": "ฉันจะไปตลาดซื้อผักหน่อย",
        "englishMeaning": "I went to the market to buy some food."
      }
    ]
  },
  {
    "id": "v84",
    "hanzi": "水果",
    "pinyin": "shuǐguǒ",
    "thaiMeaning": "ผลไม้",
    "englishMeaning": "fruit",
    "example": {
      "hanzi": "买水果。",
      "pinyin": "Mǎi shuǐguǒ.",
      "thaiMeaning": "ซื้อผลไม้",
      "englishMeaning": "Buy fruit."
    },
    "examples": [
      {
        "scenario": "ซื้อผลไม้หลังเลิกงาน",
        "hanzi": "下班后我去买水果。",
        "pinyin": "Xià bān hòu wǒ qù mǎi shuǐ guǒ.",
        "thaiMeaning": "หลังเลิกงานฉันจะไปซื้อผลไม้",
        "englishMeaning": "I go to buy fruit after get off work."
      },
      {
        "scenario": "ชวนแขกกินผลไม้",
        "hanzi": "来，吃点水果吧。",
        "pinyin": "Lái, chī diǎn shuǐ guǒ ba.",
        "thaiMeaning": "มา กินผลไม้สักหน่อยนะ",
        "englishMeaning": "Come, have some fruit."
      },
      {
        "scenario": "พูดถึงนิสัยเพื่อสุขภาพ",
        "hanzi": "我每天都会吃一些水果。",
        "pinyin": "Wǒ měi tiān dōu huì chī yì xiē shuǐ guǒ.",
        "thaiMeaning": "ฉันกินผลไม้เล็กน้อยทุกวัน",
        "englishMeaning": "I eat some fruit every day."
      }
    ]
  },
  {
    "id": "v85",
    "hanzi": "苹果",
    "pinyin": "píngguǒ",
    "thaiMeaning": "แอปเปิ้ล",
    "englishMeaning": "apple",
    "example": {
      "hanzi": "吃苹果。",
      "pinyin": "Chī píngguǒ.",
      "thaiMeaning": "กินแอปเปิ้ล",
      "englishMeaning": "Eat an apple."
    },
    "examples": [
      {
        "scenario": "ซื้อแอปเปิลที่ตลาด",
        "hanzi": "我要买三斤苹果。",
        "pinyin": "Wǒ yào mǎi sān jīn píng guǒ.",
        "thaiMeaning": "ฉันต้องการซื้อแอปเปิลสามจิน",
        "englishMeaning": "I want to buy three kilograms of apples."
      },
      {
        "scenario": "แบ่งแอปเปิลให้เพื่อน",
        "hanzi": "这个苹果给你吃。",
        "pinyin": "Zhè ge píng guǒ gěi nǐ chī.",
        "thaiMeaning": "แอปเปิลลูกนี้ให้คุณกิน",
        "englishMeaning": "This apple is for you to eat."
      },
      {
        "scenario": "บอกว่าแอปเปิลยังไม่สุกหวาน",
        "hanzi": "这个苹果有点酸。",
        "pinyin": "Zhè ge píng guǒ yǒu diǎn suān.",
        "thaiMeaning": "แอปเปิลลูกนี้เปรี้ยวนิดหน่อย",
        "englishMeaning": "This apple is a bit sour."
      }
    ]
  },
  {
    "id": "v86",
    "hanzi": "牛肉",
    "pinyin": "niúròu",
    "thaiMeaning": "เนื้อวัว",
    "englishMeaning": "beef",
    "example": {
      "hanzi": "吃牛肉。",
      "pinyin": "Chī niúròu.",
      "thaiMeaning": "กินเนื้อวัว",
      "englishMeaning": "Eat beef."
    },
    "examples": [
      {
        "scenario": "สั่งอาหารในร้าน",
        "hanzi": "我要一份牛肉炒饭。",
        "pinyin": "Wǒ yào yí fèn niú ròu chǎo fàn.",
        "thaiMeaning": "ฉันขอข้าวผัดเนื้อหนึ่งจาน",
        "englishMeaning": "I'd like a beef fried rice."
      },
      {
        "scenario": "ถามว่าเพื่อนกินเนื้อวัวไหม",
        "hanzi": "你吃牛肉吗？",
        "pinyin": "Nǐ chī niú ròu ma?",
        "thaiMeaning": "คุณกินเนื้อวัวไหม?",
        "englishMeaning": "Do you eat beef?"
      },
      {
        "scenario": "ซื้อเนื้อวัวไปทำอาหาร",
        "hanzi": "我买了牛肉，晚上做汤。",
        "pinyin": "Wǒ mǎi le niú ròu, wǎn shàng zuò tāng.",
        "thaiMeaning": "ฉันซื้อเนื้อวัวมา ตอนเย็นจะทำแกงจืด",
        "englishMeaning": "I bought beef and made soup tonight."
      }
    ]
  },
  {
    "id": "v87",
    "hanzi": "鸡肉",
    "pinyin": "jīròu",
    "thaiMeaning": "เนื้อไก่",
    "englishMeaning": "chicken",
    "example": {
      "hanzi": "吃鸡肉。",
      "pinyin": "Chī jīròu.",
      "thaiMeaning": "กินเนื้อไก่",
      "englishMeaning": "Eat chicken."
    },
    "examples": [
      {
        "scenario": "เลือกเมนูที่ร้านอาหาร",
        "hanzi": "我想吃鸡肉，不要牛肉。",
        "pinyin": "Wǒ xiǎng chī jī ròu, bú yào niú ròu.",
        "thaiMeaning": "ฉันอยากกินเนื้อไก่ ไม่เอาเนื้อวัว",
        "englishMeaning": "I want chicken, not beef."
      },
      {
        "scenario": "ชมอาหารที่ปรุงสุกกำลังดี",
        "hanzi": "这个鸡肉很嫩。",
        "pinyin": "Zhè ge jī ròu hěn nèn.",
        "thaiMeaning": "เนื้อไก่นี้นุ่มมาก",
        "englishMeaning": "This chicken is very tender."
      },
      {
        "scenario": "เตรียมอาหารกลางวัน",
        "hanzi": "午饭我做了鸡肉和蔬菜。",
        "pinyin": "Wǔ fàn wǒ zuò le jī ròu hé shū cài.",
        "thaiMeaning": "มื้อเที่ยงฉันทำไก่กับผัก",
        "englishMeaning": "I made chicken and vegetables for lunch."
      }
    ]
  },
  {
    "id": "v88",
    "hanzi": "鱼",
    "pinyin": "yú",
    "thaiMeaning": "ปลา",
    "englishMeaning": "fish",
    "example": {
      "hanzi": "吃鱼。",
      "pinyin": "Chī yú.",
      "thaiMeaning": "กินปลา",
      "englishMeaning": "Eat fish."
    },
    "examples": [
      {
        "scenario": "สั่งปลาในร้านอาหาร",
        "hanzi": "这条鱼怎么做最好吃？",
        "pinyin": "Zhè tiáo yú zěn me zuò zuì hǎo chī?",
        "thaiMeaning": "ปลาตัวนี้ทำแบบไหนอร่อยที่สุด?",
        "englishMeaning": "What's the best way to cook this fish?"
      },
      {
        "scenario": "ซื้อปลาสดที่ตลาด",
        "hanzi": "今天市场的鱼很新鲜。",
        "pinyin": "Jīn tiān shì chǎng de yú hěn xīn xiān.",
        "thaiMeaning": "ปลาที่ตลาดวันนี้สดมาก",
        "englishMeaning": "The fish in the market today is very fresh."
      },
      {
        "scenario": "บอกเด็กให้ระวังก้างปลา",
        "hanzi": "吃鱼的时候要小心鱼刺。",
        "pinyin": "Chī yú de shí hòu yào xiǎo xīn yú cì.",
        "thaiMeaning": "เวลากินปลาต้องระวังก้างปลา",
        "englishMeaning": "Be careful about fish bones when eating fish."
      }
    ]
  },
  {
    "id": "v89",
    "hanzi": "茶",
    "pinyin": "chá",
    "thaiMeaning": "ชา / น้ำชา",
    "englishMeaning": "Tea",
    "example": {
      "hanzi": "喝绿茶。",
      "pinyin": "Hē lǜchá.",
      "thaiMeaning": "ดื่มชาเขียว",
      "englishMeaning": "Drink green tea."
    },
    "examples": [
      {
        "scenario": "ต้อนรับแขกที่บ้าน",
        "hanzi": "请坐，喝杯茶吧。",
        "pinyin": "Qǐng zuò, hē bēi chá ba.",
        "thaiMeaning": "เชิญนั่ง ดื่มชาสักแก้วนะ",
        "englishMeaning": "Please sit down and have a cup of tea."
      },
      {
        "scenario": "ถามความต้องการในร้านเครื่องดื่ม",
        "hanzi": "你想喝热茶还是冰茶？",
        "pinyin": "Nǐ xiǎng hē rè chá hái shì bīng chá?",
        "thaiMeaning": "คุณอยากดื่มชาร้อนหรือชาเย็น?",
        "englishMeaning": "Would you like hot tea or iced tea?"
      },
      {
        "scenario": "เล่านิสัยหลังอาหาร",
        "hanzi": "我吃完饭喜欢喝茶。",
        "pinyin": "Wǒ chī wán fàn xǐ huan hē chá.",
        "thaiMeaning": "ฉันชอบดื่มชาหลังกินข้าว",
        "englishMeaning": "I like to drink tea after eating."
      }
    ]
  },
  {
    "id": "v90",
    "hanzi": "牛奶",
    "pinyin": "niúnǎi",
    "thaiMeaning": "นมสด",
    "englishMeaning": "milk",
    "example": {
      "hanzi": "喝牛奶。",
      "pinyin": "Hē niúnǎi.",
      "thaiMeaning": "ดื่มนมสด",
      "englishMeaning": "Drink milk."
    },
    "examples": [
      {
        "scenario": "เตรียมอาหารเช้า",
        "hanzi": "早餐我喝了一杯牛奶。",
        "pinyin": "Zǎo cān wǒ hē le yì bēi niú nǎi.",
        "thaiMeaning": "มื้อเช้าฉันดื่มนมหนึ่งแก้ว",
        "englishMeaning": "I drank a glass of milk for breakfast."
      },
      {
        "scenario": "พบว่านมในตู้เย็นหมด",
        "hanzi": "冰箱里没有牛奶了。",
        "pinyin": "Bīng xiāng lǐ méi yǒu niú nǎi le.",
        "thaiMeaning": "ในตู้เย็นไม่มีนมแล้ว",
        "englishMeaning": "There is no milk in the refrigerator."
      },
      {
        "scenario": "ถามว่าจะอุ่นนมไหม",
        "hanzi": "要不要把牛奶热一下？",
        "pinyin": "Yào bu yào bǎ niú nǎi rè yí xià?",
        "thaiMeaning": "จะอุ่นนมสักหน่อยไหม?",
        "englishMeaning": "Do you want to heat the milk?"
      }
    ]
  },
  {
    "id": "v91",
    "hanzi": "医院",
    "pinyin": "yīyuàn",
    "thaiMeaning": "โรงพยาบาล",
    "englishMeaning": "Hospital",
    "example": {
      "hanzi": "去医院。",
      "pinyin": "Qù yīyuàn.",
      "thaiMeaning": "ไปโรงพยาบาล",
      "englishMeaning": "Go to the hospital."
    },
    "examples": [
      {
        "scenario": "พาคนป่วยไปพบแพทย์",
        "hanzi": "他发烧了，我带他去医院。",
        "pinyin": "Tā fā shāo le, wǒ dài tā qù yī yuàn.",
        "thaiMeaning": "เขามีไข้ ฉันจะพาเขาไปโรงพยาบาล",
        "englishMeaning": "He had a fever and I took him to the hospital."
      },
      {
        "scenario": "ถามทางไปโรงพยาบาล",
        "hanzi": "请问，医院怎么走？",
        "pinyin": "Qǐng wèn, yī yuàn zěn me zǒu?",
        "thaiMeaning": "ขอถามหน่อย โรงพยาบาลไปทางไหน?",
        "englishMeaning": "Excuse me, how to get to the hospital?"
      },
      {
        "scenario": "บอกตำแหน่งโรงพยาบาล",
        "hanzi": "医院就在银行旁边。",
        "pinyin": "Yī yuàn jiù zài yín háng páng biān.",
        "thaiMeaning": "โรงพยาบาลอยู่ข้างธนาคาร",
        "englishMeaning": "The hospital is next to the bank."
      }
    ]
  },
  {
    "id": "v92",
    "hanzi": "车站",
    "pinyin": "chēzhàn",
    "thaiMeaning": "สถานีรถ",
    "englishMeaning": "station",
    "example": {
      "hanzi": "在车站。",
      "pinyin": "Zài chēzhàn.",
      "thaiMeaning": "อยู่ที่สถานี",
      "englishMeaning": "At the station."
    },
    "examples": [
      {
        "scenario": "นัดพบกันที่สถานี",
        "hanzi": "我们在车站门口见。",
        "pinyin": "Wǒ men zài chē zhàn mén kǒu jiàn.",
        "thaiMeaning": "พวกเราเจอกันหน้าสถานี",
        "englishMeaning": "We'll meet at the station gate."
      },
      {
        "scenario": "ถามระยะทางไปสถานี",
        "hanzi": "这里离车站远吗？",
        "pinyin": "Zhè lǐ lí chē zhàn yuǎn ma?",
        "thaiMeaning": "จากที่นี่ถึงสถานีไกลไหม?",
        "englishMeaning": "Is this far from the station?"
      },
      {
        "scenario": "รีบไปให้ทันรถ",
        "hanzi": "快一点，车站马上就到了。",
        "pinyin": "Kuài yì diǎn, chē zhàn mǎ shàng jiù dào le.",
        "thaiMeaning": "เร็วหน่อย ใกล้ถึงสถานีแล้ว",
        "englishMeaning": "Hurry up, the station will be here soon."
      }
    ]
  },
  {
    "id": "v93",
    "hanzi": "机场",
    "pinyin": "jīchǎng",
    "thaiMeaning": "สนามบิน",
    "englishMeaning": "Airport",
    "example": {
      "hanzi": "去机场。",
      "pinyin": "Qù jīchǎng.",
      "thaiMeaning": "ไปสนามบิน",
      "englishMeaning": "Go to the airport."
    },
    "examples": [
      {
        "scenario": "เดินทางไปสนามบินแต่เช้า",
        "hanzi": "我明天早上去机场。",
        "pinyin": "Wǒ míng tiān zǎo shàng qù jī chǎng.",
        "thaiMeaning": "พรุ่งนี้เช้าฉันจะไปสนามบิน",
        "englishMeaning": "I'm going to the airport tomorrow morning."
      },
      {
        "scenario": "ไปรับเพื่อนที่สนามบิน",
        "hanzi": "我去机场接朋友。",
        "pinyin": "Wǒ qù jī chǎng jiē péng yǒu.",
        "thaiMeaning": "ฉันจะไปรับเพื่อนที่สนามบิน",
        "englishMeaning": "I went to the airport to pick up a friend."
      },
      {
        "scenario": "ถามเวลาเดินทางถึงสนามบิน",
        "hanzi": "从酒店到机场要多久？",
        "pinyin": "Cóng jiǔ diàn dào jī chǎng yào duō jiǔ?",
        "thaiMeaning": "จากโรงแรมไปสนามบินใช้เวลานานเท่าไร?",
        "englishMeaning": "How long does it take to get from the hotel to the airport?"
      }
    ]
  },
  {
    "id": "v94",
    "hanzi": "酒店",
    "pinyin": "jiǔdiàn",
    "thaiMeaning": "โรงแรม",
    "englishMeaning": "hotel",
    "example": {
      "hanzi": "住酒店。",
      "pinyin": "Zhù jiǔdiàn.",
      "thaiMeaning": "พักโรงแรม",
      "englishMeaning": "Stay in a hotel."
    },
    "examples": [
      {
        "scenario": "เช็กอินที่โรงแรม",
        "hanzi": "你好，我在这家酒店订了房间。",
        "pinyin": "Nǐ hǎo, wǒ zài zhè jiā jiǔ diàn dìng le fáng jiān.",
        "thaiMeaning": "สวัสดี ฉันจองห้องไว้ที่โรงแรมนี้",
        "englishMeaning": "Hello, I have booked a room in this hotel."
      },
      {
        "scenario": "ถามว่ารวมอาหารเช้าหรือไม่",
        "hanzi": "酒店的房间包括早餐吗？",
        "pinyin": "Jiǔ diàn de fáng jiān bāo kuò zǎo cān ma?",
        "thaiMeaning": "ห้องพักของโรงแรมรวมอาหารเช้าไหม?",
        "englishMeaning": "Does the hotel room include breakfast?"
      },
      {
        "scenario": "ขอให้แท็กซี่ไปส่งโรงแรม",
        "hanzi": "麻烦送我到这家酒店。",
        "pinyin": "Má fán sòng wǒ dào zhè jiā jiǔ diàn.",
        "thaiMeaning": "รบกวนไปส่งฉันที่โรงแรมนี้",
        "englishMeaning": "Please send me to this hotel."
      }
    ]
  },
  {
    "id": "v95",
    "hanzi": "饭店",
    "pinyin": "fàndiàn",
    "thaiMeaning": "ร้านอาหาร",
    "englishMeaning": "Restaurant",
    "example": {
      "hanzi": "去饭店。",
      "pinyin": "Qù fàndiàn.",
      "thaiMeaning": "ไปร้านอาหาร",
      "englishMeaning": "Go to a restaurant."
    },
    "examples": [
      {
        "scenario": "ชวนเพื่อนไปร้านอาหารใหม่",
        "hanzi": "附近新开了一家饭店。",
        "pinyin": "Fù jìn xīn kāi le yì jiā fàn diàn.",
        "thaiMeaning": "แถวนี้มีร้านอาหารเปิดใหม่หนึ่งร้าน",
        "englishMeaning": "A new restaurant has opened nearby."
      },
      {
        "scenario": "จองโต๊ะล่วงหน้า",
        "hanzi": "我在饭店订了六点的位子。",
        "pinyin": "Wǒ zài fàn diàn dìng le liù diǎn de wèi zǐ.",
        "thaiMeaning": "ฉันจองโต๊ะที่ร้านอาหารไว้ตอนหกโมง",
        "englishMeaning": "I made a reservation at the hotel for six o'clock."
      },
      {
        "scenario": "ถามว่าร้านอยู่ไกลไหม",
        "hanzi": "那家饭店离这里远不远？",
        "pinyin": "Nà jiā fàn diàn lí zhè lǐ yuǎn bu yuǎn?",
        "thaiMeaning": "ร้านอาหารนั้นอยู่ไกลจากที่นี่ไหม?",
        "englishMeaning": "Is that hotel far from here?"
      }
    ]
  },
  {
    "id": "v96",
    "hanzi": "商店",
    "pinyin": "shāngdiàn",
    "thaiMeaning": "ร้านค้า",
    "englishMeaning": "shop",
    "example": {
      "hanzi": "逛商店。",
      "pinyin": "Guàng shāngdiàn.",
      "thaiMeaning": "เดินดูร้านค้า",
      "englishMeaning": "Go shopping."
    },
    "examples": [
      {
        "scenario": "ถามเวลาเปิดร้าน",
        "hanzi": "这家商店几点开门？",
        "pinyin": "Zhè jiā shāng diàn jǐ diǎn kāi mén?",
        "thaiMeaning": "ร้านนี้เปิดกี่โมง?",
        "englishMeaning": "When does this store open?"
      },
      {
        "scenario": "ไปซื้อของใช้ใกล้บ้าน",
        "hanzi": "我去楼下的商店买水。",
        "pinyin": "Wǒ qù lóu xià de shāng diàn mǎi shuǐ.",
        "thaiMeaning": "ฉันจะไปร้านค้าข้างล่างซื้อน้ำ",
        "englishMeaning": "I went to the shop downstairs to buy water."
      },
      {
        "scenario": "พบว่าร้านปิดแล้ว",
        "hanzi": "商店已经关门了。",
        "pinyin": "Shāng diàn yǐ jīng guān mén le.",
        "thaiMeaning": "ร้านค้าปิดแล้ว",
        "englishMeaning": "The store has been closed."
      }
    ]
  },
  {
    "id": "v97",
    "hanzi": "学校",
    "pinyin": "xuéxiào",
    "thaiMeaning": "โรงเรียน",
    "englishMeaning": "School",
    "example": {
      "hanzi": "去学校。",
      "pinyin": "Qù xuéxiào.",
      "thaiMeaning": "ไปโรงเรียน",
      "englishMeaning": "Go to school."
    },
    "examples": [
      {
        "scenario": "บอกเส้นทางไปโรงเรียน",
        "hanzi": "学校在公园对面。",
        "pinyin": "Xué xiào zài gōng yuán duì miàn.",
        "thaiMeaning": "โรงเรียนอยู่ตรงข้ามสวนสาธารณะ",
        "englishMeaning": "The school is opposite the park."
      },
      {
        "scenario": "ไปรับลูกหลังเลิกเรียน",
        "hanzi": "我下午去学校接孩子。",
        "pinyin": "Wǒ xià wǔ qù xué xiào jiē hái zi.",
        "thaiMeaning": "ตอนบ่ายฉันจะไปรับลูกที่โรงเรียน",
        "englishMeaning": "I go to school to pick up the kids in the afternoon."
      },
      {
        "scenario": "เล่าระยะทางจากบ้าน",
        "hanzi": "我家离学校很近。",
        "pinyin": "Wǒ jiā lí xué xiào hěn jìn.",
        "thaiMeaning": "บ้านฉันอยู่ใกล้โรงเรียนมาก",
        "englishMeaning": "My home is very close to the school."
      }
    ]
  },
  {
    "id": "v98",
    "hanzi": "车",
    "pinyin": "chē",
    "thaiMeaning": "รถยนต์",
    "englishMeaning": "car",
    "example": {
      "hanzi": "开车。",
      "pinyin": "Kāi chē.",
      "thaiMeaning": "ขับรถ",
      "englishMeaning": "drive."
    },
    "examples": [
      {
        "scenario": "ถามว่าเป็นรถของใคร",
        "hanzi": "门口那辆车是谁的？",
        "pinyin": "Mén kǒu nà liàng chē shì shuí de?",
        "thaiMeaning": "รถคันที่อยู่หน้าประตูเป็นของใคร?",
        "englishMeaning": "Whose car is at the door?"
      },
      {
        "scenario": "บอกว่ารถเสียระหว่างทาง",
        "hanzi": "我的车在路上坏了。",
        "pinyin": "Wǒ de chē zài lù shang huài le.",
        "thaiMeaning": "รถของฉันเสียอยู่ระหว่างทาง",
        "englishMeaning": "My car broke down on the road."
      },
      {
        "scenario": "เตือนให้ระวังรถตอนข้ามถนน",
        "hanzi": "过马路时要注意车。",
        "pinyin": "Guò mǎ lù shí yào zhù yì chē.",
        "thaiMeaning": "ตอนข้ามถนนต้องระวังรถ",
        "englishMeaning": "Watch out for cars when crossing the road."
      }
    ]
  },
  {
    "id": "v99",
    "hanzi": "飞机",
    "pinyin": "fēijī",
    "thaiMeaning": "เครื่องบิน",
    "englishMeaning": "airplane",
    "example": {
      "hanzi": "坐飞机。",
      "pinyin": "Zuò fēijī.",
      "thaiMeaning": "นั่งเครื่องบิน",
      "englishMeaning": "Take a plane."
    },
    "examples": [
      {
        "scenario": "บอกเวลาเครื่องออก",
        "hanzi": "飞机下午三点起飞。",
        "pinyin": "Fēi jī xià wǔ sān diǎn qǐ fēi.",
        "thaiMeaning": "เครื่องบินออกตอนบ่ายสามโมง",
        "englishMeaning": "The plane takes off at three o'clock in the afternoon."
      },
      {
        "scenario": "เล่าประสบการณ์ขึ้นเครื่องครั้งแรก",
        "hanzi": "这是我第一次坐飞机。",
        "pinyin": "Zhè shì wǒ dì yī cì zuò fēi jī.",
        "thaiMeaning": "นี่เป็นครั้งแรกที่ฉันนั่งเครื่องบิน",
        "englishMeaning": "This is my first time flying."
      },
      {
        "scenario": "แจ้งว่าเครื่องบินล่าช้า",
        "hanzi": "我们的飞机晚点了。",
        "pinyin": "Wǒ men de fēi jī wǎn diǎn le.",
        "thaiMeaning": "เที่ยวบินของพวกเราล่าช้า",
        "englishMeaning": "Our plane is delayed."
      }
    ]
  },
  {
    "id": "v100",
    "hanzi": "出租车",
    "pinyin": "chūzūchē",
    "thaiMeaning": "รถแท็กซี่",
    "englishMeaning": "taxi",
    "example": {
      "hanzi": "打出租车。",
      "pinyin": "Dǎ chūzūchē.",
      "thaiMeaning": "เรียกแท็กซี่",
      "englishMeaning": "Take a taxi."
    },
    "examples": [
      {
        "scenario": "เรียกแท็กซี่ไปสนามบิน",
        "hanzi": "请帮我叫一辆出租车。",
        "pinyin": "Qǐng bāng wǒ jiào yí liàng chū zū chē.",
        "thaiMeaning": "ช่วยเรียกแท็กซี่ให้ฉันหนึ่งคัน",
        "englishMeaning": "Please call me a taxi."
      },
      {
        "scenario": "บอกคนขับให้จอดข้างหน้า",
        "hanzi": "师傅，请把出租车停在前面。",
        "pinyin": "Shī fu, qǐng bǎ chū zū chē tíng zài qián miàn.",
        "thaiMeaning": "คนขับครับ กรุณาจอดแท็กซี่ข้างหน้า",
        "englishMeaning": "Master, please park the taxi in front."
      },
      {
        "scenario": "เล่าว่าลืมของบนรถ",
        "hanzi": "我把手机忘在出租车里了。",
        "pinyin": "Wǒ bǎ shǒu jī wàng zài chū zū chē lǐ le.",
        "thaiMeaning": "ฉันลืมโทรศัพท์ไว้ในแท็กซี่",
        "englishMeaning": "I left my phone in the taxi."
      }
    ]
  },
  {
    "id": "v101",
    "hanzi": "人",
    "pinyin": "rén",
    "thaiMeaning": "คน / มนุษย์",
    "englishMeaning": "people",
    "example": {
      "hanzi": "很多人。",
      "pinyin": "Hěn duō rén.",
      "thaiMeaning": "คนเยอะมาก",
      "englishMeaning": "Many people."
    },
    "examples": [
      {
        "scenario": "บอกว่าร้านมีคนเยอะ",
        "hanzi": "今天商店里人很多。",
        "pinyin": "Jīn tiān shāng diàn lǐ rén hěn duō.",
        "thaiMeaning": "วันนี้ในร้านมีคนเยอะมาก",
        "englishMeaning": "There are many people in the store today."
      },
      {
        "scenario": "ถามจำนวนคนที่จะมากินข้าว",
        "hanzi": "晚上有几个人来吃饭？",
        "pinyin": "Wǎn shàng yǒu jǐ gè rén lái chī fàn?",
        "thaiMeaning": "ตอนเย็นจะมีกี่คนมากินข้าว?",
        "englishMeaning": "How many people are coming for dinner tonight?"
      },
      {
        "scenario": "บรรยายคนที่กำลังตามหา",
        "hanzi": "我要找的人穿着白衣服。",
        "pinyin": "Wǒ yào zhǎo de rén chuān zhe bái yī fu.",
        "thaiMeaning": "คนที่ฉันกำลังหาสวมเสื้อสีขาว",
        "englishMeaning": "The person I'm looking for is wearing white clothes."
      }
    ]
  },
  {
    "id": "v102",
    "hanzi": "朋友",
    "pinyin": "péngyou",
    "thaiMeaning": "เพื่อน",
    "englishMeaning": "friend",
    "example": {
      "hanzi": "找朋友。",
      "pinyin": "Zhǎo péngyou.",
      "thaiMeaning": "หาเพื่อน",
      "englishMeaning": "Find friends."
    },
    "examples": [
      {
        "scenario": "แนะนำเพื่อนให้ครอบครัวรู้จัก",
        "hanzi": "这是我的好朋友。",
        "pinyin": "Zhè shì wǒ de hǎo péng yǒu.",
        "thaiMeaning": "นี่คือเพื่อนสนิทของฉัน",
        "englishMeaning": "This is my good friend."
      },
      {
        "scenario": "นัดพบเพื่อนในวันหยุด",
        "hanzi": "周末我要和朋友见面。",
        "pinyin": "Zhōu mò wǒ yào hé péng yǒu jiàn miàn.",
        "thaiMeaning": "สุดสัปดาห์ฉันจะไปพบเพื่อน",
        "englishMeaning": "I'm going to meet up with friends on the weekend."
      },
      {
        "scenario": "ขอบคุณเพื่อนที่ช่วยเหลือ",
        "hanzi": "有你这样的朋友真好。",
        "pinyin": "Yǒu nǐ zhè yàng de péng yǒu zhēn hǎo.",
        "thaiMeaning": "มีเพื่อนอย่างคุณนี่ดีจริงๆ",
        "englishMeaning": "It's great to have a friend like you."
      }
    ]
  },
  {
    "id": "v103",
    "hanzi": "老师",
    "pinyin": "lǎoshī",
    "thaiMeaning": "คุณครู / อาจารย์",
    "englishMeaning": "teacher",
    "example": {
      "hanzi": "老师好。",
      "pinyin": "Lǎoshī hǎo.",
      "thaiMeaning": "สวัสดีครับครู",
      "englishMeaning": "Hello teacher."
    },
    "examples": [
      {
        "scenario": "ทักทายครูก่อนเข้าเรียน",
        "hanzi": "老师，早上好！",
        "pinyin": "Lǎo shī, zǎo shàng hǎo!",
        "thaiMeaning": "อาจารย์ สวัสดีตอนเช้า!",
        "englishMeaning": "Teacher, good morning!"
      },
      {
        "scenario": "ถามครูเมื่อไม่เข้าใจ",
        "hanzi": "这个问题我不懂，想问老师。",
        "pinyin": "Zhè ge wèn tí wǒ bù dǒng, xiǎng wèn lǎo shī.",
        "thaiMeaning": "ฉันไม่เข้าใจคำถามนี้ อยากถามอาจารย์",
        "englishMeaning": "I don't understand this question and would like to ask the teacher."
      },
      {
        "scenario": "บอกว่าครูสอนเข้าใจง่าย",
        "hanzi": "我们的老师讲得很清楚。",
        "pinyin": "Wǒ men de lǎo shī jiǎng dé hěn qīng chǔ.",
        "thaiMeaning": "ครูของพวกเราอธิบายได้ชัดเจนมาก",
        "englishMeaning": "Our teacher explained it very clearly."
      }
    ]
  },
  {
    "id": "v104",
    "hanzi": "学生",
    "pinyin": "xuésheng",
    "thaiMeaning": "นักเรียน / นักศึกษา",
    "englishMeaning": "student",
    "example": {
      "hanzi": "我是学生。",
      "pinyin": "Wǒ shì xuésheng.",
      "thaiMeaning": "ฉันเป็นนักเรียน",
      "englishMeaning": "I'm a student."
    },
    "examples": [
      {
        "scenario": "แนะนำสถานะของตัวเอง",
        "hanzi": "我是在这里学习的学生。",
        "pinyin": "Wǒ shì zài zhè lǐ xué xí de xué shēng.",
        "thaiMeaning": "ฉันเป็นนักเรียนที่เรียนอยู่ที่นี่",
        "englishMeaning": "I am a student studying here."
      },
      {
        "scenario": "บอกให้นักเรียนเข้าห้อง",
        "hanzi": "学生们已经进教室了。",
        "pinyin": "Xué shēng men yǐ jīng jìn jiào shì le.",
        "thaiMeaning": "นักเรียนเข้าห้องเรียนแล้ว",
        "englishMeaning": "The students have already entered the classroom."
      },
      {
        "scenario": "ชมว่านักเรียนตั้งใจเรียน",
        "hanzi": "这个学生学习很认真。",
        "pinyin": "Zhè ge xué shēng xué xí hěn rèn zhēn.",
        "thaiMeaning": "นักเรียนคนนี้ตั้งใจเรียนมาก",
        "englishMeaning": "This student studies very seriously."
      }
    ]
  },
  {
    "id": "v105",
    "hanzi": "医生",
    "pinyin": "yīshēng",
    "thaiMeaning": "หมอ / แพทย์",
    "englishMeaning": "doctor",
    "example": {
      "hanzi": "看医生。",
      "pinyin": "Kàn yīshēng.",
      "thaiMeaning": "ไปหาหมอ",
      "englishMeaning": "See a doctor."
    },
    "examples": [
      {
        "scenario": "บอกแพทย์เกี่ยวกับอาการ",
        "hanzi": "医生，我头疼得很厉害。",
        "pinyin": "Yī shēng, wǒ tóu téng dé hěn lì hài.",
        "thaiMeaning": "หมอครับ ฉันปวดหัวมาก",
        "englishMeaning": "Doctor, I have a terrible headache."
      },
      {
        "scenario": "ถามว่าแพทย์เข้าตรวจเมื่อไร",
        "hanzi": "医生什么时候过来？",
        "pinyin": "Yī shēng shén me shí hòu guò lái?",
        "thaiMeaning": "หมอจะมาเมื่อไร?",
        "englishMeaning": "When will the doctor come?"
      },
      {
        "scenario": "ทำตามคำแนะนำของแพทย์",
        "hanzi": "医生让我多休息。",
        "pinyin": "Yī shēng ràng wǒ duō xiū xi.",
        "thaiMeaning": "หมอให้ฉันพักผ่อนมากๆ",
        "englishMeaning": "The doctor told me to rest more."
      }
    ]
  },
  {
    "id": "v106",
    "hanzi": "爸爸",
    "pinyin": "bàba",
    "thaiMeaning": "คุณพ่อ",
    "englishMeaning": "dad",
    "example": {
      "hanzi": "我爸爸。",
      "pinyin": "Wǒ bàba.",
      "thaiMeaning": "พ่อของฉัน",
      "englishMeaning": "My dad."
    },
    "examples": [
      {
        "scenario": "บอกว่าใครกำลังทำอาหาร",
        "hanzi": "我爸爸正在做晚饭。",
        "pinyin": "Wǒ bà ba zhèng zài zuò wǎn fàn.",
        "thaiMeaning": "พ่อของฉันกำลังทำอาหารเย็น",
        "englishMeaning": "My dad is making dinner."
      },
      {
        "scenario": "โทรถามว่าพ่ออยู่ที่ไหน",
        "hanzi": "爸爸，你在哪里？",
        "pinyin": "Bà ba, nǐ zài nǎ lǐ?",
        "thaiMeaning": "พ่อ อยู่ที่ไหน?",
        "englishMeaning": "Dad, where are you?"
      },
      {
        "scenario": "เล่าว่าพ่อขับรถไปทำงาน",
        "hanzi": "我爸爸每天开车上班。",
        "pinyin": "Wǒ bà ba měi tiān kāi chē shàng bān.",
        "thaiMeaning": "พ่อของฉันขับรถไปทำงานทุกวัน",
        "englishMeaning": "My dad drives to work every day."
      }
    ]
  },
  {
    "id": "v107",
    "hanzi": "妈妈",
    "pinyin": "māma",
    "thaiMeaning": "คุณแม่",
    "englishMeaning": "Mother",
    "example": {
      "hanzi": "我妈妈。",
      "pinyin": "Wǒ māma.",
      "thaiMeaning": "แม่ของฉัน",
      "englishMeaning": "My mother."
    },
    "examples": [
      {
        "scenario": "บอกว่าแม่ซื้อผลไม้มา",
        "hanzi": "妈妈买了很多水果。",
        "pinyin": "Mā ma mǎi le hěn duō shuǐ guǒ.",
        "thaiMeaning": "แม่ซื้อผลไม้มาเยอะมาก",
        "englishMeaning": "Mom bought a lot of fruit."
      },
      {
        "scenario": "โทรบอกแม่ว่าจะกลับช้า",
        "hanzi": "妈妈，我今天晚点回家。",
        "pinyin": "Mā ma, wǒ jīn tiān wǎn diǎn huí jiā.",
        "thaiMeaning": "แม่ วันนี้ฉันจะกลับบ้านช้าหน่อย",
        "englishMeaning": "Mom, I'll go home late today."
      },
      {
        "scenario": "ชมอาหารที่แม่ทำ",
        "hanzi": "妈妈做的菜最好吃。",
        "pinyin": "Mā ma zuò de cài zuì hǎo chī.",
        "thaiMeaning": "อาหารที่แม่ทำอร่อยที่สุด",
        "englishMeaning": "Mom's cooking is the most delicious."
      }
    ]
  },
  {
    "id": "v108",
    "hanzi": "哥哥",
    "pinyin": "gēge",
    "thaiMeaning": "พี่ชาย",
    "englishMeaning": "elder brother",
    "example": {
      "hanzi": "我哥哥。",
      "pinyin": "Wǒ gēge.",
      "thaiMeaning": "พี่ชายฉัน",
      "englishMeaning": "My brother."
    },
    "examples": [
      {
        "scenario": "บอกว่าพี่ชายกำลังเรียน",
        "hanzi": "我哥哥在大学学习。",
        "pinyin": "Wǒ gē ge zài dà xué xué xí.",
        "thaiMeaning": "พี่ชายของฉันเรียนอยู่มหาวิทยาลัย",
        "englishMeaning": "My brother is studying at university."
      },
      {
        "scenario": "ขอให้พี่ชายช่วยยกของ",
        "hanzi": "哥哥，帮我搬一下这个箱子。",
        "pinyin": "Gē ge, bāng wǒ bān yí xià zhè ge xiāng zǐ.",
        "thaiMeaning": "พี่ ช่วยฉันยกลังนี้หน่อย",
        "englishMeaning": "Brother, help me move this box."
      },
      {
        "scenario": "เล่าว่าพี่ชายสูงกว่าตัวเอง",
        "hanzi": "我哥哥比我高。",
        "pinyin": "Wǒ gē ge bǐ wǒ gāo.",
        "thaiMeaning": "พี่ชายของฉันสูงกว่าฉัน",
        "englishMeaning": "My brother is taller than me."
      }
    ]
  },
  {
    "id": "v109",
    "hanzi": "姐姐",
    "pinyin": "jiějie",
    "thaiMeaning": "พี่สาว",
    "englishMeaning": "elder sister",
    "example": {
      "hanzi": "我姐姐。",
      "pinyin": "Wǒ jiějie.",
      "thaiMeaning": "พี่สาวฉัน",
      "englishMeaning": "My sister."
    },
    "examples": [
      {
        "scenario": "บอกอาชีพของพี่สาว",
        "hanzi": "我姐姐是一名医生。",
        "pinyin": "Wǒ jiě jie shì yì míng yī shēng.",
        "thaiMeaning": "พี่สาวของฉันเป็นหมอ",
        "englishMeaning": "My sister is a doctor."
      },
      {
        "scenario": "ยืมเสื้อผ้าของพี่สาว",
        "hanzi": "姐姐，我可以穿你的衣服吗？",
        "pinyin": "Jiě jie, wǒ kě yǐ chuān nǐ de yī fu ma?",
        "thaiMeaning": "พี่สาว ฉันขอใส่เสื้อของพี่ได้ไหม?",
        "englishMeaning": "Sister, can I wear your clothes?"
      },
      {
        "scenario": "เล่าว่าพี่สาวแต่งงานแล้ว",
        "hanzi": "我姐姐去年结婚了。",
        "pinyin": "Wǒ jiě jie qù nián jié hūn le.",
        "thaiMeaning": "พี่สาวของฉันแต่งงานเมื่อปีที่แล้ว",
        "englishMeaning": "My sister got married last year."
      }
    ]
  },
  {
    "id": "v110",
    "hanzi": "弟弟",
    "pinyin": "dìdi",
    "thaiMeaning": "น้องชาย",
    "englishMeaning": "younger brother",
    "example": {
      "hanzi": "我弟弟。",
      "pinyin": "Wǒ dìdi.",
      "thaiMeaning": "น้องชายฉัน",
      "englishMeaning": "My brother."
    },
    "examples": [
      {
        "scenario": "บอกว่าน้องชายกำลังนอน",
        "hanzi": "我弟弟还在睡觉。",
        "pinyin": "Wǒ dì di hái zài shuì jiào.",
        "thaiMeaning": "น้องชายของฉันยังนอนอยู่",
        "englishMeaning": "My brother is still sleeping."
      },
      {
        "scenario": "ไปรับน้องชายที่โรงเรียน",
        "hanzi": "我要去学校接弟弟。",
        "pinyin": "Wǒ yào qù xué xiào jiē dì di.",
        "thaiMeaning": "ฉันต้องไปรับน้องชายที่โรงเรียน",
        "englishMeaning": "I'm going to pick up my brother from school."
      },
      {
        "scenario": "เล่าว่าน้องชายชอบเล่นบอล",
        "hanzi": "我弟弟很喜欢打球。",
        "pinyin": "Wǒ dì di hěn xǐ huan dǎ qiú.",
        "thaiMeaning": "น้องชายของฉันชอบเล่นบอลมาก",
        "englishMeaning": "My brother likes to play ball."
      }
    ]
  },
  {
    "id": "v111",
    "hanzi": "看",
    "pinyin": "kàn",
    "thaiMeaning": "มอง / ดู / อ่าน",
    "englishMeaning": "look",
    "example": {
      "hanzi": "看书。",
      "pinyin": "Kàn shū.",
      "thaiMeaning": "อ่านหนังสือ",
      "englishMeaning": "Read a book."
    },
    "examples": [
      {
        "scenario": "ชวนเพื่อนดูภาพยนตร์",
        "hanzi": "晚上一起去看电影吧。",
        "pinyin": "Wǎn shàng yì qǐ qù kàn diàn yǐng ba.",
        "thaiMeaning": "ตอนเย็นไปดูหนังด้วยกันนะ",
        "englishMeaning": "Let's go see a movie together tonight."
      },
      {
        "scenario": "อ่านหนังสือก่อนนอน",
        "hanzi": "我每天睡前看书。",
        "pinyin": "Wǒ měi tiān shuì qián kàn shū.",
        "thaiMeaning": "ฉันอ่านหนังสือก่อนนอนทุกวัน",
        "englishMeaning": "I read before going to bed every day."
      },
      {
        "scenario": "ขอให้แพทย์ช่วยตรวจอาการ",
        "hanzi": "医生，请帮我看一下。",
        "pinyin": "Yī shēng, qǐng bāng wǒ kàn yí xià.",
        "thaiMeaning": "หมอครับ กรุณาช่วยตรวจให้ฉันหน่อย",
        "englishMeaning": "Doctor, please take a look at this for me."
      }
    ]
  },
  {
    "id": "v112",
    "hanzi": "听",
    "pinyin": "tīng",
    "thaiMeaning": "ฟัง",
    "englishMeaning": "listen",
    "example": {
      "hanzi": "听音乐。",
      "pinyin": "Tīng yīnyuè.",
      "thaiMeaning": "ฟังเพลง",
      "englishMeaning": "Listen to music."
    },
    "examples": [
      {
        "scenario": "ขอให้อีกฝ่ายฟังให้จบ",
        "hanzi": "请先听我说完。",
        "pinyin": "Qǐng xiān tīng wǒ shuō wán.",
        "thaiMeaning": "กรุณาฟังฉันพูดให้จบก่อน",
        "englishMeaning": "Please hear me out first."
      },
      {
        "scenario": "ฟังเพลงระหว่างทำงาน",
        "hanzi": "我工作的时候喜欢听音乐。",
        "pinyin": "Wǒ gōng zuò de shí hòu xǐ huan tīng yīn yuè.",
        "thaiMeaning": "ฉันชอบฟังเพลงตอนทำงาน",
        "englishMeaning": "I like to listen to music when I work."
      },
      {
        "scenario": "บอกว่าไม่ได้ยินชัด",
        "hanzi": "这里太吵了，我听不清。",
        "pinyin": "Zhè lǐ tài chǎo le, wǒ tīng bù qīng.",
        "thaiMeaning": "ที่นี่เสียงดังเกินไป ฉันได้ยินไม่ชัด",
        "englishMeaning": "It's so noisy here that I can't hear clearly."
      }
    ]
  },
  {
    "id": "v113",
    "hanzi": "说",
    "pinyin": "shuō",
    "thaiMeaning": "พูด / บอก",
    "englishMeaning": "explain",
    "example": {
      "hanzi": "说话。",
      "pinyin": "Shuōhuà.",
      "thaiMeaning": "พูดคุย",
      "englishMeaning": "say."
    },
    "examples": [
      {
        "scenario": "ขอให้อีกฝ่ายพูดช้าลง",
        "hanzi": "请说慢一点。",
        "pinyin": "Qǐng shuō màn yì diǎn.",
        "thaiMeaning": "กรุณาพูดช้าลงหน่อย",
        "englishMeaning": "Please speak slower."
      },
      {
        "scenario": "บอกว่าตัวเองพูดภาษาจีนได้นิดหน่อย",
        "hanzi": "我会说一点中文。",
        "pinyin": "Wǒ huì shuō yì diǎn zhòng wén.",
        "thaiMeaning": "ฉันพูดภาษาจีนได้นิดหน่อย",
        "englishMeaning": "I can speak a little Chinese."
      },
      {
        "scenario": "ถามว่าเมื่อครู่นี้พูดอะไร",
        "hanzi": "你刚才说什么？",
        "pinyin": "Nǐ gāng cái shuō shén me?",
        "thaiMeaning": "เมื่อกี้คุณพูดอะไร?",
        "englishMeaning": "What did you just say?"
      }
    ]
  },
  {
    "id": "v114",
    "hanzi": "写",
    "pinyin": "xiě",
    "thaiMeaning": "เขียน",
    "englishMeaning": "Write",
    "example": {
      "hanzi": "写字。",
      "pinyin": "Xiě zì.",
      "thaiMeaning": "เขียนหนังสือ",
      "englishMeaning": "Write."
    },
    "examples": [
      {
        "scenario": "เขียนชื่อบนแบบฟอร์ม",
        "hanzi": "请在这里写你的名字。",
        "pinyin": "Qǐng zài zhè lǐ xiě nǐ de míng zì.",
        "thaiMeaning": "กรุณาเขียนชื่อของคุณตรงนี้",
        "englishMeaning": "Please write your name here."
      },
      {
        "scenario": "เขียนข้อความหาเพื่อน",
        "hanzi": "我给朋友写了一封信。",
        "pinyin": "Wǒ gěi péng yǒu xiě le yì fēng xìn.",
        "thaiMeaning": "ฉันเขียนจดหมายหนึ่งฉบับถึงเพื่อน",
        "englishMeaning": "I wrote a letter to a friend."
      },
      {
        "scenario": "บอกว่าเขียนตัวอักษรจีนไม่เป็น",
        "hanzi": "这个汉字我不会写。",
        "pinyin": "Zhè ge hàn zì wǒ bú huì xiě.",
        "thaiMeaning": "ตัวอักษรจีนตัวนี้ฉันเขียนไม่เป็น",
        "englishMeaning": "I can't write this Chinese character."
      }
    ]
  },
  {
    "id": "v115",
    "hanzi": "想",
    "pinyin": "xiǎng",
    "thaiMeaning": "อยาก / คิด",
    "englishMeaning": "think",
    "example": {
      "hanzi": "你想吃什么？",
      "pinyin": "Nǐ xiǎng chī shénme?",
      "thaiMeaning": "คุณอยากกินอะไร",
      "englishMeaning": "What do you want to eat?"
    },
    "examples": [
      {
        "scenario": "บอกความต้องการกินอาหาร",
        "hanzi": "我想吃点东西。",
        "pinyin": "Wǒ xiǎng chī diǎn dōng xī.",
        "thaiMeaning": "ฉันอยากกินอะไรสักหน่อย",
        "englishMeaning": "I want to eat something."
      },
      {
        "scenario": "ถามความคิดเห็นของเพื่อน",
        "hanzi": "你怎么想？",
        "pinyin": "Nǐ zěn me xiǎng?",
        "thaiMeaning": "คุณคิดอย่างไร?",
        "englishMeaning": "What do you think?"
      },
      {
        "scenario": "บอกว่าคิดถึงครอบครัว",
        "hanzi": "我有点想家了。",
        "pinyin": "Wǒ yǒu diǎn xiǎng jiā le.",
        "thaiMeaning": "ฉันเริ่มคิดถึงบ้านแล้ว",
        "englishMeaning": "I'm a little homesick."
      }
    ]
  },
  {
    "id": "v116",
    "hanzi": "知道",
    "pinyin": "zhīdào",
    "thaiMeaning": "รู้ / ทราบ",
    "englishMeaning": "Know",
    "example": {
      "hanzi": "我知道了。",
      "pinyin": "Wǒ zhīdào le.",
      "thaiMeaning": "ฉันรู้แล้ว",
      "englishMeaning": "I see."
    },
    "examples": [
      {
        "scenario": "ตอบว่าทราบข้อมูลแล้ว",
        "hanzi": "好的，我知道了。",
        "pinyin": "Hǎo de, wǒ zhī dào le.",
        "thaiMeaning": "โอเค ฉันรู้แล้ว",
        "englishMeaning": "OK, I get it."
      },
      {
        "scenario": "ถามว่าอีกฝ่ายรู้จักสถานที่ไหม",
        "hanzi": "你知道银行在哪里吗？",
        "pinyin": "Nǐ zhī dào yín háng zài nǎ lǐ ma?",
        "thaiMeaning": "คุณรู้ไหมว่าธนาคารอยู่ที่ไหน?",
        "englishMeaning": "Do you know where the bank is?"
      },
      {
        "scenario": "บอกว่าไม่รู้คำตอบ",
        "hanzi": "我不知道这个问题的答案。",
        "pinyin": "Wǒ bù zhī dào zhè ge wèn tí de dá àn.",
        "thaiMeaning": "ฉันไม่รู้คำตอบของคำถามนี้",
        "englishMeaning": "I don't know the answer to this question."
      }
    ]
  },
  {
    "id": "v117",
    "hanzi": "认识",
    "pinyin": "rènshi",
    "thaiMeaning": "รู้จัก",
    "englishMeaning": "know",
    "example": {
      "hanzi": "很高兴认识你。",
      "pinyin": "Hěn gāoxìng rènshi nǐ.",
      "thaiMeaning": "ดีใจที่ได้รู้จักคุณ",
      "englishMeaning": "Nice to meet you."
    },
    "examples": [
      {
        "scenario": "แนะนำตัวเมื่อพบกันครั้งแรก",
        "hanzi": "很高兴认识你。",
        "pinyin": "Hěn gāo xìng rèn shi nǐ.",
        "thaiMeaning": "ยินดีที่ได้รู้จักคุณ",
        "englishMeaning": "Nice to meet you."
      },
      {
        "scenario": "ถามว่ารู้จักคนคนนั้นไหม",
        "hanzi": "你认识那个人吗？",
        "pinyin": "Nǐ rèn shi nà ge rén ma?",
        "thaiMeaning": "คุณรู้จักคนนั้นไหม?",
        "englishMeaning": "Do you know that person?"
      },
      {
        "scenario": "บอกว่ารู้จักเมืองนี้ดีขึ้น",
        "hanzi": "住了一年后，我更认识这个城市了。",
        "pinyin": "Zhù le yì nián hòu, wǒ gèng rèn shi zhè ge chéng shì le.",
        "thaiMeaning": "หลังอยู่มาหนึ่งปี ฉันรู้จักเมืองนี้มากขึ้น",
        "englishMeaning": "After living there for a year, I know this city better."
      }
    ]
  },
  {
    "id": "v118",
    "hanzi": "听懂",
    "pinyin": "tīngdǒng",
    "thaiMeaning": "ฟังเข้าใจ",
    "englishMeaning": "Understand",
    "example": {
      "hanzi": "听懂了。",
      "pinyin": "Tīngdǒng le.",
      "thaiMeaning": "ฟังเข้าใจแล้ว",
      "englishMeaning": "Got it."
    },
    "examples": [
      {
        "scenario": "บอกว่าเข้าใจสิ่งที่ได้ยิน",
        "hanzi": "这次我听懂了。",
        "pinyin": "Zhè cì wǒ tīng dǒng le.",
        "thaiMeaning": "ครั้งนี้ฉันฟังเข้าใจแล้ว",
        "englishMeaning": "This time I understood."
      },
      {
        "scenario": "ขอให้พูดซ้ำเพราะฟังไม่เข้าใจ",
        "hanzi": "对不起，我没听懂，请再说一次。",
        "pinyin": "Duì bù qǐ, wǒ méi tīng dǒng, qǐng zài shuō yí cì.",
        "thaiMeaning": "ขอโทษ ฉันฟังไม่เข้าใจ กรุณาพูดอีกครั้ง",
        "englishMeaning": "Sorry, I didn't understand. Please say it again."
      },
      {
        "scenario": "ถามนักเรียนว่าเข้าใจหรือไม่",
        "hanzi": "老师说的话你听懂了吗？",
        "pinyin": "Lǎo shī shuō de huà nǐ tīng dǒng le ma?",
        "thaiMeaning": "คุณฟังสิ่งที่ครูพูดเข้าใจไหม?",
        "englishMeaning": "Did you understand what the teacher said?"
      }
    ]
  },
  {
    "id": "v119",
    "hanzi": "帮助",
    "pinyin": "bāngzhù",
    "thaiMeaning": "ช่วยเหลือ / ช่วย",
    "englishMeaning": "help",
    "example": {
      "hanzi": "需要帮助。",
      "pinyin": "Xūyào bāngzhù.",
      "thaiMeaning": "ต้องการความช่วยเหลือ",
      "englishMeaning": "Need help."
    },
    "examples": [
      {
        "scenario": "ขอความช่วยเหลืออย่างสุภาพ",
        "hanzi": "我需要你的帮助。",
        "pinyin": "Wǒ xū yào nǐ de bāng zhù.",
        "thaiMeaning": "ฉันต้องการความช่วยเหลือจากคุณ",
        "englishMeaning": "I need your help."
      },
      {
        "scenario": "ขอบคุณคนที่เข้ามาช่วย",
        "hanzi": "谢谢你帮助我。",
        "pinyin": "Xiè xiè nǐ bāng zhù wǒ.",
        "thaiMeaning": "ขอบคุณที่ช่วยฉัน",
        "englishMeaning": "Thank you for helping me."
      },
      {
        "scenario": "เสนอตัวช่วยเพื่อน",
        "hanzi": "如果你有问题，我可以帮助你。",
        "pinyin": "Rú guǒ nǐ yǒu wèn tí, wǒ kě yǐ bāng zhù nǐ.",
        "thaiMeaning": "ถ้าคุณมีปัญหา ฉันช่วยคุณได้",
        "englishMeaning": "If you have questions, I can help you."
      }
    ]
  },
  {
    "id": "v120",
    "hanzi": "找",
    "pinyin": "zhǎo",
    "thaiMeaning": "หา / ตามหา",
    "englishMeaning": "try to find",
    "example": {
      "hanzi": "找东西。",
      "pinyin": "Zhǎo dōngxi.",
      "thaiMeaning": "หาของ",
      "englishMeaning": "Find something."
    },
    "examples": [
      {
        "scenario": "ตามหาโทรศัพท์ที่หาย",
        "hanzi": "我在找我的手机。",
        "pinyin": "Wǒ zài zhǎo wǒ de shǒu jī.",
        "thaiMeaning": "ฉันกำลังหาโทรศัพท์ของฉัน",
        "englishMeaning": "I'm looking for my phone."
      },
      {
        "scenario": "มาที่สำนักงานเพื่อพบผู้จัดการ",
        "hanzi": "你好，我找王经理。",
        "pinyin": "Nǐ hǎo, wǒ zhǎo wáng jīng lǐ.",
        "thaiMeaning": "สวัสดี ฉันมาพบผู้จัดการหวัง",
        "englishMeaning": "Hello, I’m looking for Manager Wang."
      },
      {
        "scenario": "ชวนเพื่อนหาร้านอาหาร",
        "hanzi": "我们找一家饭店吃饭吧。",
        "pinyin": "Wǒ men zhǎo yì jiā fàn diàn chī fàn ba.",
        "thaiMeaning": "พวกเราหาร้านอาหารกินข้าวกันเถอะ",
        "englishMeaning": "Let's find a restaurant to eat."
      }
    ]
  },
  {
    "id": "v121",
    "hanzi": "大",
    "pinyin": "dà",
    "thaiMeaning": "ใหญ่",
    "englishMeaning": "big",
    "example": {
      "hanzi": "很大。",
      "pinyin": "Hěn dà.",
      "thaiMeaning": "ใหญ่มาก",
      "englishMeaning": "Very big."
    },
    "examples": [
      {
        "scenario": "เปรียบเทียบขนาดเสื้อ",
        "hanzi": "这件衣服太大了。",
        "pinyin": "Zhè jiàn yī fu tài dà le.",
        "thaiMeaning": "เสื้อตัวนี้ใหญ่เกินไป",
        "englishMeaning": "This dress is too big."
      },
      {
        "scenario": "พูดถึงบ้านหลังใหม่",
        "hanzi": "他们的新家很大。",
        "pinyin": "Tā men de xīn jiā hěn dà.",
        "thaiMeaning": "บ้านใหม่ของพวกเขาใหญ่มาก",
        "englishMeaning": "Their new home is huge."
      },
      {
        "scenario": "บอกว่าเด็กโตขึ้นแล้ว",
        "hanzi": "孩子已经长大了。",
        "pinyin": "Hái zi yǐ jīng zhǎng dà le.",
        "thaiMeaning": "เด็กโตแล้ว",
        "englishMeaning": "The child has grown up."
      }
    ]
  },
  {
    "id": "v122",
    "hanzi": "小",
    "pinyin": "xiǎo",
    "thaiMeaning": "เล็ก",
    "englishMeaning": "Small",
    "example": {
      "hanzi": "太小了。",
      "pinyin": "Tài xiǎo le.",
      "thaiMeaning": "เล็กเกินไป",
      "englishMeaning": "Too small."
    },
    "examples": [
      {
        "scenario": "ขอรองเท้าไซซ์ใหญ่ขึ้น",
        "hanzi": "这双鞋太小了。",
        "pinyin": "Zhè shuāng xié tài xiǎo le.",
        "thaiMeaning": "รองเท้าคู่นี้เล็กเกินไป",
        "englishMeaning": "These shoes are too small."
      },
      {
        "scenario": "บอกว่าร้านเล็กแต่สะอาด",
        "hanzi": "这家店很小，但是很干净。",
        "pinyin": "Zhè jiā diàn hěn xiǎo, dàn shì hěn gān jìng.",
        "thaiMeaning": "ร้านนี้เล็ก แต่สะอาดมาก",
        "englishMeaning": "The store is small but very clean."
      },
      {
        "scenario": "ลดเสียงโทรทัศน์",
        "hanzi": "请把电视声音调小一点。",
        "pinyin": "Qǐng bǎ diàn shì shēng yīn diào xiǎo yì diǎn.",
        "thaiMeaning": "กรุณาลดเสียงโทรทัศน์ลงหน่อย",
        "englishMeaning": "Please turn down the TV volume."
      }
    ]
  },
  {
    "id": "v123",
    "hanzi": "多",
    "pinyin": "duō",
    "thaiMeaning": "มาก / เยอะ",
    "englishMeaning": "many",
    "example": {
      "hanzi": "很多。",
      "pinyin": "Hěn duō.",
      "thaiMeaning": "เยอะมาก",
      "englishMeaning": "a lot of."
    },
    "examples": [
      {
        "scenario": "บอกว่ามีงานเยอะ",
        "hanzi": "我今天工作很多。",
        "pinyin": "Wǒ jīn tiān gōng zuò hěn duō.",
        "thaiMeaning": "วันนี้ฉันมีงานเยอะมาก",
        "englishMeaning": "I work a lot today."
      },
      {
        "scenario": "แนะนำให้ดื่มน้ำมากขึ้น",
        "hanzi": "天气热，要多喝水。",
        "pinyin": "Tiān qì rè, yào duō hē shuǐ.",
        "thaiMeaning": "อากาศร้อน ต้องดื่มน้ำเยอะๆ",
        "englishMeaning": "The weather is hot, drink more water."
      },
      {
        "scenario": "ถามจำนวนคน",
        "hanzi": "你们公司有多少人？",
        "pinyin": "Nǐ men gōng sī yǒu duō shǎo rén?",
        "thaiMeaning": "บริษัทของคุณมีคนกี่คน?",
        "englishMeaning": "How many people are there in your company?"
      }
    ]
  },
  {
    "id": "v124",
    "hanzi": "少",
    "pinyin": "shǎo",
    "thaiMeaning": "น้อย",
    "englishMeaning": "few",
    "example": {
      "hanzi": "减少。",
      "pinyin": "Jiǎnshǎo.",
      "thaiMeaning": "ลดน้อยลง",
      "englishMeaning": "reduce."
    },
    "examples": [
      {
        "scenario": "ขออาหารปริมาณน้อย",
        "hanzi": "米饭请给我少一点。",
        "pinyin": "Mǐ fàn qǐng gěi wǒ shǎo yì diǎn.",
        "thaiMeaning": "กรุณาให้ข้าวฉันน้อยหน่อย",
        "englishMeaning": "Please give me less rice."
      },
      {
        "scenario": "บอกว่าวันนี้คนไม่เยอะ",
        "hanzi": "今天商店里的人很少。",
        "pinyin": "Jīn tiān shāng diàn lǐ de rén hěn shǎo.",
        "thaiMeaning": "วันนี้คนในร้านมีน้อยมาก",
        "englishMeaning": "There were very few people in the store today."
      },
      {
        "scenario": "แนะนำให้กินหวานน้อยลง",
        "hanzi": "为了健康，要少吃甜的。",
        "pinyin": "Wèi le jiàn kāng, yào shǎo chī tián de.",
        "thaiMeaning": "เพื่อสุขภาพ ต้องกินของหวานให้น้อยลง",
        "englishMeaning": "For health reasons, eat less sweets."
      }
    ]
  },
  {
    "id": "v125",
    "hanzi": "高",
    "pinyin": "gāo",
    "thaiMeaning": "สูง",
    "englishMeaning": "high",
    "example": {
      "hanzi": "很高。",
      "pinyin": "Hěn gāo.",
      "thaiMeaning": "สูงมาก",
      "englishMeaning": "Very high."
    },
    "examples": [
      {
        "scenario": "บรรยายส่วนสูงของเพื่อน",
        "hanzi": "他个子很高。",
        "pinyin": "Tā gè zi hěn gāo.",
        "thaiMeaning": "เขาตัวสูงมาก",
        "englishMeaning": "He is very tall."
      },
      {
        "scenario": "บอกว่าตึกสูงมาก",
        "hanzi": "这座楼有三十层，真高。",
        "pinyin": "Zhè zuò lóu yǒu sān shí céng, zhēn gāo.",
        "thaiMeaning": "ตึกนี้มีสามสิบชั้น สูงจริงๆ",
        "englishMeaning": "This building has thirty floors, which is really high."
      },
      {
        "scenario": "บ่นว่าสินค้าราคาสูง",
        "hanzi": "这里的价格有点高。",
        "pinyin": "Zhè lǐ de jià gé yǒu diǎn gāo.",
        "thaiMeaning": "ราคาที่นี่สูงไปหน่อย",
        "englishMeaning": "The prices here are a bit high."
      }
    ]
  },
  {
    "id": "v126",
    "hanzi": "矮",
    "pinyin": "ǎi",
    "thaiMeaning": "เตี้ย",
    "englishMeaning": "short",
    "example": {
      "hanzi": "有点矮。",
      "pinyin": "Yǒudiǎnr ǎi.",
      "thaiMeaning": "ค่อนข้างเตี้ย",
      "englishMeaning": "A bit short."
    },
    "examples": [
      {
        "scenario": "เปรียบเทียบส่วนสูงของพี่น้อง",
        "hanzi": "弟弟比哥哥矮一点。",
        "pinyin": "Dì di bǐ gē ge ǎi yì diǎn.",
        "thaiMeaning": "น้องชายเตี้ยกว่าพี่ชายเล็กน้อย",
        "englishMeaning": "The younger brother is a little shorter than the older brother."
      },
      {
        "scenario": "ขอเก้าอี้ที่เตี้ยกว่า",
        "hanzi": "这把椅子太高了，有矮一点的吗？",
        "pinyin": "Zhè bǎ yǐ zi tài gāo le, yǒu ǎi yì diǎn de ma?",
        "thaiMeaning": "เก้าอี้ตัวนี้สูงเกินไป มีตัวที่เตี้ยกว่านี้ไหม?",
        "englishMeaning": "This chair is too high. Is there a shorter one?"
      },
      {
        "scenario": "บรรยายตึกหลังเล็ก",
        "hanzi": "那边那座矮楼是图书馆。",
        "pinyin": "Nà biān nà zuò ǎi lóu shì tú shū guǎn.",
        "thaiMeaning": "ตึกเตี้ยตรงนั้นคือห้องสมุด",
        "englishMeaning": "That low building over there is the library."
      }
    ]
  },
  {
    "id": "v127",
    "hanzi": "重",
    "pinyin": "zhòng",
    "thaiMeaning": "หนัก",
    "englishMeaning": "Heavy",
    "example": {
      "hanzi": "太重了。",
      "pinyin": "Tài zhòng le.",
      "thaiMeaning": "หนักเกินไป",
      "englishMeaning": "Too heavy."
    },
    "examples": [
      {
        "scenario": "ขอให้ช่วยยกกระเป๋าหนัก",
        "hanzi": "这个包很重，帮我拿一下。",
        "pinyin": "Zhè ge bāo hěn zhòng, bāng wǒ ná yí xià.",
        "thaiMeaning": "กระเป๋าใบนี้หนักมาก ช่วยฉันถือหน่อย",
        "englishMeaning": "This bag is very heavy. Please help me carry it."
      },
      {
        "scenario": "ถามน้ำหนักสิ่งของ",
        "hanzi": "这个箱子有多重？",
        "pinyin": "Zhè ge xiāng zǐ yǒu duō chóng?",
        "thaiMeaning": "กล่องนี้หนักเท่าไร?",
        "englishMeaning": "How much does this box weigh?"
      },
      {
        "scenario": "เตือนว่าอย่าวางของหนักบนโต๊ะ",
        "hanzi": "不要把重东西放在这张桌子上。",
        "pinyin": "Bú yào bǎ zhòng dōng xī fàng zài zhè zhāng zhuō zi shàng.",
        "thaiMeaning": "อย่าวางของหนักบนโต๊ะตัวนี้",
        "englishMeaning": "Do not place heavy objects on this table."
      }
    ]
  },
  {
    "id": "v128",
    "hanzi": "轻",
    "pinyin": "qīng",
    "thaiMeaning": "เบา",
    "englishMeaning": "light",
    "example": {
      "hanzi": "很轻。",
      "pinyin": "Hěn qīng.",
      "thaiMeaning": "เบามาก",
      "englishMeaning": "Very light."
    },
    "examples": [
      {
        "scenario": "ชมว่ากระเป๋าเดินทางเบา",
        "hanzi": "这个行李箱很轻。",
        "pinyin": "Zhè ge xíng li xiāng hěn qīng.",
        "thaiMeaning": "กระเป๋าเดินทางใบนี้เบามาก",
        "englishMeaning": "This suitcase is very light."
      },
      {
        "scenario": "ขอให้ปิดประตูเบาๆ",
        "hanzi": "请轻一点关门。",
        "pinyin": "Qǐng qīng yì diǎn guān mén.",
        "thaiMeaning": "กรุณาปิดประตูเบาๆ",
        "englishMeaning": "Please close the door gently."
      },
      {
        "scenario": "เลือกของที่เบากว่า",
        "hanzi": "我要那个比较轻的。",
        "pinyin": "Wǒ yào nà ge bǐ jiào qīng de.",
        "thaiMeaning": "ฉันเอาอันที่เบากว่า",
        "englishMeaning": "I want the lighter one."
      }
    ]
  },
  {
    "id": "v129",
    "hanzi": "新",
    "pinyin": "xīn",
    "thaiMeaning": "ใหม่",
    "englishMeaning": "new",
    "example": {
      "hanzi": "买新书。",
      "pinyin": "Mǎi xīn shū.",
      "thaiMeaning": "ซื้อหนังสือใหม่",
      "englishMeaning": "Buy new books."
    },
    "examples": [
      {
        "scenario": "อวดโทรศัพท์เครื่องใหม่",
        "hanzi": "我买了一部新手机。",
        "pinyin": "Wǒ mǎi le yí bù xīn shǒu jī.",
        "thaiMeaning": "ฉันซื้อโทรศัพท์เครื่องใหม่",
        "englishMeaning": "I bought a new mobile phone."
      },
      {
        "scenario": "แนะนำเพื่อนร่วมงานคนใหม่",
        "hanzi": "这是我们公司的新同事。",
        "pinyin": "Zhè shì wǒ men gōng sī de xīn tóng shì.",
        "thaiMeaning": "นี่คือเพื่อนร่วมงานคนใหม่ของบริษัทเรา",
        "englishMeaning": "This is a new colleague in our company."
      },
      {
        "scenario": "บอกว่าข่าวนี้ใหม่สำหรับตน",
        "hanzi": "这个消息对我来说很新。",
        "pinyin": "Zhè ge xiāo xī duì wǒ lái shuō hěn xīn.",
        "thaiMeaning": "ข่าวนี้เป็นเรื่องใหม่สำหรับฉัน",
        "englishMeaning": "This news is new to me."
      }
    ]
  },
  {
    "id": "v130",
    "hanzi": "旧",
    "pinyin": "jiù",
    "thaiMeaning": "เก่า",
    "englishMeaning": "old",
    "example": {
      "hanzi": "旧鞋子。",
      "pinyin": "Jiù xiézi.",
      "thaiMeaning": "รองเท้าเก่า",
      "englishMeaning": "Old shoes."
    },
    "examples": [
      {
        "scenario": "บอกว่าเสื้อตัวเก่ายังใส่ได้",
        "hanzi": "这件旧衣服还能穿。",
        "pinyin": "Zhè jiàn jiù yī fu hái néng chuān.",
        "thaiMeaning": "เสื้อเก่าตัวนี้ยังใส่ได้",
        "englishMeaning": "This old dress can still be worn."
      },
      {
        "scenario": "เปลี่ยนคอมพิวเตอร์เครื่องเก่า",
        "hanzi": "我的电脑太旧了，想换新的。",
        "pinyin": "Wǒ de diàn nǎo tài jiù le, xiǎng huàn xīn de.",
        "thaiMeaning": "คอมพิวเตอร์ฉันเก่าเกินไป อยากเปลี่ยนเครื่องใหม่",
        "englishMeaning": "My computer is too old and I want to get a new one."
      },
      {
        "scenario": "กลับไปเยี่ยมบ้านหลังเดิม",
        "hanzi": "周末我回了一趟旧家。",
        "pinyin": "Zhōu mò wǒ huí le yí tàng jiù jiā.",
        "thaiMeaning": "สุดสัปดาห์ฉันกลับไปบ้านเก่ามา",
        "englishMeaning": "I went back to my old home over the weekend."
      }
    ]
  },
  {
    "id": "v131",
    "hanzi": "我",
    "pinyin": "wǒ",
    "thaiMeaning": "ฉัน / ผม",
    "englishMeaning": "I",
    "example": {
      "hanzi": "我是。",
      "pinyin": "Wǒ shì.",
      "thaiMeaning": "ฉันคือ",
      "englishMeaning": "I am."
    },
    "examples": [
      {
        "scenario": "แนะนำตัวเอง",
        "hanzi": "你好，我叫安娜。",
        "pinyin": "Nǐ hǎo, wǒ jiào ān nà.",
        "thaiMeaning": "สวัสดี ฉันชื่อแอนนา",
        "englishMeaning": "Hello, my name is Anna."
      },
      {
        "scenario": "บอกความต้องการของตัวเอง",
        "hanzi": "我想喝一杯水。",
        "pinyin": "Wǒ xiǎng hē yì bēi shuǐ.",
        "thaiMeaning": "ฉันอยากดื่มน้ำหนึ่งแก้ว",
        "englishMeaning": "I want to drink a glass of water."
      },
      {
        "scenario": "ตอบว่าเป็นคนทำสิ่งนั้น",
        "hanzi": "这件事是我做的。",
        "pinyin": "Zhè jiàn shì shì wǒ zuò de.",
        "thaiMeaning": "เรื่องนี้ฉันเป็นคนทำ",
        "englishMeaning": "I did this."
      }
    ]
  },
  {
    "id": "v132",
    "hanzi": "你",
    "pinyin": "nǐ",
    "thaiMeaning": "คุณ / เธอ",
    "englishMeaning": "you",
    "example": {
      "hanzi": "你好。",
      "pinyin": "Nǐ hǎo.",
      "thaiMeaning": "สวัสดีคุณ",
      "englishMeaning": "Hello."
    },
    "examples": [
      {
        "scenario": "ถามชื่อคนที่เพิ่งพบ",
        "hanzi": "你叫什么名字？",
        "pinyin": "Nǐ jiào shén me míng zì?",
        "thaiMeaning": "คุณชื่ออะไร?",
        "englishMeaning": "May I have your name?"
      },
      {
        "scenario": "ถามสารทุกข์สุกดิบ",
        "hanzi": "你今天怎么样？",
        "pinyin": "Nǐ jīn tiān zěn me yàng?",
        "thaiMeaning": "วันนี้คุณเป็นอย่างไรบ้าง?",
        "englishMeaning": "How are you today?"
      },
      {
        "scenario": "มอบของให้อีกฝ่าย",
        "hanzi": "这个礼物送给你。",
        "pinyin": "Zhè ge lǐ wù sòng gěi nǐ.",
        "thaiMeaning": "ของขวัญชิ้นนี้มอบให้คุณ",
        "englishMeaning": "This gift is for you."
      }
    ]
  },
  {
    "id": "v133",
    "hanzi": "他",
    "pinyin": "tā",
    "thaiMeaning": "เขา (ผู้ชาย)",
    "englishMeaning": "he",
    "example": {
      "hanzi": "他是。",
      "pinyin": "Tā shì.",
      "thaiMeaning": "เขาคือ",
      "englishMeaning": "He is."
    },
    "examples": [
      {
        "scenario": "แนะนำผู้ชายคนหนึ่ง",
        "hanzi": "他是我的同事。",
        "pinyin": "Tā shì wǒ de tóng shì.",
        "thaiMeaning": "เขาเป็นเพื่อนร่วมงานของฉัน",
        "englishMeaning": "He is my colleague."
      },
      {
        "scenario": "บอกว่าเขายังไม่มา",
        "hanzi": "他今天还没来。",
        "pinyin": "Tā jīn tiān hái méi lái.",
        "thaiMeaning": "วันนี้เขายังไม่มา",
        "englishMeaning": "He hasn't come today yet."
      },
      {
        "scenario": "ถามว่าเขากำลังทำอะไร",
        "hanzi": "他在做什么？",
        "pinyin": "Tā zài zuò shén me?",
        "thaiMeaning": "เขากำลังทำอะไร?",
        "englishMeaning": "What is he doing?"
      }
    ]
  },
  {
    "id": "v134",
    "hanzi": "她",
    "pinyin": "tā",
    "thaiMeaning": "เธอ (ผู้หญิง)",
    "englishMeaning": "she",
    "example": {
      "hanzi": "她是。",
      "pinyin": "Tā shì.",
      "thaiMeaning": "เธอคือ",
      "englishMeaning": "she is."
    },
    "examples": [
      {
        "scenario": "แนะนำผู้หญิงคนหนึ่ง",
        "hanzi": "她是我的姐姐。",
        "pinyin": "Tā shì wǒ de jiě jie.",
        "thaiMeaning": "เธอเป็นพี่สาวของฉัน",
        "englishMeaning": "She is my sister."
      },
      {
        "scenario": "บอกว่าเธอพูดจีนได้ดี",
        "hanzi": "她中文说得很好。",
        "pinyin": "Tā zhōng wén shuō dé hěn hǎo.",
        "thaiMeaning": "เธอพูดภาษาจีนได้ดีมาก",
        "englishMeaning": "She speaks Chinese very well."
      },
      {
        "scenario": "ถามว่าเธอไปไหน",
        "hanzi": "她去哪儿了？",
        "pinyin": "Tā qù nǎ ér le?",
        "thaiMeaning": "เธอไปไหนแล้ว?",
        "englishMeaning": "Where has she gone?"
      }
    ]
  },
  {
    "id": "v135",
    "hanzi": "我们",
    "pinyin": "wǒmen",
    "thaiMeaning": "พวกเรา",
    "englishMeaning": "us",
    "example": {
      "hanzi": "我们走。",
      "pinyin": "Wǒmen zǒu.",
      "thaiMeaning": "พวกเราไปกัน",
      "englishMeaning": "Let's go."
    },
    "examples": [
      {
        "scenario": "ชวนกันออกเดินทาง",
        "hanzi": "我们走吧。",
        "pinyin": "Wǒ men zǒu ba.",
        "thaiMeaning": "พวกเราไปกันเถอะ",
        "englishMeaning": "let's go."
      },
      {
        "scenario": "บอกตำแหน่งที่นัดพบ",
        "hanzi": "我们在门口见。",
        "pinyin": "Wǒ men zài mén kǒu jiàn.",
        "thaiMeaning": "พวกเราเจอกันที่หน้าประตู",
        "englishMeaning": "We'll meet at the door."
      },
      {
        "scenario": "เล่าแผนของกลุ่ม",
        "hanzi": "我们明天一起开会。",
        "pinyin": "Wǒ men míng tiān yì qǐ kāi huì.",
        "thaiMeaning": "พรุ่งนี้พวกเราประชุมด้วยกัน",
        "englishMeaning": "We'll have a meeting together tomorrow."
      }
    ]
  },
  {
    "id": "v136",
    "hanzi": "什么",
    "pinyin": "shénme",
    "thaiMeaning": "อะไร",
    "englishMeaning": "What",
    "example": {
      "hanzi": "这是什么？",
      "pinyin": "Zhè shì shénme?",
      "thaiMeaning": "นี่คืออะไร",
      "englishMeaning": "What's this?"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "这是什么？",
        "pinyin": "Zhè shì shén me?",
        "thaiMeaning": "นี่คืออะไร",
        "englishMeaning": "What's this?"
      },
      {
        "scenario": "ถามว่าอีกฝ่ายกำลังทำอะไร",
        "hanzi": "你在做什么？",
        "pinyin": "Nǐ zài zuò shén me?",
        "thaiMeaning": "คุณกำลังทำอะไร?",
        "englishMeaning": "What are you doing"
      },
      {
        "scenario": "ถามความต้องการของลูกค้า",
        "hanzi": "请问，您想喝什么？",
        "pinyin": "Qǐng wèn, nín xiǎng hē shén me?",
        "thaiMeaning": "ขอถามหน่อย คุณต้องการดื่มอะไร?",
        "englishMeaning": "Excuse me, what would you like to drink?"
      }
    ]
  },
  {
    "id": "v137",
    "hanzi": "谁",
    "pinyin": "shéi",
    "thaiMeaning": "ใคร",
    "englishMeaning": "who",
    "example": {
      "hanzi": "他是谁？",
      "pinyin": "Tā shì shéi?",
      "thaiMeaning": "เขาคือใคร",
      "englishMeaning": "who is he?"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "他是谁？",
        "pinyin": "Tā shì shuí?",
        "thaiMeaning": "เขาคือใคร",
        "englishMeaning": "who is he?"
      },
      {
        "scenario": "ถามว่าใครโทรมา",
        "hanzi": "刚才是谁打来的电话？",
        "pinyin": "Gāng cái shì shuí dǎ lái de diàn huà?",
        "thaiMeaning": "เมื่อครู่นี้ใครโทรมา?",
        "englishMeaning": "Who called just now?"
      },
      {
        "scenario": "ถามเจ้าของสิ่งของ",
        "hanzi": "这把雨伞是谁的？",
        "pinyin": "Zhè bǎ yǔ sǎn shì shuí de?",
        "thaiMeaning": "ร่มคันนี้เป็นของใคร?",
        "englishMeaning": "Whose umbrella does this belong to?"
      }
    ]
  },
  {
    "id": "v138",
    "hanzi": "怎么",
    "pinyin": "zěnme",
    "thaiMeaning": "อย่างไร / ยังไง",
    "englishMeaning": "how",
    "example": {
      "hanzi": "怎么走？",
      "pinyin": "Zěnme zǒu?",
      "thaiMeaning": "ไปยังไง",
      "englishMeaning": "How to get there?"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "怎么走？",
        "pinyin": "Zěn me zǒu?",
        "thaiMeaning": "ไปยังไง",
        "englishMeaning": "How to get there?"
      },
      {
        "scenario": "ถามวิธีใช้เครื่อง",
        "hanzi": "这个怎么用？",
        "pinyin": "Zhè ge zěn me yòng?",
        "thaiMeaning": "สิ่งนี้ใช้อย่างไร?",
        "englishMeaning": "How to use this?"
      },
      {
        "scenario": "ถามเส้นทางไปสถานี",
        "hanzi": "去车站怎么走？",
        "pinyin": "Qù chē zhàn zěn me zǒu?",
        "thaiMeaning": "ไปสถานีรถเดินทางอย่างไร?",
        "englishMeaning": "How to get to the station?"
      }
    ]
  },
  {
    "id": "v139",
    "hanzi": "为什么",
    "pinyin": "wèishénme",
    "thaiMeaning": "ทำไม",
    "englishMeaning": "Why",
    "example": {
      "hanzi": "为什么？",
      "pinyin": "Wèishénme?",
      "thaiMeaning": "ทำไมล่ะ",
      "englishMeaning": "Why?"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "为什么？",
        "pinyin": "Wèi shén me?",
        "thaiMeaning": "ทำไมล่ะ",
        "englishMeaning": "Why?"
      },
      {
        "scenario": "ถามเหตุผลที่มาสาย",
        "hanzi": "你今天为什么迟到？",
        "pinyin": "Nǐ jīn tiān wèi shén me chí dào?",
        "thaiMeaning": "วันนี้ทำไมคุณถึงมาสาย?",
        "englishMeaning": "Why are you late today?"
      },
      {
        "scenario": "สงสัยว่าร้านปิด",
        "hanzi": "这家店为什么没开门？",
        "pinyin": "Zhè jiā diàn wèi shén me méi kāi mén?",
        "thaiMeaning": "ทำไมร้านนี้ยังไม่เปิด?",
        "englishMeaning": "Why isn't this store open?"
      }
    ]
  },
  {
    "id": "v140",
    "hanzi": "哪儿",
    "pinyin": "nǎr",
    "thaiMeaning": "ที่ไหน",
    "englishMeaning": "where",
    "example": {
      "hanzi": "去哪儿？",
      "pinyin": "Qù nǎr?",
      "thaiMeaning": "ไปที่ไหน",
      "englishMeaning": "Where to go?"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "去哪儿？",
        "pinyin": "Qù nǎ ér?",
        "thaiMeaning": "ไปที่ไหน",
        "englishMeaning": "Where to go?"
      },
      {
        "scenario": "ถามว่าจะไปที่ไหน",
        "hanzi": "你要去哪儿？",
        "pinyin": "Nǐ yào qù nǎ ér?",
        "thaiMeaning": "คุณจะไปไหน?",
        "englishMeaning": "Where are you going?"
      },
      {
        "scenario": "ถามตำแหน่งห้องน้ำ",
        "hanzi": "请问，洗手间在哪儿？",
        "pinyin": "Qǐng wèn, xǐ shǒu jiān zài nǎ ér?",
        "thaiMeaning": "ขอถามหน่อย ห้องน้ำอยู่ที่ไหน?",
        "englishMeaning": "Excuse me, where is the bathroom?"
      }
    ]
  },
  {
    "id": "v141",
    "hanzi": "谢谢",
    "pinyin": "xièxie",
    "thaiMeaning": "ขอบคุณ",
    "englishMeaning": "Thanks",
    "example": {
      "hanzi": "谢谢你。",
      "pinyin": "Xièxie nǐ.",
      "thaiMeaning": "ขอบคุณนะ",
      "englishMeaning": "Thank you."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "谢谢你。",
        "pinyin": "Xiè xiè nǐ.",
        "thaiMeaning": "ขอบคุณนะ",
        "englishMeaning": "Thank you."
      },
      {
        "scenario": "ขอบคุณเพื่อนที่ช่วยงาน",
        "hanzi": "谢谢你来帮我。",
        "pinyin": "Xiè xiè nǐ lái bāng wǒ.",
        "thaiMeaning": "ขอบคุณที่มาช่วยฉัน",
        "englishMeaning": "Thank you for coming to help me."
      },
      {
        "scenario": "ขอบคุณพนักงานหลังรับของ",
        "hanzi": "我拿到了，谢谢！",
        "pinyin": "Wǒ ná dào le, xiè xiè!",
        "thaiMeaning": "ฉันได้รับแล้ว ขอบคุณ!",
        "englishMeaning": "I got it, thank you!"
      }
    ]
  },
  {
    "id": "v142",
    "hanzi": "不客气",
    "pinyin": "bú kèqi",
    "thaiMeaning": "ด้วยความยินดี / ไม่เป็นไร",
    "englishMeaning": "You're welcome",
    "example": {
      "hanzi": "不用谢，不客气。",
      "pinyin": "Bú yòng xiè, bú kèqi.",
      "thaiMeaning": "ไม่ต้องขอบคุณ ด้วยความยินดี",
      "englishMeaning": "You're welcome, you're welcome."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "不用谢，不客气。",
        "pinyin": "Bú yòng xiè, bú kè qì.",
        "thaiMeaning": "ไม่ต้องขอบคุณ ด้วยความยินดี",
        "englishMeaning": "You're welcome, you're welcome."
      },
      {
        "scenario": "ตอบรับคำขอบคุณ",
        "hanzi": "不客气，这是我应该做的。",
        "pinyin": "Bú kè qì, zhè shì wǒ yīng gāi zuò de.",
        "thaiMeaning": "ไม่เป็นไร นี่เป็นสิ่งที่ฉันควรทำ",
        "englishMeaning": "You're welcome, this is what I should do."
      },
      {
        "scenario": "บอกเพื่อนว่าไม่ต้องเกรงใจ",
        "hanzi": "都是朋友，不客气。",
        "pinyin": "Dōu shì péng yǒu, bú kè qì.",
        "thaiMeaning": "เป็นเพื่อนกันทั้งนั้น ไม่ต้องเกรงใจ",
        "englishMeaning": "We're all friends, you're welcome."
      }
    ]
  },
  {
    "id": "v143",
    "hanzi": "对不起",
    "pinyin": "duìbuqǐ",
    "thaiMeaning": "ขอโทษ",
    "englishMeaning": "sorry",
    "example": {
      "hanzi": "对不起，我迟到了。",
      "pinyin": "Duìbuqǐ, wǒ chídào le.",
      "thaiMeaning": "ขอโทษด้วย ฉันมาสาย",
      "englishMeaning": "Sorry, I'm late."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "对不起，我迟到了。",
        "pinyin": "Duì bù qǐ, wǒ chí dào le.",
        "thaiMeaning": "ขอโทษด้วย ฉันมาสาย",
        "englishMeaning": "Sorry, I'm late."
      },
      {
        "scenario": "ขอโทษที่มาสาย",
        "hanzi": "对不起，让你久等了。",
        "pinyin": "Duì bù qǐ, ràng nǐ jiǔ děng le.",
        "thaiMeaning": "ขอโทษที่ทำให้คุณรอนาน",
        "englishMeaning": "Sorry to keep you waiting."
      },
      {
        "scenario": "ขอโทษที่โทรผิด",
        "hanzi": "对不起，我打错电话了。",
        "pinyin": "Duì bù qǐ, wǒ dǎ cuò diàn huà le.",
        "thaiMeaning": "ขอโทษ ฉันโทรผิดเบอร์",
        "englishMeaning": "Sorry, I called the wrong number."
      }
    ]
  },
  {
    "id": "v144",
    "hanzi": "请",
    "pinyin": "qǐng",
    "thaiMeaning": "เชิญ / กรุณา",
    "englishMeaning": "please",
    "example": {
      "hanzi": "请坐。",
      "pinyin": "Qǐng zuò.",
      "thaiMeaning": "เชิญนั่ง",
      "englishMeaning": "Please take a seat."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "请坐。",
        "pinyin": "Qǐng zuò.",
        "thaiMeaning": "เชิญนั่ง",
        "englishMeaning": "Please take a seat."
      },
      {
        "scenario": "เชิญแขกเข้ามาด้านใน",
        "hanzi": "外面很热，请进。",
        "pinyin": "Wài miàn hěn rè, qǐng jìn.",
        "thaiMeaning": "ข้างนอกร้อนมาก เชิญเข้ามา",
        "englishMeaning": "It's hot outside, please come in."
      },
      {
        "scenario": "ขอให้อีกฝ่ายกรอกชื่อ",
        "hanzi": "请在这里写名字。",
        "pinyin": "Qǐng zài zhè lǐ xiě míng zì.",
        "thaiMeaning": "กรุณาเขียนชื่อตรงนี้",
        "englishMeaning": "Please write your name here."
      }
    ]
  },
  {
    "id": "v145",
    "hanzi": "欢迎",
    "pinyin": "huānyíng",
    "thaiMeaning": "ยินดีต้อนรับ",
    "englishMeaning": "welcome",
    "example": {
      "hanzi": "欢迎光临。",
      "pinyin": "Huānyíng guānglín.",
      "thaiMeaning": "ยินดีต้อนรับครับ",
      "englishMeaning": "Welcome."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "欢迎光临。",
        "pinyin": "Huān yíng guāng lín.",
        "thaiMeaning": "ยินดีต้อนรับครับ",
        "englishMeaning": "Welcome."
      },
      {
        "scenario": "ต้อนรับแขกเข้าบ้าน",
        "hanzi": "欢迎来我家做客。",
        "pinyin": "Huān yíng lái wǒ jiā zuò kè.",
        "thaiMeaning": "ยินดีต้อนรับมาเป็นแขกที่บ้านฉัน",
        "englishMeaning": "Welcome to my home."
      },
      {
        "scenario": "พนักงานต้อนรับลูกค้า",
        "hanzi": "欢迎光临，请问几位？",
        "pinyin": "Huān yíng guāng lín, qǐng wèn jǐ wèi?",
        "thaiMeaning": "ยินดีต้อนรับ มากี่ท่านครับ?",
        "englishMeaning": "Welcome, how many are there?"
      }
    ]
  },
  {
    "id": "v146",
    "hanzi": "当然",
    "pinyin": "dāngrán",
    "thaiMeaning": "แน่นอน",
    "englishMeaning": "certainly",
    "example": {
      "hanzi": "当然可以。",
      "pinyin": "Dāngrán kěyǐ.",
      "thaiMeaning": "ย่อมได้แน่นอน",
      "englishMeaning": "sure."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "当然可以。",
        "pinyin": "Dāng rán kě yǐ.",
        "thaiMeaning": "ย่อมได้แน่นอน",
        "englishMeaning": "sure."
      },
      {
        "scenario": "ตอบตกลงให้ยืมของ",
        "hanzi": "当然可以，你拿去用吧。",
        "pinyin": "Dāng rán kě yǐ, nǐ ná qù yòng ba.",
        "thaiMeaning": "ได้แน่นอน คุณเอาไปใช้ได้เลย",
        "englishMeaning": "Of course, you can take it and use it."
      },
      {
        "scenario": "ยืนยันว่าจะไปตามนัด",
        "hanzi": "我当然会去，放心吧。",
        "pinyin": "Wǒ dāng rán huì qù, fàng xīn ba.",
        "thaiMeaning": "แน่นอนว่าฉันจะไป วางใจได้",
        "englishMeaning": "Of course I will go, don't worry."
      }
    ]
  },
  {
    "id": "v147",
    "hanzi": "可以",
    "pinyin": "kěyǐ",
    "thaiMeaning": "ได้ / สามารถ",
    "englishMeaning": "Can",
    "example": {
      "hanzi": "没问题，可以。",
      "pinyin": "Méi wèntí, kěyǐ.",
      "thaiMeaning": "ไม่มีปัญหา ได้เลย",
      "englishMeaning": "No problem, you can."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "没问题，可以。",
        "pinyin": "Méi wèn tí, kě yǐ.",
        "thaiMeaning": "ไม่มีปัญหา ได้เลย",
        "englishMeaning": "No problem, you can."
      },
      {
        "scenario": "ขออนุญาตนั่งตรงนี้",
        "hanzi": "我可以坐这里吗？",
        "pinyin": "Wǒ kě yǐ zuò zhè lǐ ma?",
        "thaiMeaning": "ฉันนั่งตรงนี้ได้ไหม?",
        "englishMeaning": "Can I sit here?"
      },
      {
        "scenario": "บอกว่าสามารถจ่ายด้วยบัตร",
        "hanzi": "这里可以刷信用卡。",
        "pinyin": "Zhè lǐ kě yǐ shuā xìn yòng kǎ.",
        "thaiMeaning": "ที่นี่สามารถจ่ายด้วยบัตรเครดิตได้",
        "englishMeaning": "Credit cards can be swiped here."
      }
    ]
  },
  {
    "id": "v148",
    "hanzi": "没问题",
    "pinyin": "méi wèntí",
    "thaiMeaning": "ไม่มีปัญหา",
    "englishMeaning": "no problem",
    "example": {
      "hanzi": "好的，没问题。",
      "pinyin": "Hǎo de, méi wèntí.",
      "thaiMeaning": "โอเค ไม่มีปัญหา",
      "englishMeaning": "OK, no problem."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "好的，没问题。",
        "pinyin": "Hǎo de, méi wèn tí.",
        "thaiMeaning": "โอเค ไม่มีปัญหา",
        "englishMeaning": "OK, no problem."
      },
      {
        "scenario": "รับปากว่าจะช่วย",
        "hanzi": "没问题，我来帮你。",
        "pinyin": "Méi wèn tí, wǒ lái bāng nǐ.",
        "thaiMeaning": "ไม่มีปัญหา ฉันจะช่วยคุณ",
        "englishMeaning": "No problem, I'll help you."
      },
      {
        "scenario": "ยืนยันว่าจะทำงานเสร็จทัน",
        "hanzi": "明天完成，没问题。",
        "pinyin": "Míng tiān wán chéng, méi wèn tí.",
        "thaiMeaning": "ทำเสร็จพรุ่งนี้ ไม่มีปัญหา",
        "englishMeaning": "Finished tomorrow, no problem."
      }
    ]
  },
  {
    "id": "v149",
    "hanzi": "干杯",
    "pinyin": "gānbēi",
    "thaiMeaning": "ชนแก้ว / ดื่มหมดแก้ว",
    "englishMeaning": "cheers",
    "example": {
      "hanzi": "大家干杯！",
      "pinyin": "Dàjiā gānbēi!",
      "thaiMeaning": "ทุกคนชนแก้ว!",
      "englishMeaning": "Cheers everyone!"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "大家干杯！",
        "pinyin": "Dà jiā gān bēi!",
        "thaiMeaning": "ทุกคนชนแก้ว!",
        "englishMeaning": "Cheers everyone!"
      },
      {
        "scenario": "ฉลองวันเกิดกับเพื่อน",
        "hanzi": "祝你生日快乐，干杯！",
        "pinyin": "Zhù nǐ shēng rì kuài lè, gān bēi!",
        "thaiMeaning": "สุขสันต์วันเกิด ชนแก้ว!",
        "englishMeaning": "Happy birthday to you, cheers!"
      },
      {
        "scenario": "ฉลองความสำเร็จของทีม",
        "hanzi": "为了我们的成功，干杯！",
        "pinyin": "Wèi le wǒ men de chéng gōng, gān bēi!",
        "thaiMeaning": "เพื่อความสำเร็จของพวกเรา ชนแก้ว!",
        "englishMeaning": "Cheers to our success!"
      }
    ]
  },
  {
    "id": "v150",
    "hanzi": "保重",
    "pinyin": "bǎozhòng",
    "thaiMeaning": "ดูแลตัวเองด้วย / รักษาสุขภาพ",
    "englishMeaning": "Take care of yourself",
    "example": {
      "hanzi": "多保重。",
      "pinyin": "Duō bǎozhòng.",
      "thaiMeaning": "ดูแลตัวเองด้วยนะ",
      "englishMeaning": "Take care."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "多保重。",
        "pinyin": "Duō bǎo zhòng.",
        "thaiMeaning": "ดูแลตัวเองด้วยนะ",
        "englishMeaning": "Take care."
      },
      {
        "scenario": "บอกลาเพื่อนที่กำลังเดินทาง",
        "hanzi": "一路平安，多保重。",
        "pinyin": "Yí lù píng ān, duō bǎo zhòng.",
        "thaiMeaning": "เดินทางปลอดภัย ดูแลตัวเองด้วย",
        "englishMeaning": "Have a safe journey and take care."
      },
      {
        "scenario": "เตือนคนป่วยให้พักผ่อน",
        "hanzi": "最近天气冷，你要保重身体。",
        "pinyin": "Zuì jìn tiān qì lěng, nǐ yào bǎo zhòng shēn tǐ.",
        "thaiMeaning": "ช่วงนี้อากาศหนาว คุณต้องดูแลสุขภาพ",
        "englishMeaning": "It's been cold recently, so you should take care of yourself."
      }
    ]
  },
  {
    "id": "v151",
    "hanzi": "天",
    "pinyin": "tiān",
    "thaiMeaning": "ฟ้า / วัน",
    "englishMeaning": "sky",
    "example": {
      "hanzi": "晴天。",
      "pinyin": "Qíngtiān.",
      "thaiMeaning": "ท้องฟ้าแจ่มใส",
      "englishMeaning": "sunny."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "晴天。",
        "pinyin": "Qíng tiān.",
        "thaiMeaning": "ท้องฟ้าแจ่มใส",
        "englishMeaning": "sunny."
      },
      {
        "scenario": "บอกจำนวนวันที่จะพัก",
        "hanzi": "我在这里住三天。",
        "pinyin": "Wǒ zài zhè lǐ zhù sān tiān.",
        "thaiMeaning": "ฉันพักที่นี่สามวัน",
        "englishMeaning": "I stayed here for three days."
      },
      {
        "scenario": "ชมท้องฟ้าวันนี้",
        "hanzi": "今天的天很蓝。",
        "pinyin": "Jīn tiān de tiān hěn lán.",
        "thaiMeaning": "ท้องฟ้าวันนี้สีฟ้ามาก",
        "englishMeaning": "The sky is very blue today."
      }
    ]
  },
  {
    "id": "v152",
    "hanzi": "太阳",
    "pinyin": "tàiyáng",
    "thaiMeaning": "พระอาทิตย์ / ดวงอาทิตย์",
    "englishMeaning": "sun",
    "example": {
      "hanzi": "太阳升起。",
      "pinyin": "Tàiyáng shēngqǐ.",
      "thaiMeaning": "ดวงอาทิตย์ขึ้น",
      "englishMeaning": "The sun rises."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "太阳升起。",
        "pinyin": "Tài yáng shēng qǐ.",
        "thaiMeaning": "ดวงอาทิตย์ขึ้น",
        "englishMeaning": "The sun rises."
      },
      {
        "scenario": "บอกว่าแดดแรง",
        "hanzi": "太阳很大，戴上帽子吧。",
        "pinyin": "Tài yáng hěn dà, dài shàng mào zi ba.",
        "thaiMeaning": "แดดแรงมาก ใส่หมวกเถอะ",
        "englishMeaning": "The sun is very bright, so wear a hat."
      },
      {
        "scenario": "ดูพระอาทิตย์ตกริมทะเล",
        "hanzi": "我们一起看太阳下山。",
        "pinyin": "Wǒ men yì qǐ kàn tài yáng xià shān.",
        "thaiMeaning": "พวกเราดูพระอาทิตย์ตกด้วยกัน",
        "englishMeaning": "Let's watch the sun go down together."
      }
    ]
  },
  {
    "id": "v153",
    "hanzi": "月亮",
    "pinyin": "yuèliang",
    "thaiMeaning": "พระจันทร์",
    "englishMeaning": "moon",
    "example": {
      "hanzi": "月亮很圆。",
      "pinyin": "Yuèliang hěn yuán.",
      "thaiMeaning": "พระจันทร์กลมโต",
      "englishMeaning": "The moon is very round."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "月亮很圆。",
        "pinyin": "Yuè liàng hěn yuán.",
        "thaiMeaning": "พระจันทร์กลมโต",
        "englishMeaning": "The moon is very round."
      },
      {
        "scenario": "ชมพระจันทร์ในคืนฟ้าใส",
        "hanzi": "今晚的月亮真漂亮。",
        "pinyin": "Jīn wǎn de yuè liàng zhēn piào liang.",
        "thaiMeaning": "พระจันทร์คืนนี้สวยจริงๆ",
        "englishMeaning": "The moon is so beautiful tonight."
      },
      {
        "scenario": "บอกเด็กให้มองพระจันทร์",
        "hanzi": "你看，月亮出来了。",
        "pinyin": "Nǐ kàn, yuè liàng chū lái le.",
        "thaiMeaning": "ดูสิ พระจันทร์ออกมาแล้ว",
        "englishMeaning": "Look, the moon is out."
      }
    ]
  },
  {
    "id": "v154",
    "hanzi": "风",
    "pinyin": "fēng",
    "thaiMeaning": "ลม",
    "englishMeaning": "wind",
    "example": {
      "hanzi": "刮风了。",
      "pinyin": "Guāfēng le.",
      "thaiMeaning": "ลมพัดแล้ว",
      "englishMeaning": "It's windy."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "刮风了。",
        "pinyin": "Guā fēng le.",
        "thaiMeaning": "ลมพัดแล้ว",
        "englishMeaning": "It's windy."
      },
      {
        "scenario": "เตือนให้ปิดหน้าต่าง",
        "hanzi": "外面风很大，把窗户关上吧。",
        "pinyin": "Wài miàn fēng hěn dà, bǎ chuāng hù guān shàng ba.",
        "thaiMeaning": "ข้างนอกลมแรง ปิดหน้าต่างเถอะ",
        "englishMeaning": "It's very windy outside. Close the windows."
      },
      {
        "scenario": "เดินเล่นรับลมเย็น",
        "hanzi": "今天的风很凉快。",
        "pinyin": "Jīn tiān de fēng hěn liáng kuai.",
        "thaiMeaning": "ลมวันนี้เย็นสบายมาก",
        "englishMeaning": "The wind is very cool today."
      }
    ]
  },
  {
    "id": "v155",
    "hanzi": "雨",
    "pinyin": "yǔ",
    "thaiMeaning": "ฝน",
    "englishMeaning": "rain",
    "example": {
      "hanzi": "下雨了。",
      "pinyin": "Xiàyǔ le.",
      "thaiMeaning": "ฝนตกแล้ว",
      "englishMeaning": "It's raining."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "下雨了。",
        "pinyin": "Xià yǔ le.",
        "thaiMeaning": "ฝนตกแล้ว",
        "englishMeaning": "It's raining."
      },
      {
        "scenario": "บอกว่าฝนเริ่มตก",
        "hanzi": "雨越下越大了。",
        "pinyin": "Yǔ yuè xià yuè dà le.",
        "thaiMeaning": "ฝนตกหนักขึ้นเรื่อยๆ",
        "englishMeaning": "The rain was getting heavier."
      },
      {
        "scenario": "ถามว่าได้นำร่มมาหรือไม่",
        "hanzi": "外面有雨，你带伞了吗？",
        "pinyin": "Wài miàn yǒu yǔ, nǐ dài sǎn le ma?",
        "thaiMeaning": "ข้างนอกมีฝน คุณเอาร่มมาไหม?",
        "englishMeaning": "It's raining outside. Did you bring an umbrella?"
      }
    ]
  },
  {
    "id": "v156",
    "hanzi": "雪",
    "pinyin": "xuě",
    "thaiMeaning": "หิมะ",
    "englishMeaning": "Snow",
    "example": {
      "hanzi": "下雪了。",
      "pinyin": "Xiàxuě le.",
      "thaiMeaning": "หิมะตกแล้ว",
      "englishMeaning": "It's snowing."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "下雪了。",
        "pinyin": "Xià xuě le.",
        "thaiMeaning": "หิมะตกแล้ว",
        "englishMeaning": "It's snowing."
      },
      {
        "scenario": "ตื่นเต้นที่เห็นหิมะ",
        "hanzi": "快看，外面下雪了！",
        "pinyin": "Kuài kàn, wài miàn xià xuě le!",
        "thaiMeaning": "ดูเร็ว ข้างนอกหิมะตกแล้ว!",
        "englishMeaning": "Look, it's snowing outside!"
      },
      {
        "scenario": "เล่นหิมะกับเด็กๆ",
        "hanzi": "孩子们在雪里玩。",
        "pinyin": "Hái zi men zài xuě lǐ wán.",
        "thaiMeaning": "เด็กๆ กำลังเล่นอยู่ในหิมะ",
        "englishMeaning": "Children playing in the snow."
      }
    ]
  },
  {
    "id": "v157",
    "hanzi": "云",
    "pinyin": "yún",
    "thaiMeaning": "ก้อนเมฆ",
    "englishMeaning": "cloud",
    "example": {
      "hanzi": "白云。",
      "pinyin": "Bái yún.",
      "thaiMeaning": "เมฆสีขาว",
      "englishMeaning": "White clouds."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "白云。",
        "pinyin": "Bái yún.",
        "thaiMeaning": "เมฆสีขาว",
        "englishMeaning": "White clouds."
      },
      {
        "scenario": "บอกว่าท้องฟ้ามีเมฆมาก",
        "hanzi": "天上的云越来越多。",
        "pinyin": "Tiān shàng de yún yuè lái yuè duō.",
        "thaiMeaning": "เมฆบนท้องฟ้ามากขึ้นเรื่อยๆ",
        "englishMeaning": "There are more and more clouds in the sky."
      },
      {
        "scenario": "ชี้เมฆที่รูปร่างเหมือนสัตว์",
        "hanzi": "那朵云看起来像一只羊。",
        "pinyin": "Nà duǒ yún kàn qǐ lái xiàng yì zhī yáng.",
        "thaiMeaning": "เมฆก้อนนั้นดูเหมือนแกะตัวหนึ่ง",
        "englishMeaning": "That cloud looks like a sheep."
      }
    ]
  },
  {
    "id": "v158",
    "hanzi": "花",
    "pinyin": "huā",
    "thaiMeaning": "ดอกไม้",
    "englishMeaning": "flower",
    "example": {
      "hanzi": "看花。",
      "pinyin": "Kàn huā.",
      "thaiMeaning": "ชมดอกไม้",
      "englishMeaning": "Look at the flowers."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "看花。",
        "pinyin": "Kàn huā.",
        "thaiMeaning": "ชมดอกไม้",
        "englishMeaning": "Look at the flowers."
      },
      {
        "scenario": "ซื้อดอกไม้ให้แม่",
        "hanzi": "我买了一束花送给妈妈。",
        "pinyin": "Wǒ mǎi le yí shù huā sòng gěi mā ma.",
        "thaiMeaning": "ฉันซื้อดอกไม้หนึ่งช่อให้แม่",
        "englishMeaning": "I bought a bouquet of flowers for my mother."
      },
      {
        "scenario": "เตือนว่าอย่าเด็ดดอกไม้",
        "hanzi": "公园里的花不能摘。",
        "pinyin": "Gōng yuán lǐ de huā bù néng zhāi.",
        "thaiMeaning": "ดอกไม้ในสวนห้ามเด็ด",
        "englishMeaning": "You cannot pick flowers in the park."
      }
    ]
  },
  {
    "id": "v159",
    "hanzi": "草",
    "pinyin": "cǎo",
    "thaiMeaning": "หญ้า / ต้นหญ้า",
    "englishMeaning": "Grass",
    "example": {
      "hanzi": "绿草。",
      "pinyin": "Lǜ cǎo.",
      "thaiMeaning": "หญ้าสีเขียว",
      "englishMeaning": "green grass."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "绿草。",
        "pinyin": "Lǜ cǎo.",
        "thaiMeaning": "หญ้าสีเขียว",
        "englishMeaning": "green grass."
      },
      {
        "scenario": "บอกเด็กไม่ให้เหยียบสนามหญ้า",
        "hanzi": "请不要踩草。",
        "pinyin": "Qǐng bú yào cǎi cǎo.",
        "thaiMeaning": "กรุณาอย่าเหยียบหญ้า",
        "englishMeaning": "Please don't step on the grass."
      },
      {
        "scenario": "เล่าว่าหญ้าเขียวหลังฝนตก",
        "hanzi": "下雨后，草变绿了。",
        "pinyin": "Xià yǔ hòu, cǎo biàn lǜ le.",
        "thaiMeaning": "หลังฝนตก หญ้ากลายเป็นสีเขียว",
        "englishMeaning": "After it rains, the grass turns green."
      }
    ]
  },
  {
    "id": "v160",
    "hanzi": "树",
    "pinyin": "shù",
    "thaiMeaning": "ต้นไม้",
    "englishMeaning": "Tree",
    "example": {
      "hanzi": "大树。",
      "pinyin": "Dà shù.",
      "thaiMeaning": "ต้นไม้ใหญ่",
      "englishMeaning": "Big tree."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "大树。",
        "pinyin": "Dà shù.",
        "thaiMeaning": "ต้นไม้ใหญ่",
        "englishMeaning": "Big tree."
      },
      {
        "scenario": "พักใต้ต้นไม้",
        "hanzi": "我们在树下休息一下吧。",
        "pinyin": "Wǒ men zài shù xià xiū xi yí xià ba.",
        "thaiMeaning": "พวกเราพักใต้ต้นไม้สักหน่อย",
        "englishMeaning": "Let's take a rest under the tree."
      },
      {
        "scenario": "ปลูกต้นไม้หลังบ้าน",
        "hanzi": "爸爸在房子后面种了一棵树。",
        "pinyin": "Bà ba zài fáng zi hòu miàn zhǒng le yì kē shù.",
        "thaiMeaning": "พ่อปลูกต้นไม้หนึ่งต้นหลังบ้าน",
        "englishMeaning": "Dad planted a tree behind the house."
      }
    ]
  },
  {
    "id": "v161",
    "hanzi": "狗",
    "pinyin": "gǒu",
    "thaiMeaning": "สุนัข / หมา",
    "englishMeaning": "dog",
    "example": {
      "hanzi": "小狗。",
      "pinyin": "Xiǎo gǒu.",
      "thaiMeaning": "ลูกหมา",
      "englishMeaning": "puppy."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "小狗。",
        "pinyin": "Xiǎo gǒu.",
        "thaiMeaning": "ลูกหมา",
        "englishMeaning": "puppy."
      },
      {
        "scenario": "แนะนำสุนัขที่บ้าน",
        "hanzi": "我家有一只小狗。",
        "pinyin": "Wǒ jiā yǒu yì zhī xiǎo gǒu.",
        "thaiMeaning": "บ้านฉันมีสุนัขตัวเล็กหนึ่งตัว",
        "englishMeaning": "There is a puppy at home."
      },
      {
        "scenario": "เตือนว่าอย่าเข้าใกล้สุนัขแปลกหน้า",
        "hanzi": "不要随便摸陌生的狗。",
        "pinyin": "Bú yào suí biàn mō mò shēng de gǒu.",
        "thaiMeaning": "อย่าลูบสุนัขแปลกหน้าตามใจ",
        "englishMeaning": "Don't touch strange dogs casually."
      }
    ]
  },
  {
    "id": "v162",
    "hanzi": "猫",
    "pinyin": "māo",
    "thaiMeaning": "แมว",
    "englishMeaning": "cat",
    "example": {
      "hanzi": "养猫。",
      "pinyin": "Yǎng māo.",
      "thaiMeaning": "เลี้ยงแมว",
      "englishMeaning": "Keep a cat."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "养猫。",
        "pinyin": "Yǎng māo.",
        "thaiMeaning": "เลี้ยงแมว",
        "englishMeaning": "Keep a cat."
      },
      {
        "scenario": "ตามหาแมวที่ซ่อนอยู่",
        "hanzi": "我的猫躲在床下面。",
        "pinyin": "Wǒ de māo duǒ zài chuáng xià miàn.",
        "thaiMeaning": "แมวของฉันซ่อนอยู่ใต้เตียง",
        "englishMeaning": "My cat is hiding under the bed."
      },
      {
        "scenario": "ให้อาหารแมว",
        "hanzi": "别忘了给猫吃东西。",
        "pinyin": "Bié wàng le gěi māo chī dōng xī.",
        "thaiMeaning": "อย่าลืมให้อาหารแมว",
        "englishMeaning": "Don't forget to give the cat something to eat."
      }
    ]
  },
  {
    "id": "v163",
    "hanzi": "鸟",
    "pinyin": "niǎo",
    "thaiMeaning": "นก",
    "englishMeaning": "bird",
    "example": {
      "hanzi": "飞鸟。",
      "pinyin": "Fēi niǎo.",
      "thaiMeaning": "นกบิน",
      "englishMeaning": "flying birds."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "飞鸟。",
        "pinyin": "Fēi niǎo.",
        "thaiMeaning": "นกบิน",
        "englishMeaning": "flying birds."
      },
      {
        "scenario": "ดูนกเกาะบนต้นไม้",
        "hanzi": "树上停着一只鸟。",
        "pinyin": "Shù shàng tíng zhe yì zhī niǎo.",
        "thaiMeaning": "มีนกตัวหนึ่งเกาะอยู่บนต้นไม้",
        "englishMeaning": "There is a bird sitting on the tree."
      },
      {
        "scenario": "ได้ยินเสียงนกร้องตอนเช้า",
        "hanzi": "早上我听见鸟在叫。",
        "pinyin": "Zǎo shàng wǒ tīng jiàn niǎo zài jiào.",
        "thaiMeaning": "ตอนเช้าฉันได้ยินนกร้อง",
        "englishMeaning": "I heard birds chirping in the morning."
      }
    ]
  },
  {
    "id": "v164",
    "hanzi": "猪",
    "pinyin": "zhū",
    "thaiMeaning": "หมู",
    "englishMeaning": "pig",
    "example": {
      "hanzi": "猪肉。",
      "pinyin": "Zhūròu.",
      "thaiMeaning": "เนื้อหมู",
      "englishMeaning": "pork."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "猪肉。",
        "pinyin": "Zhū ròu.",
        "thaiMeaning": "เนื้อหมู",
        "englishMeaning": "pork."
      },
      {
        "scenario": "พาเด็กดูหมูในฟาร์ม",
        "hanzi": "农场里有很多猪。",
        "pinyin": "Nóng chǎng lǐ yǒu hěn duō zhū.",
        "thaiMeaning": "ในฟาร์มมีหมูหลายตัว",
        "englishMeaning": "There are many pigs in the farm."
      },
      {
        "scenario": "บอกว่าไม่กินเนื้อหมู",
        "hanzi": "我不吃猪肉。",
        "pinyin": "Wǒ bù chī zhū ròu.",
        "thaiMeaning": "ฉันไม่กินเนื้อหมู",
        "englishMeaning": "I don't eat pork."
      }
    ]
  },
  {
    "id": "v165",
    "hanzi": "牛",
    "pinyin": "niú",
    "thaiMeaning": "วัว",
    "englishMeaning": "ox",
    "example": {
      "hanzi": "黄牛。",
      "pinyin": "Huángniú.",
      "thaiMeaning": "วัว",
      "englishMeaning": "cattle."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "黄牛。",
        "pinyin": "Huáng niú.",
        "thaiMeaning": "วัว",
        "englishMeaning": "cattle."
      },
      {
        "scenario": "เห็นวัวกินหญ้า",
        "hanzi": "那头牛正在吃草。",
        "pinyin": "Nà tóu niú zhèng zài chī cǎo.",
        "thaiMeaning": "วัวตัวนั้นกำลังกินหญ้า",
        "englishMeaning": "The cow is eating grass."
      },
      {
        "scenario": "ซื้อนมวัวสด",
        "hanzi": "这是今天早上的牛奶。",
        "pinyin": "Zhè shì jīn tiān zǎo shàng de niú nǎi.",
        "thaiMeaning": "นี่คือนมวัวของเช้าวันนี้",
        "englishMeaning": "This is milk for this morning."
      }
    ]
  },
  {
    "id": "v166",
    "hanzi": "羊",
    "pinyin": "yáng",
    "thaiMeaning": "แกะ / แพะ",
    "englishMeaning": "sheep",
    "example": {
      "hanzi": "羊肉。",
      "pinyin": "Yángròu.",
      "thaiMeaning": "เนื้อแกะ",
      "englishMeaning": "mutton."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "羊肉。",
        "pinyin": "Yáng ròu.",
        "thaiMeaning": "เนื้อแกะ",
        "englishMeaning": "mutton."
      },
      {
        "scenario": "นับแกะในทุ่ง",
        "hanzi": "山上有一群羊。",
        "pinyin": "Shān shàng yǒu yì qún yáng.",
        "thaiMeaning": "บนภูเขามีแกะฝูงหนึ่ง",
        "englishMeaning": "There is a flock of sheep on the mountain."
      },
      {
        "scenario": "บอกว่าเสื้อตัวนี้ทำจากขนแกะ",
        "hanzi": "这件衣服是羊毛做的。",
        "pinyin": "Zhè jiàn yī fu shì yáng máo zuò de.",
        "thaiMeaning": "เสื้อตัวนี้ทำจากขนแกะ",
        "englishMeaning": "This dress is made of wool."
      }
    ]
  },
  {
    "id": "v167",
    "hanzi": "马",
    "pinyin": "mǎ",
    "thaiMeaning": "ม้า",
    "englishMeaning": "horse",
    "example": {
      "hanzi": "骑马。",
      "pinyin": "Qí mǎ.",
      "thaiMeaning": "ขี่ม้า",
      "englishMeaning": "horse riding."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "骑马。",
        "pinyin": "Qí mǎ.",
        "thaiMeaning": "ขี่ม้า",
        "englishMeaning": "horse riding."
      },
      {
        "scenario": "ลองขี่ม้าครั้งแรก",
        "hanzi": "我第一次骑马，有点紧张。",
        "pinyin": "Wǒ dì yī cì qí mǎ, yǒu diǎn jǐn zhāng.",
        "thaiMeaning": "ฉันขี่ม้าครั้งแรก รู้สึกตื่นเต้นนิดหน่อย",
        "englishMeaning": "It was my first time riding a horse and I was a little nervous."
      },
      {
        "scenario": "ดูม้าวิ่งในสนาม",
        "hanzi": "那匹马跑得很快。",
        "pinyin": "Nà pǐ mǎ pǎo dé hěn kuài.",
        "thaiMeaning": "ม้าตัวนั้นวิ่งเร็วมาก",
        "englishMeaning": "The horse ran very fast."
      }
    ]
  },
  {
    "id": "v168",
    "hanzi": "鸭",
    "pinyin": "yā",
    "thaiMeaning": "เป็ด",
    "englishMeaning": "duck",
    "example": {
      "hanzi": "烤鸭。",
      "pinyin": "Kǎoyā.",
      "thaiMeaning": "เป็ดย่าง",
      "englishMeaning": "Roast Duck."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "烤鸭。",
        "pinyin": "Kǎo yā.",
        "thaiMeaning": "เป็ดย่าง",
        "englishMeaning": "Roast Duck."
      },
      {
        "scenario": "ดูเป็ดว่ายน้ำ",
        "hanzi": "几只鸭在水里游。",
        "pinyin": "Jǐ zhī yā zài shuǐ lǐ yóu.",
        "thaiMeaning": "เป็ดหลายตัวกำลังว่ายน้ำ",
        "englishMeaning": "Several ducks swim in the water."
      },
      {
        "scenario": "สั่งเป็ดย่างในร้านอาหาร",
        "hanzi": "我们点一份烤鸭吧。",
        "pinyin": "Wǒ men diǎn yí fèn kǎo yā ba.",
        "thaiMeaning": "พวกเราสั่งเป็ดย่างหนึ่งจานนะ",
        "englishMeaning": "Let's order roast duck."
      }
    ]
  },
  {
    "id": "v169",
    "hanzi": "头",
    "pinyin": "tóu",
    "thaiMeaning": "ศีรษะ / หัว",
    "englishMeaning": "head",
    "example": {
      "hanzi": "低头。",
      "pinyin": "Dī tóu.",
      "thaiMeaning": "ก้มหัว",
      "englishMeaning": "Lower your head."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "低头。",
        "pinyin": "Dī tóu.",
        "thaiMeaning": "ก้มหัว",
        "englishMeaning": "Lower your head."
      },
      {
        "scenario": "บอกอาการเจ็บศีรษะ",
        "hanzi": "我的头有点疼。",
        "pinyin": "Wǒ de tóu yǒu diǎn téng.",
        "thaiMeaning": "หัวของฉันปวดนิดหน่อย",
        "englishMeaning": "My head hurts a little."
      },
      {
        "scenario": "เตือนให้ก้มศีรษะ",
        "hanzi": "小心上面，请低头。",
        "pinyin": "Xiǎo xīn shàng miàn, qǐng dī tóu.",
        "thaiMeaning": "ระวังด้านบน กรุณาก้มศีรษะ",
        "englishMeaning": "Be careful up there and please keep your head down."
      }
    ]
  },
  {
    "id": "v170",
    "hanzi": "眼睛",
    "pinyin": "yǎnjīng",
    "thaiMeaning": "ดวงตา / ตา",
    "englishMeaning": "Eye",
    "example": {
      "hanzi": "大眼睛。",
      "pinyin": "Dà yǎnjīng.",
      "thaiMeaning": "ตากลมโต",
      "englishMeaning": "Big eyes."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "大眼睛。",
        "pinyin": "Dà yǎn jīng.",
        "thaiMeaning": "ตากลมโต",
        "englishMeaning": "Big eyes."
      },
      {
        "scenario": "พักสายตาจากหน้าจอ",
        "hanzi": "看电脑久了，眼睛很累。",
        "pinyin": "Kàn diàn nǎo jiǔ le, yǎn jīng hěn lèi.",
        "thaiMeaning": "มองคอมพิวเตอร์นานแล้ว ตาล้ามาก",
        "englishMeaning": "After looking at the computer for a long time, my eyes are tired."
      },
      {
        "scenario": "บอกว่าเข้าตา",
        "hanzi": "我的眼睛里好像进了东西。",
        "pinyin": "Wǒ de yǎn jīng lǐ hǎo xiàng jìn le dōng xī.",
        "thaiMeaning": "เหมือนมีอะไรเข้าตาฉัน",
        "englishMeaning": "It felt like something had gotten into my eyes."
      }
    ]
  },
  {
    "id": "v171",
    "hanzi": "耳朵",
    "pinyin": "ěrduo",
    "thaiMeaning": "หู / หูฟัง",
    "englishMeaning": "ear",
    "example": {
      "hanzi": "听耳朵。",
      "pinyin": "Tīng ěrduo.",
      "thaiMeaning": "ฟังด้วยหู",
      "englishMeaning": "Listen to your ears."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "听耳朵。",
        "pinyin": "Tīng ěr duo.",
        "thaiMeaning": "ฟังด้วยหู",
        "englishMeaning": "Listen to your ears."
      },
      {
        "scenario": "บอกแพทย์ว่าเจ็บหู",
        "hanzi": "医生，我的耳朵很疼。",
        "pinyin": "Yī shēng, wǒ de ěr duo hěn téng.",
        "thaiMeaning": "หมอครับ หูของฉันเจ็บมาก",
        "englishMeaning": "Doctor, my ears hurt."
      },
      {
        "scenario": "เตือนว่าอย่าเปิดเพลงดัง",
        "hanzi": "音乐太大声，对耳朵不好。",
        "pinyin": "Yīn yuè tài dà shēng, duì ěr duo bù hǎo.",
        "thaiMeaning": "เพลงดังเกินไป ไม่ดีต่อหู",
        "englishMeaning": "The music is too loud, which is not good for the ears."
      }
    ]
  },
  {
    "id": "v172",
    "hanzi": "鼻子",
    "pinyin": "bízi",
    "thaiMeaning": "จมูก",
    "englishMeaning": "nose",
    "example": {
      "hanzi": "高鼻子。",
      "pinyin": "Gāo bízi.",
      "thaiMeaning": "จมูกโด่ง",
      "englishMeaning": "High nose."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "高鼻子。",
        "pinyin": "Gāo bí zi.",
        "thaiMeaning": "จมูกโด่ง",
        "englishMeaning": "High nose."
      },
      {
        "scenario": "เป็นหวัดและคัดจมูก",
        "hanzi": "我感冒了，鼻子不舒服。",
        "pinyin": "Wǒ gǎn mào le, bí zi bù shū fú.",
        "thaiMeaning": "ฉันเป็นหวัด จมูกไม่สบาย",
        "englishMeaning": "I have a cold and my nose feels uncomfortable."
      },
      {
        "scenario": "ได้กลิ่นอาหารหอม",
        "hanzi": "我的鼻子闻到了香味。",
        "pinyin": "Wǒ de bí zi wén dào le xiāng wèi.",
        "thaiMeaning": "จมูกของฉันได้กลิ่นหอม",
        "englishMeaning": "My nose caught the scent."
      }
    ]
  },
  {
    "id": "v173",
    "hanzi": "嘴巴",
    "pinyin": "zuǐba",
    "thaiMeaning": "ปาก",
    "englishMeaning": "mouth",
    "example": {
      "hanzi": "张嘴。",
      "pinyin": "Zhāng zuǐ.",
      "thaiMeaning": "อ้าปาก",
      "englishMeaning": "Open your mouth."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "张嘴。",
        "pinyin": "Zhāng zuǐ.",
        "thaiMeaning": "อ้าปาก",
        "englishMeaning": "Open your mouth."
      },
      {
        "scenario": "ขอให้เด็กอ้าปาก",
        "hanzi": "张开嘴巴让我看看。",
        "pinyin": "Zhāng kāi zuǐ ba ràng wǒ kàn kàn.",
        "thaiMeaning": "อ้าปากให้ฉันดูหน่อย",
        "englishMeaning": "Open your mouth and let me see."
      },
      {
        "scenario": "เตือนว่าอย่าพูดตอนมีอาหารในปาก",
        "hanzi": "嘴巴里有东西时别说话。",
        "pinyin": "Zuǐ ba lǐ yǒu dōng xī shí bié shuō huà.",
        "thaiMeaning": "อย่าพูดตอนมีอาหารอยู่ในปาก",
        "englishMeaning": "Don't talk with something in your mouth."
      }
    ]
  },
  {
    "id": "v174",
    "hanzi": "手",
    "pinyin": "shǒu",
    "thaiMeaning": "มือ",
    "englishMeaning": "hand",
    "example": {
      "hanzi": "洗手。",
      "pinyin": "Xǐ shǒu.",
      "thaiMeaning": "ล้างมือ",
      "englishMeaning": "handwashing."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "洗手。",
        "pinyin": "Xǐ shǒu.",
        "thaiMeaning": "ล้างมือ",
        "englishMeaning": "handwashing."
      },
      {
        "scenario": "เตือนให้ล้างมือก่อนกิน",
        "hanzi": "吃饭前先洗手。",
        "pinyin": "Chī fàn qián xiān xǐ shǒu.",
        "thaiMeaning": "ก่อนกินข้าวล้างมือก่อน",
        "englishMeaning": "Wash your hands before eating."
      },
      {
        "scenario": "ขอให้ยกมือเมื่อต้องการตอบ",
        "hanzi": "知道答案的人请举手。",
        "pinyin": "Zhī dào dá àn de rén qǐng jǔ shǒu.",
        "thaiMeaning": "คนที่รู้คำตอบกรุณายกมือ",
        "englishMeaning": "Anyone who knows the answer please raise your hand."
      }
    ]
  },
  {
    "id": "v175",
    "hanzi": "脚",
    "pinyin": "jiǎo",
    "thaiMeaning": "เท้า / เท้าข้าง",
    "englishMeaning": "foot",
    "example": {
      "hanzi": "洗脚。",
      "pinyin": "Xǐ jiǎo.",
      "thaiMeaning": "ล้างเท้า",
      "englishMeaning": "Wash your feet."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "洗脚。",
        "pinyin": "Xǐ jiǎo.",
        "thaiMeaning": "ล้างเท้า",
        "englishMeaning": "Wash your feet."
      },
      {
        "scenario": "บอกว่าเดินจนเจ็บเท้า",
        "hanzi": "我走了很久，脚有点疼。",
        "pinyin": "Wǒ zǒu le hěn jiǔ, jiǎo yǒu diǎn téng.",
        "thaiMeaning": "ฉันเดินมานาน เท้าเจ็บนิดหน่อย",
        "englishMeaning": "I walked for a long time and my feet hurt a little."
      },
      {
        "scenario": "เตือนให้เช็ดเท้าก่อนเข้าบ้าน",
        "hanzi": "进屋前把脚擦干。",
        "pinyin": "Jìn wū qián bǎ jiǎo cā gān.",
        "thaiMeaning": "ก่อนเข้าบ้านเช็ดเท้าให้แห้ง",
        "englishMeaning": "Dry your feet before entering the house."
      }
    ]
  },
  {
    "id": "v176",
    "hanzi": "头发",
    "pinyin": "tóufa",
    "thaiMeaning": "เส้นผม",
    "englishMeaning": "hair",
    "example": {
      "hanzi": "洗头发。",
      "pinyin": "Xǐ tóufa.",
      "thaiMeaning": "สระผม",
      "englishMeaning": "Wash your hair."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "洗头发。",
        "pinyin": "Xǐ tóu fa.",
        "thaiMeaning": "สระผม",
        "englishMeaning": "Wash your hair."
      },
      {
        "scenario": "บอกว่าจะไปตัดผม",
        "hanzi": "我的头发太长了，想去剪短。",
        "pinyin": "Wǒ de tóu fa tài cháng le, xiǎng qù jiǎn duǎn.",
        "thaiMeaning": "ผมของฉันยาวเกินไป อยากไปตัดให้สั้น",
        "englishMeaning": "My hair is too long and I want to cut it short."
      },
      {
        "scenario": "ชมสีผมใหม่",
        "hanzi": "你的新头发颜色很好看。",
        "pinyin": "Nǐ de xīn tóu fa yán sè hěn hǎo kàn.",
        "thaiMeaning": "สีผมใหม่ของคุณสวยมาก",
        "englishMeaning": "Your new hair color looks great."
      }
    ]
  },
  {
    "id": "v177",
    "hanzi": "牙齿",
    "pinyin": "yáchǐ",
    "thaiMeaning": "ฟัน",
    "englishMeaning": "teeth",
    "example": {
      "hanzi": "刷牙齿。",
      "pinyin": "Shuā yáchǐ.",
      "thaiMeaning": "แปรงฟัน",
      "englishMeaning": "Brush your teeth."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "刷牙齿。",
        "pinyin": "Shuā yá chǐ.",
        "thaiMeaning": "แปรงฟัน",
        "englishMeaning": "Brush your teeth."
      },
      {
        "scenario": "เตือนให้แปรงฟันสะอาด",
        "hanzi": "每天要把牙齿刷干净。",
        "pinyin": "Měi tiān yào bǎ yá chǐ shuā gān jìng.",
        "thaiMeaning": "ทุกวันต้องแปรงฟันให้สะอาด",
        "englishMeaning": "Brush your teeth every day."
      },
      {
        "scenario": "บอกหมอฟันว่าปวดฟัน",
        "hanzi": "医生，我这颗牙齿很疼。",
        "pinyin": "Yī shēng, wǒ zhè kē yá chǐ hěn téng.",
        "thaiMeaning": "หมอครับ ฟันซี่นี้ของฉันปวดมาก",
        "englishMeaning": "Doctor, my tooth hurts."
      }
    ]
  },
  {
    "id": "v178",
    "hanzi": "脸",
    "pinyin": "liǎn",
    "thaiMeaning": "ใบหน้า / หน้า",
    "englishMeaning": "Face",
    "example": {
      "hanzi": "洗脸。",
      "pinyin": "Xǐ liǎn.",
      "thaiMeaning": "ล้างหน้า",
      "englishMeaning": "Wash your face."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "洗脸。",
        "pinyin": "Xǐ liǎn.",
        "thaiMeaning": "ล้างหน้า",
        "englishMeaning": "Wash your face."
      },
      {
        "scenario": "บอกว่าใบหน้าแดงเพราะร้อน",
        "hanzi": "天气太热，他的脸都红了。",
        "pinyin": "Tiān qì tài rè, tā de liǎn dōu hóng le.",
        "thaiMeaning": "อากาศร้อนเกินไป หน้าเขาแดงหมดแล้ว",
        "englishMeaning": "It was so hot that his face turned red."
      },
      {
        "scenario": "ล้างหน้าด้วยน้ำเย็น",
        "hanzi": "我用冷水洗了脸。",
        "pinyin": "Wǒ yòng lěng shuǐ xǐ le liǎn.",
        "thaiMeaning": "ฉันล้างหน้าด้วยน้ำเย็น",
        "englishMeaning": "I washed my face with cold water."
      }
    ]
  },
  {
    "id": "v179",
    "hanzi": "门",
    "pinyin": "mén",
    "thaiMeaning": "ประตู",
    "englishMeaning": "Door",
    "example": {
      "hanzi": "推门。",
      "pinyin": "Tuī mén.",
      "thaiMeaning": "ผลักประตู",
      "englishMeaning": "Push the door."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "推门。",
        "pinyin": "Tuī mén.",
        "thaiMeaning": "ผลักประตู",
        "englishMeaning": "Push the door."
      },
      {
        "scenario": "บอกว่าประตูล็อกอยู่",
        "hanzi": "门锁上了，我进不去。",
        "pinyin": "Mén suǒ shàng le, wǒ jìn bú qù.",
        "thaiMeaning": "ประตูล็อกอยู่ ฉันเข้าไปไม่ได้",
        "englishMeaning": "The door is locked and I can't get in."
      },
      {
        "scenario": "ได้ยินคนเคาะประตู",
        "hanzi": "有人在敲门。",
        "pinyin": "Yǒu rén zài qiāo mén.",
        "thaiMeaning": "มีคนกำลังเคาะประตู",
        "englishMeaning": "There's a knock on the door."
      }
    ]
  },
  {
    "id": "v180",
    "hanzi": "窗户",
    "pinyin": "chuānghu",
    "thaiMeaning": "หน้าต่าง",
    "englishMeaning": "window",
    "example": {
      "hanzi": "开窗户。",
      "pinyin": "Kāi chuānghu.",
      "thaiMeaning": "เปิดหน้าต่าง",
      "englishMeaning": "Open the window."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "开窗户。",
        "pinyin": "Kāi chuāng hù.",
        "thaiMeaning": "เปิดหน้าต่าง",
        "englishMeaning": "Open the window."
      },
      {
        "scenario": "เปิดหน้าต่างให้อากาศถ่ายเท",
        "hanzi": "房间太闷了，打开窗户吧。",
        "pinyin": "Fáng jiān tài mēn le, dǎ kāi chuāng hù ba.",
        "thaiMeaning": "ห้องอับเกินไป เปิดหน้าต่างเถอะ",
        "englishMeaning": "The room is too stuffy. Please open the window."
      },
      {
        "scenario": "ปิดหน้าต่างเพราะฝนตก",
        "hanzi": "下雨了，快关窗户。",
        "pinyin": "Xià yǔ le, kuài guān chuāng hù.",
        "thaiMeaning": "ฝนตกแล้ว รีบปิดหน้าต่าง",
        "englishMeaning": "It's raining. Close the windows."
      }
    ]
  },
  {
    "id": "v181",
    "hanzi": "床",
    "pinyin": "chuáng",
    "thaiMeaning": "เตียงนอน",
    "englishMeaning": "bed",
    "example": {
      "hanzi": "躺上床。",
      "pinyin": "Tǎng shàng chuáng.",
      "thaiMeaning": "นอนบนเตียง",
      "englishMeaning": "Get into bed."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "躺上床。",
        "pinyin": "Tǎng shàng chuáng.",
        "thaiMeaning": "นอนบนเตียง",
        "englishMeaning": "Get into bed."
      },
      {
        "scenario": "บอกว่าอยากนอนพัก",
        "hanzi": "我太累了，想躺在床上。",
        "pinyin": "Wǒ tài lèi le, xiǎng tǎng zài chuáng shàng.",
        "thaiMeaning": "ฉันเหนื่อยมาก อยากนอนบนเตียง",
        "englishMeaning": "I was so tired that I wanted to lie in bed."
      },
      {
        "scenario": "จัดเตียงให้แขก",
        "hanzi": "客人来以前，我把床整理好了。",
        "pinyin": "Kè rén lái yǐ qián, wǒ bǎ chuáng zhěng lǐ hǎo le.",
        "thaiMeaning": "ก่อนแขกมา ฉันจัดเตียงเรียบร้อยแล้ว",
        "englishMeaning": "I made the bed before the guests came."
      }
    ]
  },
  {
    "id": "v182",
    "hanzi": "沙发",
    "pinyin": "shāfā",
    "thaiMeaning": "โซฟา",
    "englishMeaning": "sofa",
    "example": {
      "hanzi": "坐沙发。",
      "pinyin": "Zuò shāfā.",
      "thaiMeaning": "นั่งโซฟา",
      "englishMeaning": "Sit on the sofa."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "坐沙发。",
        "pinyin": "Zuò shā fā.",
        "thaiMeaning": "นั่งโซฟา",
        "englishMeaning": "Sit on the sofa."
      },
      {
        "scenario": "เชิญแขกนั่งโซฟา",
        "hanzi": "请坐在沙发上休息。",
        "pinyin": "Qǐng zuò zài shā fā shàng xiū xi.",
        "thaiMeaning": "เชิญนั่งพักบนโซฟา",
        "englishMeaning": "Please sit on the sofa and rest."
      },
      {
        "scenario": "พบรีโมตใต้โซฟา",
        "hanzi": "遥控器在沙发下面。",
        "pinyin": "Yáo kòng qì zài shā fā xià miàn.",
        "thaiMeaning": "รีโมตอยู่ใต้โซฟา",
        "englishMeaning": "The remote control is under the sofa."
      }
    ]
  },
  {
    "id": "v183",
    "hanzi": "电视",
    "pinyin": "diànshì",
    "thaiMeaning": "โทรทัศน์ / ทีวี",
    "englishMeaning": "television",
    "example": {
      "hanzi": "看电视。",
      "pinyin": "Kàn diànshì.",
      "thaiMeaning": "ดูทีวี",
      "englishMeaning": "watch TV."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "看电视。",
        "pinyin": "Kàn diàn shì.",
        "thaiMeaning": "ดูทีวี",
        "englishMeaning": "watch TV."
      },
      {
        "scenario": "ดูข่าวทางโทรทัศน์",
        "hanzi": "爸爸正在看电视新闻。",
        "pinyin": "Bà ba zhèng zài kàn diàn shì xīn wén.",
        "thaiMeaning": "พ่อกำลังดูข่าวทางโทรทัศน์",
        "englishMeaning": "Dad is watching the news on TV."
      },
      {
        "scenario": "ขอให้ลดเสียงโทรทัศน์",
        "hanzi": "电视声音太大了，请调小一点。",
        "pinyin": "Diàn shì shēng yīn tài dà le, qǐng diào xiǎo yì diǎn.",
        "thaiMeaning": "เสียงโทรทัศน์ดังเกินไป กรุณาลดลงหน่อย",
        "englishMeaning": "The TV is too loud. Please turn it down."
      }
    ]
  },
  {
    "id": "v184",
    "hanzi": "冰箱",
    "pinyin": "bīngxiāng",
    "thaiMeaning": "ตู้เย็น",
    "englishMeaning": "refrigerator",
    "example": {
      "hanzi": "开冰箱。",
      "pinyin": "Kāi bīngxiāng.",
      "thaiMeaning": "เปิดตู้เย็น",
      "englishMeaning": "Open the refrigerator."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "开冰箱。",
        "pinyin": "Kāi bīng xiāng.",
        "thaiMeaning": "เปิดตู้เย็น",
        "englishMeaning": "Open the refrigerator."
      },
      {
        "scenario": "เก็บนมในตู้เย็น",
        "hanzi": "把牛奶放进冰箱吧。",
        "pinyin": "Bǎ niú nǎi fàng jìn bīng xiāng ba.",
        "thaiMeaning": "เอานมใส่ตู้เย็นเถอะ",
        "englishMeaning": "Put the milk in the refrigerator."
      },
      {
        "scenario": "ตรวจของที่เหลือในตู้เย็น",
        "hanzi": "冰箱里还有什么菜？",
        "pinyin": "Bīng xiāng lǐ hái yǒu shén me cài?",
        "thaiMeaning": "ในตู้เย็นยังมีผักหรืออาหารอะไรบ้าง?",
        "englishMeaning": "What else is in the refrigerator?"
      }
    ]
  },
  {
    "id": "v185",
    "hanzi": "空调",
    "pinyin": "kōngtiáo",
    "thaiMeaning": "เครื่องปรับอากาศ / แอร์",
    "englishMeaning": "air conditioner",
    "example": {
      "hanzi": "开空调。",
      "pinyin": "Kāi kōngtiáo.",
      "thaiMeaning": "เปิดแอร์",
      "englishMeaning": "Turn on the air conditioner."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "开空调。",
        "pinyin": "Kāi kōng tiáo.",
        "thaiMeaning": "เปิดแอร์",
        "englishMeaning": "Turn on the air conditioner."
      },
      {
        "scenario": "ขอเปิดแอร์เพราะร้อน",
        "hanzi": "房间很热，可以开空调吗？",
        "pinyin": "Fáng jiān hěn rè, kě yǐ kāi kōng tiáo ma?",
        "thaiMeaning": "ห้องร้อนมาก เปิดแอร์ได้ไหม?",
        "englishMeaning": "The room is very hot. Can you turn on the air conditioner?"
      },
      {
        "scenario": "เตือนให้ปิดแอร์ก่อนออก",
        "hanzi": "出门前记得关空调。",
        "pinyin": "Chū mén qián jì de guān kōng tiáo.",
        "thaiMeaning": "ก่อนออกจากบ้านอย่าลืมปิดแอร์",
        "englishMeaning": "Remember to turn off the air conditioner before going out."
      }
    ]
  },
  {
    "id": "v186",
    "hanzi": "洗衣机",
    "pinyin": "xǐyījī",
    "thaiMeaning": "เครื่องซักผ้า",
    "englishMeaning": "washing machine",
    "example": {
      "hanzi": "用洗衣机。",
      "pinyin": "Yòng xǐyījī.",
      "thaiMeaning": "ใช้เครื่องซักผ้า",
      "englishMeaning": "Use a washing machine."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "用洗衣机。",
        "pinyin": "Yòng xǐ yī jī.",
        "thaiMeaning": "ใช้เครื่องซักผ้า",
        "englishMeaning": "Use a washing machine."
      },
      {
        "scenario": "ใส่เสื้อผ้าลงเครื่องซักผ้า",
        "hanzi": "我把衣服放进洗衣机了。",
        "pinyin": "Wǒ bǎ yī fu fàng jìn xǐ yī jī le.",
        "thaiMeaning": "ฉันใส่เสื้อผ้าลงเครื่องซักผ้าแล้ว",
        "englishMeaning": "I put the clothes in the washing machine."
      },
      {
        "scenario": "แจ้งว่าเครื่องซักผ้าเสีย",
        "hanzi": "洗衣机坏了，不能用了。",
        "pinyin": "Xǐ yī jī huài le, bù néng yòng le.",
        "thaiMeaning": "เครื่องซักผ้าเสีย ใช้ไม่ได้แล้ว",
        "englishMeaning": "The washing machine is broken and cannot be used."
      }
    ]
  },
  {
    "id": "v187",
    "hanzi": "筷子",
    "pinyin": "kuàizi",
    "thaiMeaning": "ตะเกียบ",
    "englishMeaning": "Chopsticks",
    "example": {
      "hanzi": "用筷子。",
      "pinyin": "Yòng kuàizi.",
      "thaiMeaning": "ใช้ตะเกียบ",
      "englishMeaning": "Use chopsticks."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "用筷子。",
        "pinyin": "Yòng kuài zi.",
        "thaiMeaning": "ใช้ตะเกียบ",
        "englishMeaning": "Use chopsticks."
      },
      {
        "scenario": "ขอตะเกียบเพิ่มในร้านอาหาร",
        "hanzi": "麻烦再给我一双筷子。",
        "pinyin": "Má fán zài gěi wǒ yì shuāng kuài zi.",
        "thaiMeaning": "รบกวนขอตะเกียบเพิ่มอีกหนึ่งคู่",
        "englishMeaning": "Please give me another pair of chopsticks."
      },
      {
        "scenario": "สอนเพื่อนใช้ตะเกียบ",
        "hanzi": "你会用筷子吗？",
        "pinyin": "Nǐ huì yòng kuài zi ma?",
        "thaiMeaning": "คุณใช้ตะเกียบเป็นไหม?",
        "englishMeaning": "Can you use chopsticks?"
      }
    ]
  },
  {
    "id": "v188",
    "hanzi": "碗",
    "pinyin": "wǎn",
    "thaiMeaning": "ชาม / ถ้วย",
    "englishMeaning": "bowl",
    "example": {
      "hanzi": "拿个碗。",
      "pinyin": "Ná gè wǎn.",
      "thaiMeaning": "ขอชามใบหนึ่ง",
      "englishMeaning": "Get a bowl."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "拿个碗。",
        "pinyin": "Ná gè wǎn.",
        "thaiMeaning": "ขอชามใบหนึ่ง",
        "englishMeaning": "Get a bowl."
      },
      {
        "scenario": "ตักข้าวใส่ชาม",
        "hanzi": "请给我盛一碗饭。",
        "pinyin": "Qǐng gěi wǒ shèng yì wǎn fàn.",
        "thaiMeaning": "กรุณาตักข้าวให้ฉันหนึ่งชาม",
        "englishMeaning": "Please bring me a bowl of rice."
      },
      {
        "scenario": "ล้างชามหลังกินข้าว",
        "hanzi": "吃完饭后我来洗碗。",
        "pinyin": "Chī wán fàn hòu wǒ lái xǐ wǎn.",
        "thaiMeaning": "หลังกินข้าวฉันจะล้างชามเอง",
        "englishMeaning": "After eating, I'll wash the dishes."
      }
    ]
  },
  {
    "id": "v189",
    "hanzi": "盘子",
    "pinyin": "pánzi",
    "thaiMeaning": "จาน",
    "englishMeaning": "plate",
    "example": {
      "hanzi": "端盘子。",
      "pinyin": "Duān pánzi.",
      "thaiMeaning": "ถือจาน",
      "englishMeaning": "Serve plates."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "端盘子。",
        "pinyin": "Duān pán zi.",
        "thaiMeaning": "ถือจาน",
        "englishMeaning": "Serve plates."
      },
      {
        "scenario": "วางอาหารลงจาน",
        "hanzi": "把水果放在盘子里。",
        "pinyin": "Bǎ shuǐ guǒ fàng zài pán zi lǐ.",
        "thaiMeaning": "วางผลไม้ไว้ในจาน",
        "englishMeaning": "Put the fruit on a plate."
      },
      {
        "scenario": "ขอจานสะอาดเพิ่ม",
        "hanzi": "这个盘子脏了，请换一个。",
        "pinyin": "Zhè ge pán zi zāng le, qǐng huàn yí gè.",
        "thaiMeaning": "จานใบนี้สกปรก กรุณาเปลี่ยนใบใหม่",
        "englishMeaning": "This plate is dirty, please change it."
      }
    ]
  },
  {
    "id": "v190",
    "hanzi": "杯子",
    "pinyin": "bēizi",
    "thaiMeaning": "แก้วน้ำ / ถ้วย",
    "englishMeaning": "cup",
    "example": {
      "hanzi": "洗杯子。",
      "pinyin": "Xǐ bēizi.",
      "thaiMeaning": "ล้างแก้ว",
      "englishMeaning": "Wash the cups."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "洗杯子。",
        "pinyin": "Xǐ bēi zi.",
        "thaiMeaning": "ล้างแก้ว",
        "englishMeaning": "Wash the cups."
      },
      {
        "scenario": "เติมน้ำลงแก้ว",
        "hanzi": "请把杯子倒满水。",
        "pinyin": "Qǐng bǎ bēi zi dǎo mǎn shuǐ.",
        "thaiMeaning": "กรุณาเติมน้ำให้เต็มแก้ว",
        "englishMeaning": "Please fill the cup with water."
      },
      {
        "scenario": "เตือนว่าแก้วกำลังจะตก",
        "hanzi": "小心，杯子快掉了！",
        "pinyin": "Xiǎo xīn, bēi zi kuài diào le!",
        "thaiMeaning": "ระวัง แก้วกำลังจะตก!",
        "englishMeaning": "Be careful, the cup is about to fall!"
      }
    ]
  },
  {
    "id": "v191",
    "hanzi": "刀",
    "pinyin": "dāo",
    "thaiMeaning": "มีด",
    "englishMeaning": "knife",
    "example": {
      "hanzi": "拿刀。",
      "pinyin": "Ná dāo.",
      "thaiMeaning": "ถือมีด",
      "englishMeaning": "Get the knife."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "拿刀。",
        "pinyin": "Ná dāo.",
        "thaiMeaning": "ถือมีด",
        "englishMeaning": "Get the knife."
      },
      {
        "scenario": "ขอมีดหั่นผลไม้",
        "hanzi": "我需要一把刀切水果。",
        "pinyin": "Wǒ xū yào yì bǎ dāo qiè shuǐ guǒ.",
        "thaiMeaning": "ฉันต้องการมีดหนึ่งเล่มหั่นผลไม้",
        "englishMeaning": "I need a knife to cut fruit."
      },
      {
        "scenario": "เตือนเด็กว่ามีดคม",
        "hanzi": "刀很锋利，小孩子不能碰。",
        "pinyin": "Dāo hěn fēng lì, xiǎo hái zi bù néng pèng.",
        "thaiMeaning": "มีดคมมาก เด็กห้ามจับ",
        "englishMeaning": "The knife is very sharp and should not be touched by children."
      }
    ]
  },
  {
    "id": "v192",
    "hanzi": "叉",
    "pinyin": "chā",
    "thaiMeaning": "ส้อม",
    "englishMeaning": "fork",
    "example": {
      "hanzi": "用叉子。",
      "pinyin": "Yòng chāzi.",
      "thaiMeaning": "ใช้ส้อม",
      "englishMeaning": "Use a fork."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "用叉子。",
        "pinyin": "Yòng chā zi.",
        "thaiMeaning": "ใช้ส้อม",
        "englishMeaning": "Use a fork."
      },
      {
        "scenario": "ขอส้อมแทนตะเกียบ",
        "hanzi": "我不会用筷子，请给我一把叉。",
        "pinyin": "Wǒ bú huì yòng kuài zi, qǐng gěi wǒ yì bǎ chā.",
        "thaiMeaning": "ฉันใช้ตะเกียบไม่เป็น ขอส้อมหนึ่งคัน",
        "englishMeaning": "I can't use chopsticks. Please give me a fork."
      },
      {
        "scenario": "ใช้ส้อมกินผลไม้",
        "hanzi": "她用叉吃水果。",
        "pinyin": "Tā yòng chā chī shuǐ guǒ.",
        "thaiMeaning": "เธอใช้ส้อมกินผลไม้",
        "englishMeaning": "She eats fruit with a fork."
      }
    ]
  },
  {
    "id": "v193",
    "hanzi": "锅",
    "pinyin": "guō",
    "thaiMeaning": "หม้อ / กระทะ",
    "englishMeaning": "pot",
    "example": {
      "hanzi": "炒菜锅。",
      "pinyin": "Chǎocài guō.",
      "thaiMeaning": "กระทะผัด",
      "englishMeaning": "Wok."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "炒菜锅。",
        "pinyin": "Chǎo cài guō.",
        "thaiMeaning": "กระทะผัด",
        "englishMeaning": "Wok."
      },
      {
        "scenario": "ต้มน้ำในหม้อ",
        "hanzi": "锅里的水开了。",
        "pinyin": "Guō lǐ de shuǐ kāi le.",
        "thaiMeaning": "น้ำในหม้อเดือดแล้ว",
        "englishMeaning": "The water in the pot is boiling."
      },
      {
        "scenario": "ล้างหม้อหลังทำอาหาร",
        "hanzi": "做完饭别忘了洗锅。",
        "pinyin": "Zuò wán fàn bié wàng le xǐ guō.",
        "thaiMeaning": "ทำอาหารเสร็จอย่าลืมล้างหม้อ",
        "englishMeaning": "Don't forget to wash the pot after cooking."
      }
    ]
  },
  {
    "id": "v194",
    "hanzi": "瓶子",
    "pinyin": "píngzi",
    "thaiMeaning": "ขวด",
    "englishMeaning": "bottle",
    "example": {
      "hanzi": "水瓶。",
      "pinyin": "Shuǐpíng.",
      "thaiMeaning": "ขวดน้ำ",
      "englishMeaning": "water bottle."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "水瓶。",
        "pinyin": "Shuǐ píng.",
        "thaiMeaning": "ขวดน้ำ",
        "englishMeaning": "water bottle."
      },
      {
        "scenario": "เปิดขวดไม่ออก",
        "hanzi": "这个瓶子我打不开。",
        "pinyin": "Zhè ge píng zi wǒ dǎ bù kāi.",
        "thaiMeaning": "ขวดนี้ฉันเปิดไม่ออก",
        "englishMeaning": "I can't open this bottle."
      },
      {
        "scenario": "นำขวดเปล่าไปทิ้ง",
        "hanzi": "这个瓶子空了，可以扔掉。",
        "pinyin": "Zhè ge píng zi kōng le, kě yǐ rēng diào.",
        "thaiMeaning": "ขวดนี้ว่างแล้ว ทิ้งได้",
        "englishMeaning": "This bottle is empty and can be thrown away."
      }
    ]
  },
  {
    "id": "v195",
    "hanzi": "书",
    "pinyin": "shū",
    "thaiMeaning": "หนังสือ",
    "englishMeaning": "Book",
    "example": {
      "hanzi": "看书。",
      "pinyin": "Kàn shū.",
      "thaiMeaning": "อ่านหนังสือ",
      "englishMeaning": "Read a book."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "看书。",
        "pinyin": "Kàn shū.",
        "thaiMeaning": "อ่านหนังสือ",
        "englishMeaning": "Read a book."
      },
      {
        "scenario": "ยืมหนังสือจากห้องสมุด",
        "hanzi": "我从图书馆借了两本书。",
        "pinyin": "Wǒ cóng tú shū guǎn jiè le liǎng běn shū.",
        "thaiMeaning": "ฉันยืมหนังสือสองเล่มจากห้องสมุด",
        "englishMeaning": "I borrowed two books from the library."
      },
      {
        "scenario": "อ่านหนังสือบนรถไฟ",
        "hanzi": "他在车上看书。",
        "pinyin": "Tā zài chē shàng kàn shū.",
        "thaiMeaning": "เขาอ่านหนังสือบนรถ",
        "englishMeaning": "He was reading in the car."
      }
    ]
  },
  {
    "id": "v196",
    "hanzi": "报纸",
    "pinyin": "bàozhǐ",
    "thaiMeaning": "หนังสือพิมพ์",
    "englishMeaning": "newspaper",
    "example": {
      "hanzi": "读报纸。",
      "pinyin": "Dú bàozhǐ.",
      "thaiMeaning": "อ่านหนังสือพิมพ์",
      "englishMeaning": "Read the newspaper."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "读报纸。",
        "pinyin": "Dú bào zhǐ.",
        "thaiMeaning": "อ่านหนังสือพิมพ์",
        "englishMeaning": "Read the newspaper."
      },
      {
        "scenario": "อ่านหนังสือพิมพ์ตอนเช้า",
        "hanzi": "爷爷每天早上看报纸。",
        "pinyin": "Yé ye měi tiān zǎo shàng kàn bào zhǐ.",
        "thaiMeaning": "คุณปู่อ่านหนังสือพิมพ์ทุกเช้า",
        "englishMeaning": "Grandpa reads the newspaper every morning."
      },
      {
        "scenario": "ถามหาหนังสือพิมพ์วันนี้",
        "hanzi": "今天的报纸在哪里？",
        "pinyin": "Jīn tiān de bào zhǐ zài nǎ lǐ?",
        "thaiMeaning": "หนังสือพิมพ์วันนี้อยู่ที่ไหน?",
        "englishMeaning": "Where is today's newspaper?"
      }
    ]
  },
  {
    "id": "v197",
    "hanzi": "字典",
    "pinyin": "zìdiǎn",
    "thaiMeaning": "พจนานุกรม",
    "englishMeaning": "dictionary",
    "example": {
      "hanzi": "查字典。",
      "pinyin": "Chá zìdiǎn.",
      "thaiMeaning": "เปิดพจนานุกรม",
      "englishMeaning": "Look it up in a dictionary."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "查字典。",
        "pinyin": "Chá zì diǎn.",
        "thaiMeaning": "เปิดพจนานุกรม",
        "englishMeaning": "Look it up in a dictionary."
      },
      {
        "scenario": "เปิดพจนานุกรมหาคำ",
        "hanzi": "这个词我不懂，要查字典。",
        "pinyin": "Zhè ge cí wǒ bù dǒng, yào chá zì diǎn.",
        "thaiMeaning": "ฉันไม่เข้าใจคำนี้ ต้องเปิดพจนานุกรม",
        "englishMeaning": "I don't understand this word, so I have to look it up in the dictionary."
      },
      {
        "scenario": "ยืมพจนานุกรมของเพื่อน",
        "hanzi": "你的字典可以借我吗？",
        "pinyin": "Nǐ de zì diǎn kě yǐ jiè wǒ ma?",
        "thaiMeaning": "ขอยืมพจนานุกรมของคุณได้ไหม?",
        "englishMeaning": "Can you lend me your dictionary?"
      }
    ]
  },
  {
    "id": "v198",
    "hanzi": "本子",
    "pinyin": "běnzi",
    "thaiMeaning": "สมุดบันทึก",
    "englishMeaning": "book",
    "example": {
      "hanzi": "写本子。",
      "pinyin": "Xiě běnzi.",
      "thaiMeaning": "เขียนสมุด",
      "englishMeaning": "Write a notebook."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "写本子。",
        "pinyin": "Xiě běn zi.",
        "thaiMeaning": "เขียนสมุด",
        "englishMeaning": "Write a notebook."
      },
      {
        "scenario": "จดคำศัพท์ลงสมุด",
        "hanzi": "我把新词写在本子上。",
        "pinyin": "Wǒ bǎ xīn cí xiě zài běn zi shàng.",
        "thaiMeaning": "ฉันเขียนคำศัพท์ใหม่ลงในสมุด",
        "englishMeaning": "I write the new words in my notebook."
      },
      {
        "scenario": "ลืมสมุดไว้ที่บ้าน",
        "hanzi": "我的本子忘在家里了。",
        "pinyin": "Wǒ de běn zi wàng zài jiā lǐ le.",
        "thaiMeaning": "ฉันลืมสมุดไว้ที่บ้าน",
        "englishMeaning": "I forgot my notebook at home."
      }
    ]
  },
  {
    "id": "v199",
    "hanzi": "地图",
    "pinyin": "dìtú",
    "thaiMeaning": "แผนที่",
    "englishMeaning": "map",
    "example": {
      "hanzi": "看地图。",
      "pinyin": "Kàn dìtú.",
      "thaiMeaning": "ดูแผนที่",
      "englishMeaning": "Look at the map."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "看地图。",
        "pinyin": "Kàn dì tú.",
        "thaiMeaning": "ดูแผนที่",
        "englishMeaning": "Look at the map."
      },
      {
        "scenario": "เปิดแผนที่หาเส้นทาง",
        "hanzi": "我看一下地图再走。",
        "pinyin": "Wǒ kàn yí xià dì tú zài zǒu.",
        "thaiMeaning": "ฉันขอดูแผนที่ก่อนแล้วค่อยไป",
        "englishMeaning": "I'll look at the map before leaving."
      },
      {
        "scenario": "ชี้ตำแหน่งบนแผนที่",
        "hanzi": "你能在地图上指出机场吗？",
        "pinyin": "Nǐ néng zài dì tú shàng zhǐ chū jī chǎng ma?",
        "thaiMeaning": "คุณชี้สนามบินบนแผนที่ได้ไหม?",
        "englishMeaning": "Can you point out the airport on the map?"
      }
    ]
  },
  {
    "id": "v200",
    "hanzi": "照片",
    "pinyin": "zhàopiàn",
    "thaiMeaning": "รูปถ่าย / ภาพ",
    "englishMeaning": "photo",
    "example": {
      "hanzi": "拍照片。",
      "pinyin": "Pāi zhàopiàn.",
      "thaiMeaning": "ถ่ายรูป",
      "englishMeaning": "Take photos."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "拍照片。",
        "pinyin": "Pāi zhào piàn.",
        "thaiMeaning": "ถ่ายรูป",
        "englishMeaning": "Take photos."
      },
      {
        "scenario": "ให้เพื่อนดูรูปครอบครัว",
        "hanzi": "这是我们家的照片。",
        "pinyin": "Zhè shì wǒ men jiā de zhào piàn.",
        "thaiMeaning": "นี่คือรูปครอบครัวของเรา",
        "englishMeaning": "This is a picture of our home."
      },
      {
        "scenario": "ขอถ่ายรูปด้วยกัน",
        "hanzi": "我们一起拍张照片吧。",
        "pinyin": "Wǒ men yì qǐ pāi zhāng zhào piàn ba.",
        "thaiMeaning": "พวกเราถ่ายรูปด้วยกันหนึ่งรูปนะ",
        "englishMeaning": "Let's take a photo together."
      }
    ]
  },
  {
    "id": "v201",
    "hanzi": "红",
    "pinyin": "hóng",
    "thaiMeaning": "แดง / สีแดง",
    "englishMeaning": "red",
    "example": {
      "hanzi": "红色。",
      "pinyin": "Hóngsè.",
      "thaiMeaning": "สีแดง",
      "englishMeaning": "red."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "红色。",
        "pinyin": "Hóng sè.",
        "thaiMeaning": "สีแดง",
        "englishMeaning": "red."
      },
      {
        "scenario": "เลือกเสื้อสีแดง",
        "hanzi": "我想试试那件红衣服。",
        "pinyin": "Wǒ xiǎng shì shì nà jiàn hóng yī fu.",
        "thaiMeaning": "ฉันอยากลองเสื้อสีแดงตัวนั้น",
        "englishMeaning": "I want to try on that red dress."
      },
      {
        "scenario": "บอกว่าสัญญาณไฟเป็นสีแดง",
        "hanzi": "现在是红灯，不能走。",
        "pinyin": "Xiàn zài shì hóng dēng, bù néng zǒu.",
        "thaiMeaning": "ตอนนี้ไฟแดง ยังไปไม่ได้",
        "englishMeaning": "It's a red light now, you can't go."
      }
    ]
  },
  {
    "id": "v202",
    "hanzi": "黄",
    "pinyin": "huáng",
    "thaiMeaning": "เหลือง / สีเหลือง",
    "englishMeaning": "yellow",
    "example": {
      "hanzi": "黄色。",
      "pinyin": "Huángsè.",
      "thaiMeaning": "สีเหลือง",
      "englishMeaning": "yellow."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "黄色。",
        "pinyin": "Huáng sè.",
        "thaiMeaning": "สีเหลือง",
        "englishMeaning": "yellow."
      },
      {
        "scenario": "บรรยายสีของดอกไม้",
        "hanzi": "这些花都是黄色的。",
        "pinyin": "Zhè xiē huā dōu shì huáng sè de.",
        "thaiMeaning": "ดอกไม้เหล่านี้เป็นสีเหลืองทั้งหมด",
        "englishMeaning": "These flowers are all yellow."
      },
      {
        "scenario": "เลือกกล้วยสีเหลือง",
        "hanzi": "黄色的香蕉已经熟了。",
        "pinyin": "Huáng sè de xiāng jiāo yǐ jīng shú le.",
        "thaiMeaning": "กล้วยสีเหลืองสุกแล้ว",
        "englishMeaning": "The yellow bananas are ripe."
      }
    ]
  },
  {
    "id": "v203",
    "hanzi": "蓝",
    "pinyin": "lán",
    "thaiMeaning": "น้ำเงิน / ฟ้า",
    "englishMeaning": "blue",
    "example": {
      "hanzi": "蓝色。",
      "pinyin": "Lánsè.",
      "thaiMeaning": "สีน้ำเงิน",
      "englishMeaning": "blue."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "蓝色。",
        "pinyin": "Lán sè.",
        "thaiMeaning": "สีน้ำเงิน",
        "englishMeaning": "blue."
      },
      {
        "scenario": "ชมท้องฟ้าสีฟ้า",
        "hanzi": "今天的天空特别蓝。",
        "pinyin": "Jīn tiān de tiān kōng tè bié lán.",
        "thaiMeaning": "ท้องฟ้าวันนี้สีฟ้ามาก",
        "englishMeaning": "The sky is particularly blue today."
      },
      {
        "scenario": "ขอเสื้อสีน้ำเงิน",
        "hanzi": "请给我看那件蓝衣服。",
        "pinyin": "Qǐng gěi wǒ kàn nà jiàn lán yī fu.",
        "thaiMeaning": "กรุณาให้ฉันดูเสื้อสีน้ำเงินตัวนั้น",
        "englishMeaning": "Please show me the blue dress."
      }
    ]
  },
  {
    "id": "v204",
    "hanzi": "绿",
    "pinyin": "lǜ",
    "thaiMeaning": "เขียว / สีเขียว",
    "englishMeaning": "green",
    "example": {
      "hanzi": "绿色。",
      "pinyin": "Lǜsè.",
      "thaiMeaning": "สีเขียว",
      "englishMeaning": "green."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "绿色。",
        "pinyin": "Lǜ sè.",
        "thaiMeaning": "สีเขียว",
        "englishMeaning": "green."
      },
      {
        "scenario": "รอให้ไฟเขียว",
        "hanzi": "绿灯亮了，我们走吧。",
        "pinyin": "Lǜ dēng liàng le, wǒ men zǒu ba.",
        "thaiMeaning": "ไฟเขียวแล้ว พวกเราไปกันเถอะ",
        "englishMeaning": "The green light is on, let's go."
      },
      {
        "scenario": "บรรยายใบไม้ในฤดูใบไม้ผลิ",
        "hanzi": "春天的树叶很绿。",
        "pinyin": "Chūn tiān de shù yè hěn lǜ.",
        "thaiMeaning": "ใบไม้ในฤดูใบไม้ผลิเขียวมาก",
        "englishMeaning": "The leaves are very green in spring."
      }
    ]
  },
  {
    "id": "v205",
    "hanzi": "白",
    "pinyin": "bái",
    "thaiMeaning": "ขาว / สีขาว",
    "englishMeaning": "white",
    "example": {
      "hanzi": "白色。",
      "pinyin": "Báisè.",
      "thaiMeaning": "สีขาว",
      "englishMeaning": "White."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "白色。",
        "pinyin": "Bái sè.",
        "thaiMeaning": "สีขาว",
        "englishMeaning": "White."
      },
      {
        "scenario": "เลือกเสื้อเชิ้ตสีขาว",
        "hanzi": "上班时我喜欢穿白衬衫。",
        "pinyin": "Shàng bān shí wǒ xǐ huan chuān bái chèn shān.",
        "thaiMeaning": "เวลาทำงานฉันชอบใส่เสื้อเชิ้ตสีขาว",
        "englishMeaning": "I like to wear a white shirt when I go to work."
      },
      {
        "scenario": "บอกว่าสุนัขมีขนสีขาว",
        "hanzi": "那只狗全身都是白的。",
        "pinyin": "Nà zhī gǒu quán shēn dōu shì bái de.",
        "thaiMeaning": "สุนัขตัวนั้นมีสีขาวทั้งตัว",
        "englishMeaning": "The dog is all white."
      }
    ]
  },
  {
    "id": "v206",
    "hanzi": "黑",
    "pinyin": "hēi",
    "thaiMeaning": "ดำ / สีดำ",
    "englishMeaning": "black",
    "example": {
      "hanzi": "黑色。",
      "pinyin": "Hēisè.",
      "thaiMeaning": "สีดำ",
      "englishMeaning": "black."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "黑色。",
        "pinyin": "Hēi sè.",
        "thaiMeaning": "สีดำ",
        "englishMeaning": "black."
      },
      {
        "scenario": "ถามหากระเป๋าสีดำ",
        "hanzi": "你看到我的黑包了吗？",
        "pinyin": "Nǐ kàn dào wǒ de hēi bāo le ma?",
        "thaiMeaning": "คุณเห็นกระเป๋าสีดำของฉันไหม?",
        "englishMeaning": "Have you seen my black bag?"
      },
      {
        "scenario": "บอกว่าท้องฟ้ามืดแล้ว",
        "hanzi": "天已经黑了，早点回家吧。",
        "pinyin": "Tiān yǐ jīng hēi le, zǎo diǎn huí jiā ba.",
        "thaiMeaning": "ฟ้ามืดแล้ว กลับบ้านเร็วหน่อยนะ",
        "englishMeaning": "It's getting dark, go home early."
      }
    ]
  },
  {
    "id": "v207",
    "hanzi": "漂亮",
    "pinyin": "piàoliang",
    "thaiMeaning": "สวย / สวยงาม",
    "englishMeaning": "pretty",
    "example": {
      "hanzi": "很漂亮。",
      "pinyin": "Hěn piàoliang.",
      "thaiMeaning": "สวยมาก",
      "englishMeaning": "very beautiful."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "很漂亮。",
        "pinyin": "Hěn piào liang.",
        "thaiMeaning": "สวยมาก",
        "englishMeaning": "very beautiful."
      },
      {
        "scenario": "ชมชุดของเพื่อน",
        "hanzi": "你今天穿得很漂亮。",
        "pinyin": "Nǐ jīn tiān chuān dé hěn piào liang.",
        "thaiMeaning": "วันนี้คุณแต่งตัวสวยมาก",
        "englishMeaning": "You are dressed beautifully today."
      },
      {
        "scenario": "ชมวิวจากบนภูเขา",
        "hanzi": "从这里看风景真漂亮。",
        "pinyin": "Cóng zhè lǐ kàn fēng jǐng zhēn piào liang.",
        "thaiMeaning": "มองวิวจากตรงนี้สวยจริงๆ",
        "englishMeaning": "The scenery is really beautiful from here."
      }
    ]
  },
  {
    "id": "v208",
    "hanzi": "帅",
    "pinyin": "shuài",
    "thaiMeaning": "หล่อ",
    "englishMeaning": "handsome",
    "example": {
      "hanzi": "很帅。",
      "pinyin": "Hěn shuài.",
      "thaiMeaning": "หล่อมาก",
      "englishMeaning": "Very handsome."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "很帅。",
        "pinyin": "Hěn shuài.",
        "thaiMeaning": "หล่อมาก",
        "englishMeaning": "Very handsome."
      },
      {
        "scenario": "ชมเพื่อนหลังตัดผม",
        "hanzi": "你剪了头发以后更帅了。",
        "pinyin": "Nǐ jiǎn le tóu fa yǐ hòu gèng shuài le.",
        "thaiMeaning": "หลังตัดผมแล้วคุณหล่อขึ้น",
        "englishMeaning": "You look more handsome after cutting your hair."
      },
      {
        "scenario": "บรรยายพระเอกในภาพยนตร์",
        "hanzi": "这个电影的男主角很帅。",
        "pinyin": "Zhè ge diàn yǐng de nán zhǔ jué hěn shuài.",
        "thaiMeaning": "พระเอกของหนังเรื่องนี้หล่อมาก",
        "englishMeaning": "The male protagonist of this movie is very handsome."
      }
    ]
  },
  {
    "id": "v209",
    "hanzi": "高兴",
    "pinyin": "gāoxìng",
    "thaiMeaning": "ดีใจ / มีความสุข",
    "englishMeaning": "Happy",
    "example": {
      "hanzi": "很高兴。",
      "pinyin": "Hěn gāoxìng.",
      "thaiMeaning": "ดีใจมาก",
      "englishMeaning": "Very happy."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "很高兴。",
        "pinyin": "Hěn gāo xìng.",
        "thaiMeaning": "ดีใจมาก",
        "englishMeaning": "Very happy."
      },
      {
        "scenario": "ดีใจที่ได้พบกัน",
        "hanzi": "见到你我很高兴。",
        "pinyin": "Jiàn dào nǐ wǒ hěn gāo xìng.",
        "thaiMeaning": "ฉันดีใจมากที่ได้พบคุณ",
        "englishMeaning": "I'm glad to see you."
      },
      {
        "scenario": "ได้ยินข่าวดีจากเพื่อน",
        "hanzi": "听到这个好消息，大家都很高兴。",
        "pinyin": "Tīng dào zhè ge hǎo xiāo xī, dà jiā dōu hěn gāo xìng.",
        "thaiMeaning": "ได้ยินข่าวดีนี้ ทุกคนดีใจมาก",
        "englishMeaning": "Everyone was happy to hear the good news."
      }
    ]
  },
  {
    "id": "v210",
    "hanzi": "快乐",
    "pinyin": "kuàilè",
    "thaiMeaning": "มีความสุข / สุขสันต์",
    "englishMeaning": "hapiness",
    "example": {
      "hanzi": "祝你快乐。",
      "pinyin": "Zhù nǐ kuàilè.",
      "thaiMeaning": "ขอให้มีความสุข",
      "englishMeaning": "I wish you happiness."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "祝你快乐。",
        "pinyin": "Zhù nǐ kuài lè.",
        "thaiMeaning": "ขอให้มีความสุข",
        "englishMeaning": "I wish you happiness."
      },
      {
        "scenario": "อวยพรวันเกิด",
        "hanzi": "祝你生日快乐！",
        "pinyin": "Zhù nǐ shēng rì kuài lè!",
        "thaiMeaning": "สุขสันต์วันเกิด!",
        "englishMeaning": "Happy birthday to you!"
      },
      {
        "scenario": "เล่าว่าเด็กๆ เล่นอย่างมีความสุข",
        "hanzi": "孩子们在公园里玩得很快乐。",
        "pinyin": "Hái zi men zài gōng yuán lǐ wán dé hěn kuài lè.",
        "thaiMeaning": "เด็กๆ เล่นอย่างมีความสุขในสวน",
        "englishMeaning": "Children have fun in the park."
      }
    ]
  },
  {
    "id": "v211",
    "hanzi": "难过",
    "pinyin": "nánguò",
    "thaiMeaning": "เสียใจ / เศร้า",
    "englishMeaning": "sad",
    "example": {
      "hanzi": "别难过。",
      "pinyin": "Bié nánguò.",
      "thaiMeaning": "อย่าเสียใจไปเลย",
      "englishMeaning": "Don't be sad."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "别难过。",
        "pinyin": "Bié nán guò.",
        "thaiMeaning": "อย่าเสียใจไปเลย",
        "englishMeaning": "Don't be sad."
      },
      {
        "scenario": "ปลอบเพื่อนที่สอบไม่ผ่าน",
        "hanzi": "别难过，下次再努力。",
        "pinyin": "Bié nán guò, xià cì zài nǔ lì.",
        "thaiMeaning": "อย่าเสียใจ คราวหน้าค่อยพยายามใหม่",
        "englishMeaning": "Don't be sad and try your best next time."
      },
      {
        "scenario": "เสียใจที่ต้องจากเพื่อน",
        "hanzi": "想到要离开大家，我很难过。",
        "pinyin": "Xiǎng dào yào lí kāi dà jiā, wǒ hěn nán guò.",
        "thaiMeaning": "คิดว่าจะต้องจากทุกคนไป ฉันเสียใจมาก",
        "englishMeaning": "I am sad to think of leaving you all."
      }
    ]
  },
  {
    "id": "v212",
    "hanzi": "生气",
    "pinyin": "shēngqì",
    "thaiMeaning": "โกรธ / โมโห",
    "englishMeaning": "angry",
    "example": {
      "hanzi": "别生气。",
      "pinyin": "Bié shēngqì.",
      "thaiMeaning": "อย่าโกรธเลย",
      "englishMeaning": "Don't be angry."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "别生气。",
        "pinyin": "Bié shēng qì.",
        "thaiMeaning": "อย่าโกรธเลย",
        "englishMeaning": "Don't be angry."
      },
      {
        "scenario": "ขอให้อีกฝ่ายอย่าโกรธ",
        "hanzi": "对不起，你别生气。",
        "pinyin": "Duì bù qǐ, nǐ bié shēng qì.",
        "thaiMeaning": "ขอโทษ คุณอย่าโกรธนะ",
        "englishMeaning": "I'm sorry, don't be angry."
      },
      {
        "scenario": "ถามเหตุผลที่เพื่อนโกรธ",
        "hanzi": "你为什么这么生气？",
        "pinyin": "Nǐ wèi shén me zhè me shēng qì?",
        "thaiMeaning": "ทำไมคุณถึงโกรธขนาดนี้?",
        "englishMeaning": "Why are you so angry?"
      }
    ]
  },
  {
    "id": "v213",
    "hanzi": "害怕",
    "pinyin": "hàipà",
    "thaiMeaning": "กลัว / หวาดกลัว",
    "englishMeaning": "Fear",
    "example": {
      "hanzi": "不用害怕。",
      "pinyin": "Búyòng hàipà.",
      "thaiMeaning": "ไม่ต้องกลัว",
      "englishMeaning": "Don't be afraid."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "不用害怕。",
        "pinyin": "Bú yòng hài pà.",
        "thaiMeaning": "ไม่ต้องกลัว",
        "englishMeaning": "Don't be afraid."
      },
      {
        "scenario": "กลัวสุนัขตัวใหญ่",
        "hanzi": "我有点害怕那只大狗。",
        "pinyin": "Wǒ yǒu diǎn hài pà nà zhī dà gǒu.",
        "thaiMeaning": "ฉันกลัวสุนัขตัวใหญ่นั้นนิดหน่อย",
        "englishMeaning": "I'm a little scared of that big dog."
      },
      {
        "scenario": "ให้กำลังใจเด็กก่อนไปหาหมอ",
        "hanzi": "别害怕，医生会帮助你。",
        "pinyin": "Bié hài pà, yī shēng huì bāng zhù nǐ.",
        "thaiMeaning": "ไม่ต้องกลัว หมอจะช่วยคุณ",
        "englishMeaning": "Don't be afraid, doctors will help you."
      }
    ]
  },
  {
    "id": "v214",
    "hanzi": "紧张",
    "pinyin": "jǐnzhāng",
    "thaiMeaning": "ตื่นเต้น / เครียด",
    "englishMeaning": "nervous",
    "example": {
      "hanzi": "别紧张。",
      "pinyin": "Bié jǐnzhāng.",
      "thaiMeaning": "อย่าตื่นเต้นไป",
      "englishMeaning": "take it easy."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "别紧张。",
        "pinyin": "Bié jǐn zhāng.",
        "thaiMeaning": "อย่าตื่นเต้นไป",
        "englishMeaning": "take it easy."
      },
      {
        "scenario": "ตื่นเต้นก่อนสัมภาษณ์งาน",
        "hanzi": "面试前我有点紧张。",
        "pinyin": "Miàn shì qián wǒ yǒu diǎn jǐn zhāng.",
        "thaiMeaning": "ก่อนสัมภาษณ์ฉันตื่นเต้นนิดหน่อย",
        "englishMeaning": "I was a little nervous before the interview."
      },
      {
        "scenario": "ปลอบเพื่อนก่อนขึ้นเวที",
        "hanzi": "放轻松，不要太紧张。",
        "pinyin": "Fàng qīng sōng, bú yào tài jǐn zhāng.",
        "thaiMeaning": "ผ่อนคลาย อย่าตื่นเต้นเกินไป",
        "englishMeaning": "Relax and don't get too nervous."
      }
    ]
  },
  {
    "id": "v215",
    "hanzi": "聪明",
    "pinyin": "cōngming",
    "thaiMeaning": "ฉลาด",
    "englishMeaning": "clever",
    "example": {
      "hanzi": "很聪明。",
      "pinyin": "Hěn cōngming.",
      "thaiMeaning": "ฉลาดมาก",
      "englishMeaning": "Very smart."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "很聪明。",
        "pinyin": "Hěn cōng ming.",
        "thaiMeaning": "ฉลาดมาก",
        "englishMeaning": "Very smart."
      },
      {
        "scenario": "ชมเด็กที่แก้โจทย์ได้",
        "hanzi": "这个孩子很聪明。",
        "pinyin": "Zhè ge hái zi hěn cōng ming.",
        "thaiMeaning": "เด็กคนนี้ฉลาดมาก",
        "englishMeaning": "This kid is very smart."
      },
      {
        "scenario": "ชมวิธีแก้ปัญหา",
        "hanzi": "你想到了一个聪明的办法。",
        "pinyin": "Nǐ xiǎng dào le yí gè cōng ming de bàn fǎ.",
        "thaiMeaning": "คุณคิดวิธีที่ฉลาดได้หนึ่งวิธี",
        "englishMeaning": "You came up with a clever idea."
      }
    ]
  },
  {
    "id": "v216",
    "hanzi": "努力",
    "pinyin": "nǔlì",
    "thaiMeaning": "ขยัน / พยายาม",
    "englishMeaning": "effort",
    "example": {
      "hanzi": "努力学习。",
      "pinyin": "Nǔlì xuéxí.",
      "thaiMeaning": "ขยันเรียน",
      "englishMeaning": "Study hard."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "努力学习。",
        "pinyin": "Nǔ lì xué xí.",
        "thaiMeaning": "ขยันเรียน",
        "englishMeaning": "Study hard."
      },
      {
        "scenario": "ให้กำลังใจนักเรียนก่อนสอบ",
        "hanzi": "只要努力，就会有进步。",
        "pinyin": "Zhǐ yào nǔ lì, jiù huì yǒu jìn bù.",
        "thaiMeaning": "ขอแค่พยายาม ก็จะพัฒนาขึ้น",
        "englishMeaning": "As long as you work hard, you will make progress."
      },
      {
        "scenario": "เล่าว่ากำลังตั้งใจเรียนภาษา",
        "hanzi": "我正在努力学习中文。",
        "pinyin": "Wǒ zhèng zài nǔ lì xué xí zhōng wén.",
        "thaiMeaning": "ฉันกำลังพยายามเรียนภาษาจีน",
        "englishMeaning": "I'm trying to learn Chinese."
      }
    ]
  },
  {
    "id": "v217",
    "hanzi": "认真",
    "pinyin": "rènzhēn",
    "thaiMeaning": "ตั้งใจ / จริงจัง",
    "englishMeaning": "serious",
    "example": {
      "hanzi": "认真听。",
      "pinyin": "Rènzhēn tīng.",
      "thaiMeaning": "ตั้งใจฟัง",
      "englishMeaning": "Listen carefully."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "认真听。",
        "pinyin": "Rèn zhēn tīng.",
        "thaiMeaning": "ตั้งใจฟัง",
        "englishMeaning": "Listen carefully."
      },
      {
        "scenario": "ชมพนักงานที่ทำงานตั้งใจ",
        "hanzi": "他工作一直很认真。",
        "pinyin": "Tā gōng zuò yì zhí hěn rèn zhēn.",
        "thaiMeaning": "เขาทำงานอย่างตั้งใจเสมอ",
        "englishMeaning": "He has always been very serious about his work."
      },
      {
        "scenario": "เตือนให้อ่านคำถามให้ดี",
        "hanzi": "请认真看清楚题目。",
        "pinyin": "Qǐng rèn zhēn kàn qīng chǔ tí mù.",
        "thaiMeaning": "กรุณาอ่านโจทย์ให้ละเอียด",
        "englishMeaning": "Please read the question carefully."
      }
    ]
  },
  {
    "id": "v218",
    "hanzi": "打开",
    "pinyin": "dǎkāi",
    "thaiMeaning": "เปิดออก",
    "englishMeaning": "Open",
    "example": {
      "hanzi": "打开书。",
      "pinyin": "Dǎkāi shū.",
      "thaiMeaning": "เปิดหนังสือ",
      "englishMeaning": "Open the book."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "打开书。",
        "pinyin": "Dǎ kāi shū.",
        "thaiMeaning": "เปิดหนังสือ",
        "englishMeaning": "Open the book."
      },
      {
        "scenario": "ขอให้เปิดหน้าต่าง",
        "hanzi": "房间太热了，请打开窗户。",
        "pinyin": "Fáng jiān tài rè le, qǐng dǎ kāi chuāng hù.",
        "thaiMeaning": "ห้องร้อนเกินไป กรุณาเปิดหน้าต่าง",
        "englishMeaning": "The room is too hot. Please open the window."
      },
      {
        "scenario": "เปิดกล่องของขวัญ",
        "hanzi": "快打开礼物看看吧。",
        "pinyin": "Kuài dǎ kāi lǐ wù kàn kàn ba.",
        "thaiMeaning": "รีบเปิดของขวัญดูสิ",
        "englishMeaning": "Come open the gift and take a look."
      }
    ]
  },
  {
    "id": "v219",
    "hanzi": "关上",
    "pinyin": "guānshàng",
    "thaiMeaning": "ปิดลง",
    "englishMeaning": "close",
    "example": {
      "hanzi": "关上灯。",
      "pinyin": "Guānshàng dēng.",
      "thaiMeaning": "ปิดไฟ",
      "englishMeaning": "Turn off the lights."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "关上灯。",
        "pinyin": "Guān shàng dēng.",
        "thaiMeaning": "ปิดไฟ",
        "englishMeaning": "Turn off the lights."
      },
      {
        "scenario": "ปิดหน้าต่างก่อนฝนเข้า",
        "hanzi": "要下雨了，快关上窗户。",
        "pinyin": "Yào xià yǔ le, kuài guān shàng chuāng hù.",
        "thaiMeaning": "ฝนกำลังจะตก รีบปิดหน้าต่าง",
        "englishMeaning": "It's going to rain. Close the windows."
      },
      {
        "scenario": "ขอให้ปิดหนังสือ",
        "hanzi": "请关上书，听老师说。",
        "pinyin": "Qǐng guān shàng shū, tīng lǎo shī shuō.",
        "thaiMeaning": "กรุณาปิดหนังสือแล้วฟังครูพูด",
        "englishMeaning": "Please close the book and listen to the teacher."
      }
    ]
  },
  {
    "id": "v220",
    "hanzi": "穿上",
    "pinyin": "chuānshàng",
    "thaiMeaning": "สวมใส่",
    "englishMeaning": "put on",
    "example": {
      "hanzi": "穿上外套。",
      "pinyin": "Chuānshàng wàitào.",
      "thaiMeaning": "สวมเสื้อนอก",
      "englishMeaning": "Put on your coat."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "穿上外套。",
        "pinyin": "Chuān shàng wài tào.",
        "thaiMeaning": "สวมเสื้อนอก",
        "englishMeaning": "Put on your coat."
      },
      {
        "scenario": "เตือนให้สวมเสื้อคลุม",
        "hanzi": "外面冷，穿上外套再走。",
        "pinyin": "Wài miàn lěng, chuān shàng wài tào zài zǒu.",
        "thaiMeaning": "ข้างนอกหนาว ใส่เสื้อคลุมแล้วค่อยไป",
        "englishMeaning": "It's cold outside, put on your coat before leaving."
      },
      {
        "scenario": "ลองสวมรองเท้าคู่ใหม่",
        "hanzi": "穿上这双鞋走走看。",
        "pinyin": "Chuān shàng zhè shuāng xié zǒu zǒu kàn.",
        "thaiMeaning": "ลองใส่รองเท้าคู่นี้เดินดู",
        "englishMeaning": "Take a walk in these shoes."
      }
    ]
  },
  {
    "id": "v221",
    "hanzi": "脱下",
    "pinyin": "tuōxià",
    "thaiMeaning": "ถอดออก",
    "englishMeaning": "take off",
    "example": {
      "hanzi": "脱下鞋子。",
      "pinyin": "Tuōxià xiézi.",
      "thaiMeaning": "ถอดรองเท้า",
      "englishMeaning": "Take off your shoes."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "脱下鞋子。",
        "pinyin": "Tuō xià xié zǐ.",
        "thaiMeaning": "ถอดรองเท้า",
        "englishMeaning": "Take off your shoes."
      },
      {
        "scenario": "ถอดรองเท้าก่อนเข้าบ้าน",
        "hanzi": "进屋前请脱下鞋子。",
        "pinyin": "Jìn wū qián qǐng tuō xià xié zǐ.",
        "thaiMeaning": "ก่อนเข้าบ้านกรุณาถอดรองเท้า",
        "englishMeaning": "Please take off your shoes before entering the house."
      },
      {
        "scenario": "ถอดเสื้อคลุมเพราะในห้องร้อน",
        "hanzi": "房间里很热，我脱下了外套。",
        "pinyin": "Fáng jiān lǐ hěn rè, wǒ tuō xià le wài tào.",
        "thaiMeaning": "ในห้องร้อนมาก ฉันจึงถอดเสื้อคลุม",
        "englishMeaning": "It was hot in the room and I took off my coat."
      }
    ]
  },
  {
    "id": "v222",
    "hanzi": "拿起",
    "pinyin": "náqǐ",
    "thaiMeaning": "หยิบขึ้นมา",
    "englishMeaning": "pick up",
    "example": {
      "hanzi": "拿起手机。",
      "pinyin": "Náqǐ shǒujī.",
      "thaiMeaning": "หยิบมือถือขึ้นมา",
      "englishMeaning": "Pick up your phone."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "拿起手机。",
        "pinyin": "Ná qǐ shǒu jī.",
        "thaiMeaning": "หยิบมือถือขึ้นมา",
        "englishMeaning": "Pick up your phone."
      },
      {
        "scenario": "หยิบโทรศัพท์ขึ้นมารับสาย",
        "hanzi": "电话响了，他拿起手机。",
        "pinyin": "Diàn huà xiǎng le, tā ná qǐ shǒu jī.",
        "thaiMeaning": "โทรศัพท์ดัง เขาหยิบมือถือขึ้นมา",
        "englishMeaning": "The phone rang and he picked it up."
      },
      {
        "scenario": "หยิบปากกาเพื่อเซ็นชื่อ",
        "hanzi": "请拿起笔在这里签名。",
        "pinyin": "Qǐng ná qǐ bǐ zài zhè lǐ qiān míng.",
        "thaiMeaning": "กรุณาหยิบปากกาขึ้นมาเซ็นตรงนี้",
        "englishMeaning": "Please pick up your pen and sign here."
      }
    ]
  },
  {
    "id": "v223",
    "hanzi": "放下",
    "pinyin": "fàngxià",
    "thaiMeaning": "วางลง",
    "englishMeaning": "lay down",
    "example": {
      "hanzi": "放下包。",
      "pinyin": "Fàngxià bāo.",
      "thaiMeaning": "วางกระเป๋าลง",
      "englishMeaning": "Put down the bag."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "放下包。",
        "pinyin": "Fàng xià bāo.",
        "thaiMeaning": "วางกระเป๋าลง",
        "englishMeaning": "Put down the bag."
      },
      {
        "scenario": "ขอให้วางกระเป๋าหนัก",
        "hanzi": "包太重了，先放下吧。",
        "pinyin": "Bāo tài zhòng le, xiān fàng xià ba.",
        "thaiMeaning": "กระเป๋าหนักเกินไป วางลงก่อนเถอะ",
        "englishMeaning": "The bag is too heavy, put it down first."
      },
      {
        "scenario": "วางโทรศัพท์แล้วพักผ่อน",
        "hanzi": "放下手机，休息一会儿。",
        "pinyin": "Fàng xià shǒu jī, xiū xi yí huì er.",
        "thaiMeaning": "วางโทรศัพท์แล้วพักสักครู่",
        "englishMeaning": "Put down your phone and take a break."
      }
    ]
  },
  {
    "id": "v224",
    "hanzi": "卖",
    "pinyin": "mài",
    "thaiMeaning": "ขาย",
    "englishMeaning": "Sell",
    "example": {
      "hanzi": "卖水果。",
      "pinyin": "Mǎi shuǐguǒ.",
      "thaiMeaning": "ขายผลไม้",
      "englishMeaning": "Selling fruit."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "卖水果。",
        "pinyin": "Mài shuǐ guǒ.",
        "thaiMeaning": "ขายผลไม้",
        "englishMeaning": "Selling fruit."
      },
      {
        "scenario": "ถามว่าร้านขายอะไร",
        "hanzi": "这家商店卖什么？",
        "pinyin": "Zhè jiā shāng diàn mài shén me?",
        "thaiMeaning": "ร้านนี้ขายอะไร?",
        "englishMeaning": "What does this store sell?"
      },
      {
        "scenario": "ขายรถคันเก่า",
        "hanzi": "他想把旧车卖掉。",
        "pinyin": "Tā xiǎng bǎ jiù chē mài diào.",
        "thaiMeaning": "เขาอยากขายรถเก่า",
        "englishMeaning": "He wants to sell his old car."
      }
    ]
  },
  {
    "id": "v225",
    "hanzi": "借",
    "pinyin": "jiè",
    "thaiMeaning": "ยืม / ให้ยืม",
    "englishMeaning": "borrow",
    "example": {
      "hanzi": "借钱。",
      "pinyin": "Jiè qián.",
      "thaiMeaning": "ยืมเงิน",
      "englishMeaning": "Borrow money."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "借钱。",
        "pinyin": "Jiè qián.",
        "thaiMeaning": "ยืมเงิน",
        "englishMeaning": "Borrow money."
      },
      {
        "scenario": "ขอยืมหนังสือเพื่อน",
        "hanzi": "这本书可以借我看看吗？",
        "pinyin": "Zhè běn shū kě yǐ jiè wǒ kàn kàn ma?",
        "thaiMeaning": "ขอยืมหนังสือเล่มนี้อ่านได้ไหม?",
        "englishMeaning": "Can you lend me this book?"
      },
      {
        "scenario": "ยืมร่มในวันที่ฝนตก",
        "hanzi": "我没带伞，能借你的吗？",
        "pinyin": "Wǒ méi dài sǎn, néng jiè nǐ de ma?",
        "thaiMeaning": "ฉันไม่ได้เอาร่มมา ขอยืมของคุณได้ไหม?",
        "englishMeaning": "I didn’t bring an umbrella. Can I borrow yours?"
      }
    ]
  },
  {
    "id": "v226",
    "hanzi": "还",
    "pinyin": "huán",
    "thaiMeaning": "คืน / คืนของ",
    "englishMeaning": "return",
    "example": {
      "hanzi": "还书。",
      "pinyin": "Huán shū.",
      "thaiMeaning": "คืนหนังสือ",
      "englishMeaning": "Return the book."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "还书。",
        "pinyin": "Hái shū.",
        "thaiMeaning": "คืนหนังสือ",
        "englishMeaning": "Return the book."
      },
      {
        "scenario": "คืนหนังสือให้ห้องสมุด",
        "hanzi": "我明天去图书馆还书。",
        "pinyin": "Wǒ míng tiān qù tú shū guǎn hái shū.",
        "thaiMeaning": "พรุ่งนี้ฉันจะไปคืนหนังสือที่ห้องสมุด",
        "englishMeaning": "I'll go to the library to return the books tomorrow."
      },
      {
        "scenario": "เตือนเพื่อนให้คืนเงิน",
        "hanzi": "别忘了把钱还给他。",
        "pinyin": "Bié wàng le bǎ qián hái gěi tā.",
        "thaiMeaning": "อย่าลืมคืนเงินให้เขา",
        "englishMeaning": "Don't forget to give the money back to him."
      }
    ]
  },
  {
    "id": "v227",
    "hanzi": "给",
    "pinyin": "gěi",
    "thaiMeaning": "ให้",
    "englishMeaning": "Give",
    "example": {
      "hanzi": "给你。",
      "pinyin": "Gěi nǐ.",
      "thaiMeaning": "ให้คุณ",
      "englishMeaning": "for you."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "给你。",
        "pinyin": "Gěi nǐ.",
        "thaiMeaning": "ให้คุณ",
        "englishMeaning": "for you."
      },
      {
        "scenario": "ยื่นเอกสารให้พนักงาน",
        "hanzi": "请把这份文件给经理。",
        "pinyin": "Qǐng bǎ zhè fèn wén jiàn gěi jīng lǐ.",
        "thaiMeaning": "กรุณาเอาเอกสารนี้ให้ผู้จัดการ",
        "englishMeaning": "Please give this document to the manager."
      },
      {
        "scenario": "ซื้อของขวัญให้แม่",
        "hanzi": "我给妈妈买了礼物。",
        "pinyin": "Wǒ gěi mā ma mǎi le lǐ wù.",
        "thaiMeaning": "ฉันซื้อของขวัญให้แม่",
        "englishMeaning": "I bought a gift for my mother."
      }
    ]
  },
  {
    "id": "v228",
    "hanzi": "送",
    "pinyin": "sòng",
    "thaiMeaning": "ส่ง / มอบให้",
    "englishMeaning": "deliver",
    "example": {
      "hanzi": "送礼物。",
      "pinyin": "Sòng lǐwù.",
      "thaiMeaning": "มอบของขวัญ",
      "englishMeaning": "Give gifts."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "送礼物。",
        "pinyin": "Sòng lǐ wù.",
        "thaiMeaning": "มอบของขวัญ",
        "englishMeaning": "Give gifts."
      },
      {
        "scenario": "ไปส่งเพื่อนที่สนามบิน",
        "hanzi": "我开车送你去机场。",
        "pinyin": "Wǒ kāi chē sòng nǐ qù jī chǎng.",
        "thaiMeaning": "ฉันขับรถไปส่งคุณที่สนามบิน",
        "englishMeaning": "I'll drive you to the airport."
      },
      {
        "scenario": "มอบดอกไม้ให้ครู",
        "hanzi": "学生们送给老师一束花。",
        "pinyin": "Xué shēng men sòng gěi lǎo shī yí shù huā.",
        "thaiMeaning": "นักเรียนมอบดอกไม้หนึ่งช่อให้ครู",
        "englishMeaning": "The students gave the teacher a bouquet of flowers."
      }
    ]
  },
  {
    "id": "v229",
    "hanzi": "带",
    "pinyin": "dài",
    "thaiMeaning": "พก / พกพา",
    "englishMeaning": "bring",
    "example": {
      "hanzi": "带伞。",
      "pinyin": "Dài sǎn.",
      "thaiMeaning": "พกร่ม",
      "englishMeaning": "Bring an umbrella."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "带伞。",
        "pinyin": "Dài sǎn.",
        "thaiMeaning": "พกร่ม",
        "englishMeaning": "Bring an umbrella."
      },
      {
        "scenario": "เตือนให้พกร่ม",
        "hanzi": "天气预报说有雨，记得带伞。",
        "pinyin": "Tiān qì yù bào shuō yǒu yǔ, jì de dài sǎn.",
        "thaiMeaning": "พยากรณ์ว่าฝนตก อย่าลืมพกร่ม",
        "englishMeaning": "The weather forecast says it will rain, so remember to bring an umbrella."
      },
      {
        "scenario": "พาเพื่อนไปเที่ยวเมือง",
        "hanzi": "我带朋友去市中心看看。",
        "pinyin": "Wǒ dài péng yǒu qù shì zhōng xīn kàn kàn.",
        "thaiMeaning": "ฉันพาเพื่อนไปเที่ยวใจกลางเมือง",
        "englishMeaning": "I took my friends to visit the city center."
      }
    ]
  },
  {
    "id": "v230",
    "hanzi": "搬",
    "pinyin": "bān",
    "thaiMeaning": "ย้าย / ยก",
    "englishMeaning": "move",
    "example": {
      "hanzi": "搬家。",
      "pinyin": "Bānjiā.",
      "thaiMeaning": "ย้ายบ้าน",
      "englishMeaning": "move place."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "搬家。",
        "pinyin": "Bān jiā.",
        "thaiMeaning": "ย้ายบ้าน",
        "englishMeaning": "move place."
      },
      {
        "scenario": "ช่วยย้ายโต๊ะ",
        "hanzi": "这张桌子太重，我们一起搬。",
        "pinyin": "Zhè zhāng zhuō zi tài zhòng, wǒ men yì qǐ bān.",
        "thaiMeaning": "โต๊ะตัวนี้หนักเกินไป พวกเราช่วยกันย้าย",
        "englishMeaning": "This table is too heavy. Let's move it together."
      },
      {
        "scenario": "ย้ายเข้าบ้านใหม่",
        "hanzi": "我们下个月搬新家。",
        "pinyin": "Wǒ men xià gè yuè bān xīn jiā.",
        "thaiMeaning": "เดือนหน้าพวกเราจะย้ายบ้านใหม่",
        "englishMeaning": "We are moving to a new house next month."
      }
    ]
  },
  {
    "id": "v231",
    "hanzi": "洗",
    "pinyin": "xǐ",
    "thaiMeaning": "ซัก / ล้าง",
    "englishMeaning": "wash",
    "example": {
      "hanzi": "洗衣服。",
      "pinyin": "Xǐ yīfu.",
      "thaiMeaning": "ซักเสื้อผ้า",
      "englishMeaning": "do the laundry."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "洗衣服。",
        "pinyin": "Xǐ yī fu.",
        "thaiMeaning": "ซักเสื้อผ้า",
        "englishMeaning": "do the laundry."
      },
      {
        "scenario": "ล้างผลไม้ก่อนกิน",
        "hanzi": "苹果要洗干净再吃。",
        "pinyin": "Píng guǒ yào xǐ gān jìng zài chī.",
        "thaiMeaning": "ต้องล้างแอปเปิลให้สะอาดก่อนกิน",
        "englishMeaning": "Apples should be washed before eating."
      },
      {
        "scenario": "ซักเสื้อผ้าหลังกลับบ้าน",
        "hanzi": "我晚上回家洗衣服。",
        "pinyin": "Wǒ wǎn shàng huí jiā xǐ yī fu.",
        "thaiMeaning": "ตอนเย็นฉันกลับบ้านไปซักเสื้อผ้า",
        "englishMeaning": "I go home and do laundry in the evening."
      }
    ]
  },
  {
    "id": "v232",
    "hanzi": "跳",
    "pinyin": "tiào",
    "thaiMeaning": "กระโดด / เต้น",
    "englishMeaning": "Jump",
    "example": {
      "hanzi": "跳舞。",
      "pinyin": "Tiàowǔ.",
      "thaiMeaning": "เต้นรำ",
      "englishMeaning": "Dance."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "跳舞。",
        "pinyin": "Tiào wǔ.",
        "thaiMeaning": "เต้นรำ",
        "englishMeaning": "Dance."
      },
      {
        "scenario": "เตือนเด็กไม่ให้กระโดดบนเตียง",
        "hanzi": "不要在床上跳。",
        "pinyin": "Bú yào zài chuáng shàng tiào.",
        "thaiMeaning": "อย่ากระโดดบนเตียง",
        "englishMeaning": "Don't jump on the bed."
      },
      {
        "scenario": "กระโดดข้ามแอ่งน้ำ",
        "hanzi": "他轻轻一跳，跳过了水。",
        "pinyin": "Tā qīng qīng yí tiào, tiào guò le shuǐ.",
        "thaiMeaning": "เขากระโดดเบาๆ ข้ามแอ่งน้ำ",
        "englishMeaning": "With a slight jump, he jumped across the water."
      }
    ]
  },
  {
    "id": "v233",
    "hanzi": "飞",
    "pinyin": "fēi",
    "thaiMeaning": "บิน",
    "englishMeaning": "fly",
    "example": {
      "hanzi": "飞机飞。",
      "pinyin": "Fēijī fēi.",
      "thaiMeaning": "เครื่องบินบิน",
      "englishMeaning": "The plane flies."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "飞机飞。",
        "pinyin": "Fēi jī fēi.",
        "thaiMeaning": "เครื่องบินบิน",
        "englishMeaning": "The plane flies."
      },
      {
        "scenario": "ดูนกบินบนท้องฟ้า",
        "hanzi": "一群鸟从天上飞过。",
        "pinyin": "Yì qún niǎo cóng tiān shàng fēi guò.",
        "thaiMeaning": "นกฝูงหนึ่งบินผ่านท้องฟ้า",
        "englishMeaning": "A flock of birds flew across the sky."
      },
      {
        "scenario": "เครื่องบินบินไปปักกิ่ง",
        "hanzi": "这架飞机飞往北京。",
        "pinyin": "Zhè jià fēi jī fēi wǎng běi jīng.",
        "thaiMeaning": "เครื่องบินลำนี้บินไปปักกิ่ง",
        "englishMeaning": "The plane was bound for Beijing."
      }
    ]
  },
  {
    "id": "v234",
    "hanzi": "游",
    "pinyin": "yóu",
    "thaiMeaning": "ว่ายน้ำ",
    "englishMeaning": "tour",
    "example": {
      "hanzi": "游泳。",
      "pinyin": "Yóuyǒng.",
      "thaiMeaning": "ว่ายน้ำ",
      "englishMeaning": "swim."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "游泳。",
        "pinyin": "Yóu yǒng.",
        "thaiMeaning": "ว่ายน้ำ",
        "englishMeaning": "swim."
      },
      {
        "scenario": "ปลาแหวกว่ายในน้ำ",
        "hanzi": "鱼在水里游来游去。",
        "pinyin": "Yú zài shuǐ lǐ yóu lái yóu qù.",
        "thaiMeaning": "ปลาว่ายไปมาในน้ำ",
        "englishMeaning": "Fish swim back and forth in the water."
      },
      {
        "scenario": "พายเรือเที่ยวทะเลสาบ",
        "hanzi": "我们坐船游了整个湖。",
        "pinyin": "Wǒ men zuò chuán yóu le zhěng gè hú.",
        "thaiMeaning": "พวกเรานั่งเรือเที่ยวทั่วทะเลสาบ",
        "englishMeaning": "We took a boat trip across the lake."
      }
    ]
  },
  {
    "id": "v235",
    "hanzi": "站",
    "pinyin": "zhàn",
    "thaiMeaning": "ยืน / สถานี",
    "englishMeaning": "stand",
    "example": {
      "hanzi": "站起来。",
      "pinyin": "Zhàn qǐlái.",
      "thaiMeaning": "ยืนขึ้น",
      "englishMeaning": "stand up."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "站起来。",
        "pinyin": "Zhàn qǐ lái.",
        "thaiMeaning": "ยืนขึ้น",
        "englishMeaning": "stand up."
      },
      {
        "scenario": "ขอให้ยืนต่อแถว",
        "hanzi": "请站在黄线后面。",
        "pinyin": "Qǐng zhàn zài huáng xiàn hòu miàn.",
        "thaiMeaning": "กรุณายืนหลังเส้นสีเหลือง",
        "englishMeaning": "Please stand behind the yellow line."
      },
      {
        "scenario": "ยืนรอรถที่ป้าย",
        "hanzi": "我在车站门口站着等你。",
        "pinyin": "Wǒ zài chē zhàn mén kǒu zhàn zhe děng nǐ.",
        "thaiMeaning": "ฉันยืนรอคุณอยู่หน้าสถานี",
        "englishMeaning": "I'll wait for you at the station door."
      }
    ]
  },
  {
    "id": "v236",
    "hanzi": "坐",
    "pinyin": "zuò",
    "thaiMeaning": "นั่ง",
    "englishMeaning": "sit",
    "example": {
      "hanzi": "请坐。",
      "pinyin": "Qǐng zuò.",
      "thaiMeaning": "เชิญนั่ง",
      "englishMeaning": "Please take a seat."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "请坐。",
        "pinyin": "Qǐng zuò.",
        "thaiMeaning": "เชิญนั่ง",
        "englishMeaning": "Please take a seat."
      },
      {
        "scenario": "เชิญแขกนั่งลง",
        "hanzi": "别站着，请坐。",
        "pinyin": "Bié zhàn zhe, qǐng zuò.",
        "thaiMeaning": "อย่ายืนเลย เชิญนั่ง",
        "englishMeaning": "Don't stand, please sit down."
      },
      {
        "scenario": "นั่งรถไฟไปทำงาน",
        "hanzi": "我每天坐地铁上班。",
        "pinyin": "Wǒ měi tiān zuò dì tiě shàng bān.",
        "thaiMeaning": "ฉันนั่งรถไฟใต้ดินไปทำงานทุกวัน",
        "englishMeaning": "I take the subway to work every day."
      }
    ]
  },
  {
    "id": "v237",
    "hanzi": "一",
    "pinyin": "yī",
    "thaiMeaning": "หนึ่ง (1)",
    "englishMeaning": "one",
    "example": {
      "hanzi": "一个月。",
      "pinyin": "Yí gè yuè.",
      "thaiMeaning": "หนึ่งเดือน",
      "englishMeaning": "One month."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一个月。",
        "pinyin": "Yí gè yuè.",
        "thaiMeaning": "หนึ่งเดือน",
        "englishMeaning": "One month."
      },
      {
        "scenario": "สั่งกาแฟหนึ่งแก้ว",
        "hanzi": "请给我一杯咖啡。",
        "pinyin": "Qǐng gěi wǒ yì bēi kā fēi.",
        "thaiMeaning": "ขอกาแฟหนึ่งแก้ว",
        "englishMeaning": "I'd like some coffee, please."
      },
      {
        "scenario": "บอกว่าเป็นครั้งแรก",
        "hanzi": "这是我第一次来中国。",
        "pinyin": "Zhè shì wǒ dì yī cì lái zhōng guó.",
        "thaiMeaning": "นี่เป็นครั้งแรกที่ฉันมาจีน",
        "englishMeaning": "This is my first time to China."
      }
    ]
  },
  {
    "id": "v238",
    "hanzi": "二",
    "pinyin": "èr",
    "thaiMeaning": "สอง (2)",
    "englishMeaning": "two",
    "example": {
      "hanzi": "二楼。",
      "pinyin": "Èr lóu.",
      "thaiMeaning": "ชั้นสอง",
      "englishMeaning": "Second floor."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "二楼。",
        "pinyin": "èr lóu.",
        "thaiMeaning": "ชั้นสอง",
        "englishMeaning": "Second floor."
      },
      {
        "scenario": "บอกวันที่สองของเดือน",
        "hanzi": "今天是五月二号。",
        "pinyin": "Jīn tiān shì wǔ yuè èr hào.",
        "thaiMeaning": "วันนี้คือวันที่สองเดือนพฤษภาคม",
        "englishMeaning": "Today is May 2nd."
      },
      {
        "scenario": "เลือกหมายเลขสอง",
        "hanzi": "我选第二个。",
        "pinyin": "Wǒ xuǎn dì èr gè.",
        "thaiMeaning": "ฉันเลือกอันที่สอง",
        "englishMeaning": "I choose the second one."
      }
    ]
  },
  {
    "id": "v239",
    "hanzi": "三",
    "pinyin": "sān",
    "thaiMeaning": "สาม (3)",
    "englishMeaning": "three",
    "example": {
      "hanzi": "三天。",
      "pinyin": "Sān tiān.",
      "thaiMeaning": "สามวัน",
      "englishMeaning": "Three days."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "三天。",
        "pinyin": "Sān tiān.",
        "thaiMeaning": "สามวัน",
        "englishMeaning": "Three days."
      },
      {
        "scenario": "นัดกันตอนสามโมง",
        "hanzi": "我们下午三点见。",
        "pinyin": "Wǒ men xià wǔ sān diǎn jiàn.",
        "thaiMeaning": "พวกเราเจอกันบ่ายสามโมง",
        "englishMeaning": "We'll meet at three o'clock in the afternoon."
      },
      {
        "scenario": "ซื้อแอปเปิลสามลูก",
        "hanzi": "我要三个苹果。",
        "pinyin": "Wǒ yào sān gè píng guǒ.",
        "thaiMeaning": "ฉันเอาแอปเปิลสามลูก",
        "englishMeaning": "I want three apples."
      }
    ]
  },
  {
    "id": "v240",
    "hanzi": "四",
    "pinyin": "sì",
    "thaiMeaning": "สี่ (4)",
    "englishMeaning": "Four",
    "example": {
      "hanzi": "四个人。",
      "pinyin": "Sì gè rén.",
      "thaiMeaning": "สี่คน",
      "englishMeaning": "Four people."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "四个人。",
        "pinyin": "Sì gè rén.",
        "thaiMeaning": "สี่คน",
        "englishMeaning": "Four people."
      },
      {
        "scenario": "บอกว่าครอบครัวมีสี่คน",
        "hanzi": "我家有四个人。",
        "pinyin": "Wǒ jiā yǒu sì gè rén.",
        "thaiMeaning": "ครอบครัวฉันมีสี่คน",
        "englishMeaning": "There are four people in my family."
      },
      {
        "scenario": "ขึ้นไปชั้นสี่",
        "hanzi": "会议室在四楼。",
        "pinyin": "Huì yì shì zài sì lóu.",
        "thaiMeaning": "ห้องประชุมอยู่ชั้นสี่",
        "englishMeaning": "The conference room is on the fourth floor."
      }
    ]
  },
  {
    "id": "v241",
    "hanzi": "五",
    "pinyin": "wǔ",
    "thaiMeaning": "ห้า (5)",
    "englishMeaning": "five",
    "example": {
      "hanzi": "五点。",
      "pinyin": "Wǔ diǎn.",
      "thaiMeaning": "ห้าโมง",
      "englishMeaning": "Five o'clock."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "五点。",
        "pinyin": "Wǔ diǎn.",
        "thaiMeaning": "ห้าโมง",
        "englishMeaning": "Five o'clock."
      },
      {
        "scenario": "ขอเวลาห้านาที",
        "hanzi": "再给我五分钟。",
        "pinyin": "Zài gěi wǒ wǔ fēn zhōng.",
        "thaiMeaning": "ให้เวลาฉันอีกห้านาที",
        "englishMeaning": "Give me five more minutes."
      },
      {
        "scenario": "ซื้อหนังสือห้าเล่ม",
        "hanzi": "学校买了五本新书。",
        "pinyin": "Xué xiào mǎi le wǔ běn xīn shū.",
        "thaiMeaning": "โรงเรียนซื้อหนังสือใหม่ห้าเล่ม",
        "englishMeaning": "The school bought five new books."
      }
    ]
  },
  {
    "id": "v242",
    "hanzi": "六",
    "pinyin": "liù",
    "thaiMeaning": "หก (6)",
    "englishMeaning": "six",
    "example": {
      "hanzi": "六个。",
      "pinyin": "Liù gè.",
      "thaiMeaning": "หกอัน",
      "englishMeaning": "Six."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "六个。",
        "pinyin": "Liù gè.",
        "thaiMeaning": "หกอัน",
        "englishMeaning": "Six."
      },
      {
        "scenario": "บอกเวลาเลิกงาน",
        "hanzi": "我六点下班。",
        "pinyin": "Wǒ liù diǎn xià bān.",
        "thaiMeaning": "ฉันเลิกงานหกโมง",
        "englishMeaning": "I get off work at six o'clock."
      },
      {
        "scenario": "โต๊ะสำหรับหกคน",
        "hanzi": "我们需要一张六人桌。",
        "pinyin": "Wǒ men xū yào yì zhāng liù rén zhuō.",
        "thaiMeaning": "พวกเราต้องการโต๊ะสำหรับหกคน",
        "englishMeaning": "We need a table for six."
      }
    ]
  },
  {
    "id": "v243",
    "hanzi": "七",
    "pinyin": "qī",
    "thaiMeaning": "เจ็ด (7)",
    "englishMeaning": "seven",
    "example": {
      "hanzi": "七点。",
      "pinyin": "Qī diǎn.",
      "thaiMeaning": "เจ็ดโมง",
      "englishMeaning": "Seven o'clock."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "七点。",
        "pinyin": "Qī diǎn.",
        "thaiMeaning": "เจ็ดโมง",
        "englishMeaning": "Seven o'clock."
      },
      {
        "scenario": "ตื่นเจ็ดโมงทุกวัน",
        "hanzi": "我每天七点起床。",
        "pinyin": "Wǒ měi tiān qī diǎn qǐ chuáng.",
        "thaiMeaning": "ฉันตื่นเจ็ดโมงทุกวัน",
        "englishMeaning": "I get up at seven o'clock every day."
      },
      {
        "scenario": "พักโรงแรมเจ็ดคืน",
        "hanzi": "我们在酒店住七个晚上。",
        "pinyin": "Wǒ men zài jiǔ diàn zhù qī gè wǎn shàng.",
        "thaiMeaning": "พวกเราพักโรงแรมเจ็ดคืน",
        "englishMeaning": "We stayed in the hotel for seven nights."
      }
    ]
  },
  {
    "id": "v244",
    "hanzi": "八",
    "pinyin": "bā",
    "thaiMeaning": "แปด (8)",
    "englishMeaning": "eight",
    "example": {
      "hanzi": "八块。",
      "pinyin": "Bā kuài.",
      "thaiMeaning": "แปดหยวน",
      "englishMeaning": "Eight dollars."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "八块。",
        "pinyin": "Bā kuài.",
        "thaiMeaning": "แปดหยวน",
        "englishMeaning": "Eight dollars."
      },
      {
        "scenario": "เริ่มงานแปดโมง",
        "hanzi": "公司八点开始上班。",
        "pinyin": "Gōng sī bā diǎn kāi shǐ shàng bān.",
        "thaiMeaning": "บริษัทเริ่มงานแปดโมง",
        "englishMeaning": "The company starts work at eight o'clock."
      },
      {
        "scenario": "ซื้อส้มแปดลูก",
        "hanzi": "她买了八个橙子。",
        "pinyin": "Tā mǎi le bā gè chéng zǐ.",
        "thaiMeaning": "เธอซื้อส้มแปดลูก",
        "englishMeaning": "She bought eight oranges."
      }
    ]
  },
  {
    "id": "v245",
    "hanzi": "九",
    "pinyin": "jiǔ",
    "thaiMeaning": "เก้า (9)",
    "englishMeaning": "Nine",
    "example": {
      "hanzi": "九岁。",
      "pinyin": "Jiǔ suì.",
      "thaiMeaning": "เก้าขวบ",
      "englishMeaning": "Nine years old."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "九岁。",
        "pinyin": "Jiǔ suì.",
        "thaiMeaning": "เก้าขวบ",
        "englishMeaning": "Nine years old."
      },
      {
        "scenario": "ร้านเปิดเก้าโมง",
        "hanzi": "商店早上九点开门。",
        "pinyin": "Shāng diàn zǎo shàng jiǔ diǎn kāi mén.",
        "thaiMeaning": "ร้านเปิดเก้าโมงเช้า",
        "englishMeaning": "The store opens at nine in the morning."
      },
      {
        "scenario": "อยู่ห้องหมายเลขเก้า",
        "hanzi": "我的房间是九号。",
        "pinyin": "Wǒ de fáng jiān shì jiǔ hào.",
        "thaiMeaning": "ห้องของฉันคือหมายเลขเก้า",
        "englishMeaning": "My room is number nine."
      }
    ]
  },
  {
    "id": "v246",
    "hanzi": "十",
    "pinyin": "shí",
    "thaiMeaning": "สิบ (10)",
    "englishMeaning": "ten",
    "example": {
      "hanzi": "十分钟。",
      "pinyin": "Shí fēnzhōng.",
      "thaiMeaning": "สิบนาที",
      "englishMeaning": "Ten minutes."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "十分钟。",
        "pinyin": "Shí fēn zhōng.",
        "thaiMeaning": "สิบนาที",
        "englishMeaning": "Ten minutes."
      },
      {
        "scenario": "รอสิบ分钟",
        "hanzi": "请等十分钟。",
        "pinyin": "Qǐng děng shí fēn zhōng.",
        "thaiMeaning": "กรุณารอสิบนาที",
        "englishMeaning": "Please wait ten minutes."
      },
      {
        "scenario": "มีนักเรียนสิบคน",
        "hanzi": "教室里有十个学生。",
        "pinyin": "Jiào shì lǐ yǒu shí gè xué shēng.",
        "thaiMeaning": "ในห้องเรียนมีนักเรียนสิบคน",
        "englishMeaning": "There are ten students in the classroom."
      }
    ]
  },
  {
    "id": "v247",
    "hanzi": "百",
    "pinyin": "bǎi",
    "thaiMeaning": "ร้อย (100)",
    "englishMeaning": "Hundred",
    "example": {
      "hanzi": "一百块。",
      "pinyin": "Yì bǎi kuài.",
      "thaiMeaning": "หนึ่งร้อยหยวน",
      "englishMeaning": "One hundred dollars."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一百块。",
        "pinyin": "Yì bǎi kuài.",
        "thaiMeaning": "หนึ่งร้อยหยวน",
        "englishMeaning": "One hundred dollars."
      },
      {
        "scenario": "บอกราคาหนึ่งร้อยหยวน",
        "hanzi": "这件衣服一百块钱。",
        "pinyin": "Zhè jiàn yī fu yì bǎi kuài qián.",
        "thaiMeaning": "เสื้อตัวนี้หนึ่งร้อยหยวน",
        "englishMeaning": "This dress costs a hundred dollars."
      },
      {
        "scenario": "ห้องพักมีมากกว่าร้อยห้อง",
        "hanzi": "这家酒店有一百多间房。",
        "pinyin": "Zhè jiā jiǔ diàn yǒu yì bǎi duō jiān fáng.",
        "thaiMeaning": "โรงแรมนี้มีห้องมากกว่าหนึ่งร้อยห้อง",
        "englishMeaning": "This hotel has more than a hundred rooms."
      }
    ]
  },
  {
    "id": "v248",
    "hanzi": "千",
    "pinyin": "qiān",
    "thaiMeaning": "พัน (1,000)",
    "englishMeaning": "thousand",
    "example": {
      "hanzi": "一千元。",
      "pinyin": "Yì qiān yuán.",
      "thaiMeaning": "หนึ่งพันหยวน",
      "englishMeaning": "One thousand yuan."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一千元。",
        "pinyin": "Yì qiān yuán.",
        "thaiMeaning": "หนึ่งพันหยวน",
        "englishMeaning": "One thousand yuan."
      },
      {
        "scenario": "บอกราคาคอมพิวเตอร์",
        "hanzi": "这台电脑三千块。",
        "pinyin": "Zhè tái diàn nǎo sān qiān kuài.",
        "thaiMeaning": "คอมพิวเตอร์เครื่องนี้สามพันหยวน",
        "englishMeaning": "This computer costs three thousand yuan."
      },
      {
        "scenario": "วิ่งหนึ่งพันเมตร",
        "hanzi": "我们今天跑一千米。",
        "pinyin": "Wǒ men jīn tiān pǎo yì qiān mǐ.",
        "thaiMeaning": "วันนี้พวกเราวิ่งหนึ่งพันเมตร",
        "englishMeaning": "We ran a thousand meters today."
      }
    ]
  },
  {
    "id": "v249",
    "hanzi": "万",
    "pinyin": "wàn",
    "thaiMeaning": "หมื่น (10,000)",
    "englishMeaning": "Ten thousand",
    "example": {
      "hanzi": "一万人。",
      "pinyin": "Yí wàn rén.",
      "thaiMeaning": "หนึ่งหมื่นคน",
      "englishMeaning": "Ten thousand people."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一万人。",
        "pinyin": "Yí wàn rén.",
        "thaiMeaning": "หนึ่งหมื่นคน",
        "englishMeaning": "Ten thousand people."
      },
      {
        "scenario": "บอกราคารถ",
        "hanzi": "这辆车十万块。",
        "pinyin": "Zhè liàng chē shí wàn kuài.",
        "thaiMeaning": "รถคันนี้หนึ่งแสนหยวน",
        "englishMeaning": "This car costs 100,000 yuan."
      },
      {
        "scenario": "เมืองนี้มีคนนับหมื่น",
        "hanzi": "这个小城有几万人。",
        "pinyin": "Zhè ge xiǎo chéng yǒu jǐ wàn rén.",
        "thaiMeaning": "เมืองเล็กนี้มีคนหลายหมื่นคน",
        "englishMeaning": "There are tens of thousands of people in this small town."
      }
    ]
  },
  {
    "id": "v250",
    "hanzi": "第一",
    "pinyin": "dìyī",
    "thaiMeaning": "อันดับหนึ่ง / ที่หนึ่ง",
    "englishMeaning": "First",
    "example": {
      "hanzi": "拿第一。",
      "pinyin": "Ná dìyī.",
      "thaiMeaning": "ได้ที่หนึ่ง",
      "englishMeaning": "Get first place."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "拿第一。",
        "pinyin": "Ná dì yī.",
        "thaiMeaning": "ได้ที่หนึ่ง",
        "englishMeaning": "Get first place."
      },
      {
        "scenario": "ได้อันดับหนึ่งในการสอบ",
        "hanzi": "她这次考试得了第一。",
        "pinyin": "Tā zhè cì kǎo shì dé le dì yī.",
        "thaiMeaning": "ครั้งนี้เธอสอบได้อันดับหนึ่ง",
        "englishMeaning": "She got first in this exam."
      },
      {
        "scenario": "เล่าประสบการณ์ครั้งแรก",
        "hanzi": "这是我第一天上班。",
        "pinyin": "Zhè shì wǒ dì yī tiān shàng bān.",
        "thaiMeaning": "นี่เป็นวันแรกที่ฉันทำงาน",
        "englishMeaning": "This is my first day at work."
      }
    ]
  },
  {
    "id": "v251",
    "hanzi": "个",
    "pinyin": "gè",
    "thaiMeaning": "อัน / คน (ลักษณะนาม)",
    "englishMeaning": "indivual",
    "example": {
      "hanzi": "一个人。",
      "pinyin": "Yí gè rén.",
      "thaiMeaning": "คนหนึ่งคน",
      "englishMeaning": "one person."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一个人。",
        "pinyin": "Yí gè rén.",
        "thaiMeaning": "คนหนึ่งคน",
        "englishMeaning": "one person."
      },
      {
        "scenario": "ขอแอปเปิลหนึ่งลูก",
        "hanzi": "我要一个苹果。",
        "pinyin": "Wǒ yào yí gè píng guǒ.",
        "thaiMeaning": "ฉันเอาแอปเปิลหนึ่งลูก",
        "englishMeaning": "I want an apple."
      },
      {
        "scenario": "บอกจำนวนคนในทีม",
        "hanzi": "我们组有五个人。",
        "pinyin": "Wǒ men zǔ yǒu wǔ gè rén.",
        "thaiMeaning": "กลุ่มเรามีห้าคน",
        "englishMeaning": "There are five people in our group."
      }
    ]
  },
  {
    "id": "v252",
    "hanzi": "只",
    "pinyin": "zhī",
    "thaiMeaning": "ตัว (สัตว์ / ข้าง)",
    "englishMeaning": "Only",
    "example": {
      "hanzi": "一只猫。",
      "pinyin": "Yì zhī māo.",
      "thaiMeaning": "แมวหนึ่งตัว",
      "englishMeaning": "a cat."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一只猫。",
        "pinyin": "Yì zhī māo.",
        "thaiMeaning": "แมวหนึ่งตัว",
        "englishMeaning": "a cat."
      },
      {
        "scenario": "บอกว่ามีแมวสองตัว",
        "hanzi": "我家有两只猫。",
        "pinyin": "Wǒ jiā yǒu liǎng zhī māo.",
        "thaiMeaning": "บ้านฉันมีแมวสองตัว",
        "englishMeaning": "There are two cats at home."
      },
      {
        "scenario": "ซื้อรองเท้าข้างเดียวไม่ได้",
        "hanzi": "这里只找到一只鞋。",
        "pinyin": "Zhè lǐ zhī zhǎo dào yì zhī xié.",
        "thaiMeaning": "ตรงนี้หารองเท้าเจอแค่ข้างเดียว",
        "englishMeaning": "Only one shoe was found here."
      }
    ]
  },
  {
    "id": "v253",
    "hanzi": "件",
    "pinyin": "jiàn",
    "thaiMeaning": "ตัว (เสื้อผ้า) / เรื่อง (งาน)",
    "englishMeaning": "pieces",
    "example": {
      "hanzi": "一件衣服。",
      "pinyin": "Yí jiàn yīfu.",
      "thaiMeaning": "เสื้อผ้าหนึ่งตัว",
      "englishMeaning": "a piece of clothing."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一件衣服。",
        "pinyin": "Yí jiàn yī fu.",
        "thaiMeaning": "เสื้อผ้าหนึ่งตัว",
        "englishMeaning": "a piece of clothing."
      },
      {
        "scenario": "ลองเสื้อผ้าหนึ่งตัว",
        "hanzi": "我想试这件衣服。",
        "pinyin": "Wǒ xiǎng shì zhè jiàn yī fu.",
        "thaiMeaning": "ฉันอยากลองเสื้อตัวนี้",
        "englishMeaning": "I want to try on this dress."
      },
      {
        "scenario": "มีเรื่องสำคัญจะบอก",
        "hanzi": "我有一件重要的事告诉你。",
        "pinyin": "Wǒ yǒu yí jiàn zhòng yào de shì gào sù nǐ.",
        "thaiMeaning": "ฉันมีเรื่องสำคัญหนึ่งเรื่องจะบอกคุณ",
        "englishMeaning": "I have something important to tell you."
      }
    ]
  },
  {
    "id": "v254",
    "hanzi": "本",
    "pinyin": "běn",
    "thaiMeaning": "เล่ม (หนังสือ)",
    "englishMeaning": "Book",
    "example": {
      "hanzi": "一本书。",
      "pinyin": "Yì běn shū.",
      "thaiMeaning": "หนังสือหนึ่งเล่ม",
      "englishMeaning": "a book."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一本书。",
        "pinyin": "Yì běn shū.",
        "thaiMeaning": "หนังสือหนึ่งเล่ม",
        "englishMeaning": "a book."
      },
      {
        "scenario": "ยืมหนังสือสามเล่ม",
        "hanzi": "我借了三本书。",
        "pinyin": "Wǒ jiè le sān běn shū.",
        "thaiMeaning": "ฉันยืมหนังสือสามเล่ม",
        "englishMeaning": "I borrowed three books."
      },
      {
        "scenario": "ถามว่าเป็นหนังสือเล่มไหน",
        "hanzi": "你说的是哪本字典？",
        "pinyin": "Nǐ shuō de shì nǎ běn zì diǎn?",
        "thaiMeaning": "คุณหมายถึงพจนานุกรมเล่มไหน?",
        "englishMeaning": "Which dictionary are you talking about?"
      }
    ]
  },
  {
    "id": "v255",
    "hanzi": "张",
    "pinyin": "zhāng",
    "thaiMeaning": "แผ่น / ใบ (กระดาษ/โต๊ะ/รูป)",
    "englishMeaning": "open",
    "example": {
      "hanzi": "一张纸。",
      "pinyin": "Yì zhāng zhǐ.",
      "thaiMeaning": "กระดาษหนึ่งแผ่น",
      "englishMeaning": "A piece of paper."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一张纸。",
        "pinyin": "Yì zhāng zhǐ.",
        "thaiMeaning": "กระดาษหนึ่งแผ่น",
        "englishMeaning": "A piece of paper."
      },
      {
        "scenario": "ขอกระดาษหนึ่งแผ่น",
        "hanzi": "请给我一张纸。",
        "pinyin": "Qǐng gěi wǒ yì zhāng zhǐ.",
        "thaiMeaning": "ขอกระดาษหนึ่งแผ่น",
        "englishMeaning": "Please give me a piece of paper."
      },
      {
        "scenario": "จองโต๊ะหนึ่งตัว",
        "hanzi": "我订了一张靠窗的桌子。",
        "pinyin": "Wǒ dìng le yì zhāng kào chuāng de zhuō zi.",
        "thaiMeaning": "ฉันจองโต๊ะริมหน้าต่างหนึ่งตัว",
        "englishMeaning": "I booked a table by the window."
      }
    ]
  },
  {
    "id": "v256",
    "hanzi": "块",
    "pinyin": "kuài",
    "thaiMeaning": "ชิ้น / หยวน (เงิน)",
    "englishMeaning": "piece",
    "example": {
      "hanzi": "十块钱。",
      "pinyin": "Shí kuài qián.",
      "thaiMeaning": "เงินสิบหยวน",
      "englishMeaning": "Ten dollars."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "十块钱。",
        "pinyin": "Shí kuài qián.",
        "thaiMeaning": "เงินสิบหยวน",
        "englishMeaning": "Ten dollars."
      },
      {
        "scenario": "บอกราคาสิบหยวน",
        "hanzi": "这杯茶十块钱。",
        "pinyin": "Zhè bēi chá shí kuài qián.",
        "thaiMeaning": "ชาถ้วยนี้สิบหยวน",
        "englishMeaning": "This cup of tea costs ten yuan."
      },
      {
        "scenario": "แบ่งเค้กหนึ่งชิ้น",
        "hanzi": "给我一块蛋糕吧。",
        "pinyin": "Gěi wǒ yí kuài dàn gāo ba.",
        "thaiMeaning": "ขอเค้กให้ฉันหนึ่งชิ้น",
        "englishMeaning": "Give me a piece of cake."
      }
    ]
  },
  {
    "id": "v257",
    "hanzi": "瓶",
    "pinyin": "píng",
    "thaiMeaning": "ขวด (ลักษณะนาม)",
    "englishMeaning": "bottle",
    "example": {
      "hanzi": "一瓶水。",
      "pinyin": "Yì píng shuǐ.",
      "thaiMeaning": "น้ำหนึ่งขวด",
      "englishMeaning": "A bottle of water."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一瓶水。",
        "pinyin": "Yì píng shuǐ.",
        "thaiMeaning": "น้ำหนึ่งขวด",
        "englishMeaning": "A bottle of water."
      },
      {
        "scenario": "ซื้อน้ำสองขวด",
        "hanzi": "我要两瓶水。",
        "pinyin": "Wǒ yào liǎng píng shuǐ.",
        "thaiMeaning": "ฉันเอาน้ำสองขวด",
        "englishMeaning": "I want two bottles of water."
      },
      {
        "scenario": "เปิดนมหนึ่งขวด",
        "hanzi": "他打开了一瓶牛奶。",
        "pinyin": "Tā dǎ kāi le yì píng niú nǎi.",
        "thaiMeaning": "เขาเปิดนมหนึ่งขวด",
        "englishMeaning": "He opened a bottle of milk."
      }
    ]
  },
  {
    "id": "v258",
    "hanzi": "杯",
    "pinyin": "bēi",
    "thaiMeaning": "แก้ว (ลักษณะนาม)",
    "englishMeaning": "cup",
    "example": {
      "hanzi": "一杯咖啡。",
      "pinyin": "Yì bēi kāfēi.",
      "thaiMeaning": "กาแฟหนึ่งแก้ว",
      "englishMeaning": "A cup of coffee."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一杯咖啡。",
        "pinyin": "Yì bēi kā fēi.",
        "thaiMeaning": "กาแฟหนึ่งแก้ว",
        "englishMeaning": "A cup of coffee."
      },
      {
        "scenario": "ชงชาให้แขกหนึ่งถ้วย",
        "hanzi": "我给客人倒了一杯茶。",
        "pinyin": "Wǒ gěi kè rén dǎo le yì bēi chá.",
        "thaiMeaning": "ฉันรินชาให้แขกหนึ่งถ้วย",
        "englishMeaning": "I poured the guest a cup of tea."
      },
      {
        "scenario": "ดื่มกาแฟสองแก้ว",
        "hanzi": "今天我喝了两杯咖啡。",
        "pinyin": "Jīn tiān wǒ hē le liǎng bēi kā fēi.",
        "thaiMeaning": "วันนี้ฉันดื่มกาแฟสองแก้ว",
        "englishMeaning": "I drank two cups of coffee today."
      }
    ]
  },
  {
    "id": "v259",
    "hanzi": "条",
    "pinyin": "tiáo",
    "thaiMeaning": "สาย / เส้น (ถนน/กางเกง/ปลา)",
    "englishMeaning": "strip",
    "example": {
      "hanzi": "一条鱼。",
      "pinyin": "Yì tiáo yú.",
      "thaiMeaning": "ปลาหนึ่งตัว",
      "englishMeaning": "a fish."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一条鱼。",
        "pinyin": "Yì tiáo yú.",
        "thaiMeaning": "ปลาหนึ่งตัว",
        "englishMeaning": "a fish."
      },
      {
        "scenario": "ซื้อกางเกงหนึ่งตัว",
        "hanzi": "我买了一条新裤子。",
        "pinyin": "Wǒ mǎi le yì tiáo xīn kù zǐ.",
        "thaiMeaning": "ฉันซื้อกางเกงใหม่หนึ่งตัว",
        "englishMeaning": "I bought a new pair of pants."
      },
      {
        "scenario": "เห็นปลาสามตัว",
        "hanzi": "水里有三条鱼。",
        "pinyin": "Shuǐ lǐ yǒu sān tiáo yú.",
        "thaiMeaning": "ในน้ำมีปลาสามตัว",
        "englishMeaning": "There are three fish in the water."
      }
    ]
  },
  {
    "id": "v260",
    "hanzi": "双",
    "pinyin": "shuāng",
    "thaiMeaning": "คู่ (รองเท้า/ตะเกียบ)",
    "englishMeaning": "pair",
    "example": {
      "hanzi": "一双鞋。",
      "pinyin": "Yì shuāng xié.",
      "thaiMeaning": "รองเท้าหนึ่งคู่",
      "englishMeaning": "A pair of shoes."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一双鞋。",
        "pinyin": "Yì shuāng xié.",
        "thaiMeaning": "รองเท้าหนึ่งคู่",
        "englishMeaning": "A pair of shoes."
      },
      {
        "scenario": "ลองรองเท้าหนึ่งคู่",
        "hanzi": "我想试那双鞋。",
        "pinyin": "Wǒ xiǎng shì nà shuāng xié.",
        "thaiMeaning": "ฉันอยากลองรองเท้าคู่นั้น",
        "englishMeaning": "I want to try on those shoes."
      },
      {
        "scenario": "ขอตะเกียบสองคู่",
        "hanzi": "请给我们两双筷子。",
        "pinyin": "Qǐng gěi wǒ men liǎng shuāng kuài zi.",
        "thaiMeaning": "ขอตะเกียบให้พวกเราสองคู่",
        "englishMeaning": "Please give us two pairs of chopsticks."
      }
    ]
  },
  {
    "id": "v261",
    "hanzi": "以前",
    "pinyin": "yǐqián",
    "thaiMeaning": "เมื่อก่อน / ก่อนหน้า",
    "englishMeaning": "before",
    "example": {
      "hanzi": "三年以前。",
      "pinyin": "Sān nián yǐqián.",
      "thaiMeaning": "สามปีก่อน",
      "englishMeaning": "Three years ago."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "三年以前。",
        "pinyin": "Sān nián yǐ qián.",
        "thaiMeaning": "สามปีก่อน",
        "englishMeaning": "Three years ago."
      },
      {
        "scenario": "เปรียบเทียบกับอดีต",
        "hanzi": "这里以前没有这么多楼。",
        "pinyin": "Zhè lǐ yǐ qián méi yǒu zhè me duō lóu.",
        "thaiMeaning": "เมื่อก่อนที่นี่ไม่มีตึกมากขนาดนี้",
        "englishMeaning": "There weren't so many buildings here before."
      },
      {
        "scenario": "เตือนให้มาถึงก่อนเวลา",
        "hanzi": "请在八点以前到。",
        "pinyin": "Qǐng zài bā diǎn yǐ qián dào.",
        "thaiMeaning": "กรุณามาถึงก่อนแปดโมง",
        "englishMeaning": "Please arrive before eight o'clock."
      }
    ]
  },
  {
    "id": "v262",
    "hanzi": "以后",
    "pinyin": "yǐhòu",
    "thaiMeaning": "หลังจากนี้ / ต่อไป",
    "englishMeaning": "after",
    "example": {
      "hanzi": "以后再说。",
      "pinyin": "Yǐhòu zài shuō.",
      "thaiMeaning": "วันหลังค่อยคุยกัน",
      "englishMeaning": "More to come later."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "以后再说。",
        "pinyin": "Yǐ hòu zài shuō.",
        "thaiMeaning": "วันหลังค่อยคุยกัน",
        "englishMeaning": "More to come later."
      },
      {
        "scenario": "นัดคุยกันหลังเลิกงาน",
        "hanzi": "下班以后再联系我。",
        "pinyin": "Xià bān yǐ hòu zài lián xì wǒ.",
        "thaiMeaning": "หลังเลิกงานค่อยติดต่อฉัน",
        "englishMeaning": "Contact me after get off work."
      },
      {
        "scenario": "สัญญาว่าคราวหน้าจะระวัง",
        "hanzi": "我以后会更小心。",
        "pinyin": "Wǒ yǐ hòu huì gèng xiǎo xīn.",
        "thaiMeaning": "ต่อไปฉันจะระวังมากขึ้น",
        "englishMeaning": "I will be more careful in the future."
      }
    ]
  },
  {
    "id": "v263",
    "hanzi": "刚",
    "pinyin": "gāng",
    "thaiMeaning": "เพิ่งจะ",
    "englishMeaning": "Just",
    "example": {
      "hanzi": "刚到。",
      "pinyin": "Gāng dào.",
      "thaiMeaning": "เพิ่งมาถึง",
      "englishMeaning": "Just arrived."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "刚到。",
        "pinyin": "Gāng dào.",
        "thaiMeaning": "เพิ่งมาถึง",
        "englishMeaning": "Just arrived."
      },
      {
        "scenario": "บอกว่าเพิ่งถึงบ้าน",
        "hanzi": "我刚到家。",
        "pinyin": "Wǒ gāng dào jiā.",
        "thaiMeaning": "ฉันเพิ่งถึงบ้าน",
        "englishMeaning": "I just got home."
      },
      {
        "scenario": "บอกว่าอาหารเพิ่งทำเสร็จ",
        "hanzi": "晚饭刚做好，快来吃吧。",
        "pinyin": "Wǎn fàn gāng zuò hǎo, kuài lái chī ba.",
        "thaiMeaning": "อาหารเย็นเพิ่งทำเสร็จ มากินเร็ว",
        "englishMeaning": "Dinner has just been prepared, come and eat."
      }
    ]
  },
  {
    "id": "v264",
    "hanzi": "正",
    "pinyin": "zhèng",
    "thaiMeaning": "กำลัง...อยู่",
    "englishMeaning": "just",
    "example": {
      "hanzi": "正在看。",
      "pinyin": "Zhèngzài kàn.",
      "thaiMeaning": "กำลังดูอยู่",
      "englishMeaning": "Looking."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "正在看。",
        "pinyin": "Zhèng zài kàn.",
        "thaiMeaning": "กำลังดูอยู่",
        "englishMeaning": "Looking."
      },
      {
        "scenario": "บอกว่ากำลังประชุม",
        "hanzi": "我正开会，晚点回复你。",
        "pinyin": "Wǒ zhèng kāi huì, wǎn diǎn huí fù nǐ.",
        "thaiMeaning": "ฉันกำลังประชุม เดี๋ยวตอบคุณทีหลัง",
        "englishMeaning": "I'm in a meeting and will reply to you later."
      },
      {
        "scenario": "เจอเพื่อนกำลังจะออกจากบ้าน",
        "hanzi": "我正要出门，你就来了。",
        "pinyin": "Wǒ zhèng yào chū mén, nǐ jiù lái le.",
        "thaiMeaning": "ฉันกำลังจะออกจากบ้าน คุณก็มาพอดี",
        "englishMeaning": "I was just about to go out when you came."
      }
    ]
  },
  {
    "id": "v265",
    "hanzi": "经常",
    "pinyin": "jīngcháng",
    "thaiMeaning": "บ่อยๆ / ประจำ",
    "englishMeaning": "often",
    "example": {
      "hanzi": "经常去。",
      "pinyin": "Jīngcháng qù.",
      "thaiMeaning": "ไปประจำ",
      "englishMeaning": "Go often."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "经常去。",
        "pinyin": "Jīng cháng qù.",
        "thaiMeaning": "ไปประจำ",
        "englishMeaning": "Go often."
      },
      {
        "scenario": "เล่านิสัยออกกำลังกาย",
        "hanzi": "我经常下班后跑步。",
        "pinyin": "Wǒ jīng cháng xià bān hòu pǎo bù.",
        "thaiMeaning": "ฉันมักวิ่งหลังเลิกงาน",
        "englishMeaning": "I often run after get off work."
      },
      {
        "scenario": "บอกว่าถนนเส้นนี้รถติดบ่อย",
        "hanzi": "这条路早上经常堵车。",
        "pinyin": "Zhè tiáo lù zǎo shàng jīng cháng dǔ chē.",
        "thaiMeaning": "ถนนเส้นนี้ตอนเช้ารถติดบ่อย",
        "englishMeaning": "There are often traffic jams on this road in the morning."
      }
    ]
  },
  {
    "id": "v266",
    "hanzi": "有时",
    "pinyin": "yǒushí",
    "thaiMeaning": "บางครั้ง",
    "englishMeaning": "sometimes",
    "example": {
      "hanzi": "有时忙。",
      "pinyin": "Yǒushí máng.",
      "thaiMeaning": "บางครั้งก็ยุ่ง",
      "englishMeaning": "Sometimes busy."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "有时忙。",
        "pinyin": "Yǒu shí máng.",
        "thaiMeaning": "บางครั้งก็ยุ่ง",
        "englishMeaning": "Sometimes busy."
      },
      {
        "scenario": "เล่าว่าบางครั้งทำงานที่บ้าน",
        "hanzi": "我有时在家工作。",
        "pinyin": "Wǒ yǒu shí zài jiā gōng zuò.",
        "thaiMeaning": "บางครั้งฉันทำงานที่บ้าน",
        "englishMeaning": "I work from home sometimes."
      },
      {
        "scenario": "บอกว่าฝนตกเป็นบางครั้ง",
        "hanzi": "这里下午有时会下雨。",
        "pinyin": "Zhè lǐ xià wǔ yǒu shí huì xià yǔ.",
        "thaiMeaning": "ที่นี่ตอนบ่ายบางครั้งฝนตก",
        "englishMeaning": "It sometimes rains here in the afternoon."
      }
    ]
  },
  {
    "id": "v267",
    "hanzi": "总是",
    "pinyin": "zǒngshì",
    "thaiMeaning": "มักจะ...เสมอ",
    "englishMeaning": "always",
    "example": {
      "hanzi": "总是迟到。",
      "pinyin": "Zǒngshì chídào.",
      "thaiMeaning": "มาสายเสมอ",
      "englishMeaning": "Always late."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "总是迟到。",
        "pinyin": "Zǒng shì chí dào.",
        "thaiMeaning": "มาสายเสมอ",
        "englishMeaning": "Always late."
      },
      {
        "scenario": "บ่นว่าเพื่อนมาสายเสมอ",
        "hanzi": "他开会总是迟到。",
        "pinyin": "Tā kāi huì zǒng shì chí dào.",
        "thaiMeaning": "เขามาประชุมสายเสมอ",
        "englishMeaning": "He is always late for meetings."
      },
      {
        "scenario": "ชมว่าแม่คอยช่วยตลอด",
        "hanzi": "妈妈总是支持我。",
        "pinyin": "Mā ma zǒng shì zhī chí wǒ.",
        "thaiMeaning": "แม่สนับสนุนฉันเสมอ",
        "englishMeaning": "Mom always supports me."
      }
    ]
  },
  {
    "id": "v268",
    "hanzi": "已经",
    "pinyin": "yǐjīng",
    "thaiMeaning": "เรียบร้อยแล้ว",
    "englishMeaning": "already",
    "example": {
      "hanzi": "已经懂了。",
      "pinyin": "Yǐjīng dǒng le.",
      "thaiMeaning": "เข้าใจแล้ว",
      "englishMeaning": "Got it already."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "已经懂了。",
        "pinyin": "Yǐ jīng dǒng le.",
        "thaiMeaning": "เข้าใจแล้ว",
        "englishMeaning": "Got it already."
      },
      {
        "scenario": "บอกว่าทำงานเสร็จแล้ว",
        "hanzi": "我已经完成工作了。",
        "pinyin": "Wǒ yǐ jīng wán chéng gōng zuò le.",
        "thaiMeaning": "ฉันทำงานเสร็จแล้ว",
        "englishMeaning": "I've done my job."
      },
      {
        "scenario": "แจ้งว่ารถออกไปแล้ว",
        "hanzi": "车已经走了。",
        "pinyin": "Chē yǐ jīng zǒu le.",
        "thaiMeaning": "รถออกไปแล้ว",
        "englishMeaning": "The car has left."
      }
    ]
  },
  {
    "id": "v269",
    "hanzi": "马上",
    "pinyin": "mǎshàng",
    "thaiMeaning": "ทันที / เดี๋ยวนี้",
    "englishMeaning": "immediately",
    "example": {
      "hanzi": "马上去。",
      "pinyin": "Mǎshàng qù.",
      "thaiMeaning": "ไปทันที",
      "englishMeaning": "Go now."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "马上去。",
        "pinyin": "Mǎ shàng qù.",
        "thaiMeaning": "ไปทันที",
        "englishMeaning": "Go now."
      },
      {
        "scenario": "บอกว่าจะถึงในไม่ช้า",
        "hanzi": "我马上就到。",
        "pinyin": "Wǒ mǎ shàng jiù dào.",
        "thaiMeaning": "ฉันกำลังจะถึงเดี๋ยวนี้",
        "englishMeaning": "I'll be there soon."
      },
      {
        "scenario": "เร่งให้ไปโรงพยาบาลทันที",
        "hanzi": "他发烧了，马上去医院。",
        "pinyin": "Tā fā shāo le, mǎ shàng qù yī yuàn.",
        "thaiMeaning": "เขามีไข้ ไปโรงพยาบาลทันที",
        "englishMeaning": "He has a fever and goes to the hospital immediately."
      }
    ]
  },
  {
    "id": "v270",
    "hanzi": "一直",
    "pinyin": "yìzhí",
    "thaiMeaning": "ตลอด / มาโดยตลอด",
    "englishMeaning": "Always",
    "example": {
      "hanzi": "一直学。",
      "pinyin": "Yìzhí xué.",
      "thaiMeaning": "เรียนมาโดยตลอด",
      "englishMeaning": "Keep learning."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一直学。",
        "pinyin": "Yì zhí xué.",
        "thaiMeaning": "เรียนมาโดยตลอด",
        "englishMeaning": "Keep learning."
      },
      {
        "scenario": "รอเพื่อนมาตลอด",
        "hanzi": "我一直在门口等你。",
        "pinyin": "Wǒ yì zhí zài mén kǒu děng nǐ.",
        "thaiMeaning": "ฉันรอคุณอยู่หน้าประตูตลอด",
        "englishMeaning": "I've been waiting for you at the door."
      },
      {
        "scenario": "ฝนตกต่อเนื่องทั้งวัน",
        "hanzi": "雨一直下到晚上。",
        "pinyin": "Yǔ yì zhí xià dào wǎn shàng.",
        "thaiMeaning": "ฝนตกต่อเนื่องจนถึงตอนเย็น",
        "englishMeaning": "It rained until night."
      }
    ]
  },
  {
    "id": "v271",
    "hanzi": "和",
    "pinyin": "hé",
    "thaiMeaning": "และ / กับ",
    "englishMeaning": "and",
    "example": {
      "hanzi": "我和你。",
      "pinyin": "Wǒ hé nǐ.",
      "thaiMeaning": "ฉันและคุณ",
      "englishMeaning": "me and you."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "我和你。",
        "pinyin": "Wǒ hé nǐ.",
        "thaiMeaning": "ฉันและคุณ",
        "englishMeaning": "me and you."
      },
      {
        "scenario": "บอกว่ากินข้าวกับเพื่อน",
        "hanzi": "我和朋友一起吃饭。",
        "pinyin": "Wǒ hé péng yǒu yì qǐ chī fàn.",
        "thaiMeaning": "ฉันกินข้าวกับเพื่อน",
        "englishMeaning": "I had dinner with friends."
      },
      {
        "scenario": "สั่งชาและกาแฟ",
        "hanzi": "我要一杯茶和一杯咖啡。",
        "pinyin": "Wǒ yào yì bēi chá hé yì bēi kā fēi.",
        "thaiMeaning": "ฉันเอาชาหนึ่งถ้วยและกาแฟหนึ่งแก้ว",
        "englishMeaning": "I'd like a cup of tea and a cup of coffee."
      }
    ]
  },
  {
    "id": "v272",
    "hanzi": "跟",
    "pinyin": "gēn",
    "thaiMeaning": "กับ / ตาม",
    "englishMeaning": "and",
    "example": {
      "hanzi": "跟我走。",
      "pinyin": "Gēn wǒ zǒu.",
      "thaiMeaning": "ตามฉันมา",
      "englishMeaning": "Follow me."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "跟我走。",
        "pinyin": "Gēn wǒ zǒu.",
        "thaiMeaning": "ตามฉันมา",
        "englishMeaning": "Follow me."
      },
      {
        "scenario": "ขอคุยกับผู้จัดการ",
        "hanzi": "我想跟经理谈一谈。",
        "pinyin": "Wǒ xiǎng gēn jīng lǐ tán yi tán.",
        "thaiMeaning": "ฉันอยากคุยกับผู้จัดการ",
        "englishMeaning": "I'd like to talk to the manager."
      },
      {
        "scenario": "ชวนให้เดินตามมา",
        "hanzi": "请跟我来。",
        "pinyin": "Qǐng gēn wǒ lái.",
        "thaiMeaning": "กรุณาตามฉันมา",
        "englishMeaning": "plz follow me."
      }
    ]
  },
  {
    "id": "v273",
    "hanzi": "还是",
    "pinyin": "háishi",
    "thaiMeaning": "หรือว่า / หรือ",
    "englishMeaning": "still",
    "example": {
      "hanzi": "茶还是咖啡？",
      "pinyin": "Chá háishi kāfēi?",
      "thaiMeaning": "ชาหรือว่ากาแฟ",
      "englishMeaning": "Tea or coffee?"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "茶还是咖啡？",
        "pinyin": "Chá hái shì kā fēi?",
        "thaiMeaning": "ชาหรือว่ากาแฟ",
        "englishMeaning": "Tea or coffee?"
      },
      {
        "scenario": "ให้เลือกชาหรือกาแฟ",
        "hanzi": "你喝茶还是咖啡？",
        "pinyin": "Nǐ hē chá hái shì kā fēi?",
        "thaiMeaning": "คุณดื่มชาหรือกาแฟ?",
        "englishMeaning": "Do you drink tea or coffee?"
      },
      {
        "scenario": "ถามว่าจะไปวันนี้หรือพรุ่งนี้",
        "hanzi": "你今天去还是明天去？",
        "pinyin": "Nǐ jīn tiān qù hái shì míng tiān qù?",
        "thaiMeaning": "คุณจะไปวันนี้หรือพรุ่งนี้?",
        "englishMeaning": "Are you going today or tomorrow?"
      }
    ]
  },
  {
    "id": "v274",
    "hanzi": "或者",
    "pinyin": "huòzhě",
    "thaiMeaning": "หรือ (ประโยคบอกเล่า)",
    "englishMeaning": "or",
    "example": {
      "hanzi": "今天或者明天。",
      "pinyin": "Jīntiān huòzhě míngtiān.",
      "thaiMeaning": "วันนี้หรือพรุ่งนี้",
      "englishMeaning": "Today or tomorrow."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "今天或者明天。",
        "pinyin": "Jīn tiān huò zhě míng tiān.",
        "thaiMeaning": "วันนี้หรือพรุ่งนี้",
        "englishMeaning": "Today or tomorrow."
      },
      {
        "scenario": "เสนอทางเลือกการเดินทาง",
        "hanzi": "我们可以坐车或者走路。",
        "pinyin": "Wǒ men kě yǐ zuò chē huò zhě zǒu lù.",
        "thaiMeaning": "พวกเรานั่งรถหรือเดินก็ได้",
        "englishMeaning": "We can take a car or walk."
      },
      {
        "scenario": "ให้เลือกเวลานัด",
        "hanzi": "星期六或者星期天都可以。",
        "pinyin": "Xīng qī liù huò zhě xīng qī tiān dōu kě yǐ.",
        "thaiMeaning": "วันเสาร์หรือวันอาทิตย์ก็ได้",
        "englishMeaning": "Saturday or Sunday is fine."
      }
    ]
  },
  {
    "id": "v275",
    "hanzi": "因为",
    "pinyin": "yīnwèi",
    "thaiMeaning": "เพราะว่า",
    "englishMeaning": "because",
    "example": {
      "hanzi": "因为下雨。",
      "pinyin": "Yīnwèi xiàyǔ.",
      "thaiMeaning": "เพราะว่าฝนตก",
      "englishMeaning": "Because it rains."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "因为下雨。",
        "pinyin": "Yīn wèi xià yǔ.",
        "thaiMeaning": "เพราะว่าฝนตก",
        "englishMeaning": "Because it rains."
      },
      {
        "scenario": "อธิบายเหตุผลที่มาสาย",
        "hanzi": "因为堵车，我迟到了。",
        "pinyin": "Yīn wèi dǔ chē, wǒ chí dào le.",
        "thaiMeaning": "เพราะรถติด ฉันจึงมาสาย",
        "englishMeaning": "I was late because of the traffic jam."
      },
      {
        "scenario": "อธิบายว่าทำไมไม่ออกไป",
        "hanzi": "因为下雨，我们没出去。",
        "pinyin": "Yīn wèi xià yǔ, wǒ men méi chū qù.",
        "thaiMeaning": "เพราะฝนตก พวกเราจึงไม่ได้ออกไป",
        "englishMeaning": "We didn't go out because it was raining."
      }
    ]
  },
  {
    "id": "v276",
    "hanzi": "所以",
    "pinyin": "suǒyǐ",
    "thaiMeaning": "ดังนั้น / จึง",
    "englishMeaning": "so",
    "example": {
      "hanzi": "所以没去。",
      "pinyin": "Suǒyǐ méi qù.",
      "thaiMeaning": "ดังนั้นจึงไม่ได้ไป",
      "englishMeaning": "So I didn’t go."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "所以没去。",
        "pinyin": "Suǒ yǐ méi qù.",
        "thaiMeaning": "ดังนั้นจึงไม่ได้ไป",
        "englishMeaning": "So I didn’t go."
      },
      {
        "scenario": "สรุปเหตุผลที่ต้องพัก",
        "hanzi": "我生病了，所以今天请假。",
        "pinyin": "Wǒ shēng bìng le, suǒ yǐ jīn tiān qǐng jià.",
        "thaiMeaning": "ฉันป่วย ดังนั้นวันนี้จึงลางาน",
        "englishMeaning": "I'm sick, so I'm taking today off."
      },
      {
        "scenario": "อธิบายว่าหิวเพราะไม่ได้กินเช้า",
        "hanzi": "我没吃早餐，所以很饿。",
        "pinyin": "Wǒ méi chī zǎo cān, suǒ yǐ hěn è.",
        "thaiMeaning": "ฉันไม่ได้กินอาหารเช้า ดังนั้นจึงหิวมาก",
        "englishMeaning": "I didn't have breakfast, so I was very hungry."
      }
    ]
  },
  {
    "id": "v277",
    "hanzi": "但是",
    "pinyin": "dànshì",
    "thaiMeaning": "แต่ว่า / แต่",
    "englishMeaning": "but",
    "example": {
      "hanzi": "但是很好。",
      "pinyin": "Dànshì hěn hǎo.",
      "thaiMeaning": "แต่ว่าดีมาก",
      "englishMeaning": "But it's good."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "但是很好。",
        "pinyin": "Dàn shì hěn hǎo.",
        "thaiMeaning": "แต่ว่าดีมาก",
        "englishMeaning": "But it's good."
      },
      {
        "scenario": "บอกว่าแพงแต่คุณภาพดี",
        "hanzi": "这个包很贵，但是质量很好。",
        "pinyin": "Zhè ge bāo hěn guì, dàn shì zhì liàng hěn hǎo.",
        "thaiMeaning": "กระเป๋าใบนี้แพง แต่คุณภาพดีมาก",
        "englishMeaning": "This bag is expensive, but the quality is great."
      },
      {
        "scenario": "บอกว่าเหนื่อยแต่มีความสุข",
        "hanzi": "今天很累，但是很开心。",
        "pinyin": "Jīn tiān hěn lèi, dàn shì hěn kāi xīn.",
        "thaiMeaning": "วันนี้เหนื่อย แต่มีความสุขมาก",
        "englishMeaning": "Today I am very tired, but very happy."
      }
    ]
  },
  {
    "id": "v278",
    "hanzi": "如果",
    "pinyin": "rúguǒ",
    "thaiMeaning": "ถ้าหาก / ถ้า",
    "englishMeaning": "if",
    "example": {
      "hanzi": "如果有空。",
      "pinyin": "Rúguǒ yǒu kòng.",
      "thaiMeaning": "ถ้าหากมีเวลาว่าง",
      "englishMeaning": "If available."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "如果有空。",
        "pinyin": "Rú guǒ yǒu kōng.",
        "thaiMeaning": "ถ้าหากมีเวลาว่าง",
        "englishMeaning": "If available."
      },
      {
        "scenario": "เสนอความช่วยเหลือ",
        "hanzi": "如果你需要，我可以帮忙。",
        "pinyin": "Rú guǒ nǐ xū yào, wǒ kě yǐ bāng máng.",
        "thaiMeaning": "ถ้าคุณต้องการ ฉันช่วยได้",
        "englishMeaning": "I can help if you need it."
      },
      {
        "scenario": "เตือนให้พกร่มหากฝนตก",
        "hanzi": "如果下雨，记得带伞。",
        "pinyin": "Rú guǒ xià yǔ, jì de dài sǎn.",
        "thaiMeaning": "ถ้าฝนตก อย่าลืมพกร่ม",
        "englishMeaning": "If it rains, remember to bring an umbrella."
      }
    ]
  },
  {
    "id": "v279",
    "hanzi": "虽然",
    "pinyin": "suīrán",
    "thaiMeaning": "แม้ว่า",
    "englishMeaning": "Although",
    "example": {
      "hanzi": "虽然累。",
      "pinyin": "Suīrán lèi.",
      "thaiMeaning": "แม้ว่าจะเหนื่อย",
      "englishMeaning": "Although tired."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "虽然累。",
        "pinyin": "Suī rán lèi.",
        "thaiMeaning": "แม้ว่าจะเหนื่อย",
        "englishMeaning": "Although tired."
      },
      {
        "scenario": "พูดถึงอากาศที่หนาวแต่แจ่มใส",
        "hanzi": "虽然很冷，但是天气很好。",
        "pinyin": "Suī rán hěn lěng, dàn shì tiān qì hěn hǎo.",
        "thaiMeaning": "แม้จะหนาว แต่อากาศดีมาก",
        "englishMeaning": "Although it was cold, the weather was nice."
      },
      {
        "scenario": "บอกว่ายากแต่จะพยายาม",
        "hanzi": "虽然很难，我还是想试试。",
        "pinyin": "Suī rán hěn nán, wǒ hái shì xiǎng shì shì.",
        "thaiMeaning": "แม้จะยาก ฉันก็ยังอยากลอง",
        "englishMeaning": "Although it is difficult, I still want to try."
      }
    ]
  },
  {
    "id": "v280",
    "hanzi": "很",
    "pinyin": "hěn",
    "thaiMeaning": "มาก",
    "englishMeaning": "very",
    "example": {
      "hanzi": "很好。",
      "pinyin": "Hěn hǎo.",
      "thaiMeaning": "ดีมาก",
      "englishMeaning": "very good."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "很好。",
        "pinyin": "Hěn hǎo.",
        "thaiMeaning": "ดีมาก",
        "englishMeaning": "very good."
      },
      {
        "scenario": "ชมอาหารว่าอร่อย",
        "hanzi": "这道菜很好吃。",
        "pinyin": "Zhè dào cài hěn hǎo chī.",
        "thaiMeaning": "อาหารจานนี้อร่อยมาก",
        "englishMeaning": "This dish is delicious."
      },
      {
        "scenario": "บอกว่ารู้สึกเหนื่อย",
        "hanzi": "我今天很累。",
        "pinyin": "Wǒ jīn tiān hěn lèi.",
        "thaiMeaning": "วันนี้ฉันเหนื่อยมาก",
        "englishMeaning": "I'm very tired today."
      }
    ]
  },
  {
    "id": "v281",
    "hanzi": "太",
    "pinyin": "tài",
    "thaiMeaning": "เกินไป / มาก",
    "englishMeaning": "too",
    "example": {
      "hanzi": "太好了。",
      "pinyin": "Tài hǎo le.",
      "thaiMeaning": "ดีจังเลย",
      "englishMeaning": "Very good."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "太好了。",
        "pinyin": "Tài hǎo le.",
        "thaiMeaning": "ดีจังเลย",
        "englishMeaning": "Very good."
      },
      {
        "scenario": "บ่นว่าอาหารเผ็ดเกินไป",
        "hanzi": "这个菜太辣了。",
        "pinyin": "Zhè ge cài tài là le.",
        "thaiMeaning": "อาหารจานนี้เผ็ดเกินไป",
        "englishMeaning": "This dish is too spicy."
      },
      {
        "scenario": "ชมข่าวดีอย่างตื่นเต้น",
        "hanzi": "太好了，我们成功了！",
        "pinyin": "Tài hǎo le, wǒ men chéng gōng le!",
        "thaiMeaning": "ดีมาก พวกเราสำเร็จแล้ว!",
        "englishMeaning": "Great, we made it!"
      }
    ]
  },
  {
    "id": "v282",
    "hanzi": "非常",
    "pinyin": "fēicháng",
    "thaiMeaning": "เป็นพิเศษ / มากๆ",
    "englishMeaning": "Very",
    "example": {
      "hanzi": "非常多。",
      "pinyin": "Fēicháng duō.",
      "thaiMeaning": "เยอะเป็นพิเศษ",
      "englishMeaning": "Very much."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "非常多。",
        "pinyin": "Fēi cháng duō.",
        "thaiMeaning": "เยอะเป็นพิเศษ",
        "englishMeaning": "Very much."
      },
      {
        "scenario": "ขอบคุณอย่างมาก",
        "hanzi": "非常感谢你的帮助。",
        "pinyin": "Fēi cháng gǎn xiè nǐ de bāng zhù.",
        "thaiMeaning": "ขอบคุณสำหรับความช่วยเหลือของคุณมาก",
        "englishMeaning": "Thank you very much for your help."
      },
      {
        "scenario": "ชมสถานที่ว่าสวยมาก",
        "hanzi": "这里的风景非常漂亮。",
        "pinyin": "Zhè lǐ de fēng jǐng fēi cháng piào liang.",
        "thaiMeaning": "วิวที่นี่สวยมาก",
        "englishMeaning": "The scenery here is very beautiful."
      }
    ]
  },
  {
    "id": "v283",
    "hanzi": "最",
    "pinyin": "zuì",
    "thaiMeaning": "ที่สุด",
    "englishMeaning": "most",
    "example": {
      "hanzi": "最好。",
      "pinyin": "Zuì hǎo.",
      "thaiMeaning": "ดีที่สุด",
      "englishMeaning": "most."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "最好。",
        "pinyin": "Zuì hǎo.",
        "thaiMeaning": "ดีที่สุด",
        "englishMeaning": "most."
      },
      {
        "scenario": "บอกอาหารที่ชอบที่สุด",
        "hanzi": "我最喜欢吃面条。",
        "pinyin": "Wǒ zuì xǐ huan chī miàn tiáo.",
        "thaiMeaning": "ฉันชอบกินบะหมี่ที่สุด",
        "englishMeaning": "I like to eat noodles the most."
      },
      {
        "scenario": "เลือกเส้นทางที่เร็วที่สุด",
        "hanzi": "这是去机场最快的路。",
        "pinyin": "Zhè shì qù jī chǎng zuì kuài de lù.",
        "thaiMeaning": "นี่คือทางไปสนามบินที่เร็วที่สุด",
        "englishMeaning": "This is the fastest way to the airport."
      }
    ]
  },
  {
    "id": "v284",
    "hanzi": "特别",
    "pinyin": "tèbié",
    "thaiMeaning": "พิเศษ / เป็นพิเศษ",
    "englishMeaning": "special",
    "example": {
      "hanzi": "特别喜欢。",
      "pinyin": "Tèbié xǐhuan.",
      "thaiMeaning": "ชอบเป็นพิเศษ",
      "englishMeaning": "Especially like it."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "特别喜欢。",
        "pinyin": "Tè bié xǐ huan.",
        "thaiMeaning": "ชอบเป็นพิเศษ",
        "englishMeaning": "Especially like it."
      },
      {
        "scenario": "บอกว่าอากาศวันนี้หนาวเป็นพิเศษ",
        "hanzi": "今天特别冷。",
        "pinyin": "Jīn tiān tè bié lěng.",
        "thaiMeaning": "วันนี้หนาวเป็นพิเศษ",
        "englishMeaning": "It's extremely cold today."
      },
      {
        "scenario": "เตรียมของขวัญพิเศษ",
        "hanzi": "我给你准备了一份特别的礼物。",
        "pinyin": "Wǒ gěi nǐ zhǔn bèi le yí fèn tè bié de lǐ wù.",
        "thaiMeaning": "ฉันเตรียมของขวัญพิเศษให้คุณ",
        "englishMeaning": "I have prepared a special gift for you."
      }
    ]
  },
  {
    "id": "v285",
    "hanzi": "不",
    "pinyin": "bù",
    "thaiMeaning": "ไม่",
    "englishMeaning": "No",
    "example": {
      "hanzi": "不去。",
      "pinyin": "Bú qù.",
      "thaiMeaning": "ไม่ไป",
      "englishMeaning": "Don't go."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "不去。",
        "pinyin": "Bú qù.",
        "thaiMeaning": "ไม่ไป",
        "englishMeaning": "Don't go."
      },
      {
        "scenario": "ปฏิเสธว่าไม่ดื่มกาแฟ",
        "hanzi": "我不喝咖啡。",
        "pinyin": "Wǒ bù hē kā fēi.",
        "thaiMeaning": "ฉันไม่ดื่มกาแฟ",
        "englishMeaning": "I don't drink coffee."
      },
      {
        "scenario": "บอกว่าไม่รู้จักคนหนึ่ง",
        "hanzi": "我不认识他。",
        "pinyin": "Wǒ bú rèn shi tā.",
        "thaiMeaning": "ฉันไม่รู้จักเขา",
        "englishMeaning": "I don't know him."
      }
    ]
  },
  {
    "id": "v286",
    "hanzi": "没",
    "pinyin": "méi",
    "thaiMeaning": "ไม่ / ไม่มี",
    "englishMeaning": "without",
    "example": {
      "hanzi": "没做。",
      "pinyin": "Méi zuò.",
      "thaiMeaning": "ไม่ได้ทำ",
      "englishMeaning": "Didn't do it."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "没做。",
        "pinyin": "Méi zuò.",
        "thaiMeaning": "ไม่ได้ทำ",
        "englishMeaning": "Didn't do it."
      },
      {
        "scenario": "บอกว่าไม่มีเงินสด",
        "hanzi": "我没带现金。",
        "pinyin": "Wǒ méi dài xiàn jīn.",
        "thaiMeaning": "ฉันไม่ได้พกเงินสด",
        "englishMeaning": "I didn't bring any cash."
      },
      {
        "scenario": "บอกว่ายังไม่ได้กินข้าว",
        "hanzi": "我还没吃饭。",
        "pinyin": "Wǒ hái méi chī fàn.",
        "thaiMeaning": "ฉันยังไม่ได้กินข้าว",
        "englishMeaning": "I haven't eaten yet."
      }
    ]
  },
  {
    "id": "v287",
    "hanzi": "极了",
    "pinyin": "jí le",
    "thaiMeaning": "อย่างยิ่ง / สุดๆ",
    "englishMeaning": "Awesome",
    "example": {
      "hanzi": "好极了！",
      "pinyin": "Hǎo jí le!",
      "thaiMeaning": "เยี่ยมสุดๆ!",
      "englishMeaning": "Great!"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "好极了！",
        "pinyin": "Hǎo jí le!",
        "thaiMeaning": "เยี่ยมสุดๆ!",
        "englishMeaning": "Great!"
      },
      {
        "scenario": "ชมวิวว่าสวยอย่างยิ่ง",
        "hanzi": "山上的风景美极了。",
        "pinyin": "Shān shàng de fēng jǐng měi jí le.",
        "thaiMeaning": "วิวบนภูเขาสวยมากๆ",
        "englishMeaning": "The scenery on the mountain is stunning."
      },
      {
        "scenario": "บอกว่าหลังออกกำลังเหนื่อยสุดๆ",
        "hanzi": "跑完步以后累极了。",
        "pinyin": "Pǎo wán bù yǐ hòu lèi jí le.",
        "thaiMeaning": "หลังวิ่งเสร็จเหนื่อยสุดๆ",
        "englishMeaning": "I was very tired after running."
      }
    ]
  },
  {
    "id": "v288",
    "hanzi": "越",
    "pinyin": "yuè",
    "thaiMeaning": "ยิ่ง...ยิ่ง...",
    "englishMeaning": "cross",
    "example": {
      "hanzi": "越来越好。",
      "pinyin": "Yuè lái yuè hǎo.",
      "thaiMeaning": "ยิ่งนานยิ่งดีขึ้น",
      "englishMeaning": "Getting better and better."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "越来越好。",
        "pinyin": "Yuè lái yuè hǎo.",
        "thaiMeaning": "ยิ่งนานยิ่งดีขึ้น",
        "englishMeaning": "Getting better and better."
      },
      {
        "scenario": "บอกว่าเรียนยิ่งนานยิ่งเข้าใจ",
        "hanzi": "中文越学越有意思。",
        "pinyin": "Zhōng wén yuè xué yuè yǒu yì sī.",
        "thaiMeaning": "ภาษาจีนยิ่งเรียนยิ่งน่าสนใจ",
        "englishMeaning": "The more you learn Chinese, the more interesting it becomes."
      },
      {
        "scenario": "บอกว่าฝนตกหนักขึ้น",
        "hanzi": "雨越下越大。",
        "pinyin": "Yǔ yuè xià yuè dà.",
        "thaiMeaning": "ฝนยิ่งตกยิ่งหนัก",
        "englishMeaning": "The rain is getting heavier."
      }
    ]
  },
  {
    "id": "v289",
    "hanzi": "更加",
    "pinyin": "gèngjiā",
    "thaiMeaning": "ยิ่งขึ้นไปอีก",
    "englishMeaning": "more",
    "example": {
      "hanzi": "更加努力。",
      "pinyin": "Gèngjiā nǔlì.",
      "thaiMeaning": "พยายามยิ่งขึ้นไปอีก",
      "englishMeaning": "Work harder."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "更加努力。",
        "pinyin": "Gèng jiā nǔ lì.",
        "thaiMeaning": "พยายามยิ่งขึ้นไปอีก",
        "englishMeaning": "Work harder."
      },
      {
        "scenario": "บอกว่าหลังฝึกแล้วมั่นใจขึ้น",
        "hanzi": "练习以后，我更加有信心了。",
        "pinyin": "Liàn xí yǐ hòu, wǒ gèng jiā yǒu xìn xīn le.",
        "thaiMeaning": "หลังฝึกแล้วฉันมั่นใจยิ่งขึ้น",
        "englishMeaning": "After practicing, I feel more confident."
      },
      {
        "scenario": "หวังว่าจะทำงานให้ดีขึ้น",
        "hanzi": "以后我要更加努力。",
        "pinyin": "Yǐ hòu wǒ yào gèng jiā nǔ lì.",
        "thaiMeaning": "ต่อไปฉันจะพยายามยิ่งขึ้น",
        "englishMeaning": "I will work harder in the future."
      }
    ]
  },
  {
    "id": "v290",
    "hanzi": "路",
    "pinyin": "lù",
    "thaiMeaning": "ถนน / ทาง",
    "englishMeaning": "road",
    "example": {
      "hanzi": "过马路。",
      "pinyin": "Guò mǎlù.",
      "thaiMeaning": "ข้ามถนน",
      "englishMeaning": "Cross the road."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "过马路。",
        "pinyin": "Guò mǎ lù.",
        "thaiMeaning": "ข้ามถนน",
        "englishMeaning": "Cross the road."
      },
      {
        "scenario": "ถามทางไปโรงพยาบาล",
        "hanzi": "去医院走哪条路？",
        "pinyin": "Qù yī yuàn zǒu nǎ tiáo lù?",
        "thaiMeaning": "ไปโรงพยาบาลใช้ถนนเส้นไหน?",
        "englishMeaning": "Which way to go to the hospital?"
      },
      {
        "scenario": "เตือนว่าถนนลื่น",
        "hanzi": "下雨后路很滑。",
        "pinyin": "Xià yǔ hòu lù hěn huá.",
        "thaiMeaning": "หลังฝนตกถนนลื่นมาก",
        "englishMeaning": "The road was slippery after the rain."
      }
    ]
  },
  {
    "id": "v291",
    "hanzi": "街",
    "pinyin": "jiē",
    "thaiMeaning": "ถนนสายหลัก / ถนน",
    "englishMeaning": "street",
    "example": {
      "hanzi": "逛街。",
      "pinyin": "Guàng jiē.",
      "thaiMeaning": "เดินเที่ยวถนน",
      "englishMeaning": "shop."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "逛街。",
        "pinyin": "Guàng jiē.",
        "thaiMeaning": "เดินเที่ยวถนน",
        "englishMeaning": "shop."
      },
      {
        "scenario": "บอกว่าร้านอยู่ฝั่งตรงข้ามถนน",
        "hanzi": "商店在街对面。",
        "pinyin": "Shāng diàn zài jiē duì miàn.",
        "thaiMeaning": "ร้านค้าอยู่ฝั่งตรงข้ามถนน",
        "englishMeaning": "The store is across the street."
      },
      {
        "scenario": "เดินเล่นบนถนนเก่า",
        "hanzi": "我们在老街上走了一下午。",
        "pinyin": "Wǒ men zài lǎo jiē shàng zǒu le yí xià wǔ.",
        "thaiMeaning": "พวกเราเดินเล่นบนถนนเก่าตลอดบ่าย",
        "englishMeaning": "We walked around the old streets all afternoon."
      }
    ]
  },
  {
    "id": "v292",
    "hanzi": "桥",
    "pinyin": "qiáo",
    "thaiMeaning": "สะพาน",
    "englishMeaning": "bridge",
    "example": {
      "hanzi": "过桥。",
      "pinyin": "Guò qiáo.",
      "thaiMeaning": "ข้ามสะพาน",
      "englishMeaning": "Cross the bridge."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "过桥。",
        "pinyin": "Guò qiáo.",
        "thaiMeaning": "ข้ามสะพาน",
        "englishMeaning": "Cross the bridge."
      },
      {
        "scenario": "ข้ามสะพานไปอีกฝั่ง",
        "hanzi": "过了这座桥就到了。",
        "pinyin": "Guò le zhè zuò qiáo jiù dào le.",
        "thaiMeaning": "ข้ามสะพานนี้ก็ถึงแล้ว",
        "englishMeaning": "Just cross this bridge and you're there."
      },
      {
        "scenario": "ชมวิวจากบนสะพาน",
        "hanzi": "站在桥上可以看到河。",
        "pinyin": "Zhàn zài qiáo shàng kě yǐ kàn dào hé.",
        "thaiMeaning": "ยืนบนสะพานสามารถมองเห็นแม่น้ำ",
        "englishMeaning": "Standing on the bridge you can see the river."
      }
    ]
  },
  {
    "id": "v293",
    "hanzi": "楼",
    "pinyin": "lóu",
    "thaiMeaning": "ตึก / ชั้น",
    "englishMeaning": "building",
    "example": {
      "hanzi": "高楼。",
      "pinyin": "Gāo lóu.",
      "thaiMeaning": "ตึกสูง",
      "englishMeaning": "tall buildings."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "高楼。",
        "pinyin": "Gāo lóu.",
        "thaiMeaning": "ตึกสูง",
        "englishMeaning": "tall buildings."
      },
      {
        "scenario": "บอกว่าบริษัทอยู่ชั้นสิบ",
        "hanzi": "公司在十楼。",
        "pinyin": "Gōng sī zài shí lóu.",
        "thaiMeaning": "บริษัทอยู่ชั้นสิบ",
        "englishMeaning": "The company is on the tenth floor."
      },
      {
        "scenario": "รอเพื่อนอยู่ข้างล่างตึก",
        "hanzi": "我在楼下等你。",
        "pinyin": "Wǒ zài lóu xià děng nǐ.",
        "thaiMeaning": "ฉันรอคุณอยู่ข้างล่างตึก",
        "englishMeaning": "I'll wait for you downstairs."
      }
    ]
  },
  {
    "id": "v294",
    "hanzi": "船",
    "pinyin": "chuán",
    "thaiMeaning": "เรือ",
    "englishMeaning": "Boat",
    "example": {
      "hanzi": "坐船。",
      "pinyin": "Zuò chuán.",
      "thaiMeaning": "นั่งเรือ",
      "englishMeaning": "Take a boat ride."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "坐船。",
        "pinyin": "Zuò chuán.",
        "thaiMeaning": "นั่งเรือ",
        "englishMeaning": "Take a boat ride."
      },
      {
        "scenario": "นั่งเรือข้ามแม่น้ำ",
        "hanzi": "我们坐船过河。",
        "pinyin": "Wǒ men zuò chuán guò hé.",
        "thaiMeaning": "พวกเรานั่งเรือข้ามแม่น้ำ",
        "englishMeaning": "We took a boat across the river."
      },
      {
        "scenario": "ถามเวลาเรือออก",
        "hanzi": "下一班船几点开？",
        "pinyin": "Xià yì bān chuán jǐ diǎn kāi?",
        "thaiMeaning": "เรือเที่ยวถัดไปออกกี่โมง?",
        "englishMeaning": "What time does the next boat leave?"
      }
    ]
  },
  {
    "id": "v295",
    "hanzi": "钞票",
    "pinyin": "chāopiào",
    "thaiMeaning": "ธนบัตร / แบงก์",
    "englishMeaning": "banknote",
    "example": {
      "hanzi": "数钞票。",
      "pinyin": "Shǔ chāopiào.",
      "thaiMeaning": "นับธนบัตร",
      "englishMeaning": "Count banknotes."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "数钞票。",
        "pinyin": "Shù chāo piào.",
        "thaiMeaning": "นับธนบัตร",
        "englishMeaning": "Count banknotes."
      },
      {
        "scenario": "แลกธนบัตรใบใหญ่",
        "hanzi": "这张钞票可以换开吗？",
        "pinyin": "Zhè zhāng chāo piào kě yǐ huàn kāi ma?",
        "thaiMeaning": "ธนบัตรใบนี้แลกเป็นเงินย่อยได้ไหม?",
        "englishMeaning": "Can this banknote be exchanged?"
      },
      {
        "scenario": "ตรวจธนบัตรก่อนรับ",
        "hanzi": "请检查一下这张钞票。",
        "pinyin": "Qǐng jiǎn chá yí xià zhè zhāng chāo piào.",
        "thaiMeaning": "กรุณาตรวจธนบัตรใบนี้",
        "englishMeaning": "Please check this banknote."
      }
    ]
  },
  {
    "id": "v296",
    "hanzi": "信用卡",
    "pinyin": "xìnyòngkǎ",
    "thaiMeaning": "บัตรเครดิต",
    "englishMeaning": "credit card",
    "example": {
      "hanzi": "刷信用卡。",
      "pinyin": "Shuā xìnyòngkǎ.",
      "thaiMeaning": "รูดบัตรเครดิต",
      "englishMeaning": "Swipe a credit card."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "刷信用卡。",
        "pinyin": "Shuā xìn yòng kǎ.",
        "thaiMeaning": "รูดบัตรเครดิต",
        "englishMeaning": "Swipe a credit card."
      },
      {
        "scenario": "ถามว่ารับบัตรเครดิตไหม",
        "hanzi": "这里可以用信用卡吗？",
        "pinyin": "Zhè lǐ kě yǐ yòng xìn yòng kǎ ma?",
        "thaiMeaning": "ที่นี่ใช้บัตรเครดิตได้ไหม?",
        "englishMeaning": "Can I use a credit card here?"
      },
      {
        "scenario": "พบว่าลืมบัตรเครดิต",
        "hanzi": "我的信用卡忘在家了。",
        "pinyin": "Wǒ de xìn yòng kǎ wàng zài jiā le.",
        "thaiMeaning": "ฉันลืมบัตรเครดิตไว้ที่บ้าน",
        "englishMeaning": "I forgot my credit card at home."
      }
    ]
  },
  {
    "id": "v297",
    "hanzi": "现金",
    "pinyin": "xiànjīn",
    "thaiMeaning": "เงินสด",
    "englishMeaning": "cash",
    "example": {
      "hanzi": "付现金。",
      "pinyin": "Fù xiànjīn.",
      "thaiMeaning": "จ่ายเงินสด",
      "englishMeaning": "Pay cash."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "付现金。",
        "pinyin": "Fù xiàn jīn.",
        "thaiMeaning": "จ่ายเงินสด",
        "englishMeaning": "Pay cash."
      },
      {
        "scenario": "แจ้งว่ารับเฉพาะเงินสด",
        "hanzi": "这家小店只收现金。",
        "pinyin": "Zhè jiā xiǎo diàn zhī shōu xiàn jīn.",
        "thaiMeaning": "ร้านเล็กนี้รับเฉพาะเงินสด",
        "englishMeaning": "This little shop only accepts cash."
      },
      {
        "scenario": "ถามว่ามีเงินสดหรือไม่",
        "hanzi": "你身上有现金吗？",
        "pinyin": "Nǐ shēn shàng yǒu xiàn jīn ma?",
        "thaiMeaning": "คุณมีเงินสดติดตัวไหม?",
        "englishMeaning": "Do you have cash on you?"
      }
    ]
  },
  {
    "id": "v298",
    "hanzi": "价格",
    "pinyin": "jiàgé",
    "thaiMeaning": "ราคา",
    "englishMeaning": "price",
    "example": {
      "hanzi": "合理价格。",
      "pinyin": "Hélǐ jiàgé.",
      "thaiMeaning": "ราคาสมเหตุสมผล",
      "englishMeaning": "Reasonable price."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "合理价格。",
        "pinyin": "Hé lǐ jià gé.",
        "thaiMeaning": "ราคาสมเหตุสมผล",
        "englishMeaning": "Reasonable price."
      },
      {
        "scenario": "ถามราคาก่อนตัดสินใจซื้อ",
        "hanzi": "请问，这个价格包括运费吗？",
        "pinyin": "Qǐng wèn, zhè ge jià gé bāo kuò yùn fèi ma?",
        "thaiMeaning": "ขอถามหน่อย ราคานี้รวมค่าขนส่งไหม?",
        "englishMeaning": "Excuse me, does this price include shipping?"
      },
      {
        "scenario": "เปรียบเทียบราคาสองร้าน",
        "hanzi": "两家店的价格差不多。",
        "pinyin": "Liǎng jiā diàn de jià gé chà bù duō.",
        "thaiMeaning": "ราคาของสองร้านใกล้เคียงกัน",
        "englishMeaning": "The prices at both stores are about the same."
      }
    ]
  },
  {
    "id": "v299",
    "hanzi": "折扣",
    "pinyin": "zhékòu",
    "thaiMeaning": "ส่วนลด / ลดราคา",
    "englishMeaning": "Discount",
    "example": {
      "hanzi": "打折。",
      "pinyin": "Dǎzhé.",
      "thaiMeaning": "ลดราคา",
      "englishMeaning": "Discount."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "打折。",
        "pinyin": "Dǎ zhé.",
        "thaiMeaning": "ลดราคา",
        "englishMeaning": "Discount."
      },
      {
        "scenario": "ถามส่วนลดในร้านค้า",
        "hanzi": "这件衣服有折扣吗？",
        "pinyin": "Zhè jiàn yī fu yǒu zhé kòu ma?",
        "thaiMeaning": "เสื้อตัวนี้มีส่วนลดไหม?",
        "englishMeaning": "Is there a discount on this dress?"
      },
      {
        "scenario": "แจ้งส่วนลดสำหรับสมาชิก",
        "hanzi": "会员可以享受九折折扣。",
        "pinyin": "Huì yuán kě yǐ xiǎng shòu jiǔ zhé zhé kòu.",
        "thaiMeaning": "สมาชิกได้รับส่วนลดสิบเปอร์เซ็นต์",
        "englishMeaning": "Members can enjoy a 10% discount."
      }
    ]
  },
  {
    "id": "v300",
    "hanzi": "免费",
    "pinyin": "miǎnfèi",
    "thaiMeaning": "ฟรี / ไม่เสียเงิน",
    "englishMeaning": "free",
    "example": {
      "hanzi": "免费体验。",
      "pinyin": "Miǎnfèi tǐyàn.",
      "thaiMeaning": "ทดลองฟรี",
      "englishMeaning": "Free to try."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "免费体验。",
        "pinyin": "Miǎn fèi tǐ yàn.",
        "thaiMeaning": "ทดลองฟรี",
        "englishMeaning": "Free to try."
      },
      {
        "scenario": "ถามว่าบริการเสียเงินหรือไม่",
        "hanzi": "酒店提供免费早餐。",
        "pinyin": "Jiǔ diàn tí gōng miǎn fèi zǎo cān.",
        "thaiMeaning": "โรงแรมมีอาหารเช้าฟรี",
        "englishMeaning": "The hotel offers free breakfast."
      },
      {
        "scenario": "ดาวน์โหลดแอปโดยไม่เสียเงิน",
        "hanzi": "这个软件可以免费下载。",
        "pinyin": "Zhè ge ruǎn jiàn kě yǐ miǎn fèi xià zài.",
        "thaiMeaning": "ซอฟต์แวร์นี้ดาวน์โหลดฟรีได้",
        "englishMeaning": "This software can be downloaded for free."
      }
    ]
  },
  {
    "id": "v301",
    "hanzi": "甜",
    "pinyin": "tián",
    "thaiMeaning": "หวาน",
    "englishMeaning": "sweet",
    "example": {
      "hanzi": "很甜。",
      "pinyin": "Hěn tián.",
      "thaiMeaning": "หวานมาก",
      "englishMeaning": "Very sweet."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "很甜。",
        "pinyin": "Hěn tián.",
        "thaiMeaning": "หวานมาก",
        "englishMeaning": "Very sweet."
      },
      {
        "scenario": "ชิมขนมแล้วรู้สึกหวานเกินไป",
        "hanzi": "这个蛋糕太甜了。",
        "pinyin": "Zhè ge dàn gāo tài tián le.",
        "thaiMeaning": "เค้กนี้หวานเกินไป",
        "englishMeaning": "This cake is so sweet."
      },
      {
        "scenario": "สั่งกาแฟหวานน้อย",
        "hanzi": "咖啡请少放糖，不要太甜。",
        "pinyin": "Kā fēi qǐng shǎo fàng táng, bú yào tài tián.",
        "thaiMeaning": "กาแฟใส่น้ำตาลน้อยๆ อย่าหวานเกินไป",
        "englishMeaning": "Please put less sugar in the coffee, not too sweet."
      }
    ]
  },
  {
    "id": "v302",
    "hanzi": "咸",
    "pinyin": "xián",
    "thaiMeaning": "เค็ม",
    "englishMeaning": "salty",
    "example": {
      "hanzi": "有点咸。",
      "pinyin": "Yǒudiǎnr xián.",
      "thaiMeaning": "เค็มนิดหน่อย",
      "englishMeaning": "A bit salty."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "有点咸。",
        "pinyin": "Yǒu diǎn xián.",
        "thaiMeaning": "เค็มนิดหน่อย",
        "englishMeaning": "A bit salty."
      },
      {
        "scenario": "ชิมซุปแล้วพบว่าเค็ม",
        "hanzi": "这个汤有点咸。",
        "pinyin": "Zhè ge tāng yǒu diǎn xián.",
        "thaiMeaning": "ซุปนี้เค็มนิดหน่อย",
        "englishMeaning": "This soup is a bit salty."
      },
      {
        "scenario": "ขออาหารรสไม่เค็ม",
        "hanzi": "我吃得比较清淡，请别做太咸。",
        "pinyin": "Wǒ chī dé bǐ jiào qīng dàn, qǐng bié zuò tài xián.",
        "thaiMeaning": "ฉันกินรสอ่อน กรุณาอย่าทำเค็มเกินไป",
        "englishMeaning": "I eat relatively lightly, please don't make it too salty."
      }
    ]
  },
  {
    "id": "v303",
    "hanzi": "辣",
    "pinyin": "là",
    "thaiMeaning": "เผ็ด",
    "englishMeaning": "hot",
    "example": {
      "hanzi": "太辣了。",
      "pinyin": "Tài là le.",
      "thaiMeaning": "เผ็ดเกินไป",
      "englishMeaning": "It's too spicy."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "太辣了。",
        "pinyin": "Tài là le.",
        "thaiMeaning": "เผ็ดเกินไป",
        "englishMeaning": "It's too spicy."
      },
      {
        "scenario": "ถามระดับความเผ็ด",
        "hanzi": "这个菜辣不辣？",
        "pinyin": "Zhè ge cài là bu là?",
        "thaiMeaning": "อาหารจานนี้เผ็ดไหม?",
        "englishMeaning": "Is this dish spicy?"
      },
      {
        "scenario": "สั่งอาหารไม่เผ็ด",
        "hanzi": "我不能吃辣，请不要放辣椒。",
        "pinyin": "Wǒ bù néng chī là, qǐng bú yào fàng là jiāo.",
        "thaiMeaning": "ฉันกินเผ็ดไม่ได้ กรุณาอย่าใส่พริก",
        "englishMeaning": "I can't eat spicy food, please don't put chili pepper."
      }
    ]
  },
  {
    "id": "v304",
    "hanzi": "酸",
    "pinyin": "suān",
    "thaiMeaning": "เปรี้ยว / เมื่อย",
    "englishMeaning": "acid",
    "example": {
      "hanzi": "酸甜。",
      "pinyin": "Suāntián.",
      "thaiMeaning": "เปรี้ยวหวาน",
      "englishMeaning": "Sweet and sour."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "酸甜。",
        "pinyin": "Suān tián.",
        "thaiMeaning": "เปรี้ยวหวาน",
        "englishMeaning": "Sweet and sour."
      },
      {
        "scenario": "ชิมผลไม้รสเปรี้ยว",
        "hanzi": "这个橙子有点酸。",
        "pinyin": "Zhè ge chéng zǐ yǒu diǎn suān.",
        "thaiMeaning": "ส้มลูกนี้เปรี้ยวนิดหน่อย",
        "englishMeaning": "This orange is a bit sour."
      },
      {
        "scenario": "บอกอาการเมื่อยหลังออกกำลัง",
        "hanzi": "跑步以后我的腿很酸。",
        "pinyin": "Pǎo bù yǐ hòu wǒ de tuǐ hěn suān.",
        "thaiMeaning": "หลังวิ่ง ขาของฉันเมื่อยมาก",
        "englishMeaning": "My legs are very sore after running."
      }
    ]
  },
  {
    "id": "v305",
    "hanzi": "苦",
    "pinyin": "kǔ",
    "thaiMeaning": "ขม",
    "englishMeaning": "bitter",
    "example": {
      "hanzi": "中药苦。",
      "pinyin": "Zhōngyào kǔ.",
      "thaiMeaning": "ยาจีนขม",
      "englishMeaning": "Chinese medicine is bitter."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "中药苦。",
        "pinyin": "Zhōng yào kǔ.",
        "thaiMeaning": "ยาจีนขม",
        "englishMeaning": "Chinese medicine is bitter."
      },
      {
        "scenario": "บอกว่ายามีรสขม",
        "hanzi": "这个药太苦了。",
        "pinyin": "Zhè ge yào tài kǔ le.",
        "thaiMeaning": "ยานี้ขมเกินไป",
        "englishMeaning": "This medicine is too bitter."
      },
      {
        "scenario": "ดื่มกาแฟดำที่ขม",
        "hanzi": "这杯黑咖啡有点苦。",
        "pinyin": "Zhè bēi hēi kā fēi yǒu diǎn kǔ.",
        "thaiMeaning": "กาแฟดำแก้วนี้ขมนิดหน่อย",
        "englishMeaning": "This black coffee is a bit bitter."
      }
    ]
  },
  {
    "id": "v306",
    "hanzi": "香",
    "pinyin": "xiāng",
    "thaiMeaning": "หอม / อร่อย",
    "englishMeaning": "fragrant",
    "example": {
      "hanzi": "真香！",
      "pinyin": "Zhēn xiāng!",
      "thaiMeaning": "หอมมาก!",
      "englishMeaning": "So delicious!"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "真香！",
        "pinyin": "Zhēn xiāng!",
        "thaiMeaning": "หอมมาก!",
        "englishMeaning": "So delicious!"
      },
      {
        "scenario": "ได้กลิ่นอาหารจากครัว",
        "hanzi": "厨房里的菜真香。",
        "pinyin": "Chú fáng lǐ de cài zhēn xiāng.",
        "thaiMeaning": "อาหารในครัวหอมจริงๆ",
        "englishMeaning": "The food in the kitchen is so delicious."
      },
      {
        "scenario": "ชมชาที่มีกลิ่นหอม",
        "hanzi": "这种茶喝起来很香。",
        "pinyin": "Zhè zhǒng chá hē qǐ lái hěn xiāng.",
        "thaiMeaning": "ชาชนิดนี้ดื่มแล้วหอมมาก",
        "englishMeaning": "This tea tastes delicious."
      }
    ]
  },
  {
    "id": "v307",
    "hanzi": "好吃",
    "pinyin": "hǎochī",
    "thaiMeaning": "อร่อย (อาหาร)",
    "englishMeaning": "tasty",
    "example": {
      "hanzi": "很好吃。",
      "pinyin": "Hěn hǎochī.",
      "thaiMeaning": "อร่อยมาก",
      "englishMeaning": "Very tasty."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "很好吃。",
        "pinyin": "Hěn hǎo chī.",
        "thaiMeaning": "อร่อยมาก",
        "englishMeaning": "Very tasty."
      },
      {
        "scenario": "ชมอาหารที่เพื่อนทำ",
        "hanzi": "你做的饭真好吃。",
        "pinyin": "Nǐ zuò de fàn zhēn hǎo chī.",
        "thaiMeaning": "อาหารที่คุณทำอร่อยจริงๆ",
        "englishMeaning": "The food you cook is so delicious."
      },
      {
        "scenario": "แนะนำร้านให้เพื่อน",
        "hanzi": "这家饭店便宜又好吃。",
        "pinyin": "Zhè jiā fàn diàn pián yi yòu hǎo chī.",
        "thaiMeaning": "ร้านนี้ทั้งถูกและอร่อย",
        "englishMeaning": "This restaurant is cheap and delicious."
      }
    ]
  },
  {
    "id": "v308",
    "hanzi": "好喝",
    "pinyin": "hǎohē",
    "thaiMeaning": "อร่อย (เครื่องดื่ม)",
    "englishMeaning": "delicious",
    "example": {
      "hanzi": "真好喝。",
      "pinyin": "Zhēn hǎohē.",
      "thaiMeaning": "อร่อยดื่มง่าย",
      "englishMeaning": "So delicious."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "真好喝。",
        "pinyin": "Zhēn hǎo hē.",
        "thaiMeaning": "อร่อยดื่มง่าย",
        "englishMeaning": "So delicious."
      },
      {
        "scenario": "ชมเครื่องดื่มในร้าน",
        "hanzi": "这里的奶茶很好喝。",
        "pinyin": "Zhè lǐ de nǎi chá hěn hǎo hē.",
        "thaiMeaning": "ชานมที่นี่อร่อยมาก",
        "englishMeaning": "The milk tea here is delicious."
      },
      {
        "scenario": "ถามว่าเครื่องดื่มชนิดนี้อร่อยไหม",
        "hanzi": "你觉得这个果汁好喝吗？",
        "pinyin": "Nǐ jué de zhè ge guǒ zhī hǎo hē ma?",
        "thaiMeaning": "คุณคิดว่าน้ำผลไม้นี้อร่อยไหม?",
        "englishMeaning": "Do you think this juice tastes good?"
      }
    ]
  },
  {
    "id": "v309",
    "hanzi": "生病",
    "pinyin": "shēngbìng",
    "thaiMeaning": "ป่วย / ป่วยไข้",
    "englishMeaning": "Get ill",
    "example": {
      "hanzi": "生病了。",
      "pinyin": "Shēngbìng le.",
      "thaiMeaning": "ป่วยแล้ว",
      "englishMeaning": "Sick."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "生病了。",
        "pinyin": "Shēng bìng le.",
        "thaiMeaning": "ป่วยแล้ว",
        "englishMeaning": "Sick."
      },
      {
        "scenario": "ลางานเพราะป่วย",
        "hanzi": "我生病了，今天不能上班。",
        "pinyin": "Wǒ shēng bìng le, jīn tiān bù néng shàng bān.",
        "thaiMeaning": "ฉันป่วย วันนี้ไปทำงานไม่ได้",
        "englishMeaning": "I'm sick and can't go to work today."
      },
      {
        "scenario": "ดูแลเพื่อนไม่ให้ป่วย",
        "hanzi": "天气冷，多穿点，别生病了。",
        "pinyin": "Tiān qì lěng, duō chuān diǎn, bié shēng bìng le.",
        "thaiMeaning": "อากาศหนาว ใส่เสื้อเพิ่ม อย่าป่วยนะ",
        "englishMeaning": "It's cold, so wear more clothes and don't get sick."
      }
    ]
  },
  {
    "id": "v310",
    "hanzi": "感冒",
    "pinyin": "gǎnmào",
    "thaiMeaning": "เป็นหวัด",
    "englishMeaning": "cold",
    "example": {
      "hanzi": "得了感冒。",
      "pinyin": "Dé le gǎnmào.",
      "thaiMeaning": "เป็นหวัด",
      "englishMeaning": "Got a cold."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "得了感冒。",
        "pinyin": "Dé le gǎn mào.",
        "thaiMeaning": "เป็นหวัด",
        "englishMeaning": "Got a cold."
      },
      {
        "scenario": "บอกอาการกับเพื่อน",
        "hanzi": "我好像感冒了，一直流鼻涕。",
        "pinyin": "Wǒ hǎo xiàng gǎn mào le, yì zhí liú bí tì.",
        "thaiMeaning": "เหมือนฉันเป็นหวัด น้ำมูกไหลตลอด",
        "englishMeaning": "I seem to have a cold and my nose keeps running."
      },
      {
        "scenario": "แนะนำให้พักเมื่อเป็นหวัด",
        "hanzi": "感冒了就多喝水，好好休息。",
        "pinyin": "Gǎn mào le jiù duō hē shuǐ, hǎo hǎo xiū xi.",
        "thaiMeaning": "เป็นหวัดก็ดื่มน้ำมากๆ และพักผ่อนให้ดี",
        "englishMeaning": "If you have a cold, drink plenty of fluids and get a good rest."
      }
    ]
  },
  {
    "id": "v311",
    "hanzi": "发烧",
    "pinyin": "fāshāo",
    "thaiMeaning": "ตัวร้อน / มีไข้",
    "englishMeaning": "fever",
    "example": {
      "hanzi": "发烧三十八度。",
      "pinyin": "Fāshāo sānshíbā dù.",
      "thaiMeaning": "ไข้ขึ้น 38 องศา",
      "englishMeaning": "Fever is thirty-eight degrees."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "发烧三十八度。",
        "pinyin": "Fā shāo sān shí bā dù.",
        "thaiMeaning": "ไข้ขึ้น 38 องศา",
        "englishMeaning": "Fever is thirty-eight degrees."
      },
      {
        "scenario": "วัดไข้แล้วพบว่ามีไข้",
        "hanzi": "孩子发烧到三十九度。",
        "pinyin": "Hái zi fā shāo dào sān shí jiǔ dù.",
        "thaiMeaning": "เด็กมีไข้ถึงสามสิบเก้าองศา",
        "englishMeaning": "The child has a fever of thirty-nine degrees."
      },
      {
        "scenario": "ถามผู้ป่วยว่ายังมีไข้ไหม",
        "hanzi": "你今天还发烧吗？",
        "pinyin": "Nǐ jīn tiān hái fā shāo ma?",
        "thaiMeaning": "วันนี้คุณยังมีไข้ไหม?",
        "englishMeaning": "Do you still have a fever today?"
      }
    ]
  },
  {
    "id": "v312",
    "hanzi": "咳嗽",
    "pinyin": "késou",
    "thaiMeaning": "ไอ",
    "englishMeaning": "cough",
    "example": {
      "hanzi": "一直咳嗽。",
      "pinyin": "Yìzhí késou.",
      "thaiMeaning": "ไอไม่หยุด",
      "englishMeaning": "Keep coughing."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "一直咳嗽。",
        "pinyin": "Yì zhí ké sou.",
        "thaiMeaning": "ไอไม่หยุด",
        "englishMeaning": "Keep coughing."
      },
      {
        "scenario": "บอกแพทย์ว่าไอมาหลายวัน",
        "hanzi": "我咳嗽三天了。",
        "pinyin": "Wǒ ké sou sān tiān le.",
        "thaiMeaning": "ฉันไอมาสามวันแล้ว",
        "englishMeaning": "I've had a cough for three days."
      },
      {
        "scenario": "ขอให้อีกฝ่ายสวมหน้ากาก",
        "hanzi": "你一直咳嗽，戴上口罩吧。",
        "pinyin": "Nǐ yì zhí ké sou, dài shàng kǒu zhào ba.",
        "thaiMeaning": "คุณไอตลอด ใส่หน้ากากเถอะ",
        "englishMeaning": "If you keep coughing, put on a mask."
      }
    ]
  },
  {
    "id": "v313",
    "hanzi": "头疼",
    "pinyin": "tóuténg",
    "thaiMeaning": "ปวดหัว",
    "englishMeaning": "Headache",
    "example": {
      "hanzi": "有点头疼。",
      "pinyin": "Yǒudiǎnr tóuténg.",
      "thaiMeaning": "ปวดหัวนิดหน่อย",
      "englishMeaning": "A bit of a headache."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "有点头疼。",
        "pinyin": "Yǒu diǎn tóu téng.",
        "thaiMeaning": "ปวดหัวนิดหน่อย",
        "englishMeaning": "A bit of a headache."
      },
      {
        "scenario": "ปวดหัวเพราะนอนไม่พอ",
        "hanzi": "昨晚没睡好，今天有点头疼。",
        "pinyin": "Zuó wǎn méi shuì hǎo, jīn tiān yǒu diǎn tóu téng.",
        "thaiMeaning": "เมื่อคืนหลับไม่ดี วันนี้ปวดหัวนิดหน่อย",
        "englishMeaning": "I didn't sleep well last night and I have a headache today."
      },
      {
        "scenario": "ขอพักจากงานเมื่อปวดหัว",
        "hanzi": "我头疼得厉害，想休息一下。",
        "pinyin": "Wǒ tóu téng dé lì hài, xiǎng xiū xi yí xià.",
        "thaiMeaning": "ฉันปวดหัวมาก อยากพักสักหน่อย",
        "englishMeaning": "I had a bad headache and wanted to take a break."
      }
    ]
  },
  {
    "id": "v314",
    "hanzi": "吃药",
    "pinyin": "chīyào",
    "thaiMeaning": "ทานยา",
    "englishMeaning": "take medicine",
    "example": {
      "hanzi": "记得吃药。",
      "pinyin": "Jìde chīyào.",
      "thaiMeaning": "อย่าลืมทานยา",
      "englishMeaning": "Remember to take your medicine."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "记得吃药。",
        "pinyin": "Jì de chī yào.",
        "thaiMeaning": "อย่าลืมทานยา",
        "englishMeaning": "Remember to take your medicine."
      },
      {
        "scenario": "เตือนให้กินยาหลังอาหาร",
        "hanzi": "记得饭后吃药。",
        "pinyin": "Jì de fàn hòu chī yào.",
        "thaiMeaning": "อย่าลืมกินยาหลังอาหาร",
        "englishMeaning": "Remember to take your medicine after meals."
      },
      {
        "scenario": "ถามว่ากินยาแล้วหรือยัง",
        "hanzi": "你今天早上吃药了吗？",
        "pinyin": "Nǐ jīn tiān zǎo shàng chī yào le ma?",
        "thaiMeaning": "เช้านี้คุณกินยาแล้วหรือยัง?",
        "englishMeaning": "Did you take your medicine this morning?"
      }
    ]
  },
  {
    "id": "v315",
    "hanzi": "打针",
    "pinyin": "dǎzhēn",
    "thaiMeaning": "ฉีดยา",
    "englishMeaning": "inject",
    "example": {
      "hanzi": "害怕打针。",
      "pinyin": "Hàipà dǎzhēn.",
      "thaiMeaning": "กลัวฉีดยา",
      "englishMeaning": "Fear of injections."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "害怕打针。",
        "pinyin": "Hài pà dǎ zhēn.",
        "thaiMeaning": "กลัวฉีดยา",
        "englishMeaning": "Fear of injections."
      },
      {
        "scenario": "เด็กกลัวการฉีดยา",
        "hanzi": "孩子害怕打针。",
        "pinyin": "Hái zi hài pà dǎ zhēn.",
        "thaiMeaning": "เด็กกลัวการฉีดยา",
        "englishMeaning": "Children are afraid of injections."
      },
      {
        "scenario": "พยาบาลบอกให้ผ่อนคลาย",
        "hanzi": "打针的时候请放松。",
        "pinyin": "Dǎ zhēn de shí hòu qǐng fàng sōng.",
        "thaiMeaning": "ตอนฉีดยากรุณาผ่อนคลาย",
        "englishMeaning": "Please relax during the injection."
      }
    ]
  },
  {
    "id": "v316",
    "hanzi": "健康",
    "pinyin": "jiànkāng",
    "thaiMeaning": "สุขภาพแข็งแรง",
    "englishMeaning": "healthy",
    "example": {
      "hanzi": "身体健康。",
      "pinyin": "Shēntǐ jiànkāng.",
      "thaiMeaning": "สุขภาพแข็งแรง",
      "englishMeaning": "In good health."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "身体健康。",
        "pinyin": "Shēn tǐ jiàn kāng.",
        "thaiMeaning": "สุขภาพแข็งแรง",
        "englishMeaning": "In good health."
      },
      {
        "scenario": "พูดถึงนิสัยที่ดีต่อสุขภาพ",
        "hanzi": "早睡早起对健康有好处。",
        "pinyin": "Zǎo shuì zǎo qǐ duì jiàn kāng yǒu hǎo chù.",
        "thaiMeaning": "นอนเร็วตื่นเช้าดีต่อสุขภาพ",
        "englishMeaning": "Going to bed early and getting up early is good for your health."
      },
      {
        "scenario": "อวยพรผู้ใหญ่ให้แข็งแรง",
        "hanzi": "祝您身体健康！",
        "pinyin": "Zhù nín shēn tǐ jiàn kāng!",
        "thaiMeaning": "ขอให้สุขภาพแข็งแรง!",
        "englishMeaning": "I wish you good health!"
      }
    ]
  },
  {
    "id": "v317",
    "hanzi": "经理",
    "pinyin": "jīnglǐ",
    "thaiMeaning": "ผู้จัดการ",
    "englishMeaning": "manager",
    "example": {
      "hanzi": "总经理。",
      "pinyin": "Zǒngjīnglǐ.",
      "thaiMeaning": "ผู้จัดการใหญ่",
      "englishMeaning": "General manager."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "总经理。",
        "pinyin": "Zǒng jīng lǐ.",
        "thaiMeaning": "ผู้จัดการใหญ่",
        "englishMeaning": "General manager."
      },
      {
        "scenario": "ขอพบผู้จัดการ",
        "hanzi": "您好，我想见一下经理。",
        "pinyin": "Nín hǎo, wǒ xiǎng jiàn yí xià jīng lǐ.",
        "thaiMeaning": "สวัสดี ฉันต้องการพบผู้จัดการ",
        "englishMeaning": "Hello, I would like to meet the manager."
      },
      {
        "scenario": "แจ้งว่าผู้จัดการกำลังประชุม",
        "hanzi": "经理正在开会，请稍等。",
        "pinyin": "Jīng lǐ zhèng zài kāi huì, qǐng shāo děng.",
        "thaiMeaning": "ผู้จัดการกำลังประชุม กรุณารอสักครู่",
        "englishMeaning": "The manager is in a meeting, please wait."
      }
    ]
  },
  {
    "id": "v318",
    "hanzi": "老板",
    "pinyin": "lǎobǎn",
    "thaiMeaning": "เจ้านาย / เถ้าแก่",
    "englishMeaning": "boss",
    "example": {
      "hanzi": "老板好。",
      "pinyin": "Lǎobǎn hǎo.",
      "thaiMeaning": "สวัสดีครับเจ้านาย",
      "englishMeaning": "Hello boss."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "老板好。",
        "pinyin": "Lǎo bǎn hǎo.",
        "thaiMeaning": "สวัสดีครับเจ้านาย",
        "englishMeaning": "Hello boss."
      },
      {
        "scenario": "ขออนุมัติจากเจ้านาย",
        "hanzi": "这件事要先问老板。",
        "pinyin": "Zhè jiàn shì yào xiān wèn lǎo bǎn.",
        "thaiMeaning": "เรื่องนี้ต้องถามเจ้านายก่อน",
        "englishMeaning": "You should ask your boss about this first."
      },
      {
        "scenario": "บอกว่าเจ้าของร้านใจดี",
        "hanzi": "这家店的老板很热情。",
        "pinyin": "Zhè jiā diàn de lǎo bǎn hěn rè qíng.",
        "thaiMeaning": "เจ้าของร้านนี้เป็นมิตรมาก",
        "englishMeaning": "The owner of this store is very enthusiastic."
      }
    ]
  },
  {
    "id": "v319",
    "hanzi": "同事",
    "pinyin": "tóngshì",
    "thaiMeaning": "เพื่อนร่วมงาน",
    "englishMeaning": "colleague",
    "example": {
      "hanzi": "和同事。",
      "pinyin": "Hé tóngshì.",
      "thaiMeaning": "กับเพื่อนร่วมงาน",
      "englishMeaning": "and colleagues."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "和同事。",
        "pinyin": "Hé tóng shì.",
        "thaiMeaning": "กับเพื่อนร่วมงาน",
        "englishMeaning": "and colleagues."
      },
      {
        "scenario": "แนะนำเพื่อนร่วมงานใหม่",
        "hanzi": "这是我的新同事小王。",
        "pinyin": "Zhè shì wǒ de xīn tóng shì xiǎo wáng.",
        "thaiMeaning": "นี่คือเสี่ยวหวัง เพื่อนร่วมงานใหม่ของฉัน",
        "englishMeaning": "This is my new colleague Xiao Wang."
      },
      {
        "scenario": "ชวนเพื่อนร่วมงานกินข้าว",
        "hanzi": "我和同事一起吃午饭。",
        "pinyin": "Wǒ hé tóng shì yì qǐ chī wǔ fàn.",
        "thaiMeaning": "ฉันกินข้าวเที่ยงกับเพื่อนร่วมงาน",
        "englishMeaning": "I had lunch with my colleagues."
      }
    ]
  },
  {
    "id": "v320",
    "hanzi": "顾客",
    "pinyin": "gùkè",
    "thaiMeaning": "ลูกค้า",
    "englishMeaning": "customer",
    "example": {
      "hanzi": "接待顾客。",
      "pinyin": "Jiēdài gùkè.",
      "thaiMeaning": "ต้อนรับลูกค้า",
      "englishMeaning": "Greet customers."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "接待顾客。",
        "pinyin": "Jiē dài gù kè.",
        "thaiMeaning": "ต้อนรับลูกค้า",
        "englishMeaning": "Greet customers."
      },
      {
        "scenario": "ต้อนรับลูกค้าเข้าร้าน",
        "hanzi": "顾客进来了，请先招呼一下。",
        "pinyin": "Gù kè jìn lái le, qǐng xiān zhāo hū yí xià.",
        "thaiMeaning": "ลูกค้าเข้ามาแล้ว กรุณาไปต้อนรับก่อน",
        "englishMeaning": "Customers come in, please greet them first."
      },
      {
        "scenario": "รับฟังความคิดเห็นของลูกค้า",
        "hanzi": "我们很重视顾客的意见。",
        "pinyin": "Wǒ men hěn zhòng shì gù kè de yì jiàn.",
        "thaiMeaning": "พวกเราให้ความสำคัญกับความคิดเห็นของลูกค้า",
        "englishMeaning": "We value our customers' opinions."
      }
    ]
  },
  {
    "id": "v321",
    "hanzi": "开会",
    "pinyin": "kāihuì",
    "thaiMeaning": "ประชุม",
    "englishMeaning": "meeting",
    "example": {
      "hanzi": "准备开会。",
      "pinyin": "Zhǔnbèi kāihuì.",
      "thaiMeaning": "เตรียมเข้าประชุม",
      "englishMeaning": "Get ready for a meeting."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "准备开会。",
        "pinyin": "Zhǔn bèi kāi huì.",
        "thaiMeaning": "เตรียมเข้าประชุม",
        "englishMeaning": "Get ready for a meeting."
      },
      {
        "scenario": "แจ้งเวลาเริ่มประชุม",
        "hanzi": "我们十点在会议室开会。",
        "pinyin": "Wǒ men shí diǎn zài huì yì shì kāi huì.",
        "thaiMeaning": "พวกเราประชุมสิบโมงในห้องประชุม",
        "englishMeaning": "We have a meeting in the conference room at ten o'clock."
      },
      {
        "scenario": "ปิดเสียงมือถือก่อนประชุม",
        "hanzi": "开会时请把手机调成静音。",
        "pinyin": "Kāi huì shí qǐng bǎ shǒu jī tiáo chéng jìng yīn.",
        "thaiMeaning": "ตอนประชุมกรุณาปิดเสียงโทรศัพท์",
        "englishMeaning": "Please turn your cell phone to silent during the meeting."
      }
    ]
  },
  {
    "id": "v322",
    "hanzi": "报告",
    "pinyin": "bàogào",
    "thaiMeaning": "รายงาน",
    "englishMeaning": "Report",
    "example": {
      "hanzi": "写报告。",
      "pinyin": "Xiě bàogào.",
      "thaiMeaning": "เขียนรายงาน",
      "englishMeaning": "Write reports."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "写报告。",
        "pinyin": "Xiě bào gào.",
        "thaiMeaning": "เขียนรายงาน",
        "englishMeaning": "Write reports."
      },
      {
        "scenario": "ส่งรายงานให้ผู้จัดการ",
        "hanzi": "我已经把报告发给经理了。",
        "pinyin": "Wǒ yǐ jīng bǎ bào gào fā gěi jīng lǐ le.",
        "thaiMeaning": "ฉันส่งรายงานให้ผู้จัดการแล้ว",
        "englishMeaning": "I have sent the report to the manager."
      },
      {
        "scenario": "นำเสนอรายงานในที่ประชุม",
        "hanzi": "明天由我来做工作报告。",
        "pinyin": "Míng tiān yóu wǒ lái zuò gōng zuò bào gào.",
        "thaiMeaning": "พรุ่งนี้ฉันจะเป็นคนนำเสนอรายงานการทำงาน",
        "englishMeaning": "I will give a work report tomorrow."
      }
    ]
  },
  {
    "id": "v323",
    "hanzi": "加班",
    "pinyin": "jiābān",
    "thaiMeaning": "ทำโอที / ทำงานล่วงเวลา",
    "englishMeaning": "work overtime",
    "example": {
      "hanzi": "今晚加班。",
      "pinyin": "Jīnwǎn jiābān.",
      "thaiMeaning": "คืนนี้ทำโอที",
      "englishMeaning": "Work overtime tonight."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "今晚加班。",
        "pinyin": "Jīn wǎn jiā bān.",
        "thaiMeaning": "คืนนี้ทำโอที",
        "englishMeaning": "Work overtime tonight."
      },
      {
        "scenario": "แจ้งครอบครัวว่าต้องทำโอที",
        "hanzi": "今晚我要加班，会晚点回家。",
        "pinyin": "Jīn wǎn wǒ yào jiā bān, huì wǎn diǎn huí jiā.",
        "thaiMeaning": "คืนนี้ฉันต้องทำโอที จะกลับบ้านช้าหน่อย",
        "englishMeaning": "I have to work overtime tonight and will go home late."
      },
      {
        "scenario": "ถามเพื่อนร่วมงานว่าต้องอยู่ต่อไหม",
        "hanzi": "你今天也要加班吗？",
        "pinyin": "Nǐ jīn tiān yě yào jiā bān ma?",
        "thaiMeaning": "วันนี้คุณต้องทำโอทีด้วยไหม?",
        "englishMeaning": "Do you have to work overtime today too?"
      }
    ]
  },
  {
    "id": "v324",
    "hanzi": "请假",
    "pinyin": "qǐngjià",
    "thaiMeaning": "ลางาน",
    "englishMeaning": "Ask for leave",
    "example": {
      "hanzi": "向公司请假。",
      "pinyin": "Xiàng gōngsī qǐngjià.",
      "thaiMeaning": "ยื่นลางานกับบริษัท",
      "englishMeaning": "Ask for leave from the company."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "向公司请假。",
        "pinyin": "Xiàng gōng sī qǐng jià.",
        "thaiMeaning": "ยื่นลางานกับบริษัท",
        "englishMeaning": "Ask for leave from the company."
      },
      {
        "scenario": "ลางานเพราะป่วย",
        "hanzi": "我发烧了，想请假一天。",
        "pinyin": "Wǒ fā shāo le, xiǎng qǐng jiǎ yī tiān.",
        "thaiMeaning": "ฉันมีไข้ อยากลางานหนึ่งวัน",
        "englishMeaning": "I have a fever and want to take a day off."
      },
      {
        "scenario": "ขอลาหยุดล่วงหน้า",
        "hanzi": "下周我要请假去看家人。",
        "pinyin": "Xià zhōu wǒ yào qǐng jià qù kān jiā rén.",
        "thaiMeaning": "สัปดาห์หน้าฉันจะลาไปเยี่ยมครอบครัว",
        "englishMeaning": "I'm taking next week off to see my family."
      }
    ]
  },
  {
    "id": "v325",
    "hanzi": "学习",
    "pinyin": "xuéxí",
    "thaiMeaning": "เรียนรู้ / ศึกษา",
    "englishMeaning": "study",
    "example": {
      "hanzi": "学习中文。",
      "pinyin": "Xuéxí zhōngwén.",
      "thaiMeaning": "เรียนภาษาจีน",
      "englishMeaning": "Learn Chinese."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "学习中文。",
        "pinyin": "Xué xí zhōng wén.",
        "thaiMeaning": "เรียนภาษาจีน",
        "englishMeaning": "Learn Chinese."
      },
      {
        "scenario": "เรียนภาษาจีนทุกวัน",
        "hanzi": "我每天学习一个小时中文。",
        "pinyin": "Wǒ měi tiān xué xí yí gè xiǎo shí zhōng wén.",
        "thaiMeaning": "ฉันเรียนภาษาจีนวันละหนึ่งชั่วโมง",
        "englishMeaning": "I study Chinese for an hour every day."
      },
      {
        "scenario": "ชวนเพื่อนอ่านหนังสือด้วยกัน",
        "hanzi": "我们一起学习吧。",
        "pinyin": "Wǒ men yì qǐ xué xí ba.",
        "thaiMeaning": "พวกเราเรียนด้วยกันนะ",
        "englishMeaning": "Let's learn together."
      }
    ]
  },
  {
    "id": "v326",
    "hanzi": "上课",
    "pinyin": "shàngkè",
    "thaiMeaning": "เข้าเรียน",
    "englishMeaning": "Attend class",
    "example": {
      "hanzi": "准备上课。",
      "pinyin": "Zhǔnbèi shàngkè.",
      "thaiMeaning": "เตรียมเข้าเรียน",
      "englishMeaning": "Get ready for class."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "准备上课。",
        "pinyin": "Zhǔn bèi shàng kè.",
        "thaiMeaning": "เตรียมเข้าเรียน",
        "englishMeaning": "Get ready for class."
      },
      {
        "scenario": "เตือนว่าใกล้ถึงเวลาเรียน",
        "hanzi": "快上课了，进教室吧。",
        "pinyin": "Kuài shàng kè le, jìn jiào shì ba.",
        "thaiMeaning": "ใกล้เข้าเรียนแล้ว เข้าห้องเรียนเถอะ",
        "englishMeaning": "Class is about to begin, come into the classroom."
      },
      {
        "scenario": "บอกว่าเช้านี้มีเรียน",
        "hanzi": "我上午要上三节课。",
        "pinyin": "Wǒ shàng wǔ yào shàng sān jié kè.",
        "thaiMeaning": "ตอนเช้าฉันมีเรียนสามคาบ",
        "englishMeaning": "I have three classes in the morning."
      }
    ]
  },
  {
    "id": "v327",
    "hanzi": "下课",
    "pinyin": "xiàkè",
    "thaiMeaning": "เลิกเรียน",
    "englishMeaning": "After class",
    "example": {
      "hanzi": "下课了。",
      "pinyin": "Xiàkè le.",
      "thaiMeaning": "เลิกเรียนแล้ว",
      "englishMeaning": "get out of class is over."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "下课了。",
        "pinyin": "Xià kè le.",
        "thaiMeaning": "เลิกเรียนแล้ว",
        "englishMeaning": "get out of class is over."
      },
      {
        "scenario": "ชวนไปกินข้าวหลังเลิกเรียน",
        "hanzi": "下课后一起去吃饭吧。",
        "pinyin": "Xià kè hòu yì qǐ qù chī fàn ba.",
        "thaiMeaning": "หลังเลิกเรียนไปกินข้าวด้วยกันนะ",
        "englishMeaning": "Let's go have dinner together after class."
      },
      {
        "scenario": "ถามเวลาเลิกเรียน",
        "hanzi": "你们几点下课？",
        "pinyin": "Nǐ men jǐ diǎn xià kè?",
        "thaiMeaning": "พวกคุณเลิกเรียนกี่โมง?",
        "englishMeaning": "What time do you finish class?"
      }
    ]
  },
  {
    "id": "v328",
    "hanzi": "考试",
    "pinyin": "kǎoshì",
    "thaiMeaning": "สอบ / การสอบ",
    "englishMeaning": "take an exam",
    "example": {
      "hanzi": "参加考试。",
      "pinyin": "Cānjiā kǎoshì.",
      "thaiMeaning": "เข้าสอบ",
      "englishMeaning": "Take the exam."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "参加考试。",
        "pinyin": "Cān jiā kǎo shì.",
        "thaiMeaning": "เข้าสอบ",
        "englishMeaning": "Take the exam."
      },
      {
        "scenario": "เตรียมตัวสอบสัปดาห์หน้า",
        "hanzi": "下周有考试，我要复习。",
        "pinyin": "Xià zhōu yǒu kǎo shì, wǒ yào fù xí.",
        "thaiMeaning": "สัปดาห์หน้ามีสอบ ฉันต้องทบทวน",
        "englishMeaning": "There is an exam next week and I have to review."
      },
      {
        "scenario": "ถามว่าการสอบเป็นอย่างไร",
        "hanzi": "今天的考试难不难？",
        "pinyin": "Jīn tiān de kǎo shì nán bu nán?",
        "thaiMeaning": "การสอบวันนี้ยากไหม?",
        "englishMeaning": "Is today's exam difficult?"
      }
    ]
  },
  {
    "id": "v329",
    "hanzi": "成绩",
    "pinyin": "chéngjì",
    "thaiMeaning": "ผลการเรียน / คะแนน",
    "englishMeaning": "score",
    "example": {
      "hanzi": "好成绩。",
      "pinyin": "Hǎo chéngjì.",
      "thaiMeaning": "คะแนนดี",
      "englishMeaning": "Good results."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "好成绩。",
        "pinyin": "Hǎo chéng jì.",
        "thaiMeaning": "คะแนนดี",
        "englishMeaning": "Good results."
      },
      {
        "scenario": "ถามผลคะแนนสอบ",
        "hanzi": "你的考试成绩出来了吗？",
        "pinyin": "Nǐ de kǎo shì chéng jì chū lái le ma?",
        "thaiMeaning": "คะแนนสอบของคุณออกหรือยัง?",
        "englishMeaning": "Have your test results come out?"
      },
      {
        "scenario": "ชมว่าคะแนนดีขึ้น",
        "hanzi": "这次成绩比上次好多了。",
        "pinyin": "Zhè cì chéng jì bǐ shàng cì hǎo duō le.",
        "thaiMeaning": "ครั้งนี้คะแนนดีกว่าครั้งก่อนมาก",
        "englishMeaning": "This time the results were much better than last time."
      }
    ]
  },
  {
    "id": "v330",
    "hanzi": "答案",
    "pinyin": "dá'àn",
    "thaiMeaning": "คำตอบ",
    "englishMeaning": "Answer",
    "example": {
      "hanzi": "寻找答案。",
      "pinyin": "Xúnzhǎo dá'àn.",
      "thaiMeaning": "ค้นหาคำตอบ",
      "englishMeaning": "Find answers."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "寻找答案。",
        "pinyin": "Xún zhǎo dá àn.",
        "thaiMeaning": "ค้นหาคำตอบ",
        "englishMeaning": "Find answers."
      },
      {
        "scenario": "ตรวจคำตอบท้ายหนังสือ",
        "hanzi": "答案在书的最后一页。",
        "pinyin": "Dá àn zài shū de zuì hòu yí yè.",
        "thaiMeaning": "คำตอบอยู่หน้าสุดท้ายของหนังสือ",
        "englishMeaning": "The answer is on the last page of the book."
      },
      {
        "scenario": "บอกว่ายังคิดคำตอบไม่ออก",
        "hanzi": "我还没想出答案。",
        "pinyin": "Wǒ hái méi xiǎng chū dá àn.",
        "thaiMeaning": "ฉันยังคิดคำตอบไม่ออก",
        "englishMeaning": "I haven't figured out the answer yet."
      }
    ]
  },
  {
    "id": "v331",
    "hanzi": "运动",
    "pinyin": "yùndòng",
    "thaiMeaning": "ออกกำลังกาย / กีฬา",
    "englishMeaning": "sports",
    "example": {
      "hanzi": "做运动。",
      "pinyin": "Zuò yùndòng.",
      "thaiMeaning": "ออกกำลังกาย",
      "englishMeaning": "Do exercise."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "做运动。",
        "pinyin": "Zuò yùn dòng.",
        "thaiMeaning": "ออกกำลังกาย",
        "englishMeaning": "Do exercise."
      },
      {
        "scenario": "ชวนไปออกกำลังกาย",
        "hanzi": "下班后一起去运动吧。",
        "pinyin": "Xià bān hòu yì qǐ qù yùn dòng ba.",
        "thaiMeaning": "หลังเลิกงานไปออกกำลังกายด้วยกันนะ",
        "englishMeaning": "Let's go exercise together after get off work."
      },
      {
        "scenario": "พูดถึงประโยชน์ต่อสุขภาพ",
        "hanzi": "每天运动对身体好。",
        "pinyin": "Měi tiān yùn dòng duì shēn tǐ hǎo.",
        "thaiMeaning": "ออกกำลังกายทุกวันดีต่อร่างกาย",
        "englishMeaning": "Daily exercise is good for your body."
      }
    ]
  },
  {
    "id": "v332",
    "hanzi": "跑步",
    "pinyin": "pǎobù",
    "thaiMeaning": "วิ่งออกกำลังกาย",
    "englishMeaning": "running",
    "example": {
      "hanzi": "晨跑。",
      "pinyin": "Chénpǎo.",
      "thaiMeaning": "วิ่งตอนเช้า",
      "englishMeaning": "Morning run."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "晨跑。",
        "pinyin": "Chén pǎo.",
        "thaiMeaning": "วิ่งตอนเช้า",
        "englishMeaning": "Morning run."
      },
      {
        "scenario": "วิ่งในสวนตอนเช้า",
        "hanzi": "我每天早上去公园跑步。",
        "pinyin": "Wǒ měi tiān zǎo shàng qù gōng yuán pǎo bù.",
        "thaiMeaning": "ฉันไปวิ่งที่สวนทุกเช้า",
        "englishMeaning": "I go for a run in the park every morning."
      },
      {
        "scenario": "ชวนเพื่อนไปวิ่ง",
        "hanzi": "周末一起跑步怎么样？",
        "pinyin": "Zhōu mò yì qǐ pǎo bù zěn me yàng?",
        "thaiMeaning": "สุดสัปดาห์ไปวิ่งด้วยกันไหม?",
        "englishMeaning": "How about running together on the weekend?"
      }
    ]
  },
  {
    "id": "v333",
    "hanzi": "游泳",
    "pinyin": "yóuyǒng",
    "thaiMeaning": "ว่ายน้ำ",
    "englishMeaning": "swim",
    "example": {
      "hanzi": "去游泳。",
      "pinyin": "Qù yóuyǒng.",
      "thaiMeaning": "ไปว่ายน้ำ",
      "englishMeaning": "Go swimming."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "去游泳。",
        "pinyin": "Qù yóu yǒng.",
        "thaiMeaning": "ไปว่ายน้ำ",
        "englishMeaning": "Go swimming."
      },
      {
        "scenario": "ถามว่าว่ายน้ำเป็นไหม",
        "hanzi": "你会游泳吗？",
        "pinyin": "Nǐ huì yóu yǒng ma?",
        "thaiMeaning": "คุณว่ายน้ำเป็นไหม?",
        "englishMeaning": "Can you swim?"
      },
      {
        "scenario": "ไปว่ายน้ำเพราะอากาศร้อน",
        "hanzi": "天气太热，我们去游泳吧。",
        "pinyin": "Tiān qì tài rè, wǒ men qù yóu yǒng ba.",
        "thaiMeaning": "อากาศร้อนเกินไป พวกเราไปว่ายน้ำกัน",
        "englishMeaning": "The weather is too hot, let's go swimming."
      }
    ]
  },
  {
    "id": "v334",
    "hanzi": "打球",
    "pinyin": "dǎqiú",
    "thaiMeaning": "เล่นบอล / เล่นกีฬา",
    "englishMeaning": "play ball",
    "example": {
      "hanzi": "打羽毛球。",
      "pinyin": "Dǎ yǔmáoqiú.",
      "thaiMeaning": "เล่นแบดมินตัน",
      "englishMeaning": "Play badminton."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "打羽毛球。",
        "pinyin": "Dǎ yǔ máo qiú.",
        "thaiMeaning": "เล่นแบดมินตัน",
        "englishMeaning": "Play badminton."
      },
      {
        "scenario": "นัดเล่นบอลหลังเรียน",
        "hanzi": "下课后我们去打球。",
        "pinyin": "Xià kè hòu wǒ men qù dǎ qiú.",
        "thaiMeaning": "หลังเลิกเรียนพวกเราไปเล่นบอล",
        "englishMeaning": "After class we went to play ball."
      },
      {
        "scenario": "ถามว่าใครอยากร่วมเล่น",
        "hanzi": "下午有人想一起打球吗？",
        "pinyin": "Xià wǔ yǒu rén xiǎng yì qǐ dǎ qiú ma?",
        "thaiMeaning": "ตอนบ่ายมีใครอยากเล่นบอลด้วยกันไหม?",
        "englishMeaning": "Does anyone want to play ball with you this afternoon?"
      }
    ]
  },
  {
    "id": "v335",
    "hanzi": "看电影",
    "pinyin": "kàn diànyǐng",
    "thaiMeaning": "ดูภาพยนตร์ / ดูหนัง",
    "englishMeaning": "See a movie",
    "example": {
      "hanzi": "去看电影。",
      "pinyin": "Qù kàn diànyǐng.",
      "thaiMeaning": "ไปดูหนัง",
      "englishMeaning": "Go to the movies."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "去看电影。",
        "pinyin": "Qù kàn diàn yǐng.",
        "thaiMeaning": "ไปดูหนัง",
        "englishMeaning": "Go to the movies."
      },
      {
        "scenario": "ชวนเพื่อนไปดูหนัง",
        "hanzi": "这个周末一起看电影吧。",
        "pinyin": "Zhè ge zhōu mò yì qǐ kàn diàn yǐng ba.",
        "thaiMeaning": "สุดสัปดาห์นี้ไปดูหนังด้วยกันนะ",
        "englishMeaning": "Let’s watch a movie together this weekend."
      },
      {
        "scenario": "ถามว่าชอบดูหนังประเภทไหน",
        "hanzi": "你喜欢看什么电影？",
        "pinyin": "Nǐ xǐ huan kàn shén me diàn yǐng?",
        "thaiMeaning": "คุณชอบดูหนังประเภทไหน?",
        "englishMeaning": "What movies do you like to watch?"
      }
    ]
  },
  {
    "id": "v336",
    "hanzi": "听音乐",
    "pinyin": "tīng yīnyuè",
    "thaiMeaning": "ฟังเพลง",
    "englishMeaning": "listen to music",
    "example": {
      "hanzi": "戴耳机听音乐。",
      "pinyin": "Dài ěrjī tīng yīnyuè.",
      "thaiMeaning": "ใส่หูฟังฟังเพลง",
      "englishMeaning": "Wear headphones and listen to music."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "戴耳机听音乐。",
        "pinyin": "Dài ěr jī tīng yīn yuè.",
        "thaiMeaning": "ใส่หูฟังฟังเพลง",
        "englishMeaning": "Wear headphones and listen to music."
      },
      {
        "scenario": "ฟังเพลงเพื่อผ่อนคลาย",
        "hanzi": "累的时候我喜欢听音乐。",
        "pinyin": "Lèi de shí hòu wǒ xǐ huan tīng yīn yuè.",
        "thaiMeaning": "เวลาเหนื่อยฉันชอบฟังเพลง",
        "englishMeaning": "I like to listen to music when I'm tired."
      },
      {
        "scenario": "ขอให้เบาเสียงเพลง",
        "hanzi": "听音乐时请小声一点。",
        "pinyin": "Tīng yīn yuè shí qǐng xiǎo shēng yì diǎn.",
        "thaiMeaning": "เวลาฟังเพลงกรุณาเปิดเบาหน่อย",
        "englishMeaning": "Please keep your voice down when listening to music."
      }
    ]
  },
  {
    "id": "v337",
    "hanzi": "旅游",
    "pinyin": "lǚyóu",
    "thaiMeaning": "ท่องเที่ยว / เที่ยว",
    "englishMeaning": "travel",
    "example": {
      "hanzi": "去中国旅游。",
      "pinyin": "Qù Zhōngguó lǚyóu.",
      "thaiMeaning": "ไปเที่ยวเมืองจีน",
      "englishMeaning": "Travel to China."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "去中国旅游。",
        "pinyin": "Qù zhōng guó lǚ yóu.",
        "thaiMeaning": "ไปเที่ยวเมืองจีน",
        "englishMeaning": "Travel to China."
      },
      {
        "scenario": "วางแผนไปเที่ยวจีน",
        "hanzi": "明年我想去中国旅游。",
        "pinyin": "Míng nián wǒ xiǎng qù zhōng guó lǚ yóu.",
        "thaiMeaning": "ปีหน้าฉันอยากไปเที่ยวจีน",
        "englishMeaning": "I want to travel to China next year."
      },
      {
        "scenario": "ถามว่าเคยไปเที่ยวที่ไหน",
        "hanzi": "你去过哪些地方旅游？",
        "pinyin": "Nǐ qù guò nǎ xiē dì fāng lǚ yóu?",
        "thaiMeaning": "คุณเคยไปเที่ยวที่ไหนมาบ้าง?",
        "englishMeaning": "Where have you traveled?"
      }
    ]
  },
  {
    "id": "v338",
    "hanzi": "拍照",
    "pinyin": "pāizhào",
    "thaiMeaning": "ถ่ายรูป",
    "englishMeaning": "Photograph",
    "example": {
      "hanzi": "拍张照。",
      "pinyin": "Pāi zhāng zhào.",
      "thaiMeaning": "ถ่ายรูปรูปหนึ่ง",
      "englishMeaning": "Take a photo."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "拍张照。",
        "pinyin": "Pāi zhāng zhào.",
        "thaiMeaning": "ถ่ายรูปรูปหนึ่ง",
        "englishMeaning": "Take a photo."
      },
      {
        "scenario": "ขอให้คนอื่นช่วยถ่ายรูป",
        "hanzi": "可以帮我们拍照吗？",
        "pinyin": "Kě yǐ bāng wǒ men pāi zhào ma?",
        "thaiMeaning": "ช่วยถ่ายรูปให้พวกเราได้ไหม?",
        "englishMeaning": "Can you take photos for us?"
      },
      {
        "scenario": "เตือนว่าที่นี่ห้ามถ่ายรูป",
        "hanzi": "这里不能拍照。",
        "pinyin": "Zhè lǐ bù néng pāi zhào.",
        "thaiMeaning": "ที่นี่ห้ามถ่ายรูป",
        "englishMeaning": "No photography allowed here."
      }
    ]
  },
  {
    "id": "v339",
    "hanzi": "唱歌",
    "pinyin": "chànggē",
    "thaiMeaning": "ร้องเพลง",
    "englishMeaning": "Sing",
    "example": {
      "hanzi": "去唱歌。",
      "pinyin": "Qù chànggē.",
      "thaiMeaning": "ไปร้องเพลง",
      "englishMeaning": "Go sing."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "去唱歌。",
        "pinyin": "Qù chàng gē.",
        "thaiMeaning": "ไปร้องเพลง",
        "englishMeaning": "Go sing."
      },
      {
        "scenario": "ชวนเพื่อนไปร้องเพลง",
        "hanzi": "晚上一起去唱歌吧。",
        "pinyin": "Wǎn shàng yì qǐ qù chàng gē ba.",
        "thaiMeaning": "ตอนเย็นไปร้องเพลงด้วยกันนะ",
        "englishMeaning": "Let's go sing together in the evening."
      },
      {
        "scenario": "ชมว่าเพื่อนร้องเพลงเพราะ",
        "hanzi": "你唱歌真好听。",
        "pinyin": "Nǐ chàng gē zhēn hǎo tīng.",
        "thaiMeaning": "คุณร้องเพลงเพราะจริงๆ",
        "englishMeaning": "You sing so beautifully."
      }
    ]
  },
  {
    "id": "v340",
    "hanzi": "跳舞",
    "pinyin": "tiàowǔ",
    "thaiMeaning": "เต้นรำ / เต้น",
    "englishMeaning": "Dance",
    "example": {
      "hanzi": "学习跳舞。",
      "pinyin": "Xuéxí tiàowǔ.",
      "thaiMeaning": "ฝึกเรียนเต้น",
      "englishMeaning": "Learn to dance."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "学习跳舞。",
        "pinyin": "Xué xí tiào wǔ.",
        "thaiMeaning": "ฝึกเรียนเต้น",
        "englishMeaning": "Learn to dance."
      },
      {
        "scenario": "ถามว่าเต้นเป็นไหม",
        "hanzi": "你会跳舞吗？",
        "pinyin": "Nǐ huì tiào wǔ ma?",
        "thaiMeaning": "คุณเต้นเป็นไหม?",
        "englishMeaning": "Can you dance?"
      },
      {
        "scenario": "ดูคนเต้นในงานเลี้ยง",
        "hanzi": "大家在聚会上开心地跳舞。",
        "pinyin": "Dà jiā zài jù huì shàng kāi xīn dì tiào wǔ.",
        "thaiMeaning": "ทุกคนเต้นอย่างสนุกสนานในงานเลี้ยง",
        "englishMeaning": "Everyone danced happily at the party."
      }
    ]
  },
  {
    "id": "v342",
    "hanzi": "算了吧",
    "pinyin": "suàn le ba",
    "thaiMeaning": "ช่างมันเถอะ / พอเหอะ",
    "englishMeaning": "Forget it",
    "example": {
      "hanzi": "算了吧，不去了。",
      "pinyin": "Suàn le ba, bú qù le.",
      "thaiMeaning": "ช่างมันเถอะ ไม่ไปแล้ว",
      "englishMeaning": "Forget it, I won’t go."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "算了吧，不去了。",
        "pinyin": "Suàn le ba, bú qù le.",
        "thaiMeaning": "ช่างมันเถอะ ไม่ไปแล้ว",
        "englishMeaning": "Forget it, I won’t go."
      },
      {
        "scenario": "ยกเลิกแผนเพราะฝนตก",
        "hanzi": "雨太大了，算了吧，别去了。",
        "pinyin": "Yǔ tài dà le, suàn le ba, bié qù le.",
        "thaiMeaning": "ฝนตกหนักเกินไป ช่างเถอะ ไม่ต้องไปแล้ว",
        "englishMeaning": "It's raining too much, forget it, don't go."
      },
      {
        "scenario": "ไม่อยากเถียงต่อ",
        "hanzi": "他不想听，算了吧。",
        "pinyin": "Tā bù xiǎng tīng, suàn le ba.",
        "thaiMeaning": "เขาไม่อยากฟัง ช่างมันเถอะ",
        "englishMeaning": "He doesn't want to hear it, so forget it."
      }
    ]
  },
  {
    "id": "v343",
    "hanzi": "怎么办",
    "pinyin": "zěnme bàn",
    "thaiMeaning": "ทำยังไงดี",
    "englishMeaning": "what to do",
    "example": {
      "hanzi": "现在怎么办？",
      "pinyin": "Xiànzài zěnme bàn?",
      "thaiMeaning": "ตอนนี้ทำไงดี",
      "englishMeaning": "What now?"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "现在怎么办？",
        "pinyin": "Xiàn zài zěn me bàn?",
        "thaiMeaning": "ตอนนี้ทำไงดี",
        "englishMeaning": "What now?"
      },
      {
        "scenario": "ทำโทรศัพท์หายและขอคำแนะนำ",
        "hanzi": "我的手机不见了，怎么办？",
        "pinyin": "Wǒ de shǒu jī bú jiàn le, zěn me bàn?",
        "thaiMeaning": "โทรศัพท์ฉันหาย ทำอย่างไรดี?",
        "englishMeaning": "My mobile phone is missing, what should I do?"
      },
      {
        "scenario": "กังวลว่าจะไปประชุมสาย",
        "hanzi": "快迟到了，怎么办？",
        "pinyin": "Kuài chí dào le, zěn me bàn?",
        "thaiMeaning": "ใกล้จะสายแล้ว ทำอย่างไรดี?",
        "englishMeaning": "I'm almost late, what should I do?"
      }
    ]
  },
  {
    "id": "v344",
    "hanzi": "真的吗",
    "pinyin": "zhēn de ma",
    "thaiMeaning": "จริงเหรอ / จริงปะ",
    "englishMeaning": "Really",
    "example": {
      "hanzi": "这是真的吗？",
      "pinyin": "Zhè shì zhēn de ma?",
      "thaiMeaning": "เรื่องนี้จริงเหรอ",
      "englishMeaning": "Is this true?"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "这是真的吗？",
        "pinyin": "Zhè shì zhēn de ma?",
        "thaiMeaning": "เรื่องนี้จริงเหรอ",
        "englishMeaning": "Is this true?"
      },
      {
        "scenario": "แปลกใจเมื่อได้ยินข่าวดี",
        "hanzi": "你通过考试了？真的吗？",
        "pinyin": "Nǐ tōng guò kǎo shì le? Zhēn de ma?",
        "thaiMeaning": "คุณสอบผ่านแล้วเหรอ? จริงเหรอ?",
        "englishMeaning": "Did you pass the exam? Really?"
      },
      {
        "scenario": "ถามยืนยันเรื่องลดราคา",
        "hanzi": "今天全部半价，真的吗？",
        "pinyin": "Jīn tiān quán bù bàn jià, zhēn de ma?",
        "thaiMeaning": "วันนี้ลดครึ่งราคาทั้งหมด จริงเหรอ?",
        "englishMeaning": "Everything is half price today, really?"
      }
    ]
  },
  {
    "id": "v345",
    "hanzi": "太棒了",
    "pinyin": "tài bàng le",
    "thaiMeaning": "สุดยอดไปเลย",
    "englishMeaning": "marvelous",
    "example": {
      "hanzi": "太棒了！",
      "pinyin": "Tài bàng le!",
      "thaiMeaning": "สุดยอดมาก!",
      "englishMeaning": "marvelous!"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "太棒了！",
        "pinyin": "Tài bàng le!",
        "thaiMeaning": "สุดยอดมาก!",
        "englishMeaning": "marvelous!"
      },
      {
        "scenario": "ชมเพื่อนที่สอบผ่าน",
        "hanzi": "你考过了，太棒了！",
        "pinyin": "Nǐ kǎo guò le, tài bàng le!",
        "thaiMeaning": "คุณสอบผ่านแล้ว เยี่ยมมาก!",
        "englishMeaning": "You passed the exam, great!"
      },
      {
        "scenario": "ดีใจที่แผนสำเร็จ",
        "hanzi": "我们的计划成功了，太棒了！",
        "pinyin": "Wǒ men de jì huà chéng gōng le, tài bàng le!",
        "thaiMeaning": "แผนของเราสำเร็จแล้ว สุดยอด!",
        "englishMeaning": "Our plan worked, awesome!"
      }
    ]
  },
  {
    "id": "v346",
    "hanzi": "随便",
    "pinyin": "suíbiàn",
    "thaiMeaning": "ตามสบาย / อะไรก็ได้",
    "englishMeaning": "casual",
    "example": {
      "hanzi": "随便吃。",
      "pinyin": "Suíbiàn chī.",
      "thaiMeaning": "ทานตามสบายเลย",
      "englishMeaning": "Eat whatever you want."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "随便吃。",
        "pinyin": "Suí biàn chī.",
        "thaiMeaning": "ทานตามสบายเลย",
        "englishMeaning": "Eat whatever you want."
      },
      {
        "scenario": "ตอบว่าเลือกอาหารอะไรก็ได้",
        "hanzi": "吃什么都行，我随便。",
        "pinyin": "Chī shén me dōu xíng, wǒ suí biàn.",
        "thaiMeaning": "กินอะไรก็ได้ ฉันตามสบาย",
        "englishMeaning": "You can eat whatever you want, I’m free to do it."
      },
      {
        "scenario": "เตือนไม่ให้หยิบของคนอื่น",
        "hanzi": "不要随便拿别人的东西。",
        "pinyin": "Bú yào suí biàn ná bié rén de dōng xī.",
        "thaiMeaning": "อย่าหยิบของคนอื่นตามใจ",
        "englishMeaning": "Don't just take other people's things."
      }
    ]
  },
  {
    "id": "v347",
    "hanzi": "先生",
    "pinyin": "xiānsheng",
    "thaiMeaning": "คุณผู้ชาย / นาย",
    "englishMeaning": "gentlemen",
    "example": {
      "hanzi": "王先生。",
      "pinyin": "Wáng xiānsheng.",
      "thaiMeaning": "คุณหวัง",
      "englishMeaning": "Mr. Wang."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "王先生。",
        "pinyin": "Wáng xiān shēng.",
        "thaiMeaning": "คุณหวัง",
        "englishMeaning": "Mr. Wang."
      },
      {
        "scenario": "เรียกลูกค้าผู้ชายอย่างสุภาพ",
        "hanzi": "先生，请问您需要帮助吗？",
        "pinyin": "Xiān shēng, qǐng wèn nín xū yào bāng zhù ma?",
        "thaiMeaning": "คุณผู้ชาย ต้องการความช่วยเหลือไหม?",
        "englishMeaning": "Sir, do you need help?"
      },
      {
        "scenario": "ถามนามสกุลของผู้ชาย",
        "hanzi": "请问这位先生姓什么？",
        "pinyin": "Qǐng wèn zhè wèi xiān shēng xìng shén me?",
        "thaiMeaning": "ขอถามหน่อย คุณผู้ชายท่านนี้แซ่อะไร?",
        "englishMeaning": "What is this gentleman's last name?"
      }
    ]
  },
  {
    "id": "v348",
    "hanzi": "女士",
    "pinyin": "nǚshì",
    "thaiMeaning": "คุณผู้หญิง / สุภาพสตรี",
    "englishMeaning": "Miss",
    "example": {
      "hanzi": "李女士。",
      "pinyin": "Lǐ nǚshì.",
      "thaiMeaning": "คุณหลี",
      "englishMeaning": "Ms. Li."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "李女士。",
        "pinyin": "Lǐ nǚ shì.",
        "thaiMeaning": "คุณหลี",
        "englishMeaning": "Ms. Li."
      },
      {
        "scenario": "เรียกลูกค้าผู้หญิงอย่างสุภาพ",
        "hanzi": "女士，这是您的发票。",
        "pinyin": "Nǚ shì, zhè shì nín de fā piào.",
        "thaiMeaning": "คุณผู้หญิง นี่คือใบเสร็จของคุณ",
        "englishMeaning": "Madam, here is your invoice."
      },
      {
        "scenario": "ประกาศเชิญผู้หญิงก่อน",
        "hanzi": "女士优先，请您先走。",
        "pinyin": "Nǚ shì yōu xiān, qǐng nín xiān zǒu.",
        "thaiMeaning": "สุภาพสตรีก่อน เชิญคุณไปก่อน",
        "englishMeaning": "Ladies first, please go first."
      }
    ]
  },
  {
    "id": "v349",
    "hanzi": "小姐",
    "pinyin": "xiǎojiě",
    "thaiMeaning": "คุณหนู / คุณ (หญิงสาว)",
    "englishMeaning": "Miss",
    "example": {
      "hanzi": "张小姐。",
      "pinyin": "Zhāng xiǎojiě.",
      "thaiMeaning": "คุณจาง",
      "englishMeaning": "Miss Zhang."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "张小姐。",
        "pinyin": "Zhāng xiǎo jiě.",
        "thaiMeaning": "คุณจาง",
        "englishMeaning": "Miss Zhang."
      },
      {
        "scenario": "เรียกพนักงานหญิงในบริบทบริการ",
        "hanzi": "小姐，请问洗手间在哪里？",
        "pinyin": "Xiǎo jiě, qǐng wèn xǐ shǒu jiān zài nǎ lǐ?",
        "thaiMeaning": "คุณครับ ขอถามว่าห้องน้ำอยู่ไหน?",
        "englishMeaning": "Madam, where is the bathroom?"
      },
      {
        "scenario": "ถามหาผู้หญิงตามนามสกุล",
        "hanzi": "请问李小姐在吗？",
        "pinyin": "Qǐng wèn lǐ xiǎo jiě zài ma?",
        "thaiMeaning": "ขอถามหน่อย คุณหลี่อยู่ไหม?",
        "englishMeaning": "Is Ms. Li here?"
      }
    ]
  },
  {
    "id": "v350",
    "hanzi": "大家",
    "pinyin": "dàjiā",
    "thaiMeaning": "ทุกคน / ทุกท่าน",
    "englishMeaning": "Everyone",
    "example": {
      "hanzi": "大家好！",
      "pinyin": "Dàjiā hǎo!",
      "thaiMeaning": "สวัสดีทุกคนครับ!",
      "englishMeaning": "Hello everyone!"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "大家好！",
        "pinyin": "Dà jiā hǎo!",
        "thaiMeaning": "สวัสดีทุกคนครับ!",
        "englishMeaning": "Hello everyone!"
      },
      {
        "scenario": "ทักทายคนในห้อง",
        "hanzi": "大家好，我是新同事。",
        "pinyin": "Dà jiā hǎo, wǒ shì xīn tóng shì.",
        "thaiMeaning": "สวัสดีทุกคน ฉันเป็นเพื่อนร่วมงานใหม่",
        "englishMeaning": "Hello everyone, I am a new colleague."
      },
      {
        "scenario": "ขอให้ทุกคนเงียบ",
        "hanzi": "请大家安静一下。",
        "pinyin": "Qǐng dà jiā ān jìng yí xià.",
        "thaiMeaning": "ขอให้ทุกคนเงียบสักครู่",
        "englishMeaning": "Please be quiet."
      }
    ]
  },
  {
    "id": "v351",
    "hanzi": "网络",
    "pinyin": "wǎngluò",
    "thaiMeaning": "อินเทอร์เน็ต / เครือข่าย",
    "englishMeaning": "network",
    "example": {
      "hanzi": "连网络。",
      "pinyin": "Lián wǎngluò.",
      "thaiMeaning": "เชื่อมเน็ต",
      "englishMeaning": "Connect to the Internet."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "连网络。",
        "pinyin": "Lián wǎng luò.",
        "thaiMeaning": "เชื่อมเน็ต",
        "englishMeaning": "Connect to the Internet."
      },
      {
        "scenario": "แจ้งว่าอินเทอร์เน็ตมีปัญหา",
        "hanzi": "今天办公室的网络不稳定。",
        "pinyin": "Jīn tiān bàn gōng shì de wǎng luò bù wěn dìng.",
        "thaiMeaning": "วันนี้อินเทอร์เน็ตในสำนักงานไม่เสถียร",
        "englishMeaning": "The office network is unstable today."
      },
      {
        "scenario": "ถามรหัสเครือข่ายไร้สาย",
        "hanzi": "这里有无线网络吗？",
        "pinyin": "Zhè lǐ yǒu wú xiàn wǎng luò ma?",
        "thaiMeaning": "ที่นี่มีเครือข่ายไร้สายไหม?",
        "englishMeaning": "Is there wifi here?"
      }
    ]
  },
  {
    "id": "v352",
    "hanzi": "网站",
    "pinyin": "wǎngzhàn",
    "thaiMeaning": "เว็บไซต์",
    "englishMeaning": "website",
    "example": {
      "hanzi": "浏览网站。",
      "pinyin": "Liúlǎn wǎngzhàn.",
      "thaiMeaning": "เข้าชมเว็บ",
      "englishMeaning": "Browse the website."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "浏览网站。",
        "pinyin": "Liú lǎn wǎng zhàn.",
        "thaiMeaning": "เข้าชมเว็บ",
        "englishMeaning": "Browse the website."
      },
      {
        "scenario": "เข้าเว็บไซต์เพื่อจองตั๋ว",
        "hanzi": "你可以在网站上订票。",
        "pinyin": "Nǐ kě yǐ zài wǎng zhàn shàng dìng piào.",
        "thaiMeaning": "คุณจองตั๋วบนเว็บไซต์ได้",
        "englishMeaning": "You can book tickets on the website."
      },
      {
        "scenario": "แจ้งว่าเว็บไซต์เปิดไม่ได้",
        "hanzi": "这个网站现在打不开。",
        "pinyin": "Zhè ge wǎng zhàn xiàn zài dǎ bù kāi.",
        "thaiMeaning": "ตอนนี้เว็บไซต์นี้เปิดไม่ได้",
        "englishMeaning": "This website cannot be opened now."
      }
    ]
  },
  {
    "id": "v353",
    "hanzi": "软件",
    "pinyin": "ruǎnjiàn",
    "thaiMeaning": "แอปพลิเคชัน / ซอฟต์แวร์",
    "englishMeaning": "software",
    "example": {
      "hanzi": "下载软件。",
      "pinyin": "Xiàzǎi ruǎnjiàn.",
      "thaiMeaning": "โหลดแอป",
      "englishMeaning": "Download software."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "下载软件。",
        "pinyin": "Xià zài ruǎn jiàn.",
        "thaiMeaning": "โหลดแอป",
        "englishMeaning": "Download software."
      },
      {
        "scenario": "ติดตั้งซอฟต์แวร์ใหม่",
        "hanzi": "我需要安装这个软件。",
        "pinyin": "Wǒ xū yào ān zhuāng zhè ge ruǎn jiàn.",
        "thaiMeaning": "ฉันต้องติดตั้งซอฟต์แวร์นี้",
        "englishMeaning": "I need to install this software."
      },
      {
        "scenario": "อัปเดตแอปให้เป็นเวอร์ชันล่าสุด",
        "hanzi": "请把软件更新到最新版本。",
        "pinyin": "Qǐng bǎ ruǎn jiàn gēng xīn dào zuì xīn bǎn běn.",
        "thaiMeaning": "กรุณาอัปเดตซอฟต์แวร์เป็นรุ่นล่าสุด",
        "englishMeaning": "Please update the software to the latest version."
      }
    ]
  },
  {
    "id": "v354",
    "hanzi": "账号",
    "pinyin": "zhànghào",
    "thaiMeaning": "บัญชีผู้ใช้ / แอคเคานต์",
    "englishMeaning": "account",
    "example": {
      "hanzi": "登录账号。",
      "pinyin": "Dēnglù zhànghào.",
      "thaiMeaning": "ล็อกอินบัญชี",
      "englishMeaning": "Login account."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "登录账号。",
        "pinyin": "Dēng lù zhàng hào.",
        "thaiMeaning": "ล็อกอินบัญชี",
        "englishMeaning": "Login account."
      },
      {
        "scenario": "สมัครบัญชีใหม่",
        "hanzi": "我刚注册了一个新账号。",
        "pinyin": "Wǒ gāng zhù cè le yí gè xīn zhàng hào.",
        "thaiMeaning": "ฉันเพิ่งสมัครบัญชีใหม่",
        "englishMeaning": "I just registered a new account."
      },
      {
        "scenario": "พบว่าบัญชีเข้าสู่ระบบไม่ได้",
        "hanzi": "我的账号登录不了。",
        "pinyin": "Wǒ de zhàng hào dēng lù bù liǎo.",
        "thaiMeaning": "บัญชีของฉันเข้าสู่ระบบไม่ได้",
        "englishMeaning": "I can't log in to my account."
      }
    ]
  },
  {
    "id": "v355",
    "hanzi": "密码",
    "pinyin": "mìmǎ",
    "thaiMeaning": "รหัสผ่าน",
    "englishMeaning": "password",
    "example": {
      "hanzi": "输入密码。",
      "pinyin": "Shūrù mìmǎ.",
      "thaiMeaning": "ใส่รหัสผ่าน",
      "englishMeaning": "Enter your password."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "输入密码。",
        "pinyin": "Shū rù mì mǎ.",
        "thaiMeaning": "ใส่รหัสผ่าน",
        "englishMeaning": "Enter your password."
      },
      {
        "scenario": "ลืมรหัสผ่าน",
        "hanzi": "我忘记密码了。",
        "pinyin": "Wǒ wàng jì mì mǎ le.",
        "thaiMeaning": "ฉันลืมรหัสผ่านแล้ว",
        "englishMeaning": "I forgot my password."
      },
      {
        "scenario": "เตือนไม่ให้บอกรหัสผ่าน",
        "hanzi": "不要把密码告诉别人。",
        "pinyin": "Bú yào bǎ mì mǎ gào sù bié rén.",
        "thaiMeaning": "อย่าบอกรหัสผ่านให้คนอื่น",
        "englishMeaning": "Don't tell others your password."
      }
    ]
  },
  {
    "id": "v356",
    "hanzi": "微信",
    "pinyin": "wēixìn",
    "thaiMeaning": "วีแชต (WeChat)",
    "englishMeaning": "WeChat",
    "example": {
      "hanzi": "加微信。",
      "pinyin": "Jiā wēixìn.",
      "thaiMeaning": "เพิ่มแอดวีแชต",
      "englishMeaning": "Add WeChat."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "加微信。",
        "pinyin": "Jiā wēi xìn.",
        "thaiMeaning": "เพิ่มแอดวีแชต",
        "englishMeaning": "Add WeChat."
      },
      {
        "scenario": "ขอเพิ่มเพื่อนในวีแชต",
        "hanzi": "我们加个微信吧。",
        "pinyin": "Wǒ men jiā gè wēi xìn ba.",
        "thaiMeaning": "พวกเราเพิ่มเพื่อนในวีแชตกัน",
        "englishMeaning": "Let’s add WeChat."
      },
      {
        "scenario": "ส่งตำแหน่งทางวีแชต",
        "hanzi": "我用微信把位置发给你。",
        "pinyin": "Wǒ yòng wēi xìn bǎ wèi zhì fā gěi nǐ.",
        "thaiMeaning": "ฉันจะส่งตำแหน่งให้คุณทางวีแชต",
        "englishMeaning": "I'll send you the location via WeChat."
      }
    ]
  },
  {
    "id": "v357",
    "hanzi": "发消息",
    "pinyin": "fā xiāoxi",
    "thaiMeaning": "ส่งข้อความ",
    "englishMeaning": "send message",
    "example": {
      "hanzi": "给你发消息。",
      "pinyin": "Gěi nǐ fā xiāoxi.",
      "thaiMeaning": "ส่งข้อความหาคุณ",
      "englishMeaning": "Send you a message."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "给你发消息。",
        "pinyin": "Gěi nǐ fā xiāo xī.",
        "thaiMeaning": "ส่งข้อความหาคุณ",
        "englishMeaning": "Send you a message."
      },
      {
        "scenario": "ส่งข้อความเมื่อถึงบ้าน",
        "hanzi": "到家后给我发消息。",
        "pinyin": "Dào jiā hòu gěi wǒ fā xiāo xī.",
        "thaiMeaning": "ถึงบ้านแล้วส่งข้อความหาฉัน",
        "englishMeaning": "Send me a message when you get home."
      },
      {
        "scenario": "บอกว่าส่งข้อความไปแล้ว",
        "hanzi": "我刚给经理发消息了。",
        "pinyin": "Wǒ gāng gěi jīng lǐ fā xiāo xī le.",
        "thaiMeaning": "ฉันเพิ่งส่งข้อความหาผู้จัดการ",
        "englishMeaning": "I just sent a message to the manager."
      }
    ]
  },
  {
    "id": "v358",
    "hanzi": "视频",
    "pinyin": "shìpín",
    "thaiMeaning": "วิดีโอ / คลิป",
    "englishMeaning": "video",
    "example": {
      "hanzi": "看短视频。",
      "pinyin": "Kàn duǎn shìpín.",
      "thaiMeaning": "ดูคลิปสั้น",
      "englishMeaning": "Watch the short video."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "看短视频。",
        "pinyin": "Kàn duǎn shì pín.",
        "thaiMeaning": "ดูคลิปสั้น",
        "englishMeaning": "Watch the short video."
      },
      {
        "scenario": "ดูวิดีโอเรียนภาษา",
        "hanzi": "我在看学习中文的视频。",
        "pinyin": "Wǒ zài kàn xué xí zhōng wén de shì pín.",
        "thaiMeaning": "ฉันกำลังดูวิดีโอเรียนภาษาจีน",
        "englishMeaning": "I'm watching videos for learning Chinese."
      },
      {
        "scenario": "ส่งคลิปให้เพื่อน",
        "hanzi": "这个视频很有意思，我发给你。",
        "pinyin": "Zhè ge shì pín hěn yǒu yì sī, wǒ fā gěi nǐ.",
        "thaiMeaning": "วิดีโอนี้น่าสนใจ ฉันจะส่งให้คุณ",
        "englishMeaning": "This video is very interesting, I will send it to you."
      }
    ]
  },
  {
    "id": "v359",
    "hanzi": "银行",
    "pinyin": "yínháng",
    "thaiMeaning": "ธนาคาร",
    "englishMeaning": "bank",
    "example": {
      "hanzi": "去银行。",
      "pinyin": "Qù yínháng.",
      "thaiMeaning": "ไปธนาคาร",
      "englishMeaning": "Go to the bank."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "去银行。",
        "pinyin": "Qù yín háng.",
        "thaiMeaning": "ไปธนาคาร",
        "englishMeaning": "Go to the bank."
      },
      {
        "scenario": "ไปธนาคารถอนเงิน",
        "hanzi": "我要去银行取现金。",
        "pinyin": "Wǒ yào qù yín háng qǔ xiàn jīn.",
        "thaiMeaning": "ฉันจะไปธนาคารถอนเงินสด",
        "englishMeaning": "I'm going to the bank to get cash."
      },
      {
        "scenario": "ถามเวลาธนาคารปิด",
        "hanzi": "银行下午几点关门？",
        "pinyin": "Yín háng xià wǔ jǐ diǎn guān mén?",
        "thaiMeaning": "ธนาคารปิดกี่โมงตอนบ่าย?",
        "englishMeaning": "What time does the bank close in the afternoon?"
      }
    ]
  },
  {
    "id": "v360",
    "hanzi": "邮局",
    "pinyin": "yóujú",
    "thaiMeaning": "ไปรษณีย์",
    "englishMeaning": "post office",
    "example": {
      "hanzi": "寄信到邮局。",
      "pinyin": "Jì xìn dào yóujú.",
      "thaiMeaning": "ส่งจดหมายที่ไปรษณีย์",
      "englishMeaning": "Send the letter to the post office."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "寄信到邮局。",
        "pinyin": "Jì xìn dào yóu jú.",
        "thaiMeaning": "ส่งจดหมายที่ไปรษณีย์",
        "englishMeaning": "Send the letter to the post office."
      },
      {
        "scenario": "ไปไปรษณีย์ส่งของ",
        "hanzi": "我去邮局寄一个包裹。",
        "pinyin": "Wǒ qù yóu jú jì yí gè bāo guǒ.",
        "thaiMeaning": "ฉันจะไปไปรษณีย์ส่งพัสดุ",
        "englishMeaning": "I went to the post office to send a package."
      },
      {
        "scenario": "ถามทางไปไปรษณีย์",
        "hanzi": "附近有邮局吗？",
        "pinyin": "Fù jìn yǒu yóu jú ma?",
        "thaiMeaning": "แถวนี้มีไปรษณีย์ไหม?",
        "englishMeaning": "Is there a post office nearby?"
      }
    ]
  },
  {
    "id": "v361",
    "hanzi": "图书馆",
    "pinyin": "túshūguǎn",
    "thaiMeaning": "ห้องสมุด",
    "englishMeaning": "library",
    "example": {
      "hanzi": "在图书馆。",
      "pinyin": "Zài túshūguǎn.",
      "thaiMeaning": "อยู่ที่ห้องสมุด",
      "englishMeaning": "In the library."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "在图书馆。",
        "pinyin": "Zài tú shū guǎn.",
        "thaiMeaning": "อยู่ที่ห้องสมุด",
        "englishMeaning": "In the library."
      },
      {
        "scenario": "อ่านหนังสือในห้องสมุด",
        "hanzi": "下午我在图书馆看书。",
        "pinyin": "Xià wǔ wǒ zài tú shū guǎn kàn shū.",
        "thaiMeaning": "ตอนบ่ายฉันอ่านหนังสือในห้องสมุด",
        "englishMeaning": "I read in the library in the afternoon."
      },
      {
        "scenario": "เตือนให้เงียบ",
        "hanzi": "图书馆里请保持安静。",
        "pinyin": "Tú shū guǎn lǐ qǐng bǎo chí ān jìng.",
        "thaiMeaning": "ในห้องสมุดกรุณารักษาความเงียบ",
        "englishMeaning": "Please keep quiet in the library."
      }
    ]
  },
  {
    "id": "v362",
    "hanzi": "公园",
    "pinyin": "gōngyuán",
    "thaiMeaning": "สวนสาธารณะ",
    "englishMeaning": "garden",
    "example": {
      "hanzi": "逛公园。",
      "pinyin": "Guàng gōngyuán.",
      "thaiMeaning": "เดินเล่นสวน",
      "englishMeaning": "Go to the park."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "逛公园。",
        "pinyin": "Guàng gōng yuán.",
        "thaiMeaning": "เดินเล่นสวน",
        "englishMeaning": "Go to the park."
      },
      {
        "scenario": "เดินเล่นในสวนหลังอาหาร",
        "hanzi": "晚饭后我们去公园散步。",
        "pinyin": "Wǎn fàn hòu wǒ men qù gōng yuán sàn bù.",
        "thaiMeaning": "หลังอาหารเย็นพวกเราไปเดินเล่นในสวน",
        "englishMeaning": "After dinner we went for a walk in the park."
      },
      {
        "scenario": "พาเด็กไปเล่นในสวน",
        "hanzi": "周末我带孩子去公园玩。",
        "pinyin": "Zhōu mò wǒ dài hái zi qù gōng yuán wán.",
        "thaiMeaning": "สุดสัปดาห์ฉันพาเด็กไปเล่นที่สวน",
        "englishMeaning": "I take my kids to the park on weekends."
      }
    ]
  },
  {
    "id": "v363",
    "hanzi": "电影院",
    "pinyin": "diànyǐngyuàn",
    "thaiMeaning": "โรงภาพยนตร์",
    "englishMeaning": "Cinema",
    "example": {
      "hanzi": "去电影院。",
      "pinyin": "Qù diànyǐngyuàn.",
      "thaiMeaning": "ไปโรงหนัง",
      "englishMeaning": "Go to the cinema."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "去电影院。",
        "pinyin": "Qù diàn yǐng yuàn.",
        "thaiMeaning": "ไปโรงหนัง",
        "englishMeaning": "Go to the cinema."
      },
      {
        "scenario": "นัดเจอกันหน้าโรงหนัง",
        "hanzi": "我们在电影院门口见。",
        "pinyin": "Wǒ men zài diàn yǐng yuàn mén kǒu jiàn.",
        "thaiMeaning": "พวกเราเจอกันหน้าโรงภาพยนตร์",
        "englishMeaning": "Let's meet in front of the cinema."
      },
      {
        "scenario": "ถามว่าโรงหนังอยู่ชั้นไหน",
        "hanzi": "电影院在商场几楼？",
        "pinyin": "Diàn yǐng yuàn zài shāng chǎng jǐ lóu?",
        "thaiMeaning": "โรงภาพยนตร์อยู่ชั้นไหนของห้าง?",
        "englishMeaning": "Which floor of the mall is the cinema on?"
      }
    ]
  },
  {
    "id": "v364",
    "hanzi": "超市",
    "pinyin": "chāoshì",
    "thaiMeaning": "ซูเปอร์มาร์เก็ต",
    "englishMeaning": "supermarket",
    "example": {
      "hanzi": "去超市买菜。",
      "pinyin": "Qù chāoshì mǎi cài.",
      "thaiMeaning": "ไปซูเปอร์ซื้อผัก",
      "englishMeaning": "Go to the supermarket to buy groceries."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "去超市买菜。",
        "pinyin": "Qù chāo shì mǎi cài.",
        "thaiMeaning": "ไปซูเปอร์ซื้อผัก",
        "englishMeaning": "Go to the supermarket to buy groceries."
      },
      {
        "scenario": "ซื้อของใช้ในซูเปอร์มาร์เก็ต",
        "hanzi": "下班后我去超市买东西。",
        "pinyin": "Xià bān hòu wǒ qù chāo shì mǎi dōng xī.",
        "thaiMeaning": "หลังเลิกงานฉันไปซูเปอร์มาร์เก็ตซื้อของ",
        "englishMeaning": "After get off work I go to the supermarket to buy things."
      },
      {
        "scenario": "ถามตำแหน่งซูเปอร์มาร์เก็ต",
        "hanzi": "最近的超市在哪里？",
        "pinyin": "Zuì jìn de chāo shì zài nǎ lǐ?",
        "thaiMeaning": "ซูเปอร์มาร์เก็ตที่ใกล้ที่สุดอยู่ไหน?",
        "englishMeaning": "Where is the nearest supermarket?"
      }
    ]
  },
  {
    "id": "v365",
    "hanzi": "必须",
    "pinyin": "bìxū",
    "thaiMeaning": "ต้อง...ให้ได้ / จำเป็นต้อง",
    "englishMeaning": "must",
    "example": {
      "hanzi": "必须去。",
      "pinyin": "Bìxū qù.",
      "thaiMeaning": "จำเป็นต้องไป",
      "englishMeaning": "Must go."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "必须去。",
        "pinyin": "Bì xū qù.",
        "thaiMeaning": "จำเป็นต้องไป",
        "englishMeaning": "Must go."
      },
      {
        "scenario": "แจ้งกฎว่าต้องแสดงบัตร",
        "hanzi": "进去以前必须出示证件。",
        "pinyin": "Jìn qù yǐ qián bì xū chū shì zhèng jiàn.",
        "thaiMeaning": "ก่อนเข้าไปต้องแสดงเอกสาร",
        "englishMeaning": "You must show your ID before entering."
      },
      {
        "scenario": "เตือนว่าต้องทำงานให้เสร็จวันนี้",
        "hanzi": "这项工作今天必须完成。",
        "pinyin": "Zhè xiàng gōng zuò jīn tiān bì xū wán chéng.",
        "thaiMeaning": "งานนี้วันนี้ต้องทำให้เสร็จ",
        "englishMeaning": "This work must be completed today."
      }
    ]
  },
  {
    "id": "v366",
    "hanzi": "应该",
    "pinyin": "yīnggāi",
    "thaiMeaning": "ควรจะ / สมควร",
    "englishMeaning": "should",
    "example": {
      "hanzi": "应该早睡。",
      "pinyin": "Yīnggāi zǎoshuì.",
      "thaiMeaning": "ควรจะเข้านอนไว",
      "englishMeaning": "Should go to bed early."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "应该早睡。",
        "pinyin": "Yīng gāi zǎo shuì.",
        "thaiMeaning": "ควรจะเข้านอนไว",
        "englishMeaning": "Should go to bed early."
      },
      {
        "scenario": "แนะนำให้พักผ่อน",
        "hanzi": "你太累了，应该早点休息。",
        "pinyin": "Nǐ tài lèi le, yīng gāi zǎo diǎn xiū xi.",
        "thaiMeaning": "คุณเหนื่อยมาก ควรพักเร็วหน่อย",
        "englishMeaning": "You are too tired and should go to bed early."
      },
      {
        "scenario": "คาดว่ารถน่าจะใกล้ถึง",
        "hanzi": "车应该快到了。",
        "pinyin": "Chē yīng gāi kuài dào le.",
        "thaiMeaning": "รถน่าจะใกล้ถึงแล้ว",
        "englishMeaning": "The car should be arriving soon."
      }
    ]
  },
  {
    "id": "v367",
    "hanzi": "决定",
    "pinyin": "juédìng",
    "thaiMeaning": "ตัดสินใจ",
    "englishMeaning": "Decide",
    "example": {
      "hanzi": "做决定。",
      "pinyin": "Zuò juédìng.",
      "thaiMeaning": "ทำการตัดสินใจ",
      "englishMeaning": "Make a decision."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "做决定。",
        "pinyin": "Zuò jué dìng.",
        "thaiMeaning": "ทำการตัดสินใจ",
        "englishMeaning": "Make a decision."
      },
      {
        "scenario": "ตัดสินใจรับงานใหม่",
        "hanzi": "我决定接受这份工作。",
        "pinyin": "Wǒ jué dìng jiē shòu zhè fèn gōng zuò.",
        "thaiMeaning": "ฉันตัดสินใจรับงานนี้",
        "englishMeaning": "I decided to take the job."
      },
      {
        "scenario": "ยังตัดสินใจไม่ได้ว่าจะเลือกอะไร",
        "hanzi": "我还没决定买哪一个。",
        "pinyin": "Wǒ hái méi jué dìng mǎi nǎ yí gè.",
        "thaiMeaning": "ฉันยังไม่ได้ตัดสินใจว่าจะซื้ออันไหน",
        "englishMeaning": "I haven't decided which one to buy yet."
      }
    ]
  },
  {
    "id": "v368",
    "hanzi": "保证",
    "pinyin": "bǎozhèng",
    "thaiMeaning": "รับประกัน / สัญญา",
    "englishMeaning": "ensure",
    "example": {
      "hanzi": "向你保证。",
      "pinyin": "Xiàng nǐ bǎozhèng.",
      "thaiMeaning": "สัญญากับคุณ",
      "englishMeaning": "Guaranteed to you."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "向你保证。",
        "pinyin": "Xiàng nǐ bǎo zhèng.",
        "thaiMeaning": "สัญญากับคุณ",
        "englishMeaning": "Guaranteed to you."
      },
      {
        "scenario": "รับปากว่าจะไม่มาสาย",
        "hanzi": "我保证下次不会迟到。",
        "pinyin": "Wǒ bǎo zhèng xià cì bú huì chí dào.",
        "thaiMeaning": "ฉันรับรองว่าคราวหน้าจะไม่มาสาย",
        "englishMeaning": "I promise I won't be late next time."
      },
      {
        "scenario": "ร้านรับประกันคุณภาพ",
        "hanzi": "我们保证产品质量。",
        "pinyin": "Wǒ men bǎo zhèng chǎn pǐn zhì liàng.",
        "thaiMeaning": "พวกเรารับประกันคุณภาพสินค้า",
        "englishMeaning": "We guarantee product quality."
      }
    ]
  },
  {
    "id": "v369",
    "hanzi": "相信",
    "pinyin": "xiāngxìn",
    "thaiMeaning": "เชื่อ / เชื่อมั่น",
    "englishMeaning": "believe",
    "example": {
      "hanzi": "相信自己。",
      "pinyin": "Xiāngxìn zìjǐ.",
      "thaiMeaning": "เชื่อมั่นในตัวเอง",
      "englishMeaning": "Believe in yourself."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "相信自己。",
        "pinyin": "Xiāng xìn zì jǐ.",
        "thaiMeaning": "เชื่อมั่นในตัวเอง",
        "englishMeaning": "Believe in yourself."
      },
      {
        "scenario": "ให้กำลังใจให้เชื่อตัวเอง",
        "hanzi": "相信自己，你一定可以。",
        "pinyin": "Xiāng xìn zì jǐ, nǐ yí dìng kě yǐ.",
        "thaiMeaning": "เชื่อมั่นในตัวเอง คุณทำได้แน่นอน",
        "englishMeaning": "Believe in yourself, you can do it."
      },
      {
        "scenario": "บอกว่าเชื่อคำพูดของเพื่อน",
        "hanzi": "我相信你说的话。",
        "pinyin": "Wǒ xiāng xìn nǐ shuō de huà.",
        "thaiMeaning": "ฉันเชื่อสิ่งที่คุณพูด",
        "englishMeaning": "I believe what you said."
      }
    ]
  },
  {
    "id": "v370",
    "hanzi": "发现",
    "pinyin": "fāxiàn",
    "thaiMeaning": "ค้นพบ / พบว่า",
    "englishMeaning": "Discover",
    "example": {
      "hanzi": "发现秘密。",
      "pinyin": "Fāxiàn mìmì.",
      "thaiMeaning": "ค้นพบความลับ",
      "englishMeaning": "Discover secrets."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "发现秘密。",
        "pinyin": "Fā xiàn mì mì.",
        "thaiMeaning": "ค้นพบความลับ",
        "englishMeaning": "Discover secrets."
      },
      {
        "scenario": "พบว่าลืมกุญแจ",
        "hanzi": "到门口才发现没带钥匙。",
        "pinyin": "Dào mén kǒu cái fā xiàn méi dài yào shi.",
        "thaiMeaning": "ถึงหน้าประตูจึงพบว่าไม่ได้เอากุญแจมา",
        "englishMeaning": "When I got to the door I realized I didn't have the key."
      },
      {
        "scenario": "ค้นพบร้านอาหารดีๆ",
        "hanzi": "我发现了一家很好吃的饭店。",
        "pinyin": "Wǒ fā xiàn le yì jiā hěn hǎo chī de fàn diàn.",
        "thaiMeaning": "ฉันพบร้านอาหารอร่อยร้านหนึ่ง",
        "englishMeaning": "I found a very delicious restaurant."
      }
    ]
  },
  {
    "id": "v371",
    "hanzi": "改变",
    "pinyin": "gǎibiàn",
    "thaiMeaning": "เปลี่ยนแปลง / ปรับเปลี่ยน",
    "englishMeaning": "Change",
    "example": {
      "hanzi": "改变习惯。",
      "pinyin": "Gǎibiàn xíguàn.",
      "thaiMeaning": "เปลี่ยนนิสัย",
      "englishMeaning": "Change habits."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "改变习惯。",
        "pinyin": "Gǎi biàn xí guàn.",
        "thaiMeaning": "เปลี่ยนนิสัย",
        "englishMeaning": "Change habits."
      },
      {
        "scenario": "เปลี่ยนแผนเพราะอากาศ",
        "hanzi": "因为下雨，我们改变了计划。",
        "pinyin": "Yīn wèi xià yǔ, wǒ men gǎi biàn le jì huà.",
        "thaiMeaning": "เพราะฝนตก พวกเราเปลี่ยนแผน",
        "englishMeaning": "Because of the rain, we changed our plans."
      },
      {
        "scenario": "บอกว่านิสัยเปลี่ยนยาก",
        "hanzi": "改变习惯需要时间。",
        "pinyin": "Gǎi biàn xí guàn xū yào shí jiān.",
        "thaiMeaning": "การเปลี่ยนนิสัยต้องใช้เวลา",
        "englishMeaning": "Changing habits takes time."
      }
    ]
  },
  {
    "id": "v372",
    "hanzi": "清楚",
    "pinyin": "qīngchu",
    "thaiMeaning": "ชัดเจน / แจ่มแจ้ง",
    "englishMeaning": "clear",
    "example": {
      "hanzi": "看清楚。",
      "pinyin": "Kàn qīngchu.",
      "thaiMeaning": "มองเห็นชัดเจน",
      "englishMeaning": "See clearly."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "看清楚。",
        "pinyin": "Kàn qīng chǔ.",
        "thaiMeaning": "มองเห็นชัดเจน",
        "englishMeaning": "See clearly."
      },
      {
        "scenario": "บอกว่าได้ยินไม่ชัด",
        "hanzi": "电话里我听不清楚。",
        "pinyin": "Diàn huà lǐ wǒ tīng bù qīng chǔ.",
        "thaiMeaning": "ทางโทรศัพท์ฉันได้ยินไม่ชัด",
        "englishMeaning": "I couldn't hear clearly on the phone."
      },
      {
        "scenario": "ขอให้อธิบายให้ชัด",
        "hanzi": "请把要求说清楚。",
        "pinyin": "Qǐng bǎ yāo qiú shuō qīng chǔ.",
        "thaiMeaning": "กรุณาอธิบายข้อกำหนดให้ชัดเจน",
        "englishMeaning": "Please make your requirements clear."
      }
    ]
  },
  {
    "id": "v373",
    "hanzi": "了解",
    "pinyin": "liǎojiě",
    "thaiMeaning": "เข้าใจอย่างลึกซึ้ง / รู้จักดี",
    "englishMeaning": "learn",
    "example": {
      "hanzi": "互相了解。",
      "pinyin": "Hùxiāng liǎojiě.",
      "thaiMeaning": "เข้าใจกันและกัน",
      "englishMeaning": "Get to know each other."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "互相了解。",
        "pinyin": "Hù xiāng liǎo jiě.",
        "thaiMeaning": "เข้าใจกันและกัน",
        "englishMeaning": "Get to know each other."
      },
      {
        "scenario": "ต้องการรู้ข้อมูลเพิ่มเติม",
        "hanzi": "我想了解一下公司的情况。",
        "pinyin": "Wǒ xiǎng liǎo jiě yí xià gōng sī de qíng kuàng.",
        "thaiMeaning": "ฉันอยากทราบสถานการณ์ของบริษัทเพิ่มเติม",
        "englishMeaning": "I'd like to know about the company."
      },
      {
        "scenario": "บอกว่ารู้จักเพื่อนคนนี้ดี",
        "hanzi": "我很了解他的性格。",
        "pinyin": "Wǒ hěn liǎo jiě tā de xìng gé.",
        "thaiMeaning": "ฉันเข้าใจนิสัยของเขาดี",
        "englishMeaning": "I know his character very well."
      }
    ]
  },
  {
    "id": "v374",
    "hanzi": "熟悉",
    "pinyin": "shúxī",
    "thaiMeaning": "คุ้นเคย / ชิน",
    "englishMeaning": "familiar",
    "example": {
      "hanzi": "熟悉环境。",
      "pinyin": "Shúxī huánjìng.",
      "thaiMeaning": "คุ้นเคยกับสภาพแวดล้อม",
      "englishMeaning": "Be familiar with the environment."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "熟悉环境。",
        "pinyin": "Shú xī huán jìng.",
        "thaiMeaning": "คุ้นเคยกับสภาพแวดล้อม",
        "englishMeaning": "Be familiar with the environment."
      },
      {
        "scenario": "คุ้นเคยกับเส้นทางไปบริษัท",
        "hanzi": "我对上班的路很熟悉。",
        "pinyin": "Wǒ duì shàng bān de lù hěn shú xī.",
        "thaiMeaning": "ฉันคุ้นเคยกับทางไปทำงานมาก",
        "englishMeaning": "I know my way to work very well."
      },
      {
        "scenario": "เริ่มคุ้นเคยกับงานใหม่",
        "hanzi": "我还不熟悉这个工作。",
        "pinyin": "Wǒ hái bù shú xī zhè ge gōng zuò.",
        "thaiMeaning": "ฉันยังไม่คุ้นเคยกับงานนี้",
        "englishMeaning": "I'm not familiar with this job yet."
      }
    ]
  },
  {
    "id": "v375",
    "hanzi": "精彩",
    "pinyin": "jīngcǎi",
    "thaiMeaning": "ยอดเยี่ยม / สนุกตื่นเต้น",
    "englishMeaning": "Wonderful",
    "example": {
      "hanzi": "非常精彩。",
      "pinyin": "Fēicháng jīngcǎi.",
      "thaiMeaning": "ยอดเยี่ยมมาก",
      "englishMeaning": "Very exciting."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "非常精彩。",
        "pinyin": "Fēi cháng jīng cǎi.",
        "thaiMeaning": "ยอดเยี่ยมมาก",
        "englishMeaning": "Very exciting."
      },
      {
        "scenario": "ชมการแข่งขันที่สนุก",
        "hanzi": "昨天的比赛非常精彩。",
        "pinyin": "Zuó tiān de bǐ sài fēi cháng jīng cǎi.",
        "thaiMeaning": "การแข่งขันเมื่อวานสนุกมาก",
        "englishMeaning": "Yesterday's game was very exciting."
      },
      {
        "scenario": "ชมการแสดงของนักเรียน",
        "hanzi": "学生们的表演很精彩。",
        "pinyin": "Xué shēng men de biǎo yǎn hěn jīng cǎi.",
        "thaiMeaning": "การแสดงของนักเรียนยอดเยี่ยมมาก",
        "englishMeaning": "The students' performance was wonderful."
      }
    ]
  },
  {
    "id": "v376",
    "hanzi": "合适",
    "pinyin": "héshì",
    "thaiMeaning": "เหมาะสม / พอดี",
    "englishMeaning": "suitable",
    "example": {
      "hanzi": "尺码合适。",
      "pinyin": "Chǐmǎ héshì.",
      "thaiMeaning": "ขนาดพอดีเป๊ะ",
      "englishMeaning": "True to size."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "尺码合适。",
        "pinyin": "Chǐ mǎ hé shì.",
        "thaiMeaning": "ขนาดพอดีเป๊ะ",
        "englishMeaning": "True to size."
      },
      {
        "scenario": "ลองเสื้อผ้าที่พอดี",
        "hanzi": "这件衣服大小很合适。",
        "pinyin": "Zhè jiàn yī fu dà xiǎo hěn hé shì.",
        "thaiMeaning": "ขนาดเสื้อตัวนี้พอดีมาก",
        "englishMeaning": "The dress is a perfect size."
      },
      {
        "scenario": "นัดเวลาที่สะดวกทั้งสองฝ่าย",
        "hanzi": "下午三点见面合适吗？",
        "pinyin": "Xià wǔ sān diǎn jiàn miàn hé shì ma?",
        "thaiMeaning": "นัดเจอบ่ายสามโมงเหมาะไหม?",
        "englishMeaning": "Is it appropriate to meet at 3pm?"
      }
    ]
  },
  {
    "id": "v377",
    "hanzi": "客气",
    "pinyin": "kèqi",
    "thaiMeaning": "เกรงใจ",
    "englishMeaning": "polite",
    "example": {
      "hanzi": "别太客气。",
      "pinyin": "Bié tài kèqi.",
      "thaiMeaning": "ไม่ต้องเกรงใจเกินไป",
      "englishMeaning": "Don't be too polite."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "别太客气。",
        "pinyin": "Bié tài kè qì.",
        "thaiMeaning": "ไม่ต้องเกรงใจเกินไป",
        "englishMeaning": "Don't be too polite."
      },
      {
        "scenario": "บอกแขกว่าไม่ต้องเกรงใจ",
        "hanzi": "别客气，多吃一点。",
        "pinyin": "Bié kè qì, duō chī yì diǎn.",
        "thaiMeaning": "ไม่ต้องเกรงใจ กินเพิ่มอีกหน่อย",
        "englishMeaning": "You're welcome, eat more."
      },
      {
        "scenario": "ชมพนักงานว่าพูดสุภาพ",
        "hanzi": "这里的服务员很客气。",
        "pinyin": "Zhè lǐ de fú wù yuán hěn kè qì.",
        "thaiMeaning": "พนักงานบริการที่นี่สุภาพมาก",
        "englishMeaning": "The waiters here are very polite."
      }
    ]
  },
  {
    "id": "v378",
    "hanzi": "辛苦",
    "pinyin": "xīnkǔ",
    "thaiMeaning": "ตรากตรำเหน็ดเหนื่อย",
    "englishMeaning": "Hard",
    "example": {
      "hanzi": "大家辛苦了！",
      "pinyin": "Dàjiā xīnkǔ le!",
      "thaiMeaning": "ทุกคนเหนื่อยกันมากเลย!",
      "englishMeaning": "Thank you for your hard work!"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "大家辛苦了！",
        "pinyin": "Dà jiā xīn kǔ le!",
        "thaiMeaning": "ทุกคนเหนื่อยกันมากเลย!",
        "englishMeaning": "Thank you for your hard work!"
      },
      {
        "scenario": "ขอบคุณทีมหลังเลิกงาน",
        "hanzi": "大家今天辛苦了，早点回家吧。",
        "pinyin": "Dà jiā jīn tiān xīn kǔ le, zǎo diǎn huí jiā ba.",
        "thaiMeaning": "วันนี้ทุกคนเหนื่อยกันแล้ว กลับบ้านเร็วหน่อย",
        "englishMeaning": "Everyone has worked hard today. Go home early."
      },
      {
        "scenario": "เห็นใจเพื่อนที่ทำโอที",
        "hanzi": "你加班到这么晚，太辛苦了。",
        "pinyin": "Nǐ jiā bān dào zhè me wǎn, tài xīn kǔ le.",
        "thaiMeaning": "คุณทำโอทีถึงดึกขนาดนี้ ลำบากมาก",
        "englishMeaning": "It's too hard for you to work overtime so late."
      }
    ]
  },
  {
    "id": "v379",
    "hanzi": "礼物",
    "pinyin": "lǐwù",
    "thaiMeaning": "ของขวัญ",
    "englishMeaning": "Gift",
    "example": {
      "hanzi": "送张礼物。",
      "pinyin": "Sòng zhāng lǐwù.",
      "thaiMeaning": "มอบของขวัญให้",
      "englishMeaning": "Send a gift."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "送张礼物。",
        "pinyin": "Sòng zhāng lǐ wù.",
        "thaiMeaning": "มอบของขวัญให้",
        "englishMeaning": "Send a gift."
      },
      {
        "scenario": "เตรียมของขวัญวันเกิด",
        "hanzi": "我给朋友准备了生日礼物。",
        "pinyin": "Wǒ gěi péng yǒu zhǔn bèi le shēng rì lǐ wù.",
        "thaiMeaning": "ฉันเตรียมของขวัญวันเกิดให้เพื่อน",
        "englishMeaning": "I prepared a birthday present for a friend."
      },
      {
        "scenario": "ขอบคุณหลังได้รับของขวัญ",
        "hanzi": "谢谢你的礼物，我很喜欢。",
        "pinyin": "Xiè xiè nǐ de lǐ wù, wǒ hěn xǐ huan.",
        "thaiMeaning": "ขอบคุณสำหรับของขวัญ ฉันชอบมาก",
        "englishMeaning": "Thank you for your gift, I like it very much."
      }
    ]
  },
  {
    "id": "v380",
    "hanzi": "新闻",
    "pinyin": "xīnwén",
    "thaiMeaning": "ข่าวสาร / ข่าว",
    "englishMeaning": "news",
    "example": {
      "hanzi": "看新闻。",
      "pinyin": "Kàn xīnwén.",
      "thaiMeaning": "ติดตามข่าวสาร",
      "englishMeaning": "Watch the news."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "看新闻。",
        "pinyin": "Kàn xīn wén.",
        "thaiMeaning": "ติดตามข่าวสาร",
        "englishMeaning": "Watch the news."
      },
      {
        "scenario": "ดูข่าวตอนเช้า",
        "hanzi": "我每天早上看新闻。",
        "pinyin": "Wǒ měi tiān zǎo shàng kàn xīn wén.",
        "thaiMeaning": "ฉันดูข่าวทุกเช้า",
        "englishMeaning": "I watch the news every morning."
      },
      {
        "scenario": "เล่าข่าวดีให้เพื่อนฟัง",
        "hanzi": "我有一个好新闻要告诉你。",
        "pinyin": "Wǒ yǒu yí gè hǎo xīn wén yào gào sù nǐ.",
        "thaiMeaning": "ฉันมีข่าวดีจะบอกคุณ",
        "englishMeaning": "I have good news for you."
      }
    ]
  },
  {
    "id": "v381",
    "hanzi": "习惯",
    "pinyin": "xíguàn",
    "thaiMeaning": "ความคุ้นเคย / นิสัย",
    "englishMeaning": "Habit",
    "example": {
      "hanzi": "养成好习惯。",
      "pinyin": "Yǎngchéng hǎo xíguàn.",
      "thaiMeaning": "สร้างนิสัยที่ดี",
      "englishMeaning": "Develop good habits."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "养成好习惯。",
        "pinyin": "Yǎng chéng hǎo xí guàn.",
        "thaiMeaning": "สร้างนิสัยที่ดี",
        "englishMeaning": "Develop good habits."
      },
      {
        "scenario": "เล่านิสัยตื่นเช้า",
        "hanzi": "我已经习惯早起了。",
        "pinyin": "Wǒ yǐ jīng xí guàn zǎo qǐ le.",
        "thaiMeaning": "ฉันชินกับการตื่นเช้าแล้ว",
        "englishMeaning": "I'm used to getting up early."
      },
      {
        "scenario": "แนะนำให้สร้างนิสัยที่ดี",
        "hanzi": "要养成每天运动的习惯。",
        "pinyin": "Yào yǎng chéng měi tiān yùn dòng de xí guàn.",
        "thaiMeaning": "ควรสร้างนิสัยออกกำลังกายทุกวัน",
        "englishMeaning": "Make it a habit to exercise every day."
      }
    ]
  },
  {
    "id": "v382",
    "hanzi": "文化",
    "pinyin": "wénhuà",
    "thaiMeaning": "วัฒนธรรม",
    "englishMeaning": "culture",
    "example": {
      "hanzi": "中国文化。",
      "pinyin": "Zhōngguó wénhuà.",
      "thaiMeaning": "วัฒนธรรมจีน",
      "englishMeaning": "Chinese culture."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "中国文化。",
        "pinyin": "Zhōng guó wén huà.",
        "thaiMeaning": "วัฒนธรรมจีน",
        "englishMeaning": "Chinese culture."
      },
      {
        "scenario": "สนใจเรียนรู้วัฒนธรรมจีน",
        "hanzi": "我对中国文化很感兴趣。",
        "pinyin": "Wǒ duì zhōng guó wén huà hěn gǎn xìng qù.",
        "thaiMeaning": "ฉันสนใจวัฒนธรรมจีนมาก",
        "englishMeaning": "I am very interested in Chinese culture."
      },
      {
        "scenario": "แลกเปลี่ยนวัฒนธรรมระหว่างเพื่อน",
        "hanzi": "旅行能让我们了解不同的文化。",
        "pinyin": "Lǚ xíng néng ràng wǒ men liǎo jiě bù tóng de wén huà.",
        "thaiMeaning": "การเดินทางทำให้เราเข้าใจวัฒนธรรมที่แตกต่าง",
        "englishMeaning": "Traveling allows us to understand different cultures."
      }
    ]
  },
  {
    "id": "v383",
    "hanzi": "历史",
    "pinyin": "lìshǐ",
    "thaiMeaning": "ประวัติศาสตร์",
    "englishMeaning": "history",
    "example": {
      "hanzi": "悠久历史。",
      "pinyin": "Yōujiǔ lìshǐ.",
      "thaiMeaning": "ประวัติศาสตร์ยาวนาน",
      "englishMeaning": "Long history."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "悠久历史。",
        "pinyin": "Yōu jiǔ lì shǐ.",
        "thaiMeaning": "ประวัติศาสตร์ยาวนาน",
        "englishMeaning": "Long history."
      },
      {
        "scenario": "ไปพิพิธภัณฑ์เรียนประวัติศาสตร์",
        "hanzi": "我喜欢在博物馆了解历史。",
        "pinyin": "Wǒ xǐ huan zài bó wù guǎn liǎo jiě lì shǐ.",
        "thaiMeaning": "ฉันชอบเรียนรู้ประวัติศาสตร์ในพิพิธภัณฑ์",
        "englishMeaning": "I love learning about history in museums."
      },
      {
        "scenario": "บอกว่าเมืองนี้มีประวัติยาวนาน",
        "hanzi": "这座城市有很长的历史。",
        "pinyin": "Zhè zuò chéng shì yǒu hěn cháng de lì shǐ.",
        "thaiMeaning": "เมืองนี้มีประวัติศาสตร์ยาวนาน",
        "englishMeaning": "This city has a long history."
      }
    ]
  },
  {
    "id": "v384",
    "hanzi": "环境",
    "pinyin": "huánjìng",
    "thaiMeaning": "สิ่งแวดล้อม",
    "englishMeaning": "environment",
    "example": {
      "hanzi": "优美环境。",
      "pinyin": "Yōuměi huánjìng.",
      "thaiMeaning": "สภาพแวดล้อมสวยงาม",
      "englishMeaning": "Beautiful environment."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "优美环境。",
        "pinyin": "Yōu měi huán jìng.",
        "thaiMeaning": "สภาพแวดล้อมสวยงาม",
        "englishMeaning": "Beautiful environment."
      },
      {
        "scenario": "ชมบรรยากาศที่ทำงาน",
        "hanzi": "这家公司的工作环境很好。",
        "pinyin": "Zhè jiā gōng sī de gōng zuò huán jìng hěn hǎo.",
        "thaiMeaning": "สภาพแวดล้อมการทำงานของบริษัทนี้ดีมาก",
        "englishMeaning": "This company has a great working environment."
      },
      {
        "scenario": "ขอให้ช่วยรักษาสิ่งแวดล้อม",
        "hanzi": "我们应该一起保护环境。",
        "pinyin": "Wǒ men yīng gāi yì qǐ bǎo hù huán jìng.",
        "thaiMeaning": "พวกเราควรร่วมกันรักษาสิ่งแวดล้อม",
        "englishMeaning": "We should protect the environment together."
      }
    ]
  },
  {
    "id": "v385",
    "hanzi": "条件",
    "pinyin": "tiáojiàn",
    "thaiMeaning": "เงื่อนไข / ปัจจัย",
    "englishMeaning": "condition",
    "example": {
      "hanzi": "创造条件。",
      "pinyin": "Chuàngzào tiáojiàn.",
      "thaiMeaning": "สร้างเงื่อนไข",
      "englishMeaning": "Create conditions."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "创造条件。",
        "pinyin": "Chuàng zào tiáo jiàn.",
        "thaiMeaning": "สร้างเงื่อนไข",
        "englishMeaning": "Create conditions."
      },
      {
        "scenario": "อ่านเงื่อนไขก่อนสมัครงาน",
        "hanzi": "这份工作的条件不错。",
        "pinyin": "Zhè fèn gōng zuò de tiáo jiàn bú cuò.",
        "thaiMeaning": "เงื่อนไขของงานนี้ไม่เลว",
        "englishMeaning": "The job conditions are good."
      },
      {
        "scenario": "บอกว่ายังไม่พร้อมเพราะเงื่อนไขไม่พอ",
        "hanzi": "现在条件还不够成熟。",
        "pinyin": "Xiàn zài tiáo jiàn hái bú gòu chéng shú.",
        "thaiMeaning": "ตอนนี้เงื่อนไขยังไม่พร้อมเพียงพอ",
        "englishMeaning": "The conditions are not mature enough now."
      }
    ]
  },
  {
    "id": "v386",
    "hanzi": "机会",
    "pinyin": "jīhuì",
    "thaiMeaning": "โอกาส",
    "englishMeaning": "Chance",
    "example": {
      "hanzi": "抓住机会。",
      "pinyin": "Zhuāzhù jīhuì.",
      "thaiMeaning": "ไขว่คว้าโอกาส",
      "englishMeaning": "Take a chance."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "抓住机会。",
        "pinyin": "Zhuā zhù jī huì.",
        "thaiMeaning": "ไขว่คว้าโอกาส",
        "englishMeaning": "Take a chance."
      },
      {
        "scenario": "ขอบคุณที่ได้รับโอกาสทำงาน",
        "hanzi": "谢谢你给我这个机会。",
        "pinyin": "Xiè xiè nǐ gěi wǒ zhè ge jī huì.",
        "thaiMeaning": "ขอบคุณที่ให้โอกาสนี้แก่ฉัน",
        "englishMeaning": "Thank you for giving me this opportunity."
      },
      {
        "scenario": "ให้กำลังใจให้คว้าโอกาส",
        "hanzi": "机会来了就要抓住。",
        "pinyin": "Jī huì lái le jiù yào zhuā zhù.",
        "thaiMeaning": "เมื่อโอกาสมาถึงก็ต้องคว้าไว้",
        "englishMeaning": "Seize the opportunity when it comes."
      }
    ]
  },
  {
    "id": "v387",
    "hanzi": "能力",
    "pinyin": "nénglì",
    "thaiMeaning": "ความสามารถ",
    "englishMeaning": "ability",
    "example": {
      "hanzi": "提升能力。",
      "pinyin": "Tíngshēng nénglì.",
      "thaiMeaning": "ยกระดับความสามารถ",
      "englishMeaning": "Improve capabilities."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "提升能力。",
        "pinyin": "Tí shēng néng lì.",
        "thaiMeaning": "ยกระดับความสามารถ",
        "englishMeaning": "Improve capabilities."
      },
      {
        "scenario": "ชมความสามารถในการทำงาน",
        "hanzi": "我相信你的工作能力。",
        "pinyin": "Wǒ xiāng xìn nǐ de gōng zuò néng lì.",
        "thaiMeaning": "ฉันเชื่อในความสามารถการทำงานของคุณ",
        "englishMeaning": "I believe in your ability to do your job."
      },
      {
        "scenario": "พัฒนาความสามารถทางภาษา",
        "hanzi": "练习可以提高口语能力。",
        "pinyin": "Liàn xí kě yǐ tí gāo kǒu yǔ néng lì.",
        "thaiMeaning": "การฝึกช่วยพัฒนาความสามารถการพูด",
        "englishMeaning": "Practice improves your speaking skills."
      }
    ]
  },
  {
    "id": "v388",
    "hanzi": "经验",
    "pinyin": "jīngyàn",
    "thaiMeaning": "ประสบการณ์",
    "englishMeaning": "experience",
    "example": {
      "hanzi": "积累经验。",
      "pinyin": "Jīlěi jīngyàn.",
      "thaiMeaning": "สั่งสมประสบการณ์",
      "englishMeaning": "Gain experience."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "积累经验。",
        "pinyin": "Jī lěi jīng yàn.",
        "thaiMeaning": "สั่งสมประสบการณ์",
        "englishMeaning": "Gain experience."
      },
      {
        "scenario": "ถามประสบการณ์ทำงาน",
        "hanzi": "你有这方面的工作经验吗？",
        "pinyin": "Nǐ yǒu zhè fāng miàn de gōng zuò jīng yàn ma?",
        "thaiMeaning": "คุณมีประสบการณ์ทำงานด้านนี้ไหม?",
        "englishMeaning": "Do you have any working experience in this area?"
      },
      {
        "scenario": "เรียนรู้จากประสบการณ์ที่ผ่านมา",
        "hanzi": "我们要从失败中积累经验。",
        "pinyin": "Wǒ men yào cóng shī bài zhōng jī lěi jīng yàn.",
        "thaiMeaning": "พวกเราต้องสั่งสมประสบการณ์จากความล้มเหลว",
        "englishMeaning": "We must gain experience from failures."
      }
    ]
  },
  {
    "id": "v389",
    "hanzi": "态度",
    "pinyin": "tàidu",
    "thaiMeaning": "ทัศนคติ / ท่าที",
    "englishMeaning": "manner",
    "example": {
      "hanzi": "良好态度。",
      "pinyin": "Liánghǎo tàidu.",
      "thaiMeaning": "ทัศนคติที่ดี",
      "englishMeaning": "Good attitude."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "良好态度。",
        "pinyin": "Liáng hǎo tài dù.",
        "thaiMeaning": "ทัศนคติที่ดี",
        "englishMeaning": "Good attitude."
      },
      {
        "scenario": "ชมทัศนคติในการทำงาน",
        "hanzi": "他的工作态度很认真。",
        "pinyin": "Tā de gōng zuò tài dù hěn rèn zhēn.",
        "thaiMeaning": "ทัศนคติในการทำงานของเขาจริงจังมาก",
        "englishMeaning": "His work attitude is very serious."
      },
      {
        "scenario": "เตือนให้พูดด้วยท่าทีที่ดี",
        "hanzi": "请注意你说话的态度。",
        "pinyin": "Qǐng zhù yì nǐ shuō huà de tài dù.",
        "thaiMeaning": "กรุณาระวังท่าทีในการพูด",
        "englishMeaning": "Please pay attention to the manner in which you speak."
      }
    ]
  },
  {
    "id": "v390",
    "hanzi": "信心",
    "pinyin": "xìnxīn",
    "thaiMeaning": "ความมั่นใจ",
    "englishMeaning": "confidence",
    "example": {
      "hanzi": "充满信心。",
      "pinyin": "Chōngmǎn xìnxīn.",
      "thaiMeaning": "เปี่ยมด้วยความมั่นใจ",
      "englishMeaning": "Be confident."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "充满信心。",
        "pinyin": "Chōng mǎn xìn xīn.",
        "thaiMeaning": "เปี่ยมด้วยความมั่นใจ",
        "englishMeaning": "Be confident."
      },
      {
        "scenario": "ให้กำลังใจก่อนนำเสนองาน",
        "hanzi": "你准备得很好，要有信心。",
        "pinyin": "Nǐ zhǔn bèi dé hěn hǎo, yào yǒu xìn xīn.",
        "thaiMeaning": "คุณเตรียมตัวดีมาก ต้องมั่นใจ",
        "englishMeaning": "You are well prepared, have confidence."
      },
      {
        "scenario": "บอกว่าการฝึกทำให้มั่นใจขึ้น",
        "hanzi": "练习以后我更有信心了。",
        "pinyin": "Liàn xí yǐ hòu wǒ gèng yǒu xìn xīn le.",
        "thaiMeaning": "หลังฝึกแล้วฉันมั่นใจขึ้น",
        "englishMeaning": "I feel more confident after practicing."
      }
    ]
  },
  {
    "id": "v391",
    "hanzi": "合作",
    "pinyin": "hézuò",
    "thaiMeaning": "ความร่วมมือ / ร่วมมือ",
    "englishMeaning": "cooperate",
    "example": {
      "hanzi": "愉快合作。",
      "pinyin": "Yúkuài hézuò.",
      "thaiMeaning": "ร่วมมือกันอย่างราบรื่น",
      "englishMeaning": "A pleasure to work with."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "愉快合作。",
        "pinyin": "Yú kuài hé zuò.",
        "thaiMeaning": "ร่วมมือกันอย่างราบรื่น",
        "englishMeaning": "A pleasure to work with."
      },
      {
        "scenario": "เสนอร่วมงานระหว่างบริษัท",
        "hanzi": "希望以后有机会合作。",
        "pinyin": "Xī wàng yǐ hòu yǒu jī huì hé zuò.",
        "thaiMeaning": "หวังว่าในอนาคตจะมีโอกาสร่วมงานกัน",
        "englishMeaning": "Hope to have the opportunity to cooperate in the future."
      },
      {
        "scenario": "ชมทีมที่ทำงานร่วมกันดี",
        "hanzi": "大家合作得非常顺利。",
        "pinyin": "Dà jiā hé zuò dé fēi cháng shùn lì.",
        "thaiMeaning": "ทุกคนร่วมมือกันอย่างราบรื่นมาก",
        "englishMeaning": "Everyone worked together very smoothly."
      }
    ]
  },
  {
    "id": "v392",
    "hanzi": "友谊",
    "pinyin": "yǒuyì",
    "thaiMeaning": "มิตรภาพ",
    "englishMeaning": "friendship",
    "example": {
      "hanzi": "深厚友谊。",
      "pinyin": "Shēnhòu yǒuyì.",
      "thaiMeaning": "มิตรภาพอันลึกซึ้ง",
      "englishMeaning": "Deep friendship."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "深厚友谊。",
        "pinyin": "Shēn hòu yǒu yì.",
        "thaiMeaning": "มิตรภาพอันลึกซึ้ง",
        "englishMeaning": "Deep friendship."
      },
      {
        "scenario": "พูดถึงมิตรภาพที่ยาวนาน",
        "hanzi": "我们的友谊已经十年了。",
        "pinyin": "Wǒ men de yǒu yì yǐ jīng shí nián le.",
        "thaiMeaning": "มิตรภาพของเรามาสิบปีแล้ว",
        "englishMeaning": "Our friendship has been ten years."
      },
      {
        "scenario": "อวยพรให้มิตรภาพคงอยู่",
        "hanzi": "希望我们的友谊一直不变。",
        "pinyin": "Xī wàng wǒ men de yǒu yì yì zhí bú biàn.",
        "thaiMeaning": "หวังว่ามิตรภาพของเราจะไม่เปลี่ยนแปลง",
        "englishMeaning": "I hope our friendship will remain unchanged."
      }
    ]
  },
  {
    "id": "v393",
    "hanzi": "未来",
    "pinyin": "wèilái",
    "thaiMeaning": "อนาคต",
    "englishMeaning": "future",
    "example": {
      "hanzi": "美好的未来。",
      "pinyin": "Měihǎo de wèilái.",
      "thaiMeaning": "อนาคตอันสดใส",
      "englishMeaning": "A bright future."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "美好的未来。",
        "pinyin": "Měi hǎo de wèi lái.",
        "thaiMeaning": "อนาคตอันสดใส",
        "englishMeaning": "A bright future."
      },
      {
        "scenario": "พูดถึงแผนในอนาคต",
        "hanzi": "你对未来有什么计划？",
        "pinyin": "Nǐ duì wèi lái yǒu shén me jì huà?",
        "thaiMeaning": "คุณมีแผนอะไรสำหรับอนาคต?",
        "englishMeaning": "What are your plans for the future?"
      },
      {
        "scenario": "หวังว่าอนาคตจะดีขึ้น",
        "hanzi": "我相信未来会更好。",
        "pinyin": "Wǒ xiāng xìn wèi lái huì gèng hǎo.",
        "thaiMeaning": "ฉันเชื่อว่าอนาคตจะดีขึ้น",
        "englishMeaning": "I believe the future will be better."
      }
    ]
  },
  {
    "id": "v394",
    "hanzi": "梦想",
    "pinyin": "mèngxiǎng",
    "thaiMeaning": "ความฝัน",
    "englishMeaning": "dream",
    "example": {
      "hanzi": "实现梦想。",
      "pinyin": "Shíxiàn mèngxiǎng.",
      "thaiMeaning": "ทำความฝันให้เป็นจริง",
      "englishMeaning": "Make your dreams come true."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "实现梦想。",
        "pinyin": "Shí xiàn mèng xiǎng.",
        "thaiMeaning": "ทำความฝันให้เป็นจริง",
        "englishMeaning": "Make your dreams come true."
      },
      {
        "scenario": "เล่าความฝันในวัยเด็ก",
        "hanzi": "我的梦想是当医生。",
        "pinyin": "Wǒ de mèng xiǎng shì dāng yī shēng.",
        "thaiMeaning": "ความฝันของฉันคือเป็นหมอ",
        "englishMeaning": "My dream is to be a doctor."
      },
      {
        "scenario": "ให้กำลังใจให้ตามความฝัน",
        "hanzi": "不要放弃自己的梦想。",
        "pinyin": "Bú yào fàng qì zì jǐ de mèng xiǎng.",
        "thaiMeaning": "อย่าละทิ้งความฝันของตัวเอง",
        "englishMeaning": "Don't give up on your dreams."
      }
    ]
  },
  {
    "id": "v395",
    "hanzi": "目标",
    "pinyin": "mùbiāo",
    "thaiMeaning": "เป้าหมาย",
    "englishMeaning": "Target",
    "example": {
      "hanzi": "达成目标。",
      "pinyin": "Dáchéng mùbiāo.",
      "thaiMeaning": "บรรลุเป้าหมาย",
      "englishMeaning": "Achieve goals."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "达成目标。",
        "pinyin": "Dá chéng mù biāo.",
        "thaiMeaning": "บรรลุเป้าหมาย",
        "englishMeaning": "Achieve goals."
      },
      {
        "scenario": "ตั้งเป้าหมายการเรียน",
        "hanzi": "我今年的目标是学好中文。",
        "pinyin": "Wǒ jīn nián de mù biāo shì xué hǎo zhōng wén.",
        "thaiMeaning": "เป้าหมายปีนี้ของฉันคือเรียนภาษาจีนให้ดี",
        "englishMeaning": "My goal this year is to learn Chinese well."
      },
      {
        "scenario": "ทำงานเป็นขั้นตอนเพื่อถึงเป้าหมาย",
        "hanzi": "我们离目标越来越近了。",
        "pinyin": "Wǒ men lí mù biāo yuè lái yuè jìn le.",
        "thaiMeaning": "พวกเราเข้าใกล้เป้าหมายมากขึ้นเรื่อยๆ",
        "englishMeaning": "We are getting closer to our goal."
      }
    ]
  },
  {
    "id": "v396",
    "hanzi": "计划",
    "pinyin": "jìhuà",
    "thaiMeaning": "แผนการ",
    "englishMeaning": "plan",
    "example": {
      "hanzi": "制定计划。",
      "pinyin": "Zhìdìng jìhuà.",
      "thaiMeaning": "จัดทำแผนการ",
      "englishMeaning": "Make a plan."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "制定计划。",
        "pinyin": "Zhì dìng jì huà.",
        "thaiMeaning": "จัดทำแผนการ",
        "englishMeaning": "Make a plan."
      },
      {
        "scenario": "ถามแผนวันหยุด",
        "hanzi": "周末你有什么计划？",
        "pinyin": "Zhōu mò nǐ yǒu shén me jì huà?",
        "thaiMeaning": "สุดสัปดาห์คุณมีแผนอะไร?",
        "englishMeaning": "What are your plans for the weekend?"
      },
      {
        "scenario": "เปลี่ยนแผนการเดินทาง",
        "hanzi": "天气不好，我们改变了旅游计划。",
        "pinyin": "Tiān qì bù hǎo, wǒ men gǎi biàn le lǚ yóu jì huà.",
        "thaiMeaning": "อากาศไม่ดี พวกเราเปลี่ยนแผนท่องเที่ยว",
        "englishMeaning": "The weather was bad and we changed our travel plans."
      }
    ]
  },
  {
    "id": "v397",
    "hanzi": "总结",
    "pinyin": "zǒngjié",
    "thaiMeaning": "ข้อสรุป / สรุปผล",
    "englishMeaning": "Summarize",
    "example": {
      "hanzi": "做出总结。",
      "pinyin": "Zuòchū zǒngjié.",
      "thaiMeaning": "สรุปผลงาน",
      "englishMeaning": "Make a summary."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "做出总结。",
        "pinyin": "Zuò chū zǒng jié.",
        "thaiMeaning": "สรุปผลงาน",
        "englishMeaning": "Make a summary."
      },
      {
        "scenario": "สรุปงานหลังประชุม",
        "hanzi": "会议结束前，经理做了总结。",
        "pinyin": "Huì yì jié shù qián, jīng lǐ zuò le zǒng jié.",
        "thaiMeaning": "ก่อนจบประชุม ผู้จัดการได้สรุป",
        "englishMeaning": "Before the meeting ended, the manager made a summary."
      },
      {
        "scenario": "ทบทวนและสรุปสิ่งที่เรียน",
        "hanzi": "学完以后要及时总结。",
        "pinyin": "Xué wán yǐ hòu yào jí shí zǒng jié.",
        "thaiMeaning": "หลังเรียนเสร็จควรสรุปทันที",
        "englishMeaning": "After studying, you should summarize it in time."
      }
    ]
  },
  {
    "id": "v398",
    "hanzi": "进步",
    "pinyin": "jìnbù",
    "thaiMeaning": "ก้าวหน้า / พัฒนา",
    "englishMeaning": "progress",
    "example": {
      "hanzi": "不断进步。",
      "pinyin": "Búduàn jìnbù.",
      "thaiMeaning": "พัฒนาอย่างต่อเนื่อง",
      "englishMeaning": "Keep improving."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "不断进步。",
        "pinyin": "Bú duàn jìn bù.",
        "thaiMeaning": "พัฒนาอย่างต่อเนื่อง",
        "englishMeaning": "Keep improving."
      },
      {
        "scenario": "ชมว่าภาษาจีนพัฒนาขึ้น",
        "hanzi": "你的中文进步很快。",
        "pinyin": "Nǐ de zhōng wén jìn bù hěn kuài.",
        "thaiMeaning": "ภาษาจีนของคุณพัฒนาเร็วมาก",
        "englishMeaning": "Your Chinese is improving very quickly."
      },
      {
        "scenario": "บอกว่าฝึกทุกวันแล้วจะก้าวหน้า",
        "hanzi": "每天练习就会进步。",
        "pinyin": "Měi tiān liàn xí jiù huì jìn bù.",
        "thaiMeaning": "ฝึกทุกวันก็จะพัฒนาขึ้น",
        "englishMeaning": "Practice every day and you will improve."
      }
    ]
  },
  {
    "id": "v399",
    "hanzi": "坚持",
    "pinyin": "jiānchí",
    "thaiMeaning": "ยืนหยัด / ไม่ท้อถอย",
    "englishMeaning": "persist in",
    "example": {
      "hanzi": "坚持到底。",
      "pinyin": "Jiānchí dàodǐ.",
      "thaiMeaning": "ยืนหยัดสู้จนถึงที่สุด",
      "englishMeaning": "Stay the course."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "坚持到底。",
        "pinyin": "Jiān chí dào dǐ.",
        "thaiMeaning": "ยืนหยัดสู้จนถึงที่สุด",
        "englishMeaning": "Stay the course."
      },
      {
        "scenario": "ให้กำลังใจให้ออกกำลังต่อเนื่อง",
        "hanzi": "再累也要坚持运动。",
        "pinyin": "Zài lèi yě yào jiān chí yùn dòng.",
        "thaiMeaning": "ถึงเหนื่อยก็ต้องออกกำลังกายต่อไป",
        "englishMeaning": "No matter how tired you are, you must keep exercising."
      },
      {
        "scenario": "บอกว่าทำต่อมาหนึ่งปีแล้ว",
        "hanzi": "这件事我坚持了一年。",
        "pinyin": "Zhè jiàn shì wǒ jiān chí le yì nián.",
        "thaiMeaning": "ฉันทำเรื่องนี้ต่อเนื่องมาหนึ่งปี",
        "englishMeaning": "I persisted with this for a year."
      }
    ]
  },
  {
    "id": "v400",
    "hanzi": "生活",
    "pinyin": "shēnghuó",
    "thaiMeaning": "การดำเนินชีวิต / ชีวิต",
    "englishMeaning": "Life",
    "example": {
      "hanzi": "热爱生活。",
      "pinyin": "Rè'ài shēnghuó.",
      "thaiMeaning": "รักในการใช้ชีวิต",
      "englishMeaning": "Love life."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "热爱生活。",
        "pinyin": "Rè ài shēng huó.",
        "thaiMeaning": "รักในการใช้ชีวิต",
        "englishMeaning": "Love life."
      },
      {
        "scenario": "ถามชีวิตในเมืองใหม่",
        "hanzi": "你在这里生活得习惯吗？",
        "pinyin": "Nǐ zài zhè lǐ shēng huó dé xí guàn ma?",
        "thaiMeaning": "คุณคุ้นเคยกับการใช้ชีวิตที่นี่ไหม?",
        "englishMeaning": "Are you used to living here?"
      },
      {
        "scenario": "เล่าชีวิตประจำวันเรียบง่าย",
        "hanzi": "我的生活很简单，也很快乐。",
        "pinyin": "Wǒ de shēng huó hěn jiǎn dān, yě hěn kuài lè.",
        "thaiMeaning": "ชีวิตของฉันเรียบง่ายและมีความสุข",
        "englishMeaning": "My life is simple and happy."
      }
    ]
  },
  {
    "id": "v401",
    "hanzi": "幸福",
    "pinyin": "xìngfú",
    "thaiMeaning": "ความสุขสมบูรณ์",
    "englishMeaning": "happiness",
    "example": {
      "hanzi": "生活幸福。",
      "pinyin": "Shēnghuó xìngfú.",
      "thaiMeaning": "ชีวิตเปี่ยมสุข",
      "englishMeaning": "Live happily."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "生活幸福。",
        "pinyin": "Shēng huó xìng fú.",
        "thaiMeaning": "ชีวิตเปี่ยมสุข",
        "englishMeaning": "Live happily."
      },
      {
        "scenario": "อวยพรคู่แต่งงาน",
        "hanzi": "祝你们永远幸福。",
        "pinyin": "Zhù nǐ men yǒng yuǎn xìng fú.",
        "thaiMeaning": "ขอให้พวกคุณมีความสุขตลอดไป",
        "englishMeaning": "I wish you happiness forever."
      },
      {
        "scenario": "พูดถึงความสุขกับครอบครัว",
        "hanzi": "和家人在一起，我觉得很幸福。",
        "pinyin": "Hé jiā rén zài yì qǐ, wǒ jué de hěn xìng fú.",
        "thaiMeaning": "เมื่ออยู่กับครอบครัว ฉันรู้สึกมีความสุขมาก",
        "englishMeaning": "I feel very happy when I am with my family."
      }
    ]
  },
  {
    "id": "v402",
    "hanzi": "希望",
    "pinyin": "xīwàng",
    "thaiMeaning": "ความหวัง / หวังว่า",
    "englishMeaning": "hope",
    "example": {
      "hanzi": "充满希望。",
      "pinyin": "Chōngmǎn xīwàng.",
      "thaiMeaning": "เปี่ยมด้วยความหวัง",
      "englishMeaning": "Full of hope."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "充满希望。",
        "pinyin": "Chōng mǎn xī wàng.",
        "thaiMeaning": "เปี่ยมด้วยความหวัง",
        "englishMeaning": "Full of hope."
      },
      {
        "scenario": "หวังว่าเพื่อนจะหายเร็วๆ",
        "hanzi": "希望你早日康复。",
        "pinyin": "Xī wàng nǐ zǎo rì kāng fù.",
        "thaiMeaning": "หวังว่าคุณจะหายดีเร็วๆ",
        "englishMeaning": "Hope you recover soon."
      },
      {
        "scenario": "พูดถึงสิ่งที่อยากทำในอนาคต",
        "hanzi": "我希望以后能去中国工作。",
        "pinyin": "Wǒ xī wàng yǐ hòu néng qù zhōng guó gōng zuò.",
        "thaiMeaning": "ฉันหวังว่าอนาคตจะได้ไปทำงานที่จีน",
        "englishMeaning": "I hope to work in China in the future."
      }
    ]
  },
  {
    "id": "v403",
    "hanzi": "突然",
    "pinyin": "tūrán",
    "thaiMeaning": "ทันทีทันใด / กะทันหัน",
    "englishMeaning": "Sudden",
    "example": {
      "hanzi": "突然下雨。",
      "pinyin": "Tūrán xiàyǔ.",
      "thaiMeaning": "ฝนตกกะทันหัน",
      "englishMeaning": "It rained suddenly."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "突然下雨。",
        "pinyin": "Tū rán xià yǔ.",
        "thaiMeaning": "ฝนตกกะทันหัน",
        "englishMeaning": "It rained suddenly."
      },
      {
        "scenario": "ไฟดับกะทันหัน",
        "hanzi": "房间里的灯突然灭了。",
        "pinyin": "Fáng jiān lǐ de dēng tū rán miè le.",
        "thaiMeaning": "ไฟในห้องดับกะทันหัน",
        "englishMeaning": "The lights in the room suddenly went out."
      },
      {
        "scenario": "ฝนตกโดยไม่ทันตั้งตัว",
        "hanzi": "刚才突然下起雨来。",
        "pinyin": "Gāng cái tū rán xià qǐ yǔ lái.",
        "thaiMeaning": "เมื่อครู่นี้จู่ๆ ฝนก็ตก",
        "englishMeaning": "It started raining suddenly just now."
      }
    ]
  },
  {
    "id": "v404",
    "hanzi": "其实",
    "pinyin": "qíshí",
    "thaiMeaning": "ความจริงแล้ว / จริงๆ แล้ว",
    "englishMeaning": "actually",
    "example": {
      "hanzi": "其实不难。",
      "pinyin": "Qíshí bù nán.",
      "thaiMeaning": "จริงๆ แล้วไม่ยาก",
      "englishMeaning": "It's actually not difficult."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "其实不难。",
        "pinyin": "Qí shí bù nán.",
        "thaiMeaning": "จริงๆ แล้วไม่ยาก",
        "englishMeaning": "It's actually not difficult."
      },
      {
        "scenario": "บอกความจริงว่าพูดเล่น",
        "hanzi": "其实我刚才是在开玩笑。",
        "pinyin": "Qí shí wǒ gāng cái shì zài kāi wán xiào.",
        "thaiMeaning": "จริงๆ แล้วเมื่อกี้ฉันพูดเล่น",
        "englishMeaning": "Actually I was joking just now."
      },
      {
        "scenario": "บอกว่างานไม่ได้ยากอย่างที่คิด",
        "hanzi": "这个工作其实不难。",
        "pinyin": "Zhè ge gōng zuò qí shí bù nán.",
        "thaiMeaning": "จริงๆ แล้วงานนี้ไม่ยาก",
        "englishMeaning": "This job is actually not difficult."
      }
    ]
  },
  {
    "id": "v405",
    "hanzi": "到底",
    "pinyin": "dàodǐ",
    "thaiMeaning": "สรุปแล้ว / ตกลงว่า",
    "englishMeaning": "in the end",
    "example": {
      "hanzi": "到底去不去？",
      "pinyin": "Dàodǐ qù bú qù?",
      "thaiMeaning": "ตกลงว่าจะไปหรือไม่ไป",
      "englishMeaning": "Should I go or not?"
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "到底去不去？",
        "pinyin": "Dào dǐ qù bu qù?",
        "thaiMeaning": "ตกลงว่าจะไปหรือไม่ไป",
        "englishMeaning": "Should I go or not?"
      },
      {
        "scenario": "เร่งให้ตัดสินใจว่าจะไปหรือไม่",
        "hanzi": "你到底去不去？",
        "pinyin": "Nǐ dào dǐ qù bu qù?",
        "thaiMeaning": "ตกลงคุณจะไปหรือไม่ไป?",
        "englishMeaning": "Are you going or not?"
      },
      {
        "scenario": "ถามหาสาเหตุที่แท้จริง",
        "hanzi": "这到底是怎么回事？",
        "pinyin": "Zhè dào dǐ shì zěn me huí shì?",
        "thaiMeaning": "ตกลงเรื่องนี้เกิดอะไรขึ้นกันแน่?",
        "englishMeaning": "What the hell is going on?"
      }
    ]
  },
  {
    "id": "v406",
    "hanzi": "放心",
    "pinyin": "fàngxīn",
    "thaiMeaning": "วางใจ / สบายใจได้",
    "englishMeaning": "rest assured",
    "example": {
      "hanzi": "请放心。",
      "pinyin": "Qǐng fàngxīn.",
      "thaiMeaning": "โปรดวางใจได้",
      "englishMeaning": "Please feel free to worry."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "请放心。",
        "pinyin": "Qǐng fàng xīn.",
        "thaiMeaning": "โปรดวางใจได้",
        "englishMeaning": "Please feel free to worry."
      },
      {
        "scenario": "บอกครอบครัวว่าไม่ต้องเป็นห่วง",
        "hanzi": "你们放心，我会照顾好自己。",
        "pinyin": "Nǐ men fàng xīn, wǒ huì zhào gù hǎo zì jǐ.",
        "thaiMeaning": "ทุกคนวางใจได้ ฉันจะดูแลตัวเองให้ดี",
        "englishMeaning": "Don't worry, I will take care of myself."
      },
      {
        "scenario": "ยืนยันว่าจะทำงานให้เสร็จ",
        "hanzi": "放心吧，我今天一定完成。",
        "pinyin": "Fàng xīn ba, wǒ jīn tiān yí dìng wán chéng.",
        "thaiMeaning": "วางใจเถอะ วันนี้ฉันจะทำให้เสร็จแน่นอน",
        "englishMeaning": "Don't worry, I will finish it today."
      }
    ]
  },
  {
    "id": "v407",
    "hanzi": "担心",
    "pinyin": "dānxīn",
    "thaiMeaning": "กังวล / เป็นห่วง",
    "englishMeaning": "Worry",
    "example": {
      "hanzi": "别担心。",
      "pinyin": "Bié dānxīn.",
      "thaiMeaning": "ไม่ต้องกังวลไป",
      "englishMeaning": "don’t worry."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "别担心。",
        "pinyin": "Bié dān xīn.",
        "thaiMeaning": "ไม่ต้องกังวลไป",
        "englishMeaning": "don’t worry."
      },
      {
        "scenario": "เป็นห่วงเพื่อนที่กลับดึก",
        "hanzi": "你这么晚还没回家，我很担心。",
        "pinyin": "Nǐ zhè me wǎn hái méi huí jiā, wǒ hěn dān xīn.",
        "thaiMeaning": "ดึกขนาดนี้คุณยังไม่กลับบ้าน ฉันเป็นห่วงมาก",
        "englishMeaning": "I'm worried because you haven't come home so late."
      },
      {
        "scenario": "ปลอบว่าไม่ต้องกังวลเรื่องสอบ",
        "hanzi": "别担心，考试不会太难。",
        "pinyin": "Bié dān xīn, kǎo shì bú huì tài nán.",
        "thaiMeaning": "ไม่ต้องกังวล การสอบจะไม่ยากเกินไป",
        "englishMeaning": "Don't worry, the exam won't be too difficult."
      }
    ]
  },
  {
    "id": "v408",
    "hanzi": "期待",
    "pinyin": "qīdài",
    "thaiMeaning": "เฝ้ารอ / ตั้งตารอ",
    "englishMeaning": "expect",
    "example": {
      "hanzi": "期待见面。",
      "pinyin": "Qīdài jiànmiàn.",
      "thaiMeaning": "ตั้งตารอที่จะได้พบกัน",
      "englishMeaning": "Looking forward to meeting."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "期待见面。",
        "pinyin": "Qī dài jiàn miàn.",
        "thaiMeaning": "ตั้งตารอที่จะได้พบกัน",
        "englishMeaning": "Looking forward to meeting."
      },
      {
        "scenario": "ตั้งตารอการเดินทาง",
        "hanzi": "我很期待下个月的旅行。",
        "pinyin": "Wǒ hěn qī dài xià gè yuè de lǚ xíng.",
        "thaiMeaning": "ฉันตั้งตารอการเดินทางเดือนหน้า",
        "englishMeaning": "I'm looking forward to my trip next month."
      },
      {
        "scenario": "บอกว่าจะรอผลงานใหม่",
        "hanzi": "大家都期待你的新作品。",
        "pinyin": "Dà jiā dōu qī dài nǐ de xīn zuò pǐn.",
        "thaiMeaning": "ทุกคนตั้งตารอผลงานใหม่ของคุณ",
        "englishMeaning": "Everyone is looking forward to your new work."
      }
    ]
  },
  {
    "id": "v409",
    "hanzi": "锻炼",
    "pinyin": "duànliàn",
    "thaiMeaning": "ออกกำลังกาย",
    "englishMeaning": "exercise",
    "example": {
      "hanzi": "锻炼身体。",
      "pinyin": "Duànliàn shēntǐ.",
      "thaiMeaning": "ออกกำลังกายบริหารร่างกาย",
      "englishMeaning": "Exercise."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "锻炼身体。",
        "pinyin": "Duàn liàn shēn tǐ.",
        "thaiMeaning": "ออกกำลังกายบริหารร่างกาย",
        "englishMeaning": "Exercise."
      },
      {
        "scenario": "ออกกำลังกายหลังเลิกงาน",
        "hanzi": "我每天下班后锻炼身体。",
        "pinyin": "Wǒ měi tiān xià bān hòu duàn liàn shēn tǐ.",
        "thaiMeaning": "ฉันออกกำลังกายหลังเลิกงานทุกวัน",
        "englishMeaning": "I exercise every day after get off work."
      },
      {
        "scenario": "แพทย์แนะนำให้ออกกำลังเพิ่ม",
        "hanzi": "医生建议我多锻炼。",
        "pinyin": "Yī shēng jiàn yì wǒ duō duàn liàn.",
        "thaiMeaning": "หมอแนะนำให้ฉันออกกำลังกายมากขึ้น",
        "englishMeaning": "The doctor advised me to exercise more."
      }
    ]
  },
  {
    "id": "v410",
    "hanzi": "检查",
    "pinyin": "jiǎnchá",
    "thaiMeaning": "ตรวจสอบ / เช็ก",
    "englishMeaning": "examine",
    "example": {
      "hanzi": "检查清楚。",
      "pinyin": "Jiǎnchá qīngchu.",
      "thaiMeaning": "ตรวจสอบให้ชัดเจน",
      "englishMeaning": "Check clearly."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "检查清楚。",
        "pinyin": "Jiǎn chá qīng chǔ.",
        "thaiMeaning": "ตรวจสอบให้ชัดเจน",
        "englishMeaning": "Check clearly."
      },
      {
        "scenario": "ตรวจเอกสารก่อนส่ง",
        "hanzi": "发出去以前请再检查一遍。",
        "pinyin": "Fā chū qù yǐ qián qǐng zài jiǎn chá yí biàn.",
        "thaiMeaning": "ก่อนส่งออกไปกรุณาตรวจอีกครั้ง",
        "englishMeaning": "Please check it again before sending it out."
      },
      {
        "scenario": "ไปโรงพยาบาลตรวจร่างกาย",
        "hanzi": "我明天去医院检查身体。",
        "pinyin": "Wǒ míng tiān qù yī yuàn jiǎn chá shēn tǐ.",
        "thaiMeaning": "พรุ่งนี้ฉันจะไปโรงพยาบาลตรวจร่างกาย",
        "englishMeaning": "I'll go to the hospital for a physical check-up tomorrow."
      }
    ]
  },
  {
    "id": "v411",
    "hanzi": "比较",
    "pinyin": "bǐjiào",
    "thaiMeaning": "ค่อนข้าง / เปรียบเทียบ",
    "englishMeaning": "Compare",
    "example": {
      "hanzi": "比较好。",
      "pinyin": "Bǐjiào hǎo.",
      "thaiMeaning": "ค่อนข้างดี",
      "englishMeaning": "Better."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "比较好。",
        "pinyin": "Bǐ jiào hǎo.",
        "thaiMeaning": "ค่อนข้างดี",
        "englishMeaning": "Better."
      },
      {
        "scenario": "บอกว่าอากาศวันนี้ค่อนข้างเย็น",
        "hanzi": "今天比较冷，多穿一点。",
        "pinyin": "Jīn tiān bǐ jiào lěng, duō chuān yì diǎn.",
        "thaiMeaning": "วันนี้ค่อนข้างหนาว ใส่เสื้อเพิ่มหน่อย",
        "englishMeaning": "It's cold today, so wear more clothes."
      },
      {
        "scenario": "เปรียบเทียบสินค้าสองชิ้น",
        "hanzi": "我们比较一下这两个价格。",
        "pinyin": "Wǒ men bǐ jiào yí xià zhè liǎng gè jià gé.",
        "thaiMeaning": "พวกเราเปรียบเทียบราคาสองอันนี้กัน",
        "englishMeaning": "Let’s compare these two prices."
      }
    ]
  },
  {
    "id": "v412",
    "hanzi": "方便",
    "pinyin": "fāngbiàn",
    "thaiMeaning": "สะดวก / สะดวกสบาย",
    "englishMeaning": "convenient",
    "example": {
      "hanzi": "交通方便。",
      "pinyin": "Jiāotōng fāngbiàn.",
      "thaiMeaning": "เดินทางสะดวก",
      "englishMeaning": "Transportation is convenient."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "交通方便。",
        "pinyin": "Jiāo tōng fāng biàn.",
        "thaiMeaning": "เดินทางสะดวก",
        "englishMeaning": "Transportation is convenient."
      },
      {
        "scenario": "ถามเวลาที่สะดวกโทรหา",
        "hanzi": "你什么时候方便接电话？",
        "pinyin": "Nǐ shén me shí hòu fāng biàn jiē diàn huà?",
        "thaiMeaning": "คุณสะดวกรับโทรศัพท์เมื่อไร?",
        "englishMeaning": "When is it convenient for you to answer the phone?"
      },
      {
        "scenario": "ชมว่าที่พักเดินทางสะดวก",
        "hanzi": "这家酒店离车站近，很方便。",
        "pinyin": "Zhè jiā jiǔ diàn lí chē zhàn jìn, hěn fāng biàn.",
        "thaiMeaning": "โรงแรมนี้ใกล้สถานี สะดวกมาก",
        "englishMeaning": "This hotel is close to the station, which is very convenient."
      }
    ]
  },
  {
    "id": "v413",
    "hanzi": "简单",
    "pinyin": "jiǎndān",
    "thaiMeaning": "ง่าย / ไม่ซับซ้อน",
    "englishMeaning": "Simple",
    "example": {
      "hanzi": "问题简单。",
      "pinyin": "Wèntí jiǎndān.",
      "thaiMeaning": "คำถามง่ายๆ",
      "englishMeaning": "The question is simple."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "问题简单。",
        "pinyin": "Wèn tí jiǎn dān.",
        "thaiMeaning": "คำถามง่ายๆ",
        "englishMeaning": "The question is simple."
      },
      {
        "scenario": "บอกว่าอาหารทำง่าย",
        "hanzi": "这道菜做起来很简单。",
        "pinyin": "Zhè dào cài zuò qǐ lái hěn jiǎn dān.",
        "thaiMeaning": "อาหารจานนี้ทำง่ายมาก",
        "englishMeaning": "This dish is very simple to make."
      },
      {
        "scenario": "ขอให้อธิบายสั้นและง่าย",
        "hanzi": "请简单介绍一下自己。",
        "pinyin": "Qǐng jiǎn dān jiè shào yí xià zì jǐ.",
        "thaiMeaning": "กรุณาแนะนำตัวเองแบบสั้นๆ",
        "englishMeaning": "Please briefly introduce yourself."
      }
    ]
  },
  {
    "id": "v414",
    "hanzi": "复杂",
    "pinyin": "fùzá",
    "thaiMeaning": "ซับซ้อน",
    "englishMeaning": "complex",
    "example": {
      "hanzi": "关系复杂。",
      "pinyin": "Guānxi fùzá.",
      "thaiMeaning": "ความสัมพันธ์ซับซ้อน",
      "englishMeaning": "The relationship is complex."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "关系复杂。",
        "pinyin": "Guān xì fù zá.",
        "thaiMeaning": "ความสัมพันธ์ซับซ้อน",
        "englishMeaning": "The relationship is complex."
      },
      {
        "scenario": "บอกว่าปัญหาซับซ้อน",
        "hanzi": "这个问题比想象中复杂。",
        "pinyin": "Zhè ge wèn tí bǐ xiǎng xiàng zhōng fù zá.",
        "thaiMeaning": "ปัญหานี้ซับซ้อนกว่าที่คิด",
        "englishMeaning": "This problem is more complicated than imagined."
      },
      {
        "scenario": "ขอให้อธิบายขั้นตอนที่ยุ่งยาก",
        "hanzi": "手续有点复杂，请慢慢说明。",
        "pinyin": "Shǒu xù yǒu diǎn fù zá, qǐng màn màn shuō míng.",
        "thaiMeaning": "ขั้นตอนค่อนข้างซับซ้อน กรุณาอธิบายช้าๆ",
        "englishMeaning": "The procedure is a bit complicated, please explain it slowly."
      }
    ]
  },
  {
    "id": "v415",
    "hanzi": "重要",
    "pinyin": "zhòngyào",
    "thaiMeaning": "สำคัญ",
    "englishMeaning": "important",
    "example": {
      "hanzi": "很重要。",
      "pinyin": "Hěn zhòngyào.",
      "thaiMeaning": "สำคัญมาก",
      "englishMeaning": "Very important."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "很重要。",
        "pinyin": "Hěn zhòng yào.",
        "thaiMeaning": "สำคัญมาก",
        "englishMeaning": "Very important."
      },
      {
        "scenario": "เตือนว่าการนอนสำคัญ",
        "hanzi": "充足的睡眠很重要。",
        "pinyin": "Chōng zú de shuì mián hěn zhòng yào.",
        "thaiMeaning": "การนอนให้เพียงพอสำคัญมาก",
        "englishMeaning": "Getting enough sleep is important."
      },
      {
        "scenario": "แจ้งว่ามีเรื่องสำคัญจะคุย",
        "hanzi": "我有一件重要的事跟你说。",
        "pinyin": "Wǒ yǒu yí jiàn zhòng yào de shì gēn nǐ shuō.",
        "thaiMeaning": "ฉันมีเรื่องสำคัญจะคุยกับคุณ",
        "englishMeaning": "I have something important to tell you."
      }
    ]
  },
  {
    "id": "v416",
    "hanzi": "主要",
    "pinyin": "zhǔyào",
    "thaiMeaning": "หลัก / สำคัญหลัก",
    "englishMeaning": "main",
    "example": {
      "hanzi": "主要原因。",
      "pinyin": "Zhǔyào yuányīn.",
      "thaiMeaning": "สาเหตุหลัก",
      "englishMeaning": "main reason."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "主要原因。",
        "pinyin": "Zhǔ yào yuán yīn.",
        "thaiMeaning": "สาเหตุหลัก",
        "englishMeaning": "main reason."
      },
      {
        "scenario": "อธิบายสาเหตุหลัก",
        "hanzi": "迟到的主要原因是堵车。",
        "pinyin": "Chí dào de zhǔ yào yuán yīn shì dǔ chē.",
        "thaiMeaning": "สาเหตุหลักที่มาสายคือรถติด",
        "englishMeaning": "The main reason for being late is traffic jam."
      },
      {
        "scenario": "บอกหน้าที่หลักในงาน",
        "hanzi": "我主要负责顾客服务。",
        "pinyin": "Wǒ zhǔ yào fù zé gù kè fú wù.",
        "thaiMeaning": "ฉันรับผิดชอบงานบริการลูกค้าเป็นหลัก",
        "englishMeaning": "I am mainly responsible for customer service."
      }
    ]
  },
  {
    "id": "v417",
    "hanzi": "安全",
    "pinyin": "ānquán",
    "thaiMeaning": "ปลอดภัย",
    "englishMeaning": "Safety",
    "example": {
      "hanzi": "注意安全。",
      "pinyin": "Zhùyì ānquán.",
      "thaiMeaning": "ระมัดระวังความปลอดภัย",
      "englishMeaning": "be safe."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "注意安全。",
        "pinyin": "Zhù yì ān quán.",
        "thaiMeaning": "ระมัดระวังความปลอดภัย",
        "englishMeaning": "be safe."
      },
      {
        "scenario": "เตือนให้คาดเข็มขัด",
        "hanzi": "坐车要系安全带。",
        "pinyin": "Zuò chē yào xì ān quán dài.",
        "thaiMeaning": "นั่งรถต้องคาดเข็มขัดนิรภัย",
        "englishMeaning": "Wear a seat belt when riding in a car."
      },
      {
        "scenario": "บอกครอบครัวว่าถึงอย่างปลอดภัย",
        "hanzi": "我已经安全到家了。",
        "pinyin": "Wǒ yǐ jīng ān quán dào jiā le.",
        "thaiMeaning": "ฉันถึงบ้านอย่างปลอดภัยแล้ว",
        "englishMeaning": "I'm home safely."
      }
    ]
  },
  {
    "id": "v418",
    "hanzi": "危险",
    "pinyin": "wēixiǎn",
    "thaiMeaning": "อันตราย",
    "englishMeaning": "Danger",
    "example": {
      "hanzi": "十分危险。",
      "pinyin": "Shífēn wēixiǎn.",
      "thaiMeaning": "อันตรายอย่างยิ่ง",
      "englishMeaning": "Very dangerous."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "十分危险。",
        "pinyin": "Shí fēn wēi xiǎn.",
        "thaiMeaning": "อันตรายอย่างยิ่ง",
        "englishMeaning": "Very dangerous."
      },
      {
        "scenario": "เตือนไม่ให้เล่นใกล้ถนน",
        "hanzi": "在马路边玩很危险。",
        "pinyin": "Zài mǎ lù biān wán hěn wēi xiǎn.",
        "thaiMeaning": "เล่นข้างถนนอันตรายมาก",
        "englishMeaning": "Playing on the side of the road is dangerous."
      },
      {
        "scenario": "ห้ามเข้าเขตก่อสร้าง",
        "hanzi": "前面危险，请不要进去。",
        "pinyin": "Qián miàn wēi xiǎn, qǐng bú yào jìn qù.",
        "thaiMeaning": "ข้างหน้าอันตราย กรุณาอย่าเข้าไป",
        "englishMeaning": "It's dangerous ahead, please don't go in."
      }
    ]
  },
  {
    "id": "v419",
    "hanzi": "成功",
    "pinyin": "chénggōng",
    "thaiMeaning": "สำเร็จ / ความสำเร็จ",
    "englishMeaning": "success",
    "example": {
      "hanzi": "祝你成功。",
      "pinyin": "Zhù nǐ chénggōng.",
      "thaiMeaning": "ขอให้คุณประสบความสำเร็จ",
      "englishMeaning": "I wish you success."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "祝你成功。",
        "pinyin": "Zhù nǐ chéng gōng.",
        "thaiMeaning": "ขอให้คุณประสบความสำเร็จ",
        "englishMeaning": "I wish you success."
      },
      {
        "scenario": "ฉลองที่โครงการสำเร็จ",
        "hanzi": "我们的项目终于成功了。",
        "pinyin": "Wǒ men de xiàng mù zhōng yú chéng gōng le.",
        "thaiMeaning": "โครงการของเราสำเร็จในที่สุด",
        "englishMeaning": "Our project finally succeeded."
      },
      {
        "scenario": "บอกว่าความสำเร็จต้องอาศัยความพยายาม",
        "hanzi": "成功需要努力和坚持。",
        "pinyin": "Chéng gōng xū yào nǔ lì hé jiān chí.",
        "thaiMeaning": "ความสำเร็จต้องอาศัยความพยายามและความอดทน",
        "englishMeaning": "Success requires hard work and persistence."
      }
    ]
  },
  {
    "id": "v420",
    "hanzi": "失败",
    "pinyin": "shībài",
    "thaiMeaning": "ล้มเหลว / พ่ายแพ้",
    "englishMeaning": "fail",
    "example": {
      "hanzi": "不怕失败。",
      "pinyin": "Búpà shībài.",
      "thaiMeaning": "ไม่กลัวความล้มเหลว",
      "englishMeaning": "Don't be afraid of failure."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "不怕失败。",
        "pinyin": "Bú pà shī bài.",
        "thaiMeaning": "ไม่กลัวความล้มเหลว",
        "englishMeaning": "Don't be afraid of failure."
      },
      {
        "scenario": "ปลอบใจหลังทำไม่สำเร็จ",
        "hanzi": "一次失败不代表永远失败。",
        "pinyin": "Yí cì shī bài bú dài biǎo yǒng yuǎn shī bài.",
        "thaiMeaning": "ล้มเหลวครั้งเดียวไม่ได้หมายว่าจะล้มเหลวตลอดไป",
        "englishMeaning": "Failure once does not mean failure forever."
      },
      {
        "scenario": "วิเคราะห์สาเหตุของความล้มเหลว",
        "hanzi": "我们要找出失败的原因。",
        "pinyin": "Wǒ men yào zhǎo chū shī bài de yuán yīn.",
        "thaiMeaning": "พวกเราต้องหาสาเหตุของความล้มเหลว",
        "englishMeaning": "We need to find out the reasons for failure."
      }
    ]
  },
  {
    "id": "v421",
    "hanzi": "解决",
    "pinyin": "jiějué",
    "thaiMeaning": "แก้ไขปัญหา / จัดการ",
    "englishMeaning": "solve",
    "example": {
      "hanzi": "解决问题。",
      "pinyin": "Jiějué wèntí.",
      "thaiMeaning": "แก้ไขปัญหา",
      "englishMeaning": "Solve the problem."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "解决问题。",
        "pinyin": "Jiě jué wèn tí.",
        "thaiMeaning": "แก้ไขปัญหา",
        "englishMeaning": "Solve the problem."
      },
      {
        "scenario": "ร่วมกันแก้ปัญหา",
        "hanzi": "我们一起想办法解决问题。",
        "pinyin": "Wǒ men yì qǐ xiǎng bàn fǎ jiě jué wèn tí.",
        "thaiMeaning": "พวกเราช่วยกันคิดวิธีแก้ปัญหา",
        "englishMeaning": "Let's figure it out together."
      },
      {
        "scenario": "แจ้งว่าปัญหาได้รับการแก้แล้ว",
        "hanzi": "网络的问题已经解决了。",
        "pinyin": "Wǎng luò de wèn tí yǐ jīng jiě jué le.",
        "thaiMeaning": "ปัญหาอินเทอร์เน็ตแก้ไขแล้ว",
        "englishMeaning": "The network problem has been solved."
      }
    ]
  },
  {
    "id": "v422",
    "hanzi": "完成",
    "pinyin": "wánchéng",
    "thaiMeaning": "ทำเสร็จ / สำเร็จลุล่วง",
    "englishMeaning": "Finish",
    "example": {
      "hanzi": "完成任务。",
      "pinyin": "Wánchéng rènwu.",
      "thaiMeaning": "ทำภารกิจสำเร็จ",
      "englishMeaning": "Complete the task."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "完成任务。",
        "pinyin": "Wán chéng rèn wu.",
        "thaiMeaning": "ทำภารกิจสำเร็จ",
        "englishMeaning": "Complete the task."
      },
      {
        "scenario": "บอกว่าทำงานเสร็จก่อนเวลา",
        "hanzi": "我提前完成了工作。",
        "pinyin": "Wǒ tí qián wán chéng le gōng zuò.",
        "thaiMeaning": "ฉันทำงานเสร็จก่อนเวลา",
        "englishMeaning": "I finished my work ahead of schedule."
      },
      {
        "scenario": "กำหนดให้เสร็จภายในวันศุกร์",
        "hanzi": "请在星期五以前完成。",
        "pinyin": "Qǐng zài xīng qī wǔ yǐ qián wán chéng.",
        "thaiMeaning": "กรุณาทำให้เสร็จก่อนวันศุกร์",
        "englishMeaning": "Please complete by Friday."
      }
    ]
  },
  {
    "id": "v423",
    "hanzi": "同意",
    "pinyin": "tóngyì",
    "thaiMeaning": "เห็นด้วย / ยินยอม",
    "englishMeaning": "agree",
    "example": {
      "hanzi": "完全同意。",
      "pinyin": "Wánquán tóngyì.",
      "thaiMeaning": "เห็นด้วยอย่างยิ่ง",
      "englishMeaning": "Totally agree."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "完全同意。",
        "pinyin": "Wán quán tóng yì.",
        "thaiMeaning": "เห็นด้วยอย่างยิ่ง",
        "englishMeaning": "Totally agree."
      },
      {
        "scenario": "เห็นด้วยกับข้อเสนอ",
        "hanzi": "我同意你的建议。",
        "pinyin": "Wǒ tóng yì nǐ de jiàn yì.",
        "thaiMeaning": "ฉันเห็นด้วยกับคำแนะนำของคุณ",
        "englishMeaning": "I agree with your suggestion."
      },
      {
        "scenario": "ขอความยินยอมก่อนเปลี่ยนแผน",
        "hanzi": "大家同意改变计划吗？",
        "pinyin": "Dà jiā tóng yì gǎi biàn jì huà ma?",
        "thaiMeaning": "ทุกคนเห็นด้วยที่จะเปลี่ยนแผนไหม?",
        "englishMeaning": "Does everyone agree to change the plan?"
      }
    ]
  },
  {
    "id": "v424",
    "hanzi": "反对",
    "pinyin": "fǎnduì",
    "thaiMeaning": "คัดค้าน / ไม่เห็นด้วย",
    "englishMeaning": "be opposed to",
    "example": {
      "hanzi": "表示反对。",
      "pinyin": "Biǎoshì fǎnduì.",
      "thaiMeaning": "แสดงความคัดค้าน",
      "englishMeaning": "expressed objection."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "表示反对。",
        "pinyin": "Biǎo shì fǎn duì.",
        "thaiMeaning": "แสดงความคัดค้าน",
        "englishMeaning": "expressed objection."
      },
      {
        "scenario": "คัดค้านเพราะแผนอันตราย",
        "hanzi": "这个办法太危险，我反对。",
        "pinyin": "Zhè ge bàn fǎ tài wēi xiǎn, wǒ fǎn duì.",
        "thaiMeaning": "วิธีนี้อันตรายเกินไป ฉันคัดค้าน",
        "englishMeaning": "This method is too dangerous and I oppose it."
      },
      {
        "scenario": "บอกว่าไม่มีใครไม่เห็นด้วย",
        "hanzi": "大家都同意，没有人反对。",
        "pinyin": "Dà jiā dōu tóng yì, méi yǒu rén fǎn duì.",
        "thaiMeaning": "ทุกคนเห็นด้วย ไม่มีใครคัดค้าน",
        "englishMeaning": "Everyone agreed and no one objected."
      }
    ]
  },
  {
    "id": "v425",
    "hanzi": "参加",
    "pinyin": "cānjiā",
    "thaiMeaning": "เข้าร่วม / ร่วมงาน",
    "englishMeaning": "join",
    "example": {
      "hanzi": "参加活动。",
      "pinyin": "Cānjiā huódòng.",
      "thaiMeaning": "เข้าร่วมกิจกรรม",
      "englishMeaning": "Attend events."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "参加活动。",
        "pinyin": "Cān jiā huó dòng.",
        "thaiMeaning": "เข้าร่วมกิจกรรม",
        "englishMeaning": "Attend events."
      },
      {
        "scenario": "เข้าร่วมประชุมตอนบ่าย",
        "hanzi": "我下午要参加会议。",
        "pinyin": "Wǒ xià wǔ yào cān jiā huì yì.",
        "thaiMeaning": "ตอนบ่ายฉันต้องเข้าร่วมประชุม",
        "englishMeaning": "I have a meeting to attend in the afternoon."
      },
      {
        "scenario": "ชวนเพื่อนมางานวันเกิด",
        "hanzi": "你愿意参加我的生日会吗？",
        "pinyin": "Nǐ yuàn yì cān jiā wǒ de shēng rì huì ma?",
        "thaiMeaning": "คุณอยากมาร่วมงานวันเกิดฉันไหม?",
        "englishMeaning": "Would you like to attend my birthday party?"
      }
    ]
  },
  {
    "id": "v426",
    "hanzi": "选择",
    "pinyin": "xuǎnzé",
    "thaiMeaning": "เลือก / การเลือก",
    "englishMeaning": "choose",
    "example": {
      "hanzi": "做出选择。",
      "pinyin": "Zuòchū xuǎnzé.",
      "thaiMeaning": "ทำการตัดสินใจเลือก",
      "englishMeaning": "Make a choice."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "做出选择。",
        "pinyin": "Zuò chū xuǎn zé.",
        "thaiMeaning": "ทำการตัดสินใจเลือก",
        "englishMeaning": "Make a choice."
      },
      {
        "scenario": "เลือกระหว่างสองสี",
        "hanzi": "红色和蓝色，你选择哪个？",
        "pinyin": "Hóng sè hé lán sè, nǐ xuǎn zé nǎ gè?",
        "thaiMeaning": "สีแดงกับสีน้ำเงิน คุณเลือกสีไหน?",
        "englishMeaning": "Red or blue, which one do you choose?"
      },
      {
        "scenario": "เคารพการตัดสินใจของเพื่อน",
        "hanzi": "我尊重你的选择。",
        "pinyin": "Wǒ zūn zhòng nǐ de xuǎn zé.",
        "thaiMeaning": "ฉันเคารพการเลือกของคุณ",
        "englishMeaning": "I respect your choice."
      }
    ]
  },
  {
    "id": "v427",
    "hanzi": "安排",
    "pinyin": "ānpái",
    "thaiMeaning": "จัดแจง / วางแผน",
    "englishMeaning": "arrange",
    "example": {
      "hanzi": "安排时间。",
      "pinyin": "Ānpái shíjiān.",
      "thaiMeaning": "จัดสรรเวลา",
      "englishMeaning": "Schedule time."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "安排时间。",
        "pinyin": "ān pái shí jiān.",
        "thaiMeaning": "จัดสรรเวลา",
        "englishMeaning": "Schedule time."
      },
      {
        "scenario": "จัดตารางประชุม",
        "hanzi": "经理安排我们下午开会。",
        "pinyin": "Jīng lǐ ān pái wǒ men xià wǔ kāi huì.",
        "thaiMeaning": "ผู้จัดการจัดให้พวกเราประชุมตอนบ่าย",
        "englishMeaning": "The manager arranged for us to have a meeting in the afternoon."
      },
      {
        "scenario": "ถามแผนวันพรุ่งนี้",
        "hanzi": "你明天有什么安排？",
        "pinyin": "Nǐ míng tiān yǒu shén me ān pái?",
        "thaiMeaning": "พรุ่งนี้คุณมีแผนอะไร?",
        "englishMeaning": "What are your plans for tomorrow?"
      }
    ]
  },
  {
    "id": "v428",
    "hanzi": "影响",
    "pinyin": "yǐngxiǎng",
    "thaiMeaning": "ส่งผลกระทบ / อิทธิพล",
    "englishMeaning": "Influence",
    "example": {
      "hanzi": "产生影响。",
      "pinyin": "Chǎnshēng yǐngxiǎng.",
      "thaiMeaning": "เกิดผลกระทบ",
      "englishMeaning": "Make an impact."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "产生影响。",
        "pinyin": "Chǎn shēng yǐng xiǎng.",
        "thaiMeaning": "เกิดผลกระทบ",
        "englishMeaning": "Make an impact."
      },
      {
        "scenario": "ฝนกระทบการเดินทาง",
        "hanzi": "大雨影响了交通。",
        "pinyin": "Dà yǔ yǐng xiǎng le jiāo tōng.",
        "thaiMeaning": "ฝนตกหนักส่งผลกระทบต่อการจราจร",
        "englishMeaning": "Heavy rain affected traffic."
      },
      {
        "scenario": "บอกว่าเสียงดังรบกวนงาน",
        "hanzi": "外面的声音影响我工作。",
        "pinyin": "Wài miàn de shēng yīn yǐng xiǎng wǒ gōng zuò.",
        "thaiMeaning": "เสียงข้างนอกรบกวนการทำงานของฉัน",
        "englishMeaning": "The noise outside affects my work."
      }
    ]
  },
  {
    "id": "v429",
    "hanzi": "提供",
    "pinyin": "tígōng",
    "thaiMeaning": "จัดหาให้ / บริการให้",
    "englishMeaning": "supply",
    "example": {
      "hanzi": "提供帮助。",
      "pinyin": "Tígōng bāngzhù.",
      "thaiMeaning": "ยื่นมือช่วยเหลือ",
      "englishMeaning": "Offer to help."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "提供帮助。",
        "pinyin": "Tí gōng bāng zhù.",
        "thaiMeaning": "ยื่นมือช่วยเหลือ",
        "englishMeaning": "Offer to help."
      },
      {
        "scenario": "โรงแรมมีบริการรับส่ง",
        "hanzi": "酒店提供机场接送服务。",
        "pinyin": "Jiǔ diàn tí gōng jī chǎng jiē sòng fú wù.",
        "thaiMeaning": "โรงแรมมีบริการรับส่งสนามบิน",
        "englishMeaning": "The hotel provides airport transfer service."
      },
      {
        "scenario": "ขอให้ลูกค้าให้ข้อมูล",
        "hanzi": "请提供您的联系方式。",
        "pinyin": "Qǐng tí gōng nín de lián xì fāng shì.",
        "thaiMeaning": "กรุณาให้ข้อมูลการติดต่อของคุณ",
        "englishMeaning": "Please provide your contact information."
      }
    ]
  },
  {
    "id": "v430",
    "hanzi": "要求",
    "pinyin": "yāoqiú",
    "thaiMeaning": "ข้อเรียกร้อง / กำหนด",
    "englishMeaning": "Require",
    "example": {
      "hanzi": "达到要求。",
      "pinyin": "Dádào yāoqiú.",
      "thaiMeaning": "บรรลุเกณฑ์ที่กำหนด",
      "englishMeaning": "Meet the requirements."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "达到要求。",
        "pinyin": "Dá dào yāo qiú.",
        "thaiMeaning": "บรรลุเกณฑ์ที่กำหนด",
        "englishMeaning": "Meet the requirements."
      },
      {
        "scenario": "อ่านข้อกำหนดของงาน",
        "hanzi": "请先了解工作的要求。",
        "pinyin": "Qǐng xiān liǎo jiě gōng zuò de yāo qiú.",
        "thaiMeaning": "กรุณาทำความเข้าใจข้อกำหนดของงานก่อน",
        "englishMeaning": "Please understand the job requirements first."
      },
      {
        "scenario": "ลูกค้าขอเปลี่ยนห้อง",
        "hanzi": "顾客要求换一个房间。",
        "pinyin": "Gù kè yāo qiú huàn yí gè fáng jiān.",
        "thaiMeaning": "ลูกค้าขอเปลี่ยนห้อง",
        "englishMeaning": "The customer requested a different room."
      }
    ]
  },
  {
    "id": "v431",
    "hanzi": "考虑",
    "pinyin": "kǎolǜ",
    "thaiMeaning": "พิจารณา / ไตร่ตรอง",
    "englishMeaning": "consider",
    "example": {
      "hanzi": "仔细考虑。",
      "pinyin": "Zǐxì kǎolǜ.",
      "thaiMeaning": "พิจารณาอย่างรอบคอบ",
      "englishMeaning": "Think carefully."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "仔细考虑。",
        "pinyin": "Zǐ xì kǎo lǜ.",
        "thaiMeaning": "พิจารณาอย่างรอบคอบ",
        "englishMeaning": "Think carefully."
      },
      {
        "scenario": "ขอเวลาพิจารณาข้อเสนอ",
        "hanzi": "让我考虑一下再回答你。",
        "pinyin": "Ràng wǒ kǎo lǜ yí xià zài huí dá nǐ.",
        "thaiMeaning": "ให้ฉันพิจารณาก่อนแล้วค่อยตอบคุณ",
        "englishMeaning": "Let me think about it before answering you."
      },
      {
        "scenario": "คำนึงถึงความปลอดภัยก่อนตัดสินใจ",
        "hanzi": "我们必须考虑安全问题。",
        "pinyin": "Wǒ men bì xū kǎo lǜ ān quán wèn tí.",
        "thaiMeaning": "พวกเราต้องพิจารณาเรื่องความปลอดภัย",
        "englishMeaning": "We have to consider safety issues."
      }
    ]
  },
  {
    "id": "v432",
    "hanzi": "保护",
    "pinyin": "bǎohù",
    "thaiMeaning": "ปกป้อง / คุ้มครอง",
    "englishMeaning": "Protect",
    "example": {
      "hanzi": "保护环境。",
      "pinyin": "Bǎohù huánjìng.",
      "thaiMeaning": "รักษาสภาพแวดล้อม",
      "englishMeaning": "Protect the environment."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "保护环境。",
        "pinyin": "Bǎo hù huán jìng.",
        "thaiMeaning": "รักษาสภาพแวดล้อม",
        "englishMeaning": "Protect the environment."
      },
      {
        "scenario": "ปกป้องดวงตาจากหน้าจอ",
        "hanzi": "看电脑久了要保护眼睛。",
        "pinyin": "Kàn diàn nǎo jiǔ le yào bǎo hù yǎn jīng.",
        "thaiMeaning": "มองคอมพิวเตอร์นานต้องดูแลดวงตา",
        "englishMeaning": "Protect your eyes if you look at the computer for a long time."
      },
      {
        "scenario": "ร่วมกันรักษาธรรมชาติ",
        "hanzi": "每个人都应该保护环境。",
        "pinyin": "Měi gè rén dōu yīng gāi bǎo hù huán jìng.",
        "thaiMeaning": "ทุกคนควรรักษาสิ่งแวดล้อม",
        "englishMeaning": "Everyone should protect the environment."
      }
    ]
  },
  {
    "id": "v433",
    "hanzi": "尊重",
    "pinyin": "zūnzhòng",
    "thaiMeaning": "ให้เกียรติ / เคารพ",
    "englishMeaning": "respect",
    "example": {
      "hanzi": "互相尊重。",
      "pinyin": "Hùxiāng zūnzhòng.",
      "thaiMeaning": "ให้เกียรติซึ่งกันและกัน",
      "englishMeaning": "Respect each other."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "互相尊重。",
        "pinyin": "Hù xiāng zūn zhòng.",
        "thaiMeaning": "ให้เกียรติซึ่งกันและกัน",
        "englishMeaning": "Respect each other."
      },
      {
        "scenario": "เคารพความคิดเห็นที่ต่างกัน",
        "hanzi": "我们要尊重不同的意见。",
        "pinyin": "Wǒ men yào zūn zhòng bù tóng de yì jiàn.",
        "thaiMeaning": "พวกเราต้องเคารพความคิดเห็นที่แตกต่าง",
        "englishMeaning": "We must respect different opinions."
      },
      {
        "scenario": "สอนเด็กให้เคารพผู้อื่น",
        "hanzi": "孩子应该学会尊重别人。",
        "pinyin": "Hái zi yīng gāi xué huì zūn zhòng bié rén.",
        "thaiMeaning": "เด็กควรเรียนรู้ที่จะเคารพผู้อื่น",
        "englishMeaning": "Children should learn to respect others."
      }
    ]
  },
  {
    "id": "v434",
    "hanzi": "支持",
    "pinyin": "zhīchí",
    "thaiMeaning": "สนับสนุน / ให้กำลังใจ",
    "englishMeaning": "support",
    "example": {
      "hanzi": "大力支持。",
      "pinyin": "Dàlì zhīchí.",
      "thaiMeaning": "ให้การสนับสนุนเต็มที่",
      "englishMeaning": "Great support."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "大力支持。",
        "pinyin": "Dà lì zhī chí.",
        "thaiMeaning": "ให้การสนับสนุนเต็มที่",
        "englishMeaning": "Great support."
      },
      {
        "scenario": "ขอบคุณครอบครัวที่สนับสนุน",
        "hanzi": "谢谢家人一直支持我。",
        "pinyin": "Xiè xiè jiā rén yì zhí zhī chí wǒ.",
        "thaiMeaning": "ขอบคุณครอบครัวที่สนับสนุนฉันเสมอ",
        "englishMeaning": "Thank you to my family for always supporting me."
      },
      {
        "scenario": "บอกว่าเห็นด้วยกับแผนของเพื่อน",
        "hanzi": "这个计划很好，我支持你。",
        "pinyin": "Zhè ge jì huà hěn hǎo, wǒ zhī chí nǐ.",
        "thaiMeaning": "แผนนี้ดีมาก ฉันสนับสนุนคุณ",
        "englishMeaning": "This plan is great and I support you."
      }
    ]
  },
  {
    "id": "v435",
    "hanzi": "分享",
    "pinyin": "fēnxiǎng",
    "thaiMeaning": "แบ่งปัน / แชร์",
    "englishMeaning": "share",
    "example": {
      "hanzi": "分享快乐。",
      "pinyin": "Fēnxiǎng kuàilè.",
      "thaiMeaning": "แบ่งปันความสุข",
      "englishMeaning": "Share happiness."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "分享快乐。",
        "pinyin": "Fēn xiǎng kuài lè.",
        "thaiMeaning": "แบ่งปันความสุข",
        "englishMeaning": "Share happiness."
      },
      {
        "scenario": "แบ่งขนมให้เพื่อน",
        "hanzi": "我们一起分享这个蛋糕吧。",
        "pinyin": "Wǒ men yì qǐ fēn xiǎng zhè ge dàn gāo ba.",
        "thaiMeaning": "พวกเราแบ่งเค้กนี้กินด้วยกัน",
        "englishMeaning": "Let's share this cake together."
      },
      {
        "scenario": "เล่าประสบการณ์ให้ทีมฟัง",
        "hanzi": "他跟大家分享了工作经验。",
        "pinyin": "Tā gēn dà jiā fēn xiǎng le gōng zuò jīng yàn.",
        "thaiMeaning": "เขาแบ่งปันประสบการณ์ทำงานกับทุกคน",
        "englishMeaning": "He shared his work experience with everyone."
      }
    ]
  },
  {
    "id": "v436",
    "hanzi": "祝贺",
    "pinyin": "zhùhè",
    "thaiMeaning": "แสดงความยินดี",
    "englishMeaning": "congratulate",
    "example": {
      "hanzi": "热烈祝贺。",
      "pinyin": "Rèliè zhùhè.",
      "thaiMeaning": "ขอแสดงความยินดีอย่างยิ่ง",
      "englishMeaning": "Warm congratulations."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "热烈祝贺。",
        "pinyin": "Rè liè zhù hè.",
        "thaiMeaning": "ขอแสดงความยินดีอย่างยิ่ง",
        "englishMeaning": "Warm congratulations."
      },
      {
        "scenario": "แสดงความยินดีที่ได้งานใหม่",
        "hanzi": "祝贺你找到新工作！",
        "pinyin": "Zhù hè nǐ zhǎo dào xīn gōng zuò!",
        "thaiMeaning": "ยินดีด้วยที่คุณได้งานใหม่!",
        "englishMeaning": "Congratulations on your new job!"
      },
      {
        "scenario": "แสดงความยินดีที่สอบผ่าน",
        "hanzi": "祝贺你通过考试。",
        "pinyin": "Zhù hè nǐ tōng guò kǎo shì.",
        "thaiMeaning": "ยินดีด้วยที่คุณสอบผ่าน",
        "englishMeaning": "Congratulations on passing the exam."
      }
    ]
  },
  {
    "id": "v451",
    "hanzi": "规定",
    "pinyin": "guīdìng",
    "thaiMeaning": "ข้อบังคับ / กฎเกณฑ์",
    "englishMeaning": "Regulation",
    "example": {
      "hanzi": "遵守规定。",
      "pinyin": "Zūnshǒu guīdìng.",
      "thaiMeaning": "ปฏิบัติตามข้อบังคับ",
      "englishMeaning": "Follow the rules."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "遵守规定。",
        "pinyin": "Zūn shǒu guī dìng.",
        "thaiMeaning": "ปฏิบัติตามข้อบังคับ",
        "englishMeaning": "Follow the rules."
      },
      {
        "scenario": "อธิบายกฎห้ามสูบบุหรี่",
        "hanzi": "这里规定不能吸烟。",
        "pinyin": "Zhè lǐ guī dìng bù néng xī yān.",
        "thaiMeaning": "ที่นี่มีกฎว่าห้ามสูบบุหรี่",
        "englishMeaning": "Smoking is prohibited here."
      },
      {
        "scenario": "เตือนให้ปฏิบัติตามข้อบังคับ",
        "hanzi": "所有员工都要遵守规定。",
        "pinyin": "Suǒ yǒu yuán gōng dōu yào zūn shǒu guī dìng.",
        "thaiMeaning": "พนักงานทุกคนต้องปฏิบัติตามข้อบังคับ",
        "englishMeaning": "All employees are required to comply with the regulations."
      }
    ]
  },
  {
    "id": "v453",
    "hanzi": "整理",
    "pinyin": "zhěnglǐ",
    "thaiMeaning": "จัดระเบียบ / เก็บของ",
    "englishMeaning": "tidy",
    "example": {
      "hanzi": "整理房间。",
      "pinyin": "Zhěnglǐ fángjiān.",
      "thaiMeaning": "จัดระเบียบห้องพัก",
      "englishMeaning": "Tidy up the room."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "整理房间。",
        "pinyin": "Zhěng lǐ fáng jiān.",
        "thaiMeaning": "จัดระเบียบห้องพัก",
        "englishMeaning": "Tidy up the room."
      },
      {
        "scenario": "จัดโต๊ะทำงานก่อนกลับ",
        "hanzi": "下班前我整理了桌子。",
        "pinyin": "Xià bān qián wǒ zhěng lǐ le zhuō zi.",
        "thaiMeaning": "ก่อนเลิกงานฉันจัดโต๊ะเรียบร้อย",
        "englishMeaning": "I tidied my desk before leaving get off work."
      },
      {
        "scenario": "เก็บกระเป๋าก่อนเดินทาง",
        "hanzi": "我正在整理旅行的行李。",
        "pinyin": "Wǒ zhèng zài zhěng lǐ lǚ xíng de xíng li.",
        "thaiMeaning": "ฉันกำลังจัดกระเป๋าสำหรับเดินทาง",
        "englishMeaning": "I'm packing for my trip."
      }
    ]
  },
  {
    "id": "v454",
    "hanzi": "打扫",
    "pinyin": "dǎsǎo",
    "thaiMeaning": "ทำความสะอาด / กวาด",
    "englishMeaning": "clean",
    "example": {
      "hanzi": "打扫卫生。",
      "pinyin": "Dǎsǎo wèishēng.",
      "thaiMeaning": "ทำความสะอาด",
      "englishMeaning": "Cleaning."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "打扫卫生。",
        "pinyin": "Dǎ sǎo wèi shēng.",
        "thaiMeaning": "ทำความสะอาด",
        "englishMeaning": "Cleaning."
      },
      {
        "scenario": "ทำความสะอาดบ้านวันหยุด",
        "hanzi": "周末我们一起打扫房间。",
        "pinyin": "Zhōu mò wǒ men yì qǐ dǎ sǎo fáng jiān.",
        "thaiMeaning": "สุดสัปดาห์พวกเราทำความสะอาดห้องด้วยกัน",
        "englishMeaning": "We clean the room together on weekends."
      },
      {
        "scenario": "แบ่งหน้าที่กวาดพื้น",
        "hanzi": "我来打扫地板，你擦桌子。",
        "pinyin": "Wǒ lái dǎ sǎo dì bǎn, nǐ cā zhuō zi.",
        "thaiMeaning": "ฉันจะกวาดพื้น คุณเช็ดโต๊ะ",
        "englishMeaning": "I'll sweep the floor and you clean the table."
      }
    ]
  },
  {
    "id": "v455",
    "hanzi": "修理",
    "pinyin": "xiūlǐ",
    "thaiMeaning": "ซ่อมแซม",
    "englishMeaning": "repair",
    "example": {
      "hanzi": "修理电脑。",
      "pinyin": "Xiūlǐ diànnǎo.",
      "thaiMeaning": "ซ่อมคอมพิวเตอร์",
      "englishMeaning": "Repair computers."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "修理电脑。",
        "pinyin": "Xiū lǐ diàn nǎo.",
        "thaiMeaning": "ซ่อมคอมพิวเตอร์",
        "englishMeaning": "Repair computers."
      },
      {
        "scenario": "นำคอมพิวเตอร์ไปซ่อม",
        "hanzi": "电脑坏了，我拿去修理。",
        "pinyin": "Diàn nǎo huài le, wǒ ná qù xiū lǐ.",
        "thaiMeaning": "คอมพิวเตอร์เสีย ฉันเอาไปซ่อม",
        "englishMeaning": "The computer is broken, I'll take it to be repaired."
      },
      {
        "scenario": "ช่างกำลังซ่อมแอร์",
        "hanzi": "工人正在修理空调。",
        "pinyin": "Gōng rén zhèng zài xiū lǐ kōng tiáo.",
        "thaiMeaning": "ช่างกำลังซ่อมเครื่องปรับอากาศ",
        "englishMeaning": "Workers are repairing the air conditioner."
      }
    ]
  },
  {
    "id": "v456",
    "hanzi": "适应",
    "pinyin": "shìyìng",
    "thaiMeaning": "ปรับตัว / คุ้นชิน",
    "englishMeaning": "adapt",
    "example": {
      "hanzi": "适应生活。",
      "pinyin": "Shìyìng shēnghuó.",
      "thaiMeaning": "ปรับตัวกับการใช้ชีวิต",
      "englishMeaning": "Adapt to life."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "适应生活。",
        "pinyin": "Shì yìng shēng huó.",
        "thaiMeaning": "ปรับตัวกับการใช้ชีวิต",
        "englishMeaning": "Adapt to life."
      },
      {
        "scenario": "ปรับตัวกับงานใหม่",
        "hanzi": "我还在适应新的工作。",
        "pinyin": "Wǒ hái zài shì yìng xīn de gōng zuò.",
        "thaiMeaning": "ฉันยังปรับตัวกับงานใหม่อยู่",
        "englishMeaning": "I'm still adjusting to my new job."
      },
      {
        "scenario": "เริ่มชินกับอากาศหนาว",
        "hanzi": "住了一段时间，我适应了这里的天气。",
        "pinyin": "Zhù le yí duàn shí jiān, wǒ shì yìng le zhè lǐ de tiān qì.",
        "thaiMeaning": "อยู่มาระยะหนึ่ง ฉันชินกับอากาศที่นี่แล้ว",
        "englishMeaning": "After living here for a while, I got used to the weather here."
      }
    ]
  },
  {
    "id": "v457",
    "hanzi": "流行",
    "pinyin": "liúxíng",
    "thaiMeaning": "เป็นที่นิยม / ฮิต",
    "englishMeaning": "Popularity",
    "example": {
      "hanzi": "非常流行。",
      "pinyin": "Fēicháng liúxíng.",
      "thaiMeaning": "เป็นที่นิยมอย่างยิ่ง",
      "englishMeaning": "Very popular."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "非常流行。",
        "pinyin": "Fēi cháng liú xíng.",
        "thaiMeaning": "เป็นที่นิยมอย่างยิ่ง",
        "englishMeaning": "Very popular."
      },
      {
        "scenario": "พูดถึงเพลงที่กำลังดัง",
        "hanzi": "这首歌最近很流行。",
        "pinyin": "Zhè shǒu gē zuì jìn hěn liú xíng.",
        "thaiMeaning": "เพลงนี้ช่วงนี้กำลังเป็นที่นิยม",
        "englishMeaning": "This song is very popular recently."
      },
      {
        "scenario": "ถามแฟชั่นที่กำลังนิยม",
        "hanzi": "今年流行什么颜色？",
        "pinyin": "Jīn nián liú xíng shén me yán sè?",
        "thaiMeaning": "ปีนี้สีอะไรเป็นที่นิยม?",
        "englishMeaning": "What colors are popular this year?"
      }
    ]
  },
  {
    "id": "v458",
    "hanzi": "聚会",
    "pinyin": "jùhuì",
    "thaiMeaning": "งานสังสรรค์ / รวมตัว",
    "englishMeaning": "reunion",
    "example": {
      "hanzi": "参加聚会。",
      "pinyin": "Cānjiā jùhuì.",
      "thaiMeaning": "เข้าร่วมงานสังสรรค์",
      "englishMeaning": "Attend a party."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "参加聚会。",
        "pinyin": "Cān jiā jù huì.",
        "thaiMeaning": "เข้าร่วมงานสังสรรค์",
        "englishMeaning": "Attend a party."
      },
      {
        "scenario": "ชวนเพื่อนมางานรวมตัว",
        "hanzi": "周末我们家有个聚会。",
        "pinyin": "Zhōu mò wǒ men jiā yǒu gè jù huì.",
        "thaiMeaning": "สุดสัปดาห์ที่บ้านเรามีงานรวมตัว",
        "englishMeaning": "There is a party at our house on the weekend."
      },
      {
        "scenario": "บอกว่าได้พบเพื่อนเก่าในงาน",
        "hanzi": "我在聚会上见到了老朋友。",
        "pinyin": "Wǒ zài jù huì shàng jiàn dào le lǎo péng yǒu.",
        "thaiMeaning": "ฉันได้พบเพื่อนเก่าในงานสังสรรค์",
        "englishMeaning": "I met old friends at a party."
      }
    ]
  },
  {
    "id": "v459",
    "hanzi": "开玩笑",
    "pinyin": "kāi wánxiào",
    "thaiMeaning": "พูดเล่น / ล้อเล่น",
    "englishMeaning": "joke",
    "example": {
      "hanzi": "开个玩笑。",
      "pinyin": "Kāi gè wánxiào.",
      "thaiMeaning": "พูดเล่นเฉยๆ",
      "englishMeaning": "Just kidding."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "开个玩笑。",
        "pinyin": "Kāi gè wán xiào.",
        "thaiMeaning": "พูดเล่นเฉยๆ",
        "englishMeaning": "Just kidding."
      },
      {
        "scenario": "บอกว่าเมื่อครู่พูดเล่น",
        "hanzi": "别当真，我只是开玩笑。",
        "pinyin": "Bié dàng zhēn, wǒ zhǐ shì kāi wán xiào.",
        "thaiMeaning": "อย่าคิดจริงจัง ฉันแค่พูดเล่น",
        "englishMeaning": "Don't take it seriously, I'm just kidding."
      },
      {
        "scenario": "เตือนว่าอย่าล้อเรื่องนี้",
        "hanzi": "这件事不能拿来开玩笑。",
        "pinyin": "Zhè jiàn shì bù néng ná lái kāi wán xiào.",
        "thaiMeaning": "เรื่องนี้เอามาล้อเล่นไม่ได้",
        "englishMeaning": "This is no joke."
      }
    ]
  },
  {
    "id": "v460",
    "hanzi": "商量",
    "pinyin": "shāngliang",
    "thaiMeaning": "หารือ / ปรึกษา",
    "englishMeaning": "discuss",
    "example": {
      "hanzi": "互相商量。",
      "pinyin": "Hùxiāng shāngliang.",
      "thaiMeaning": "ปรึกษาหารือกัน",
      "englishMeaning": "Discuss with each other."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "互相商量。",
        "pinyin": "Hù xiāng shāng liáng.",
        "thaiMeaning": "ปรึกษาหารือกัน",
        "englishMeaning": "Discuss with each other."
      },
      {
        "scenario": "ปรึกษาครอบครัวก่อนตัดสินใจ",
        "hanzi": "我要先跟家人商量一下。",
        "pinyin": "Wǒ yào xiān gēn jiā rén shāng liáng yí xià.",
        "thaiMeaning": "ฉันต้องปรึกษาครอบครัวก่อน",
        "englishMeaning": "I need to discuss it with my family first."
      },
      {
        "scenario": "ชวนทีมคุยเรื่องแผนใหม่",
        "hanzi": "我们商量一下明天的安排。",
        "pinyin": "Wǒ men shāng liáng yí xià míng tiān de ān pái.",
        "thaiMeaning": "พวกเราปรึกษาเรื่องแผนพรุ่งนี้กัน",
        "englishMeaning": "Let's discuss the arrangements for tomorrow."
      }
    ]
  },
  {
    "id": "v461",
    "hanzi": "建议",
    "pinyin": "jiànyì",
    "thaiMeaning": "ข้อเสนอแนะ / แนะนำ",
    "englishMeaning": "suggestion",
    "example": {
      "hanzi": "提出建议。",
      "pinyin": "Tíchū jiànyì.",
      "thaiMeaning": "ยื่นข้อเสนอแนะ",
      "englishMeaning": "Make suggestions."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "提出建议。",
        "pinyin": "Tí chū jiàn yì.",
        "thaiMeaning": "ยื่นข้อเสนอแนะ",
        "englishMeaning": "Make suggestions."
      },
      {
        "scenario": "ขอคำแนะนำจากเพื่อน",
        "hanzi": "你有什么好建议吗？",
        "pinyin": "Nǐ yǒu shén me hǎo jiàn yì ma?",
        "thaiMeaning": "คุณมีคำแนะนำดีๆ ไหม?",
        "englishMeaning": "Do you have any good suggestions?"
      },
      {
        "scenario": "แพทย์แนะนำให้นอนเร็ว",
        "hanzi": "医生建议我早点睡觉。",
        "pinyin": "Yī shēng jiàn yì wǒ zǎo diǎn shuì jiào.",
        "thaiMeaning": "หมอแนะนำให้ฉันนอนเร็วขึ้น",
        "englishMeaning": "The doctor advised me to go to bed early."
      }
    ]
  },
  {
    "id": "v462",
    "hanzi": "道歉",
    "pinyin": "dàoqiàn",
    "thaiMeaning": "กล่าวขอโทษ",
    "englishMeaning": "Apologize",
    "example": {
      "hanzi": "诚恳道歉。",
      "pinyin": "Chéngkěn dàoqiàn.",
      "thaiMeaning": "กล่าวขอโทษอย่างจริงใจ",
      "englishMeaning": "Sincere apology."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "诚恳道歉。",
        "pinyin": "Chéng kěn dào qiàn.",
        "thaiMeaning": "กล่าวขอโทษอย่างจริงใจ",
        "englishMeaning": "Sincere apology."
      },
      {
        "scenario": "กล่าวขอโทษที่ทำผิด",
        "hanzi": "我为刚才的话向你道歉。",
        "pinyin": "Wǒ wèi gāng cái de huà xiàng nǐ dào qiàn.",
        "thaiMeaning": "ฉันขอโทษคุณสำหรับคำพูดเมื่อครู่",
        "englishMeaning": "I apologize to you for what I just said."
      },
      {
        "scenario": "บอกว่าควรขอโทษเพื่อน",
        "hanzi": "你应该向他道歉。",
        "pinyin": "Nǐ yīng gāi xiàng tā dào qiàn.",
        "thaiMeaning": "คุณควรขอโทษเขา",
        "englishMeaning": "You should apologize to him."
      }
    ]
  },
  {
    "id": "v463",
    "hanzi": "表扬",
    "pinyin": "biǎoyáng",
    "thaiMeaning": "ชมเชย / ชื่นชม",
    "englishMeaning": "praise",
    "example": {
      "hanzi": "受到表扬。",
      "pinyin": "Shòudào biǎoyáng.",
      "thaiMeaning": "ได้รับการชมเชย",
      "englishMeaning": "Be praised."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "受到表扬。",
        "pinyin": "Shòu dào biǎo yáng.",
        "thaiMeaning": "ได้รับการชมเชย",
        "englishMeaning": "Be praised."
      },
      {
        "scenario": "ครูชมเชยนักเรียน",
        "hanzi": "老师表扬了认真学习的学生。",
        "pinyin": "Lǎo shī biǎo yáng le rèn zhēn xué xí de xué shēng.",
        "thaiMeaning": "ครูชมเชยนักเรียนที่ตั้งใจเรียน",
        "englishMeaning": "The teacher praised the students who studied hard."
      },
      {
        "scenario": "หัวหน้าชมผลงานทีม",
        "hanzi": "经理在会上表扬了我们。",
        "pinyin": "Jīng lǐ zài huì shàng biǎo yáng le wǒ men.",
        "thaiMeaning": "ผู้จัดการชมเชยพวกเราในที่ประชุม",
        "englishMeaning": "The manager praised us at the meeting."
      }
    ]
  },
  {
    "id": "v464",
    "hanzi": "批评",
    "pinyin": "pīpíng",
    "thaiMeaning": "วิพากษ์วิจารณ์ / ตักเตือน",
    "englishMeaning": "criticize",
    "example": {
      "hanzi": "接受批评。",
      "pinyin": "Jiēshòu pīpíng.",
      "thaiMeaning": "น้อมรับคำตักเตือน",
      "englishMeaning": "Accept criticism."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "接受批评。",
        "pinyin": "Jiē shòu pī píng.",
        "thaiMeaning": "น้อมรับคำตักเตือน",
        "englishMeaning": "Accept criticism."
      },
      {
        "scenario": "หัวหน้าตักเตือนเรื่องมาสาย",
        "hanzi": "老板批评他经常迟到。",
        "pinyin": "Lǎo bǎn pī píng tā jīng cháng chí dào.",
        "thaiMeaning": "เจ้านายตักเตือนเขาที่มาสายบ่อย",
        "englishMeaning": "His boss criticized him for being late for work."
      },
      {
        "scenario": "รับฟังคำวิจารณ์เพื่อพัฒนา",
        "hanzi": "我们应该认真听取批评。",
        "pinyin": "Wǒ men yīng gāi rèn zhēn tīng qǔ pī píng.",
        "thaiMeaning": "พวกเราควรรับฟังคำวิจารณ์อย่างจริงจัง",
        "englishMeaning": "We should listen carefully to criticism."
      }
    ]
  },
  {
    "id": "v465",
    "hanzi": "积累",
    "pinyin": "jīlěi",
    "thaiMeaning": "สะสม / สั่งสม",
    "englishMeaning": "accumulation",
    "example": {
      "hanzi": "积累知识。",
      "pinyin": "Jīlěi zhīshi.",
      "thaiMeaning": "สั่งสมความรู้",
      "englishMeaning": "Accumulate knowledge."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "积累知识。",
        "pinyin": "Jī lěi zhī shi.",
        "thaiMeaning": "สั่งสมความรู้",
        "englishMeaning": "Accumulate knowledge."
      },
      {
        "scenario": "สะสมประสบการณ์จากงาน",
        "hanzi": "工作几年后，他积累了很多经验。",
        "pinyin": "Gōng zuò jǐ nián hòu, tā jī lěi le hěn duō jīng yàn.",
        "thaiMeaning": "หลังทำงานหลายปี เขาสั่งสมประสบการณ์มาก",
        "englishMeaning": "After working for several years, he has accumulated a lot of experience."
      },
      {
        "scenario": "สะสมคำศัพท์ทุกวัน",
        "hanzi": "每天学习可以积累词汇。",
        "pinyin": "Měi tiān xué xí kě yǐ jī lěi cí huì.",
        "thaiMeaning": "การเรียนทุกวันช่วยสะสมคำศัพท์",
        "englishMeaning": "Studying every day builds vocabulary."
      }
    ]
  },
  {
    "id": "v466",
    "hanzi": "提高",
    "pinyin": "tígāo",
    "thaiMeaning": "ยกระดับ / พัฒนาขึ้น",
    "englishMeaning": "improve",
    "example": {
      "hanzi": "提高水平。",
      "pinyin": "Tígāo shuǐpíng.",
      "thaiMeaning": "ยกระดับฝีมือ",
      "englishMeaning": "Level up."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "提高水平。",
        "pinyin": "Tí gāo shuǐ píng.",
        "thaiMeaning": "ยกระดับฝีมือ",
        "englishMeaning": "Level up."
      },
      {
        "scenario": "ฝึกพูดเพื่อพัฒนาภาษาจีน",
        "hanzi": "多说可以提高中文水平。",
        "pinyin": "Duō shuō kě yǐ tí gāo zhōng wén shuǐ píng.",
        "thaiMeaning": "พูดให้มากช่วยพัฒนาระดับภาษาจีน",
        "englishMeaning": "Speaking more can improve your Chinese proficiency."
      },
      {
        "scenario": "บริษัทปรับปรุงคุณภาพบริการ",
        "hanzi": "公司正在提高服务质量。",
        "pinyin": "Gōng sī zhèng zài tí gāo fú wù zhì liàng.",
        "thaiMeaning": "บริษัทกำลังยกระดับคุณภาพบริการ",
        "englishMeaning": "The company is improving its service quality."
      }
    ]
  },
  {
    "id": "v467",
    "hanzi": "降低",
    "pinyin": "jiàngdī",
    "thaiMeaning": "ลดต่ำลง",
    "englishMeaning": "reduce",
    "example": {
      "hanzi": "降低标准。",
      "pinyin": "Jiàngdī biāozhǔn.",
      "thaiMeaning": "ลดมาตรฐานลง",
      "englishMeaning": "Lower your standards."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "降低标准。",
        "pinyin": "Jiàng dī biāo zhǔn.",
        "thaiMeaning": "ลดมาตรฐานลง",
        "englishMeaning": "Lower your standards."
      },
      {
        "scenario": "ร้านลดราคาสินค้า",
        "hanzi": "商店降低了商品价格。",
        "pinyin": "Shāng diàn jiàng dī le shāng pǐn jià gé.",
        "thaiMeaning": "ร้านค้าลดราคาสินค้า",
        "englishMeaning": "Stores lowered their prices."
      },
      {
        "scenario": "ออกกำลังเพื่อลดความเสี่ยง",
        "hanzi": "运动可以降低生病的风险。",
        "pinyin": "Yùn dòng kě yǐ jiàng dī shēng bìng de fēng xiǎn.",
        "thaiMeaning": "การออกกำลังช่วยลดความเสี่ยงในการป่วย",
        "englishMeaning": "Exercise can reduce your risk of getting sick."
      }
    ]
  },
  {
    "id": "v468",
    "hanzi": "增加",
    "pinyin": "zēngjiā",
    "thaiMeaning": "เพิ่มขึ้น",
    "englishMeaning": "Increase",
    "example": {
      "hanzi": "增加收入。",
      "pinyin": "Zēngjiā shōurù.",
      "thaiMeaning": "เพิ่มรายได้",
      "englishMeaning": "Increase revenue."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "增加收入。",
        "pinyin": "Zēng jiā shōu rù.",
        "thaiMeaning": "เพิ่มรายได้",
        "englishMeaning": "Increase revenue."
      },
      {
        "scenario": "เพิ่มจำนวนพนักงาน",
        "hanzi": "公司明年要增加员工。",
        "pinyin": "Gōng sī míng nián yào zēng jiā yuán gōng.",
        "thaiMeaning": "ปีหน้าบริษัทจะเพิ่มพนักงาน",
        "englishMeaning": "The company will add employees next year."
      },
      {
        "scenario": "ฝนทำให้ระดับน้ำสูงขึ้น",
        "hanzi": "大雨让河水增加了很多。",
        "pinyin": "Dà yǔ ràng hé shuǐ zēng jiā le hěn duō.",
        "thaiMeaning": "ฝนหนักทำให้ระดับน้ำเพิ่มขึ้นมาก",
        "englishMeaning": "The heavy rain increased the river water a lot."
      }
    ]
  },
  {
    "id": "v469",
    "hanzi": "减少",
    "pinyin": "jiǎnshǎo",
    "thaiMeaning": "ลดลง",
    "englishMeaning": "reduce",
    "example": {
      "hanzi": "减少开支。",
      "pinyin": "Jiǎnshǎo kāīzhī.",
      "thaiMeaning": "ลดค่าใช้จ่าย",
      "englishMeaning": "Reduce expenses."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "减少开支。",
        "pinyin": "Jiǎn shǎo kāi zhī.",
        "thaiMeaning": "ลดค่าใช้จ่าย",
        "englishMeaning": "Reduce expenses."
      },
      {
        "scenario": "ลดการใช้น้ำตาล",
        "hanzi": "为了健康，我要减少吃糖。",
        "pinyin": "Wèi le jiàn kāng, wǒ yào jiǎn shǎo chī táng.",
        "thaiMeaning": "เพื่อสุขภาพ ฉันต้องลดการกินน้ำตาล",
        "englishMeaning": "For the sake of health, I will eat less sugar."
      },
      {
        "scenario": "การทำงานออนไลน์ลดเวลาเดินทาง",
        "hanzi": "在家工作可以减少路上的时间。",
        "pinyin": "Zài jiā gōng zuò kě yǐ jiǎn shǎo lù shang de shí jiān.",
        "thaiMeaning": "ทำงานที่บ้านช่วยลดเวลาเดินทาง",
        "englishMeaning": "Working from home reduces time spent on the road."
      }
    ]
  },
  {
    "id": "v470",
    "hanzi": "丰富",
    "pinyin": "fēngfù",
    "thaiMeaning": "อุดมสมบูรณ์ / หลากหลาย",
    "englishMeaning": "Rich",
    "example": {
      "hanzi": "经验丰富。",
      "pinyin": "Jīngyàn fēngfù.",
      "thaiMeaning": "ประสบการณ์โชกโชน",
      "englishMeaning": "Experienced."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "经验丰富。",
        "pinyin": "Jīng yàn fēng fù.",
        "thaiMeaning": "ประสบการณ์โชกโชน",
        "englishMeaning": "Experienced."
      },
      {
        "scenario": "ชมอาหารที่มีให้เลือกหลากหลาย",
        "hanzi": "这家饭店的菜很丰富。",
        "pinyin": "Zhè jiā fàn diàn de cài hěn fēng fù.",
        "thaiMeaning": "อาหารของร้านนี้หลากหลายมาก",
        "englishMeaning": "The food in this restaurant is very rich."
      },
      {
        "scenario": "การเดินทางเพิ่มประสบการณ์",
        "hanzi": "旅游可以丰富我们的生活。",
        "pinyin": "Lǚ yóu kě yǐ fēng fù wǒ men de shēng huó.",
        "thaiMeaning": "การท่องเที่ยวช่วยเพิ่มความหลากหลายให้ชีวิต",
        "englishMeaning": "Travel can enrich our lives."
      }
    ]
  },
  {
    "id": "v471",
    "hanzi": "热闹",
    "pinyin": "rènao",
    "thaiMeaning": "คึกคัก / สนุกสนาน",
    "englishMeaning": "lively",
    "example": {
      "hanzi": "非常热闹。",
      "pinyin": "Fēicháng rènao.",
      "thaiMeaning": "คึกคักเป็นพิเศษ",
      "englishMeaning": "Very lively."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "非常热闹。",
        "pinyin": "Fēi cháng rè nào.",
        "thaiMeaning": "คึกคักเป็นพิเศษ",
        "englishMeaning": "Very lively."
      },
      {
        "scenario": "บรรยายตลาดช่วงเย็น",
        "hanzi": "晚上的市场非常热闹。",
        "pinyin": "Wǎn shàng de shì chǎng fēi cháng rè nào.",
        "thaiMeaning": "ตลาดตอนเย็นคึกคักมาก",
        "englishMeaning": "The market is very lively at night."
      },
      {
        "scenario": "งานเลี้ยงมีคนมากและสนุก",
        "hanzi": "聚会上人很多，很热闹。",
        "pinyin": "Jù huì shàng rén hěn duō, hěn rè nào.",
        "thaiMeaning": "งานเลี้ยงมีคนมากและคึกคัก",
        "englishMeaning": "There were many people at the party and it was very lively."
      }
    ]
  },
  {
    "id": "v472",
    "hanzi": "安静",
    "pinyin": "ānjìng",
    "thaiMeaning": "เงียบสงบ",
    "englishMeaning": "Quiet",
    "example": {
      "hanzi": "保持安静。",
      "pinyin": "Bǎochí ānjìng.",
      "thaiMeaning": "รักษาความเงียบ",
      "englishMeaning": "Keep quiet."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "保持安静。",
        "pinyin": "Bǎo chí ān jìng.",
        "thaiMeaning": "รักษาความเงียบ",
        "englishMeaning": "Keep quiet."
      },
      {
        "scenario": "ขอให้เงียบในห้องสมุด",
        "hanzi": "图书馆里请保持安静。",
        "pinyin": "Tú shū guǎn lǐ qǐng bǎo chí ān jìng.",
        "thaiMeaning": "ในห้องสมุดกรุณารักษาความเงียบ",
        "englishMeaning": "Please keep quiet in the library."
      },
      {
        "scenario": "เลือกห้องที่เงียบกว่า",
        "hanzi": "我想要一个安静的房间。",
        "pinyin": "Wǒ xiǎng yào yí gè ān jìng de fáng jiān.",
        "thaiMeaning": "ฉันต้องการห้องที่เงียบ",
        "englishMeaning": "I want a quiet room."
      }
    ]
  },
  {
    "id": "v473",
    "hanzi": "干净",
    "pinyin": "gānjìng",
    "thaiMeaning": "สะอาด",
    "englishMeaning": "clean",
    "example": {
      "hanzi": "打扫干净。",
      "pinyin": "Dǎsǎo gānjìng.",
      "thaiMeaning": "ทำความสะอาดสะอ้าน",
      "englishMeaning": "Clean up."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "打扫干净。",
        "pinyin": "Dǎ sǎo gān jìng.",
        "thaiMeaning": "ทำความสะอาดสะอ้าน",
        "englishMeaning": "Clean up."
      },
      {
        "scenario": "ชมว่าห้องพักสะอาด",
        "hanzi": "酒店的房间很干净。",
        "pinyin": "Jiǔ diàn de fáng jiān hěn gān jìng.",
        "thaiMeaning": "ห้องพักของโรงแรมสะอาดมาก",
        "englishMeaning": "The hotel room was very clean."
      },
      {
        "scenario": "เตือนให้ล้างมือสะอาด",
        "hanzi": "吃饭前把手洗干净。",
        "pinyin": "Chī fàn qián bǎ shǒu xǐ gān jìng.",
        "thaiMeaning": "ก่อนกินข้าวล้างมือให้สะอาด",
        "englishMeaning": "Wash your hands before eating."
      }
    ]
  },
  {
    "id": "v474",
    "hanzi": "脏",
    "pinyin": "zāng",
    "thaiMeaning": "สกปรก",
    "englishMeaning": "dirty",
    "example": {
      "hanzi": "衣服脏了。",
      "pinyin": "Yīfu zāng le.",
      "thaiMeaning": "เสื้อผ้าเปรอะเปื้อน",
      "englishMeaning": "The clothes are dirty."
    },
    "examples": [
      {
        "scenario": "การใช้คำแบบสั้นและตรงความหมาย",
        "hanzi": "衣服脏了。",
        "pinyin": "Yī fu zāng le.",
        "thaiMeaning": "เสื้อผ้าเปรอะเปื้อน",
        "englishMeaning": "The clothes are dirty."
      },
      {
        "scenario": "บอกว่าเสื้อเปื้อน",
        "hanzi": "你的衣服脏了，换一件吧。",
        "pinyin": "Nǐ de yī fu zāng le, huàn yí jiàn ba.",
        "thaiMeaning": "เสื้อของคุณเปื้อนแล้ว เปลี่ยนตัวใหม่เถอะ",
        "englishMeaning": "Your clothes are dirty, change them."
      },
      {
        "scenario": "เตือนไม่ให้นั่งพื้นสกปรก",
        "hanzi": "地上很脏，不要坐。",
        "pinyin": "Dì shàng hěn zāng, bú yào zuò.",
        "thaiMeaning": "พื้นสกปรกมาก อย่านั่ง",
        "englishMeaning": "The floor is dirty, don't sit on it."
      }
    ]
  },
  {
    "id": "v475",
    "hanzi": "充电",
    "pinyin": "chōngdiàn",
    "thaiMeaning": "ชาร์จแบตเตอรี่",
    "englishMeaning": "Charge",
    "example": {
      "hanzi": "手机没电了，我要充电。",
      "pinyin": "Shǒujī méi diàn le, wǒ yào chōngdiàn.",
      "thaiMeaning": "มือถือแบตหมดแล้ว ฉันต้องชาร์จแบต",
      "englishMeaning": "My phone is out of battery, I need to charge it."
    },
    "examples": [
      {
        "scenario": "ถามหายืมสายชาร์จ",
        "hanzi": "请问你有充电线吗？",
        "pinyin": "Qǐngwèn nǐ yǒu chōngdiàn xiàn ma?",
        "thaiMeaning": "ขอถามหน่อยครับ คุณมีสายชาร์จไหม?",
        "englishMeaning": "Do you have a charging cable?"
      },
      {
        "scenario": "มองหาปลั๊กชาร์จไฟ",
        "hanzi": "这里有地方可以充电吗？",
        "pinyin": "Zhèlǐ yǒu dìfang kěyǐ chōngdiàn ma?",
        "thaiMeaning": "ตรงนี้มีที่ให้ชาร์จไฟไหม?",
        "englishMeaning": "Is there a place to charge here?"
      }
    ]
  },
  {
    "id": "v476",
    "hanzi": "拍照",
    "pinyin": "pāizhào",
    "thaiMeaning": "ถ่ายรูป",
    "englishMeaning": "Photograph",
    "example": {
      "hanzi": "我们可以拍照吗？",
      "pinyin": "Wǒmen kěyǐ pāizhào ma?",
      "thaiMeaning": "พวกเราถ่ายรูปได้ไหม?",
      "englishMeaning": "Can we take photos?"
    },
    "examples": [
      {
        "scenario": "วานคนอื่นถ่ายรูปให้",
        "hanzi": "请帮我们拍一张照，谢谢！",
        "pinyin": "Qǐng bāng wǒmen pāi yì zhāng zhào, xièxie!",
        "thaiMeaning": "ช่วยถ่ายรูปให้พวกเราสักรูปหน่อยครับ ขอบคุณครับ!",
        "englishMeaning": "Please take a photo for us, thank you!"
      },
      {
        "scenario": "ชมว่าถ่ายสวย",
        "hanzi": "这里的风景太美了，快拍照！",
        "pinyin": "Zhèlǐ de fēngjǐng tài měi le, kuài pāizhào!",
        "thaiMeaning": "วิวที่นี่สวยมาก รีบถ่ายรูปเร็ว!",
        "englishMeaning": "The scenery here is so beautiful, take photos quickly!"
      }
    ]
  },
  {
    "id": "v477",
    "hanzi": "点外卖",
    "pinyin": "diǎn wàimài",
    "thaiMeaning": "สั่งอาหารดิลิเวอรี",
    "englishMeaning": "Order takeout",
    "example": {
      "hanzi": "晚上我们点外卖吧。",
      "pinyin": "Wǎnshang wǒmen diǎn wàimài ba.",
      "thaiMeaning": "ตอนเย็นพวกเราสั่งเดลิเวอรีกันเถอะ",
      "englishMeaning": "Let's order takeout tonight."
    },
    "examples": [
      {
        "scenario": "ไม่อยากออกไปข้างนอก",
        "hanzi": "今天太累了，不想出去，点外卖吧。",
        "pinyin": "Jīntiān tài lèi le, bù xiǎng chūqù, diǎn wàimài ba.",
        "thaiMeaning": "วันนี้เหนื่อยมาก ไม่อยากออกไปข้างนอก สั่งเดลิเวอรีเถอะ",
        "englishMeaning": "I'm too tired today and don't want to go out. Let's order takeout."
      }
    ]
  },
  {
    "id": "v478",
    "hanzi": "扫码",
    "pinyin": "sǎo mǎ",
    "thaiMeaning": "สแกนคิวอาร์โค้ด",
    "englishMeaning": "Scan code",
    "example": {
      "hanzi": "请扫码付款。",
      "pinyin": "Qǐng sǎo mǎ fùkuǎn.",
      "thaiMeaning": "กรุณาสแกนโค้ดจ่ายเงิน",
      "englishMeaning": "Please scan the QR code to pay."
    },
    "examples": [
      {
        "scenario": "จ่ายเงินร้านค้า",
        "hanzi": "可以扫码支付吗？",
        "pinyin": "Kěyǐ sǎo mǎ zhīfù ma?",
        "thaiMeaning": "สแกนโค้ดชำระเงินได้ไหมครับ?",
        "englishMeaning": "Can I scan the QR code to pay?"
      }
    ]
  },
  {
    "id": "v479",
    "hanzi": "结账",
    "pinyin": "jiézhàng",
    "thaiMeaning": "เช็กบิล / คิดเงิน",
    "englishMeaning": "Bill, please",
    "example": {
      "hanzi": "服务员，买单结账！",
      "pinyin": "Fúwùyuán, mǎidān jiézhàng!",
      "thaiMeaning": "บริกรครับ เช็กบิลคิดเงินด้วยครับ!",
      "englishMeaning": "Waiter, pay the bill!"
    },
    "examples": [
      {
        "scenario": "เรียกเช็กบิลร้านอาหาร",
        "hanzi": "一共多少钱？我们要结账。",
        "pinyin": "Yīgòng duōshao qián? Wǒmen yào jiézhàng.",
        "thaiMeaning": "ทั้งหมดเท่าไหร่ครับ? พวกเราจะเช็กบิล",
        "englishMeaning": "How much is the total? We have to check out."
      }
    ]
  },
  {
    "id": "v480",
    "hanzi": "打车",
    "pinyin": "dǎchē",
    "thaiMeaning": "เรียกรถแท็กซี่ / เรียกรถ",
    "englishMeaning": "Take a taxi",
    "example": {
      "hanzi": "时间来不及了，我们打车吧。",
      "pinyin": "Shíjiān láibují le, wǒmen dǎchē ba.",
      "thaiMeaning": "เวลาไม่ทันแล้ว พวกเราเรียกรถกันเถอะ",
      "englishMeaning": "There's no time, let's take a taxi."
    },
    "examples": [
      {
        "scenario": "เรียกแท็กซี่ผ่านแอป",
        "hanzi": "在手机上打车很方便。",
        "pinyin": "Zài shǒujī shang dǎchē hěn fāngbiàn.",
        "thaiMeaning": "เรียกรถบนมือถือสะดวกมาก",
        "englishMeaning": "It is very convenient to hail a taxi on your mobile phone."
      }
    ]
  },
  {
    "id": "v481",
    "hanzi": "信号",
    "pinyin": "xìnhào",
    "thaiMeaning": "สัญญาณโทรศัพท์ / เน็ต",
    "englishMeaning": "Signal",
    "example": {
      "hanzi": "这里的信号不太好。",
      "pinyin": "Zhèlǐ de xìnhào bù tài hǎo.",
      "thaiMeaning": "สัญญาณตรงนี้ไม่ค่อยดีเลย",
      "englishMeaning": "The signal here is not very good."
    },
    "examples": [
      {
        "scenario": "สายหลุดเพราะเน็ตไม่ดี",
        "hanzi": "刚好没信号，断线了。",
        "pinyin": "Gānghǎo méi xìnhào, duànxiàn le.",
        "thaiMeaning": "พอดีไม่มีสัญญาณ สายเลยหลุด",
        "englishMeaning": "There just happened to be no signal and the line was disconnected."
      }
    ]
  },
  {
    "id": "v482",
    "hanzi": "密码",
    "pinyin": "mìmǎ",
    "thaiMeaning": "รหัสผ่าน",
    "englishMeaning": "password",
    "example": {
      "hanzi": "请问Wi-Fi密码是什么？",
      "pinyin": "Qǐngwèn Wi-Fi mìmǎ shì shénme?",
      "thaiMeaning": "ขอถามหน่อยครับ รหัสผ่าน Wi-Fi คืออะไรครับ?",
      "englishMeaning": "What is the Wi-Fi password?"
    },
    "examples": [
      {
        "scenario": "ถามรหัส Wi-Fi ร้านกาแฟ",
        "hanzi": "这店里的无线网密码是多少？",
        "pinyin": "Zhè diàn lǐ de wúxiànwǎng mìmǎ shì duōshao?",
        "thaiMeaning": "รหัสไวไฟในร้านนี้คือเลขอะไรครับ?",
        "englishMeaning": "What is the password for the wireless network in this store?"
      }
    ]
  },
  {
    "id": "v483",
    "hanzi": "发消息",
    "pinyin": "fā xiāoxi",
    "thaiMeaning": "ส่งข้อความแชท",
    "englishMeaning": "send message",
    "example": {
      "hanzi": "到家后记得发消息给我。",
      "pinyin": "Dào jiā hòu jìde fā xiāoxi gěi wǒ.",
      "thaiMeaning": "ถึงบ้านแล้วจำไว้ว่าส่งข้อความหาฉันด้วยนะ",
      "englishMeaning": "Remember to send me a message when you get home."
    },
    "examples": [
      {
        "scenario": "ทักไลน์ / แชท",
        "hanzi": "我微信发消息给你了。",
        "pinyin": "Wǒ Wēixìn fā xiāoxi gěi nǐ le.",
        "thaiMeaning": "ฉันส่งข้อความในวีแชทให้คุณแล้วนะ",
        "englishMeaning": "I sent you a message on WeChat."
      }
    ]
  },
  {
    "id": "v484",
    "hanzi": "语音",
    "pinyin": "yǔyīn",
    "thaiMeaning": "ข้อความเสียง / คุยสายเสียง",
    "englishMeaning": "voice",
    "example": {
      "hanzi": "打字太慢，我发语音给你吧。",
      "pinyin": "Dǎzì tài màn, wǒ fā yǔyīn gěi nǐ ba.",
      "thaiMeaning": "พิมพ์ช้าไป ฉันส่งข้อความเสียงให้คุณละกัน",
      "englishMeaning": "Typing is too slow. Let me send you a voice message."
    },
    "examples": [
      {
        "scenario": "ส่งเสียงพูดแทนพิมพ์",
        "hanzi": "听一下我发的语音。",
        "pinyin": "Tīng yíxià wǒ fā de yǔyīn.",
        "thaiMeaning": "ฟังข้อความเสียงที่ฉันส่งหน่อย",
        "englishMeaning": "Listen to my voice."
      }
    ]
  },
  {
    "id": "v485",
    "hanzi": "转发",
    "pinyin": "zhuǎnfā",
    "thaiMeaning": "ส่งต่อ / แชร์ข้อความ",
    "englishMeaning": "Forward",
    "example": {
      "hanzi": "把那个文件转发给我一下。",
      "pinyin": "Bǎ nàge wénjiàn zhuǎnfā gěi wǒ yíxià.",
      "thaiMeaning": "ช่วยส่งต่อไฟล์นั้นให้ฉันหน่อยนะ",
      "englishMeaning": "Forward that file to me."
    },
    "examples": [
      {
        "scenario": "แชร์คลิป / ข้อความ",
        "hanzi": "这个很有用，我已经转发了。",
        "pinyin": "Zhège hěn yǒuyòng, wǒ yǐjīng zhuǎnfā le.",
        "thaiMeaning": "อันนี้มีประโยชน์มาก ฉันแชร์ส่งต่อแล้ว",
        "englishMeaning": "This is very useful, I have forwarded it."
      }
    ]
  },
  {
    "id": "v486",
    "hanzi": "关注",
    "pinyin": "guānzhù",
    "thaiMeaning": "กดติดตาม / ฟอลโลว์",
    "englishMeaning": "focus on",
    "example": {
      "hanzi": "记得关注我的频道喔！",
      "pinyin": "Jìde guānzhù wǒ de píndào o!",
      "thaiMeaning": "จำไว้ว่ากดติดตามช่องของฉันด้วยนะ!",
      "englishMeaning": "Remember to follow my channel!"
    },
    "examples": [
      {
        "scenario": "ขอให้กดฟอล",
        "hanzi": "点击关注，了解更多内容。",
        "pinyin": "Diǎnjī guānzhù, liǎojiě gèng duō nèiróng.",
        "thaiMeaning": "คลิกติดตาม เพื่อรับชมเนื้อหาเพิ่มเติม",
        "englishMeaning": "Click to follow to learn more."
      }
    ]
  },
  {
    "id": "v487",
    "hanzi": "点赞",
    "pinyin": "diǎnzàn",
    "thaiMeaning": "กดไลก์ / ให้หัวใจ",
    "englishMeaning": "Like",
    "example": {
      "hanzi": "觉得好听就给我点赞吧！",
      "pinyin": "Juéde hǎotīng jiù gěi wǒ diǎnzàn ba!",
      "thaiMeaning": "ถ้ารู้สึกเพราะก็กดไลก์ให้ฉันเถอะนะ!",
      "englishMeaning": "If you think it sounds good, give me a like!"
    },
    "examples": [
      {
        "scenario": "กดไลก์ให้กำลังใจ",
        "hanzi": "谢谢大家的点赞支持！",
        "pinyin": "Xièxie dàjiā de diǎnzàn zhīchí!",
        "thaiMeaning": "ขอบคุณการกดไลก์ซัพพอร์ตของทุกคนครับ!",
        "englishMeaning": "Thank you everyone for your likes and support!"
      }
    ]
  },
  {
    "id": "v488",
    "hanzi": "退款",
    "pinyin": "tuìkuǎn",
    "thaiMeaning": "คืนเงิน / ขอเงินคืน",
    "englishMeaning": "Refund",
    "example": {
      "hanzi": "商品有质量问题，我要申请退款。",
      "pinyin": "Shāngpǐn yǒu zhìliàng wèntí, wǒ yào shēnqǐng tuìkuǎn.",
      "thaiMeaning": "สินค้ามีปัญหาคุณภาพ ฉันจะยื่นขอคืนเงิน",
      "englishMeaning": "There is a quality problem with the product and I want to apply for a refund."
    },
    "examples": [
      {
        "scenario": "ยกเลิกออเดอร์เอาเงินคืน",
        "hanzi": "钱什么时候退款回来？",
        "pinyin": "Qián shénme shíhou tuìkuǎn huílái?",
        "thaiMeaning": "เงินจะคืนกลับมาตอนไหนครับ?",
        "englishMeaning": "When will the money be refunded?"
      }
    ]
  },
  {
    "id": "v489",
    "hanzi": "快递",
    "pinyin": "kuàidì",
    "thaiMeaning": "พัสดุ / ขนส่งด่วน",
    "englishMeaning": "express delivery",
    "example": {
      "hanzi": "我的快递到了，我去拿一下。",
      "pinyin": "Wǒ de kuàidì dào le, wǒ qù ná yíxià.",
      "thaiMeaning": "พัสดุของฉันมาถึงแล้ว ฉันไปเอาแป๊บนะ",
      "englishMeaning": "My express delivery has arrived. I'll go get it."
    },
    "examples": [
      {
        "scenario": "เช็กสถานะพัสดุ",
        "hanzi": "快递单号是多少？",
        "pinyin": "Kuàidì dānhào shì duōshao?",
        "thaiMeaning": "หมายเลขพัสดุคือเลขอะไรครับ?",
        "englishMeaning": "What is the courier tracking number?"
      }
    ]
  },
  {
    "id": "v490",
    "hanzi": "方便",
    "pinyin": "fāngbiàn",
    "thaiMeaning": "สะดวกสบาย",
    "englishMeaning": "convenient",
    "example": {
      "hanzi": "用手机支付非常方便。",
      "pinyin": "Yòng shǒujī zhīfù fēicháng fāngbiàn.",
      "thaiMeaning": "ใช้มือถือจ่ายเงินสะดวกมากๆ",
      "englishMeaning": "Paying with your mobile phone is very convenient."
    },
    "examples": [
      {
        "scenario": "ถามว่าสะดวกคุยไหม",
        "hanzi": "你现在方便说话吗？",
        "pinyin": "Nǐ xiànzài fāngbiàn shuōhuà ma?",
        "thaiMeaning": "ตอนนี้คุณสะดวกคุยไหม?",
        "englishMeaning": "Is it easy for you to talk now?"
      }
    ]
  },
  {
    "id": "v491",
    "hanzi": "买单",
    "pinyin": "mǎidān",
    "thaiMeaning": "เช็กบิล / คิดเงิน",
    "englishMeaning": "Pay the bill",
    "example": {
      "hanzi": "服务员，买单！",
      "pinyin": "Fúwùyuán, mǎidān!",
      "thaiMeaning": "บริกรครับ เช็กบิลด้วยครับ!",
      "englishMeaning": "Waiter, pay the bill!"
    },
    "examples": [
      {
        "scenario": "เลี้ยงข้าวเพื่อน",
        "hanzi": "今天我请客，我来买单。",
        "pinyin": "Jīntiān wǒ qǐngkè, wǒ lái mǎidān.",
        "thaiMeaning": "วันนี้ฉันเลี้ยงเอง ฉันคิดเงินเอง",
        "englishMeaning": "I’m treating you today and I’ll pay for it."
      }
    ]
  },
  {
    "id": "v492",
    "hanzi": "划算",
    "pinyin": "huásuàn",
    "thaiMeaning": "คุ้มค่า / คุ้มราคา",
    "englishMeaning": "Good deal",
    "example": {
      "hanzi": "买一送一非常划算。",
      "pinyin": "Mǎi yī sòng yī fēicháng huásuàn.",
      "thaiMeaning": "ซื้อ 1 แถม 1 คุ้มค่ามาก",
      "englishMeaning": "Buy one get one free is a great deal."
    },
    "examples": [
      {
        "scenario": "เปรียบเทียบราคา",
        "hanzi": "这个套餐比较划算。",
        "pinyin": "Zhège tàocān bǐjiào huásuàn.",
        "thaiMeaning": "เซ็ตนี้ค่อนข้างคุ้มราคากว่า",
        "englishMeaning": "This package is more cost-effective."
      }
    ]
  },
  {
    "id": "v493",
    "hanzi": "优惠",
    "pinyin": "yōuhuì",
    "thaiMeaning": "ส่วนลด / สิทธิพิเศษ",
    "englishMeaning": "discount",
    "example": {
      "hanzi": "现在购买有优惠活动。",
      "pinyin": "Xiànzài gòumǎi yǒu yōuhuì huódòng.",
      "thaiMeaning": "ซื้อตอนนี้มีโปรโมชันส่วนลด",
      "englishMeaning": "Buy now with discounts."
    },
    "examples": [
      {
        "scenario": "ถามหาส่วนลด",
        "hanzi": "请问用扫码支付有优惠吗？",
        "pinyin": "Qǐngwèn yòng sǎo mǎ zhīfù yǒu yōuhuì ma?",
        "thaiMeaning": "ขอถามหน่อย สแกนจ่ายมีส่วนลดไหมครับ?",
        "englishMeaning": "Are there any discounts for paying by scanning the QR code?"
      }
    ]
  },
  {
    "id": "v494",
    "hanzi": "打折",
    "pinyin": "dǎzhé",
    "thaiMeaning": "ลดราคา",
    "englishMeaning": "Discount",
    "example": {
      "hanzi": "这家店今天打八折。",
      "pinyin": "Zhè jiā diàn jīntiān dǎ bā zhé.",
      "thaiMeaning": "ร้านนี้วันนี้ลดราคา 20%",
      "englishMeaning": "This store has a 20% discount today."
    },
    "examples": [
      {
        "scenario": "ถามสินค้าลดราคา",
        "hanzi": "这件衣服打折吗？",
        "pinyin": "Zhè jiàn yīfu dǎzhé ma?",
        "thaiMeaning": "เสื้อตัวนี้ลดราคาไหมครับ?",
        "englishMeaning": "Is this dress on sale?"
      }
    ]
  },
  {
    "id": "v495",
    "hanzi": "发票",
    "pinyin": "fāpiào",
    "thaiMeaning": "ใบเสร็จ / ใบกำกับภาษี",
    "englishMeaning": "bill",
    "example": {
      "hanzi": "请开一张发票给我。",
      "pinyin": "Qǐng kāi yì zhāng fāpiào gěi wǒ.",
      "thaiMeaning": "ช่วยออกใบเสร็จให้ฉันด้วยครับ",
      "englishMeaning": "Please send me an invoice."
    },
    "examples": [
      {
        "scenario": "ขอใบเสร็จเบิกเงิน",
        "hanzi": "我们需要发票报销。",
        "pinyin": "Wǒmen xūyào fāpiào bàoxiāo.",
        "thaiMeaning": "พวกเราต้องใช้ใบเสร็จไปเบิกเงิน",
        "englishMeaning": "We require invoice reimbursement."
      }
    ]
  },
  {
    "id": "v496",
    "hanzi": "地址",
    "pinyin": "dìzhǐ",
    "thaiMeaning": "ที่อยู่",
    "englishMeaning": "address",
    "example": {
      "hanzi": "请把你的地址发给我。",
      "pinyin": "Qǐng bǎ nǐ de dìzhǐ fā gěi wǒ.",
      "thaiMeaning": "ช่วยส่งที่อยู่ของคุณให้ฉันหน่อย",
      "englishMeaning": "Please send me your address."
    },
    "examples": [
      {
        "scenario": "บอกที่อยู่ให้คนขับรถ",
        "hanzi": "这是我家的详细地址。",
        "pinyin": "Zhè shì wǒ jiā de xiángxì dìzhǐ.",
        "thaiMeaning": "นี่คือที่อยู่โดยละเอียดของบ้านฉัน",
        "englishMeaning": "This is the detailed address of my home."
      }
    ]
  },
  {
    "id": "v497",
    "hanzi": "定位",
    "pinyin": "dìngwèi",
    "thaiMeaning": "ปักหมุดตำแหน่ง / โลเคชัน",
    "englishMeaning": "position",
    "example": {
      "hanzi": "把你的微信定位发给我。",
      "pinyin": "Bǎ nǐ de Wēixìn dìngwèi fā gěi wǒ.",
      "thaiMeaning": "ส่งปักหมุดวีแชทของคุณมาให้ฉัน",
      "englishMeaning": "Send me your WeChat location."
    },
    "examples": [
      {
        "scenario": "หาตำแหน่งร้าน",
        "hanzi": "按照定位导航过去就可以了。",
        "pinyin": "Ànz照 dìngwèi dǎoháng guòqù jiù kěyǐ le.",
        "thaiMeaning": "นำทางตามปักหมุดไปก็ใช้ได้แล้ว",
        "englishMeaning": "Just follow the location and navigate there."
      }
    ]
  },
  {
    "id": "v498",
    "hanzi": "预约",
    "pinyin": "yùyuē",
    "thaiMeaning": "จองล่วงหน้า / นัดหมาย",
    "englishMeaning": "reserve",
    "example": {
      "hanzi": "去这家餐厅需要提前预约。",
      "pinyin": "Qù zhè jiā cāntīng xūyào tíqián yùyuē.",
      "thaiMeaning": "ไปร้านอาหารนี้ต้องจองล่วงหน้า",
      "englishMeaning": "You need to make a reservation in advance to go to this restaurant."
    },
    "examples": [
      {
        "scenario": "นัดหมอหรือนัดช่าง",
        "hanzi": "我已经预约了明天下午。",
        "pinyin": "Wǒ yǐjīng yùyuē le míngtiān xiàwǔ.",
        "thaiMeaning": "ฉันนัดจองล่วงหน้าบ่ายพรุ่งนี้แล้ว",
        "englishMeaning": "I've made an appointment for tomorrow afternoon."
      }
    ]
  },
  {
    "id": "v499",
    "hanzi": "提前",
    "pinyin": "tíqián",
    "thaiMeaning": "ล่วงหน้า / ทำก่อนเวลา",
    "englishMeaning": "in advance",
    "example": {
      "hanzi": "请提前半小时到达。",
      "pinyin": "Qǐng tíqián bàn xiǎoshí dàodá.",
      "thaiMeaning": "กรุณาเดินทางมาถึงล่วงหน้าครึ่งชั่วโมง",
      "englishMeaning": "Please arrive half an hour early."
    },
    "examples": [
      {
        "scenario": "บอกให้เตรียมตัวก่อน",
        "hanzi": "有变化我会提前告诉你。",
        "pinyin": "Yǒu biànhuà wǒ huì tíqián gàosu nǐ.",
        "thaiMeaning": "ถ้ามีการเปลี่ยนแปลงฉันจะบอกคุณล่วงหน้า",
        "englishMeaning": "I will let you know in advance if there are any changes."
      }
    ]
  },
  {
    "id": "v500",
    "hanzi": "推迟",
    "pinyin": "tuīchí",
    "thaiMeaning": "เลื่อนเวลาออกไป",
    "englishMeaning": "put off",
    "example": {
      "hanzi": "会议推迟到明天上午。",
      "pinyin": "Huìyì tuīchí dào míngtiān shàngwǔ.",
      "thaiMeaning": "การประชุมเลื่อนออกไปเป็นพรุ่งนี้เช้า",
      "englishMeaning": "The meeting has been postponed until tomorrow morning."
    },
    "examples": [
      {
        "scenario": "ขอเลื่อนนัด",
        "hanzi": "可以把时间推迟十分钟吗？",
        "pinyin": "Kěyǐ bǎ shíjiān tuīchí shí fēnzhōng ma?",
        "thaiMeaning": "ขอเลื่อนเวลาออกไป 10 นาทีได้ไหมครับ?",
        "englishMeaning": "Can you delay the time for ten minutes?"
      }
    ]
  },
  {
    "id": "v501",
    "hanzi": "加班",
    "pinyin": "jiābān",
    "thaiMeaning": "ทำงานโอที / ทำ OT",
    "englishMeaning": "work overtime",
    "example": {
      "hanzi": "今天工作很多，我要加班。",
      "pinyin": "Jīntiān gōngzuò hěn duō, wǒ yào jiābān.",
      "thaiMeaning": "วันนี้งานเยอะมาก ฉันต้องทำโอที",
      "englishMeaning": "There is a lot of work today and I have to work overtime."
    },
    "examples": [
      {
        "scenario": "บอกเพื่อนว่าเลิกดึก",
        "hanzi": "我晚上要加班，不用等我吃晚饭。",
        "pinyin": "Wǒ wǎnshang yào jiābān, búyòng děng wǒ chī wǎnfàn.",
        "thaiMeaning": "ตอนค่ำฉันต้องทำโอที ไม่ต้องรอฉันกินข้าวเย็น",
        "englishMeaning": "I have to work overtime at night, so there is no need to wait for me to have dinner."
      }
    ]
  },
  {
    "id": "v502",
    "hanzi": "请假",
    "pinyin": "qǐngjià",
    "thaiMeaning": "ลางาน",
    "englishMeaning": "Ask for leave",
    "example": {
      "hanzi": "我身体不太舒服，想请假一天。",
      "pinyin": "Wǒ shēntǐ bú tài shūfu, xiǎng qǐngjià yì tiān.",
      "thaiMeaning": "ฉันร่างกายไม่ค่อยสบาย อยากลางาน 1 วัน",
      "englishMeaning": "I'm not feeling well and would like to take a day off."
    },
    "examples": [
      {
        "scenario": "ส่งใบลา",
        "hanzi": "明天我有事，要向老板请假。",
        "pinyin": "Míngtiān wǒ yǒu shì, yào xiàng lǎobǎn qǐngjià.",
        "thaiMeaning": "พรุ่งนี้ฉันมีธุระ ต้องลางานกับเจ้านาย",
        "englishMeaning": "I have something to do tomorrow and I have to ask my boss for leave."
      }
    ]
  },
  {
    "id": "v503",
    "hanzi": "靠谱",
    "pinyin": "kàopǔ",
    "thaiMeaning": "พึ่งพาได้ / ไว้ใจได้ / เชื่อถือได้",
    "englishMeaning": "Reliable",
    "example": {
      "hanzi": "他人很好，非常靠谱。",
      "pinyin": "Tā rén hěn hǎo, fēicháng kàopǔ.",
      "thaiMeaning": "เขาเป็นคนดีมาก ไว้ใจพึ่งพาได้สุดๆ",
      "englishMeaning": "He is a very nice person and very reliable."
    },
    "examples": [
      {
        "scenario": "ชมเพื่อนร่วมงาน",
        "hanzi": "找他帮忙很靠谱。",
        "pinyin": "Zhǎo tā bāngmáng hěn kàopǔ.",
        "thaiMeaning": "ขอให้เขาช่วยพึ่งพาได้มาก",
        "englishMeaning": "It's very reliable to ask him for help."
      }
    ]
  },
  {
    "id": "v504",
    "hanzi": "热闹",
    "pinyin": "rènao",
    "thaiMeaning": "คึกคัก / ครึกครื้น",
    "englishMeaning": "lively",
    "example": {
      "hanzi": "这里的夜市非常热闹。",
      "pinyin": "Zhèlǐ de yèshì fēicháng rènao.",
      "thaiMeaning": "ตลาดโต้รุ่งที่นี่คึกคักมาก",
      "englishMeaning": "The night market here is very lively."
    },
    "examples": [
      {
        "scenario": "บรรยากาศสนุกสนาน",
        "hanzi": "大家在一起太热闹了！",
        "pinyin": "Dàjiā zài yìqǐ tài rènao le!",
        "thaiMeaning": "ทุกคนอยู่ด้วยกันครึกครื้นมาก!",
        "englishMeaning": "It’s so lively with everyone together!"
      }
    ]
  },
  {
    "id": "v505",
    "hanzi": "干杯",
    "pinyin": "gānbēi",
    "thaiMeaning": "ชนแก้ว / หมดแก้ว",
    "englishMeaning": "cheers",
    "example": {
      "hanzi": "为了我们的友谊，干杯！",
      "pinyin": "Wèile wǒmen de yǒuyì, gānbēi!",
      "thaiMeaning": "เพื่อมิตรภาพของพวกเรา ชนแก้ว!",
      "englishMeaning": "Cheers to our friendship!"
    },
    "examples": [
      {
        "scenario": "อวยพรในงานเลี้ยง",
        "hanzi": "大家一起干一杯！",
        "pinyin": "Dàjiā yìqǐ gān yì bēi!",
        "thaiMeaning": "ทุกคนชนแก้วกันสักแก้ว!",
        "englishMeaning": "Let’s all have a drink together!"
      }
    ]
  },
  {
    "id": "v506",
    "hanzi": "也行",
    "pinyin": "yě xíng",
    "thaiMeaning": "ก็ได้เหมือนกัน / โอเคได้หมด",
    "englishMeaning": "OK",
    "example": {
      "hanzi": "吃面还是吃饭？都行，也行。",
      "pinyin": "Chī miàn háishi chī fàn? Dōu xíng, yě xíng.",
      "thaiMeaning": "กินบะหมี่หรือกินข้าว? ได้หมด ได้เหมือนกัน",
      "englishMeaning": "Noodles or dinner? Either way, that’s fine."
    },
    "examples": [
      {
        "scenario": "ตอบรับแบบยืดหยุ่น",
        "hanzi": "如果你方便，这样也行。",
        "pinyin": "Rúguǒ nǐ fāngbiàn, zhèyàng yě xíng.",
        "thaiMeaning": "ถ้าคุณสะดวก แบบนี้ก็ได้เหมือนกัน",
        "englishMeaning": "If it's convenient for you, that's fine."
      }
    ]
  },
  {
    "id": "v507",
    "hanzi": "没问题",
    "pinyin": "méi wèntí",
    "thaiMeaning": "ไม่มีปัญหา / สบายมาก",
    "englishMeaning": "no problem",
    "example": {
      "hanzi": "这件事交给我，没问题！",
      "pinyin": "Zhè jiàn shì jiāo gěi wǒ, méi wèntí!",
      "thaiMeaning": "เรื่องนี้มอบให้ฉันจัดการ ไม่มีปัญหา!",
      "englishMeaning": "Leave this to me, no problem!"
    },
    "examples": [
      {
        "scenario": "ตอบรับความช่วยเหลือ",
        "hanzi": "没问题，包在我身上。",
        "pinyin": "Méi wèntí, bāo zài wǒ shēnshang.",
        "thaiMeaning": "ไม่มีปัญหา ไว้ใจฉันได้เลย",
        "englishMeaning": "No problem, I'll cover it."
      }
    ]
  },
  {
    "id": "v508",
    "hanzi": "随时",
    "pinyin": "suíshí",
    "thaiMeaning": "ทุกเมื่อ / ได้ตลอดเวลา",
    "englishMeaning": "at any time",
    "example": {
      "hanzi": "有问题随时联系我。",
      "pinyin": "Yǒu wèntí suíshí liánxì wǒ.",
      "thaiMeaning": "มีปัญหาติดต่อฉันได้ตลอดเวลา",
      "englishMeaning": "Contact me anytime if you have any questions."
    },
    "examples": [
      {
        "scenario": "ต้อนรับเสมอ",
        "hanzi": "欢迎你随时过来玩。",
        "pinyin": "Huānyíng nǐ suíshí guòlái wán.",
        "thaiMeaning": "ยินดีต้อนรับคุณมาเที่ยวได้ทุกเมื่อ",
        "englishMeaning": "You are welcome to come and play anytime."
      }
    ]
  },
  {
    "id": "v509",
    "hanzi": "推荐",
    "pinyin": "tuījiàn",
    "thaiMeaning": "แนะนำ",
    "englishMeaning": "recommend",
    "example": {
      "hanzi": "请问有什么推荐的菜？",
      "pinyin": "Qǐngwèn yǒu shénme tuījiàn de cài?",
      "thaiMeaning": "ขอถามหน่อยมีเมนูแนะนำอะไรบ้างครับ?",
      "englishMeaning": "What dishes do you recommend?"
    },
    "examples": [
      {
        "scenario": "แนะนำหนังหรือร้านค้า",
        "hanzi": "朋友推荐我看这部电影。",
        "pinyin": "Péngyou tuījiàn wǒ kàn zhè bù diànyǐng.",
        "thaiMeaning": "เพื่อนแนะนำให้ฉันดูภาพยนตร์เรื่องนี้",
        "englishMeaning": "A friend recommended me to watch this movie."
      }
    ]
  },
  {
    "id": "v510",
    "hanzi": "放心",
    "pinyin": "fàngxīn",
    "thaiMeaning": "วางใจ / สบายใจ",
    "englishMeaning": "rest assured",
    "example": {
      "hanzi": "你放心，我会照顾好自己的。",
      "pinyin": "Nǐ fàngxīn, wǒ huì zhàogù hǎo zìjǐ de.",
      "thaiMeaning": "คุณสบายใจได้ ฉันจะดูแลตัวเองเป็นอย่างดี",
      "englishMeaning": "Don't worry, I will take care of myself."
    },
    "examples": [
      {
        "scenario": "ปลอบให้คลายกังวล",
        "hanzi": "有我在，你就放心吧。",
        "pinyin": "Yǒu wǒ zài, nǐ jiù fàngxīn ba.",
        "thaiMeaning": "มีฉันอยู่ คุณวางใจได้เลย",
        "englishMeaning": "Don't worry as I'm here."
      }
    ]
  },
  {
    "id": "v511",
    "hanzi": "斤",
    "pinyin": "jīn",
    "thaiMeaning": "จิน (หน่วยน้ำหนักจีน = 500 กรัม / ครึ่งกิโล)",
    "englishMeaning": "catty",
    "example": {
      "hanzi": "猪肉一斤多少钱？",
      "pinyin": "Zhūròu yì jīn duōshao qián?",
      "thaiMeaning": "เนื้อหมูครึ่งกิโล (1 จิน) เท่าไหร่?",
      "englishMeaning": "How much does a pound of pork cost?"
    },
    "examples": [
      {
        "scenario": "ถามน้ำหนักผักผลไม้เนื้อสัตว์",
        "hanzi": "请给我称两斤苹果。",
        "pinyin": "Qǐng gěi wǒ chēng liǎng jīn píngguǒ.",
        "thaiMeaning": "ช่วยชั่งแอปเปิ้ลให้ฉัน 2 จิน (1 กิโลกรัม) หน่อยครับ",
        "englishMeaning": "Please weigh two pounds of apples for me."
      }
    ]
  },
  {
    "id": "v512",
    "hanzi": "公斤",
    "pinyin": "gōngjīn",
    "thaiMeaning": "กิโลกรัม (1,000 กรัม / 2 จิน)",
    "englishMeaning": "Kilogram",
    "example": {
      "hanzi": "我要一公斤牛肉。",
      "pinyin": "Wǒ yào yì gōngjīn niúròu.",
      "thaiMeaning": "ฉันเอาเนื้อวัว 1 กิโลกรัม",
      "englishMeaning": "I want a kilogram of beef."
    },
    "examples": [
      {
        "scenario": "บอกน้ำหนักสัมภาระหรือเนื้อสัตว์",
        "hanzi": "这个行李重十五公斤。",
        "pinyin": "Zhège xíngli zhòng shíwǔ gōngjīn.",
        "thaiMeaning": "สัมภาระชิ้นนี้หนัก 15 กิโลกรัม",
        "englishMeaning": "This luggage weighs fifteen kilograms."
      }
    ]
  },
  {
    "id": "v513",
    "hanzi": "称",
    "pinyin": "chēng",
    "thaiMeaning": "ชั่งน้ำหนัก",
    "englishMeaning": "say",
    "example": {
      "hanzi": "老板，帮我称一下这个。",
      "pinyin": "Lǎobǎn, bāng wǒ chēng yíxià zhège.",
      "thaiMeaning": "เถ้าแก่ครับ ช่วยชั่งอันนี้ให้ฉันหน่อย",
      "englishMeaning": "Boss, weigh this for me."
    },
    "examples": [
      {
        "scenario": "ชั่งเนื้อสัตว์ในตลาด",
        "hanzi": "称好了，一共三十块。",
        "pinyin": "Chēng hǎo le, yīgòng sānshí kuài.",
        "thaiMeaning": "ชั่งเสร็จแล้วครับ ทั้งหมด 30 หยวน",
        "englishMeaning": "After weighing it, it was thirty yuan in total."
      }
    ]
  },
  {
    "id": "v514",
    "hanzi": "重量",
    "pinyin": "zhòngliàng",
    "thaiMeaning": "น้ำหนัก",
    "englishMeaning": "weight",
    "example": {
      "hanzi": "请检查商品的重量。",
      "pinyin": "Qǐng jiǎnchá shāngpǐn de zhòngliàng.",
      "thaiMeaning": "กรุณาตรวจสอบน้ำหนักของสินค้า",
      "englishMeaning": "Please check the weight of the item."
    },
    "examples": [
      {
        "scenario": "ถามน้ำหนักพัสดุหรือของ",
        "hanzi": "这个包裹的重量是多少？",
        "pinyin": "Zhège bāoguǒ de zhòngliàng shì duōshao?",
        "thaiMeaning": "น้ำหนักของพัสดุชิ้นนี้คือเท่าไหร่?",
        "englishMeaning": "How much does this package weigh?"
      }
    ]
  },
  {
    "id": "v515",
    "hanzi": "猪肉",
    "pinyin": "zhūròu",
    "thaiMeaning": "เนื้อหมู",
    "englishMeaning": "pork",
    "example": {
      "hanzi": "今天的猪肉非常新鲜。",
      "pinyin": "Jīntiān de zhūròu fēicháng xīnxiān.",
      "thaiMeaning": "เนื้อหมูวันนี้สดมากๆ",
      "englishMeaning": "The pork today was very fresh."
    },
    "examples": [
      {
        "scenario": "สั่งผัดเนื้อหมู",
        "hanzi": "我要一份炒猪肉。",
        "pinyin": "Wǒ yào yí fèn chǎo zhūròu.",
        "thaiMeaning": "ฉันขอผัดเนื้อหมูหนึ่งจาน",
        "englishMeaning": "I'd like a side of fried pork."
      }
    ]
  },
  {
    "id": "v516",
    "hanzi": "牛肉",
    "pinyin": "niúròu",
    "thaiMeaning": "เนื้อวัว",
    "englishMeaning": "beef",
    "example": {
      "hanzi": "一斤牛肉多少钱？",
      "pinyin": "Yì jīn niúròu duōshao qián?",
      "thaiMeaning": "เนื้อวัวครึ่งกิโลกรัม (1 จิน) เท่าไหร่?",
      "englishMeaning": "How much does a pound of beef cost?"
    },
    "examples": [
      {
        "scenario": "สั่งก๋วยเตี๋ยวเนื้อ",
        "hanzi": "来一碗牛肉面。",
        "pinyin": "Lái yì wǎn niúròu miàn.",
        "thaiMeaning": "เอาก๋วยเตี๋ยวเนื้อวัว 1 ชาม",
        "englishMeaning": "Have a bowl of beef noodles."
      }
    ]
  },
  {
    "id": "v517",
    "hanzi": "鸡肉",
    "pinyin": "jīròu",
    "thaiMeaning": "เนื้อไก่",
    "englishMeaning": "chicken",
    "example": {
      "hanzi": "我不吃牛肉，我吃鸡肉。",
      "pinyin": "Wǒ bù chī niúròu, wǒ chī jīròu.",
      "thaiMeaning": "ฉันไม่ทานเนื้อวัว ฉันทานเนื้อไก่",
      "englishMeaning": "I don't eat beef, I eat chicken."
    },
    "examples": [
      {
        "scenario": "สั่งไก่ทอด/ไก่ผัด",
        "hanzi": "这里的烤鸡肉很好吃。",
        "pinyin": "Zhèlǐ de kǎo jīròu hěn hǎochī.",
        "thaiMeaning": "เนื้อไก่ย่างของที่นี่อร่อยมาก",
        "englishMeaning": "The grilled chicken here is delicious."
      }
    ]
  },
  {
    "id": "v518",
    "hanzi": "羊肉",
    "pinyin": "yángròu",
    "thaiMeaning": "เนื้อแพะ / เนื้อแกะ",
    "englishMeaning": "mutton",
    "example": {
      "hanzi": "冬天吃羊肉火锅很舒服。",
      "pinyin": "Dōngtiān chī yángròu huǒguō hěn shūfu.",
      "thaiMeaning": "หน้าหนาวทานชาบูหม้อไฟเนื้อแกะสบายมาก",
      "englishMeaning": "Eating mutton hot pot in winter is very comfortable."
    },
    "examples": [
      {
        "scenario": "สั่งเสียบไม้ปิ้งย่าง",
        "hanzi": "来十串羊肉串。",
        "pinyin": "Lái shí chuàn yángròu chuàn.",
        "thaiMeaning": "เอาเนื้อแกะย่างเสียบไม้ 10 ไม้",
        "englishMeaning": "Let’s get ten skewers of mutton."
      }
    ]
  },
  {
    "id": "v519",
    "hanzi": "海鲜",
    "pinyin": "hǎixiān",
    "thaiMeaning": "อาหารทะเล",
    "englishMeaning": "seafood",
    "example": {
      "hanzi": "这家餐厅的海鲜很有名。",
      "pinyin": "Zhè jiā cāntīng de hǎixiān hěn yǒumíng.",
      "thaiMeaning": "อาหารทะเลของร้านนี้มีชื่อเสียงมาก",
      "englishMeaning": "This restaurant is famous for its seafood."
    },
    "examples": [
      {
        "scenario": "ถามว่าแพ้อาหารทะเลไหม",
        "hanzi": "你吃海鲜过敏吗？",
        "pinyin": "Nǐ chī hǎixiān guòmǐn ma?",
        "thaiMeaning": "คุณ ทานอาหารทะเลแล้วแพ้ไหม?",
        "englishMeaning": "Are you allergic to seafood?"
      }
    ]
  },
  {
    "id": "v520",
    "hanzi": "新鲜",
    "pinyin": "xīnxiān",
    "thaiMeaning": "สดใหม่",
    "englishMeaning": "Fresh",
    "example": {
      "hanzi": "这些水果非常新鲜。",
      "pinyin": "Zhèxiē shuǐguǒ fēicháng xīnxiān.",
      "thaiMeaning": "ผลไม้พวกนี้สดมากๆ",
      "englishMeaning": "The fruits are very fresh."
    },
    "examples": [
      {
        "scenario": "ชมอาหารสด",
        "hanzi": "鱼很新鲜，很好吃。",
        "pinyin": "Yú hěn xīnxiān, hěn hǎochī.",
        "thaiMeaning": "ปลาสดมาก อร่อยมาก",
        "englishMeaning": "The fish is fresh and delicious."
      }
    ]
  },
  {
    "id": "v521",
    "hanzi": "过敏",
    "pinyin": "guòmǐn",
    "thaiMeaning": "แพ้ (อาหาร / ยา / ฝุ่น)",
    "englishMeaning": "allergy",
    "example": {
      "hanzi": "我对海鲜过敏，不能吃。",
      "pinyin": "Wǒ duì hǎixiān guòmǐn, bù néng chī.",
      "thaiMeaning": "ฉันแพ้อาหารทะเล ทานไม่ได้",
      "englishMeaning": "I am allergic to seafood and cannot eat it."
    },
    "examples": [
      {
        "scenario": "บอกหมอหรือร้านอาหาร",
        "hanzi": "请问里面有花生吗？我过敏。",
        "pinyin": "Qǐngwèn lǐmiàn yǒu huāshēng ma? Wǒ guòmǐn.",
        "thaiMeaning": "ขอถามหน่อย ข้างในมีถั่วลิสงไหม? ฉันแพ้",
        "englishMeaning": "Are there any peanuts in it? I'm allergic."
      }
    ]
  },
  {
    "id": "v522",
    "hanzi": "丢",
    "pinyin": "diū",
    "thaiMeaning": "หาย / ทำตกหาย",
    "englishMeaning": "leave",
    "example": {
      "hanzi": "糟糕，我的手机丢了！",
      "pinyin": "Zāogāo, wǒ de shǒujī diū le!",
      "thaiMeaning": "แย่แล้ว มือถือฉันหายไปแล้ว!",
      "englishMeaning": "Oops, I lost my phone!"
    },
    "examples": [
      {
        "scenario": "แจ้งของหาย",
        "hanzi": "你看见我的钥匙了吗？我丢了。",
        "pinyin": "Nǐ kànjiàn wǒ de yàoshi le ma? Wǒ diū le.",
        "thaiMeaning": "คุณเห็นกุญแจของฉันไหม? ฉันทำหาย",
        "englishMeaning": "Have you seen my key? I lost it."
      }
    ]
  },
  {
    "id": "v523",
    "hanzi": "钱包",
    "pinyin": "qiánbāo",
    "thaiMeaning": "กระเป๋าสตางค์",
    "englishMeaning": "wallet",
    "example": {
      "hanzi": "我的钱包里有身份证和现金。",
      "pinyin": "Wǒ de qiánbāo lǐ yǒu shēnfènzhèng hé xiànjīn.",
      "thaiMeaning": "ในกระเป๋าสตางค์ของฉันมีบัตรประชาชนและเงินสด",
      "englishMeaning": "I have ID and cash in my wallet."
    },
    "examples": [
      {
        "scenario": "เตือนให้เช็กกระเป๋าตังค์",
        "hanzi": "别忘了带钱包。",
        "pinyin": "Bié wàng le dài qiánbāo.",
        "thaiMeaning": "อย่าลืมพกกระเป๋าสตางค์ไปนะ",
        "englishMeaning": "Don't forget to bring your wallet."
      }
    ]
  },
  {
    "id": "v524",
    "hanzi": "护照",
    "pinyin": "hùzhào",
    "thaiMeaning": "หนังสือเดินทาง / พาสปอร์ต",
    "englishMeaning": "passport",
    "example": {
      "hanzi": "请出示您的护照。",
      "pinyin": "Qǐng chūshì nín de hùzhào.",
      "thaiMeaning": "กรุณาแสดงพาสปอร์ตของคุณ",
      "englishMeaning": "Please show your passport."
    },
    "examples": [
      {
        "scenario": "เช็กอินโรงแรม/สนามบิน",
        "hanzi": "办理入住需要护照。",
        "pinyin": "Bànlǐ rùzhù xūyào hùzhào.",
        "thaiMeaning": "การทำเรื่องเข้าพักต้องใช้พาสปอร์ต",
        "englishMeaning": "A passport is required for check-in."
      }
    ]
  },
  {
    "id": "v525",
    "hanzi": "报警",
    "pinyin": "bàojǐng",
    "thaiMeaning": "แจ้งตำรวจ",
    "englishMeaning": "Call the police",
    "example": {
      "hanzi": "遇到危险请立刻报警。",
      "pinyin": "Yùdào wēixiǎn qǐng lìkè bàojǐng.",
      "thaiMeaning": "เมื่อเจออันตรายกรุณาแจ้งตำรวจทันที",
      "englishMeaning": "If you encounter danger, please call the police immediately."
    },
    "examples": [
      {
        "scenario": "ขอให้คนอื่นช่วยแจ้งตำรวจ",
        "hanzi": "请帮我报警，有人偷东西！",
        "pinyin": "Qǐng bāng wǒ bàojǐng, yǒu rén tōu dōngxi!",
        "thaiMeaning": "ช่วยแจ้งตำรวจให้ฉันที มีคนขโมยของ!",
        "englishMeaning": "Please help me call the police, someone stole something!"
      }
    ]
  },
  {
    "id": "v526",
    "hanzi": "紧急",
    "pinyin": "jǐnjí",
    "thaiMeaning": "ฉุกเฉิน / เร่งด่วน",
    "englishMeaning": "urgent",
    "example": {
      "hanzi": "这是紧急情况，需要帮助！",
      "pinyin": "Zhè shì jǐnjí qíngkuàng, xūyào bāngzhù!",
      "thaiMeaning": "นี่คือสถานการณ์ฉุกเฉิน ต้องการความช่วยเหลือ!",
      "englishMeaning": "This is an emergency and we need help!"
    },
    "examples": [
      {
        "scenario": "เบอร์โทรฉุกเฉิน",
        "hanzi": "请告诉我紧急联系电话。",
        "pinyin": "Qǐng gàosu wǒ jǐnjí liánxì diànhuà.",
        "thaiMeaning": "โปรดบอกเบอร์โทรติดต่อฉุกเฉินให้ฉัน",
        "englishMeaning": "Please tell me the emergency contact number."
      }
    ]
  },
  {
    "id": "v527",
    "hanzi": "医院",
    "pinyin": "yīyuàn",
    "thaiMeaning": "โรงพยาบาล",
    "englishMeaning": "Hospital",
    "example": {
      "hanzi": "请带我去最近的医院。",
      "pinyin": "Qǐng dài wǒ qù zuì jìn de yīyuàn.",
      "thaiMeaning": "โปรดพาฉันไปโรงพยาบาลที่ใกล้ที่สุด",
      "englishMeaning": "Please take me to the nearest hospital."
    },
    "examples": [
      {
        "scenario": "หาโรงพยาบาล",
        "hanzi": "附近有医院吗？我不舒服。",
        "pinyin": "Fùjìn yǒu yīyuàn ma? Wǒ bù shūfu.",
        "thaiMeaning": "แถวนี้มีโรงพยาบาลไหม? ฉันไม่สบาย",
        "englishMeaning": "Is there a hospital nearby? I do not feel well."
      }
    ]
  },
  {
    "id": "v528",
    "hanzi": "药店",
    "pinyin": "yàodiàn",
    "thaiMeaning": "ร้านขายยา",
    "englishMeaning": "pharmacy",
    "example": {
      "hanzi": "我去药店买感冒药。",
      "pinyin": "Wǒ qù yàodiàn mǎi gǎnmào yào.",
      "thaiMeaning": "ฉันไปร้านขายยาซื้อยาแก้หวัด",
      "englishMeaning": "I went to the drugstore to buy cold medicine."
    },
    "examples": [
      {
        "scenario": "ถามหาร้านขายยา",
        "hanzi": "请问药店在哪儿？",
        "pinyin": "Qǐngwèn yàodiàn zài nǎr?",
        "thaiMeaning": "ขอถามหน่อย ร้านขายยาอยู่ที่ไหน?",
        "englishMeaning": "Where is the pharmacy?"
      }
    ]
  },
  {
    "id": "v529",
    "hanzi": "减重",
    "pinyin": "jiǎnzhòng",
    "thaiMeaning": "ลดน้ำหนัก",
    "englishMeaning": "lose weight",
    "example": {
      "hanzi": "最近我在运动减重。",
      "pinyin": "Zuìjìn wǒ zài yùndòng jiǎnzhòng.",
      "thaiMeaning": "ช่วงนี้ฉันกำลังออกกำลังกายลดน้ำหนัก",
      "englishMeaning": "Recently I have been exercising to lose weight."
    },
    "examples": [
      {
        "scenario": "คุมอาหารลดน้ำหนัก",
        "hanzi": "少吃甜食有利于减重。",
        "pinyin": "Shǎo chī tiánshí yǒu lìyú jiǎnzhòng.",
        "thaiMeaning": "ทานของหวานน้อยลงส่งผลดีต่อการลดน้ำหนัก",
        "englishMeaning": "Eating less sweets will help you lose weight."
      }
    ]
  },
  {
    "id": "v530",
    "hanzi": "不辣",
    "pinyin": "bù là",
    "thaiMeaning": "ไม่เผ็ด",
    "englishMeaning": "Not spicy",
    "example": {
      "hanzi": "我不吃辣，请做不辣的。",
      "pinyin": "Wǒ bù chī là, qǐng zuò bù là de.",
      "thaiMeaning": "ฉันไม่ทานเผ็ด กรุณาทำแบบไม่เผ็ดนะ",
      "englishMeaning": "I don't eat spicy food. Please make it non-spicy."
    },
    "examples": [
      {
        "scenario": "สั่งอาหารไม่เอาเผ็ด",
        "hanzi": "请问这个菜辣不辣？",
        "pinyin": "Qǐngwèn zhège cài là bú là?",
        "thaiMeaning": "ขอถามหน่อย เมนูนี้เผ็ดไหมครับ?",
        "englishMeaning": "Is this dish spicy?"
      }
    ]
  },
  {
    "id": "v531",
    "hanzi": "油腻",
    "pinyin": "yóunì",
    "thaiMeaning": "มันเลี่ยน / เลี่ยนน้ำมัน",
    "englishMeaning": "greasy",
    "example": {
      "hanzi": "这个菜太油腻了。",
      "pinyin": "Zhège cài tài yóunì le.",
      "thaiMeaning": "อาหารจานนี้มันเลี่ยนเกินไป",
      "englishMeaning": "This dish is too greasy."
    },
    "examples": [
      {
        "scenario": "บอกความรู้สึกหลังทานอาหารมัน",
        "hanzi": "我不喜欢吃太油腻的东西。",
        "pinyin": "Wǒ bù xǐhuan chī tài yóunì de dōngxi.",
        "thaiMeaning": "ฉันไม่ชอบทานของที่มันเลี่ยนเกินไป",
        "englishMeaning": "I don't like to eat anything too greasy."
      }
    ]
  },
  {
    "id": "v532",
    "hanzi": "软",
    "pinyin": "ruǎn",
    "thaiMeaning": "นุ่ม / นิ่ม",
    "englishMeaning": "soft",
    "example": {
      "hanzi": "面包很软很新鲜。",
      "pinyin": "Miànbāo hěn ruǎn hěn xīnxiān.",
      "thaiMeaning": "ขนมปังนุ่มและสดมาก",
      "englishMeaning": "The bread is soft and fresh."
    },
    "examples": [
      {
        "scenario": "พูดถึงเนื้อสัมผัสขนม",
        "hanzi": "这个蛋糕口感很软。",
        "pinyin": "Zhège dàngāo kǒugǎn hěn ruǎn.",
        "thaiMeaning": "เค้กชิ้นนี้เนื้อสัมผัสนุ่มมาก",
        "englishMeaning": "This cake has a very soft texture."
      }
    ]
  },
  {
    "id": "v533",
    "hanzi": "嫩",
    "pinyin": "nèn",
    "thaiMeaning": "นุ่มเด้ง / เนื้อนุ่ม (ใช้กับเนื้อสัตว์/ผัก)",
    "englishMeaning": "tender",
    "example": {
      "hanzi": "这块牛肉非常嫩。",
      "pinyin": "Zhè kuài niúròu fēicháng nèn.",
      "thaiMeaning": "เนื้อวัวชิ้นนี้นุ่มมากๆ",
      "englishMeaning": "This beef is very tender."
    },
    "examples": [
      {
        "scenario": "ชมเชฟว่าผัดเนื้อนุ่ม",
        "hanzi": "鸡肉炒得很嫩。",
        "pinyin": "Jīròu chǎo de hěn nèn.",
        "thaiMeaning": "เนื้อไก่ผัดได้นุ่มมาก",
        "englishMeaning": "The chicken was fried very tender."
      }
    ]
  },
  {
    "id": "v534",
    "hanzi": "硬",
    "pinyin": "yìng",
    "thaiMeaning": "แข็ง / เคี้ยวยาก",
    "englishMeaning": "hard",
    "example": {
      "hanzi": "肉太硬了，咬不动。",
      "pinyin": "Ròu tài yìng le, yǎo bú dòng.",
      "thaiMeaning": "เนื้อแข็งเกินไป เคี้ยวไม่เข้า",
      "englishMeaning": "The meat was too hard to bite."
    },
    "examples": [
      {
        "scenario": "ติอาหารที่แข็งเกินไป",
        "hanzi": "这米饭有一点儿硬。",
        "pinyin": "Zhè mǐfàn yǒu yìdiǎnr yìng.",
        "thaiMeaning": "ข้าวสวยนี้แข็งไปหน่อย",
        "englishMeaning": "The rice is a bit hard."
      }
    ]
  },
  {
    "id": "v535",
    "hanzi": "咸",
    "pinyin": "xián",
    "thaiMeaning": "เค็ม",
    "englishMeaning": "salty",
    "example": {
      "hanzi": "汤有点儿咸，加一点水吧。",
      "pinyin": "Tāng yǒudiǎnr xián, jiā yìdiǎn shuǐ ba.",
      "thaiMeaning": "ซุปเค็มไปหน่อย เติมน้ำสักหน่อยเถอะ",
      "englishMeaning": "The soup is a bit salty, please add some water."
    },
    "examples": [
      {
        "scenario": "บอกพ่อครัวว่าอย่าทำเค็ม",
        "hanzi": "请做少咸一点。",
        "pinyin": "Qǐng zuò shǎo xián yìdiǎn.",
        "thaiMeaning": "กรุณาทำเค็มน้อยลงหน่อย",
        "englishMeaning": "Please make it less salty."
      }
    ]
  },
  {
    "id": "v536",
    "hanzi": "淡",
    "pinyin": "dàn",
    "thaiMeaning": "จืด / รสอ่อน",
    "englishMeaning": "light",
    "example": {
      "hanzi": "味道太淡了，没有盐。",
      "pinyin": "Wèidào tài dàn le, méiyǒu yán.",
      "thaiMeaning": "รสชาติจืดเกินไป ไม่มีเกลือเลย",
      "englishMeaning": "The taste is too bland, no salt."
    },
    "examples": [
      {
        "scenario": "ชอบทานอาหารรสจืดเพื่อสุขภาพ",
        "hanzi": "生病时适合吃清淡的食物。",
        "pinyin": "Shēngbìng shí shìhé chī qīngdàn de shíwù.",
        "thaiMeaning": "เวลาป่วยเหมาะกับการทานอาหารรสจืดเบาๆ",
        "englishMeaning": "It is suitable to eat light food when you are sick."
      }
    ]
  },
  {
    "id": "v537",
    "hanzi": "甜",
    "pinyin": "tián",
    "thaiMeaning": "หวาน",
    "englishMeaning": "sweet",
    "example": {
      "hanzi": "这个水果甜甜的，很好吃。",
      "pinyin": "Zhège shuǐguǒ tiántián de, hěn hǎochī.",
      "thaiMeaning": "ผลไม้อันนี้หวานอร่อยมาก",
      "englishMeaning": "This fruit is sweet and delicious."
    },
    "examples": [
      {
        "scenario": "สั่งน้ำหวานน้อย",
        "hanzi": "我不喜欢太甜，请做半糖。",
        "pinyin": "Wǒ bù xǐhuan tài tián, qǐng zuò bàn táng.",
        "thaiMeaning": "ฉันไม่ชอบหวานเกินไป กรุณาทำหวาน 50%",
        "englishMeaning": "I don't like it too sweet, please make it half sugar."
      }
    ]
  },
  {
    "id": "v538",
    "hanzi": "酸",
    "pinyin": "suān",
    "thaiMeaning": "เปรี้ยว",
    "englishMeaning": "acid",
    "example": {
      "hanzi": "这个柠檬太酸了！",
      "pinyin": "Zhège níngméng tài suān le!",
      "thaiMeaning": "มะนาวอันนี้เปรี้ยวเกินไปแล้ว!",
      "englishMeaning": "This lemon is so sour!"
    },
    "examples": [
      {
        "scenario": "สั่งอาหารรสเปรี้ยวหวาน",
        "hanzi": "我喜欢吃酸甜口味的菜。",
        "pinyin": "Wǒ xǐhuan chī suāntián kǒuwèi de cài.",
        "thaiMeaning": "ฉันชอบทานอาหารรสชาติเปรี้ยวหวาน",
        "englishMeaning": "I like to eat sweet and sour dishes."
      }
    ]
  },
  {
    "id": "v539",
    "hanzi": "辣",
    "pinyin": "là",
    "thaiMeaning": "เผ็ด",
    "englishMeaning": "hot",
    "example": {
      "hanzi": "四川菜非常辣。",
      "pinyin": "Sìchuān cài fēicháng là.",
      "thaiMeaning": "อาหารเสฉวนเผ็ดมากๆ",
      "englishMeaning": "Sichuan food is very spicy."
    },
    "examples": [
      {
        "scenario": "สั่งเผ็ดน้อย",
        "hanzi": "请做微辣，谢谢。",
        "pinyin": "Qǐng zuò wēilà, xièxie.",
        "thaiMeaning": "กรุณาทำเผ็ดน้อย ขอบคุณครับ",
        "englishMeaning": "Please make it slightly spicy, thank you."
      }
    ]
  },
  {
    "id": "v540",
    "hanzi": "麻辣",
    "pinyin": "málà",
    "thaiMeaning": "เผ็ดชา (หมาล่า)",
    "englishMeaning": "Spicy",
    "example": {
      "hanzi": "麻辣火锅非常有名。",
      "pinyin": "Málà huǒguō fēicháng yǒumíng.",
      "thaiMeaning": "ชาบูหม้อไฟหมาล่ามีชื่อเสียงมากๆ",
      "englishMeaning": "Spicy hotpot is very famous."
    },
    "examples": [
      {
        "scenario": "สั่งปิ้งย่างหมาล่า",
        "hanzi": "来几串麻辣烧烤。",
        "pinyin": "Lái jǐ chuàn málà shāokǎo.",
        "thaiMeaning": "เอาปิ้งย่างหมาล่ามาสักสองสามไม้",
        "englishMeaning": "Get some spicy BBQ skewers."
      }
    ]
  },
  {
    "id": "v541",
    "hanzi": "苦",
    "pinyin": "kǔ",
    "thaiMeaning": "ขม",
    "englishMeaning": "bitter",
    "example": {
      "hanzi": "这杯咖啡很苦，没有加糖。",
      "pinyin": "Zhè bēi kāfēi hěn kǔ, méiyǒu jiā táng.",
      "thaiMeaning": "กาแฟแก้วนี้ขมมาก ไม่ได้ใส่น้ำตาล",
      "englishMeaning": "The coffee was very bitter and no sugar was added."
    },
    "examples": [
      {
        "scenario": "ยาขม",
        "hanzi": "中药虽然苦，但是很有效。",
        "pinyin": "Zhōngyào suīrán kǔ, dànshì hěn yǒuxiào.",
        "thaiMeaning": "ยาจีนถึงแม้จะขม แต่มีประสิทธิภาพมาก",
        "englishMeaning": "Although Chinese medicine is bitter, it is very effective."
      }
    ]
  },
  {
    "id": "v542",
    "hanzi": "脆",
    "pinyin": "cuì",
    "thaiMeaning": "กรอบ",
    "englishMeaning": "crisp",
    "example": {
      "hanzi": "炸鸡皮非常香脆。",
      "pinyin": "Zhájī pí fēicháng xiāngcuì.",
      "thaiMeaning": "หนังไก่ทอดหอมกรอบมากๆ",
      "englishMeaning": "The fried chicken skin is very crispy."
    },
    "examples": [
      {
        "scenario": "ชมผักหรือขนมกรอบ",
        "hanzi": "这个黄瓜很脆很大快。",
        "pinyin": "Zhège huángguā hěn cuì hěn dà kuài.",
        "thaiMeaning": "แตงกวาอันนี้กรอบมากชิ้นใหญ่มาก",
        "englishMeaning": "This cucumber is crispy and quick."
      }
    ]
  },
  {
    "id": "v543",
    "hanzi": "软糯",
    "pinyin": "ruǎnnuò",
    "thaiMeaning": "เหนียวนุ่ม / นุ่มหนึบ (ใช้กับข้าวเหนียว, โมจิ, เผือก, ไข่มุก)",
    "englishMeaning": "Soft and waxy",
    "example": {
      "hanzi": "这个珍珠奶茶的珍珠很软糯。",
      "pinyin": "Zhège zhēnzhū nǎichá de zhēnzhū hěn ruǎnnuò.",
      "thaiMeaning": "ไข่มุกของชานมไข่มุกแก้วนี้นุ่มหนึบมาก",
      "englishMeaning": "The pearls in this bubble milk tea are very soft and waxy."
    },
    "examples": [
      {
        "scenario": "ชมขนมเหนียวนุ่ม",
        "hanzi": "糯米饭软糯可口。",
        "pinyin": "Nuòmǐfàn ruǎnnuò kěkǒu.",
        "thaiMeaning": "ข้าวเหนียวนุ่มหนึบอร่อยถูกปาก",
        "englishMeaning": "The glutinous rice is soft and delicious."
      }
    ]
  },
  {
    "id": "v544",
    "hanzi": "香",
    "pinyin": "xiāng",
    "thaiMeaning": "หอม (กลิ่นหอมน่าทาน)",
    "englishMeaning": "fragrant",
    "example": {
      "hanzi": "菜刚做好，好香啊！",
      "pinyin": "Cài gāng zuò hǎo, hǎo xiāng a!",
      "thaiMeaning": "กับข้าวเพิ่งทำเสร็จ หอมจังเลย!",
      "englishMeaning": "The food has just been cooked and it smells so good!"
    },
    "examples": [
      {
        "scenario": "ชมกลิ่นอาหาร",
        "hanzi": "闻起来特别香。",
        "pinyin": "Wén qǐlai tèbié xiāng.",
        "thaiMeaning": "ดมดูแล้วหอมเป็นพิเศษ",
        "englishMeaning": "It smells particularly good."
      }
    ]
  },
  {
    "id": "v545",
    "hanzi": "鲜美",
    "pinyin": "xiānměi",
    "thaiMeaning": "สดกลมกล่อม / รสอูมามิ",
    "englishMeaning": "Delicious",
    "example": {
      "hanzi": "鱼汤的味道非常鲜美。",
      "pinyin": "Yútāng de wèidào fēicháng xiānměi.",
      "thaiMeaning": "รสชาติของซุปปลาสดกลมกล่อมมากๆ",
      "englishMeaning": "The fish soup tastes very delicious."
    },
    "examples": [
      {
        "scenario": "ชมน้ำซุปหรืออาหารทะเล",
        "hanzi": "汤头鲜美，没有腥味。",
        "pinyin": "Tāngtóu xiānměi, méiyǒu xīngwèi.",
        "thaiMeaning": "น้ำซุปสดกลมกล่อม ไม่มีกลิ่นคาว",
        "englishMeaning": "The soup is delicious and has no fishy smell."
      }
    ]
  },
  {
    "id": "v546",
    "hanzi": "腥",
    "pinyin": "xīng",
    "thaiMeaning": "คาว (กลิ่นคาวปลา / กลิ่นคาวเนื้อ)",
    "englishMeaning": "fishy",
    "example": {
      "hanzi": "鱼处理得很好，一点儿也不腥。",
      "pinyin": "Yú chǔlǐ de hěn hǎo, yìdiǎnr yě bù xīng.",
      "thaiMeaning": "ปลาจัดการได้ดีมาก ไม่คาวเลยแม้แต่น้อย",
      "englishMeaning": "The fish was well prepared and not fishy at all."
    },
    "examples": [
      {
        "scenario": "บอกว่าอาหารมีกลิ่นคาว",
        "hanzi": "这个肉有一点儿腥味。",
        "pinyin": "Zhège ròu yǒu yìdiǎnr xīngwèi.",
        "thaiMeaning": "เนื้อชิ้นนี้มีกลิ่นคาวนิดหน่อย",
        "englishMeaning": "The meat has a bit of a fishy smell."
      }
    ]
  },
  {
    "id": "v547",
    "hanzi": "烫",
    "pinyin": "tàng",
    "thaiMeaning": "ร้อนจัด / ร้อนลวกปาก",
    "englishMeaning": "hot",
    "example": {
      "hanzi": "汤很烫，小心别烫到。",
      "pinyin": "Tāng hěn tàng, xiǎoxīn bié tàng dào.",
      "thaiMeaning": "น้ำซุปร้อนมาก ระวังลวกปากนะ",
      "englishMeaning": "The soup is very hot, be careful not to burn it."
    },
    "examples": [
      {
        "scenario": "เตือนให้เป่าก่อนกิน",
        "hanzi": "包子刚出炉，很烫！",
        "pinyin": "Bāozi gāng chūlú, hěn tàng!",
        "thaiMeaning": "ซาลาเปาเพิ่งออกจากเตา ร้อนมาก!",
        "englishMeaning": "The buns have just come out of the oven and are very hot!"
      }
    ]
  },
  {
    "id": "v548",
    "hanzi": "凉",
    "pinyin": "liáng",
    "thaiMeaning": "เย็น / ชืด (อาหารเย็นชืด)",
    "englishMeaning": "cold",
    "example": {
      "hanzi": "菜快凉了，赶紧吃吧。",
      "pinyin": "Cài kuài liáng le, gǎnjǐn chī ba.",
      "thaiMeaning": "กับข้าวใกล้จะเย็นชืดแล้ว รีบกินเถอะ",
      "englishMeaning": "The food is almost cold. Eat it quickly."
    },
    "examples": [
      {
        "scenario": "ขอให้อุ่นอาหาร",
        "hanzi": "汤凉了，能帮忙热一下吗？",
        "pinyin": "Tāng liáng le, néng bāngmáng rè yíxià ma?",
        "thaiMeaning": "ซุปเย็นชืดแล้ว ช่วยอุ่นให้หน่อยได้ไหมครับ?",
        "englishMeaning": "The soup is cold. Can you help me warm it up?"
      }
    ]
  },
  {
    "id": "v549",
    "hanzi": "口味",
    "pinyin": "kǒuwèi",
    "thaiMeaning": "รสนิยมรสชาติ / รสชาติที่ชอบ",
    "englishMeaning": "taste",
    "example": {
      "hanzi": "你的口味很重，喜欢吃辣。",
      "pinyin": "Nǐ de kǒuwèi hěn zhòng, xǐhuan chī là.",
      "thaiMeaning": "รสนิยมรสชาติของคุณจัดจ้าน ชอบทานเผ็ด",
      "englishMeaning": "You have a strong taste and like spicy food."
    },
    "examples": [
      {
        "scenario": "ถามรสนิยมรสชาติเพื่อน",
        "hanzi": "这个菜很符合我的口味。",
        "pinyin": "Zhège cài hěn fúhé wǒ de kǒuwèi.",
        "thaiMeaning": "อาหารจานนี้ถูกปากถูกรสนิยมฉันมาก",
        "englishMeaning": "This dish suits my taste very well."
      }
    ]
  },
  {
    "id": "v550",
    "hanzi": "可口",
    "pinyin": "kěkǒu",
    "thaiMeaning": "อร่อยถูกปาก",
    "englishMeaning": "tasty",
    "example": {
      "hanzi": "这顿饭菜非常丰富可口。",
      "pinyin": "Zhè dùn fàncài fēicháng fēngfù kěkǒu.",
      "thaiMeaning": "มื้อนี้กับข้าวหลากหลายและอร่อยถูกปากมากๆ",
      "englishMeaning": "The meal was very rich and delicious."
    },
    "examples": [
      {
        "scenario": "ชมอาหารมื้อนั้น",
        "hanzi": "软糯可口的甜点。",
        "pinyin": "Ruǎnnuò kěkǒu de tiándiǎn.",
        "thaiMeaning": "ของหวานที่เหนียวนุ่มและอร่อยถูกปาก",
        "englishMeaning": "Soft and delicious dessert."
      }
    ]
  },
  {
    "id": "v535",
    "hanzi": "准备",
    "pinyin": "zhǔnbèi",
    "thaiMeaning": "เตรียมตัว / เตรียมพร้อม",
    "englishMeaning": "Prepare",
    "example": {
      "hanzi": "我准备好了。",
      "pinyin": "Wǒ zhǔnbèi hǎo le.",
      "thaiMeaning": "ฉันเตรียมพร้อมเรียบร้อยแล้ว",
      "englishMeaning": "我准备好了。"
    },
    "examples": [
      {
        "scenario": "การเตรียมตัวทำงาน",
        "hanzi": "明天的会议你准备得怎么样了？",
        "pinyin": "Míngtiān de huìyì nǐ zhǔnbèi de zěnmeyàng le?",
        "thaiMeaning": "การประชุมพรุ่งนี้คุณเตรียมตัวถึงไหนแล้ว?",
        "englishMeaning": "明天的会议你准备得怎么样了？"
      }
    ]
  },
  {
    "id": "v536",
    "hanzi": "介绍",
    "pinyin": "jièshào",
    "thaiMeaning": "แนะนำ (เพื่อน/งาน/สินค้า)",
    "englishMeaning": "介绍",
    "example": {
      "hanzi": "让我自我介绍一下。",
      "pinyin": "Ràng wǒ zìwǒ jièshào yíxià.",
      "thaiMeaning": "ขอให้ฉันแนะนำตัวเองสักหน่อย",
      "englishMeaning": "让我自我介绍一下。"
    },
    "examples": [
      {
        "scenario": "แนะนำเพื่อนใหม่",
        "hanzi": "这是我的好朋友，我给你介绍一下。",
        "pinyin": "Zhè shì wǒ de hǎo péngyou, wǒ gěi nǐ jièshào yíxià.",
        "thaiMeaning": "นี่คือเพื่อนสนิทของฉัน ฉันแนะนำให้คุณรู้จักนะ",
        "englishMeaning": "这是我的好朋友，我给你介绍一下。"
      }
    ]
  },
  {
    "id": "v537",
    "hanzi": "帮助",
    "pinyin": "bāngzhù",
    "thaiMeaning": "ช่วยเหลือ",
    "englishMeaning": "help",
    "example": {
      "hanzi": "谢谢你的帮助。",
      "pinyin": "Xièxie nǐ de bāngzhù.",
      "thaiMeaning": "ขอบคุณสำหรับความช่วยเหลือของคุณ",
      "englishMeaning": "谢谢你的帮助。"
    },
    "examples": [
      {
        "scenario": "ขอความช่วยเหลือ",
        "hanzi": "你需要我的帮助吗？",
        "pinyin": "Nǐ xūyào wǒ de bāngzhù ma?",
        "thaiMeaning": "คุณต้องการความช่วยเหลือจากฉันไหม?",
        "englishMeaning": "你需要我的帮助吗？"
      }
    ]
  },
  {
    "id": "v538",
    "hanzi": "容易",
    "pinyin": "róngyì",
    "thaiMeaning": "ง่าย / ไม่ยุ่งยาก",
    "englishMeaning": "容易",
    "example": {
      "hanzi": "这个题目很容易。",
      "pinyin": "Zhège tímù hěn róngyì.",
      "thaiMeaning": "โจทย์ข้อนี้ง่ายมาก",
      "englishMeaning": "这个题目很容易。"
    },
    "examples": [
      {
        "scenario": "ให้กำลังใจเพื่อน",
        "hanzi": "学习汉语并不容易，但很有趣。",
        "pinyin": "Xuéxí Hànyǔ bìng bù róngyì, dàn hěn yǒuqù.",
        "thaiMeaning": "เรียนภาษาจีนไม่ง่ายเลย แต่สนุกมาก",
        "englishMeaning": "学习汉语并不容易，但很有趣。"
      }
    ]
  },
  {
    "id": "v539",
    "hanzi": "困难",
    "pinyin": "kùnnan",
    "thaiMeaning": "ความยากลำบาก / อุปสรรค",
    "englishMeaning": "困难",
    "example": {
      "hanzi": "遇到困难不要放弃。",
      "pinyin": "Yùdào kùnnan bú yào fàngqì.",
      "thaiMeaning": "เมื่อเจอความยากลำบากอย่าเพิ่งยอมแพ้",
      "englishMeaning": "遇到困难不要放弃。"
    },
    "examples": [
      {
        "scenario": "ปรึกษาปัญหา",
        "hanzi": "如果遇到困难，随时告诉我。",
        "pinyin": "Rúguǒ yùdào kùnnan, suíshí gàosu wǒ.",
        "thaiMeaning": "ถ้าเจออุปสรรคปัญหา บอกฉันได้ตลอดเวลาเลยนะ",
        "englishMeaning": "如果遇到困难，随时告诉我。"
      }
    ]
  },
  {
    "id": "v540",
    "hanzi": "明白",
    "pinyin": "míngbai",
    "thaiMeaning": "เข้าใจกระจ่างแจ้ง",
    "englishMeaning": "明白",
    "example": {
      "hanzi": "我明白了。",
      "pinyin": "Wǒ míngbai le.",
      "thaiMeaning": "ฉันเข้าใจกระจ่างแล้ว",
      "englishMeaning": "我明白了。"
    },
    "examples": [
      {
        "scenario": "ถามความเข้าใจ",
        "hanzi": "你明白我的意思吗？",
        "pinyin": "Nǐ míngbai wǒ de yìsi ma?",
        "thaiMeaning": "คุณเข้าใจความหมายของฉันไหม?",
        "englishMeaning": "你明白我的意思吗？"
      }
    ]
  },
  {
    "id": "v541",
    "hanzi": "懂",
    "pinyin": "dǒng",
    "thaiMeaning": "เข้าใจ (ฟังเข้าใจ/อ่านรู้เรื่อง)",
    "englishMeaning": "懂",
    "example": {
      "hanzi": "我听懂了。",
      "pinyin": "Wǒ tīng dǒng le.",
      "thaiMeaning": "ฉันฟังเข้าใจแล้ว",
      "englishMeaning": "我听懂了。"
    },
    "examples": [
      {
        "scenario": "บอกระดับการฟัง",
        "hanzi": "他说得太快了，我没听懂。",
        "pinyin": "Tā shuō de tài kuài le, wǒ méi tīng dǒng.",
        "thaiMeaning": "เขาพูดเร็วเกินไป ฉันฟังไม่ทันเข้าใจ",
        "englishMeaning": "他说得太快了，我没听懂。"
      }
    ]
  },
  {
    "id": "v542",
    "hanzi": "解决",
    "pinyin": "jiějué",
    "thaiMeaning": "แก้ไข (ปัญหา/เรื่องราว)",
    "englishMeaning": "solve",
    "example": {
      "hanzi": "问题已经解决了。",
      "pinyin": "Wèntí yǐjīng jiějué le.",
      "thaiMeaning": "ปัญหาก็ได้รับการแก้ไขเรียบร้อยแล้ว",
      "englishMeaning": "问题已经解决了。"
    },
    "examples": [
      {
        "scenario": "ระดมความคิดแก้ปัญหา",
        "hanzi": "我们一起想办法解决这个问题。",
        "pinyin": "Wǒmen yìqǐ xiǎng bànfǎ jiějué zhège wèntí.",
        "thaiMeaning": "พวกเรามาช่วยกันคิดหาวิธีแก้ปัญหานี้เถอะ",
        "englishMeaning": "我们一起想办法解决这个问题。"
      }
    ]
  },
  {
    "id": "v543",
    "hanzi": "检查",
    "pinyin": "jiǎnchá",
    "thaiMeaning": "ตรวจสอบ / ตรวจเช็ก",
    "englishMeaning": "examine",
    "example": {
      "hanzi": "仔细检查一下。",
      "pinyin": "Zǐxì jiǎnchá yíxià.",
      "thaiMeaning": "ตรวจสอบอย่างรอบคอบสักหน่อย",
      "englishMeaning": "仔细检查一下。"
    },
    "examples": [
      {
        "scenario": "ก่อนส่งงาน",
        "hanzi": "交作业前请检查一遍。",
        "pinyin": "Jiāo zuòyè qián qǐng jiǎnchá yí biàn.",
        "thaiMeaning": "ก่อนส่งการบ้านกรุณาตรวจเช็กอีกสักรอบ",
        "englishMeaning": "交作业前请检查一遍。"
      }
    ]
  },
  {
    "id": "v544",
    "hanzi": "安排",
    "pinyin": "ānpái",
    "thaiMeaning": "จัดสรร / วางแผนกำหนดการ",
    "englishMeaning": "arrange",
    "example": {
      "hanzi": "听从公司的安排。",
      "pinyin": "Tīngcóng gōngsī de ānpái.",
      "thaiMeaning": "ปฏิบัติตามการจัดสรรของบริษัท",
      "englishMeaning": "听从公司的安排。"
    },
    "examples": [
      {
        "scenario": "ถามกำหนดการ",
        "hanzi": "你周末有什么安排吗？",
        "pinyin": "Nǐ zhōumò yǒu shénme ānpái ma?",
        "thaiMeaning": "สุดสัปดาห์นี้คุณมีแพลนกำหนดการอะไรไหม?",
        "englishMeaning": "你周末有什么安排吗？"
      }
    ]
  },
  {
    "id": "v545",
    "hanzi": "参加",
    "pinyin": "cānjiā",
    "thaiMeaning": "เข้าร่วม (กิจกรรม/การประชุม)",
    "englishMeaning": "join",
    "example": {
      "hanzi": "参加聚会。",
      "pinyin": "Cānjiā jùhuì.",
      "thaiMeaning": "เข้าร่วมปาร์ตี้สังสรรค์",
      "englishMeaning": "Attend a party."
    },
    "examples": [
      {
        "scenario": "ชวนเพื่อนไปงาน",
        "hanzi": "你明天来参加我的生日派对吗？",
        "pinyin": "Nǐ míngtiān lái cānjiā wǒ de shēngrì pàiduì ma?",
        "thaiMeaning": "พรุ่งนี้คุณจะมาร่วมงานปาร์ตี้วันเกิดของฉันไหม?",
        "englishMeaning": "你明天来参加我的生日派对吗？"
      }
    ]
  },
  {
    "id": "v546",
    "hanzi": "方便",
    "pinyin": "fāngbiàn",
    "thaiMeaning": "สะดวกสบาย",
    "englishMeaning": "convenient",
    "example": {
      "hanzi": "现在说话方便吗？",
      "pinyin": "Xiànzài shuōhuà fāngbiàn ma?",
      "thaiMeaning": "ตอนนี้สะดวกคุยไหมครับ?",
      "englishMeaning": "现在说话方便吗？"
    },
    "examples": [
      {
        "scenario": "คมนาคมสะดวก",
        "hanzi": "这里的交通非常方便。",
        "pinyin": "Zhèlǐ de jiāotōng fēicháng fāngbiàn.",
        "thaiMeaning": "การคมนาคมขนส่งของที่นี่สะดวกสบายมากๆ",
        "englishMeaning": "这里的交通非常方便。"
      }
    ]
  },
  {
    "id": "v547",
    "hanzi": "经常",
    "pinyin": "jīngcháng",
    "thaiMeaning": "บ่อยๆ / เป็นประจำ",
    "englishMeaning": "often",
    "example": {
      "hanzi": "我经常去这家餐厅。",
      "pinyin": "Wǒ jīngcháng qù zhè jiā cān tīng.",
      "thaiMeaning": "ฉันไปร้านอาหารร้านนี้เป็นประจำ",
      "englishMeaning": "我经常去这家餐厅。"
    },
    "examples": [
      {
        "scenario": "เล่าเรื่องสุขภาพ",
        "hanzi": "他经常运动，所以身体很好。",
        "pinyin": "Tā jīngcháng yùndòng, suǒyǐ shēntǐ hěn hǎo.",
        "thaiMeaning": "เขาออกกำลังกายเป็นประจำ สุขภาพร่างกายเลยดีมาก",
        "englishMeaning": "他经常运动，所以身体很好。"
      }
    ]
  },
  {
    "id": "v548",
    "hanzi": "习惯",
    "pinyin": "xíguàn",
    "thaiMeaning": "ความเคยชิน / นิสัยประจำ",
    "englishMeaning": "Habit",
    "example": {
      "hanzi": "我已经习惯了。",
      "pinyin": "Wǒ yǐjīng xíguàn le.",
      "thaiMeaning": "ฉันชินแล้วล่ะ",
      "englishMeaning": "我已经习惯了。"
    },
    "examples": [
      {
        "scenario": "ปรับตัวในต่างแดน",
        "hanzi": "你习惯这里的气候吗？",
        "pinyin": "Nǐ xíguàn zhèlǐ de qìhòu ma?",
        "thaiMeaning": "คุณคุ้นชินกับสภาพอากาศที่นี่หรือยัง?",
        "englishMeaning": "你习惯这里的气候吗？"
      }
    ]
  },
  {
    "id": "v549",
    "hanzi": "相信",
    "pinyin": "xiāngxìn",
    "thaiMeaning": "เชื่อมั่น / เชื่อถือ",
    "englishMeaning": "believe",
    "example": {
      "hanzi": "相信你自己！",
      "pinyin": "Xiāngxìn nǐ zìjǐ!",
      "thaiMeaning": "เชื่อมั่นในตัวเองนะ!",
      "englishMeaning": "相信你自己！"
    },
    "examples": [
      {
        "scenario": "ให้กำลังใจเพื่อน",
        "hanzi": "我相信你一定能做到。",
        "pinyin": "Wǒ xiāngxìn nǐ yídìng néng zuò dào.",
        "thaiMeaning": "ฉันเชื่อว่าคุณต้องทำสำเร็จแน่นอน",
        "englishMeaning": "我相信你一定能做到。"
      }
    ]
  },
  {
    "id": "v550",
    "hanzi": "放心",
    "pinyin": "fàngxīn",
    "thaiMeaning": "สบายใจ / วางใจ",
    "englishMeaning": "rest assured",
    "example": {
      "hanzi": "请放心。",
      "pinyin": "Qǐng fàngxīn.",
      "thaiMeaning": "โปรดวางใจได้เลย",
      "englishMeaning": "Please feel free to worry."
    },
    "examples": [
      {
        "scenario": "บอกให้เพื่อนเลิกกังวล",
        "hanzi": "这件事交给我，你放心吧。",
        "pinyin": "Zhè jiàn shì jiāo gěi wǒ, nǐ fàngxīn ba.",
        "thaiMeaning": "เรื่องนี้ยกให้ฉันจัดการ คุณสบายใจได้เลย",
        "englishMeaning": "这件事交给我，你放心吧。"
      }
    ]
  },
  {
    "id": "v551",
    "hanzi": "仔细",
    "pinyin": "zǐxì",
    "thaiMeaning": "ละเอียดรอบคอบ",
    "englishMeaning": "仔细",
    "example": {
      "hanzi": "请仔细看。",
      "pinyin": "Qǐng zǐxì kàn.",
      "thaiMeaning": "กรุณาดูอย่างละเอียดรอบคอบ",
      "englishMeaning": "请仔细看。"
    },
    "examples": [
      {
        "scenario": "อ่านสัญญา",
        "hanzi": "看合同要非常仔细。",
        "pinyin": "Kàn hétong yào fēicháng zǐxì.",
        "thaiMeaning": "การอ่านสัญญาต้องละเอียดรอบคอบเป็นพิเศษ",
        "englishMeaning": "看合同要非常仔细。"
      }
    ]
  },
  {
    "id": "v552",
    "hanzi": "特别",
    "pinyin": "tèbié",
    "thaiMeaning": "พิเศษ / เป็นพิเศษ",
    "englishMeaning": "special",
    "example": {
      "hanzi": "今天特别热。",
      "pinyin": "Jīntiān tèbié rè.",
      "thaiMeaning": "วันนี้ร้อนเป็นพิเศษ",
      "englishMeaning": "今天特别热。"
    },
    "examples": [
      {
        "scenario": "ชมอาหาร",
        "hanzi": "这个甜点味道很特别。",
        "pinyin": "Zhège tiándiǎn wèidào hěn tèbié.",
        "thaiMeaning": "ของหวานชิ้นนี้รสชาติพิเศษมาก",
        "englishMeaning": "这个甜点味道很特别。"
      }
    ]
  },
  {
    "id": "v553",
    "hanzi": "简单",
    "pinyin": "jiǎndān",
    "thaiMeaning": "เรียบง่าย / ไม่ซับซ้อน",
    "englishMeaning": "Simple",
    "example": {
      "hanzi": "这道题很简单。",
      "pinyin": "Zhè dào tímù hěn jiǎndān.",
      "thaiMeaning": "โจทย์ข้อนี้เรียบง่ายมาก",
      "englishMeaning": "这道题很简单。"
    },
    "examples": [
      {
        "scenario": "พูดถึงชีวิต",
        "hanzi": "我喜欢简单生活。",
        "pinyin": "Wǒ xǐhuan jiǎndān shēnghuó.",
        "thaiMeaning": "ฉันชอบการใช้ชีวิตที่เรียบง่าย",
        "englishMeaning": "我喜欢简单生活。"
      }
    ]
  },
  {
    "id": "v554",
    "hanzi": "复杂",
    "pinyin": "fùzá",
    "thaiMeaning": "ซับซ้อน / ยุ่งยาก",
    "englishMeaning": "complex",
    "example": {
      "hanzi": "情况很复杂。",
      "pinyin": "Qíngkuàng hěn fùzá.",
      "thaiMeaning": "สถานการณ์ซับซ้อนมาก",
      "englishMeaning": "情况很复杂。"
    },
    "examples": [
      {
        "scenario": "อธิบายปัญหา",
        "hanzi": "这个问题有点儿复杂。",
        "pinyin": "Zhège wèntí yǒudiǎnr fùzá.",
        "thaiMeaning": "ปัญหานี้ค่อนข้างซับซ้อนนิดหน่อย",
        "englishMeaning": "这个问题有点儿复杂。"
      }
    ]
  },
  {
    "id": "v555",
    "hanzi": "努力",
    "pinyin": "nǔlì",
    "thaiMeaning": "ขยัน / พยายามตั้งใจ",
    "englishMeaning": "effort",
    "example": {
      "hanzi": "努力学习。",
      "pinyin": "Nǔlì xuéxí.",
      "thaiMeaning": "ตั้งใจขยันเรียนหนังสือ",
      "englishMeaning": "Study hard."
    },
    "examples": [
      {
        "scenario": "อวยพรการทำงาน",
        "hanzi": "只要努力，就一定能成功。",
        "pinyin": "Zhǐyào nǔlì, jiù yídìng néng chénggōng.",
        "thaiMeaning": "เพียงแค่ตั้งใจพยายาม ต้องประสบความสำเร็จอย่างแน่นอน",
        "englishMeaning": "只要努力，就一定能成功。"
      }
    ]
  },
  {
    "id": "v556",
    "hanzi": "坚持",
    "pinyin": "jiānchí",
    "thaiMeaning": "ยืนหยัด / ทำต่อเนื่องไม่ท้อ",
    "englishMeaning": "persist in",
    "example": {
      "hanzi": "坚持到底。",
      "pinyin": "Jiānchí dào dǐ.",
      "thaiMeaning": "ยืนหยัดมุ่งมั่นจนถึงที่สุด",
      "englishMeaning": "Stay the course."
    },
    "examples": [
      {
        "scenario": "ออกกำลังกาย",
        "hanzi": "每天坚持跑步三十分钟。",
        "pinyin": "Měitiān jiānchí pǎobù sānshí fēnzhōng.",
        "thaiMeaning": "ยืนหยัดวิ่งออกกำลังกายวันละ 30 นาทีทุกวัน",
        "englishMeaning": "每天坚持跑步三十分钟。"
      }
    ]
  },
  {
    "id": "v557",
    "hanzi": "影响",
    "pinyin": "yǐngxiǎng",
    "thaiMeaning": "ส่งผลกระทบ / อิทธิพล",
    "englishMeaning": "Influence",
    "example": {
      "hanzi": "不要影响别人。",
      "pinyin": "Bú yào yǐngxiǎng biérén.",
      "thaiMeaning": "อย่าส่งผลกระทบรบกวนคนอื่น",
      "englishMeaning": "不要影响别人。"
    },
    "examples": [
      {
        "scenario": "สภาพอากาศกับงาน",
        "hanzi": "天气影响了我们的出行计划。",
        "pinyin": "Tiānqì yǐngxiǎng le wǒmen de chūxíng jìhuà.",
        "thaiMeaning": "สภาพอากาศส่งผลกระทบต่อแผนการเดินทางของพวกเรา",
        "englishMeaning": "天气影响了我们的出行计划。"
      }
    ]
  },
  {
    "id": "v558",
    "hanzi": "改变",
    "pinyin": "gǎibiàn",
    "thaiMeaning": "เปลี่ยนแปลง / ปรับเปลี่ยน",
    "englishMeaning": "Change",
    "example": {
      "hanzi": "改变主意。",
      "pinyin": "Gǎibiàn zhǔyi.",
      "thaiMeaning": "เปลี่ยนใจ / เปลี่ยนความตั้งใจ",
      "englishMeaning": "改变主意。"
    },
    "examples": [
      {
        "scenario": "พัฒนาตัวเอง",
        "hanzi": "学习可以改变命运。",
        "pinyin": "Xuéxí kěyǐ gǎibiàn mìngyùn.",
        "thaiMeaning": "การศึกษาเรียนรู้สามารถเปลี่ยนแปลงโชคชะตาชีวิตได้",
        "englishMeaning": "学习可以改变命运。"
      }
    ]
  },
  {
    "id": "v559",
    "hanzi": "机会",
    "pinyin": "jīhuì",
    "thaiMeaning": "โอกาส",
    "englishMeaning": "Chance",
    "example": {
      "hanzi": "抓住机会。",
      "pinyin": "Zhuāzhù jīhuì.",
      "thaiMeaning": "ไขว่คว้าฉวยโอกาสไว้",
      "englishMeaning": "Take a chance."
    },
    "examples": [
      {
        "scenario": "โอกาสการทำงาน",
        "hanzi": "这是一次难得的工作机会。",
        "pinyin": "Zhè shì yí cì nándé de gōngzuò jīhuì.",
        "thaiMeaning": "นี่คือโอกาสการทำงานที่หาได้ยากครั้งหนึ่ง",
        "englishMeaning": "这是一次难得的工作机会。"
      }
    ]
  },
  {
    "id": "v560",
    "hanzi": "顺利",
    "pinyin": "shùnlì",
    "thaiMeaning": "ราบรื่น / ผ่านไปด้วยดี",
    "englishMeaning": "顺利",
    "example": {
      "hanzi": "一切顺利！",
      "pinyin": "Yíqiè shùnlì!",
      "thaiMeaning": "ขอให้ทุกอย่างราบรื่น!",
      "englishMeaning": "一切顺利！"
    },
    "examples": [
      {
        "scenario": "อวยพรเดินทาง/สอบ",
        "hanzi": "祝你面试顺利！",
        "pinyin": "Zhù nǐ miànshì shùnlì!",
        "thaiMeaning": "ขอให้คุณสอบสัมภาษณ์ผ่านไปได้ด้วยดีราบรื่นนะ!",
        "englishMeaning": "祝你面试顺利！"
      }
    ]
  },
  {
    "id": "v561",
    "hanzi": "成功",
    "pinyin": "chénggōng",
    "thaiMeaning": "ประสบความสำเร็จ",
    "englishMeaning": "success",
    "example": {
      "hanzi": "祝你成功！",
      "pinyin": "Zhù nǐ chénggōng!",
      "thaiMeaning": "ขอให้คุณประสบความสำเร็จ!",
      "englishMeaning": "祝你成功！"
    },
    "examples": [
      {
        "scenario": "ยินดีกับเพื่อน",
        "hanzi": "经过努力，他终于成功了。",
        "pinyin": "Jīngguò nǔlì, tā zhōngyú chénggōng le.",
        "thaiMeaning": "หลังจากพยายามอย่างหนัก ในที่สุดเขาประสบความสำเร็จแล้ว",
        "englishMeaning": "经过努力，他终于成功了。"
      }
    ]
  },
  {
    "id": "v562",
    "hanzi": "应该",
    "pinyin": "yīnggāi",
    "thaiMeaning": "ควรจะ / สมควร",
    "englishMeaning": "should",
    "example": {
      "hanzi": "你应该早点儿休息。",
      "pinyin": "Nǐ yīnggāi zǎodiǎnr xiūxi.",
      "thaiMeaning": "คุณควรจะพักผ่อนให้เร็วหน่อยนะ",
      "englishMeaning": "你应该早点儿休息。"
    },
    "examples": [
      {
        "scenario": "คำแนะนำหวังดี",
        "hanzi": "有问题应该及时解决。",
        "pinyin": "Yǒu wèntí yīnggāi jíshí jiějué.",
        "thaiMeaning": "มีปัญหาก็ควรจะรีบแก้ไขให้ทันท่วงที",
        "englishMeaning": "有问题应该及时解决。"
      }
    ]
  },
  {
    "id": "v563",
    "hanzi": "必须",
    "pinyin": "bìxū",
    "thaiMeaning": "จำแนกต้อง / ต้อง...ให้ได้",
    "englishMeaning": "must",
    "example": {
      "hanzi": "必须按时完成。",
      "pinyin": "Bìxū ànshí wánchéng.",
      "thaiMeaning": "ต้องทำเสร็จให้ทันเวลา",
      "englishMeaning": "必须按时完成。"
    },
    "examples": [
      {
        "scenario": "กฎระเบียบ",
        "hanzi": "进入车间必须戴安全帽。",
        "pinyin": "Jìnrù chējiān bìxū dài ānquán mào.",
        "thaiMeaning": "เข้าโรงงานต้องสวมหมวกนิรภัย",
        "englishMeaning": "进入车间必须戴安全帽。"
      }
    ]
  },
  {
    "id": "v564",
    "hanzi": "选择",
    "pinyin": "xuǎnzé",
    "thaiMeaning": "เลือก / ทางเลือก",
    "englishMeaning": "choose",
    "example": {
      "hanzi": "做出正确的选择。",
      "pinyin": "Zuòchū zhèngquè de xuǎnzé.",
      "thaiMeaning": "ทำการตัดสินใจเลือกสิ่งที่ถูกต้อง",
      "englishMeaning": "做出正确的选择。"
    },
    "examples": [
      {
        "scenario": "เลือกเมนู/งาน",
        "hanzi": "你有两种选择。",
        "pinyin": "Nǐ yǒu liǎng zhǒng xuǎnzé.",
        "thaiMeaning": "คุณมีทางเลือกอยู่สองทาง",
        "englishMeaning": "你有两种选择。"
      }
    ]
  },
  {
    "id": "v565",
    "hanzi": "讨论",
    "pinyin": "tǎolùn",
    "thaiMeaning": "อภิปราย / หารือแลกเปลี่ยน",
    "englishMeaning": "讨论",
    "example": {
      "hanzi": "开会讨论。",
      "pinyin": "Kāihuì tǎolùn.",
      "thaiMeaning": "ประชุมอภิปรายหารือ",
      "englishMeaning": "开会讨论。"
    },
    "examples": [
      {
        "scenario": "ประชุมงาน",
        "hanzi": "我们讨论一下下一步的计划。",
        "pinyin": "Wǒmen tǎolùn yíxià xià yí bù de jìhuà.",
        "thaiMeaning": "พวกเรามาหารือแผนการขั้นต่อไปกันสักหน่อย",
        "englishMeaning": "我们讨论一下下一步的计划。"
      }
    ]
  },
  {
    "id": "v566",
    "hanzi": "认为",
    "pinyin": "rènwéi",
    "thaiMeaning": "มีความเห็นว่า / คิดว่า",
    "englishMeaning": "认为",
    "example": {
      "hanzi": "我认为很对。",
      "pinyin": "Wǒ rènwéi hěn duì.",
      "thaiMeaning": "ฉันเห็นว่าถูกต้องมาก",
      "englishMeaning": "我认为很对。"
    },
    "examples": [
      {
        "scenario": "แสดงความเห็น",
        "hanzi": "大家普遍认为这个方案可行。",
        "pinyin": "Dàjiā pǔbiàn rènwéi zhège fāng'àn kěxíng.",
        "thaiMeaning": "ทุกคนต่างมีความเห็นว่าแผนงานนี้น่าจะใช้ได้จริง",
        "englishMeaning": "大家普遍认为这个方案可行。"
      }
    ]
  },
  {
    "id": "v567",
    "hanzi": "意思",
    "pinyin": "yìsi",
    "thaiMeaning": "ความหมาย / ความตั้งใจ / ความน่าสนใจ",
    "englishMeaning": "意思",
    "example": {
      "hanzi": "很有意思。",
      "pinyin": "Hěn yǒu yìsi.",
      "thaiMeaning": "น่าสนใจมาก",
      "englishMeaning": "很有意思。"
    },
    "examples": [
      {
        "scenario": "ถามความหมายคำ",
        "hanzi": "这个词是什么意思？",
        "pinyin": "Zhège cí shì shénme yìsi?",
        "thaiMeaning": "คำศัพท์คำนี้มีความหมายว่าอย่างไร?",
        "englishMeaning": "这个词是什么意思？"
      }
    ]
  },
  {
    "id": "v568",
    "hanzi": "舒服",
    "pinyin": "shūfu",
    "thaiMeaning": "สบายกายสบายใจ",
    "englishMeaning": "Comfortable",
    "example": {
      "hanzi": "觉得不舒服。",
      "pinyin": "Juéde bù shūfu.",
      "thaiMeaning": "รู้สึกไม่ค่อยสบาย",
      "englishMeaning": "觉得不舒服。"
    },
    "examples": [
      {
        "scenario": "นอนพักผ่อน",
        "hanzi": "这张床躺着非常舒服。",
        "pinyin": "Zhāng chuáng tǎng zhe fēicháng shūfu.",
        "thaiMeaning": "เตียงนี้เอนหลังนอนสบายมากๆ",
        "englishMeaning": "这张床躺着非常舒服。"
      }
    ]
  },
  {
    "id": "v569",
    "hanzi": "清楚",
    "pinyin": "qīngchu",
    "thaiMeaning": "ชัดเจน / แจ่มแจ้ง",
    "englishMeaning": "clear",
    "example": {
      "hanzi": "听得很清楚。",
      "pinyin": "Tīng de hěn qīngchu.",
      "thaiMeaning": "ฟังได้ชัดเจนมาก",
      "englishMeaning": "听得很清楚。"
    },
    "examples": [
      {
        "scenario": "อธิบายให้ฟัง",
        "hanzi": "请把具体地址写清楚。",
        "pinyin": "Qǐng bǎ jùtǐ dìzhǐ xiě qīngchu.",
        "thaiMeaning": "กรุณาเขียนที่อยู่อย่างละเอียดให้ชัดเจนนะ",
        "englishMeaning": "请把具体地址写清楚。"
      }
    ]
  },
  {
    "id": "v570",
    "hanzi": "满意",
    "pinyin": "mǎnyì",
    "thaiMeaning": "พึงพอใจ",
    "englishMeaning": "满意",
    "example": {
      "hanzi": "我很满意。",
      "pinyin": "Wǒ hěn mǎnyì.",
      "thaiMeaning": "ฉันพึงพอใจมาก",
      "englishMeaning": "我很满意。"
    },
    "examples": [
      {
        "scenario": "ประเมินบริการ",
        "hanzi": "客户对我们的服务非常满意。",
        "pinyin": "Kèhù duì wǒmen de fúwù fēicháng mǎnyì.",
        "thaiMeaning": "ลูกค้าพึงพอใจกับการบริการของพวกเราเป็นอย่างมาก",
        "englishMeaning": "客户对我们的服务非常满意。"
      }
    ]
  },
  {
    "id": "v571",
    "hanzi": "总是",
    "pinyin": "zǒngshì",
    "thaiMeaning": "มักจะ...เสมอ",
    "englishMeaning": "always",
    "example": {
      "hanzi": "他总是笑眯眯的。",
      "pinyin": "Tā zǒngshì xiàomīmī de.",
      "thaiMeaning": "เขามักจะยิ้มแย้มอยู่เสมอ",
      "englishMeaning": "他总是笑眯眯的。"
    },
    "examples": [
      {
        "scenario": "ชมเพื่อนขยัน",
        "hanzi": "她总是第一个来到办公室。",
        "pinyin": "Tā zǒngshì dì-yī gè lái dào bàngōngshì.",
        "thaiMeaning": "เธอมักจะเป็นคนแรกที่มาถึงออฟฟิศเสมอ",
        "englishMeaning": "她总是第一个来到办公室。"
      }
    ]
  },
  {
    "id": "v572",
    "hanzi": "愿意",
    "pinyin": "yuànyì",
    "thaiMeaning": "ยินยอม / เต็มใจ",
    "englishMeaning": "愿意",
    "example": {
      "hanzi": "你愿意吗？",
      "pinyin": "Nǐ yuànyì ma?",
      "thaiMeaning": "คุณยินยอมเต็มใจไหม?",
      "englishMeaning": "你愿意吗？"
    },
    "examples": [
      {
        "scenario": "ชวนทำงานร่วมกัน",
        "hanzi": "我非常愿意和你一起工作。",
        "pinyin": "Wǒ fēicháng yuànyì hé nǐ yìqǐ gōngzuò.",
        "thaiMeaning": "ฉันยินดีและเต็มใจทำงานร่วมกับคุณเป็นอย่างยิ่ง",
        "englishMeaning": "我非常愿意和你一起工作。"
      }
    ]
  },
  {
    "id": "v573",
    "hanzi": "照顾",
    "pinyin": "zhàogù",
    "thaiMeaning": "ดูแลเอาใจใส่",
    "englishMeaning": "照顾",
    "example": {
      "hanzi": "照顾好自己。",
      "pinyin": "Zhàogù hǎo zìjǐ.",
      "thaiMeaning": "ดูแลตัวเองให้ดีนะ",
      "englishMeaning": "照顾好自己。"
    },
    "examples": [
      {
        "scenario": "ฝากฝังผู้ใหญ่/เด็ก",
        "hanzi": "谢谢你这段时间对我的照顾。",
        "pinyin": "Xièxie nǐ zhè duàn shíjiān duì wǒ de zhàogù.",
        "thaiMeaning": "ขอบคุณที่คุณช่วยดูแลฉันในช่วงเวลานี้นะ",
        "englishMeaning": "谢谢你这段时间对我的照顾。"
      }
    ]
  },
  {
    "id": "v574",
    "hanzi": "提醒",
    "pinyin": "tíxǐng",
    "thaiMeaning": "เตือน / เตือนความจำ",
    "englishMeaning": "提醒",
    "example": {
      "hanzi": "谢谢你提醒我。",
      "pinyin": "Xièxie nǐ tíxǐng wǒ.",
      "thaiMeaning": "ขอบคุณที่ช่วยเตือนฉัน",
      "englishMeaning": "谢谢你提醒我。"
    },
    "examples": [
      {
        "scenario": "ตั้งนาฬิกาเตือน",
        "hanzi": "记得提醒我三点开会。",
        "pinyin": "Jìde tíxǐng wǒ sān diǎn kāihuì.",
        "thaiMeaning": "อย่าลืมช่วยเตือนฉันตอนบ่าย 3 โมงว่ามีประชุมนะ",
        "englishMeaning": "记得提醒我三点开会。"
      }
    ]
  },
  {
    "id": "v575",
    "hanzi": "发现",
    "pinyin": "fāxiàn",
    "thaiMeaning": "ค้นพบ / สังเกตเห็น",
    "englishMeaning": "Discover",
    "example": {
      "hanzi": "我发现了新方法。",
      "pinyin": "Wǒ fāxiàn le xīn fāngfǎ.",
      "thaiMeaning": "ฉันค้นพบวิธีใหม่แล้ว",
      "englishMeaning": "我发现了新方法。"
    },
    "examples": [
      {
        "scenario": "สังเกตความผิดปกติ",
        "hanzi": "医生发现他的指标恢复正常了。",
        "pinyin": "Yīshēng fāxiàn tā de zhǐbiāo huīfù zhèngcháng le.",
        "thaiMeaning": "หมอสังเกตพบว่าค่าตรวจของเขากลับคืนสู่ปกติแล้ว",
        "englishMeaning": "医生发现他的指标恢复正常了。"
      }
    ]
  },
  {
    "id": "v576",
    "hanzi": "适合",
    "pinyin": "shìhé",
    "thaiMeaning": "เหมาะสม / เหมาะกับ",
    "englishMeaning": "适合",
    "example": {
      "hanzi": "这件衣服很适合你。",
      "pinyin": "Zhè jiàn yīfu hěn shìhé nǐ.",
      "thaiMeaning": "เสื้อตัวนี้เหมาะกับคุณมาก",
      "englishMeaning": "这件衣服很适合你。"
    },
    "examples": [
      {
        "scenario": "แนะแนวงาม",
        "hanzi": "这份工作很适合你的专业。",
        "pinyin": "Zhè fèn gōngzuò hěn shìhé nǐ de zhuānyè.",
        "thaiMeaning": "งานนี้เหมาะสมกับสาขาวิชาที่คุณเรียนมามาก",
        "englishMeaning": "这份工作很适合你的专业。"
      }
    ]
  },
  {
    "id": "v577",
    "hanzi": "另外",
    "pinyin": "lìngwài",
    "thaiMeaning": "นอกเหนือจากนี้ / อีกอันหนึ่ง",
    "englishMeaning": "另外",
    "example": {
      "hanzi": "另外还有一件事。",
      "pinyin": "Lìngwài hái yǒu yí jiàn shì.",
      "thaiMeaning": "นอกเหนือจากนี้ยังมีอีกเรื่องหนึ่งนะ",
      "englishMeaning": "另外还有一件事。"
    },
    "examples": [
      {
        "scenario": "สั่งของเพิ่ม",
        "hanzi": "除了这个，我另外还需要买两本书。",
        "pinyin": "Chúle zhège, wǒ lìngwài hái xūyào mǎi liǎng běn shū.",
        "thaiMeaning": "นอกจากอันนี้ นอกเหนือจากนี้ฉันยังต้องซื้อหนังสืออีกสองเล่ม",
        "englishMeaning": "除了这个，我另外还需要买两本书。"
      }
    ]
  },
  {
    "id": "v578",
    "hanzi": "甚至",
    "pinyin": "shènzhì",
    "thaiMeaning": "แม้กระทั่ง / ถึงขั้น",
    "englishMeaning": "甚至",
    "example": {
      "hanzi": "甚至连他都不知道。",
      "pinyin": "Shènzhì lián tā dōu bù zhīdào.",
      "thaiMeaning": "แม้กระทั่งเขาก็ยังไม่รู้เลย",
      "englishMeaning": "甚至连他都不知道。"
    },
    "examples": [
      {
        "scenario": "เล่าความขยัน",
        "hanzi": "他忙得甚至没有时间吃午饭。",
        "pinyin": "Tā máng de shènzhì méiyǒu shíjiān chī wǔfàn.",
        "thaiMeaning": "เขายุ่งมากถึงขั้นไม่มีเวลาแม้กระทั่งกินข้าวเที่ยง",
        "englishMeaning": "他忙得甚至没有时间吃午饭。"
      }
    ]
  },
  {
    "id": "v579",
    "hanzi": "保证",
    "pinyin": "bǎozhèng",
    "thaiMeaning": "รับประกัน / ยืนยันให้คำมั่น",
    "englishMeaning": "ensure",
    "example": {
      "hanzi": "我保证完成任务。",
      "pinyin": "Wǒ bǎozhèng wánchéng rènwù.",
      "thaiMeaning": "ฉันยืนยันรับประกันว่าจะทำภารกิจให้สำเร็จ",
      "englishMeaning": "我保证完成任务。"
    },
    "examples": [
      {
        "scenario": "การันตีคุณภาพ",
        "hanzi": "我们保证产品的质量符合标准。",
        "pinyin": "Wǒmen bǎozhèng chǎnpǐn de zhìliàng fúhé biāozhǔn.",
        "thaiMeaning": "พวกเรารับประกันว่าคุณภาพของสินค้าได้มาตรฐาน",
        "englishMeaning": "我们保证产品的质量符合标准。"
      }
    ]
  },
  {
    "id": "v580",
    "hanzi": "重新",
    "pinyin": "chóngxīn",
    "thaiMeaning": "ทำใหม่อีกครั้ง / เริ่มใหม่",
    "englishMeaning": "重新",
    "example": {
      "hanzi": "重新开始。",
      "pinyin": "Chóngxīn kāishǐ.",
      "thaiMeaning": "เริ่มต้นใหม่อีกครั้ง",
      "englishMeaning": "重新开始。"
    },
    "examples": [
      {
        "scenario": "แก้ไขเอกสาร",
        "hanzi": "请把这份文件重新打印一遍。",
        "pinyin": "Qǐng bǎ zhè fèn wénjiàn chóngxīn dǎyìn yí biàn.",
        "thaiMeaning": "กรุณานำเอกสารนี้ไปพิมพ์ใหม่อีกสักรอบนะ",
        "englishMeaning": "请把这份文件重新打印一遍。"
      }
    ]
  },
  {
    "id": "v581",
    "hanzi": "申请",
    "pinyin": "shēnqǐng",
    "thaiMeaning": "ยื่นขอ / สมัคร (วีซ่า/งาน/ทุน)",
    "englishMeaning": "申请",
    "example": {
      "hanzi": "申请签证。",
      "pinyin": "Shēnqǐng qiānzhèng.",
      "thaiMeaning": "ยื่นขอวีซ่า",
      "englishMeaning": "申请签证。"
    },
    "examples": [
      {
        "scenario": "ยื่นใบลา",
        "hanzi": "我想申请几天年假。",
        "pinyin": "Wǒ xiǎng shēnqǐng jǐ tiān niánjià.",
        "thaiMeaning": "ฉันอยากจะยื่นขอลาพักร้อนสักสองสามวัน",
        "englishMeaning": "我想申请几天年假。"
      }
    ]
  },
  {
    "id": "v582",
    "hanzi": "考虑",
    "pinyin": "kǎolǜ",
    "thaiMeaning": "พิจารณาอย่างรอบคอบ",
    "englishMeaning": "consider",
    "example": {
      "hanzi": "让我再考虑考虑。",
      "pinyin": "Ràng wǒ zài kǎolǜ kǎolǜ.",
      "thaiMeaning": "ขอให้ฉันลองพิจารณาดูอีกสักนิด",
      "englishMeaning": "让我再考虑考虑。"
    },
    "examples": [
      {
        "scenario": "เจรจาธุรกิจ",
        "hanzi": "我们会认真考虑您的建议。",
        "pinyin": "Wǒmen huì rènzhēn kǎolǜ nín de jiànyì.",
        "thaiMeaning": "พวกเราจะนำข้อเสนอแนะของคุณไปพิจารณาอย่างจริงจัง",
        "englishMeaning": "我们会认真考虑您的建议。"
      }
    ]
  },
  {
    "id": "v583",
    "hanzi": "了解",
    "pinyin": "liǎojiě",
    "thaiMeaning": "รู้จักและเข้าใจเป็นอย่างดี",
    "englishMeaning": "learn",
    "example": {
      "hanzi": "我很了解他。",
      "pinyin": "Wǒ hěn liǎojiě tā.",
      "thaiMeaning": "ฉันรู้จักและเข้าใจเขาดีมาก",
      "englishMeaning": "我很了解他。"
    },
    "examples": [
      {
        "scenario": "ศึกษาตลาด",
        "hanzi": "我们需要深入了解当地市场。",
        "pinyin": "Wǒmen xūyào shēnrù liǎojiě dāngdì shìchǎng.",
        "thaiMeaning": "พวกเราต้องทำความเข้าใจลึกซึ้งในตลาดท้องถิ่น",
        "englishMeaning": "我们需要深入了解当地市场。"
      }
    ]
  },
  {
    "id": "v584",
    "hanzi": "提高",
    "pinyin": "tígāo",
    "thaiMeaning": "ยกระดับ / พัฒนาเพิ่มขึ้น",
    "englishMeaning": "improve",
    "example": {
      "hanzi": "提高汉语水平。",
      "pinyin": "Tígāo Hànyǔ shuǐpíng.",
      "thaiMeaning": "ยกระดับทักษะภาษาจีน",
      "englishMeaning": "提高汉语水平。"
    },
    "examples": [
      {
        "scenario": "พัฒนาการทำงาน",
        "hanzi": "使用新软件可以提高工作效率。",
        "pinyin": "Shǐyòng xīn ruǎnjiàn kěyǐ tígāo gōngzuò xiàolǜ.",
        "thaiMeaning": "การใช้ซอฟต์แวร์ใหม่ช่วยยกระดับประสิทธิภาพการทำงานได้",
        "englishMeaning": "使用新软件可以提高工作效率。"
      }
    ]
  },
  {
    "id": "v585",
    "hanzi": "打算",
    "pinyin": "dǎsuàn",
    "thaiMeaning": "ตั้งใจ / วางแผนว่าจะ...",
    "englishMeaning": "打算",
    "example": {
      "hanzi": "你假期有什么打算？",
      "pinyin": "Nǐ jiàqī yǒu shénme dǎsuàn?",
      "thaiMeaning": "ช่วงวันหยุดคุณวางแผนทำอะไรไว้บ้าง?",
      "englishMeaning": "你假期有什么打算？"
    },
    "examples": [
      {
        "scenario": "แพลนท่องเที่ยว",
        "hanzi": "我打算下个月去中国旅游。",
        "pinyin": "Wǒ dǎsuàn xià ge yuè qù Zhōngguó lǚyóu.",
        "thaiMeaning": "ฉันวางแผนว่าจะไปเที่ยวจีนในเดือนหน้า",
        "englishMeaning": "我打算下个月去中国旅游。"
      }
    ]
  },
  {
    "id": "v586",
    "hanzi": "决定",
    "pinyin": "juédìng",
    "thaiMeaning": "ตัดสินใจ",
    "englishMeaning": "Decide",
    "example": {
      "hanzi": "我已经做出了决定。",
      "pinyin": "Wǒ yǐjīng zuòchū le juédìng.",
      "thaiMeaning": "ฉันทำการตัดสินใจเรียบร้อยแล้ว",
      "englishMeaning": "我已经做出了决定。"
    },
    "examples": [
      {
        "scenario": "การตัดสินใจเปลี่ยนงาน",
        "hanzi": "这个决定非常重要。",
        "pinyin": "Zhège juédìng fēicháng zhòngyào.",
        "thaiMeaning": "การตัดสินใจครั้งนี้มีความสำคัญเป็นอย่างมาก",
        "englishMeaning": "这个决定非常重要。"
      }
    ]
  },
  {
    "id": "v587",
    "hanzi": "锻炼",
    "pinyin": "duànliàn",
    "thaiMeaning": "ออกกำลังกาย / ฝึกฝน",
    "englishMeaning": "exercise",
    "example": {
      "hanzi": "每天坚持锻炼身体。",
      "pinyin": "Měitiān jiānchí duànliàn shēntǐ.",
      "thaiMeaning": "ยืนหยัดออกกำลังกายร่างกายทุกวัน",
      "englishMeaning": "每天坚持锻炼身体。"
    },
    "examples": [
      {
        "scenario": "คำแนะนำสุขภาพ",
        "hanzi": "多锻炼身体可以提高免疫力。",
        "pinyin": "Duō duànliàn shēntǐ kěyǐ tígāo miǎnyìlì.",
        "thaiMeaning": "ออกกำลังกายบ่อยๆ ช่วยยกระดับภูมิคุ้มกันร่างกาย",
        "englishMeaning": "多锻炼身体可以提高免疫力。"
      }
    ]
  },
  {
    "id": "v588",
    "hanzi": "关系",
    "pinyin": "guānxi",
    "thaiMeaning": "ความสัมพันธ์ / การเกี่ยวข้อง",
    "englishMeaning": "关系",
    "example": {
      "hanzi": "没关系。",
      "pinyin": "Méi guānxi.",
      "thaiMeaning": "ไม่เป็นไร",
      "englishMeaning": "It doesn't matter."
    },
    "examples": [
      {
        "scenario": "ความสัมพันธ์ระหว่างบุคคล",
        "hanzi": "我和同事的关系很好。",
        "pinyin": "Wǒ hé tóngshì de guānxi hěn hǎo.",
        "thaiMeaning": "ความสัมพันธ์ของฉันกับเพื่อนร่วมงานดีมาก",
        "englishMeaning": "我和同事的关系很好。"
      }
    ]
  },
  {
    "id": "v589",
    "hanzi": "各种各样",
    "pinyin": "gèzhǒng gèyàng",
    "thaiMeaning": "หลากหลายรูปแบบ / สารพัดชนิด",
    "englishMeaning": "各种各样",
    "example": {
      "hanzi": "超市里有各种各样的水果。",
      "pinyin": "Chāoshì lǐ yǒu gèzhǒng gèyàng de shuǐguǒ.",
      "thaiMeaning": "ในซูเปอร์มาร์เก็ตมีผลไม้หลากหลายรูปแบบ",
      "englishMeaning": "超市里有各种各样的水果。"
    },
    "examples": [
      {
        "scenario": "เดินชมสินค้า",
        "hanzi": "这里展出了各种各样的艺术品。",
        "pinyin": "Zhèlǐ zhǎnchū le gèzhǒng gèyàng de yìshùpǐn.",
        "thaiMeaning": "ที่นี่จัดแสดงผลงานศิลปะหลากหลายรูปแบบ",
        "englishMeaning": "这里展出了各种各样的艺术品。"
      }
    ]
  },
  {
    "id": "v590",
    "hanzi": "经验",
    "pinyin": "jīngyàn",
    "thaiMeaning": "ประสบการณ์",
    "englishMeaning": "experience",
    "example": {
      "hanzi": "丰富的工作经验。",
      "pinyin": "Fēngfù de gōngzuò jīngyàn.",
      "thaiMeaning": "ประสบการณ์การทำงานที่โชกโชน",
      "englishMeaning": "丰富的工作经验。"
    },
    "examples": [
      {
        "scenario": "การสัมภาษณ์งาน",
        "hanzi": "他在这方面很有经验。",
        "pinyin": "Tā zài zhè fāngmiàn hěn yǒu jīngyàn.",
        "thaiMeaning": "เขาในด้านนี้มีประสบการณ์สูงมาก",
        "englishMeaning": "他在这方面很有经验。"
      }
    ]
  },
  {
    "id": "v591",
    "hanzi": "能力",
    "pinyin": "nénglì",
    "thaiMeaning": "ความสามารถ / สมรรถภาพ",
    "englishMeaning": "ability",
    "example": {
      "hanzi": "提升个人能力。",
      "pinyin": "Tíshēng gèrén nénglì.",
      "thaiMeaning": "ยกระดับความสามารถส่วนบุคคล",
      "englishMeaning": "提升个人能力。"
    },
    "examples": [
      {
        "scenario": "ประเมินพนักงาน",
        "hanzi": "她的工作能力非常强。",
        "pinyin": "Tā de gōngzuò nénglì fēicháng qiáng.",
        "thaiMeaning": "ความสามารถในการทำงานของเธอแข็งแกร่งโดดเด่นมาก",
        "englishMeaning": "她的工作能力非常强。"
      }
    ]
  },
  {
    "id": "v592",
    "hanzi": "态度",
    "pinyin": "tàidu",
    "thaiMeaning": "ทัศนคติ / ท่าที",
    "englishMeaning": "manner",
    "example": {
      "hanzi": "态度很端正。",
      "pinyin": "Tàidu hěn duānzhèng.",
      "thaiMeaning": "ทัศนคติต่างๆ สุภาพเรียบร้อยถูกต้อง",
      "englishMeaning": "态度很端正。"
    },
    "examples": [
      {
        "scenario": "การบริการ",
        "hanzi": "服务员的工作态度非常好。",
        "pinyin": "Fúwùyuán de gōngzuò tàidu fēicháng hǎo.",
        "thaiMeaning": "ทัศนคติการทำงานของพนักงานบริการดีมากๆ",
        "englishMeaning": "服务员的工作态度非常好。"
      }
    ]
  },
  {
    "id": "v593",
    "hanzi": "环境",
    "pinyin": "huánjìng",
    "thaiMeaning": "สภาพแวดล้อม / สิ่งแวดล้อม",
    "englishMeaning": "environment",
    "example": {
      "hanzi": "保护自然环境。",
      "pinyin": "Bǎohù zìrán huánjìng.",
      "thaiMeaning": "ปกป้องรักษาสภาพแวดล้อมทางธรรมชาติ",
      "englishMeaning": "保护自然环境。"
    },
    "examples": [
      {
        "scenario": "ที่อยู่อาศัย",
        "hanzi": "这里生活环境很安静。",
        "pinyin": "Zhèlǐ shēnghuó huánjìng hěn ānjìng.",
        "thaiMeaning": "สภาพแวดล้อมการอยู่อาศัยที่นี่เงียบสงบมาก",
        "englishMeaning": "这里生活环境很安静。"
      }
    ]
  },
  {
    "id": "v594",
    "hanzi": "安全",
    "pinyin": "ānquán",
    "thaiMeaning": "ปลอดภัย / ความปลอดภัย",
    "englishMeaning": "Safety",
    "example": {
      "hanzi": "注意安全！",
      "pinyin": "Zhùyì ānquán!",
      "thaiMeaning": "ระมัดระวังความปลอดภัยนะ!",
      "englishMeaning": "注意安全！"
    },
    "examples": [
      {
        "scenario": "การเดินทาง",
        "hanzi": "祝你一路平安，安全到达。",
        "pinyin": "Zhù nǐ yílù píng'ān, ānquán dào dá.",
        "thaiMeaning": "ขอให้เดินทางราบรื่นและถึงที่หมายอย่างปลอดภัย",
        "englishMeaning": "祝你一路平安，安全到达。"
      }
    ]
  },
  {
    "id": "v595",
    "hanzi": "保护",
    "pinyin": "bǎohù",
    "thaiMeaning": "ปกป้อง / คุ้มครอง",
    "englishMeaning": "Protect",
    "example": {
      "hanzi": "保护眼睛。",
      "pinyin": "Bǎohù yǎnjing.",
      "thaiMeaning": "ถนอมปกป้องสายตา",
      "englishMeaning": "保护眼睛。"
    },
    "examples": [
      {
        "scenario": "ดูแลสุขภาพ",
        "hanzi": "戴口罩可以保护自己。",
        "pinyin": "Dài kǒuzhào kěyǐ bǎohù zìjǐ.",
        "thaiMeaning": "สวมแมสก์ช่วยปกป้องดูแลตัวเองได้",
        "englishMeaning": "戴口罩可以保护自己。"
      }
    ]
  },
  {
    "id": "v596",
    "hanzi": "健康",
    "pinyin": "jiànkāng",
    "thaiMeaning": "สุขภาพแข็งแรง",
    "englishMeaning": "healthy",
    "example": {
      "hanzi": "祝你身体健康！",
      "pinyin": "Zhù nǐ shēntǐ jiànkāng!",
      "thaiMeaning": "ขอให้คุณสุขภาพร่างกายแข็งแรง!",
      "englishMeaning": "祝你身体健康！"
    },
    "examples": [
      {
        "scenario": "อวยพรผู้ใหญ่",
        "hanzi": "健康是最大的财富。",
        "pinyin": "Jiànkāng shì zuì dà de cáifù.",
        "thaiMeaning": "สุขภาพที่แข็งแรงคือทรัพย์สมบัติที่ยิ่งใหญ่ที่สุด",
        "englishMeaning": "健康是最大的财富。"
      }
    ]
  },
  {
    "id": "v597",
    "hanzi": "推荐",
    "pinyin": "tuījiàn",
    "thaiMeaning": "แนะนำ (บอกต่อสิ่งดีๆ)",
    "englishMeaning": "recommend",
    "example": {
      "hanzi": "强烈推荐这部电影。",
      "pinyin": "Qiángliè tuījiàn zhè bù diànyǐng.",
      "thaiMeaning": "ขอแนะนำภาพยนตร์เรื่องนี้เป็นอย่างยิ่ง",
      "englishMeaning": "强烈推荐这部电影。"
    },
    "examples": [
      {
        "scenario": "ถามเมนูอร่อย",
        "hanzi": "请问招牌菜有什么推荐吗？",
        "pinyin": "Qǐngwèn zhāopái cài yǒu shénme tuījiàn ma?",
        "thaiMeaning": "ขอถามหน่อย เมนูแนะนำของร้านมีอะไรบ้างครับ?",
        "englishMeaning": "请问招牌菜有什么推荐吗？"
      }
    ]
  },
  {
    "id": "v598",
    "hanzi": "要求",
    "pinyin": "yāoqiú",
    "thaiMeaning": "ข้อเรียกร้อง / ข้อกำหนด",
    "englishMeaning": "Require",
    "example": {
      "hanzi": "符合要求。",
      "pinyin": "Fúhé yāoqiú.",
      "thaiMeaning": "ตรงตามข้อกำหนดมาตรฐาน",
      "englishMeaning": "符合要求。"
    },
    "examples": [
      {
        "scenario": "เกณฑ์การทำงาน",
        "hanzi": "老板对工作质量的要求很高。",
        "pinyin": "Lǎobǎn duì gōngzuò zhìliàng de yāoqiú hěn gāo.",
        "thaiMeaning": "เจ้านายมีข้อกำหนดมาตรฐานคุณภาพงานสูงมาก",
        "englishMeaning": "老板对工作质量的要求很高。"
      }
    ]
  },
  {
    "id": "v599",
    "hanzi": "按照",
    "pinyin": "ànzhào",
    "thaiMeaning": "ปฏิบัติตาม / อิงตาม",
    "englishMeaning": "按照",
    "example": {
      "hanzi": "按照规定办理。",
      "pinyin": "Ànzhào guīdìng bànlǐ.",
      "thaiMeaning": "ดำเนินการปฏิบัติตามข้อกำหนด",
      "englishMeaning": "按照规定办理。"
    },
    "examples": [
      {
        "scenario": "ทำตามขั้นตอน",
        "hanzi": "请按照说明书进行操作。",
        "pinyin": "Qǐng ànzhào shuōmíngshū jìnxíng cāozuò.",
        "thaiMeaning": "กรุณาดำเนินการตามคู่มือคำอธิบายนะ",
        "englishMeaning": "请按照说明书进行操作。"
      }
    ]
  },
  {
    "id": "v600",
    "hanzi": "根据",
    "pinyin": "gēnjù",
    "thaiMeaning": "อ้างอิงตาม / จากข้อมูล",
    "englishMeaning": "根据",
    "example": {
      "hanzi": "根据实际情况决定。",
      "pinyin": "Gēnjù shíjì qíngkuàng juédìng.",
      "thaiMeaning": "ตัดสินใจอ้างอิงตามสถานการณ์จริง",
      "englishMeaning": "根据实际情况决定。"
    },
    "examples": [
      {
        "scenario": "พยากรณ์อากาศ",
        "hanzi": "根据天气预报，明天会下雨。",
        "pinyin": "Gēnjù tiānqì yùbào, míngtiān huì xià yǔ.",
        "thaiMeaning": "จากข้อมูลพยากรณ์อากาศ พรุ่งนี้ฝนจะตก",
        "englishMeaning": "根据天气预报，明天会下雨。"
      }
    ]
  },
  {
    "id": "v601",
    "hanzi": "条件",
    "pinyin": "tiáojiàn",
    "thaiMeaning": "เงื่อนไข / ปัจจัยแวดล้อม",
    "englishMeaning": "condition",
    "example": {
      "hanzi": "创造良好条件。",
      "pinyin": "Chuàngzào liánghǎo tiáojiàn.",
      "thaiMeaning": "สร้างเงื่อนไขและปัจจัยอันดีงาม",
      "englishMeaning": "创造良好条件。"
    },
    "examples": [
      {
        "scenario": "เงื่อนไขการสมัครงาน",
        "hanzi": "你完全符合招聘条件。",
        "pinyin": "Nǐ wánquán fúhé zhāopìn tiáojiàn.",
        "thaiMeaning": "คุณมีคุณสมบัติตรงตามเงื่อนไขการรับสมัครงานทุกประการ",
        "englishMeaning": "你完全符合招聘条件。"
      }
    ]
  },
  {
    "id": "v602",
    "hanzi": "价格",
    "pinyin": "jiàgé",
    "thaiMeaning": "ราคา",
    "englishMeaning": "price",
    "example": {
      "hanzi": "价格很合理。",
      "pinyin": "Jiàgé hěn hélǐ.",
      "thaiMeaning": "ราคาสมเหตุสมผลมาก",
      "englishMeaning": "价格很合理。"
    },
    "examples": [
      {
        "scenario": "สอบถามราคา",
        "hanzi": "请问这件衣服的价格是多少？",
        "pinyin": "Qǐngwèn zhè jiàn yīfu de jiàgé shì duōshao?",
        "thaiMeaning": "ขอถามหน่อย เสื้อตัวนี้ราคาเท่าไหร่ครับ?",
        "englishMeaning": "请问这件衣服的价格是多少？"
      }
    ]
  },
  {
    "id": "v603",
    "hanzi": "准确",
    "pinyin": "zhǔnquè",
    "thaiMeaning": "แม่นยำถูกต้อง",
    "englishMeaning": "准确",
    "example": {
      "hanzi": "发音很准确。",
      "pinyin": "Fāyīn hěn zhǔnquè.",
      "thaiMeaning": "ออกเสียงได้แม่นยำถูกต้องมาก",
      "englishMeaning": "发音很准确。"
    },
    "examples": [
      {
        "scenario": "ตรวจทานข้อมูล",
        "hanzi": "请确认数据是否准确。",
        "pinyin": "Qǐng quèrèn shùjù shìfǒu zhǔnquè.",
        "thaiMeaning": "กรุณายืนยันว่าข้อมูลถูกต้องแม่นยำหรือไม่",
        "englishMeaning": "请确认数据是否准确。"
      }
    ]
  },
  {
    "id": "v604",
    "hanzi": "效果",
    "pinyin": "xiàoguǒ",
    "thaiMeaning": "ผลลัพธ์ / ประสิทธิภาพ",
    "englishMeaning": "效果",
    "example": {
      "hanzi": "效果非常好！",
      "pinyin": "Xiàoguǒ fēicháng hǎo!",
      "thaiMeaning": "ผลลัพธ์ออกมาดีมากๆ!",
      "englishMeaning": "效果非常好！"
    },
    "examples": [
      {
        "scenario": "ทานยาแล้วหายดี",
        "hanzi": "这种药治疗感冒效果显著。",
        "pinyin": "Zhè zhǒng yào zhìliáo gǎnmào xiàoguǒ xiǎnzhù.",
        "thaiMeaning": "ยาตัวนี้รักษาอาการไข้หวัดได้ผลลัพธ์โดดเด่นมาก",
        "englishMeaning": "这种药治疗感冒效果显著。"
      }
    ]
  },
  {
    "id": "v605",
    "hanzi": "重视",
    "pinyin": "zhòngshì",
    "thaiMeaning": "ให้ความสำคัญ / ใส่ใจเป็นพิเศษ",
    "englishMeaning": "重视",
    "example": {
      "hanzi": "重视教育。",
      "pinyin": "Zhòngshì jiàoyù.",
      "thaiMeaning": "ให้ความสำคัญกับการศึกษา",
      "englishMeaning": "重视教育。"
    },
    "examples": [
      {
        "scenario": "การทำงานร่วมกัน",
        "hanzi": "公司非常重视客户的反馈。",
        "pinyin": "Gōngsī fēicháng zhòngshì kèhù de fǎnkuì.",
        "thaiMeaning": "บริษัทให้ความสำคัญกับข้อติชม feedback ของลูกค้าเป็นอย่างมาก",
        "englishMeaning": "公司非常重视客户的反馈。"
      }
    ]
  },
  {
    "id": "v606",
    "hanzi": "交流",
    "pinyin": "jiāoliú",
    "thaiMeaning": "แลกเปลี่ยนความคิดเห็น / สื่อสาร",
    "englishMeaning": "交流",
    "example": {
      "hanzi": "加强交流。",
      "pinyin": "Jiāqiáng jiāoliú.",
      "thaiMeaning": "ยกระดับการแลกเปลี่ยนสื่อสารให้แน่นแฟ้น",
      "englishMeaning": "加强交流。"
    },
    "examples": [
      {
        "scenario": "สังสรรค์นานาชาติ",
        "hanzi": "多与外国人交流能提高口语能力。",
        "pinyin": "Duō yǔ wàiguórén jiāoliú néng tígāo kǒuyǔ nénglì.",
        "thaiMeaning": "การพูดคุยสื่อสารกับชาวต่างชาติบ่อยๆ ช่วยยกระดับทักษะการพูดได้",
        "englishMeaning": "多与外国人交流能提高口语能力。"
      }
    ]
  },
  {
    "id": "v607",
    "hanzi": "负责",
    "pinyin": "fùzé",
    "thaiMeaning": "รับผิดชอบ / ดูแลงานนั้นๆ",
    "englishMeaning": "负责",
    "example": {
      "hanzi": "谁负责这个项目？",
      "pinyin": "Shéi fùzé zhège xiàngmù?",
      "thaiMeaning": "ใครเป็นคนรับผิดชอบดูแลโปรเจกต์นี้?",
      "englishMeaning": "谁负责这个项目？"
    },
    "examples": [
      {
        "scenario": "มอบหมายงาน",
        "hanzi": "他是一个非常有责任心的人。",
        "pinyin": "Tā shì yí gè fēicháng yǒu zérènxīn de rén.",
        "thaiMeaning": "เขาเป็นคนที่มีความรับผิดชอบสูงมาก",
        "englishMeaning": "他是一个非常有责任心的人。"
      }
    ]
  },
  {
    "id": "v608",
    "hanzi": "结束",
    "pinyin": "jiéshù",
    "thaiMeaning": "สิ้นสุด / สิ้นสุดการทำงาน",
    "englishMeaning": "结束",
    "example": {
      "hanzi": "会议结束了。",
      "pinyin": "Huìyì jiéshù le.",
      "thaiMeaning": "การประชุมสิ้นสุดลงแล้ว",
      "englishMeaning": "会议结束了。"
    },
    "examples": [
      {
        "scenario": "จบทริปเดินทาง",
        "hanzi": "愉快的假期结束了。",
        "pinyin": "Yúkuài de jiàqī jiéshù le.",
        "thaiMeaning": "ช่วงวันหยุดอันแสนสุขได้สิ้นสุดลงแล้ว",
        "englishMeaning": "愉快的假期结束了。"
      }
    ]
  },
  {
    "id": "v609",
    "hanzi": "组织",
    "pinyin": "zǔzhī",
    "thaiMeaning": "จัดองค์กร / จัดกิจกรรม",
    "englishMeaning": "组织",
    "example": {
      "hanzi": "组织活动。",
      "pinyin": "Zǔzhī huó dòng.",
      "thaiMeaning": "จัดกิจกรรมขึ้น",
      "englishMeaning": "组织活动。"
    },
    "examples": [
      {
        "scenario": "จัดงานบริษัท",
        "hanzi": "公司周末组织了一次团建活动。",
        "pinyin": "Gōngsī zhōumò zǔzhī le yí cì tuánjiàn huódòng.",
        "thaiMeaning": "บริษัทจัดกิจกรรมสร้างทีมสัมพันธ์ขึ้นในสุดสัปดาห์",
        "englishMeaning": "公司周末组织了一次团建活动。"
      }
    ]
  },
  {
    "id": "v610",
    "hanzi": "增长",
    "pinyin": "zēngzhǎng",
    "thaiMeaning": "เติบโต / เพิ่มขยายตัว",
    "englishMeaning": "增长",
    "example": {
      "hanzi": "经济持续增长。",
      "pinyin": "Jīngjì chíxù zēngzhǎng.",
      "thaiMeaning": "เศรษฐกิจเติบโตอย่างต่อเนื่อง",
      "englishMeaning": "经济持续增长。"
    },
    "examples": [
      {
        "scenario": "ยอดขายสินค้า",
        "hanzi": "今年公司的销售额显著增长。",
        "pinyin": "Jīnnián gōngsī de xiāoshòu'é xiǎnzhù zēngzhǎng.",
        "thaiMeaning": "ปีนี้ยอดขายของบริษัทเติบโตขึ้นอย่างโดดเด่น",
        "englishMeaning": "今年公司的销售额显著增长。"
      }
    ]
  },
  {
    "id": "v611",
    "hanzi": "获得",
    "pinyin": "huòdé",
    "thaiMeaning": "ได้รับ / ได้มา (รางวัล/ความสำเร็จ)",
    "englishMeaning": "获得",
    "example": {
      "hanzi": "获得成功。",
      "pinyin": "Huòdé chénggōng.",
      "thaiMeaning": "ได้รับความสำเร็จ",
      "englishMeaning": "获得成功。"
    },
    "examples": [
      {
        "scenario": "การรับรางวัล",
        "hanzi": "经过努力，他获得了第一名。",
        "pinyin": "Jīngguò nǔlì, tā huòdé le dì-yī míng.",
        "thaiMeaning": "ผ่านความพยายาม ในที่สุดเขาได้รับอันดับที่หนึ่ง",
        "englishMeaning": "经过努力，他获得了第一名。"
      }
    ]
  },
  {
    "id": "v612",
    "hanzi": "拒绝",
    "pinyin": "jùjué",
    "thaiMeaning": "ปฏิเสธ / บอกปัด",
    "englishMeaning": "拒绝",
    "example": {
      "hanzi": "礼貌地拒绝。",
      "pinyin": "Lǐmào de jùjué.",
      "thaiMeaning": "ปฏิเสธอย่างมีมารยาท",
      "englishMeaning": "礼貌地拒绝。"
    },
    "examples": [
      {
        "scenario": "ปฏิเสธคำชวน",
        "hanzi": "我不好意思拒绝他的好意。",
        "pinyin": "Wǒ bù hǎoyìsi jùjué tā de hǎoyì.",
        "thaiMeaning": "ฉันเกรงใจที่จะปฏิเสธความหวังดีของเขา",
        "englishMeaning": "我不好意思拒绝他的好意。"
      }
    ]
  },
  {
    "id": "v613",
    "hanzi": "保持",
    "pinyin": "bǎochí",
    "thaiMeaning": "รักษา / ดำรงไว้",
    "englishMeaning": "保持",
    "example": {
      "hanzi": "保持联系。",
      "pinyin": "Bǎochí liánxì.",
      "thaiMeaning": "รักษาการติดต่อกันไว้",
      "englishMeaning": "保持联系。"
    },
    "examples": [
      {
        "scenario": "รักษาสุขภาพใจ",
        "hanzi": "请保持积极乐观的态度。",
        "pinyin": "Qǐng bǎochí jījí lèguān de tàidu.",
        "thaiMeaning": "โปรดรักษาทัศนคติที่กระตือรือร้นและมองโลกในแง่ดีไว้",
        "englishMeaning": "请保持积极乐观的态度。"
      }
    ]
  },
  {
    "id": "v614",
    "hanzi": "强调",
    "pinyin": "qiángdiào",
    "thaiMeaning": "เน้นย้ำ / ให้ความสำคัญเน้นหนัก",
    "englishMeaning": "强调",
    "example": {
      "hanzi": "反复强调。",
      "pinyin": "Fǎnfù qiángdiào.",
      "thaiMeaning": "เน้นย้ำซ้ำไปซ้ำมา",
      "englishMeaning": "反复强调。"
    },
    "examples": [
      {
        "scenario": "ประชุมงาน",
        "hanzi": "经理多次强调安全的重要性。",
        "pinyin": "Jīnglǐ duō cì qiángdiào ānquán de zhòngyàoxìng.",
        "thaiMeaning": "ผู้จัดการเน้นย้ำความสำคัญของความปลอดภัยหลายครั้ง",
        "englishMeaning": "经理多次强调安全的重要性。"
      }
    ]
  },
  {
    "id": "v615",
    "hanzi": "鼓励",
    "pinyin": "gǔlì",
    "thaiMeaning": "ให้กำลังใจ / สนับสนุนส่งเสริม",
    "englishMeaning": "鼓励",
    "example": {
      "hanzi": "互相鼓励。",
      "pinyin": "Hùxiāng gǔlì.",
      "thaiMeaning": "ให้กำลังใจซึ่งกันและกัน",
      "englishMeaning": "互相鼓励。"
    },
    "examples": [
      {
        "scenario": "คุณครูกับนักเรียน",
        "hanzi": "老师鼓励大家勇敢表达观点。",
        "pinyin": "Lǎoshī gǔlì dàjiā yǒnggǎn biǎodá guāndiǎn.",
        "thaiMeaning": "คุณครูให้กำลังใจทุกคนให้กล้าแสดงความคิดเห็น",
        "englishMeaning": "老师鼓励大家勇敢表达观点。"
      }
    ]
  },
  {
    "id": "v616",
    "hanzi": "避免",
    "pinyin": "bìmiǎn",
    "thaiMeaning": "หลีกเลี่ยง / ป้องกันไม่ให้เกิด",
    "englishMeaning": "避免",
    "example": {
      "hanzi": "避免错误。",
      "pinyin": "Bìmiǎn cuòwù.",
      "thaiMeaning": "หลีกเลี่ยงข้อผิดพลาด",
      "englishMeaning": "避免错误。"
    },
    "examples": [
      {
        "scenario": "การขับขี่ปลอดภัย",
        "hanzi": "遵守交通规则可以避免事故。",
        "pinyin": "Zūnshǒu jiāotōng guīzé kěyǐ bìmiǎn shìgù.",
        "thaiMeaning": "การปฏิบัติตามกฎจราจรช่วยหลีกเลี่ยงอุบัติเหตุได้",
        "englishMeaning": "遵守交通规则可以避免事故。"
      }
    ]
  },
  {
    "id": "v617",
    "hanzi": "即使",
    "pinyin": "jíshǐ",
    "thaiMeaning": "ต่อให้ / แม้ว่า...ก็ตาม",
    "englishMeaning": "即使",
    "example": {
      "hanzi": "即使辛苦也值得。",
      "pinyin": "Jíshǐ xīnkǔ yě zhíde.",
      "thaiMeaning": "ต่อให้เหน็ดเหนื่อยก็คุ้มค่า",
      "englishMeaning": "即使辛苦也值得。"
    },
    "examples": [
      {
        "scenario": "มุ่งมั่น",
        "hanzi": "即使遇到困难，我也不会放弃。",
        "pinyin": "Jíshǐ yùdào kùnnan, wǒ yě bú huì fàngqì.",
        "thaiMeaning": "ต่อให้เจออุปสรรค ฉันก็จะไม่ยอมแพ้",
        "englishMeaning": "即使遇到困难，我也不会放弃。"
      }
    ]
  },
  {
    "id": "v618",
    "hanzi": "尽管",
    "pinyin": "jǐnguǎn",
    "thaiMeaning": "แม้ว่า / ถึงแม้จะ...",
    "englishMeaning": "尽管",
    "example": {
      "hanzi": "尽管放心。",
      "pinyin": "Jǐnguǎn fàngxīn.",
      "thaiMeaning": "สบายใจได้เต็มที่เลย",
      "englishMeaning": "尽管放心。"
    },
    "examples": [
      {
        "scenario": "สภาพอากาศกับการทำงาน",
        "hanzi": "尽管天气很冷，他依然按时到岗。",
        "pinyin": "Jǐnguǎn tiānqì hěn lěng, tā yīrán ànshí dào gǎng.",
        "thaiMeaning": "ถึงแม้สภาพอากาศจะหนาวมาก เขายังคงมาทำงานตรงเวลา",
        "englishMeaning": "尽管天气很冷，他依然按时到岗。"
      }
    ]
  },
  {
    "id": "v619",
    "hanzi": "居然",
    "pinyin": "jūrán",
    "thaiMeaning": "คิดไม่ถึงว่า / กลับ...อย่างนึกไม่ถึง",
    "englishMeaning": "居然",
    "example": {
      "hanzi": "他居然赢了！",
      "pinyin": "Tā jūrán yíng le!",
      "thaiMeaning": "เขาคิดไม่ถึงว่าจะชนะแล้ว!",
      "englishMeaning": "他居然赢了！"
    },
    "examples": [
      {
        "scenario": "เหตุการณ์ประหลาดใจ",
        "hanzi": "这么简单的题他居然做错了。",
        "pinyin": "Zhème jiǎndān de tímù tā jūrán zuò cuò le.",
        "thaiMeaning": "โจทย์ง่ายขนาดนี้เขาคิดไม่ถึงว่าจะทำผิด",
        "englishMeaning": "这么简单的题他居然做错了。"
      }
    ]
  },
  {
    "id": "v620",
    "hanzi": "否则",
    "pinyin": "fǒuzé",
    "thaiMeaning": "มิฉะนั้น / ไม่เช่นนั้นแล้ว",
    "englishMeaning": "否则",
    "example": {
      "hanzi": "快一点，否则会迟到。",
      "pinyin": "Kuài yìdiǎn, fǒuzé huì chídào.",
      "thaiMeaning": "เร็วหน่อย ไม่เช่นนั้นจะสายนะ",
      "englishMeaning": "快一点，否则会迟到。"
    },
    "examples": [
      {
        "scenario": "การรักษาเวลา",
        "hanzi": "必须提前出发，否则赶不上飞机。",
        "pinyin": "Bìxū tíqián chūfā, fǒuzé gǎn bù shàng fēijī.",
        "thaiMeaning": "ต้องออกเดินทางล่วงหน้า มิฉะนั้นจะขึ้นเครื่องบินไม่ทัน",
        "englishMeaning": "必须提前出发，否则赶不上飞机。"
      }
    ]
  },
  {
    "id": "v621",
    "hanzi": "究竟",
    "pinyin": "jiūjìng",
    "thaiMeaning": "ตกลงว่า...กันแน่ / แท้จริงแล้ว",
    "englishMeaning": "究竟",
    "example": {
      "hanzi": "究竟发生了什么？",
      "pinyin": "Jiūjìng fāshēng le shénme?",
      "thaiMeaning": "ตกลงว่าเกิดอะไรขึ้นกันแน่?",
      "englishMeaning": "究竟发生了什么？"
    },
    "examples": [
      {
        "scenario": "สืบหาความจริง",
        "hanzi": "我们一定要弄清楚究竟是怎么回事。",
        "pinyin": "Wǒmen yídìng yào nòng qīngchu jiūjìng shì zěnme huí shì.",
        "thaiMeaning": "พวกเราต้องทำความเข้าใจให้ชัดเจนว่าตกลงเรื่องราวเป็นอย่างไรกันแน่",
        "englishMeaning": "我们一定要弄清楚究竟是怎么回事。"
      }
    ]
  },
  {
    "id": "v622",
    "hanzi": "普遍",
    "pinyin": "pǔbiàn",
    "thaiMeaning": "แพร่หลาย / เป็นเรื่องปกติทั่วไป",
    "englishMeaning": "普遍",
    "example": {
      "hanzi": "普遍现象。",
      "pinyin": "Pǔbiàn xiànxiàng.",
      "thaiMeaning": "ปรากฏการณ์ทั่วไปที่พบเห็นแพร่หลาย",
      "englishMeaning": "普遍现象。"
    },
    "examples": [
      {
        "scenario": "เทคโนโลยี",
        "hanzi": "移动支付在今天非常普遍。",
        "pinyin": "Yídòng zhīfù zài jīntiān fēicháng pǔbiàn.",
        "thaiMeaning": "การชำระเงินผ่านมือถือในปัจจุบันแพร่หลายมากๆ",
        "englishMeaning": "移动支付在今天非常普遍。"
      }
    ]
  },
  {
    "id": "v623",
    "hanzi": "积极",
    "pinyin": "jījí",
    "thaiMeaning": "กระตือรือร้น / ในเชิงบวก",
    "englishMeaning": "积极",
    "example": {
      "hanzi": "积极参与。",
      "pinyin": "Jījí cānyù.",
      "thaiMeaning": "เข้าร่วมอย่างกระตือรือร้น",
      "englishMeaning": "积极参与。"
    },
    "examples": [
      {
        "scenario": "ทัศนคติชีวิต",
        "hanzi": "保持积极的心态对健康很有益。",
        "pinyin": "Bǎochí jījí de xīntài duì jiànkāng hěn yǒuyì.",
        "thaiMeaning": "การรักษาจิตใจในเชิงบวกมีประโยชน์ต่อสุขภาพมาก",
        "englishMeaning": "保持积极的心态对健康很有益。"
      }
    ]
  },
  {
    "id": "v624",
    "hanzi": "消极",
    "pinyin": "xiāojí",
    "thaiMeaning": "เชิงลบ / เฉื่อยชาท้อแท้",
    "englishMeaning": "消极",
    "example": {
      "hanzi": "消极情绪。",
      "pinyin": "Xiāojí qíngxù.",
      "thaiMeaning": "อารมณ์ความรู้สึกเชิงลบ",
      "englishMeaning": "消极情绪。"
    },
    "examples": [
      {
        "scenario": "การทำงาน",
        "hanzi": "不要用消极的态度对待工作。",
        "pinyin": "Bú yào yòng xiāojí de tàidu duìdài gōngzuò.",
        "thaiMeaning": "อย่าใช้ทัศนคติเฉื่อยชาเชิงลบปฏิบัติต่องาน",
        "englishMeaning": "不要用消极的态度对待工作。"
      }
    ]
  },
  {
    "id": "v625",
    "hanzi": "关键",
    "pinyin": "guānjiàn",
    "thaiMeaning": "จุดสำคัญ / ปัจจัยชี้ขาด",
    "englishMeaning": "关键",
    "example": {
      "hanzi": "关键时刻。",
      "pinyin": "Guānjiàn shíkè.",
      "thaiMeaning": "ช่วงเวลาสำคัญชี้ขาด",
      "englishMeaning": "关键时刻。"
    },
    "examples": [
      {
        "scenario": "การแก้ปัญหา",
        "hanzi": "态度是解决问题的关键。",
        "pinyin": "Tàidu shì jiějué wèntí de guānjiàn.",
        "thaiMeaning": "ทัศนคติคือปัจจัยสำคัญชี้ขาดในการแก้ไขปัญหา",
        "englishMeaning": "态度是解决问题的关键。"
      }
    ]
  },
  {
    "id": "v626",
    "hanzi": "严格",
    "pinyin": "yángé",
    "thaiMeaning": "เข้มงวด / กวดขันกวดขัน",
    "englishMeaning": "严格",
    "example": {
      "hanzi": "严格要求。",
      "pinyin": "Yángé yāoqiú.",
      "thaiMeaning": "กำหนดมาตรฐานเข้มงวด",
      "englishMeaning": "严格要求。"
    },
    "examples": [
      {
        "scenario": "คุณภาพสินค้า",
        "hanzi": "产品质量把关非常严格。",
        "pinyin": "Chǎnpǐn zhìliàng bǎguān fēicháng yángé.",
        "thaiMeaning": "การคุมคุณภาพสินค้าเข้มงวดมากๆ",
        "englishMeaning": "产品质量把关非常严格。"
      }
    ]
  },
  {
    "id": "v627",
    "hanzi": "详细",
    "pinyin": "xiángxì",
    "thaiMeaning": "ละเอียดครบถ้วน",
    "englishMeaning": "详细",
    "example": {
      "hanzi": "详细说明。",
      "pinyin": "Xiángxì shuōmíng.",
      "thaiMeaning": "อธิบายอย่างละเอียดครบถ้วน",
      "englishMeaning": "详细说明。"
    },
    "examples": [
      {
        "scenario": "รายงานประชุม",
        "hanzi": "请提供一份详细的计划书。",
        "pinyin": "Qǐng tígōng yí fèn xiángxì de jìhuàshū.",
        "thaiMeaning": "กรุณาเสนอข้อเสนอแผนงานฉบับละเอียดครบถ้วนนะ",
        "englishMeaning": "请提供一份详细的计划书。"
      }
    ]
  },
  {
    "id": "v628",
    "hanzi": "正式",
    "pinyin": "zhèngshì",
    "thaiMeaning": "เป็นทางการ / อย่างเป็นทางการ",
    "englishMeaning": "正式",
    "example": {
      "hanzi": "正式通知。",
      "pinyin": "Zhèngshì tōngzhī.",
      "thaiMeaning": "ประกาศแจ้งอย่างเป็นทางการ",
      "englishMeaning": "正式通知。"
    },
    "examples": [
      {
        "scenario": "งานพิธี",
        "hanzi": "参加发布会需要穿正式服装。",
        "pinyin": "Cānjiā fābùhuì xūyào chuān zhèngshì fúzhuāng.",
        "thaiMeaning": "เข้าร่วมงานแถลงข่าวจำเป็นต้องแต่งกายชุดเป็นทางการ",
        "englishMeaning": "参加发布会需要穿正式服装。"
      }
    ]
  },
  {
    "id": "v629",
    "hanzi": "临时",
    "pinyin": "línshí",
    "thaiMeaning": "ชั่วคราว / กะทันหัน",
    "englishMeaning": "临时",
    "example": {
      "hanzi": "临时决定。",
      "pinyin": "Línshí juédìng.",
      "thaiMeaning": "ตัดสินใจอย่างกะทันหันชั่วคราว",
      "englishMeaning": "临时决定。"
    },
    "examples": [
      {
        "scenario": "นัดหมายฉุกเฉิน",
        "hanzi": "公司临时安排了一次紧急会议。",
        "pinyin": "Gōngsī línshí ānpái le yí cì jǐnjí huìyì.",
        "thaiMeaning": "บริษัทจัดประชุมด่วนกะทันหันขึ้นหนึ่งครั้ง",
        "englishMeaning": "公司临时安排了一次紧急会议。"
      }
    ]
  },
  {
    "id": "v630",
    "hanzi": "著名",
    "pinyin": "zhùmíng",
    "thaiMeaning": "มีชื่อเสียงโด่งดัง",
    "englishMeaning": "著名",
    "example": {
      "hanzi": "著名作家。",
      "pinyin": "Zhùmíng zuòjiā.",
      "thaiMeaning": "นักเขียนชื่อดัง",
      "englishMeaning": "著名作家。"
    },
    "examples": [
      {
        "scenario": "สถานที่ท่องเที่ยว",
        "hanzi": "长城是世界著名的景点。",
        "pinyin": "Chángchéng shì shìjiè zhùmíng de jǐngdiǎn.",
        "thaiMeaning": "กำแพงเมืองจีนคือสถานที่ท่องเที่ยวที่มีชื่อเสียงโด่งดังระดับโลก",
        "englishMeaning": "长城是世界著名的景点。"
      }
    ]
  },
  {
    "id": "v631",
    "hanzi": "理想",
    "pinyin": "lǐxiǎng",
    "thaiMeaning": "อุดมคติ / จุดมุ่งหมายสมบูรณ์แบบ",
    "englishMeaning": "理想",
    "example": {
      "hanzi": "实现理想。",
      "pinyin": "Shíxiàn lǐxiǎng.",
      "thaiMeaning": "ทำให้อุดมคติฝันกลายเป็นจริง",
      "englishMeaning": "实现理想。"
    },
    "examples": [
      {
        "scenario": "อาชีพฝัน",
        "hanzi": "找到一份理想的工作并不容易。",
        "pinyin": "Zhǎodào yí fèn lǐxiǎng de gōngzuò bìng bù róngyì.",
        "thaiMeaning": "การหางานในอุดมคติทำไม่ได้ง่ายเลย",
        "englishMeaning": "找到一份理想的工作并不容易。"
      }
    ]
  },
  {
    "id": "v632",
    "hanzi": "真正",
    "pinyin": "zhēnzhèng",
    "thaiMeaning": "แท้จริง / อย่างแท้จริง",
    "englishMeaning": "真正",
    "example": {
      "hanzi": "真正的朋友。",
      "pinyin": "Zhēnzhèng de péngyou.",
      "thaiMeaning": "มิตรแท้ที่แท้จริง",
      "englishMeaning": "真正的朋友。"
    },
    "examples": [
      {
        "scenario": "ความเข้ากันได้",
        "hanzi": "只有经过考验才能明白真正的友情。",
        "pinyin": "Zhǐyǒu jīngguò kǎoyàn cái néng míngbai zhēnzhèng de yǒuqíng.",
        "thaiMeaning": "มีเพียงผ่านการทดสอบเท่านั้นจึงจะเข้าใจมิตรภาพอันแท้จริง",
        "englishMeaning": "只有经过考验才能明白真正的友情。"
      }
    ]
  },
  {
    "id": "v633",
    "hanzi": "招聘",
    "pinyin": "zhāopìn",
    "thaiMeaning": "รับสมัครงาน / เปิดรับบุคลากร",
    "englishMeaning": "招聘",
    "example": {
      "hanzi": "公司正在招聘。",
      "pinyin": "Gōngsī zhèngzài zhāopìn.",
      "thaiMeaning": "บริษัทกำลังเปิดรับสมัครงาน",
      "englishMeaning": "公司正在招聘。"
    },
    "examples": [
      {
        "scenario": "ประกาศงาน",
        "hanzi": "我们在网上看到了招聘信息。",
        "pinyin": "Wǒmen zài wǎngshang kàndào le zhāopìn xìnxī.",
        "thaiMeaning": "พวกเราเห็นข้อมูลข่าวรับสมัครงานบนอินเทอร์เน็ต",
        "englishMeaning": "我们在网上看到了招聘信息。"
      }
    ]
  },
  {
    "id": "v634",
    "hanzi": "简历",
    "pinyin": "jiǎnlì",
    "thaiMeaning": "เรซูเม่ / ประวัติส่วนตัว (CV)",
    "englishMeaning": "简历",
    "example": {
      "hanzi": "投递简历。",
      "pinyin": "Tóudì jiǎnlì.",
      "thaiMeaning": "ยื่นส่งเรซูเม่สมัครงาน",
      "englishMeaning": "投递简历。"
    },
    "examples": [
      {
        "scenario": "เตรียมสมัครงาน",
        "hanzi": "请把个人简历发到我的邮箱。",
        "pinyin": "Qǐng bǎ gèrén jiǎnlì fā dào wǒ de yóuxiāng.",
        "thaiMeaning": "กรุณาส่งเรซูเม่ประวัติส่วนตัวมาที่อีเมลของฉันนะ",
        "englishMeaning": "请把个人简历发到我的邮箱。"
      }
    ]
  },
  {
    "id": "v635",
    "hanzi": "面试",
    "pinyin": "miànshì",
    "thaiMeaning": "สัมภาษณ์งาน / การสัมภาษณ์",
    "englishMeaning": "面试",
    "example": {
      "hanzi": "参加面试。",
      "pinyin": "Cānjiā miànshì.",
      "thaiMeaning": "เข้าร่วมการสัมภาษณ์งาน",
      "englishMeaning": "参加面试。"
    },
    "examples": [
      {
        "scenario": "อวยพรสัมภาษณ์",
        "hanzi": "祝你明天的面试顺利成功！",
        "pinyin": "Zhù nǐ míngtiān de miànshì shùnlì chénggōng!",
        "thaiMeaning": "ขอให้การสัมภาษณ์งานพรุ่งนี้ของคุณราบรื่นและประสบความสำเร็จนะ!",
        "englishMeaning": "祝你明天的面试顺利成功！"
      }
    ]
  },
  {
    "id": "v636",
    "hanzi": "投资",
    "pinyin": "tóuzī",
    "thaiMeaning": "ลงทุน / การลงทุน",
    "englishMeaning": "投资",
    "example": {
      "hanzi": "投资项目。",
      "pinyin": "Tóuzī xiàngmù.",
      "thaiMeaning": "ลงทุนในโปรเจกต์",
      "englishMeaning": "投资项目。"
    },
    "examples": [
      {
        "scenario": "การเงินธุรกิจ",
        "hanzi": "理财需要理性投资。",
        "pinyin": "Lǐcái xūyào lǐxìng tóuzī.",
        "thaiMeaning": "การบริหารเงินจำเป็นต้องลงทุนอย่างมีสติเหตุผล",
        "englishMeaning": "理财需要理性投资。"
      }
    ]
  },
  {
    "id": "v637",
    "hanzi": "市场",
    "pinyin": "shìchǎng",
    "thaiMeaning": "ตลาด (ตลาดการค้า/การตลาด)",
    "englishMeaning": "市场",
    "example": {
      "hanzi": "开拓新市场。",
      "pinyin": "Kāituò xīn shìchǎng.",
      "thaiMeaning": "บุกเบิกตลาดใหม่",
      "englishMeaning": "开拓新市场。"
    },
    "examples": [
      {
        "scenario": "สำรวจการแข่งขัน",
        "hanzi": "我们需要了解市场的最新需求。",
        "pinyin": "Wǒmen xūyào liǎojiě shìchǎng de zuìxīn xūqiú.",
        "thaiMeaning": "พวกเราต้องทำความเข้าใจความต้องการล่าสุดของตลาด",
        "englishMeaning": "我们需要了解市场的最新需求。"
      }
    ]
  },
  {
    "id": "v638",
    "hanzi": "方案",
    "pinyin": "fāng'àn",
    "thaiMeaning": "แผนงาน / ข้อเสนอโครงการ",
    "englishMeaning": "方案",
    "example": {
      "hanzi": "制定方案。",
      "pinyin": "Zhìdìng fāng'àn.",
      "thaiMeaning": "กำหนดร่างแผนงานโครงการ",
      "englishMeaning": "制定方案。"
    },
    "examples": [
      {
        "scenario": "เลือกโซลูชัน",
        "hanzi": "这个方案得到了大家的一致赞同。",
        "pinyin": "Zhège fāng'àn dédào le dàjiā de yízhì zàantóng.",
        "thaiMeaning": "แผนงานนี้ได้รับการยอมรับเห็นพ้องจากทุกคน",
        "englishMeaning": "这个方案得到了大家的一致赞同。"
      }
    ]
  },
  {
    "id": "v639",
    "hanzi": "压力",
    "pinyin": "yālì",
    "thaiMeaning": "ความกดดัน / ความเครียด",
    "englishMeaning": "压力",
    "example": {
      "hanzi": "缓解工作压力。",
      "pinyin": "Huǎnjiě gōngzuò yālì.",
      "thaiMeaning": "ผ่อนคลายความกดดันจากการทำงาน",
      "englishMeaning": "缓解工作压力。"
    },
    "examples": [
      {
        "scenario": "ปรับสภาพจิตใจ",
        "hanzi": "学会自我调节，释放压力。",
        "pinyin": "Xuéhuì zìwǒ tiáojié, shìfàng yālì.",
        "thaiMeaning": "เรียนรู้การปรับสภาพตัวเอง ปลดปล่อยความกดดันเครียด",
        "englishMeaning": "学会自我调节，释放压力。"
      }
    ]
  },
  {
    "id": "v640",
    "hanzi": "沟通",
    "pinyin": "gōutōng",
    "thaiMeaning": "เจรจาสื่อสาร / ปรับความเข้าใจ",
    "englishMeaning": "沟通",
    "example": {
      "hanzi": "加强沟通。",
      "pinyin": "Jiāqiáng gōutōng.",
      "thaiMeaning": "ยกระดับการเจรจาสื่อสารให้แน่นแฟ้น",
      "englishMeaning": "加强沟通。"
    },
    "examples": [
      {
        "scenario": "ความสัมพันธ์ทีม",
        "hanzi": "良好沟通是团队合作的基础。",
        "pinyin": "Liánghǎo gōutōng shì tuánduì hézuò de jīchǔ.",
        "thaiMeaning": "การเจรจาสื่อสารที่ดีคือรากฐานของการทำงานร่วมกันเป็นทีม",
        "englishMeaning": "良好沟通是团队合作的基础。"
      }
    ]
  },
  {
    "id": "v641",
    "hanzi": "确认",
    "pinyin": "quèrèn",
    "thaiMeaning": "ยืนยัน (ข้อมูล/การจอง)",
    "englishMeaning": "确认",
    "example": {
      "hanzi": "确认订单信息。",
      "pinyin": "Quèrèn dìngdān xìnxī.",
      "thaiMeaning": "ยืนยันข้อมูลออเดอร์คำสั่งซื้อ",
      "englishMeaning": "确认订单信息。"
    },
    "examples": [
      {
        "scenario": "เช็กการจองโรงแรม",
        "hanzi": "请向酒店确认预订情况。",
        "pinyin": "Qǐng xiàng jiǔdiàn quèrèn yùdìng qíngkuàng.",
        "thaiMeaning": "กรุณายืนยันสถานะการจองกับทางโรงแรมนะ",
        "englishMeaning": "请向酒店确认预订情况。"
      }
    ]
  },
  {
    "id": "v642",
    "hanzi": "放弃",
    "pinyin": "fàngqì",
    "thaiMeaning": "ยอมแพ้ / ละทิ้งสิทธิ์",
    "englishMeaning": "放弃",
    "example": {
      "hanzi": "绝不放弃！",
      "pinyin": "Jué bù fàngqì!",
      "thaiMeaning": "ไม่มีวันยอมแพ้เด็ดขาด!",
      "englishMeaning": "绝不放弃！"
    },
    "examples": [
      {
        "scenario": "ปลุกใจ",
        "hanzi": "遇到一点困难不能轻易放弃。",
        "pinyin": "Yùdào yìdiǎn kùnnan bù néng qīngyì fàngqì.",
        "thaiMeaning": "เจออุปสรรคเล็กน้อยก็ไม่ควรรีบยอมแพ้ง่ายๆ",
        "englishMeaning": "遇到一点困难不能轻易放弃。"
      }
    ]
  },
  {
    "id": "v643",
    "hanzi": "克服",
    "pinyin": "kèfú",
    "thaiMeaning": "ก้าวข้าม / เอาชนะ (อุปสรรค/ความกลัว)",
    "englishMeaning": "克服",
    "example": {
      "hanzi": "克服恐惧。",
      "pinyin": "Kèfú kǒngjù.",
      "thaiMeaning": "เอาชนะความหวาดกลัว",
      "englishMeaning": "克服恐惧。"
    },
    "examples": [
      {
        "scenario": "พัฒนาตนเอง",
        "hanzi": "我们要努力克服一切困难。",
        "pinyin": "Wǒmen yào nǔlì kèfú yíqiè kùnnan.",
        "thaiMeaning": "พวกเราต้องขยันพยายามก้าวข้ามทุกอุปสรรคปัญหา",
        "englishMeaning": "我们要努力克服一切困难。"
      }
    ]
  },
  {
    "id": "v644",
    "hanzi": "证明",
    "pinyin": "zhèngmíng",
    "thaiMeaning": "พิสูจน์ / หลักฐานยืนยัน",
    "englishMeaning": "证明",
    "example": {
      "hanzi": "用事实证明。",
      "pinyin": "Yòng shìshí zhèngmíng.",
      "thaiMeaning": "ใช้ความจริงเป็นสิ่งพิสูจน์",
      "englishMeaning": "用事实证明。"
    },
    "examples": [
      {
        "scenario": "พิสูจน์ฝีมือ",
        "hanzi": "时间会证明你的努力是值得的。",
        "pinyin": "Shíjiān huì zhèngmíng nǐ de nǔlì shì zhíde de.",
        "thaiMeaning": "กาลเวลาจะเป็นสิ่งพิสูจน์ว่าความพยายามของคุณคุ้มค่า",
        "englishMeaning": "时间会证明你的努力是值得的。"
      }
    ]
  },
  {
    "id": "v645",
    "hanzi": "值得",
    "pinyin": "zhíde",
    "thaiMeaning": "คุ้มค่าแก่การ... / คุ้มค่า",
    "englishMeaning": "值得",
    "example": {
      "hanzi": "非常值得。",
      "pinyin": "Fēicháng zhíde.",
      "thaiMeaning": "คุ้มค่าเป็นอย่างยิ่ง",
      "englishMeaning": "非常值得。"
    },
    "examples": [
      {
        "scenario": "เที่ยวหรือเรียน",
        "hanzi": "这部电影非常感人，值得一看。",
        "pinyin": "Zhè bù diànyǐng fēicháng gǎnrén, zhíde yí kàn.",
        "thaiMeaning": "ภาพยนตร์เรื่องนี้ซาบซึ้งใจมาก คุ้มค่าแก่การรับชม",
        "englishMeaning": "这部电影非常感人，值得一看。"
      }
    ]
  },
  {
    "id": "v646",
    "hanzi": "优势",
    "pinyin": "yōushì",
    "thaiMeaning": "ข้อได้เปรียบ / จุดแข็ง",
    "englishMeaning": "优势",
    "example": {
      "hanzi": "发挥自身优势。",
      "pinyin": "Fāhuī zìshēn yōushì.",
      "thaiMeaning": "แสดงข้อได้เปรียบจุดแข็งของตัวเองออกมา",
      "englishMeaning": "发挥自身优势。"
    },
    "examples": [
      {
        "scenario": "การแข่งขันธุรกิจ",
        "hanzi": "我们在价格上有明显优势。",
        "pinyin": "Wǒmen zài jiàgé shàng yǒu míngxiǎn yōushì.",
        "thaiMeaning": "พวกเราในเรื่องราคามีข้อได้เปรียบจุดแข็งที่ชัดเจนมาก",
        "englishMeaning": "我们在价格上有明显优势。"
      }
    ]
  },
  {
    "id": "v647",
    "hanzi": "信任",
    "pinyin": "xìnrèn",
    "thaiMeaning": "ความไว้วางใจ / เชื่อใจ",
    "englishMeaning": "信任",
    "example": {
      "hanzi": "赢得客户的信任。",
      "pinyin": "Yíngdé kèhù de xìnrèn.",
      "thaiMeaning": "คว้าความไว้วางใจจากลูกค้ามาได้",
      "englishMeaning": "赢得客户的信任。"
    },
    "examples": [
      {
        "scenario": "การทำงานทีม",
        "hanzi": "团队成员之间需要相互信任。",
        "pinyin": "Tuánduì chéngyuán zhījiān xūyào xiānghù xìnrèn.",
        "thaiMeaning": "สมาชิกในทีมจำเป็นต้องมีความไว้วางใจซึ่งกันและกัน",
        "englishMeaning": "团队成员之间需要相互信任。"
      }
    ]
  },
  {
    "id": "v648",
    "hanzi": "竞争",
    "pinyin": "jìngzhēng",
    "thaiMeaning": "การแข่งขัน / แข่งขันชิงชัย",
    "englishMeaning": "竞争",
    "example": {
      "hanzi": "市场竞争非常激烈。",
      "pinyin": "Shìchǎng jìngzhēng fēicháng jīliè.",
      "thaiMeaning": "การแข่งขันในตลาดดุเดือดมาก",
      "englishMeaning": "市场竞争非常激烈。"
    },
    "examples": [
      {
        "scenario": "การเติบโตธุรกิจ",
        "hanzi": "良性竞争有助于提高产品质量。",
        "pinyin": "Liángxìng jìngzhēng yǒu zhù yú tígāo chǎnpǐn zhìliàng.",
        "thaiMeaning": "การแข่งขันเชิงสร้างสรรค์ช่วยยกระดับคุณภาพสินค้า",
        "englishMeaning": "良性竞争有助于提高产品质量。"
      }
    ]
  },
  {
    "id": "v649",
    "hanzi": "允许",
    "pinyin": "yǔnxǔ",
    "thaiMeaning": "อนุญาต / สิทธิให้ทำ",
    "englishMeaning": "允许",
    "example": {
      "hanzi": "这里不允许吸烟。",
      "pinyin": "Zhèlǐ bù yǔnxǔ xīyān.",
      "thaiMeaning": "ที่นี่ไม่อนุญาตให้สูบบุหรี่",
      "englishMeaning": "这里不允许吸烟。"
    },
    "examples": [
      {
        "scenario": "กฎสถานที่",
        "hanzi": "未经允许，不得擅自进入。",
        "pinyin": "Wèijīng yǔnxǔ, bù dé shànzì jìnrù.",
        "thaiMeaning": "หากไม่ได้รับอนุญาต ห้ามเข้าก่อนโดยพลการ",
        "englishMeaning": "未经允许，不得擅自进入。"
      }
    ]
  },
  {
    "id": "v650",
    "hanzi": "限制",
    "pinyin": "xiànzhì",
    "thaiMeaning": "จำกัด / ข้อจำกัด",
    "englishMeaning": "限制",
    "example": {
      "hanzi": "突破自我限制。",
      "pinyin": "Tūpò zìwǒ xiànzhì.",
      "thaiMeaning": "ก้าวข้ามข้อจำกัดของตนเอง",
      "englishMeaning": "突破自我限制。"
    },
    "examples": [
      {
        "scenario": "ความเร็วขับขี่",
        "hanzi": "这条道路限制最高车速为八十。",
        "pinyin": "Zhè tiáo dàolù xiànzhì zuì gāo chēsù wéi bāshí.",
        "thaiMeaning": "ถนนสายนี้จำกัดความเร็วสูงสุดไว้ที่ 80",
        "englishMeaning": "这条道路限制最高车速为八十。"
      }
    ]
  },
  {
    "id": "v651",
    "hanzi": "极其",
    "pinyin": "jíqí",
    "thaiMeaning": "เป็นอย่างยิ่ง / สุดๆ",
    "englishMeaning": "极其",
    "example": {
      "hanzi": "这个问题极其重要。",
      "pinyin": "Zhège wèntí jíqí zhòngyào.",
      "thaiMeaning": "ปัญหานี้มีความสำคัญเป็นอย่างยิ่ง",
      "englishMeaning": "这个问题极其重要。"
    },
    "examples": [
      {
        "scenario": "ชื่นชมทัศนียภาพ",
        "hanzi": "这里的风景极其优美。",
        "pinyin": "Zhèlǐ de fēngjǐng jíqí yōuměi.",
        "thaiMeaning": "ทัศนียภาพงดงามเป็นอย่างยิ่ง",
        "englishMeaning": "这里的风景极其优美。"
      }
    ]
  },
  {
    "id": "v652",
    "hanzi": "稍微",
    "pinyin": "shāowēi",
    "thaiMeaning": "นิดหน่อย / เล็กน้อย",
    "englishMeaning": "稍微",
    "example": {
      "hanzi": "请稍微等一下。",
      "pinyin": "Qǐng shāowēi děng yíxià.",
      "thaiMeaning": "กรุณารอแป๊บนึงนิดหน่อยนะ",
      "englishMeaning": "请稍微等一下。"
    },
    "examples": [
      {
        "scenario": "ปรับปรุงงาน",
        "hanzi": "只需稍微修改一下即可。",
        "pinyin": "Zhǐ xū shāowēi xiūgǎi yíxià jíkě.",
        "thaiMeaning": "เพียงแค่ปรับแก้ไขเล็กน้อยนิดหน่อยก็ใช้ได้แล้ว",
        "englishMeaning": "只需稍微修改一下即可。"
      }
    ]
  },
  {
    "id": "v653",
    "hanzi": "几乎",
    "pinyin": "jīhū",
    "thaiMeaning": "เกือบจะ / แทบจะ",
    "englishMeaning": "几乎",
    "example": {
      "hanzi": "我几乎要忘了。",
      "pinyin": "Wǒ jīhū yào wàng le.",
      "thaiMeaning": "ฉันเกือบจะลืมไปแล้ว",
      "englishMeaning": "我几乎要忘了。"
    },
    "examples": [
      {
        "scenario": "การทำงานหนัก",
        "hanzi": "他最近忙得几乎没时间睡觉。",
        "pinyin": "Tā zuìjìn máng de jīhū méi shíjiān shuìjiào.",
        "thaiMeaning": "หมู่นี้เขายุ่งมากจนแทบไม่มีเวลานอน",
        "englishMeaning": "他最近忙得几乎没时间睡觉。"
      }
    ]
  },
  {
    "id": "v654",
    "hanzi": "偶尔",
    "pinyin": "ǒu'ěr",
    "thaiMeaning": "เป็นบางครั้ง / นานๆ ที",
    "englishMeaning": "偶尔",
    "example": {
      "hanzi": "我偶尔去吃快餐。",
      "pinyin": "Wǒ ǒu'ěr qù chī kuàicān.",
      "thaiMeaning": "นานๆ ทีฉันจะไปทานฟาสต์ฟู้ด",
      "englishMeaning": "我偶尔去吃快餐。"
    },
    "examples": [
      {
        "scenario": "กิจกรรมยามว่าง",
        "hanzi": "他偶尔会在周末去钓鱼。",
        "pinyin": "Tā ǒu'ěr huì zài zhōumò qù diàoyú.",
        "thaiMeaning": "นานๆ ทีเขาจะไปตกปลาในสุดสัปดาห์",
        "englishMeaning": "他偶尔会在周末去钓鱼。"
      }
    ]
  },
  {
    "id": "v655",
    "hanzi": "逐渐",
    "pinyin": "zhújiàn",
    "thaiMeaning": "ค่อยๆ / ค่อยๆ เป็นค่อยๆ ไปตามลำดับ",
    "englishMeaning": "逐渐",
    "example": {
      "hanzi": "天气逐渐变冷了。",
      "pinyin": "Tiānqì zhújiàn biàn lěng le.",
      "thaiMeaning": "สภาพอากาศค่อยๆ หนาวเย็นขึ้นแล้ว",
      "englishMeaning": "天气逐渐变冷了。"
    },
    "examples": [
      {
        "scenario": "การฟื้นตัว",
        "hanzi": "经过治疗，他的身体逐渐恢复了。",
        "pinyin": "Jīngguò zhìliáo, tā de shēntǐ zhújiàn huīfù le.",
        "thaiMeaning": "ผ่านการรักษา สุขภาพร่างกายของเขาค่อยๆ ฟื้นตัวแล้ว",
        "englishMeaning": "经过治疗，他的身体逐渐恢复了。"
      }
    ]
  },
  {
    "id": "v656",
    "hanzi": "必然",
    "pinyin": "bìrán",
    "thaiMeaning": "ย่อมหลีกเลี่ยงไม่ได้ / เป็นสิ่งที่ต้องเกิดขึ้นแน่นอน",
    "englishMeaning": "必然",
    "example": {
      "hanzi": "这是必然的结果。",
      "pinyin": "Zhè shì bìrán de jiéguǒ.",
      "thaiMeaning": "นี่คือผลลัพธ์ที่ย่อมเกิดขึ้นแน่นอน",
      "englishMeaning": "这是必然的结果。"
    },
    "examples": [
      {
        "scenario": "สัจธรรมชีวิต",
        "hanzi": "付出努力必然会有回报。",
        "pinyin": "Fùchū nǔlì bìrán huì yǒu huíbào.",
        "thaiMeaning": "การทุ่มเทพยายามย่อมได้รับผลตอบแทนแน่นอน",
        "englishMeaning": "付出努力必然会有回报。"
      }
    ]
  },
  {
    "id": "v657",
    "hanzi": "充分",
    "pinyin": "chōngfèn",
    "thaiMeaning": "เพียงพอเต็มที่ / ครอบคลุม",
    "englishMeaning": "充分",
    "example": {
      "hanzi": "做好充分准备。",
      "pinyin": "Zuò hǎo chōngfèn zhǔnbèi.",
      "thaiMeaning": "เตรียมตัวให้พร้อมอย่างเต็มที่",
      "englishMeaning": "做好充分准备。"
    },
    "examples": [
      {
        "scenario": "อธิบายเหตุผล",
        "hanzi": "我们需要理由充分的证据。",
        "pinyin": "Wǒmen xūyào lǐyóu chōngfèn de zhèngjù.",
        "thaiMeaning": "พวกเราต้องการหลักฐานที่มีเหตุผลเพียงพอเต็มที่",
        "englishMeaning": "我们需要理由充分的证据。"
      }
    ]
  },
  {
    "id": "v658",
    "hanzi": "适当",
    "pinyin": "shìdàng",
    "thaiMeaning": "พอเหมาะพอดี / เหมาะสมแก่กาลเทศะ",
    "englishMeaning": "适当",
    "example": {
      "hanzi": "适当放松一下。",
      "pinyin": "Shìdàng fàngsōng yíxià.",
      "thaiMeaning": "ผ่อนคลายสักหน่อยอย่างพอเหมาะพอดี",
      "englishMeaning": "适当放松一下。"
    },
    "examples": [
      {
        "scenario": "การออกกำลังกาย",
        "hanzi": "适当的运动有助于保持健康。",
        "pinyin": "Shìdàng de yùndòng yǒu zhù yú bǎochí jiànkāng.",
        "thaiMeaning": "การออกกำลังกายอย่างพอเหมาะช่วยรักษาสุขภาพได้",
        "englishMeaning": "适当的运动有助于保持健康。"
      }
    ]
  },
  {
    "id": "v659",
    "hanzi": "无论",
    "pinyin": "wúlùn",
    "thaiMeaning": "ไม่ว่า...ก็ตาม",
    "englishMeaning": "无论",
    "example": {
      "hanzi": "无论如何都要坚持。",
      "pinyin": "Wúlùn rúhé dōu yào jiānchí.",
      "thaiMeaning": "ไม่ว่าอย่างไรก็ตามต้องยืนหยัดต่อไป",
      "englishMeaning": "无论如何都要坚持。"
    },
    "examples": [
      {
        "scenario": "มิตรภาพ",
        "hanzi": "无论遇到什么困难，我都支持你。",
        "pinyin": "Wúlùn yùdào shénme kùnnan, wǒ dōu zhīchí nǐ.",
        "thaiMeaning": "ไม่ว่าจะเจออุปสรรคอะไร ฉันก็สนับสนุนคุณเสมอ",
        "englishMeaning": "无论遇到什么困难，我都支持你。"
      }
    ]
  },
  {
    "id": "v660",
    "hanzi": "既然",
    "pinyin": "jìrán",
    "thaiMeaning": "ในเมื่อ / ในเมื่อ...แล้วล่ะก็",
    "englishMeaning": "既然",
    "example": {
      "hanzi": "既然来了就多坐一会儿。",
      "pinyin": "Jìrán lái le jiù duō zuò yíhuìr.",
      "thaiMeaning": "ในเมื่อมาแล้ว ก็นั่งคุยต่อนานอีกหน่อยนะ",
      "englishMeaning": "既然来了就多坐一会儿。"
    },
    "examples": [
      {
        "scenario": "ตัดสินใจร่วมกัน",
        "hanzi": "既然决定了，就全力以赴去做了。",
        "pinyin": "Jìrán juédìng le, jiù quán lì yǐ fù qù zuò le.",
        "thaiMeaning": "ในเมื่อตัดสินใจแล้ว ก็ทุ่มเทสุดกำลังไปทำกันเถอะ",
        "englishMeaning": "既然决定了，就全力以赴去做了。"
      }
    ]
  },
  {
    "id": "v661",
    "hanzi": "属于",
    "pinyin": "shǔyú",
    "thaiMeaning": "เป็นของ... / สังกัดอยู่ใน...",
    "englishMeaning": "属于",
    "example": {
      "hanzi": "胜利属于我们！",
      "pinyin": "Shènglì shǔyú wǒmen!",
      "thaiMeaning": "ชัยชนะย่อมเป็นของพวกเรา!",
      "englishMeaning": "胜利属于我们！"
    },
    "examples": [
      {
        "scenario": "กรรมสิทธิ์",
        "hanzi": "这本字典属于图书馆。",
        "pinyin": "Zhè běn zìdiǎn shǔyú túshūguǎn.",
        "thaiMeaning": "พจนานุกรมเล่มนี้เป็นของห้องสมุด",
        "englishMeaning": "这本字典属于图书馆。"
      }
    ]
  },
  {
    "id": "v662",
    "hanzi": "包含",
    "pinyin": "bāohán",
    "thaiMeaning": "ครอบคลุมรวมถึง / บรรจุไว้",
    "englishMeaning": "包含",
    "example": {
      "hanzi": "费用包含早餐。",
      "pinyin": "Fèiyòng bāohán zǎocān.",
      "thaiMeaning": "ค่าใช้จ่ายรวมถึงอาหารเช้าด้วย",
      "englishMeaning": "费用包含早餐。"
    },
    "examples": [
      {
        "scenario": "รายละเอียดบริการ",
        "hanzi": "套餐包含住宿和机票。",
        "pinyin": "Tàocān bāohán zhùsù hé jīpiào.",
        "thaiMeaning": "แพ็กเกจนี้รวมถึงที่พักและตั๋วเครื่องบิน",
        "englishMeaning": "套餐包含住宿和机票。"
      }
    ]
  },
  {
    "id": "v663",
    "hanzi": "采取",
    "pinyin": "cǎiqǔ",
    "thaiMeaning": "ปรับใช้ / ดำเนินการมาตรการ",
    "englishMeaning": "采取",
    "example": {
      "hanzi": "采取有效措施。",
      "pinyin": "Cǎiqǔ yǒuxiào cuòshī.",
      "thaiMeaning": "ดำเนินการมาตรการที่มีประสิทธิภาพ",
      "englishMeaning": "采取有效措施。"
    },
    "examples": [
      {
        "scenario": "แก้ไขปัญหาวิกฤต",
        "hanzi": "公司将采取积极行动解决问题。",
        "pinyin": "Gōngsī jiāng cǎiqǔ jījí xíngdòng jiějué wèntí.",
        "thaiMeaning": "บริษัทจะดำเนินการเชิงบวกเพื่อแก้ไขปัญหา",
        "englishMeaning": "公司将采取积极行动解决问题。"
      }
    ]
  },
  {
    "id": "v664",
    "hanzi": "调查",
    "pinyin": "diàochá",
    "thaiMeaning": "สำรวจ / สืบสวนสอบถาม",
    "englishMeaning": "调查",
    "example": {
      "hanzi": "进行市场调查。",
      "pinyin": "Jìnxíng shìchǎng diàochá.",
      "thaiMeaning": "ดำเนินความสำรวจวิจัยตลาด",
      "englishMeaning": "进行市场调查。"
    },
    "examples": [
      {
        "scenario": "แบบสอบถามลูกค้า",
        "hanzi": "调查显示大家都很喜欢新产品。",
        "pinyin": "Diàochá xiǎnshì dàjiā dōu hěn xǐhuan xīn chǎnpǐn.",
        "thaiMeaning": "ผลสำรวจแสดงให้เห็นว่าทุกคนชอบสินค้าใหม่มาก",
        "englishMeaning": "调查显示大家都很喜欢新产品。"
      }
    ]
  },
  {
    "id": "v665",
    "hanzi": "恢复",
    "pinyin": "huīfù",
    "thaiMeaning": "ฟื้นฟู / กลับคืนสู่สภาพเดิม",
    "englishMeaning": "恢复",
    "example": {
      "hanzi": "恢复健康。",
      "pinyin": "Huīfù jiànkāng.",
      "thaiMeaning": "ฟื้นฟูสุขภาพร่างกายให้แข็งแรง",
      "englishMeaning": "恢复健康。"
    },
    "examples": [
      {
        "scenario": "ระบบคอมพิวเตอร์",
        "hanzi": "网络已经恢复正常了。",
        "pinyin": "Wǎngluò yǐjīng huīfù zhèngcháng le.",
        "thaiMeaning": "ระบบอินเทอร์เน็ตกลับคืนสู่สภาพปกติเรียบร้อยแล้ว",
        "englishMeaning": "网络已经恢复正常了。"
      }
    ]
  },
  {
    "id": "v666",
    "hanzi": "缺乏",
    "pinyin": "quēfá",
    "thaiMeaning": "ขาดแคลน / ขาดความ...",
    "englishMeaning": "缺乏",
    "example": {
      "hanzi": "缺乏经验。",
      "pinyin": "Quēfá jīngyàn.",
      "thaiMeaning": "ขาดประสบการณ์",
      "englishMeaning": "缺乏经验。"
    },
    "examples": [
      {
        "scenario": "การทำงาน",
        "hanzi": "这个项目缺乏资金支持。",
        "pinyin": "Zhège xiàngmù quēfá zījīn zhīchí.",
        "thaiMeaning": "โปรเจกต์นี้ขาดแคลนการสนับสนุนเงินทุน",
        "englishMeaning": "这个项目缺乏资金支持。"
      }
    ]
  },
  {
    "id": "v667",
    "hanzi": "满足",
    "pinyin": "mǎnzú",
    "thaiMeaning": "ตอบสนองให้พอใจ / เติมเต็ม",
    "englishMeaning": "满足",
    "example": {
      "hanzi": "满足客户需求。",
      "pinyin": "Mǎnzú kèhù xūqiú.",
      "thaiMeaning": "ตอบสนองความต้องการของลูกค้า",
      "englishMeaning": "满足客户需求。"
    },
    "examples": [
      {
        "scenario": "ความพึงพอใจชีวิต",
        "hanzi": "知足常乐，要懂得满足。",
        "pinyin": "Zhī zú cháng lè, yào dǒngde mǎnzú.",
        "thaiMeaning": "พอใจในสิ่งที่มีจะมีความสุขเสมอ ต้องรู้จักเติมเต็มพอใจ",
        "englishMeaning": "知足常乐，要懂得满足。"
      }
    ]
  },
  {
    "id": "v668",
    "hanzi": "吸引",
    "pinyin": "xīyǐn",
    "thaiMeaning": "ดึงดูดใจ / ความสนใจ",
    "englishMeaning": "吸引",
    "example": {
      "hanzi": "深深吸引了大家。",
      "pinyin": "Shēnshēn xīyǐn le dàjiā.",
      "thaiMeaning": "ดึงดูดความสนใจทุกคนเป็นอย่างยิ่ง",
      "englishMeaning": "深深吸引了大家。"
    },
    "examples": [
      {
        "scenario": "โฆษณาสินค้า",
        "hanzi": "这款设计吸引了很多年轻顾客。",
        "pinyin": "Zhè kuǎn shèjì xīyǐn le hěn duō niánqīng gùkè.",
        "thaiMeaning": "ดีไซน์รุ่นนี้ดึงดูดลูกค้าวัยรุ่นจำนวนมาก",
        "englishMeaning": "这款设计吸引了很多年轻顾客。"
      }
    ]
  },
  {
    "id": "v669",
    "hanzi": "印象",
    "pinyin": "yìnxiàng",
    "thaiMeaning": "ความประทับใจ / ภาพจำ",
    "englishMeaning": "印象",
    "example": {
      "hanzi": "留下了深刻的印象。",
      "pinyin": "Liúxià le shēnkè de yìnxiàng.",
      "thaiMeaning": "ทิ้งความประทับใจอันตราตรึงใจไว้",
      "englishMeaning": "留下了深刻的印象。"
    },
    "examples": [
      {
        "scenario": "การพบกันครั้งแรก",
        "hanzi": "我对他第一印象非常好。",
        "pinyin": "Wǒ duì tā dì-yī yìnxiàng fēicháng hǎo.",
        "thaiMeaning": "ฉันมีความประทับใจแรกต่อเขาดีมากๆ",
        "englishMeaning": "我对他第一印象非常好。"
      }
    ]
  },
  {
    "id": "v670",
    "hanzi": "深刻",
    "pinyin": "shēnkè",
    "thaiMeaning": "ลึกซึ้งตราตรึงใจ / คมคาย",
    "englishMeaning": "深刻",
    "example": {
      "hanzi": "感受深刻。",
      "pinyin": "Gǎnshòu shēnkè.",
      "thaiMeaning": "รู้สึกซาบซึ้งตราตรึงใจมาก",
      "englishMeaning": "感受深刻。"
    },
    "examples": [
      {
        "scenario": "บทเรียนชีวิต",
        "hanzi": "这次经历给了我深刻的教训。",
        "pinyin": "Zhè cì jīnglì gěi le wǒ shēnkè de jiàoxun.",
        "thaiMeaning": "ประสบการณ์ครั้งนี้ได้มอบบทเรียนอันลึกซึ้งแก่ฉัน",
        "englishMeaning": "这次经历给了我深刻的教训。"
      }
    ]
  },
  {
    "id": "v671",
    "hanzi": "独特",
    "pinyin": "dútè",
    "thaiMeaning": "โดดเด่นเป็นเอกลักษณ์เฉพาะตัว",
    "englishMeaning": "独特",
    "example": {
      "hanzi": "独特的风格。",
      "pinyin": "Dútè de fēnggé.",
      "thaiMeaning": "สไตล์เอกลักษณ์เฉพาะตัว",
      "englishMeaning": "独特的风格。"
    },
    "examples": [
      {
        "scenario": "ชื่นชมการออกแบบ",
        "hanzi": "这座建筑的设计非常独特。",
        "pinyin": "Zhè zuò jiànzhù de shèjì fēicháng dútè.",
        "thaiMeaning": "การออกแบบอาคารหลังนี้มีเอกลักษณ์เฉพาะตัวมาก",
        "englishMeaning": "这座建筑的设计非常独特。"
      }
    ]
  },
  {
    "id": "v672",
    "hanzi": "显然",
    "pinyin": "xiǎnrán",
    "thaiMeaning": "เห็นได้ชัดว่า / ประจักษ์แจ้ง",
    "englishMeaning": "显然",
    "example": {
      "hanzi": "答案显然是正确的。",
      "pinyin": "Dá'àn xiǎnrán shì zhèngquè de.",
      "thaiMeaning": "คำตอบเห็นได้ชัดว่าถูกต้อง",
      "englishMeaning": "答案显然是正确的。"
    },
    "examples": [
      {
        "scenario": "สังเกตความรู้สึก",
        "hanzi": "她显然对这个结果很不满意。",
        "pinyin": "Tā xiǎnrán duì zhège jiéguǒ hěn bù mǎnyì.",
        "thaiMeaning": "เธอเห็นได้ชัดว่าไม่พึงพอใจกับผลลัพธ์นี้มาก",
        "englishMeaning": "她显然对这个结果很不满意。"
      }
    ]
  },
  {
    "id": "v673",
    "hanzi": "正常",
    "pinyin": "zhèngcháng",
    "thaiMeaning": "ปกติธรรมดา / สภาพปกติ",
    "englishMeaning": "正常",
    "example": {
      "hanzi": "一切正常。",
      "pinyin": "Yíqiè zhèngcháng.",
      "thaiMeaning": "ทุกอย่างปกติดี",
      "englishMeaning": "一切正常。"
    },
    "examples": [
      {
        "scenario": "การทำงานเครื่องจักร",
        "hanzi": "设备目前运转一切正常。",
        "pinyin": "Shèbèi mùqián yùnzhuǎn yíqiè zhèngcháng.",
        "thaiMeaning": "อุปกรณ์ในปัจจุบันเดินเครื่องปกติดีทุกประการ",
        "englishMeaning": "设备目前运转一切正常。"
      }
    ]
  },
  {
    "id": "v674",
    "hanzi": "诚实",
    "pinyin": "chéngshí",
    "thaiMeaning": "ซื่อสัตย์สุจริต",
    "englishMeaning": "诚实",
    "example": {
      "hanzi": "做人要诚实。",
      "pinyin": "Zuò rén yào chéngshí.",
      "thaiMeaning": "เป็นคนต้องมีความซื่อสัตย์",
      "englishMeaning": "做人要诚实。"
    },
    "examples": [
      {
        "scenario": "ชมเพื่อน",
        "hanzi": "他是一个诚实守信的人。",
        "pinyin": "Tā shì yí gè chéngshí shǒuxìn de rén.",
        "thaiMeaning": "เขาเป็นคนซื่อสัตย์รักษาคำพูด",
        "englishMeaning": "他是一个诚实守信的人。"
      }
    ]
  },
  {
    "id": "v675",
    "hanzi": "勇敢",
    "pinyin": "yǒnggǎn",
    "thaiMeaning": "กล้าหาญ / กล้าเผชิญหน้า",
    "englishMeaning": "勇敢",
    "example": {
      "hanzi": "勇敢面对。",
      "pinyin": "Yǒnggǎn miànduì.",
      "thaiMeaning": "เผชิญหน้าอย่างกล้าหาญ",
      "englishMeaning": "勇敢面对。"
    },
    "examples": [
      {
        "scenario": "ให้กำลังใจเด็ก",
        "hanzi": "孩子在台上表现得很勇敢。",
        "pinyin": "Háizi zài táishàng biǎoxiàn de hěn yǒnggǎn.",
        "thaiMeaning": "เด็กน้อยบนเวทีแสดงออกได้อย่างกล้าหาญมาก",
        "englishMeaning": "孩子在台上表现得很勇敢。"
      }
    ]
  },
  {
    "id": "v676",
    "hanzi": "幽默",
    "pinyin": "yōumò",
    "thaiMeaning": "มีอารมณ์ขัน / ตลกเฮฮา",
    "englishMeaning": "幽默",
    "example": {
      "hanzi": "很有幽默感。",
      "pinyin": "Hěn yǒu yōumògǎn.",
      "thaiMeaning": "มีอารมณ์ขันมาก",
      "englishMeaning": "很有幽默感。"
    },
    "examples": [
      {
        "scenario": "บรรยากาศการคุย",
        "hanzi": "他说话风趣幽默，大家都很喜欢他。",
        "pinyin": "Tā shuōhuà fēngqù yōumò, dàjiā dōu hěn xǐhuan tā.",
        "thaiMeaning": "เขาคุยสนุกสนานมีอารมณ์ขัน ทุกคนเลยชอบเขามาก",
        "englishMeaning": "他说话风趣幽默，大家都很喜欢他。"
      }
    ]
  },
  {
    "id": "v677",
    "hanzi": "骄傲",
    "pinyin": "jiāo'ào",
    "thaiMeaning": "ภาคภูมิใจ / ทะนงตน",
    "englishMeaning": "骄傲",
    "example": {
      "hanzi": "为你感到骄傲！",
      "pinyin": "Wèi nǐ gǎndào jiāo'ào!",
      "thaiMeaning": "รู้สึกภาคภูมิใจในตัวคุณมาก!",
      "englishMeaning": "为你感到骄傲！"
    },
    "examples": [
      {
        "scenario": "ความสำเร็จลูก",
        "hanzi": "取得成绩后不要骄傲自满。",
        "pinyin": "Qǔdé chéngjì hòu bú yào jiāo'ào zìmǎn.",
        "thaiMeaning": "หลังจากคว้าความสำเร็จมาได้อย่าเพิ่งถือดีทะนงตน",
        "englishMeaning": "取得成绩后不要骄傲自满。"
      }
    ]
  },
  {
    "id": "v678",
    "hanzi": "怀疑",
    "pinyin": "huáiyí",
    "thaiMeaning": "สงสัย / กังขา",
    "englishMeaning": "怀疑",
    "example": {
      "hanzi": "毫无怀疑。",
      "pinyin": "Háo wú huáiyí.",
      "thaiMeaning": "ไม่มีความสงสัยแม้แต่น้อย",
      "englishMeaning": "毫无怀疑。"
    },
    "examples": [
      {
        "scenario": "ตรวจสอบเรื่องราว",
        "hanzi": "我们不能无根据地怀疑别人。",
        "pinyin": "Wǒmen bù néng wú gēnjù de huáiyí biérén.",
        "thaiMeaning": "พวกเราไม่ควรสงสัยคนอื่นโดยไร้หลักฐานอ้างอิง",
        "englishMeaning": "我们不能无根据地怀疑别人。"
      }
    ]
  },
  {
    "id": "v679",
    "hanzi": "尊敬",
    "pinyin": "zūnjìng",
    "thaiMeaning": "เคารพยกย่อง / ให้ความเคารพ",
    "englishMeaning": "尊敬",
    "example": {
      "hanzi": "尊敬长辈。",
      "pinyin": "Zūnjìng zhǎngbèi.",
      "thaiMeaning": "เคารพผู้หลักผู้ใหญ่",
      "englishMeaning": "尊敬长辈。"
    },
    "examples": [
      {
        "scenario": "ความสัมพันธ์ครูนักเรียน",
        "hanzi": "他是受人尊敬的好老师。",
        "pinyin": "Tā shì shòu rén zūnjìng de hǎo lǎoshī.",
        "thaiMeaning": "เขาคือคุณครูที่ดีซึ่งได้รับการเคารพยกย่องจากทุกคน",
        "englishMeaning": "他是受人尊敬的好老师。"
      }
    ]
  },
  {
    "id": "v680",
    "hanzi": "欣赏",
    "pinyin": "xīnshǎng",
    "thaiMeaning": "ชื่นชม / ดื่มด่ำ (งานศิลปะ/คนเก่ง)",
    "englishMeaning": "欣赏",
    "example": {
      "hanzi": "欣赏音乐。",
      "pinyin": "Xīnshǎng yīnyuè.",
      "thaiMeaning": "ดื่มด่ำรับฟังเสียงดนตรี",
      "englishMeaning": "欣赏音乐。"
    },
    "examples": [
      {
        "scenario": "ชมเพื่อนร่วมงาน",
        "hanzi": "我非常欣赏他的工作才能。",
        "pinyin": "Wǒ fēicháng xīnshǎng tā de gōngzuò cáinéng.",
        "thaiMeaning": "ฉันชื่นชมความสามารถในการทำงานของเขาเป็นอย่างยิ่ง",
        "englishMeaning": "我非常欣赏他的工作才能。"
      }
    ]
  },
  {
    "id": "v681",
    "hanzi": "同情",
    "pinyin": "tóngqíng",
    "thaiMeaning": "เห็นอกเห็นใจ",
    "englishMeaning": "同情",
    "example": {
      "hanzi": "值得同情。",
      "pinyin": "Zhíde tóngqíng.",
      "thaiMeaning": "สมควรแก่การเห็นอกเห็นใจ",
      "englishMeaning": "值得同情。"
    },
    "examples": [
      {
        "scenario": "ช่วยเหลือคนอื่น",
        "hanzi": "我们应对遭遇不幸的人充满同情。",
        "pinyin": "Wǒmen yìng duì zāoyù búxìng de rén chōngmǎn tóngqíng.",
        "thaiMeaning": "พวกเราควรเปี่ยมไปด้วยความเห็นอกเห็นใจผู้ที่พบเจอความโชคร้าย",
        "englishMeaning": "我们应对遭遇不幸的人充满同情。"
      }
    ]
  },
  {
    "id": "v682",
    "hanzi": "并且",
    "pinyin": "bìngqiě",
    "thaiMeaning": "และยัง...อีกด้วย / แถมยัง",
    "englishMeaning": "并且",
    "example": {
      "hanzi": "好用并且便宜。",
      "pinyin": "Hǎoyòng bìngqiě piányi.",
      "thaiMeaning": "ใช้ง่ายแถมยังมีราคาถูกอีกด้วย",
      "englishMeaning": "好用并且便宜。"
    },
    "examples": [
      {
        "scenario": "ชมสินค้า",
        "hanzi": "这款手机外观漂亮，并且性能优越。",
        "pinyin": "Zhè kuǎn shǒujī wàiguān piàoliang, bìngqiě xìngnéng yōuyuè.",
        "thaiMeaning": "มือถือรุ่นนี้รูปลักษณ์สวยงาม แถมยังมีประสิทธิภาพยอดเยี่ยมอีกด้วย",
        "englishMeaning": "这款手机外观漂亮，并且性能优越。"
      }
    ]
  },
  {
    "id": "v683",
    "hanzi": "主菜",
    "pinyin": "zhǔcài",
    "thaiMeaning": "อาหารจานหลัก / Main course",
    "englishMeaning": "main course",
    "example": {
      "hanzi": "我们今天的主菜是烤鸭。",
      "pinyin": "Wǒmen jīntiān de zhǔcài shì kǎoyā.",
      "thaiMeaning": "อาหารจานหลักของพวกเราในวันนี้คือเป็ดย่าง",
      "englishMeaning": "Our main dish today is roast duck."
    },
    "examples": [
      {
        "scenario": "ลำดับการเสิร์ฟอาหาร",
        "hanzi": "请在吃完前菜后再上主菜。",
        "pinyin": "Qǐng zài chī wán qiáncài hòu zài shàng zhǔcài.",
        "thaiMeaning": "กรุณาเสิร์ฟอาหารจานหลักหลังจากทานอาหารทานเล่นเสร็จแล้ว",
        "englishMeaning": "Please finish the appetizer before serving the main course."
      }
    ]
  },
  {
    "id": "v684",
    "hanzi": "配菜",
    "pinyin": "pèicài",
    "thaiMeaning": "เครื่องเคียง / Side dish",
    "englishMeaning": "side dishes",
    "example": {
      "hanzi": "这道主菜搭配了新鲜的配菜。",
      "pinyin": "Zhè dào zhǔcài dāpèi le xīnxiān de pèicài.",
      "thaiMeaning": "อาหารจานหลักนี้จัดเสิร์ฟคู่กับเครื่องเคียงสดใหม่",
      "englishMeaning": "This main dish is paired with fresh side dishes."
    },
    "examples": [
      {
        "scenario": "สั่งเครื่องเคียงเพิ่ม",
        "hanzi": "请问需要加一份配菜吗？",
        "pinyin": "Qǐngwèn xūyào jiā yí fèn pèicài ma?",
        "thaiMeaning": "ขอถามหน่อย คุณต้องการสั่งเครื่องเคียงเพิ่มอีกหนึ่งจานไหมครับ?",
        "englishMeaning": "Do you need to add a side dish?"
      }
    ]
  },
  {
    "id": "v685",
    "hanzi": "前菜",
    "pinyin": "qiáncài",
    "thaiMeaning": "อาหารทานเล่น / Appetizer",
    "englishMeaning": "Appetizer",
    "example": {
      "hanzi": "先来一份清爽的前菜。",
      "pinyin": "Xiān lái yí fèn qīngshuǎng de qiáncài.",
      "thaiMeaning": "ขอเอาอาหารทานเล่นรสสดชื่นมาจานนึงก่อน",
      "englishMeaning": "Let’s start with a refreshing appetizer."
    },
    "examples": [
      {
        "scenario": "แนะนำเมนูทานเล่น",
        "hanzi": "我们的前菜主要以沙拉和凉菜为主。",
        "pinyin": "Wǒmen de qiáncài zhǔyào yǐ shālā hé liángcài wéi zhǔ.",
        "thaiMeaning": "อาหารทานเล่นของร้านเราเน้นสลัดและอาหารเย็นเป็นหลัก",
        "englishMeaning": "Our appetizers are mainly salads and cold dishes."
      }
    ]
  },
  {
    "id": "v686",
    "hanzi": "招牌菜",
    "pinyin": "zhāopáicài",
    "thaiMeaning": "เมนูเด็ดประจำร้าน / Signature dish",
    "englishMeaning": "Signature dish",
    "example": {
      "hanzi": "这是我们餐厅的招牌菜。",
      "pinyin": "Zhè shì wǒmen cāntīng de zhāopáicài.",
      "thaiMeaning": "นี่คือเมนูเด็ดประจำร้านของพวกเรา",
      "englishMeaning": "This is our restaurant's signature dish."
    },
    "examples": [
      {
        "scenario": "สั่งเมนูแนะนำ",
        "hanzi": "请给我推荐两道招牌菜。",
        "pinyin": "Qǐng gěi wǒ tuījiàn liǎng dào zhāopáicài.",
        "thaiMeaning": "ช่วยแนะนำเมนูเด็ดประจำร้านให้ฉันสัก 2 จานทีครับ",
        "englishMeaning": "Please recommend two signature dishes to me."
      }
    ]
  },
  {
    "id": "v687",
    "hanzi": "蘸料",
    "pinyin": "zhànliào",
    "thaiMeaning": "น้ำจิ้ม / Dipping sauce",
    "englishMeaning": "dipping sauce",
    "example": {
      "hanzi": "请帮我调一份麻辣蘸料。",
      "pinyin": "Qǐng bāng wǒ tiáo yí fèn málà zhànliào.",
      "thaiMeaning": "ช่วยปรุงน้ำจิ้มหม่าล่าให้ฉันสักถ้วยที",
      "englishMeaning": "Please help me make a spicy dipping sauce."
    },
    "examples": [
      {
        "scenario": "ทานชาบูหม้อไฟ",
        "hanzi": "火锅的蘸料非常重要。",
        "pinyin": "Huǒguō de zhànliào fēicháng zhòngyào.",
        "thaiMeaning": "น้ำจิ้มของชาบูหม้อไฟมีความสำคัญมากๆ",
        "englishMeaning": "The dipping sauce for hot pot is very important."
      }
    ]
  },
  {
    "id": "v688",
    "hanzi": "调料",
    "pinyin": "tiáoliào",
    "thaiMeaning": "เครื่องปรุงรส / Seasonings & condiments",
    "englishMeaning": "seasoning",
    "example": {
      "hanzi": "自助调料台在右边。",
      "pinyin": "Zìzhù tiáoliào tái zài yòubiān.",
      "thaiMeaning": "เคาน์เตอร์เครื่องปรุงรสแบบบริการตนเองอยู่ทางขวามือ",
      "englishMeaning": "The self-service condiment station is on the right."
    },
    "examples": [
      {
        "scenario": "การประกอบอาหาร",
        "hanzi": "厨师加了特制的调料。",
        "pinyin": "Chúshī jiā le tèzhì de tiáoliào.",
        "thaiMeaning": "เชฟได้ใส่เครื่องปรุงรสสูตรพิเศษลงไป",
        "englishMeaning": "The chef added special seasonings."
      }
    ]
  },
  {
    "id": "v689",
    "hanzi": "拼盘",
    "pinyin": "pīnpán",
    "thaiMeaning": "จานรวมมิตร / Platter",
    "englishMeaning": "platter",
    "example": {
      "hanzi": "来一份水果拼盘。",
      "pinyin": "Lái yí fèn shuǐguǒ pīnpán.",
      "thaiMeaning": "เอาผลไม้จานรวมมิตรมาสักจาน",
      "englishMeaning": "Have a fruit platter."
    },
    "examples": [
      {
        "scenario": "สั่งงานสังสรรค์",
        "hanzi": "海鲜拼盘包含虾、蟹和贝类。",
        "pinyin": "Hǎixiān pīnpán bāohán xiā, xiè hé bèilèi.",
        "thaiMeaning": "จานรวมมิตรอาหารทะเลรวมถึงกุ้ง ปู และหอยชนิดต่างๆ",
        "englishMeaning": "The seafood platter includes shrimp, crab and shellfish."
      }
    ]
  },
  {
    "id": "v690",
    "hanzi": "凉菜",
    "pinyin": "liángcài",
    "thaiMeaning": "กับแกล้มเย็น / Cold dish",
    "englishMeaning": "cold dish",
    "example": {
      "hanzi": "夏天吃凉菜很开胃。",
      "pinyin": "Xiàtiān chī liángcài hěn kāiwèi.",
      "thaiMeaning": "หน้าร้อนทานกับแกล้มเย็นช่วยเจริญอาหารมาก",
      "englishMeaning": "It is very appetizing to eat cold dishes in summer."
    },
    "examples": [
      {
        "scenario": "เสิร์ฟกับแกล้มก่อน",
        "hanzi": "凉菜很快就上齐了。",
        "pinyin": "Liángcài hěn kuài jiù shàng qí le.",
        "thaiMeaning": "กับแกล้มเย็นเสิร์ฟออกมาครบถ้วนอย่างรวดเร็ว",
        "englishMeaning": "The cold dishes were served quickly."
      }
    ]
  },
  {
    "id": "v691",
    "hanzi": "食材",
    "pinyin": "shícái",
    "thaiMeaning": "วัตถุดิบประกอบอาหาร / Food ingredients",
    "englishMeaning": "Ingredients",
    "example": {
      "hanzi": "保证食材的新鲜。",
      "pinyin": "Bǎozhèng shícái de xīnxiān.",
      "thaiMeaning": "รับประกันความสดใหม่ของวัตถุดิบ",
      "englishMeaning": "Ensure the freshness of ingredients."
    },
    "examples": [
      {
        "scenario": "ชูจุดขายร้าน",
        "hanzi": "我们每天采购有机食材。",
        "pinyin": "Wǒmen měitiān cǎigòu yǒujī shícái.",
        "thaiMeaning": "พวกเราคัดสรรจัดซื้อวัตถุดิบออร์แกนิกทุกวัน",
        "englishMeaning": "We purchase organic ingredients every day."
      }
    ]
  },
  {
    "id": "v692",
    "hanzi": "肉丝",
    "pinyin": "ròusī",
    "thaiMeaning": "เนื้อหั่นฝอย / Shredded meat",
    "englishMeaning": "Shredded pork",
    "example": {
      "hanzi": "鱼香肉丝是一道名菜。",
      "pinyin": "Yúxiāng ròusī shì yí dào míngcài.",
      "thaiMeaning": "ผัดเนื้อหั่นฝอยซูซวงเป็นเมนูชื่อดัง",
      "englishMeaning": "Fish-flavored shredded pork is a famous dish."
    },
    "examples": [
      {
        "scenario": "สั่งอาหารจีน",
        "hanzi": "来一份青椒炒肉丝。",
        "pinyin": "Lái yí fèn qīngjiāo chǎo ròusī.",
        "thaiMeaning": "เอาพริกหยวกผัดเนื้อหั่นฝอยมาจานนึง",
        "englishMeaning": "Have some fried shredded pork with green pepper."
      }
    ]
  },
  {
    "id": "v693",
    "hanzi": "肉片",
    "pinyin": "ròupiàn",
    "thaiMeaning": "เนื้อสไลซ์ / Sliced meat",
    "englishMeaning": "sliced ​​meat",
    "example": {
      "hanzi": "水煮肉片很辣。",
      "pinyin": "Shuǐzhǔ ròupiàn hěn là.",
      "thaiMeaning": "เนื้อสไลซ์ต้มซุปเผ็ดหม่าล่าเผ็ดมาก",
      "englishMeaning": "The boiled pork slices are very spicy."
    },
    "examples": [
      {
        "scenario": "สั่งชาบู",
        "hanzi": "请再加两盘牛肉片。",
        "pinyin": "Qǐng zài jiā liǎng pán niúròu piàn.",
        "thaiMeaning": "กรุณาเพิ่มเนื้อวัวสไลซ์อีก 2 ถาดทีครับ",
        "englishMeaning": "Two more plates of beef slices, please."
      }
    ]
  },
  {
    "id": "v694",
    "hanzi": "肉丁",
    "pinyin": "ròudīng",
    "thaiMeaning": "เนื้อหั่นเต๋า / Diced meat cubes",
    "englishMeaning": "diced pork",
    "example": {
      "hanzi": "宫保鸡丁里面有鸡肉丁。",
      "pinyin": "Gōngbǎo jīdīng lǐmiàn yǒu jīròu dīng.",
      "thaiMeaning": "ไก่ผัดเม็ดมะม่วงกุ้งโบว์มีเนื้อไก่หั่นเต๋าอยู่",
      "englishMeaning": "Kung Pao Chicken contains diced chicken."
    },
    "examples": [
      {
        "scenario": "อธิบายลักษณะอาหาร",
        "hanzi": "把肉切成均匀的肉丁。",
        "pinyin": "Bǎ ròu qiē chéng jūnyún de ròudīng.",
        "thaiMeaning": "นำเนื้อมาหั่นเป็นชิ้นเต๋าขนาดเท่าๆ กัน",
        "englishMeaning": "Cut the meat into even dices."
      }
    ]
  },
  {
    "id": "v695",
    "hanzi": "肉末",
    "pinyin": "ròumò",
    "thaiMeaning": "เนื้อสับ / Minced meat",
    "englishMeaning": "minced meat",
    "example": {
      "hanzi": "麻婆豆腐需要加肉末。",
      "pinyin": "Mápó dòufu xūyào jiā ròumò.",
      "thaiMeaning": "เต้าหู้มาโปผัดหม่าล่าจำเป็นต้องใส่เนื้อสับ",
      "englishMeaning": "Mapo tofu requires minced meat."
    },
    "examples": [
      {
        "scenario": "ทำอาหารเมนูผัด",
        "hanzi": "肉末茄子非常好吃。",
        "pinyin": "Ròumò qiézi fēicháng hǎochī.",
        "thaiMeaning": "มะเขือยาวผัดเนื้อสับอร่อยมากๆ",
        "englishMeaning": "Eggplant with minced meat is very delicious."
      }
    ]
  },
  {
    "id": "v696",
    "hanzi": "订位",
    "pinyin": "dìngwèi",
    "thaiMeaning": "จองโต๊ะอาหาร / Reserve a table",
    "englishMeaning": "Book a table",
    "example": {
      "hanzi": "我想订今晚六点的桌位。",
      "pinyin": "Wǒ xiǎng dìng jīn wǎn liù diǎn de zhuōwèi.",
      "thaiMeaning": "ฉันต้องการจองโต๊ะสำหรับเย็นนี้ตอน 6 โมง",
      "englishMeaning": "I'd like to reserve a table for six o'clock tonight."
    },
    "examples": [
      {
        "scenario": "โทรจองล่วงหน้า",
        "hanzi": "周末餐厅生意很好，建议提前订位。",
        "pinyin": "Zhōumò cāntīng shēngyi hěn hǎo, jiànyì tíqián dìngwèi.",
        "thaiMeaning": "สุดสัปดาห์ร้านอาหารลูกค้าเยอะมาก แนะนำให้จองโต๊ะล่วงหน้า",
        "englishMeaning": "The restaurant is very busy on weekends, so it is recommended to book a table in advance."
      }
    ]
  },
  {
    "id": "v697",
    "hanzi": "上菜",
    "pinyin": "shàngcài",
    "thaiMeaning": "เสิร์ฟอาหาร / Serve dishes",
    "englishMeaning": "Serve",
    "example": {
      "hanzi": "服务员，请问什么时候上菜？",
      "pinyin": "Fúwùyuán, qǐngwèn shénme shíhou shàngcài?",
      "thaiMeaning": "น้องพนักงาน ขอถามหน่อยเมื่อไหร่จะเสิร์ฟอาหารครับ?",
      "englishMeaning": "Waiter, when will the food be served?"
    },
    "examples": [
      {
        "scenario": "ตามอาหาร",
        "hanzi": "后厨正在加快上菜速度。",
        "pinyin": "Hòuchú zhèngzài jiākuài shàngcài sùdù.",
        "thaiMeaning": "ห้องครัวกำลังเร่งความเร็วในการเสิร์ฟอาหารอยู่",
        "englishMeaning": "The chef is speeding up the serving time."
      }
    ]
  },
  {
    "id": "v698",
    "hanzi": "翻台率",
    "pinyin": "fāntáilǜ",
    "thaiMeaning": "อัตราการหมุนเวียนโต๊ะ / Table turnover rate",
    "englishMeaning": "turnover rate",
    "example": {
      "hanzi": "提高餐厅的翻台率。",
      "pinyin": "Tígāo cāntīng de fāntáilǜ.",
      "thaiMeaning": "ยกระดับอัตราการหมุนเวียนโต๊ะของร้านอาหาร",
      "englishMeaning": "Increase the restaurant’s table turnover rate."
    },
    "examples": [
      {
        "scenario": "การบริหารร้านอาหาร",
        "hanzi": "午高峰时段翻台率非常高。",
        "pinyin": "Wǔ gāofēng shíduàn fāntáilǜ fēicháng gāo.",
        "thaiMeaning": "ช่วงเวลาลูกค้าแน่นช่วงเที่ยง อัตราหมุนเวียนโต๊ะสูงมากๆ",
        "englishMeaning": "The table turnover rate is very high during the afternoon peak period."
      }
    ]
  },
  {
    "id": "v699",
    "hanzi": "打包",
    "pinyin": "dǎbāo",
    "thaiMeaning": "ห่อกลับบ้าน / Pack leftovers / Takeout",
    "englishMeaning": "Pack",
    "example": {
      "hanzi": "服务员，请帮我打包。",
      "pinyin": "Fúwùyuán, qǐng bāng wǒ dǎbāo.",
      "thaiMeaning": "พนักงานครับ ช่วยห่อกับข้าวส่วนที่เหลือกลับบ้านให้ที",
      "englishMeaning": "Waiter, please help me pack."
    },
    "examples": [
      {
        "scenario": "กินไม่หมดห่อกลับ",
        "hanzi": "没吃完的菜可以打包带走。",
        "pinyin": "Méi chī wán de cài kěyǐ dǎbāo dài zǒu.",
        "thaiMeaning": "อาหารที่กินไม่หมดสามารถใส่กล่องห่อกลับบ้านได้",
        "englishMeaning": "Unfinished dishes can be taken away."
      }
    ]
  },
  {
    "id": "v700",
    "hanzi": "堂食",
    "pinyin": "tángshí",
    "thaiMeaning": "ทานที่ร้าน / Dine-in",
    "englishMeaning": "Dine-in",
    "example": {
      "hanzi": "请问是堂食还是外带？",
      "pinyin": "Qǐngwèn shì tángshí háishì wàidài?",
      "thaiMeaning": "ขอถามหน่อย ทานที่ร้านหรือห่อกลับบ้านครับ?",
      "englishMeaning": "Is it dine-in or takeout?"
    },
    "examples": [
      {
        "scenario": "เลือกรูปแบบการทาน",
        "hanzi": "今天堂食顾客非常多。",
        "pinyin": "Jīntiān tángshí gùkè fēicháng duō.",
        "thaiMeaning": "วันนี้ลูกค้าที่มาทานที่ร้านเยอะมากๆ",
        "englishMeaning": "There are a lot of dine-in customers today."
      }
    ]
  },
  {
    "id": "v701",
    "hanzi": "服务费",
    "pinyin": "fúwùfèi",
    "thaiMeaning": "ค่าบริการ / Service charge",
    "englishMeaning": "service charge",
    "example": {
      "hanzi": "账单包含百分之十的服务费。",
      "pinyin": "Zhàngdān bāohán bǎi fēn zhī shí de fúwùfèi.",
      "thaiMeaning": "บิลรวมค่าบริการ 10% ไว้แล้ว",
      "englishMeaning": "The bill includes a 10% service charge."
    },
    "examples": [
      {
        "scenario": "เช็กบิลค่าอาหาร",
        "hanzi": "本店不收取额外服务费。",
        "pinyin": "Běndiàn bù shōuqǔ éwài fúwùfèi.",
        "thaiMeaning": "ร้านของพวกเราไม่คิดค่าบริการเพิ่มเติม",
        "englishMeaning": "Our store does not charge additional service fees."
      }
    ]
  },
  {
    "id": "v702",
    "hanzi": "小费",
    "pinyin": "xiǎofèi",
    "thaiMeaning": "ทิป / Tip",
    "englishMeaning": "tip",
    "example": {
      "hanzi": "给服务员留小费。",
      "pinyin": "Gěi fúwùyuán liú xiǎofèi.",
      "thaiMeaning": "ให้ทิปแก่พนักงานบริการ",
      "englishMeaning": "Leave a tip for the waiter."
    },
    "examples": [
      {
        "scenario": "ธรรมเนียมสากล",
        "hanzi": "这里的文化习惯给小费。",
        "pinyin": "Zhèlǐ de wénhuà xíguàn gěi xiǎofèi.",
        "thaiMeaning": "วัฒนธรรมของที่นี่มีธรรมเนียมการให้ทิป",
        "englishMeaning": "It's cultural here to tip."
      }
    ]
  },
  {
    "id": "v703",
    "hanzi": "后厨",
    "pinyin": "hòuchú",
    "thaiMeaning": "ห้องครัว / Back of house",
    "englishMeaning": "kitchen",
    "example": {
      "hanzi": "非工作人员请勿进入后厨。",
      "pinyin": "Fēi gōngzuò rényuán qǐng wù jìnrù hòuchú.",
      "thaiMeaning": "ผู้ไม่มีส่วนเกี่ยวข้องห้ามเข้าห้องครัว",
      "englishMeaning": "Non-staff members are not allowed to enter the kitchen."
    },
    "examples": [
      {
        "scenario": "ระบบสุขาภิบาล",
        "hanzi": "后厨保持得非常干净整洁。",
        "pinyin": "Hòuchú bǎochí de fēicháng gānjìng zhěngjié.",
        "thaiMeaning": "ห้องครัวรักษาสภาพได้สะอาดเป็นระเบียบเรียบร้อยมาก",
        "englishMeaning": "The kitchen is kept very clean and tidy."
      }
    ]
  },
  {
    "id": "v704",
    "hanzi": "主厨",
    "pinyin": "zhǔchú",
    "thaiMeaning": "เชฟใหญ่ / Executive chef",
    "englishMeaning": "chef",
    "example": {
      "hanzi": "主厨特制汤品。",
      "pinyin": "Zhǔchú tèzhì tāngpǐn.",
      "thaiMeaning": "ซุปสูตรรังสรรค์พิเศษโดยเชฟใหญ่",
      "englishMeaning": "Chef's special soup."
    },
    "examples": [
      {
        "scenario": "แนะนำทีมงาน",
        "hanzi": "我们的主厨来自法国。",
        "pinyin": "Wǒmen de zhǔchú láizì Fǎguó.",
        "thaiMeaning": "เชฟใหญ่ของพวกเรามาจากประเทศฝรั่งเศส",
        "englishMeaning": "Our chef is from France."
      }
    ]
  },
  {
    "id": "v705",
    "hanzi": "食品安全",
    "pinyin": "shípǐn ānquán",
    "thaiMeaning": "ความปลอดภัยทางอาหาร / Food safety",
    "englishMeaning": "food safety",
    "example": {
      "hanzi": "严格把控食品安全。",
      "pinyin": "Yángé bǎkòng shípǐn ānquán.",
      "thaiMeaning": "ควบคุมความปลอดภัยทางอาหารอย่างเข้มงวด",
      "englishMeaning": "Strictly control food safety."
    },
    "examples": [
      {
        "scenario": "หัวใจธุรกิจอาหาร",
        "hanzi": "食品安全是餐饮业的生命线。",
        "pinyin": "Shípǐn ānquán shì cānyǐnyè de shēngmìngxiàn.",
        "thaiMeaning": "ความปลอดภัยทางอาหารคือหัวใจสำคัญของธุรกิจร้านอาหาร",
        "englishMeaning": "Food safety is the lifeline of the catering industry."
      }
    ]
  },
  {
    "id": "v706",
    "hanzi": "卫生标准",
    "pinyin": "wèishēng biāozhǔn",
    "thaiMeaning": "มาตรฐานสุขอนามัย / Hygiene standards",
    "englishMeaning": "health standards",
    "example": {
      "hanzi": "符合国家卫生标准。",
      "pinyin": "Fúhé guójiā wèishēng biāozhǔn.",
      "thaiMeaning": "ตรงตามมาตรฐานสุขอนามัยระดับชาติ",
      "englishMeaning": "Comply with national health standards."
    },
    "examples": [
      {
        "scenario": "ตรวจสุขาภิบาล",
        "hanzi": "餐厅每月都会检测卫生标准。",
        "pinyin": "Cāntīng měi yuè dōu huì jiǎncè wèishēng biāozhǔn.",
        "thaiMeaning": "ร้านอาหารจะตรวจเช็กมาตรฐานสุขอนามัยเป็นประจำทุกเดือน",
        "englishMeaning": "The restaurant will test hygiene standards every month."
      }
    ]
  },
  {
    "id": "v707",
    "hanzi": "营业额",
    "pinyin": "yíngyè'é",
    "thaiMeaning": "ยอดขายรวม / Business turnover / Revenue",
    "englishMeaning": "turnover",
    "example": {
      "hanzi": "本月营业额大幅增加。",
      "pinyin": "Běn yuè yíngyè'é dàfú zēngjiā.",
      "thaiMeaning": "ยอดขายรวมเดือนนี้เพิ่มขึ้นเป็นอย่างมาก",
      "englishMeaning": "Sales increased significantly this month."
    },
    "examples": [
      {
        "scenario": "รายงานบัญชี",
        "hanzi": "周末的营业额占全周的一半。",
        "pinyin": "Zhōumò de yíngyè'é zhàn quán zhōu de yíbàn.",
        "thaiMeaning": "ยอดขายช่วงเสาร์อาทิตย์คิดเป็นครึ่งหนึ่งของทั้งสัปดาห์",
        "englishMeaning": "Weekend sales account for half of the entire week."
      }
    ]
  },
  {
    "id": "v708",
    "hanzi": "成本控制",
    "pinyin": "chéngběn kòngzhì",
    "thaiMeaning": "การควบคุมต้นทุน / Cost control",
    "englishMeaning": "cost control",
    "example": {
      "hanzi": "做好食材成本控制。",
      "pinyin": "Zuò hǎo shícái chéngběn kòngzhì.",
      "thaiMeaning": "ทำระบบควบคุมต้นทุนวัตถุดิบให้ออกมาดี",
      "englishMeaning": "Do a good job in food cost control."
    },
    "examples": [
      {
        "scenario": "การบริหารกำไร",
        "hanzi": "合理的成本控制能提高利润。",
        "pinyin": "Hélǐ de chéngběn kòngzhì néng tígāo lìrùn.",
        "thaiMeaning": "การควบคุมต้นทุนที่สมเหตุสมผลช่วยเพิ่มกำไรได้",
        "englishMeaning": "Reasonable cost control can increase profits."
      }
    ]
  },
  {
    "id": "v709",
    "hanzi": "损耗",
    "pinyin": "sǔnhào",
    "thaiMeaning": "ของเสียวัตถุดิบ / Wastage / Loss",
    "englishMeaning": "loss",
    "example": {
      "hanzi": "减少厨房食材损耗。",
      "pinyin": "Jiǎnshǎo chúfáng shícái sǔnhào.",
      "thaiMeaning": "ลดการสูญเสียของเสียวัตถุดิบในห้องครัว",
      "englishMeaning": "Reduce the loss of kitchen ingredients."
    },
    "examples": [
      {
        "scenario": "การจัดการคลัง",
        "hanzi": "降低损耗是增加收益的关键。",
        "pinyin": "Jiàngdī sǔnhào shì zēngjiā shōuyì de guānjiàn.",
        "thaiMeaning": "การปรับลดของเสียวัตถุดิบคือปัจจัยสำคัญในการเพิ่มรายได้",
        "englishMeaning": "Reducing losses is the key to increasing profits."
      }
    ]
  },
  {
    "id": "v710",
    "hanzi": "盘点",
    "pinyin": "pándiǎn",
    "thaiMeaning": "เช็กสต็อก / Stocktaking / Inventory check",
    "englishMeaning": "inventory",
    "example": {
      "hanzi": "月底进行库存盘点。",
      "pinyin": "Yuèdǐ jìnxíng kùcún pándiǎn.",
      "thaiMeaning": "ทำคลังเช็กสต็อกสินค้าปลายเดือน",
      "englishMeaning": "Conduct an inventory count at the end of the month."
    },
    "examples": [
      {
        "scenario": "ปิดยอดประจำเดือน",
        "hanzi": "盘点发现部分调料存货不足。",
        "pinyin": "Pándiǎn fāxiàn bùfen tiáoliào cúnhuò bùzú.",
        "thaiMeaning": "เช็กสต็อกพบว่าเครื่องปรุงรสบางส่วนมีสต็อกไม่เพียงพอ",
        "englishMeaning": "An inventory found that some spices were insufficient in stock."
      }
    ]
  },
  {
    "id": "v711",
    "hanzi": "采购",
    "pinyin": "cǎigòu",
    "thaiMeaning": "จัดซื้อจัดหา / Procurement",
    "englishMeaning": "purchase",
    "example": {
      "hanzi": "负责清晨蔬菜采购。",
      "pinyin": "Fùzé qīngchén shūcài cǎigòu.",
      "thaiMeaning": "รับผิดชอบการจัดซื้อผักสดในตอนเช้ามืด",
      "englishMeaning": "Responsible for early morning vegetable purchasing."
    },
    "examples": [
      {
        "scenario": "ดิลิเวอรีวัตถุดิบ",
        "hanzi": "采购部门直接向农场进货。",
        "pinyin": "Cǎigòu bùmén zhíjiē xiàng nóngchǎng jìn huò.",
        "thaiMeaning": "แผนกจัดซื้อสั่งสินค้าตรงมาจากฟาร์มเกษตร",
        "englishMeaning": "The purchasing department purchases directly from the farm."
      }
    ]
  },
  {
    "id": "v712",
    "hanzi": "保鲜",
    "pinyin": "bǎoxiān",
    "thaiMeaning": "การถนอมความสด / Keeping fresh",
    "englishMeaning": "Keep fresh",
    "example": {
      "hanzi": "注意肉类的保鲜。",
      "pinyin": "Zhùyì ròulèi de bǎoxiān.",
      "thaiMeaning": "ใส่ใจการถนอมความสดของเนื้อสัตว์",
      "englishMeaning": "Pay attention to the preservation of meat."
    },
    "examples": [
      {
        "scenario": "การใช้อุปกรณ์",
        "hanzi": "使用保鲜膜和真空袋。",
        "pinyin": "Shǐyòng bǎoxiānmó hé zhēnkōng dài.",
        "thaiMeaning": "ใช้พลาสติกถนอมอาหารและถุงสูญญากาศ",
        "englishMeaning": "Use plastic wrap and vacuum bags."
      }
    ]
  },
  {
    "id": "v713",
    "hanzi": "冷藏",
    "pinyin": "lěngcáng",
    "thaiMeaning": "แช่เย็น (ช่องธรรมดา) / Refrigerate",
    "englishMeaning": "refrigeration",
    "example": {
      "hanzi": "开封后请冷藏保存。",
      "pinyin": "Kāifēng hòu qǐng lěngcáng bǎocún.",
      "thaiMeaning": "เปิดฝาแล้วกรุณาเก็บแช่เย็นไว้",
      "englishMeaning": "Please keep refrigerated after opening."
    },
    "examples": [
      {
        "scenario": "วิธีจัดเก็บ",
        "hanzi": "牛奶和蔬菜需要冷藏。",
        "pinyin": "Niúnǎi hé shūcài xūyào lěngcáng.",
        "thaiMeaning": "นมสดและผักจำเป็นต้องแช่เย็น",
        "englishMeaning": "Milk and vegetables need to be refrigerated."
      }
    ]
  },
  {
    "id": "v714",
    "hanzi": "冷冻",
    "pinyin": "lěngdòng",
    "thaiMeaning": "แช่แข็ง (ช่องฟรีซ) / Freeze / Deep freeze",
    "englishMeaning": "freezing",
    "example": {
      "hanzi": "冷冻海鲜。",
      "pinyin": "Lěngdòng hǎixiān.",
      "thaiMeaning": "อาหารทะเลแช่แข็ง",
      "englishMeaning": "Frozen seafood."
    },
    "examples": [
      {
        "scenario": "การเก็บเนื้อ",
        "hanzi": "新鲜牛肉可以放入冷冻室。",
        "pinyin": "Xīnxiān niúròu kěyǐ fàngrù lěngdòngshì.",
        "thaiMeaning": "เนื้อวัวสดสามารถนำเข้าเก็บในช่องแช่แข็งได้",
        "englishMeaning": "Fresh beef can be placed in the freezer."
      }
    ]
  },
  {
    "id": "v715",
    "hanzi": "优惠券",
    "pinyin": "yōuhuìquàn",
    "thaiMeaning": "คูปองส่วนลด / Discount coupon",
    "englishMeaning": "Coupon",
    "example": {
      "hanzi": "使用五十元优惠券。",
      "pinyin": "Shǐyòng wǔshí yuán yōuhuìquàn.",
      "thaiMeaning": "ใช้คูปองส่วนลด 50 หยวน",
      "englishMeaning": "Use the fifty dollar coupon."
    },
    "examples": [
      {
        "scenario": "โปรโมชันร้าน",
        "hanzi": "扫码关注可以获得优惠券。",
        "pinyin": "Sǎo mǎ guānzhù kěyǐ huòdé yōuhuìquàn.",
        "thaiMeaning": "สแกนโค้ดติดตามรับคูปองส่วนลดได้",
        "englishMeaning": "Scan the QR code and follow to get coupons."
      }
    ]
  },
  {
    "id": "v716",
    "hanzi": "满减",
    "pinyin": "mǎnjiǎn",
    "thaiMeaning": "ส่วนลดเมื่อยอดถึงเกณฑ์ / Spend X get Y discount",
    "englishMeaning": "Full discount",
    "example": {
      "hanzi": "满一百减二十。",
      "pinyin": "Mǎn yìbǎi jiǎn èrshí.",
      "thaiMeaning": "ทานครบ 100 หยวน ลด 20 หยวน",
      "englishMeaning": "Twenty minus one hundred."
    },
    "examples": [
      {
        "scenario": "แคมเปญร้านอาหาร",
        "hanzi": "店里正在做满减促销活动。",
        "pinyin": "Diànlǐ zhèngzài zuò mǎnjiǎn cùxiāo huódòng.",
        "thaiMeaning": "ในร้านกำลังจัดกิจกรรมโปรโมชันลดเมื่อยอดถึงเกณฑ์อยู่",
        "englishMeaning": "The store is doing a full discount promotion."
      }
    ]
  },
  {
    "id": "v717",
    "hanzi": "点评",
    "pinyin": "diǎnpíng",
    "thaiMeaning": "รีวิวให้คะแนนร้าน / Customer review & rating",
    "englishMeaning": "Review",
    "example": {
      "hanzi": "在网上写美食点评。",
      "pinyin": "Zài wǎngshang xiě měishí diǎnpíng.",
      "thaiMeaning": "เขียนรีวิวอาหารบนอินเทอร์เน็ต",
      "englishMeaning": "Write food reviews online."
    },
    "examples": [
      {
        "scenario": "ชวนรีวิว",
        "hanzi": "好评如潮，点评得分很高。",
        "pinyin": "Hǎopíng rú cháo, diǎnpíng défēn hěn gāo.",
        "thaiMeaning": "คำชมหลั่งไหลมา คะแนนรีวิวสูงมาก",
        "englishMeaning": "It has rave reviews and high review scores."
      }
    ]
  },
  {
    "id": "v718",
    "hanzi": "投诉",
    "pinyin": "tóusù",
    "thaiMeaning": "การร้องเรียน / Customer complaint",
    "englishMeaning": "complaint",
    "example": {
      "hanzi": "处理顾客投诉。",
      "pinyin": "Chǔlǐ gùkè tóusù.",
      "thaiMeaning": "จัดการข้อร้องเรียนของลูกค้า",
      "englishMeaning": "Handle customer complaints."
    },
    "examples": [
      {
        "scenario": "งานบริการ",
        "hanzi": "经理认真听取并处理了投诉。",
        "pinyin": "Jīnglǐ rènzhēn tīngqǔ bìng chǔlǐ le tóusù.",
        "thaiMeaning": "ผู้จัดการตั้งใจรับฟังและจัดการข้อร้องเรียนอย่างตั้งใจ",
        "englishMeaning": "The manager listened carefully and dealt with the complaint."
      }
    ]
  },
  {
    "id": "v719",
    "hanzi": "汤底",
    "pinyin": "tāngdǐ",
    "thaiMeaning": "น้ำซุปหัวเชื้อ / Broth base / Soup base",
    "englishMeaning": "Soup base",
    "example": {
      "hanzi": "请问需要什么口味的汤底？",
      "pinyin": "Qǐngwèn xūyào shénme kǒuwèi de tāngdǐ?",
      "thaiMeaning": "ขอถามหน่อย คุณต้องการน้ำซุปรสชาติแบบไหนครับ?",
      "englishMeaning": "What kind of soup base do you want?"
    },
    "examples": [
      {
        "scenario": "เลือกซุปหม้อไฟ",
        "hanzi": "这款鸳鸯火锅有两种汤底。",
        "pinyin": "Zhè kuǎn yuānyang huǒguō yǒu liǎng zhǒng tāngdǐ.",
        "thaiMeaning": "หม้อไฟหยินหยางรุ่นนี้มีน้ำซุปหัวเชื้อ 2 แบบ",
        "englishMeaning": "This Yuanyang hotpot has two soup bases."
      }
    ]
  },
  {
    "id": "v720",
    "hanzi": "高汤",
    "pinyin": "gāotāng",
    "thaiMeaning": "น้ำซุปกระดูกเคี่ยว / Stock broth",
    "englishMeaning": "stock",
    "example": {
      "hanzi": "使用慢火熬制的高汤。",
      "pinyin": "Shǐyòng mànhuǒ áozhì de gāotāng.",
      "thaiMeaning": "ใช้น้ำซุปกระดูกเคี่ยวด้วยไฟอ่อนๆ",
      "englishMeaning": "Use slow-simmered stock."
    },
    "examples": [
      {
        "scenario": "เชฟอธิบายน้ำซุป",
        "hanzi": "鲜美的高汤是这道菜的灵魂。",
        "pinyin": "Xiānměi de gāotāng shì zhè dào cài de línghún.",
        "thaiMeaning": "น้ำซุปกระดูกเคี่ยวที่สดกลมกล่อมคือหัวใจของอาหารจานนี้",
        "englishMeaning": "The delicious stock is the soul of this dish."
      }
    ]
  },
  {
    "id": "v721",
    "hanzi": "腌制",
    "pinyin": "yānzhì",
    "thaiMeaning": "หมัก (เนื้อสัตว์/ผัก) / Marinate",
    "englishMeaning": "pickled",
    "example": {
      "hanzi": "牛肉需要提前腌制半小时。",
      "pinyin": "Niúròu xūyào tíqián yānzhì bàn xiǎoshí.",
      "thaiMeaning": "เนื้อวัวจำเป็นต้องหมักล่วงหน้าครึ่งชั่วโมง",
      "englishMeaning": "The beef needs to be marinated for half an hour in advance."
    },
    "examples": [
      {
        "scenario": "สูตรลับความอร่อย",
        "hanzi": "秘制酱料腌制的烧烤格外香。",
        "pinyin": "Mìzhì jiàngliào yānzhì de shāokǎo géwài xiāng.",
        "thaiMeaning": "ปิ้งย่างที่หมักด้วยซอสสูตรลับหอมเป็นพิเศษ",
        "englishMeaning": "The barbecue marinated with secret sauce is particularly fragrant."
      }
    ]
  },
  {
    "id": "v722",
    "hanzi": "预制菜",
    "pinyin": "yùzhìcài",
    "thaiMeaning": "อาหารสำเร็จรูปพร้อมปรุง / Pre-cooked / Ready-to-heat dish",
    "englishMeaning": "Prepared dishes",
    "example": {
      "hanzi": "预制菜方便快捷。",
      "pinyin": "Yùzhìcài fāngbiàn kuàijié.",
      "thaiMeaning": "อาหารสำเร็จรูปพร้อมปรุงสะดวกและรวดเร็ว",
      "englishMeaning": "Pre-made dishes are quick and easy."
    },
    "examples": [
      {
        "scenario": "เทรนด์อุตสาหกรรม",
        "hanzi": "预制菜行业发展非常迅速。",
        "pinyin": "Yùzhìcài hángyè fāzhǎn fēicháng xùnsù.",
        "thaiMeaning": "อุตสาหกรรมอาหารสำเร็จรูปพร้อมปรุงเติบโตอย่างรวดเร็ว",
        "englishMeaning": "The prepared food industry is growing very rapidly."
      }
    ]
  },
  {
    "id": "v723",
    "hanzi": "保质期",
    "pinyin": "bǎozhìqī",
    "thaiMeaning": "วันหมดอายุ / ระยะเวลาเก็บรักษา / Shelf life / Expiration date",
    "englishMeaning": "shelf life",
    "example": {
      "hanzi": "查看包装上的保质期。",
      "pinyin": "Chákàn bāozhuāng shàng de bǎozhìqī.",
      "thaiMeaning": "ตรวจเช็กวันหมดเกณฑ์รักษาบนบรรจุภัณฑ์",
      "englishMeaning": "Check the shelf life on the packaging."
    },
    "examples": [
      {
        "scenario": "ตรวจคลังสินค้า",
        "hanzi": "食品临近保质期需要及时处理。",
        "pinyin": "Shípǐn línjìn bǎozhìqī xūyào jíshí chǔlǐ.",
        "thaiMeaning": "อาหารที่ใกล้หมดอายุจำเป็นต้องจัดการโดยทันที",
        "englishMeaning": "Food needs to be processed in time as it approaches its shelf life."
      }
    ]
  },
  {
    "id": "v724",
    "hanzi": "过期",
    "pinyin": "guòqī",
    "thaiMeaning": "หมดอายุ / Past expiration date",
    "englishMeaning": "Expired",
    "example": {
      "hanzi": "严禁使用过期食材。",
      "pinyin": "Yánjìn shǐyòng guòqī shícái.",
      "thaiMeaning": "ห้ามใช้วัตถุดิบหมดอายุโดยเด็ดขาด",
      "englishMeaning": "It is strictly prohibited to use expired ingredients."
    },
    "examples": [
      {
        "scenario": "กฎความปลอดภัย",
        "hanzi": "过期的调料必须全部作废扔掉。",
        "pinyin": "Guòqī de tiáoliào bìxū quánbù zuòfèi rēngdiào.",
        "thaiMeaning": "เครื่องปรุงรสที่หมดอายุต้องนำไปทิ้งยกเลิกทั้งหมด",
        "englishMeaning": "All expired condiments must be discarded."
      }
    ]
  },
  {
    "id": "v725",
    "hanzi": "出餐",
    "pinyin": "chūcān",
    "thaiMeaning": "การทำอาหารเสร็จพร้อมเสิร์ฟ / Kitchen dishing out",
    "englishMeaning": "Dining out",
    "example": {
      "hanzi": "后厨出餐速度很快。",
      "pinyin": "Hòuchú chūcān sùdù hěn kuài.",
      "thaiMeaning": "ความเร็วในการทำอาหารเสร็จพร้อมเสิร์ฟของห้องครัวเร็วมาก",
      "englishMeaning": "The kitchen prepares meals very quickly."
    },
    "examples": [
      {
        "scenario": "ช่วงพีคชั่วโมงด่วน",
        "hanzi": "高峰期要保证出餐质量。",
        "pinyin": "Gāofēngqī yào bǎozhèng chūcān zhìliàng.",
        "thaiMeaning": "ช่วงเวลาลูกค้าแน่นต้องรับประกันคุณภาพของอาหารที่เสิร์ฟออกไป",
        "englishMeaning": "The quality of meals must be ensured during peak periods."
      }
    ]
  },
  {
    "id": "v726",
    "hanzi": "摆盘",
    "pinyin": "bǎipán",
    "thaiMeaning": "การตกแต่งจัดจาน / Dish plating & presentation",
    "englishMeaning": "plating",
    "example": {
      "hanzi": "这道菜摆盘非常精致。",
      "pinyin": "Zhè dào cài bǎipán fēicháng jīngzhì.",
      "thaiMeaning": "อาหารจานนี้จัดตกแต่งจานประณีตมากๆ",
      "englishMeaning": "This dish is very beautifully presented."
    },
    "examples": [
      {
        "scenario": "ศิลปะอาหาร",
        "hanzi": "美观的摆盘能增加顾客的食欲。",
        "pinyin": "Měiguān de bǎipán néng zēngjiā gùkè de shíyù.",
        "thaiMeaning": "การจัดจานที่สวยงามช่วยเพิ่มความอยากอาหารของลูกค้าได้",
        "englishMeaning": "Beautiful presentation can increase customers' appetite."
      }
    ]
  },
  {
    "id": "v727",
    "hanzi": "估清",
    "pinyin": "gūqīng",
    "thaiMeaning": "สินค้าหมดประจำวัน / Out of stock for today / Sold out",
    "englishMeaning": "Appraisal",
    "example": {
      "hanzi": "不好意思，招牌鸭肉已经估清了。",
      "pinyin": "Bù hǎoyìsi, zhāopái yāròu yǐjīng gūqīng le.",
      "thaiMeaning": "ขอโทษนะครับ เมนูเป็ดย่างเด็ดหมดประจำวันแล้วครับ",
      "englishMeaning": "Sorry, the signature duck meat has been priced out."
    },
    "examples": [
      {
        "scenario": "แจ้งลูกค้า",
        "hanzi": "请在POS系统里把这道菜设为估清。",
        "pinyin": "Qǐng zài POS xìtǒng lǐ bǎ zhè dào cài shè wéi gūqīng.",
        "thaiMeaning": "กรุณาตั้งค่าอาหารจานนี้ว่าหมดประจำวันในระบบ POS ด้วยนะ",
        "englishMeaning": "Please set this dish as Qingqing in the POS system."
      }
    ]
  },
  {
    "id": "v728",
    "hanzi": "加菜",
    "pinyin": "jiācài",
    "thaiMeaning": "สั่งอาหารเพิ่ม / Add more dishes",
    "englishMeaning": "Add vegetables",
    "example": {
      "hanzi": "服务员，我们想加菜。",
      "pinyin": "Fúwùyuán, wǒmen xiǎng jiācài.",
      "thaiMeaning": "น้องพนักงาน พวกเราอยากสั่งอาหารเพิ่มครับ",
      "englishMeaning": "Waiter, we would like to add more dishes."
    },
    "examples": [
      {
        "scenario": "เพิ่มรายการอาหาร",
        "hanzi": "请帮我再加一份牛肉和一份蔬菜。",
        "pinyin": "Qǐng bāng wǒ zài jiā yí fèn niúròu hé yí fèn shūcài.",
        "thaiMeaning": "ช่วยเพิ่มเนื้อวัวอีกหนึ่งจานและผักอีกหนึ่งจานให้ฉันที",
        "englishMeaning": "Please help me add another piece of beef and one piece of vegetables."
      }
    ]
  },
  {
    "id": "v729",
    "hanzi": "退菜",
    "pinyin": "tuìcài",
    "thaiMeaning": "ยกเลิก/คืนรายการอาหาร / Cancel dish order",
    "englishMeaning": "Withdrawal",
    "example": {
      "hanzi": "菜里有异物，顾客要求退菜。",
      "pinyin": "Cài lǐ yǒu yìwù, gùkè yāoqiú tuìcài.",
      "thaiMeaning": "ในอาหารมีสิ่งแปลกปลอม ลูกค้าขอคืนรายการอาหาร",
      "englishMeaning": "There was a foreign object in the dish, and the customer asked for the dish to be returned."
    },
    "examples": [
      {
        "scenario": "การแก้ปัญหาลูกค้า",
        "hanzi": "如果上错菜，可以给顾客退菜。",
        "pinyin": "Rúguǒ shàng cuò cài, kěyǐ gěi gùkè tuìcài.",
        "thaiMeaning": "หากเสิร์ฟอาหารผิด สามารถยกเลิกคืนรายการให้ลูกค้าได้",
        "englishMeaning": "If the wrong dish is served, the dish can be returned to the customer."
      }
    ]
  },
  {
    "id": "v730",
    "hanzi": "换桌",
    "pinyin": "huànzhuō",
    "thaiMeaning": "ย้ายโต๊ะอาหาร / Change table",
    "englishMeaning": "Change table",
    "example": {
      "hanzi": "请问可以帮我们换桌吗？",
      "pinyin": "Qǐngwèn kěyǐ bāng wǒmen huànzhuō ma?",
      "thaiMeaning": "ขอถามหน่อย ช่วยพวกเราย้ายโต๊ะได้ไหมครับ?",
      "englishMeaning": "Could you please help us change the table?"
    },
    "examples": [
      {
        "scenario": "ขอย้ายไปริมหน้าต่าง",
        "hanzi": "顾客想换到靠窗的桌位。",
        "pinyin": "Gùkè xiǎng huàn dào kào chuāng de zhuōwèi.",
        "thaiMeaning": "ลูกค้าอยากย้ายไปนั่งโต๊ะริมหน้าต่าง",
        "englishMeaning": "The customer wants to move to a table by the window."
      }
    ]
  },
  {
    "id": "v731",
    "hanzi": "催菜",
    "pinyin": "cuīcài",
    "thaiMeaning": "เร่งอาหารกับครัว / Speed up dish / Urge kitchen",
    "englishMeaning": "urge vegetables",
    "example": {
      "hanzi": "顾客在催菜了，请快一点。",
      "pinyin": "Gùkè zài cuīcài le, qǐng kuài yìdiǎn.",
      "thaiMeaning": "ลูกค้าเริ่มเร่งอาหารแล้ว กรุณาเร็วหน่อยนะครับ",
      "englishMeaning": "The customer is asking for food, please hurry up."
    },
    "examples": [
      {
        "scenario": "บริการลูกค้าด่วน",
        "hanzi": "请去后厨帮三号桌催一下菜。",
        "pinyin": "Qǐng qù hòuchú bāng sān hào zhuō cuī yíxià cài.",
        "thaiMeaning": "กรุณาไปที่ครัวช่วยเร่งอาหารให้โต๊ะหมายเลข 3 สักหน่อย",
        "englishMeaning": "Please go to the back kitchen to order the dishes for table three."
      }
    ]
  },
  {
    "id": "v732",
    "hanzi": "错单",
    "pinyin": "cuòdān",
    "thaiMeaning": "คีย์บิลผิดพลาด / Wrong order",
    "englishMeaning": "Wrong order",
    "example": {
      "hanzi": "避免打错单。",
      "pinyin": "Bìmiǎn dǎ cuòdān.",
      "thaiMeaning": "หลีกเลี่ยงการคีย์รายการบิลผิดพลาด",
      "englishMeaning": "Avoid placing wrong orders."
    },
    "examples": [
      {
        "scenario": "ตรวจสอบรายการ",
        "hanzi": "点完餐后请和顾客核对，防止错单。",
        "pinyin": "Diǎn wán cān hòu qǐng hé gùkè héduì, fángzhǐ cuòdān.",
        "thaiMeaning": "สั่งอาหารเสร็จแล้วกรุณาทวนกับลูกค้าเพื่อป้องกันคีย์รายการผิด",
        "englishMeaning": "Please check with the customer after ordering to avoid ordering mistakes."
      }
    ]
  },
  {
    "id": "v733",
    "hanzi": "漏单",
    "pinyin": "lòudān",
    "thaiMeaning": "ตกหล่นรายการอาหาร / Missed dish order",
    "englishMeaning": "Missed order",
    "example": {
      "hanzi": "检查是否有漏单的菜品。",
      "pinyin": "Jiǎnchá shìfǒu yǒu lòudān de càipǐn.",
      "thaiMeaning": "ตรวจเช็กว่ามีรายการอาหารตกหล่นบ้างไหม",
      "englishMeaning": "Check if there are any missing items."
    },
    "examples": [
      {
        "scenario": "บริการลูกค้า",
        "hanzi": "不好意思，刚才漏单了，现在马上补上。",
        "pinyin": "Bù hǎoyìsi, gāngcái lòudān le, xiànzài mǎshàng bǔ shàng.",
        "thaiMeaning": "ขอโทษนะครับ เมื่อสักครู่ตกหล่นไป เดี๋ยวนี้จะรีบเสิร์ฟชดเชยให้ทันที",
        "englishMeaning": "Sorry, I missed the order just now, I will make it up now."
      }
    ]
  },
  {
    "id": "v734",
    "hanzi": "客满",
    "pinyin": "kèmǎn",
    "thaiMeaning": "โต๊ะเต็มทุกที่นั่ง / House full / Fully booked",
    "englishMeaning": "Full house",
    "example": {
      "hanzi": "抱歉，今晚餐厅已客满。",
      "pinyin": "Bàoqiàn, jīn wǎn cāntīng yǐ kèmǎn.",
      "thaiMeaning": "ขออภัยนะครับ คืนนี้ร้านอาหารโต๊ะเต็มหมดแล้วครับ",
      "englishMeaning": "Sorry, the restaurant is full tonight."
    },
    "examples": [
      {
        "scenario": "แจ้งลูกค้าหน้าร้าน",
        "hanzi": "客满时请指引顾客到候餐区休息。",
        "pinyin": "Kèmǎn shí qǐng zhǐyǐn gùkè dào hòucānqū xiūxi.",
        "thaiMeaning": "เวลาโต๊ะเต็มกรุณาเชิญลูกค้าไปพักรอที่จุดรอคิว",
        "englishMeaning": "When the restaurant is full, please direct customers to the waiting area to rest."
      }
    ]
  },
  {
    "id": "v735",
    "hanzi": "候餐区",
    "pinyin": "hòucānqū",
    "thaiMeaning": "โซนนั่งรอคิวอาหาร / Restaurant waiting area",
    "englishMeaning": "Waiting area",
    "example": {
      "hanzi": "请在候餐区稍作休息。",
      "pinyin": "Qǐng zài hòucānqū shāo zuò xiūxi.",
      "thaiMeaning": "กรุณานั่งพักรอสักครู่ที่โซนนั่งรอคิวครับ",
      "englishMeaning": "Please take a break in the waiting area."
    },
    "examples": [
      {
        "scenario": "บริการลูกค้าคิว",
        "hanzi": "候餐区免费提供茶水和小吃。",
        "pinyin": "Hòucānqū miǎnfèi tígōng cháshuǐ hé xiǎochī.",
        "thaiMeaning": "โซนนั่งรอคิวมีบริการน้ำชาและขนมฟรี",
        "englishMeaning": "Free tea and snacks are provided in the waiting area."
      }
    ]
  },
  {
    "id": "v736",
    "hanzi": "消毒",
    "pinyin": "xiāodú",
    "thaiMeaning": "ฆ่าเชื้อโรค / Sterilize / Disinfect",
    "englishMeaning": "disinfect",
    "example": {
      "hanzi": "餐具均已严格消毒。",
      "pinyin": "Cānjù jūn yǐ yángé xiāodú.",
      "thaiMeaning": "จานชามช้อนส้อมผ่านการฆ่าเชื้อโรคอย่างเข้มงวดเรียบร้อย",
      "englishMeaning": "Tableware has been strictly disinfected."
    },
    "examples": [
      {
        "scenario": "มาตรฐานสุขอนามัย",
        "hanzi": "每桌客离后都会进行桌面消毒。",
        "pinyin": "Měi zhuō kè lí hòu dōu huì jìnxíng zhuōmiàn xiāodú.",
        "thaiMeaning": "หลังจากลูกค้าทุกโต๊ะลุกออกไป จะมีการฆ่าเชื้อบนหน้าโต๊ะเสมอ",
        "englishMeaning": "Each table will be disinfected after guests leave."
      }
    ]
  }
];
