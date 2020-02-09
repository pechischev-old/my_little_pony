import React, { FC, ReactElement } from "react";

interface ICatalogProps<T> {
    items: T[];
    render: (item: T) => ReactElement;
}

// TODO: убрать any
export const Catalog: FC<ICatalogProps<any>> = ({items, render}) => {
    return (
        <div>
            {
                items.map((item, index) => <div key={index}>
                    {render(item)}
                </div>)
            }
        </div>
    );
};