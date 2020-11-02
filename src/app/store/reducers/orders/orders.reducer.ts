import {initialOrdersState} from "../../state/order/orders.state";
import {OrdersActions} from "../../actions/order/order.actions";
import {reducerWithInitialState} from "typescript-fsa-reducers";

export const ordersReducer = reducerWithInitialState(initialOrdersState)
  .cases([OrdersActions.createBulkOrder.started,
    OrdersActions.getDraftBulkOrder.started], (state) => ({...state, order: {isLoading: true, content: null}}))
  .cases([OrdersActions.createBulkOrder.done,
    OrdersActions.getDraftBulkOrder.done], (state, {result}) => ({
    ...state,
    order: {isLoading: false, content: result}
  }))
  .cases([OrdersActions.createBulkOrder.failed,
    OrdersActions.getDraftBulkOrder.failed], (state) => ({...state, order: {isLoading: false, content: null}}))
  .cases([OrdersActions.confirmBulkOrder.started,
    OrdersActions.revertBulkOrder.started], (state) => ({
    ...state,
    order: {isLoading: true, content: state.order.content}
  }))
  .cases([OrdersActions.confirmBulkOrder.failed,
    OrdersActions.revertBulkOrder.failed], (state) => ({
    ...state,
    order: {isLoading: false, content: state.order.content}
  }));
