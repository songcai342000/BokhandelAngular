import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostaddressComponent } from './postaddress.component';

describe('PostaddressComponent', () => {
  let component: PostaddressComponent;
  let fixture: ComponentFixture<PostaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
