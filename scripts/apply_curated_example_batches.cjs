const fs = require('fs');
const path = require('path');
const { pinyin } = require('pinyin-pro');

const root = path.join(__dirname, '..');
const vocabularyPath = path.join(root, 'src/data/vocabularyData.js');
const source = fs.readFileSync(vocabularyPath, 'utf8');
const match = source.match(/export const vocabularyList = (\[[\s\S]*\]);/);
if (!match) throw new Error('Could not find vocabularyList');

const batchFiles = fs.readdirSync(__dirname)
  .filter((name) => /^curated_examples_batch_\d+\.cjs$/.test(name))
  .sort();

const curated = {};
for (const file of batchFiles) {
  const batch = require(path.join(__dirname, file));
  for (const [hanzi, examples] of Object.entries(batch)) {
    if (curated[hanzi]) throw new Error(`Duplicate curated entry: ${hanzi}`);
    curated[hanzi] = examples;
  }
}

function sentencePinyin(sentence) {
  let result = pinyin(sentence, { toneType: 'symbol', nonZh: 'consecutive' })
    .replace(/\s+([，。！？；：])/g, '$1')
    .replace(/，/g, ', ')
    .replace(/。/g, '.')
    .replace(/！/g, '!')
    .replace(/？/g, '?')
    .replace(/；/g, '; ')
    .replace(/：/g, ': ')
    .replace(/\s+/g, ' ')
    .trim();
  return result.replace(/(^|[.!?]\s+)([a-zü])/g, (_, prefix, letter) =>
    prefix + letter.toUpperCase()
  );
}

const vocabularyList = JSON.parse(match[1]);
const knownWords = new Set(vocabularyList.map((word) => word.hanzi));
for (const hanzi of Object.keys(curated)) {
  if (!knownWords.has(hanzi)) throw new Error(`Unknown vocabulary word: ${hanzi}`);
}

let updated = 0;
for (const word of vocabularyList) {
  const examples = curated[word.hanzi];
  if (!examples) continue;
  if (!Array.isArray(examples) || examples.length < 2) {
    throw new Error(`${word.hanzi} needs at least two new examples`);
  }
  const completeExamples = examples.length === 2
    ? [['การใช้คำแบบสั้นและตรงความหมาย', word.example.hanzi, word.example.thaiMeaning], ...examples]
    : examples;
  word.examples = completeExamples.map(([scenario, hanzi, thaiMeaning]) => ({
    scenario,
    hanzi,
    pinyin: sentencePinyin(hanzi),
    thaiMeaning
  }));
  updated += 1;
}

const count = vocabularyList.length;
const output = `// Vocabulary Dataset - ${count} unique words
// Situational examples are written and reviewed per word; substitution templates are not used.

export const VOCAB_SETS = [
  { id: 'all', label: 'ทั้งหมด (${count} คำ)' }
];

export const vocabularyList = ${JSON.stringify(vocabularyList, null, 2)};
`;

fs.writeFileSync(vocabularyPath, output, 'utf8');
console.log(`Applied curated examples from ${batchFiles.length} batches to ${updated} words.`);
