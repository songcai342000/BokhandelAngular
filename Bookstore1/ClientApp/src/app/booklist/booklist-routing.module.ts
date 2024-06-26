import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooklistComponent } from './booklist.component';
import { ShoppingsummaryComponent } from '../shoppingsummary/shoppingsummary.component';

const routes: Routes = [{ path: '', component: BooklistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  entryComponents: [ShoppingsummaryComponent],
  exports: [RouterModule]
})
export class BooklistRoutingModule { }
