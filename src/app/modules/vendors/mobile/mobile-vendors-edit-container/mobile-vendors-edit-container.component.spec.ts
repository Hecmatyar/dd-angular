import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileVendorsEditContainerComponent } from './mobile-vendors-edit-container.component';

describe('MobileVendorsCreateContainerComponent', () => {
  let component: MobileVendorsEditContainerComponent;
  let fixture: ComponentFixture<MobileVendorsEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileVendorsEditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileVendorsEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
