import { Component, OnInit, Input } from '@angular/core';
import { ListItemModel } from '../models/ListItemModel';
import { FileModel } from '../models/FileModel';

@Component({
  selector: 'app-soundbox',
  templateUrl: './soundbox.component.html',
  styleUrls: ['./soundbox.component.css']
})
export class SoundboxComponent {
  title: string;
  @Input() listItemModel: ListItemModel;
  sounds: SoundboxComponent[];
  isFolder: boolean;
  isVisible: boolean;

  constructor() {
    this.sounds = [];
  }

  ngOnInit() {
    if (this.listItemModel instanceof FileModel) {
      this.title = this.getTitleFromFilePath(this.listItemModel.filePath);
      this.isFolder = this.parseFolderHierarchy(this.listItemModel.relativePath);
    }
  }

  public addChild(child: SoundboxComponent) {
    this.sounds.push(child);
  }

  public getFileId(): string {
    return "";
  }

  public toString() : string {
    return this.title;
  }

  private getTitleFromFilePath(fileName: string) : string {
    var splitFile = fileName.split('\\');
    var title = splitFile[splitFile.length - 1];
    var splitTitle = title.split('.');
    splitTitle.pop();
    return splitTitle.join();
  }

  private parseFolderHierarchy(relativePath: string) : boolean {
    var relativePathArray = relativePath.split('/').shift(); //Remove the selected directory

    return false;
  }

}
