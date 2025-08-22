export interface ImageObject {
  url: string;
  height?: number;
  width?: number;
}

export interface Artist {
  id: string;
  name: string;
  popularity: number;
  genres: string[];
  images: ImageObject[];
}

export interface SimplifiedArtist {
  id: string;
  name: string;
}

export interface SpotifySearchResponse<T> {
  items: T[];
  limit: number;
  offset: number;
  total: number;
}

export interface Album {
  id: string;
  name: string;
  images: ImageObject[];
  artists: SimplifiedArtist[];
}

export interface Track {
  id: string;
  name: string;
  artists: Artist[];
  album: Album;
  duration_ms: number;
  explicit: boolean;
  preview_url: string | null;
}

export interface PlaylistInfo {
  id: string;
  name: string;
  description: string;
  images: ImageObject[];
}
