'use client';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import HeroCanvas from '@/components/HeroCanvas';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';
import { Github, Linkedin } from 'lucide-react';

export default function Home() {
  const { lang, t } = useLanguage();

  
  const raw = t('about.paragraphs');
  const aboutParas = ([] as string[]).concat(raw);

  return (
    <>
      <Navbar />

      {/* HOME */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          {t('home.title')} <span className="text-indigo-400">Matías Araya</span>
        </h1>
        <p className="max-w-xl text-center opacity-80">{t('home.description')}</p>
        <HeroCanvas />
      </section>

      {/* ABOUT */}
      <Section id="about" title={t('nav.about') as string}>
        {aboutParas.map((para, i) => (
          <p key={i} className="mb-4 leading-relaxed">
            {para}
          </p>
        ))}
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title={t('nav.experience') as string}>
        <ul className="space-y-6">
          {experience.map((e, i) => (
            <li key={i} className="border-l-2 border-indigo-500 pl-4">
              <h3 className="font-semibold">{e.title[lang]}</h3>
              <p className="text-sm opacity-80">
                {e.period[lang]} · {e.company[lang]}
              </p>
              <p className="mt-1 text-sm">{e.desc[lang]}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title={t('nav.projects') as string}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <ProjectCard
              key={i}
              title={proj.title[lang]}
              description={proj.description[lang]}
              tech={proj.tech}
              link={proj.link}
            />
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title={t('nav.skills') as string}>
        <div className="flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <span key={i} className="px-3 py-1 bg-indigo-600/20 rounded-lg text-sm">
              {s.name[lang]}
            </span>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title={t('nav.contact') as string}>
        <div className="flex flex-col items-center gap-4">
          <a href="mailto:matias.arayaj1@gmail.com" className="underline">
            matias.arayaj1@gmail.com
          </a>
          <div className="flex gap-6 text-xl">
            <a
              href="https://github.com/Jokecin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
            >
              <Github size={24} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/matias-araya1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
            >
              <Linkedin size={24} /> LinkedIn
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
