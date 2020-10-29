import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooklistRoutingModule } from './booklist-routing.module';
import { BooklistComponent } from './booklist.component';
import { ShoppingsummaryComponent } from '../shoppingsummary/shoppingsummary.component';


@NgModule({
  declarations: [BooklistComponent],
  imports: [
    CommonModule,
    BooklistRoutingModule
  ]
})
export class BooklistModule { }
