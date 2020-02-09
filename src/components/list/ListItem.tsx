import React, { FC } from 'react';
import { IListItem } from '../../interfaces';

interface ICatalogItem {
    item: IListItem
}

export const ListItem: FC<ICatalogItem> = ({item}) => {
    const {name, isNew, color, price, kind} = item;
    const label = isNew ? <div>Новый</div> : null;
    return (
        <div>
            <div>
                <div>Цвет {color}</div>
                <div>Цена {price}</div>
                <div>Тип {kind}</div>
                {label}
            </div>
            <div>{name}</div>
        </div>
    );
};