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
import {AdminBulkUserFull} from "../../../../../api/dto/AdminBulkUserFull.g";
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {NotificationService} from "../../../../../core/services/notification.service";
import {Select} from "../../../../../core/interfaces/select";
import {bulkVendorsListPath} from "../../../../../core/path";
import {UpdateBulkVendorRequest} from "../../../../../core/interfaces/requests/update-bulk-vendor-request";

@Component({
  selector: 'app-bulk-vendors-form',
  templateUrl: './bulk-vendors-form.component.html',
  styleUrls: ['./bulk-vendors-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulkVendorsFormComponent extends BaseForm implements OnInit, OnChanges {
  @Input() vendor: AdminBulkUserFull;
  @Input() paymentMethods: Select[];

  @Output() submitForm = new EventEmitter<UpdateBulkVendorRequest>();

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private notificationService: NotificationService) {
    super();
    this.backPath = bulkVendorsListPath;
  }

  ngOnInit(): void {
    this.initForm({} as AdminBulkUserFull);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.vendor && changes.vendor.currentValue) {
      this.initForm(changes.vendor.currentValue);
    }
  }

  initForm(vendor: AdminBulkUserFull): void {
    this.form = this.fb.group({
      "id": [vendor.id],
      "guaranteeDays": [vendor.guaranteeDays, [Validators.required]],
      "surname": [vendor.surname, [Validators.required]],
      "name": [vendor.name, [Validators.required]],
      "company": [vendor.company, [Validators.required]],
      "taxId": [vendor.taxId, [Validators.required]],
      "ssn": [vendor.ssn],
      "w9": [vendor.w9],
      "email": [vendor.email, [Validators.required]],
      "telephone": [vendor.telephone, [Validators.required]],
      "city": [vendor.city, [Validators.required]],
      "street": [vendor.street, [Validators.required]],
      "state": [vendor.state, [Validators.required]],
      "zip": [vendor.zip, [Validators.required]],
      "commentText": [vendor.comment ? vendor.comment.text : ''],
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

  saveVendor(form: AdminBulkUserFull): void {
    const w9 = this.form.get('w9').value;
    form.w9 = w9 ? w9.name : w9;
    this.submitForm.emit({request: form, w9});
  }
}
