import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOrdersTableComponent } from './mobile-orders-table.component';

describe('MobileTableComponent', () => {
  let component: MobileOrdersTableComponent;
  let fixture: ComponentFixture<MobileOrdersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOrdersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
