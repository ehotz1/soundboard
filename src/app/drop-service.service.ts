import { Injectable } from '@angular/core';
import { SoundboxComponent } from './soundbox/soundbox.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList} from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class DropService {

  constructor() { }

  public repoConnector: CdkDropList;
  public playlistConnector: CdkDropList;

  setRepoConnector(repo: CdkDropList) {
    this.repoConnector = repo;
  }

  setPlaylistConnector(playlist: CdkDropList) {
    this.playlistConnector = playlist;
  }


  drop(event: CdkDragDrop<SoundboxComponent[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
