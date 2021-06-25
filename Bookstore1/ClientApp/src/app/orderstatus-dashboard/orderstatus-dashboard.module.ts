import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';
import { FormsModule, NgForm } from '@angular/forms';


@NgModule({
  declarations: [SearchComponent, OrderstatusComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SearchComponent, OrderstatusComponent
  ]
})
export class OrderstatusDashboardModule { }
