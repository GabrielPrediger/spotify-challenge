import { useQuery } from '@tanstack/react-query';
import { searchArtists } from '../services/artists.service';
import { useDebounce } from './useDebounce';

export const useSearchArtists = (searchTerm: string) => {
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return useQuery({
    queryKey: ['artists', debouncedSearchTerm],
    queryFn: () => searchArtists(debouncedSearchTerm),
    enabled: !!debouncedSearchTerm,
  });
};