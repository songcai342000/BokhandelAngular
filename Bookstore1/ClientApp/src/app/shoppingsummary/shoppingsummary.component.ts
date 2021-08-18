import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef, HostListener, ComponentRef } from '@angular/core';
import { Book } from '../book';
import { BookAmount } from '../bookamount';
import { DragDropModule, CdkDragEnd } from '@angular/cdk/drag-drop';
import { BookService } from '../book.service';
import { User } from '../user';

@Component({
  selector: 'app-shoppingsummary',
  templateUrl: './shoppingsummary.component.html',
  styleUrls: ['./shoppingsummary.component.css']
})
export class ShoppingsummaryComponent implements OnInit {
  [x: string]: any;
  books: Book[] = [];
  bookAmounts: BookAmount[]=[];
  dragPosition = { x: 0, y: 0 };
  isShow = true;
  invoice: any;

  @Input() bookAmount: BookAmount;
  @Input() totalAmount: number;
  @Input() totalPrice: number;
  componentRef: ComponentRef<any>;
  @ViewChild('myDiv', { static: true }) summaryDiv: ElementRef;

  constructor(private bookService: BookService) { }

  ngOnInit() {
   
    this.setPosition();
   /* let e = document.getElementById('myDiv');
    e.setAttribute('style', 'backgroundColor: red');*/
  }

  @HostListener('window:click', ['$event'])
  handleStorage(event) {
    let v = localStorage.getItem('3');
    if (v == 'y' || v == 'c' || v == 'r') {
      document.getElementById("test").style.height = "auto";
      if (localStorage.length > 1) {
        this.bookAmounts = this.bookService.createSummary(this.bookAmounts, this.books);
        //this.totalAmount = parseInt(JSON.parse(localStorage.getItem('1')));
        //this.totalPrice = parseInt(JSON.parse(localStorage.getItem('2')));
        this.totalAmount = parseInt((JSON.parse(localStorage.getItem('1')))[0]);
        this.totalPrice = parseInt((JSON.parse(localStorage.getItem('1')))[1]);
        this.isShow = true;
        if (this.isShow) {
          this.isShow = false;
        }
        else {
          this.isShow = true;
        }
      }
      else {
        this.totalAmount = 0;
        this.totalPrice = 0;
      }
      localStorage.setItem('3', '');
    }
  }

  //close the shopping record div
  toggleDisplay() {
    this.isShow = !this.isShow;
    //document.getElementById("test").style.height = "0px";
    /*if (this.componentRef) {
      alert("yy");
      this.componentRef.destroy();
    }
    document.getElementById("test").style.visibility = "hidden";*/
  }


  removeItem(bookAmount: BookAmount) {
    this.bookAmount = bookAmount;
    this.bookService.removeItem(this.bookAmount);
    this.bookAmounts = this.bookService.createSummary(this.bookAmounts, this.books);
    localStorage.setItem('3', 'r');
  }

  //create shopping summary
  getSummary(): void {
    //this.bookService.createSummary(this.bookAmounts, this.books);
    this.bookAmounts = this.bookService.createSummary(this.bookAmounts, this.books);
  }

  dragEnded(event: CdkDragEnd) {
    if (sessionStorage.getItem('0') == null) {
      this.dragPosition.x = 100;
    }
    const { x, y } = event.distance;
    this.dragPosition.x += x;
    this.dragPosition.y += y;
    sessionStorage.clear();
    sessionStorage.setItem("0", JSON.stringify({ x: this.dragPosition.x, y: this.dragPosition.y }));
  }

  getPosition() {
    let obj = document.getElementById("myDiv").getBoundingClientRect();

  }

  //set the start position of a draged element when the page is reloaded
  setPosition() {
    if (sessionStorage.length != 0) {
      let obj = JSON.parse(sessionStorage.getItem("0"));
      this.dragPosition.x = obj.x;
      this.dragPosition.y = obj.y;
      alert(this.dragPosition.x);
    }
    else {
      let original = document.getElementById("myDiv").getBoundingClientRect();
      alert(original.left);
      this.dragPosition.x = 500;
      this.dragPosition.y = -1000;
      //alert(this.dragPosition.y);
    }
  }

  clearCart() {
    localStorage.clear();
    localStorage.setItem('3', 'c');
    this.getSummary();
  }


}
