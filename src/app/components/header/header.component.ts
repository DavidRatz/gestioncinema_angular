import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  

  
  
  
  constructor(private userService: UsersService) {
    userService.$connected.subscribe(() => {this.isConnected});
    userService.$getUsername.subscribe(() => {this.getUsername});
    
   
    
   }

  ngOnInit(): void {
  }
  isConnected(){
  
    return this.userService.connected;
  }

  getUsername(){
    return this.userService.getUsername;
  }

  disconnect():void{
    this.userService.disconnection();
  }
}
