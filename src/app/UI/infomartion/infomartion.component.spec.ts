import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InfomartionComponent } from './infomartion.component';

describe('InfomartionComponent', () => {
  let component: InfomartionComponent;
  let fixture: ComponentFixture<InfomartionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InfomartionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
