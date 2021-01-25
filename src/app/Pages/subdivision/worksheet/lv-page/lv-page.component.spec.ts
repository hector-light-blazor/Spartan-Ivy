import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LvPageComponent } from './lv-page.component';

describe('LvPageComponent', () => {
  let component: LvPageComponent;
  let fixture: ComponentFixture<LvPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LvPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LvPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
