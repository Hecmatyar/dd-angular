import {IAppState} from "../state/app.state";
import {initialSupportState, ISupportState} from "../state/support.state";
import {createSelector} from "@ngrx/store";

const selectSupport = (state: IAppState) => state.support || initialSupportState;

export const selectSupportFilter = createSelector(
  selectSupport,
  (state: ISupportState) => state.filter
);

export const selectSupportState = createSelector(
  selectSupport,
  (state: ISupportState) => state
);

export const selectLoadingState = createSelector(
  selectSupport,
  (state: ISupportState) => state.isLoading
);

export const selectSupportCardSettings = createSelector(
  selectSupport,
  (state: ISupportState) => state.card
);

export const selectSupportDiscountSettings = createSelector(
  selectSupport,
  (state: ISupportState) => state.discount
);

export const selectSupportBonusSettings = createSelector(
  selectSupport,
  (state: ISupportState) => state.bonus
);

export const selectSupportContentSettings = createSelector(
  selectSupport,
  (state: ISupportState) => state.content
);
