import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemGroupComponent } from './problem-group.component';

describe('ProblemGroupComponent', () => {
  let component: ProblemGroupComponent;
  let fixture: ComponentFixture<ProblemGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
