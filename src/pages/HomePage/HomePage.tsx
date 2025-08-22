import { SearchResultsSkeleton } from '@/components/SearchResultsSkeleton';
import { useSearchResults } from '@/hooks/useSearchResults';
import { DiscoveryDashboard } from './components/DiscoveryDashboard';
import { SearchResultsDisplay } from './components/SearchResultsDisplay';
import { useSearchContext } from '@/context/SearchContext/hooks';

export function HomePage() {
  const { searchTerm } = useSearchContext();
  const {
    artists,
    topTracks,
    isLoading: isSearchLoading,
  } = useSearchResults(searchTerm);

  return (
    <div className="p-6 md:p-8 lg:p-12">
      {isSearchLoading ? (
        <SearchResultsSkeleton />
      ) : searchTerm ? (
        <SearchResultsDisplay
          artists={artists ?? []}
          topTracks={topTracks ?? []}
        />
      ) : (
        <DiscoveryDashboard />
      )}
    </div>
  );
}
