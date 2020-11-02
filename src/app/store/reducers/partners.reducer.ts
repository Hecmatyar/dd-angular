import {reducerWithInitialState} from "typescript-fsa-reducers";
import {initialPartnersState} from "../state/partners.state";
import {PartnersActions} from "../actions/partners.actions";

export const partnersReducer = reducerWithInitialState(initialPartnersState)
  .case(PartnersActions.verify.started, (state) => ({
    ...state, cards: {isLoading: true, content: state.cards.content}
  }))
  .case(PartnersActions.verify.done, (state, {result}) => ({
    ...state,
    cards: {isLoading: false, content: [...(state.cards.content || []), result]}
  }))
  .case(PartnersActions.verify.failed, (state) => ({
    ...state,
    cards: {isLoading: false, content: state.cards.content}
  }))
  .cases([PartnersActions.verifyBatch.started,
    PartnersActions.verifyFromFile.started], (state) => ({
    ...state,
    cards: {isLoading: true, content: state.cards.content}
  }))
  .cases([PartnersActions.verifyBatch.done,
    PartnersActions.verifyFromFile.done], (state, {result}) => {
    return {
      ...state,
      cards: {isLoading: false, content: result}
    };
  })
  .cases([PartnersActions.verifyBatch.failed,
    PartnersActions.verifyFromFile.failed], (state) => ({
    ...state,
    cards: {isLoading: false, content: state.cards.content}
  }))
  .case(PartnersActions.import.started, (state) => ({
    ...state,
    cards: {isLoading: true, content: state.cards.content}
  }))
  .case(PartnersActions.import.failed, (state) => ({
    ...state,
    cards: {isLoading: false, content: state.cards.content}
  }))
  .cases([PartnersActions.getPaymentMethods.started,
    PartnersActions.getPaymentMethods.failed], (state) => ({
    ...state,
    paymentTypes: {...state.paymentTypes, isLoading: true}
  }))
  .case(PartnersActions.getPaymentMethods.done, (state, {result}) => ({
    ...state,
    paymentTypes: {isLoading: false, content: result}
  }));
