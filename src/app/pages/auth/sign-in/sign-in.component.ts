import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  signInForm: FormGroup;
  passwordHidden = true;

  constructor(
    private fb: FormBuilder,
    public global: GlobalService
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log(this.signInForm.value);
      // Perform sign-in logic
    }
  }
}
