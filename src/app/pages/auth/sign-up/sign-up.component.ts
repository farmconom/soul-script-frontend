import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  signUpForm: FormGroup;
  passwordHidden = true;
  confirmPasswordHidden = true;

  constructor(
    private fb: FormBuilder,
    public global: GlobalService
  ) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  togglePasswordVisibility(isConfirmBtn?: boolean) {
    if (isConfirmBtn) {
      this.confirmPasswordHidden = !this.confirmPasswordHidden;
    } else {
      this.passwordHidden = !this.passwordHidden;
    }
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      // Perform sign-in logic
    }
  }
}
