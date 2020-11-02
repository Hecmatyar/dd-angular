import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersVendorsEditContainerComponent } from './partners-vendors-edit-container.component';

describe('PartnersVendorsEditContainerComponent', () => {
  let component: PartnersVendorsEditContainerComponent;
  let fixture: ComponentFixture<PartnersVendorsEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersVendorsEditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersVendorsEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
