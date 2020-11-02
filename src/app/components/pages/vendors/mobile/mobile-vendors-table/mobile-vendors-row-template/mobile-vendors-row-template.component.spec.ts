import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileVendorsRowTemplateComponent } from './mobile-vendors-row-template.component';

describe('MobileVendorsRowTemplateComponent', () => {
  let component: MobileVendorsRowTemplateComponent;
  let fixture: ComponentFixture<MobileVendorsRowTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileVendorsRowTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileVendorsRowTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
