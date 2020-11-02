import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswerGroupComponent } from './question-answer-group.component';

describe('QuestionAnswerGroupComponent', () => {
  let component: QuestionAnswerGroupComponent;
  let fixture: ComponentFixture<QuestionAnswerGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAnswerGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAnswerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
