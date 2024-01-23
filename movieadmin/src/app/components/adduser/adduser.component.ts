import { Component } from '@angular/core';
import { User } from '../../model/user';
import { UserserviceService } from '../../services/userservice.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent 
{
  submitted = false;

  user=new User();
  constructor(private service:UserserviceService,private router: Router) 
    {

    }
  
    ngOnInit() {
      this.getAll();
    }
  
    getAll() {
      this.user = this.service.getAllUser();
    }
  

    

  onSubmit()
  {
    this.submitted=true;
   
    this.save();
  }

  save()
  {
    this.service.createUser(this.user).subscribe();
  }

}
