import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Research } from '../models/research.model';
import { Session } from '../models/session.model';
import { UsersService } from './users.service';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  //private readonly BASE_URL = "http://localhost:8080/session";
  private readonly BASE_URL = "http://10.27.1.4:8080/session";

  constructor(private client:HttpClient, private _sessionService: UsersService) { }

  getSessions(){
    return this.client.get<Session[]>(this.BASE_URL);
  }

  getSession(id: number){
    return this.client.get<Session>(this.BASE_URL+"/"+id);
  }

  onSessionSent(session: Session){
    return this.client.post<Session>(this.BASE_URL, session, {
      headers: this._sessionService.getAuthHeader()
    });
  }

  onSessionDelete(session : Session){
    
    return this.client.delete<Session>(this.BASE_URL+"/"+session.id)

  }

  onSessionUpdate(session : Session, id : number){
    
    return this.client.put<Session>(this.BASE_URL+"/"+id, session)

  }


  onSessionSearch(session : Session){
    return this.client.post<Research >(this.BASE_URL+"/search/",session);
  }



}
