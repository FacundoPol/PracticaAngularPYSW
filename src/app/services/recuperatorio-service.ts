import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecuperatorioService {

  constructor(private http: HttpClient){
  }

  get(code:string,anio:string): Observable<any>{
    let httpOptions = {
      headers : new HttpHeaders({
        'x-rapidapi-key':'8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
        'x-rapidapi-host' : 'public-holidays7.p.rapidapi.com',
        'Content-Type' : 'application/json'
      })
    }
    return this.http.get(`https://public-holidays7.p.rapidapi.com/${anio}/${code}`,httpOptions);
  }

  get2(code:string): Observable<any>{
    let httpOptions = {
      headers : new HttpHeaders({
        'x-rapidapi-key':'8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
        'x-rapidapi-host' : 'wft-geo-db.p.rapidapi.com',
        'Content-Type' : 'application/json'
      })
    }
    return this.http.get(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${code}`,httpOptions);
  }

  get3(): Observable<any>{
    let httpOptions = {
      headers : new HttpHeaders({
        'x-rapidapi-key':'8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
        'x-rapidapi-host' : 'public-holidays7.p.rapidapi.com',
        'Content-Type' : 'application/json'
      })
    }
    return this.http.get("https://public-holidays7.p.rapidapi.com/codes",httpOptions);
  }

  // post(texto:string): Observable<any>{
  //   let httpOptions = {
  //     headers : new HttpHeaders({
  //       'x-rapidapi-key':'8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
  //       'x-rapidapi-host' : '',
  //       'Content-Type' : 'application/json'
  //     })
  //   }

  //   let body = {
  //     "" : texto
  //   }

  //   return this.http.post("",body,httpOptions);
  // }

}
