import React, { FC, useEffect, useState } from "react";
import './Pagination.scss';

interface IPagination {
    totalCount: number;
    step: number;

    onChangePage(page: number): void;
}

export const Pagination: FC<IPagination> = ({totalCount, step, onChangePage}) => {
    const [page, setPage] = useState(0);

    useEffect(() => {
        onChangePage(page);
    });

    const getRange = () => ({
        start: page,
        end: Math.min(step + page, totalCount)
    });

    const isBeginPage = page === 0;
    const isEndPage = getRange().end === totalCount;

    const onBeginPage = () => {
        if (isBeginPage) {
            return;
        }
        setPage(0);
    };

    const onPrevPage = () => {
        if (isBeginPage) {
            return;
        }
        setPage(Math.max(page - step, 0));
    };

    const onNextPage = () => {
        if (isEndPage) {
            return;
        }
        setPage(page + step);
    };

    const onEndPage = () => {
        if (isEndPage) {
            return;
        }
        const countPages = Math.ceil(totalCount / step);
        const position = step * countPages;
        setPage(position === totalCount ? position - step : position);
    };

    return (
        <ul className={'pagination'}>
            <li
                className={'pagination__item'}
                onClick={onBeginPage}
                data-disabled={isBeginPage}
            >
                {'<<'}
            </li>
            <li
                className={'pagination__item'}
                onClick={onPrevPage}
                data-disabled={isBeginPage}
            >
                {'<'}
            </li>
            <li
                className={'pagination__item'}
                onClick={onNextPage}
                data-disabled={isEndPage}
            >
                {'>'}
            </li>
            <li
                className={'pagination__item'}
                onClick={onEndPage}
                data-disabled={isEndPage}
            >
                {'>>'}
            </li>
        </ul>
    );
};