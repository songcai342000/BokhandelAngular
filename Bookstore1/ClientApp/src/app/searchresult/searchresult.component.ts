import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { switchMap } from 'rxjs/operators';
import { LoadsummaryDirective } from '../loadsummary.directive';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
  books: Book[] = [];
  title: string;
  author: string;
  @ViewChild(LoadsummaryDirective, { static: true }) summaryHost !: LoadsummaryDirective;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams["title"] != null && this.route.snapshot.queryParams["title"] != "")
    {
      this.getByTitle();
    }
    else if (this.route.snapshot.queryParams["author"] != null && this.route.snapshot.queryParams["author"] != "") {
      this.getByAuthor();
    }
  }

  getByTitle(): void {
    this.bookService.getByTitle(this.route.snapshot.queryParams["title"]).subscribe(books => this.books = books);
  }

  getByAuthor() {
    this.bookService.getByAuthor(this.route.snapshot.queryParams["author"]).subscribe(books => this.books = books);
  }
}
