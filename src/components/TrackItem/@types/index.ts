import type { Track } from '@/types/spotify';
import type { SpotifyTrack } from '@/types/artists';

export interface TrackItemProps {
  track: Track | SpotifyTrack;
  index: number;
  artistId?: string;
  isCurrentTrack: boolean;
  isThisTrackPlaying: boolean;
  handlePlayPause: () => void;
  type: 'album' | 'artist';
}

export interface ArtistLinkProps {
  artist: { id: string; name: string };
}

export interface useTrackArtistsNameProps {
  artistId: string;
}
