import {Component, Input} from '@angular/core';
import {BaseFormControl} from "../base-form-control";

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent extends BaseFormControl {
  @Input() placeholder: string;

  constructor() {
    super();
    this.placeholder = '';
  }

}
