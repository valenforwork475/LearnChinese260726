import React, { useState } from 'react';
import { Volume2, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { speakChinese } from '../utils/speech';

export default function SentenceCard({ item, audioRate = 0.9 }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWords, setShowWords] = useState(false);
  const [isPracticed, setIsPracticed] = useState(false);

  const handlePlayAudio = (e) => {
    e.stopPropagation();
    setIsPlaying(true);
    speakChinese(item.hanzi, audioRate);
    setTimeout(() => setIsPlaying(false), 1500);
  };

  const togglePracticed = (e) => {
    e.stopPropagation();
    setIsPracticed(!isPracticed);
  };

  return (
    <div className={`card ${isPracticed ? 'practiced-card' : ''}`}>
      <div className="card-header">
        <span className="context-tag">{item.context}</span>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button
            type="button"
            className="icon-btn"
            onClick={togglePracticed}
            title={isPracticed ? 'ฝึกแล้ว' : 'ทำเครื่องหมายว่าฝึกแล้ว'}
            style={{ width: '32px', height: '32px', border: 'none', background: isPracticed ? 'var(--bg-subtle)' : 'transparent' }}
          >
            <CheckCircle size={18} color={isPracticed ? 'var(--accent-emerald)' : 'var(--text-subtle)'} />
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={handlePlayAudio}
            title="ฟังเสียงอ่านจีน"
          >
            <Volume2 size={20} color={isPlaying ? 'var(--accent-blue)' : 'var(--text-main)'} />
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div className="hanzi-text">{item.hanzi}</div>
        <div className="pinyin-text">{item.pinyin}</div>
        <div className="thai-reading-text">อ่าน: {item.thaiReading}</div>
        <div className="thai-meaning-text">แปล: {item.thaiMeaning}</div>
      </div>

      {item.words && item.words.length > 0 && (
        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '8px', marginTop: '4px' }}>
          <button
            type="button"
            onClick={() => setShowWords(!showWords)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '0.78rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              padding: '2px 0'
            }}
          >
            <span>แกะคำศัพท์ในประโยค ({item.words.length})</span>
            {showWords ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {showWords && (
            <div className="word-chips-container">
              {item.words.map((w, idx) => (
                <div key={idx} className="word-chip">
                  <span className="word-chip-hanzi">{w.hanzi}</span>
                  <span style={{ color: 'var(--accent-blue)', fontWeight: '500' }}>({w.pinyin})</span>
                  <span className="word-chip-reading">: {w.thaiMeaning}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
