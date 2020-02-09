import React, { FC } from 'react';
import { IListItem } from '../../interfaces';

interface IListItemProps {
    item: IListItem
}

export const ListItem: FC<IListItemProps> = ({item}) => {
    const {name, isNew, color, price, kind} = item;
    const label = isNew ? 'Новый' : ' ';
    return (
        <div>
            <div>
                <div>Цвет {color}</div>
                <div>Тип {kind}</div>
                <div>Цена {price}</div>
                <div>{label}</div>
            </div>
            <div>{name}</div>
        </div>
    );
};