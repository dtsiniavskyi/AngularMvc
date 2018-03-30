import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ValuesService { 

  constructor(private _http:HttpClient) { }

  getValues():Observable<string[]> {
    return this._http.get<string[]>('/api/values');
  }
}