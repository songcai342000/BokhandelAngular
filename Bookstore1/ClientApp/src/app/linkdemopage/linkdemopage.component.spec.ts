import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkdemopageComponent } from './linkdemopage.component';

describe('LinkdemopageComponent', () => {
  let component: LinkdemopageComponent;
  let fixture: ComponentFixture<LinkdemopageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkdemopageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkdemopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
