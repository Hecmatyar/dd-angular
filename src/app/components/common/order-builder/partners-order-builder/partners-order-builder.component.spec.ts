import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersOrderBuilderComponent } from './partners-order-builder.component';

describe('PartnersOrderBuilderComponent', () => {
  let component: PartnersOrderBuilderComponent;
  let fixture: ComponentFixture<PartnersOrderBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersOrderBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersOrderBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
