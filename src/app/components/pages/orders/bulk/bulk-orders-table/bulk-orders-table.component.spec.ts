import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrdersTableComponent } from './bulk-orders-table.component';

describe('BulkTableComponent', () => {
  let component: BulkOrdersTableComponent;
  let fixture: ComponentFixture<BulkOrdersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkOrdersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
