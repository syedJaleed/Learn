import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.loggedIn.asObservable();

  login(username: string, password: string): Observable<boolean> {
    // Simulate login validation — replace with real API later
    if (username === 'admin' && password === 'password') {
      this.loggedIn.next(true);
      return of(true);
    } else {
      return of(false);
    }
  }

  logout() {
    this.loggedIn.next(false);
  }
}
