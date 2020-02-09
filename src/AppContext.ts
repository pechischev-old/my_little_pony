import { BasketService, CatalogService } from './services';
import React from 'react';

export interface IAppContext {
    basketService: BasketService;
    catalogService: CatalogService
}

export const AppContext = React.createContext<IAppContext>({} as IAppContext);
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;