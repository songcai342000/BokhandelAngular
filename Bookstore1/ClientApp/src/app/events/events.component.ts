import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Event } from '../event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  arrangements: Event[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getEvents();
  }

  getEvents() {
    this.bookService.getEvents().subscribe(arrangements => this.arrangements = arrangements);
  }

}
