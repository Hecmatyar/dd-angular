import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BaseTable} from "../../../../../core/base/base-table";
import {initialTransactionsState, ITransactionState} from "../../../../../store/state/transactions.state";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {Router} from "@angular/router";
import {selectTransactionsFilterState} from "../../../../../store/selectors/transactions.selector";
import {SellCardStatus} from "../../../../../api/dto/SellCardStatus.g";
import {TransactionsActions} from "../../../../../store/actions/transactions.actions";
import {AdminTransactionsFull} from "../../../../../api/dto/AdminTransactionsFull.g";
import {OrderType} from "../../../../../api/dto/OrderType.g";
import {bulkOrderListPath, partnersOrderListPath, userOrderListPath} from "../../../../../core/path";
import {TransactionType} from "../../../../../api/dto/TransactionType.g";
import {SearchTransactionsRequest} from "../../../../../api/dto/SearchTransactionsRequest.g";

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsTableComponent extends BaseTable {
  @Input() state: ITransactionState;
  @Input() statusCredential: boolean;

  transactionType: typeof TransactionType;

  constructor(
    protected store: Store<IAppState>,
    private router: Router) {
    super(store);
    this.state = initialTransactionsState;
    this.selector = selectTransactionsFilterState;
    this.transactionType = TransactionType;
  }

  dispatcher(filter: SearchTransactionsRequest): void {
    this.store.dispatch(TransactionsActions.getList.started(filter));
  }

  updateStatus(newStatus: string, item: AdminTransactionsFull): void {
    this.store.dispatch(TransactionsActions.setStatus.started({
      id: item.id,
      newStatus: SellCardStatus[newStatus],
      type: item.adminTransactionType
    }));
  }

  async orderNavigate(item: AdminTransactionsFull): Promise<void> {
    const path = item.orderType === OrderType.BulkSales ? bulkOrderListPath :
      OrderType.Mobile ? userOrderListPath : partnersOrderListPath;

    await this.router.navigate([path], {
      queryParams: {number: item.orderNumber}
    });
  }
}
