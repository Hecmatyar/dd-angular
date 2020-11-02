import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersOrdersCreateComponent } from './partners-orders-create.component';

describe('PartnersOrdersCreateComponent', () => {
  let component: PartnersOrdersCreateComponent;
  let fixture: ComponentFixture<PartnersOrdersCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersOrdersCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersOrdersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
