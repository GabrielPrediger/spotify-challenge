import { AnimatePresence, motion } from 'framer-motion';
import { LoadingSpinner } from '@/components/LoadSpinner';
import { ArtistHeader } from './components/ArtistHeader';
import { TrackItem } from '@/components/TrackItem';
import { ItemCard } from '@/components/ItemCard';
import { GoBackButton } from '@/components/GoBackButton';
import type { Track } from '@/types/spotify';
import type { SpotifyTrack as AlbumTrack } from '@/types/artists';
import type { SpotifyArtistSimplified } from '@/types/artists.albums';
import { useArtistPage } from './hooks/useArtistPage';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { SearchResultsSkeleton } from '@/components/SearchResultsSkeleton';

export function ArtistPage() {
  const {
    buttonText,
    handlePlayPause,
    handleToggleShow,
    shouldShowButton,
    artistData,
    isError,
    albumsData,
    currentTrackId,
    displayedItems,
    isPlaying,
    albumFilter,
    setAlbumFilter,
    albumsCurrentPage,
    setAlbumsCurrentPage,
    totalPages,
    isSearching,
    isLoadingArtistPage,
    isFetching,
    t,
  } = useArtistPage();

  if (isLoadingArtistPage) {
    return <LoadingSpinner />;
  }

  if (isError || !artistData) {
    return (
      <div className="mt-20 text-center text-white">
        {t('artist_error_to_found')}
      </div>
    );
  }

  return (
    <motion.div
      className="mx-0 min-h-screen rounded-lg sm:mx-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute z-40 mt-4 mb-6 ml-4 sm:relative sm:ml-0 sm:flex">
        <GoBackButton />
      </div>

      <ArtistHeader artist={artistData} />

      <main className="bg-gradient-to-b from-[#222] to-[#121212] px-4 pt-4 pb-10">
        <section className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">{t('popular')}</h2>
          </div>

          <motion.div>
            {displayedItems.map((track: Track | AlbumTrack, index: number) => {
              const isCurrentTrack = currentTrackId?.id === track.id;
              const isThisTrackPlaying = isCurrentTrack && isPlaying;

              return (
                <TrackItem
                  key={index}
                  index={index}
                  artistId={artistData?.id}
                  track={track}
                  type="artist"
                  handlePlayPause={() => handlePlayPause(isCurrentTrack, track)}
                  isCurrentTrack={isCurrentTrack}
                  isThisTrackPlaying={isThisTrackPlaying}
                />
              );
            })}

            {shouldShowButton && (
              <button
                onClick={handleToggleShow}
                className="mt-4 text-center font-bold text-white/60 hover:text-white"
              >
                {buttonText}
              </button>
            )}

            <div className="mt-10 mb-20 px-2 sm:px-8">
              <h2 className="text-2xl font-bold text-white">
                {isSearching
                  ? t('results_for', { query: albumFilter })
                  : t('discography')}
              </h2>
              <div className="relative my-4 w-full">
                <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                <Input
                  placeholder={t('filter_albums_placeholder')}
                  value={albumFilter}
                  onChange={(e) => setAlbumFilter(e.target.value)}
                  className="h-11 w-full rounded-full border-0 bg-[#2a2a2a] pl-10 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-white/50"
                />
              </div>
              {isFetching ? (
                <div className="min-h-[30rem]">
                  <SearchResultsSkeleton />
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                  {albumsData?.map((album) => (
                    <AnimatePresence>
                      <ItemCard
                        key={album.id}
                        id={album.id}
                        name={album.name}
                        subtitle={album.artists
                          .map((a: SpotifyArtistSimplified) => a.name)
                          .join(', ')}
                        imageUrl={album.images[0]?.url}
                        type="album"
                      />
                    </AnimatePresence>
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className="flex w-full items-center justify-center gap-4 pt-8">
                  <button
                    onClick={() =>
                      setAlbumsCurrentPage((page) => Math.max(page - 1, 1))
                    }
                    disabled={albumsCurrentPage === 1}
                    className="rounded-full bg-purple-500 px-6 py-2 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {t('previous')}
                  </button>

                  <span className="font-semibold text-white">
                    {t('page_of', {
                      current: albumsCurrentPage,
                      total: totalPages,
                    })}
                  </span>

                  <button
                    onClick={() =>
                      setAlbumsCurrentPage((page) =>
                        Math.min(page + 1, totalPages),
                      )
                    }
                    disabled={albumsCurrentPage === totalPages}
                    className="rounded-full bg-purple-500 px-6 py-2 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {t('next')}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </section>
      </main>
    </motion.div>
  );
}
