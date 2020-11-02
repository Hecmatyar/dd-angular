import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {ICardsState, initialCardsState} from "../state/cards.state";

const selectCards = (state: IAppState): ICardsState => state.cards || initialCardsState;

export const selectCardsState = createSelector(
  selectCards,
  (state: ICardsState) => state
);

export const selectCardsListState = createSelector(
  selectCards,
  (state: ICardsState) => state.items
);

export const selectCardsFilterState = createSelector(
  selectCards,
  (state: ICardsState) => state.filter
);
