import { useTrackService } from '@/hooks/useTrackService';
import { useEffect, useRef, useState } from 'react';
import { COLLAPSE_DELAY } from '../config/style.config';
import { usePlayerContext } from '@/context/PlayerContext/hooks';

export const useTrackInfo = () => {
  const { track } = usePlayerContext();
  const trackId = track?.id as string | undefined;
  const { trackData, isLoadingTrack } = useTrackService(trackId ?? '');

  const [expanded, setExpanded] = useState(true);
  const [displayTrack, setDisplayTrack] = useState(trackData);

  const collapseTimerRef = useRef<number | null>(null);
  const lastTrackIdRef = useRef<string | undefined>(undefined);

  const startCollapseTimer = () => {
    clearCollapseTimer();
    collapseTimerRef.current = window.setTimeout(() => {
      setExpanded(false);
    }, COLLAPSE_DELAY);
  };

  const clearCollapseTimer = () => {
    if (collapseTimerRef.current) {
      window.clearTimeout(collapseTimerRef.current);
      collapseTimerRef.current = null;
    }
  };

  useEffect(() => {
    const currentId = trackData?.id;
    if (currentId && currentId !== lastTrackIdRef.current) {
      lastTrackIdRef.current = currentId;
      setExpanded(true);
      startCollapseTimer();
    }

    if (!currentId) {
      clearCollapseTimer();
      setExpanded(true);
    }

    return () => clearCollapseTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackData?.id]);

  useEffect(() => {
    if (trackData) {
      setDisplayTrack(trackData);
    }
  }, [trackData]);

  useEffect(() => {
    return () => clearCollapseTimer();
  }, []);

  const handleMouseEnter = () => {
    clearCollapseTimer();
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    startCollapseTimer();
  };

  const handleFocus = () => {
    clearCollapseTimer();
    setExpanded(true);
  };

  const handleBlur = () => {
    startCollapseTimer();
  };

  return {
    trackData,
    isLoadingTrack,
    handleBlur,
    handleMouseLeave,
    handleMouseEnter,
    handleFocus,
    expanded,
    displayTrack,
  };
};
