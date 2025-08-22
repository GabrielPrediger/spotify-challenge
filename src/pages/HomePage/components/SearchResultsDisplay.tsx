import { ArtistCard } from '@/components/ArtistCard';
import { TopResultCard } from '@/components/TopResultCard';
import { motion } from 'framer-motion';
import { containerVariants } from './config/style.config';
import type { Track } from '@/types/spotify';
import { TrackItem } from '@/components/TrackItem';
import { usePlayerContext } from '@/context/PlayerContext/hooks';
import { useTranslation } from 'react-i18next';

export const SearchResultsDisplay = ({
  artists,
  topTracks,
}: {
  artists: any[];
  topTracks: Track[];
}) => {
  const { t } = useTranslation();
  const {
    track: currentTrackId,
    isPlaying,
    setTrack,
    setIsPlaying,
  } = usePlayerContext();

  if (!artists || artists.length === 0) {
    return <p className="text-white/70">{t('no_results')}</p>;
  }

  const topArtist = artists[0];
  const otherArtists = artists.slice(1);

  const handlePlayPause = (isCurrentTrack: boolean, track: Track) => {
    if (isCurrentTrack) {
      setIsPlaying(!isPlaying);
    } else {
      setTrack(track);
      setIsPlaying(true);
    }
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="mb-4 text-2xl font-bold text-white">
            {t('top_result')}
          </h2>
          <TopResultCard artist={topArtist} />
        </div>
        <div className="md:col-span-2">
          {topTracks.slice(0, 5).map((track: Track, index: number) => {
            const isCurrentTrack = currentTrackId?.id === track.id;
            const isThisTrackPlaying = isCurrentTrack && isPlaying;

            return (
              <TrackItem
                key={index}
                index={index}
                track={track}
                type="album"
                handlePlayPause={() => handlePlayPause(isCurrentTrack, track)}
                isCurrentTrack={isCurrentTrack}
                isThisTrackPlaying={isThisTrackPlaying}
              />
            );
          })}
        </div>
      </div>

      {otherArtists.length > 0 && (
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">
            {t('other_artists')}
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          >
            {otherArtists.map((artist: any) => (
              <ArtistCard
                key={artist.id}
                id={artist.id}
                name={artist.name}
                imageUrl={artist.images?.[0]?.url}
              />
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};
