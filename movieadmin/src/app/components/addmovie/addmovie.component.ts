import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../model/movie';
import { MovieserviceService } from '../../services/movieservice.service';
import { Observable, map, of } from 'rxjs';
import { Show } from '../../model/show';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrl: './addmovie.component.css'
})
export class AddmovieComponent
 {
  submitted = false;

  movie=new Movie();
  public shows: Observable<Show[]> =of([]);

    constructor(private service:MovieserviceService,private router: Router) 
    {
  
    }
  
    ngOnInit() {
      this.getAll();
    }
  
    getAll() {
      this.shows = this.service.getAllShows();
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
