import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersVendorsFormComponent } from './partners-vendors-form.component';

describe('PartnersVendorsFormComponent', () => {
  let component: PartnersVendorsFormComponent;
  let fixture: ComponentFixture<PartnersVendorsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersVendorsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersVendorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
