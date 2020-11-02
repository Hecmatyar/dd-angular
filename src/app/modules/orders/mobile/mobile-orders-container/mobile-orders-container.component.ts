import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {IMobileOrdersState} from "../../../../store/state/order/mobile-orders.state";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {BaseContainer} from "../../../../core/base/base-container";
import {AccessLevel} from "../../../../api/dto/AccessLevel.g";
import {selectMobileOrdersState} from "../../../../store/selectors/order/mobile-orders.selector";

@Component({
  selector: 'app-mobile-orders-container',
  templateUrl: './mobile-orders-container.component.html',
  styleUrls: ['./mobile-orders-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileOrdersContainerComponent extends BaseContainer {
  mobileOrderState$: Observable<IMobileOrdersState>;
  detailCredential$: Observable<boolean>;
  statusCredential$: Observable<boolean>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.mobileOrderState$ = this.store.select(selectMobileOrdersState);
    [this.detailCredential$, this.statusCredential$] = this.getCredentials(
      AccessLevel.UserOrdersDetailsView,
      AccessLevel.UserOrdersDetailsView);
  }
}
