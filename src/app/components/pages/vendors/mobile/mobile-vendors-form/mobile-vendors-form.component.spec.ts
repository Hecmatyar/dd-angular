import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileVendorsFormComponent } from './mobile-vendors-form.component';

describe('MobileVendorsFormComponent', () => {
  let component: MobileVendorsFormComponent;
  let fixture: ComponentFixture<MobileVendorsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileVendorsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileVendorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
