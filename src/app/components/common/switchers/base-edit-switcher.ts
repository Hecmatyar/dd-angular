import {EventEmitter, Input, Output} from '@angular/core';
import {SwitchData} from "../../../core/interfaces/cards/update-card";

export abstract class BaseEditSwitcher {
  @Input() value: SwitchData;

  @Output() valueChange = new EventEmitter<SwitchData>();

  isEdit: boolean;
  isChanged: boolean;
  innerValue: SwitchData;

  protected constructor() {
    this.isEdit = false;
    this.isChanged = false;
    this.innerValue = this.value;
  }

  onKeyup(event: KeyboardEvent): void {
    const ENTER = 'Enter';
    const ESC = 'Escape';

    if (event.key === ENTER) {
      this.onChange(this.innerValue);
    } else if (event.key === ESC) {
      this.onCancel();
    }
  }

  onChange(value: SwitchData): void {
    if (this.isChanged) {
      this.valueChange.emit(value);
    }
    this.toggleFormat();
  }

  onBlur(): void {
    this.onCancel();
  }

  onCancel(): void {
    this.toggleFormat();
  }

  toggleFormat(): void {
    this.isEdit = !this.isEdit;
    this.isChanged = false;

    if (this.isEdit) {
      this.innerValue = this.value;
      this.setFocus();
    }
  }

  onChangeValue(): void {
    this.isChanged = true;
  }

  abstract setFocus(): void;
}
