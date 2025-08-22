import { getNewReleases } from '@/services/browse.service';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useHomePageData = () => {
  return useInfiniteQuery({
    queryKey: ['newReleases'],
    queryFn: ({ pageParam }) => getNewReleases({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.next === null) {
        return undefined;
      }
      const url = new URL(lastPage.next);
      const offset = url.searchParams.get('offset');
      return offset ? Number(offset) : undefined;
    },
  });
};
