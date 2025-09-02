import { useContext } from 'react';
import { AppContext } from './main';

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error();
  }

  return context;
};
