import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileVendorsInfoContainerComponent } from './mobile-vendors-info-container.component';

describe('MobileVendorsInfoContainerComponent', () => {
  let component: MobileVendorsInfoContainerComponent;
  let fixture: ComponentFixture<MobileVendorsInfoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileVendorsInfoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileVendorsInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
