import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrderBuilderComponent } from './bulk-order-builder.component';

describe('OrderBuilderComponent', () => {
  let component: BulkOrderBuilderComponent;
  let fixture: ComponentFixture<BulkOrderBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkOrderBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrderBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
