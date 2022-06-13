import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/models/session.model';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  listSession !: Session[];

  constructor(private sessionService :SessionService, private router: Router) { }

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

  onSessionSent(session: Session){
    
    this.sessionService.onSessionSent(session)
      .subscribe(() => this.getSession())
  }


  onSessionUpdate(session : Session){
    this.router.navigate(["admin/session/", session.id])
  }

  onSessionDelete(session : Session){
    this.sessionService.onSessionDelete(session)
      .subscribe(() => this.getSession())
  }
}
