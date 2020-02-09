import { ReactText } from 'react';

export interface IFilterParams {
    price: {
        from: ReactText;
        to: ReactText;
    },
    kind: ReactText;
    color: ReactText;
    isNew: ReactText;
}