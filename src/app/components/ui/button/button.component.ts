import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonType} from "../../../core/enums/button-type.enum";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: ButtonType;
  @Input() isLoading: boolean;
  @Input() disabled: boolean;
  @Input() text: string;

  @Output() clickEvent = new EventEmitter<void>();

  constructor() {
    this.type = ButtonType.GREEN;
    this.isLoading = false;
  }

  onClick(): void {
    this.clickEvent.emit();
  }
}
