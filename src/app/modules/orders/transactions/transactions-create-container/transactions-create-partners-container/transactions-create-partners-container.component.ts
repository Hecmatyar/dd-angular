import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {BaseContainer} from "../../../../../core/base/base-container";
import {Observable} from "rxjs";
import {ContentLoading} from "../../../../../core/interfaces/content-loading";
import {
  selectTransactionsAdditionState,
  selectTransactionsDebtCardsState
} from "../../../../../store/selectors/transactions.selector";
import {AdminDebtCard} from "../../../../../api/dto/AdminDebtCard.g";

@Component({
  selector: 'app-transactions-create-partners-container',
  templateUrl: './transactions-create-partners-container.component.html',
  styleUrls: ['./transactions-create-partners-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsCreatePartnersContainerComponent extends BaseContainer {
  public addTransaction$: Observable<ContentLoading<void>>;
  public cards$: Observable<ContentLoading<AdminDebtCard[]>>;

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.cards$ = this.store.select(selectTransactionsDebtCardsState);
    this.addTransaction$ = this.store.select(selectTransactionsAdditionState);
  }
}
