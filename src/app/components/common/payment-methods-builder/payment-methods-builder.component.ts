import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SelectGroupComponent} from "../../ui/select-group/select-group.component";
import {PaymentType} from "../../../api/dto/PaymentType.g";

@Component({
  selector: 'app-payment-methods-builder',
  templateUrl: './payment-methods-builder.component.html',
  styleUrls: ['./payment-methods-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentMethodsBuilderComponent extends SelectGroupComponent {
  paymentType: typeof PaymentType;

  constructor(protected fb: FormBuilder, protected detectRef: ChangeDetectorRef) {
    super(fb, detectRef);
    this.paymentType = PaymentType;
  }

  canAddNew(): boolean {
    return this.selectArray.controls.every(item => !!item.value.type);
  }
}
