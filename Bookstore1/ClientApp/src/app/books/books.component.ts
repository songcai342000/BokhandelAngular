import { Component, OnInit, Input, ViewChild, ElementRef, ComponentFactoryResolver, Output, EventEmitter, HostListener, ChangeDetectionStrategy } from '@angular/core';
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


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent implements OnInit {
  @Input() selectedBook: Book;
  private crimes: Crime[];
  private romances: Romance[];
  private visibleRomances: Romance[];
  private fictions: Fiction[];
  startItemR: number;
  endItemR: number;
  @ViewChild('crimeBooks', { static: true }) crimeBooks: ElementRef;
  @ViewChild('romanceBooks', { static: true }) romanceBooks: ElementRef;
  @ViewChild('fictionBooks', { static: true }) fictionBooks: ElementRef;
  @ViewChild(LoadsummaryDirective, { static: true }) summaryHost !: LoadsummaryDirective;
  //books = BOOKS;

  constructor(private bookService: BookService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.getCrimeBooks();
    this.getFictionBooks();
    this.getRomanceBooks();
    //this.visibleRomance(this.startItemR, this.endItemR);
  //alert("move");
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
    this.bookService.register(this.selectedBook);
    this.loadComponent();
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
    this.romanceBooks.nativeElement.scrollLeft += 200;
    this.visibleRomance(this.startItemR, this.endItemR);
  }

  slideRightCrime(): void {
    this.crimeBooks.nativeElement.scrollLeft -= 20;
  }

  slideRightFiction(): void {
    this.fictionBooks.nativeElement.scrollLeft -= 20;
  }

  slideRightRomance(): void {
    this.romanceBooks.nativeElement.scrollLeft -= 200;
  }

  //resolve the dynamic component 
  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ShoppingsummaryComponent);
    const viewContainerRef = this.summaryHost.viewContainerRef;
    alert("get");
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
