import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface LoginResponse {
  access_token?: string;
  token?: string;
  token_type?: string;
}

@Injectable({
  providedIn: 'root',
})
export class Loginservice {

   private API_URL = 'http://localhost:8000';

   constructor(private http: HttpClient) {}

   login(email: string, password: string) {

    const body = new URLSearchParams();
    body.set('username', email);   // IMPORTANT
    body.set('password', password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post<LoginResponse>(`${this.API_URL}/login`, body.toString(), { headers });
  }

  saveToken(token: string | null) {
    if (!token) {
      localStorage.removeItem('token');
      return;
    }

    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');

    if (!token || token === 'undefined' || token === 'null') {
      return null;
    }

    return token;
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

}
