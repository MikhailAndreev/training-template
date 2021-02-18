import React from 'react';
import { storesContext } from '../store/RootStore';

export const useRootStore = () => React.useContext(storesContext);
