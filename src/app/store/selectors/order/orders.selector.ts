import {IAppState} from "../../state/app.state";
import {createSelector} from "@ngrx/store";
import {initialOrdersState, IOrdersState} from "../../state/order/orders.state";

const selectOrders = (state: IAppState): IOrdersState => state.orders || initialOrdersState;

export const selectOrdersState = createSelector(
  selectOrders,
  (state: IOrdersState) => state
);

export const selectOrdersCreateBulkSellState = createSelector(
  selectOrders,
  (state: IOrdersState) => state.order
);
