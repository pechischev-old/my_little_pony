import React, { FC, useState } from 'react';
import { Basket, Catalog, Filter } from './views';
import { BasketService, CatalogService } from './services';
import { AppProvider } from './AppContext';
import { Modal } from './components/modal';

const catalogService = new CatalogService();
const basketService = new BasketService();

export const App: FC = () => {
    const [filters, setFilters] = useState({});
    const [basketModal, changeBasketModal] = useState(false);
    const [filterModal, changeFilterModal] = useState(false);

    return (
        <div className='App'>
            <AppProvider value={{basketService, catalogService}}>
                <header>
                    <button onClick={() => changeBasketModal(true)}>Корзина</button>
                    <button onClick={() => changeFilterModal(true)}>Фильтры</button>
                </header>

                <Catalog filters={filters}/>
                <Modal visible={basketModal} onClose={() => changeBasketModal(false)}>
                    <Basket/>
                </Modal>

                <Modal visible={filterModal} onClose={() => changeFilterModal(false)}>
                    <Filter onSubmit={setFilters} colors={catalogService.getColors()} kinds={catalogService.getKinds()}/>
                </Modal>
            </AppProvider>
        </div>
    );
};