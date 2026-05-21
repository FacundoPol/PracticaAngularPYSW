import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversorService {
  constructor(private http:HttpClient){}


  getListaMonedas():Observable<any>{
    let httpOptions ={
      headers: new HttpHeaders({
        'apikey': 'DDTLtwxORzn7vVogGoM4msBp2FyXJl5w'
      })
    }

    return this.http.get("https://api.apilayer.com/currency_data/list",httpOptions)
  }

  getConversion(to:string,from:string,amount:string):Observable<any>{
    let httpOptions={
      headers: new HttpHeaders({
        'apikey': 'DDTLtwxORzn7vVogGoM4msBp2FyXJl5w'
      }),
      params: new HttpParams()
      .set('to',to)
      .set('from',from)
      .set('amount',amount)
    }

    return this.http.get("https://api.apilayer.com/currency_data/convert",httpOptions)
  }


}
