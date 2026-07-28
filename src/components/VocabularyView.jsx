import React, { useState, useEffect } from 'react';
import { Search, Volume2, Layers, List, Check, RefreshCw, Award, ArrowRight, RotateCcw, Home, BookOpen, Filter } from 'lucide-react';
import { vocabularyList } from '../data/vocabularyData';
import { speakChinese } from '../utils/speech';
import { getWordProgress, markWordProgress, getMemoryStats } from '../utils/srsEngine';

export default function VocabularyView({ onGoHome }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Persist View Mode, Filter Category, Session Offset, and Flashcard Index in localStorage
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem('sinostep_vocab_view_mode') || 'flashcard';
  });

  const [filterCategory, setFilterCategory] = useState(() => {
    return localStorage.getItem('sinostep_vocab_filter_category') || 'all'; // 'all' | 'remembered' | 'learning' | 'new'
  });

  const [sessionOffset, setSessionOffset] = useState(() => {
    const saved = localStorage.getItem('sinostep_vocab_session_offset');
    return saved !== null ? Math.max(0, parseInt(saved, 10)) : 0;
  });

  const [flashcardIndex, setFlashcardIndex] = useState(() => {
    const saved = localStorage.getItem('sinostep_vocab_flashcard_index');
    return saved !== null ? Math.max(0, parseInt(saved, 10)) : 0;
  });

  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [sessionStats, setSessionStats] = useState({ remembered: 0, forgotten: 0 });
  const [srsTick, setSrsTick] = useState(0);

  // Sync state to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('sinostep_vocab_view_mode', viewMode);
  }, [viewMode]);

  useEffect(() => {
    localStorage.setItem('sinostep_vocab_filter_category', filterCategory);
  }, [filterCategory]);

  useEffect(() => {
    localStorage.setItem('sinostep_vocab_session_offset', sessionOffset.toString());
  }, [sessionOffset]);

  useEffect(() => {
    localStorage.setItem('sinostep_vocab_flashcard_index', flashcardIndex.toString());
  }, [flashcardIndex]);

  // Overall Memory Stats
  const globalStats = getMemoryStats(vocabularyList);

  // Filtered list based on Search Query AND Filter Category (All / Remembered / Learning / New)
  const filteredVocab = vocabularyList.filter(item => {
    // 1. Search Query filter
    const q = searchQuery.toLowerCase().trim();
    if (q) {
      const matchSearch = (
        item.hanzi.includes(q) ||
        item.pinyin.toLowerCase().includes(q) ||
        item.thaiMeaning.includes(q)
      );
      if (!matchSearch) return false;
    }

    // 2. Filter Category match (Remembered: level >= 1, Learning: level 1-2, New: level 0)
    const prog = getWordProgress(item.id);
    const lvl = prog ? prog.level : 0;

    if (filterCategory === 'remembered') {
      return lvl >= 1; // Words marked remembered at least once
    }
    if (filterCategory === 'learning') {
      return lvl >= 1 && lvl < 3; // Words being learned
    }
    if (filterCategory === 'new') {
      return lvl === 0; // New or hard words
    }
    return true; // 'all'
  });

  // Safe offset & card index bounds
  const maxOffset = Math.max(0, Math.floor(Math.max(0, filteredVocab.length - 1) / 10) * 10);
  const safeSessionOffset = Math.min(sessionOffset, maxOffset);
  const sessionCards = filteredVocab.slice(safeSessionOffset, safeSessionOffset + 10);
  const safeFlashcardIndex = Math.min(flashcardIndex, Math.max(0, sessionCards.length - 1));
  const currentFlashcard = sessionCards[safeFlashcardIndex] || null;

  // Change Filter Category Handler
  const handleSelectFilter = (category) => {
    setFilterCategory(category);
    setSessionOffset(0);
    setFlashcardIndex(0);
    setIsFlipped(false);
    setSessionCompleted(false);
    setSessionStats({ remembered: 0, forgotten: 0 });
  };

  // Prefer reviewed situational examples when available.
  const getExamples = (word) => {
    if (!word) return [];
    if (Array.isArray(word.examples) && word.examples.length > 0) {
      return word.examples;
    }
    if (word.example) {
      return [word.example];
    }
    return [];
  };

  const handleSRSMark = (wordId, remembered) => {
    markWordProgress(wordId, remembered);
    setSrsTick(prev => prev + 1);
    setIsFlipped(false);

    setSessionStats(prev => ({
      remembered: remembered ? prev.remembered + 1 : prev.remembered,
      forgotten: !remembered ? prev.forgotten + 1 : prev.forgotten
    }));

    if (safeFlashcardIndex + 1 >= sessionCards.length) {
      setSessionCompleted(true);
    } else {
      setFlashcardIndex(prev => prev + 1);
    }
  };

  const restartCurrentSession = () => {
    setFlashcardIndex(0);
    setIsFlipped(false);
    setSessionCompleted(false);
    setSessionStats({ remembered: 0, forgotten: 0 });
  };

  const resetToFirstWord = () => {
    setSessionOffset(0);
    setFlashcardIndex(0);
    setIsFlipped(false);
    setSessionCompleted(false);
    setSessionStats({ remembered: 0, forgotten: 0 });
  };

  const handleNext10Words = () => {
    const nextOffset = safeSessionOffset + 10 >= filteredVocab.length ? 0 : safeSessionOffset + 10;
    setSessionOffset(nextOffset);
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

  const currentGlobalWordIndex = safeSessionOffset + safeFlashcardIndex + 1;

  const getFilterCategoryTitle = () => {
    switch (filterCategory) {
      case 'remembered': return `หมวดทบทวนคำศัพท์ที่จำได้แล้ว (${filteredVocab.length} คำ)`;
      case 'learning': return `หมวดคำศัพท์กำลังเรียน (${filteredVocab.length} คำ)`;
      case 'new': return `หมวดคำศัพท์ยังไม่ได้ / คำใหม่ (${filteredVocab.length} คำ)`;
      default: return `คำศัพท์ทั้งหมด (${vocabularyList.length} คำ)`;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Overall Progress Tracker Banner with Interactive Stat Chips */}
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

        {/* Interactive Stat Chips: Tap to filter */}
        <div className="stat-chip-grid">
          <div
            className={`stat-chip ${filterCategory === 'remembered' ? 'active' : ''}`}
            onClick={() => handleSelectFilter('remembered')}
            style={{
              cursor: 'pointer',
              border: filterCategory === 'remembered' ? '2px solid #34D399' : '1px solid transparent',
              backgroundColor: filterCategory === 'remembered' ? 'rgba(52, 211, 153, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              transition: 'all 0.15s ease'
            }}
            title="กดเพื่อดู/ทบทวนคำศัพท์ที่จำได้แล้ว"
          >
            <span className="stat-chip-val" style={{ color: '#34D399' }}>{globalStats.rememberedCount}</span>
            <span className="stat-chip-lbl">จำได้แล้ว (กดทบทวน)</span>
          </div>

          <div
            className={`stat-chip ${filterCategory === 'learning' ? 'active' : ''}`}
            onClick={() => handleSelectFilter('learning')}
            style={{
              cursor: 'pointer',
              border: filterCategory === 'learning' ? '2px solid #FBBF24' : '1px solid transparent',
              backgroundColor: filterCategory === 'learning' ? 'rgba(251, 191, 36, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              transition: 'all 0.15s ease'
            }}
            title="กดเพื่อดูคำศัพท์กำลังเรียน"
          >
            <span className="stat-chip-val" style={{ color: '#FBBF24' }}>{globalStats.learningCount}</span>
            <span className="stat-chip-lbl">กำลังเรียน</span>
          </div>

          <div
            className={`stat-chip ${filterCategory === 'new' ? 'active' : ''}`}
            onClick={() => handleSelectFilter('new')}
            style={{
              cursor: 'pointer',
              border: filterCategory === 'new' ? '2px solid #F87171' : '1px solid transparent',
              backgroundColor: filterCategory === 'new' ? 'rgba(248, 113, 113, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              transition: 'all 0.15s ease'
            }}
            title="กดเพื่อดูคำศัพท์ยังไม่ได้"
          >
            <span className="stat-chip-val" style={{ color: '#F87171' }}>{globalStats.newOrHardCount}</span>
            <span className="stat-chip-lbl">ยังไม่ได้</span>
          </div>
        </div>
      </div>

      {/* Resume Progress Status Indicator Banner */}
      <div className="card" style={{ backgroundColor: '#EEF2FF', border: '1px solid #C7D2FE', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--accent-primary)', fontWeight: '600' }}>
          <BookOpen size={16} />
          <span>{getFilterCategoryTitle()} - เรียนถึงคำที่ <strong>{currentGlobalWordIndex}</strong> / {filteredVocab.length || 1}</span>
        </div>
        {currentGlobalWordIndex > 1 && (
          <button
            type="button"
            onClick={resetToFirstWord}
            style={{ border: 'none', background: 'transparent', color: '#6366F1', fontSize: '0.78rem', fontWeight: '700', textDecoration: 'underline', cursor: 'pointer' }}
          >
            เริ่มจากคำที่ 1
          </button>
        )}
      </div>

      {/* Filter Mode Selector Pills */}
      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
        <button
          type="button"
          className={`pill-btn ${filterCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleSelectFilter('all')}
          style={{ padding: '6px 12px', fontSize: '0.8rem', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          <span>ทั้งหมด ({vocabularyList.length})</span>
        </button>

        <button
          type="button"
          className={`pill-btn ${filterCategory === 'remembered' ? 'active' : ''}`}
          onClick={() => handleSelectFilter('remembered')}
          style={{
            padding: '6px 12px',
            fontSize: '0.8rem',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: filterCategory === 'remembered' ? '#D1FAE5' : '#F3F4F6',
            color: filterCategory === 'remembered' ? '#047857' : '#374151',
            borderColor: filterCategory === 'remembered' ? '#6EE7B7' : 'transparent',
            fontWeight: filterCategory === 'remembered' ? '700' : '500'
          }}
        >
          <Check size={14} />
          <span>จำได้แล้ว ({globalStats.rememberedCount})</span>
        </button>

        <button
          type="button"
          className={`pill-btn ${filterCategory === 'learning' ? 'active' : ''}`}
          onClick={() => handleSelectFilter('learning')}
          style={{
            padding: '6px 12px',
            fontSize: '0.8rem',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: filterCategory === 'learning' ? '#FEF3C7' : '#F3F4F6',
            color: filterCategory === 'learning' ? '#B45309' : '#374151',
            borderColor: filterCategory === 'learning' ? '#FCD34D' : 'transparent',
            fontWeight: filterCategory === 'learning' ? '700' : '500'
          }}
        >
          <RefreshCw size={14} />
          <span>กำลังเรียน ({globalStats.learningCount})</span>
        </button>

        <button
          type="button"
          className={`pill-btn ${filterCategory === 'new' ? 'active' : ''}`}
          onClick={() => handleSelectFilter('new')}
          style={{
            padding: '6px 12px',
            fontSize: '0.8rem',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: filterCategory === 'new' ? '#FFE4E6' : '#F3F4F6',
            color: filterCategory === 'new' ? '#BE123C' : '#374151',
            borderColor: filterCategory === 'new' ? '#FDA4AF' : 'transparent',
            fontWeight: filterCategory === 'new' ? '700' : '500'
          }}
        >
          <span>ยังไม่ได้ ({globalStats.newOrHardCount})</span>
        </button>
      </div>

      {/* Search & View Mode Switcher */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div className="search-input-wrapper" style={{ flex: 1 }}>
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="ค้นคำศัพท์ 1,000 คำ..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSessionOffset(0);
              restartCurrentSession();
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
        <span>
          {viewMode === 'flashcard'
            ? `ทบทวนครั้งละ 10 คำ (คำที่ ${safeSessionOffset + 1} - ${Math.min(safeSessionOffset + 10, filteredVocab.length)})`
            : `รายการคำศัพท์ (แสดง ${filteredVocab.length} คำ)`}
        </span>
        <span className="count-badge">
          {viewMode === 'flashcard'
            ? `คำที่ ${Math.min(safeFlashcardIndex + 1, sessionCards.length)} / ${sessionCards.length}`
            : `แสดง ${filteredVocab.length} คำ`}
        </span>
      </div>

      {filteredVocab.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '30px 16px', color: 'var(--text-muted)', gap: '12px' }}>
          {filterCategory === 'remembered' ? (
            <>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)' }}>
                ยังไม่มีคำศัพท์ในหมวด "จำได้แล้ว"
              </div>
              <p style={{ fontSize: '0.85rem' }}>
                เมื่อคุณทบทวนคำศัพท์และกดปุ่ม <span style={{ color: '#047857', fontWeight: '700' }}>"จำได้แล้ว"</span> คำศัพท์เหล่านั้นจะถูกบันทึกไว้ที่นี่เพื่อให้คุณกลับมาทบทวนซ้ำได้ทุกเวลา!
              </p>
              <button
                type="button"
                className="pill-btn active"
                onClick={() => handleSelectFilter('all')}
                style={{ padding: '8px 16px', alignSelf: 'center', marginTop: '4px' }}
              >
                ดูคำศัพท์ทั้งหมดเพื่อเริ่มเรียน
              </button>
            </>
          ) : (
            <span>ไม่พบคำศัพท์ที่ตรงกับการค้นหา</span>
          )}
        </div>
      ) : viewMode === 'flashcard' ? (
        /* --- 10-WORD SESSION FLASHCARD GAME MODE --- */
        sessionCompleted ? (
          /* --- SESSION COMPLETION SUMMARY SCREEN --- */
          <div className="card" style={{ textAlign: 'center', padding: '24px 18px', backgroundColor: 'var(--bg-subtle)', gap: '16px' }}>
            <div style={{ display: 'inline-flex', alignSelf: 'center', backgroundColor: '#EEF2FF', padding: '12px', borderRadius: 'var(--radius-full)' }}>
              <Award size={36} color="var(--accent-primary)" />
            </div>

            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)' }}>
                เก่งมาก! เรียนจบเซกชัน 10 คำแล้ว
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                (คำที่ {safeSessionOffset + 1} - {safeSessionOffset + sessionCards.length} จากทั้งหมด {filteredVocab.length} คำ)
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

            {/* Action Buttons: Next 10 Words, Restart 10 Words, Back to Home */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
              <button
                type="button"
                className="pill-btn active"
                onClick={handleNext10Words}
                style={{ padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.9rem' }}
              >
                <span>เรียน 10 คำถัดไป</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                className="pill-btn"
                onClick={restartCurrentSession}
                style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.85rem' }}
              >
                <RotateCcw size={14} />
                <span>เริ่มใหม่ (ทวน 10 คำนี้อีกครั้ง)</span>
              </button>

              {onGoHome && (
                <button
                  type="button"
                  className="pill-btn"
                  onClick={onGoHome}
                  style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.85rem', backgroundColor: '#F3F4F6', color: '#374151' }}
                >
                  <Home size={14} />
                  <span>กลับหน้าหลัก (เลขาภาษาจีน)</span>
                </button>
              )}
            </div>
          </div>
        ) : (
          /* --- FLASHCARD ITEM CARD --- */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="flashcard-wrapper">
              <div className="flashcard" onClick={() => setIsFlipped(!isFlipped)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <span className="flashcard-hint">
                    {isFlipped ? 'แตะเพื่อซ่อนคำแปล' : 'แตะเพื่อดูคำแปล & ตัวอย่าง'}
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

                {/* --- BACK OF CARD (Thai Meaning + Multi-Context Examples) --- */}
                {isFlipped ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', animation: 'fadeIn 0.2s ease', width: '100%' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)', backgroundColor: '#EEF2FF', padding: '8px 14px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                      แปลว่า: {currentFlashcard.thaiMeaning}
                    </div>

                    {getExamples(currentFlashcard).length > 0 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '2px' }}>
                        <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--accent-blue)', textAlign: 'left' }}>
                          📍 ตัวอย่างประโยค:
                        </div>

                        {getExamples(currentFlashcard).map((ex, exIdx) => (
                          <div
                            key={exIdx}
                            style={{
                              fontSize: '0.84rem',
                              background: 'var(--bg-subtle)',
                              padding: '10px 12px',
                              borderRadius: 'var(--radius-sm)',
                              textAlign: 'left',
                              border: '1px solid var(--border-light)',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '3px'
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '6px' }}>
                              <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#4F46E5', backgroundColor: '#EEF2FF', padding: '3px 8px', borderRadius: '4px', lineHeight: '1.4', flex: 1 }}>
                                {ex.scenario ? `🎬 ${ex.scenario}` : `ตัวอย่างที่ ${exIdx + 1}`}
                              </span>
                              <button
                                type="button"
                                className="icon-btn"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  speakChinese(ex.hanzi, 0.8);
                                }}
                                title="ฟังเสียงอ่านประโยคตัวอย่างนี้"
                                style={{ width: '28px', height: '28px' }}
                              >
                                <Volume2 size={14} />
                              </button>
                            </div>

                            <div style={{ fontFamily: 'var(--font-chinese)', color: 'var(--text-main)', fontWeight: '600', fontSize: '1.02rem', marginTop: '2px' }}>
                              {ex.hanzi}
                            </div>
                            <div style={{ color: 'var(--accent-blue)', fontWeight: '600', fontSize: '0.86rem' }}>
                              {ex.pinyin}
                            </div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                              แปล: {ex.thaiMeaning}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-subtle)' }}>
                    (แตะการ์ดเพื่อดูคำแปลและตัวอย่างประโยค)
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

              {getExamples(item).length > 0 && (
                <div style={{ borderTop: '1px dashed var(--border-light)', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--accent-blue)' }}>
                    📍 ตัวอย่างประโยค:
                  </div>
                  {getExamples(item).map((ex, exIdx) => (
                    <div key={exIdx} style={{ backgroundColor: 'var(--bg-subtle)', padding: '8px 10px', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '2px', border: '1px solid var(--border-light)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '4px' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#4F46E5', flex: 1, lineHeight: '1.4' }}>{ex.scenario ? `🎬 ${ex.scenario}` : `ตัวอย่างที่ ${exIdx + 1}`}</span>
                        <button
                          type="button"
                          className="icon-btn"
                          onClick={() => speakChinese(ex.hanzi, 0.8)}
                          title="ฟังเสียงตัวอย่าง"
                          style={{ width: '24px', height: '24px' }}
                        >
                          <Volume2 size={12} />
                        </button>
                      </div>
                      <div style={{ fontFamily: 'var(--font-chinese)', fontWeight: '600', fontSize: '0.98rem' }}>{ex.hanzi}</div>
                      <div style={{ color: 'var(--accent-blue)', fontSize: '0.84rem' }}>{ex.pinyin}</div>
                      <div style={{ color: 'var(--text-muted)' }}>แปล: {ex.thaiMeaning}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
