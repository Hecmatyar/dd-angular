import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IHorizontalMenuItem} from "../../../../../../core/interfaces/gorizontal-menu-item";
import {transactionsCreateRoutes} from "../../../../../../core/models/transactions-create-routes";
import {AdminAllowedTransactionTypesDto} from "../../../../../../api/dto/AdminAllowedTransactionTypesDto.g";
import {BaseForm} from "../../../../../../core/base/base-form";
import {transactionsOrderListPath} from "../../../../../../core/path";
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../../store/state/app.state";
import {NotificationService} from "../../../../../../core/services/notification.service";
import {TransactionsActions} from "../../../../../../store/actions/transactions.actions";
import {AddMobileTransactionRequest} from "../../../../../../api/dto/AddMobileTransactionRequest.g";
import {Select} from "../../../../../../core/interfaces/select";

@Component({
  selector: 'app-transactions-form-user',
  templateUrl: './transactions-form-user.component.html',
  styleUrls: ['./transactions-form-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsFormUserComponent extends BaseForm implements OnInit {
  @Input() transactionTypes: AdminAllowedTransactionTypesDto;

  menuItems: IHorizontalMenuItem[];
  createNewOrder: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private notificationService: NotificationService,
  ) {
    super();
    this.menuItems = transactionsCreateRoutes;
    this.backPath = transactionsOrderListPath;
    this.createNewOrder = false;
  }

  get selectItems(): Select[] {
    return this.transactionTypes
      ? this.transactionTypes.mobile.map(item => ({key: item, value: item}))
      : [];
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      "telephone": ["", [Validators.required, Validators.pattern("^[+][0-9]{11}")]],
      "orderNumber": ["", [Validators.pattern(".{3,}")]],
      "value": ["", [Validators.required, Validators.pattern(".{3,}")]],
      "transactionType": ["", [Validators.required, Validators.pattern(".{3,}")]],
    });
  }

  applyForm(): void {
    this.markForm(this.form);
    if (this.form.invalid) {
      this.notificationService.showErrorMessage("The form is not valid");

      return;
    }

    this.confirmTransaction(this.form.value);
  }

  confirmTransaction(form: AddMobileTransactionRequest): void {
    this.store.dispatch(TransactionsActions.addMobile.started(form));
  }

  onClearOrder(value: boolean): void {
    if (value) {
      this.form.patchValue({"orderNumber": ""});
    }
  }
}
