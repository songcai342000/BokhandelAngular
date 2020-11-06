import { Component, OnInit, ViewChild, ElementRef, ComponentFactoryResolver } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Contact } from '../contact';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contentLength: string;
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {

  }
  //coordinator got from Geocoding page of Google
  lat: number = 38.907873;
  lng: number = -79.988463;

  countries = ['Australia', 'Canada',
    'USA', 'Norway'];
  contact = new Contact(2, '', '', '', '', '');

  //add the video to database
  newContact(contact: Contact): void {
    sessionStorage.setItem('1', 'contact');
     this.bookService.newContact(this.contact).subscribe(() => {
      this.router.navigateByUrl('/thankcontact');
    }); 
   // this.router.navigateByUrl('/thankcontact');
  }

  calculateLength(event: any) {
    if (event.target.value.length < 50) {
      this.contentLength = "Need at least " + (50 - event.target.value.length).toString() + " characters more";
    }
  }


}