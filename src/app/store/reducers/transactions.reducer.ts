import {reducerWithInitialState} from "typescript-fsa-reducers";
import {initialTransactionsState} from "../state/transactions.state";
import {TransactionsActions} from "../actions/transactions.actions";

export const transactionsReducer = reducerWithInitialState(initialTransactionsState)
  .case(TransactionsActions.getList.started, (state) => ({...state, items: [], isLoading: true}))
  .case(TransactionsActions.getList.done, (state, {params, result}) => ({
      ...state,
      items: result.items,
      totalItems: result.total,
      filter: params,
      isLoading: false,
    })
  )
  .case(TransactionsActions.getList.failed, (state) => ({...state, isLoading: false}))
  .cases([TransactionsActions.setStatus.started], (state) => ({...state, isLoading: true}))
  .case(TransactionsActions.setStatus.done, (state, {params}) => {
    const newItems = state.items.map(item => {
      if (item.id === params.id) {
        item.status = params.newStatus;
      }

      return item;
    });

    return ({...state, isLoading: false, items: newItems});
  })
  .case(TransactionsActions.setStatus.failed, (state) => ({...state, isLoading: false}))
  .case(TransactionsActions.getAllowedTypes.started, (state) => ({
    ...state,
    allowedTypes: {isLoading: true, content: null}
  }))
  .case(TransactionsActions.getAllowedTypes.done, (state, {result}) => ({
    ...state,
    allowedTypes: {isLoading: false, content: result}
  }))
  .case(TransactionsActions.getAllowedTypes.failed, (state) => ({
    ...state,
    allowedTypes: {isLoading: false, content: null}
  }))
  .case(TransactionsActions.getDebtCards.started, (state) => ({...state, debtCards: {isLoading: true, content: null}}))
  .case(TransactionsActions.getDebtCards.done, (state, {result}) => ({
    ...state,
    debtCards: {isLoading: false, content: result}
  }))
  .case(TransactionsActions.getDebtCards.failed, (state) => ({...state, debtCards: {isLoading: false, content: null}}))
  .cases([TransactionsActions.addMobile.started,
    TransactionsActions.addBulk.started,
    TransactionsActions.addPartner.started,
  ], (state) => ({...state, addTransactions: {isLoading: true, content: null}}))
  .cases([TransactionsActions.addMobile.done,
    TransactionsActions.addBulk.done,
    TransactionsActions.addPartner.done,
  ], (state) => ({...state, addTransactions: {isLoading: false, content: null}}))
  .cases([TransactionsActions.addPartner.failed,
    TransactionsActions.addBulk.failed,
    TransactionsActions.addMobile.failed,
  ], (state) => ({...state, addTransactions: {isLoading: false, content: null}}));
