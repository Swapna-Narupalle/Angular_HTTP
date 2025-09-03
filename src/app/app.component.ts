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
  data: any = [];

  tvValue = 1;


  myEndPoint = "http://localhost:3000/TVs";

  constructor(private httpClient: HttpClient) {

  }

  //To transform the data
  //subscribe And initialise

  ngOnInit() {

    let endPoint = this.httpClient.get(this.jsonAPI);
    endPoint.subscribe((data: any) => {
      console.log("Angular_HTTP is: ", data);
      this.data = data;
    })


    let myOtherEndPoint = this.httpClient.get(this.myEndPoint)
    myOtherEndPoint.subscribe((result) => {
      console.log("HTTP Server is: ", result);
    })
  }


  //1)Post:insert
  evtCreateNewTV() {
    let newTV = {
      "id"      : "4",
      "brand"   : "Galaxy",
      "location": "Mysore"
    };
    //Here we will pass new value to the End point
    //post means insert
    this.httpClient.post("http://localhost:3000/TVs", newTV).subscribe((result)=>{
      console.log("New TV results are inserted");
      console.log(result);
    })
  }

  
  //2)get:getbyID
  getTVSById(id:any){
     let TV = `http://localhost:3000/TVs/${id}`;
     this.httpClient.get(TV).subscribe((result)=>{
          console.log(result);
     })
  }



  //3)put:update
  updateTV(id:any){
   let TV = `http://localhost:3000/TVs/${id}`;

   let body = {
      "brand": "1+",
      "location": "KADAPA",
      "price":56000
   }

   //put means update
   this.httpClient.put(TV, body).subscribe((updates)=>{
    console.log(updates);
   })
  }


  //4)patch:updateMiniRecords
  patchTV(id:any){
  
    let TV = `http://localhost:3000/TVs/${id}`;

   let body = {
      "brand": "Apple"
   }

   //patch means update mini records
   this.httpClient.patch(TV, body).subscribe((updates)=>{
    console.log(updates);
   })
  }


  //5)Delete
  deleteTV(id:any){
    let TV = `http://localhost:3000/TVs/${id}`;

    this.httpClient.delete(TV).subscribe((notifications)=>{
      console.log(notifications);
    })
  }


}
