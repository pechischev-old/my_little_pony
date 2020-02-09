import React, { FC, Fragment, useEffect, useState } from 'react';
import { Catalog, CatalogItem, Filter } from "./views";
import { BasketService, CatalogService } from "./services";
import { IPony } from "./entities";
import { Pagination } from "./components/pagination";
import { ICatalog } from "./entities/ICatalog";

const catalogService = new CatalogService();
const basketService = new BasketService();

const ITEMS_LIMIT = 20;

export const App: FC = () => {
    const [content, setContent] = useState<ICatalog<IPony>>({items: [], count: 0});
    const [page, setPage] = useState(0);
    const [filters, setFilters] = useState({});
    const {items, count} = content;

    useEffect(() => {
        setContent(catalogService.getListData({limit: ITEMS_LIMIT, page}, filters));
    }, [page, filters]);

    return (
        <div className="App">
            <header>
                <span>Корзина</span>
                <span>Фильтры</span>
            </header>

            <Filter onSubmit={setFilters} colors={catalogService.getColors()} kinds={catalogService.getKinds()}/>

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
                step={ITEMS_LIMIT}
                totalCount={count}
                onChangePage={setPage}
            />
        </div>
    );
};