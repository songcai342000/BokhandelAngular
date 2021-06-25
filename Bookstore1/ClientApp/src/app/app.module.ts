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
import { FavoritesComponent } from './favorites/favorites.component';
import { AgmCoreModule } from '@agm/core';
import { Chart } from 'chart.js';
import { AppRoutingModule } from './app-routing.module';
import { BooklistComponent } from './booklist/booklist.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { LoadsearchDirective } from './loadsearch.directive';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { PostaddressComponent } from './postaddress/postaddress.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LinkdemopageComponent } from './linkdemopage/linkdemopage.component';
import { Foot1Component } from './foot1/foot1.component';
import { Foot2Component } from './foot2/foot2.component';
import { BestsellingComponent } from './bestselling/bestselling.component';
import { MarketComponent } from './market/market.component';
import { QuestionsComponent } from './questions/questions.component';
import { EventsComponent } from './events/events.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CareersComponent } from './careers/careers.component';
//import { OrderstatusComponent } from './orderstatus-dashboard/orderstatus/orderstatus.component';
import { OrderstatusDashboardModule } from './orderstatus-dashboard/orderstatus-dashboard.module';
//import { SearchComponent } from './orderstatus-dashboard/search/search.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderstatusComponent } from './orderstatus-dashboard/orderstatus/orderstatus.component';
import { SearchComponent } from './orderstatus-dashboard/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
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
    FavoritesComponent,
    LinkdemopageComponent,
    SearchboxComponent,
    Foot1Component,
    Foot2Component,
    BestsellingComponent,
    MarketComponent,
    QuestionsComponent,
    EventsComponent,
    PrivacyComponent,
    CareersComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    OrderstatusDashboardModule,
    FormsModule,
    DragDropModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCRxs1Y-cns_64_xXAF_URSGWereAKG8vw'
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'bookdetails/:id', component: BookdetailsComponent },
      { path: 'bookdetails', component: BookdetailsComponent },
      { path: 'searchresult', component: SearchresultComponent },
      { path: 'searchresult/:title', component: SearchresultComponent },
      { path: 'searchresult/:author', component: SearchresultComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'statistic', component: StatisticComponent },
      { path: 'market', component: MarketComponent },
      { path: 'events', component: EventsComponent },
      { path: 'orderstatus-dashboard/orderstatus', component: OrderstatusComponent },
      { path: 'questions', component: QuestionsComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'careers', component: CareersComponent },
      { path: 'postaddress', component: PostaddressComponent },
      { path: 'thankyou', component: ThankyouComponent },
      { path: 'thankcontact', component: ThankcontactComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'linkdemopage', component: LinkdemopageComponent },
      { path: '**', component: PageNotFoundComponent },
      { path: 'fetch-data', component: FetchDataComponent }
    ]),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  entryComponents: [ShoppingsummaryComponent, ShoppingcartComponent, SearchboxComponent, SearchComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
