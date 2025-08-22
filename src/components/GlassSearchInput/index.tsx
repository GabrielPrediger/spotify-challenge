import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import type { GlassSearchInputProps } from './@types';

export function GlassSearchInput({ ...props }: GlassSearchInputProps) {
  return (
    <div className="group focus-within:ring-primary/50 relative rounded-xl transition-all focus-within:ring-2">
      <Search className="text-foreground/50 absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transition-colors group-focus-within:text-white" />
      <Input
        className="bg-background/50 h-12 w-full max-w-md rounded-xl border border-white/20 pl-12 text-lg backdrop-blur-lg focus:ring-0 focus:outline-none"
        {...props}
      />
    </div>
  );
}
