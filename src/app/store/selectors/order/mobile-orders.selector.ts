import {IAppState} from "../../state/app.state";
import {createSelector} from "@ngrx/store";
import {IMobileOrdersState, initialMobileOrdersState} from "../../state/order/mobile-orders.state";

const selectOrders = (state: IAppState): IMobileOrdersState => state.mobileOrders || initialMobileOrdersState;

export const selectMobileOrdersState = createSelector(
  selectOrders,
  (state: IMobileOrdersState) => state
);

export const selectMobileOrdersFilterState = createSelector(
  selectOrders,
  (state: IMobileOrdersState) => state.filter
);
