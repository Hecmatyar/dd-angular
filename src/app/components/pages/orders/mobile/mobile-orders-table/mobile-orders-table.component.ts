import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BaseTable} from "../../../../../core/base/base-table";
import {IMobileOrdersState, initialMobileOrdersState} from "../../../../../store/state/order/mobile-orders.state";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {Router} from "@angular/router";
import {selectMobileOrdersFilterState} from "../../../../../store/selectors/order/mobile-orders.selector";
import {MobileOrdersActions} from "../../../../../store/actions/order/mobile-orders.actions";
import {OrderStatus} from "../../../../../api/dto/OrderStatus.g";
import {SearchAdminMobileOrderRequest} from "../../../../../api/dto/SearchAdminMobileOrderRequest.g";
import {userVendorsListPath} from "../../../../../core/path";

@Component({
  selector: 'app-mobile-orders-table',
  templateUrl: './mobile-orders-table.component.html',
  styleUrls: ['./mobile-orders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileOrdersTableComponent extends BaseTable {
  @Input() state: IMobileOrdersState;
  @Input() detailCredential: boolean;
  @Input() statusCredential: boolean;

  constructor(
    protected store: Store<IAppState>,
    private router: Router
  ) {
    super(store);
    this.state = initialMobileOrdersState;
    this.selector = selectMobileOrdersFilterState;
  }

  dispatcher(filter: SearchAdminMobileOrderRequest): void {
    this.store.dispatch(MobileOrdersActions.getList.started(filter));
  }

  updateStatus(newStatus: string, id: string): void {
    this.store.dispatch(MobileOrdersActions.setStatus.started({orderId: id, status: OrderStatus[newStatus]}));
  }

  async onNavigate(name: string): Promise<void> {
    await this.router.navigate([userVendorsListPath], {
      queryParams: {search: name}
    });
  }
}
