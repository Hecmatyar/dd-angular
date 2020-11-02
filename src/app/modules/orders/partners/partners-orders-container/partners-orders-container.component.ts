import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseContainer} from "../../../../core/base/base-container";
import {Observable} from "rxjs";
import {IPartnerOrdersState} from "../../../../store/state/order/partners-orders.state";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {AccessLevel} from "../../../../api/dto/AccessLevel.g";
import {selectPartnerOrdersState} from "../../../../store/selectors/order/partners-orders.selector";

@Component({
  selector: 'app-partners-orders-container',
  templateUrl: './partners-orders-container.component.html',
  styleUrls: ['./partners-orders-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersOrdersContainerComponent extends BaseContainer {
  partnerOrderState$: Observable<IPartnerOrdersState>;
  detailCredential$: Observable<boolean>;
  statusCredential$: Observable<boolean>;
  createCredential$: Observable<boolean>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.partnerOrderState$ = this.store.select(selectPartnerOrdersState);
    [this.detailCredential$, this.statusCredential$, this.createCredential$] = this.getCredentials(
      AccessLevel.PartnersOrdersDetailsView,
      AccessLevel.PartnersOrdersStatusChange,
      AccessLevel.PartnersOrdersOrderCreate);
  }
}
