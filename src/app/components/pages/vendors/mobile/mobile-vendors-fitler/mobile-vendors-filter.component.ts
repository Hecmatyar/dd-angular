import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseFilter} from "../../../../../core/base/base-filter";
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {userVendorsListPath} from "../../../../../core/path";
import {AdminMobileUsersRequest} from "../../../../../api/dto/AdminMobileUsersRequest.g";
import {VendorsMobileActions} from "../../../../../store/actions/vendors/mobile-vendors.actions";
import {selectMobileVendorsFilterState} from "../../../../../store/selectors/vendors/mobile-vendors.selector";

@Component({
  selector: 'app-mobile-vendors-filter',
  templateUrl: './mobile-vendors-filter.component.html',
  styleUrls: ['./mobile-vendors-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileVendorsFilterComponent extends BaseFilter {

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router) {
    super(fb, store, activatedRouter, router);
    this.selector = selectMobileVendorsFilterState;
    this.currentUrl = userVendorsListPath;
    this.initialFilter = {
      search: null
    };
  }

  dispatchFilter(filter: AdminMobileUsersRequest): void {
    this.store.dispatch(VendorsMobileActions.getList.started(filter));
  }
}
