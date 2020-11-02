import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseContainer} from "../../../../core/base/base-container";
import {Observable} from "rxjs";
import {IBulkVendorsState} from "../../../../store/state/vendors/bulk-vendors.state";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {selectBulkVendorsState} from "../../../../store/selectors/vendors/bulk-vendors.selector";
import {AccessLevel} from "../../../../api/dto/AccessLevel.g";

@Component({
  selector: 'app-bulk-vendors-container',
  templateUrl: './bulk-vendors-container.component.html',
  styleUrls: ['./bulk-vendors-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulkVendorsContainerComponent extends BaseContainer {
  bulkVendorsState$: Observable<IBulkVendorsState>;
  detailCredential$: Observable<boolean>;
  editCredential$: Observable<boolean>;
  createCredential$: Observable<boolean>;
  banCredential$: Observable<boolean>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.bulkVendorsState$ = this.store.select(selectBulkVendorsState);
    [this.detailCredential$,
      this.editCredential$,
      this.createCredential$,
      this.banCredential$] = this.getCredentials(
      AccessLevel.BulkSalesVendorsDetails,
      AccessLevel.BulkSalesVendorsEdit,
      AccessLevel.BulkSalesVendorsCreate,
      AccessLevel.BulkSalesVendorsBlocking);
  }
}
