import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOrdersRowTemplateComponent } from './mobile-orders-row-template.component';

describe('MobileOrdersRowTemplateComponent', () => {
  let component: MobileOrdersRowTemplateComponent;
  let fixture: ComponentFixture<MobileOrdersRowTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOrdersRowTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOrdersRowTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
