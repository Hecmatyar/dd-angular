import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {BaseForm} from "../../../../../core/base/base-form";
import {AdminBulkOrder} from "../../../../../api/dto/AdminBulkOrder.g";
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {NotificationService} from "../../../../../core/services/notification.service";
import {OrdersActions} from "../../../../../store/actions/order/order.actions";
import {AdminOrderApiRequest} from "../../../../../api/AdminOrderApiRequest.g";
import {BulkOrderBuilderComponent} from "../../../../common/order-builder/bulk-order-builder/bulk-order-builder.component";
import {Select} from "../../../../../core/interfaces/select";
import {AdminConfirmBulkOrderRequest} from "../../../../../api/dto/AdminConfirmBulkOrderRequest.g";

@Component({
  selector: 'app-bulk-orders-form',
  templateUrl: './bulk-orders-form.component.html',
  styleUrls: ['./bulk-orders-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulkOrdersFormComponent extends BaseForm implements OnInit, OnChanges {
  @Input() order: AdminBulkOrder;
  @Input() paymentItems: Select[];

  @ViewChild('orderBuilder') orderBuilder: BulkOrderBuilderComponent;

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private notificationService: NotificationService,
    private apiRequest: AdminOrderApiRequest) {
    super();
  }

  ngOnInit(): void {
    this.initForm({} as AdminBulkOrder);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.order && changes.order.currentValue) {
      this.initForm(changes.order.currentValue);
    }
  }

  initForm(order: AdminBulkOrder): void {
    this.form = this.fb.group({
      "vendor": [order.vendorName],
      "warranty": [order.vendorWarranty],
      "externalId": ["", [Validators.required]],
      "paymentMethodId": ["", [Validators.required]],
    });
  }

  applyForm(): void {
    this.markForm(this.form);
    if (this.form.invalid || !this.isBulkValid()) {
      this.notificationService.showErrorMessage("The form is not valid");

      return;
    }

    this.confirmOrder({...this.form.value, cardIds: this.orderBuilder.selectedCards});
  }

  isBulkValid(): boolean {
    return !!this.orderBuilder.totalCards;
  }

  confirmOrder(form: AdminConfirmBulkOrderRequest): void {
    this.store.dispatch(OrdersActions.confirmBulkOrder.started(form));
  }

  revertOrder(): void {
    this.store.dispatch(OrdersActions.revertBulkOrder.started(this.order.id));
  }

  async loadCsv(filter: string[]): Promise<Blob> {
    return await this.apiRequest.getCsvForBulkOrder(filter);
  }
}
