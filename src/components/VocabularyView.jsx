import React, { useState } from 'react';
import { Search, Volume2, Layers, List, Brain, Check, RefreshCw, Award, ArrowRight, Play, RotateCcw } from 'lucide-react';
import { VOCAB_SETS, vocabularyList } from '../data/vocabularyData';
import { speakChinese } from '../utils/speech';
import { getWordProgress, markWordProgress, getMemoryStats } from '../utils/srsEngine';

export default function VocabularyView() {
  const [selectedSet, setSelectedSet] = useState('set_1'); // Default to Set 1 (10 words)
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('flashcard'); // 'flashcard' | 'list'
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [sessionStats, setSessionStats] = useState({ remembered: 0, forgotten: 0 });
  const [srsTick, setSrsTick] = useState(0);

  // Overall Memory Stats
  const globalStats = getMemoryStats(vocabularyList);

  // Filter vocabulary list by selected set (default 10 words per set)
  const setVocabList = vocabularyList.filter(item => {
    if (selectedSet === 'all') return true;
    return item.setId === selectedSet;
  });

  const filteredVocab = setVocabList.filter(item => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      item.hanzi.includes(q) ||
      item.pinyin.toLowerCase().includes(q) ||
      item.thaiReading.includes(q) ||
      item.thaiMeaning.includes(q)
    );
  });

  const currentFlashcard = filteredVocab[flashcardIndex] || null;

  const handleSRSMark = (wordId, remembered) => {
    markWordProgress(wordId, remembered);
    setSrsTick(prev => prev + 1);
    setIsFlipped(false);

    // Update Session Stats
    setSessionStats(prev => ({
      remembered: remembered ? prev.remembered + 1 : prev.remembered,
      forgotten: !remembered ? prev.forgotten + 1 : prev.forgotten
    }));

    // Check if finished current 10-word session
    if (flashcardIndex + 1 >= filteredVocab.length) {
      setSessionCompleted(true);
    } else {
      setFlashcardIndex(prev => prev + 1);
    }
  };

  const resetSession = (newSetId = selectedSet) => {
    setSelectedSet(newSetId);
    setFlashcardIndex(0);
    setIsFlipped(false);
    setSessionCompleted(false);
    setSessionStats({ remembered: 0, forgotten: 0 });
  };

  const handleNextSet = () => {
    const sets = ['set_1', 'set_2', 'set_3'];
    const currIndex = sets.indexOf(selectedSet);
    const nextIndex = (currIndex + 1) % sets.length;
    resetSession(sets[nextIndex]);
  };

  const renderLevelBadge = (wordId) => {
    const prog = getWordProgress(wordId);
    const lvl = prog.level;
    const labels = [
      { text: 'คำใหม่/ลืม', bg: '#FFE4E6', color: '#BE123C' },
      { text: 'ทวนถัดไป 1 วัน', bg: '#FEF3C7', color: '#B45309' },
      { text: 'ทวนถัดไป 3 วัน', bg: '#E0F2FE', color: '#0369A1' },
      { text: 'ทวนถัดไป 7 วัน', bg: '#D1FAE5', color: '#047857' },
      { text: 'จำแม่นยำ (14 วัน)', bg: '#DCFCE7', color: '#15803D' }
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
            <span>พัฒนาการความจำรวม (Memory Tracker)</span>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#6EE7B7' }}>
            {globalStats.progressPercent}% สำเร็จ
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
            <span className="stat-chip-lbl">จำได้แม่นยำ</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip-val" style={{ color: '#FBBF24' }}>{globalStats.learningCount}</span>
            <span className="stat-chip-lbl">กำลังฝึกฝน</span>
          </div>
          <div className="stat-chip">
            <span className="stat-chip-val" style={{ color: '#F87171' }}>{globalStats.newOrHardCount}</span>
            <span className="stat-chip-lbl">ยังจำไม่ได้/คำใหม่</span>
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
              resetSession(selectedSet);
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
          title={viewMode === 'flashcard' ? 'สลับเป็นโหมดรายการคำศัพท์' : 'สลับเป็นโหมด Flashcards'}
          style={{ borderRadius: 'var(--radius-md)', width: '44px', height: '44px', flexShrink: 0 }}
        >
          {viewMode === 'flashcard' ? <List size={18} /> : <Layers size={18} />}
        </button>
      </div>

      {/* 10-Word Set Selector Pills */}
      <div className="category-scroll">
        {VOCAB_SETS.map(s => (
          <button
            key={s.id}
            type="button"
            className={`pill-btn ${selectedSet === s.id ? 'active' : ''}`}
            onClick={() => resetSession(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Section Title & Session Progress */}
      <div className="section-title">
        <span>{viewMode === 'flashcard' ? 'เกมฝึกคำศัพท์ 10 คำ' : 'รายการคำศัพท์ทั้งหมด'}</span>
        <span className="count-badge">
          {viewMode === 'flashcard'
            ? `คำที่ ${Math.min(flashcardIndex + 1, filteredVocab.length)} / ${filteredVocab.length}`
            : `ทั้งหมด ${filteredVocab.length} คำ`}
        </span>
      </div>

      {filteredVocab.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '30px 16px', color: 'var(--text-muted)' }}>
          ไม่พบคำศัพท์ในเซกชันนี้
        </div>
      ) : viewMode === 'flashcard' ? (
        /* --- 10-WORD SESSION FLASHCARD GAME MODE --- */
        sessionCompleted ? (
          /* --- SESSION VICTORY SUMMARY CARD --- */
          <div className="card" style={{ textAlign: 'center', padding: '24px 18px', backgroundColor: 'var(--bg-subtle)', gap: '16px' }}>
            <div style={{ display: 'inline-flex', alignSelf: 'center', backgroundColor: '#EEF2FF', padding: '12px', borderRadius: 'var(--radius-full)' }}>
              <Award size={36} color="var(--accent-primary)" />
            </div>

            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)' }}>
                เก่งมาก! จบการฝึก 10 คำแล้ว
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                ทบทวนรอบนี้ช่วยเพิ่มความจำในสมองอย่างยั่งยืน
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
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>ต้องฝึกซ้ำ</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
              <button
                type="button"
                className="pill-btn active"
                onClick={handleNextSet}
                style={{ padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.9rem' }}
              >
                <span>ลุยเซกชันถัดไป (10 คำถัดไป)</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                className="pill-btn"
                onClick={() => resetSession(selectedSet)}
                style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.85rem' }}
              >
                <RotateCcw size={14} />
                <span>เล่นซ้ำ 10 คำนี้อีกครั้ง</span>
              </button>
            </div>
          </div>
        ) : (
          /* --- FLASHCARD ITEM CARD (Pinyin & Thai Phonetics ON FRONT) --- */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="flashcard-wrapper">
              <div className="flashcard" onClick={() => setIsFlipped(!isFlipped)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <span className="flashcard-hint">
                    {isFlipped ? 'แตะเพื่อซ่อนคำแปล' : 'แตะเพื่อดูคำแปลไทย'}
                  </span>
                  {currentFlashcard && renderLevelBadge(currentFlashcard.id)}
                </div>

                {/* --- FRONT OF CARD (Shows Hanzi + Pinyin + Thai Reading) --- */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', margin: '10px 0' }}>
                  <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-chinese)', fontWeight: '600', color: 'var(--text-main)' }}>
                    {currentFlashcard.hanzi}
                  </div>
                  <div className="pinyin-text" style={{ fontSize: '1.3rem', fontWeight: '700' }}>
                    {currentFlashcard.pinyin}
                  </div>
                  <div className="thai-reading-text" style={{ fontSize: '1.05rem', fontWeight: '600' }}>
                    คำอ่าน: {currentFlashcard.thaiReading}
                  </div>
                </div>

                {/* --- BACK OF CARD (Flips to show Meaning & Example) --- */}
                {isFlipped ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', animation: 'fadeIn 0.2s ease', width: '100%' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)', backgroundColor: '#EEF2FF', padding: '6px 12px', borderRadius: 'var(--radius-sm)' }}>
                      แปลว่า: {currentFlashcard.thaiMeaning}
                    </div>

                    {currentFlashcard.example && (
                      <div style={{ marginTop: '8px', fontSize: '0.84rem', background: 'var(--bg-subtle)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', textAlign: 'left', border: '1px solid var(--border-light)' }}>
                        <div style={{ fontFamily: 'var(--font-chinese)', color: 'var(--text-main)', fontWeight: '600' }}>{currentFlashcard.example.hanzi}</div>
                        <div style={{ color: 'var(--accent-blue)', fontWeight: '600' }}>{currentFlashcard.example.pinyin}</div>
                        <div style={{ color: 'var(--accent-emerald)', fontWeight: '500' }}>คำอ่าน: {currentFlashcard.example.thaiReading}</div>
                        <div style={{ color: 'var(--text-muted)', marginTop: '2px' }}>แปล: {currentFlashcard.example.thaiMeaning}</div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-subtle)' }}>
                    (แตะการ์ดเพื่อเปิดดูคำแปลและประโยคตัวอย่าง)
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

            {/* SRS Memory Marking Action Buttons */}
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
                <span>ยังจำไม่ได้ (ทวนซ้ำ)</span>
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
                <span>จำได้แล้ว! (+ระดับ)</span>
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

              <div className="thai-reading-text">อ่าน: {item.thaiReading}</div>
              <div className="thai-meaning-text">แปล: {item.thaiMeaning}</div>

              {item.example && (
                <div style={{ borderTop: '1px dashed var(--border-light)', paddingTop: '8px', fontSize: '0.82rem' }}>
                  <span style={{ fontWeight: '600', color: 'var(--text-muted)' }}>ตัวอย่าง: </span>
                  <span style={{ fontFamily: 'var(--font-chinese)', fontWeight: '600' }}>{item.example.hanzi}</span>
                  <span style={{ color: 'var(--accent-blue)', marginLeft: '6px' }}>({item.example.pinyin})</span>
                  <div style={{ color: 'var(--text-muted)', marginTop: '2px' }}>คำอ่าน: {item.example.thaiReading} — {item.example.thaiMeaning}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
