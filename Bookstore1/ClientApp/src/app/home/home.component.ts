import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  video: string;
  constructor() { }
  ngOnInit() {
  }

  getCover() {
    document.getElementById("frameDiv").style.opacity = "0.5";
  }

  removeCover() {
    document.getElementById("frameDiv").style.opacity = "1";
  }
}
