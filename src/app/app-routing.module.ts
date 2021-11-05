import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './components/public/public/public.component';
import { PublicHomeComponent } from './components/public/public-home/public-home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { CustomerHomeComponent } from './components/customer/customer-home/customer-home.component';
import { DeleteAccountComponent } from './components/customer/delete-account/delete-account.component';
import { NewTransactionComponent } from './components/customer/new-transaction/new-transaction.component';
import { TransactionHistoryComponent } from './components/customer/transaction-history/transaction-history.component';
import { UpdatePasswordComponent } from './components/customer/update-password/update-password.component';

const routes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
    children: [
      {
        path: '',
        component: PublicHomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]
  },
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      {
        path: '',
        component: CustomerHomeComponent,
      },
      {
        path: 'updatePassword',
        component: UpdatePasswordComponent,
      },
      {
        path: 'deleteAccount',
        component: DeleteAccountComponent,
      },
      {
        path: 'newTransaction',
        component: NewTransactionComponent,
      },
      {
        path: 'transactionHistory',
        component: TransactionHistoryComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]
  },
  { path: '**', redirectTo: "public"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
