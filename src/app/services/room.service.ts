import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private readonly BASE_URL = "http://localhost:8080/room";
  //private readonly BASE_URL = "http://10.27.1.15:8080/room";

  constructor(private client:HttpClient) { }

  getRooms(){
    return this.client.get<Room[]>(this.BASE_URL);
  }

  getRoom(id: number){
    return this.client.get<Room>(this.BASE_URL+"/"+id);
  }

  getRoomByTheater(idTheater : number){
    return this.client.get<Room[]>(this.BASE_URL+"/theater/"+idTheater);
  }

  onRoomSent(room: Room){
    return this.client.post<Room>(this.BASE_URL, room)
  }

  onRoomDelete(room : Room){
    
    return this.client.delete<Room>(this.BASE_URL+"/"+room.id)

  }

  onRoomUpdate(room : Room, id : number){
    
    return this.client.put<Room>(this.BASE_URL+"/"+id, room)

  }
}
