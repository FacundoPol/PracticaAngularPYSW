import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversorAudioService {

  constructor(private http : HttpClient){
  }

  postAudio(body:any):Observable<Blob>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '06b8cb8654msh800f67a5024e927p17b4afjsn8826196f2282',
        'x-rapidapi-host': 'open-ai-text-to-speech1.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
      responseType: 'blob' as 'blob'
    }

    return this.http.post("https://open-ai-text-to-speech1.p.rapidapi.com/",body,httpOptions)
  }
}
