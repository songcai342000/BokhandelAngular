import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';



@NgModule({
  declarations: [SearchComponent, OrderstatusComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent, OrderstatusComponent
  ]
})
export class OrderstatusDashboardModule { }
