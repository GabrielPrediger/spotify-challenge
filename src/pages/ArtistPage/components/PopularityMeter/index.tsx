import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

interface PopularityMeterProps {
  popularity: number;
}

const PopularityMeter = ({ popularity }: PopularityMeterProps) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (popularity / 100) * circumference;

  const getRingColor = (p: number) => {
    if (p > 85) return 'text-purple-500';
    if (p >= 70) return 'text-yellow-500';
    if (p < 70) return 'text-cyan-500';
  };
  const ringColorClass = getRingColor(popularity);

  return (
    <div className="relative flex h-14 w-14 items-center justify-center sm:h-28 sm:w-28">
      <svg className="absolute h-full w-full" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="8"
          className="stroke-white/10"
          fill="transparent"
        />
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="8"
          fill="transparent"
          strokeLinecap="round"
          className={`stroke-current ${ringColorClass}`}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: 'easeOut',
          }}
          transform="rotate(-90 60 60)"
        />
      </svg>

      <div className="z-10 flex flex-col items-center justify-center text-white">
        <Flame
          className={`mb-0 h-4 w-4 sm:mb-1 sm:h-5 sm:w-5 ${ringColorClass}`}
        />
        <span className="text-sm font-bold drop-shadow-md sm:text-2xl">
          {popularity}
        </span>
        <span className="hidden text-xs font-light text-zinc-300 sm:block">
          Hype
        </span>
      </div>
    </div>
  );
};

export default PopularityMeter;
