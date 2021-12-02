import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

/** Password match with VerifyPassword */
export const passwordsMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const verifyPassword = control.get('verifyPassword');
  
    return password && verifyPassword && password.value != verifyPassword.value ? { passwordsDontMatch: true } : null;
  };