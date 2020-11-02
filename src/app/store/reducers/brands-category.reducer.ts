import {reducerWithInitialState} from "typescript-fsa-reducers";
import {initialBrandsCategoryState} from "../state/brands-category.state";
import {BrandsCategoryActions} from "../actions/brands-category.actions";

export const brandsCategoryReducer = reducerWithInitialState(initialBrandsCategoryState)
  .case(BrandsCategoryActions.getAll.started, (state) => ({...state, categories: {content: null, isLoading: true}}))
  .case(BrandsCategoryActions.getAll.done, (state, {result}) => ({
    ...state,
    categories: {content: result, isLoading: false}
  }))
  .case(BrandsCategoryActions.getAll.failed, (state) => ({...state, categories: {content: null, isLoading: false}}));
