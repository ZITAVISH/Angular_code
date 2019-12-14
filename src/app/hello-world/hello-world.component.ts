import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message: string = "hii guys";
  sdate: string;
  stime: string;
  num1: number=98;
  Value:any;
  inpval: string;
  constructor(private http:HttpClient) { 
    this.sdate = new Date().toDateString();
    setInterval(()=>{
      this.stime=new Date().toLocaleTimeString();
    },1000);
    
  }
  onKeyUp(event:any)
  {
    this.inpval=event.target.value;
    //console.log(this.inpval);
  }
  getData(){
    console.log(this.inpval);
    this.http.get("http://localhost:3000/"+this.inpval).subscribe(res=>{
      this.Value=res;
      console.log(res);
    });
  }
  ngOnInit() {
  }

}
