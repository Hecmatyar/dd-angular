import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BaseSubscriber} from "../../../../core/base/base-subscriber";
import {Observable} from "rxjs";
import {ContentLoading} from "../../../../core/interfaces/content-loading";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {ActivatedRoute} from "@angular/router";
import {take} from "rxjs/operators";
import {
  selectMobileVendorContentState,
  selectMobileVendorState
} from "../../../../store/selectors/vendors/mobile-vendors.selector";
import {AdminMobileUserFull} from "../../../../api/dto/AdminMobileUserFull.g";
import {VendorsMobileActions} from "../../../../store/actions/vendors/mobile-vendors.actions";
import {UpdateMobileVendorRequest} from "../../../../core/interfaces/requests/update-mobile-vendor-request";

@Component({
  selector: 'app-mobile-vendors-edit-container',
  templateUrl: './mobile-vendors-edit-container.component.html',
  styleUrls: ['./mobile-vendors-edit-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileVendorsEditContainerComponent extends BaseSubscriber implements OnInit {
  public vendor$: Observable<ContentLoading<AdminMobileUserFull>>;
  public vendorContent$: Observable<AdminMobileUserFull>;

  constructor(
    private store: Store<IAppState>,
    private activeRouter: ActivatedRoute) {
    super();
    this.vendor$ = this.store.select(selectMobileVendorState);
    this.vendorContent$ = this.store.select(selectMobileVendorContentState);
  }

  ngOnInit(): void {
    this.subscriptions.push(this.activeRouter.params.pipe(take(1)).subscribe(params => {
      this.store.dispatch(VendorsMobileActions.getById.started(params.id));
    }));
  }

  onSubmit(form: UpdateMobileVendorRequest): void {
    this.store.dispatch(VendorsMobileActions.update.started(form));
  }
}
