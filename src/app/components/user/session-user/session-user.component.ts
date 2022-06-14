import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/models/session.model';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session-user',
  templateUrl: './session-user.component.html',
  styleUrls: ['./session-user.component.scss']
})
export class SessionUserComponent implements OnInit {

  listSession !: Session[];
  research !:any;
  constructor(private sessionService :SessionService, private router: Router) {
    this.getSession();
   }

  ngOnInit(): void {
  }


  getSession(){
    this.sessionService.getSessions().subscribe({
      next :session =>this.listSession = session,
      error : err => alert("echec"),
      complete: () => console.log("complete")
    })
  }

  onSessionDetails(session : Session){
    this.router.navigate(["admin/session/", session.id])
  }

  /* onSessionSearch(session: any){
    console.log(session)
    console.log("coucou ze z")
    this.research = this.sessionService.onSessionSeach(session)
      .subscribe(() => this.getSession())
  
  } */

  onResearchSent(session: Session){
    console.log(session)
    console.log("coucou ze z")
    this.research = this.sessionService.onSessionSeach(session)
      .subscribe(() => this.getSession())
  }

}
