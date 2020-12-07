import { Component, OnInit, ComponentRef, Output, EventEmitter } from '@angular/core';
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
  componentRef: ComponentRef<any>;

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
    //localStorage.setItem('4', 'ch');
    if (this.searchCondition == 'author') {
      //location.assign("/searchresult?" + "author=" + this.searchTerm);
      this.closeDisplay();
      this.route.navigate(['/searchresult'], { queryParams: { author: this.searchTerm } });
    }
    else if (this.searchCondition == 'title') {
      this.closeDisplay();
      this.route.navigate(['/searchresult'], { queryParams: { title: this.searchTerm } });
    }
    else {
      alert("Please choose a condition");
    }
    
  }

  //close the shopping record div
  closeDisplay() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    document.getElementById("searchBox").style.visibility = "hidden";
    document.getElementById("close").style.visibility = "hidden";

  }


}
