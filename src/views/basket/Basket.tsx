import React, { FC, Fragment, useEffect, useState } from 'react';
import { List, ListItem, Pagination } from '../../components';
import { IListItem, IListData } from '../../interfaces';
import { ITEMS_LIMIT } from '../../config';

interface IBasketProps {
    items: IListItem[];

    removeFromBasket(item: IListItem): void;
}

export const Basket: FC<IBasketProps> = ({removeFromBasket, items}) => {
    const [page, setPage] = useState(0);
    const [content, setContent] = useState<IListData<IListItem>>({items, count: 0});

    useEffect(() => {
        setContent({items: items.slice(page, page + ITEMS_LIMIT), count: items.length});
    }, [page, items]);

    return (
        <div className={'basket'}>
            {!items.length ? <div>Ваша корзина пуста</div> : (
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