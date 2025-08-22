import { AnimatePresence, motion } from 'framer-motion';
import { TrackInfo } from './TrackInfo';
import { PlayerControls } from './PlayerControls';
import { DeviceControls } from './DeviceControls';
import { footerVariants } from './config/style.config';
import { usePlayerContext } from '@/context/PlayerContext/hooks';
import { PlayerControlsMobile } from './PlayerControlsMobile';

export function MediaPlayer() {
  const { isPlaying, setIsPlaying } = usePlayerContext();

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="pointer-events-none absolute bottom-0 flex w-full items-center gap-4 bg-transparent pr-5"
    >
      <div className="flex w-1/4 justify-start">
        <div className="pointer-events-auto hidden sm:block">
          <AnimatePresence>
            {isPlaying && <TrackInfo isPlaying={isPlaying} />}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex w-2/4 justify-center">
        {/* Player de Desktop */}
        <div className="pointer-events-auto hidden sm:block">
          <PlayerControls
            isPlaying={isPlaying}
            onPlayPause={() => setIsPlaying(!isPlaying)}
          />
        </div>
      </div>

      <PlayerControlsMobile
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying(!isPlaying)}
      />

      <div className="mr-4 flex w-1/4 justify-end">
        <div className="pointer-events-auto hidden items-center gap-4 sm:flex">
          <DeviceControls />
        </div>
      </div>
    </motion.footer>
  );
}
