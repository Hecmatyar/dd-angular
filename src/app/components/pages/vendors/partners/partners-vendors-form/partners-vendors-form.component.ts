import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {BaseForm} from "../../../../../core/base/base-form";
import {AdminPartnerUserFull} from "../../../../../api/dto/AdminPartnerUserFull.g";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {NotificationService} from "../../../../../core/services/notification.service";
import {partnersVendorsListPath} from "../../../../../core/path";
import {Select} from "../../../../../core/interfaces/select";
import {UserType} from "../../../../../api/dto/UserType.g";
import {PaymentMethodsBuilderComponent} from "../../../../common/payment-methods-builder/payment-methods-builder.component";
import {PaymentType} from "../../../../../api/dto/PaymentType.g";
import {PaymentMethod} from "../../../../../api/dto/PaymentMethod.g";
import {UpdatePartnerVendorRequest} from "../../../../../core/interfaces/requests/update-partner-vendor-request";

@Component({
  selector: 'app-partners-vendors-form',
  templateUrl: './partners-vendors-form.component.html',
  styleUrls: ['./partners-vendors-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersVendorsFormComponent extends BaseForm implements OnInit, OnChanges {
  @Input() vendor: AdminPartnerUserFull;
  @Input() partnersType: Select[];

  @Output() submitForm = new EventEmitter<UpdatePartnerVendorRequest>();

  @ViewChild('paymentMethodsBuilder') paymentMethodsBuilder: PaymentMethodsBuilderComponent;

  withdrawItems: Select[];
  emptyMethod: PaymentMethod;

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private notificationService: NotificationService) {
    super();
    this.backPath = partnersVendorsListPath;
    this.withdrawItems = [{
      key: PaymentType.Bank,
      value: PaymentType.Bank
    }, {
      key: PaymentType.Check,
      value: PaymentType.Check
    }];
    this.emptyMethod = {
      name: null,
      type: null,
      expirationDate: null,
      cardNumber: null,
      accountNumber: null,
      routingNumber: null,
    } as PaymentMethod;
  }

  get selectPaymentMethod(): FormArray {
    return this.form.get("withdrawMethods") as FormArray;
  }

  ngOnInit(): void {
    this.initForm({withdrawMethods: []} as AdminPartnerUserFull);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.vendor && changes.vendor.currentValue) {
      this.initForm(changes.vendor.currentValue);
    }
  }

  initForm(vendor: AdminPartnerUserFull): void {
    let paymentMethods = vendor.withdrawMethods.map(method => this.getWithdrawMethod(method));
    !paymentMethods.length && (paymentMethods = [this.getWithdrawMethod(this.emptyMethod)]);

    this.form = this.fb.group({
      "id": [vendor.id],
      "surname": [vendor.surname, [Validators.required]],
      "name": [vendor.name, [Validators.required]],
      "company": [vendor.company],
      "taxId": [vendor.taxId],
      "ssn": [vendor.ssn],
      "w9": [vendor.w9],
      "email": [vendor.email, [Validators.required]],
      "telephone": [vendor.telephone, [Validators.required]],
      "city": [vendor.city, [Validators.required]],
      "street": [vendor.street, [Validators.required]],
      "state": [vendor.state, [Validators.required]],
      "zip": [vendor.zip, [Validators.required]],
      "commentText": [vendor.comment ? vendor.comment.text : ''],
      "type": [UserType.Personal, [Validators.required]],
      "idType": ["", [Validators.required]],
      "personalId": [vendor.personalId, [Validators.required]],
      "lastActivityUtc": [vendor.lastActivityUtc],
      "withdrawMethods": this.fb.array(paymentMethods),
    });
  }

  getWithdrawMethod(method: PaymentMethod): FormGroup {
    return this.fb.group({
      type: method.type,
      name: method.name,
      cardNumber: method.cardNumber,
      accountNumber: method.accountNumber,
      routingNumber: method.routingNumber,
    });
  }

  applyForm(): void {
    this.markForm(this.form);
    if (this.form.invalid) {
      this.notificationService.showErrorMessage("The form is not valid");

      return;
    }

    this.saveVendor({...this.form.value, comment: {text: this.form.value.commentText}});
  }

  saveVendor(form: AdminPartnerUserFull): void {
    const w9 = this.form.get('w9').value;
    form.w9 = w9 ? w9.name : w9;
    this.submitForm.emit({request: form, w9});
  }
}
