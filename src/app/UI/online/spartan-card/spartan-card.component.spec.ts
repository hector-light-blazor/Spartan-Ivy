import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpartanCardComponent } from './spartan-card.component';

describe('SpartanCardComponent', () => {
  let component: SpartanCardComponent;
  let fixture: ComponentFixture<SpartanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpartanCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpartanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
