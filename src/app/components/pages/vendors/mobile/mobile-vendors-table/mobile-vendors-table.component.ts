import {ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {BaseTable} from "../../../../../core/base/base-table";
import {IMobileVendorsState, initialMobileVendorsState} from "../../../../../store/state/vendors/mobile-vendors.state";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {Data, Router} from "@angular/router";
import {selectMobileVendorsFilterState} from "../../../../../store/selectors/vendors/mobile-vendors.selector";
import {VendorsMobileActions} from "../../../../../store/actions/vendors/mobile-vendors.actions";
import {AdminMobileUsersRequest} from "../../../../../api/dto/AdminMobileUsersRequest.g";
import {NzModalService} from "ng-zorro-antd";
import {cardListPath, userOrderListPath, userVendorsEdit, userVendorsInfo} from "../../../../../core/path";
import {SellCardStatus} from "../../../../../api/dto/SellCardStatus.g";
import {AdminMobileUserItem} from "../../../../../api/dto/AdminMobileUserItem.g";

@Component({
  selector: 'app-mobile-vendors-table',
  templateUrl: './mobile-vendors-table.component.html',
  styleUrls: ['./mobile-vendors-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileVendorsTableComponent extends BaseTable {
  @Input() state: IMobileVendorsState;
  @Input() detailCredential: boolean;
  @Input() editCredential: boolean;
  @Input() banCredential: boolean;
  @Input() moreDetailCredential: boolean;

  @ViewChild('modalContent') modalContent: TemplateRef<HTMLElement>;

  constructor(
    protected store: Store<IAppState>,
    private router: Router,
    private modalService: NzModalService) {
    super(store);
    this.state = initialMobileVendorsState;
    this.selector = selectMobileVendorsFilterState;
  }

  dispatcher(filter: AdminMobileUsersRequest): void {
    this.store.dispatch(VendorsMobileActions.getList.started(filter));
  }

  async openVendorInfo(id: string): Promise<void> {
    await this.router.navigate([userVendorsInfo(id)]);
  }

  async onEditNavigate(id: string): Promise<void> {
    await this.router.navigate([userVendorsEdit(id)]);
  }

  async onCardsNavigate(item: AdminMobileUserItem): Promise<void> {
    await this.router.navigate([cardListPath], {
      queryParams: {
        sellCardStatuses: [SellCardStatus.Rejected],
        vendorName: item.fullName
      }
    });
  }

  async onOrdersNavigate(query: Data): Promise<void> {
    await this.router.navigate([userOrderListPath], {queryParams: query});
  }

  onBlockUser(vendor: AdminMobileUserItem): void {
    this.modalService.confirm({
      nzTitle: 'Are you sure?',
      nzContent: 'If you block vendor, he will lose something',
      nzOkText: 'Accept',
      nzOnOk: async (): Promise<void> => this.updateUserBlock(vendor)
    });
  }

  updateUserBlock(vendor: AdminMobileUserItem): void {
    vendor.banned
      ? this.store.dispatch(VendorsMobileActions.unBan.started(vendor.id))
      : this.store.dispatch(VendorsMobileActions.ban.started(vendor.id));
  }
}
