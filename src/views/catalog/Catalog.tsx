import React, { FC, Fragment, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import { IListItem, IListData, IFilterParams } from '../../interfaces';
import { List, ListItem, Pagination } from '../../components';
import { ITEMS_LIMIT } from '../../config';

interface ICatalogProps {
    filters: IFilterParams;

    appendToBasket(item: IListItem): void;
}

export const Catalog: FC<ICatalogProps> = ({filters, appendToBasket}) => {
    const {catalogService} = useContext(AppContext);

    const [content, setContent] = useState<IListData<IListItem>>({items: [], count: 0});
    const [page, setPage] = useState(0);

    const {items, count} = content;

    useEffect(() => {
        setContent(catalogService.getListData({limit: ITEMS_LIMIT, page}, filters));
    }, [page, filters]);

    return (
        <div className={'catalog'}>
            {!items.length
                ? 'Извините, по вашему запросу ничего не найдено' : (
                    <Fragment>
                        <List
                            items={items}
                            render={(item: IListItem) =>
                                <Fragment>
                                    <ListItem item={item}/>
                                    <div onClick={() => appendToBasket(item)}><strong>В корзину</strong></div>
                                </Fragment>
                            }
                        />
                        <Pagination
                            step={ITEMS_LIMIT}
                            totalCount={count}
                            onChangePage={setPage}
                        />
                    </Fragment>
                )
            }
        </div>
    );
};