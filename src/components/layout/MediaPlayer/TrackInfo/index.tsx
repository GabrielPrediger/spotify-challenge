import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnimatePresence, motion } from 'framer-motion';
import { PlayingIcon } from '../PlayerIcon';
import { getFirstTwoSimple, truncateSafe } from '@/utils/format';
import { TrackInfoSkeleton } from './TrackInfoSkeleton';
import {
  COLLAPSED_WIDTH,
  EXPANDED_WIDTH,
  trackInfoContainerVariants,
} from './config/style.config';
import { useTrackInfo } from './hooks/useTrackInfo';

export const TrackInfo = ({ isPlaying }: { isPlaying: boolean }) => {
  const {
    handleBlur,
    handleFocus,
    handleMouseEnter,
    handleMouseLeave,
    expanded,
    displayTrack,
  } = useTrackInfo();

  if (!displayTrack) {
    return null;
  }

  return (
    <motion.div
      variants={trackInfoContainerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        layout
        initial={false}
        animate={{ width: expanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH }}
        transition={{ type: 'spring', stiffness: 250, damping: 30 }}
        className="flex items-center rounded-r-full border border-l-0 border-[#090040] bg-[#040D12] p-2 backdrop-blur-md"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex={0}
      >
        <AnimatePresence mode="wait">
          {displayTrack ? (
            <motion.div
              key={displayTrack.id}
              className="flex w-full items-center justify-between gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="relative flex items-center">
                  <Avatar className="h-14 w-14 rounded-md">
                    <AvatarImage
                      src={displayTrack.album?.images?.[0]?.url}
                      alt={displayTrack.name}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {getFirstTwoSimple(displayTrack.artists?.[0]?.name ?? '')}
                    </AvatarFallback>
                  </Avatar>

                  <motion.span
                    initial={false}
                    animate={{
                      opacity: isPlaying ? 1 : 0,
                      scale: isPlaying ? 1 : 0.9,
                    }}
                    transition={{ type: 'tween', duration: 0.18 }}
                    className="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/60"
                    aria-hidden
                  >
                    <PlayingIcon />
                  </motion.span>
                </div>

                <motion.div
                  className="flex flex-col overflow-hidden"
                  initial={false}
                  animate={{
                    opacity: expanded ? 1 : 0,
                    x: expanded ? 0 : -6,
                  }}
                  transition={{ duration: 0.22 }}
                  style={
                    {
                      pointerEvents: expanded ? 'auto' : 'none',
                    } as React.CSSProperties
                  }
                >
                  <h3 className="truncate font-semibold text-white">
                    {truncateSafe(displayTrack.name, { max: 28 })}
                  </h3>
                  <p className="truncate text-xs text-zinc-400">
                    {displayTrack.artists?.map((a) => a.name).join(', ')}
                  </p>
                </motion.div>
              </div>

              <div className="flex items-center">
                <motion.span
                  initial={false}
                  animate={{ opacity: expanded ? 1 : 0, x: expanded ? 0 : 6 }}
                  transition={{ duration: 0.18 }}
                  className="mr-3 text-sm text-white/70"
                  aria-hidden={!expanded}
                >
                  {/* {formatDuration(trackData.duration_ms)} */}
                </motion.span>

                <motion.span
                  className="flex items-center justify-center"
                  initial={false}
                  animate={{ scale: expanded ? 1 : 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  aria-hidden={false}
                >
                  <PlayingIcon />
                </motion.span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="skeleton"
              className="flex w-full items-center justify-between gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <TrackInfoSkeleton />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
