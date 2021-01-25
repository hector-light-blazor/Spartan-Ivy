import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArchiveTicketListComponent } from './archive-ticket-list.component';

describe('ArchiveTicketListComponent', () => {
  let component: ArchiveTicketListComponent;
  let fixture: ComponentFixture<ArchiveTicketListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveTicketListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveTicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
