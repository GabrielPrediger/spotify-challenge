import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages, Check } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t('language_switch')}>
          <Languages className="h-5 w-5 text-zinc-400 transition-colors hover:text-white" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 rounded-xl border border-white/10 bg-zinc-900/80 text-zinc-200 backdrop-blur-md"
        align="end"
      >
        <DropdownMenuLabel className="flex items-center gap-2 font-semibold">
          <Languages className="h-4 w-4" />
          {t('language_menu_label')}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => i18n.changeLanguage('pt')}
            className="cursor-pointer"
          >
            <span className="mr-2">🇧🇷</span>
            {t('language_portuguese_brazil')}
            {currentLanguage === 'pt' && (
              <Check className="ml-auto h-4 w-4 text-purple-400" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => i18n.changeLanguage('en')}
            className="cursor-pointer"
          >
            <span className="mr-2">🇺🇸</span>
            {t('language_english')}
            {currentLanguage === 'en' && (
              <Check className="ml-auto h-4 w-4 text-purple-400" />
            )}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
