import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersVendorsRowTemplateComponent } from './partners-vendors-row-template.component';

describe('PartnersVendorsRowTemplateComponent', () => {
  let component: PartnersVendorsRowTemplateComponent;
  let fixture: ComponentFixture<PartnersVendorsRowTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersVendorsRowTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersVendorsRowTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
