import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HEllo world';

  user:User;
  constructor(){
   this.user=new User();
    this.user.name='Rounak';
   this.user.designation="ASE";
    this.user.address='Patuli';
    this.user.phone=['7000','3000'];
  }

}
