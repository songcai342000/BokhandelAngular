import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot1',
  templateUrl: './foot1.component.html',
  styleUrls: ['./foot1.component.css']
})
export class Foot1Component implements OnInit {
  currentUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

  back() {
    window.scrollTo(0, 0);
    this.currentUrl = document.referrer;
  }

 
}
