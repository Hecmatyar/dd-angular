import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportCardsContainerComponent } from './support-cards-container.component';

describe('SupportCardsContainerComponent', () => {
  let component: SupportCardsContainerComponent;
  let fixture: ComponentFixture<SupportCardsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportCardsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
