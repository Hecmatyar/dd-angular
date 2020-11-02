import {IAppState} from "../../state/app.state";
import {createSelector} from "@ngrx/store";
import {initialPartnerOrdersState, IPartnerOrdersState} from "../../state/order/partners-orders.state";

const selectOrders = (state: IAppState): IPartnerOrdersState => state.partnerOrders || initialPartnerOrdersState;

export const selectPartnerOrdersState = createSelector(
  selectOrders,
  (state: IPartnerOrdersState) => state
);

export const selectPartnerOrdersFilterState = createSelector(
  selectOrders,
  (state: IPartnerOrdersState) => state.filter
);
