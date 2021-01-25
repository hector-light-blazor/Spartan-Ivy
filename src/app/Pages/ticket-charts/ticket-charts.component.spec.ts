import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TicketChartsComponent } from './ticket-charts.component';

describe('TicketChartsComponent', () => {
  let component: TicketChartsComponent;
  let fixture: ComponentFixture<TicketChartsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
