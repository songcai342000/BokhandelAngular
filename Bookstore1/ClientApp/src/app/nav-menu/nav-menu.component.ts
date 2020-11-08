import { Component, ViewChild, ComponentFactoryResolver, OnInit, HostListener, Input, HostBinding, ComponentRef, Output } from '@angular/core';
import { ShoppingcartComponent } from '../shoppingcart/shoppingcart.component';
import { SearchboxComponent } from '../searchbox/searchbox.component';
import { LoadcartDirective } from '../loadcart.directive';
import { BookService } from '../book.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';
import { LoadsearchDirective } from '../loadsearch.directive';
import { Router } from '@angular/router';
import { LoadsummaryDirective } from '../loadsummary.directive';
import { ShoppingsummaryComponent } from '../shoppingsummary/shoppingsummary.component';
import { Book } from '../book';
import { BookAmount } from '../bookamount';
import { DragDropModule, CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})

export class NavMenuComponent implements OnInit {
  [x: string]: any;
  searchCondition: string = '';
  bookNumber: number = 0;
  isExpanded = false;
  isShowDiv = false;
  isOpen = false;
  searchedBooks: Book[];
  currentPath: string;
  //[xx: string]: any;
  books: Book[] = [];
  bookAmounts: BookAmount[] = [];
  dragPosition = { x: 0, y: 0 };
  isShow = true;

  @Input() bookAmount: BookAmount;
  @Input() totalAmount: number;
  @Input() totalPrice: number;
  @ViewChild(LoadsearchDirective, { static: true }) searchHost: LoadsearchDirective;
  @ViewChild(LoadsummaryDirective, { static: true }) summaryHost !: LoadsummaryDirective;
  componentRef: ComponentRef<any>;
  constructor(private bookService: BookService, private componentFactoryResolver: ComponentFactoryResolver, private route: Router) { }

  ngOnInit() {
    this.setPosition();
    //localStorage.clear();
    //this.loadSummaryComponent();
    if (localStorage.getItem('0') != null) {
      this.bookNumber = JSON.parse(localStorage.getItem('0')).length;
    }
  }

  @HostListener('window:click', ['$event'])
  handleStorage(event) {
    if (localStorage.length > 1) {
      this.bookNumber = JSON.parse(localStorage.getItem('0')).length;
    }
    else if (localStorage.length <= 1) {
      this.bookNumber = 0;
    }
    let v = localStorage.getItem('3');
    if (v == 'y' || v == 'r' || v == 'c') {
       
      document.getElementById("test").style.height = "auto";
      if (localStorage.length > 1) {
        this.bookAmounts = this.bookService.createSummary(this.bookAmounts, this.books);
        this.totalAmount = parseInt(JSON.parse(localStorage.getItem('1')));
        this.totalPrice = parseInt(JSON.parse(localStorage.getItem('2')));
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


  /*collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }*/

  //load the summary
  loadSummary() {
    if (localStorage.length > 1) {
      localStorage.setItem('3', 'y');
    }
  }

  //resolve the dynamic component 
  loadSummaryComponent() {
    if (localStorage.length > 1) {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ShoppingsummaryComponent);
      const viewContainerRef = this.summaryHost.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
    }
  }

  loadSearchBox() {
    //document.getElementById("close").style.visibility = "visible";
    //var f = document.getElementById("formDiv");
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(SearchboxComponent);
    const viewContainerRef = this.searchHost.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
    /*var c = document.getElementById("contents");
    if (document.getElementById("contents")) {
      f.removeChild(c);
    }
    c = document.createElement("div");
    c.setAttribute("id", "contents");
    c.setAttribute("width", "250px");
    c.setAttribute("height", "100px");
    c.setAttribute("style", "position: absolute");
    c.setAttribute("style", "border-radius: 10px");
    c.setAttribute("style", "background-color: skyblue");

    f.appendChild(c);
    var t = document.createElement("input");
    c.appendChild(t);
    t.setAttribute("type", "text");
    t.setAttribute("placeholder", "Search term... ...");
    t.setAttribute("id", "searchString");
    t.setAttribute("value", "");
    t.setAttribute("style", "margin: 25px; width: 80%; height: 35px; border-radius: 5px; border-color: none; border-width: none; padding-left: 5px");
    var b1 = document.createElement("br");
    var b2 = document.createElement("br");
    f.appendChild(b1);

    var l1 = document.createElement("label");
    l1.innerText = "Search By: ";
    l1.setAttribute("style", "margin-left: 27px");
    var l2 = document.createElement("label");
    l2.innerText = "Title";
    var r1 = document.createElement("input");
    r1.setAttribute("type", "radio");
    r1.setAttribute("style", "margin-right: 20px");
    r1.setAttribute("id", "titleRadio");
    r1.setAttribute("value", "{{searchCondition}}");
    r1.setAttribute("name", "condition");
    r1.addEventListener('click', this.byTitle.bind(this));
    var l3 = document.createElement("label");
    l3.innerText = "Author";
    l2.setAttribute("for", "titleRadio");
    l2.setAttribute("style", "margin-left: 27px; margin-right: 5px");
    l3.setAttribute("for", "authorRadio");
    l3.setAttribute("style", "margin-left: 20px; margin-right: 5px");

    var r2 = document.createElement("input");
    r2.setAttribute("type", "radio");
    r2.setAttribute("id", "authorRadio");
    r2.setAttribute("name", "condition");
    r2.setAttribute("value", "{{searchCondition}}");
    r2.addEventListener('click', this.byAuthor.bind(this));

    var b3 = document.createElement("br");
    var b4 = document.createElement("br");

    var bt = document.createElement("input");
    bt.setAttribute("type", "button");
    bt.setAttribute("style", "margin-left: 25px; border-radius: 5px; background-color: white; width: 130px; height: 30px; margin-bottom: 25px; margin-top: 10px; padding-top: 0px");
    bt.setAttribute("class", "btn");
    bt.setAttribute("id", "searchBtn");
    bt.setAttribute("Value", "Search");
    bt.addEventListener('click', this.sendSearch.bind(this));

    c.appendChild(l1);
    c.appendChild(b3);
    c.appendChild(l2);
    c.appendChild(r1);
    c.appendChild(l3);
    c.appendChild(r2);
    c.appendChild(b4);
    c.appendChild(bt);*/
  }

  sendSearch() {
   /*if (this.searchCondition == 'title')
      this.route.navigateByUrl('/searchresult?title=' + this.searchTerm);
    else if (this.searchCondition == 'author')
     this.route.navigateByUrl('/searchresult?author=' + this.searchTerm);
    var f = document.getElementById("formDiv");
    var c = document.getElementById("contents");
    f.removeChild(c);:*/
  }

  //close the shopping record div
  closeDisplay() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    document.getElementById("close").style.visibility = "hidden";
  }

  caretRedirection() {
    document.getElementById("arrowSpan").className = "caret out";
  }

  leftGrow() {
    this.isShowDiv = !this.isShowDiv;
    if (this.isShowDiv) {
      document.getElementById("no-width").className = 'left-growth';
      document.getElementById("no-width").innerHTML = '<input type="text">';
    }
    if (!this.isShowDiv) {
      document.getElementById("no-width").className = '';
      document.getElementById("no-width").innerHTML = '';
    }
  }

  moveText() {
    //let value = document.getElementById("text-motion2").attributes['startOffset'];
    document.getElementsByTagName("textPath")[0].style.color = "White";
  }

 /* getCurrentPath() {
    this.currentPath = window.location.pathname;
  }*/

  booksFocus() {
    document.getElementById("booksLinkDiv").style.backgroundColor = "blue";
  }


  booksBlur() {
    document.getElementById("booksLinkDiv").style.backgroundColor = "black";

  }

  homeFocus() {
    document.getElementById("homeLinkDiv").style.backgroundColor = "blue";
  }


  homeBlur() {
    document.getElementById("homeLinkDiv").style.backgroundColor = "black";
  }

  searchFocus() {
    document.getElementById("searchLinkDiv").style.backgroundColor = "blue";
  }


  searchBlur() {
    document.getElementById("searchLinkDiv").style.backgroundColor = "black";
  }

  caretOut() {
    document.getElementsByClassName("dropdown")[0].className = "dropdown text-white dropdown-toggle caret-up"
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
    }
    else {
      let original = document.getElementById("myDiv").getBoundingClientRect();
      this.dragPosition.x = 500;
      this.dragPosition.y = -1000;
    }
  }

  clearCart() {
    localStorage.clear();
    localStorage.setItem('3', 'c');
    this.getSummary();
  }



}
