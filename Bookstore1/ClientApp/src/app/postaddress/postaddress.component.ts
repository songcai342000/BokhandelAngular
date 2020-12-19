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
  ids: number[] = [];
  userId: number;
  obj: object
  count: number;
  @ViewChild('idInput', { static: false }) newIdElf: ElementRef;
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    let t = document.getElementById('total');
    if (window.innerHeight < 800) {
      t.style.height = 'auto';
    }
    else {
      t.style.height = '100%';
    }
   // sessionStorage.removeItem('4');
    this.ids = JSON.parse(localStorage.getItem('4'));
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
    this.books = JSON.parse(localStorage.getItem('0'));
    this.newOrder(this.userId);
  }

  //listener to input text change event
  @HostListener('window:click', ['$event'])
  handleStorage(event) {
    if (this.orderId == null || this.orderId == undefined) {
      let elem1 = document.getElementById("orderIdInput");
     // let l = sessionStorage.getItem('4');
      //if (l != 'oid' && parseInt(l) != NaN && elem1 != undefined && elem1 != null) {
      if (elem1 != undefined && elem1 != null) {
        let e1 = new Event('change', { bubbles: true });
        //make it asynatic
        //alert("change");
        setTimeout(() => elem1.dispatchEvent(e1));
       // sessionStorage.setItem('4', 'oid');
      }
    }
  }

  saveOrderId(event: any) {
   // this.ids = JSON.parse(localStorage.getItem('4'));
   // alert('1');
    if (this.ids.length < 2) {
      this.orderIdInputV = event.target.value;
      //alert(this.orderIdInputV);
      this.orderId = parseInt(this.orderIdInputV);
      this.ids.push(this.orderId);
      localStorage.setItem('4', JSON.stringify(this.ids));
      //sessionStorage.setItem('4', this.orderId.toString());
    }
  }

  countries = ['Australia', 'Canada',
    'USA', 'Norway'];
  user = new User(this.userId, '', '', '', '', '', '', '', '');

  //update user and order
  saveAddressOrder(): void {
    //make it is ready for event trigger
    //alert(this.orderId);
      this.bookService.updateCustomer(this.userId, this.user).subscribe(() => {
        this.updateOrder(this.orderId, this.userId, this.books);
      });
  
    
  }

  newOrder(uid: number) {
  //  alert(localStorage.getItem('4'));
    this.order = { userId: uid, status: 'Not Paid'};
    this.bookService.newOrder(this.order).subscribe(() => {
      this.getOrderId();
    });
  }

  getOrderId() {
    this.bookService.getOrderId().subscribe(orderIdStr => this.orderIdStr = orderIdStr);
  }

  updateOrder(oid: number, uid: number, bks: Book[]) {
    this.order = { orderId: oid, userId: uid, status: 'Paid'};
    this.bookService.updateOrder(oid, this.order).subscribe(() => {
      //saveReservation must be wrapped together
      this.saveReservation(oid, bks);
    });
  }

  saveReservation(oid: number, bks: Book[]) {
    let l = this.books.length;
    //alert(l);
    this.count = 0;
    for (let i = 0; i < l; i++) {
      let now = new Date(Date.now());
      this.reservation = { orderId: oid, bookId: bks[i]["bookId"], reservationTime: now };
      this.bookService.reservateBook(this.reservation).subscribe(() => {
      });
      this.count++;
    }
    //alert(l);
    //alert(this.count);
    //if all reservations are registrated
    if (this.count == l) {
      this.books = [];
      localStorage.setItem('0', JSON.stringify(this.books));
      sessionStorage.setItem('2', 'paid');
      this.router.navigate(['/thankyou']);
    }
    else {
      alert("Something is wrong. Please try later.");
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

  /*clearCart() {
    localStorage.clear();
    sessionStorage.setItem('3', 'i');
  }*/

 

 /* @HostListener('window:click', ['$event'])
  handleStorage(event) {
    
  }*/

  sendInvoice(id: number): void {
    this.bookService.sendInvoice(id).subscribe(() => {
      //sessionStorage.setItem('2', 'paid');
    });
  }



}
