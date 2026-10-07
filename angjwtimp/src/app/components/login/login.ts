import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse, Loginservice } from '../authservice/loginservice';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  password = '';
  error = '';

  constructor(private auth: Loginservice, private router: Router) {}

  login() {
    this.error = '';

    this.auth.login(this.email, this.password).subscribe({
      next: (res: LoginResponse) => {
        const token = res.access_token ?? res.token ?? null;

        if (!token) {
          this.error = 'Login succeeded but no auth token was returned.';
          return;
        }

        this.auth.saveToken(token);

        // Navigate after login
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.error = 'Invalid credentials';
      }
    });
  }

}
