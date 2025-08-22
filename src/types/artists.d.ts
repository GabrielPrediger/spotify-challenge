export interface SpotifyExternalUrls {
  spotify: string;
}

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyCopyright {
  text: string;
  type: 'C' | 'P';
}

export interface SpotifyExternalIds {
  upc?: string;
  isrc?: string;
  ean?: string;
}

export interface SpotifyArtist {
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  name: string;
  type: 'artist';
  uri: string;
}

export interface SpotifyTrack {
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  name: string;
  preview_url: string | null;
  track_number: number;
  type: 'track';
  uri: string;
  is_local: boolean;
}

export interface SpotifyTrackPaging {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: SpotifyTrack[];
}

export interface SpotifyAlbum {
  album_type: 'album' | 'single' | 'compilation';
  total_tracks: number;
  available_markets: string[];
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string; // ISO format (YYYY-MM-DD)
  release_date_precision: 'year' | 'month' | 'day';
  type: 'album';
  uri: string;
  artists: SpotifyArtist[];
  tracks: SpotifyTrackPaging;
  copyrights: SpotifyCopyright[];
  external_ids: SpotifyExternalIds;
  genres: string[];
  label: string;
  popularity: number;
}
