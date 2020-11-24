import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})

export class ThankyouComponent implements OnInit {
  constructor(private route: Router, private bookService: BookService) { }

  ngOnInit(): void {
    let s = sessionStorage.getItem('2');
    if (s == null || s == '' || s == 'unpaid') {
      this.route.navigate(['/page-not-found']);
    }
    sessionStorage.setItem('2', 'unpaid');
  }

 

}
