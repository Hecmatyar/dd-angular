import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersOrdersRowTemplateComponent } from './partners-orders-row-template.component';

describe('PartnersOrdersRowTemplateComponent', () => {
  let component: PartnersOrdersRowTemplateComponent;
  let fixture: ComponentFixture<PartnersOrdersRowTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersOrdersRowTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersOrdersRowTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
