import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {AccessLevel} from "../../../../api/dto/AccessLevel.g";
import {selectBulkOrdersState} from "../../../../store/selectors/order/bulk-orders.selector";
import {BaseContainer} from "../../../../core/base/base-container";
import {IBulkOrdersState} from "../../../../store/state/order/bulk-orders.state";

@Component({
  selector: 'app-bulk-orders-container',
  templateUrl: './bulk-orders-container.component.html',
  styleUrls: ['./bulk-orders-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulkOrdersContainerComponent extends BaseContainer {
  bulkOrderState$: Observable<IBulkOrdersState>;
  detailCredential$: Observable<boolean>;
  statusCredential$: Observable<boolean>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.bulkOrderState$ = this.store.select(selectBulkOrdersState);
    [this.detailCredential$, this.statusCredential$] = this.getCredentials(
      AccessLevel.BulkOrdersDetailsView,
      AccessLevel.BulkOrdersStatusChange);
  }
}
