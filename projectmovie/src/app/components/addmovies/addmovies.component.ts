import { Component } from '@angular/core';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';
import { MovieserviceService } from '../../services/movieservice.service';
import { Observable, map, of } from 'rxjs';
import { Show } from '../../models/show';

@Component({
  selector: 'app-addmovies',
  templateUrl: './addmovies.component.html',
  styleUrl: './addmovies.component.css'
})
export class AddmoviesComponent
 {
  submitted = false;

  movie=new Movie();
  public shows: Observable<Show[]> =of([]);

    constructor(private service:MovieserviceService,private router: Router) 
    {
  
    }
  
    addItemShow(id:string)
    {
      this.shows.pipe(
        map(showList =>showList[Number(id)])
      ).subscribe(
        selectedShow => {
          this.movie.shows.push(selectedShow);
        }
      );
      
    }
  
  onSubmit()
  {
    this.submitted=true;
    this.save();
  }
  
  save()
  {
    this.service.addMovie(this.movie).subscribe();
  }



}
