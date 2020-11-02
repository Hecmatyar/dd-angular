import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsValuesFilterComponent } from './analytics-values-filter.component';

describe('AnalyticsValuesFilterComponent', () => {
  let component: AnalyticsValuesFilterComponent;
  let fixture: ComponentFixture<AnalyticsValuesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsValuesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsValuesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
