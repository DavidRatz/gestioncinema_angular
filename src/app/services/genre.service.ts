import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private readonly BASE_URL = "http://localhost:8080/genre";

  constructor(private client:HttpClient) { }

  getGenres(){
    return this.client.get<Genre[]>(this.BASE_URL);
  }

  getGenre(id : number){
    return this.client.get<Genre>(this.BASE_URL + "/"+id)
  }
}
