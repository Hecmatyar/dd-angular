import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsEditContainerComponent } from './brands-edit-container.component';

describe('BrandsEditContainerComponent', () => {
  let component: BrandsEditContainerComponent;
  let fixture: ComponentFixture<BrandsEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsEditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
