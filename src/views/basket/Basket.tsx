import React, { FC, Fragment, useEffect, useState } from 'react';
import { List, ListItem, Pagination } from '../../components';
import { IListItem } from '../../interfaces';
import { ITEMS_LIMIT } from '../../config';
import { ICatalog } from '../../interfaces/ICatalog';

interface IBasketProps {
    items: IListItem[];

    removeFromBasket(item: IListItem): void;
}

export const Basket: FC<IBasketProps> = ({removeFromBasket, items}) => {
    const [page, setPage] = useState(0);
    const [content, setContent] = useState<ICatalog<IListItem>>({items, count: 0});

    useEffect(() => {
        setContent({items: items.slice(page, page + ITEMS_LIMIT), count: items.length});
    }, [page, items]);

    return (
        <div className={'basket'}>
            {!items.length ? 'Ваша корзина пуста' : (
                <Fragment>
                    <List
                        items={content.items}
                        render={(item: IListItem) =>
                            <Fragment>
                                <ListItem item={item}/>
                                <div onClick={() => removeFromBasket(item)}>X</div>
                            </Fragment>
                        }
                    />
                    <Pagination
                        step={ITEMS_LIMIT}
                        totalCount={content.count}
                        onChangePage={setPage}
                    />
                </Fragment>
            )}
        </div>
    );
};