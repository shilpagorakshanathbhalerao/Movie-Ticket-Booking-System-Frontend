import { Component } from '@angular/core';
import { UserLogin } from '../../models/userlogin';
import { Router } from '@angular/router';
import { UserloginserviceService } from '../../services/userloginservice.service';
import { User } from '../../models/user';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent 
{
  // submitted = false;

  // userlogin=new UserLogin();
  //   constructor(private service:UserloginserviceService,private router: Router) 
  //   {
  
  //   }
  
  
  
  // onSubmit()
  // {
  //   this.submitted=true;
  //   this.save();
  // }
  
  // save()
  // {
  //   this.service.regUser(this.userlogin).subscribe();
  // }
  
  user:User=new User();
msg:any='';
constructor(private service:UserserviceService, private router:Router){}

  ngOnInit(){
   
}

login(){
  this.service.loginUser(this.user).subscribe((data)=>{
    console.log("Response received");
    this.router.navigate(['/home'])

//   },(err)=>{
//     console.log("Exception occured");
//     this.msg="Bad Credentials , please enter valid data";
});
}


}
