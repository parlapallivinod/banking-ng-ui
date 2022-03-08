import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankingService {
  loading:boolean=false;

  message:string = "";
  messageType:string = "";

  bankingApi = 'http://localhost:8080/banking/api/v1';
  customerApi = this.bankingApi + '/customers';
  registrationApi = this.customerApi + "/registration";
  transactionsApi = this.customerApi + "/transactions"

  constructor(private http: HttpClient) { }

  setLoading(loading:boolean):any {
    this.loading = loading;
  }
  getLoading():boolean {
    return this.loading;
  }

  setMessage(message:string, mesageType:string) {
    this.message = message;
    if (mesageType == "SUCCESS") {
      this.messageType = "alert-success";
    } else if (mesageType == "FAILURE") {
        this.messageType = "alert-danger";
    }
  }
  getMessage():string {
    return this.message;
  }
  getMessageType():string {
    return this.messageType;
  }
  clearMessage() {
    this.message = "";
    this.messageType = "";
  }

  login(customer:any):any {
    //const headers= new HttpHeaders().set('Authorization', 'Basic ' + btoa(customer.username + ':' + customer.password));
    const options = {
      observe: 'response' as const,
      responseType: 'json' as const,
      'headers': new HttpHeaders({
        'Authorization': 'Basic ' + btoa(customer.username + ':' + customer.password)
      })
    };
    return this.http.get<any>(this.customerApi, options);
  }

  regiser(customer:any):any {
    return null;
  }

  getAccountDetails():any {
    return null;
  }

  updateUserPassword(customer:any):any {
    return null;
  }

  deleteAccount():any {
    return null;
  }

  performTransaction(transaction:any):any {
    return null;
  }

  getTransactions(page:any):any {
    return null;
  }
}
