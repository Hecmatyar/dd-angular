import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseContainer} from "../../../../core/base/base-container";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {AccessLevel} from "../../../../api/dto/AccessLevel.g";
import {selectPartnersVendorsState} from "../../../../store/selectors/vendors/partners-vendors.selector";
import {IPartnersVendorsState} from "../../../../store/state/vendors/partners-vendors.state";

@Component({
  selector: 'app-partners-vendors-container',
  templateUrl: './partners-vendors-container.component.html',
  styleUrls: ['./partners-vendors-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersVendorsContainerComponent extends BaseContainer {
  partnersVendorsState$: Observable<IPartnersVendorsState>;
  detailCredential$: Observable<boolean>;
  editCredential$: Observable<boolean>;
  createCredential$: Observable<boolean>;
  banCredential$: Observable<boolean>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.partnersVendorsState$ = this.store.select(selectPartnersVendorsState);
    [this.detailCredential$,
      this.editCredential$,
      this.createCredential$,
      this.banCredential$] = this.getCredentials(
      AccessLevel.PartnersSalesVendorsDetails,
      AccessLevel.PartnersSalesVendorsEdit,
      AccessLevel.PartnersSalesVendorsCreate,
      AccessLevel.PartnersSalesVendorsBlocking);
  }
}
