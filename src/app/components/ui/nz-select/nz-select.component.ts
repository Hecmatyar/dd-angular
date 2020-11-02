import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BaseFormControl} from "../base-form-control";
import {Select} from "../../../core/interfaces/select";

@Component({
  selector: 'app-nz-select',
  templateUrl: './nz-select.component.html',
  styleUrls: ['./nz-select.component.scss']
})
export class NzSelectComponent extends BaseFormControl {
  @Input() items: Select[];

  @Output() selectValue = new EventEmitter<void>();

  constructor() {
    super();
  }

  onSelect(): void {
    this.selectValue.emit();
  }

}
