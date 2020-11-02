import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCardsTableComponent } from './analytics-cards-table.component';

describe('AnalyticsCardsTableComponent', () => {
  let component: AnalyticsCardsTableComponent;
  let fixture: ComponentFixture<AnalyticsCardsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsCardsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsCardsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
