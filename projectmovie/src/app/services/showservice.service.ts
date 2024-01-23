import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowserviceService {


  baseUrl='http://localhost:8082';
  
  constructor(private http:HttpClient) { }

  addShow(show: Object): Observable<Object> {
    console.log(show);
    return this.http.post(`${this.baseUrl}/addShow`, show); 
  }
    getAllShow():any
    {
      return this.http.get(`${this.baseUrl}/getAllShow`);
    }
    
    getOneShow(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/getOneShow/${id}`);
    }
    
}
