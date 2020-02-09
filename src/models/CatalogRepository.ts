import { IFilterParams, IListData, IListParams } from '../interfaces';
const ponies = require('./mocks/ponies.json');

interface ICatalogItem {
    id: number;
    price: number;
    name: string;
    color: number;
    kind: number;
    isNew: boolean;
}

export class CatalogRepository {
    private items: ICatalogItem[] = [];

    constructor() {
        this.items = ponies;
    }

    matching(params: IListParams, filters: IFilterParams): IListData<ICatalogItem> {
        const { limit, page } = params;
        const items = this.items.filter((item) => this.filterItems(item, filters));
        return {
            items: items.slice(page, page + limit),
            count: items.length
        };
    }

    private filterItems(item: ICatalogItem, filters: IFilterParams): boolean {
        const {price, color, kind, isNew} = filters || {};
        const {from = 0, to = Infinity} = price || {};

        const containPrice = +from <= item.price && item.price <= +to;
        const hasColor = !!color ? +color === item.color : true;
        const hasKind = !!kind ? +kind === item.kind : true;
        const hasNewStatus = !!isNew ? !!+isNew === item.isNew : true;

        return containPrice && hasColor && hasKind && hasNewStatus;
    }
}