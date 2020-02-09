import React, { FC, Fragment } from 'react';
import { Catalog, CatalogItem } from "./views";
import { BasketService, CatalogService } from "./services";
import { IPony } from "./entities";
import { Pagination } from "./components/pagination";

const catalogService = new CatalogService();
const basketService = new BasketService();

export const App: FC = () => {
    const {items, count} = catalogService.getContent();

    return (
        <div className="App">
            <header>
                <span>Корзина</span>
                <span>Фильтры</span>
            </header>

            <Catalog
                items={items}
                render={(item: IPony) =>
                    <Fragment>
                        <CatalogItem item={item}/>
                        <div onClick={() => basketService.append(item)}><strong>В корзину</strong></div>
                    </Fragment>
                }
            />
            <Pagination
                step={2}
                totalCount={count}
                onChangePage={console.log}
            />
        </div>
    );
};