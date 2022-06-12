import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/models/cinema.model';
import { CinemasService } from 'src/app/services/cinemas.service';

@Component({
  selector: 'app-cinema-admin',
  templateUrl: './cinema-admin.component.html',
  styleUrls: ['./cinema-admin.component.scss']
})
export class CinemaAdminComponent implements OnInit {

  listCinema !: Cinema[];

  constructor(private cinemaService : CinemasService, private router : Router) { 
    this.getCinemas();
  }

  ngOnInit(): void {
  }

  getCinemas(){
    this.cinemaService.getCinemas().subscribe({
      next :cinema =>this.listCinema = cinema,
      error : err => alert("echec"),
      complete: () => console.log("complete")
    })
  }
  onCinemaDetails(cinema : Cinema){
    this.router.navigate(["admin/cinema/", cinema.id])
  }

  onCinemaSent(movie: Cinema){
    // if(movie[0])
    //   this.cinemaService.onCinemaUpdate(movie[1],movie[0])
    //     .subscribe(() => this.getCinemas())
    // else
    //   this.cinemaService.onCinemaSent(movie[1])
    //     .subscribe(() => this.getCinemas())
    this.cinemaService.onCinemaSent(movie)
         .subscribe(() => this.getCinemas())
  }


  onCinemaUpdate(cinema : Cinema){
    this.router.navigate(["admin/cinema/", cinema.id])
  }

  onCinemaDelete(cinema : Cinema){
    this.cinemaService.onCinemaDelete(cinema)
      .subscribe(() => this.getCinemas())
  }

}
