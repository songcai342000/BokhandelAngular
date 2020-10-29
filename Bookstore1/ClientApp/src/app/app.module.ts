import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ShoppingsummaryComponent } from './shoppingsummary/shoppingsummary.component';
import { BooksComponent } from './books/books.component';
import { LoadsummaryDirective } from './loadsummary.directive';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { LoadcartDirective } from './loadcart.directive';
import { BookService } from './book.service';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './cards/cards.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ThankcontactComponent } from './thankcontact/thankcontact.component';
import { FootComponent } from './foot/foot.component';
import { ContactComponent } from './contact/contact.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AgmCoreModule } from '@agm/core';
import { Chart } from 'chart.js';
import { AppRoutingModule } from './app-routing.module';
import { BooksModule } from './books/books.module';
import { BooklistComponent } from './booklist/booklist.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { LoadsearchDirective } from './loadsearch.directive';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { PostaddressComponent } from './postaddress/postaddress.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BooksComponent,
    ShoppingsummaryComponent,
    LoadsummaryDirective,
    ShoppingcartComponent,
    LoadcartDirective,
    BookdetailsComponent,
    ContactComponent,
    PageNotFoundComponent,
    StatisticComponent,
    PostaddressComponent,
    CardsComponent,
    ThankyouComponent,
    ThankcontactComponent,
    FootComponent,
    SearchresultComponent,
    LoadsearchDirective,
    SearchboxComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCRxs1Y-cns_64_xXAF_URSGWereAKG8vw'
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'bookdetails/:id', component: BookdetailsComponent },
      { path: 'bookdetails', component: BookdetailsComponent },
      { path: 'books', component: BooksComponent },
      { path: 'searchresult', component: SearchresultComponent },
      { path: 'searchresult/:title', component: SearchresultComponent },
      { path: 'searchresult/:author', component: SearchresultComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'statistic', component: StatisticComponent },
      { path: 'postaddress', component: PostaddressComponent },
      { path: 'thankyou', component: ThankyouComponent },
      { path: 'thankcontact', component: ThankcontactComponent },
      { path: '**', component: PageNotFoundComponent },
      { path: 'fetch-data', component: FetchDataComponent }
    ]),
    AppRoutingModule,
    BooksModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  entryComponents: [ShoppingsummaryComponent, ShoppingcartComponent, SearchboxComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
