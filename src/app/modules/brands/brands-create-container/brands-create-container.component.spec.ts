import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsCreateContainerComponent } from './brands-create-container.component';

describe('BrandsCreateContainerComponent', () => {
  let component: BrandsCreateContainerComponent;
  let fixture: ComponentFixture<BrandsCreateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsCreateContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsCreateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
