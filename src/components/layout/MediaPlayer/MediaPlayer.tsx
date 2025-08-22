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
      className="pointer-events-none absolute bottom-0 flex w-full items-center justify-between gap-4 bg-transparent pr-5"
    >
      <div className="pointer-events-auto hidden sm:block">
        <AnimatePresence>
          {isPlaying && <TrackInfo isPlaying={isPlaying} />}
        </AnimatePresence>
      </div>

      <div className="pointer-events-auto hidden sm:block">
        <PlayerControls
          isPlaying={isPlaying}
          onPlayPause={() => setIsPlaying(!isPlaying)}
        />
      </div>

      <PlayerControlsMobile
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying(!isPlaying)}
      />

      <div className="pointer-events-auto hidden items-center gap-4 sm:block">
        <DeviceControls />
      </div>
    </motion.footer>
  );
}
