import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Skeleton className="h-40 w-40 rounded-full bg-[#393053]" />
      <div className="w-full space-y-2">
        <Skeleton className="mx-auto h-4 w-3/4 bg-[#393053]" />
        <Skeleton className="mx-auto h-4 w-1/2 bg-[#393053]" />
      </div>
    </div>
  );
}
