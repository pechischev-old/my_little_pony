import React, { FC, useEffect, useState } from 'react';
import { Basket, Catalog, Filter } from './views';
import { BasketService, CatalogService } from './services';
import { AppProvider } from './AppContext';
import { Modal } from './components/modal';
import { IFilterParams, IListItem } from './interfaces';
import { Alert, EAlertType } from './components/alert';

const catalogService = new CatalogService();
const basketService = new BasketService();

export const App: FC = () => {
    const [filters, setFilters] = useState<IFilterParams>({} as IFilterParams);
    const [basketModal, changeBasketModal] = useState(false);
    const [filterModal, changeFilterModal] = useState(false);
    const [basketItems, changeBasketItem] = useState<IListItem[]>(basketService.getItems());
    const [isOnline, changeOnline] = useState(true);
    const [isSuccessAlert, changeSuccessAlert] = useState(false);

    useEffect(() => {
        window.onoffline = () => changeOnline(false);
        window.ononline = () => changeOnline(true);
    }, []);

    const appendToBasket = (item: IListItem) => {
        basketService.append(item);
        changeBasketItem([...basketService.getItems()]);
    };

    const removeFromBasket = (item: IListItem) => {
        basketService.remove(item.id);
        changeBasketItem([...basketService.getItems()]);
    };

    const buyItems = () => {
        changeSuccessAlert(true);
        basketService.clear();
        changeBasketItem([...basketService.getItems()]);
    };
    const hasBasketItems = !!basketItems.length;

    return (
        <div className='App'>
            <AppProvider value={{basketService, catalogService}}>
                <header>
                    <button disabled={!hasBasketItems} onClick={() => changeBasketModal(true)}>Корзина {basketItems.length} шт.</button>
                    <button onClick={() => changeFilterModal(true)}>Фильтры</button>
                </header>

                <Catalog filters={filters} appendToBasket={appendToBasket}/>
                <Modal visible={basketModal} onClose={() => changeBasketModal(false)}>
                    <Basket items={basketItems} removeFromBasket={removeFromBasket}/>
                    <div>
                        <button disabled={!isOnline || !hasBasketItems} onClick={buyItems}>Купить</button>
                    </div>
                </Modal>

                <Modal visible={filterModal} onClose={() => changeFilterModal(false)}>
                    <Filter onSubmit={setFilters} colors={catalogService.getColors()} kinds={catalogService.getKinds()}/>
                </Modal>

                <Alert title={'Нет сети'} type={EAlertType.NEGATIVE} isShow={!isOnline}/>
                <Alert title={'Заказ создан'} type={EAlertType.POSITIVE} isShow={isSuccessAlert} changeShow={() => changeSuccessAlert(false)}/>
            </AppProvider>
        </div>
    );
};