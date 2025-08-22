import { useQuery } from '@tanstack/react-query';
import { useDebounce } from './useDebounce';
import { getArtistTopTracks, searchArtists } from '@/services/artists.service';

export const useSearchResults = (searchTerm: string) => {
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const artistsQuery = useQuery({
    queryKey: ['artists', debouncedSearchTerm],
    queryFn: () => searchArtists(debouncedSearchTerm),
    enabled: !!debouncedSearchTerm,
  });

  const topArtist = artistsQuery.data?.[0];

  const topTracksQuery = useQuery({
    queryKey: ['topTracks', topArtist?.id],
    queryFn: () => getArtistTopTracks(topArtist!.id),
    enabled: !!topArtist,
  });

  return {
    artists: artistsQuery.data,
    topTracks: topTracksQuery.data,
    isLoading:
      artistsQuery.isLoading || (!!topArtist && topTracksQuery.isLoading),
    isError: artistsQuery.isError || topTracksQuery.isError,
  };
};
