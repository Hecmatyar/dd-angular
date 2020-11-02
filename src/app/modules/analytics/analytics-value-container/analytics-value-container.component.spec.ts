import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsValueContainerComponent } from './analytics-value-container.component';

describe('AnalyticsValueContainerComponent', () => {
  let component: AnalyticsValueContainerComponent;
  let fixture: ComponentFixture<AnalyticsValueContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsValueContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsValueContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
