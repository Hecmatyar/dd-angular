import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseContainer} from "../../../../../core/base/base-container";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {Observable} from "rxjs";
import {ContentLoading} from "../../../../../core/interfaces/content-loading";
import {selectTransactionsAdditionState} from "../../../../../store/selectors/transactions.selector";

@Component({
  selector: 'app-transactions-create-bulk-container',
  templateUrl: './transactions-create-bulk-container.component.html',
  styleUrls: ['./transactions-create-bulk-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsCreateBulkContainerComponent extends BaseContainer {
  public addTransaction$: Observable<ContentLoading<void>>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.addTransaction$ = this.store.select(selectTransactionsAdditionState);
  }
}
