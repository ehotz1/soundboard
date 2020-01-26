import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soundbox',
  templateUrl: './soundbox.component.html',
  styleUrls: ['./soundbox.component.css']
})
export class SoundboxComponent {
  title: string;
  filePath: string;

  constructor(title: string, filePath: string) { 
    this.title = title;
    this.filePath = filePath;
  }

}
