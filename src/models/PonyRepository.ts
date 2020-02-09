import { IListItem } from '../interfaces';
const ponies = require('./mocks/ponies.json');

export class PonyRepository {
    private items: IListItem[] = [];

    constructor() {
        this.items = ponies;
    }

    matching(params: any, filters: any = {}): any { // TODO: избавиться от any
        const { limit, page } = params;
        const items = this.items.filter((item) => this.filterItems(item, filters));
        return {
            items: items.slice(page, page + limit),
            count: items.length
        };
    }

    private filterItems(item: IListItem, filters: any): boolean {
        const {price = {}, color, kind, isNew} = filters;
        const {from = 0, to = Infinity} = price;

        const containPrice = parseFloat(from) <= item.price && item.price <= parseFloat(to);
        const hasColor = !!color ? parseFloat(color) === item.color : true;
        const hasKind = !!kind ? parseFloat(kind) === item.kind : true;
        const hasNewStatus = !!isNew ? !!+isNew === item.isNew : true;

        return containPrice && hasColor && hasKind && hasNewStatus;
    }
}