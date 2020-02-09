import { IListItem } from '../interfaces';
import { BasketRepository } from '../models';

export class BasketService {
    private repository = new BasketRepository();

    append(item: IListItem) {
        this.repository.append(item);
    }

    remove(id: number) {
        this.repository.remove(id);
    }

    getListData(params: object): any {
        return this.repository.matching(params);
    }
}