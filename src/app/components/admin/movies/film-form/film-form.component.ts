import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { MOVIE_INSERT_FORM } from 'src/app/forms/movie.form';
import { Genre } from 'src/app/models/genre.model';
import { Movie } from 'src/app/models/movie.model';
import { GenreService } from 'src/app/services/genre.service';
import { MoviesService } from 'src/app/services/movies.service';



@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent implements OnInit, OnChanges {

  movieForm: FormGroup;
  listGenre !: Genre[];
  i: number = 0;
 
  

  @Input("movie")
  movie!: Movie;

  @Output('movie-sent')
  movieSent= new EventEmitter<Movie>()

  constructor(builder: FormBuilder, private service : GenreService, private movieService : MoviesService ) {
    this.getGenres();
    this.movieForm = builder.group(MOVIE_INSERT_FORM)
    
  }
  ngOnChanges(): void {
    if (this.movie){
      this.movieForm.patchValue ({
        title : this.movie?.title,
        description : this.movie?.description,
        releaseDate : this.movie?.releaseDate,
        genres : this.movie?.genres,
        
    })
    }
  }


  

  ngOnInit(): void {
    console.log(this.movie)
  }
  onCheckChange(event : any) {
    const formArray: FormArray = this.movieForm.get('genres') as FormArray;
  
    /* Selected */
    if(event.target.checked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl({"id" : event.target.id, "description" : event.target.value}));
    }
    /* unselected */
    else{
      // find the unselected element
      let i: number = 0;
      
     
      formArray.controls.forEach((ctrl) => {
        if(ctrl.value.description == event.target.value) {
          // Remove the unselected element from the arrayForm
          console.log('co')
          formArray.removeAt(i);
          return;
        }
  
        i++; 
      });
    }
    
  }

  onSubmit(){
    if( this.movieForm.valid )
    this.movieSent.emit(this.movieForm.value);
    console.log(this.movieForm.value);
    
  }
  getGenres(){
    this.service.getMovies().subscribe({
      next :genre =>this.listGenre = genre,
      error : err => alert("echec"),
      complete: () => console.log("complete")
    })
  }

  
  ifChecked(genre : string){
    
    if(this.movie){
        for(let movieGenre of this.movie.genres){
          //console.log(formgenre.description)
            if(genre == movieGenre.description){
              //console.log("coco")
              return true;
            }
          
        }  
      }
    return false;
  }
  

}
