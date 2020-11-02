import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BaseFormControl} from "../base-form-control";
import {Select} from "../../../core/interfaces/select";

@Component({
  selector: 'app-nz-select-multiple',
  templateUrl: './nz-select-multiple.component.html',
  styleUrls: ['./nz-select-multiple.component.scss']
})
export class NzSelectMultipleComponent extends BaseFormControl {
  @Input() items: Select[];

  @Output() selectValue = new EventEmitter<void>();

  constructor() {
    super();
  }

  onSelect(): void {
    this.selectValue.emit();
  }
}
