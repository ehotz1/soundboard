import { Injectable } from '@angular/core';
import { SoundboxComponent } from './soundbox/soundbox.component';
import { Observable, of, Subject } from 'rxjs';
import { ListItemModel } from './models/ListItemModel';
import { FileModel } from './models/FileModel';
import { FolderModel } from './models/FolderModel';

@Injectable({
  providedIn: 'root'
})
export class SongUploaderService {
  soundList: Subject<SoundboxComponent[]>;
  fileList: Subject<ListItemModel[]>;

  constructor() {
    this.soundList = new Subject<SoundboxComponent[]>();
    this.fileList = new Subject<ListItemModel[]>();
  }

  public generateFileList(files) : Observable<ListItemModel[]> {
    var newFiles: ListItemModel[] = [];
    for (let i = 0; i < files.length; i++) {
      // if(this.isMissingFolder(newFiles, files[i])) {
      //   newFiles.push(this.getNewFolder(files[i].path));
      // }
      newFiles.push(new FileModel(files[i].path, files[i].webkitRelativePath));
    }
    this.fileList.next(newFiles);
    return of(newFiles);
  }

  public getFileList() : Observable<ListItemModel[]> {
    return this.fileList.asObservable();
  }

  private isMissingFolder(newFiles: ListItemModel[], file) : boolean {
    //TODO
    return false;
  }

  private getNewFolder(filePath: string) : FolderModel {
    //TODO
    return new FolderModel("");
  }

  // public parseFilePaths(files) : Observable<SoundboxComponent[]> {
  //   //clear soundList?
  //   var newSounds: SoundboxComponent[] = [];
  //   for (let i = 0; i < files.length; i++) {
  //     //var folders = files[i].webkitRelativePath.split('/');
  //     //folders.shift(); //Remove the root folder
  //     //this.sortFile(folders, files[i].name, newSounds);
  //     //newSounds.push(this.createSoundbox(files[i].path));
  //   }
  //   console.log(newSounds.toString());
  //   this.soundList.next(newSounds);
  //   return of(newSounds);
  // }

  // public getSongList() : Observable<SoundboxComponent[]> {
  //   return this.soundList.asObservable();
  // }

  // private createSoundbox(filePath: string) : SoundboxComponent {
  //   var songName = this.getTitleFromFileName(filePath);
  //   var newSound = new SoundboxComponent();
  //   newSound.title = songName;
  //   //newSound.filePath = filePath;
  //   return newSound;
  // }

  // private getTitleFromFileName(fileName: string) : string {
  //   var splitFile = fileName.split('\\');
  //   var title = splitFile[splitFile.length - 1];
  //   var splitTitle = title.split('.');
  //   splitTitle.pop();
  //   return splitTitle.join();
  // }

  // private sortFile(relativePath: string[], fullPath: string, soundboxList: SoundboxComponent[]) {
  //   if (relativePath.length == 1) {
  //     soundboxList.push(this.createSoundbox(fullPath));
  //   } else {
  //     var dir = soundboxList.find(x => x.title == relativePath[0]);
  //     if (dir == null) {
  //       var newdir = new SoundboxComponent();
  //       newdir.title = relativePath[0];
  //       soundboxList.push(newdir);
  //       dir = newdir;
  //     }
  //     relativePath.shift()
  //     this.sortFile(relativePath, fullPath, dir.sounds);
  //   }
  // }
}
