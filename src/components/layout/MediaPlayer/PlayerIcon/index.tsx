import { motion } from 'framer-motion';

export const PlayingIcon = () => (
  <div className="mr-4 flex h-5 w-5 items-end gap-1">
    <motion.div
      className="w-1/3 bg-purple-500"
      animate={{ height: ['25%', '100%', '25%'] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="w-1/3 bg-purple-500"
      animate={{ height: ['50%', '15%', '50%'] }}
      transition={{ duration: 1.0, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="w-1/3 bg-purple-500"
      animate={{ height: ['10%', '75%', '10%'] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);
