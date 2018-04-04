import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// TODO: Deprecated, use HttpClient from '@angular/common/http'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  currentUser: any;

  constructor(private _http: Http) {
    let token = localStorage.getItem('token');
    if (token) {
      // TODO: Refactor, make jwt hepler a field, do not recreate the instance
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  // TODO: Add model classes, use typings!!!
  login(credentials) {
    // TODO: Rename inputs on component.html: UserName => email, Password => passwrod
    // or model propery names to make namings consistent
    let url = '/api/auth/login';
    let body = JSON.stringify({ UserName: credentials.UserName, Password: credentials.Password });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    // TODO: Would be nicer if urls was /api/login
    return this._http.post(url, body, options)
      .map(res => res.json())
      .map(res => {
        if (res && res.auth_token) {
          localStorage.setItem('token', res.auth_token);

          // TODO: Refactor, make jwt hepler a field, do not recreate the instance
          let jwt = new JwtHelper();
          this.currentUser = jwt.decodeToken(localStorage.getItem('token'));

          return true;
        }

        return false;
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  // TODO: Investigate, no sure if this is considered a good practice to call isLoggedIn() method all the time, or only once when componenet loads
  isLoggedIn() {
    // TODO: Get rid of "probably"
    // This method automatically extracts and decodes the token from local storage ... probably ...

    // TODO: Refactor, make jwt hepler a field, do not recreate the instance
    let jwtHelper = new JwtHelper();
    let token = localStorage.getItem('token');

    if(!token)
      return false;

    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);

    console.log("Expiration", expirationDate);
    console.log("isExpired", isExpired);

    //return tokenNotExpired('token');
    return !isExpired;
  }

}