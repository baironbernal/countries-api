import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getDataApi(): Observable<any[]> {
    const filter = `${'https://restcountries.com/v3.1/all'}`;
    return this.http.get<any[]>(filter);
  }
}
