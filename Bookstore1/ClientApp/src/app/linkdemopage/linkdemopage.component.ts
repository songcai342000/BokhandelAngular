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
    window.scrollTo(0, 0);
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
}
