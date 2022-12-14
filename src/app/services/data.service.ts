import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, take} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = `${'https://restcountries.com/v3.1'}`;
  constructor(private http: HttpClient) { }

  getDataApi(): Observable<any> {    
    return this.http.get<any>(this.url + '/all').pipe(take(5),map(response => {
      return response.map((e: any) => {
        return {
          population: e.population,
          name: e.name.official,
          region: e.region,
          subregion: e.subregion,
          capital: e.capital,
          area: e.area,
          flags: e.flags
        }
      })
    }));
  }

  getByRegion(region: string): Observable<any> {
    return this.http.get<any>(this.url + '/region/' + region).pipe(map(response => {
      return response.map((e: any) => {
        return {
          population: e.population,
          name: e.name.official,
          region: e.region,
          subregion: e.subregion,
          capital: e.capital,
          area: e.area,
          flags: e.flags
        }
      })
    }));
  }
}
