import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseSubscriber} from "../../../../core/base/base-subscriber";
import {Observable} from "rxjs";
import {ContentLoading} from "../../../../core/interfaces/content-loading";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {AdminPartnerUserFull} from "../../../../api/dto/AdminPartnerUserFull.g";
import {selectPartnersVendorState} from "../../../../store/selectors/vendors/partners-vendors.selector";
import {VendorsPartnersActions} from "../../../../store/actions/vendors/partners-vendors.actions";
import {AddPartnerVendorRequest} from "../../../../core/interfaces/requests/add-partner-vendor-request";
import {Select} from "../../../../core/interfaces/select";
import {UserType} from "../../../../api/dto/UserType.g";

@Component({
  selector: 'app-partners-vendors-create-container',
  templateUrl: './partners-vendors-create-container.component.html',
  styleUrls: ['./partners-vendors-create-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersVendorsCreateContainerComponent extends BaseSubscriber {
  public vendor$: Observable<ContentLoading<AdminPartnerUserFull>>;
  public partnersType: Select[];

  constructor(
    private store: Store<IAppState>) {
    super();
    this.vendor$ = this.store.select(selectPartnersVendorState);
    this.partnersType = [{
      key: UserType.OnlinePartner,
      value: UserType.OnlinePartner,
    }, {
      key: UserType.OfflinePartner,
      value: UserType.OfflinePartner,
    }];
  }

  onSubmit(form: AddPartnerVendorRequest): void {
    this.store.dispatch(VendorsPartnersActions.add.started(form));
  }
}
