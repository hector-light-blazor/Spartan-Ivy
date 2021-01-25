import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MasterLoadingComponent } from './master-loading.component';

describe('MasterLoadingComponent', () => {
  let component: MasterLoadingComponent;
  let fixture: ComponentFixture<MasterLoadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
