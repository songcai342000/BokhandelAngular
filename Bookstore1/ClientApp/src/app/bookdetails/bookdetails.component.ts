import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Directive, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingsummaryComponent } from '../shoppingsummary/shoppingsummary.component';
import { LoadsummaryDirective } from '../loadsummary.directive';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  books: Book[];
  book: Book;
  isShow = false;
  @ViewChild(LoadsummaryDirective, { static: true }) summaryHost !: LoadsummaryDirective;
  constructor(private router: ActivatedRoute, private bookService: BookService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.getBook();
  }

  //get book by id
  getBook(): void {
    const id = +this.router.snapshot.paramMap.get('id');
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
  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ShoppingsummaryComponent);
    const viewContainerRef = this.summaryHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

  historyBack() {
    window.history.back();
  }

}
