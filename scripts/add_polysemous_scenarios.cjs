const fs = require('fs');
const path = require('path');

const vocabularyPath = path.join(__dirname, '../src/data/vocabularyData.js');
const source = fs.readFileSync(vocabularyPath, 'utf8');
const match = source.match(/export const vocabularyList = (\[[\s\S]*\]);/);
if (!match) throw new Error('Could not find vocabularyList');

const vocabularyList = JSON.parse(match[1]);
const meanings = {
  左: 'ซ้าย / ด้านซ้าย / มือซ้าย',
  右: 'ขวา / ด้านขวา / มือขวา',
  前: 'หน้า / ข้างหน้า / ก่อน',
  后: 'หลัง / ข้างหลัง / หลังจาก',
  进: 'เข้า / เข้ามา / เข้าไป / เข้าร่วม',
  出: 'ออก / ออกมา / ออกไป / ทางออก',
  上: 'บน / ขึ้น / ขึ้นรถ',
  下: 'ล่าง / ใต้ / ลง / ตก (ฝน) / ครั้งถัดไป',
  走: 'เดิน / ไป / ออกไป'
};const scenarios = {
  左: [
    { scenario: 'เดินกับเพื่อนแล้วบอกทางที่สี่แยก', hanzi: '到前面的路口往左转。', pinyin: 'Dào qiánmiàn de lùkǒu wǎng zuǒ zhuǎn.', thaiMeaning: 'ถึงสี่แยกข้างหน้าแล้วเลี้ยวซ้าย' },
    { scenario: 'บอกตำแหน่งของร้านในห้าง', hanzi: '洗手间在咖啡店的左边。', pinyin: 'Xǐshǒujiān zài kāfēidiàn de zuǒbian.', thaiMeaning: 'ห้องน้ำอยู่ทางซ้ายของร้านกาแฟ' },
    { scenario: 'ครูบอกให้นักเรียนยกมือ', hanzi: '请举起你的左手。', pinyin: 'Qǐng jǔqǐ nǐ de zuǒshǒu.', thaiMeaning: 'กรุณายกมือซ้ายขึ้น' }
  ],
  右: [
    { scenario: 'นั่งรถแล้วบอกคนขับให้เลี้ยว', hanzi: '前面往右转就到了。', pinyin: 'Qiánmiàn wǎng yòu zhuǎn jiù dào le.', thaiMeaning: 'ข้างหน้าเลี้ยวขวาก็ถึงแล้ว' },
    { scenario: 'บอกตำแหน่งของธนาคาร', hanzi: '银行就在超市的右边。', pinyin: 'Yínháng jiù zài chāoshì de yòubian.', thaiMeaning: 'ธนาคารอยู่ทางขวาของซูเปอร์มาร์เก็ต' },
    { scenario: 'พยาบาลบอกตำแหน่งที่จะฉีดยา', hanzi: '今天在右手打针。', pinyin: 'Jīntiān zài yòushǒu dǎzhēn.', thaiMeaning: 'วันนี้ฉีดยาที่แขนขวา' }
  ],
  前: [
    { scenario: 'เดินหาอาคารแล้วเพื่อนบอกทาง', hanzi: '再往前走五分钟就到了。', pinyin: 'Zài wǎng qián zǒu wǔ fēnzhōng jiù dào le.', thaiMeaning: 'เดินตรงไปข้างหน้าอีกห้านาทีก็ถึงแล้ว' },
    { scenario: 'นัดเจอกันบริเวณหน้าโรงเรียน', hanzi: '我在学校前面等你。', pinyin: 'Wǒ zài xuéxiào qiánmiàn děng nǐ.', thaiMeaning: 'ฉันรอคุณอยู่หน้าโรงเรียน' },
    { scenario: 'บอกสิ่งที่ต้องทำก่อนรับประทานอาหาร', hanzi: '吃饭前要先洗手。', pinyin: 'Chīfàn qián yào xiān xǐshǒu.', thaiMeaning: 'ก่อนกินข้าวต้องล้างมือก่อน' }
  ],
  后: [
    { scenario: 'บอกเพื่อนว่ามีคนยืนอยู่ด้านหลัง', hanzi: '你后面有人，请让一下。', pinyin: 'Nǐ hòumiàn yǒu rén, qǐng ràng yīxià.', thaiMeaning: 'ข้างหลังคุณมีคนอยู่ กรุณาหลีกทางหน่อย' },
    { scenario: 'นัดทำกิจกรรมหลังเลิกงาน', hanzi: '下班后我们一起吃饭吧。', pinyin: 'Xiàbān hòu wǒmen yīqǐ chīfàn ba.', thaiMeaning: 'หลังเลิกงานเราไปกินข้าวด้วยกันนะ' },
    { scenario: 'บอกลำดับคิวของตัวเอง', hanzi: '我在他后面。', pinyin: 'Wǒ zài tā hòumiàn.', thaiMeaning: 'ฉันอยู่ข้างหลังเขา' }
  ],
  进: [
    { scenario: 'เปิดประตูต้อนรับแขก', hanzi: '外面很热，快进来吧！', pinyin: 'Wàimiàn hěn rè, kuài jìnlái ba!', thaiMeaning: 'ข้างนอกร้อนมาก รีบเข้ามาข้างในเถอะ!' },
    { scenario: 'พนักงานบอกว่าสามารถเข้าไปในห้องได้', hanzi: '门开着，你可以进去。', pinyin: 'Mén kāizhe, nǐ kěyǐ jìnqù.', thaiMeaning: 'ประตูเปิดอยู่ คุณเข้าไปได้' },
    { scenario: 'เล่าว่าเพิ่งเข้าทำงานที่บริษัท', hanzi: '我去年进了这家公司。', pinyin: 'Wǒ qùnián jìn le zhè jiā gōngsī.', thaiMeaning: 'ปีที่แล้วฉันเข้าทำงานที่บริษัทนี้' }
  ],
  出: [
    { scenario: 'เรียกเพื่อนให้ออกมาจากห้อง', hanzi: '我们到了，你快出来吧！', pinyin: 'Wǒmen dào le, nǐ kuài chūlái ba!', thaiMeaning: 'พวกเรามาถึงแล้ว รีบออกมานะ!' },
    { scenario: 'บอกว่าจะออกไปซื้อของ', hanzi: '我出去买点东西，马上回来。', pinyin: 'Wǒ chūqù mǎi diǎn dōngxi, mǎshàng huílái.', thaiMeaning: 'ฉันออกไปซื้อของนิดหน่อย เดี๋ยวกลับมา' },
    { scenario: 'ถามทางออกจากสถานีรถไฟ', hanzi: '请问，从哪个出口出去？', pinyin: 'Qǐngwèn, cóng nǎge chūkǒu chūqù?', thaiMeaning: 'ขอถามหน่อย ต้องออกทางออกไหน?' }
  ],
  上: [
    { scenario: 'ชวนเพื่อนขึ้นไปชั้นสอง', hanzi: '我们上楼看看吧。', pinyin: 'Wǒmen shàng lóu kànkan ba.', thaiMeaning: 'พวกเราขึ้นไปดูชั้นบนกันเถอะ' },
    { scenario: 'บอกตำแหน่งโทรศัพท์ที่กำลังหา', hanzi: '你的手机在桌子上。', pinyin: 'Nǐ de shǒujī zài zhuōzi shàng.', thaiMeaning: 'โทรศัพท์ของคุณอยู่บนโต๊ะ' },
    { scenario: 'กำลังเดินทางและบอกให้เพื่อนขึ้นรถ', hanzi: '车来了，快上车！', pinyin: 'Chē lái le, kuài shàng chē!', thaiMeaning: 'รถมาแล้ว รีบขึ้นรถ!' }
  ],
  下: [
    { scenario: 'ถึงป้ายแล้วบอกเพื่อนให้ลงจากรถ', hanzi: '到站了，我们下车吧。', pinyin: 'Dào zhàn le, wǒmen xià chē ba.', thaiMeaning: 'ถึงป้ายแล้ว พวกเราลงจากรถกันเถอะ' },
    { scenario: 'บอกตำแหน่งรองเท้าที่กำลังหา', hanzi: '你的鞋在桌子下面。', pinyin: 'Nǐ de xié zài zhuōzi xiàmiàn.', thaiMeaning: 'รองเท้าของคุณอยู่ใต้โต๊ะ' },
    { scenario: 'ฝนเริ่มตกขณะกำลังจะออกจากบ้าน', hanzi: '外面下雨了，带把伞吧。', pinyin: 'Wàimiàn xiàyǔ le, dài bǎ sǎn ba.', thaiMeaning: 'ข้างนอกฝนตกแล้ว เอาร่มไปด้วยนะ' },
    { scenario: 'นัดหมายกันใหม่ในครั้งถัดไป', hanzi: '这次没时间，我们下次再去。', pinyin: 'Zhè cì méi shíjiān, wǒmen xià cì zài qù.', thaiMeaning: 'ครั้งนี้ไม่มีเวลา ไว้คราวหน้าพวกเราค่อยไป' }
  ],
  走: [
    { scenario: 'เดินกับผู้สูงอายุจึงบอกให้ค่อยๆ เดิน', hanzi: '路很滑，慢慢走。', pinyin: 'Lù hěn huá, mànmàn zǒu.', thaiMeaning: 'ถนนลื่น ค่อยๆ เดินนะ' },
    { scenario: 'กำลังจะกลับและบอกลาเพื่อน', hanzi: '时间不早了，我先走了。', pinyin: 'Shíjiān bù zǎo le, wǒ xiān zǒu le.', thaiMeaning: 'ดึกแล้ว ฉันขอตัวไปก่อนนะ' },
    { scenario: 'ชวนเพื่อนออกเดินทางทันที', hanzi: '大家都准备好了，我们走吧！', pinyin: 'Dàjiā dōu zhǔnbèi hǎo le, wǒmen zǒu ba!', thaiMeaning: 'ทุกคนเตรียมพร้อมแล้ว พวกเราไปกันเถอะ!' }
  ]
};

let updated = 0;
for (const word of vocabularyList) {
  if (scenarios[word.hanzi]) {
    word.thaiMeaning = meanings[word.hanzi];
    word.examples = scenarios[word.hanzi];
    updated += 1;
  }
}
if (updated !== Object.keys(scenarios).length) {
  throw new Error(`Expected ${Object.keys(scenarios).length} words, updated ${updated}`);
}

const output = `// Vocabulary Dataset - 1,000 Words
// Polysemous direction and movement words include reviewed situational examples.

export const VOCAB_SETS = [
  { id: 'all', label: 'ทั้งหมด (1,000 คำ)' }
];

export const vocabularyList = ${JSON.stringify(vocabularyList, null, 2)};
`;
fs.writeFileSync(vocabularyPath, output, 'utf8');
console.log(`Added situational examples to ${updated} polysemous words.`);
