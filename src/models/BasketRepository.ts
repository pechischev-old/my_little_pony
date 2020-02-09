import { IListItem } from '../interfaces';

export class BasketRepository {
    private static STORAGE_KEY = 'shop_basket';
    private items: IListItem[] = [];

    constructor() {
        this.load();
    }

    append(item: any) {
        const {id} = item;
        if (!!this.getItem(id)) {
            return;
        }
        this.items.push(item);
        this.save();
    }

    remove(id: number) {
        if (!this.getItem(id)) {
            return;
        }
        this.items = this.items.filter(item => item.id !== id);
        this.save();
    }

    removeAll() {
        this.items = [];
        this.save();
    }

    getItems(): IListItem[] {
        return this.items;
    }

    getItem(id: number) {
        return this.items.find(item => item.id === id);
    }

    private save() {
        localStorage.setItem(BasketRepository.STORAGE_KEY, JSON.stringify(this.items));
    }

    private load() {
        const data = localStorage.getItem(BasketRepository.STORAGE_KEY);
        if (!data) {
            return;
        }
        try {
            this.items = JSON.parse(data);
        } catch (e) {
            console.error('Can`t load basket data');
            this.items = [];
            localStorage.removeItem(BasketRepository.STORAGE_KEY);
        }

    }
}