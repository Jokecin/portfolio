// src/components/ScrollProgress.tsx
'use client';
import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const handler = () => {
      const pos = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setPct((pos / total) * 100);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div
      className="
        fixed top-0 left-0 h-1 bg-indigo-400 z-50
        transition-all duration-200 ease-out
      "
      style={{ width: `${pct}%` }}
    />
  );
}
