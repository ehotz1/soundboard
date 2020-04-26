export class FilePathModel {
    public filePath: string;
    public relativePath: string;

    constructor(filePath: string, relativePath: string) {
        this.filePath = filePath;
        this.relativePath = relativePath;
    }
}