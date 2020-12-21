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
    this.smallScreen();
    setInterval(() => this.fade(), 4000);
    this.videos = ['fCUkgxNXuJk', 'DUPIecuKN4I', 'U79ehAX1V98'];
    this.count = 0;
    setInterval(() => this.shiftVideo(this.videos), 8000);
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

  smallScreen() {
    let t = document.getElementById('total');
    let i = document.getElementById('iframeDiv');
    let a = document.getElementById('articleDiv');
    /*t.style.display = 'flex';
    i.style.width = '40%';
    a.style.width = '60%';
    a.style.paddingLeft = '7%';*/
    if (window.innerWidth < 699) {
      t.style.display = 'block';
      i.style.paddingLeft = '15%';
      i.style.paddingRight = '15%';
      i.style.width = 'auto';
      i.style.height = '35%';
      i.style.marginBottom = '7%';
      a.style.paddingLeft = '5%';
      a.style.paddingRight = '5%';
      a.style.width = 'auto';
      i.style.height = '50%';
    }
    else if (window.innerWidth < 1100 && window.innerWidth >= 699) {
      t.style.height = '100%';
      i.style.height = '35%';
    }
    else if (window.innerWidth < 1200 && window.innerWidth >= 1100) {
      t.style.height = '100%';
      i.style.height = '55%';

    }
    else {
      t.style.height = '100%';
      i.style.height = '60%';

    }
  }

  

}
