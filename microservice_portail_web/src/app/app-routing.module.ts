import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment_page/payment.component';
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  {path : 'payment', component : PaymentComponent},
  {path: "index", component: IndexComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
