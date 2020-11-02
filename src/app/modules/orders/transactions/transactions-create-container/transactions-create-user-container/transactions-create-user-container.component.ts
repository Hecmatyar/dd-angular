import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {Observable} from "rxjs";
import {ContentLoading} from "../../../../../core/interfaces/content-loading";
import {
  selectTransactionsAdditionState,
  selectTransactionsAllowedTypesState
} from "../../../../../store/selectors/transactions.selector";
import {TransactionsActions} from "../../../../../store/actions/transactions.actions";
import {AdminAllowedTransactionTypesDto} from "../../../../../api/dto/AdminAllowedTransactionTypesDto.g";

@Component({
  selector: 'app-transactions-create-user-container',
  templateUrl: './transactions-create-user-container.component.html',
  styleUrls: ['./transactions-create-user-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsCreateUserContainerComponent implements OnInit {
  public transactionTypes$: Observable<ContentLoading<AdminAllowedTransactionTypesDto>>;
  public addTransaction$: Observable<ContentLoading<void>>;

  constructor(protected store: Store<IAppState>) {
    this.transactionTypes$ = this.store.select(selectTransactionsAllowedTypesState);
    this.addTransaction$ = this.store.select(selectTransactionsAdditionState);
  }

  ngOnInit(): void {
    this.store.dispatch(TransactionsActions.getAllowedTypes.started());
  }
}
