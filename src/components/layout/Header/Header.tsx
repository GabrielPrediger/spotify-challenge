import { MoreHorizontal, Search, Bell, HomeIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { IconButton } from './IconButton';
import { useHeader } from './hooks/useHeader';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { searchTerm, handleSearchChange } = useHeader();
  const { t } = useTranslation();

  return (
    <header className="flex w-full items-center justify-between border-b border-[#090040] bg-[#040D12] px-4 py-3">
      <div className="hidden items-center gap-2 sm:flex">
        <IconButton icon={MoreHorizontal} />
      </div>

      <div className="mr-2 sm:hidden">
        <Link
          to={'/'}
          className="flex items-center space-x-4 px-4 py-3 text-[#725CAD] transition-colors duration-200 hover:text-[#393053]"
        >
          <HomeIcon className="h-6 w-6" />
        </Link>
      </div>

      <div className="max-w-lg flex-1">
        <div className="relative">
          <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-zinc-400" />
          <Input
            placeholder={t('header_search_placeholder')}
            value={searchTerm}
            onChange={handleSearchChange}
            className="h-12 w-full rounded-full border-0 bg-[#2a2a2a] pr-12 pl-12 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-[#635985]"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <IconButton icon={Bell} />
        <LanguageSwitcher />
      </div>
    </header>
  );
};
