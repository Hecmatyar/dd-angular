import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportBonusContainerComponent } from './support-bonus-container.component';

describe('SupportBonusContainerComponent', () => {
  let component: SupportBonusContainerComponent;
  let fixture: ComponentFixture<SupportBonusContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportBonusContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportBonusContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
