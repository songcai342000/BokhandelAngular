import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';

const routes: Routes = [
  { path: 'booklist', loadChildren: () => import('./booklist/booklist.module').then(m => m.BooklistModule) }
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule {
  
}
