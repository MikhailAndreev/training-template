import React from 'react';
import { storesContext } from '../contexts/stores';

export const useStores = () => React.useContext(storesContext);
