import { Volume1, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const useDeviceControls = () => {
  const [volume, setVolume] = useState(0.75);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  const handleVolumeChange = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newVolume = Math.max(
        0,
        Math.min(1, (rect.bottom - event.clientY) / rect.height),
      );
      setVolume(newVolume);
    }
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    isDragging.current = true;
    handleVolumeChange(event);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Usamos a referência `isDragging.current` para evitar re-renderizações
      if (isDragging.current && sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const newVolume = Math.max(
          0,
          Math.min(1, (rect.bottom - event.clientY) / rect.height),
        );
        setVolume(newVolume);
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return {
    isHovered,
    setIsHovered,
    VolumeIcon,
    handleMouseDown,
    volume,
    sliderRef,
    setVolume,
  };
};
