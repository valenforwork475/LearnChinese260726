// Pinyin Guide Data: Initials, Finals, and Tone Rules

export const PINYIN_TONES = [
  {
    tone: 1,
    symbol: 'ā',
    name: 'เสียง 1 (阴平)',
    thaiEquivalent: 'เสียงสามัญ (ราบสูงยาว)',
    description: 'เสียงราบระดับสูง ความยาวสม่ำเสมอ เช่น mā (ม้า)',
    example: 'mā (妈 - แม่)'
  },
  {
    tone: 2,
    symbol: 'á',
    name: 'เสียง 2 (阳平)',
    thaiEquivalent: 'เสียงจัตวา (ชันขึ้น)',
    description: 'เสียงขึ้นจากต่ำไปสูง เหมือนเวลาถาม "ห๊ะ?" เช่น má (หม่า)',
    example: 'má (麻 - ชา/ป่าน)'
  },
  {
    tone: 3,
    symbol: 'ǎ',
    name: 'เสียง 3 (上声)',
    thaiEquivalent: 'เสียงเอกโค้ง (ต่ำแล้วขึ้น)',
    description: 'เสียงกดต่ำลงแล้วผาดขึ้นนิดหน่อย เช่น mǎ (หม่า)',
    example: 'mǎ (马 - ม้า)'
  },
  {
    tone: 4,
    symbol: 'à',
    name: 'เสียง 4 (去声)',
    thaiEquivalent: 'เสียงโท (ดิ่งลงกระแทก)',
    description: 'เสียงดิ่งจากสูงลงต่ำอย่างรวดเร็ว เช่น mà (ม่า)',
    example: 'mà (骂 - ด่า)'
  },
  {
    tone: 0,
    symbol: 'a',
    name: 'เสียงเบา (轻声)',
    thaiEquivalent: 'เสียงสั้นเบา',
    description: 'ออกเสียงสั้นเบาครึ่งเสียง เช่น ma (เน้นคำหลังเบา)',
    example: 'ma (吗 - ไหม/หรือเปล่า)'
  }
];

export const INITIALS = [
  { pinyin: 'b', thai: 'ป', group: 'ริมฝีปาก' },
  { pinyin: 'p', thai: 'พ', group: 'ริมฝีปาก' },
  { pinyin: 'm', thai: 'ม', group: 'ริมฝีปาก' },
  { pinyin: 'f', thai: 'ฟ', group: 'ริมฝีปาก' },
  { pinyin: 'd', thai: 'ต', group: 'ปลายลิ้น' },
  { pinyin: 't', thai: 'ท', group: 'ปลายลิ้น' },
  { pinyin: 'n', thai: 'น', group: 'ปลายลิ้น' },
  { pinyin: 'l', thai: 'ล', group: 'ปลายลิ้น' },
  { pinyin: 'g', thai: 'ก', group: 'โคนลิ้น' },
  { pinyin: 'k', thai: 'ค', group: 'โคนลิ้น' },
  { pinyin: 'h', thai: 'ฮ', group: 'โคนลิ้น' },
  { pinyin: 'j', thai: 'จ (สั้นฉ่ำ)', group: 'หน้าลิ้น' },
  { pinyin: 'q', thai: 'ช (พ่นลม)', group: 'หน้าลิ้น' },
  { pinyin: 'x', thai: 'ซ (ริมฝีปากเหยียด)', group: 'หน้าลิ้น' },
  { pinyin: 'zh', thai: 'จ (ม้วนลิ้น)', group: 'ม้วนลิ้น' },
  { pinyin: 'ch', thai: 'ช (ม้วนลิ้นพ่นลม)', group: 'ม้วนลิ้น' },
  { pinyin: 'sh', thai: 'ษ/ซ (ม้วนลิ้น)', group: 'ม้วนลิ้น' },
  { pinyin: 'r', thai: 'ย/ร (ม้วนลิ้น)', group: 'ม้วนลิ้น' },
  { pinyin: 'z', thai: 'จ (ลิ้นแตะฟัน)', group: 'ลิ้นแตะฟัน' },
  { pinyin: 'c', thai: 'ช (ลิ้นแตะฟันพ่นลม)', group: 'ลิ้นแตะฟัน' },
  { pinyin: 's', thai: 'ซ (ลิ้นแตะฟัน)', group: 'ลิ้นแตะฟัน' }
];

export const FINALS_SINGLE = [
  { pinyin: 'a', thai: 'อา' },
  { pinyin: 'o', thai: 'โอ / ออ' },
  { pinyin: 'e', thai: 'เออ' },
  { pinyin: 'i', thai: 'อี' },
  { pinyin: 'u', thai: 'อู' },
  { pinyin: 'ü', thai: 'อวี (ทำปากจู๋ออกเสียงอี)' }
];
