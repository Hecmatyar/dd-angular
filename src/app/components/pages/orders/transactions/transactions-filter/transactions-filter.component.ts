import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BaseFilter} from "../../../../../core/base/base-filter";
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {transactionsOrderListPath} from "../../../../../core/path";
import {selectTransactionsFilterState} from "../../../../../store/selectors/transactions.selector";
import {SearchTransactionsRequest} from "../../../../../api/dto/SearchTransactionsRequest.g";
import {TransactionsActions} from "../../../../../store/actions/transactions.actions";
import {TransactionStatus} from "../../../../../api/dto/TransactionStatus.g";
import {Select} from "../../../../../core/interfaces/select";

@Component({
  selector: 'app-transactions-filter',
  templateUrl: './transactions-filter.component.html',
  styleUrls: ['./transactions-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsFilterComponent extends BaseFilter implements OnInit {
  transactionStatus: Select[];

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router
  ) {
    super(fb, store, activatedRouter, router);
    this.selector = selectTransactionsFilterState;
    this.currentUrl = transactionsOrderListPath;
    this.transactionStatus = [];
    this.initialFilter = {
      status: null,
      dateFrom: null,
      dateTo: null,
      orderNumber: null,
      transactionNumber: null
    };
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.transactionStatus = BaseFilter.getSelectableItems<typeof TransactionStatus>(TransactionStatus);
  }

  dispatchFilter(filter: SearchTransactionsRequest): void {
    this.store.dispatch(TransactionsActions.getList.started(filter));
  }
}
