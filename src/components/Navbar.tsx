// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from 'next-themes';
import { useState, useEffect, useMemo } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { overlayVariants, listVariants, itemVariants } from '@/lib/motionVariants';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<'home'|'about'|'experience'|'projects'|'skills'|'contact'>('home');
  
  const sections = useMemo(() => (
    ['home','about','experience','projects','skills','contact'] as const
  ), []);

  useEffect(() => { setMounted(true); }, []);

  // Scroll-spy
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id as typeof active);
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-indigo-600/30 via-indigo-600/20 to-transparent backdrop-blur-md px-6 py-4 flex items-center justify-between">
          {/* Idioma */}
        <motion.button
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="ring-2 ring-white rounded"
          aria-label="Toggle Language"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Image
            src={lang === 'es' ? '/flags/es.svg' : '/flags/gb.svg'}
            alt={lang === 'es' ? 'ES' : 'EN'}
            width={24}
            height={16}
          />
        </motion.button>

        {/* Enlaces (desktop) */}
        <ul className="hidden md:flex gap-6 uppercase text-sm font-medium text-white">
          {sections.map(sec => (
            <li key={sec}>
              <Link
                href={`#${sec}`}
                className={`hover:text-indigo-300 transition-colors ${active === sec ? 'text-indigo-300' : ''}`}
              >
                {t(`nav.${sec}`)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Tema + menú móvil */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-white"
            aria-label="Toggle Theme"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {mounted ? (theme === 'dark' ? <Sun size={24}/> : <Moon size={24}/>) : null}
          </motion.button>

          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden text-white text-2xl"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
      </nav>

      {/* OVERLAY MÓVIL */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-0 z-50 bg-gradient-to-b from-indigo-900/90 via-indigo-800/90 to-indigo-700/90 backdrop-blur-xl flex flex-col"
          >
            {/* Barra superior del overlay */}
            <div className="flex items-center justify-between px-6 py-4">
              <motion.button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className={lang === 'es' ? 'ring-2 ring-white rounded' : ''}
                aria-label="Toggle Language"
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Image src="/flags/es.svg" alt="ES" width={24} height={16} />
              </motion.button>
              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-white"
                aria-label="Toggle Theme"
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {mounted ? (theme === 'dark' ? <Sun size={24}/> : <Moon size={24}/>) : null}
              </motion.button>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl"
                aria-label="Close Menu"
              >
                <X size={24}/>
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={listVariants}
              className="flex-1 flex flex-col items-center justify-center gap-6 uppercase text-lg font-semibold text-white"
            >
              {sections.map(sec => (
                <motion.li
                  key={sec}
                  variants={itemVariants}
                  className="w-full text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  <Link
                    href={`#${sec}`}
                    className={`block px-4 py-2 w-full transition-colors hover:bg-indigo-800/30 ${
                      active === sec ? 'bg-indigo-800/50' : ''
                    }`}
                  >
                    {t(`nav.${sec}`)}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
