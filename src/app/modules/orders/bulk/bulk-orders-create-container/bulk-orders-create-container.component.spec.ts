import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrdersCreateContainerComponent } from './bulk-orders-create-container.component';

describe('BulkOrdersCreateContainerComponent', () => {
  let component: BulkOrdersCreateContainerComponent;
  let fixture: ComponentFixture<BulkOrdersCreateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkOrdersCreateContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrdersCreateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
