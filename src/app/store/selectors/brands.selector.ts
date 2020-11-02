import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IBrandsState, initialBrandsState} from "../state/brands.state";

const selectCards = (state: IAppState): IBrandsState => state.brands || initialBrandsState;

export const selectBrandsState = createSelector(
  selectCards,
  (state: IBrandsState) => state
);

export const selectBrandsListState = createSelector(
  selectCards,
  (state: IBrandsState) => state.items
);

export const selectAllBrandsState = createSelector(
  selectCards,
  (state: IBrandsState) => state.brands
);

export const selectBrandsFilterState = createSelector(
  selectCards,
  (state: IBrandsState) => state.filter
);

export const selectBrandContentState = createSelector(
  selectCards,
  (state: IBrandsState) => state.brand.content
);

export const selectBrandState = createSelector(
  selectCards,
  (state: IBrandsState) => state.brand
);
