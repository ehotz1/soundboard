import { Injectable } from '@angular/core';
import { SoundboxComponent } from './soundbox/soundbox.component';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongUploaderService {
  soundList: Subject<SoundboxComponent[]>;

  constructor() {
    this.soundList = new Subject<SoundboxComponent[]>();
   }

  public parseFilePaths(files) : Observable<SoundboxComponent[]> {
    //clear soundList?
    var newSounds: SoundboxComponent[] = [];
    for (let i = 0; i < files.length; i++) {
      var folders = files[i].webkitRelativePath.split('/');
      folders.shift();
      this.sortFile(folders, files[i].path, newSounds);
    }
    console.log(newSounds.toString());
    this.soundList.next(newSounds);
    return of(newSounds);
  }

  public getSongList() : Observable<SoundboxComponent[]> {
    return this.soundList.asObservable();
  }

  private createSoundbox(filePath: string) : SoundboxComponent {
    var songName = this.getTitleFromFileName(filePath);
    var newSound = new SoundboxComponent();
    newSound.title = songName;
    newSound.filePath = filePath;
    return newSound;
  }

  private getTitleFromFileName(fileName: string) : string {
    var splitFile = fileName.split('\\');
    var title = splitFile[splitFile.length - 1];
    var splitTitle = title.split('.');
    splitTitle.pop();
    return splitTitle.join();
  }

  private sortFile(relativePath: string[], fullPath: string, soundboxList: SoundboxComponent[]) {
    if (relativePath.length == 1) {
      soundboxList.push(this.createSoundbox(fullPath));
    } else {
      var dir = soundboxList.find(x => x.title == relativePath[0]);
      if (dir == null) {
        var newdir = new SoundboxComponent();
        newdir.title = relativePath[0];
        soundboxList.push(newdir);
        dir = newdir;
      }
      relativePath.shift()
      this.sortFile(relativePath, fullPath, dir.sounds);
    }
  }
}
