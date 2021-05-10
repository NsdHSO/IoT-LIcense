import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuthInfo, AuthToken } from '../../interfaces/.interfaces';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenService {
  //Authentication and Authorization
  private url = environment.path +"/auth"
  private TOKEN_KEY = 'token';
  constructor(private http: HttpClient) {}

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthentication() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logOut() {
    return localStorage.removeItem(this.TOKEN_KEY);
  }

  registerUser(registerData: IAuthInfo) {
    this.http
      .post<AuthToken>(`${this.url}/register`, registerData)
      .subscribe((res) => {
        this.saveToken(res.token);
      });
  }

  loginUser(registerData: IAuthInfo) {
    this.http
      .post<AuthToken>(`${this.url}/login`, registerData)
      .subscribe((res) => {
        this.saveToken(res.token);
      });
  }

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
}
