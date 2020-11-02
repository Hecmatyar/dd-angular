import {reducerWithInitialState} from "typescript-fsa-reducers";
import {initialAnalyticsState} from "../state/analytics.state";
import {AnalyticsAction} from "../actions/analytics-actions";

export const analyticsReducer = reducerWithInitialState(initialAnalyticsState)
  .case(AnalyticsAction.getCards.started, (state) => ({...state, cards: {content: null, isLoading: true}}))
  .case(AnalyticsAction.getCards.failed, (state) => ({...state, cards: {content: null, isLoading: false}}))
  .case(AnalyticsAction.getCards.done, (state, {result}) => ({...state, cards: {content: result, isLoading: false}}))
  .case(AnalyticsAction.getOverview.started, (state) => ({...state, overview: {content: null, isLoading: true}}))
  .case(AnalyticsAction.getOverview.failed, (state) => ({...state, overview: {content: null, isLoading: false}}))
  .case(AnalyticsAction.getOverview.done, (state, {result}) => ({
    ...state,
    overview: {content: result, isLoading: false}
  }))
  .case(AnalyticsAction.getBrands.started, (state) => ({...state, isLoading: true, brandsItems: []}))
  .case(AnalyticsAction.getBrands.failed, (state) => ({...state, isLoading: false, brandsItems: []}))
  .case(AnalyticsAction.getBrands.done, (state, {params, result}) => ({
      ...state,
      brandsItems: result.items,
      totalItems: result.total,
      filterBrands: params,
      isLoading: false,
    })
  )
  .case(AnalyticsAction.getValues.started, (state) => ({...state, isLoading: true, valuesItems: []}))
  .case(AnalyticsAction.getValues.failed, (state) => ({...state, isLoading: false, valuesItems: []}))
  .case(AnalyticsAction.getValues.done, (state, {params, result}) => ({
      ...state,
      valuesItems: result.items,
      totalItems: result.total,
      filterValues: params,
      isLoading: false,
    })
  )
  .case(AnalyticsAction.getPartners.started, (state) => ({...state, isLoading: true, partnersItems: []}))
  .case(AnalyticsAction.getPartners.failed, (state) => ({...state, isLoading: false, partnersItems: []}))
  .case(AnalyticsAction.getPartners.done, (state, {params, result}) => ({
      ...state,
      partnersItems: result.items,
      totalItems: result.total,
      filterPartners: params,
      isLoading: false,
    })
  );
