import type { SpotifyArtistResponse } from '@/types/topTracks';
import spotifyApi from '../lib/axios';
import type { Artist, SpotifySearchResponse, Track } from '../types/spotify';
import { ALBUMS_PER_PAGE, type TopTracksResponse } from './@types';
import type { SpotifyArtistAlbumsResponse } from '@/types/artists.albums';

interface SearchApiResponse {
  artists: SpotifySearchResponse<Artist>;
}

export const searchArtists = async (query: string): Promise<Artist[]> => {
  if (!query) return [];

  const { data } = await spotifyApi.get<SearchApiResponse>('/search', {
    params: {
      q: query,
      type: 'artist',
      limit: 20,
    },
  });

  return data.artists.items;
};

export const getArtist = async (
  artistId: string,
): Promise<SpotifyArtistResponse> => {
  const { data } = await spotifyApi.get<SpotifyArtistResponse>(
    `/artists/${artistId}`,
  );
  return data;
};

export const getArtistTopTracks = async (
  artistId: string,
): Promise<Track[]> => {
  const { data } = await spotifyApi.get<TopTracksResponse>(
    `/artists/${artistId}/top-tracks`,
    {
      params: {
        market: 'BR',
      },
    },
  );
  return data.tracks;
};

export const getArtistAlbums = async ({
  artistId,
  page = 1,
}: {
  artistId: string;
  page?: number;
}): Promise<SpotifyArtistAlbumsResponse> => {
  const offset = (page - 1) * ALBUMS_PER_PAGE;

  const { data } = await spotifyApi.get<SpotifyArtistAlbumsResponse>(
    `/artists/${artistId}/albums?include_groups=album,single&market=BR&limit=${ALBUMS_PER_PAGE}&offset=${offset}`,
  );
  return data;
};
