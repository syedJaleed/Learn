import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username = '';
  password = '';
  loginError = '';

  constructor(private authService:AuthServiceService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(success => {
      if (success) {
        this.router.navigate(['home']); // Navigate to home or dashboard
      } else {
        this.loginError = 'Invalid credentials';
      }
    });
  }

}
