import { Component } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user:User=new User();
  msg:any='';
  constructor(private service:UserserviceService, private router:Router){}
  
    ngOnInit(){
     
  }
  
    submitForm(){
      this.service.createUser(this.user).subscribe((data)=>{
        console.log("signup succesfully")
        alert("signup succesfully")
        this.msg="Restration Successfully";
        this.router.navigate(['/login'])
      },
      // (error)=>{
      //   this.msg=error.error;
      );
    }
}
