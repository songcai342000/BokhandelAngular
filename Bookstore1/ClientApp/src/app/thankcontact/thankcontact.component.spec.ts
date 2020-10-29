import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankcontactComponent } from './thankcontact.component';

describe('ThankcontactComponent', () => {
  let component: ThankcontactComponent;
  let fixture: ComponentFixture<ThankcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
