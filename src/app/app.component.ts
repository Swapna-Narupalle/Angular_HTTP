import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'Angular_HTTP';

  jsonAPI = "https://jsonplaceholder.typicode.com/todos";
  data:any = []

  constructor(private httpClient:HttpClient){

  }

  //To transform the data
  //subscribe And initialise

  ngOnInit(){
     
    let endPoint = this.httpClient.get(this.jsonAPI);
           endPoint.subscribe((data:any)=>{
            console.log("Angular_HTTP is: ", data);
            this.data=data;
           })
  }


}
