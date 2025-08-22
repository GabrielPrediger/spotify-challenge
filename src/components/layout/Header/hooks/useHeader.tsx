import { useSearchContext } from '@/context/SearchContext/hooks';
import type { ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useHeader = () => {
  const { searchTerm, setSearchTerm } = useSearchContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value;
    setSearchTerm(newTerm);

    if (newTerm && location.pathname !== '/') {
      navigate('/');
    }
  };

  return {
    handleSearchChange,
    searchTerm,
  };
};
