import React, { useState, useEffect } from 'react';
import { Volume2, RefreshCw, Sliders, Settings, Check, UserCheck, MessageSquare } from 'lucide-react';
import { getSecretaryCheckIn } from '../data/secretaryData';
import { getUserSchedule, saveUserSchedule } from '../utils/userSettings';
import { speakChinese } from '../utils/speech';
import SentenceCard from './SentenceCard';
import { selfTalkSentences } from '../data/selfTalkData';

export default function SelfTalkView() {
  const [userSchedule, setUserSchedule] = useState(getUserSchedule());
  const [audioRate, setAudioRate] = useState(0.8);
  const [showSettings, setShowSettings] = useState(false);
  const [secretaryCheck, setSecretaryCheck] = useState(() => getSecretaryCheckIn(new Date(), getUserSchedule()));
  const [selectedReply, setSelectedReply] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecretaryCheck(getSecretaryCheckIn(new Date(), userSchedule));
    }, 30000);
    return () => clearInterval(timer);
  }, [userSchedule]);

  const handleRefreshCheck = () => {
    setSecretaryCheck(getSecretaryCheckIn(new Date(), userSchedule));
    setSelectedReply(null);
  };

  const handleSaveSchedule = (e) => {
    e.preventDefault();
    saveUserSchedule(userSchedule);
    setShowSettings(false);
    setSecretaryCheck(getSecretaryCheckIn(new Date(), userSchedule));
  };

  const handleSelectReply = (reply) => {
    setSelectedReply(reply);
    speakChinese(reply.hanzi, audioRate);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Secretary Header & Schedule Settings Toggle */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ backgroundColor: '#EEF2FF', padding: '8px', borderRadius: 'var(--radius-full)' }}>
            <UserCheck size={20} color="var(--accent-primary)" />
          </div>
          <div>
            <div style={{ fontWeight: '800', fontSize: '1rem', color: 'var(--text-main)' }}>เลขาภาษาจีนส่วนตัว</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>คอยทักทายและชวนฝึกโต้ตอบตามเวลาจริง</div>
          </div>
        </div>

        <button
          type="button"
          className="icon-btn"
          onClick={() => setShowSettings(!showSettings)}
          title="ตั้งเวลาชีวิต"
          style={{ width: '38px', height: '38px' }}
        >
          <Settings size={18} />
        </button>
      </div>

      {/* Settings Panel for User Schedule */}
      {showSettings && (
        <form onSubmit={handleSaveSchedule} className="card" style={{ backgroundColor: '#EEF2FF', borderColor: '#C7D2FE' }}>
          <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--accent-primary)' }}>
            ตั้งเวลาชีวิตของคุณ (เลขาจะปรับคำถามตามเวลาจริง)
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-muted)' }}>เวลาตื่นนอนปกติ</label>
              <input
                type="time"
                value={userSchedule.wakeTime}
                onChange={(e) => setUserSchedule({ ...userSchedule, wakeTime: e.target.value })}
                style={{ width: '100%', padding: '8px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', marginTop: '4px' }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-muted)' }}>เวลานอนปกติ</label>
              <input
                type="time"
                value={userSchedule.bedTime}
                onChange={(e) => setUserSchedule({ ...userSchedule, bedTime: e.target.value })}
                style={{ width: '100%', padding: '8px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', marginTop: '4px' }}
              />
            </div>
          </div>

          <button type="submit" className="pill-btn active" style={{ padding: '8px', marginTop: '4px' }}>
            บันทึกเวลาชีวิต
          </button>
        </form>
      )}

      {/* Main Secretary Check-in Companion Banner */}
      <div className="clock-banner" style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)' }}>
        <div className="clock-banner-header">
          <span>{secretaryCheck.timeLabel}</span>
          <button type="button" className="refresh-clock-btn" onClick={handleRefreshCheck}>
            <RefreshCw size={12} />
            <span>อัปเดตเวลา</span>
          </button>
        </div>

        {/* Secretary Prompt Question */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
          <div className="clock-banner-hanzi" style={{ fontSize: '1.55rem' }}>
            {secretaryCheck.secretaryPrompt.hanzi}
          </div>
          <div className="clock-banner-pinyin" style={{ color: '#93C5FD', fontSize: '1.05rem' }}>
            {secretaryCheck.secretaryPrompt.pinyin}
          </div>
          <div style={{ fontSize: '0.92rem', color: '#6EE7B7', fontWeight: '600', marginTop: '2px' }}>
            แปล: "{secretaryCheck.secretaryPrompt.thaiMeaning}"
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
          <button
            type="button"
            className="refresh-clock-btn"
            onClick={() => speakChinese(secretaryCheck.secretaryPrompt.hanzi, audioRate)}
          >
            <Volume2 size={14} />
            <span>ฟังเสียงเลขาถาม</span>
          </button>
        </div>
      </div>

      {/* Practice Interactive Reply Options */}
      <div className="section-title">
        <span>ฝึกเลือกพูดตอบกลับเลขา (แตะเพื่อฟังเสียง & ฝึกพูด)</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {secretaryCheck.replies.map((reply, idx) => {
          const isSelected = selectedReply?.hanzi === reply.hanzi;
          return (
            <div
              key={idx}
              className="card"
              onClick={() => handleSelectReply(reply)}
              style={{
                cursor: 'pointer',
                borderColor: isSelected ? 'var(--accent-primary)' : 'var(--border-light)',
                backgroundColor: isSelected ? '#EEF2FF' : 'var(--bg-card)',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div className="hanzi-text" style={{ fontSize: '1.35rem' }}>{reply.hanzi}</div>
                  <div className="pinyin-text" style={{ fontSize: '1rem', color: 'var(--accent-blue)' }}>{reply.pinyin}</div>
                  <div className="thai-meaning-text" style={{ fontSize: '0.88rem', fontWeight: '600' }}>แปล: {reply.thaiMeaning}</div>
                </div>

                <button
                  type="button"
                  className="icon-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectReply(reply);
                  }}
                  title="ฟังเสียงพูดตอบ"
                >
                  <Volume2 size={18} color={isSelected ? 'var(--accent-primary)' : 'var(--text-main)'} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Direct Daily Sentences Section */}
      <div className="section-title" style={{ marginTop: '10px' }}>
        <span>ประโยคสั้นประจำวัน (ฝึกพูดแอ็กชันตรงๆ)</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {selfTalkSentences.slice(0, 10).map(item => (
          <SentenceCard key={item.id} item={item} audioRate={audioRate} />
        ))}
      </div>
    </div>
  );
}
