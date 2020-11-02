import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseContainer} from "../../../../core/base/base-container";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {Observable} from "rxjs";
import {ITransactionState} from "../../../../store/state/transactions.state";
import {selectTransactionsState} from "../../../../store/selectors/transactions.selector";
import {AccessLevel} from "../../../../api/dto/AccessLevel.g";

@Component({
  selector: 'app-transactions-container',
  templateUrl: './transactions-container.component.html',
  styleUrls: ['./transactions-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsContainerComponent extends BaseContainer {
  transactionState$: Observable<ITransactionState>;
  statusCredential$: Observable<boolean>;
  createBulkCredential$: Observable<boolean>;
  createPartnerCredential$: Observable<boolean>;
  createMobileCredential$: Observable<boolean>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.transactionState$ = this.store.select(selectTransactionsState);
    [this.statusCredential$,
      this.createBulkCredential$,
      this.createPartnerCredential$,
      this.createMobileCredential$] = this.getCredentials(AccessLevel.TransactionsStatusChange,
      AccessLevel.TransactionsCreateBulkSell,
      AccessLevel.TransactionsCreatePartners,
      AccessLevel.TransactionsCreateUser);
  }
}
