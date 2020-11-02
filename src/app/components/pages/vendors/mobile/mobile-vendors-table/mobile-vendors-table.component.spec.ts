import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileVendorsTableComponent } from './mobile-vendors-table.component';

describe('MobileVendorsTableComponent', () => {
  let component: MobileVendorsTableComponent;
  let fixture: ComponentFixture<MobileVendorsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileVendorsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileVendorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
