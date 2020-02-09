import { PonyRepository, ColorRepository, KindRepository } from '../models';
import { ICatalog } from '../interfaces/ICatalog';
import { IItem, IListItem } from '../interfaces';

export class CatalogService {
    private ponyRepository = new PonyRepository();
    private colorRepository = new ColorRepository();
    private kindRepository = new KindRepository();

    getListData(params: object, filters: object): ICatalog<IListItem> {
        const {items, count} = this.ponyRepository.matching(params, filters);
        return {
            count,
            items: items.map(({color, kind, ...rest}: IListItem) => ({
                ...rest,
                color: this.colorRepository.getItem(color)?.title,
                kind: this.kindRepository.getItem(color)?.title
            }))
        }
    }

    getColors(): IItem[] {
        return this.colorRepository.getItems();
    }

    getKinds(): IItem[] {
        return this.kindRepository.getItems();
    }
}