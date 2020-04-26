import { Component, OnInit, Input } from '@angular/core';
import { FilePathModel } from '../models/filePathModel';

@Component({
  selector: 'app-soundbox',
  templateUrl: './soundbox.component.html',
  styleUrls: ['./soundbox.component.css']
})
export class SoundboxComponent {
  title: string;
  @Input() filePathModel: FilePathModel;
  sounds: SoundboxComponent[];
  isFolder: boolean;
  isVisible: boolean;

  constructor() {
    this.sounds = [];
  }

  ngOnInit() {
    this.title = this.getTitleFromFilePath(this.filePathModel.filePath);
    this.isFolder = this.parseFolderHierarchy(this.filePathModel.relativePath);
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
