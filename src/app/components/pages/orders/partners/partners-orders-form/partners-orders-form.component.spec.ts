import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersOrdersFormComponent } from './partners-orders-form.component';

describe('PartnersOrdersFormComponent', () => {
  let component: PartnersOrdersFormComponent;
  let fixture: ComponentFixture<PartnersOrdersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersOrdersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersOrdersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
