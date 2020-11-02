import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BaseFormControl} from "../base-form-control";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent extends BaseFormControl {
  @Input() dateFormat: string = 'short';
  @Input() isFrom: boolean;
  @Input() disableDateMode: boolean;
  @Input() neighborDate: Date;
  @Input() placeholder: string;

  constructor() {
    super();
    this.placeholder = "";
  }

  onChange(date: Date): void {
    // empty
  }

  disabledDate = (current: Date): boolean => {
    if (this.disableDateMode && this.neighborDate) {
      if (this.isFrom) {
        return current >= new Date(this.neighborDate);
      } else {
        return current < new Date(this.neighborDate);
      }
    } else {
      return false;
    }
  };

}
