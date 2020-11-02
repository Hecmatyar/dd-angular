import {Component, Input} from '@angular/core';
import {CommentDto} from "../../../api/dto/CommentDto.g";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: CommentDto;

  constructor() {
    this.comment = {
      author: 'Kafka83',
      text: 'One morning, as Gregor Samsa was waking up from anxious dreams, he discovered that in bed ...',
      dateTime: new Date()
    };
  }
}
