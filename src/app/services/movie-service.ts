import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  constructor(private http:HttpClient){
  }

  getMovies():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders(
        {
          'x-rapidapi-key': '8d43d507c6msh958730bce9cef2ep12ffcfjsnfad659fdf95e',
          'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
          'Content-Type' : 'application/json'
        })
    }

    return this.http.get("https://imdb-top-100-movies.p.rapidapi.com/",httpOptions)
  }

}
