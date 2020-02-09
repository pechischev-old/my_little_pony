import { CatalogRepository, ColorRepository, KindRepository } from '../models';
import { IFilterParams, IItem, IListItem, IListParams, IListData } from '../interfaces';

export class CatalogService {
    private catalogRepository = new CatalogRepository();
    private colorRepository = new ColorRepository();
    private kindRepository = new KindRepository();

    getListData(params: IListParams, filters: IFilterParams): IListData<IListItem> {
        const {items, count} = this.catalogRepository.matching(params, filters);
        return {
            count,
            items: items.map(({color, kind, ...rest}) => ({
                ...rest,
                color: this.colorRepository.getItem(color)?.title,
                kind: this.kindRepository.getItem(color)?.title
            })) ,
        }
    }

    getColors(): IItem[] {
        return this.colorRepository.getItems();
    }

    getKinds(): IItem[] {
        return this.kindRepository.getItems();
    }
}