import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CommentDto} from "../../../api/dto/CommentDto.g";

@Component({
  selector: 'app-table-comment',
  templateUrl: './table-comment.component.html',
  styleUrls: ['./table-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableCommentComponent {
  @Input() data: CommentDto;

  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('textarea') textarea: ElementRef;
  isEdit: boolean;
  innerText: string;

  constructor() {
    this.isEdit = false;
    this.innerText = this.data ? this.data.text : "";
  }

  onKeyup(event: KeyboardEvent): void {
    const ENTER = 'Enter';
    const ESC = 'Escape';

    if (event.key === ENTER) {
      event.preventDefault();
      this.valueChange.emit(this.innerText.trim());
      this.toggleFormat();
    } else if (event.key === ESC) {
      this.toggleFormat();
    }
  }

  toggleFormat(): void {
    this.isEdit = !this.isEdit;

    if (this.isEdit) {
      this.innerText = this.data ? this.data.text : "";

      setTimeout(() => {
        this.textarea.nativeElement.focus();
      }, 100);
    }
  }
}
