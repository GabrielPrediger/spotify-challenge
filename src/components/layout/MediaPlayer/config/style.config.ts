import type { Variants } from 'framer-motion';

export const footerVariants: Variants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
