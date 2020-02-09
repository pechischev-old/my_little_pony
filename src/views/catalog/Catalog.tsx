import React, { FC, Fragment, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import { ICatalog } from '../../interfaces/ICatalog';
import { IListItem } from '../../interfaces';
import { List, ListItem, Pagination } from '../../components';
import { ITEMS_LIMIT } from '../../config';

export const Catalog: FC<any> = ({filters}) => {
    const {catalogService, basketService} = useContext(AppContext);

    const [content, setContent] = useState<ICatalog<IListItem>>({items: [], count: 0});
    const [page, setPage] = useState(0);

    const {items, count} = content;

    useEffect(() => {
        setContent(catalogService.getListData({limit: ITEMS_LIMIT, page}, filters));
    }, [page, filters]);

    return (
        <div className={'catalog'}>
            <List
                items={items}
                render={(item: IListItem) =>
                    <Fragment>
                        <ListItem item={item}/>
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