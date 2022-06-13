import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators as V } from '@angular/forms';
import { CINEMA_INSERT_FORM } from 'src/app/forms/cinema.form';
import { Address } from 'src/app/models/address.model';
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
  @Input("modify")
  modify!: boolean;

  @Output('cinema-sent')
  cinemaSent= new EventEmitter<Cinema>()

  constructor(builder: FormBuilder, private cinemaService : CinemasService ) {
    this.cinemaForm = builder.group({
      name: ['', [V.required, V.minLength(2)]],
      dateCreation: [''],
      phoneNumber: [""],
      address: builder.group({
        street: ['', [V.required, V.minLength(2)]],
        number: ['', [V.required, V.minLength(2)]],
        postCode: ['', [V.required, V.minLength(2)]],
        city: ['', [V.required, V.minLength(2)]],
        country: ['', [V.required, V.minLength(2)]]
      })
    })
    
  }
  ngOnChanges(): void {
    if (this.cinema){
      this.cinemaForm.patchValue ({
        name : this.cinema?.name,
        dateCreation : this.cinema?.dateCreation,
        phoneNumber : this.cinema?.phoneNumber,
        //active : this.cinema?.active,
        address : {
          street: this.cinema?.address!.street,
          number: this.cinema?.address!.number,
          postCode: this.cinema?.address!.postCode,
          city: this.cinema?.address!.city,
          country: this.cinema?.address!.country
        }
        
    })
    }
  }


  

  ngOnInit(): void {
    console.log(this.cinema)
  }
  
  onSubmit(){
    console.log(this.cinemaForm.value);
    if( this.cinemaForm.valid ){
      this.cinemaSent.emit(this.cinemaForm.value);
    }
  }
    
}
