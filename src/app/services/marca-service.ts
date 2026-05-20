import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {

  constructor(private http:HttpClient){
  }

  getMarcas():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

        'x-rapidapi-key': '8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
        'x-rapidapi-host': 'car-specs.p.rapidapi.com',
        'Content-Type' : 'application/json'

      })
    }
    return this.http.get("https://car-specs.p.rapidapi.com/v2/cars/makes",httpOptions)
  }

  getModelos(marcaId:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
        'x-rapidapi-host': 'car-specs.p.rapidapi.com',
        'Content-Type' : 'application/json'
      })
    }
    return this.http.get("https://car-specs.p.rapidapi.com/v2/cars/makes/"+marcaId+"/models",httpOptions)
  }
}
