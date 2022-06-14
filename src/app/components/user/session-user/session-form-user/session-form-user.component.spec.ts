import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFormUserComponent } from './session-form-user.component';

describe('SessionFormUserComponent', () => {
  let component: SessionFormUserComponent;
  let fixture: ComponentFixture<SessionFormUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionFormUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
