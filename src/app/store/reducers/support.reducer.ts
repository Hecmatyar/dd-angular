import {reducerWithInitialState} from "typescript-fsa-reducers";
import {initialSupportState} from "../state/support.state";
import {SupportActions} from "../actions/support.actions";

export const supportReducers = reducerWithInitialState(initialSupportState)
  .case(SupportActions.search.started, state => ({...state, isLoading: true}))
  .case(SupportActions.search.failed, state => ({...state, isLoading: false}))
  .case(SupportActions.search.done, (state, {result}) => ({
    ...state,
    isLoading: false,
    items: result.items,
    totalItems: result.total,
  }))

  .case(SupportActions.getCard.started, state => ({...state, isLoading: true, card: null}))
  .case(SupportActions.getCard.failed, state => ({...state, isLoading: false}))
  .case(SupportActions.getCard.done, (state, {result}) => ({...state, isLoading: false, card: result}))

  .case(SupportActions.setCard.started, state => ({...state, isLoading: true}))
  .case(SupportActions.setCard.failed, state => ({...state, isLoading: false}))
  .case(SupportActions.setCard.done, state => ({...state, isLoading: false, card: null}))

  .case(SupportActions.getBonus.started, state => ({...state, isLoading: true, bonus: null}))
  .case(SupportActions.getBonus.failed, state => ({...state, isLoading: false}))
  .case(SupportActions.getBonus.done, (state, {result}) => ({...state, isLoading: false, bonus: result}))

  .case(SupportActions.setBonus.started, state => ({...state, isLoading: true}))
  .case(SupportActions.setBonus.failed, state => ({...state, isLoading: false}))
  .case(SupportActions.setBonus.done, state => ({...state, isLoading: false, bonus: null}))

  .case(SupportActions.getDiscount.started, state => ({...state, isLoading: true, discount: null}))
  .case(SupportActions.getDiscount.failed, state => ({...state, isLoading: false}))
  .case(SupportActions.getDiscount.done, (state, {result}) => ({...state, isLoading: false, discount: result}))

  .case(SupportActions.setDiscount.started, state => ({...state, isLoading: true}))
  .case(SupportActions.setDiscount.failed, state => ({...state, isLoading: false}))
  .case(SupportActions.setDiscount.done, state => ({...state, isLoading: false, discount: null}))

  .case(SupportActions.getContent.started, state => ({...state, isLoading: true, content: null}))
  .case(SupportActions.getContent.failed, state => ({...state, isLoading: false}))
  .case(SupportActions.getContent.done, (state, {result}) => ({...state, isLoading: false, content: result}))

  .case(SupportActions.setContent.started, state => ({...state, isLoading: true}))
  .case(SupportActions.setContent.failed, state => ({...state, isLoading: false}))
  .case(SupportActions.setContent.done, (state, {result}) => ({...state, isLoading: false, content: result}))
;
