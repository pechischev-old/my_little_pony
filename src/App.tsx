import React, { FC, useState } from 'react';
import { Basket, Catalog, Filter } from './views';
import { BasketService, CatalogService } from './services';
import { AppProvider } from './AppContext';
import { Modal } from './components/modal';
import { IListItem } from './interfaces';

const catalogService = new CatalogService();
const basketService = new BasketService();

export const App: FC = () => {
    const [filters, setFilters] = useState({});
    const [basketModal, changeBasketModal] = useState(false);
    const [filterModal, changeFilterModal] = useState(false);
    const [basketItems, changeBasketItem] = useState<IListItem[]>(basketService.getItems());

    const appendToBasket = (item: IListItem) => {
        basketService.append(item);
        changeBasketItem([...basketService.getItems()]);
    };

    const removeFromBasket = (item: IListItem) => {
        basketService.remove(item.id);
        changeBasketItem([...basketService.getItems()]);
    };

    return (
        <div className='App'>
            <AppProvider value={{basketService, catalogService}}>
                <header>
                    <button onClick={() => changeBasketModal(true)}>Корзина {basketItems.length} шт.</button>
                    <button onClick={() => changeFilterModal(true)}>Фильтры</button>
                </header>

                <Catalog filters={filters} appendToBasket={appendToBasket}/>
                <Modal visible={basketModal} onClose={() => changeBasketModal(false)}>
                    <Basket items={basketItems} removeFromBasket={removeFromBasket}/>
                </Modal>

                <Modal visible={filterModal} onClose={() => changeFilterModal(false)}>
                    <Filter onSubmit={setFilters} colors={catalogService.getColors()} kinds={catalogService.getKinds()}/>
                </Modal>
            </AppProvider>
        </div>
    );
};