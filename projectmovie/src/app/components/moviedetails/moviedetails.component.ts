import { Component } from '@angular/core';
import { Movie } from '../../models/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieserviceService } from '../../services/movieservice.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css'
})
export class MoviedetailsComponent 
{
  movieId: number=0;
  movie: Movie=new Movie();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: MovieserviceService) { }

    ngOnInit() {
      this.movie = new Movie();
  
      this. movieId = this.route.snapshot.params['movieId'];
      
      
      this.service.getOneMovie(this.movieId).subscribe((data)=>{
        console.log(data);
        this.movie=data;
      })


}

list(){
  this.router.navigate(['movielist']);
}

}
