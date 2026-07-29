import React from 'react';
import { MessageSquare, BookOpen, Volume2 } from 'lucide-react';
export default function BottomNav({activeTab,setActiveTab}){const navs=[['self_talk','ฝึกสื่อสาร',MessageSquare],['vocabulary','คลังคำศัพท์',BookOpen],['pinyin','คู่มือออกเสียง',Volume2]];return <nav className="bottom-nav" aria-label="เมนูหลัก">{navs.map(([id,label,Icon])=><button key={id} onClick={()=>setActiveTab(id)} className={`nav-item ${activeTab===id?'active':''}`} aria-current={activeTab===id?'page':undefined} type="button"><Icon size={20}/><span>{label}</span></button>)}</nav>}
