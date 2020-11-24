import { Component, OnInit, ViewChild, HostListener, Output, EventEmitter, ElementRef, Input } from '@angular/core';
import { User } from '../user';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { LoadsummaryDirective } from '../loadsummary.directive';
import { Order } from '../order';
import { Reservation } from '../reservation';
import { Book } from '../book';

@Component({
  selector: 'app-postaddress',
  templateUrl: './postaddress.component.html',
  styleUrls: ['./postaddress.component.css']
})
export class PostaddressComponent implements OnInit {
  //@ViewChild(LoadsummaryDirective, { static: true }) summaryHost !: LoadsummaryDirective;
  order: Order;
  reservation: Reservation;
  reservations: Reservation[];
  books: Book[]=[];
  book: Book;
  orderId: number;
  orderIdInputV: string;
  orderIdStr: string;
  ids: string[] = [];
  userId: number;
  obj: object
  @ViewChild('idInput', { static: false }) newIdElf: ElementRef;
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
   // sessionStorage.removeItem('4');

    this.userId = parseInt(localStorage.getItem('4'));
   // alert(this.userId);
    if (this.userId == null || this.userId == NaN || this.userId == 0) {
      this.router.navigate(['/page-not-found']);
    }
    this.books = JSON.parse(localStorage.getItem('0'));
    this.newOrder();
  }

  //listener to input text change event
  @HostListener('window:click', ['$event'])
  handleStorage(event) {
    let elem1 = document.getElementById("orderIdInput");
    //alert('1');
    let l = sessionStorage.getItem('4');
    alert(l);
    if (l != 'oid' && elem1 != undefined && elem1 != null) {
      let e1 = new Event('change', { bubbles: true });
      //make it asynatic
      //alert("change");
      setTimeout(() => elem1.dispatchEvent(e1));
      sessionStorage.setItem('4', 'oid');
    }
  }

  saveOrderId(event: any) {
    alert('1');
    this.orderIdInputV = event.target.value;
    alert(this.orderIdInputV);
    this.orderId = parseInt(this.orderIdInputV);
    alert(this.orderId);
  }

  countries = ['Australia', 'Canada',
    'USA', 'Norway'];
  user = new User(this.userId, '', '', '', '', '', '', '', '');

  //update user and order
  saveAddressOrder(): void {
    //make it is ready for event trigger
    try {
      this.bookService.updateCustomer(this.userId, this.user).subscribe(() => {
        this.updateOrder();
      });
      this.clearCart();
      this.sendInvoice();
    }
    catch {
      alert("Something is wrong. Please try again");
    }
  }

  newOrder() {
  //  alert(localStorage.getItem('4'));
    this.order = { userId: this.userId, status: 'Not Paid'};
    this.bookService.newOrder(this.order).subscribe(() => {
      this.getOrderId();
    });
  }

  getOrderId() {
    this.bookService.getOrderId().subscribe(orderIdStr => this.orderIdStr = orderIdStr);
  }

  updateOrder() {
    this.order = { orderId: this.orderId, userId: this.userId, status: 'Paid'};
    this.bookService.updateOrder(this.orderId, this.order).subscribe(() => {
      //saveReservation must be wrapped together
      this.saveReservation();
    });
  }

  clearCart() {
    localStorage.clear();
    sessionStorage.setItem('3', 'i');
  }

  saveReservation() {
    let l = this.books.length;
    for (let i = 0; i < l; i++) {
      let now = new Date(Date.now());
      this.reservation = { orderId: this.orderId, bookId: this.books[i]["bookId"], reservationTime: now };
      this.bookService.reservateBook(this.reservation).subscribe(() => {
      });
    }
  }

 /* saveReservation() {
    let l = this.books.length;
    alert(l.toString());
    for (let i = 0; i < l; i++) {
      let now = new Date(Date.now());
      this.reservation = { orderId: this.orderId, bookId: this.books[i]["bookId"], reservationTime: now };
      this.reservations.push(this.reservation);
      this.bookService.reservateBook(JSON.parse(this.reservations)).subscribe(() => {
      });
    }
  }*/

  sendInvoice(): void {
    this.bookService.sendInvoice(this.orderId).subscribe(() => {
      sessionStorage.setItem('2', 'paid');
      this.router.navigate(['/thankyou']);
    });
  }

  removeSession4() {
    sessionStorage.removeItem('4');
  }

 /* @HostListener('window:click', ['$event'])
  handleStorage(event) {
    
  }*/

}
