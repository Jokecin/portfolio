'use client';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const sections = ['home','about','experience','projects','skills','contact'] as const;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md px-6 py-4 flex items-center">
      {/* Esquina izquierda: selector de idioma */}
      <div className="flex gap-2">
        <button
          onClick={() => setLang('es')}
          className={lang === 'es' ? 'underline' : ''}
        >
          🇪🇸
        </button>
        <button
          onClick={() => setLang('en')}
          className={lang === 'en' ? 'underline' : ''}
        >
          🇺🇸
        </button>
      </div>

      {/* Centro: enlaces de navegación */}
      <ul className="flex-grow flex justify-center gap-6 uppercase text-sm font-medium">
        {sections.map((sec) => (
          <li key={sec}>
            <Link href={`#${sec}`} className="hover:text-indigo-400">
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
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
    </nav>
  );
}
