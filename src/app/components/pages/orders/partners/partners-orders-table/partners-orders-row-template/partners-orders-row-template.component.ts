import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SellCardStatus} from "../../../../../../api/dto/SellCardStatus.g";
import {Data, Router} from "@angular/router";
import {cardListPath, transactionsOrderListPath} from "../../../../../../core/path";
import {AdminPartnerOrderDto} from "../../../../../../api/dto/AdminPartnerOrderDto.g";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../../store/state/app.state";
import {PartnerOrdersActions} from "../../../../../../store/actions/order/partners-orders.actions";

@Component({
  selector: 'app-partners-orders-row-template',
  templateUrl: './partners-orders-row-template.component.html',
  styleUrls: ['./partners-orders-row-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersOrdersRowTemplateComponent {
  @Input() data: AdminPartnerOrderDto;

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

  onLoadInvoicePdf(): void {
    //
  }

  onChangeComment(comment: string): void {
    this.store.dispatch(PartnerOrdersActions.setComment.started({orderId: this.data.id, request: {text: comment}}));
  }

  private async navigate(query: Data): Promise<void> {
    await this.router.navigate([cardListPath], {
      queryParams: query
    });
  }
}
