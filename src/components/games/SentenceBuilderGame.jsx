import React, { useState, useEffect } from 'react';
import { ArrowLeft, Volume2, CheckCircle2, XCircle, RefreshCw, Trophy, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { selfTalkSentences } from '../../data/selfTalkData';
import { vocabularyList } from '../../data/vocabularyData';
import { speakChinese } from '../../utils/speech';

function getShuffledSentences(count = 10) {
  // Filter sentences that have word breakdowns
  const valid = selfTalkSentences.filter(s => Array.isArray(s.words) && s.words.length > 0);
  return [...valid].sort(() => 0.5 - Math.random()).slice(0, count);
}

function getDistractorWords(count = 2) {
  const shuffled = [...vocabularyList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(v => ({
    hanzi: v.hanzi,
    pinyin: v.pinyin,
    thaiMeaning: v.thaiMeaning,
    isDistractor: true
  }));
}

export default function SentenceBuilderGame({ onBack }) {
  const [sentences, setSentences] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState([]); // user placed words
  const [availableTiles, setAvailableTiles] = useState([]); // remaining available word bubbles
  const [status, setStatus] = useState('idle'); // 'idle' | 'correct' | 'wrong'
  const [score, setScore] = useState(0);
  const [showPinyinHint, setShowPinyinHint] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentSentence = sentences[currentIndex] || null;

  // Initialize Round
  const loadRound = (sentenceList, index) => {
    const s = sentenceList[index];
    if (!s) return;

    // Correct target words
    const correctWords = s.words.map((w, i) => ({
      ...w,
      tileId: `word-${i}-${w.hanzi}`,
      isDistractor: false
    }));

    // Add distractor tiles for extra challenge (only if sentence is short)
    const distractors = getDistractorWords(correctWords.length <= 3 ? 2 : 1).map((d, i) => ({
      ...d,
      tileId: `distractor-${i}-${d.hanzi}`
    }));

    const allTiles = [...correctWords, ...distractors].sort(() => 0.5 - Math.random());

    setAvailableTiles(allTiles);
    setSelectedWords([]);
    setStatus('idle');
    setShowPinyinHint(false);
  };

  useEffect(() => {
    const list = getShuffledSentences(10);
    setSentences(list);
    setCurrentIndex(0);
    setScore(0);
    setIsCompleted(false);
    if (list.length > 0) {
      loadRound(list, 0);
    }
  }, []);

  const handleTileClick = (tile) => {
    if (status === 'correct') return;

    // Speak tile word
    speakChinese(tile.hanzi);

    // Remove from available, append to selected
    setAvailableTiles(prev => prev.filter(t => t.tileId !== tile.tileId));
    setSelectedWords(prev => [...prev, tile]);
    setStatus('idle');
  };

  const handleSelectedTileClick = (tile) => {
    if (status === 'correct') return;

    // Remove from selected, return to available
    setSelectedWords(prev => prev.filter(t => t.tileId !== tile.tileId));
    setAvailableTiles(prev => [...prev, tile]);
    setStatus('idle');
  };

  const handleCheckAnswer = () => {
    if (!currentSentence) return;

    const userHanzi = selectedWords.map(w => w.hanzi).join('');
    const targetHanzi = currentSentence.hanzi.replace(/[。？！，,.?!]/g, '').trim();
    const isRight = userHanzi === targetHanzi;

    if (isRight) {
      setStatus('correct');
      setScore(prev => prev + 10);
      speakChinese(currentSentence.hanzi);
    } else {
      setStatus('wrong');
    }
  };

  const handleNextSentence = () => {
    if (currentIndex + 1 >= sentences.length) {
      setIsCompleted(true);
    } else {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      loadRound(sentences, nextIdx);
    }
  };

  const restartGame = () => {
    const list = getShuffledSentences(10);
    setSentences(list);
    setCurrentIndex(0);
    setScore(0);
    setIsCompleted(false);
    if (list.length > 0) {
      loadRound(list, 0);
    }
  };

  if (!currentSentence && !isCompleted) {
    return (
      <div className="game-container">
        <div style={{ textAlign: 'center', padding: '40px' }}>กำลังโหลดคำถาม...</div>
      </div>
    );
  }

  return (
    <div className="game-container">
      {/* Header */}
      <div className="game-header">
        <button type="button" className="btn-back" onClick={onBack} title="ย้อนกลับ">
          <ArrowLeft size={20} />
        </button>

        <div className="game-title-group">
          <h2>💬 เกมเรียงประโยคภาษาจีน</h2>
          <span className="game-subtitle">ต่อบล็อกคำศัพท์เป็นประโยคที่ถูกต้อง</span>
        </div>

        <div className="score-badge">
          <Trophy size={16} className="text-amber" />
          <span>{score} คะแนน</span>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="sentence-progress-bar">
        <div
          className="sentence-progress-fill"
          style={{ width: `${((currentIndex + 1) / (sentences.length || 1)) * 100}%` }}
        />
      </div>

      {!isCompleted ? (
        <div className="sentence-game-card">
          {/* Target Thai Context / Sentence */}
          <div className="target-sentence-box">
            <span className="target-label">เป้าหมายภาษาไทย:</span>
            <h3 className="target-thai">{currentSentence.thaiMeaning}</h3>
            {currentSentence.context && (
              <span className="target-context">📍 บริบท: {currentSentence.context}</span>
            )}
          </div>

          {/* Assembly Slots Area */}
          <div className={`assembly-zone ${status}`}>
            <span className="zone-label">
              {selectedWords.length === 0 ? 'แตะคำศัพท์ด้านล่างเพื่อเรียงประโยค...' : 'ประโยคที่คุณเรียง:'}
            </span>

            <div className="tiles-container">
              {selectedWords.map((tile) => (
                <button
                  key={tile.tileId}
                  type="button"
                  className="word-chip active pop-in"
                  onClick={() => handleSelectedTileClick(tile)}
                >
                  <span className="chip-hanzi">{tile.hanzi}</span>
                  {showPinyinHint && <span className="chip-pinyin">{tile.pinyin}</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Banner */}
          {status === 'correct' && (
            <div className="feedback-banner success pop-in">
              <div className="feedback-content">
                <CheckCircle2 size={24} className="text-emerald" />
                <div>
                  <strong>ถูกต้องแล้ว! (Correct!) 🎉</strong>
                  <p>{currentSentence.hanzi} ({currentSentence.pinyin})</p>
                </div>
              </div>
              <button
                type="button"
                className="speak-sentence-btn"
                onClick={() => speakChinese(currentSentence.hanzi)}
              >
                <Volume2 size={18} />
                <span>ฟังเสียง</span>
              </button>
            </div>
          )}

          {status === 'wrong' && (
            <div className="feedback-banner error pop-in">
              <XCircle size={24} className="text-rose" />
              <div>
                <strong>ยังไม่ถูกต้องนะ ลองเรียงใหม่อีกครั้ง!</strong>
                <p>คำแนะนำ: สังเกตลำดับ ประธาน + กริยา + กรรม/สถานที่</p>
              </div>
            </div>
          )}

          {/* Available Tiles Bank */}
          <div className="tiles-bank-section">
            <div className="tiles-bank-header">
              <span>เลือกบล็อกคำศัพท์:</span>
              <button
                type="button"
                className="hint-toggle-btn"
                onClick={() => setShowPinyinHint(!showPinyinHint)}
              >
                <HelpCircle size={14} />
                <span>{showPinyinHint ? 'ซ่อน พินอิน' : 'ใบ้ พินอิน'}</span>
              </button>
            </div>

            <div className="tiles-bank-grid">
              {availableTiles.map((tile) => (
                <button
                  key={tile.tileId}
                  type="button"
                  className="word-chip idle"
                  onClick={() => handleTileClick(tile)}
                >
                  <span className="chip-hanzi">{tile.hanzi}</span>
                  {showPinyinHint && <span className="chip-pinyin">{tile.pinyin}</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="sentence-actions">
            {status !== 'correct' ? (
              <button
                type="button"
                className="btn-check-answer"
                disabled={selectedWords.length === 0}
                onClick={handleCheckAnswer}
              >
                <Sparkles size={18} />
                <span>ตรวจคำตอบ</span>
              </button>
            ) : (
              <button
                type="button"
                className="btn-next-sentence"
                onClick={handleNextSentence}
              >
                <span>ข้อถัดไป</span>
                <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Completion Screen */
        <div className="game-win-card pop-in">
          <div className="win-crown">
            <Trophy size={48} className="crown-icon pulse-glow" />
          </div>
          <h3>เก่งมาก! เรียงประโยคครบแล้ว 🔥</h3>
          <p>คุณฝึกเรียงประโยคภาษาจีนเรียบร้อย 10 ข้อ</p>

          <div className="final-score-box">
            <span>คะแนนรวมของคุณ</span>
            <strong>{score} / 100</strong>
          </div>

          <div className="win-actions">
            <button type="button" className="btn-primary-action" onClick={restartGame}>
              <RefreshCw size={18} />
              <span>เล่นใหม่อีกรอบ</span>
            </button>
            <button type="button" className="btn-secondary-action" onClick={onBack}>
              <ArrowLeft size={18} />
              <span>กลับสู่หน้าหลักมินิเกม</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
