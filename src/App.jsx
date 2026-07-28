import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import SelfTalkView from './components/SelfTalkView';
import VocabularyView from './components/VocabularyView';
import PinyinView from './components/PinyinView';

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem('sinostep_active_tab') || 'vocabulary';
  });

  useEffect(() => {
    localStorage.setItem('sinostep_active_tab', activeTab);
  }, [activeTab]);

  return (
    <div className="mobile-viewport">
      <Header />

      <main className="app-content">
        {activeTab === 'self_talk' && <SelfTalkView />}
        {activeTab === 'vocabulary' && <VocabularyView onGoHome={() => setActiveTab('self_talk')} />}
        {activeTab === 'pinyin' && <PinyinView />}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
