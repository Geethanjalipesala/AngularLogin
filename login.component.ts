import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginMessage: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Simulate a successful login for demonstration purposes
      // Replace this with your actual login logic (e.g., API calls)
      const username = this.loginForm.value.email;
      this.loginMessage = `Login successful for user: ${username}`;
    } else {
      this.loginMessage = 'Login failed. Please check your credentials.';
    }
  }
}
