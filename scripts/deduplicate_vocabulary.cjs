const fs = require('fs');
const path = require('path');

const vocabularyPath = path.join(__dirname, '../src/data/vocabularyData.js');
const source = fs.readFileSync(vocabularyPath, 'utf8');
const match = source.match(/export const vocabularyList = (\[[\s\S]*\]);/);
if (!match) throw new Error('Could not find vocabularyList');

const vocabularyList = JSON.parse(match[1]);
const seen = new Set();
const uniqueVocabulary = [];

for (const word of vocabularyList) {
  if (seen.has(word.hanzi)) continue;
  seen.add(word.hanzi);
  uniqueVocabulary.push(word);
}

const count = uniqueVocabulary.length;
const output = `// Vocabulary Dataset - ${count} unique words
// Duplicate vocabulary rows were removed while preserving the original word IDs.

export const VOCAB_SETS = [
  { id: 'all', label: 'ทั้งหมด (${count} คำ)' }
];

export const vocabularyList = ${JSON.stringify(uniqueVocabulary, null, 2)};
`;

fs.writeFileSync(vocabularyPath, output, 'utf8');
console.log(`Removed ${vocabularyList.length - count} duplicate rows; ${count} unique words remain.`);
