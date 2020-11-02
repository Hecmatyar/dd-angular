import {FormControl, FormGroup} from "@angular/forms";
import {Input, OnChanges, SimpleChanges} from "@angular/core";

export class BaseFormControl implements OnChanges {
  @Input() parentForm: FormGroup;
  @Input() controlName: string;
  @Input() disabled: boolean;

  constructor() {
    this.controlName = 'default';
    this.parentForm = new FormGroup({'default': new FormControl(null)});
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  getValidationStatus(): string {
    const control = this.parentForm.get(this.controlName);

    return control.value ? control.invalid ? 'error' : 'success' : '';
  }
}
