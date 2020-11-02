import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseContainer} from "../../../../core/base/base-container";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {AccessLevel} from "../../../../api/dto/AccessLevel.g";
import {IMobileVendorsState} from "../../../../store/state/vendors/mobile-vendors.state";
import {selectMobileVendorsState} from "../../../../store/selectors/vendors/mobile-vendors.selector";

@Component({
  selector: 'app-mobile-vendors-container',
  templateUrl: './mobile-vendors-container.component.html',
  styleUrls: ['./mobile-vendors-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileVendorsContainerComponent extends BaseContainer {
  mobileVendorsState$: Observable<IMobileVendorsState>;
  detailCredential$: Observable<boolean>;
  editCredential$: Observable<boolean>;
  moreDetailCredential$: Observable<boolean>;
  banCredential$: Observable<boolean>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.mobileVendorsState$ = this.store.select(selectMobileVendorsState);
    [this.detailCredential$,
      this.editCredential$,
      this.moreDetailCredential$,
      this.banCredential$] = this.getCredentials(
      AccessLevel.BulkSalesVendorsDetails,
      AccessLevel.BulkSalesVendorsEdit,
      AccessLevel.UserVendorsMoreDetails,
      AccessLevel.BulkSalesVendorsBlocking);
  }
}
