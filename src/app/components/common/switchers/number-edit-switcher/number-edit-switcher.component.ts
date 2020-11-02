import {Component, ElementRef, ViewChild} from '@angular/core';
import {BaseEditSwitcher} from '../base-edit-switcher';

@Component({
  selector: 'app-number-edit-switcher',
  templateUrl: './number-edit-switcher.component.html',
  styleUrls: ['./number-edit-switcher.component.less']
})
export class NumberEditSwitcherComponent extends BaseEditSwitcher {
  @ViewChild('inputNumber') numberInput: ElementRef;

  constructor() {
    super();
  }

  setFocus(): void {
    setTimeout(() => {
      this.numberInput.nativeElement.focus();
    }, 100);
  }

  updateValue(value: string): void {
    this.onChangeValue();
    // const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    // if ((!isNaN(+value) && reg.test(value)) || value === '' || value === '-') {
      this.innerValue = value;
    // }
    // this.numberInput.nativeElement.value = this.innerValue;
  }
}
