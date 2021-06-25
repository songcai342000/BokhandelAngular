import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../book.service';
import { OrderSearchCondition } from '../../orderSearchCondition';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  orderId: number;
  email: string;
  @Output() getOrderStatus: EventEmitter<any> = new EventEmitter<string>();

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  getOrderId(event: any) {
    this.orderId = event.target.value;
  }

  getEmail(event: any) {
    this.email = event.target.value;
  }

  sendCondition() {
    this.getOrderStatus.emit(this.orderId + '/' + this.email);
  }

}



