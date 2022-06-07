import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cinema } from 'src/app/models/cinema.model';
import { CinemasService } from 'src/app/services/cinemas.service';

@Component({
  selector: 'app-get-one-cinema-admin',
  templateUrl: './get-one-cinema-admin.component.html',
  styleUrls: ['./get-one-cinema-admin.component.scss']
})
export class GetOneCinemaAdminComponent implements OnInit {

  id:number;
  cinema !: Cinema;



  constructor(route : ActivatedRoute, private service : CinemasService, private router : Router) { 
    const param_id = route.snapshot.paramMap.get("id")
    this.id = param_id? parseInt(param_id) : -1 ;

    if(this.id && this.id > 0)
      service.getCinema(this.id).subscribe({
        next : (cinema)=>this.cinema = cinema,
        error: (err) => {
          router.navigateByUrl("/admin/cinemas")}
      });
  }

  ngOnInit(): void {
  }

  onCinemaUpdate(cinema : Cinema){
   
    this.service.onCinemaUpdate(cinema, this.id)
      .subscribe()
      
    this.router.navigateByUrl("admin/cinemas")
    
  }

}
