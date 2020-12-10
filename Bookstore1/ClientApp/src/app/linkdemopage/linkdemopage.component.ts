import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linkdemopage',
  templateUrl: './linkdemopage.component.html',
  styleUrls: ['./linkdemopage.component.css']
})
export class LinkdemopageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => this.navigate(), 10000);
    //this.numbers();
  }

  navigate() {
    this.router.navigate(['']);
  }

  numbers() {
    let numbers = [3, 2, 1];
    for (let i = 0; i < numbers.length; i++) {
      document.getElementById('loading').innerText = numbers[i].toString();
      setTimeout(() => { }, 1000);
    }
  }
}
