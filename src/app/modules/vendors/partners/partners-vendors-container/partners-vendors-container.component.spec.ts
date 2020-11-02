import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersVendorsContainerComponent } from './partners-vendors-container.component';

describe('PartnersVendorsContainerComponent', () => {
  let component: PartnersVendorsContainerComponent;
  let fixture: ComponentFixture<PartnersVendorsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersVendorsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersVendorsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
