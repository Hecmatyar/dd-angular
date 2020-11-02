import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsPartnersTableComponent } from './analytics-partners-table.component';

describe('AnalyticsPartnersTableComponent', () => {
  let component: AnalyticsPartnersTableComponent;
  let fixture: ComponentFixture<AnalyticsPartnersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsPartnersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsPartnersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
