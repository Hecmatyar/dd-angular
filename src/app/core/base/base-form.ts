import {Input} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {ButtonType} from "../enums/button-type.enum";

export abstract class BaseForm {
  @Input() isLoading: boolean;

  form: FormGroup;
  backPath: string;
  buttonType: typeof ButtonType;

  protected constructor() {
    this.buttonType = ButtonType;
  }

  markForm(form: FormGroup): void {
    for (const inner in form.controls) {
      const control = form.get(inner);
      if (control) {
        control.markAsDirty();
        control.markAsTouched();
        control.updateValueAndValidity();
      }
    }
  }

  isInvalid(controlName: string): boolean {
    return (this.form.get(controlName).dirty && !this.form.get(controlName).valid);
  }

  abstract applyForm(): void;
}
