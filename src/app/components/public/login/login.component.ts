import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BankingService } from 'src/app/services/banking.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]],
  });
  

  constructor(private fb: FormBuilder, private bs: BankingService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const user = {
      'username': this.username?.value,
      'password': this.password?.value
    };
    console.log(user);
    this.bs.setLoading(true);
    this.bs.login(user).subscribe(
      (data: HttpResponse<any>) => { 
        console.log("success");
        console.log(data);
        this.bs.setMessage("Login Success", "SUCCESS");
      },
      (data: HttpErrorResponse) => { 
        console.log("error");
        console.log(data)
        this.bs.setMessage("Invalid Credentials", "FAILURE");
        this.bs.setLoading(false);
      },
      () => {
        console.log("Login request completed");
        this.bs.setLoading(false);
      }
    );
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
}
