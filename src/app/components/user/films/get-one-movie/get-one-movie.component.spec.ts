import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneMovieComponent } from './get-one-movie.component';

describe('GetOneMovieComponent', () => {
  let component: GetOneMovieComponent;
  let fixture: ComponentFixture<GetOneMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOneMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
