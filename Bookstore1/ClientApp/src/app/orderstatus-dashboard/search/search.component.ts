import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() getOrderStatus: EventEmitter<any> = new EventEmitter<number>();
  orderId: number;
  status: string;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  getOrderId(event: any) {
    this.orderId = parseInt(event.target.value);
  }

  queryById() {
    this.getOrderStatus.emit(this.orderId);
  }

}



