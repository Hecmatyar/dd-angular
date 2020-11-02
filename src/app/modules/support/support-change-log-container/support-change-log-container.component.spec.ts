import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportChangeLogContainerComponent } from './support-change-log-container.component';

describe('SupportChangeLogContainerComponent', () => {
  let component: SupportChangeLogContainerComponent;
  let fixture: ComponentFixture<SupportChangeLogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportChangeLogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportChangeLogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
