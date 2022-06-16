import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private readonly BASE_URL = "http://10.27.1.4:8080/session";

  constructor(private client:HttpClient) { }

  

  onPanierSent(reservation: Reservation){
    console.log(reservation)
    return this.client.post<Reservation>(this.BASE_URL+"/addcart", reservation);
  }
}
