import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkVendorsContainerComponent } from './bulk-vendors-container.component';

describe('BulkVendorsContainerComponent', () => {
  let component: BulkVendorsContainerComponent;
  let fixture: ComponentFixture<BulkVendorsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkVendorsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkVendorsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
