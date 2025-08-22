import { ItemCard } from '@/components/ItemCard';
import { SearchResultsSkeleton } from '@/components/SearchResultsSkeleton';
import { SectionTitle } from '@/components/SectionTitle';
import { useHomePageData } from '@/hooks/useHomePageData';
import { motion } from 'framer-motion';
import { Fragment } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';

export const DiscoveryDashboard = () => {
  const { t } = useTranslation();
  const {
    data: newReleases,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useHomePageData();

  if (isLoading) {
    return <SearchResultsSkeleton />;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {newReleases && (
        <section>
          <SectionTitle>{t('new_releases')}</SectionTitle>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {newReleases?.pages.map((page, i) => (
              <Fragment key={i}>
                {page.items.map((album) => (
                  <ItemCard
                    key={album.id}
                    id={album.id}
                    name={album.name}
                    subtitle={album.artists.map((a) => a.name).join(', ')}
                    imageUrl={album.images[0]?.url}
                    type="album"
                  />
                ))}
              </Fragment>
            ))}
          </div>

          <div className="mb-20 flex w-full justify-center pt-8">
            {hasNextPage && (
              <button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="rounded-full bg-purple-500 px-6 py-2 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isFetchingNextPage ? t('loading') : t('see_more')}
              </button>
            )}
          </div>
        </section>
      )}
    </motion.div>
  );
};
