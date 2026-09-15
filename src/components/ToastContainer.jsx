import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export default function ToastContainer() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const handleToast = (e) => {
      const message = e.detail?.message || 'คัดลอกเรียบร้อยแล้ว!';
      setToast(message);

      const timer = setTimeout(() => {
        setToast(null);
      }, 2200);

      return () => clearTimeout(timer);
    };

    window.addEventListener('sinostep_toast', handleToast);
    return () => window.removeEventListener('sinostep_toast', handleToast);
  }, []);

  if (!toast) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '80px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#1E293B',
        color: '#FFFFFF',
        padding: '10px 18px',
        borderRadius: '24px',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.86rem',
        fontWeight: '600',
        zIndex: 9999,
        animation: 'toastSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: 'none',
        maxWidth: '90vw',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}
    >
      <div
        style={{
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          backgroundColor: '#10B981',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <Check size={14} color="#FFFFFF" strokeWidth={3} />
      </div>
      <span>{toast}</span>
    </div>
  );
}
