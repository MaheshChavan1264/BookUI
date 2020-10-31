import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { BooklistComponent } from './booklist/booklist.component';
import { EditbookComponent } from './editbook/editbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';


const routes: Routes = [
  {
    path: '',component:BooklistComponent
  },
  {
    path: 'addbook',component:AddbookComponent
  },
  {
    path: 'booklist',component:BooklistComponent
  },
  {
    path: 'editbook/:id',component:EditbookComponent
  },
  {
    path: 'viewbook/:id',component:ViewbookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
