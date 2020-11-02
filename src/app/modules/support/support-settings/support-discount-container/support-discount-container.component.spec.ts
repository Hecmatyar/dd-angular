import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportDiscountContainerComponent } from './support-discount-container.component';

describe('SupportDiscountContainerComponent', () => {
  let component: SupportDiscountContainerComponent;
  let fixture: ComponentFixture<SupportDiscountContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportDiscountContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportDiscountContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
