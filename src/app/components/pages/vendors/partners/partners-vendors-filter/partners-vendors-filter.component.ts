import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {BaseFilter} from "../../../../../core/base/base-filter";
import {IAppState} from "../../../../../store/state/app.state";
import {partnersVendorsListPath} from "../../../../../core/path";
import {AdminPartnerUsersRequest} from "../../../../../api/dto/AdminPartnerUsersRequest.g";
import {VendorsPartnersActions} from "../../../../../store/actions/vendors/partners-vendors.actions";
import {selectPartnersVendorsFilterState} from "../../../../../store/selectors/vendors/partners-vendors.selector";

@Component({
  selector: 'app-partners-vendors-filter',
  templateUrl: './partners-vendors-filter.component.html',
  styleUrls: ['./partners-vendors-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersVendorsFilterComponent extends BaseFilter {

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router) {
    super(fb, store, activatedRouter, router);
    this.selector = selectPartnersVendorsFilterState;
    this.currentUrl = partnersVendorsListPath;
    this.initialFilter = {
      search: null
    };
  }

  dispatchFilter(filter: AdminPartnerUsersRequest): void {
    this.store.dispatch(VendorsPartnersActions.getList.started(filter));
  }
}
