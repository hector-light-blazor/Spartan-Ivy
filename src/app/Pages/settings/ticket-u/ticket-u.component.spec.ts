import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TicketUComponent } from './ticket-u.component';

describe('TicketUComponent', () => {
  let component: TicketUComponent;
  let fixture: ComponentFixture<TicketUComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
