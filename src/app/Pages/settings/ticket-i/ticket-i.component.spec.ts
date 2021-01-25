import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TicketIComponent } from './ticket-i.component';

describe('TicketIComponent', () => {
  let component: TicketIComponent;
  let fixture: ComponentFixture<TicketIComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
