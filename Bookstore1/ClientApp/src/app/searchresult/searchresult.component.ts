import { Component, OnInit, ViewChild, HostListener, ComponentRef, ElementRef } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from '../book';
import { switchMap, filter, pairwise, startWith, takeUntil } from 'rxjs/operators';
import { LoadsummaryDirective } from '../loadsummary.directive';
import { Subject } from 'rxjs/internal/Subject';
import { User } from '../user';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
  books: Book[] = [];
  book: Book;
  title: string;
  author: string;
  user: User;
  userId: string;
  ids: number[] = [];
  public destroyed = new Subject<any>();
  componentRef: ComponentRef<any>;

  @ViewChild(LoadsummaryDirective, { static: true }) summaryHost !: LoadsummaryDirective;
  @ViewChild('idInput', { static: true }) idElf: ElementRef;

  constructor(private bookService: BookService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      const t = paramMap.get('title');
       if (t != null && t != '') {
        this.bookService.getByTitle(this.route.snapshot.queryParams["title"]).subscribe(books => this.books = books);
       }
    });
    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      const a = paramMap.get('author');
      if (a != null && a != '') {
        this.bookService.getByAuthor(this.route.snapshot.queryParams["author"]).subscribe(books => this.books = books);
      }
    });
    //if no userId, get userId
    let v = localStorage.getItem('4');
    if (v == null || v == '') {
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
    if (elem1 != undefined && elem1 != null) {
      let e1 = new Event('change', { bubbles: true });
      setTimeout(() => elem1.dispatchEvent(e1));
    }
  }

  saveUserId(event: any) {
    let l4 = localStorage.getItem('4');
    if (l4 == null || l4 == '') {
      this.ids.push(parseInt(event.target.value));
      localStorage.setItem('4', JSON.stringify(this.ids));
    }
  }


  onSelect(book: Book): void {
    this.book = book;
    localStorage.setItem('3', 'y');
    this.bookService.register(this.book);
  }
}
