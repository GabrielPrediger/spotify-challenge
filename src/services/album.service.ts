import spotifyApi from '@/lib/axios';
import type { SpotifyAlbum } from '@/types/artists';
import type { SpotifyArtistAlbumsResponse } from '@/types/artists.albums';

export const getAlbum = async (albumId: string): Promise<SpotifyAlbum> => {
  const { data } = await spotifyApi.get<SpotifyAlbum>(`/albums/${albumId}`, {});

  return data;
};

export const searchAlbumsByArtist = async ({
  artistName,
  albumQuery,
  page = 1,
}: {
  artistName: string;
  albumQuery: string;
  page?: number;
}): Promise<SpotifyArtistAlbumsResponse> => {
  const limit = 20;
  const offset = (page - 1) * limit;

  const query = `album:${albumQuery} artist:"${artistName}"`;

  const { data } = await spotifyApi.get<{
    albums: SpotifyArtistAlbumsResponse;
  }>('/search', {
    params: {
      q: query,
      type: 'album',
      market: 'BR',
      limit,
      offset,
    },
  });
  return data.albums;
};
