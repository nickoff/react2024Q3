import { useState } from 'react';

export const useGetStoredState = () => {
  const storedSearchTerm = localStorage.getItem('searchTerm') || '';
  const [searchTerm, setSearchTerm] = useState(storedSearchTerm);
  return { searchTerm, setSearchTerm };
};
