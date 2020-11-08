import { Component, OnInit, ViewChild, HostListener, ComponentRef } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from '../book';
import { switchMap, filter, pairwise, startWith, takeUntil } from 'rxjs/operators';
import { LoadsummaryDirective } from '../loadsummary.directive';
import { Subject } from 'rxjs/internal/Subject';

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
  public destroyed = new Subject<any>();
  componentRef: ComponentRef<any>;

  @ViewChild(LoadsummaryDirective, { static: true }) summaryHost !: LoadsummaryDirective;

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
  }

  onSelect(book: Book): void {
    this.book = book;
    localStorage.setItem('3', 'y');
    this.bookService.register(this.book);
  }
}
