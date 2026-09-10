import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Volume2, Heart, Trophy, Flame, RefreshCw, Check, X, Clock } from 'lucide-react';
import { vocabularyList } from '../../data/vocabularyData';
import { speakChinese } from '../../utils/speech';

function generateQuizQuestion() {
  const target = vocabularyList[Math.floor(Math.random() * vocabularyList.length)];
  
  // Pick 3 distractors
  const distractors = vocabularyList
    .filter(v => v.id !== target.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const choices = [target, ...distractors].sort(() => 0.5 - Math.random());

  return {
    target,
    choices
  };
}

export default function ListeningQuizGame({ onBack }) {
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedChoiceId, setSelectedChoiceId] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isGameOver, setIsGameOver] = useState(false);

  const timerRef = useRef(null);

  const startNextQuestion = () => {
    const q = generateQuizQuestion();
    setCurrentQuestion(q);
    setSelectedChoiceId(null);
    setIsAnswered(false);
    setTimeLeft(15);

    // Auto speak audio on new question
    speakChinese(q.target.hanzi);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleTimeOut = () => {
    setIsAnswered(true);
    setStreak(0);
    setLives(prev => {
      const nextLives = prev - 1;
      if (nextLives <= 0) {
        setIsGameOver(true);
      } else {
        setTimeout(startNextQuestion, 1500);
      }
      return nextLives;
    });
  };

  const restartGame = () => {
    setLives(3);
    setScore(0);
    setStreak(0);
    setQuestionCount(0);
    setIsGameOver(false);
    startNextQuestion();
  };

  useEffect(() => {
    restartGame();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleChoiceSelect = (choice) => {
    if (isAnswered || isGameOver) return;

    if (timerRef.current) clearInterval(timerRef.current);

    setSelectedChoiceId(choice.id);
    setIsAnswered(true);

    const isCorrect = choice.id === currentQuestion.target.id;

    if (isCorrect) {
      const points = 10 + streak * 2;
      setScore(prev => prev + points);
      setStreak(prev => prev + 1);
      setQuestionCount(prev => prev + 1);

      setTimeout(() => {
        startNextQuestion();
      }, 1200);
    } else {
      setStreak(0);
      setLives(prev => {
        const nextLives = prev - 1;
        if (nextLives <= 0) {
          setTimeout(() => setIsGameOver(true), 1200);
        } else {
          setTimeout(() => {
            startNextQuestion();
          }, 1500);
        }
        return nextLives;
      });
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="game-container">
      {/* Game Header */}
      <div className="game-header">
        <button type="button" className="btn-back" onClick={onBack} title="ย้อนกลับ">
          <ArrowLeft size={20} />
        </button>

        <div className="game-title-group">
          <h2>🎧 โหมดฟังเสียงสปีดควิซ</h2>
          <span className="game-subtitle">ฟังเสียงจีน แล้วเลือกคำแปลที่ถูกต้อง</span>
        </div>

        {/* Lives Counter */}
        <div className="lives-row">
          {[1, 2, 3].map(heartIndex => (
            <Heart
              key={heartIndex}
              size={20}
              className={`heart-icon ${heartIndex <= lives ? 'filled' : 'empty'}`}
            />
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="game-stats-bar">
        <div className="stat-badge">
          <Clock size={16} className={timeLeft <= 5 ? 'text-rose pulse-glow' : 'text-amber'} />
          <span>เวลา: <strong className={timeLeft <= 5 ? 'text-rose' : ''}>{timeLeft}s</strong></span>
        </div>

        <div className="stat-badge">
          <Flame size={16} className={streak > 1 ? 'text-fire streak-pop' : 'text-muted'} />
          <span>Streak: <strong className={streak > 1 ? 'text-fire' : ''}>{streak}🔥</strong></span>
        </div>

        <div className="stat-badge">
          <Trophy size={16} className="text-amber" />
          <span>คะแนน: <strong>{score}</strong></span>
        </div>
      </div>

      {!isGameOver ? (
        <div className="listening-quiz-card pop-in">
          {/* Big Speaker Button */}
          <div className="speaker-hero-zone">
            <button
              type="button"
              className="big-speaker-btn pulse-ring"
              onClick={() => speakChinese(currentQuestion.target.hanzi)}
              title="กดเพื่อฟังเสียงซ้ำ"
            >
              <Volume2 size={44} />
              <span>แตะเพื่อฟังเสียงอีกครั้ง</span>
            </button>
          </div>

          {/* Choices Grid */}
          <div className="quiz-choices-grid">
            {currentQuestion.choices.map((choice) => {
              const isSelected = selectedChoiceId === choice.id;
              const isTarget = choice.id === currentQuestion.target.id;

              let btnClass = 'quiz-choice-btn';
              if (isAnswered) {
                if (isTarget) btnClass += ' correct';
                else if (isSelected && !isTarget) btnClass += ' wrong';
                else btnClass += ' disabled';
              }

              return (
                <button
                  key={choice.id}
                  type="button"
                  className={btnClass}
                  onClick={() => handleChoiceSelect(choice)}
                  disabled={isAnswered}
                >
                  <span className="choice-thai">{choice.thaiMeaning}</span>
                  {isAnswered && isTarget && (
                    <div className="choice-reveal">
                      <span className="reveal-hanzi">{choice.hanzi}</span>
                      <span className="reveal-pinyin">{choice.pinyin}</span>
                      <Check size={18} className="text-emerald" />
                    </div>
                  )}
                  {isAnswered && isSelected && !isTarget && (
                    <X size={18} className="text-rose" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* Game Over Screen */
        <div className="game-win-card pop-in">
          <div className="win-crown">
            <Trophy size={48} className="crown-icon pulse-glow" />
          </div>
          <h3>จบเกมแล้ว! (Game Over) 🎉</h3>
          <p>คุณตอบถูกต้องทั้งหมด {questionCount} ข้อ</p>

          <div className="win-stats-grid">
            <div className="win-stat-box">
              <span className="label">คะแนนรวม</span>
              <span className="value text-amber">{score}</span>
            </div>
            <div className="win-stat-box">
              <span className="label">Streak สูงสุด</span>
              <span className="value text-fire">{streak}🔥</span>
            </div>
          </div>

          <div className="win-actions">
            <button type="button" className="btn-primary-action" onClick={restartGame}>
              <RefreshCw size={18} />
              <span>เล่นอีกรอบ</span>
            </button>
            <button type="button" className="btn-secondary-action" onClick={onBack}>
              <ArrowLeft size={18} />
              <span>เลือกมินิเกมอื่น</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
