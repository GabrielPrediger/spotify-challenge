import spotifyApi from '@/lib/axios';
import type { FeaturedPlaylistsResponse, NewReleasesResponse } from './@types';
import type { PlaylistInfo } from '@/types/spotify';

export const getFeaturedPlaylists = async (): Promise<PlaylistInfo[]> => {
  const { data } = await spotifyApi.get<FeaturedPlaylistsResponse>(
    '/browse/featured-playlists',
    {
      params: {
        country: 'BR',
        limit: 10,
      },
    },
  );
  return data.playlists.items;
};

export const getNewReleases = async ({
  pageParam = 0,
}: {
  pageParam?: number;
}): Promise<NewReleasesResponse['albums']> => {
  const limit = 15;

  const { data } = await spotifyApi.get<NewReleasesResponse>(
    '/browse/new-releases',
    {
      params: {
        country: 'BR',
        limit: limit,
        offset: pageParam,
      },
    },
  );

  return data.albums;
};
