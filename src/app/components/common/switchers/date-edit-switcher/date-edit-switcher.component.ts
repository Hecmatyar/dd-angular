import {Component} from '@angular/core';
import {BaseEditSwitcher} from '../base-edit-switcher';
import {SwitchData} from "../../../../core/interfaces/cards/update-card";

@Component({
  selector: 'app-date-edit-switcher',
  templateUrl: './date-edit-switcher.component.html',
  styleUrls: ['./date-edit-switcher.component.less']
})
export class DateEditSwitcherComponent extends BaseEditSwitcher {
  constructor() {
    super();
  }

  setFocus(): void {
    // empty
  }

  onChange(value: SwitchData): void {
    this.valueChange.emit(value);
    this.toggleFormat();
  }

  /*closeEdit(): void {
    this.isEdit = false;
  }*/
}
