import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisplayXYComponent } from './display-xy.component';

describe('DisplayXYComponent', () => {
  let component: DisplayXYComponent;
  let fixture: ComponentFixture<DisplayXYComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayXYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayXYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
