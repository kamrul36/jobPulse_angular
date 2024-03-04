import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = 'http://127.0.0.1:8000/api/v1/';

  constructor(
    private http: HttpClient
  ) { }


  getData(url: string): Observable<any> {
    return this.http.get(url);

  }

}
