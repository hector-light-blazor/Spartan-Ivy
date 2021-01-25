import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssignComponent } from './assign.component';

describe('AssignComponent', () => {
  let component: AssignComponent;
  let fixture: ComponentFixture<AssignComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
