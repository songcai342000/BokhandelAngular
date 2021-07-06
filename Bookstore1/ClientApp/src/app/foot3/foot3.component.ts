import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot3',
  templateUrl: './foot3.component.html',
  styleUrls: ['./foot3.component.css']
})
export class Foot3Component implements OnInit {
  currentUrl: string;

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 400) {
      let u = document.getElementById('ul1');
      u.remove();
    }
  }

  back() {
    window.scrollTo(0, 0);
    this.currentUrl = document.referrer;
  }

}
