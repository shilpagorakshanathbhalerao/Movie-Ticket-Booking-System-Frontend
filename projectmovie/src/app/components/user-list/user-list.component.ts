import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserserviceService } from '../../services/userservice.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent 
{
  public users: Observable<User[]> =of([]);
  
  constructor(private service: UserserviceService,private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.users = this.service.getAllUser();
  }

  userDetails(id: number){
    this.router.navigate(['userdetails', id]);
  }

  updateDetails(id:number)
    {
      this.router.navigate(['updateuser', id]);
    }

  deleteUser(id:number)
    {
      return this.service.deleteUser(id).subscribe((data)=>{
        console.log(data);
        this.getAll();
      })

    }
}
