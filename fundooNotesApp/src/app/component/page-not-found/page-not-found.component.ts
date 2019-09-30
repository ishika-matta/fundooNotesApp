import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  username:string=" ";
  response:any;

  constructor(private http:HttpClient) { 

  }

  ngOnInit() {
  }
  search(){
    this.http.get('https://api.github.com/users/'+ this.username)
    .subscribe((response)=>{
      this.response=response;
      console.log(this.response);
    }
    )
  }

}
