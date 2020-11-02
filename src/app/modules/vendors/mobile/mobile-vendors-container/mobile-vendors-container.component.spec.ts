import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileVendorsContainerComponent } from './mobile-vendors-container.component';

describe('MobileVendorsContainerComponent', () => {
  let component: MobileVendorsContainerComponent;
  let fixture: ComponentFixture<MobileVendorsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileVendorsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileVendorsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
