import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrdersFormComponent } from './bulk-orders-form.component';

describe('BulkOrdersFormComponent', () => {
  let component: BulkOrdersFormComponent;
  let fixture: ComponentFixture<BulkOrdersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkOrdersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrdersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
