import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsOverviewTablesComponent } from './analytics-overview-tables.component';

describe('AnalyticsOverviewTablesComponent', () => {
  let component: AnalyticsOverviewTablesComponent;
  let fixture: ComponentFixture<AnalyticsOverviewTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsOverviewTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsOverviewTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
