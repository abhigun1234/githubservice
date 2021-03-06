import { Component, OnInit } from '@angular/core';
import {GithubService} from '..//github.service'
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
  providers:[GithubService]
})
export class UserdetailsComponent implements OnInit {
  public searchResult
  constructor(private github:GithubService) { }

  ngOnInit() {
  }
  public getUserDetails()
  {

   this.github.getUserDetails().subscribe(response=>
  {

    alert(response)
    console.log(response)
    this.searchResult=response;
  }
  )
    
   
  }

}
