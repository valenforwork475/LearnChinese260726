const fs = require('fs');
const path = require('path');
const { getSentenceEnglish, getWordEnglish } = require('./inject_english_translations.cjs');
const { getVocabEnglish } = require('./process_english_support.cjs');

console.log("=== UPDATING DATASETS WITH ENGLISH TRANSLATIONS ===");

// 1. UPDATE selfTalkData.js
const selfTalkPath = path.join(__dirname, '../src/data/selfTalkData.js');
let selfTalkContent = fs.readFileSync(selfTalkPath, 'utf8');

// Parse items or use regex/AST transformation to add englishMeaning & englishWord
// In selfTalkData.js, items look like:
// thaiMeaning: '...', -> thaiMeaning: '...', englishMeaning: '...',
// and in words: thaiMeaning: '...' -> thaiMeaning: '...', englishMeaning: '...'

selfTalkContent = selfTalkContent.replace(
  /(\s+)thaiMeaning:\s*['"]([^'"]+)['"]([,\n])/g,
  (match, indent, thai, endChar) => {
    // Check preceding line to see if we can deduce hanzi
    return `${indent}thaiMeaning: '${thai}',${indent}englishMeaning: '${getSentenceEnglish(thai, thai)}'${endChar}`;
  }
);

fs.writeFileSync(selfTalkPath, selfTalkContent, 'utf8');
console.log("Updated selfTalkData.js with English translations.");

// 2. UPDATE vocabularyData.js
const vocabPath = path.join(__dirname, '../src/data/vocabularyData.js');
let vocabContent = fs.readFileSync(vocabPath, 'utf8');

// Update vocabularyList items to include "englishMeaning": "..." after "thaiMeaning": "..."
vocabContent = vocabContent.replace(
  /"thaiMeaning":\s*"([^"]+)"/g,
  (match, thai) => {
    const english = getVocabEnglish(thai, thai);
    return `"thaiMeaning": "${thai}",\n    "englishMeaning": "${english.replace(/"/g, '\\"')}"`;
  }
);

fs.writeFileSync(vocabPath, vocabContent, 'utf8');
console.log("Updated vocabularyData.js with English translations.");

console.log("=== DATASETS UPDATED SUCCESSFULLY ===");
