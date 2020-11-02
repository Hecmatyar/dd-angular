import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsOverviewFilterComponent } from './analytics-overview-filter.component';

describe('AnalyticsOverviewFilterComponent', () => {
  let component: AnalyticsOverviewFilterComponent;
  let fixture: ComponentFixture<AnalyticsOverviewFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsOverviewFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsOverviewFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
