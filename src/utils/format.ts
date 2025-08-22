import type { TruncateOptions } from './types';

export const formatDuration = (ms: number) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds.padStart(2, '0')}`;
};

export const getFirstTwoSimple = (str?: string): string => {
  if (!str) return '';
  return str.slice(0, 2);
};

export const truncateSafe = (
  str: string,
  { max = 20, ellipsis = '...', preserveWords = false }: TruncateOptions = {},
): string => {
  if (!str) return '';
  const graphemes = Array.from(str);
  if (graphemes.length <= max) return str;
  if (max <= ellipsis.length) return ellipsis.slice(0, max);

  const take = max - ellipsis.length;
  let truncated = graphemes.slice(0, take).join('');

  if (preserveWords) {
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > 0) {
      truncated = truncated.slice(0, lastSpace);
    }
    truncated = truncated.trimEnd();
    if (truncated.length === 0) {
      truncated = graphemes.slice(0, take).join('');
    }
  }

  return truncated + ellipsis;
};
