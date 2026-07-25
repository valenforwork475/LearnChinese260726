import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString('th-TH', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <header className="header-bar">
      <div className="brand-title">
        <span>SinoStep</span>
        <span className="brand-badge">Self-Talk</span>
      </div>
      <div className="header-time-pill">
        <Clock size={14} />
        <span>{timeString} น.</span>
      </div>
    </header>
  );
}
