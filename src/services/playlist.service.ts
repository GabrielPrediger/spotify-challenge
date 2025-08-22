import spotifyApi from "@/lib/axios";
import type { Track } from "@/types/spotify";


interface Playlist {
  id: string;
  name: string;
  tracks: {
    items: { track: Track }[];
  };
}

export const getPlaylist = async (playlistId: string): Promise<Playlist> => {
  const { data } = await spotifyApi.get<Playlist>(`/playlists/${playlistId}`, {
    params: {
      market: 'BR',
    },
  });
  return data;
};