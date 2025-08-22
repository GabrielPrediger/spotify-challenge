import { useEffect, useRef, useState } from 'react';
import type { UseProgressBarProps } from '../@types';

export const useProgressBar = ({
  duration,
  isPlaying,
}: UseProgressBarProps) => {
  const [currentTime, setCurrentTime] = useState(0);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number>(0);
  const pausedTimeRef = useRef<number>(0);

  useEffect(() => {
    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTimeRef.current;

      const newTime = Math.min(elapsed, duration);
      setCurrentTime(newTime);

      if (elapsed < duration) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    if (isPlaying) {
      startTimeRef.current = performance.now() - pausedTimeRef.current;

      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      pausedTimeRef.current = currentTime;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, duration]);

  useEffect(() => {
    setCurrentTime(0);
    pausedTimeRef.current = 0;
  }, [duration]);

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return { progressPercentage, currentTime };
};
