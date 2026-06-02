import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Simulacro2Service {

constructor(private http : HttpClient){

}

getVideos(nombre:string):Observable<any>{
  let httpOptions = {
    headers : new HttpHeaders({
      'x-rapidapi-key': '8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
      'x-rapidapi-host': 'youtube138.p.rapidapi.com',
      'Content-Type' : 'application/json'
    }),
    params: new HttpParams()
    .set('q',nombre)
  }

    return this.http.get("https://youtube138.p.rapidapi.com/search/",httpOptions)
}


}
