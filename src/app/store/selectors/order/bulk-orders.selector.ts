import {IAppState} from "../../state/app.state";
import {createSelector} from "@ngrx/store";
import {IBulkOrdersState, initialBulkOrdersState} from "../../state/order/bulk-orders.state";

const selectOrders = (state: IAppState): IBulkOrdersState => state.bulkOrders || initialBulkOrdersState;

export const selectBulkOrdersState = createSelector(
  selectOrders,
  (state: IBulkOrdersState) => state
);

export const selectBulkOrdersFilterState = createSelector(
  selectOrders,
  (state: IBulkOrdersState) => state.filter
);
