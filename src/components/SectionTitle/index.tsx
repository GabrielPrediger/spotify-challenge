import type { SectionTitleProps } from './@types';

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="mb-4 cursor-pointer text-2xl font-bold tracking-tight text-white hover:underline">
      {children}
    </h2>
  );
}
