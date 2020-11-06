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
  @ViewChild('crimeBooks', { static: true }) crimeBooks: ElementRef;
  @ViewChild('romanceBooks', { static: true }) romanceBooks: ElementRef;
  @ViewChild('fictionBooks', { static: true }) fictionBooks: ElementRef;
  //private componentRef: ComponentRef<any>;

  books: Book[];
  @Input() bookAmounts: BookAmount[];
  constructor(private bookService: BookService, private componentFactoryResolver: ComponentFactoryResolver, private vcRef: ViewContainerRef) { }

  ngOnInit() {
    this.getCrimeBooks();
    this.getFictionBooks();
    this.getRomanceBooks();
    sessionStorage.clear();
  }

  onSelect(book: Book): void {
    this.book = book;
    localStorage.setItem('3', 'y');
    this.bookService.register(this.book);
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
