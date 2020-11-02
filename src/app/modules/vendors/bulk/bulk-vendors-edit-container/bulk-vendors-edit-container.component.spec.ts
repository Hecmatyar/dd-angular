import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkVendorsEditContainerComponent } from './bulk-vendors-edit-container.component';

describe('BulkVendorsEditContainerComponent', () => {
  let component: BulkVendorsEditContainerComponent;
  let fixture: ComponentFixture<BulkVendorsEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkVendorsEditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkVendorsEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
