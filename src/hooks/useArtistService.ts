import { searchAlbumsByArtist } from '@/services/album.service';
import {
  getArtist,
  getArtistAlbums,
  getArtistTopTracks,
} from '@/services/artists.service';
import { useQueries, useQuery } from '@tanstack/react-query';

export const useArtistPageData = (artistId: string) => {
  const results = useQueries({
    queries: [
      {
        queryKey: ['artist', artistId],
        queryFn: () => getArtist(artistId),
        enabled: !!artistId,
      },
      {
        queryKey: ['artistTopTracks', artistId],
        queryFn: () => getArtistTopTracks(artistId),
        enabled: !!artistId,
      },
    ],
  });

  const [artistQuery, topTracksQuery] = results;

  const isLoading = results.some((query) => query.isLoading);
  const isError = results.some((query) => query.isError);

  return {
    artistData: artistQuery.data,
    topTracksData: topTracksQuery.data,
    isLoadingArtistPage: isLoading,
    isError,
  };
};

export const useArtistAlbums = (
  artistId: string,
  page: number,
  enabled: boolean,
) => {
  return useQuery({
    queryKey: ['artistAlbums', artistId, page],
    queryFn: () => getArtistAlbums({ artistId, page }),
    placeholderData: (previousData) => previousData,
    enabled: enabled,
  });
};

export const useSearchAlbumsByArtist = (
  artistName: string,
  albumQuery: string,
  page: number,
  enabled: boolean,
) => {
  return useQuery({
    queryKey: ['albumSearch', artistName, albumQuery, page],
    queryFn: () => searchAlbumsByArtist({ artistName, albumQuery, page }),
    placeholderData: (previousData) => previousData,
    enabled: enabled,
  });
};
