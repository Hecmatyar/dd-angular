import {ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';
import {BaseForm} from "../../../../../../core/base/base-form";
import {IHorizontalMenuItem} from "../../../../../../core/interfaces/gorizontal-menu-item";
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../../store/state/app.state";
import {NotificationService} from "../../../../../../core/services/notification.service";
import {transactionsCreateRoutes} from "../../../../../../core/models/transactions-create-routes";
import {transactionsOrderListPath} from "../../../../../../core/path";
import {AdminTransactionType} from "../../../../../../api/dto/AdminTransactionType.g";
import {TransactionsActions} from "../../../../../../store/actions/transactions.actions";
import {AddPartnersTransactionRequest} from "../../../../../../api/dto/AddPartnersTransactionRequest.g";
import {AdminDebtCard} from "../../../../../../api/dto/AdminDebtCard.g";
import {TransactionsOrderBuilderComponent} from "../../../../../common/order-builder/transactions-order-builder/transactions-order-builder.component";
import {Subject, Subscription} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {AdminTransactionApiRequest} from "../../../../../../api/AdminTransactionApiRequest.g";

@Component({
  selector: 'app-transactions-form-partners',
  templateUrl: './transactions-form-partners.component.html',
  styleUrls: ['./transactions-form-partners.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsFormPartnersComponent extends BaseForm implements OnInit {
  @Input() isCardLoading: boolean;
  @Input() cards: AdminDebtCard[];

  @ViewChild('orderBuilder') orderBuilder: TransactionsOrderBuilderComponent;

  menuItems: IHorizontalMenuItem[];
  includeDebt: boolean;
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

  get totalPaid(): number {
    return this.includeDebt
      ? ((this.form.get("value").value || 0) - (this.orderBuilder ? this.orderBuilder.totalPaidUs : 0)) || 0
      : 0;
  }

  ngOnInit(): void {
    this.initForm();

    this.subscriptions.push(this.orderNumber.pipe(debounceTime(1000)).subscribe(async () => {
      await this.updateTransactionValue();
    }));

    this.form.get("vendorId").valueChanges.subscribe(async value => {
      if (value) {
        this.store.dispatch(TransactionsActions.getDebtCards.started({vendorId: value}));
        await this.updateTransactionValue();
      }
    });

    this.form.get("orderNumber").valueChanges.subscribe(value => {
      this.orderNumber.next(value);
    });
  }

  initForm(): void {
    this.form = this.fb.group({
      "vendorId": ["", [Validators.required, Validators.pattern(".{3,}")]],
      "orderNumber": ["", [Validators.required, Validators.pattern(".{3,}")]],
      "transactionType": [AdminTransactionType.PayOut, [Validators.required]],
      "value": ["", [Validators.required]],
      "debtCardIds": [[]],
    });
  }

  applyForm(): void {
    this.markForm(this.form);
    if (this.form.invalid) {
      this.notificationService.showErrorMessage("The form is not valid");

      return;
    }

    this.confirmTransaction({...this.form.value, debtCardIds: this.orderBuilder.selectedCards});
  }

  async updateTransactionValue(): Promise<void> {
    const vendorId = this.form.get("vendorId").value;
    const orderNumber = this.form.get("orderNumber").value;
    const cardsId = this.cards ? this.cards.map(card => card.id) : [];
    if (orderNumber && vendorId) {
      try {
        const value = await this.apiService.getTransactionAmountForPartners(vendorId, orderNumber, cardsId);
        this.form.patchValue({value: value});
      } catch (e) {
        // this.notificationService.showErrorMessage(e.message);
      }
    }
  }

  confirmTransaction(form: AddPartnersTransactionRequest): void {
    this.store.dispatch(TransactionsActions.addPartner.started(form));
  }
}
