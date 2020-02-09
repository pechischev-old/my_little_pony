import { IPony } from "../entities";
const ponies = require('./mocks/ponies.json');

export class PonyRepository {

    private items: IPony[] = [];

    constructor() {
        this.items = ponies;
    }

    load(items: IPony[]) {

    }

    getItems(): IPony[] {
        return this.items;
    }
}