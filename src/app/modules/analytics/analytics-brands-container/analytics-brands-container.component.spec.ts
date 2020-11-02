import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsBrandsContainerComponent } from './analytics-brands-container.component';

describe('AnalyticsBrandsContainerComponent', () => {
  let component: AnalyticsBrandsContainerComponent;
  let fixture: ComponentFixture<AnalyticsBrandsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsBrandsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsBrandsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
