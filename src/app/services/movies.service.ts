import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  //private readonly BASE_URL = "http://localhost:3000/movies";
  //private readonly BASE_URL = "http://localhost:8080/movie";
  private readonly BASE_URL = "http://10.27.1.15:8080/movie";

  constructor(private client:HttpClient) { }

  getMovies(){
    return this.client.get<Movie[]>(this.BASE_URL);
  }

  getMovie(id : number){
    return this.client.get<Movie>(this.BASE_URL + "/"+id)
  }

  onMovieSent(movie: Movie){
    return this.client.post<Movie>(this.BASE_URL, movie)
  }

  onMovieDelete(movie : Movie){
    
    return this.client.delete<Movie>(this.BASE_URL+"/"+movie.id)

  }

  onMovieUpdate(movie : Movie, id : number){
    
    return this.client.patch<Movie>(this.BASE_URL+"/"+id, movie)

  }
}
