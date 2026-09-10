import React, { useState, useEffect, useRef } from 'react';
import { RefreshCw, Award, Play, Volume2, Trophy, Flame, CheckCircle, Zap, ArrowLeft } from 'lucide-react';
import { vocabularyList } from '../../data/vocabularyData';
import { speakChinese } from '../../utils/speech';

function getRandomWords(count) {
  const shuffled = [...vocabularyList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function WordMatchGame({ onBack }) {
  const [pairCount, setPairCount] = useState(6); // 6, 8, 12
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]); // indices
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [flipsCount, setFlipsCount] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [wrongAnimationCard, setWrongAnimationCard] = useState(null);

  const timerRef = useRef(null);

  // Start / Reset Game
  const initGame = (numPairs = pairCount) => {
    const selectedWords = getRandomWords(numPairs);
    const generatedCards = [];

    selectedWords.forEach((word) => {
      // Card 1: Chinese Hanzi + Pinyin
      generatedCards.push({
        id: `zh-${word.id}`,
        wordId: word.id,
        type: 'zh',
        mainText: word.hanzi,
        subText: word.pinyin,
        wordObj: word,
        isFlipped: false,
        isMatched: false
      });
      // Card 2: Thai Meaning
      generatedCards.push({
        id: `th-${word.id}`,
        wordId: word.id,
        type: 'th',
        mainText: word.thaiMeaning,
        subText: word.pinyin,
        wordObj: word,
        isFlipped: false,
        isMatched: false
      });
    });

    // Shuffle cards
    const shuffledCards = generatedCards.sort(() => 0.5 - Math.random());

    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setFlipsCount(0);
    setCombo(0);
    setMaxCombo(0);
    setTimer(0);
    setIsPlaying(true);
    setIsGameCompleted(false);
    setWrongAnimationCard(null);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    initGame(pairCount);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [pairCount]);

  // Card click handler
  const handleCardClick = (index) => {
    if (!isPlaying || isGameCompleted) return;

    const clickedCard = cards[index];

    // Ignore if already flipped or matched
    if (clickedCard.isFlipped || clickedCard.isMatched) return;
    if (flippedCards.length >= 2) return; // Prevent fast double clicking

    // Speak Chinese when clicking Chinese card
    if (clickedCard.type === 'zh') {
      speakChinese(clickedCard.wordObj.hanzi);
    }

    // Flip the clicked card
    const updatedCards = [...cards];
    updatedCards[index].isFlipped = true;
    setCards(updatedCards);

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);
    setFlipsCount((prev) => prev + 1);

    // If 2 cards flipped, check match
    if (newFlipped.length === 2) {
      const idx1 = newFlipped[0];
      const idx2 = newFlipped[1];
      const card1 = updatedCards[idx1];
      const card2 = updatedCards[idx2];

      if (card1.wordId === card2.wordId && card1.type !== card2.type) {
        // MATCH SUCCESS!
        speakChinese(card1.wordObj.hanzi);

        setTimeout(() => {
          setCards((prev) =>
            prev.map((c, idx) =>
              idx === idx1 || idx === idx2 ? { ...c, isMatched: true } : c
            )
          );
          setFlippedCards([]);
          setMatchedPairs((prev) => {
            const nextMatched = prev + 1;
            if (nextMatched === pairCount) {
              // GAME COMPLETE!
              if (timerRef.current) clearInterval(timerRef.current);
              setIsGameCompleted(true);
              setIsPlaying(false);
            }
            return nextMatched;
          });
          setCombo((prevCombo) => {
            const nextCombo = prevCombo + 1;
            setMaxCombo((m) => Math.max(m, nextCombo));
            return nextCombo;
          });
        }, 300);
      } else {
        // MATCH FAIL!
        setCombo(0);
        setWrongAnimationCard([idx1, idx2]);
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c, idx) =>
              idx === idx1 || idx === idx2 ? { ...c, isFlipped: false } : c
            )
          );
          setFlippedCards([]);
          setWrongAnimationCard(null);
        }, 900);
      }
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Calculate Star Rating
  const getStars = () => {
    const minFlips = pairCount * 2;
    const ratio = minFlips / (flipsCount || 1);
    if (ratio >= 0.8) return 3;
    if (ratio >= 0.5) return 2;
    return 1;
  };

  return (
    <div className="game-container">
      {/* Game Header */}
      <div className="game-header">
        <button type="button" className="btn-back" onClick={onBack} title="ย้อนกลับ">
          <ArrowLeft size={20} />
        </button>

        <div className="game-title-group">
          <h2>🧩 เกมจับคู่คำศัพท์</h2>
          <span className="game-subtitle">จับคู่ตัวจีน & ความหมายไทย</span>
        </div>

        {/* Pair Count Selector */}
        <div className="pair-selector">
          {[6, 8, 12].map((num) => (
            <button
              key={num}
              type="button"
              className={`pair-btn ${pairCount === num ? 'active' : ''}`}
              onClick={() => {
                setPairCount(num);
                initGame(num);
              }}
            >
              {num} คู่
            </button>
          ))}
        </div>
      </div>

      {/* Game Stats Bar */}
      <div className="game-stats-bar">
        <div className="stat-badge">
          <Zap size={16} className="text-amber" />
          <span>เวลา: <strong>{formatTime(timer)}</strong></span>
        </div>

        <div className="stat-badge">
          <Flame size={16} className={combo > 1 ? 'text-fire streak-pop' : 'text-muted'} />
          <span>Combo: <strong className={combo > 1 ? 'text-fire' : ''}>{combo}x</strong></span>
        </div>

        <div className="stat-badge">
          <CheckCircle size={16} className="text-emerald" />
          <span>สำเร็จ: <strong>{matchedPairs}/{pairCount}</strong></span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className={`card-match-grid grid-${pairCount}`}>
        {cards.map((card, idx) => {
          const isFlipped = card.isFlipped || card.isMatched;
          const isWrong = wrongAnimationCard && wrongAnimationCard.includes(idx);

          return (
            <div
              key={card.id}
              className={`match-card ${isFlipped ? 'flipped' : ''} ${
                card.isMatched ? 'matched' : ''
              } ${isWrong ? 'shake-wrong' : ''} type-${card.type}`}
              onClick={() => handleCardClick(idx)}
              role="button"
              tabIndex={0}
            >
              <div className="match-card-inner">
                {/* Back side (Face down) */}
                <div className="match-card-front">
                  <span className="card-pattern-icon">漢</span>
                </div>

                {/* Front side (Face up content) */}
                <div className="match-card-back">
                  {card.type === 'zh' ? (
                    <div className="zh-card-content">
                      <span className="card-hanzi">{card.mainText}</span>
                      <span className="card-pinyin">{card.subText}</span>
                      <button
                        type="button"
                        className="card-audio-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          speakChinese(card.wordObj.hanzi);
                        }}
                      >
                        <Volume2 size={14} />
                      </button>
                    </div>
                  ) : (
                    <div className="th-card-content">
                      <span className="card-thai">{card.mainText}</span>
                      <span className="card-hint">ภาษาไทย</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Win Modal Overlay */}
      {isGameCompleted && (
        <div className="game-win-overlay">
          <div className="game-win-modal pop-in">
            <div className="win-crown">
              <Trophy size={48} className="crown-icon pulse-glow" />
            </div>

            <h3>เยี่ยมมาก! จับคู่ครบแล้ว 🎉</h3>
            <p className="win-subtitle">คุณเก่งภาษาจีนขึ้นอีกขั้น!</p>

            <div className="stars-row">
              {[1, 2, 3].map((star) => (
                <span
                  key={star}
                  className={`star-icon ${star <= getStars() ? 'filled' : 'empty'}`}
                >
                  ★
                </span>
              ))}
            </div>

            <div className="win-stats-grid">
              <div className="win-stat-box">
                <span className="label">เวลาที่ใช้</span>
                <span className="value">{formatTime(timer)}</span>
              </div>
              <div className="win-stat-box">
                <span className="label">จำนวนพลิกการ์ด</span>
                <span className="value">{flipsCount} ครั้ง</span>
              </div>
              <div className="win-stat-box">
                <span className="label">Max Combo</span>
                <span className="value text-fire">{maxCombo}x 🔥</span>
              </div>
            </div>

            <div className="win-actions">
              <button
                type="button"
                className="btn-primary-action"
                onClick={() => initGame(pairCount)}
              >
                <RefreshCw size={18} />
                <span>เล่นอีกครั้ง</span>
              </button>
              <button
                type="button"
                className="btn-secondary-action"
                onClick={onBack}
              >
                <ArrowLeft size={18} />
                <span>เลือกมินิเกมอื่น</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
