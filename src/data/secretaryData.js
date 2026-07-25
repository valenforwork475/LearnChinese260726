// Chinese Personal Secretary (小助手) Routine & Companion Prompts Data

export function getSecretaryCheckIn(date = new Date(), schedule = { wakeTime: '07:00', bedTime: '23:00' }) {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Convert bedtime and wakeTime strings (HH:mm) to hour values
  const [bedHour] = schedule.bedTime.split(':').map(Number);
  const [wakeHour] = schedule.wakeTime.split(':').map(Number);

  const pad = (n) => (n < 10 ? `0${n}` : `${n}`);

  // Late Night past Bedtime Check (e.g. 23:30 or 00:47)
  const isLateNight = hours >= bedHour || hours < wakeHour;

  if (isLateNight) {
    return {
      id: 'late_night',
      timeLabel: `${hours}:${pad(minutes)} น. (เวลาเข้านอนของคุณ)`,
      secretaryPrompt: {
        hanzi: `太晚了，怎么还没睡觉呢？在干嘛？`,
        pinyin: `Tài wǎn le, zěnme hái méi shuìjiào ne? Zài gàn ma?`,
        thaiMeaning: `ดึกขนาดนี้แล้ว (${hours}:${pad(minutes)} น.) ทำไมยังไม่นอนอีกเนี่ย? ทำอะไรอยู่อยู่เหรอ?`
      },
      replies: [
        {
          hanzi: '在看手机，准备睡了。',
          pinyin: 'Zài kàn shǒujī, zhǔnbèi shuì le.',
          thaiMeaning: 'เล่นมือถืออยู่ กำลังจะนอนแล้ว'
        },
        {
          hanzi: '还要忙工作。',
          pinyin: 'Hái yào máng gōngzuò.',
          thaiMeaning: 'ยังยุ่งกับงานอยู่เลย'
        },
        {
          hanzi: '马上就睡，晚安！',
          pinyin: 'Mǎshàng jiù shuì, wǎn\'ān!',
          thaiMeaning: 'จะนอนเดี๋ยวนี้แล้ว ฝันดีนะ!'
        }
      ]
    };
  }

  // Morning Wakeup Check (wakeHour to wakeHour + 2)
  if (hours >= wakeHour && hours < wakeHour + 2) {
    return {
      id: 'morning_wake',
      timeLabel: `${hours}:${pad(minutes)} น. (ช่วงเช้าตรู่)`,
      secretaryPrompt: {
        hanzi: `早安！该起床去刷牙洗脸啦。`,
        pinyin: `Zǎo\'ān! Gāi qǐchuáng qù shuāyá xǐliǎn la.`,
        thaiMeaning: `อรุณสวัสดิ์! ได้เวลาตื่นนอนไปแปรงฟันล้างหน้าแล้วนะ`
      },
      replies: [
        {
          hanzi: '好的，马上起来。',
          pinyin: 'Hǎo de, mǎshàng qǐlái.',
          thaiMeaning: 'โอเค จะลุกเดี๋ยวนี้แหละ'
        },
        {
          hanzi: '再让我睡五分钟。',
          pinyin: 'Zài ràng wǒ shuì wǔ fēnzhōng.',
          thaiMeaning: 'ขอต่ออีก 5 นาทีนะ'
        },
        {
          hanzi: '去泡咖啡！',
          pinyin: 'Qù pào kāfēi!',
          thaiMeaning: 'ไปชงกาแฟกัน!'
        }
      ]
    };
  }

  // Morning Commute / Leaving (08:30 to 11:00)
  if (hours >= wakeHour + 2 && hours < 11) {
    return {
      id: 'morning_work',
      timeLabel: `${hours}:${pad(minutes)} น. (เตรียมตัวไปทำงาน)`,
      secretaryPrompt: {
        hanzi: `准备出门去上班了吗？钥匙拿了吗？`,
        pinyin: `Zhǔnbèi chūmén qù shàngbān le ma? Yàoshi ná le ma?`,
        thaiMeaning: `เตรียมตัวออกจากบ้านไปทำงานหรือยัง? หยิบกุญแจหรือยัง?`
      },
      replies: [
        {
          hanzi: '拿好了，去上班！',
          pinyin: 'Ná hǎo le, qù shàngbān!',
          thaiMeaning: 'หยิบครบแล้ว ไปทำงาน!'
        },
        {
          hanzi: '今天上班迟到了。',
          pinyin: 'Jīntiān shàngbān chídào le.',
          thaiMeaning: 'วันนี้มาทำงานสาย'
        },
        {
          hanzi: '去吃早餐。',
          pinyin: 'Qù chī zǎocān.',
          thaiMeaning: 'ไปกินข้าวเช้าก่อน'
        }
      ]
    };
  }

  // Lunch Time (11:00 to 14:00)
  if (hours >= 11 && hours < 14) {
    return {
      id: 'lunch_time',
      timeLabel: `${hours}:${pad(minutes)} น. (พักเที่ยง)`,
      secretaryPrompt: {
        hanzi: `十二点了！去吃午饭了吗？`,
        pinyin: `Shí\'èr diǎn le! Qù chī wǔfàn le ma?`,
        thaiMeaning: `เที่ยงแล้ว! ไปกินข้าวเที่ยงหรือยัง?`
      },
      replies: [
        {
          hanzi: '去吃午饭，肚子饿了。',
          pinyin: 'Qù chī wǔfàn, dùzi è le.',
          thaiMeaning: 'ไปกินข้าวเที่ยง ท้องหิวแล้ว'
        },
        {
          hanzi: '吃饱了，午休一下。',
          pinyin: 'Chī bǎo le, wǔxiū yíxià.',
          thaiMeaning: 'กินอิ่มแล้ว พักเที่ยงแป๊บนึง'
        },
        {
          hanzi: '工作忙，过会儿吃。',
          pinyin: 'Gōngzuò máng, guòhuìr chī.',
          thaiMeaning: 'งานยุ่ง เดี๋ยวค่อยกิน'
        }
      ]
    };
  }

  // Afternoon Work Check (14:00 to 17:30)
  if (hours >= 14 && hours < 18) {
    return {
      id: 'afternoon_work',
      timeLabel: `${hours}:${pad(minutes)} น. (ช่วงบ่าย)`,
      secretaryPrompt: {
        hanzi: `下午三点了，有点累了吧？喝口水。`,
        pinyin: `Xiàwǔ sān diǎn le, yǒudiǎnr lèi le ba? Hē kǒu shuǐ.`,
        thaiMeaning: `บ่ายแล้ว เหนื่อยนิดหน่อยใช่มั้ย? ดื่มน้ำพักแป๊บนึงนะ`
      },
      replies: [
        {
          hanzi: '喝口水，休息一下。',
          pinyin: 'Hē kǒu shuǐ, xiūxi yíxià.',
          thaiMeaning: 'ดื่มน้ำพักแป๊บนึง'
        },
        {
          hanzi: '太困了，泡杯咖啡。',
          pinyin: 'Tài kùn le, pào bēi kāfēi.',
          thaiMeaning: 'ง่วงมาก ชงกาแฟสักแก้ว'
        },
        {
          hanzi: '继续加油工作！',
          pinyin: 'Jìxù jiāyóu gōngzuò!',
          thaiMeaning: 'ลุยทำงานต่อ สู้ๆ!'
        }
      ]
    };
  }

  // Evening Off Work (18:00 to 22:00)
  return {
    id: 'evening_off',
    timeLabel: `${hours}:${pad(minutes)} น. (ช่วงค่ำ)`,
    secretaryPrompt: {
      hanzi: `下班了吗？今天工作辛苦了！`,
      pinyin: `Xiàbān le ma? Jīntiān gōngzuò xīnkǔ le!`,
      thaiMeaning: `เลิกงานหรือยัง? วันนี้ทำงานเหนื่อยเลยนะ!`
    },
    replies: [
      {
        hanzi: '下班了，准备回家。',
        pinyin: 'Xiàbān le, zhǔnbèi huíjiā.',
        thaiMeaning: 'เลิกงานแล้ว เตรียมตัวกลับบ้าน'
      },
      {
        hanzi: '去吃晚饭。',
        pinyin: 'Qù chī wǎnfàn.',
        thaiMeaning: 'ไปกินข้าวเย็น'
      },
      {
        hanzi: '洗个澡，放松一下。',
        pinyin: 'Xǐ gè zǎo, fàngsōng yíxià.',
        thaiMeaning: 'อาบน้ำผ่อนคลาย'
      }
    ]
  };
}
