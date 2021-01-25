import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GisPageComponent } from './gis-page.component';

describe('GisPageComponent', () => {
  let component: GisPageComponent;
  let fixture: ComponentFixture<GisPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GisPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
