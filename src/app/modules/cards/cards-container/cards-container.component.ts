import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";
import {Observable} from "rxjs";
import {selectCardsState} from "../../../store/selectors/cards.selector";
import {ICardsState} from "../../../store/state/cards.state";
import {BaseContainer} from "../../../core/base/base-container";
import {selectVendorsNotBannedListState} from "../../../store/selectors/vendors/vendors.selector";
import {VendorsActions} from "../../../store/actions/vendors/vendors.actions";
import {selectOrdersCreateBulkSellState} from "../../../store/selectors/order/orders.selector";
import {EntityDto} from "../../../api/dto/EntityDto.g";
import {AccessLevel} from "../../../api/dto/AccessLevel.g";
import {ContentLoading} from "../../../core/interfaces/content-loading";
import {AdminBulkOrder} from "../../../api/dto/AdminBulkOrder.g";

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsContainerComponent extends BaseContainer implements OnInit {
  cardState$: Observable<ICardsState>;
  vendorNotBannedState$: Observable<EntityDto[]>;
  ordersCreateBulkState$: Observable<ContentLoading<AdminBulkOrder>>;
  detailCredential$: Observable<boolean>;
  statusCredential$: Observable<boolean>;
  createOrderCredential$: Observable<boolean>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.cardState$ = this.store.select(selectCardsState);
    this.vendorNotBannedState$ = this.store.select(selectVendorsNotBannedListState);
    this.ordersCreateBulkState$ = this.store.select(selectOrdersCreateBulkSellState);
    [this.detailCredential$, this.statusCredential$, this.createOrderCredential$] = this.getCredentials(
      AccessLevel.CardDetailsView,
      AccessLevel.CardStatusChange,
      AccessLevel.CardBulkOrderCreate);
  }

  ngOnInit(): void {
    this.store.dispatch(VendorsActions.getNotBannedVendorList.started({}));
  }
}
