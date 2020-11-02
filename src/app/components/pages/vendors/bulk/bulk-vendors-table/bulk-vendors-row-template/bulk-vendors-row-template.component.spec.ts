import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkVendorsRowTemplateComponent } from './bulk-vendors-row-template.component';

describe('BulkVendorsRowTenplateComponent', () => {
  let component: BulkVendorsRowTemplateComponent;
  let fixture: ComponentFixture<BulkVendorsRowTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkVendorsRowTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkVendorsRowTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
