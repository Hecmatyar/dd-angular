import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkVendorsTableComponent } from './bulk-vendors-table.component';

describe('BulkVendorsTableComponent', () => {
  let component: BulkVendorsTableComponent;
  let fixture: ComponentFixture<BulkVendorsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkVendorsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkVendorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
