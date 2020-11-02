import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseFilter} from "../../../../../core/base/base-filter";
import {Select} from "../../../../../core/interfaces/select";
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {partnersOrderListPath} from "../../../../../core/path";
import {OrderStatus} from "../../../../../api/dto/OrderStatus.g";
import {PartnerOrdersActions} from "../../../../../store/actions/order/partners-orders.actions";
import {SearchAdminPartnerOrderRequest} from "../../../../../api/dto/SearchAdminPartnerOrderRequest.g";
import {selectPartnerOrdersFilterState} from "../../../../../store/selectors/order/partners-orders.selector";

@Component({
  selector: 'app-partners-orders-filter',
  templateUrl: './partners-orders-filter.component.html',
  styleUrls: ['./partners-orders-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersOrdersFilterComponent extends BaseFilter {
  orderStatusItems: Select[];

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router
  ) {
    super(fb, store, activatedRouter, router);
    this.selector = selectPartnerOrdersFilterState;
    this.currentUrl = partnersOrderListPath;

    this.initialFilter = {
      status: null,
      number: null,
      vendorId: null,
      dateFrom: null,
      dateTo: null,
    };

    this.orderStatusItems = BaseFilter.getSelectableItems<typeof OrderStatus>(OrderStatus);
  }

  dispatchFilter(filter: SearchAdminPartnerOrderRequest): void {
    this.store.dispatch(PartnerOrdersActions.getList.started(filter));
  }
}
