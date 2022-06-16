import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RESERVATION_INSERT_FORM } from 'src/app/forms/reservation.form';
import { Research } from 'src/app/models/research.model';
import { Reservation } from 'src/app/models/reservation.model';
import { Session } from 'src/app/models/session.model';
import { PanierService } from 'src/app/services/panier.service';
import { SessionService } from 'src/app/services/session.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-session-user',
  templateUrl: './session-user.component.html',
  styleUrls: ['./session-user.component.scss']
})
export class SessionUserComponent implements OnInit {

  listSession !: Session[];
  research !: Research;
  reservationForm : FormGroup;
  username ?: any;
  constructor(builder : FormBuilder, private sessionService :SessionService, private router: Router, private userService: UsersService, private panierService: PanierService) {
    this.getSession();
    this.reservationForm = builder.group(RESERVATION_INSERT_FORM);
    userService.$getUsername.subscribe(() => {this.getUsername});
   }

  ngOnInit(): void {
    this.getUsername();
  }


  getSession(){
    this.sessionService.getSessions().subscribe({
      next :session =>this.listSession = session,
      error : err => alert("echec"),
      complete: () => console.log("complete")
    })
  }
  getUsername(){

    this.username = this.userService.getUsername;
    return this.username;
  }
  onSubmit(){
    this.onPanierSent(this.reservationForm.value);
    console.log("test")
      
  }

  onPanierSent(reservation: Reservation){
    
    this.panierService.onPanierSent(reservation).subscribe({
      next: testRes => alert("panier réservé"),
      error : err => alert("echec"),
      complete: () => console.log("complete")
     });

    
  }

  /* onSessionSearch(session: any){
    console.log(session)
    console.log("coucou ze z")
    this.research = this.sessionService.onSessionSeach(session)
      .subscribe(() => this.getSession())
  
  } */

  onResearchSent(session: any){
  
    this.sessionService.onSessionSearch(session)
      .subscribe(({
        next :res =>{this.research = res, console.log(res)},
        error : err => alert("echec"),
        complete: () => console.log("complete")
      }))
    
  }

}
