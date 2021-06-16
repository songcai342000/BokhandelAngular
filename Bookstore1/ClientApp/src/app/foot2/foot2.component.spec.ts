import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Foot2Component } from './foot2.component';

describe('Foot2Component', () => {
  let component: Foot2Component;
  let fixture: ComponentFixture<Foot2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foot2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
