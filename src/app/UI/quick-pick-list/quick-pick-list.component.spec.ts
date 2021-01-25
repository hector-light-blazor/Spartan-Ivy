import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuickPickListComponent } from './quick-pick-list.component';

describe('QuickPickListComponent', () => {
  let component: QuickPickListComponent;
  let fixture: ComponentFixture<QuickPickListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickPickListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
