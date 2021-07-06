import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foot3Component } from './foot3.component';

describe('Foot3Component', () => {
  let component: Foot3Component;
  let fixture: ComponentFixture<Foot3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foot3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foot3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
