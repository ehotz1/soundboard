import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soundbox',
  templateUrl: './soundbox.component.html',
  styleUrls: ['./soundbox.component.css']
})
export class SoundboxComponent {
  title: string;
  filePath: string;
  fileId: string;
  sounds: SoundboxComponent[];

  constructor() {
    this.sounds = [];
  }

  public toString() : string {
    return this.title;
  }

}
