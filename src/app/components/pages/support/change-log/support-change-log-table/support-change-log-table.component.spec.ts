import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportChangeLogTableComponent } from './support-change-log-table.component';

describe('SupportChangeLogTableComponent', () => {
  let component: SupportChangeLogTableComponent;
  let fixture: ComponentFixture<SupportChangeLogTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportChangeLogTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportChangeLogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
