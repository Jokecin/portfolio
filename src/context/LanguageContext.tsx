'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import esMessages from '@/messages/es.json';
import enMessages from '@/messages/en.json';

type Lang = 'es' | 'en';
type Messages = Record<string, string>;

const allMessages: Record<Lang, Messages> = { es: esMessages, en: enMessages };

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // 1️⃣ Arrancamos sin idioma (null)
  const [lang, setLangState] = useState<Lang | null>(null);

  // 2️⃣ Al montarnos, leemos localStorage
  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null;
    if (stored === 'es' || stored === 'en') {
      setLangState(stored);
    } else {
      setLangState('es');
    }
  }, []);

  // 3️⃣ Hasta que no sepamos el idioma, no renderizamos nada
  if (lang === null) {
    return null;
  }

  const t = (key: string) => allMessages[lang][key] ?? key;
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('lang', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage debe usarse dentro de LanguageProvider');
  return ctx;
}
