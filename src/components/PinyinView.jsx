import React from 'react';
import { Volume2, Info } from 'lucide-react';
import { PINYIN_TONES, INITIALS, FINALS_SINGLE } from '../data/pinyinData';
import { speakChinese } from '../utils/speech';

export default function PinyinView() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Overview Intro Banner */}
      <div className="card" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '0.95rem' }}>
          <Info size={18} color="var(--accent-blue)" />
          <span>คู่มือระบบพินอิน (Pinyin Guide)</span>
        </div>
        <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
          พินอินเป็นระบบถ่ายทอดเสียงภาษาจีนกลางด้วยอักษรโรมัน ประกอบด้วย **วรรณยุกต์ (4 เสียง + เสียงเบา)**, **พยัญชนะ (声母)** และ **สระ (韵母)**
        </p>
      </div>

      {/* Tone Rules Section */}
      <div className="section-title">
        <span>วรรณยุกต์ 4 เสียงหลัก</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {PINYIN_TONES.map((t) => (
          <div key={t.tone} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{
                  fontFamily: 'var(--font-pinyin)',
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: 'var(--accent-blue)',
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {t.symbol}
                </span>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: '500' }}>{t.thaiEquivalent}</div>
                </div>
              </div>

              <button
                type="button"
                className="icon-btn"
                onClick={() => speakChinese(t.example.split(' ')[0], 0.8)}
                title="ฟังเสียงตัวอย่าง"
              >
                <Volume2 size={18} />
              </button>
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              {t.description}
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: '500', color: 'var(--accent-primary)' }}>
              ตัวอย่าง: {t.example}
            </div>
          </div>
        ))}
      </div>

      {/* Initials Chart */}
      <div className="section-title" style={{ marginTop: '8px' }}>
        <span>พยัญชนะ (Initials) - แตะเพื่อฟังเสียง</span>
      </div>

      <div className="pinyin-grid">
        {INITIALS.map((item, idx) => (
          <div
            key={idx}
            className="pinyin-cell"
            onClick={() => speakChinese(item.pinyin + 'a', 0.8)}
          >
            <span className="pinyin-cell-py">{item.pinyin}</span>
            <span className="pinyin-cell-th">{item.thai}</span>
          </div>
        ))}
      </div>

      {/* Single Finals Chart */}
      <div className="section-title" style={{ marginTop: '8px' }}>
        <span>สระเดี่ยว (Single Finals)</span>
      </div>

      <div className="pinyin-grid">
        {FINALS_SINGLE.map((item, idx) => (
          <div
            key={idx}
            className="pinyin-cell"
            onClick={() => speakChinese(item.pinyin, 0.8)}
          >
            <span className="pinyin-cell-py">{item.pinyin}</span>
            <span className="pinyin-cell-th">{item.thai}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
