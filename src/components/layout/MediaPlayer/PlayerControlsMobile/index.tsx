import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import { DeviceControls } from '../DeviceControls';
import { PlayerButton } from '../PlayerButton';
import { ProgressBar } from '../ProgressBar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getFirstTwoSimple } from '@/utils/format';
import type { PlayerControlsMobileProps } from './@types';
import { usePlayerContext } from '@/context/PlayerContext/hooks';
import { useTranslation } from 'react-i18next';

export const PlayerControlsMobile = ({
  isPlaying,
  onPlayPause,
}: PlayerControlsMobileProps) => {
  const { track } = usePlayerContext();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:hidden">
      <div className="pointer-events-auto flex min-w-screen items-center justify-between rounded-t-xl bg-gradient-to-br from-[#544863] to-[#08060f] px-3 py-2 shadow-sm">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage
              src={
                track && 'album' in track
                  ? track.album?.images?.[0]?.url
                  : undefined
              }
              alt={track?.name || 'Track'}
              className="object-cover"
            />
            <AvatarFallback className="bg-gradient-to-br from-[#ac82df] to-[#08060f]">
              {getFirstTwoSimple(track?.artists?.[0]?.name ?? '')}
            </AvatarFallback>
          </Avatar>
          <div className="max-w-[9rem]">
            <p className="truncate text-xs text-zinc-400">
              {track?.name || t('unknown_track')}
            </p>
            <p className="truncate text-xs text-zinc-400">
              {track?.artists?.map((a) => a.name).join(', ') ||
                t('unknown_artist')}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <PlayerButton icon={SkipBack} />
          <Button
            size="icon"
            className="h-4 w-4 rounded-full text-white"
            onClick={onPlayPause}
          >
            {isPlaying ? (
              <Pause className="h-1 w-1 fill-white" />
            ) : (
              <Play className="h-1 w-1 fill-white" />
            )}
          </Button>
          <PlayerButton icon={SkipForward} />
        </div>
        <DeviceControls />
      </div>
      <ProgressBar
        duration={track?.duration_ms as number}
        isPlaying={isPlaying}
        timer={false}
      />
    </div>
  );
};
