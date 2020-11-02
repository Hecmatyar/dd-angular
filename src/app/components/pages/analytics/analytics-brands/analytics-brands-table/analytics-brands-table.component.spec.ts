import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsBrandsTableComponent } from './analytics-brands-table.component';

describe('AnalyticsBrandsTableComponent', () => {
  let component: AnalyticsBrandsTableComponent;
  let fixture: ComponentFixture<AnalyticsBrandsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsBrandsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsBrandsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
