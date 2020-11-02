import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-base-form-template',
  templateUrl: './base-form-template.component.html',
  styleUrls: ['./base-form-template.component.scss']
})
export class BaseFormTemplateComponent {
  @Input() isLoading: boolean;

  constructor() {
    this.isLoading = false;
  }
}
