import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { useDeviceControls } from './hooks/useDeviceControls';
import { itemVariants } from './config/style.config';

export const DeviceControls = () => {
  const {
    VolumeIcon,
    handleMouseDown,
    isHovered,
    setIsHovered,
    sliderRef,
    volume,
    setVolume,
  } = useDeviceControls();

  return (
    <motion.div
      onClick={() => setVolume(0)}
      variants={itemVariants}
      className="relative flex items-center rounded-full bg-black/20 p-2 backdrop-blur-md sm:gap-2 sm:border sm:border-[#725CAD]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-[120%] left-1/2 -translate-x-1/2 rounded-full bg-zinc-800 p-2 shadow-lg"
          >
            <div
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              className="flex h-24 w-2 cursor-pointer flex-col-reverse rounded-full bg-zinc-600"
            >
              <div
                className="w-full rounded-full bg-white"
                style={{ height: `${volume * 100}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="icon"
        className="rounded-full text-zinc-400 hover:text-white"
      >
        <VolumeIcon className="h-3 w-3 sm:h-5 sm:w-5" />
      </Button>
    </motion.div>
  );
};
