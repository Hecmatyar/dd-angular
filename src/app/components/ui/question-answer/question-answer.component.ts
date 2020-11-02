import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAnswerComponent {
  @Input() question: string;
  @Input() answer: string;
  @Input() index: number;
  @Output() changeValues = new EventEmitter<{ question: string, answer: string }>();

  constructor() {
  }

  onChange(): void {
    this.changeValues.emit({question: this.question, answer: this.answer});
  }
}
