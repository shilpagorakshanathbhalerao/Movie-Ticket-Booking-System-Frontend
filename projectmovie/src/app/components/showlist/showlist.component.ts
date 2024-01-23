import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Show } from '../../models/show';
import { ShowserviceService } from '../../services/showservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrl: './showlist.component.css'
})
export class ShowlistComponent {

  public show: Observable<Show[]> =of([]);
  
  constructor(private service: ShowserviceService,private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.show = this.service.getAllShow();
  }

  showDetails(id: number){
    this.router.navigate(['showDetails', id]);
  }


}
