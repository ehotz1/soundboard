import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SoundboxComponent } from '../soundbox/soundbox.component';
import { SongUploaderService } from '../song-uploader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  subscription: Subscription;

  constructor(private songService: SongUploaderService) {
    this.sounds = [];
    this.subscription = this.songService.getSongList().subscribe(songs => {
      songs.forEach(x => this.sounds.push(x));
    });
   }

  ngOnInit() {
  }

  sounds: SoundboxComponent[]

  drop(event: CdkDragDrop<SoundboxComponent[]>) {
    moveItemInArray(this.sounds, event.previousIndex, event.currentIndex);
  }
}
