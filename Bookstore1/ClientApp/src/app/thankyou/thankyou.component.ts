import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})

export class ThankyouComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('2') != 'paid') {
      this.route.navigate(['/page-not-found']);
    }
    sessionStorage.setItem('2', 'unpaid');
  }

}
