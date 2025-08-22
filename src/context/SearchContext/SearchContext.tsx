import { createContext, useState, type ReactNode } from 'react';
import type { SearchContextType } from './@types';

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined,
);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}
