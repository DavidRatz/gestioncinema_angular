import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SESSION_INSERT_FORM } from 'src/app/forms/session.form';
import { Cinema } from 'src/app/models/cinema.model';
import { Movie } from 'src/app/models/movie.model';
import { Session } from 'src/app/models/session.model';
import { CinemasService } from 'src/app/services/cinemas.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss']
})
export class SessionFormComponent implements OnInit {

  sessionForm:FormGroup;
  listCinema !: Cinema[]
  listMovie !: Movie[]

  @Output('session-sent')
  sessionSent= new EventEmitter<Session>()

  constructor(builder: FormBuilder, private theaterService: CinemasService, private movieService: MoviesService) { 
    this.getCinemas();
    this.getMovies();
    
    this.sessionForm = builder.group(SESSION_INSERT_FORM)

  
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if( this.sessionForm.valid )
    this.sessionSent.emit(this.sessionForm.value);
    console.log(this.sessionForm.value);
    
  }

  getCinemas(){
    this.theaterService.getCinemas().subscribe({
      next :cinema =>this.listCinema = cinema,
      error : err => alert("echec"),
      complete: () => console.log("complete")
    })
  }

  getMovies(){
    this.movieService.getMovies().subscribe({
      next :movie =>{this.listMovie = movie,console.log(movie)},
      error : err => alert("echec"),
      complete: () => console.log("complete")
    })
  }

  



}
