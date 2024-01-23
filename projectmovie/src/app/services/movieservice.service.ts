import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  baseUrl='http://localhost:8082';
  
  constructor(private http:HttpClient) { }

  addMovie(movie: Object): Observable<Object> {
    console.log(movie);
    return this.http.post(`${this.baseUrl}/addMovie`, movie); 
  }
    getAllMovie():any
    {
      return this.http.get(`${this.baseUrl}/getAllMovie`);
    }
    
    getOneMovie(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/getOneMovie/${id}`);
    }
    deleteMovie(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/deleteMovieMapping/${id}`, { responseType: 'text' });
    }
   

    updateMovie(movie:object){
      return this.http.put(`${this.baseUrl}/update`,movie);
    }

}
