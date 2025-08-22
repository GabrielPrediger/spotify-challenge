import type { Album, PlaylistInfo, Track } from '@/types/spotify';

export interface FeaturedPlaylistsResponse {
  playlists: {
    items: PlaylistInfo[];
  };
}

export interface NewReleasesResponse {
  albums: {
    items: Album[];
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
}

export interface TopTracksResponse {
  tracks: Track[];
}

export const ALBUMS_PER_PAGE = 20;
