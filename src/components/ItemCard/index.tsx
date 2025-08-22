import { motion } from 'framer-motion';
import type { ItemCardProps } from './@types';
import { useItemCard } from './hooks/useItemCard';
import { cardVariants } from './config/style.config';

export function ItemCard({
  id,
  name,
  subtitle,
  imageUrl,
  type,
}: ItemCardProps) {
  const { handleItemCardNavigate } = useItemCard({ id, type });

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group"
      onClick={handleItemCardNavigate}
    >
      <div className="h-max w-full rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-lg transition-colors duration-300 hover:bg-white/10">
        <img
          src={imageUrl}
          alt={name}
          className="mb-4 aspect-square w-full rounded-md object-cover shadow-lg"
        />
        <h3 className="truncate text-base font-bold text-white">{name}</h3>
        <p className="truncate text-sm text-white/60">{subtitle}</p>
      </div>
    </motion.div>
  );
}
