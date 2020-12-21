import { Component, OnInit, Input, ViewChild, ElementRef, ComponentFactoryResolver, Output, EventEmitter, HostListener, ChangeDetectionStrategy, ComponentRef, ViewContainerRef } from '@angular/core';
import { Book } from '../book';
import { Crime } from '../crime';
import { Romance } from '../romance';
import { Fiction } from '../fiction';
import { BookService } from '../book.service';
import { LoadsummaryDirective } from '../loadsummary.directive';
import { ShoppingsummaryComponent } from '../shoppingsummary/shoppingsummary.component';
import { BOOKS } from '../mock-books';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Reservation } from '../reservation';
import { Order } from '../order';
import { BookAmount } from '../bookAmount';
import { User } from '../user';
import { Subject } from 'rxjs/internal/Subject';
import { concat } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooklistComponent implements OnInit {
  @Input() book: Book;
  crimes: Crime[];
  romances: Romance[];
  visibleRomances: Romance[];
  fictions: Fiction[];
  startItemR: number;
  endItemR: number;
  bookNumber: number;
  parameters: string[] = [];
  userId: string;
  user: User;
  order: Order;
  orderId: string;
  obj: Object;
  ids: number[] = [];

  @ViewChild('crimeBooks', { static: true }) crimeBooks: ElementRef;
  @ViewChild('romanceBooks', { static: true }) romanceBooks: ElementRef;
  @ViewChild('fictionBooks', { static: true }) fictionBooks: ElementRef;
  @ViewChild('idInput', { static: true }) idElf: ElementRef;

  //private componentRef: ComponentRef<any>;

  books: Book[];
  @Input() bookAmounts: BookAmount[];
  constructor(private bookService: BookService, private componentFactoryResolver: ComponentFactoryResolver, private vcRef: ViewContainerRef) { }

  ngOnInit() {
    let t = document.getElementById('total');
    if (window.innerHeight < 1050) {
      t.style.height = 'auto';
    }
    else {
      t.style.height = '100%';
    }
    //localStorage.clear();
    this.getCrimeBooks();
    this.getFictionBooks();
    this.getRomanceBooks();
    //sessionStorage.clear();
    //if no userId, get userId
   // let v = localStorage.getItem('4');
    let v = localStorage.getItem('4');
    // let o = localStorage.getItem('5');
    if (v == null || v == '') {
      //localStorage.setItem('4', 'no');
      this.newCustomer();
    }
    //alert(window.innerWidth);
  // alert(window.outerWidth);

  }

  onSelect(book: Book): void {
    this.book = book;
    localStorage.setItem('3', 'y');
    this.bookService.register(this.book);
  }

  newCustomer() {
    this.user = { userId: 0, userName: '', firstName: '', familyName: '', mail: '', address: '', postNumber: '', country: '', mobil: ''};
    this.bookService.newCustomer(this.user).subscribe(() => {
      this.bookService.getLastUser().subscribe(userId => this.userId = userId);
    });
  }

  //listener to input text change event
  @HostListener('window:click', ['$event'])
  handleStorage(event) {
    let elem1 = document.getElementById("idInput");
    //alert(elem1);
    //if (localStorage.getItem('4') == 'no' && elem1 != undefined && elem1 != null) {
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


  //get crime books
  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(crimes => this.crimes = crimes);
  }

  //get crime books
  getCrimeBooks(): void {
    this.bookService.getCrimeBooks()
      .subscribe(crimes => this.crimes = crimes);
  }

  //get all books
  getFictionBooks(): void {
    this.bookService.getFictionBooks()
      .subscribe(fictions => this.fictions = fictions);
  }

  //get all books
  getRomanceBooks(): void {
    this.bookService.getRomanceBooks()
      .subscribe(romances => this.romances = romances);
  }

  //get all books
  visibleRomance(startItemR: number, endItemR: number): void {
    this.visibleRomances = this.romances.slice(0, 4);
    //alert("move");
  }

  slideLeftCrime(): void {
    this.crimeBooks.nativeElement.scrollLeft += 20;
  }

  slideLeftFiction(): void {
    this.fictionBooks.nativeElement.scrollLeft += 20;
  }

  slideLeftRomance(): void {
    this.romanceBooks.nativeElement.scrollLeft += 1070;
    this.romances.slice(0, 5);
  }

  slideRightCrime(): void {
    this.crimeBooks.nativeElement.scrollLeft -= 20;
  }

  slideRightFiction(): void {
    this.fictionBooks.nativeElement.scrollLeft -= 20;
  }

  slideRightRomance(): void {
    this.romanceBooks.nativeElement.scrollLeft -= 1070;
  }

  //resolve the dynamic component 
  /*loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ShoppingsummaryComponent);
    //this.vcRef.clear();
    const viewContainerRef = this.vcRef.createComponent(componentFactory);
    const componentRef = viewContainerRef.instance.vcRef;
  }*/



}
