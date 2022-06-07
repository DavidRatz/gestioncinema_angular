import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  listMovies !: Movie[];

  constructor(private service : MoviesService, private router : Router) { 
    this.getMovies();
  }

  ngOnInit( ): void {
  }

  getMovies(){
    this.service.getMovies().subscribe({
      next :movie =>this.listMovies = movie,
      error : err => alert("echec"),
      complete: () => console.log("complete")
    })
  }

  onMovieSent(movie: Movie){
    
    this.service.onMovieSent(movie)
      .subscribe(() => this.getMovies())
  }


  onMovieUpdate(movie : Movie){
    this.router.navigate(["movie/", movie.id])
  }

  onMovieDelete(movie : Movie){
    this.service.onMovieDelete(movie)
      .subscribe(() => this.getMovies())
  }

}
