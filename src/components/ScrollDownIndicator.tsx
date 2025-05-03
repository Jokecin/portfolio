// src/components/ScrollDownIndicator.tsx
'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollDownIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="mt-8"
    >
      <ChevronDown size={32} className="text-indigo-400" />
    </motion.div>
  );
}
