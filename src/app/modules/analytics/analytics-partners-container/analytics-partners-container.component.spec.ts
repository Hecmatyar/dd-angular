import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsPartnersContainerComponent } from './analytics-partners-container.component';

describe('AnalyticsPartnersContainerComponent', () => {
  let component: AnalyticsPartnersContainerComponent;
  let fixture: ComponentFixture<AnalyticsPartnersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsPartnersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsPartnersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
