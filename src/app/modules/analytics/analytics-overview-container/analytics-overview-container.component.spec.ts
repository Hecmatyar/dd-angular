import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsOverviewContainerComponent } from './analytics-overview-container.component';

describe('AnalyticsOverviewContainerComponent', () => {
  let component: AnalyticsOverviewContainerComponent;
  let fixture: ComponentFixture<AnalyticsOverviewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsOverviewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsOverviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
