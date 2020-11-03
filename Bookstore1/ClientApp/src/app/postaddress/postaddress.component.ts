import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from '../user';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { LoadsummaryDirective } from '../loadsummary.directive';

@Component({
  selector: 'app-postaddress',
  templateUrl: './postaddress.component.html',
  styleUrls: ['./postaddress.component.css']
})
export class PostaddressComponent implements OnInit {
  //@ViewChild(LoadsummaryDirective, { static: true }) summaryHost !: LoadsummaryDirective;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  countries = ['Australia', 'Canada',
    'USA', 'Norway'];
  user = new User(2, '', '', '', '', '', '', '', '');

  //add the video to database
  saveAddress(user: User): void {
    localStorage.clear();
    this.bookService.newCustomer(this.user).subscribe(() => {
      sessionStorage.setItem('2', 'paid');
      this.router.navigateByUrl('/thankyou');
    });
  }

  @HostListener('window:click', ['$event'])
  handleStorage(event) {
    
  }

}
