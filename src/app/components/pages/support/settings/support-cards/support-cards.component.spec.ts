import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportCardsComponent } from './support-cards.component';

describe('SupportCardsComponent', () => {
  let component: SupportCardsComponent;
  let fixture: ComponentFixture<SupportCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
