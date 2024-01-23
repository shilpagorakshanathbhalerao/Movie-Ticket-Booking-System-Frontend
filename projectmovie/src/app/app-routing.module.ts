import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddmoviesComponent } from './components/addmovies/addmovies.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { AddshowComponent } from './components/addshow/addshow.component';
import { ShowlistComponent } from './components/showlist/showlist.component';
import { ShowdetailsComponent } from './components/showdetails/showdetails.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'list',
    component:UserListComponent
  },
  {
    path:'userdetails/:userId',
    component:UserdetailsComponent
  },
  {
    path:'updateuser/:userId',
    component:UpdateuserComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'addmovies',
    component:AddmoviesComponent
  },
  {
    path:'movielist',
    component:MovielistComponent
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
    path:'showlist',
    component:ShowlistComponent
  },
  {
    path:'showDetails/:showId',
    component:ShowdetailsComponent
  },
  {
    path:'add',
    component:RegisterComponent
  }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
