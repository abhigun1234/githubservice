import { Component } from '@angular/core';
import {GreetingService} from './greeting.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GreetingService]
})
export class AppComponent { 
  title = 'app';
   public id=''
   public content=''
  constructor(private greet:GreetingService)
  {}
  public greetings()
  {
     this.greet.greetings().subscribe(res=>{
    
      alert(res);
      console.log(res);
      this.id = res.id;
      this.content = res.content;
     })

  }
}
