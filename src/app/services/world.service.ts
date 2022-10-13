import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  url = "https://restcountries.com/v3.1/all"

  getData(): Observable<any> {
    return this.http.get(this.url)
  }
  constructor(private http: HttpClient) { }
}
