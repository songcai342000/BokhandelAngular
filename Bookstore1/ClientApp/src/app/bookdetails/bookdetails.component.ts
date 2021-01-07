import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Directive, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ShoppingsummaryComponent } from '../shoppingsummary/shoppingsummary.component';
import { LoadsummaryDirective } from '../loadsummary.directive';
import { User } from '../user';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  books: Book[];
  authorBooks: Book[];
  book: Book;
  id: number;
  user: User;
  parameters: string[] = [];
  isShow = false;
  userId: string;
  ids: number[] = [];

  @ViewChild(LoadsummaryDirective, { static: true }) summaryHost !: LoadsummaryDirective;
  @ViewChild('idInput', { static: true }) idElf: ElementRef;

  constructor(private router: ActivatedRoute, private bookService: BookService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    //localStorage.clear();
    this.smallScreen();
    this.id = +this.router.snapshot.paramMap.get('id');
    //alert(id);
    this.getBook(this.id);
    this.otherBooks(this.id);
    //if no userId, get userId
    let v = localStorage.getItem('4');
    // let o = localStorage.getItem('5');
    if (v == null || v == '') {
      //localStorage.setItem('4', 'no');
      this.newCustomer();
    }
    this.findDomibox();
  }

  newCustomer() {
    this.user = { userId: 0, userName: '', firstName: '', familyName: '', mail: '', address: '', postNumber: '', country: '', mobil: '' };
    this.bookService.newCustomer(this.user).subscribe(() => {
      this.bookService.getLastUser().subscribe(userId => this.userId = userId);
    });
  }

  //listener to input text change event
  @HostListener('window:click', ['$event'])
  handleStorage(event) {
    let elem1 = document.getElementById("idInput");
    //alert(elem1);
    if (elem1 != undefined && elem1 != null) {
      //alert('4');
      let e1 = new Event('change', { bubbles: true });
      //elem.dispatchEvent(e)
      //make it asynatic
      //alert("change");
      setTimeout(() => elem1.dispatchEvent(e1));
    }
  }

  saveUserId(event: any) {
    // localStorage.setItem('4', event.target.value);
    let l4 = localStorage.getItem('4');
    if (l4 == null || l4 == '') {
      this.ids.push(parseInt(event.target.value));
      localStorage.setItem('4', JSON.stringify(this.ids));
    }
  }

  //get book by id
  getBook(id: number): void {
      this.bookService.getBook(id).subscribe(books => this.books = books);
  }

  //get book by id
  getNewBook(id: number): void {
    this.bookService.getBook(id).subscribe(books => this.books = books);
  }

  //put a book in the shopping cart
  chooseBook(book: Book): void {
    this.book = book;
    localStorage.setItem('3', 'y');
    this.bookService.register(this.book);
    //this.loadComponent();
  }

  //resolve the dynamic component 
  /*loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ShoppingsummaryComponent);
    const viewContainerRef = this.summaryHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }*/

  historyBack() {
    window.history.back();
  }

  smallScreen() {
    if (window.innerWidth < 450) {
      let i = document.getElementsByTagName("img")[0];
      i.setAttribute("height", "120");
      i.setAttribute("width", "80");
    }
  }

  otherBooks(id: number) {
    this.bookService.getAuthorBooks(id).subscribe(authorBooks => this.authorBooks = authorBooks);
    //alert('t');
  }

  domiEffect() {
    let c = document.getElementsByClassName("griditem");
    for (let i = 0; i < c.length; i++) {
      //setTimeout(() => { c[i].classList.add('dominianimation')}, 2000);
      //c[i].classList.add('dominianimation');
    }
  }

  findDomibox() {

    const numSteps = 20.0;

    let boxElement;
    let prevRatio = 0.0;
    let increasingColor = "rgba(40, 40, 190, ratio)";
    let decreasingColor = "rgba(190, 40, 40, ratio)";

    // Set things up
    window.addEventListener("load", (event) => {

      this.createObserver();
    }, false);
  }

  createObserver() {
    let observer;
    let boxElement = document.querySelector("domibox");

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: this.buildThresholdList()
    };

      observer = new IntersectionObserver(this.handleIntersect, options)
      observer.observe(boxElement);
    }
  

    buildThresholdList() {
      let thresholds = [];
      let numSteps = 20;

      for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
      }

      thresholds.push(0);
      return thresholds;
  }

  handleIntersect(entries, observer) {
    let prevRatio = 0.0;
    let increasingColor = "rgba(40, 40, 190, ratio)";
    let decreasingColor = "rgba(190, 40, 40, ratio)";
    entries.forEach((entry) => {
      if (entry.intersectionRatio > prevRatio) {
        entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
      } else {
        entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
      }

      prevRatio = entry.intersectionRatio;
    });
  }

}
