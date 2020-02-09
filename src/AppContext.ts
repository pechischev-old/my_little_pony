import { CatalogService } from './services';
import React from 'react';

export interface IAppContext {
    catalogService: CatalogService
}

export const AppContext = React.createContext<IAppContext>({} as IAppContext);
export const AppProvider = AppContext.Provider;