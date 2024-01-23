import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { HomeComponent } from './components/home/home.component';
import { AddshowComponent } from './components/addshow/addshow.component';
import { ShowlistComponent } from './components/showlist/showlist.component';
import { ShowdetailsComponent } from './components/showdetails/showdetails.component';
import { MovieshowdetailsComponent } from './components/movieshowdetails/movieshowdetails.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { UpdatemovieComponent } from './components/updatemovie/updatemovie.component';
import { UpdateshowComponent } from './components/updateshow/updateshow.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddmovieComponent,
    MovielistComponent,
    MoviedetailsComponent,
    HomeComponent,
    AddshowComponent,
    ShowlistComponent,
    ShowdetailsComponent,
    MovieshowdetailsComponent,
    AdduserComponent,
    UserlistComponent,
    UpdateuserComponent,
    UserdetailsComponent,
    UpdatemovieComponent,
    UpdateshowComponent
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
