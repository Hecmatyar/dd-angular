import {Component, Input} from '@angular/core';
import {BaseFormControl} from "../base-form-control";

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent extends BaseFormControl {
  @Input() placeholder: string;

  constructor() {
    super();
    this.placeholder = '';
  }
}
