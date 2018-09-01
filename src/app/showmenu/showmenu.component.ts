import { Component, OnInit } from '@angular/core';
import {RestroService} from '..//restro.service'
@Component({
  selector: 'app-showmenu',
  templateUrl: './showmenu.component.html',
  styleUrls: ['./showmenu.component.css'],
  providers:[RestroService]
})
export class ShowmenuComponent implements OnInit {
 public searchresult;
  constructor(private service:RestroService) { }

  ngOnInit() {
  }
  public getMenuDetials()
  {

    this.service.getMenuService().subscribe(res=>{

      console.log(res)
      this.searchresult=res
    })
  }

}
