import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cinema } from '../models/cinema.model';

@Injectable({
  providedIn: 'root'
})
export class CinemasService {
  //private readonly BASE_URL = "http://localhost:8080/theater";
  private readonly BASE_URL = "http://10.27.1.4:8080/theater";

  constructor(private client:HttpClient) { }

  getCinemas(){
    return this.client.get<Cinema[]>(this.BASE_URL);
  }

  getCinema(id: number){
    return this.client.get<Cinema>(this.BASE_URL+"/"+id);
  }

  onCinemaSent(cinema: Cinema){
    return this.client.post<Cinema>(this.BASE_URL, cinema)
  }

  onCinemaDelete(cinema : Cinema){
    
    return this.client.delete<Cinema>(this.BASE_URL+"/"+cinema.id)

  }

  onCinemaUpdate(cinema : Cinema, id : number){
    
    return this.client.put<Cinema>(this.BASE_URL+"/"+id, cinema)

  }

}
