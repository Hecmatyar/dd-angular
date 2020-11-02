import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BaseTable} from "../../../../../core/base/base-table";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {Router} from "@angular/router";
import {NzModalService} from "ng-zorro-antd";
import {cardListPath, partnersOrderListPath, partnersVendorsEdit} from "../../../../../core/path";
import {SellCardStatus} from "../../../../../api/dto/SellCardStatus.g";
import {
  initialPartnersVendorsState,
  IPartnersVendorsState
} from "../../../../../store/state/vendors/partners-vendors.state";
import {selectPartnersVendorsFilterState} from "../../../../../store/selectors/vendors/partners-vendors.selector";
import {AdminPartnerUsersRequest} from "../../../../../api/dto/AdminPartnerUsersRequest.g";
import {VendorsPartnersActions} from "../../../../../store/actions/vendors/partners-vendors.actions";
import {AdminPartnerUserItem} from "../../../../../api/dto/AdminPartnerUserItem.g";
import {SellCardType} from "../../../../../api/dto/SellCardType.g";

@Component({
  selector: 'app-partners-vendors-table',
  templateUrl: './partners-vendors-table.component.html',
  styleUrls: ['./partners-vendors-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersVendorsTableComponent extends BaseTable {
  @Input() state: IPartnersVendorsState;
  @Input() detailCredential: boolean;
  @Input() editCredential: boolean;
  @Input() banCredential: boolean;

  cardStatus: typeof SellCardStatus;

  constructor(
    protected store: Store<IAppState>,
    private router: Router,
    private modalService: NzModalService) {
    super(store);
    this.state = initialPartnersVendorsState;
    this.selector = selectPartnersVendorsFilterState;
    this.cardStatus = SellCardStatus;
  }

  dispatcher(filter: AdminPartnerUsersRequest): void {
    this.store.dispatch(VendorsPartnersActions.getList.started(filter));
  }

  async onEditNavigate(id: string): Promise<void> {
    await this.router.navigate([partnersVendorsEdit(id)]);
  }

  async onCardsNavigate(item: AdminPartnerUserItem): Promise<void> {
    await this.router.navigate([cardListPath], {
      queryParams: {
        sellCardStatuses: [SellCardStatus.Rejected],
        vendorName: item.fullName
      }
    });
  }

  async onDebtHoldNavigate(fullName: string, status: SellCardStatus): Promise<void> {
    await this.router.navigate([cardListPath], {
      queryParams: {
        buyerName: fullName,
        sellCardType: SellCardType.PartnersCard,
        sellCardStatuses: [status]
      }
    });
  }

  async onOrdersNavigate(item: AdminPartnerUserItem): Promise<void> {
    await this.router.navigate([partnersOrderListPath], {
      queryParams: {vendor: item.fullName}
    });
  }

  onBlockUser(vendor: AdminPartnerUserItem): void {
    this.modalService.confirm({
      nzTitle: 'Are you sure?',
      nzContent: 'If you block vendor, he will lose something',
      nzOkText: 'Accept',
      nzOnOk: async (): Promise<void> => this.updateUserBlock(vendor)
    });
  }

  updateUserBlock(vendor: AdminPartnerUserItem): void {
    vendor.banned
      ? this.store.dispatch(VendorsPartnersActions.unBan.started(vendor.id))
      : this.store.dispatch(VendorsPartnersActions.ban.started(vendor.id));
  }
}
