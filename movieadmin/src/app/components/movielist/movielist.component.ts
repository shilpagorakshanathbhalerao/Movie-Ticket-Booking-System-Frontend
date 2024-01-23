import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../../model/movie';
import { MovieserviceService } from '../../services/movieservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent 
{
  public movie: Observable<Movie[]> =of([]);
  
  constructor(private service: MovieserviceService,private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.movie = this.service.getAllMovie();
  }

  movieDetails(id: number){
    this.router.navigate(['moviedetails', id]);
  }
  updateDetails(id:number)
    {
      this.router.navigate(['mupdate', id]);
    }

  deleteMovie(id:number)
    {
      return this.service.deleteMovie(id).subscribe((data)=>{
        console.log(data);
        this.getAll();
      })

    }



}
