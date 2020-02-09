import { PonyRepository, ColorRepository, KindRepository } from "../models";
import { ICatalog } from "../entities/ICatalog";
import { IItem, IPony } from "../entities";

export class CatalogService {
    private ponyRepository = new PonyRepository();
    private colorRepository = new ColorRepository();
    private kindRepository = new KindRepository();

    getListData(params: object, filters: object): ICatalog<IPony> {
        return this.ponyRepository.matching(params, filters);
    }

    getColors(): IItem[] {
        return this.colorRepository.getItems();
    }

    getKinds(): IItem[] {
        return this.kindRepository.getItems();
    }
}