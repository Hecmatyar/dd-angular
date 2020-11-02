import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsPartnersFilterComponent } from './analytics-partners-filter.component';

describe('AnalyticsPartnersFilterComponent', () => {
  let component: AnalyticsPartnersFilterComponent;
  let fixture: ComponentFixture<AnalyticsPartnersFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsPartnersFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsPartnersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
