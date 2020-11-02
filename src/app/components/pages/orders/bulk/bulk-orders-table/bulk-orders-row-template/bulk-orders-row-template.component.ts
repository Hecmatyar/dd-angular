import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Data, Router} from "@angular/router";
import {cardBulkOrderCreate, cardListPath, transactionsOrderListPath} from "../../../../../../core/path";
import {SellCardStatus} from "../../../../../../api/dto/SellCardStatus.g";
import {AdminBulkOrderDto} from "../../../../../../api/dto/AdminBulkOrderDto.g";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../../store/state/app.state";
import {BulkOrdersActions} from "../../../../../../store/actions/order/bulk-orders.actions";
import {OrderStatus} from "../../../../../../api/dto/OrderStatus.g";

@Component({
  selector: 'app-bulk-orders-row-template',
  templateUrl: './bulk-orders-row-template.component.html',
  styleUrls: ['./bulk-orders-row-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulkOrdersRowTemplateComponent {
  @Input() data: AdminBulkOrderDto;

  cardStatus: typeof SellCardStatus;
  orderStatus: typeof OrderStatus;

  constructor(private router: Router, private store: Store<IAppState>) {
    this.cardStatus = SellCardStatus;
    this.orderStatus = OrderStatus;
  }

  async onNavigate(status?: SellCardStatus[]): Promise<void> {
    const query: Data = {orderNumber: this.data.number};
    if (status) {
      query["sellCardStatus"] = status;
    }
    // TODO invalid cards
    await this.navigate(query);
  }

  async onTransactionsHistoryNavigate(): Promise<void> {
    await this.router.navigate([transactionsOrderListPath], {
      queryParams: {
        orderNumber: this.data.number
      }
    });
  }

  async onBulkCreateNavigate(): Promise<void> {
    await this.router.navigate([cardBulkOrderCreate(this.data.id)]);
  }

  private async navigate(query: Data): Promise<void> {
    await this.router.navigate([cardListPath], {
      queryParams: query
    });
  }

  onChangeComment(comment: string): void {
    this.store.dispatch(BulkOrdersActions.setComment.started({orderId: this.data.id, request: {text: comment}}));
  }
}
