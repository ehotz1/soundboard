import { Component, OnInit, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList} from '@angular/cdk/drag-drop';
import { SoundboxComponent } from '../soundbox/soundbox.component';
import { DropService } from '../drop-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  @ViewChild('playlistList') playlistList: CdkDropList;
  connectedRepo: CdkDropList;

  dropService: DropService;
  sounds: SoundboxComponent[];

  constructor(private DropService: DropService) {
    this.dropService = DropService;
    this.sounds = [];
  }
  
  ngOnInit() {
    this.dropService.setPlaylistConnector(this.playlistList);
    this.connectedRepo = this.dropService.repoConnector;
  }

  

  drop(event: CdkDragDrop<SoundboxComponent[]>) {
    this.dropService.drop(event);
  }
}
