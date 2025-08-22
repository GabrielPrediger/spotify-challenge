import type { ArtistLinkProps } from '../@types';
import { useTrackArtistsName } from './hooks/useTrackArtistsName';

export const TrackArtistsName = ({ artist }: ArtistLinkProps) => {
  const { handleClick } = useTrackArtistsName({ artistId: artist?.id });

  return (
    <span
      onClick={handleClick}
      className="truncate hover:cursor-pointer hover:underline hover:opacity-85"
    >
      {artist.name}
    </span>
  );
};
