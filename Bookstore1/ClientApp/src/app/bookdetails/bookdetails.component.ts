import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Directive, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
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
    this.getBook();
    //if no userId, get userId
    let v = localStorage.getItem('4');
    // let o = localStorage.getItem('5');
    if (v == null || v == '') {
      //localStorage.setItem('4', 'no');
      this.newCustomer();
    }
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
  getBook(): void {
    //const id = +this.router.snapshot.paramMap.get('id');
    this.id = +this.router.snapshot.paramMap.get('id');
    this.bookService.getBook(this.id).subscribe(books => this.books = books);
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
