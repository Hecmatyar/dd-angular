import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrdersRowTemplateComponent } from './bulk-orders-row-template.component';

describe('OrdersRowTemplateComponent', () => {
  let component: BulkOrdersRowTemplateComponent;
  let fixture: ComponentFixture<BulkOrdersRowTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkOrdersRowTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrdersRowTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
