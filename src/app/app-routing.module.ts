import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';
import {NewAdminRequestComponent} from './new-admin-request/new-admin-request.component';

const routes: Routes = [
  {
    path: 'stocks',
	component: StocksComponent
	
  },
  {
	path: 'new/:id',
	component: NewAdminRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
