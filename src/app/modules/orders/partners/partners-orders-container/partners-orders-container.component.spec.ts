import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersOrdersContainerComponent } from './partners-orders-container.component';

describe('PartnersContainerComponent', () => {
  let component: PartnersOrdersContainerComponent;
  let fixture: ComponentFixture<PartnersOrdersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersOrdersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersOrdersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
