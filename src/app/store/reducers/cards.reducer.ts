import {initialCardsState} from "../state/cards.state";
import {CardsActions} from "../actions/cards.actions";
import {reducerWithInitialState} from "typescript-fsa-reducers";

export const cardsReducer = reducerWithInitialState(initialCardsState)
  .case(CardsActions.getList.started, (state) => ({...state, items: [], isLoading: true}))
  .cases([CardsActions.setInfo.started,
    CardsActions.setStatus.started,
    CardsActions.setTop.started], (state) => ({...state, isLoading: true}))
  .case(CardsActions.getList.done, (state, {params, result}) => ({
      ...state,
      items: result.items,
      totalItems: result.total,
      filter: params,
      isLoading: false,
    })
  )
  .cases([CardsActions.setStatus.done,
    CardsActions.setTop.done,
    CardsActions.setInfo.done], (state, {result}) => {
    const newItems = state.items.map(item => item.id === result.id ? result : item);

    return {
      ...state,
      items: newItems,
      isLoading: false
    };
  })
  .cases([CardsActions.getList.failed,
    CardsActions.setStatus.failed,
    CardsActions.setTop.failed,
    CardsActions.setInfo.failed], (state) => ({...state, isLoading: false}))
  .case(CardsActions.setComment.started, (state) => ({...state, isLoading: true}))
  .case(CardsActions.setComment.done, (state, {params, result}) => {
    const items = state.items.map(item => {
      if (item.id === params.cardId) {
        item = {...item, comment: result};
      }

      return item;
    });

    return ({...state, isLoading: false, items: items});
  })
  .case(CardsActions.setStatus.failed, (state) => ({...state, isLoading: false}));
