import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseSubscriber} from "../../../../core/base/base-subscriber";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {Observable} from "rxjs";
import {ContentLoading} from "../../../../core/interfaces/content-loading";
import {VendorsBulkActions} from "../../../../store/actions/vendors/bulk-vendors.actions";
import {AddBulkVendorRequest} from "../../../../core/interfaces/requests/add-bulk-vendor-request";
import {selectBulkVendorState} from "../../../../store/selectors/vendors/bulk-vendors.selector";
import {AdminBulkUserFull} from "../../../../api/dto/AdminBulkUserFull.g";

@Component({
  selector: 'app-bulk-vendors-create-container',
  templateUrl: './bulk-vendors-create-container.component.html',
  styleUrls: ['./bulk-vendors-create-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulkVendorsCreateContainerComponent extends BaseSubscriber {
  public vendor$: Observable<ContentLoading<AdminBulkUserFull>>;

  constructor(
    private store: Store<IAppState>) {
    super();
    this.vendor$ = this.store.select(selectBulkVendorState);
  }

  onSubmit(form: AddBulkVendorRequest): void {
    this.store.dispatch(VendorsBulkActions.add.started(form));
  }
}
