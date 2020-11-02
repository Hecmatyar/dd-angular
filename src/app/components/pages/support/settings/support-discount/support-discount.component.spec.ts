import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportDiscountComponent } from './support-discount.component';

describe('SupportDiscountComponent', () => {
  let component: SupportDiscountComponent;
  let fixture: ComponentFixture<SupportDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
