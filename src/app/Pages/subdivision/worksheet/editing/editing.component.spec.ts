import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditingComponent } from './editing.component';

describe('EditingComponent', () => {
  let component: EditingComponent;
  let fixture: ComponentFixture<EditingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
