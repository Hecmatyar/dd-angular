import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrdersFilterComponent } from './bulk-orders-filter.component';

describe('BulkFilterComponent', () => {
  let component: BulkOrdersFilterComponent;
  let fixture: ComponentFixture<BulkOrdersFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkOrdersFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrdersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
