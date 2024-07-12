import { useEffect, useState } from 'react';

export const useLocalStorageInitState = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const searchTerm = localStorage.getItem('searchTerm');
    if (!searchTerm) return;
    setSearchTerm(searchTerm);
  }, []);

  return { searchTerm, setSearchTerm };
};
