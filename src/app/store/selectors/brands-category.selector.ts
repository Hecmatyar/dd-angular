import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IBrandsCategoryState, initialBrandsCategoryState} from "../state/brands-category.state";

const selectCards = (state: IAppState): IBrandsCategoryState => state.brandsCategories || initialBrandsCategoryState;

export const selectBrandsCategoryState = createSelector(
  selectCards,
  (state: IBrandsCategoryState) => state
);

export const selectBrandsCategoryListState = createSelector(
  selectCards,
  (state: IBrandsCategoryState) => state.categories
);
