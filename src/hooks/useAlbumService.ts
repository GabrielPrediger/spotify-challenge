import { getAlbum } from '@/services/album.service';
import { useQuery } from '@tanstack/react-query';

export const useAlbumService = (albumId: string) => {
  const albumQuery = useQuery({
    queryKey: ['album', albumId],
    queryFn: () => getAlbum(albumId),
    enabled: !!albumId,
  });

  return {
    albumData: albumQuery.data,
    isLoadingAlbum: albumQuery.isLoading,
    isErrorAlbum: albumQuery.isError,
  };
};
