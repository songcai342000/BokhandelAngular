import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingsummaryComponent } from './shoppingsummary.component';

describe('ShoppingsummaryComponent', () => {
  let component: ShoppingsummaryComponent;
  let fixture: ComponentFixture<ShoppingsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
