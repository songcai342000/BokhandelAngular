import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linkdemopage',
  templateUrl: './linkdemopage.component.html',
  styleUrls: ['./linkdemopage.component.css']
})
export class LinkdemopageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    setTimeout(() => this.navigate(), 8000);
    //this.numbers();
    this.smallScreen();
  }

  navigate() {
    this.router.navigate(['booklist']);
  }

  numbers() {
    let numbers = [3, 2, 1];
    for (let i = 0; i < numbers.length; i++) {
      document.getElementById('loading').innerText = numbers[i].toString();
      setTimeout(() => { }, 1000);
    }
  }

  //create a color belt from mouse to text
  createBelt() {
    //get position of vtext
  }

  smallScreen() {
    let l = document.getElementById('loading');
    let w = window.innerWidth;
    if (w < 300) {
      l.setAttribute('style', 'position: relative');
      l.setAttribute('style', 'top: 60%');
      //l.setAttribute('style', 'transform: scale(0.7)');
      let v = document.getElementById('vtext');
      v.style.fontSize = '1em';
    }
    else if (w < 650 && w >= 300) {
      l.setAttribute('style', 'position: relative');
      l.setAttribute('style', 'top: 25%');
      let v = document.getElementById('vtext');
      v.style.fontSize = '1.3em';
    }
    else if (w < 1100 && w >= 650) {
      l.setAttribute('style', 'position: relative');
      l.setAttribute('style', 'top: 25%');
      let v = document.getElementById('vtext');
      v.style.fontSize = '1.2em';
    }
    else if (w >= 1100) {
      l.setAttribute('style', 'position: relative');
      l.setAttribute('style', 'top: 25%');
      let v = document.getElementById('vtext');
      v.style.fontSize = '1.3em';
    }
    else if (navigator.userAgent.indexOf('OPR') !== -1) {
      l.setAttribute('style', 'position: relative');
      l.setAttribute('style', 'top: 40%');
    }
  }
}
