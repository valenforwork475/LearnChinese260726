const fs = require('fs');
const path = require('path');

const vocabularyPath = path.join(__dirname, '../src/data/vocabularyData.js');
const source = fs.readFileSync(vocabularyPath, 'utf8');
const match = source.match(/export const vocabularyList = (\[[\s\S]*\]);/);

if (!match) {
  throw new Error('Could not find vocabularyList in vocabularyData.js');
}

const vocabularyList = JSON.parse(match[1]);

for (const word of vocabularyList) {
  if (!word.example?.hanzi || !word.example?.pinyin || !word.example?.thaiMeaning) {
    throw new Error(`Missing primary example for ${word.id}: ${word.hanzi}`);
  }

  word.examples = [{ ...word.example }];
}

const output = `// Vocabulary Dataset - 1,000 Words
// Each word uses its reviewed primary example. Generated template examples were removed.

export const VOCAB_SETS = [
  { id: 'all', label: 'ทั้งหมด (1,000 คำ)' }
];

export const vocabularyList = ${JSON.stringify(vocabularyList, null, 2)};
`;

fs.writeFileSync(vocabularyPath, output, 'utf8');
console.log(`Replaced broken generated examples for ${vocabularyList.length} words.`);
