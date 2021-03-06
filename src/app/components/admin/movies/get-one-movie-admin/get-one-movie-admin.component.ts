import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-get-one-movie-admin',
  templateUrl: './get-one-movie-admin.component.html',
  styleUrls: ['./get-one-movie-admin.component.scss']
})
export class GetOneMovieAdminComponent implements OnInit {

  id:number;
  movie !: Movie;



  constructor(route : ActivatedRoute, private service : MoviesService, private router : Router) { 
    const param_id = route.snapshot.paramMap.get("id")
    this.id = param_id? parseInt(param_id) : -1 ;

    if(this.id && this.id > 0)
      service.getMovie(this.id).subscribe({
        next : (movie)=>this.movie = movie,
        error: (err) => {
          router.navigateByUrl("/admin/movies")}
      });
  }

  ngOnInit(): void {
  }

  onMovieUpdate(movie : Movie){
   
    this.service.onMovieUpdate(movie, this.id)
      .subscribe()
      
    this.router.navigateByUrl("admin/movies")
    
  }

}
