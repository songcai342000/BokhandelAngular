import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  @Input() bookCount: number;
  constructor() { }

  ngOnInit() {
  }

}
