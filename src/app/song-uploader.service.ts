import { Injectable } from '@angular/core';
import { SoundboxComponent } from './soundbox/soundbox.component';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongUploaderService {
  songList: Subject<SoundboxComponent[]>;

  constructor() {
    this.songList = new Subject<SoundboxComponent[]>();
   }

  public parseFilePaths(files) : Observable<SoundboxComponent[]> { //swap to void?
    var newSounds: SoundboxComponent[] = [];
    for (let i = 0; i < files.length; i++) {
      //console.log(files[i].webkitRelativePath, files[i].path);
      //TODO handle multiple directories
      newSounds.push(this.createSoundbox(files[i]));
    }
    this.songList.next(newSounds);
    return of(newSounds);
  }

  private createSoundbox(file) : SoundboxComponent {
    var songName = this.getTitleFromFileName(file.path);
    var newSound = new SoundboxComponent(
      songName,
      file.path
    );
    return newSound;
  }

  private getTitleFromFileName(fileName: string) : string {
    var splitFile = fileName.split('\\');
    var title = splitFile[splitFile.length - 1];
    var splitTitle = title.split('.');
    splitTitle.pop();
    return splitTitle.join();
  }

  public getSongList() : Observable<SoundboxComponent[]> {
    return this.songList.asObservable();
  }
}
