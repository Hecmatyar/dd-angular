import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileVendorsFilterComponent } from './mobile-vendors-filter.component';

describe('MobileVendorsFitlerComponent', () => {
  let component: MobileVendorsFilterComponent;
  let fixture: ComponentFixture<MobileVendorsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileVendorsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileVendorsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
