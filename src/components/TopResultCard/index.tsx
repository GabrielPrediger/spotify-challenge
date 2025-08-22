import { Link } from 'react-router-dom';
import type { TopResultCardProps } from './@types';
import { useTranslation } from 'react-i18next';

export function TopResultCard({ artist }: TopResultCardProps) {
  const { t } = useTranslation();

  return (
    <Link to={`/artist/${artist.id}`}>
      <div className="rounded-lg bg-[#272727] p-6 transition-colors duration-300 hover:bg-[#282828]">
        <img
          src={artist.images[0]?.url}
          alt={artist.name}
          className="mb-4 h-28 w-28 rounded-full object-cover shadow-lg"
        />
        <h2 className="text-3xl font-bold text-white">{artist.name}</h2>
        <span className="text-sm font-semibold tracking-wider text-white/70 uppercase">
          {t('artist')}
        </span>
      </div>
    </Link>
  );
}
