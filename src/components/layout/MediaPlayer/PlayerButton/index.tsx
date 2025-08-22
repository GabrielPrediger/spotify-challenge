import { Button } from '@/components/ui/button';
import type { PlayerButtonProps } from './types';

export const PlayerButton = ({ icon: Icon }: PlayerButtonProps) => (
  <Button
    variant="ghost"
    size="icon"
    className="bg-transparent text-zinc-400 hover:bg-transparent hover:text-zinc-400/60"
  >
    <Icon className="h-5 w-5" />
  </Button>
);
