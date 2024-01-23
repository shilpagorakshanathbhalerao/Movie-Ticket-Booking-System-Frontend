import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../model/user';
import { UserserviceService } from '../../services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
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
