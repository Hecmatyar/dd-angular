import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkVendorsCreateComponent } from './bulk-vendors-create.component';

describe('BulkVendorsCreateComponent', () => {
  let component: BulkVendorsCreateComponent;
  let fixture: ComponentFixture<BulkVendorsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkVendorsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkVendorsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
