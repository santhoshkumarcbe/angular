import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  

  setToken(token: string): void {
    localStorage.setItem('token', token);
    console.log(token);

  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  

  loginUrl = 'http://localhost:8080/api/auth/login';

  authenticate(body: any): Observable<any> {
    const response = this.http.post<any>(this.loginUrl, body);
    console.log(response);
  
    return response;
  }

  registerUrl = 'http://localhost:8080/api/auth/register';
  register(body: any): Observable<any> {
    const response = this.http.post<any>(this.registerUrl, body);
    console.log(response);
    return response;
  }


}
