import { Component, OnInit } from '@angular/core';
import {GithubService} from '..//github.service'
@Component({
  selector: 'app-menuoftheday',
  templateUrl: './menuoftheday.component.html',
  styleUrls: ['./menuoftheday.component.css']
})
export class MenuofthedayComponent implements OnInit {
  public searchresult;
  constructor(private service :GithubService) { }

  ngOnInit() {
  }
  public getMenuDetails()
  {

     this.service.getMenuDetails().
     subscribe(res=>{
       console.log(res)
        this.searchresult=res
     })
  }

}
