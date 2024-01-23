import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieshowdetailsComponent } from './movieshowdetails.component';

describe('MovieshowdetailsComponent', () => {
  let component: MovieshowdetailsComponent;
  let fixture: ComponentFixture<MovieshowdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieshowdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieshowdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
