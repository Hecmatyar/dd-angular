import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsBrandsFilterComponent } from './analytics-brands-filter.component';

describe('AnalyticsBrandsFilterComponent', () => {
  let component: AnalyticsBrandsFilterComponent;
  let fixture: ComponentFixture<AnalyticsBrandsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsBrandsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsBrandsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
