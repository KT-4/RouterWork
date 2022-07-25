import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ProductsComponent } from './products/products.component';
import { ViewComponent } from './products/view/view.component';
import { AddComponent } from './products/add/add.component';
import { UsersComponent } from './users/users.component';
import { LoansComponent } from './loans/loans.component';
import { LoantypesComponent } from './loantypes/loantypes.component';
import { AddLoansComponent } from './add-loans/add-loans.component';




import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    ProductsComponent,
    ViewComponent,
    AddComponent, 
    UsersComponent,
    LoansComponent,
    LoantypesComponent,
    AddLoansComponent,

    ProductComponent,
     ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
   

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
