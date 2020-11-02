import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ButtonType} from "../../../../../core/enums/button-type.enum";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AdminCardsSetting} from "../../../../../api/dto/AdminCardsSetting.g";

@Component({
  selector: 'app-support-cards',
  templateUrl: './support-cards.component.html',
  styleUrls: ['./support-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportCardsComponent implements OnChanges {
  @Output() onSave = new EventEmitter<AdminCardsSetting>();
  @Input() settings: AdminCardsSetting;
  @Input() isLoading: boolean = false;
  buttonType: typeof ButtonType = ButtonType;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  initForm(): void {
    this.form = this.fb.group({
      maxTimeInCart: this.settings.maxTimeInCart,
      minTimeInCart: this.settings.minTimeInCart,
      maxCardsInCart: this.settings.maxCardsInCart,
      maxAmountInCart: this.settings.maxAmountInCart,
      minimumRestForResale: this.settings.minimumRestForResale,
      mobileWarrantyDays: this.settings.mobileWarrantyDays,
      partnerWarrantyDays: this.settings.partnerWarrantyDays,
      bulkSellerWarrantyDays: this.settings.bulkSellerWarrantyDays,
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.settings && changes.settings.currentValue) this.initForm();
  }

  onSubmit() {
    this.onSave.emit(this.form.value);
  }
}
