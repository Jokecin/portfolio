// src/context/LanguageContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import esMessages from '@/messages/es.json';
import enMessages from '@/messages/en.json';

type Lang = 'es' | 'en';
type Messages = Record<string, string>;

const allMessages: Record<Lang, Messages> = {
  es: esMessages,
  en: enMessages,
};

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null;
    if (stored === 'es' || stored === 'en') setLang(stored);
  }, []);

  const t = (key: string) => {
    return allMessages[lang][key] ?? key;
  };

  const switchLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem('lang', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: switchLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage debe usarse dentro de LanguageProvider');
  return ctx;
}
