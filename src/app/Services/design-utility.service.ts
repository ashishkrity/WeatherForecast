// import { WeatherForecastMain } from '//assets/data/weather-data.ts';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { WeatherForecastMain } from './weather-data';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

 url: string = "http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&appid=9579f608f2b584d185f8c9acca09cc2f";

 
  constructor( private http: HttpClient) { }

  getDetails(): Observable<any>{
    
    return this.http.get<any>(this.url)
    .pipe(catchError(this.errorHandle));
  }

  errorHandle(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server error");
  }
}
