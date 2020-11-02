import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {BaseFilter} from "../../../../../core/base/base-filter";
import {IAppState} from "../../../../../store/state/app.state";
import {bulkVendorsListPath} from "../../../../../core/path";
import {selectBulkVendorsFilterState} from "../../../../../store/selectors/vendors/bulk-vendors.selector";
import {VendorsBulkActions} from "../../../../../store/actions/vendors/bulk-vendors.actions";
import {AdminBulkUsersRequest} from "../../../../../api/dto/AdminBulkUsersRequest.g";

@Component({
  selector: 'app-bulk-vendors-filter',
  templateUrl: './bulk-vendors-filter.component.html',
  styleUrls: ['./bulk-vendors-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulkVendorsFilterComponent extends BaseFilter {

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router) {
    super(fb, store, activatedRouter, router);
    this.selector = selectBulkVendorsFilterState;
    this.currentUrl = bulkVendorsListPath;
    this.initialFilter = {
      search: null
    };
  }

  dispatchFilter(filter: AdminBulkUsersRequest): void {
    this.store.dispatch(VendorsBulkActions.getList.started(filter));
  }
}
