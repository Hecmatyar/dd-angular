import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkVendorsFormComponent } from './bulk-vendors-form.component';

describe('BulkVendorsFormComponent', () => {
  let component: BulkVendorsFormComponent;
  let fixture: ComponentFixture<BulkVendorsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkVendorsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkVendorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
