import { PonyRepository, ColorRepository, KindRepository } from "../models";
import { ICatalog } from "../entities/ICatalog";
import { IPony } from "../entities";

export class CatalogService {
    private ponyRepository = new PonyRepository();
    private colorRepository = new ColorRepository();
    private kindRepository = new KindRepository();

    getContent(): ICatalog<IPony> { // TODO: добавить учет фильтров + заменить хранидище на запросы с моковыми данными
        const items = this.ponyRepository.getItems();
        return {
            items,
            count: items.length
        };
    }
}