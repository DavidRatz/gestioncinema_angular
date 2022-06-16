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
  //private readonly BASE_URL = "http://localhost:8080/user";
  //private readonly TEST_URL = "http:/localhost:8080";
  private readonly BASE_URL = "http://10.27.1.4:8080/user";
  private readonly TEST_URL = "http://10.27.1.4:8080";

  public refreshSubject: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public userObs: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);
  obsUserIsConnected: any;

  JWT!: Jwt | null;

  private connect = new Subject<null>();
  private username = new Subject<null>();
  private role = new Subject<null>();
  private token = new Subject<null>();


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

  
  
  get getRole(){
    let getUser=localStorage.getItem('connected');
    if(getUser){
      return (<Jwt | null> JSON.parse(getUser))?.role;
    }
    return null;
  }
  get getToken(): string | null {
    let getUser=localStorage.getItem('connected');
    if(getUser){
      return (<Jwt | null> JSON.parse(getUser))!.jwt;
    }
    return null;

  }
  public get $getRole(): Observable<null>{
    return this.role;
  }

  register(user: User){
    return this.client.post<User>(this.BASE_URL, user)
  }

  getUsers(): Observable<User[]> {
    return this.client.get<User[]>(this.BASE_URL);
  }

  getAuthHeader(): { [key:string]:string } {
    
    const token = this.getToken;
    return token ? { "Authorization": token } : {}
  
  }

  getUser(username : string){
    console.log(username)
    return this.client.get<User>(this.BASE_URL + "/name/"+username)
  }
}



