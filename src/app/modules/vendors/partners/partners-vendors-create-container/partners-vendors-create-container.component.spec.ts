import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersVendorsCreateContainerComponent } from './partners-vendors-create-container.component';

describe('PartnersVendorsCreateContainerComponent', () => {
  let component: PartnersVendorsCreateContainerComponent;
  let fixture: ComponentFixture<PartnersVendorsCreateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersVendorsCreateContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersVendorsCreateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
