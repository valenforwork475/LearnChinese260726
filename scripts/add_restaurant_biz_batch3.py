import json
import re
import sys
import os

sys.stdout.reconfigure(encoding='utf-8')

vocab_file = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'vocabularyData.js')

with open(vocab_file, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'export const vocabularyList = (\[[\s\S]*\]);?\s*$', content)
if not match:
    print("Could not parse vocabularyList!")
    sys.exit(1)

vocab_list = json.loads(match.group(1))

# Set of existing hanzi words to prevent duplicates
existing_hanzi = set(w['hanzi'] for w in vocab_list if 'hanzi' in w)
print(f"Current vocabulary count before Restaurant Biz Batch 3: {len(vocab_list)} words.")

NEW_WORDS_BATCH3 = [
    # POS & Financial Operations
    {
        "hanzi": "POS机",
        "pinyin": "POS jī",
        "thaiMeaning": "เครื่องคิดเงิน POS / POS terminal",
        "englishMeaning": "POS terminal",
        "example": {
            "hanzi": "前台的POS机断网了。",
            "pinyin": "Qiántái de POS jī duànwǎng le.",
            "thaiMeaning": "เครื่อง POS หน้าเคาน์เตอร์เน็ตหลุด",
            "englishMeaning": "The POS machine at the front desk disconnected from the network."
        },
        "examples": [
            {
                "scenario": "การเงินหน้าร้าน",
                "hanzi": "请使用POS机刷卡或扫码结账。",
                "pinyin": "Qǐng shǐyòng POS jī shuākǎ huò sǎomǎ jiézhàng.",
                "thaiMeaning": "กรุณาใช้เครื่อง POS สแกนหรือรูดบัตรชำระเงิน",
                "englishMeaning": "Please use the POS machine to swipe card or scan code to settle the bill."
            }
        ]
    },
    {
        "hanzi": "扫码点餐",
        "pinyin": "sǎomǎ diǎncān",
        "thaiMeaning": "สแกน QR สั่งอาหาร / Scan QR code ordering",
        "englishMeaning": "QR code ordering",
        "example": {
            "hanzi": "桌角有二维码，可以扫码点餐。",
            "pinyin": "Zhuōjiǎo yǒu èrwéimǎ, kěyǐ sǎomǎ diǎncān.",
            "thaiMeaning": "มุมโต๊ะมี QR code สามารถสแกนสั่งอาหารได้ครับ",
            "englishMeaning": "There is a QR code on the corner of the table for QR code ordering."
        },
        "examples": [
            {
                "scenario": "แนะนำลูกค้า",
                "hanzi": "扫码点餐更加方便快捷。",
                "pinyin": "Sǎomǎ diǎncān gèngjiā fāngbiàn kuàijié.",
                "thaiMeaning": "การสแกน QR สั่งอาหารสะดวกและรวดเร็วยิ่งขึ้น",
                "englishMeaning": "QR code ordering is more convenient and faster."
            }
        ]
    },
    {
        "hanzi": "外卖",
        "pinyin": "wàimài",
        "thaiMeaning": "อาหารเดลิเวอรี / Food delivery / Takeout",
        "englishMeaning": "Food delivery",
        "example": {
            "hanzi": "本店提供外卖服务。",
            "pinyin": "Běndiàn tígōng wàimài fúwù.",
            "thaiMeaning": "ร้านเรามีบริการสั่งอาหารเดลิเวอรี",
            "englishMeaning": "Our restaurant offers delivery service."
        },
        "examples": [
            {
                "scenario": "จัดส่งอาหาร",
                "hanzi": "请优先打包外卖订单。",
                "pinyin": "Qǐng yōuxiān dǎbāo wàimài dìngdān.",
                "thaiMeaning": "กรุณาจัดแพ็กออเดอร์เดลิเวอรีเป็นอันดับแรก",
                "englishMeaning": "Please prioritize packing food delivery orders."
            }
        ]
    },
    {
        "hanzi": "骑手",
        "pinyin": "qíshǒu",
        "thaiMeaning": "ไรเดอร์ส่งอาหาร / Delivery rider",
        "englishMeaning": "Delivery rider",
        "example": {
            "hanzi": "外卖骑手已经在门外等待。",
            "pinyin": "Wàimài qíshǒu yǐjīng zài ménwài děngdài.",
            "thaiMeaning": "ไรเดอร์ส่งอาหารกำลังรออยู่หน้าประตูแล้ว",
            "englishMeaning": "The delivery rider is already waiting outside."
        },
        "examples": [
            {
                "scenario": "ส่งมอบอาหาร",
                "hanzi": "请核对单号后再把餐交给骑手。",
                "pinyin": "Qǐng héduì dānhào hòu zài bǎ cān jiāo gěi qíshǒu.",
                "thaiMeaning": "กรุณาตรวจเช็กเลขบิลก่อนมอบอาหารให้ไรเดอร์",
                "englishMeaning": "Please check the order number before handing the meal to the rider."
            }
        ]
    },
    {
        "hanzi": "结账",
        "pinyin": "jiézhàng",
        "thaiMeaning": "คิดเงิน / เช็กบิล / Check out / Pay bill",
        "englishMeaning": "Pay bill",
        "example": {
            "hanzi": "服务员，我们这桌结账。",
            "pinyin": "Fúwùyuán, wǒmen zhè zhuō jiézhàng.",
            "thaiMeaning": "น้องครับ เช็กบิลโต๊ะนี้ด้วยครับ",
            "englishMeaning": "Waiter, check for our table please."
        },
        "examples": [
            {
                "scenario": "ชำระเงิน",
                "hanzi": "请问您是一起结账还是分开付？",
                "pinyin": "Qǐngwèn nín shì yìqǐ jiézhàng háishì fēnkāi fù?",
                "thaiMeaning": "ขอสอบถามครับ รวมบิลชำระเงินหรือแยกจ่ายครับ?",
                "englishMeaning": "Would you like to pay together or split the bill?"
            }
        ]
    },
    {
        "hanzi": "小票",
        "pinyin": "xiǎopiào",
        "thaiMeaning": "ใบเสร็จ / สลิปใบเสร็จ / Receipt slip",
        "englishMeaning": "Receipt",
        "example": {
            "hanzi": "这是您的小票，请找好。",
            "pinyin": "Zhè shì nín de xiǎopiào, qǐng zhǎo hǎo.",
            "thaiMeaning": "นี่คือใบเสร็จของท่านครับ กรุณาตรวจสอบเงินทอน",
            "englishMeaning": "Here is your receipt, please check your change."
        },
        "examples": [
            {
                "scenario": "ย้อนหลัง",
                "hanzi": "请核对小票上的消费明细。",
                "pinyin": "Qǐng héduì xiǎopiào shàng de xiāofèi míngxì.",
                "thaiMeaning": "กรุณาตรวจสอบรายการค่าใช้จ่ายบนใบเสร็จ",
                "englishMeaning": "Please check the consumption details on the receipt."
            }
        ]
    },
    {
        "hanzi": "发票",
        "pinyin": "fāpiào",
        "thaiMeaning": "ใบกำกับภาษี / Tax invoice",
        "englishMeaning": "Tax invoice",
        "example": {
            "hanzi": "请问您需要开发票吗？",
            "pinyin": "Qǐngwèn nín xūyào kāi fāpiào ma?",
            "thaiMeaning": "ไม่ทราบว่าคุณลูกค้าต้องการออกใบกำกับภาษีไหมครับ?",
            "englishMeaning": "Do you need a tax invoice?"
        },
        "examples": [
            {
                "scenario": "ออกเอกสาร",
                "hanzi": "请输入公司抬头和税号开具电子发票。",
                "pinyin": "Qǐng shūrù gōngsī táitóu hé shuìhào kāijù diànzǐ fāpiào.",
                "thaiMeaning": "กรุณากรอกชื่อบริษัทและเลขภาษีเพื่อออกใบกำกับภาษีอิเล็กทรอนิกส์",
                "englishMeaning": "Please enter the company title and tax ID to issue an e-invoice."
            }
        ]
    },
    {
        "hanzi": "挂账",
        "pinyin": "guàzhàng",
        "thaiMeaning": "แปะบิลไว้ก่อน / เซ็นเต็ก / Charge to account",
        "englishMeaning": "Charge to account",
        "example": {
            "hanzi": "这位贵宾可以在公司账户挂账。",
            "pinyin": "Zhè wèi guìbīn kěyǐ zài gōngsī zhànghù guàzhàng.",
            "thaiMeaning": "แขก VIP ท่านนี้สามารถเซ็นเต็กแปะบิลในบัญชีบริษัทได้",
            "englishMeaning": "This VIP can charge the bill to the company account."
        },
        "examples": [
            {
                "scenario": "บริการลูกค้าประจำ",
                "hanzi": "挂账需要经经理签字确认。",
                "pinyin": "Guàzhàng xūyào jīng jīnglǐ qiānzì quèrèn.",
                "thaiMeaning": "การแปะบิลจำเป็นต้องมีลายเซ็นอนุมัติจากผู้จัดการ",
                "englishMeaning": "Charging to account requires manager's signature confirmation."
            }
        ]
    },
    {
        "hanzi": "抹零",
        "pinyin": "mǒlíng",
        "thaiMeaning": "ปัดเศษเงินออก / Round down total (waive small change)",
        "englishMeaning": "Round down total",
        "example": {
            "hanzi": "一共是两百零三元，给您抹零算两百。",
            "pinyin": "Yìgòng shì liǎngbǎi líng sān yuán, gěi nín mǒlíng suàn liǎngbǎi.",
            "thaiMeaning": "รวมเป็น 203 หยวน ปัดเศษออกคิดแค่ 200 หยวนครับ",
            "englishMeaning": "The total is 203 yuan, we'll round it down to 200 yuan for you."
        },
        "examples": [
            {
                "scenario": "บริการลูกค้า",
                "hanzi": "结账时系统会自动抹零几毛钱。",
                "pinyin": "Jiézhàng shí xìtǒng huì zìdòng mǒlíng jǐ máo qián.",
                "thaiMeaning": "เวลาเช็กบิล ระบบจะปัดเศษสตางค์ออกให้อัตโนมัติ",
                "englishMeaning": "The system automatically rounds down small change during checkout."
            }
        ]
    },
    {
        "hanzi": "折扣",
        "pinyin": "zhékòu",
        "thaiMeaning": "ส่วนลด / Discount",
        "englishMeaning": "Discount",
        "example": {
            "hanzi": "新店开业全场享受八折折扣。",
            "pinyin": "Xīndiàn kāiyè quánchǎng xiǎngshòu bā zhé zhékòu.",
            "thaiMeaning": "เปิดร้านใหม่รับส่วนลด 20% (8折) ทั้งร้าน",
            "englishMeaning": "New store opening enjoys a 20% discount storewide."
        },
        "examples": [
            {
                "scenario": "การส่งเสริมการขาย",
                "hanzi": "会员结账可打九折。",
                "pinyin": "Huìyuán jiézhàng kě dǎ jiǔ zhé.",
                "thaiMeaning": "สมาชิกเช็กบิลรับส่วนลด 10%",
                "englishMeaning": "Members get a 10% discount at checkout."
            }
        ]
    },
    {
        "hanzi": "赠菜",
        "pinyin": "zèngcài",
        "thaiMeaning": "แถมอาหาร / Complimentary dish",
        "englishMeaning": "Complimentary dish",
        "example": {
            "hanzi": "由于让您久等，我们送您一份赠菜。",
            "pinyin": "Yóuyú ràng nín jiǔ děng, wǒmen sòng nín yífèn zèngcài.",
            "thaiMeaning": "เนื่องจากทำให้คุณรอนาน เราขอสมนาคุณด้วยอาหารแถม 1 จานครับ",
            "englishMeaning": "Because we kept you waiting, we offer you a complimentary dish."
        },
        "examples": [
            {
                "scenario": "ขออภัยลูกค้า",
                "hanzi": "主管批准给老顾客送一份赠菜。",
                "pinyin": "Zhǔguǎn pīzhǔn gěi lǎo gùkè sòng yífèn zèngcài.",
                "thaiMeaning": "หัวหน้าอนุมัติอาหารแถม 1 จานให้ลูกค้าประจำ",
                "englishMeaning": "The supervisor approved giving a complimentary dish to regular customers."
            }
        ]
    },
    {
        "hanzi": "试营业",
        "pinyin": "shìyíngyè",
        "thaiMeaning": "เปิดทดลองระบบร้าน / Soft opening",
        "englishMeaning": "Soft opening",
        "example": {
            "hanzi": "餐厅目前处于试营业阶段。",
            "pinyin": "Cāntīng mùqián chǔyú shìyíngyè jiēduàn.",
            "thaiMeaning": "ขณะนี้ร้านอาหารอยู่ในช่วงเปิดทดลองระบบ (Soft Opening)",
            "englishMeaning": "The restaurant is currently in the soft opening phase."
        },
        "examples": [
            {
                "scenario": "การบริหารร้าน",
                "hanzi": "试营业期间收集了很多顾客意见。",
                "pinyin": "Shìyíngyè qījiān shōují le hěn duō gùkè yìjiàn.",
                "thaiMeaning": "ช่วงเปิดทดลองระบบได้รวบรวมข้อเสนอแนะจากลูกค้ามากมาย",
                "englishMeaning": "Collected many customer feedbacks during the soft opening."
            }
        ]
    },

    # HR & Staff Roles
    {
        "hanzi": "店长",
        "pinyin": "diànzhǎng",
        "thaiMeaning": "ผู้จัดการร้าน / Store manager",
        "englishMeaning": "Store manager",
        "example": {
            "hanzi": "店长正在和员工开例会。",
            "pinyin": "Diànzhǎng zhèngzài hé yuángōng kāi lìhuì.",
            "thaiMeaning": "ผู้จัดการร้านกำลังประชุมประจำวันกับพนักงาน",
            "englishMeaning": "The store manager is holding a regular meeting with employees."
        },
        "examples": [
            {
                "scenario": "การบริหารจัดการ",
                "hanzi": "有特殊情况请向店长汇报。",
                "pinyin": "Yǒu tèshū qíngkuàng qǐng xiàng diànzhǎng huìbào.",
                "thaiMeaning": "หากมีสถานการณ์พิเศษกรุณายื่นเรื่องรายงานต่อผู้จัดการร้าน",
                "englishMeaning": "Please report to the store manager if there are special circumstances."
            }
        ]
    },
    {
        "hanzi": "领班",
        "pinyin": "lǐngbān",
        "thaiMeaning": "หัวหน้ากะ / Shift supervisor",
        "englishMeaning": "Shift supervisor",
        "example": {
            "hanzi": "大堂领班负责协调桌位安排。",
            "pinyin": "Dàtáng lǐngbān fùzé xiétiáo zhuōwèi ānpái.",
            "thaiMeaning": "หัวหน้ากะโถงหน้าร้านรับผิดชอบประสานงานจัดที่นั่ง",
            "englishMeaning": "The floor supervisor is responsible for coordinating table arrangements."
        },
        "examples": [
            {
                "scenario": "การจัดการกะ",
                "hanzi": "领班会检查每名员工的仪容仪表。",
                "pinyin": "Lǐngbān huì jiǎnchá měi míng yuángōng de yíróng yíbiǎo.",
                "thaiMeaning": "หัวหน้ากะจะตรวจเช็กความเรียบร้อยการแต่งกายของพนักงานทุกคน",
                "englishMeaning": "The supervisor checks the grooming and appearance of each employee."
            }
        ]
    },
    {
        "hanzi": "服务员",
        "pinyin": "fúwùyuán",
        "thaiMeaning": "พนักงานเสิร์ฟ / Waiter / Waitress",
        "englishMeaning": "Waiter/Waitress",
        "example": {
            "hanzi": "服务员态度非常热情周到。",
            "pinyin": "Fúwùyuán tàidù fēicháng rèqíng zhōudào.",
            "thaiMeaning": "พนักงานเสิร์ฟมารยาทและบริการอบอุ่นใส่ใจมาก",
            "englishMeaning": "The waiter's attitude is very enthusiastic and attentive."
        },
        "examples": [
            {
                "scenario": "งานบริการ",
                "hanzi": "服务员应及时清理桌上空盘。",
                "pinyin": "Fúwùyuán yīng jíshí qīnglǐ zhuōshàng kōngpán.",
                "thaiMeaning": "พนักงานเสิร์ฟควรรีบเก็บจานเปล่าบนโต๊ะทันที",
                "englishMeaning": "Waiters should clean empty plates on the table promptly."
            }
        ]
    },
    {
        "hanzi": "配菜员",
        "pinyin": "pèicàiyuán",
        "thaiMeaning": "พนักงานจัดเตรียมวัตถุดิบ / Kitchen prep staff",
        "englishMeaning": "Kitchen prep staff",
        "example": {
            "hanzi": "配菜员正按照菜单准备食材。",
            "pinyin": "Pèicàiyuán zhèng ànzào càidān zhǔnbèi shícái.",
            "thaiMeaning": "พนักงานเตรียมวัตถุดิบกำลังเตรียมของตามเมนูสั่ง",
            "englishMeaning": "The kitchen prep staff is preparing ingredients according to the menu."
        },
        "examples": [
            {
                "scenario": "การทำงานในครัว",
                "hanzi": "配菜员要保证食材份量准确。",
                "pinyin": "Pèicàiyuán yào bǎozhèng shícái fènliàng zhǔnquè.",
                "thaiMeaning": "พนักงานเตรียมวัตถุดิบต้องรับประกันปริมาณน้ำหนักวัตถุดิบให้แม่นยำ",
                "englishMeaning": "Prep staff must ensure accurate ingredient portion sizes."
            }
        ]
    },
    {
        "hanzi": "洗碗工",
        "pinyin": "xǐwǎngōng",
        "thaiMeaning": "พนักงานล้างจาน / Dishwasher staff",
        "englishMeaning": "Dishwasher staff",
        "example": {
            "hanzi": "洗碗工正在后厨清洗餐具。",
            "pinyin": "Xǐwǎngōng zhèngzài hòuchú qīngxǐ cānjù.",
            "thaiMeaning": "พนักงานล้างจานกำลังล้างภาชนะอยู่ในครัวหลังร้าน",
            "englishMeaning": "The dishwasher staff is washing tableware in the back kitchen."
        },
        "examples": [
            {
                "scenario": "ทำความสะอาด",
                "hanzi": "洗碗工需要清洗并消毒所有碗盘。",
                "pinyin": "Xǐwǎngōng xūyào qīngxǐ bìng xiāodú suǒyǒu wǎnpán.",
                "thaiMeaning": "พนักงานล้างจานต้องล้างและฆ่าเชื้อโรคจานชามทั้งหมด",
                "englishMeaning": "Dishwashers need to clean and sanitize all bowls and plates."
            }
        ]
    },
    {
        "hanzi": "排班",
        "pinyin": "páibān",
        "thaiMeaning": "จัดกะทำงาน / Staff scheduling",
        "englishMeaning": "Staff scheduling",
        "example": {
            "hanzi": "下周的排班表已经发布了。",
            "pinyin": "Xiàzhōu de páibānbiǎo yǐjīng fābù le.",
            "thaiMeaning": "ตารางตารางจัดกะทำงานสัปดาห์หน้าประกาศแล้วครับ",
            "englishMeaning": "Next week's shift schedule has been posted."
        },
        "examples": [
            {
                "scenario": "การบริหารพนักงาน",
                "hanzi": "排班时要合理安排休息时间。",
                "pinyin": "Páibān shí yào hélǐ ānpái xiūxi shíjiān.",
                "thaiMeaning": "เวลาจัดกะต้องจัดสรรเวลาพักอย่างเหมาะสม",
                "englishMeaning": "Reasonably arrange rest breaks when scheduling shifts."
            }
        ]
    },
    {
        "hanzi": "早班",
        "pinyin": "zǎobān",
        "thaiMeaning": "กะเช้า / Morning shift",
        "englishMeaning": "Morning shift",
        "example": {
            "hanzi": "我明天上早班，七点就要到店。",
            "pinyin": "Wǒ míngtiān shàng zǎobān, qī diǎn jiù yào dào diàn.",
            "thaiMeaning": "พรุ่งนี้ฉันเข้ากะเช้า 7 โมงเช้าก็ต้องถึงร้านแล้ว",
            "englishMeaning": "I am on the morning shift tomorrow, need to be at the store by 7 AM."
        },
        "examples": [
            {
                "scenario": "การทำงานกะ",
                "hanzi": "早班员工负责开店前准备。",
                "pinyin": "Zǎobān yuángōng fùzé kāidiàn qián zhǔnbèi.",
                "thaiMeaning": "พนักงานกะเช้ารับผิดชอบเตรียมความพร้อมก่อนเปิดร้าน",
                "englishMeaning": "Morning shift staff are responsible for pre-opening preparation."
            }
        ]
    },
    {
        "hanzi": "晚班",
        "pinyin": "wǎnbān",
        "thaiMeaning": "กะดึก / Evening shift",
        "englishMeaning": "Evening shift",
        "example": {
            "hanzi": "晚班员工负责关店前的打扫和盘点。",
            "pinyin": "Wǎnbān yuángōng fùzé guāndiàn qián de dǎsǎo hé pándiǎn.",
            "thaiMeaning": "พนักงานกะดึกรับผิดชอบทำความสะอาดและนับสต็อกก่อนปิดร้าน",
            "englishMeaning": "Evening shift employees handle cleaning and inventory count before closing."
        },
        "examples": [
            {
                "scenario": "ปิดร้าน",
                "hanzi": "晚班通常到晚上十一点半下班。",
                "pinyin": "Wǎnshān tōngcháng dào wǎnshang shíyī diǎn bàn xiàbān.",
                "thaiMeaning": "กะดึกปกติเลิกงานตอนสี่ทุ่มครึ่ง",
                "englishMeaning": "The evening shift usually ends work at 11:30 PM."
            }
        ]
    },

    # Kitchen Machinery & Equipment
    {
        "hanzi": "烤箱",
        "pinyin": "kǎoxiāng",
        "thaiMeaning": "เตาอบ / Oven",
        "englishMeaning": "Oven",
        "example": {
            "hanzi": "请把烤箱温度调到两百度。",
            "pinyin": "Qǐng bǎ kǎoxiāng wēndù tiáo dào liǎngbǎi dù.",
            "thaiMeaning": "กรุณาปรับอุณหภูมิเตาอบไปที่ 200 องศา",
            "englishMeaning": "Please adjust the oven temperature to 200 degrees."
        },
        "examples": [
            {
                "scenario": "อุปกรณ์ในครัว",
                "hanzi": "烤箱使用完毕后请及时切断电源。",
                "pinyin": "Kǎoxiāng shǐyòng wánbì hòu qǐng jíshí qiēduàn diànyuán.",
                "thaiMeaning": "เมื่อใช้งานเตาอบเสร็จแล้วกรุณาตัดกระแสไฟทันที",
                "englishMeaning": "Please turn off the power in time after using the oven."
            }
        ]
    },
    {
        "hanzi": "蒸箱",
        "pinyin": "zhēngxiāng",
        "thaiMeaning": "ตู้นึ่ง / Steamer cabinet",
        "englishMeaning": "Steamer cabinet",
        "example": {
            "hanzi": "面点师正在用蒸箱蒸包子。",
            "pinyin": "Miàndiǎnshī zhèngzài yòng zhēngxiāng zhēng bāozi.",
            "thaiMeaning": "เชฟทำติ่มซำกำลังใช้ตู้นึ่งนึ่งซาลาเปา",
            "englishMeaning": "The pastry chef is using the steamer cabinet to steam buns."
        },
        "examples": [
            {
                "scenario": "อุปกรณ์ทำอาหาร",
                "hanzi": "蒸箱里的水蒸汽温度极高，开门请小心。",
                "pinyin": "Zhēngxiāng lǐ de shuǐzhēngqì wēndù jígāo, kāimén qǐng xiǎoxīn.",
                "thaiMeaning": "ไอน้ำในตู้นึ่งอุณหภูมิสูงมาก เปิดตู้กรุณาระมัดระวัง",
                "englishMeaning": "Steam inside the steamer cabinet is extremely hot, be careful opening."
            }
        ]
    },
    {
        "hanzi": "油炸炉",
        "pinyin": "yóuzhálú",
        "thaiMeaning": "เตาทอดน้ำมันลึก / Deep fryer",
        "englishMeaning": "Deep fryer",
        "example": {
            "hanzi": "油炸炉里的油需要定期过滤和更换。",
            "pinyin": "Yóuzhálú lǐ de yóu xūyào dìngqī guòlǜ hé gēnghuàn.",
            "thaiMeaning": "น้ำมันในเตาทอดจำเป็นต้องกรองและเปลี่ยนเป็นประจำ",
            "englishMeaning": "Oil in the deep fryer needs to be filtered and replaced regularly."
        },
        "examples": [
            {
                "scenario": "ความปลอดภัยในครัว",
                "hanzi": "严禁带水份的食材直接放入油炸炉。",
                "pinyin": "Yánjìn dài shuǐfèn de shícái zhíjiē fàngrù yóuzhálú.",
                "thaiMeaning": "ห้ามนำวัตถุดิบที่มีน้ำเกาะอยู่นำลงเตาทอดน้ำมันลึกโดยตรง",
                "englishMeaning": "Strictly forbid putting wet ingredients directly into the deep fryer."
            }
        ]
    },
    {
        "hanzi": "消毒柜",
        "pinyin": "xiāodúguì",
        "thaiMeaning": "ตู้ฆ่าเชื้อ / Disinfection cabinet",
        "englishMeaning": "Disinfection cabinet",
        "example": {
            "hanzi": "洗净的碗盘必须放入消毒柜消毒。",
            "pinyin": "Xǐjìng de wǎnpán bìxū fàngrù xiāodúguì xiāodú.",
            "thaiMeaning": "จานชามที่ล้างสะอาดแล้วต้องใส่เข้าตู้ฆ่าเชื้อเพื่อ sterilization",
            "englishMeaning": "Washed bowls and plates must be put into the disinfection cabinet."
        },
        "examples": [
            {
                "scenario": "มาตรฐานสุขาภิบาล",
                "hanzi": "消毒柜每天运行两次。",
                "pinyin": "Xiāodúguì měitiān yùnxíng liǎng cì.",
                "thaiMeaning": "ตู้ฆ่าเชื้อเดินเครื่องวันละ 2 รอบ",
                "englishMeaning": "The disinfection cabinet runs twice a day."
            }
        ]
    },
    {
        "hanzi": "切肉机",
        "pinyin": "qiēròujī",
        "thaiMeaning": "เครื่องสไลซ์เนื้อ / Meat slicer",
        "englishMeaning": "Meat slicer",
        "example": {
            "hanzi": "使用切肉机时要注意安全防护。",
            "pinyin": "Shǐyòng qiēròujī shí yào zhùyì ānquán fánghù.",
            "thaiMeaning": "เวลาใช้งานเครื่องสไลซ์เนื้อต้องระมัดระวังความปลอดภัย",
            "englishMeaning": "Pay attention to safety protection when using the meat slicer."
        },
        "examples": [
            {
                "scenario": "การทำงานในครัว",
                "hanzi": "切肉机可以快速切出均匀的牛肉卷。",
                "pinyin": "Qiēròujī kěyǐ kuàisù qiē chū jūnyún de niúròujuǎn.",
                "thaiMeaning": "เครื่องสไลซ์เนื้อสามารถสไลซ์ม้วนเนื้อวัวได้สม่ำเสมอและรวดเร็ว",
                "englishMeaning": "The meat slicer can quickly slice out uniform beef rolls."
            }
        ]
    },
    {
        "hanzi": "洗碗机",
        "pinyin": "xǐwǎnjī",
        "thaiMeaning": "เครื่องล้างจาน / Dishwasher machine",
        "englishMeaning": "Dishwasher machine",
        "example": {
            "hanzi": "商用洗碗机大大提高了清洗效率。",
            "pinyin": "Shāngyòng xǐwǎnjī dàdà tígāo le qīngxǐ xiàolǜ.",
            "thaiMeaning": "เครื่องล้างจานเชิงพาณิชย์ยกระดับประสิทธิภาพการล้างจานอย่างมาก",
            "englishMeaning": "Commercial dishwashers greatly improve cleaning efficiency."
        },
        "examples": [
            {
                "scenario": "การทำความสะอาด",
                "hanzi": "餐具放入洗碗机前先清理残渣。",
                "pinyin": "Cānjù fàngrù xǐwǎnjī qián xiān qīnglǐ cánzhā.",
                "thaiMeaning": "ก่อนใส่จานลงเครื่องล้างจานให้กวาดเศษอาหารออกก่อน",
                "englishMeaning": "Scrap food residue before putting tableware into the dishwasher."
            }
        ]
    },

    # Cooking Methods & Doneness
    {
        "hanzi": "爆炒",
        "pinyin": "bàochǎo",
        "thaiMeaning": "ผัดไฟแรง / Stir-fry at high heat",
        "englishMeaning": "Stir-fry at high heat",
        "example": {
            "hanzi": "这道爆炒牛肉口感非常嫩滑。",
            "pinyin": "Zhè dào bàochǎo niúròu kǒugǎn fēicháng nènhuá.",
            "thaiMeaning": "เนื้อวัวผัดไฟแรงจานนี้รสสัมผัสนุ่มเด้งมาก",
            "englishMeaning": "This high-heat stir-fried beef tastes very tender and smooth."
        },
        "examples": [
            {
                "scenario": "เทคนิคทำอาหาร",
                "hanzi": "爆炒需要火候大、烹饪时间短。",
                "pinyin": "Bàochǎo xūyào huǒhou dà, pēngrèn shíjiān duǎn.",
                "thaiMeaning": "การผัดไฟแรงต้องการไฟแรงและใช้เวลาผัดสั้น",
                "englishMeaning": "High-heat stir-frying requires strong heat and short cooking time."
            }
        ]
    },
    {
        "hanzi": "炖",
        "pinyin": "dùn",
        "thaiMeaning": "ต้มตุ๋น / Stew / Braise",
        "englishMeaning": "Stew",
        "example": {
            "hanzi": "牛肉炖得非常软烂入味。",
            "pinyin": "Niúròu dùn de fēicháng ruǎnlàn rùwèi.",
            "thaiMeaning": "เนื้อวัวต้มตุ๋นจนนุ่มเปื่อยเข้าเนื้อดีมาก",
            "englishMeaning": "The beef is stewed until very soft, tender and flavorful."
        },
        "examples": [
            {
                "scenario": "วิธีการปรุง",
                "hanzi": "慢火炖煮三小时才能出味。",
                "pinyin": "Mànhuǒ dùnzhǔ sān xiǎoshí cái néng chūwèi.",
                "thaiMeaning": "ต้องเคี่ยวไฟอ่อนตุ๋น 3 ชั่วโมงรสชาติถึงจะงวดออกรส",
                "englishMeaning": "Slow stewing for three hours is needed to bring out the flavor."
            }
        ]
    },
    {
        "hanzi": "煎",
        "pinyin": "jiān",
        "thaiMeaning": "ทอดน้ำมันน้อย / Pan-fry",
        "englishMeaning": "Pan-fry",
        "example": {
            "hanzi": "煎至两面金黄即可出锅。",
            "pinyin": "Jiān zhì liǎngmiàn jīnhuáng jíkě chūguō.",
            "thaiMeaning": "จี๋ทอดน้ำมันน้อยจนสองด้านเหลืองทองก็ตักขึ้นได้",
            "englishMeaning": "Pan-fry until golden brown on both sides before taking off heat."
        },
        "examples": [
            {
                "scenario": "การทำอาหาร",
                "hanzi": "这道香煎三文鱼表皮非常酥脆。",
                "pinyin": "Zhè dào xiāngjiān sānwényú biǎopí fēicháng sūcuì.",
                "thaiMeaning": "ปลาแซลมอนทอดกรอบจานนี้หนังกรอบมาก",
                "englishMeaning": "This pan-fried salmon has a very crispy skin."
            }
        ]
    },
    {
        "hanzi": "红烧",
        "pinyin": "hóngshāo",
        "thaiMeaning": "ต้มเคี่ยวซีอิ๊ว / Braise in soy sauce",
        "englishMeaning": "Braise in soy sauce",
        "example": {
            "hanzi": "招牌红烧肉是每桌必点菜。",
            "pinyin": "Zhāopái hóngshāoròu shì měi zhuō bì diǎn cài.",
            "thaiMeaning": "หมูสามชั้นเคี่ยวซีอิ๊วสูตรเด็ดเป็นเมนูที่ทุกโต๊ะต้องสั่ง",
            "englishMeaning": "Signature braised pork in soy sauce is a must-order at every table."
        },
        "examples": [
            {
                "scenario": "เมนูอาหาร",
                "hanzi": "红烧菜肴色泽红亮、口感浓郁。",
                "pinyin": "Hóngshāo càiyáo sèzé hóngliàng, kǒugǎn nóngyù.",
                "thaiMeaning": "เมนูเคี่ยวซีอิ๊วสีสันแดงมันวาว รสชาติเข้มข้น",
                "englishMeaning": "Soy-braised dishes have a glossy reddish hue and rich flavor."
            }
        ]
    },
    {
        "hanzi": "凉拌",
        "pinyin": "liángbàn",
        "thaiMeaning": "ยำ/คลุกเย็น / Cold tossed salad",
        "englishMeaning": "Cold toss",
        "example": {
            "hanzi": "夏天来一份凉拌黄瓜非常清爽。",
            "pinyin": "Xiàtiān lái yífèn liángbàn huángguā fēicháng qīngshuǎng.",
            "thaiMeaning": "หน้าร้อนทานแตงกวาคลุกยำเย็นสักจานสดชื่นมาก",
            "englishMeaning": "Having a serving of cold tossed cucumber in summer is very refreshing."
        },
        "examples": [
            {
                "scenario": "จานทานเล่น",
                "hanzi": "凉拌菜需要加入蒜泥和香油调味。",
                "pinyin": "Liángbàncài xūyào jiārù suànní hé xiāngyóu tiáowèi.",
                "thaiMeaning": "อาหารยำเย็นจำเป็นต้องใส่กระเทียมสับและน้ำมันงาปรุงรส",
                "englishMeaning": "Cold tossed dishes need minced garlic and sesame oil seasoning."
            }
        ]
    },

    # Doneness & Dietary
    {
        "hanzi": "熟度",
        "pinyin": "shúdù",
        "thaiMeaning": "ระดับความสุก (เช่น สเต๊ก) / Doneness level",
        "englishMeaning": "Doneness level",
        "example": {
            "hanzi": "请问您的牛排要几分熟度？",
            "pinyin": "Qǐngwèn nín de niúpái yào jǐ fēn shúdù?",
            "thaiMeaning": "ขอทราบความสุกของสเต๊กวัวที่คุณลูกค้าต้องการครับ?",
            "englishMeaning": "What degree of doneness would you like for your steak?"
        },
        "examples": [
            {
                "scenario": "รับออเดอร์",
                "hanzi": "厨房会严格按照要求的熟度烹饪。",
                "pinyin": "Chúfáng huì yángé ànzào yāoqiú de shúdù pēngrèn.",
                "thaiMeaning": "ห้องครัวจะปรุงอาหารตามระดับความสุกที่ขอมาอย่างเคร่งครัด",
                "englishMeaning": "The kitchen cooks strictly according to the requested doneness."
            }
        ]
    },
    {
        "hanzi": "五分熟",
        "pinyin": "wǔfēnshú",
        "thaiMeaning": "สุกปานกลาง / Medium doneness",
        "englishMeaning": "Medium doneness",
        "example": {
            "hanzi": "我要一份五分熟的眼肉牛排。",
            "pinyin": "Wǒ yào yífèn wǔfēnshú de yǎnròu niúpái.",
            "thaiMeaning": "ผมขอริบอายสเต๊กระดับความสุกปานกลาง (Medium) 1 ที่ครับ",
            "englishMeaning": "I would like a ribeye steak cooked medium."
        },
        "examples": [
            {
                "scenario": "สั่งสเต๊ก",
                "hanzi": "五分熟的牛排肉质切开呈粉红色。",
                "pinyin": "Wǔfēnshú de niúpái ròuzhì qiēkāi chéng fěnhóngsè.",
                "thaiMeaning": "สเต๊กความสุกระดับ Medium เมื่อหั่นออกมาเนื้อจะเป็นสีชมพู",
                "englishMeaning": "A medium-cooked steak shows a pinkish center when sliced open."
            }
        ]
    },
    {
        "hanzi": "七分熟",
        "pinyin": "qīfēnshú",
        "thaiMeaning": "สุกค่อนข้างมาก / Medium-well",
        "englishMeaning": "Medium-well",
        "example": {
            "hanzi": "七分熟比较适合大多数亚洲人的口味。",
            "pinyin": "Qīfēnshú bǐjiào shìhé dàduōshù yàzhōurén de kǒuwèi.",
            "thaiMeaning": "ระดับ Medium-well เหมาะกับรสปากของคนเอเชียส่วนใหญ่มากกว่า",
            "englishMeaning": "Medium-well is more suitable for the taste of most Asians."
        },
        "examples": [
            {
                "scenario": "แนะนำลูกค้า",
                "hanzi": "好的，为您下单七分熟牛排。",
                "pinyin": "Hǎo de, wèi nín xiàdān qīfēnshú niúpái.",
                "thaiMeaning": "รับทราบครับ คีย์ออเดอร์สเต๊กสุกระดับ Medium-well ให้แล้วครับ",
                "englishMeaning": "Alright, placing order for medium-well steak for you."
            }
        ]
    },
    {
        "hanzi": "全熟",
        "pinyin": "quánshú",
        "thaiMeaning": "สุกทั้งหมด / Well-done",
        "englishMeaning": "Well-done",
        "example": {
            "hanzi": "猪肉和鸡肉必须烹饪至全熟。",
            "pinyin": "Zhūròu hé jīròu bìxū pēngrèn zhì quánshú.",
            "thaiMeaning": "เนื้อหมูและเนื้อไก่ต้องปรุงให้สุกทั้งหมดเท่านั้น",
            "englishMeaning": "Pork and chicken must be cooked thoroughly until well-done."
        },
        "examples": [
            {
                "scenario": "มาตรฐานความปลอดภัย",
                "hanzi": "孕妇建议食用全熟的食物。",
                "pinyin": "Yùnfù jiànyì shíyòng quánshú de shíwù.",
                "thaiMeaning": "หญิงตั้งครรภ์แนะนำให้รับประทานอาหารที่สุกทั้งหมด",
                "englishMeaning": "Pregnant women are advised to eat well-done food."
            }
        ]
    },
    {
        "hanzi": "过敏原",
        "pinyin": "guòmǐnyuán",
        "thaiMeaning": "สารก่อภูมิแพ้ / Allergens",
        "englishMeaning": "Allergens",
        "example": {
            "hanzi": "菜单上标注了花生等主要过敏原。",
            "pinyin": "Càidān shàng biāozhù le huāshēng děng zhǔyào guòmǐnyuán.",
            "thaiMeaning": "บนเมนูมีระบุสารก่อภูมิแพ้หลัก เช่น ถั่วลิสง ไว้อย่างชัดเจน",
            "englishMeaning": "Major allergens such as peanuts are marked on the menu."
        },
        "examples": [
            {
                "scenario": "ความปลอดภัยผู้บริโภค",
                "hanzi": "对海鲜过敏的顾客请提前告知。",
                "pinyin": "Duì hǎixiān guòmǐn de gùkè qǐng tíqián gàozhī.",
                "thaiMeaning": "ลูกค้าที่แพ้อาหารทะเลกรุณาแจ้งให้ทราบล่วงหน้า",
                "englishMeaning": "Customers allergic to seafood please inform us in advance."
            }
        ]
    },
    {
        "hanzi": "忌口",
        "pinyin": "jìkǒu",
        "thaiMeaning": "ข้อห้ามทาน / อาหารที่แพ้หรือปฏิเสธ / Dietary restriction",
        "englishMeaning": "Dietary restriction",
        "example": {
            "hanzi": "请问各位在饮食上有什么忌口吗？",
            "pinyin": "Qǐngwèn gèwèi zài yǐnshí shàng yǒu shénme jìkǒu ma?",
            "thaiMeaning": "ขอสอบถามว่าทุกท่านมีอาหารที่ห้ามทานหรือปฏิเสธเป็นพิเศษไหมครับ?",
            "englishMeaning": "May I ask if anyone has any dietary restrictions?"
        },
        "examples": [
            {
                "scenario": "รับออเดอร์",
                "hanzi": "顾客忌香菜和葱，厨房请注意。",
                "pinyin": "Gùkè jì xiāngcài hé cōng, chúfáng qǐng zhùyì.",
                "thaiMeaning": "ลูกค้าไม่ทานผักชีและต้นหอม ห้องครัวโปรดระวัง",
                "englishMeaning": "Customer avoids cilantro and scallions, kitchen please take note."
            }
        ]
    },
    {
        "hanzi": "续杯",
        "pinyin": "xùbēi",
        "thaiMeaning": "เติมเครื่องดื่มฟรี / Refill",
        "englishMeaning": "Refill",
        "example": {
            "hanzi": "这里的红茶可以免费续杯。",
            "pinyin": "Zhèlǐ de hóngchá kěyǐ miǎnfèi xùbēi.",
            "thaiMeaning": "ชาแดงที่นี่สามารถเติมฟรีได้เรื่อยๆ ครับ",
            "englishMeaning": "The black tea here comes with free refills."
        },
        "examples": [
            {
                "scenario": "บริการเครื่องดื่ม",
                "hanzi": "服务员，麻烦帮我续一杯可乐。",
                "pinyin": "Fúwùyuán, máfan bāng wǒ xù yì bēi kělè.",
                "thaiMeaning": "น้องครับ รบกวนเติมโค้กให้พี่อีกแก้วครับ",
                "englishMeaning": "Waiter, please help me refill a glass of Coke."
            }
        ]
    }
]

filtered_new_words = []
for item in NEW_WORDS_BATCH3:
    if item['hanzi'] not in existing_hanzi:
        existing_hanzi.add(item['hanzi'])
        filtered_new_words.append(item)
    else:
        print(f"Deduplication safeguard: skipping existing word '{item['hanzi']}'")

print(f"Adding {len(filtered_new_words)} completely unique Restaurant & F&B business words...")

start_id = len(vocab_list) + 1

for idx, item in enumerate(filtered_new_words):
    curr_id = f"v{start_id + idx}"
    word_obj = {
        "id": curr_id,
        "hanzi": item['hanzi'],
        "pinyin": item['pinyin'],
        "thaiMeaning": item['thaiMeaning'],
        "englishMeaning": item['englishMeaning'],
        "example": item['example'],
        "examples": item.get('examples', [])
    }
    vocab_list.append(word_obj)

print(f"🎉 Total vocabulary dataset expanded to: {len(vocab_list)} words!")

new_vocab_js = json.dumps(vocab_list, ensure_ascii=False, indent=2)
new_content = f"""// Vocabulary Dataset - {len(vocab_list)} unique words
// Situational examples are written and reviewed per word; substitution templates are not used.

export const VOCAB_SETS = [
  {{ id: 'all', label: 'ทั้งหมด ({len(vocab_list)} คำ)' }}
];

export const vocabularyList = {new_vocab_js};
"""

with open(vocab_file, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("vocabularyData.js successfully expanded with Restaurant & F&B business vocabulary Batch 3!")
