import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  constructor() { }
  ngOnInit() {
  }

  getCover() {
    document.getElementById("iframeDiv").style.opacity = "0.5";
  }

  removeCover() {
    document.getElementById("iframeDiv").style.opacity = "0";
  }
}
