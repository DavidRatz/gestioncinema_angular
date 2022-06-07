import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCinemaAdminComponent } from './form-cinema-admin.component';

describe('FormCinemaAdminComponent', () => {
  let component: FormCinemaAdminComponent;
  let fixture: ComponentFixture<FormCinemaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCinemaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCinemaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
