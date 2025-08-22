import { motion, type Transition } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { cardVariants } from './config/style.config';
import type { ArtistCardProps } from './@types';
import { useTranslation } from 'react-i18next';

export function ArtistCard({ id, name, imageUrl }: ArtistCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 } as Transition}
      className="group"
    >
      <Link to={`/artist/${id}`}>
        <Card className="h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-white/20">
          <CardContent className="flex flex-col items-center p-4 text-center">
            <div className="mb-4 h-40 w-40 overflow-hidden rounded-full transition-all duration-300 group-hover:scale-105 group-hover:ring-4 group-hover:ring-white/10">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-white/10" />
              )}
            </div>
            <h3 className="w-full truncate text-lg font-bold text-white">
              {name}
            </h3>
            <p className="text-sm text-white/60">{t('artist')}</p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
