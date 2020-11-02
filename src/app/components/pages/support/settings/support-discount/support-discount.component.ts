import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {AdminDiscountSetting} from "../../../../../api/dto/AdminDiscountSetting.g";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ButtonType} from "../../../../../core/enums/button-type.enum";

@Component({
  selector: 'app-support-discount',
  templateUrl: './support-discount.component.html',
  styleUrls: ['./support-discount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportDiscountComponent implements OnChanges {
  @Output() onSave = new EventEmitter<AdminDiscountSetting>();
  @Input() settings: AdminDiscountSetting;
  @Input() isLoading: boolean = false;
  buttonType: typeof ButtonType = ButtonType;
  form: FormGroup;
  formArray: FormArray;

  constructor(private fb: FormBuilder) {
  }

  initForm(): void {
    this.formArray = this.fb.array(
      this.settings.discountThresholds.map(item => this.fb.group({
        from: [item.from, [Validators.required]],
        percent: [item.percent, [Validators.required]]
      }))
    );
    this.form = this.fb.group({ discountThresholds: this.formArray });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.settings && changes.settings.currentValue) this.initForm();
  }

  onSubmit() {
    this.onSave.emit(this.form.value);
  }
}
