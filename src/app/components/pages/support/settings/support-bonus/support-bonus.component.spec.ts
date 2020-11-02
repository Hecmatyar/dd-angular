import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportBonusComponent } from './support-bonus.component';

describe('SupportBonusComponent', () => {
  let component: SupportBonusComponent;
  let fixture: ComponentFixture<SupportBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
