import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpclint:HttpClient) {
    
  }


  public getUserDetails()
  {
   return this.httpclint.get('https://api.github.com/search/users?q=%22ab%22')


  }
  public getMenuDetails()
  {
    
    return this.httpclint.get("http://192.168.1.102:5000/getMenuDetails/")

  }
}
