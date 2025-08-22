export interface ExternalUrls {
  spotify: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: 'artist' | string;
  uri: string;
}

export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface Album {
  album_type: 'album' | 'single' | 'compilation' | string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string; // e.g. "2025-05-16"
  release_date_precision: 'year' | 'month' | 'day' | string;
  total_tracks: number;
  type: 'album' | string;
  uri: string;
}

export interface ExternalIds {
  isrc?: string;
  ean?: string;
  upc?: string;
  [key: string]: string | undefined;
}

export interface SpotifyTrack {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: 'track' | string;
  uri: string;
}
