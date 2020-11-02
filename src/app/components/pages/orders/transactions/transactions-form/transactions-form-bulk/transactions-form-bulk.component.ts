import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {BaseForm} from "../../../../../../core/base/base-form";
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../../store/state/app.state";
import {NotificationService} from "../../../../../../core/services/notification.service";
import {transactionsOrderListPath} from "../../../../../../core/path";
import {TransactionsActions} from "../../../../../../store/actions/transactions.actions";
import {AddBulkTransactionRequest} from "../../../../../../api/dto/AddBulkTransactionRequest.g";
import {AdminTransactionType} from "../../../../../../api/dto/AdminTransactionType.g";
import {IHorizontalMenuItem} from "../../../../../../core/interfaces/gorizontal-menu-item";
import {transactionsCreateRoutes} from "../../../../../../core/models/transactions-create-routes";
import {AdminTransactionApiRequest} from "../../../../../../api/AdminTransactionApiRequest.g";
import {Subject, Subscription} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-transactions-form-bulk',
  templateUrl: './transactions-form-bulk.component.html',
  styleUrls: ['./transactions-form-bulk.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsFormBulkComponent extends BaseForm implements OnInit, OnDestroy {
  menuItems: IHorizontalMenuItem[];
  subscriptions: Subscription[];
  private orderNumber: Subject<number> = new Subject<number>();

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private notificationService: NotificationService,
    private apiService: AdminTransactionApiRequest
  ) {
    super();
    this.menuItems = transactionsCreateRoutes;
    this.backPath = transactionsOrderListPath;
    this.subscriptions = [];
  }

  ngOnInit(): void {
    this.initForm();

    this.subscriptions.push(this.orderNumber.pipe(debounceTime(1000)).subscribe(async () => {
      await this.updateTransactionValue();
    }));

    this.form.get("orderNumber").valueChanges.subscribe(value => {
      this.orderNumber.next(value);
    });

    this.form.get("vendorId").valueChanges.subscribe(async () => {
      await this.updateTransactionValue();
    });
  }

  initForm(): void {
    this.form = this.fb.group({
      "vendorId": ["", [Validators.pattern(".{3,}")]],
      "orderNumber": ["", [Validators.required, Validators.pattern(".{3,}")]],
      "transactionType": [AdminTransactionType.Payment, [Validators.required]],
      "value": [""],
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

  confirmTransaction(form: AddBulkTransactionRequest): void {
    this.store.dispatch(TransactionsActions.addBulk.started(form));
  }

  async updateTransactionValue(): Promise<void> {
    const vendorId = this.form.get("vendorId").value;
    const orderNumber = this.form.get("orderNumber").value;
    if (orderNumber && vendorId) {
      try {
        const value = await this.apiService.getTransactionAmountForBulkSales(vendorId, orderNumber);
        this.form.patchValue({value: value});
      } catch (e) {
        // this.notificationService.showErrorMessage(e.message);
      }
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
