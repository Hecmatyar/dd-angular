import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOrdersFilterComponent } from './mobile-orders-filter.component';

describe('MobileFilterComponent', () => {
  let component: MobileOrdersFilterComponent;
  let fixture: ComponentFixture<MobileOrdersFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOrdersFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOrdersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
