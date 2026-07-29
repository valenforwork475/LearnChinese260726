const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const root = path.join(__dirname, '..');
const vocabularyPath = path.join(root, 'src/data/vocabularyData.js');
const source = fs.readFileSync(vocabularyPath, 'utf8');
const match = source.match(/export const vocabularyList = (\[[\s\S]*\]);/);
if (!match) throw new Error('Could not find vocabularyList');

const historicalSource = execFileSync(
  'git',
  ['show', '682d104:scripts/fix_natural_examples.cjs'],
  { cwd: root, encoding: 'utf8' }
);
const curatedMatch = historicalSource.match(
  /const naturalCurated = (\{[\s\S]*?\n\});\n\n\/\/ Smart Natural Generator/
);
if (!curatedMatch) throw new Error('Could not recover reviewed examples');

const reviewedExamples = vm.runInNewContext(`(${curatedMatch[1]})`);
const vocabularyList = JSON.parse(match[1]);
let updated = 0;

for (const word of vocabularyList) {
  const examples = reviewedExamples[word.hanzi];
  if (!examples) continue;

  word.examples = examples.map((example) => {
    const contextMatch = example.thaiMeaning.match(/\s*\(บริบท:\s*(.+)\)$/);
    return {
      scenario: contextMatch ? contextMatch[1] : 'ตัวอย่างการใช้ในชีวิตประจำวัน',
      hanzi: example.hanzi,
      pinyin: example.pinyin,
      thaiMeaning: example.thaiMeaning.replace(/\s*\(บริบท:\s*.+\)$/, '')
    };
  });
  updated += 1;
}

const count = vocabularyList.length;
const output = `// Vocabulary Dataset - ${count} unique words
// Reviewed situational examples are preferred; generated substitution templates are not used.

export const VOCAB_SETS = [
  { id: 'all', label: 'ทั้งหมด (${count} คำ)' }
];

export const vocabularyList = ${JSON.stringify(vocabularyList, null, 2)};
`;

fs.writeFileSync(vocabularyPath, output, 'utf8');
console.log(`Restored reviewed multi-scenario examples for ${updated} words.`);
