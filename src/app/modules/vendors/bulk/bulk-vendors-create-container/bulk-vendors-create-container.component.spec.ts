import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkVendorsCreateContainerComponent } from './bulk-vendors-create-container.component';

describe('BulkVendorsCreateContainerComponent', () => {
  let component: BulkVendorsCreateContainerComponent;
  let fixture: ComponentFixture<BulkVendorsCreateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkVendorsCreateContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkVendorsCreateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
