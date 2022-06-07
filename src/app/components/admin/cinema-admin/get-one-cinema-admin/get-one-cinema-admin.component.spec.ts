import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneCinemaAdminComponent } from './get-one-cinema-admin.component';

describe('GetOneCinemaAdminComponent', () => {
  let component: GetOneCinemaAdminComponent;
  let fixture: ComponentFixture<GetOneCinemaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneCinemaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOneCinemaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
