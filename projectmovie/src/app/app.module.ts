import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddmoviesComponent } from './components/addmovies/addmovies.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { ShowlistComponent } from './components/showlist/showlist.component';
import { AddshowComponent } from './components/addshow/addshow.component';
import { ShowdetailsComponent } from './components/showdetails/showdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent,
    UserdetailsComponent,
    UpdateuserComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    MoviesComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    AddmoviesComponent,
    MovielistComponent,
    MoviedetailsComponent,
    ShowlistComponent,
    AddshowComponent,
    ShowdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
