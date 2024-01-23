import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/userlogin';

@Injectable({
  providedIn: 'root'
})
export class UserloginserviceService {

  baseUrl='http://localhost:8082';
  
  constructor(private http:HttpClient) { }

  regUser(userlogin: Object): Observable<Object> 
  {
    console.log(userlogin);
    return this.http.post(`${this.baseUrl}/addUserLogin`, userlogin); 
  }
}
