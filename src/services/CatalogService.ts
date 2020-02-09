import { PonyRepository, ColorRepository, KindRepository } from '../models';
import { ICatalog } from '../interfaces/ICatalog';
import { IItem, IListItem } from '../interfaces';

export class CatalogService {
    private ponyRepository = new PonyRepository();
    private colorRepository = new ColorRepository();
    private kindRepository = new KindRepository();

    getListData(params: object, filters: object): ICatalog<IListItem> {
        return this.ponyRepository.matching(params, filters);
    }

    getColors(): IItem[] {
        return this.colorRepository.getItems();
    }

    getKinds(): IItem[] {
        return this.kindRepository.getItems();
    }
}