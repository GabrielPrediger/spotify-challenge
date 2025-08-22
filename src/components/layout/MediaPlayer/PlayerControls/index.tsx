import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { SkipBack, Play, Pause, SkipForward } from 'lucide-react';
import { itemVariants } from './config/style.config';
import type { PlayerControlsProps } from './types';
import { PlayerButton } from '../PlayerButton';
import { usePlayerContext } from '@/context/PlayerContext/hooks';
import { ProgressBar } from '../ProgressBar';

export const PlayerControls = ({
  isPlaying,
  onPlayPause,
}: PlayerControlsProps) => {
  const { track } = usePlayerContext();

  return (
    <motion.div
      variants={itemVariants}
      className="mb-3 flex w-[17rem] flex-col items-center gap-2 rounded-full border border-[#090040] bg-[#040D12] px-14 py-2 backdrop-blur-md"
    >
      <div className="flex items-center gap-2">
        <PlayerButton icon={SkipBack} />
        <Button
          size="icon"
          className="h-8 w-8 rounded-full bg-white text-black hover:bg-zinc-200"
          onClick={onPlayPause}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4 fill-black" />
          )}
        </Button>
        <PlayerButton icon={SkipForward} />
      </div>

      <ProgressBar
        duration={track?.duration_ms as number}
        isPlaying={isPlaying}
        timer={true}
      />
    </motion.div>
  );
};
