import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestroService {

  constructor(private http:HttpClient) { }
  getMenuService()
  {
   return this.http.get("http://192.168.1.10:5000/getMenuDetails/")

  }
}
