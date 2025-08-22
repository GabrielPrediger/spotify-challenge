import { ArrowLeft } from 'lucide-react';
import { useGoBackButton } from './hooks/useGoBackButton';
import { useTranslation } from 'react-i18next';

export const GoBackButton = () => {
  const { handleGoBack } = useGoBackButton();
  const { t } = useTranslation();

  return (
    <button
      onClick={handleGoBack}
      className="flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-white transition-colors hover:bg-white/20 sm:bg-white/10"
    >
      <ArrowLeft size={16} />
      {t('back')}
    </button>
  );
};
