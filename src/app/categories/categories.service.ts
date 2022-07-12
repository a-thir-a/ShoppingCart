import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lists } from '../list';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private _http: HttpClient) { }
  
  getList(): Observable<Lists[]> {
    return this._http.get<Lists[]>(`https://www.mocky.io/v2/5dfccffc310000efc8d2c1ad`);
  }
}
