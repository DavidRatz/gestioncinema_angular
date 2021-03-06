import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserReservation } from 'src/app/models/user-eservation.model';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-get-one-user',
  templateUrl: './get-one-user.component.html',
  styleUrls: ['./get-one-user.component.scss']
})
export class GetOneUserComponent implements OnInit {

  username:string;
  user !: User;
  userReservation !: UserReservation;



  constructor(route : ActivatedRoute, private userService : UsersService, private router : Router) { 
    const param_id = route.snapshot.paramMap.get("username")
    this.username = param_id? param_id : "";
  

    if(param_id ){
      userService.getUser(this.username).subscribe({
        next : (user)=>{this.user = user, console.log(user)},
        error: (err) => {
          router.navigateByUrl("")}
      });

      userService.getReservationByUser(this.username).subscribe({
        next : (userReservation)=>{this.userReservation = userReservation, console.log(userReservation)},
        error: (err) => {
          router.navigateByUrl("")}
      });
    }
  }

  ngOnInit(): void {
  }

}
