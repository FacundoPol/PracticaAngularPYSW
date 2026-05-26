import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QrService {

  constructor(private http :  HttpClient){

  }

  getQr(urlqr : string){
    let httpOptions = {
      headers : new HttpHeaders({
        'x-rapidapi-key':'8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
        'x-rapidapi-host' : 'qr-code-generator20.p.rapidapi.com',
        'Content-Type' : 'application/json'
      }),
      params : new HttpParams()
      .set('data',urlqr)
      .set('size', 250),

      responseType: 'text' as 'json'
    }
    

    return this.http.get("https://qr-code-generator20.p.rapidapi.com/generatebasicbase64",httpOptions)
  }



}
