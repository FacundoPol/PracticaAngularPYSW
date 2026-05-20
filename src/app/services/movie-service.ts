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
          // 'x-rapidapi-key': '06b8cb8654msh800f67a5024e927p17b4afjsn8826196f2282',
          // 'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
          // 'Content-Type' : 'application/json'
        })
    }

    return this.http.get("https://imdb-top-100-movies.p.rapidapi.com/",httpOptions)
  }

}
