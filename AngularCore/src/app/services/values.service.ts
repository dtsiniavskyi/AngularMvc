import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ValuesService {

  constructor(private _http: Http) { }

  getValues(): Observable<string[]> {

    //TODO: Refactor. TOOOOO much code
    //TODO: Refactor using AuthHttp from angular2-jwt
    let url = '/api/values';
    let token = localStorage.getItem('token');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);
    let options = new RequestOptions({ headers: headers });

    // TODO: Investigate using newer versions of AuthHttp for HttpClient in Angular 5
    return this._http.get(url, options).map(res => {
      let json = res.json();

      console.log("DATA RESPONSE", res);
      console.log("DATA RESPONSE JSON", json);

      return json;
    });
  }
}