import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { Jwt } from '../models/jwt.models';
import { User } from '../models/user.model';
import { UserConnection } from '../models/userConnection.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //private readonly BASE_URL = "http://localhost:3000/users";
  private readonly BASE_URL = "http://localhost:8080/user";
  private readonly TEST_URL = "http:/localhost:8080";

  public refreshSubject: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public userObs: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);
  obsUserIsConnected: any;

  JWT!: Jwt | null;

  private connect = new Subject<null>();
  private username = new Subject<null>();


  user!: User;

  

  constructor(private client: HttpClient) { 
  }



  

  connection(formConnect: UserConnection): User{
    this.client.post<Jwt>(this.TEST_URL + "/login", formConnect).subscribe({
      next: (JWT) => {
            this.JWT = JWT;
            localStorage.setItem('connected',JSON.stringify(JWT));
           
          },
      error: err => alert("Username or password incorrect"),
    });
    
    return this.user;
  }

  disconnection(){
    localStorage.removeItem('connected'); 
    this.JWT = null;
  }

  get connected(){
    return localStorage.getItem('connected') != null
  }


  public get $connected(): Observable<null>{
    return this.connect;
}

get getUsername(){
  let getUser=localStorage.getItem('connected');
  if(getUser){
    return (<Jwt | null> JSON.parse(getUser))?.username;
  }
  return null;
}


public get $getUsername(): Observable<null>{
    return this.username;
  }
  


  register(user: User){
    return this.client.post<User>(this.BASE_URL, user)
  }

  getUsers(): Observable<User[]> {
    return this.client.get<User[]>(this.BASE_URL);
  }
}



