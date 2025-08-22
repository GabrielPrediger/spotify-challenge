import { Skeleton } from '@/components/ui/skeleton';

export function TrackInfoSkeleton() {
  return (
    <div className="flex w-[18rem] min-w-[18rem] items-center justify-between gap-4 rounded-r-full border border-l-0 border-[#393053] bg-[#040D12] p-2 backdrop-blur-md">
      <Skeleton className="h-14 w-20 rounded-full bg-[#393053]" />
      <div className="w-full space-y-2">
        <Skeleton className="mx-auto h-4 w-3/4 bg-[#393053]" />
        <Skeleton className="mx-auto h-4 w-1/2 bg-[#393053]" />
      </div>
    </div>
  );
}
