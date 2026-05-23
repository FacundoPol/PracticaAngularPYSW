import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PracticaParcialService {

constructor(private http:HttpClient){
}

  getCarreras(anio:string){
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
        'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com',
        'Content-Type' : 'application/json'
      })
    }

    return this.http.get(`https://f1-live-motorsport-data.p.rapidapi.com/races/${anio}`,httpOptions)
  }

  getSesiones(id_sesion:string){
    let httpOptions ={
      headers : new HttpHeaders({
        'x-rapidapi-key': '8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
        'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com',
        'Content-Type' : 'application/json'
      })
    }
    return this.http.get(`https://f1-live-motorsport-data.p.rapidapi.com/session/${id_sesion}`,httpOptions)
  }

  getConstructores(anio:string){
    let httpOptions= {
      headers: new HttpHeaders({
        'x-rapidapi-key': '8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
        'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com',
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(`https://f1-live-motorsport-data.p.rapidapi.com/constructors/standings/${anio}`,httpOptions)
  }
}