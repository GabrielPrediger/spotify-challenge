import { useHandleNavigate } from '@/utils/navigate';
import type { useTrackArtistsNameProps } from '../../@types';

export const useTrackArtistsName = ({ artistId }: useTrackArtistsNameProps) => {
  const handleNavigate = useHandleNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleNavigate({ type: 'artist', id: artistId });
  };

  return {
    handleClick,
  };
};
