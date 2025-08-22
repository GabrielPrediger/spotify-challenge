import { createContext, useState, type ReactNode } from 'react';
import type { PlayerContextType } from './@types';
import type { PlayerTrack } from './@types';

export const PlayerContext = createContext<PlayerContextType | undefined>(
  undefined,
);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [track, setTrack] = useState<PlayerTrack | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <PlayerContext.Provider
      value={{ track, setTrack, isPlaying, setIsPlaying }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
