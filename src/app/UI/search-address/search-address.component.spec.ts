import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchAddressComponent } from './search-address.component';

describe('SearchAddressComponent', () => {
  let component: SearchAddressComponent;
  let fixture: ComponentFixture<SearchAddressComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
