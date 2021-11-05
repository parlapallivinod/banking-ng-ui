import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PublicComponent } from './components/public/public/public.component';
import { PublicHomeComponent } from './components/public/public-home/public-home.component';
import { RegisterComponent } from './components/public/register/register.component';
import { LoginComponent } from './components/public/login/login.component';
import { CustomerHomeComponent } from './components/customer/customer-home/customer-home.component';
import { DeleteAccountComponent } from './components/customer/delete-account/delete-account.component';
import { NewTransactionComponent } from './components/customer/new-transaction/new-transaction.component';
import { TransactionHistoryComponent } from './components/customer/transaction-history/transaction-history.component';
import { UpdatePasswordComponent } from './components/customer/update-password/update-password.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { PublicHeaderComponent } from './components/public/public-header/public-header.component';
import { CustomerHeaderComponent } from './components/customer/customer-header/customer-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PublicHeaderComponent,
    PublicHomeComponent,
    RegisterComponent,
    LoginComponent,
    CustomerComponent,
    CustomerHeaderComponent,
    CustomerHomeComponent,
    DeleteAccountComponent,
    NewTransactionComponent,
    TransactionHistoryComponent,
    UpdatePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
