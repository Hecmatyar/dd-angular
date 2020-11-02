import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrdersContainerComponent } from './bulk-orders-container.component';

describe('BulkContainerComponent', () => {
  let component: BulkOrdersContainerComponent;
  let fixture: ComponentFixture<BulkOrdersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkOrdersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrdersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
