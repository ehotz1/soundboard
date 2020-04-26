import { Component, OnInit } from '@angular/core';
import { SongUploaderService } from '../song-uploader.service'

@Component({
  selector: 'app-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.css']
})

export class FileSelectorComponent implements OnInit {

  constructor(private songUploaderService: SongUploaderService) { }

  ngOnInit() {
  }

  

  filesPicked(files) {
    this.songUploaderService.generateFileList(files);
  }
}
