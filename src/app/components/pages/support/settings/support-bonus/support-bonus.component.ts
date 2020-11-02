import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ButtonType} from "../../../../../core/enums/button-type.enum";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminBonusSetting} from "../../../../../api/dto/AdminBonusSetting.g";

@Component({
  selector: 'app-support-bonus',
  templateUrl: './support-bonus.component.html',
  styleUrls: ['./support-bonus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportBonusComponent implements OnChanges {
  @Output() onSave = new EventEmitter<AdminBonusSetting>();
  @Input() settings: AdminBonusSetting;
  @Input() isLoading: boolean = false;
  buttonType: typeof ButtonType = ButtonType;
  form: FormGroup;
  formArray: FormArray;

  constructor(private fb: FormBuilder) {}

  initForm(): void {
    this.formArray = this.fb.array(this.settings.cashBackValues.map(item => [item, [Validators.required]]));
    this.form = this.fb.group({
      cashBackValues: this.formArray,
      maxBonusPayPercent: this.settings.maxBonusPayPercent,
      referralBonus: this.settings.referralBonus
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.settings && changes.settings.currentValue) this.initForm();
  }

  onSubmit() {
    this.onSave.emit(this.form.value);
  }
}
