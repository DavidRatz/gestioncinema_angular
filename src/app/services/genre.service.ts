import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private readonly BASE_URL = "http://localhost:3000/genre";

  constructor(private client:HttpClient) { }

  getMovies(){
    return this.client.get<Genre[]>(this.BASE_URL);
  }

  getMovie(id : number){
    return this.client.get<Genre>(this.BASE_URL + "/"+id)
  }
}
