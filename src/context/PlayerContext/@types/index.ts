import type { SpotifyTrack as FullTrack } from '@/types/track';
import type { SpotifyTrack as AlbumTrack } from '@/types/artists';
import type { Track as BasicTrack } from '@/types/spotify';

import { type Dispatch, type SetStateAction } from 'react';

export type PlayerTrack = FullTrack | AlbumTrack | BasicTrack;

export interface PlayerContextType {
  track: PlayerTrack | undefined;
  setTrack: Dispatch<SetStateAction<PlayerTrack | undefined>>;
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}
