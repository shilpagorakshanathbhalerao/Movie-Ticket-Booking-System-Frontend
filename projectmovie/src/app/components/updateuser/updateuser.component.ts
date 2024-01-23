import { Component } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent {

  userId: number=0;
  user: User=new User();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: UserserviceService) { }


    ngOnInit() {
      this.user = new User();
  
      this. userId = this.route.snapshot.params['userId'];
      
      
      this.service.getOneUser(this.userId).subscribe((data)=>{
        console.log(data);
        this.user=data;
      })
            
    }

    onSubmit(){
      this. updateUser();
    }

    updateUser()
    {
      this.service.updateUser(this.user).subscribe((data)=>{
        console.log(data);
        this.user= new User();
        this.gotoList();
      })
    }

    gotoList(){
      this.router.navigate(['list']);
    }

}
