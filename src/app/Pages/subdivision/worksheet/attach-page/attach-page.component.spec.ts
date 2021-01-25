import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AttachPageComponent } from './attach-page.component';

describe('AttachPageComponent', () => {
  let component: AttachPageComponent;
  let fixture: ComponentFixture<AttachPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
