import { HttpClient } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import { Observable, of, empty } from 'rxjs';
import { BookAmount } from './bookAmount';
import { tap, catchError } from 'rxjs/operators';
import { Contact } from './contact';
import { Book } from './book';
import { User } from './user';
import { Reservation } from './reservation';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  amount: number = 0;
  books: Book[];
  bookAmount: BookAmount;
  bks: Book[] = [];
  invoice: any;
  private booksUrl = 'api/Books';
  private crimeUrl = 'api/Books/CrimeBooks';
  private romanceUrl = 'api/Books/RomanceBooks';
  private fictionUrl = 'api/Books/FictionBooks';
  private searchTitleUrl = 'api/Books/SearchByTitle';
  private searchAuthorUrl = 'api/Books/SearchByAuthor';
  private newUrl = 'api/Books/NewBooks';
  private contactUrl = 'api/Contacts';
  private userUrl = 'api/Users';
  private weatherUrl = 'api/WeatherForecast';

  constructor(private http: HttpClient) { }
  //register to localStorage
  register(book: Book) {
    //localStorage.clear();
    if (localStorage.length <= 1) {
      this.bks.length = 0;//clear bks
      this.bks.push(book);
      localStorage.setItem('0', JSON.stringify(this.bks));
    }
    else {
      this.bks = JSON.parse(localStorage.getItem('0'));
      this.bks.push(book);
      localStorage.setItem('0', JSON.stringify(this.bks));
    }
  }

  removeItem(bookAmount: BookAmount) {
    let books = JSON.parse(localStorage.getItem('0'));
    for (let i = 0; i < books.length; i++) {
      let obj = books[i];
      if (obj.bookId == bookAmount["bookId"]) {
        books.splice(i, 1);
        break;
      }
    }
    //update the bookamount array in localstorage
    localStorage.clear();
    localStorage.setItem('0', JSON.stringify(books));
  }

  clearItems() {
    var books = JSON.parse(localStorage.getItem('0'));
    books.length = 0;
    localStorage.clear();
    localStorage.setItem('0', JSON.stringify(books));
  }

  //create shopping summary
  createSummary(bookAms: BookAmount[], bks: Book[]) {
    bookAms = [];
    bookAms.length = 0;
    let itemNumber;
    let totalPrice = 0;
    let totalAmount = 0;
    if (localStorage.length > 1) {
      this.bks = JSON.parse(localStorage.getItem('0'));
      bks = this.bks;
      for (var a = 0; a < this.bks.length; a++) {
        itemNumber = 0;
        for (var b = 0; b < bks.length; b++) {
          if (this.bks[a]["bookId"] == bks[b]["bookId"]) {
            itemNumber++; //calculate the repeating items
            if (itemNumber > 1) {
              this.bks.splice(b, 1);
              b--;
            }
          }
        }
        bookAms.push({ bookId: this.bks[a]["bookId"], title: this.bks[a]["title"], amount: itemNumber, price: parseInt(this.bks[a]["price"]) * itemNumber }); //put in a bookamount object
        totalAmount += itemNumber;
        totalPrice += parseInt(this.bks[a]["price"]) * itemNumber;
      }
      localStorage.removeItem('1');
      localStorage.removeItem('2');
      localStorage.setItem('1', totalAmount.toString());
      localStorage.setItem('2', totalPrice.toString());
    }
    return bookAms;
    // }
  }


  //get romance book list
  getRomanceBooks(): Observable<Book[]> {
    //return this.http.get<Book[]>(this.romanceUrl).pipe(
    //tap((newBooks: Book[]) => alert("test error")),
    //catchError(this.handelError));
    return this.http.get<Book[]>(this.romanceUrl);
  }

  //get fiction book list
  getFictionBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.fictionUrl);
  }

  //get crime book list
  getCrimeBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.crimeUrl);
  }

  //get book list
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  //get book by id
  getBook(id: number): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl + '/' + id);
  }

  searchBooks(searchTerm: string) {
    return this.http.get<Book[]>(this.booksUrl + '/' + searchTerm);
  }

  newContact(contact: Contact) {
    return this.http.post<Contact>(this.contactUrl, contact);
  }

  newCustomer(customer: User) {
    return this.http.post<User>(this.userUrl, customer);
  }

  getByTitle(title: string) {
    return this.http.get<Book[]>(this.searchTitleUrl + '/' + title);
  }

  getByAuthor(author: string) {
    return this.http.get<Book[]>(this.searchAuthorUrl + '/' + author);
  }

  sendInvoice(user: User) {
    return this.http.get<any>(this.weatherUrl + '/' + user);
  }

  handelError(books: Book[]) {
    return (error: any): Observable<Book[]> => {

      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(books);
    };
  }
}

