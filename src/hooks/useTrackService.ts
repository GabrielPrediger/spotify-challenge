import { getTrackById } from '@/services/tracks.service';
import { useQuery } from '@tanstack/react-query';

export const useTrackService = (trackId: string) => {
  const trackQuery = useQuery({
    queryKey: ['track', trackId],
    queryFn: () => getTrackById(trackId),
    enabled: !!trackId,
  });

  return {
    trackData: trackQuery.data,
    isLoadingTrack: trackQuery.isLoading,
    isErrorTrack: trackQuery.isError,
  };
};
