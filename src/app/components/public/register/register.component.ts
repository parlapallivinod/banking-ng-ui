import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { passwordsMatchValidator } from '../../../validators/passwords-match.directive'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]],
    verifyPassword: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]],
  }, { validators: passwordsMatchValidator });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registrationForm.value);
  }

  get username() { return this.registrationForm.get('username'); }
  get password() { return this.registrationForm.get('password'); }
  get verifyPassword() { return this.registrationForm.get('verifyPassword'); }

}
