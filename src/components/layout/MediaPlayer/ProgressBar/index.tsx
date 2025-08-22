import { formatDuration } from '@/utils/format';
import type { ProgressBarProps } from './@types';
import { useProgressBar } from './hooks/useProgressBar';

export function ProgressBar({
  duration,
  isPlaying,
  timer = false,
}: ProgressBarProps) {
  const { progressPercentage, currentTime } = useProgressBar({
    duration,
    isPlaying,
  });

  return (
    <div className="flex w-full max-w-xl items-center gap-2">
      {timer && (
        <span className="w-10 text-right text-xs text-zinc-400">
          {formatDuration(currentTime)}
        </span>
      )}

      <div className="group h-1 flex-1 rounded-full bg-purple-900">
        <div
          className="relative h-1 rounded-full bg-purple-500"
          style={{ width: `${progressPercentage}%` }}
        >
          <div className="absolute top-1/2 right-0 h-3 w-3 -translate-y-1/2 rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>

      {timer && (
        <span className="w-10 text-xs text-zinc-400">
          {formatDuration(duration || 0)}
        </span>
      )}
    </div>
  );
}
