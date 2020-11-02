import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsValuesTableComponent } from './analytics-values-table.component';

describe('AnalyticsValuesTableComponent', () => {
  let component: AnalyticsValuesTableComponent;
  let fixture: ComponentFixture<AnalyticsValuesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsValuesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsValuesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
