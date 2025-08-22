import { type Variants } from 'framer-motion';

export const trackInfoContainerVariants: Variants = {
  hidden: {
    x: '-110%',
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const trackInfoVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

export const EXPANDED_WIDTH = '18rem';
export const COLLAPSED_WIDTH = '8rem';
export const COLLAPSE_DELAY = 1500;
