import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankcontact',
  templateUrl: './thankcontact.component.html',
  styleUrls: ['./thankcontact.component.css']
})
export class ThankcontactComponent implements OnInit {
  userId: number;
  constructor(private route: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('1') != "contact") {
      this.route.navigate(['/page-not-found']);
    }
  }

}
