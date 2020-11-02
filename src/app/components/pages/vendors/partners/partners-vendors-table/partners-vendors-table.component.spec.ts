import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersVendorsTableComponent } from './partners-vendors-table.component';

describe('PartnersVendorsTableComponent', () => {
  let component: PartnersVendorsTableComponent;
  let fixture: ComponentFixture<PartnersVendorsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersVendorsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersVendorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
