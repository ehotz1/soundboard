import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SongUploaderService } from './song-uploader.service';
import { SoundboxComponent } from './soundbox/soundbox.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Soundboard';
  uploaderSubscription: Subscription;
  repoSounds: SoundboxComponent[];
  playlistSounds: SoundboxComponent[];

  constructor(private SongService: SongUploaderService) {
    this.repoSounds = [];
    this.playlistSounds = [];
    this.uploaderSubscription = this.SongService.getSongList().subscribe(songs => {
      songs.forEach(x => this.repoSounds.push(x));
    });
   }

  ngOnInit() {}

  ngOnDestroy() {
    this.uploaderSubscription.unsubscribe();
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
