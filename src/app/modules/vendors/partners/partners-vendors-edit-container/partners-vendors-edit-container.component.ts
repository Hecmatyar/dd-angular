import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BaseSubscriber} from "../../../../core/base/base-subscriber";
import {Observable} from "rxjs";
import {ContentLoading} from "../../../../core/interfaces/content-loading";
import {AdminPartnerUserFull} from "../../../../api/dto/AdminPartnerUserFull.g";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {ActivatedRoute} from "@angular/router";
import {
  selectPartnersVendorContentState,
  selectPartnersVendorState
} from "../../../../store/selectors/vendors/partners-vendors.selector";
import {take} from "rxjs/operators";
import {VendorsPartnersActions} from "../../../../store/actions/vendors/partners-vendors.actions";
import {UpdatePartnerVendorRequest} from "../../../../core/interfaces/requests/update-partner-vendor-request";
import {Select} from "../../../../core/interfaces/select";
import {UserType} from "../../../../api/dto/UserType.g";

@Component({
  selector: 'app-partners-vendors-edit-container',
  templateUrl: './partners-vendors-edit-container.component.html',
  styleUrls: ['./partners-vendors-edit-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersVendorsEditContainerComponent extends BaseSubscriber implements OnInit {
  public vendor$: Observable<ContentLoading<AdminPartnerUserFull>>;
  public vendorContent$: Observable<AdminPartnerUserFull>;
  public partnersType: Select[];

  constructor(
    private store: Store<IAppState>,
    private activeRouter: ActivatedRoute) {
    super();
    this.vendor$ = this.store.select(selectPartnersVendorState);
    this.vendorContent$ = this.store.select(selectPartnersVendorContentState);
    this.partnersType = [{
      key: UserType.OnlinePartner,
      value: UserType.OnlinePartner,
    }, {
      key: UserType.OfflinePartner,
      value: UserType.OfflinePartner,
    }];
  }

  ngOnInit(): void {
    this.subscriptions.push(this.activeRouter.params.pipe(take(1)).subscribe(params => {
      this.store.dispatch(VendorsPartnersActions.getById.started(params.id));
    }));
  }

  onSubmit(form: UpdatePartnerVendorRequest): void {
    this.store.dispatch(VendorsPartnersActions.update.started(form));
  }
}
