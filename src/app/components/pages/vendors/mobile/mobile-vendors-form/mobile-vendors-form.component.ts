import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {BaseForm} from "../../../../../core/base/base-form";
import {AdminMobileUserFull} from "../../../../../api/dto/AdminMobileUserFull.g";
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {NotificationService} from "../../../../../core/services/notification.service";
import {userVendorsListPath} from "../../../../../core/path";
import {UserType} from "../../../../../api/dto/UserType.g";
import {VendorsMobileActions} from "../../../../../store/actions/vendors/mobile-vendors.actions";
import {PaymentType} from "../../../../../api/dto/PaymentType.g";
import {NzModalService} from "ng-zorro-antd";
import {UpdateMobileVendorRequest} from "../../../../../core/interfaces/requests/update-mobile-vendor-request";
import {Select} from "../../../../../core/interfaces/select";

@Component({
  selector: 'app-mobile-vendors-form',
  templateUrl: './mobile-vendors-form.component.html',
  styleUrls: ['./mobile-vendors-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileVendorsFormComponent extends BaseForm implements OnInit, OnChanges {
  @Input() vendor: AdminMobileUserFull;
  @Input() paymentItems: Select[];
  @Input() isEdit: boolean;

  @Output() submitForm = new EventEmitter<UpdateMobileVendorRequest>();

  userType: typeof UserType;
  paymentType: typeof PaymentType;

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private notificationService: NotificationService,
    private modalService: NzModalService
  ) {
    super();
    this.backPath = userVendorsListPath;
    this.isEdit = true;
    this.userType = UserType;
    this.paymentType = PaymentType;
  }

  ngOnInit(): void {
    this.initForm({} as AdminMobileUserFull);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.vendor && changes.vendor.currentValue) {
      this.initForm(changes.vendor.currentValue);
    }
  }

  initForm(vendor: AdminMobileUserFull): void {
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
      "type": [vendor.type, [Validators.required]],
      "idType": [vendor.idType, [Validators.required]],
      "personalId": [vendor.personalId, [Validators.required]],
      "lastActivityUtc": [vendor.lastActivityUtc],
    });
  }

  applyForm(): void {
    this.markForm(this.form);
    if (this.form.invalid) {
      this.notificationService.showErrorMessage("The form is not valid");

      return;
    }

    this.saveVendor({
      ...this.form.value,
      comment: {text: this.form.value.commentText},
      paymentMethods: this.vendor.paymentMethods
    });
  }

  saveVendor(form: AdminMobileUserFull): void {
    const w9 = this.form.get('w9').value;
    form.w9 = w9 ? w9.name : w9;
    this.submitForm.emit({request: form, w9});
  }

  deletePaymentMethod(id: string): void {
    this.modalService.confirm({
      nzTitle: 'Are you sure?',
      nzContent: 'If you delete payment method, he will be lost.',
      nzOkText: 'Accept',
      nzOnOk: async (): Promise<void> => this.store.dispatch(VendorsMobileActions.deletePaymentMethod.started(id))
    });
  }
}
