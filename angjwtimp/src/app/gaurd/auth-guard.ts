import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Loginservice } from '../components/authservice/loginservice';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: Loginservice, private router: Router) {}

  canActivate(): boolean {

    const token = this.auth.getToken();

    if (token) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
