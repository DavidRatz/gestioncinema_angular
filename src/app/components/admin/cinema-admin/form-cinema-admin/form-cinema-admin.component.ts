import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CINEMA_INSERT_FORM } from 'src/app/forms/cinema.form';
import { Cinema } from 'src/app/models/cinema.model';
import { CinemasService } from 'src/app/services/cinemas.service';

@Component({
  selector: 'app-form-cinema-admin',
  templateUrl: './form-cinema-admin.component.html',
  styleUrls: ['./form-cinema-admin.component.scss']
})
export class FormCinemaAdminComponent implements OnInit {

  cinemaForm: FormGroup;
 
   
  @Input("cinema")
  cinema!: Cinema;

  @Output('cinema-sent')
  cinemaSent= new EventEmitter<Cinema>()

  constructor(builder: FormBuilder, private cinemaService : CinemasService ) {
    this.cinemaForm = builder.group(CINEMA_INSERT_FORM)
    
  }
  ngOnChanges(): void {
    if (this.cinema){
      this.cinemaForm.patchValue ({
        name : this.cinema?.name,
        dateCreation : this.cinema?.dateCreation,
        phoneNumber : this.cinema?.phoneNumber,
        active : this.cinema?.active,
        
    })
    }
  }


  

  ngOnInit(): void {
    console.log(this.cinema)
  }
  
  onSubmit(){
    if( this.cinemaForm.valid )
    this.cinemaSent.emit(this.cinemaForm.value);
    console.log(this.cinemaForm.value);
  }
    
}
