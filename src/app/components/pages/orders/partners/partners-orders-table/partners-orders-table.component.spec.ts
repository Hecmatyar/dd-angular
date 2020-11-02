import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersOrdersTableComponent } from './partners-orders-table.component';

describe('PartnersTableComponent', () => {
  let component: PartnersOrdersTableComponent;
  let fixture: ComponentFixture<PartnersOrdersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersOrdersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
