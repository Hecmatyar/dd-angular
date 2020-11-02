import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOrdersContainerComponent } from './mobile-orders-container.component';

describe('MobileContainerComponent', () => {
  let component: MobileOrdersContainerComponent;
  let fixture: ComponentFixture<MobileOrdersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOrdersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOrdersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
