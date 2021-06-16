import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foot2',
  templateUrl: './foot2.component.html',
  styleUrls: ['./foot2.component.css']
})
export class Foot2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  fbClick() {
    window.location.href = 'https://www.facebook.com/Forest-Bookstore-101461462168729';
  }

  twitterClick() {
    window.location.href = 'https://twitter.com/BookstoreForest';
  }

  instagramClick() {
    window.location.href = 'https://www.instagram.com/forestbookstore_page/';
  }
}
