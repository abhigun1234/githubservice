import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor(private http :HttpClient) { }


  public greetings()
  {


   return this.http.get("http://rest-service.guides.spring.io/greeting")
  }
}
