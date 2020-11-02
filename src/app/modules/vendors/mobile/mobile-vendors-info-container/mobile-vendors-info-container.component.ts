import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BaseSubscriber} from "../../../../core/base/base-subscriber";
import {Observable} from "rxjs";
import {ContentLoading} from "../../../../core/interfaces/content-loading";
import {AdminMobileUserFull} from "../../../../api/dto/AdminMobileUserFull.g";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {ActivatedRoute} from "@angular/router";
import {
  selectMobileVendorContentState,
  selectMobileVendorState
} from "../../../../store/selectors/vendors/mobile-vendors.selector";
import {selectPaymentSettingsState} from "../../../../store/selectors/settings.selector";
import {SettingsActions} from "../../../../store/actions/settings.actions";
import {take} from "rxjs/operators";
import {VendorsMobileActions} from "../../../../store/actions/vendors/mobile-vendors.actions";
import {Select} from "../../../../core/interfaces/select";

@Component({
  selector: 'app-mobile-vendors-info-container',
  templateUrl: './mobile-vendors-info-container.component.html',
  styleUrls: ['./mobile-vendors-info-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileVendorsInfoContainerComponent extends BaseSubscriber implements OnInit {
  public vendor$: Observable<ContentLoading<AdminMobileUserFull>>;
  public vendorContent$: Observable<AdminMobileUserFull>;
  public settingsPayment$: Observable<Select[]>;

  constructor(
    private store: Store<IAppState>,
    private activeRouter: ActivatedRoute) {
    super();
    this.vendor$ = this.store.select(selectMobileVendorState);
    this.vendorContent$ = this.store.select(selectMobileVendorContentState);
    this.settingsPayment$ = this.store.select(selectPaymentSettingsState);
  }

  ngOnInit(): void {
    this.store.dispatch(SettingsActions.getPayment.started());

    this.subscriptions.push(this.activeRouter.params.pipe(take(1)).subscribe(params => {
      this.store.dispatch(VendorsMobileActions.getById.started(params.id));
    }));
  }
}
