import type { Transition, Variants } from 'framer-motion';

export const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 } as Transition,
  },
};
