import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../models/session.model';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  //private readonly BASE_URL = "http://localhost:8080/session";
  private readonly BASE_URL = "http://10.27.1.15:8080/session";

  constructor(private client:HttpClient) { }

  getSessions(){
    return this.client.get<Session[]>(this.BASE_URL);
  }

  getSession(id: number){
    return this.client.get<Session>(this.BASE_URL+"/"+id);
  }

  onSessionSent(session: Session){
    return this.client.post<Session>(this.BASE_URL, session)
  }

  onSessionDelete(session : Session){
    
    return this.client.delete<Session>(this.BASE_URL+"/"+session.id)

  }

  onSessionUpdate(session : Session, id : number){
    
    return this.client.put<Session>(this.BASE_URL+"/"+id, session)

  }
}
