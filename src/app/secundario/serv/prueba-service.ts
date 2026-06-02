import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PruebaService {

constructor(private http:HttpClient){
}

//comentar ctrl + k + c 
//descomentar ctrl + k + u


  // GET SIN PARAMETROS

  // get():Observable<any>{
  //   let httpOptions = {
  //     headers: new HttpHeaders({
  //       'x-rapidapi-key': '8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
  //       'x-rapidapi-host': '',
  //       'Content-Type' : 'application/json'
  //     })
  //   }

  //   return this.http.get("",httpOptions)
  // }


//GET CON PARAMETROS

  // get(parametro:string):Observable<any>{
  //     let httpOptions = {
  //       headers: new HttpHeaders({
  //         'x-rapidapi-key': '8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
  //         'x-rapidapi-host': '',
  //         'Content-Type' : 'application/json'
  //       }),
  //       params: new HttpParams()
  //       .set( '',parametro)
  //     }

  //     return this.http.get("",httpOptions)
  //   }


// GET CON PARAMETRO PATH

    // get(parametro:string):Observable<any>{
    //   let httpOptions = {
    //     headers: new HttpHeaders({
    //       'x-rapidapi-key': '8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
    //       'x-rapidapi-host': '',
    //       'Content-Type' : 'application/json'
    //     })
    //   }
    //   return this.http.get(`${parametro}`,httpOptions)
    // }



// POST CON BODY

  // post(parametro:string):Observable<any>{
  //    let httpOptions = {
  //       headers: new HttpHeaders({
  //         'x-rapidapi-key': '8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
  //         'x-rapidapi-host': '',
  //         'Content-Type' : 'application/json'
  //       })
  //     }

  //     let body = {
  //       //como va el body
  //       "" : parametro
  //     }
  //     return this.http.post("",body,httpOptions)
  // }


  
}
