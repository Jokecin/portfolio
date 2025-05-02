// src/components/ProjectCard.tsx
'use client';

import { motion } from 'framer-motion';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function ProjectCard({ title, description, tech, link }: Project) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl p-6 border border-indigo-700/30 bg-white/5 backdrop-blur hover:scale-105 transition-transform"
      whileHover={{ y: -4 }}
    >
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm opacity-80 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 text-xs">
        {tech.map((t) => (
          <span key={t} className="px-2 py-0.5 bg-indigo-600/20 rounded">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
