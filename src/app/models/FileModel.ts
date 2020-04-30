import { ListItemModel } from './ListItemModel';

export class FileModel extends ListItemModel {
    public filePath: string;
    public relativePath: string;

    constructor(filePath: string, relativePath: string) {
        super();
        this.filePath = filePath;
        this.relativePath = relativePath;
    }
}