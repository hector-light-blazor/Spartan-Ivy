import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LetterViewerComponent } from './letter-viewer.component';

describe('LetterViewerComponent', () => {
  let component: LetterViewerComponent;
  let fixture: ComponentFixture<LetterViewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
