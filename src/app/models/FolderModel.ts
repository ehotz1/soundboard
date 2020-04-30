import { ListItemModel } from './ListItemModel';

export class FolderModel extends ListItemModel {
    public name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}