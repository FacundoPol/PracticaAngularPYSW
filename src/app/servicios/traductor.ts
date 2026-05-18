import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observeOn } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Traductor {


  constructor(private http: HttpClient){}


  obtenerLenguaje():Observable<any>{

    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
        'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
        'Content-Type' : 'application/json'
      })
    }

    return this.http.get("https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages",httpOptions)
  }

  enviarLenguaje(from:string,to:string,text:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
        'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
        'Content-Type' : 'application/json'
      })
    }

    let body = {
      "from": from,
      "to": to,
      "text": text
    }

    return this.http.post("https://google-translate113.p.rapidapi.com/api/v1/translator/text",body,httpOptions)
  }
}
