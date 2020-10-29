import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../book';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})

export class SearchboxComponent implements OnInit {
  book: Book;
  books$: Book[];
  searchTerm = '';
  searchCondition = '';

  constructor(private bookService: BookService, private route: Router) { }
    ngOnInit(): void {
  }
 
  /*searchForm = new FormGroup({
    searchString: new FormControl(''),
    condition: new FormControl('')
  });

  // Push a search term into the observable stream.
  onSubmit(): void {
    if (this.searchForm.get('condition').value == 'author') {
      this.route.navigateByUrl('/searchresult?author=' + this.searchForm.get('searchString').value);
    }
    else if (this.searchForm.get('condition').value == 'title') {
      this.route.navigateByUrl('/searchresult?title=' + this.searchForm.get('searchString').value);
    }
  }
*/

  getSearchTerm(event: any) {
    this.searchTerm = event.target.value;
  }

  byTitle() {
    this.searchCondition = "title";
  }

  byAuthor() {
    this.searchCondition = "author";
  }

  sendSearch() {
    if (this.searchCondition == 'author') {
      this.route.navigate(['/searchresult'], { queryParams: { author: this.searchTerm } });
    }
    else if (this.searchCondition == 'title') {
      this.route.navigate(['/searchresult'], { queryParams: { title: this.searchTerm } });
    }
  }

}
