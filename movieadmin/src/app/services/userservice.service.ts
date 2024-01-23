import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService
 {

  
  baseUrl='http://localhost:8082';
  
  constructor(private http:HttpClient) { }
  createUser(User: Object): Observable<Object> {
    console.log("inside service")
    console.log(User);
    return this.http.post(`${this.baseUrl}/addUser`, User);
  }

  loginUser(Login: object): Observable<object> {
    return this.http.post(`${this.baseUrl}/loginUser`, Login)
  };

    getAllUser():any
    {
      return this.http.get(`${this.baseUrl}/getAllUser`);
    }
    deleteUser(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/deleteUser/${id}`, { responseType: 'text' });
    }
    getOneUser(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/getOneUser/${id}`);
    }

    updateUser(user:object){
      return this.http.put(`${this.baseUrl}/updateUser`,user);
    }


 }
