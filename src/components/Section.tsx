// src/components/Section.tsx
'use client';

import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function Section({
  id,
  title,
  children
}: PropsWithChildren<{ id: string; title: string }>) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={revealVariants}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24 gap-12 scroll-mt-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        {title}
      </h2>
      <div className="w-full max-w-5xl prose prose-invert">
        {children}
      </div>
    </motion.section>
  );
}
