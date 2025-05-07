// src/lib/motionVariants.ts
import { Variants } from 'framer-motion';

export const overlayVariants: Variants = {
  hidden: { y: '-100%' },
  visible: { y: 0, transition: { type: 'tween', duration: 0.3 } },
  exit:   { y: '-100%', transition: { type: 'tween', duration: 0.3 } }
};

export const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -20 }
};
