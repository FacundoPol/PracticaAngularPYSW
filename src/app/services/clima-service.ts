import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
constructor(private http: HttpClient){}

  getClima(ciudad:string){
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
      params: new HttpParams()
      .set('city', ciudad)
      .set('lang' , "EN")
    }
    return this.http.get("https://open-weather13.p.rapidapi.com/city",httpOptions)
  }

}
