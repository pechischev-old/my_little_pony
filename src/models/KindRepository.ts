import { IItem } from "../entities";
const kinds = require('./mocks/kinds.json');

export class KindRepository {
    private items: IItem[] = [];

    constructor() {
        this.items = kinds;
    }

    getItems(): IItem[] {
        return this.items;
    }

    getItem(id: number): IItem | undefined {
        return this.items.find((item) => item.id === id);
    }
}