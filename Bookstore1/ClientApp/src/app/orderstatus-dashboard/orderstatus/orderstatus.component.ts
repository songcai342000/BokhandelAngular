import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {
  status: string;
  id: number;
  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  onGetOrderStatus(orderId: number) {
    this.id = orderId;
    this.bookService.checkOrderStatus(orderId).subscribe(status => this.status = status);
  }
}
