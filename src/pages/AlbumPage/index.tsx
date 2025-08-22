import { TrackItem } from '@/components/TrackItem';
import { motion } from 'framer-motion';
import { GoBackButton } from '@/components/GoBackButton';
import { LoadingSpinner } from '@/components/LoadSpinner';
import { useAlbumPage } from './hooks/useAlbumPage';

export function AlbumPage() {
  const {
    albumData,
    currentTrackId,
    handleNavigate,
    handlePlayPause,
    isErrorAlbum,
    isLoadingAlbum,
    isPlaying,
    t,
  } = useAlbumPage();

  if (isLoadingAlbum) {
    return <LoadingSpinner />;
  }

  if (isErrorAlbum || !albumData) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-red-500">{t('album_not_found')}</p>
      </div>
    );
  }

  return (
    <div className="mb-18 p-6 md:p-8">
      <div className="mb-6">
        <GoBackButton />
      </div>

      <motion.header
        className="relative flex justify-center overflow-hidden rounded-xl sm:justify-start"
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
              backgroundImage: `url(${albumData?.images?.[0]?.url})`,
            } as React.CSSProperties
          }
          className="will-change-filter pointer-events-none absolute inset-0 z-10 transform-gpu bg-cover bg-center will-change-transform"
        />
        <div className="relative z-20 flex w-max flex-col items-center gap-6 px-4 py-6 md:flex-row md:items-end">
          <img
            src={albumData?.images[0]?.url}
            className="h-48 w-48 rounded-lg object-cover shadow-lg md:h-56 md:w-56"
          />

          <div className="flex flex-col text-center md:text-left">
            <span className="text-sm font-semibold text-zinc-400 uppercase">
              {t('album')}
            </span>
            <h1 className="mt-1 text-4xl font-bold tracking-tight text-white md:text-6xl">
              {albumData?.name}
            </h1>

            <div className="flex items-center gap-2">
              <div className="mt-4 flex items-center gap-1 text-sm text-zinc-300">
                {albumData?.artists.map((artist, idx, arr) => (
                  <span
                    key={artist.id}
                    onClick={() =>
                      handleNavigate({ type: 'artist', id: artist?.id })
                    }
                    className="hover:cursor-pointer hover:underline hover:opacity-85"
                  >
                    {artist.name}
                    {idx < arr.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-zinc-300">
                • {albumData?.release_date.substring(0, 4)} •
              </p>
              <p className="mt-4 text-sm text-zinc-300">
                {albumData?.total_tracks} {t('musics')}
              </p>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-white">{t('musics')}</h2>
        <div className="flex flex-col">
          {albumData?.tracks?.items?.map((track, index) => {
            const isCurrentTrack = currentTrackId?.id === track.id;
            const isThisTrackPlaying = isCurrentTrack && isPlaying;

            return (
              <TrackItem
                key={track.id}
                track={track}
                index={index}
                type="album"
                isCurrentTrack={isCurrentTrack}
                isThisTrackPlaying={isThisTrackPlaying}
                handlePlayPause={() => handlePlayPause(isCurrentTrack, track)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
