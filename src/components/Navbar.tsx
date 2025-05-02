'use client';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState<'home'|'about'|'experience'|'projects'|'skills'|'contact'>('home');

  const sections = ['home','about','experience','projects','skills','contact'] as const;

  // Marca como montado para el toggle de tema
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll-spy: observa qué sección está en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as typeof active);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md px-6 py-4 flex items-center">
      {/* Esquina izquierda: selector de idioma */}
      <div className="flex gap-2">
        <button onClick={() => setLang('es')} className={lang === 'es' ? 'underline' : ''}>
          🇪🇸
        </button>
        <button onClick={() => setLang('en')} className={lang === 'en' ? 'underline' : ''}>
          🇺🇸
        </button>
      </div>

      {/* Centro: enlaces de navegación */}
      <ul className="flex-grow flex justify-center gap-6 uppercase text-sm font-medium">
        {sections.map((sec) => (
          <li key={sec}>
            <Link
              href={`#${sec}`}
              className={`
                hover:text-indigo-400
                ${active === sec ? 'text-indigo-400' : 'text-current'}
              `}
            >
              {t(`nav.${sec}`)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Esquina derecha: toggle de tema */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="text-xl"
      >
        {mounted ? (theme === 'dark' ? '🌞' : '🌙') : null}
      </button>
    </nav>
  );
}
