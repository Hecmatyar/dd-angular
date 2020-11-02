import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportChangeLogFilterComponent } from './support-change-log-filter.component';

describe('SupportChangeLogFilterComponent', () => {
  let component: SupportChangeLogFilterComponent;
  let fixture: ComponentFixture<SupportChangeLogFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportChangeLogFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportChangeLogFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
