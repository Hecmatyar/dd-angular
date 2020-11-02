import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersOrdersFilterComponent } from './partners-orders-filter.component';

describe('PartnersFilterComponent', () => {
  let component: PartnersOrdersFilterComponent;
  let fixture: ComponentFixture<PartnersOrdersFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersOrdersFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersOrdersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
