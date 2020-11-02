import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCardsContainerComponent } from './analytics-cards-container.component';

describe('AnalyticsCardsContainerComponent', () => {
  let component: AnalyticsCardsContainerComponent;
  let fixture: ComponentFixture<AnalyticsCardsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsCardsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
