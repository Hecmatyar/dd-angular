import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersOrdersCreateContainerComponent } from './partners-orders-create-container.component';

describe('PartnersOrdersCreateContainerComponent', () => {
  let component: PartnersOrdersCreateContainerComponent;
  let fixture: ComponentFixture<PartnersOrdersCreateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersOrdersCreateContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersOrdersCreateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
