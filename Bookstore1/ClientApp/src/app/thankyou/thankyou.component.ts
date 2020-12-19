import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})

export class ThankyouComponent implements OnInit {
  orderId: number;

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    
    let s = sessionStorage.getItem('2');
    if (s == null || s == '' || s == 'unpaid') {
      this.router.navigate(['/page-not-found']);
    }
    this.orderId = (JSON.parse(localStorage.getItem('4')))[1];
   // alert(this.orderId);
    if (this.orderId > 0) {
      //alert("test");
      this.clearCart();
      sessionStorage.setItem('2', 'unpaid');
      setTimeout(()=>this.sendInvoice(this.orderId), 8000);
    }
    else {
      this.router.navigate(['/page-not-found']);
    }
  }

  sendInvoice(id: number): void {
    this.bookService.sendInvoice(id).subscribe(() => {
      //sessionStorage.setItem('2', 'paid');
    });
  }

  clearCart() {
    localStorage.clear();
    sessionStorage.setItem('3', 'i');
  }
}
