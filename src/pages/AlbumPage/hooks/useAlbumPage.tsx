import { usePlayerContext } from '@/context/PlayerContext/hooks';
import { useAlbumService } from '@/hooks/useAlbumService';
import { useHandleNavigate } from '@/utils/navigate';
import { useParams } from 'react-router-dom';
import type { SpotifyTrack as FullTrack } from '@/types/track';
import type { SpotifyTrack as AlbumTrack } from '@/types/artists';
import { useTranslation } from 'react-i18next';

export const useAlbumPage = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const { t } = useTranslation();

  const handleNavigate = useHandleNavigate();
  const {
    track: currentTrackId,
    setTrack,
    setIsPlaying,
    isPlaying,
  } = usePlayerContext();

  const { albumData, isLoadingAlbum, isErrorAlbum } = useAlbumService(
    albumId as string,
  );

  const handlePlayPause = (
    isCurrentTrack: boolean,
    track: FullTrack | AlbumTrack,
  ) => {
    if (isCurrentTrack) {
      setIsPlaying(!isPlaying);
    } else {
      setTrack(track);
      setIsPlaying(true);
    }
  };

  return {
    isLoadingAlbum,
    isErrorAlbum,
    albumData,
    handleNavigate,
    currentTrackId,
    isPlaying,
    handlePlayPause,
    t,
  };
};
