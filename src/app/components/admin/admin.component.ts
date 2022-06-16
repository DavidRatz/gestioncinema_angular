import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UsersService) {
    userService.$connected.subscribe(() => {this.isConnected});
    userService.$getRole.subscribe(() => {this.getRole});
   }

  ngOnInit(): void {
  }

  isConnected(){
  
    return this.userService.connected;
  }
  getRole(){
  
    return this.userService.getRole;
  }

  isAdmin(){
    if (this.userService.getRole == "ADMIN"){
      return true;
    }
    return false;
  }

}
