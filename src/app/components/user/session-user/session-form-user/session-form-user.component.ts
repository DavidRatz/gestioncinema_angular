
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SESSION_INSERT_FORM } from 'src/app/forms/session.form';
import { Cinema } from 'src/app/models/cinema.model';
import { Movie } from 'src/app/models/movie.model';
import { Room } from 'src/app/models/room.model';
import { Session } from 'src/app/models/session.model';
import { CinemasService } from 'src/app/services/cinemas.service';
import { MoviesService } from 'src/app/services/movies.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-session-form-user',
  templateUrl: './session-form-user.component.html',
  styleUrls: ['./session-form-user.component.scss']
})
export class SessionFormUserComponent implements OnInit {

  sessionForm:FormGroup;
  listCinema !: Cinema[]
  listMovie !: Movie[]
  listRoom !: Room[]
  listRoomByTheater !: Room[]

  @Output('research-sent')
  researchSent= new EventEmitter<Session>()

  constructor(builder: FormBuilder, private theaterService: CinemasService, private movieService: MoviesService, private roomService : RoomService) { 
    this.getCinemas();
    this.getMovies();
    this.getRooms();
    this.sessionForm = builder.group(SESSION_INSERT_FORM)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("coucou")
    if( this.sessionForm.valid ){

    console.log(this.sessionForm.value);
    this.researchSent.emit(this.sessionForm.value);
    }
    
  }
  getRooms(){
    this.roomService.getRooms().subscribe({
      next :room =>this.listRoom = room,
      error : err => alert("echec"),
      complete: () => console.log("complete")
    })
  }
  getRoomsByTheater(idTheater: number){
    this.roomService.getRoomByTheater(idTheater).subscribe({
      next :room =>this.listRoomByTheater = room,
      error : err => alert("echec"),
      complete: () => console.log("complete")
    })
  }

  onChange(refTheater?: any){
    console.log(refTheater.value);
      if(refTheater){
        
        this.getRoomsByTheater(refTheater.value);
      }
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
