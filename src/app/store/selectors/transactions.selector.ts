import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {initialTransactionsState, ITransactionState} from "../state/transactions.state";

const selectTransactions = (state: IAppState): ITransactionState => state.transactions || initialTransactionsState;

export const selectTransactionsState = createSelector(
  selectTransactions,
  (state: ITransactionState) => state
);

export const selectTransactionsFilterState = createSelector(
  selectTransactions,
  (state: ITransactionState) => state.filter
);

export const selectTransactionsDebtCardsState = createSelector(
  selectTransactions,
  (state: ITransactionState) => state.debtCards
);

export const selectTransactionsAllowedTypesState = createSelector(
  selectTransactions,
  (state: ITransactionState) => state.allowedTypes
);

export const selectTransactionsAdditionState = createSelector(
  selectTransactions,
  (state: ITransactionState) => state.addTransactions
);
