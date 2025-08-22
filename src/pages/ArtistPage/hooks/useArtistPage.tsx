import { useParams } from 'react-router-dom';
import {
  useArtistAlbums,
  useArtistPageData,
  useSearchAlbumsByArtist,
} from '@/hooks/useArtistService';
import { usePlayerContext } from '@/context/PlayerContext/hooks';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Track } from '@/types/spotify';
import type { SpotifyTrack as AlbumTrack } from '@/types/artists';
import { ALBUMS_PER_PAGE } from '@/services/@types';
import { useDebounce } from '@/hooks/useDebounce';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export const useArtistPage = () => {
  const { artistId } = useParams<{ artistId: string }>();
  const { t } = useTranslation();

  const [showAll, setShowAll] = useState(false);
  const [albumFilter, setAlbumFilter] = useState('');
  const [albumsCurrentPage, setAlbumsCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  const debouncedFilter = useDebounce(albumFilter, 500);

  const {
    track: currentTrackId,
    setTrack,
    setIsPlaying,
    isPlaying,
  } = usePlayerContext();

  const { artistData, topTracksData, isLoadingArtistPage, isError } =
    useArtistPageData(artistId!);

  const {
    data: browseData,
    isLoading: isBrowseLoading,
    isError: isBrowseError,
    isFetching: isBrowseFetching,
  } = useArtistAlbums(artistId!, albumsCurrentPage, !debouncedFilter);

  const {
    data: searchData,
    isLoading: isSearchLoading,
    isError: isSearchError,
    isFetching: isSearchFetching,
  } = useSearchAlbumsByArtist(
    artistData?.name!,
    debouncedFilter,
    albumsCurrentPage,
    !!debouncedFilter,
  );

  const initialLimit = 5;

  const displayedItems =
    (showAll ? topTracksData : topTracksData?.slice(0, initialLimit)) ?? [];

  const shouldShowButton = (topTracksData?.length ?? 0) > initialLimit;
  const buttonText = showAll ? t('see_less') : t('see_more');
  const isSearching = !!debouncedFilter;
  const isFetching = isSearching ? isSearchFetching : isBrowseFetching;
  const albumsData = isSearching ? searchData : browseData;

  const handleToggleShow = () => {
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowAll((prevState) => !prevState);
  };

  const handlePlayPause = (
    isCurrentTrack: boolean,
    track: Track | AlbumTrack,
  ) => {
    if (isCurrentTrack) {
      setIsPlaying(!isPlaying);
    } else {
      setTrack(track);
      setIsPlaying(true);
    }
  };

  const filteredAlbums = useMemo(() => {
    if (!browseData?.items) return [];
    if (!albumFilter) return browseData.items;

    return browseData.items.filter((album) =>
      album.name.toLowerCase().includes(albumFilter.toLowerCase()),
    );
  }, [browseData, albumFilter]);

  useEffect(() => {
    if (albumFilter && albumsCurrentPage !== 1) {
      setAlbumsCurrentPage(1);
    }
  }, [albumFilter]);

  useEffect(() => {
    if (isBrowseError || isSearchError) {
      toast.error(t('album_load_error_title'), {
        description: t('album_load_error_desc'),
      });
    }
  }, []);

  return {
    buttonText,
    handlePlayPause,
    shouldShowButton,
    isSearchLoading,
    isBrowseLoading,
    isLoadingArtistPage,
    handleToggleShow,
    isError,
    artistData,
    displayedItems,
    currentTrackId,
    isPlaying,
    albumsData: filteredAlbums,
    albumsCurrentPage,
    setAlbumsCurrentPage,
    totalPages: Math.ceil((albumsData?.total ?? 0) / ALBUMS_PER_PAGE),
    albumFilter,
    setAlbumFilter,
    isSearching,
    isFetching,
    t,
  };
};
