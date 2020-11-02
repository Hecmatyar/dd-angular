import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCardsFilterComponent } from './analytics-cards-filter.component';

describe('AnalyticsCardsFilterComponent', () => {
  let component: AnalyticsCardsFilterComponent;
  let fixture: ComponentFixture<AnalyticsCardsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsCardsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsCardsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
