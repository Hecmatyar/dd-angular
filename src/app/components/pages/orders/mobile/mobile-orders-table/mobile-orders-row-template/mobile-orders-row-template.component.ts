import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SellCardStatus} from "../../../../../../api/dto/SellCardStatus.g";
import {Data, Router} from "@angular/router";
import {cardListPath, transactionsOrderListPath} from "../../../../../../core/path";
import {AdminMobileOrderDto} from "../../../../../../api/dto/AdminMobileOrderDto.g";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../../store/state/app.state";
import {MobileOrdersActions} from "../../../../../../store/actions/order/mobile-orders.actions";

@Component({
  selector: 'app-mobile-orders-row-template',
  templateUrl: './mobile-orders-row-template.component.html',
  styleUrls: ['./mobile-orders-row-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileOrdersRowTemplateComponent {
  @Input() data: AdminMobileOrderDto;

  cardStatus: typeof SellCardStatus;

  constructor(private router: Router, private store: Store<IAppState>) {
    this.cardStatus = SellCardStatus;
  }

  async onNavigate(status?: SellCardStatus[]): Promise<void> {
    const query: Data = {orderNumber: this.data.number};
    if (status) {
      query["sellCardStatus"] = status;
    }
    await this.navigate(query);
  }

  async onTransactionsHistoryNavigate(): Promise<void> {
    await this.router.navigate([transactionsOrderListPath], {
      queryParams: {
        orderNumber: this.data.number
      }
    });
  }

  onChangeComment(comment: string): void {
    this.store.dispatch(MobileOrdersActions.setComment.started({orderId: this.data.id, request: {text: comment}}));
  }

  private async navigate(query: Data): Promise<void> {
    await this.router.navigate([cardListPath], {
      queryParams: query
    });
  }
}
