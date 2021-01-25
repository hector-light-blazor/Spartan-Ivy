import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToolbarIComponent } from './toolbar-i.component';

describe('ToolbarIComponent', () => {
  let component: ToolbarIComponent;
  let fixture: ComponentFixture<ToolbarIComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
