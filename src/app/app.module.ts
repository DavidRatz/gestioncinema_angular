import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { FilmsComponent } from './components/user/films/films.component';
import { CinemasComponent } from './components/user/cinemas/cinemas.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { GetOneMovieComponent } from './components/user/films/get-one-movie/get-one-movie.component';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { FilmFormComponent } from './components/admin/movies/film-form/film-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { MoviesComponent } from './components/admin/movies/movies.component';
import { GetOneMovieAdminComponent } from './components/admin/movies/get-one-movie-admin/get-one-movie-admin.component';
import { CinemaAdminComponent } from './components/admin/cinema-admin/cinema-admin.component';
import { FormCinemaAdminComponent } from './components/admin/cinema-admin/form-cinema-admin/form-cinema-admin.component';
import { GetOneCinemaAdminComponent } from './components/admin/cinema-admin/get-one-cinema-admin/get-one-cinema-admin.component';
import { SessionComponent } from './components/admin/session/session.component';
import { SessionFormComponent } from './components/admin/session/session-form/session-form.component';
import { SessionUserComponent } from './components/user/session-user/session-user.component';
import { SessionFormUserComponent } from './components/user/session-user/session-form-user/session-form-user.component';
import { GetOneUserComponent } from './components/user/get-one-user/get-one-user.component';
registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    FilmsComponent,
    CinemasComponent,
    ConnexionComponent,
    GetOneMovieComponent,
    FilmFormComponent,
    AdminComponent,
    MoviesComponent,
    GetOneMovieAdminComponent,
    CinemaAdminComponent,
    FormCinemaAdminComponent,
    GetOneCinemaAdminComponent,
    SessionComponent,
    SessionFormComponent,
    SessionUserComponent,
    SessionFormUserComponent,
    GetOneUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
