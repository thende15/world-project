import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  url = "https://restcountries.com/v3.1/all"
  
  
  getData(): Observable<any> {
    this.url = "https://restcountries.com/v3.1/all"
    return this.http.get(this.url)
  }

  getCountryCode(field: any) {
    this.url = "https://restcountries.com/v3.1/alpha?codes=" + field 
    console.log(this.url, "this is in the service")
    return this.http.get(this.url)
  }

  getCountryByName(field: string) {
    this.url = "https://restcountries.com/v3.1/name/" + field + "?fullText=true"
    return this.http.get(this.url)
  }
  constructor(private http: HttpClient) { }
}
