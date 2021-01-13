import { useContext } from 'react';
import { storesContext } from '../contexts/stores';

export const useStores = () => useContext(storesContext);
