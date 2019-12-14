import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input('user')user:User;
  isCollapsed:boolean=true;
  txtinival:string="Initial value!";
  toggleview(){
    this.isCollapsed=!this.isCollapsed;
  }
  constructor() { }

  ngOnInit() {
  }

}
