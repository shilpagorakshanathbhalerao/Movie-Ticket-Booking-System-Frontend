import { Component } from '@angular/core';
import { Show } from '../../models/show';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowserviceService } from '../../services/showservice.service';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrl: './showdetails.component.css'
})
export class ShowdetailsComponent {

  showId: number=0;
  show: Show=new Show();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: ShowserviceService) { }

    ngOnInit() {
      this.show = new Show();
  
      this. showId = this.route.snapshot.params['showId'];
      
      
      this.service.getOneShow(this.showId).subscribe((data)=>{
        console.log(data);
        this.show=data;
      })


}

list(){
  this.router.navigate(['showlist']);
}

}
