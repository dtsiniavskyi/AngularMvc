import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class RegisterService {

  constructor(private _http: Http) {  }

  register(model){
    // TODO: Add Base Api Service and move all api urls to constatnts
    let url = '/api/registration';
    // TODO: Try to stringify argument
    // TODO: Add model classes, use typings!!!
    let body = JSON.stringify({ FirstName: model.FirstName, LastName: model.LastName, ConfirmPassword: model.ConfirmPassword, Password: model.Password, Email: model.Email });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(url, body, options)
      .map(res => res.json());
  }
}
