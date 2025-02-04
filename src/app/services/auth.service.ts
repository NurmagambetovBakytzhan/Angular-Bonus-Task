import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'http://localhost:8000/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, { email, password });
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.authUrl}/register`, { email, password });
  }

  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
