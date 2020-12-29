import React from 'react';
import { AuthStore } from '../stores';

export const stores = {
    AuthStore: new AuthStore(),
};

export const storesContext = React.createContext(stores);
