import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";
import {IAppState} from "../../../../store/state/app.state";
import {selectOrdersCreateBulkSellState} from "../../../../store/selectors/order/orders.selector";
import {AdminBulkOrder} from "../../../../api/dto/AdminBulkOrder.g";
import {BaseSubscriber} from "../../../../core/base/base-subscriber";
import {OrdersActions} from "../../../../store/actions/order/order.actions";
import {ContentLoading} from "../../../../core/interfaces/content-loading";
import {selectPaymentSettingsState} from "../../../../store/selectors/settings.selector";
import {SettingsActions} from "../../../../store/actions/settings.actions";
import {Select} from "../../../../core/interfaces/select";

@Component({
  selector: 'app-bulk-orders-create-container',
  templateUrl: './bulk-orders-create-container.component.html',
  styleUrls: ['./bulk-orders-create-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulkOrdersCreateContainerComponent extends BaseSubscriber implements OnInit {
  public order$: Observable<ContentLoading<AdminBulkOrder>>;
  public settingsPayment$: Observable<Select[]>;

  constructor(
    private store: Store<IAppState>,
    private activeRouter: ActivatedRoute) {
    super();
    this.order$ = this.store.select(selectOrdersCreateBulkSellState);
    this.settingsPayment$ = this.store.select(selectPaymentSettingsState);
  }

  ngOnInit(): void {
    this.store.dispatch(SettingsActions.getPayment.started());

    this.subscriptions.push(this.activeRouter.params.pipe(take(1)).subscribe(params => {
      this.store.dispatch(OrdersActions.getDraftBulkOrder.started(params.id));
    }));
  }
}
