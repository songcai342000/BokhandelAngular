import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bestselling',
  templateUrl: './bestselling.component.html',
  animations: [
    trigger('openClose', [
      // ...
      state('closed', style({
        opacity: 0.8,
        transform: 'scale(0.2)'
      })),
      state('open', style({
        opacity: 0.7,
        transform: 'scale(0.6)'
      })),
      transition('closed => open', [
        animate('1s')
      ]),
      transition('open => closed', [
        animate('1s')
      ]),
    ]),
  ],
  styleUrls: ['./bestselling.component.css']
})
export class BestsellingComponent implements OnInit {
  bestselling: Book[];
  isClosed = true;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    setInterval(() => this.fade(), 4000);
    this.getBestSellingBooks();
    this.truncateText();
    let o = (navigator.userAgent.match(/Opera|OPR\//) ? true : false);
    alert(o);
    if (o == true) {
      let ad1 = document.getElementById('advertisement1');
      let div2 = document.getElementById('div2');
      ad1.remove;
      let newAd1 = document.createElement('button');
      let text = document.createTextNode('Make an order wherever you are');
      newAd1.appendChild(text);
      if (window.innerWidth > 992) {
        newAd1.setAttribute('style', 'background-color: aliceblue; font-size: 0.95rem; border-radius: 4px; color: black');
        newAd1.setAttribute('class', 'text-center p-1 h-auto w-75 ml-auto mr-auto btn-link');
      }
     // newAd1.setAttribute('id', 'advertisement1');
      else {
        newAd1.setAttribute('style', 'background-color: aliceblue; font-size: 0.8rem; border-radius: 4p; position: relative; left: 15%; color: black');
        newAd1.setAttribute('class', 'text-center p-1 h-auto w-75 btn-link');
      }
      div2.appendChild(newAd1);
    }
    if (window.innerWidth < 768) {
      let books = document.getElementById('books');
      books.remove();
      let newBooks = document.createElement('div');
      let newImage = document.createElement('img');
      newImage.setAttribute('src', '../../assets/images/books.png');
      newBooks.appendChild(newImage);
      let div4 = document.getElementById('div4');
      div4.appendChild(newBooks);
    }
    if (window.innerWidth > 767) {
      setInterval(() => this.animateBooks(), 5000);
    }
  }

  animateBooks() {
    document.getElementById("cover1").setAttribute('style', 'visibility: hidden');
    document.getElementById("cover2").setAttribute('style', 'visibility: hidden');
    document.getElementById("cover3").setAttribute('style', 'visibility: hidden');
    setTimeout(() => this.showCover3(), 500);
    setTimeout(() => this.showCover2(), 1000);
    setTimeout(() => this.showCover1(), 1500);
  }

  fade() {
    this.isClosed = !this.isClosed;
  }

  showCover1() {
    let l = window.innerWidth;
    if (l > 799) {
      document.getElementById('cover1').setAttribute('style', 'visibility: visible; position: relative; top: 3.8vw; z-index: 2');
    }
    else if (l > 767 && l < 800) {
      document.getElementById('cover1').setAttribute('style', 'visibility: visible; position: relative; top: 4.8vw; z-index: 2');
    }
    /* else if (l <= 767 && l > 630) {
      document.getElementById('cover1').setAttribute('style', 'visibility: visible; position: relative; top: 7.9vw; z-index: 2');
    }
    else if (l <= 630 && l > 599) {
      document.getElementById('cover1').setAttribute('style', 'visibility: visible; position: relative; top: 7.4vw; z-index: 2');
    }
    else if (l > 399 && l <= 599) {
      document.getElementById('cover1').setAttribute('style', 'visibility: visible; position: relative; top: 11vw; z-index: 2');
    }
    else if (l > 350 && l < 400) {
      document.getElementById('cover1').setAttribute('style', 'visibility: visible; position: relative; top: 11.8vw; z-index: 2');
    }
    else if (l > 299 && l <= 349) {
      document.getElementById('cover1').setAttribute('style', 'visibility: visible; position: relative; top: 13.2vw; z-index: 2');
    }
    else if (l > 299 && l <= 299) {
      document.getElementById('cover1').setAttribute('style', 'visibility: visible; position: relative; top: 11.9vw; z-index: 2');
    }*/
  }

  showCover2() {
    let l = window.innerWidth;
    if (window.innerWidth > 799) {
      document.getElementById('cover2').setAttribute('style', 'visibility: visible; position: relative; top: 2.9vw; z-index: 1');
    }
    if (window.innerWidth > 767 && l < 800) {
      document.getElementById('cover2').setAttribute('style', 'visibility: visible; position: relative; top: 3.9vw; z-index: 1');
    }
    /*else if (l > 630 && l <= 767) {
      document.getElementById('cover2').setAttribute('style', 'visibility: visible; position: relative; top: 4.9vw; z-index: 1');
    }
    else if (l > 599 && l <= 630) {
      document.getElementById('cover2').setAttribute('style', 'visibility: visible; position: relative; top: 6vw; z-index: 1');
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
    }*/
  }

  showCover3() {
    let l = window.innerWidth;
    if (window.innerWidth > 767) {
      document.getElementById('cover3').setAttribute('style', 'visibility: visible');
    }
   /* else if (l <= 767 && l > 599) {
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
    }*/
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
