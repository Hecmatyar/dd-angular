import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsCreateComponent } from './brands-create.component';

describe('BrandsCreateComponent', () => {
  let component: BrandsCreateComponent;
  let fixture: ComponentFixture<BrandsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
