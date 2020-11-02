import {Component} from '@angular/core';
import {BaseEditSwitcher} from '../base-edit-switcher';

@Component({
  selector: 'app-text-edit-switcher',
  templateUrl: './text-edit-switcher.component.html',
  styleUrls: ['./text-edit-switcher.component.less']
})
export class TextEditSwitcherComponent extends BaseEditSwitcher {

  constructor() {
    super();
  }

  setFocus(): void {
    //empty
  }
}
