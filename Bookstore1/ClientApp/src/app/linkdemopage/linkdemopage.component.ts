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
    setTimeout(()=> this.navigate(), 10000);
  }

  navigate() {
    this.router.navigate(['']);
  }
}
