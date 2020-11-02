import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersVendorsCreateComponent } from './partners-vendors-create.component';

describe('PartnersVendorsCreateComponent', () => {
  let component: PartnersVendorsCreateComponent;
  let fixture: ComponentFixture<PartnersVendorsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersVendorsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersVendorsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
