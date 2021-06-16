import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bestselling',
  templateUrl: './bestselling.component.html',
  styleUrls: ['./bestselling.component.css']
})
export class BestsellingComponent implements OnInit {
  bestselling: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    setInterval(() => this.animateBooks(), 5000);
    this.getBestSellingBooks();
    this.truncateText();
  }

  animateBooks() {
    document.getElementById("cover1").setAttribute('style', 'visibility: hidden');
    document.getElementById("cover2").setAttribute('style', 'visibility: hidden');
    document.getElementById("cover3").setAttribute('style', 'visibility: hidden');
    setTimeout(() => this.showCover3(), 500);
    setTimeout(() => this.showCover2(), 1000);
    setTimeout(() => this.showCover1(), 1500);
  }

  showCover1() {
    let l = window.innerWidth;
    if (l > 767) {
      document.getElementById('cover1').setAttribute('style', 'visibility: visible; position: relative; top: 3.8vw; z-index: 2');
    }
    else if (l < 768 && l > 599) {
      document.getElementById('cover1').setAttribute('style', 'visibility: visible; position: relative; top: 6.9vw; z-index: 2');
    }
    else if (l > 399 && l < 600) {
      document.getElementById('cover1').setAttribute('style', 'visibility: visible; position: relative; top: 11vw; z-index: 2');
    }
    else if (l > 350 && l < 400) {
      document.getElementById('cover1').setAttribute('style', 'visibility: visible; position: relative; top: 11.8vw; z-index: 2');
    }
    else if (l > 299 && l <= 349) {
      document.getElementById('cover1').setAttribute('style', 'visibility: visible; position: relative; top: 13.2vw; z-index: 2');
    }
    /*else if (l > 299 && l <= 299) {
      document.getElementById('cover1').setAttribute('style', 'visibility: visible; position: relative; top: 11.9vw; z-index: 2');
    }*/
  }

  showCover2() {
    let l = window.innerWidth;
    if (window.innerWidth > 768) {
      document.getElementById('cover2').setAttribute('style', 'visibility: visible; position: relative; top: 2.9vw; z-index: 1');
    }
    else if (l > 599 && l <= 768) {
      document.getElementById('cover2').setAttribute('style', 'visibility: visible; position: relative; top: 3.9vw; z-index: 1');
    }
    else if (l > 399 && l <= 599) {
      document.getElementById('cover2').setAttribute('style', 'visibility: visible; position: relative; top: 8vw; z-index: 1');
    }
    else if (l > 350 && l <= 399) {
      document.getElementById('cover2').setAttribute('style', 'visibility: visible; position: relative; top: 8.7vw; z-index: 1');
    }
    else if (l > 300 && l <= 349) {
      document.getElementById('cover2').setAttribute('style', 'visibility: visible; position: relative; top: 8.2vw; z-index: 1');
    }
    else if (l > 299 && l <= 399) {
      document.getElementById('cover2').setAttribute('style', 'visibility: visible; position: relative; top: 8.7vw; z-index: 1');
    }
  }

  showCover3() {
    let l = window.innerWidth;
    if (window.innerWidth > 768) {
      document.getElementById('cover3').setAttribute('style', 'visibility: visible');
    }
    else if (l <= 768 && l > 599) {
      document.getElementById('cover3').setAttribute('style', 'visibility: visible;');
    }
    else if (l > 399 && l <= 599) {
      document.getElementById('cover3').setAttribute('style', 'visibility: visible; position: relative; top: 3.7vw;');
    }
    else if (l > 349 && l <= 399) {
      document.getElementById('cover3').setAttribute('style', 'visibility: visible; position: relative; top: 3.7vw;');
    }
    else if (l > 299 && l <= 349) {
      document.getElementById('cover3').setAttribute('style', 'visibility: visible; position: relative; top: 1.7vw;');
    }
  }

  color(event: any) {
    event.target.style.backgroundColor = "blue";
    event.target.style.color = "white";
  }

  removeColor(event: any) {
    event.target.style.backgroundColor = "aliceblue";
    event.target.style.color = "black";
  }

  //get best selling books
  getBestSellingBooks(): void {
    this.bookService.getBestSelling()
      .subscribe(bestselling => this.bestselling = bestselling);
  }

  truncateText() {
    let elm = document.getElementById("bestsellingDetail");
    if (window.innerWidth < 1000) {
      elm.setAttribute("class", "text-left text-truncate");
    }
  }
}
