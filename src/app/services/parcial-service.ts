import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParcialService {

  constructor(private http : HttpClient){

  }

  getRecetaid(comida:string):Observable<any>{
    let httpOptions = {
      headers : new HttpHeaders({
        'x-rapidapi-key': '8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
        'x-rapidapi-host': 'low-carb-recipes.p.rapidapi.com',
        'Content-Type' : 'application/json'
      }),
      params: new HttpParams()
      .set('name',comida)
    }

    return this.http.get("https://low-carb-recipes.p.rapidapi.com/search",httpOptions)
  }


  getTraduccion(receta:string):Observable<any>{
    let httpOptions = {
      headers : new HttpHeaders({
        'x-rapidapi-key': '8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
        'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
        'Content-Type' : 'application/json'
      })
    }

    let body = {
  "q": receta,
  "source": "en",
  "target": "es"
    }
    return this.http.post("https://deep-translate1.p.rapidapi.com/language/translate/v2",body,httpOptions)
  }

}
