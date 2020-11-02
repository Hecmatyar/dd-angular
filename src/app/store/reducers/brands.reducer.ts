import {reducerWithInitialState} from "typescript-fsa-reducers";
import {initialBrandsState} from "../state/brands.state";
import {BrandsActions} from "../actions/brands.actions";

export const brandsReducer = reducerWithInitialState(initialBrandsState)
  .case(BrandsActions.getList.started, (state) => ({...state, items: [], isLoading: true}))
  .case(BrandsActions.getList.done, (state, {params, result}) => ({
      ...state,
      items: result.items,
      totalItems: result.total,
      filter: params,
      isLoading: false
    })
  )
  .case(BrandsActions.getList.failed, (state) => ({...state, isLoading: false}))
  .case(BrandsActions.getById.started, (state) => ({...state, brand: {content: null, isLoading: true}}))
  .case(BrandsActions.getById.done, (state, {result}) => ({
    ...state,
    brand: {content: result, isLoading: false}
  }))
  .case(BrandsActions.getById.failed, (state) => ({...state, brand: {content: null, isLoading: false}}))
  .case(BrandsActions.getAll.started, (state) => ({...state, brand: {content: null, isLoading: true}}))
  .case(BrandsActions.getAll.done, (state, {result}) => ({
    ...state,
    brands: {content: result, isLoading: false}
  }))
  .case(BrandsActions.getAll.failed, (state) => ({...state, brand: {content: null, isLoading: false}}))
  .cases([BrandsActions.setAbility.started,
    BrandsActions.setTopCommission.started], (state) => ({...state, isLoading: true}))
  .cases([BrandsActions.setAbility.failed,
    BrandsActions.setTopCommission.failed], (state) => ({...state, isLoading: false}))
  .cases([BrandsActions.setAbility.done,
    BrandsActions.setTopCommission.done], (state, {params, result}) => {
    const brands = state.items.map(item => {
      return item.id === params.brandId ? result : item;
    });

    return ({...state, items: brands, isLoading: false});
  })
  .cases([BrandsActions.update.started,
    BrandsActions.add.started], (state) => ({...state, brand: {content: state.brand.content, isLoading: true}}))
  .cases([BrandsActions.update.done,
    BrandsActions.update.failed,
    BrandsActions.add.done,
    BrandsActions.add.failed], (state) => ({...state, brand: {content: state.brand.content, isLoading: false}}));
