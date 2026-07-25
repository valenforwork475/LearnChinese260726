import React from 'react';
import { MessageSquare, BookOpen, Volume2 } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab }) {
  const navs = [
    { id: 'self_talk', label: 'ฝึกพูดกับตัวเอง', icon: MessageSquare },
    { id: 'vocabulary', label: 'คลังคำศัพท์', icon: BookOpen },
    { id: 'pinyin', label: 'คู่มือออกเสียง', icon: Volume2 }
  ];

  return (
    <nav className="bottom-nav">
      {navs.map((nav) => {
        const IconComponent = nav.icon;
        const isActive = activeTab === nav.id;
        return (
          <button
            key={nav.id}
            onClick={() => setActiveTab(nav.id)}
            className={`nav-item ${isActive ? 'active' : ''}`}
            type="button"
          >
            <IconComponent size={20} strokeWidth={isActive ? 2.3 : 1.7} />
            <span>{nav.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
