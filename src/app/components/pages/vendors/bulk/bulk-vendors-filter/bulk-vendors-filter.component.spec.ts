import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkVendorsFilterComponent } from './bulk-vendors-filter.component';

describe('BulkVendorsFilterComponent', () => {
  let component: BulkVendorsFilterComponent;
  let fixture: ComponentFixture<BulkVendorsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkVendorsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkVendorsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
