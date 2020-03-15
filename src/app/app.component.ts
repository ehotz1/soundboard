import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SongUploaderService } from './song-uploader.service';
import { SoundboxComponent } from './soundbox/soundbox.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { AudioService } from './audio.service'
import { StreamState } from './interfaces/stream-state';

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
  audioService: AudioService;
  state: StreamState;
  currentSound: any = {};
  icon: string;

  constructor(private SongService: SongUploaderService, private AudioService: AudioService) {
    this.repoSounds = [];
    this.playlistSounds = [];
    this.uploaderSubscription = this.SongService.getSongList().subscribe(songs => {
      songs.forEach(x => this.repoSounds.push(x));
    });

    this.audioService = AudioService;
    this.audioService.getState().subscribe(state => {
      this.state = state;
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

  playClick(event, index) {
    if (this.state.playing) {
      this.pause();
    } else {
      this.playSound(this.playlistSounds[index], index);
    }
  }
  
  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {

    });
  }

  playSound(sound: SoundboxComponent, index) { 
    this.currentSound = {sound, index };
    this.stop();
    this.playStream(sound.filePath);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = (this.currentSound.index < this.playlistSounds.length) ? this.currentSound.index + 1 : 0;
    const sound = this.playlistSounds[index];
    this.playSound(sound, index);
  }

  previous() {
    const index = (this.currentSound.index == 0) ? this.playlistSounds.length - 1 : this.currentSound.index - 1;
    const sound = this.playlistSounds[index];
    this.playSound(sound, index);
  }

  
}
