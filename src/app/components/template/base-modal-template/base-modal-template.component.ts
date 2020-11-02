import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-base-modal-template',
  templateUrl: './base-modal-template.component.html',
  styleUrls: ['./base-modal-template.component.scss']
})
export class BaseModalTemplateComponent {
  @Input() isLoading: boolean;

  constructor() {
    // empty
  }
}
