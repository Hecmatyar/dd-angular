import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BaseSubscriber} from "../../../../core/base/base-subscriber";
import {Observable} from "rxjs";
import {ContentLoading} from "../../../../core/interfaces/content-loading";
import {AdminBulkUserFull} from "../../../../api/dto/AdminBulkUserFull.g";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {ActivatedRoute} from "@angular/router";
import {
  selectBulkVendorContentState,
  selectBulkVendorState
} from "../../../../store/selectors/vendors/bulk-vendors.selector";
import {selectPaymentSettingsState} from "../../../../store/selectors/settings.selector";
import {SettingsActions} from "../../../../store/actions/settings.actions";
import {take} from "rxjs/operators";
import {VendorsBulkActions} from "../../../../store/actions/vendors/bulk-vendors.actions";
import {UpdateBulkVendorRequest} from "../../../../core/interfaces/requests/update-bulk-vendor-request";
import {Select} from "../../../../core/interfaces/select";

@Component({
  selector: 'app-bulk-vendors-edit-container',
  templateUrl: './bulk-vendors-edit-container.component.html',
  styleUrls: ['./bulk-vendors-edit-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulkVendorsEditContainerComponent extends BaseSubscriber implements OnInit {
  public vendor$: Observable<ContentLoading<AdminBulkUserFull>>;
  public vendorContent$: Observable<AdminBulkUserFull>;
  public settingsPayment$: Observable<Select[]>;

  constructor(
    private store: Store<IAppState>,
    private activeRouter: ActivatedRoute) {
    super();
    this.vendor$ = this.store.select(selectBulkVendorState);
    this.vendorContent$ = this.store.select(selectBulkVendorContentState);
    this.settingsPayment$ = this.store.select(selectPaymentSettingsState);
  }

  ngOnInit(): void {
    this.store.dispatch(SettingsActions.getPayment.started());

    this.subscriptions.push(this.activeRouter.params.pipe(take(1)).subscribe(params => {
      this.store.dispatch(VendorsBulkActions.getById.started(params.id));
    }));
  }

  onSubmit(form: UpdateBulkVendorRequest): void {
    this.store.dispatch(VendorsBulkActions.update.started(form));
  }
}
