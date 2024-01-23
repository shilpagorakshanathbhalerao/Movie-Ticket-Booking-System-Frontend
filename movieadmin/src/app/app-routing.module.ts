import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { HomeComponent } from './components/home/home.component';
import { AddshowComponent } from './components/addshow/addshow.component';
import { ShowlistComponent } from './components/showlist/showlist.component';
import { ShowdetailsComponent } from './components/showdetails/showdetails.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { MovieshowdetailsComponent } from './components/movieshowdetails/movieshowdetails.component';
import { UpdatemovieComponent } from './components/updatemovie/updatemovie.component';
import { UpdateshowComponent } from './components/updateshow/updateshow.component';

const routes: Routes = [
  {
    path:'list',
    component:UserlistComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'searchmovie',
    component:MovieshowdetailsComponent
  },
  {
    path:'addmovies',
    component:AddmovieComponent
  },
  {
    path:'movielist',
    component:MovielistComponent
  },
  {
    path:'update/:movieId',
    component:AddmovieComponent
  },
  {
    path:'moviedetails/:movieId',
    component:MoviedetailsComponent
  },
  {
    
    path:'addshow',
    component:AddshowComponent
  },
  {
    
    path:'adduser',
    component:AdduserComponent
  },
  {
    path:'showlist',
    component:ShowlistComponent
  },
  {
    path:'userlist',
    component:UserlistComponent
  },
  {
    path:'update/:showId',
    component:AddshowComponent
  },
  {
    path:'showDetails/:showId',
    component:ShowdetailsComponent
  },
  {
    path:'userdetails/:userId',
    component:UserdetailsComponent
  },
  {
    path:'addUser',
    component:AdduserComponent
  },
  {
    path:'mupdate/:movieId',
    component:UpdatemovieComponent
  },
  {
    path:'supdate/:showId',
    component:UpdateshowComponent
  },
  {
    path:'updateuser/:userId',
    component:UpdateuserComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
