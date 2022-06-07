import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneMovieAdminComponent } from './get-one-movie-admin.component';

describe('GetOneMovieAdminComponent', () => {
  let component: GetOneMovieAdminComponent;
  let fixture: ComponentFixture<GetOneMovieAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneMovieAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOneMovieAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
