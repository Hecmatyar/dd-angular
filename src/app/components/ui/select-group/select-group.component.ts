import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {Select} from "../../../core/interfaces/select";
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-select-group',
  templateUrl: './select-group.component.html',
  styleUrls: ['./select-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SelectGroupComponent {
  @Input() title: string;
  @Input() parentForm: FormGroup;
  @Input() controlName: string;
  @Input() selectArray: FormArray;
  @Input() selectableItems: Select[];
  @Input() emptyItem: Object;

  @Output() update = new EventEmitter<void>();

  constructor(protected fb: FormBuilder, protected detectRef: ChangeDetectorRef) {
    this.selectableItems = [];
  }

  get formArrayItems(): AbstractControl[] {
    return this.selectArray.controls;
  }

  getFormGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }

  onAddNew(): void {
    if (this.canAddNew()) {
      this.selectArray.push(this.fb.group(this.emptyItem));
    }
    this.detectRef.detectChanges();
  }

  onRemove(index: number): void {
    this.selectArray.removeAt(index);
    if (!this.selectArray.controls.length) {
      this.onAddNew();
    }
    this.detectRef.detectChanges();
    this.update.emit();
  }

  canAddNew(): boolean {
    return this.selectArray.controls.every(item => !!item.value.key);
  }
}
