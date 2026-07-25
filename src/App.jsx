import React, { useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import SelfTalkView from './components/SelfTalkView';
import VocabularyView from './components/VocabularyView';
import PinyinView from './components/PinyinView';

export default function App() {
  const [activeTab, setActiveTab] = useState('self_talk');

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
