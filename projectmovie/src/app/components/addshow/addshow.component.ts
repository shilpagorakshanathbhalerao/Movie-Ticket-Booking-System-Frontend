import { Component } from '@angular/core';
import { ShowserviceService } from '../../services/showservice.service';
import { Show } from '../../models/show';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addshow',
  templateUrl: './addshow.component.html',
  styleUrl: './addshow.component.css'
})
export class AddshowComponent {

  submitted = false;

  show=new Show;
    constructor(private service:ShowserviceService,private router: Router) 
    {
  
    }
  
  
  
  onSubmit()
  {
    this.submitted=true;
    this.save();
  }
  
  save()
  {
    this.service.addShow(this.show).subscribe();
  }


}
