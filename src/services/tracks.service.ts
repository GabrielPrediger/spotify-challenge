import spotifyApi from '@/lib/axios';
import type { SpotifyTrack } from '@/types/track';

export const getTrackById = async (trackId: string): Promise<SpotifyTrack> => {
  const { data } = await spotifyApi.get<SpotifyTrack>(`/tracks/${trackId}`, {});
  return data;
};
