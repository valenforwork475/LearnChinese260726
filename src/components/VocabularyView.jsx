import React, { useState } from 'react';
import { Search, Volume2, Layers, List, Check, RefreshCw, Award, ArrowRight, RotateCcw } from 'lucide-react';
import { vocabularyList } from '../data/vocabularyData';
import { speakChinese } from '../utils/speech';
import { getWordProgress, markWordProgress, getMemoryStats, getDueWords } from '../utils/srsEngine';

export default function VocabularyView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('flashcard');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [sessionStats, setSessionStats] = useState({ remembered: 0, forgotten: 0 });
  const [srsTick, setSrsTick] = useState(0);

  // Overall Memory Stats
  const globalStats = getMemoryStats(vocabularyList);

  // Dynamic Auto-Queue Deck: Filtered by search or seamless full list
  const filteredVocab = vocabularyList.filter(item => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      item.hanzi.includes(q) ||
      item.pinyin.toLowerCase().includes(q) ||
      item.thaiMeaning.includes(q)
    );
  });

  const currentFlashcard = filteredVocab[flashcardIndex] || null;

  const handleSRSMark = (wordId, remembered) => {
    markWordProgress(wordId, remembered);
    setSrsTick(prev => prev + 1);
    setIsFlipped(false);

    setSessionStats(prev => ({
      remembered: remembered ? prev.remembered + 1 : prev.remembered,
      forgotten: !remembered ? prev.forgotten + 1 : prev.forgotten
    }));

    if (flashcardIndex + 1 >= filteredVocab.length) {
      setSessionCompleted(true);
    } else {
      setFlashcardIndex(prev => prev + 1);
    }
  };

  const resetSession = () => {
    setFlashcardIndex(0);
    setIsFlipped(false);
    setSessionCompleted(false);
    setSessionStats({ remembered: 0, forgotten: 0 });
  };

  const renderLevelBadge = (wordId) => {
    const prog = getWordProgress(wordId);
    const lvl = prog.level;
    const labels = [
      { text: 'คำใหม่', bg: '#FFE4E6', color: '#BE123C' },
      { text: '1 วัน', bg: '#FEF3C7', color: '#B45309' },
      { text: '3 วัน', bg: '#E0F2FE', color: '#0369A1' },
      { text: '7 วัน', bg: '#D1FAE5', color: '#047857' },
      { text: 'แม่นยำ', bg: '#DCFCE7', color: '#15803D' }
    ];
    const badge = labels[lvl] || labels[0];

    return (
      <span style={{
        fontSize: '0.72rem',
        fontWeight: '700',
        padding: '3px 10px',
        borderRadius: 'var(--radius-full)',
        backgroundColor: badge.bg,
        color: badge.color
      }}>
        {badge.text}
      </span>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Overall Progress Tracker Banner */}
      <div className="memory-dashboard">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '0.95rem' }}>
            <Award size={18} color="#6EE7B7" />
            <span>ความก้าวหน้าความจำ ({vocabularyList.length} คำ)</span>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#6EE7B7' }}>
            {globalStats.progressPercent}%
          </span>
        </div>

        <div className="memory-progress-bar-bg">
          <div
            className="memory-progress-bar-fill"
            style={{ width: `${globalStats.progressPercent}%` }}
          />
        </div>

        <div className="stat-chip-grid">
          <div className="stat-chip">
            <span className="stat-chip-val" style={{ color: '#34D399' }}>{globalStats.masteredCount}</span>
            <span className="stat-chip-lbl">จำได้แล้ว</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip-val" style={{ color: '#FBBF24' }}>{globalStats.learningCount}</span>
            <span className="stat-chip-lbl">กำลังเรียน</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip-val" style={{ color: '#F87171' }}>{globalStats.newOrHardCount}</span>
            <span className="stat-chip-lbl">ยังไม่ได้</span>
          </div>
        </div>
      </div>

      {/* Search & View Mode Switcher */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div className="search-input-wrapper" style={{ flex: 1 }}>
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="ค้นคำศัพท์, พินอิน หรือคำแปล..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              resetSession();
            }}
          />
        </div>

        <button
          type="button"
          className="icon-btn"
          onClick={() => {
            setViewMode(viewMode === 'flashcard' ? 'list' : 'flashcard');
            setIsFlipped(false);
          }}
          title={viewMode === 'flashcard' ? 'สลับเป็นรายการคำศัพท์' : 'สลับเป็น Flashcards'}
          style={{ borderRadius: 'var(--radius-md)', width: '44px', height: '44px', flexShrink: 0 }}
        >
          {viewMode === 'flashcard' ? <List size={18} /> : <Layers size={18} />}
        </button>
      </div>

      {/* Section Title & Progress Indicator */}
      <div className="section-title">
        <span>{viewMode === 'flashcard' ? 'บัตรคำศัพท์ความจำ (Auto-Queue Deck)' : 'รายการคำศัพท์ทั้งหมด'}</span>
        <span className="count-badge">
          {viewMode === 'flashcard'
            ? `คำที่ ${Math.min(flashcardIndex + 1, filteredVocab.length)} / ${filteredVocab.length}`
            : `แสดง ${filteredVocab.length} คำ`}
        </span>
      </div>

      {filteredVocab.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '30px 16px', color: 'var(--text-muted)' }}>
          ไม่พบคำศัพท์ที่ตรงกับการค้นหา
        </div>
      ) : viewMode === 'flashcard' ? (
        /* --- CONTINUOUS SRS FLASHCARD DECK --- */
        sessionCompleted ? (
          /* --- SESSION VICTORY SUMMARY CARD --- */
          <div className="card" style={{ textAlign: 'center', padding: '24px 18px', backgroundColor: 'var(--bg-subtle)', gap: '16px' }}>
            <div style={{ display: 'inline-flex', alignSelf: 'center', backgroundColor: '#EEF2FF', padding: '12px', borderRadius: 'var(--radius-full)' }}>
              <Award size={36} color="var(--accent-primary)" />
            </div>

            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)' }}>
                เยี่ยมมาก! ทบทวนครบทุกคำในสำรับแล้ว
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                คำที่จำได้แล้วจะขยับไปอยู่ในกล่องความจำระยะยาวโดยอัตโนมัติ
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', backgroundColor: '#FFFFFF', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-emerald)' }}>
                  {sessionStats.remembered} คำ
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>จำได้แล้ว</div>
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-rose)' }}>
                  {sessionStats.forgotten} คำ
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>จำไม่ได้</div>
              </div>
            </div>

            <button
              type="button"
              className="pill-btn active"
              onClick={resetSession}
              style={{ padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.9rem', marginTop: '6px' }}
            >
              <RotateCcw size={16} />
              <span>เริ่มทบทวนสำรับอีกครั้ง</span>
            </button>
          </div>
        ) : (
          /* --- FLASHCARD ITEM CARD (Pinyin + Hanzi ONLY) --- */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="flashcard-wrapper">
              <div className="flashcard" onClick={() => setIsFlipped(!isFlipped)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <span className="flashcard-hint">
                    {isFlipped ? 'แตะเพื่อซ่อนคำแปล' : 'แตะเพื่อดูคำแปล'}
                  </span>
                  {currentFlashcard && renderLevelBadge(currentFlashcard.id)}
                </div>

                {/* --- FRONT OF CARD (Hanzi + Pinyin ONLY) --- */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', margin: '14px 0' }}>
                  <div style={{ fontSize: '2.6rem', fontFamily: 'var(--font-chinese)', fontWeight: '600', color: 'var(--text-main)' }}>
                    {currentFlashcard.hanzi}
                  </div>
                  <div className="pinyin-text" style={{ fontSize: '1.35rem', fontWeight: '700' }}>
                    {currentFlashcard.pinyin}
                  </div>
                </div>

                {/* --- BACK OF CARD (Thai Meaning + Example) --- */}
                {isFlipped ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', animation: 'fadeIn 0.2s ease', width: '100%' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)', backgroundColor: '#EEF2FF', padding: '8px 14px', borderRadius: 'var(--radius-sm)' }}>
                      แปลว่า: {currentFlashcard.thaiMeaning}
                    </div>

                    {currentFlashcard.example && (
                      <div style={{ marginTop: '8px', fontSize: '0.84rem', background: 'var(--bg-subtle)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', textAlign: 'left', border: '1px solid var(--border-light)' }}>
                        <div style={{ fontFamily: 'var(--font-chinese)', color: 'var(--text-main)', fontWeight: '600' }}>{currentFlashcard.example.hanzi}</div>
                        <div style={{ color: 'var(--accent-blue)', fontWeight: '600' }}>{currentFlashcard.example.pinyin}</div>
                        <div style={{ color: 'var(--text-muted)', marginTop: '2px' }}>แปล: {currentFlashcard.example.thaiMeaning}</div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-subtle)' }}>
                    (แตะการ์ดเพื่อเปิดดูคำแปล)
                  </div>
                )}

                <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }} onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    className="icon-btn"
                    onClick={() => speakChinese(currentFlashcard.hanzi, 0.8)}
                    title="ฟังเสียงอ่านคำศัพท์"
                  >
                    <Volume2 size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Clean SRS Memory Marking Action Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '4px' }}>
              <button
                type="button"
                className="pill-btn"
                onClick={() => handleSRSMark(currentFlashcard.id, false)}
                style={{
                  backgroundColor: '#FFE4E6',
                  color: '#BE123C',
                  borderColor: '#FDA4AF',
                  padding: '12px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <RefreshCw size={14} />
                <span>จำไม่ได้</span>
              </button>

              <button
                type="button"
                className="pill-btn"
                onClick={() => handleSRSMark(currentFlashcard.id, true)}
                style={{
                  backgroundColor: '#D1FAE5',
                  color: '#047857',
                  borderColor: '#6EE7B7',
                  padding: '12px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <Check size={16} />
                <span>จำได้แล้ว</span>
              </button>
            </div>
          </div>
        )
      ) : (
        /* --- LIST MODE --- */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredVocab.map(item => (
            <div key={item.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="hanzi-text" style={{ fontSize: '1.4rem' }}>{item.hanzi}</div>
                    {renderLevelBadge(item.id)}
                  </div>
                  <div className="pinyin-text">{item.pinyin}</div>
                </div>

                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => speakChinese(item.hanzi, 0.8)}
                  title="ฟังเสียงอ่าน"
                >
                  <Volume2 size={18} />
                </button>
              </div>

              <div className="thai-meaning-text">แปล: {item.thaiMeaning}</div>

              {item.example && (
                <div style={{ borderTop: '1px dashed var(--border-light)', paddingTop: '8px', fontSize: '0.82rem' }}>
                  <span style={{ fontWeight: '600', color: 'var(--text-muted)' }}>ตัวอย่าง: </span>
                  <span style={{ fontFamily: 'var(--font-chinese)', fontWeight: '600' }}>{item.example.hanzi}</span>
                  <span style={{ color: 'var(--accent-blue)', marginLeft: '6px' }}>({item.example.pinyin})</span>
                  <div style={{ color: 'var(--text-muted)', marginTop: '2px' }}>แปล: {item.example.thaiMeaning}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
