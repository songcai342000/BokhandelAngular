import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition, keyframes} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [
    trigger('openClose', [
      // ...
      state('closed', style({
        opacity: 0.8,
        transform: 'scale(0.2)'
      })),
      state('open', style({
        opacity: 0.7,
        transform: 'scale(0.6)'
      })),
      transition('closed => open', [
        animate('1s')
      ]),
      /*transition('open => closed', [
        animate('1s', keyframes([
          style({ transform: 'scale(1.75)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 }),
        ]))
      ]), */
      transition('open => closed', [
        animate('1s')
      ]),
    ]),
  ],
})

export class HomeComponent {
  video: string;
  isClosed = true;
  videos: string[];
  count: number;

  constructor() { }
  ngOnInit() {
    setInterval(() => this.fade(), 2000);
    this.videos = ['fCUkgxNXuJk', 'DUPIecuKN4I', 'U79ehAX1V98'];
    this.count = 0;
    setInterval(() => this.shiftVideo(this.videos), 5000);

  }

  fade() {
    this.isClosed = !this.isClosed;
  }
  
  shiftVideo(videos: string[]) {
    document.getElementById("iframe").setAttribute('src', 'https://www.youtube.com/embed/' + videos[this.count]);
    this.count++;
    if (this.count == 3) {
      this.count = 0;
    }
  }

  getCover() {
    document.getElementById("iframe").style.opacity = "0.5";
  }

  removeCover() {
    document.getElementById("iframe").style.opacity = "1";
  }
}
