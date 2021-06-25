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
  name: string;
  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  onGetOrderStatus(orderSearchCondition: string) {
    this.bookService.checkOrderStatus(orderSearchCondition).subscribe(status => this.status = status);
  }
}
