import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseFilter} from "../../../../../core/base/base-filter";
import {Select} from "../../../../../core/interfaces/select";
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {selectMobileOrdersFilterState} from "../../../../../store/selectors/order/mobile-orders.selector";
import {userOrderListPath} from "../../../../../core/path";
import {OrderStatus} from "../../../../../api/dto/OrderStatus.g";
import {MobileOrdersActions} from "../../../../../store/actions/order/mobile-orders.actions";
import {SearchAdminMobileOrderRequest} from "../../../../../api/dto/SearchAdminMobileOrderRequest.g";

@Component({
  selector: 'app-mobile-orders-filter',
  templateUrl: './mobile-orders-filter.component.html',
  styleUrls: ['./mobile-orders-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileOrdersFilterComponent extends BaseFilter {
  orderStatusItems: Select[];

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router) {
    super(fb, store, activatedRouter, router);
    this.selector = selectMobileOrdersFilterState;
    this.currentUrl = userOrderListPath;

    this.initialFilter = {
      status: null,
      number: null,
      buyerId: null,
      vendorId: null,
      dateFrom: null,
      dateTo: null,
    };

    this.orderStatusItems = BaseFilter.getSelectableItems<typeof OrderStatus>(OrderStatus);
  }

  dispatchFilter(filter: SearchAdminMobileOrderRequest): void {
    this.store.dispatch(MobileOrdersActions.getList.started(filter));
  }
}
