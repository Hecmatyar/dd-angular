import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-base-filter-template',
  templateUrl: './base-filter-template.component.html',
  styleUrls: ['./base-filter-template.component.scss']
})
export class BaseFilterTemplateComponent {
  @Input() text: string;
  @Input() isRequired: boolean;
  @Input() isError: boolean;
  @Input() parentForm: FormGroup;

  constructor() {
    this.parentForm = new FormGroup(
      {'default': new FormControl('', [])});
    this.isRequired = false;
    this.isError = false;
  }
}
