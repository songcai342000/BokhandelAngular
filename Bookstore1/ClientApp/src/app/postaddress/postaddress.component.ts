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
  books: Book[] = [];
  book: Book;
  orderId: number;
  orderIdInputV: string;
  orderIdStr: string;
  ids: number[] = [];
  userId: number;
  obj: object
  count: number;
  @ViewChild('idInput', { static: false }) newIdElf: ElementRef;
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
 
    window.scrollTo(0, 0);
    if (window.innerWidth < 300) {
      let b = document.getElementById('background');
      let f = document.getElementById('formTitle');
      b.style.fontSize = '0.8em';
      f.innerHTML = "Postal-address";
    }
    // sessionStorage.removeItem('4');
    this.ids = JSON.parse(localStorage.getItem('bookservice-song-4'));
    if (this.ids != null) {
      this.userId = this.ids[0];
      //alert(this.userId);
    }
    if (this.ids != null && this.ids.length == 2) {
      this.orderId = this.ids[1];
      // alert(this.orderId);
    }
    if (this.userId == null || this.userId == NaN || this.userId == 0) {
      this.router.navigate(['/page-not-found']);
    }
    this.books = JSON.parse(localStorage.getItem('bookservice-song-0'));
    this.newOrder(this.userId);
  }

  //listener to input text change event
  @HostListener('window:click', ['$event'])
  handleStorage(event) {
    if (this.orderId == null || this.orderId == undefined) {
      let elem1 = document.getElementById("orderIdInput");
      if (elem1 != undefined && elem1 != null) {
        let e1 = new Event('change', { bubbles: true });
        setTimeout(() => elem1.dispatchEvent(e1));
        // sessionStorage.setItem('4', 'oid');
      }
    }
  }

  saveOrderId(event: any) {
    if (this.ids.length < 2) {
      this.orderIdInputV = event.target.value;
      this.orderId = parseInt(this.orderIdInputV);
      this.ids.push(this.orderId);
      localStorage.setItem('bookservice-song-4', JSON.stringify(this.ids));
      //sessionStorage.setItem('4', this.orderId.toString());
    }
  }

  countries = ['Australia', 'Canada',
    'USA', 'Norway'];
  user = new User(0, '', '', '', '', '', '', '', '');

  //update user and order
  saveAddressOrder(): void {
    if (localStorage.getItem('bookservice-song-0') != null && JSON.parse(localStorage.getItem('bookservice-song-0')).length > 0) {
      //make it ready for event trigger
      this.bookService.updateCustomer(this.userId, this.user).subscribe(() => {
        this.updateOrder(this.orderId, this.userId, this.books);
      });
    }
    else {
      alert('You have no order yet');
    }
  }

  newOrder(uid: number) {
    this.order = { userId: uid, status: 'Not Paid' };
    this.bookService.newOrder(this.order).subscribe(() => {
      this.getOrderId();
    });
  }

  getOrderId() {
    this.bookService.getOrderId().subscribe(orderIdStr => this.orderIdStr = orderIdStr);
  }

  updateOrder(oid: number, uid: number, bks: Book[]) {
    this.order = { orderId: oid, userId: uid, status: 'Paid' };
    this.bookService.updateOrder(oid, this.order).subscribe(() => {
      //saveReservation must be wrapped together
      this.saveReservation(oid, bks);
    });
  }

  saveReservation(oid: number, bks: Book[]) {
    let l = this.books.length;
    this.count = 0;
    for (let i = 0; i < l; i++) {
      let now = new Date(Date.now());
      this.reservation = { orderId: oid, bookId: bks[i]["bookId"], reservationTime: now };
      this.bookService.reservateBook(this.reservation).subscribe(() => {
      });
      this.count++;
    }
    //if all reservations are registrated
    if (this.count == l) {
      this.books = [];
      localStorage.setItem('bookservice-song-0', JSON.stringify(this.books));
      sessionStorage.setItem('2', 'paid');
      this.router.navigate(['/thankyou']);
    }
    else {
      alert("Something is wrong. Please try later.");
    }
  }

}
