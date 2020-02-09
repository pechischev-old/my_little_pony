import React, { FC, ReactElement } from 'react';
import './List.scss';

interface ICatalogProps<T> {
    items: T[];
    render: (item: T) => ReactElement;
}

// TODO: убрать any
export const List: FC<ICatalogProps<any>> = ({items, render}) => {
    return (
        <div className={'list'}>
            {
                items.map((item, index) => (
                    <div className={'list__item'} key={index}>
                        {render(item)}
                    </div>
                ))
            }
        </div>
    );
};