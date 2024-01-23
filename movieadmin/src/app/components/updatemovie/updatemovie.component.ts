import { Component } from '@angular/core';
import { Movie } from '../../model/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieserviceService } from '../../services/movieservice.service';

@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrl: './updatemovie.component.css'
})
export class UpdatemovieComponent {
  movieId: number=0;
  movie: Movie=new Movie();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: MovieserviceService) { }


    ngOnInit() {
      this.movie = new Movie();
  
      this. movieId = this.route.snapshot.params['movieId'];
      
      
      this.service.getOneMovie
      (this.movieId).subscribe((data)=>{
        console.log(data);
        this.movie=data;
      })
            
    }

    onSubmit(){
      this. updateMovie();
    }

    updateMovie()
    {
      this.service.updateMovie(this.movie).subscribe((data)=>{
        console.log(data);
        this.movie= new Movie();
        this.gotoList();
      })
    }

    gotoList(){
      this.router.navigate(['movielist']);
    }

}
