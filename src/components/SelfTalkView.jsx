import React, { useState, useEffect } from 'react';
import { RefreshCw, Volume2, Sparkles, Gauge } from 'lucide-react';
import { SELF_TALK_CATEGORIES, selfTalkSentences, generateDynamicTimeSentence } from '../data/selfTalkData';
import SentenceCard from './SentenceCard';
import { speakChinese } from '../utils/speech';

export default function SelfTalkView() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [audioRate, setAudioRate] = useState(0.8);
  const [dynamicTimeObj, setDynamicTimeObj] = useState(generateDynamicTimeSentence());

  useEffect(() => {
    const timer = setInterval(() => {
      setDynamicTimeObj(generateDynamicTimeSentence());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  const refreshTime = () => {
    setDynamicTimeObj(generateDynamicTimeSentence(new Date()));
  };

  const filteredSentences = selectedCategory === 'all'
    ? selfTalkSentences
    : selfTalkSentences.filter(s => s.category === selectedCategory);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Real-time Dynamic Time Self-Talk Banner */}
      <div className="clock-banner">
        <div className="clock-banner-header">
          <span>เวลาเครื่องปัจจุบัน (ฝึกพูดบอกเวลา)</span>
          <button type="button" className="refresh-clock-btn" onClick={refreshTime}>
            <RefreshCw size={12} />
            <span>อัปเดตเวลา</span>
          </button>
        </div>

        <div className="clock-banner-hanzi">{dynamicTimeObj.hanzi}</div>
        <div className="clock-banner-pinyin">{dynamicTimeObj.pinyin}</div>
        <div className="clock-banner-thai">คำอ่าน: {dynamicTimeObj.thaiReading}</div>
        <div style={{ fontSize: '0.85rem', color: '#CBD5E1', fontWeight: '500' }}>แปล: {dynamicTimeObj.thaiMeaning}</div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
          <button
            type="button"
            className="refresh-clock-btn"
            onClick={() => speakChinese(dynamicTimeObj.hanzi, audioRate)}
          >
            <Volume2 size={14} />
            <span>ฟังเสียงพูดประโยคเวลานี้</span>
          </button>
        </div>
      </div>

      {/* Speed Selector & Header Title */}
      <div className="section-title" style={{ gap: '8px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={18} color="var(--accent-primary)" />
          <span>ประโยคสั้นฝึกพูดประจำวัน</span>
        </div>

        {/* Modern Segmented Capsule Speed Controller */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Gauge size={14} color="var(--text-muted)" />
          <div className="segmented-speed-control">
            <button
              type="button"
              className={`segmented-speed-btn ${audioRate === 0.6 ? 'active' : ''}`}
              onClick={() => setAudioRate(0.6)}
            >
              0.6x
            </button>
            <button
              type="button"
              className={`segmented-speed-btn ${audioRate === 0.8 ? 'active' : ''}`}
              onClick={() => setAudioRate(0.8)}
            >
              0.8x
            </button>
            <button
              type="button"
              className={`segmented-speed-btn ${audioRate === 1.0 ? 'active' : ''}`}
              onClick={() => setAudioRate(1.0)}
            >
              1.0x
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="category-scroll">
        {SELF_TALK_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            type="button"
            className={`pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Sentences List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filteredSentences.map(item => (
          <SentenceCard key={item.id} item={item} audioRate={audioRate} />
        ))}
      </div>
    </div>
  );
}
