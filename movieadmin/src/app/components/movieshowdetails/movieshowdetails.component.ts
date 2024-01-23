import { Component } from '@angular/core';
import { MovieserviceService } from '../../services/movieservice.service';
import { Router } from '@angular/router';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movieshowdetails',
  templateUrl: './movieshowdetails.component.html',
  styleUrl: './movieshowdetails.component.css'
})
export class MovieshowdetailsComponent {
  constructor(private service: MovieserviceService,
    private router: Router) {
      
    }
    movie:Movie = new Movie();
    visit=false;
  movieDetails(id:string)
  {

    return this.service.getOneMovie(Number(id)).subscribe(
      (data: Movie)=>{
        this.movie = data;
        console.log(data);
        console.log(this.movie);
        this.visit=true;
      })

  }

  addShow(){
    this.router.navigate(['addshow']);
  }

  addMovie()
  {
    this.router.navigate(['addmovies']);
  }
}
