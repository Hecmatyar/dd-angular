import {Component, Input} from '@angular/core';
import {BaseFormControl} from "../base-form-control";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BaseFormControl {
  @Input() placeholder: string;

  constructor() {
    super();
    this.placeholder = '';
  }
}
