import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {EntityDto} from "../../../../api/dto/EntityDto.g";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {Select} from "../../../../core/interfaces/select";
import {OrdersActions} from "../../../../store/actions/order/order.actions";

@Component({
  selector: 'app-cards-export',
  templateUrl: './cards-export.component.html',
  styleUrls: ['./cards-export.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsExportComponent {
  @Input() cards: string[];
  @Input() vendorList: EntityDto[];
  @Input() isLoading: boolean;
  @Input() createOrderCredential: boolean;

  selectedVendor: string;

  constructor(private store: Store<IAppState>) {
    this.vendorList = [];
    this.cards = [];
    this.selectedVendor = '';
  }

  onSelectVendor(value: string): void {
    this.selectedVendor = this.vendorList.find(item => item.id === value).id;
  }

  createBulkOrder(): void {
    if (this.selectedVendor && this.cards.length > 0) {
      this.store.dispatch(OrdersActions.createBulkOrder.started({cardIds: this.cards, vendorId: this.selectedVendor}));
    }
  }

  getVendorsList(): Select[] {
    return this.vendorList.map(item => ({key: item.id, value: item.name}));
  }
}
