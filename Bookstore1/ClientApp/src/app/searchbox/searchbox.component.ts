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
 
  

  getSearchTerm(event: any) {
    this.searchTerm = event.target.value;
  }

  byTitle() {
    this.searchCondition = "title";
    (<HTMLInputElement>document.getElementsByName('condition')[0]).checked = true;
  }

  byAuthor() {
    this.searchCondition = "author";
    (<HTMLInputElement>document.getElementsByName('condition')[1]).checked = true;
  }

  sendSearch() {
    //localStorage.setItem('4', 'ch');
    if (this.searchCondition == "author") {
      this.closeDisplay();
      this.route.navigate(['/searchresult'], { queryParams: { author: this.searchTerm } });
    }
    else if (this.searchCondition == 'title') {
      this.closeDisplay();
      this.route.navigate(['/searchresult'], { queryParams: { title: this.searchTerm } });
    }
    else {
      this.searchCondition = '';
      alert("Please choose a search condition");
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
