import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foot1Component } from './foot1.component';

describe('Foot1Component', () => {
  let component: Foot1Component;
  let fixture: ComponentFixture<Foot1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foot1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
