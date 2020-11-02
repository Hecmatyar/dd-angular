import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BaseTable} from "../../../../../core/base/base-table";
import {IBulkOrdersState, initialBulkOrdersState} from "../../../../../store/state/order/bulk-orders.state";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {Router} from "@angular/router";
import {selectBulkOrdersFilterState} from "../../../../../store/selectors/order/bulk-orders.selector";
import {OrderStatus} from "../../../../../api/dto/OrderStatus.g";
import {BulkOrdersActions} from "../../../../../store/actions/order/bulk-orders.actions";
import {SearchAdminBulkOrderRequest} from "../../../../../api/dto/SearchAdminBulkOrderRequest.g";
import {bulkVendorsListPath} from "../../../../../core/path";

@Component({
  selector: 'app-bulk-orders-table',
  templateUrl: './bulk-orders-table.component.html',
  styleUrls: ['./bulk-orders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulkOrdersTableComponent extends BaseTable {
  @Input() state: IBulkOrdersState;
  @Input() detailCredential: boolean;
  @Input() statusCredential: boolean;

  orderStatus: typeof OrderStatus;

  constructor(
    protected store: Store<IAppState>,
    private router: Router
  ) {
    super(store);
    this.state = initialBulkOrdersState;
    this.selector = selectBulkOrdersFilterState;
    this.orderStatus = OrderStatus;
  }

  dispatcher(filter: SearchAdminBulkOrderRequest): void {
    this.store.dispatch(BulkOrdersActions.getList.started(filter));
  }

  updateStatus(newStatus: string, id: string): void {
    this.store.dispatch(BulkOrdersActions.setStatus.started({orderId: id, status: OrderStatus[newStatus]}));
  }

  async onNavigate(name: string): Promise<void> {
    await this.router.navigate([bulkVendorsListPath], {
      queryParams: {search: name}
    });
  }
}
