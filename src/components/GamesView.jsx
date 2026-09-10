import React, { useState } from 'react';
import { Gamepad2, Layers, MessageSquare, Volume2, Sparkles, Trophy, Zap, Star } from 'lucide-react';
import WordMatchGame from './games/WordMatchGame';
import SentenceBuilderGame from './games/SentenceBuilderGame';
import ListeningQuizGame from './games/ListeningQuizGame';

export default function GamesView() {
  const [activeGame, setActiveGame] = useState(null); // null | 'match' | 'sentence' | 'listening'

  if (activeGame === 'match') {
    return <WordMatchGame onBack={() => setActiveGame(null)} />;
  }

  if (activeGame === 'sentence') {
    return <SentenceBuilderGame onBack={() => setActiveGame(null)} />;
  }

  if (activeGame === 'listening') {
    return <ListeningQuizGame onBack={() => setActiveGame(null)} />;
  }

  return (
    <div className="games-arcade-view">
      {/* Arcade Banner */}
      <div className="arcade-hero-banner">
        <div className="hero-badge">
          <Sparkles size={16} />
          <span>มินิเกมเรียนสนุก สนุกได้ทุกวัน</span>
        </div>
        <h1>🎮 ศูนย์รวมโหมดเรียนสนุก</h1>
        <p>เรียนภาษาจีนแบบไม่น่าเบื่อ ด้วยเกมฝึกสมอง จับคู่ เรียงประโยค และฟังเสียง</p>
      </div>

      {/* Game Cards List */}
      <div className="games-menu-grid">
        {/* Game 1: Word Match */}
        <div
          className="game-selection-card match-theme"
          onClick={() => setActiveGame('match')}
          role="button"
          tabIndex={0}
        >
          <div className="card-top">
            <span className="game-badge popular">⚡ ยอดนิยม</span>
            <div className="game-icon-circle">🧩</div>
          </div>
          <div className="card-body">
            <h3>เกมจับคู่คำศัพท์ (Word Matching)</h3>
            <p>จับคู่ตัวอักษรจีน/พินอินกับความหมายภาษาไทย มีระบบเอฟเฟกต์ Combo และนับเวลาแข่งขัน</p>
          </div>
          <div className="card-footer">
            <span>ฝึกความจำคำศัพท์</span>
            <button type="button" className="play-now-btn">
              <span>เริ่มเล่น</span>
              <Zap size={16} />
            </button>
          </div>
        </div>

        {/* Game 2: Sentence Builder */}
        <div
          className="game-selection-card sentence-theme"
          onClick={() => setActiveGame('sentence')}
          role="button"
          tabIndex={0}
        >
          <div className="card-top">
            <span className="game-badge grammar">🧠 ฝึกไวยากรณ์</span>
            <div className="game-icon-circle">💬</div>
          </div>
          <div className="card-body">
            <h3>เกมเรียงประโยคภาษาจีน (Sentence Builder)</h3>
            <p>แตะต่อบล็อกคำศัพท์ให้เป็นประโยคที่ถูกต้อง พร้อมเสียงอ่านและเฉลยไวยากรณ์</p>
          </div>
          <div className="card-footer">
            <span>ฝึกรูปประโยคสื่อสาร</span>
            <button type="button" className="play-now-btn">
              <span>เริ่มเล่น</span>
              <Zap size={16} />
            </button>
          </div>
        </div>

        {/* Game 3: Listening Speed Quiz */}
        <div
          className="game-selection-card listening-theme"
          onClick={() => setActiveGame('listening')}
          role="button"
          tabIndex={0}
        >
          <div className="card-top">
            <span className="game-badge speed">⏱️ สปีดท้าทาย</span>
            <div className="game-icon-circle">🎧</div>
          </div>
          <div className="card-body">
            <h3>ฟังเสียงสปีดควิซ (Listening Quiz)</h3>
            <p>ฟังเสียงพูดภาษาจีน แล้วทายคำแปลที่ถูกต้องให้เร็วที่สุด สะสม Streak และหัวใจ</p>
          </div>
          <div className="card-footer">
            <span>ฝึกฟังสำเนียงแท้</span>
            <button type="button" className="play-now-btn">
              <span>เริ่มเล่น</span>
              <Zap size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
