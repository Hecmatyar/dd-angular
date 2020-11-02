import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FaqItem} from "../../../api/dto/FaqItem.g";

@Component({
  selector: 'app-question-answer-group',
  templateUrl: './question-answer-group.component.html',
  styleUrls: ['./question-answer-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAnswerGroupComponent implements OnInit {
  @Input() questions: FaqItem[];
  @Output() changeValues = new EventEmitter<FaqItem[]>();

  constructor() {
  }

  ngOnInit() {
    if (!this.questions.length)
      this.questions.push({ question: "", answer: "" });
  }

  onAddNew(): void {
    this.questions.push({ question: "", answer: "" });
    this.changeValues.emit(this.questions);
  }

  onRemove(i): void {
    this.questions.splice(i, 1);
    this.changeValues.emit(this.questions);
  }

  onChangeValue(question, i): void {
    this.questions[i] = question;
    this.changeValues.emit(this.questions);
  }
}
