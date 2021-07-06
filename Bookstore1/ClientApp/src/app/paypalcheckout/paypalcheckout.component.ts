import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

declare let paypal;

@Component({
  selector: 'app-paypalcheckout',
  templateUrl: './paypalcheckout.component.html',
  styleUrls: ['./paypalcheckout.component.css']
})
export class PaypalcheckoutComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  total: number;
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    paypal.Buttons({
      createOrder: (data, actions) => {

        return actions.order.create({

          purchase_units: [{

            amount: {
              currency_code: 'USD',
              value: '0.01'

            }

          }]
        });
      },
      onApprove: (data, actions) =>{
        return actions.order.capture();
      }
    }).render(this.paypalElement.nativeElement);
    //sessionStorage.setItem('2', 'paid');
    //this.router.navigate(['/thankyou']);
  }

  getTotalValue() {
    let id = parseInt(JSON.parse(localStorage.getItem('4'))[1]);
    this.bookService.getTotalPurchasedValue(id).subscribe(total => this.total = total);
}
  
}
