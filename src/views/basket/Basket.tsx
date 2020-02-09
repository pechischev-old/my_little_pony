import React, { Fragment, useContext, useEffect, useState } from 'react';
import { List, ListItem, Pagination } from '../../components';
import { IListItem } from '../../interfaces';
import { ITEMS_LIMIT } from '../../config';
import { AppContext } from '../../AppContext';
import { ICatalog } from '../../interfaces/ICatalog';

export const Basket = () => {
    const {basketService} = useContext(AppContext);

    const [page, setPage] = useState(0);
    const [content, setContent] = useState<ICatalog<IListItem>>({items: [], count: 0});
    const {items = [], count} = content;

    useEffect(() => {
        setContent(basketService.getListData({limit: ITEMS_LIMIT, page}));
    }, [page]);

    return (
        <div className={'basket'}>
            <List
                items={items}
                render={(item: IListItem) =>
                    <Fragment>
                        <ListItem item={item}/>
                        <div onClick={() => basketService.remove(item.id)}>X</div>
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