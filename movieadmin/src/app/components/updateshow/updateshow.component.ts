import { Component } from '@angular/core';
import { Show } from '../../model/show';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowserviceService } from '../../services/showservice.service';

@Component({
  selector: 'app-updateshow',
  templateUrl: './updateshow.component.html',
  styleUrl: './updateshow.component.css'
})
export class UpdateshowComponent {
  showId: number=0;
  show: Show=new Show();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: ShowserviceService) { }


    ngOnInit() {
      this.show = new Show();
  
      this. showId = this.route.snapshot.params['showId'];
      
      
      this.service.getOneShow
      (this.showId).subscribe((data)=>{
        console.log(data);
        this.show=data;
      })
            
    }

    onSubmit(){
      this. updateShow();
    }

    updateShow()
    {
      this.service.updateShow(this.show).subscribe((data)=>{
        console.log(data);
        this.show= new Show();
        this.gotoList();
      })
    }

    gotoList(){
      this.router.navigate(['showlist']);
    }

}
