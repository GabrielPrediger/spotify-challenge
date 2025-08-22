import { motion } from 'framer-motion';
import PopularityMeter from '../PopularityMeter';
import { useTranslation } from 'react-i18next';
import type { CSSProperties } from 'react';

interface ArtistHeaderProps {
  artist: {
    name: string;
    images: { url: string }[];
    followers: { total: number };
    popularity: number;
  };
}

export const ArtistHeader = ({ artist }: ArtistHeaderProps) => {
  const { t } = useTranslation();
  return (
    <motion.header
      className="relative flex h-[28rem] justify-center overflow-hidden rounded-b-none sm:h-96 sm:justify-start sm:rounded-4xl sm:rounded-b-none"
      initial="initial"
      animate="visible"
      whileHover="hover"
    >
      <motion.div
        aria-hidden="true"
        variants={{
          initial: {
            scale: 1.1,
            opacity: 0,
            filter: 'blur(8px) brightness(0.6)',
          },
          visible: {
            scale: 1.05,
            opacity: 1,
            filter: 'blur(4px) brightness(0.7)',
          },
          hover: {
            scale: 1,
            filter: 'blur(2px) brightness(0.8)',
            opacity: 0.95,
          },
        }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
        style={
          {
            backgroundImage: `url(${artist?.images?.[0]?.url})`,
          } as CSSProperties
        }
        className="will-change-filter pointer-events-none absolute inset-0 z-10 transform-gpu bg-cover bg-center will-change-transform"
      />
      <div className="relative z-20 flex h-full w-max flex-col items-center justify-center gap-6 px-4 py-6 md:flex-row md:items-center md:justify-center">
        <img
          src={artist?.images[0]?.url}
          alt={artist.name}
          className="z-10 h-48 w-48 rounded-lg object-cover shadow-lg md:h-56 md:w-56"
        />

        <div className="relative z-10 flex flex-col">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg md:text-7xl">
            {artist.name}
          </h1>
          <p className="mt-2 text-sm text-zinc-300">
            {t('monthly_listeners', {
              total: artist.followers.total.toLocaleString(),
            })}
          </p>
        </div>
        <div className="absolute top-4 right-[-20%] sm:relative sm:right-0">
          <PopularityMeter popularity={artist.popularity} />
        </div>
      </div>
    </motion.header>
  );
};
