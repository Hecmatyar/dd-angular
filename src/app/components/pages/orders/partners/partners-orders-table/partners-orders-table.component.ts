import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BaseTable} from "../../../../../core/base/base-table";
import {initialPartnerOrdersState, IPartnerOrdersState} from "../../../../../store/state/order/partners-orders.state";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {Router} from "@angular/router";
import {selectPartnerOrdersFilterState} from "../../../../../store/selectors/order/partners-orders.selector";
import {OrderStatus} from "../../../../../api/dto/OrderStatus.g";
import {PartnerOrdersActions} from "../../../../../store/actions/order/partners-orders.actions";
import {SearchAdminPartnerOrderRequest} from "../../../../../api/dto/SearchAdminPartnerOrderRequest.g";
import {partnersVendorsListPath} from "../../../../../core/path";

@Component({
  selector: 'app-partners-orders-table',
  templateUrl: './partners-orders-table.component.html',
  styleUrls: ['./partners-orders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersOrdersTableComponent extends BaseTable {
  @Input() state: IPartnerOrdersState;
  @Input() detailCredential: boolean;
  @Input() statusCredential: boolean;

  constructor(
    protected store: Store<IAppState>,
    private router: Router
  ) {
    super(store);
    this.state = initialPartnerOrdersState;
    this.selector = selectPartnerOrdersFilterState;
  }

  dispatcher(filter: SearchAdminPartnerOrderRequest): void {
    this.store.dispatch(PartnerOrdersActions.getList.started(filter));
  }

  updateStatus(newStatus: string, id: string): void {
    this.store.dispatch(PartnerOrdersActions.setStatus.started({orderId: id, status: OrderStatus[newStatus]}));
  }

  async onNavigate(name: string): Promise<void> {
    await this.router.navigate([partnersVendorsListPath], {
      queryParams: {search: name}
    });
  }
}
