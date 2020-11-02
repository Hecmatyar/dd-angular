import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Select} from "../../../core/interfaces/select";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() data: string;
  @Input() options: Select[];
  @Input() disabled: boolean;

  @Output() changeValue = new EventEmitter<string>();

  constructor() {
    //
  }

  onChangeValue(value: string): void {
    this.changeValue.emit(value);
  }
}
