import { formatDuration } from '@/utils/format';
import { PauseIcon, Play } from 'lucide-react';
import clsx from 'clsx';
import React from 'react';
import { TrackArtistsName } from './TrackArtistsName';
import type { TrackItemProps } from './@types';

export function TrackItem({
  track: currentTrack,
  index,
  isCurrentTrack,
  isThisTrackPlaying,
  handlePlayPause,
}: TrackItemProps) {
  return (
    <button
      onClick={handlePlayPause}
      className="group flex w-full items-center rounded-md p-2 text-left transition-colors duration-300 hover:bg-zinc-800 focus:outline-none"
      aria-label={`Tocar ${currentTrack.name} de ${currentTrack.artists.map((a) => a.name).join(', ')}`}
    >
      <div className="relative flex h-6 w-6 items-center justify-center">
        {isCurrentTrack ? (
          <>
            {isThisTrackPlaying ? (
              <PauseIcon size={16} className="animate-pulse text-purple-500" />
            ) : (
              <Play size={16} fill="currentColor" className="text-purple-500" />
            )}
          </>
        ) : (
          <>
            <span className="text-sm text-zinc-400 transition-opacity group-hover:opacity-0">
              {index + 1}
            </span>
            <Play
              size={16}
              fill="currentColor"
              className="absolute text-purple-500 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </>
        )}
      </div>

      {'album' in currentTrack && currentTrack.album?.images?.[0]?.url && (
        <img
          src={currentTrack?.album?.images[0]?.url}
          alt={`Capa do álbum de ${currentTrack.name}`}
          className="ml-4 h-12 w-12 rounded-md object-cover"
        />
      )}

      <div className="ml-4 flex-1 overflow-hidden">
        <p
          className={clsx('truncate font-semibold', {
            'text-purple-500': isCurrentTrack,
            'text-white': !isCurrentTrack,
          })}
        >
          {currentTrack?.name}
        </p>

        <div className="flex items-center text-sm text-zinc-400">
          {currentTrack?.artists.map((artist, idx, arr) => (
            <React.Fragment key={artist.id}>
              <TrackArtistsName artist={artist} />
              {idx < arr.length - 1 && <span>,&nbsp;</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <span className="ml-4 text-sm text-zinc-400">
        {formatDuration(currentTrack?.duration_ms)}
      </span>
    </button>
  );
}
