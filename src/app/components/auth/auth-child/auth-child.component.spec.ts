import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthChildComponent } from './auth-child.component';

describe('AuthChildComponent', () => {
  let component: AuthChildComponent;
  let fixture: ComponentFixture<AuthChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
