import { IItem } from '../interfaces';
const colors = require('./mocks/colors.json');

export class ColorRepository {
    private items: IItem[] = [];

    constructor() {
        this.items = colors;
    }

    getItems(): IItem[] {
        return this.items;
    }

    getItem(id: number): IItem | undefined {
        return this.items.find((item) => item.id === id);
    }
}