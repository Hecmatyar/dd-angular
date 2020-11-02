import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersVendorsFilterComponent } from './partners-vendors-filter.component';

describe('PartnersVendorsFilterComponent', () => {
  let component: PartnersVendorsFilterComponent;
  let fixture: ComponentFixture<PartnersVendorsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersVendorsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersVendorsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
