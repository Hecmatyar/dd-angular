import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BaseTable} from "../../../../../core/base/base-table";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {Router} from "@angular/router";
import {NzModalService} from "ng-zorro-antd";
import {bulkVendorsEdit, cardListPath, userOrderListPath} from "../../../../../core/path";
import {SellCardStatus} from "../../../../../api/dto/SellCardStatus.g";
import {IBulkVendorsState, initialBulkVendorsState} from "../../../../../store/state/vendors/bulk-vendors.state";
import {selectBulkVendorsFilterState} from "../../../../../store/selectors/vendors/bulk-vendors.selector";
import {AdminBulkUsersRequest} from "../../../../../api/dto/AdminBulkUsersRequest.g";
import {VendorsBulkActions} from "../../../../../store/actions/vendors/bulk-vendors.actions";
import {AdminBulkUserItem} from "../../../../../api/dto/AdminBulkUserItem.g";

@Component({
  selector: 'app-bulk-vendors-table',
  templateUrl: './bulk-vendors-table.component.html',
  styleUrls: ['./bulk-vendors-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulkVendorsTableComponent extends BaseTable {
  @Input() state: IBulkVendorsState;
  @Input() detailCredential: boolean;
  @Input() editCredential: boolean;
  @Input() banCredential: boolean;

  constructor(
    protected store: Store<IAppState>,
    private router: Router,
    private modalService: NzModalService) {
    super(store);
    this.state = initialBulkVendorsState;
    this.selector = selectBulkVendorsFilterState;
  }

  dispatcher(filter: AdminBulkUsersRequest): void {
    this.store.dispatch(VendorsBulkActions.getList.started(filter));
  }

  async onEditNavigate(id: string): Promise<void> {
    await this.router.navigate([bulkVendorsEdit(id)]);
  }

  async onCardsNavigate(item: AdminBulkUserItem): Promise<void> {
    await this.router.navigate([cardListPath], {
      queryParams: {
        sellCardStatuses: [SellCardStatus.Rejected],
        vendorName: item.fullName
      }
    });
  }

  async onOrdersNavigate(item: AdminBulkUserItem): Promise<void> {
    await this.router.navigate([userOrderListPath], {
      queryParams: {vendor: item.fullName}
    });
  }

  onBlockUser(vendor: AdminBulkUserItem): void {
    this.modalService.confirm({
      nzTitle: 'Are you sure?',
      nzContent: 'If you block vendor, he will lose something',
      nzOkText: 'Accept',
      nzOnOk: async (): Promise<void> => this.updateUserBlock(vendor)
    });
  }

  updateUserBlock(vendor: AdminBulkUserItem): void {
    vendor.banned
      ? this.store.dispatch(VendorsBulkActions.unBan.started(vendor.id))
      : this.store.dispatch(VendorsBulkActions.ban.started(vendor.id));
  }
}
