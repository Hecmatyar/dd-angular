import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BaseTable} from "../../../../core/base/base-table";
import {IBrandsState, initialBrandsState} from "../../../../store/state/brands.state";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {Router} from "@angular/router";
import {NzModalService} from "ng-zorro-antd";
import {selectBrandsFilterState} from "../../../../store/selectors/brands.selector";
import {SearchBrandRequest} from "../../../../api/dto/SearchBrandRequest.g";
import {BrandsActions} from "../../../../store/actions/brands.actions";
import {AdminBrandShort} from "../../../../api/dto/AdminBrandShort.g";
import {brandEdit} from "../../../../core/path";

@Component({
  selector: 'app-brands-table',
  templateUrl: './brands-table.component.html',
  styleUrls: ['./brands-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandsTableComponent extends BaseTable {
  @Input() state: IBrandsState;
  @Input() setTopCredential: boolean;
  @Input() editCredential: boolean;
  @Input() abilityCredential: boolean;

  constructor(
    protected store: Store<IAppState>,
    private router: Router,
    private modalService: NzModalService) {
    super(store);
    this.state = initialBrandsState;
    this.selector = selectBrandsFilterState;
  }

  dispatcher(filter: SearchBrandRequest): void {
    this.store.dispatch(BrandsActions.getList.started(filter));
  }

  getRelatedBrands(brands: AdminBrandShort): string {
    return brands.relatedBrands.map(item => item.name).join(", ");
  }

  onUrlNavigate(url: string): void {
    const win = window.open(url, '_blank');
    win.focus();
  }

  async onEditNavigate(id: string): Promise<void> {
    await this.router.navigate([brandEdit(id)]);
  }

  onSetAbility(brand: AdminBrandShort): void {
    const text = brand.canBuyCard
      ? "Removing brand from TOP can have irreversible effects."
      : "Return the brand the buy ability";
    this.modalService.confirm({
      nzTitle: 'Are you sure?',
      nzContent: text,
      nzOkText: 'Accept',
      nzOnOk: async (): Promise<void> => this.updateAbility(brand)
    });
  }

  updateAbility(brand: AdminBrandShort): void {
    this.store.dispatch(BrandsActions.setAbility.started({brandId: brand.id, canBuyCard: !brand.canBuyCard}));
  }
}
