import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodsBuilderComponent } from './payment-methods-builder.component';

describe('PaymentMethodsBuilderComponent', () => {
  let component: PaymentMethodsBuilderComponent;
  let fixture: ComponentFixture<PaymentMethodsBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentMethodsBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodsBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
