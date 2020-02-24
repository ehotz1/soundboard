import { Component, OnInit, ViewChild } from '@angular/core';
import { SongUploaderService } from '../song-uploader.service';
import { Subscription } from 'rxjs';
import { SoundboxComponent } from '../soundbox/soundbox.component';
import {CdkDragDrop, moveItemInArray, CdkDropList} from '@angular/cdk/drag-drop';
import { DropService } from '../drop-service.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  @ViewChild('repositoryList') repositoryList: CdkDropList;
  connectedPlaylist: CdkDropList;

  uploaderSubscription: Subscription;
  dropService: DropService;
  sounds: SoundboxComponent[];

  constructor(private SongService: SongUploaderService, private DropService: DropService) {
    this.sounds = [];
    this.uploaderSubscription = this.SongService.getSongList().subscribe(songs => {
      songs.forEach(x => this.sounds.push(x));
    });
    this.dropService = DropService;
   }

  ngOnInit(): void {
    this.dropService.setRepoConnector(this.repositoryList);
    this.connectedPlaylist = this.dropService.playlistConnector;
  }

  ngOnDestroy() {
    this.uploaderSubscription.unsubscribe();
  }

  drop(event: CdkDragDrop<SoundboxComponent[]>) {
    this.dropService.drop(event);
  }

}
